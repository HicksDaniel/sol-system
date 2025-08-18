(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dh={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function GS(){if(Og)return Xo;Og=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var Pg;function VS(){return Pg||(Pg=1,dh.exports=GS()),dh.exports}var Fn=VS(),ph={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function kS(){if(Ig)return le;Ig=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function x(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||M}x.prototype.isReactComponent={},x.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=x.prototype;function I(U,$,vt){this.props=U,this.context=$,this.refs=R,this.updater=vt||M}var L=I.prototype=new v;L.constructor=I,T(L,x.prototype),L.isPureReactComponent=!0;var C=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function F(U,$,vt,St,wt,at){return vt=at.ref,{$$typeof:s,type:U,key:$,ref:vt!==void 0?vt:null,props:at}}function X(U,$){return F(U.type,$,void 0,void 0,void 0,U.props)}function D(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function w(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var P=/\/+/g;function Q(U,$){return typeof U=="object"&&U!==null&&U.key!=null?w(""+U.key):$.toString(36)}function et(){}function lt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(et,et):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ut(U,$,vt,St,wt){var at=typeof U;(at==="undefined"||at==="boolean")&&(U=null);var dt=!1;if(U===null)dt=!0;else switch(at){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(U.$$typeof){case s:case t:dt=!0;break;case _:return dt=U._init,ut(dt(U._payload),$,vt,St,wt)}}if(dt)return wt=wt(U),dt=St===""?"."+Q(U,0):St,C(wt)?(vt="",dt!=null&&(vt=dt.replace(P,"$&/")+"/"),ut(wt,$,vt,"",function(Yt){return Yt})):wt!=null&&(D(wt)&&(wt=X(wt,vt+(wt.key==null||U&&U.key===wt.key?"":(""+wt.key).replace(P,"$&/")+"/")+dt)),$.push(wt)),1;dt=0;var xt=St===""?".":St+":";if(C(U))for(var Ot=0;Ot<U.length;Ot++)St=U[Ot],at=xt+Q(St,Ot),dt+=ut(St,$,vt,at,wt);else if(Ot=y(U),typeof Ot=="function")for(U=Ot.call(U),Ot=0;!(St=U.next()).done;)St=St.value,at=xt+Q(St,Ot++),dt+=ut(St,$,vt,at,wt);else if(at==="object"){if(typeof U.then=="function")return ut(lt(U),$,vt,St,wt);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return dt}function O(U,$,vt){if(U==null)return U;var St=[],wt=0;return ut(U,St,"","",function(at){return $.call(vt,at,wt++)}),St}function K(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var q=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function yt(){}return le.Children={map:O,forEach:function(U,$,vt){O(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return O(U,function(){$++}),$},toArray:function(U){return O(U,function($){return $})||[]},only:function(U){if(!D(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=x,le.Fragment=i,le.Profiler=l,le.PureComponent=I,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(U){return B.H.useMemoCache(U)}},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var St=T({},U.props),wt=U.key,at=void 0;if($!=null)for(dt in $.ref!==void 0&&(at=void 0),$.key!==void 0&&(wt=""+$.key),$)!G.call($,dt)||dt==="key"||dt==="__self"||dt==="__source"||dt==="ref"&&$.ref===void 0||(St[dt]=$[dt]);var dt=arguments.length-2;if(dt===1)St.children=vt;else if(1<dt){for(var xt=Array(dt),Ot=0;Ot<dt;Ot++)xt[Ot]=arguments[Ot+2];St.children=xt}return F(U.type,wt,void 0,void 0,at,St)},le.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},le.createElement=function(U,$,vt){var St,wt={},at=null;if($!=null)for(St in $.key!==void 0&&(at=""+$.key),$)G.call($,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(wt[St]=$[St]);var dt=arguments.length-2;if(dt===1)wt.children=vt;else if(1<dt){for(var xt=Array(dt),Ot=0;Ot<dt;Ot++)xt[Ot]=arguments[Ot+2];wt.children=xt}if(U&&U.defaultProps)for(St in dt=U.defaultProps,dt)wt[St]===void 0&&(wt[St]=dt[St]);return F(U,at,void 0,void 0,null,wt)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:d,render:U}},le.isValidElement=D,le.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:K}},le.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},le.startTransition=function(U){var $=B.T,vt={};B.T=vt;try{var St=U(),wt=B.S;wt!==null&&wt(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(yt,q)}catch(at){q(at)}finally{B.T=$}},le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(U){return B.H.use(U)},le.useActionState=function(U,$,vt){return B.H.useActionState(U,$,vt)},le.useCallback=function(U,$){return B.H.useCallback(U,$)},le.useContext=function(U){return B.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,$){return B.H.useDeferredValue(U,$)},le.useEffect=function(U,$,vt){var St=B.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(U,$)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(U,$,vt){return B.H.useImperativeHandle(U,$,vt)},le.useInsertionEffect=function(U,$){return B.H.useInsertionEffect(U,$)},le.useLayoutEffect=function(U,$){return B.H.useLayoutEffect(U,$)},le.useMemo=function(U,$){return B.H.useMemo(U,$)},le.useOptimistic=function(U,$){return B.H.useOptimistic(U,$)},le.useReducer=function(U,$,vt){return B.H.useReducer(U,$,vt)},le.useRef=function(U){return B.H.useRef(U)},le.useState=function(U){return B.H.useState(U)},le.useSyncExternalStore=function(U,$,vt){return B.H.useSyncExternalStore(U,$,vt)},le.useTransition=function(){return B.H.useTransition()},le.version="19.1.1",le}var zg;function Wd(){return zg||(zg=1,ph.exports=kS()),ph.exports}var Za=Wd(),mh={exports:{}},Wo={},_h={exports:{}},gh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function XS(){return Bg||(Bg=1,function(s){function t(O,K){var q=O.length;O.push(K);t:for(;0<q;){var yt=q-1>>>1,U=O[yt];if(0<l(U,K))O[yt]=K,O[q]=U,q=yt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var K=O[0],q=O.pop();if(q!==K){O[0]=q;t:for(var yt=0,U=O.length,$=U>>>1;yt<$;){var vt=2*(yt+1)-1,St=O[vt],wt=vt+1,at=O[wt];if(0>l(St,q))wt<U&&0>l(at,St)?(O[yt]=at,O[wt]=q,yt=wt):(O[yt]=St,O[vt]=q,yt=vt);else if(wt<U&&0>l(at,q))O[yt]=at,O[wt]=q,yt=wt;else break t}}return K}function l(O,K){var q=O.sortIndex-K.sortIndex;return q!==0?q:O.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,M=!1,T=!1,R=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function C(O){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=O)r(p),K.sortIndex=K.expirationTime,t(m,K);else break;K=i(p)}}function B(O){if(R=!1,C(O),!T)if(i(m)!==null)T=!0,G||(G=!0,Q());else{var K=i(p);K!==null&&ut(B,K.startTime-O)}}var G=!1,F=-1,X=5,D=-1;function w(){return x?!0:!(s.unstable_now()-D<X)}function P(){if(x=!1,G){var O=s.unstable_now();D=O;var K=!0;try{t:{T=!1,R&&(R=!1,I(F),F=-1),M=!0;var q=y;try{e:{for(C(O),g=i(m);g!==null&&!(g.expirationTime>O&&w());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,y=g.priorityLevel;var U=yt(g.expirationTime<=O);if(O=s.unstable_now(),typeof U=="function"){g.callback=U,C(O),K=!0;break e}g===i(m)&&r(m),C(O)}else r(m);g=i(m)}if(g!==null)K=!0;else{var $=i(p);$!==null&&ut(B,$.startTime-O),K=!1}}break t}finally{g=null,y=q,M=!1}K=void 0}}finally{K?Q():G=!1}}}var Q;if(typeof L=="function")Q=function(){L(P)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,lt=et.port2;et.port1.onmessage=P,Q=function(){lt.postMessage(null)}}else Q=function(){v(P,0)};function ut(O,K){F=v(function(){O(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var q=y;y=K;try{return O()}finally{y=q}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=y;y=O;try{return K()}finally{y=q}},s.unstable_scheduleCallback=function(O,K,q){var yt=s.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?yt+q:yt):q=yt,O){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=q+U,O={id:_++,callback:K,priorityLevel:O,startTime:q,expirationTime:U,sortIndex:-1},q>yt?(O.sortIndex=q,t(p,O),i(m)===null&&O===i(p)&&(R?(I(F),F=-1):R=!0,ut(B,q-yt))):(O.sortIndex=U,t(m,O),T||M||(T=!0,G||(G=!0,Q()))),O},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(O){var K=y;return function(){var q=y;y=K;try{return O.apply(this,arguments)}finally{y=q}}}}(gh)),gh}var Fg;function WS(){return Fg||(Fg=1,_h.exports=XS()),_h.exports}var vh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function YS(){if(Hg)return Dn;Hg=1;var s=Wd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Dn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,_)},Dn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Dn.requestFormReset=function(m){r.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.1.1",Dn}var Gg;function qS(){if(Gg)return vh.exports;Gg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),vh.exports=YS(),vh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function jS(){if(Vg)return Wo;Vg=1;var s=WS(),t=Wd(),i=qS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return d(u),e;if(f===o)return d(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var S=!1,b=u.child;b;){if(b===a){S=!0,a=u,o=f;break}if(b===o){S=!0,o=u,a=f;break}b=b.sibling}if(!S){for(b=f.child;b;){if(b===a){S=!0,a=f,o=u;break}if(b===o){S=!0,o=f,a=u;break}b=b.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),P=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case x:return"Profiler";case R:return"StrictMode";case B:return"Suspense";case G:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:lt(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return lt(e(n))}catch{}}return null}var ut=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},yt=[],U=-1;function $(e){return{current:e}}function vt(e){0>U||(e.current=yt[U],yt[U]=null,U--)}function St(e,n){U++,yt[U]=e.current,e.current=n}var wt=$(null),at=$(null),dt=$(null),xt=$(null);function Ot(e,n){switch(St(dt,n),St(at,e),St(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?lg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=lg(n),e=cg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(wt),St(wt,e)}function Yt(){vt(wt),vt(at),vt(dt)}function ie(e){e.memoizedState!==null&&St(xt,e);var n=wt.current,a=cg(n,e.type);n!==a&&(St(at,e),St(wt,a))}function He(e){at.current===e&&(vt(wt),vt(at)),xt.current===e&&(vt(xt),Fo._currentValue=q)}var me=Object.prototype.hasOwnProperty,H=s.unstable_scheduleCallback,Ae=s.unstable_cancelCallback,Kt=s.unstable_shouldYield,Se=s.unstable_requestPaint,Bt=s.unstable_now,Ge=s.unstable_getCurrentPriorityLevel,Ft=s.unstable_ImmediatePriority,oe=s.unstable_UserBlockingPriority,qe=s.unstable_NormalPriority,je=s.unstable_LowPriority,N=s.unstable_IdlePriority,E=s.log,nt=s.unstable_setDisableYieldValue,ft=null,gt=null;function ct(e){if(typeof E=="function"&&nt(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(ft,e)}catch{}}var Pt=Math.clz32?Math.clz32:Wt,At=Math.log,kt=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(At(e)/kt|0)|0}var Mt=256,Lt=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=jt(o):(S&=b,S!==0?u=jt(S):a||(a=b&~e,a!==0&&(u=jt(a))))):(b=o&~f,b!==0?u=jt(b):S!==0?u=jt(S):a||(a=o&~e,a!==0&&(u=jt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Tt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function It(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,n,a,o,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var ht=31-Pt(a),mt=1<<ht;b[ht]=0,z[ht]=-1;var it=tt[ht];if(it!==null)for(tt[ht]=null,ht=0;ht<it.length;ht++){var rt=it[ht];rt!==null&&(rt.lane&=-536870913)}a&=~mt}o!==0&&_t(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Pt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Gt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Pt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ae(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Re(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xe(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:wg(e.type))}function vi(e,n){var a=K.p;try{return K.p=e,n()}finally{K.p=a}}var ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+ln,Ke="__reactProps$"+ln,Ui="__reactContainer$"+ln,Ir="__reactEvents$"+ln,hl="__reactListeners$"+ln,zr="__reactHandles$"+ln,Ks="__reactResources$"+ln,Li="__reactMarker$"+ln;function Br(e){delete e[cn],delete e[Ke],delete e[Ir],delete e[hl],delete e[zr]}function Xi(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ui]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=dg(e);e!==null;){if(a=e[cn])return a;e=dg(e)}return n}e=a,a=e.parentNode}return null}function va(e){if(e=e[cn]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function nr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ya(e){var n=e[Ks];return n||(n=e[Ks]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function an(e){e[Li]=!0}var dl=new Set,pl={};function A(e,n){W(e,n),W(e+"Capture",n)}function W(e,n){for(pl[e]=n,e=0;e<n.length;e++)dl.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},Z={};function bt(e){return me.call(Z,e)?!0:me.call(ot,e)?!1:st.test(e)?Z[e]=!0:(ot[e]=!0,!1)}function Ut(e,n,a){if(bt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function zt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Qt,$t;function Xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+$t}var ue=!1;function Me(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var it=rt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(rt){it=rt}e.call(mt.prototype)}}else{try{throw Error()}catch(rt){it=rt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&it&&typeof rt.stack=="string")return[rt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],b=f[1];if(S&&b){var z=S.split(`
`),tt=b.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===tt.length)for(o=z.length-1,u=tt.length-1;1<=o&&0<=u&&z[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==tt[u]){var ht=`
`+z[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Xt(a):""}function We(e){switch(e.tag){case 26:case 27:case 5:return Xt(e.type);case 16:return Xt("Lazy");case 13:return Xt("Suspense");case 19:return Xt("SuspenseList");case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return Xt("Activity");default:return""}}function Le(e){try{var n="";do n+=We(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Xe(e){var n=Zt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function _e(e){e._valueTracker||(e._valueTracker=Xe(e))}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Zt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function mn(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Be(e,n,a,o,u,f,S,b){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+fe(n)):e.value!==""+fe(n)&&(e.value=""+fe(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?wn(e,S,fe(n)):a!=null?wn(e,S,fe(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+fe(b):e.removeAttribute("name")}function In(e,n,a,o,u,f,S,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+fe(a):"",n=n!=null?""+fe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function wn(e,n,a){n==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Qe(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+fe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+fe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+fe(a):""}function Fr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ut(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=fe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Bv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function cp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&lp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&lp(e,f,n[f])}function fu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return Hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var hu=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,Gr=null;function up(e){var n=va(e);if(n&&(e=n.stateNode)){var a=e[Ke]||null;t:switch(e=n.stateNode,n.type){case"input":if(Be(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Ke]||null;if(!u)throw Error(r(90));Be(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Rn(o)}break t;case"textarea":Sn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(e,!!a.multiple,n,!1)}}}var pu=!1;function fp(e,n,a){if(pu)return e(n,a);pu=!0;try{var o=e(n);return o}finally{if(pu=!1,(Hr!==null||Gr!==null)&&(tc(),Hr&&(n=Hr,e=Gr,Gr=Hr=null,up(n),e)))for(n=0;n<e.length;n++)up(e[n])}}function Qs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Ke]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mu=!1;if(Wi)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){mu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{mu=!1}var Sa=null,_u=null,_l=null;function hp(){if(_l)return _l;var e,n=_u,a=n.length,o,u="value"in Sa?Sa.value:Sa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[f-o];o++);return _l=u.slice(e,1<o?1-o:void 0)}function gl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function dp(){return!1}function kn(e){function n(a,o,u,f,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:dp,this.isPropagationStopped=dp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=kn(ir),$s=_({},ir,{view:0,detail:0}),Gv=kn($s),gu,vu,to,Sl=_({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==to&&(to&&e.type==="mousemove"?(gu=e.screenX-to.screenX,vu=e.screenY-to.screenY):vu=gu=0,to=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),pp=kn(Sl),Vv=_({},Sl,{dataTransfer:0}),kv=kn(Vv),Xv=_({},$s,{relatedTarget:0}),yu=kn(Xv),Wv=_({},ir,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=kn(Wv),qv=_({},ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jv=kn(qv),Zv=_({},ir,{data:0}),mp=kn(Zv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jv[e])?!!n[e]:!1}function Su(){return $v}var ty=_({},$s,{key:function(e){if(e.key){var n=Kv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ey=kn(ty),ny=_({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=kn(ny),iy=_({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),ay=kn(iy),ry=_({},ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=kn(ry),oy=_({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ly=kn(oy),cy=_({},ir,{newState:0,oldState:0}),uy=kn(cy),fy=[9,13,27,32],xu=Wi&&"CompositionEvent"in window,eo=null;Wi&&"documentMode"in document&&(eo=document.documentMode);var hy=Wi&&"TextEvent"in window&&!eo,gp=Wi&&(!xu||eo&&8<eo&&11>=eo),vp=" ",yp=!1;function Sp(e,n){switch(e){case"keyup":return fy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function dy(e,n){switch(e){case"compositionend":return xp(n);case"keypress":return n.which!==32?null:(yp=!0,vp);case"textInput":return e=n.data,e===vp&&yp?null:e;default:return null}}function py(e,n){if(Vr)return e==="compositionend"||!xu&&Sp(e,n)?(e=hp(),_l=_u=Sa=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var my={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!my[e.type]:n==="textarea"}function Ep(e,n,a,o){Hr?Gr?Gr.push(o):Gr=[o]:Hr=o,n=sc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var no=null,io=null;function _y(e){ig(e,0)}function xl(e){var n=nr(e);if(Rn(n))return e}function bp(e,n){if(e==="change")return n}var Tp=!1;if(Wi){var Mu;if(Wi){var Eu="oninput"in document;if(!Eu){var Ap=document.createElement("div");Ap.setAttribute("oninput","return;"),Eu=typeof Ap.oninput=="function"}Mu=Eu}else Mu=!1;Tp=Mu&&(!document.documentMode||9<document.documentMode)}function Rp(){no&&(no.detachEvent("onpropertychange",wp),io=no=null)}function wp(e){if(e.propertyName==="value"&&xl(io)){var n=[];Ep(n,io,e,du(e)),fp(_y,n)}}function gy(e,n,a){e==="focusin"?(Rp(),no=n,io=a,no.attachEvent("onpropertychange",wp)):e==="focusout"&&Rp()}function vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(io)}function yy(e,n){if(e==="click")return xl(n)}function Sy(e,n){if(e==="input"||e==="change")return xl(n)}function xy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:xy;function ao(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!me.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dp(e,n){var a=Cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Cp(a)}}function Up(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Up(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yi(e.document)}return n}function bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var My=Wi&&"documentMode"in document&&11>=document.documentMode,kr=null,Tu=null,ro=null,Au=!1;function Np(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Au||kr==null||kr!==yi(o)||(o=kr,"selectionStart"in o&&bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=sc(Tu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=kr)))}function ar(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xr={animationend:ar("Animation","AnimationEnd"),animationiteration:ar("Animation","AnimationIteration"),animationstart:ar("Animation","AnimationStart"),transitionrun:ar("Transition","TransitionRun"),transitionstart:ar("Transition","TransitionStart"),transitioncancel:ar("Transition","TransitionCancel"),transitionend:ar("Transition","TransitionEnd")},Ru={},Op={};Wi&&(Op=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function rr(e){if(Ru[e])return Ru[e];if(!Xr[e])return e;var n=Xr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Op)return Ru[e]=n[a];return e}var Pp=rr("animationend"),Ip=rr("animationiteration"),zp=rr("animationstart"),Ey=rr("transitionrun"),by=rr("transitionstart"),Ty=rr("transitioncancel"),Bp=rr("transitionend"),Fp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function Si(e,n){Fp.set(e,n),A(n,[e])}var Hp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Hp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Le(n)},Hp.set(e,n),n)}return{value:e,source:n,stack:Le(n)}}var ci=[],Wr=0,Cu=0;function Ml(){for(var e=Wr,n=Cu=Wr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var f=ci[n];if(ci[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}f!==0&&Gp(a,u,f)}}function El(e,n,a,o){ci[Wr++]=e,ci[Wr++]=n,ci[Wr++]=a,ci[Wr++]=o,Cu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Du(e,n,a,o){return El(e,n,a,o),bl(e)}function Yr(e,n){return El(e,null,null,n),bl(e)}function Gp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function bl(e){if(50<Uo)throw Uo=0,zf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var qr={};function Ay(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new Ay(e,n,a,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Vp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,o,u,f){var S=0;if(o=e,typeof e=="function")Uu(e)&&(S=1);else if(typeof e=="string")S=wS(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Qn(31,a,n,u),e.elementType=D,e.lanes=f,e;case T:return sr(a.children,u,f,n);case R:S=8,u|=24;break;case x:return e=Qn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case B:return e=Qn(13,a,n,u),e.elementType=B,e.lanes=f,e;case G:return e=Qn(19,a,n,u),e.elementType=G,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case L:S=10;break t;case I:S=9;break t;case C:S=11;break t;case F:S=14;break t;case X:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Qn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function sr(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Lu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Nu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var jr=[],Zr=0,Al=null,Rl=0,ui=[],fi=0,or=null,qi=1,ji="";function lr(e,n){jr[Zr++]=Rl,jr[Zr++]=Al,Al=e,Rl=n}function kp(e,n,a){ui[fi++]=qi,ui[fi++]=ji,ui[fi++]=or,or=e;var o=qi;e=ji;var u=32-Pt(o)-1;o&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var S=u-u%5;f=(o&(1<<S)-1).toString(32),o>>=S,u-=S,qi=1<<32-Pt(n)+u|a<<u|o,ji=f+e}else qi=1<<f|a<<u|o,ji=e}function Ou(e){e.return!==null&&(lr(e,1),kp(e,1,0))}function Pu(e){for(;e===Al;)Al=jr[--Zr],jr[Zr]=null,Rl=jr[--Zr],jr[Zr]=null;for(;e===or;)or=ui[--fi],ui[fi]=null,ji=ui[--fi],ui[fi]=null,qi=ui[--fi],ui[fi]=null}var zn=null,Je=null,Te=!1,cr=null,Ni=!1,Iu=Error(r(519));function ur(e){var n=Error(r(418,""));throw lo(li(n,e)),Iu}function Xp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[Ke]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)ve(No[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),_e(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Fr(n,o.value,o.defaultValue,o.children),_e(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||og(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=oc),n=!0):n=!1,n||ur(e)}function Wp(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Ni=!1;return;case 27:case 3:Ni=!0;return;default:zn=zn.return}}function so(e){if(e!==zn)return!1;if(!Te)return Wp(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||$f(e.type,e.memoizedProps)),a=!a),a&&Je&&ur(e),Wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=Mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Ia(e.type)?(e=ih,ih=null,Je=e):Je=n):Je=zn?Mi(e.stateNode.nextSibling):null;return!0}function oo(){Je=zn=null,Te=!1}function Yp(){var e=cr;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),cr=null),e}function lo(e){cr===null?cr=[e]:cr.push(e)}var zu=$(null),fr=null,Zi=null;function xa(e,n,a){St(zu,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=zu.current,vt(zu)}function Bu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Fu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Bu(f.return,a,e),o||(S=null);break t}f=b.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Bu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function co(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var b=u.type;Kn(u.pendingProps.value,S.value)||(e!==null?e.push(b):e=[b])}}else if(u===xt.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&Fu(n,e,a,o),n.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hr(e){fr=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return qp(fr,e)}function Cl(e,n){return fr===null&&hr(e),qp(e,n)}function qp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(r(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var Ry=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},wy=s.unstable_scheduleCallback,Cy=s.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Ry,data:new Map,refCount:0}}function uo(e){e.refCount--,e.refCount===0&&wy(Cy,function(){e.controller.abort()})}var fo=null,Gu=0,Kr=0,Qr=null;function Dy(e,n){if(fo===null){var a=fo=[];Gu=0,Kr=Xf(),Qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Gu++,n.then(jp,jp),n}function jp(){if(--Gu===0&&fo!==null){Qr!==null&&(Qr.status="fulfilled");var e=fo;fo=null,Kr=0,Qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Uy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Zp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dy(e,n),Zp!==null&&Zp(e,n)};var dr=$(null);function Vu(){var e=dr.current;return e!==null?e:Ve.pooledCache}function Dl(e,n){n===null?St(dr,dr.current):St(dr,n.pool)}function Kp(){var e=Vu();return e===null?null:{parent:un._currentValue,pool:e}}var ho=Error(r(460)),Qp=Error(r(474)),Ul=Error(r(542)),ku={then:function(){}};function Jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ll(){}function $p(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ll,Ll),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e;default:if(typeof n.status=="string")n.then(Ll,Ll);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,em(e),e}throw po=n,ho}}var po=null;function tm(){if(po===null)throw Error(r(459));var e=po;return po=null,e}function em(e){if(e===ho||e===Ul)throw Error(r(483))}var Ma=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ba(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(we&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=bl(e),Gp(e,null,a),n}return El(e,o,n,a),bl(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gt(e,a)}}function Yu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qu=!1;function _o(){if(qu){var e=Qr;if(e!==null)throw e}}function go(e,n,a,o){qu=!1;var u=e.updateQueue;Ma=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var z=b,tt=z.next;z.next=null,S===null?f=tt:S.next=tt,S=z;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==S&&(b===null?ht.firstBaseUpdate=tt:b.next=tt,ht.lastBaseUpdate=z))}if(f!==null){var mt=u.baseState;S=0,ht=tt=z=null,b=f;do{var it=b.lane&-536870913,rt=it!==b.lane;if(rt?(ye&it)===it:(o&it)===it){it!==0&&it===Kr&&(qu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ee=e,Jt=b;it=n;var Pe=a;switch(Jt.tag){case 1:if(ee=Jt.payload,typeof ee=="function"){mt=ee.call(Pe,mt,it);break t}mt=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Jt.payload,it=typeof ee=="function"?ee.call(Pe,mt,it):ee,it==null)break t;mt=_({},mt,it);break t;case 2:Ma=!0}}it=b.callback,it!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[it]:rt.push(it))}else rt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(tt=ht=rt,z=mt):ht=ht.next=rt,S|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;rt=b,b=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ht===null&&(z=mt),u.baseState=z,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),La|=S,e.lanes=S,e.memoizedState=mt}}function nm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function im(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)nm(a[e],n)}var Jr=$(null),Nl=$(0);function am(e,n){e=ia,St(Nl,e),St(Jr,n),ia=e|n.baseLanes}function ju(){St(Nl,ia),St(Jr,Jr.current)}function Zu(){ia=Nl.current,vt(Jr),vt(Nl)}var Ta=0,de=null,Ne=null,rn=null,Ol=!1,$r=!1,pr=!1,Pl=0,vo=0,ts=null,Ly=0;function en(){throw Error(r(321))}function Ku(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function Qu(e,n,a,o,u,f){return Ta=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Gm:Vm,pr=!1,f=a(o,u),pr=!1,$r&&(f=sm(n,a,o,u)),rm(e),f}function rm(e){O.H=Gl;var n=Ne!==null&&Ne.next!==null;if(Ta=0,rn=Ne=de=null,Ol=!1,vo=0,ts=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&wl(e)&&(_n=!0))}function sm(e,n,a,o){de=e;var u=0;do{if($r&&(ts=null),vo=0,$r=!1,25<=u)throw Error(r(301));if(u+=1,rn=Ne=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Fy,f=n(a,o)}while($r);return f}function Ny(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),n}function Ju(){var e=Pl!==0;return Pl=0,e}function $u(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function tf(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}Ta=0,rn=Ne=de=null,$r=!1,vo=Pl=0,ts=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?de.memoizedState=rn=e:rn=rn.next=e,rn}function sn(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=rn===null?de.memoizedState:rn.next;if(n!==null)rn=n,Ne=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},rn===null?de.memoizedState=rn=e:rn=rn.next=e}return rn}function ef(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=vo;return vo+=1,ts===null&&(ts=[]),e=$p(ts,e,n),n=de,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Gm:Vm),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===L)return Cn(e)}throw Error(r(438,String(e)))}function nf(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ef(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Qi(e,n){return typeof n=="function"?n(e):n}function zl(e){var n=sn();return af(n,Ne,e)}function af(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=S=null,z=null,tt=n,ht=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(ye&mt)===mt:(Ta&mt)===mt){var it=tt.revertLane;if(it===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===Kr&&(ht=!0);else if((Ta&it)===it){tt=tt.next,it===Kr&&(ht=!0);continue}else mt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(b=z=mt,S=f):z=z.next=mt,de.lanes|=it,La|=it;mt=tt.action,pr&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else it={lane:mt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(b=z=it,S=f):z=z.next=it,de.lanes|=mt,La|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(z===null?S=f:z.next=b,!Kn(f,e.memoizedState)&&(_n=!0,ht&&(a=Qr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=z,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function rf(e){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Kn(f,n.memoizedState)||(_n=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function om(e,n,a){var o=de,u=sn(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Kn((Ne||u).memoizedState,a);S&&(u.memoizedState=a,_n=!0),u=u.queue;var b=um.bind(null,o,u,e);if(So(2048,8,b,[e]),u.getSnapshot!==n||S||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,es(9,Bl(),cm.bind(null,o,u,a,n),null),Ve===null)throw Error(r(349));f||(Ta&124)!==0||lm(o,n,a)}return a}function lm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=ef(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function cm(e,n,a,o){n.value=a,n.getSnapshot=o,fm(n)&&hm(e)}function um(e,n,a){return a(function(){fm(n)&&hm(e)})}function fm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function hm(e){var n=Yr(e,2);n!==null&&ni(n,e,2)}function sf(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),pr){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},n}function dm(e,n,a,o){return e.baseState=a,af(e,Ne,typeof o=="function"?o:Qi)}function Oy(e,n,a,o,u){if(Hl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,pm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function pm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,S={};O.T=S;try{var b=a(u,o),z=O.S;z!==null&&z(S,b),mm(e,n,b)}catch(tt){of(e,n,tt)}finally{O.T=f}}else try{f=a(u,o),mm(e,n,f)}catch(tt){of(e,n,tt)}}function mm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){_m(e,n,o)},function(o){return of(e,n,o)}):_m(e,n,a)}function _m(e,n,a){n.status="fulfilled",n.value=a,gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,pm(e,a)))}function of(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}e.action=null}function gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vm(e,n){return n}function ym(e,n){if(Te){var a=Ve.formState;if(a!==null){t:{var o=de;if(Te){if(Je){e:{for(var u=Je,f=Ni;u.nodeType!==8;){if(!f){u=null;break e}if(u=Mi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Je=Mi(u.nextSibling),o=u.data==="F!";break t}}ur(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=o,a=Bm.bind(null,de,o),o.dispatch=a,o=sf(!1),f=hf.bind(null,de,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Oy.bind(null,de,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Sm(e){var n=sn();return xm(n,Ne,e)}function xm(e,n,a){if(n=af(e,n,vm)[0],e=zl(Qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(S){throw S===ho?Ul:S}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,es(9,Bl(),Py.bind(null,u,a),null)),[o,f,e]}function Py(e,n){e.action=n}function Mm(e){var n=sn(),a=Ne;if(a!==null)return xm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function es(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=de.updateQueue,n===null&&(n=ef(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Bl(){return{destroy:void 0,resource:void 0}}function Em(){return sn().memoizedState}function Fl(e,n,a,o){var u=Xn();o=o===void 0?null:o,de.flags|=e,u.memoizedState=es(1|n,Bl(),a,o)}function So(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ne!==null&&o!==null&&Ku(o,Ne.memoizedState.deps)?u.memoizedState=es(n,f,a,o):(de.flags|=e,u.memoizedState=es(1|n,f,a,o))}function bm(e,n){Fl(8390656,8,e,n)}function Tm(e,n){So(2048,8,e,n)}function Am(e,n){return So(4,2,e,n)}function Rm(e,n){return So(4,4,e,n)}function wm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cm(e,n,a){a=a!=null?a.concat([e]):null,So(4,4,wm.bind(null,n,e),a)}function lf(){}function Dm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Ku(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Um(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Ku(n,o[1]))return o[0];if(o=e(),pr){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function cf(e,n,a){return a===void 0||(Ta&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=O_(),de.lanes|=e,La|=e,a)}function Lm(e,n,a,o){return Kn(a,n)?a:Jr.current!==null?(e=cf(e,a,o),Kn(e,n)||(_n=!0),e):(Ta&42)===0?(_n=!0,e.memoizedState=a):(e=O_(),de.lanes|=e,La|=e,n)}function Nm(e,n,a,o,u){var f=K.p;K.p=f!==0&&8>f?f:8;var S=O.T,b={};O.T=b,hf(e,!1,n,a);try{var z=u(),tt=O.S;if(tt!==null&&tt(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ht=Uy(z,o);xo(e,n,ht,ei(e))}else xo(e,n,o,ei(e))}catch(mt){xo(e,n,{then:function(){},status:"rejected",reason:mt},ei())}finally{K.p=f,O.T=S}}function Iy(){}function uf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Om(e).queue;Nm(e,u,n,q,a===null?Iy:function(){return Pm(e),a(o)})}function Om(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Pm(e){var n=Om(e).next.queue;xo(e,n,{},ei())}function ff(){return Cn(Fo)}function Im(){return sn().memoizedState}function zm(){return sn().memoizedState}function zy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ea(a);var o=ba(n,e,a);o!==null&&(ni(o,n,a),mo(o,n,a)),n={cache:Hu()},e.payload=n;return}n=n.return}}function By(e,n,a){var o=ei();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(e)?Fm(n,a):(a=Du(e,n,a,o),a!==null&&(ni(a,e,o),Hm(a,n,o)))}function Bm(e,n,a){var o=ei();xo(e,n,a,o)}function xo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(e))Fm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,b=f(S,a);if(u.hasEagerState=!0,u.eagerState=b,Kn(b,S))return El(e,n,u,0),Ve===null&&Ml(),!1}catch{}finally{}if(a=Du(e,n,u,o),a!==null)return ni(a,e,o),Hm(a,n,o),!0}return!1}function hf(e,n,a,o){if(o={lane:2,revertLane:Xf(),action:o,hasEagerState:!1,eagerState:null,next:null},Hl(e)){if(n)throw Error(r(479))}else n=Du(e,a,o,2),n!==null&&ni(n,e,2)}function Hl(e){var n=e.alternate;return e===de||n!==null&&n===de}function Fm(e,n){$r=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Hm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Gt(e,a)}}var Gl={readContext:Cn,use:Il,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},Gm={readContext:Cn,use:Il,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:bm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fl(4194308,4,wm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fl(4194308,4,e,n)},useInsertionEffect:function(e,n){Fl(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var o=e();if(pr){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(pr){ct(!0);try{a(n)}finally{ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=By.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=sf(e);var n=e.queue,a=Bm.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:lf,useDeferredValue:function(e,n){var a=Xn();return cf(a,e,n)},useTransition:function(){var e=sf(!1);return e=Nm.bind(null,de,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=de,u=Xn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(ye&124)!==0||lm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,bm(um.bind(null,o,f,e),[e]),o.flags|=2048,es(9,Bl(),cm.bind(null,o,f,a,n),null),a},useId:function(){var e=Xn(),n=Ve.identifierPrefix;if(Te){var a=ji,o=qi;a=(o&~(1<<32-Pt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ly++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:ff,useFormState:ym,useActionState:ym,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=hf.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:nf,useCacheRefresh:function(){return Xn().memoizedState=zy.bind(null,de)}},Vm={readContext:Cn,use:Il,useCallback:Dm,useContext:Cn,useEffect:Tm,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Um,useReducer:zl,useRef:Em,useState:function(){return zl(Qi)},useDebugValue:lf,useDeferredValue:function(e,n){var a=sn();return Lm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=zl(Qi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:om,useId:Im,useHostTransitionStatus:ff,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=sn();return dm(a,Ne,e,n)},useMemoCache:nf,useCacheRefresh:zm},Fy={readContext:Cn,use:Il,useCallback:Dm,useContext:Cn,useEffect:Tm,useImperativeHandle:Cm,useInsertionEffect:Am,useLayoutEffect:Rm,useMemo:Um,useReducer:rf,useRef:Em,useState:function(){return rf(Qi)},useDebugValue:lf,useDeferredValue:function(e,n){var a=sn();return Ne===null?cf(a,e,n):Lm(a,Ne.memoizedState,e,n)},useTransition:function(){var e=rf(Qi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:om,useId:Im,useHostTransitionStatus:ff,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=sn();return Ne!==null?dm(a,Ne,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:zm},ns=null,Mo=0;function Vl(e){var n=Mo;return Mo+=1,ns===null&&(ns=[]),$p(ns,e,n)}function Eo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===g?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function km(e){var n=e._init;return n(e._payload)}function Xm(e){function n(j,V){if(e){var J=j.deletions;J===null?(j.deletions=[V],j.flags|=16):J.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=Yi(j,V),j.index=0,j.sibling=null,j}function f(j,V,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<V?(j.flags|=67108866,V):J):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function S(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function b(j,V,J,pt){return V===null||V.tag!==6?(V=Lu(J,j.mode,pt),V.return=j,V):(V=u(V,J),V.return=j,V)}function z(j,V,J,pt){var Ht=J.type;return Ht===T?ht(j,V,J.props.children,pt,J.key):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&km(Ht)===V.type)?(V=u(V,J.props),Eo(V,J),V.return=j,V):(V=Tl(J.type,J.key,J.props,null,j.mode,pt),Eo(V,J),V.return=j,V)}function tt(j,V,J,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Nu(J,j.mode,pt),V.return=j,V):(V=u(V,J.children||[]),V.return=j,V)}function ht(j,V,J,pt,Ht){return V===null||V.tag!==7?(V=sr(J,j.mode,pt,Ht),V.return=j,V):(V=u(V,J),V.return=j,V)}function mt(j,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Lu(""+V,j.mode,J),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return J=Tl(V.type,V.key,V.props,null,j.mode,J),Eo(J,V),J.return=j,J;case M:return V=Nu(V,j.mode,J),V.return=j,V;case X:var pt=V._init;return V=pt(V._payload),mt(j,V,J)}if(ut(V)||Q(V))return V=sr(V,j.mode,J,null),V.return=j,V;if(typeof V.then=="function")return mt(j,Vl(V),J);if(V.$$typeof===L)return mt(j,Cl(j,V),J);kl(j,V)}return null}function it(j,V,J,pt){var Ht=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Ht!==null?null:b(j,V,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===Ht?z(j,V,J,pt):null;case M:return J.key===Ht?tt(j,V,J,pt):null;case X:return Ht=J._init,J=Ht(J._payload),it(j,V,J,pt)}if(ut(J)||Q(J))return Ht!==null?null:ht(j,V,J,pt,null);if(typeof J.then=="function")return it(j,V,Vl(J),pt);if(J.$$typeof===L)return it(j,V,Cl(j,J),pt);kl(j,J)}return null}function rt(j,V,J,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,b(V,j,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case y:return j=j.get(pt.key===null?J:pt.key)||null,z(V,j,pt,Ht);case M:return j=j.get(pt.key===null?J:pt.key)||null,tt(V,j,pt,Ht);case X:var pe=pt._init;return pt=pe(pt._payload),rt(j,V,J,pt,Ht)}if(ut(pt)||Q(pt))return j=j.get(J)||null,ht(V,j,pt,Ht,null);if(typeof pt.then=="function")return rt(j,V,J,Vl(pt),Ht);if(pt.$$typeof===L)return rt(j,V,J,Cl(V,pt),Ht);kl(V,pt)}return null}function ee(j,V,J,pt){for(var Ht=null,pe=null,qt=V,te=V=0,vn=null;qt!==null&&te<J.length;te++){qt.index>te?(vn=qt,qt=null):vn=qt.sibling;var Ee=it(j,qt,J[te],pt);if(Ee===null){qt===null&&(qt=vn);break}e&&qt&&Ee.alternate===null&&n(j,qt),V=f(Ee,V,te),pe===null?Ht=Ee:pe.sibling=Ee,pe=Ee,qt=vn}if(te===J.length)return a(j,qt),Te&&lr(j,te),Ht;if(qt===null){for(;te<J.length;te++)qt=mt(j,J[te],pt),qt!==null&&(V=f(qt,V,te),pe===null?Ht=qt:pe.sibling=qt,pe=qt);return Te&&lr(j,te),Ht}for(qt=o(qt);te<J.length;te++)vn=rt(qt,j,te,J[te],pt),vn!==null&&(e&&vn.alternate!==null&&qt.delete(vn.key===null?te:vn.key),V=f(vn,V,te),pe===null?Ht=vn:pe.sibling=vn,pe=vn);return e&&qt.forEach(function(Ga){return n(j,Ga)}),Te&&lr(j,te),Ht}function Jt(j,V,J,pt){if(J==null)throw Error(r(151));for(var Ht=null,pe=null,qt=V,te=V=0,vn=null,Ee=J.next();qt!==null&&!Ee.done;te++,Ee=J.next()){qt.index>te?(vn=qt,qt=null):vn=qt.sibling;var Ga=it(j,qt,Ee.value,pt);if(Ga===null){qt===null&&(qt=vn);break}e&&qt&&Ga.alternate===null&&n(j,qt),V=f(Ga,V,te),pe===null?Ht=Ga:pe.sibling=Ga,pe=Ga,qt=vn}if(Ee.done)return a(j,qt),Te&&lr(j,te),Ht;if(qt===null){for(;!Ee.done;te++,Ee=J.next())Ee=mt(j,Ee.value,pt),Ee!==null&&(V=f(Ee,V,te),pe===null?Ht=Ee:pe.sibling=Ee,pe=Ee);return Te&&lr(j,te),Ht}for(qt=o(qt);!Ee.done;te++,Ee=J.next())Ee=rt(qt,j,te,Ee.value,pt),Ee!==null&&(e&&Ee.alternate!==null&&qt.delete(Ee.key===null?te:Ee.key),V=f(Ee,V,te),pe===null?Ht=Ee:pe.sibling=Ee,pe=Ee);return e&&qt.forEach(function(HS){return n(j,HS)}),Te&&lr(j,te),Ht}function Pe(j,V,J,pt){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var Ht=J.key;V!==null;){if(V.key===Ht){if(Ht=J.type,Ht===T){if(V.tag===7){a(j,V.sibling),pt=u(V,J.props.children),pt.return=j,j=pt;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===X&&km(Ht)===V.type){a(j,V.sibling),pt=u(V,J.props),Eo(pt,J),pt.return=j,j=pt;break t}a(j,V);break}else n(j,V);V=V.sibling}J.type===T?(pt=sr(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=Tl(J.type,J.key,J.props,null,j.mode,pt),Eo(pt,J),pt.return=j,j=pt)}return S(j);case M:t:{for(Ht=J.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(j,V.sibling),pt=u(V,J.children||[]),pt.return=j,j=pt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}pt=Nu(J,j.mode,pt),pt.return=j,j=pt}return S(j);case X:return Ht=J._init,J=Ht(J._payload),Pe(j,V,J,pt)}if(ut(J))return ee(j,V,J,pt);if(Q(J)){if(Ht=Q(J),typeof Ht!="function")throw Error(r(150));return J=Ht.call(J),Jt(j,V,J,pt)}if(typeof J.then=="function")return Pe(j,V,Vl(J),pt);if(J.$$typeof===L)return Pe(j,V,Cl(j,J),pt);kl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(j,V.sibling),pt=u(V,J),pt.return=j,j=pt):(a(j,V),pt=Lu(J,j.mode,pt),pt.return=j,j=pt),S(j)):a(j,V)}return function(j,V,J,pt){try{Mo=0;var Ht=Pe(j,V,J,pt);return ns=null,Ht}catch(qt){if(qt===ho||qt===Ul)throw qt;var pe=Qn(29,qt,null,j.mode);return pe.lanes=pt,pe.return=j,pe}finally{}}}var is=Xm(!0),Wm=Xm(!1),hi=$(null),Oi=null;function Aa(e){var n=e.alternate;St(fn,fn.current&1),St(hi,e),Oi===null&&(n===null||Jr.current!==null||n.memoizedState!==null)&&(Oi=e)}function Ym(e){if(e.tag===22){if(St(fn,fn.current),St(hi,e),Oi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Oi=e)}}else Ra()}function Ra(){St(fn,fn.current),St(hi,hi.current)}function Ji(e){vt(hi),Oi===e&&(Oi=null),vt(fn)}var fn=$(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||nh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function df(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var pf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),u=Ea(o);u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(ni(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),u=Ea(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ba(e,u,o),n!==null&&(ni(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=Ea(a);o.tag=2,n!=null&&(o.callback=n),n=ba(e,o,a),n!==null&&(ni(n,e,a),mo(n,e,a))}};function qm(e,n,a,o,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,f):!0}function jm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&pf.enqueueReplaceState(n,n.state,null)}function mr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zm(e){Wl(e)}function Km(e){console.error(e)}function Qm(e){Wl(e)}function Yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Jm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(e,n)},a}function $m(e){return e=Ea(e),e.tag=3,e}function t_(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Jm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Jm(n,a,o),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Hy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&co(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 13:return Oi===null?Ff():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ku?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Gf(e,o,u)),!1;case 22:return a.flags|=65536,o===ku?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Gf(e,o,u)),!1}throw Error(r(435,a.tag))}return Gf(e,o,u),Ff(),!1}if(Te)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Iu&&(e=Error(r(422),{cause:o}),lo(li(e,a)))):(o!==Iu&&(n=Error(r(423),{cause:o}),lo(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=mf(e.stateNode,o,u),Yu(e,u),$e!==4&&($e=2)),!1;var f=Error(r(520),{cause:o});if(f=li(f,a),Do===null?Do=[f]:Do.push(f),$e!==4&&($e=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=mf(a.stateNode,o,e),Yu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Na===null||!Na.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$m(u),t_(u,e,a,o),Yu(a,u),!1}a=a.return}while(a!==null);return!1}var e_=Error(r(461)),_n=!1;function xn(e,n,a,o){n.child=e===null?Wm(n,null,a,o):is(n,e.child,a,o)}function n_(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var b in o)b!=="ref"&&(S[b]=o[b])}else S=o;return hr(n),o=Qu(e,n,a,S,f,u),b=Ju(),e!==null&&!_n?($u(e,n,u),$i(e,n,u)):(Te&&b&&Ou(n),n.flags|=1,xn(e,n,o,u),n.child)}function i_(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,a_(e,n,f,o,u)):(e=Tl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ef(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(S,o)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Yi(f,o),e.ref=n.ref,e.return=n,n.child=e}function a_(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(ao(f,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=f,Ef(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,$i(e,n,u)}return _f(e,n,a,o,u)}function r_(e,n,a){var o=n.pendingProps,u=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(u=n.child=e.child,f=0;u!==null;)f=f|u.lanes|u.childLanes,u=u.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return s_(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?am(n,f):ju(),Ym(n);else return n.lanes=n.childLanes=536870912,s_(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Dl(n,f.cachePool),am(n,f),Ra(),n.memoizedState=null):(e!==null&&Dl(n,null),ju(),Ra());return xn(e,n,u,a),n.child}function s_(e,n,a,o){var u=Vu();return u=u===null?null:{parent:un._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Dl(n,null),ju(),Ym(n),e!==null&&co(e,n,o,!0),null}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function _f(e,n,a,o,u){return hr(n),a=Qu(e,n,a,o,void 0,u),o=Ju(),e!==null&&!_n?($u(e,n,u),$i(e,n,u)):(Te&&o&&Ou(n),n.flags|=1,xn(e,n,a,u),n.child)}function o_(e,n,a,o,u,f){return hr(n),n.updateQueue=null,a=sm(n,o,a,u),rm(e),o=Ju(),e!==null&&!_n?($u(e,n,f),$i(e,n,f)):(Te&&o&&Ou(n),n.flags|=1,xn(e,n,a,f),n.child)}function l_(e,n,a,o,u){if(hr(n),n.stateNode===null){var f=qr,S=a.contextType;typeof S=="object"&&S!==null&&(f=Cn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Xu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Cn(S):qr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(df(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&pf.enqueueReplaceState(f,f.state,null),go(n,o,f,u),_o(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,z=mr(a,b);f.props=z;var tt=f.context,ht=a.contextType;S=qr,typeof ht=="object"&&ht!==null&&(S=Cn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==S)&&jm(n,f,o,S),Ma=!1;var it=n.memoizedState;f.state=it,go(n,o,f,u),_o(),tt=n.memoizedState,b||it!==tt||Ma?(typeof mt=="function"&&(df(n,a,mt,o),tt=n.memoizedState),(z=Ma||qm(n,a,z,o,it,tt,S))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=S,o=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Wu(e,n),S=n.memoizedProps,ht=mr(a,S),f.props=ht,mt=n.pendingProps,it=f.context,tt=a.contextType,z=qr,typeof tt=="object"&&tt!==null&&(z=Cn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==mt||it!==z)&&jm(n,f,o,z),Ma=!1,it=n.memoizedState,f.state=it,go(n,o,f,u),_o();var rt=n.memoizedState;S!==mt||it!==rt||Ma||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof b=="function"&&(df(n,a,b,o),rt=n.memoizedState),(ht=Ma||qm(n,a,ht,o,it,rt,z)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),f.props=o,f.state=rt,f.context=z,o=ht):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ql(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=is(n,e.child,null,u),n.child=is(n,null,a,u)):xn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=$i(e,n,u),e}function c_(e,n,a,o){return oo(),n.flags|=256,xn(e,n,a,o),n.child}var gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vf(e){return{baseLanes:e,cachePool:Kp()}}function yf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function u_(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Aa(n):Ra(),Te){var b=Je,z;if(z=b){t:{for(z=b,b=Ni;z.nodeType!==8;){if(!b){b=null;break t}if(z=Mi(z.nextSibling),z===null){b=null;break t}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:or!==null?{id:qi,overflow:ji}:null,retryLane:536870912,hydrationErrors:null},z=Qn(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,zn=n,Je=null,z=!0):z=!1}z||ur(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return nh(b)?n.lanes=32:n.lanes=536870912,null;Ji(n)}return b=o.children,o=o.fallback,u?(Ra(),u=n.mode,b=jl({mode:"hidden",children:b},u),o=sr(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=vf(a),u.childLanes=yf(e,S,a),n.memoizedState=gf,o):(Aa(n),Sf(n,b))}if(z=e.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(Aa(n),n.flags&=-257,n=xf(e,n,a)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),u=o.fallback,b=n.mode,o=jl({mode:"visible",children:o.children},b),u=sr(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,is(n,e.child,null,a),o=n.child,o.memoizedState=vf(a),o.childLanes=yf(e,S,a),n.memoizedState=gf,n=u);else if(Aa(n),nh(b)){if(S=b.nextSibling&&b.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(r(419)),o.stack="",o.digest=S,lo({value:o,source:null,stack:null}),n=xf(e,n,a)}else if(_n||co(e,n,a,!1),S=(a&e.childLanes)!==0,_n||S){if(S=Ve,S!==null&&(o=a&-a,o=(o&42)!==0?1:ae(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Yr(e,o),ni(S,e,o),e_;b.data==="$?"||Ff(),n=xf(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,Je=Mi(b.nextSibling),zn=n,Te=!0,cr=null,Ni=!1,e!==null&&(ui[fi++]=qi,ui[fi++]=ji,ui[fi++]=or,qi=e.id,ji=e.overflow,or=n),n=Sf(n,o.children),n.flags|=4096);return n}return u?(Ra(),u=o.fallback,b=n.mode,z=e.child,tt=z.sibling,o=Yi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,tt!==null?u=Yi(tt,u):(u=sr(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=e.child.memoizedState,b===null?b=vf(a):(z=b.cachePool,z!==null?(tt=un._currentValue,z=z.parent!==tt?{parent:tt,pool:tt}:z):z=Kp(),b={baseLanes:b.baseLanes|a,cachePool:z}),u.memoizedState=b,u.childLanes=yf(e,S,a),n.memoizedState=gf,o):(Aa(n),a=e.child,e=a.sibling,a=Yi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Sf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function xf(e,n,a){return is(n,e.child,null,a),e=Sf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function f_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Bu(e.return,n,a)}function Mf(e,n,a,o,u){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=u)}function h_(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;if(xn(e,n,o.children,a),o=fn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&f_(e,a,n);else if(e.tag===19)f_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(fn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,f);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Mf(n,!0,a,null,f);break;case"together":Mf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),La|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(co(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Yi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Yi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function Gy(e,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),xa(n,un,e.memoizedState.cache),oo();break;case 27:case 5:ie(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?u_(e,n,a):(Aa(n),e=$i(e,n,a),e!==null?e.sibling:null);Aa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(co(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return h_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(fn,fn.current),o)break;return null;case 22:case 23:return n.lanes=0,r_(e,n,a);case 24:xa(n,un,e.memoizedState.cache)}return $i(e,n,a)}function d_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Ef(e,a)&&(n.flags&128)===0)return _n=!1,Gy(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Te&&(n.flags&1048576)!==0&&kp(n,Rl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Uu(o)?(e=mr(o,e),n.tag=1,n=l_(null,n,o,e,a)):(n.tag=0,n=_f(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===C){n.tag=11,n=n_(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=i_(null,n,o,e,a);break t}}throw n=lt(o)||o,Error(r(306,n,""))}}return n;case 0:return _f(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=mr(o,n.pendingProps),l_(e,n,o,u,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Wu(e,n),go(n,o,null,a);var S=n.memoizedState;if(o=S.cache,xa(n,un,o),o!==f.cache&&Fu(n,[un],a,!0),_o(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=c_(e,n,o,a);break t}else if(o!==u){u=li(Error(r(424)),n),lo(u),n=c_(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Mi(e.firstChild),zn=n,Te=!0,cr=null,Ni=!0,a=Wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(oo(),o===u){n=$i(e,n,a);break t}xn(e,n,o,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,o=lc(dt.current).createElement(a),o[cn]=n,o[Ke]=e,En(o,a,e),an(o),n.stateNode=o):n.memoizedState=gg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ie(n),e===null&&Te&&(o=n.stateNode=pg(n.type,n.pendingProps,dt.current),zn=n,Ni=!0,u=Je,Ia(n.type)?(ih=u,Je=Mi(o.firstChild)):Je=u),xn(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=Je)&&(o=mS(o,n.type,n.pendingProps,Ni),o!==null?(n.stateNode=o,zn=n,Je=Mi(o.firstChild),Ni=!1,u=!0):u=!1),u||ur(n)),ie(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,$f(u,f)?o=null:S!==null&&$f(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=Qu(e,n,Ny,null,null,a),Fo._currentValue=u),ql(e,n),xn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=Je)&&(a=_S(a,n.pendingProps,Ni),a!==null?(n.stateNode=a,zn=n,Je=null,e=!0):e=!1),e||ur(n)),null;case 13:return u_(e,n,a);case 4:return Ot(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=is(n,null,o,a):xn(e,n,o,a),n.child;case 11:return n_(e,n,n.type,n.pendingProps,a);case 7:return xn(e,n,n.pendingProps,a),n.child;case 8:return xn(e,n,n.pendingProps.children,a),n.child;case 12:return xn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),xn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=Cn(u),o=o(u),n.flags|=1,xn(e,n,o,a),n.child;case 14:return i_(e,n,n.type,n.pendingProps,a);case 15:return a_(e,n,n.type,n.pendingProps,a);case 19:return h_(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Yi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return r_(e,n,a);case 24:return hr(n),o=Cn(un),e===null?(u=Vu(),u===null&&(u=Ve,f=Hu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Xu(n),xa(n,un,u)):((e.lanes&a)!==0&&(Wu(e,n),go(n,null,null,a),_o()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,un,o)):(o=f.cache,xa(n,un,o),o!==u.cache&&Fu(n,[un],a,!0))),xn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ta(e){e.flags|=4}function p_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mg(n)){if(n=hi.current,n!==null&&((ye&4194048)===ye?Oi!==null:(ye&62914560)!==ye&&(ye&536870912)===0||n!==Oi))throw po=ku,Qp;e.flags|=8192}}function Zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Tt():536870912,e.lanes|=n,os|=n)}function bo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Vy(e,n,a){var o=n.pendingProps;switch(Pu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(un),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(so(n)?ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(ta(n),a!==null?(Ze(n),p_(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ta(n),Ze(n),p_(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&ta(n),Ze(n),n.flags&=-16777217),null;case 27:He(n),a=dt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=wt.current,so(n)?Xp(n):(e=pg(u,o,a),n.stateNode=e,ta(n))}return Ze(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=wt.current,so(n))Xp(n);else{switch(u=lc(dt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[cn]=n,e[Ke]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ta(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=dt.current,so(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||og(e.nodeValue,a)),e||ur(n)}else e=lc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=so(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else oo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Yp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Ji(n),n):(Ji(n),null)}if(Ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),Ze(n),null;case 4:return Yt(),e===null&&jf(n.stateNode.containerInfo),Ze(n),null;case 10:return Ki(n.type),Ze(n),null;case 19:if(vt(fn),u=n.memoizedState,u===null)return Ze(n),null;if(o=(n.flags&128)!==0,f=u.rendering,f===null)if(o)bo(u,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Xl(e),f!==null){for(n.flags|=128,bo(u,!1),e=f.updateQueue,n.updateQueue=e,Zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Vp(a,e),a=a.sibling;return St(fn,fn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Bt()>Jl&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Xl(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Zl(n,e),bo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!f.alternate&&!Te)return Ze(n),null}else 2*Bt()-u.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304);u.isBackwards?(f.sibling=n.child,n.child=f):(e=u.last,e!==null?e.sibling=f:n.child=f,u.last=f)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Bt(),n.sibling=null,e=fn.current,St(fn,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return Ji(n),Zu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(un),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ky(e,n){switch(Pu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(un),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(Ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));oo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(fn),null;case 4:return Yt(),null;case 10:return Ki(n.type),null;case 22:case 23:return Ji(n),Zu(),e!==null&&vt(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(un),null;case 25:return null;default:return null}}function m_(e,n){switch(Pu(n),n.tag){case 3:Ki(un),Yt();break;case 26:case 27:case 5:He(n);break;case 4:Yt();break;case 13:Ji(n);break;case 19:vt(fn);break;case 10:Ki(n.type);break;case 22:case 23:Ji(n),Zu(),e!==null&&vt(dr);break;case 24:Ki(un)}}function To(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==u)}}catch(b){Fe(n,n.return,b)}}function wa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var S=o.inst,b=S.destroy;if(b!==void 0){S.destroy=void 0,u=n;var z=a,tt=b;try{tt()}catch(ht){Fe(u,z,ht)}}}o=o.next}while(o!==f)}}catch(ht){Fe(n,n.return,ht)}}function __(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{im(n,a)}catch(o){Fe(e,e.return,o)}}}function g_(e,n,a){a.props=mr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function Ao(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Fe(e,n,u)}}function Pi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Fe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,n,u)}else a.current=null}function v_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function bf(e,n,a){try{var o=e.stateNode;uS(o,e.type,a,n),o[Ke]=n}catch(u){Fe(e,e.return,u)}}function y_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||y_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=oc));else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function Kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Kl(e,n,a),e=e.sibling;e!==null;)Kl(e,n,a),e=e.sibling}function S_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,o,a),n[cn]=e,n[Ke]=a}catch(f){Fe(e,e.return,f)}}var ea=!1,nn=!1,Rf=!1,x_=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Xy(e,n){if(e=e.containerInfo,Qf=pc,e=Lp(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,b=-1,z=-1,tt=0,ht=0,mt=e,it=null;e:for(;;){for(var rt;mt!==a||u!==0&&mt.nodeType!==3||(b=S+u),mt!==f||o!==0&&mt.nodeType!==3||(z=S+o),mt.nodeType===3&&(S+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)it=mt,mt=rt;for(;;){if(mt===e)break e;if(it===a&&++tt===u&&(b=S),it===f&&++ht===o&&(z=S),(rt=mt.nextSibling)!==null)break;mt=it,it=mt.parentNode}mt=rt}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jf={focusedElem:e,selectionRange:a},pc=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ee=mr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Fe(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)eh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function M_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(e,a),o&4&&To(5,a);break;case 1:if(Ca(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Fe(a,a.return,S)}else{var u=mr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Fe(a,a.return,S)}}o&64&&__(a),o&512&&Ao(a,a.return);break;case 3:if(Ca(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{im(e,n)}catch(S){Fe(a,a.return,S)}}break;case 27:n===null&&o&4&&S_(a);case 26:case 5:Ca(e,a),n===null&&o&4&&v_(a),o&512&&Ao(a,a.return);break;case 12:Ca(e,a);break;case 13:Ca(e,a),o&4&&T_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$y.bind(null,a),gS(e,a))));break;case 22:if(o=a.memoizedState!==null||ea,!o){n=n!==null&&n.memoizedState!==null||nn,u=ea;var f=nn;ea=o,(nn=n)&&!f?Da(e,a,(a.subtreeFlags&8772)!==0):Ca(e,a),ea=u,nn=f}break;case 30:break;default:Ca(e,a)}}function E_(e){var n=e.alternate;n!==null&&(e.alternate=null,E_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Br(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Wn=!1;function na(e,n,a){for(a=a.child;a!==null;)b_(e,n,a),a=a.sibling}function b_(e,n,a){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:nn||Pi(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Pi(a,n);var o=Ye,u=Wn;Ia(a.type)&&(Ye=a.stateNode,Wn=!1),na(e,n,a),Po(a.stateNode),Ye=o,Wn=u;break;case 5:nn||Pi(a,n);case 6:if(o=Ye,u=Wn,Ye=null,na(e,n,a),Ye=o,Wn=u,Ye!==null)if(Wn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Fe(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Fe(a,n,f)}break;case 18:Ye!==null&&(Wn?(e=Ye,hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ko(e)):hg(Ye,a.stateNode));break;case 4:o=Ye,u=Wn,Ye=a.stateNode.containerInfo,Wn=!0,na(e,n,a),Ye=o,Wn=u;break;case 0:case 11:case 14:case 15:nn||wa(2,a,n),nn||wa(4,a,n),na(e,n,a);break;case 1:nn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&g_(a,n,o)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,na(e,n,a),nn=o;break;default:na(e,n,a)}}function T_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ko(e)}catch(a){Fe(n,n.return,a)}}function Wy(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new x_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new x_),n;default:throw Error(r(435,e.tag))}}function wf(e,n){var a=Wy(e);n.forEach(function(o){var u=tS.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,S=n,b=S;t:for(;b!==null;){switch(b.tag){case 27:if(Ia(b.type)){Ye=b.stateNode,Wn=!1;break t}break;case 5:Ye=b.stateNode,Wn=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,Wn=!0;break t}b=b.return}if(Ye===null)throw Error(r(160));b_(f,S,u),Ye=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)A_(n,e),n=n.sibling}var xi=null;function A_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),$n(e),o&4&&(wa(3,e,e.return),To(3,e),wa(5,e,e.return));break;case 1:Jn(n,e),$n(e),o&512&&(nn||a===null||Pi(a,a.return)),o&64&&ea&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=xi;if(Jn(n,e),$n(e),o&512&&(nn||a===null||Pi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Li]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,o,a),f[cn]=e,an(f),o=f;break t;case"link":var S=Sg("link","href",u).get(o+(a.href||""));if(S){for(var b=0;b<S.length;b++)if(f=S[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(b,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;case"meta":if(S=Sg("meta","content",u).get(o+(a.content||""))){for(b=0;b<S.length;b++)if(f=S[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(b,1);break e}}f=u.createElement(o),En(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[cn]=e,an(f),o=f}e.stateNode=o}else xg(u,e.type,e.stateNode);else e.stateNode=yg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?xg(u,e.type,e.stateNode):yg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&bf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,e),$n(e),o&512&&(nn||a===null||Pi(a,a.return)),a!==null&&o&4&&bf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,e),$n(e),o&512&&(nn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(rt){Fe(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,bf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Rf=!0);break;case 6:if(Jn(n,e),$n(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){Fe(e,e.return,rt)}}break;case 3:if(fc=null,u=xi,xi=cc(n.containerInfo),Jn(n,e),xi=u,$n(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(n.containerInfo)}catch(rt){Fe(e,e.return,rt)}Rf&&(Rf=!1,R_(e));break;case 4:o=xi,xi=cc(e.stateNode.containerInfo),Jn(n,e),$n(e),xi=o;break;case 12:Jn(n,e),$n(e);break;case 13:Jn(n,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Of=Bt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wf(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,tt=ea,ht=nn;if(ea=tt||u,nn=ht||z,Jn(n,e),nn=ht,ea=tt,$n(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ea||nn||_r(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{b=z.stateNode;var mt=z.memoizedProps.style,it=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(rt){Fe(z,z.return,rt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(rt){Fe(z,z.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,wf(e,a))));break;case 19:Jn(n,e),$n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,wf(e,o)));break;case 30:break;case 21:break;default:Jn(n,e),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(y_(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Tf(e);Kl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(Vn(S,""),a.flags&=-33);var b=Tf(e);Kl(e,b,S);break;case 3:case 4:var z=a.stateNode.containerInfo,tt=Tf(e);Af(e,tt,z);break;default:throw Error(r(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function R_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;R_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ca(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M_(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:wa(4,n,n.return),_r(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&g_(n,n.return,a),_r(n);break;case 27:Po(n.stateNode);case 26:case 5:Pi(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function Da(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Da(u,f,a),To(4,f);break;case 1:if(Da(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Fe(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)nm(z[u],b)}catch(tt){Fe(o,o.return,tt)}}a&&S&64&&__(f),Ao(f,f.return);break;case 27:S_(f);case 26:case 5:Da(u,f,a),a&&o===null&&S&4&&v_(f),Ao(f,f.return);break;case 12:Da(u,f,a);break;case 13:Da(u,f,a),a&&S&4&&T_(u,f);break;case 22:f.memoizedState===null&&Da(u,f,a),Ao(f,f.return);break;case 30:break;default:Da(u,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&uo(a))}function Df(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e))}function Ii(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w_(e,n,a,o),n=n.sibling}function w_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ii(e,n,a,o),u&2048&&To(9,n);break;case 1:Ii(e,n,a,o);break;case 3:Ii(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&uo(e)));break;case 12:if(u&2048){Ii(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,b=f.onPostCommit;typeof b=="function"&&b(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Fe(n,n.return,z)}}else Ii(e,n,a,o);break;case 13:Ii(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ii(e,n,a,o):Ro(e,n):f._visibility&2?Ii(e,n,a,o):(f._visibility|=2,as(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Cf(S,n);break;case 24:Ii(e,n,a,o),u&2048&&Df(n.alternate,n);break;default:Ii(e,n,a,o)}}function as(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,b=a,z=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:as(f,S,b,z,u),To(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?as(f,S,b,z,u):Ro(f,S):(ht._visibility|=2,as(f,S,b,z,u)),u&&tt&2048&&Cf(S.alternate,S);break;case 24:as(f,S,b,z,u),u&&tt&2048&&Df(S.alternate,S);break;default:as(f,S,b,z,u)}n=n.sibling}}function Ro(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Cf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Df(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var wo=8192;function rs(e){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)C_(e),e=e.sibling}function C_(e){switch(e.tag){case 26:rs(e),e.flags&wo&&e.memoizedState!==null&&DS(xi,e.memoizedState,e.memoizedProps);break;case 5:rs(e);break;case 3:case 4:var n=xi;xi=cc(e.stateNode.containerInfo),rs(e),xi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=wo,wo=16777216,rs(e),wo=n):rs(e));break;default:rs(e)}}function D_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,L_(o,e)}D_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)U_(e),e=e.sibling}function U_(e){switch(e.tag){case 0:case 11:case 15:Co(e),e.flags&2048&&wa(9,e,e.return);break;case 3:Co(e);break;case 12:Co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):Co(e);break;default:Co(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,L_(o,e)}D_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:wa(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function L_(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var u=o.sibling,f=o.return;if(E_(o),o===a){gn=null;break t}if(u!==null){u.return=f,gn=u;break t}gn=f}}}var Yy={getCacheForType:function(e){var n=Cn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},qy=typeof WeakMap=="function"?WeakMap:Map,we=0,Ve=null,ge=null,ye=0,Ce=0,ti=null,Ua=!1,ss=!1,Uf=!1,ia=0,$e=0,La=0,gr=0,Lf=0,di=0,os=0,Do=null,Yn=null,Nf=!1,Of=0,Jl=1/0,$l=null,Na=null,Mn=0,Oa=null,ls=null,cs=0,Pf=0,If=null,N_=null,Uo=0,zf=null;function ei(){if((we&2)!==0&&ye!==0)return ye&-ye;if(O.T!==null){var e=Kr;return e!==0?e:Xf()}return xe()}function O_(){di===0&&(di=(ye&536870912)===0||Te?k():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ni(e,n,a){(e===Ve&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(us(e,0),Pa(e,ye,di,!1)),It(e,a),((we&2)===0||e!==Ve)&&(e===Ve&&((we&2)===0&&(gr|=a),$e===4&&Pa(e,ye,di,!1)),zi(e))}function P_(e,n,a){if((we&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),u=o?Ky(e,n):Hf(e,n,!0),f=o;do{if(u===0){ss&&!o&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!jy(a)){u=Hf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var b=e;u=Do;var z=b.current.memoizedState.isDehydrated;if(z&&(us(b,S).flags|=256),S=Hf(b,S,!1),S!==2){if(Uf&&!z){b.errorRecoveryDisabledLanes|=f,gr|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){us(e,0),Pa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Pa(o,n,di,!Ua);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Of+300-Bt(),10<u)){if(Pa(o,n,di,!Ua),Vt(o,0,!0)!==0)break t;o.timeoutHandle=ug(I_.bind(null,o,a,Yn,$l,Nf,n,di,gr,os,Ua,f,2,-0,0),u);break t}I_(o,a,Yn,$l,Nf,n,di,gr,os,Ua,f,0,-0,0)}}break}while(!0);zi(e)}function I_(e,n,a,o,u,f,S,b,z,tt,ht,mt,it,rt){if(e.timeoutHandle=-1,mt=n.subtreeFlags,(mt&8192||(mt&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:CS},C_(n),mt=US(),mt!==null)){e.cancelPendingCommit=mt(k_.bind(null,e,n,f,a,o,u,S,b,z,ht,1,it,rt)),Pa(e,f,S,!tt);return}k_(e,n,f,a,o,u,S,b,z)}function jy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,o){n&=~Lf,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),S=1<<f;o[f]=-1,u&=~S}a!==0&&_t(e,a,n)}function tc(){return(we&6)===0?(Lo(0),!1):!0}function Bf(){if(ge!==null){if(Ce===0)var e=ge.return;else e=ge,Zi=fr=null,tf(e),ns=null,Mo=0,e=ge;for(;e!==null;)m_(e.alternate,e),e=e.return;ge=null}}function us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Bf(),Ve=e,ge=a=Yi(e.current,null),ye=n,Ce=0,ti=null,Ua=!1,ss=Ct(e,n),Uf=!1,os=di=Lf=gr=La=$e=0,Yn=Do=null,Nf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Pt(o),f=1<<u;n|=e[u],o&=~f}return ia=n,Ml(),a}function z_(e,n){de=null,O.H=Gl,n===ho||n===Ul?(n=tm(),Ce=3):n===Qp?(n=tm(),Ce=4):Ce=n===e_?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ge===null&&($e=1,Yl(e,li(n,e.current)))}function B_(){var e=O.H;return O.H=Gl,e===null?Gl:e}function F_(){var e=O.A;return O.A=Yy,e}function Ff(){$e=4,Ua||(ye&4194048)!==ye&&hi.current!==null||(ss=!0),(La&134217727)===0&&(gr&134217727)===0||Ve===null||Pa(Ve,ye,di,!1)}function Hf(e,n,a){var o=we;we|=2;var u=B_(),f=F_();(Ve!==e||ye!==n)&&($l=null,us(e,n)),n=!1;var S=$e;t:do try{if(Ce!==0&&ge!==null){var b=ge,z=ti;switch(Ce){case 8:Bf(),S=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var tt=Ce;if(Ce=0,ti=null,fs(e,b,z,tt),a&&ss){S=0;break t}break;default:tt=Ce,Ce=0,ti=null,fs(e,b,z,tt)}}Zy(),S=$e;break}catch(ht){z_(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Zi=fr=null,we=o,O.H=u,O.A=f,ge===null&&(Ve=null,ye=0,Ml()),S}function Zy(){for(;ge!==null;)H_(ge)}function Ky(e,n){var a=we;we|=2;var o=B_(),u=F_();Ve!==e||ye!==n?($l=null,Jl=Bt()+500,us(e,n)):ss=Ct(e,n);t:do try{if(Ce!==0&&ge!==null){n=ge;var f=ti;e:switch(Ce){case 1:Ce=0,ti=null,fs(e,n,f,1);break;case 2:case 9:if(Jp(f)){Ce=0,ti=null,G_(n);break}n=function(){Ce!==2&&Ce!==9||Ve!==e||(Ce=7),zi(e)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:Jp(f)?(Ce=0,ti=null,G_(n)):(Ce=0,ti=null,fs(e,n,f,7));break;case 5:var S=null;switch(ge.tag){case 26:S=ge.memoizedState;case 5:case 27:var b=ge;if(!S||Mg(S)){Ce=0,ti=null;var z=b.sibling;if(z!==null)ge=z;else{var tt=b.return;tt!==null?(ge=tt,ec(tt)):ge=null}break e}}Ce=0,ti=null,fs(e,n,f,5);break;case 6:Ce=0,ti=null,fs(e,n,f,6);break;case 8:Bf(),$e=6;break t;default:throw Error(r(462))}}Qy();break}catch(ht){z_(e,ht)}while(!0);return Zi=fr=null,O.H=o,O.A=u,we=a,ge!==null?0:(Ve=null,ye=0,Ml(),$e)}function Qy(){for(;ge!==null&&!Kt();)H_(ge)}function H_(e){var n=d_(e.alternate,e,ia);e.memoizedProps=e.pendingProps,n===null?ec(e):ge=n}function G_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=o_(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=o_(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:tf(n);default:m_(a,n),n=ge=Vp(n,ia),n=d_(a,n,ia)}e.memoizedProps=e.pendingProps,n===null?ec(e):ge=n}function fs(e,n,a,o){Zi=fr=null,tf(n),ns=null,Mo=0;var u=n.return;try{if(Hy(e,u,n,a,ye)){$e=1,Yl(e,li(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;$e=1,Yl(e,li(a,e.current)),ge=null;return}n.flags&32768?(Te||o===1?e=!0:ss||(ye&536870912)!==0?e=!1:(Ua=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),V_(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){V_(n,Ua);return}e=n.return;var a=Vy(n.alternate,n,ia);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);$e===0&&($e=5)}function V_(e,n){do{var a=ky(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);$e=6,ge=null}function k_(e,n,a,o,u,f,S,b,z){e.cancelPendingCommit=null;do nc();while(Mn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Cu,Et(e,a,f,S,b,z),e===Ve&&(ge=Ve=null,ye=0),ls=n,Oa=e,cs=a,Pf=f,If=u,N_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,eS(qe,function(){return j_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=K.p,K.p=2,S=we,we|=4;try{Xy(e,n,a)}finally{we=S,K.p=u,O.T=o}}Mn=1,X_(),W_(),Y_()}}function X_(){if(Mn===1){Mn=0;var e=Oa,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=K.p;K.p=2;var u=we;we|=4;try{A_(n,e);var f=Jf,S=Lp(e.containerInfo),b=f.focusedElem,z=f.selectionRange;if(S!==b&&b&&b.ownerDocument&&Up(b.ownerDocument.documentElement,b)){if(z!==null&&bu(b)){var tt=z.start,ht=z.end;if(ht===void 0&&(ht=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(ht,b.value.length);else{var mt=b.ownerDocument||document,it=mt&&mt.defaultView||window;if(it.getSelection){var rt=it.getSelection(),ee=b.textContent.length,Jt=Math.min(z.start,ee),Pe=z.end===void 0?Jt:Math.min(z.end,ee);!rt.extend&&Jt>Pe&&(S=Pe,Pe=Jt,Jt=S);var j=Dp(b,Jt),V=Dp(b,Pe);if(j&&V&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var J=mt.createRange();J.setStart(j.node,j.offset),rt.removeAllRanges(),Jt>Pe?(rt.addRange(J),rt.extend(V.node,V.offset)):(J.setEnd(V.node,V.offset),rt.addRange(J))}}}}for(mt=[],rt=b;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<mt.length;b++){var pt=mt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}pc=!!Qf,Jf=Qf=null}finally{we=u,K.p=o,O.T=a}}e.current=n,Mn=2}}function W_(){if(Mn===2){Mn=0;var e=Oa,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=K.p;K.p=2;var u=we;we|=4;try{M_(e,n.alternate,n)}finally{we=u,K.p=o,O.T=a}}Mn=3}}function Y_(){if(Mn===4||Mn===3){Mn=0,Se();var e=Oa,n=ls,a=cs,o=N_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,ls=Oa=null,q_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Na=null),Re(a),n=n.stateNode,gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=K.p,K.p=2,O.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var b=o[S];f(b.value,{componentStack:b.stack})}}finally{O.T=n,K.p=u}}(cs&3)!==0&&nc(),zi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===zf?Uo++:(Uo=0,zf=e):Uo=0,Lo(0)}}function q_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,uo(n)))}function nc(e){return X_(),W_(),Y_(),j_()}function j_(){if(Mn!==5)return!1;var e=Oa,n=Pf;Pf=0;var a=Re(cs),o=O.T,u=K.p;try{K.p=32>a?32:a,O.T=null,a=If,If=null;var f=Oa,S=cs;if(Mn=0,ls=Oa=null,cs=0,(we&6)!==0)throw Error(r(331));var b=we;if(we|=4,U_(f.current),w_(f,f.current,S,a),we=b,Lo(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{K.p=u,O.T=o,q_(e,n)}}function Z_(e,n,a){n=li(a,n),n=mf(e.stateNode,n,2),e=ba(e,n,2),e!==null&&(It(e,2),zi(e))}function Fe(e,n,a){if(e.tag===3)Z_(e,e,a);else for(;n!==null;){if(n.tag===3){Z_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){e=li(a,e),a=$m(2),o=ba(n,a,2),o!==null&&(t_(a,o,n,e),It(o,2),zi(o));break}}n=n.return}}function Gf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new qy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Uf=!0,u.add(a),e=Jy.bind(null,e,n,a),n.then(e,e))}function Jy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ye&a)===a&&($e===4||$e===3&&(ye&62914560)===ye&&300>Bt()-Of?(we&2)===0&&us(e,0):Lf|=a,os===ye&&(os=0)),zi(e)}function K_(e,n){n===0&&(n=Tt()),e=Yr(e,n),e!==null&&(It(e,n),zi(e))}function $y(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),K_(e,a)}function tS(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),K_(e,a)}function eS(e,n){return H(e,n)}var ic=null,hs=null,Vf=!1,ac=!1,kf=!1,vr=0;function zi(e){e!==hs&&e.next===null&&(hs===null?ic=hs=e:hs=hs.next=e),ac=!0,Vf||(Vf=!0,iS())}function Lo(e,n){if(!kf&&ac){kf=!0;do for(var a=!1,o=ic;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var S=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(S&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tg(o,f))}else f=ye,f=Vt(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,tg(o,f));o=o.next}while(a);kf=!1}}function nS(){Q_()}function Q_(){ac=Vf=!1;var e=0;vr!==0&&(fS()&&(e=vr),vr=0);for(var n=Bt(),a=null,o=ic;o!==null;){var u=o.next,f=J_(o,n);f===0?(o.next=null,a===null?ic=u:a.next=u,u===null&&(hs=a)):(a=o,(e!==0||(f&3)!==0)&&(ac=!0)),o=u}Lo(e)}function J_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Pt(f),b=1<<S,z=u[S];z===-1?((b&a)===0||(b&o)!==0)&&(u[S]=se(b,n)):z<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ve,a=ye,a=Vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),Re(a)){case 2:case 8:a=oe;break;case 32:a=qe;break;case 268435456:a=N;break;default:a=qe}return o=$_.bind(null,e),a=H(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function $_(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var o=ye;return o=Vt(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(P_(e,o,n),J_(e,Bt()),e.callbackNode!=null&&e.callbackNode===a?$_.bind(null,e):null)}function tg(e,n){if(nc())return null;P_(e,n,!0)}function iS(){dS(function(){(we&6)!==0?H(Ft,nS):Q_()})}function Xf(){return vr===0&&(vr=k()),vr}function eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function ng(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function aS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=eg((u[Ke]||null).action),S=o.submitter;S&&(n=(n=S[Ke]||null)?eg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var b=new yl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(vr!==0){var z=S?ng(u,S):new FormData(u);uf(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=S?ng(u,S):new FormData(u),uf(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Wf=0;Wf<wu.length;Wf++){var Yf=wu[Wf],rS=Yf.toLowerCase(),sS=Yf[0].toUpperCase()+Yf.slice(1);Si(rS,"on"+sS)}Si(Pp,"onAnimationEnd"),Si(Ip,"onAnimationIteration"),Si(zp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Ey,"onTransitionRun"),Si(by,"onTransitionStart"),Si(Ty,"onTransitionCancel"),Si(Bp,"onTransitionEnd"),W("onMouseEnter",["mouseout","mouseover"]),W("onMouseLeave",["mouseout","mouseover"]),W("onPointerEnter",["pointerout","pointerover"]),W("onPointerLeave",["pointerout","pointerover"]),A("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),A("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),A("onBeforeInput",["compositionend","keypress","textInput","paste"]),A("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),A("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var b=o[S],z=b.instance,tt=b.currentTarget;if(b=b.listener,z!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ht){Wl(ht)}u.currentTarget=null,f=z}else for(S=0;S<o.length;S++){if(b=o[S],z=b.instance,tt=b.currentTarget,b=b.listener,z!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ht){Wl(ht)}u.currentTarget=null,f=z}}}}function ve(e,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var o=e+"__bubble";a.has(o)||(ag(n,e,2,!1),a.add(o))}function qf(e,n,a){var o=0;n&&(o|=4),ag(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function jf(e){if(!e[rc]){e[rc]=!0,dl.forEach(function(a){a!=="selectionchange"&&(oS.has(a)||qf(a,!1,e),qf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,qf("selectionchange",!1,n))}}function ag(e,n,a,o){switch(wg(n)){case 2:var u=OS;break;case 8:u=PS;break;default:u=lh}a=u.bind(null,n,a,e),u=void 0,!mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Zf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var b=o.stateNode.containerInfo;if(b===u)break;if(S===4)for(S=o.return;S!==null;){var z=S.tag;if((z===3||z===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;b!==null;){if(S=Xi(b),S===null)return;if(z=S.tag,z===5||z===6||z===26||z===27){o=f=S;continue t}b=b.parentNode}}o=o.return}fp(function(){var tt=f,ht=du(a),mt=[];t:{var it=Fp.get(e);if(it!==void 0){var rt=yl,ee=e;switch(e){case"keypress":if(gl(a)===0)break t;case"keydown":case"keyup":rt=ey;break;case"focusin":ee="focus",rt=yu;break;case"focusout":ee="blur",rt=yu;break;case"beforeblur":case"afterblur":rt=yu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=ay;break;case Pp:case Ip:case zp:rt=Yv;break;case Bp:rt=sy;break;case"scroll":case"scrollend":rt=Gv;break;case"wheel":rt=ly;break;case"copy":case"cut":case"paste":rt=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=_p;break;case"toggle":case"beforetoggle":rt=uy}var Jt=(n&4)!==0,Pe=!Jt&&(e==="scroll"||e==="scrollend"),j=Jt?it!==null?it+"Capture":null:it;Jt=[];for(var V=tt,J;V!==null;){var pt=V;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=Qs(V,j),pt!=null&&Jt.push(Oo(V,pt,J))),Pe)break;V=V.return}0<Jt.length&&(it=new rt(it,ee,null,a,ht),mt.push({event:it,listeners:Jt}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",it&&a!==hu&&(ee=a.relatedTarget||a.fromElement)&&(Xi(ee)||ee[Ui]))break t;if((rt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,rt?(ee=a.relatedTarget||a.toElement,rt=tt,ee=ee?Xi(ee):null,ee!==null&&(Pe=c(ee),Jt=ee.tag,ee!==Pe||Jt!==5&&Jt!==27&&Jt!==6)&&(ee=null)):(rt=null,ee=tt),rt!==ee)){if(Jt=pp,pt="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=_p,pt="onPointerLeave",j="onPointerEnter",V="pointer"),Pe=rt==null?it:nr(rt),J=ee==null?it:nr(ee),it=new Jt(pt,V+"leave",rt,a,ht),it.target=Pe,it.relatedTarget=J,pt=null,Xi(ht)===tt&&(Jt=new Jt(j,V+"enter",ee,a,ht),Jt.target=J,Jt.relatedTarget=Pe,pt=Jt),Pe=pt,rt&&ee)e:{for(Jt=rt,j=ee,V=0,J=Jt;J;J=ds(J))V++;for(J=0,pt=j;pt;pt=ds(pt))J++;for(;0<V-J;)Jt=ds(Jt),V--;for(;0<J-V;)j=ds(j),J--;for(;V--;){if(Jt===j||j!==null&&Jt===j.alternate)break e;Jt=ds(Jt),j=ds(j)}Jt=null}else Jt=null;rt!==null&&rg(mt,it,rt,Jt,!1),ee!==null&&Pe!==null&&rg(mt,Pe,ee,Jt,!0)}}t:{if(it=tt?nr(tt):window,rt=it.nodeName&&it.nodeName.toLowerCase(),rt==="select"||rt==="input"&&it.type==="file")var Ht=bp;else if(Mp(it))if(Tp)Ht=Sy;else{Ht=vy;var pe=gy}else rt=it.nodeName,!rt||rt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&fu(tt.elementType)&&(Ht=bp):Ht=yy;if(Ht&&(Ht=Ht(e,tt))){Ep(mt,Ht,a,ht);break t}pe&&pe(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&wn(it,"number",it.value)}switch(pe=tt?nr(tt):window,e){case"focusin":(Mp(pe)||pe.contentEditable==="true")&&(kr=pe,Tu=tt,ro=null);break;case"focusout":ro=Tu=kr=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,Np(mt,a,ht);break;case"selectionchange":if(My)break;case"keydown":case"keyup":Np(mt,a,ht)}var qt;if(xu)t:{switch(e){case"compositionstart":var te="onCompositionStart";break t;case"compositionend":te="onCompositionEnd";break t;case"compositionupdate":te="onCompositionUpdate";break t}te=void 0}else Vr?Sp(e,a)&&(te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(te="onCompositionStart");te&&(gp&&a.locale!=="ko"&&(Vr||te!=="onCompositionStart"?te==="onCompositionEnd"&&Vr&&(qt=hp()):(Sa=ht,_u="value"in Sa?Sa.value:Sa.textContent,Vr=!0)),pe=sc(tt,te),0<pe.length&&(te=new mp(te,e,null,a,ht),mt.push({event:te,listeners:pe}),qt?te.data=qt:(qt=xp(a),qt!==null&&(te.data=qt)))),(qt=hy?dy(e,a):py(e,a))&&(te=sc(tt,"onBeforeInput"),0<te.length&&(pe=new mp("onBeforeInput","beforeinput",null,a,ht),mt.push({event:pe,listeners:te}),pe.data=qt)),aS(mt,e,tt,a,ht)}ig(mt,n)})}function Oo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Qs(e,a),u!=null&&o.unshift(Oo(e,u,f)),u=Qs(e,n),u!=null&&o.push(Oo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function ds(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rg(e,n,a,o,u){for(var f=n._reactName,S=[];a!==null&&a!==o;){var b=a,z=b.alternate,tt=b.stateNode;if(b=b.tag,z!==null&&z===o)break;b!==5&&b!==26&&b!==27||tt===null||(z=tt,u?(tt=Qs(a,f),tt!=null&&S.unshift(Oo(a,tt,z))):u||(tt=Qs(a,f),tt!=null&&S.push(Oo(a,tt,z)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function sg(e){return(typeof e=="string"?e:""+e).replace(lS,`
`).replace(cS,"")}function og(e,n){return n=sg(n),sg(e)===n}function oc(){}function Oe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":zt(e,"class",o);break;case"tabIndex":zt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(e,a,o);break;case"style":cp(e,o,f);break;case"data":if(n!=="object"){zt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(e,n,"name",u.name,u,null),Oe(e,n,"formEncType",u.formEncType,u,null),Oe(e,n,"formMethod",u.formMethod,u,null),Oe(e,n,"formTarget",u.formTarget,u,null)):(Oe(e,n,"encType",u.encType,u,null),Oe(e,n,"method",u.method,u,null),Oe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=oc);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fv.get(a)||a,Ut(e,a,o))}}function Kf(e,n,a,o,u,f){switch(a){case"style":cp(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Ke]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,f,S,a,null)}}u&&Oe(e,n,"srcSet",a.srcSet,a,null),o&&Oe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var b=f=S=u=null,z=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":S=ht;break;case"checked":z=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Oe(e,n,o,ht,a,null)}}In(e,f,b,z,tt,S,u,!1),_e(e);return;case"select":ve("invalid",e),o=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":S=b;break;case"multiple":o=b;default:Oe(e,n,u,b,a,null)}n=f,a=S,e.multiple=!!o,n!=null?Qe(e,!!o,n,!1):a!=null&&Qe(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(b=a[S],b!=null))switch(S){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Oe(e,n,S,b,a,null)}Fr(e,o,u,f),_e(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Oe(e,n,z,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<No.length;o++)ve(No[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(e,n,tt,o,a,null)}return;default:if(fu(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Kf(e,n,ht,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Oe(e,n,b,o,a,null))}function uS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,b=null,z=null,tt=null,ht=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=mt;default:o.hasOwnProperty(rt)||Oe(e,n,rt,null,o,mt)}}for(var it in o){var rt=o[it];if(mt=a[it],o.hasOwnProperty(it)&&(rt!=null||mt!=null))switch(it){case"type":f=rt;break;case"name":u=rt;break;case"checked":tt=rt;break;case"defaultChecked":ht=rt;break;case"value":S=rt;break;case"defaultValue":b=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==mt&&Oe(e,n,it,rt,o,mt)}}Be(e,S,b,z,tt,ht,f,u);return;case"select":rt=S=b=it=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:o.hasOwnProperty(f)||Oe(e,n,f,null,o,z)}for(u in o)if(f=o[u],z=a[u],o.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":S=f;default:f!==z&&Oe(e,n,u,f,o,z)}n=b,a=S,o=rt,it!=null?Qe(e,!!a,it,!1):!!o!=!!a&&(n!=null?Qe(e,!!a,n,!0):Qe(e,!!a,a?[]:"",!1));return;case"textarea":rt=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(e,n,b,null,o,u)}for(S in o)if(u=o[S],f=a[S],o.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":it=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Oe(e,n,S,u,o,f)}Sn(e,it,rt);return;case"option":for(var ee in a)if(it=a[ee],a.hasOwnProperty(ee)&&it!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Oe(e,n,ee,null,o,it)}for(z in o)if(it=o[z],rt=a[z],o.hasOwnProperty(z)&&it!==rt&&(it!=null||rt!=null))switch(z){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(e,n,z,it,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)it=a[Jt],a.hasOwnProperty(Jt)&&it!=null&&!o.hasOwnProperty(Jt)&&Oe(e,n,Jt,null,o,it);for(tt in o)if(it=o[tt],rt=a[tt],o.hasOwnProperty(tt)&&it!==rt&&(it!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Oe(e,n,tt,it,o,rt)}return;default:if(fu(n)){for(var Pe in a)it=a[Pe],a.hasOwnProperty(Pe)&&it!==void 0&&!o.hasOwnProperty(Pe)&&Kf(e,n,Pe,void 0,o,it);for(ht in o)it=o[ht],rt=a[ht],!o.hasOwnProperty(ht)||it===rt||it===void 0&&rt===void 0||Kf(e,n,ht,it,o,rt);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!o.hasOwnProperty(j)&&Oe(e,n,j,null,o,it);for(mt in o)it=o[mt],rt=a[mt],!o.hasOwnProperty(mt)||it===rt||it==null&&rt==null||Oe(e,n,mt,it,o,rt)}var Qf=null,Jf=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function $f(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var th=null;function fS(){var e=window.event;return e&&e.type==="popstate"?e===th?!1:(th=e,!0):(th=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,hS=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(pS)}:ug;function pS(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function hg(e,n){var a=n,o=0,u=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Po(S.documentElement),a&2&&Po(S.body),a&4)for(a=S.head,Po(a),S=a.firstChild;S;){var b=S.nextSibling,z=S.nodeName;S[Li]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=b}}if(u===0){e.removeChild(f),ko(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);ko(n)}function eh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),Br(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Li])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Mi(e.nextSibling),e===null)break}return null}function _S(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Mi(e.nextSibling),e===null))return null;return e}function nh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function gS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var ih=null;function dg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function pg(e,n,a){switch(n=lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Po(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Br(e)}var pi=new Map,mg=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var aa=K.d;K.d={f:vS,r:yS,D:SS,C:xS,L:MS,m:ES,X:TS,S:bS,M:AS};function vS(){var e=aa.f(),n=tc();return e||n}function yS(e){var n=va(e);n!==null&&n.tag===5&&n.type==="form"?Pm(n):aa.r(e)}var ps=typeof document>"u"?null:document;function _g(e,n,a){var o=ps;if(o&&typeof n=="string"&&n){var u=mn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),mg.has(u)||(mg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),En(n,"link",e),an(n),o.head.appendChild(n)))}}function SS(e){aa.D(e),_g("dns-prefetch",e,null)}function xS(e,n){aa.C(e,n),_g("preconnect",e,n)}function MS(e,n,a){aa.L(e,n,a);var o=ps;if(o&&e&&n){var u='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+mn(a.imageSizes)+'"]')):u+='[href="'+mn(e)+'"]';var f=u;switch(n){case"style":f=ms(e);break;case"script":f=_s(e)}pi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(f))||n==="script"&&o.querySelector(zo(f))||(n=o.createElement("link"),En(n,"link",e),an(n),o.head.appendChild(n)))}}function ES(e,n){aa.m(e,n);var a=ps;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+mn(o)+'"][href="'+mn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_s(e)}if(!pi.has(f)&&(e=_({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(f)))return}o=a.createElement("link"),En(o,"link",e),an(o),a.head.appendChild(o)}}}function bS(e,n,a){aa.S(e,n,a);var o=ps;if(o&&e){var u=ya(o).hoistableStyles,f=ms(e);n=n||"default";var S=u.get(f);if(!S){var b={loading:0,preload:null};if(S=o.querySelector(Io(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&ah(e,a);var z=S=o.createElement("link");an(z),En(z,"link",e),z._p=new Promise(function(tt,ht){z.onload=tt,z.onerror=ht}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,uc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:b},u.set(f,S)}}}function TS(e,n){aa.X(e,n);var a=ps;if(a&&e){var o=ya(a).hoistableScripts,u=_s(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=_({src:e,async:!0},n),(n=pi.get(u))&&rh(e,n),f=a.createElement("script"),an(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function AS(e,n){aa.M(e,n);var a=ps;if(a&&e){var o=ya(a).hoistableScripts,u=_s(e),f=o.get(u);f||(f=a.querySelector(zo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&rh(e,n),f=a.createElement("script"),an(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function gg(e,n,a,o){var u=(u=dt.current)?cc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ms(a.href),a=ya(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ms(a.href);var f=ya(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Io(e)))&&!f._p&&(S.instance=f,S.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||RS(u,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_s(a),a=ya(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ms(e){return'href="'+mn(e)+'"'}function Io(e){return'link[rel="stylesheet"]['+e+"]"}function vg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function RS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),an(n),e.head.appendChild(n))}function _s(e){return'[src="'+mn(e)+'"]'}function zo(e){return"script[async]"+e}function yg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+mn(a.href)+'"]');if(o)return n.instance=o,an(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),an(o),En(o,"style",u),uc(o,a.precedence,e),n.instance=o;case"stylesheet":u=ms(a.href);var f=e.querySelector(Io(u));if(f)return n.state.loading|=4,n.instance=f,an(f),f;o=vg(a),(u=pi.get(u))&&ah(o,u),f=(e.ownerDocument||e).createElement("link"),an(f);var S=f;return S._p=new Promise(function(b,z){S.onload=b,S.onerror=z}),En(f,"link",o),n.state.loading|=4,uc(f,a.precedence,e),n.instance=f;case"script":return f=_s(a.src),(u=e.querySelector(zo(f)))?(n.instance=u,an(u),u):(o=a,(u=pi.get(f))&&(o=_({},a),rh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),an(u),En(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,a.precedence,e));return n.instance}function uc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,S=0;S<o.length;S++){var b=o[S];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function ah(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function rh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fc=null;function Sg(e,n,a){if(fc===null){var o=new Map,u=fc=new Map;u.set(a,o)}else u=fc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Li]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var b=o.get(S);b?b.push(f):o.set(S,[f])}}return o}function xg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function wS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bo=null;function CS(){}function DS(e,n,a){if(Bo===null)throw Error(r(475));var o=Bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ms(a.href),f=e.querySelector(Io(u));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=hc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,an(f);return}f=e.ownerDocument||e,a=vg(a),(u=pi.get(u))&&ah(a,u),f=f.createElement("link"),an(f);var S=f;S._p=new Promise(function(b,z){S.onload=b,S.onerror=z}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=hc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function US(){if(Bo===null)throw Error(r(475));var e=Bo;return e.stylesheets&&e.count===0&&sh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function hc(){if(this.count--,this.count===0){if(this.stylesheets)sh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function sh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(LS,e),dc=null,hc.call(e))}function LS(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var o=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,u),a.set(S,u),this.count++,o=hc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function NS(e,n,a,o,u,f,S,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Eg(e,n,a,o,u,f,S,b,z,tt,ht,mt){return e=new NS(e,n,a,S,b,z,tt,mt),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Xu(f),e}function bg(e){return e?(e=qr,e):qr}function Tg(e,n,a,o,u,f){u=bg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ea(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=ba(e,o,n),a!==null&&(ni(a,e,n),mo(a,e,n))}function Ag(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function oh(e,n){Ag(e,n),(e=e.alternate)&&Ag(e,n)}function Rg(e){if(e.tag===13){var n=Yr(e,67108864);n!==null&&ni(n,e,67108864),oh(e,67108864)}}var pc=!0;function OS(e,n,a,o){var u=O.T;O.T=null;var f=K.p;try{K.p=2,lh(e,n,a,o)}finally{K.p=f,O.T=u}}function PS(e,n,a,o){var u=O.T;O.T=null;var f=K.p;try{K.p=8,lh(e,n,a,o)}finally{K.p=f,O.T=u}}function lh(e,n,a,o){if(pc){var u=ch(o);if(u===null)Zf(e,n,o,mc,a),Cg(e,o);else if(zS(u,e,n,a,o))o.stopPropagation();else if(Cg(e,o),n&4&&-1<IS.indexOf(e)){for(;u!==null;){var f=va(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=jt(f.pendingLanes);if(S!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;S;){var z=1<<31-Pt(S);b.entanglements[1]|=z,S&=~z}zi(f),(we&6)===0&&(Jl=Bt()+500,Lo(0))}}break;case 13:b=Yr(f,2),b!==null&&ni(b,f,2),tc(),oh(f,2)}if(f=ch(o),f===null&&Zf(e,n,o,mc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Zf(e,n,o,null,a)}}function ch(e){return e=du(e),uh(e)}var mc=null;function uh(e){if(mc=null,e=Xi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function wg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ft:return 2;case oe:return 8;case qe:case je:return 32;case N:return 268435456;default:return 32}default:return 32}}var fh=!1,za=null,Ba=null,Fa=null,Ho=new Map,Go=new Map,Ha=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Cg(e,n){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=va(n),n!==null&&Rg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function zS(e,n,a,o,u){switch(n){case"focusin":return za=Vo(za,e,n,a,o,u),!0;case"dragenter":return Ba=Vo(Ba,e,n,a,o,u),!0;case"mouseover":return Fa=Vo(Fa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function Dg(e){var n=Xi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,vi(e.priority,function(){if(a.tag===13){var o=ei();o=ae(o);var u=Yr(a,o);u!==null&&ni(u,a,o),oh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _c(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ch(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);hu=o,a.target.dispatchEvent(o),hu=null}else return n=va(a),n!==null&&Rg(n),e.blockedOn=a,!1;n.shift()}return!0}function Ug(e,n,a){_c(e)&&a.delete(n)}function BS(){fh=!1,za!==null&&_c(za)&&(za=null),Ba!==null&&_c(Ba)&&(Ba=null),Fa!==null&&_c(Fa)&&(Fa=null),Ho.forEach(Ug),Go.forEach(Ug)}function gc(e,n){e.blockedOn===n&&(e.blockedOn=null,fh||(fh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,BS)))}var vc=null;function Lg(e){vc!==e&&(vc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(uh(o||a)===null)continue;break}var f=va(a);f!==null&&(e.splice(n,3),n-=3,uf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ko(e){function n(z){return gc(z,e)}za!==null&&gc(za,e),Ba!==null&&gc(Ba,e),Fa!==null&&gc(Fa,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)Dg(a),a.blockedOn===null&&Ha.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],S=u[Ke]||null;if(typeof f=="function")S||Lg(a);else if(S){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[Ke]||null)b=S.formAction;else if(uh(u)!==null)continue}else b=S.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),Lg(a)}}}function hh(e){this._internalRoot=e}yc.prototype.render=hh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();Tg(a,o,e,n,null,null)},yc.prototype.unmount=hh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tg(e.current,2,null,e,null,null),tc(),n[Ui]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var n=xe();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,e),a===0&&Dg(e)}};var Ng=t.version;if(Ng!=="19.1.1")throw Error(r(527,Ng,"19.1.1"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var FS={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{ft=Sc.inject(FS),gt=Sc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Zm,f=Km,S=Qm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=Eg(e,1,!1,null,null,a,o,u,f,S,b,null),e[Ui]=n.current,jf(e),new hh(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=Zm,S=Km,b=Qm,z=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=Eg(e,1,!0,n,a??null,o,u,f,S,b,z,tt),n.context=bg(null),a=n.current,o=ei(),o=ae(o),u=Ea(o),u.callback=null,ba(a,u,o),a=o,n.current.lanes=a,It(n,a),zi(n),e[Ui]=n.current,jf(e),new yc(n)},Wo.version="19.1.1",Wo}var kg;function ZS(){if(kg)return mh.exports;kg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),mh.exports=jS(),mh.exports}var KS=ZS();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yd="179",Gs={ROTATE:0,DOLLY:1,PAN:2},Bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},QS=0,Xg=1,JS=2,tv=1,$S=2,ua=3,$a=0,Gn=1,fa=2,Qa=0,Vs=1,Wg=2,Yg=3,qg=4,tx=5,Ar=100,ex=101,nx=102,ix=103,ax=104,rx=200,sx=201,ox=202,lx=203,ed=204,nd=205,cx=206,ux=207,fx=208,hx=209,dx=210,px=211,mx=212,_x=213,gx=214,id=0,ad=1,rd=2,Ws=3,sd=4,od=5,ld=6,cd=7,ev=0,vx=1,yx=2,Ja=0,Sx=1,xx=2,Mx=3,Ex=4,bx=5,Tx=6,Ax=7,nv=300,Ys=301,qs=302,ud=303,fd=304,su=306,hd=1e3,wr=1001,dd=1002,wi=1003,Rx=1004,xc=1005,Gi=1006,yh=1007,Cr=1008,ma=1009,iv=1010,av=1011,nl=1012,qd=1013,Ur=1014,ha=1015,ll=1016,jd=1017,Zd=1018,il=1020,rv=35902,sv=1021,ov=1022,Ri=1023,al=1026,rl=1027,lv=1028,Kd=1029,cv=1030,Qd=1031,Jd=1033,Qc=33776,Jc=33777,$c=33778,tu=33779,pd=35840,md=35841,_d=35842,gd=35843,vd=36196,yd=37492,Sd=37496,xd=37808,Md=37809,Ed=37810,bd=37811,Td=37812,Ad=37813,Rd=37814,wd=37815,Cd=37816,Dd=37817,Ud=37818,Ld=37819,Nd=37820,Od=37821,eu=36492,Pd=36494,Id=36495,uv=36283,zd=36284,Bd=36285,Fd=36286,wx=3200,Cx=3201,Dx=0,Ux=1,Ka="",ri="srgb",Lr="srgb-linear",iu="linear",Ie="srgb",gs=7680,jg=519,Lx=512,Nx=513,Ox=514,fv=515,Px=516,Ix=517,zx=518,Bx=519,Hd=35044,Zg="300 es",Vi=2e3,au=2001;class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kg=1234567;const tl=Math.PI/180,sl=180/Math.PI;function da(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function re(s,t,i){return Math.max(t,Math.min(i,s))}function $d(s,t){return(s%t+t)%t}function Fx(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function Hx(s,t,i){return s!==t?(i-s)/(t-s):0}function el(s,t,i){return(1-i)*s+i*t}function Gx(s,t,i,r){return el(s,t,1-Math.exp(-i*r))}function Vx(s,t=1){return t-Math.abs($d(s,t*2)-t)}function kx(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function Xx(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function Wx(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Yx(s,t){return s+Math.random()*(t-s)}function qx(s){return s*(.5-Math.random())}function jx(s){s!==void 0&&(Kg=s);let t=Kg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Zx(s){return s*tl}function Kx(s){return s*sl}function Qx(s){return(s&s-1)===0&&s!==0}function Jx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $x(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tM(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),_=h((t+r)/2),g=c((t-r)/2),y=h((t-r)/2),M=c((r-t)/2),T=h((r-t)/2);switch(l){case"XYX":s.set(d*_,m*g,m*y,d*p);break;case"YZY":s.set(m*y,d*_,m*g,d*p);break;case"ZXZ":s.set(m*g,m*y,d*_,d*p);break;case"XZX":s.set(d*_,m*T,m*M,d*p);break;case"YXY":s.set(m*M,d*_,m*T,d*p);break;case"ZYZ":s.set(m*T,m*M,d*_,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function De(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const hv={DEG2RAD:tl,RAD2DEG:sl,generateUUID:da,clamp:re,euclideanModulo:$d,mapLinear:Fx,inverseLerp:Hx,lerp:el,damp:Gx,pingpong:Vx,smoothstep:kx,smootherstep:Xx,randInt:Wx,randFloat:Yx,randFloatSpread:qx,seededRandom:jx,degToRad:Zx,radToDeg:Kx,isPowerOfTwo:Qx,ceilPowerOfTwo:Jx,floorPowerOfTwo:$x,setQuaternionFromProperEuler:tM,normalize:De,denormalize:Ai};class ne{constructor(t=0,i=0){ne.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=re(this.x,t.x,i.x),this.y=re(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=re(this.x,t,i),this.y=re(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3];const y=c[h+0],M=c[h+1],T=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=T,t[i+3]=R;return}if(g!==R||m!==y||p!==M||_!==T){let x=1-d;const v=m*y+p*M+_*T+g*R,I=v>=0?1:-1,L=1-v*v;if(L>Number.EPSILON){const B=Math.sqrt(L),G=Math.atan2(B,v*I);x=Math.sin(x*G)/B,d=Math.sin(d*G)/B}const C=d*I;if(m=m*x+y*C,p=p*x+M*C,_=_*x+T*C,g=g*x+R*C,x===1-d){const B=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=B,p*=B,_*=B,g*=B}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],y=c[h+1],M=c[h+2],T=c[h+3];return t[i]=d*T+_*g+m*M-p*y,t[i+1]=m*T+_*y+p*g-d*M,t[i+2]=p*T+_*M+d*y-m*g,t[i+3]=_*T-d*g-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),y=m(r/2),M=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*M*T,this._y=p*M*g-y*_*T,this._z=p*_*T+y*M*g,this._w=p*_*g-y*M*T;break;case"YXZ":this._x=y*_*g+p*M*T,this._y=p*M*g-y*_*T,this._z=p*_*T-y*M*g,this._w=p*_*g+y*M*T;break;case"ZXY":this._x=y*_*g-p*M*T,this._y=p*M*g+y*_*T,this._z=p*_*T+y*M*g,this._w=p*_*g-y*M*T;break;case"ZYX":this._x=y*_*g-p*M*T,this._y=p*M*g+y*_*T,this._z=p*_*T-y*M*g,this._w=p*_*g+y*M*T;break;case"YZX":this._x=y*_*g+p*M*T,this._y=p*M*g+y*_*T,this._z=p*_*T-y*M*g,this._w=p*_*g-y*M*T;break;case"XZY":this._x=y*_*g-p*M*T,this._y=p*M*g-y*_*T,this._z=p*_*T+y*M*g,this._w=p*_*g+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=r+d+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=h*g+this._w*y,this._x=r*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Qg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Qg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=re(this.x,t.x,i.x),this.y=re(this.y,t.y,i.y),this.z=re(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=re(this.x,t,i),this.y=re(this.y,t,i),this.z=re(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Sh.copy(this).projectOnVector(t),this.sub(Sh)}reflect(t){return this.sub(Sh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(re(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new Y,Qg=new Nr;class ce{constructor(t,i,r,l,c,h,d,m,p){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],y=r[2],M=r[5],T=r[8],R=l[0],x=l[3],v=l[6],I=l[1],L=l[4],C=l[7],B=l[2],G=l[5],F=l[8];return c[0]=h*R+d*I+m*B,c[3]=h*x+d*L+m*G,c[6]=h*v+d*C+m*F,c[1]=p*R+_*I+g*B,c[4]=p*x+_*L+g*G,c[7]=p*v+_*C+g*F,c[2]=y*R+M*I+T*B,c[5]=y*x+M*L+T*G,c[8]=y*v+M*C+T*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,y=d*m-_*c,M=p*c-h*m,T=i*g+r*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(d*r-l*h)*R,t[3]=y*R,t[4]=(_*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=M*R,t[7]=(r*m-p*i)*R,t[8]=(h*i-r*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(xh.makeScale(t,i)),this}rotate(t){return this.premultiply(xh.makeRotation(-t)),this}translate(t,i){return this.premultiply(xh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xh=new ce;function dv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eM(){const s=ol("canvas");return s.style.display="block",s}const Jg={};function ks(s){s in Jg||(Jg[s]=!0,console.warn(s))}function nM(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const $g=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),t0=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const s={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Xs(l.r),l.g=Xs(l.g),l.b=Xs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?iu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ks("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ks("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Lr]:{primaries:t,whitePoint:r,transfer:iu,toXYZ:$g,fromXYZ:t0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:$g,fromXYZ:t0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),s}const be=iM();function pa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class aM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=ol("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ol("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=pa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(pa(i[r]/255)*255):i[r]=pa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=da(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Mh(l[h].image)):c.push(Mh(l[h]))}else c=Mh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Mh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?aM.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sM=0;const Eh=new Y;class Nn extends Pr{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=wr,l=wr,c=Gi,h=Cr,d=Ri,m=ma,p=Nn.DEFAULT_ANISOTROPY,_=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=da(),this.name="",this.source=new tp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hd:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case dd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hd:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case dd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=nv;Nn.DEFAULT_ANISOTROPY=1;class ke{constructor(t=0,i=0,r=0,l=1){ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],_=m[4],g=m[8],y=m[1],M=m[5],T=m[9],R=m[2],x=m[6],v=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-R)<.01&&Math.abs(T-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+R)<.1&&Math.abs(T+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,C=(M+1)/2,B=(v+1)/2,G=(_+y)/4,F=(g+R)/4,X=(T+x)/4;return L>C&&L>B?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=G/r,c=F/r):C>B?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=G/l,c=X/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=F/c,l=X/c),this.set(r,l,c,i),this}let I=Math.sqrt((x-T)*(x-T)+(g-R)*(g-R)+(y-_)*(y-_));return Math.abs(I)<.001&&(I=1),this.x=(x-T)/I,this.y=(g-R)/I,this.z=(y-_)/I,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=re(this.x,t.x,i.x),this.y=re(this.y,t.y,i.y),this.z=re(this.z,t.z,i.z),this.w=re(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=re(this.x,t,i),this.y=re(this.y,t,i),this.z=re(this.z,t,i),this.w=re(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(re(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Pr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ke(0,0,t,i),this.scissorTest=!1,this.viewport=new ke(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new Nn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends oM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class pv extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends Nn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=wi,this.minFilter=wi,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Ei):Ei.fromBufferAttribute(c,h),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(t.matrixWorld),this.union(Mc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Ec.subVectors(this.max,Yo),ys.subVectors(t.a,Yo),Ss.subVectors(t.b,Yo),xs.subVectors(t.c,Yo),Va.subVectors(Ss,ys),ka.subVectors(xs,Ss),yr.subVectors(ys,xs);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-yr.z,yr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,yr.z,0,-yr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-yr.y,yr.x,0];return!bh(i,ys,Ss,xs,Ec)||(i=[1,0,0,0,1,0,0,0,1],!bh(i,ys,Ss,xs,Ec))?!1:(bc.crossVectors(Va,ka),i=[bc.x,bc.y,bc.z],bh(i,ys,Ss,xs,Ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ra[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ra[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ra[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ra[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ra[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ra[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ra[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ra[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ra),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ra=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ei=new Y,Mc=new tr,ys=new Y,Ss=new Y,xs=new Y,Va=new Y,ka=new Y,yr=new Y,Yo=new Y,Ec=new Y,bc=new Y,Sr=new Y;function bh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Sr.fromArray(s,c);const d=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),m=t.dot(Sr),p=i.dot(Sr),_=r.dot(Sr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const cM=new tr,qo=new Y,Th=new Y;class cl{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):cM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(qo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Th)),this.expandByPoint(qo.copy(t.center).sub(Th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sa=new Y,Ah=new Y,Tc=new Y,Xa=new Y,Rh=new Y,Ac=new Y,wh=new Y;class ep{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=sa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(sa.copy(this.origin).addScaledVector(this.direction,i),sa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ah.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Xa.copy(this.origin).sub(Ah);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=Xa.dot(this.direction),m=-Xa.dot(Tc),p=Xa.lengthSq(),_=Math.abs(1-h*h);let g,y,M,T;if(_>0)if(g=h*m-d,y=h*d-m,T=c*_,g>=0)if(y>=-T)if(y<=T){const R=1/_;g*=R,y*=R,M=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;else y<=-T?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p):y<=T?(g=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Ah).addScaledVector(Tc,y),M}intersectSphere(t,i){sa.subVectors(t.center,this.origin);const r=sa.dot(this.direction),l=sa.dot(sa)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),_>=0?(c=(t.min.y-y.y)*_,h=(t.max.y-y.y)*_):(c=(t.max.y-y.y)*_,h=(t.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,sa)!==null}intersectTriangle(t,i,r,l,c){Rh.subVectors(i,t),Ac.subVectors(r,t),wh.crossVectors(Rh,Ac);let h=this.direction.dot(wh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Xa.subVectors(this.origin,t);const m=d*this.direction.dot(Ac.crossVectors(Xa,Ac));if(m<0)return null;const p=d*this.direction.dot(Rh.cross(Xa));if(p<0||m+p>h)return null;const _=-d*Xa.dot(wh);return _<0?null:this.at(_/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,r,l,c,h,d,m,p,_,g,y,M,T,R,x){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,_,g,y,M,T,R,x)}set(t,i,r,l,c,h,d,m,p,_,g,y,M,T,R,x){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=y,v[3]=M,v[7]=T,v[11]=R,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Ms.setFromMatrixColumn(t,0).length(),c=1/Ms.setFromMatrixColumn(t,1).length(),h=1/Ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=h*_,M=h*g,T=d*_,R=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+T*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=T+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*_,M=m*g,T=p*_,R=p*g;i[0]=y+R*d,i[4]=T*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=M*d-T,i[6]=R+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*_,M=m*g,T=p*_,R=p*g;i[0]=y-R*d,i[4]=-h*g,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*_,M=h*g,T=d*_,R=d*g;i[0]=m*_,i[4]=T*p-M,i[8]=y*p+R,i[1]=m*g,i[5]=R*p+y,i[9]=M*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=R-y*g,i[8]=T*g+M,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*g+T,i[10]=y-R*g}else if(t.order==="XZY"){const y=h*m,M=h*p,T=d*m,R=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+R,i[5]=h*_,i[9]=M*g-T,i[2]=T*g-M,i[6]=d*_,i[10]=R*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,i,r){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Wa.crossVectors(r,ii),Wa.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Wa.crossVectors(r,ii)),Wa.normalize(),Rc.crossVectors(ii,Wa),l[0]=Wa.x,l[4]=Rc.x,l[8]=ii.x,l[1]=Wa.y,l[5]=Rc.y,l[9]=ii.y,l[2]=Wa.z,l[6]=Rc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],y=r[9],M=r[13],T=r[2],R=r[6],x=r[10],v=r[14],I=r[3],L=r[7],C=r[11],B=r[15],G=l[0],F=l[4],X=l[8],D=l[12],w=l[1],P=l[5],Q=l[9],et=l[13],lt=l[2],ut=l[6],O=l[10],K=l[14],q=l[3],yt=l[7],U=l[11],$=l[15];return c[0]=h*G+d*w+m*lt+p*q,c[4]=h*F+d*P+m*ut+p*yt,c[8]=h*X+d*Q+m*O+p*U,c[12]=h*D+d*et+m*K+p*$,c[1]=_*G+g*w+y*lt+M*q,c[5]=_*F+g*P+y*ut+M*yt,c[9]=_*X+g*Q+y*O+M*U,c[13]=_*D+g*et+y*K+M*$,c[2]=T*G+R*w+x*lt+v*q,c[6]=T*F+R*P+x*ut+v*yt,c[10]=T*X+R*Q+x*O+v*U,c[14]=T*D+R*et+x*K+v*$,c[3]=I*G+L*w+C*lt+B*q,c[7]=I*F+L*P+C*ut+B*yt,c[11]=I*X+L*Q+C*O+B*U,c[15]=I*D+L*et+C*K+B*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],y=t[10],M=t[14],T=t[3],R=t[7],x=t[11],v=t[15];return T*(+c*m*g-l*p*g-c*d*y+r*p*y+l*d*M-r*m*M)+R*(+i*m*M-i*p*y+c*h*y-l*h*M+l*p*_-c*m*_)+x*(+i*p*g-i*d*M-c*h*g+r*h*M+c*d*_-r*p*_)+v*(-l*d*_-i*m*g+i*d*y+l*h*g-r*h*y+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],y=t[10],M=t[11],T=t[12],R=t[13],x=t[14],v=t[15],I=g*x*p-R*y*p+R*m*M-d*x*M-g*m*v+d*y*v,L=T*y*p-_*x*p-T*m*M+h*x*M+_*m*v-h*y*v,C=_*R*p-T*g*p+T*d*M-h*R*M-_*d*v+h*g*v,B=T*g*m-_*R*m-T*d*y+h*R*y+_*d*x-h*g*x,G=i*I+r*L+l*C+c*B;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return t[0]=I*F,t[1]=(R*y*c-g*x*c-R*l*M+r*x*M+g*l*v-r*y*v)*F,t[2]=(d*x*c-R*m*c+R*l*p-r*x*p-d*l*v+r*m*v)*F,t[3]=(g*m*c-d*y*c-g*l*p+r*y*p+d*l*M-r*m*M)*F,t[4]=L*F,t[5]=(_*x*c-T*y*c+T*l*M-i*x*M-_*l*v+i*y*v)*F,t[6]=(T*m*c-h*x*c-T*l*p+i*x*p+h*l*v-i*m*v)*F,t[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*M+i*m*M)*F,t[8]=C*F,t[9]=(T*g*c-_*R*c-T*r*M+i*R*M+_*r*v-i*g*v)*F,t[10]=(h*R*c-T*d*c+T*r*p-i*R*p-h*r*v+i*d*v)*F,t[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*M-i*d*M)*F,t[12]=B*F,t[13]=(_*R*l-T*g*l+T*r*y-i*R*y-_*r*x+i*g*x)*F,t[14]=(T*d*l-h*R*l-T*r*m+i*R*m+h*r*x-i*d*x)*F,t[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*y+i*d*y)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,M=c*_,T=c*g,R=h*_,x=h*g,v=d*g,I=m*p,L=m*_,C=m*g,B=r.x,G=r.y,F=r.z;return l[0]=(1-(R+v))*B,l[1]=(M+C)*B,l[2]=(T-L)*B,l[3]=0,l[4]=(M-C)*G,l[5]=(1-(y+v))*G,l[6]=(x+I)*G,l[7]=0,l[8]=(T+L)*F,l[9]=(x-I)*F,l[10]=(1-(y+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Ms.set(l[0],l[1],l[2]).length();const h=Ms.set(l[4],l[5],l[6]).length(),d=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],bi.copy(this);const p=1/c,_=1/h,g=1/d;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=_,bi.elements[5]*=_,bi.elements[6]*=_,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Vi,m=!1){const p=this.elements,_=2*c/(i-t),g=2*c/(r-l),y=(i+t)/(i-t),M=(r+l)/(r-l);let T,R;if(m)T=c/(h-c),R=h*c/(h-c);else if(d===Vi)T=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===au)T=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Vi,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),y=-(i+t)/(i-t),M=-(r+l)/(r-l);let T,R;if(m)T=1/(h-c),R=h/(h-c);else if(d===Vi)T=-2/(h-c),R=-(h+c)/(h-c);else if(d===au)T=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ms=new Y,bi=new tn,uM=new Y(0,0,0),fM=new Y(1,1,1),Wa=new Y,Rc=new Y,ii=new Y,e0=new tn,n0=new Nr;class _a{constructor(t=0,i=0,r=0,l=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(re(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-re(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return e0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class np{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const i0=new Y,Es=new Nr,oa=new tn,wc=new Y,jo=new Y,dM=new Y,pM=new Nr,a0=new Y(1,0,0),r0=new Y(0,1,0),s0=new Y(0,0,1),o0={type:"added"},mM={type:"removed"},bs={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Zn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const t=new Y,i=new _a,r=new Nr,l=new Y(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new ce}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(a0,t)}rotateY(t){return this.rotateOnAxis(r0,t)}rotateZ(t){return this.rotateOnAxis(s0,t)}translateOnAxis(t,i){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(a0,t)}translateY(t){return this.translateOnAxis(r0,t)}translateZ(t){return this.translateOnAxis(s0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?wc.copy(t):wc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oa.lookAt(jo,wc,this.up):oa.lookAt(wc,jo,this.up),this.quaternion.setFromRotationMatrix(oa),l&&(oa.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(oa),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o0),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mM),Ch.child=t,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o0),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),y=h(t.skeletons),M=h(t.animations),T=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Zn.DEFAULT_UP=new Y(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new Y,la=new Y,Dh=new Y,ca=new Y,Ts=new Y,As=new Y,l0=new Y,Uh=new Y,Lh=new Y,Nh=new Y,Oh=new ke,Ph=new ke,Ih=new ke;class _i{constructor(t=new Y,i=new Y,r=new Y){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ti.subVectors(l,i),la.subVectors(r,i),Dh.subVectors(t,i);const h=Ti.dot(Ti),d=Ti.dot(la),m=Ti.dot(Dh),p=la.dot(la),_=la.dot(Dh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,M=(p*m-d*_)*y,T=(h*_-d*m)*y;return c.set(1-M-T,T,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ca)===null?!1:ca.x>=0&&ca.y>=0&&ca.x+ca.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ca.x),m.addScaledVector(h,ca.y),m.addScaledVector(d,ca.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return Oh.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Oh.fromBufferAttribute(t,i),Ph.fromBufferAttribute(t,r),Ih.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Oh,c.x),h.addScaledVector(Ph,c.y),h.addScaledVector(Ih,c.z),h}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),la.subVectors(t,i),Ti.cross(la).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),la.subVectors(this.a,this.b),Ti.cross(la).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;Ts.subVectors(l,r),As.subVectors(c,r),Uh.subVectors(t,r);const m=Ts.dot(Uh),p=As.dot(Uh);if(m<=0&&p<=0)return i.copy(r);Lh.subVectors(t,l);const _=Ts.dot(Lh),g=As.dot(Lh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(Ts,h);Nh.subVectors(t,c);const M=Ts.dot(Nh),T=As.dot(Nh);if(T>=0&&M<=T)return i.copy(c);const R=M*p-m*T;if(R<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(r).addScaledVector(As,d);const x=_*T-M*g;if(x<=0&&g-_>=0&&M-T>=0)return l0.subVectors(c,l),d=(g-_)/(g-_+(M-T)),i.copy(l).addScaledVector(l0,d);const v=1/(x+R+y);return h=R*v,d=y*v,i.copy(r).addScaledVector(Ts,h).addScaledVector(As,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function zh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ue{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=be.workingColorSpace){if(t=$d(t,1),i=re(i,0,1),r=re(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=zh(h,c,t+1/3),this.g=zh(h,c,t),this.b=zh(h,c,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=ri){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ri){const r=mv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return be.workingToColorSpace(Ln.copy(this),t),Math.round(re(Ln.r*255,0,255))*65536+Math.round(re(Ln.g*255,0,255))*256+Math.round(re(Ln.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=ri){be.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,l=Ln.b;return t!==ri?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ya),this.setHSL(Ya.h+t,Ya.s+i,Ya.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ya),t.getHSL(Cc);const r=el(Ya.h,Cc.h,i),l=el(Ya.s,Cc.s,i),c=el(Ya.l,Cc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ue;Ue.NAMES=mv;let _M=0;class ul extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=da(),this.name="",this.type="Material",this.blending=Vs,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=nd,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ed&&(r.blendSrc=this.blendSrc),this.blendDst!==nd&&(r.blendDst=this.blendDst),this.blendEquation!==Ar&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ou extends ul{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _a,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const on=new Y,Dc=new ne;let gM=0;class Ci{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Hd,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(t),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(t),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(t),this.setXYZ(i,on.x,on.y,on.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=De(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ai(i,this.array)),i}setX(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ai(i,this.array)),i}setY(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ai(i,this.array)),i}setZ(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ai(i,this.array)),i}setW(t,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),r=De(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),r=De(r,this.array),l=De(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=De(i,this.array),r=De(r,this.array),l=De(l,this.array),c=De(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hd&&(t.usage=this.usage),t}}class _v extends Ci{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class gv extends Ci{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class oi extends Ci{constructor(t,i,r){super(new Float32Array(t),i,r)}}let vM=0;const mi=new tn,Bh=new Zn,Rs=new Y,ai=new tr,Zo=new tr,yn=new Y;class Di extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(dv(t)?gv:_v)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ce().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Bh.lookAt(t),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new oi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Zo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ai.min,Zo.min),ai.expandByPoint(yn),yn.addVectors(ai.max,Zo.max),ai.expandByPoint(yn)):(ai.expandByPoint(Zo.min),ai.expandByPoint(Zo.max))}ai.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)yn.fromBufferAttribute(d,p),m&&(Rs.fromBufferAttribute(t,p),yn.add(Rs)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new Y,m[X]=new Y;const p=new Y,_=new Y,g=new Y,y=new ne,M=new ne,T=new ne,R=new Y,x=new Y;function v(X,D,w){p.fromBufferAttribute(r,X),_.fromBufferAttribute(r,D),g.fromBufferAttribute(r,w),y.fromBufferAttribute(c,X),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,w),_.sub(p),g.sub(p),M.sub(y),T.sub(y);const P=1/(M.x*T.y-T.x*M.y);isFinite(P)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(g,-M.y).multiplyScalar(P),x.copy(g).multiplyScalar(M.x).addScaledVector(_,-T.x).multiplyScalar(P),d[X].add(R),d[D].add(R),d[w].add(R),m[X].add(x),m[D].add(x),m[w].add(x))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let X=0,D=I.length;X<D;++X){const w=I[X],P=w.start,Q=w.count;for(let et=P,lt=P+Q;et<lt;et+=3)v(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const L=new Y,C=new Y,B=new Y,G=new Y;function F(X){B.fromBufferAttribute(l,X),G.copy(B);const D=d[X];L.copy(D),L.sub(B.multiplyScalar(B.dot(D))).normalize(),C.crossVectors(G,D);const P=C.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,P)}for(let X=0,D=I.length;X<D;++X){const w=I[X],P=w.start,Q=w.count;for(let et=P,lt=P+Q;et<lt;et+=3)F(t.getX(et+0)),F(t.getX(et+1)),F(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new Y,c=new Y,h=new Y,d=new Y,m=new Y,p=new Y,_=new Y,g=new Y;if(t)for(let y=0,M=t.count;y<M;y+=3){const T=t.getX(y+0),R=t.getX(y+1),x=t.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),d.add(_),m.add(_),p.add(_),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let M=0,T=0;for(let R=0,x=m.length;R<x;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*_;for(let v=0;v<_;v++)y[T++]=p[M++]}return new Ci(y,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],M=t(y,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const M=p[g];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=t.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,M=g.length;y<M;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c0=new tn,xr=new ep,Uc=new cl,u0=new Y,Lc=new Y,Nc=new Y,Oc=new Y,Fh=new Y,Pc=new Y,f0=new Y,Ic=new Y;class gi extends Zn{constructor(t=new Di,i=new ou){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Fh.fromBufferAttribute(g,t),h?Pc.addScaledVector(Fh,_):Pc.addScaledVector(Fh.sub(i),_))}i.add(Pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),xr.copy(t.ray).recast(t.near),!(Uc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Uc,u0)===null||xr.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(c0.copy(c).invert(),xr.copy(t.ray).applyMatrix4(c0),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,xr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,R=y.length;T<R;T++){const x=y[T],v=h[x.materialIndex],I=Math.max(x.start,M.start),L=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let C=I,B=L;C<B;C+=3){const G=d.getX(C),F=d.getX(C+1),X=d.getX(C+2);l=zc(this,v,t,r,p,_,g,G,F,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let x=T,v=R;x<v;x+=3){const I=d.getX(x),L=d.getX(x+1),C=d.getX(x+2);l=zc(this,h,t,r,p,_,g,I,L,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,R=y.length;T<R;T++){const x=y[T],v=h[x.materialIndex],I=Math.max(x.start,M.start),L=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let C=I,B=L;C<B;C+=3){const G=C,F=C+1,X=C+2;l=zc(this,v,t,r,p,_,g,G,F,X),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let x=T,v=R;x<v;x+=3){const I=x,L=x+1,C=x+2;l=zc(this,h,t,r,p,_,g,I,L,C),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function yM(s,t,i,r,l,c,h,d){let m;if(t.side===Gn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===$a,d),m===null)return null;Ic.copy(d),Ic.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ic);return p<i.near||p>i.far?null:{distance:p,point:Ic.clone(),object:s}}function zc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,Lc),s.getVertexPosition(m,Nc),s.getVertexPosition(p,Oc);const _=yM(s,t,i,r,Lc,Nc,Oc,f0);if(_){const g=new Y;_i.getBarycoord(f0,Lc,Nc,Oc,g),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,g,new ne)),c&&(_.uv1=_i.getInterpolatedAttribute(c,d,m,p,g,new ne)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,g,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new Y,materialIndex:0};_i.getNormal(Lc,Nc,Oc,y.normal),_.face=y,_.barycoord=g}return _}class fl extends Di{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,M=0;T("z","y","x",-1,-1,r,i,t,h,c,0),T("z","y","x",1,-1,r,i,-t,h,c,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,c,4),T("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(p,3)),this.setAttribute("normal",new oi(_,3)),this.setAttribute("uv",new oi(g,2));function T(R,x,v,I,L,C,B,G,F,X,D){const w=C/F,P=B/X,Q=C/2,et=B/2,lt=G/2,ut=F+1,O=X+1;let K=0,q=0;const yt=new Y;for(let U=0;U<O;U++){const $=U*P-et;for(let vt=0;vt<ut;vt++){const St=vt*w-Q;yt[R]=St*I,yt[x]=$*L,yt[v]=lt,p.push(yt.x,yt.y,yt.z),yt[R]=0,yt[x]=0,yt[v]=G>0?1:-1,_.push(yt.x,yt.y,yt.z),g.push(vt/F),g.push(1-U/X),K+=1}}for(let U=0;U<X;U++)for(let $=0;$<F;$++){const vt=y+$+ut*U,St=y+$+ut*(U+1),wt=y+($+1)+ut*(U+1),at=y+($+1)+ut*U;m.push(vt,St,at),m.push(St,wt,at),q+=6}d.addGroup(M,q,D),M+=q,y+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=js(s[i]);for(const l in r)t[l]=r[l]}return t}function SM(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function vv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const ip={clone:js,merge:Hn};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends ul{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class yv extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new Y,h0=new ne,d0=new ne;class si extends yv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,h0,d0),i.subVectors(d0,h0)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(tl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ws=-90,Cs=1;class EM extends Zn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(ws,Cs,t,i);l.layers=this.layers,this.add(l);const c=new si(ws,Cs,t,i);c.layers=this.layers,this.add(c);const h=new si(ws,Cs,t,i);h.layers=this.layers,this.add(h);const d=new si(ws,Cs,t,i);d.layers=this.layers,this.add(d);const m=new si(ws,Cs,t,i);m.layers=this.layers,this.add(m);const p=new si(ws,Cs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,y,M),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Sv extends Nn{constructor(t=[],i=Ys,r,l,c,h,d,m,p,_){super(t,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bM extends Or{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Sv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new fl(5,5,5),c=new ga({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Qa});c.uniforms.tEquirect.value=i;const h=new gi(l,c),d=i.minFilter;return i.minFilter===Cr&&(i.minFilter=Gi),new EM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Fs extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const x=i.getJointPose(R,r),v=this._getHandJoint(p,R);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Fs;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class xv extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _a,this.environmentIntensity=1,this.environmentRotation=new _a,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Mv{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Hd,this.updateRanges=[],this.version=0,this.uuid=da()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=da()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=da()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new Y;class ki{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=De(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ai(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ai(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ai(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ai(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),r=De(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),r=De(r,this.array),l=De(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=De(i,this.array),r=De(r,this.array),l=De(l,this.array),c=De(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ci(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ki(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ev extends ul{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ds;const Ko=new Y,Us=new Y,Ls=new Y,Ns=new ne,Qo=new ne,bv=new tn,Bc=new Y,Jo=new Y,Fc=new Y,p0=new ne,Gh=new ne,m0=new ne;class AM extends Zn{constructor(t=new Ev){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new Di;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Mv(i,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new ki(r,3,0,!1)),Ds.setAttribute("uv",new ki(r,2,3,!1))}this.geometry=Ds,this.material=t,this.center=new ne(.5,.5),this.count=1}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),bv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ls.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Hc(Bc.set(-.5,-.5,0),Ls,h,Us,l,c),Hc(Jo.set(.5,-.5,0),Ls,h,Us,l,c),Hc(Fc.set(.5,.5,0),Ls,h,Us,l,c),p0.set(0,0),Gh.set(1,0),m0.set(1,1);let d=t.ray.intersectTriangle(Bc,Jo,Fc,!1,Ko);if(d===null&&(Hc(Jo.set(-.5,.5,0),Ls,h,Us,l,c),Gh.set(0,1),d=t.ray.intersectTriangle(Bc,Fc,Jo,!1,Ko),d===null))return;const m=t.ray.origin.distanceTo(Ko);m<t.near||m>t.far||i.push({distance:m,point:Ko.clone(),uv:_i.getInterpolation(Ko,Bc,Jo,Fc,p0,Gh,m0,new ne),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hc(s,t,i,r,l,c){Ns.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(Qo.x=c*Ns.x-l*Ns.y,Qo.y=l*Ns.x+c*Ns.y):Qo.copy(Ns),s.copy(t),s.x+=Qo.x,s.y+=Qo.y,s.applyMatrix4(bv)}const Vh=new Y,RM=new Y,wM=new ce;class ja{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Vh.subVectors(r,i).cross(RM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Vh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||wM.getNormalMatrix(t),l=this.coplanarPoint(Vh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mr=new cl,CM=new ne(.5,.5),Gc=new Y;class Tv{constructor(t=new ja,i=new ja,r=new ja,l=new ja,c=new ja,h=new ja){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Vi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],M=c[7],T=c[8],R=c[9],x=c[10],v=c[11],I=c[12],L=c[13],C=c[14],B=c[15];if(l[0].setComponents(p-h,M-_,v-T,B-I).normalize(),l[1].setComponents(p+h,M+_,v+T,B+I).normalize(),l[2].setComponents(p+d,M+g,v+R,B+L).normalize(),l[3].setComponents(p-d,M-g,v-R,B-L).normalize(),r)l[4].setComponents(m,y,x,C).normalize(),l[5].setComponents(p-m,M-y,v-x,B-C).normalize();else if(l[4].setComponents(p-m,M-y,v-x,B-C).normalize(),i===Vi)l[5].setComponents(p+m,M+y,v+x,B+C).normalize();else if(i===au)l[5].setComponents(m,y,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mr)}intersectsSprite(t){Mr.center.set(0,0,0);const i=CM.distanceTo(t.center);return Mr.radius=.7071067811865476+i,Mr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Gc.x=l.normal.x>0?t.max.x:t.min.x,Gc.y=l.normal.y>0?t.max.y:t.min.y,Gc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DM extends Nn{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Av extends Nn{constructor(t,i,r=Ur,l,c,h,d=wi,m=wi,p,_=al,g=1){if(_!==al&&_!==rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new tp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class lu extends Di{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=t/d,y=i/m,M=[],T=[],R=[],x=[];for(let v=0;v<_;v++){const I=v*y-h;for(let L=0;L<p;L++){const C=L*g-c;T.push(C,-I,0),R.push(0,0,1),x.push(L/d),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let I=0;I<d;I++){const L=I+p*v,C=I+p*(v+1),B=I+1+p*(v+1),G=I+1+p*v;M.push(L,C,G),M.push(C,B,G)}this.setIndex(M),this.setAttribute("position",new oi(T,3)),this.setAttribute("normal",new oi(R,3)),this.setAttribute("uv",new oi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class cu extends Di{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(h+d,Math.PI);let p=0;const _=[],g=new Y,y=new Y,M=[],T=[],R=[],x=[];for(let v=0;v<=r;v++){const I=[],L=v/r;let C=0;v===0&&h===0?C=.5/i:v===r&&m===Math.PI&&(C=-.5/i);for(let B=0;B<=i;B++){const G=B/i;g.x=-t*Math.cos(l+G*c)*Math.sin(h+L*d),g.y=t*Math.cos(h+L*d),g.z=t*Math.sin(l+G*c)*Math.sin(h+L*d),T.push(g.x,g.y,g.z),y.copy(g).normalize(),R.push(y.x,y.y,y.z),x.push(G+C,1-L),I.push(p++)}_.push(I)}for(let v=0;v<r;v++)for(let I=0;I<i;I++){const L=_[v][I+1],C=_[v][I],B=_[v+1][I],G=_[v+1][I+1];(v!==0||h>0)&&M.push(L,C,G),(v!==r-1||m<Math.PI)&&M.push(C,B,G)}this.setIndex(M),this.setAttribute("position",new oi(T,3)),this.setAttribute("normal",new oi(R,3)),this.setAttribute("uv",new oi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class UM extends Di{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],r=new Set,l=new Y,c=new Y;if(t.index!==null){const h=t.attributes.position,d=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:d.count,materialIndex:0}]);for(let p=0,_=m.length;p<_;++p){const g=m[p],y=g.start,M=g.count;for(let T=y,R=y+M;T<R;T+=3)for(let x=0;x<3;x++){const v=d.getX(T+x),I=d.getX(T+(x+1)%3);l.fromBufferAttribute(h,v),c.fromBufferAttribute(h,I),_0(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}}else{const h=t.attributes.position;for(let d=0,m=h.count/3;d<m;d++)for(let p=0;p<3;p++){const _=3*d+p,g=3*d+(p+1)%3;l.fromBufferAttribute(h,_),c.fromBufferAttribute(h,g),_0(l,c,r)===!0&&(i.push(l.x,l.y,l.z),i.push(c.x,c.y,c.z))}}this.setAttribute("position",new oi(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function _0(s,t,i){const r=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class LM extends ul{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NM extends ul{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class OM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.abortController=new AbortController,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const M=p[g],T=p[g+1];if(M.global&&(M.lastIndex=0),M.test(_))return T}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const PM=new OM;class ap{constructor(t){this.manager=t!==void 0?t:PM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ap.DEFAULT_MATERIAL_NAME="__DEFAULT";const Os=new WeakMap;class IM extends ap{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=kh.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let g=Os.get(h);g===void 0&&(g=[],Os.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=ol("img");function m(){_(),i&&i(this);const g=Os.get(this)||[];for(let y=0;y<g.length;y++){const M=g[y];M.onLoad&&M.onLoad(this)}Os.delete(this),c.manager.itemEnd(t)}function p(g){_(),l&&l(g),kh.remove(`image:${t}`);const y=Os.get(this)||[];for(let M=0;M<y.length;M++){const T=y[M];T.onError&&T.onError(g)}Os.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),kh.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class Rv extends ap{constructor(t){super(t)}load(t,i,r,l){const c=new Nn,h=new IM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class zM extends yv{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BM extends Di{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class FM extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Gd extends Mv{constructor(t,i,r=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}const g0=new tn;class HM{constructor(t,i,r=0,l=1/0){this.ray=new ep(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new np,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return g0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(g0),this}intersectObject(t,i=!0,r=[]){return Vd(t,this,r,i),r.sort(v0),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Vd(t[l],this,r,i);return r.sort(v0),r}}function v0(s,t){return s.distance-t.distance}function Vd(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)Vd(c[h],t,i,!0)}}class y0{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(re(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const S0=new Y,Vc=new Y,Ps=new Y,Is=new Y,Xh=new Y,GM=new Y,VM=new Y;class kM{constructor(t=new Y,i=new Y){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){S0.subVectors(t,this.start),Vc.subVectors(this.end,this.start);const r=Vc.dot(Vc);let c=Vc.dot(S0)/r;return i&&(c=re(c,0,1)),c}closestPointToPoint(t,i,r){const l=this.closestPointToPointParameter(t,i);return this.delta(r).multiplyScalar(l).add(this.start)}distanceSqToLine3(t,i=GM,r=VM){const l=10000000000000001e-32;let c,h;const d=this.start,m=t.start,p=this.end,_=t.end;Ps.subVectors(p,d),Is.subVectors(_,m),Xh.subVectors(d,m);const g=Ps.dot(Ps),y=Is.dot(Is),M=Is.dot(Xh);if(g<=l&&y<=l)return i.copy(d),r.copy(m),i.sub(r),i.dot(i);if(g<=l)c=0,h=M/y,h=re(h,0,1);else{const T=Ps.dot(Xh);if(y<=l)h=0,c=re(-T/g,0,1);else{const R=Ps.dot(Is),x=g*y-R*R;x!==0?c=re((R*M-T*y)/x,0,1):c=0,h=(R*c+M)/y,h<0?(h=0,c=re(-T/g,0,1)):h>1&&(h=1,c=re((R-T)/g,0,1))}}return i.copy(d).add(Ps.multiplyScalar(c)),r.copy(m).add(Is.multiplyScalar(h)),i.sub(r),i.dot(i)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class XM extends Pr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function x0(s,t,i,r){const l=WM(r);switch(i){case sv:return s*t;case lv:return s*t/l.components*l.byteLength;case Kd:return s*t/l.components*l.byteLength;case cv:return s*t*2/l.components*l.byteLength;case Qd:return s*t*2/l.components*l.byteLength;case ov:return s*t*3/l.components*l.byteLength;case Ri:return s*t*4/l.components*l.byteLength;case Jd:return s*t*4/l.components*l.byteLength;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case $c:case tu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case md:case gd:return Math.max(s,16)*Math.max(t,8)/4;case pd:case _d:return Math.max(s,8)*Math.max(t,8)/2;case vd:case yd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Md:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ed:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Td:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case wd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Dd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Nd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case eu:case Pd:case Id:return Math.ceil(s/4)*Math.ceil(t/4)*16;case uv:case zd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bd:case Fd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WM(s){switch(s){case ma:case iv:return{byteLength:1,components:1};case nl:case av:case ll:return{byteLength:2,components:1};case jd:case Zd:return{byteLength:2,components:4};case Ur:case qd:case ha:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function YM(s){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,_);else{g.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<g.length;M++){const T=g[y],R=g[M];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++y,g[y]=R)}g.length=y+1;for(let M=0,T=g.length;M<T;M++){const R=g[M];s.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var qM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jM=`#ifdef USE_ALPHAHASH
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
#endif`,ZM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eE=`#ifdef USE_BATCHING
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
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sE=`#ifdef USE_IRIDESCENCE
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
#endif`,oE=`#ifdef USE_BUMPMAP
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
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_E=`#define PI 3.141592653589793
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
} // validated`,gE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vE=`vec3 transformedNormal = objectNormal;
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
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EE="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,wE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OE=`#ifdef USE_GRADIENTMAP
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
}`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
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
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
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
#endif`,WE=`struct PhysicalMaterial {
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
}`,YE=`
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
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
#endif`,jE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nb=`#if defined( USE_POINTS_UV )
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
#endif`,ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ab=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ob=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`#ifdef USE_MORPHTARGETS
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
#endif`,cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mb=`#ifdef USE_NORMALMAP
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
#endif`,_b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Db=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ub=`float getShadowMask() {
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nb=`#ifdef USE_SKINNING
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
#endif`,Ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Ib=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hb=`#ifdef USE_TRANSMISSION
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
#endif`,Gb=`#ifdef USE_TRANSMISSION
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qb=`uniform sampler2D t2D;
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
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
}`,tT=`#define DISTANCE
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
}`,eT=`#define DISTANCE
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
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
}`,rT=`uniform vec3 diffuse;
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
}`,sT=`#include <common>
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#define LAMBERT
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
}`,cT=`#define LAMBERT
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
}`,uT=`#define MATCAP
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
}`,fT=`#define MATCAP
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
}`,hT=`#define NORMAL
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
}`,dT=`#define NORMAL
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
}`,pT=`#define PHONG
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
}`,mT=`#define PHONG
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
}`,_T=`#define STANDARD
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
}`,gT=`#define STANDARD
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
}`,vT=`#define TOON
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
}`,yT=`#define TOON
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
}`,ST=`uniform float size;
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
}`,xT=`uniform vec3 diffuse;
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
}`,MT=`#include <common>
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
}`,ET=`uniform vec3 color;
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
}`,bT=`uniform float rotation;
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
}`,TT=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:qM,alphahash_pars_fragment:jM,alphamap_fragment:ZM,alphamap_pars_fragment:KM,alphatest_fragment:QM,alphatest_pars_fragment:JM,aomap_fragment:$M,aomap_pars_fragment:tE,batching_pars_vertex:eE,batching_vertex:nE,begin_vertex:iE,beginnormal_vertex:aE,bsdfs:rE,iridescence_fragment:sE,bumpmap_pars_fragment:oE,clipping_planes_fragment:lE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:uE,clipping_planes_vertex:fE,color_fragment:hE,color_pars_fragment:dE,color_pars_vertex:pE,color_vertex:mE,common:_E,cube_uv_reflection_fragment:gE,defaultnormal_vertex:vE,displacementmap_pars_vertex:yE,displacementmap_vertex:SE,emissivemap_fragment:xE,emissivemap_pars_fragment:ME,colorspace_fragment:EE,colorspace_pars_fragment:bE,envmap_fragment:TE,envmap_common_pars_fragment:AE,envmap_pars_fragment:RE,envmap_pars_vertex:wE,envmap_physical_pars_fragment:FE,envmap_vertex:CE,fog_vertex:DE,fog_pars_vertex:UE,fog_fragment:LE,fog_pars_fragment:NE,gradientmap_pars_fragment:OE,lightmap_pars_fragment:PE,lights_lambert_fragment:IE,lights_lambert_pars_fragment:zE,lights_pars_begin:BE,lights_toon_fragment:HE,lights_toon_pars_fragment:GE,lights_phong_fragment:VE,lights_phong_pars_fragment:kE,lights_physical_fragment:XE,lights_physical_pars_fragment:WE,lights_fragment_begin:YE,lights_fragment_maps:qE,lights_fragment_end:jE,logdepthbuf_fragment:ZE,logdepthbuf_pars_fragment:KE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:JE,map_fragment:$E,map_pars_fragment:tb,map_particle_fragment:eb,map_particle_pars_fragment:nb,metalnessmap_fragment:ib,metalnessmap_pars_fragment:ab,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ob,morphtarget_pars_vertex:lb,morphtarget_vertex:cb,normal_fragment_begin:ub,normal_fragment_maps:fb,normal_pars_fragment:hb,normal_pars_vertex:db,normal_vertex:pb,normalmap_pars_fragment:mb,clearcoat_normal_fragment_begin:_b,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:vb,iridescence_pars_fragment:yb,opaque_fragment:Sb,packing:xb,premultiplied_alpha_fragment:Mb,project_vertex:Eb,dithering_fragment:bb,dithering_pars_fragment:Tb,roughnessmap_fragment:Ab,roughnessmap_pars_fragment:Rb,shadowmap_pars_fragment:wb,shadowmap_pars_vertex:Cb,shadowmap_vertex:Db,shadowmask_pars_fragment:Ub,skinbase_vertex:Lb,skinning_pars_vertex:Nb,skinning_vertex:Ob,skinnormal_vertex:Pb,specularmap_fragment:Ib,specularmap_pars_fragment:zb,tonemapping_fragment:Bb,tonemapping_pars_fragment:Fb,transmission_fragment:Hb,transmission_pars_fragment:Gb,uv_pars_fragment:Vb,uv_pars_vertex:kb,uv_vertex:Xb,worldpos_vertex:Wb,background_vert:Yb,background_frag:qb,backgroundCube_vert:jb,backgroundCube_frag:Zb,cube_vert:Kb,cube_frag:Qb,depth_vert:Jb,depth_frag:$b,distanceRGBA_vert:tT,distanceRGBA_frag:eT,equirect_vert:nT,equirect_frag:iT,linedashed_vert:aT,linedashed_frag:rT,meshbasic_vert:sT,meshbasic_frag:oT,meshlambert_vert:lT,meshlambert_frag:cT,meshmatcap_vert:uT,meshmatcap_frag:fT,meshnormal_vert:hT,meshnormal_frag:dT,meshphong_vert:pT,meshphong_frag:mT,meshphysical_vert:_T,meshphysical_frag:gT,meshtoon_vert:vT,meshtoon_frag:yT,points_vert:ST,points_frag:xT,shadow_vert:MT,shadow_frag:ET,sprite_vert:bT,sprite_frag:TT},Dt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},jn={basic:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Hn([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Hn([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Hn([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Hn([Dt.points,Dt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Hn([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Hn([Dt.common,Dt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Hn([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Hn([Dt.sprite,Dt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Hn([Dt.common,Dt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Hn([Dt.lights,Dt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};jn.physical={uniforms:Hn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const kc={r:0,b:0,g:0},Er=new _a,AT=new tn;function RT(s,t,i,r,l,c,h){const d=new Ue(0);let m=c===!0?0:1,p,_,g=null,y=0,M=null;function T(L){let C=L.isScene===!0?L.background:null;return C&&C.isTexture&&(C=(L.backgroundBlurriness>0?i:t).get(C)),C}function R(L){let C=!1;const B=T(L);B===null?v(d,m):B&&B.isColor&&(v(B,1),C=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(L,C){const B=T(C);B&&(B.isCubeTexture||B.mapping===su)?(_===void 0&&(_=new gi(new fl(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:js(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Er.copy(C.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),_.material.uniforms.envMap.value=B,_.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(AT.makeRotationFromEuler(Er)),_.material.toneMapped=be.getTransfer(B.colorSpace)!==Ie,(g!==B||y!==B.version||M!==s.toneMapping)&&(_.material.needsUpdate=!0,g=B,y=B.version,M=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new gi(new lu(2,2),new ga({name:"BackgroundMaterial",uniforms:js(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=be.getTransfer(B.colorSpace)!==Ie,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||y!==B.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,g=B,y=B.version,M=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,C){L.getRGB(kc,vv(s)),r.buffers.color.setClear(kc.r,kc.g,kc.b,C,h)}function I(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,C=1){d.set(L),m=C,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:R,addToRenderList:x,dispose:I}}function wT(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(w,P,Q,et,lt){let ut=!1;const O=g(et,Q,P);c!==O&&(c=O,p(c.object)),ut=M(w,et,Q,lt),ut&&T(w,et,Q,lt),lt!==null&&t.update(lt,s.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,C(w,P,Q,et),lt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function g(w,P,Q){const et=Q.wireframe===!0;let lt=r[w.id];lt===void 0&&(lt={},r[w.id]=lt);let ut=lt[P.id];ut===void 0&&(ut={},lt[P.id]=ut);let O=ut[et];return O===void 0&&(O=y(m()),ut[et]=O),O}function y(w){const P=[],Q=[],et=[];for(let lt=0;lt<i;lt++)P[lt]=0,Q[lt]=0,et[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:et,object:w,attributes:{},index:null}}function M(w,P,Q,et){const lt=c.attributes,ut=P.attributes;let O=0;const K=Q.getAttributes();for(const q in K)if(K[q].location>=0){const U=lt[q];let $=ut[q];if($===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&($=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&($=w.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;O++}return c.attributesNum!==O||c.index!==et}function T(w,P,Q,et){const lt={},ut=P.attributes;let O=0;const K=Q.getAttributes();for(const q in K)if(K[q].location>=0){let U=ut[q];U===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),lt[q]=$,O++}c.attributes=lt,c.attributesNum=O,c.index=et}function R(){const w=c.newAttributes;for(let P=0,Q=w.length;P<Q;P++)w[P]=0}function x(w){v(w,0)}function v(w,P){const Q=c.newAttributes,et=c.enabledAttributes,lt=c.attributeDivisors;Q[w]=1,et[w]===0&&(s.enableVertexAttribArray(w),et[w]=1),lt[w]!==P&&(s.vertexAttribDivisor(w,P),lt[w]=P)}function I(){const w=c.newAttributes,P=c.enabledAttributes;for(let Q=0,et=P.length;Q<et;Q++)P[Q]!==w[Q]&&(s.disableVertexAttribArray(Q),P[Q]=0)}function L(w,P,Q,et,lt,ut,O){O===!0?s.vertexAttribIPointer(w,P,Q,lt,ut):s.vertexAttribPointer(w,P,Q,et,lt,ut)}function C(w,P,Q,et){R();const lt=et.attributes,ut=Q.getAttributes(),O=P.defaultAttributeValues;for(const K in ut){const q=ut[K];if(q.location>=0){let yt=lt[K];if(yt===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(yt=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(yt=w.instanceColor)),yt!==void 0){const U=yt.normalized,$=yt.itemSize,vt=t.get(yt);if(vt===void 0)continue;const St=vt.buffer,wt=vt.type,at=vt.bytesPerElement,dt=wt===s.INT||wt===s.UNSIGNED_INT||yt.gpuType===qd;if(yt.isInterleavedBufferAttribute){const xt=yt.data,Ot=xt.stride,Yt=yt.offset;if(xt.isInstancedInterleavedBuffer){for(let ie=0;ie<q.locationSize;ie++)v(q.location+ie,xt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ie=0;ie<q.locationSize;ie++)x(q.location+ie);s.bindBuffer(s.ARRAY_BUFFER,St);for(let ie=0;ie<q.locationSize;ie++)L(q.location+ie,$/q.locationSize,wt,U,Ot*at,(Yt+$/q.locationSize*ie)*at,dt)}else{if(yt.isInstancedBufferAttribute){for(let xt=0;xt<q.locationSize;xt++)v(q.location+xt,yt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let xt=0;xt<q.locationSize;xt++)x(q.location+xt);s.bindBuffer(s.ARRAY_BUFFER,St);for(let xt=0;xt<q.locationSize;xt++)L(q.location+xt,$/q.locationSize,wt,U,$*at,$/q.locationSize*xt*at,dt)}}else if(O!==void 0){const U=O[K];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(q.location,U);break;case 3:s.vertexAttrib3fv(q.location,U);break;case 4:s.vertexAttrib4fv(q.location,U);break;default:s.vertexAttrib1fv(q.location,U)}}}}I()}function B(){X();for(const w in r){const P=r[w];for(const Q in P){const et=P[Q];for(const lt in et)_(et[lt].object),delete et[lt];delete P[Q]}delete r[w]}}function G(w){if(r[w.id]===void 0)return;const P=r[w.id];for(const Q in P){const et=P[Q];for(const lt in et)_(et[lt].object),delete et[lt];delete P[Q]}delete r[w.id]}function F(w){for(const P in r){const Q=r[P];if(Q[w.id]===void 0)continue;const et=Q[w.id];for(const lt in et)_(et[lt].object),delete et[lt];delete Q[w.id]}}function X(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:x,disableUnusedAttributes:I}}function CT(s,t,i){let r;function l(p){r=p}function c(p,_){s.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(s.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let T=0;T<g;T++)M+=_[T];i.update(M,r,1)}function m(p,_,g,y){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)h(p[T],_[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,g);let T=0;for(let R=0;R<g;R++)T+=_[R]*y[R];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function DT(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Ri&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const X=F===ll&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ma&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ha&&!X)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=T>0,G=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:C,vertexTextures:B,maxSamples:G}}function UT(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new ja,d=new ce,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||r!==0||l;return l=y,r=g.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,M){const T=g.clippingPlanes,R=g.clipIntersection,x=g.clipShadows,v=s.get(g);if(!l||T===null||T.length===0||c&&!x)c?_(null):p();else{const I=c?0:r,L=I*4;let C=v.clippingState||null;m.value=C,C=_(T,y,L,M);for(let B=0;B!==L;++B)C[B]=i[B];v.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,y,M,T){const R=g!==null?g.length:0;let x=null;if(R!==0){if(x=m.value,T!==!0||x===null){const v=M+R*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(x===null||x.length<v)&&(x=new Float32Array(v));for(let L=0,C=M;L!==R;++L,C+=4)h.copy(g[L]).applyMatrix4(I,d),h.normal.toArray(x,C),x[C+3]=h.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,x}}function LT(s){let t=new WeakMap;function i(h,d){return d===ud?h.mapping=Ys:d===fd&&(h.mapping=qs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ud||d===fd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new bM(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Hs=4,M0=[.125,.215,.35,.446,.526,.582],Rr=20,Wh=new zM,E0=new Ue;let Yh=null,qh=0,jh=0,Zh=!1;const Tr=(1+Math.sqrt(5))/2,zs=1/Tr,b0=[new Y(-Tr,zs,0),new Y(Tr,zs,0),new Y(-zs,0,Tr),new Y(zs,0,Tr),new Y(0,Tr,-zs),new Y(0,Tr,zs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],NT=new Y;class T0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=NT}=c;Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,qh,jh),this._renderer.xr.enabled=Zh,t.scissorTest=!1,Xc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ys||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),qh=this._renderer.getActiveCubeFace(),jh=this._renderer.getActiveMipmapLevel(),Zh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:ll,format:Ri,colorSpace:Lr,depthBuffer:!1},l=A0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OT(c)),this._blurMaterial=PT(c,t,i)}return l}_compileMaterial(t){const i=new gi(this._lodPlanes[0],t);this._renderer.compile(i,Wh)}_sceneToCubeUV(t,i,r,l,c){const m=new si(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(E0),g.toneMapping=Ja,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new ou({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),x=new gi(new fl,R);let v=!1;const I=t.background;I?I.isColor&&(R.color.copy(I),t.background=null,v=!0):(R.color.copy(E0),v=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[L],c.y,c.z)):C===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[L]));const B=this._cubeSize;Xc(l,C*B,L>2?B:0,B,B),g.setRenderTarget(l),v&&g.render(x,m),g.render(t,m)}x.geometry.dispose(),x.material.dispose(),g.toneMapping=M,g.autoClear=y,t.background=I}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ys||t.mapping===qs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new gi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Xc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Wh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=b0[(l-c-1)%b0.length];this._blur(t,c-1,c,h,d)}i.autoClear=r}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new gi(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Rr-1),R=c/T,x=isFinite(c)?1+Math.floor(_*R):Rr;x>Rr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Rr}`);const v=[];let I=0;for(let F=0;F<Rr;++F){const X=F/R,D=Math.exp(-X*X/2);v.push(D),F===0?I+=D:F<x&&(I+=2*D)}for(let F=0;F<v.length;F++)v[F]=v[F]/I;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-r;const C=this._sizeLods[l],B=3*C*(l>L-Hs?l-L+Hs:0),G=4*(this._cubeSize-C);Xc(i,B,G,3*C,2*C),m.setRenderTarget(i),m.render(g,Wh)}}function OT(s){const t=[],i=[],r=[];let l=s;const c=s-Hs+1+M0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-Hs?m=M0[h-s+Hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,T=6,R=3,x=2,v=1,I=new Float32Array(R*T*M),L=new Float32Array(x*T*M),C=new Float32Array(v*T*M);for(let G=0;G<M;G++){const F=G%3*2/3-1,X=G>2?0:-1,D=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];I.set(D,R*T*G),L.set(y,x*T*G);const w=[G,G,G,G,G,G];C.set(w,v*T*G)}const B=new Di;B.setAttribute("position",new Ci(I,R)),B.setAttribute("uv",new Ci(L,x)),B.setAttribute("faceIndex",new Ci(C,v)),t.push(B),l>Hs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function A0(s,t,i){const r=new Or(s,t,i);return r.texture.mapping=su,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function PT(s,t,i){const r=new Float32Array(Rr),l=new Y(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:rp(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function R0(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

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
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function w0(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function rp(){return`

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
	`}function IT(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ud||m===fd,_=m===Ys||m===qs;if(p||_){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new T0(s)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new T0(s)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function zT(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&ks("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function BT(s,t,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const M in y)t.update(y[M],s.ARRAY_BUFFER)}function p(g){const y=[],M=g.index,T=g.attributes.position;let R=0;if(M!==null){const I=M.array;R=M.version;for(let L=0,C=I.length;L<C;L+=3){const B=I[L+0],G=I[L+1],F=I[L+2];y.push(B,G,G,F,F,B)}}else if(T!==void 0){const I=T.array;R=T.version;for(let L=0,C=I.length/3-1;L<C;L+=3){const B=L+0,G=L+1,F=L+2;y.push(B,G,G,F,F,B)}}else return;const x=new(dv(y)?gv:_v)(y,1);x.version=R;const v=c.get(g);v&&t.remove(v),c.set(g,x)}function _(g){const y=c.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function FT(s,t,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){s.drawElements(r,M,c,y*h),i.update(M,r,1)}function p(y,M,T){T!==0&&(s.drawElementsInstanced(r,M,c,y*h,T),i.update(M,r,T))}function _(y,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,T);let x=0;for(let v=0;v<T;v++)x+=M[v];i.update(x,r,1)}function g(y,M,T,R){if(T===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<y.length;v++)p(y[v]/h,M[v],R[v]);else{x.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,R,0,T);let v=0;for(let I=0;I<T;I++)v+=M[I]*R[I];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function HT(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function GT(s,t,i){const r=new WeakMap,l=new ke;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let w=function(){X.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var M=w;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),x===!0&&(C=3);let B=d.attributes.position.count*C,G=1;B>t.maxTextureSize&&(G=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*G*4*g),X=new pv(F,B,G,g);X.type=ha,X.needsUpdate=!0;const D=C*4;for(let P=0;P<g;P++){const Q=v[P],et=I[P],lt=L[P],ut=B*G*4*P;for(let O=0;O<Q.count;O++){const K=O*D;T===!0&&(l.fromBufferAttribute(Q,O),F[ut+K+0]=l.x,F[ut+K+1]=l.y,F[ut+K+2]=l.z,F[ut+K+3]=0),R===!0&&(l.fromBufferAttribute(et,O),F[ut+K+4]=l.x,F[ut+K+5]=l.y,F[ut+K+6]=l.z,F[ut+K+7]=0),x===!0&&(l.fromBufferAttribute(lt,O),F[ut+K+8]=l.x,F[ut+K+9]=l.y,F[ut+K+10]=l.z,F[ut+K+11]=lt.itemSize===4?l.w:1)}}y={count:g,texture:X,size:new ne(B,G)},r.set(d,y),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let T=0;for(let x=0;x<p.length;x++)T+=p[x];const R=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function VT(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Cv=new Nn,C0=new Av(1,1),Dv=new pv,Uv=new lM,Lv=new Sv,D0=[],U0=[],L0=new Float32Array(16),N0=new Float32Array(9),O0=new Float32Array(4);function Zs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=D0[l];if(c===void 0&&(c=new Float32Array(l),D0[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function dn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function pn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function uu(s,t){let i=U0[t];i===void 0&&(i=new Int32Array(t),U0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function kT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function XT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2fv(this.addr,t),pn(i,t)}}function WT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;s.uniform3fv(this.addr,t),pn(i,t)}}function YT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4fv(this.addr,t),pn(i,t)}}function qT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;O0.set(r),s.uniformMatrix2fv(this.addr,!1,O0),pn(i,r)}}function jT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;N0.set(r),s.uniformMatrix3fv(this.addr,!1,N0),pn(i,r)}}function ZT(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(dn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,r))return;L0.set(r),s.uniformMatrix4fv(this.addr,!1,L0),pn(i,r)}}function KT(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function QT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2iv(this.addr,t),pn(i,t)}}function JT(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3iv(this.addr,t),pn(i,t)}}function $T(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4iv(this.addr,t),pn(i,t)}}function tA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function eA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;s.uniform2uiv(this.addr,t),pn(i,t)}}function nA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;s.uniform3uiv(this.addr,t),pn(i,t)}}function iA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;s.uniform4uiv(this.addr,t),pn(i,t)}}function aA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(C0.compareFunction=fv,c=C0):c=Cv,i.setTexture2D(t||c,l)}function rA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Uv,l)}function sA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Lv,l)}function oA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Dv,l)}function lA(s){switch(s){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return YT;case 35674:return qT;case 35675:return jT;case 35676:return ZT;case 5124:case 35670:return KT;case 35667:case 35671:return QT;case 35668:case 35672:return JT;case 35669:case 35673:return $T;case 5125:return tA;case 36294:return eA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return aA;case 35679:case 36299:case 36307:return rA;case 35680:case 36300:case 36308:case 36293:return sA;case 36289:case 36303:case 36311:case 36292:return oA}}function cA(s,t){s.uniform1fv(this.addr,t)}function uA(s,t){const i=Zs(t,this.size,2);s.uniform2fv(this.addr,i)}function fA(s,t){const i=Zs(t,this.size,3);s.uniform3fv(this.addr,i)}function hA(s,t){const i=Zs(t,this.size,4);s.uniform4fv(this.addr,i)}function dA(s,t){const i=Zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function pA(s,t){const i=Zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function mA(s,t){const i=Zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function _A(s,t){s.uniform1iv(this.addr,t)}function gA(s,t){s.uniform2iv(this.addr,t)}function vA(s,t){s.uniform3iv(this.addr,t)}function yA(s,t){s.uniform4iv(this.addr,t)}function SA(s,t){s.uniform1uiv(this.addr,t)}function xA(s,t){s.uniform2uiv(this.addr,t)}function MA(s,t){s.uniform3uiv(this.addr,t)}function EA(s,t){s.uniform4uiv(this.addr,t)}function bA(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Cv,c[h])}function TA(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Uv,c[h])}function AA(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Lv,c[h])}function RA(s,t,i){const r=this.cache,l=t.length,c=uu(i,l);dn(r,c)||(s.uniform1iv(this.addr,c),pn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Dv,c[h])}function wA(s){switch(s){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return hA;case 35674:return dA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return _A;case 35667:case 35671:return gA;case 35668:case 35672:return vA;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return xA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}class CA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=lA(i.type)}}class DA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=wA(i.type)}}class UA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Kh=/(\w+)(\])?(\[|\.)?/g;function P0(s,t){s.seq.push(t),s.map[t.id]=t}function LA(s,t,i){const r=s.name,l=r.length;for(Kh.lastIndex=0;;){const c=Kh.exec(r),h=Kh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){P0(i,p===void 0?new CA(d,s,t):new DA(d,s,t));break}else{let g=i.map[d];g===void 0&&(g=new UA(d),P0(i,g)),i=g}}}class nu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);LA(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function I0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const NA=37297;let OA=0;function PA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const z0=new ce;function IA(s){be._getMatrix(z0,be.workingColorSpace,s);const t=`mat3( ${z0.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(s)){case iu:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function B0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+PA(s.getShaderSource(t),d)}else return c}function zA(s,t){const i=IA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function BA(s,t){let i;switch(t){case Sx:i="Linear";break;case xx:i="Reinhard";break;case Mx:i="Cineon";break;case Ex:i="ACESFilmic";break;case Tx:i="AgX";break;case Ax:i="Neutral";break;case bx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new Y;function FA(){be.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function HA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function GA(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function VA(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function $o(s){return s!==""}function F0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(s){return s.replace(kA,WA)}const XA=new Map;function WA(s,t){let i=he[t];if(i===void 0){const r=XA.get(t);if(r!==void 0)i=he[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return kd(i)}const YA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(s){return s.replace(YA,qA)}function qA(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function V0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jA(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===tv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$S?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function ZA(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case qs:t="ENVMAP_TYPE_CUBE";break;case su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KA(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function QA(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ev:t="ENVMAP_BLENDING_MULTIPLY";break;case vx:t="ENVMAP_BLENDING_MIX";break;case yx:t="ENVMAP_BLENDING_ADD";break}return t}function JA(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function $A(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=jA(i),p=ZA(i),_=KA(i),g=QA(i),y=JA(i),M=HA(i),T=GA(c),R=l.createProgram();let x,v,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter($o).join(`
`),v.length>0&&(v+=`
`)):(x=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),v=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?he.tonemapping_pars_fragment:"",i.toneMapping!==Ja?BA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,zA("linearToOutputTexel",i.outputColorSpace),FA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=kd(h),h=F0(h,i),h=H0(h,i),d=kd(d),d=F0(d,i),d=H0(d,i),h=G0(h),d=G0(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",i.glslVersion===Zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=I+x+h,C=I+v+d,B=I0(l,l.VERTEX_SHADER,L),G=I0(l,l.FRAGMENT_SHADER,C);l.attachShader(R,B),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(P){if(s.debug.checkShaderErrors){const Q=l.getProgramInfoLog(R)||"",et=l.getShaderInfoLog(B)||"",lt=l.getShaderInfoLog(G)||"",ut=Q.trim(),O=et.trim(),K=lt.trim();let q=!0,yt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,B,G);else{const U=B0(l,B,"vertex"),$=B0(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+ut+`
`+U+`
`+$)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(O===""||K==="")&&(yt=!1);yt&&(P.diagnostics={runnable:q,programLog:ut,vertexShader:{log:O,prefix:x},fragmentShader:{log:K,prefix:v}})}l.deleteShader(B),l.deleteShader(G),X=new nu(l,R),D=VA(l,R)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,NA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=OA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=G,this}let t1=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new n1(t),i.set(t,r)),r}}class n1{constructor(t){this.id=t1++,this.code=t,this.usedTimes=0}}function i1(s,t,i,r,l,c,h){const d=new np,m=new e1,p=new Set,_=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function x(D,w,P,Q,et){const lt=Q.fog,ut=et.geometry,O=D.isMeshStandardMaterial?Q.environment:null,K=(D.isMeshStandardMaterial?i:t).get(D.envMap||O),q=K&&K.mapping===su?K.image.height:null,yt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const U=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;ut.morphAttributes.position!==void 0&&(vt=1),ut.morphAttributes.normal!==void 0&&(vt=2),ut.morphAttributes.color!==void 0&&(vt=3);let St,wt,at,dt;if(yt){const xe=jn[yt];St=xe.vertexShader,wt=xe.fragmentShader}else St=D.vertexShader,wt=D.fragmentShader,m.update(D),at=m.getVertexShaderID(D),dt=m.getFragmentShaderID(D);const xt=s.getRenderTarget(),Ot=s.state.buffers.depth.getReversed(),Yt=et.isInstancedMesh===!0,ie=et.isBatchedMesh===!0,He=!!D.map,me=!!D.matcap,H=!!K,Ae=!!D.aoMap,Kt=!!D.lightMap,Se=!!D.bumpMap,Bt=!!D.normalMap,Ge=!!D.displacementMap,Ft=!!D.emissiveMap,oe=!!D.metalnessMap,qe=!!D.roughnessMap,je=D.anisotropy>0,N=D.clearcoat>0,E=D.dispersion>0,nt=D.iridescence>0,ft=D.sheen>0,gt=D.transmission>0,ct=je&&!!D.anisotropyMap,Pt=N&&!!D.clearcoatMap,At=N&&!!D.clearcoatNormalMap,kt=N&&!!D.clearcoatRoughnessMap,Wt=nt&&!!D.iridescenceMap,Mt=nt&&!!D.iridescenceThicknessMap,Lt=ft&&!!D.sheenColorMap,jt=ft&&!!D.sheenRoughnessMap,Vt=!!D.specularMap,Ct=!!D.specularColorMap,se=!!D.specularIntensityMap,k=gt&&!!D.transmissionMap,Tt=gt&&!!D.thicknessMap,Rt=!!D.gradientMap,It=!!D.alphaMap,Et=D.alphaTest>0,_t=!!D.alphaHash,Gt=!!D.extensions;let ae=Ja;D.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ae=s.toneMapping);const Re={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:St,fragmentShader:wt,defines:D.defines,customVertexShaderID:at,customFragmentShaderID:dt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:ie,batchingColor:ie&&et._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&et.instanceColor!==null,instancingMorph:Yt&&et.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:xt===null?s.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:Lr,alphaToCoverage:!!D.alphaToCoverage,map:He,matcap:me,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:q,aoMap:Ae,lightMap:Kt,bumpMap:Se,normalMap:Bt,displacementMap:y&&Ge,emissiveMap:Ft,normalMapObjectSpace:Bt&&D.normalMapType===Ux,normalMapTangentSpace:Bt&&D.normalMapType===Dx,metalnessMap:oe,roughnessMap:qe,anisotropy:je,anisotropyMap:ct,clearcoat:N,clearcoatMap:Pt,clearcoatNormalMap:At,clearcoatRoughnessMap:kt,dispersion:E,iridescence:nt,iridescenceMap:Wt,iridescenceThicknessMap:Mt,sheen:ft,sheenColorMap:Lt,sheenRoughnessMap:jt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:se,transmission:gt,transmissionMap:k,thicknessMap:Tt,gradientMap:Rt,opaque:D.transparent===!1&&D.blending===Vs&&D.alphaToCoverage===!1,alphaMap:It,alphaTest:Et,alphaHash:_t,combine:D.combine,mapUv:He&&R(D.map.channel),aoMapUv:Ae&&R(D.aoMap.channel),lightMapUv:Kt&&R(D.lightMap.channel),bumpMapUv:Se&&R(D.bumpMap.channel),normalMapUv:Bt&&R(D.normalMap.channel),displacementMapUv:Ge&&R(D.displacementMap.channel),emissiveMapUv:Ft&&R(D.emissiveMap.channel),metalnessMapUv:oe&&R(D.metalnessMap.channel),roughnessMapUv:qe&&R(D.roughnessMap.channel),anisotropyMapUv:ct&&R(D.anisotropyMap.channel),clearcoatMapUv:Pt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:jt&&R(D.sheenRoughnessMap.channel),specularMapUv:Vt&&R(D.specularMap.channel),specularColorMapUv:Ct&&R(D.specularColorMap.channel),specularIntensityMapUv:se&&R(D.specularIntensityMap.channel),transmissionMapUv:k&&R(D.transmissionMap.channel),thicknessMapUv:Tt&&R(D.thicknessMap.channel),alphaMapUv:It&&R(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Bt||je),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ut.attributes.uv&&(He||It),fog:!!lt,useFog:D.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ot,skinning:et.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:He&&D.map.isVideoTexture===!0&&be.getTransfer(D.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ft&&D.emissiveMap.isVideoTexture===!0&&be.getTransfer(D.emissiveMap.colorSpace)===Ie,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===fa,flipSided:D.side===Gn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Gt&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&D.extensions.multiDraw===!0||ie)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Re.vertexUv1s=p.has(1),Re.vertexUv2s=p.has(2),Re.vertexUv3s=p.has(3),p.clear(),Re}function v(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const P in D.defines)w.push(P),w.push(D.defines[P]);return D.isRawShaderMaterial===!1&&(I(w,D),L(w,D),w.push(s.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function I(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function L(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function C(D){const w=T[D.type];let P;if(w){const Q=jn[w];P=ip.clone(Q.uniforms)}else P=D.uniforms;return P}function B(D,w){let P;for(let Q=0,et=_.length;Q<et;Q++){const lt=_[Q];if(lt.cacheKey===w){P=lt,++P.usedTimes;break}}return P===void 0&&(P=new $A(s,w,D,c),_.push(P)),P}function G(D){if(--D.usedTimes===0){const w=_.indexOf(D);_[w]=_[_.length-1],_.pop(),D.destroy()}}function F(D){m.remove(D)}function X(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:C,acquireProgram:B,releaseProgram:G,releaseShaderCache:F,programs:_,dispose:X}}function a1(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function r1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function k0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function X0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(g,y,M,T,R,x){let v=s[t];return v===void 0?(v={id:g.id,object:g,geometry:y,material:M,groupOrder:T,renderOrder:g.renderOrder,z:R,group:x},s[t]=v):(v.id=g.id,v.object=g,v.geometry=y,v.material=M,v.groupOrder=T,v.renderOrder=g.renderOrder,v.z=R,v.group=x),t++,v}function d(g,y,M,T,R,x){const v=h(g,y,M,T,R,x);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,y,M,T,R,x){const v=h(g,y,M,T,R,x);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,y){i.length>1&&i.sort(g||r1),r.length>1&&r.sort(y||k0),l.length>1&&l.sort(y||k0)}function _(){for(let g=t,y=s.length;g<y;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function s1(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new X0,s.set(r,[h])):l>=c.length?(h=new X0,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function o1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new Ue};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[t.id]=i,i}}}function l1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let c1=0;function u1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function f1(s){const t=new o1,i=l1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Y);const l=new Y,c=new tn,h=new tn;function d(p){let _=0,g=0,y=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,T=0,R=0,x=0,v=0,I=0,L=0,C=0,B=0,G=0,F=0;p.sort(u1);for(let D=0,w=p.length;D<w;D++){const P=p[D],Q=P.color,et=P.intensity,lt=P.distance,ut=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)_+=Q.r*et,g+=Q.g*et,y+=Q.b*et;else if(P.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(P.sh.coefficients[O],et);F++}else if(P.isDirectionalLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,q=i.get(P);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=P.shadow.matrix,I++}r.directional[M]=O,M++}else if(P.isSpotLight){const O=t.get(P);O.position.setFromMatrixPosition(P.matrixWorld),O.color.copy(Q).multiplyScalar(et),O.distance=lt,O.coneCos=Math.cos(P.angle),O.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),O.decay=P.decay,r.spot[R]=O;const K=P.shadow;if(P.map&&(r.spotLightMap[B]=P.map,B++,K.updateMatrices(P),P.castShadow&&G++),r.spotLightMatrix[R]=K.matrix,P.castShadow){const q=i.get(P);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=ut,C++}R++}else if(P.isRectAreaLight){const O=t.get(P);O.color.copy(Q).multiplyScalar(et),O.halfWidth.set(P.width*.5,0,0),O.halfHeight.set(0,P.height*.5,0),r.rectArea[x]=O,x++}else if(P.isPointLight){const O=t.get(P);if(O.color.copy(P.color).multiplyScalar(P.intensity),O.distance=P.distance,O.decay=P.decay,P.castShadow){const K=P.shadow,q=i.get(P);q.shadowIntensity=K.intensity,q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=ut,r.pointShadowMatrix[T]=P.shadow.matrix,L++}r.point[T]=O,T++}else if(P.isHemisphereLight){const O=t.get(P);O.skyColor.copy(P.color).multiplyScalar(et),O.groundColor.copy(P.groundColor).multiplyScalar(et),r.hemi[v]=O,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const X=r.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==R||X.rectAreaLength!==x||X.hemiLength!==v||X.numDirectionalShadows!==I||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==B||X.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=x,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=C+B-G,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=F,X.directionalLength=M,X.pointLength=T,X.spotLength=R,X.rectAreaLength=x,X.hemiLength=v,X.numDirectionalShadows=I,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=B,X.numLightProbes=F,r.version=c1++)}function m(p,_){let g=0,y=0,M=0,T=0,R=0;const x=_.matrixWorldInverse;for(let v=0,I=p.length;v<I;v++){const L=p[v];if(L.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),g++}else if(L.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(x),M++}else if(L.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),h.identity(),c.copy(L.matrixWorld),c.premultiply(x),h.extractRotation(c),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),T++}else if(L.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(x),y++}else if(L.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(x),R++}}}return{setup:d,setupView:m,state:r}}function W0(s){const t=new f1(s),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function h1(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new W0(s),t.set(l,[d])):c>=h.length?(d=new W0(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const d1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`;function m1(s,t,i){let r=new Tv;const l=new ne,c=new ne,h=new ke,d=new LM({depthPacking:Cx}),m=new NM,p={},_=i.maxTextureSize,g={[$a]:Gn,[Gn]:$a,[fa]:fa},y=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:d1,fragmentShader:p1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Di;T.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new gi(T,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tv;let v=this.type;this.render=function(G,F,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||G.length===0)return;const D=s.getRenderTarget(),w=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(Qa),Q.buffers.depth.getReversed()?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const et=v!==ua&&this.type===ua,lt=v===ua&&this.type!==ua;for(let ut=0,O=G.length;ut<O;ut++){const K=G[ut],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const yt=q.getFrameExtents();if(l.multiply(yt),c.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/yt.x),l.x=c.x*yt.x,q.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/yt.y),l.y=c.y*yt.y,q.mapSize.y=c.y)),q.map===null||et===!0||lt===!0){const $=this.type!==ua?{minFilter:wi,magFilter:wi}:{};q.map!==null&&q.map.dispose(),q.map=new Or(l.x,l.y,$),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const U=q.getViewportCount();for(let $=0;$<U;$++){const vt=q.getViewport($);h.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),Q.viewport(h),q.updateMatrices(K,$),r=q.getFrustum(),C(F,X,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===ua&&I(q,X),q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(D,w,P)};function I(G,F){const X=t.update(R);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Or(l.x,l.y)),y.uniforms.shadow_pass.value=G.map.texture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,s.setRenderTarget(G.mapPass),s.clear(),s.renderBufferDirect(F,null,X,y,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,s.setRenderTarget(G.map),s.clear(),s.renderBufferDirect(F,null,X,M,R,null)}function L(G,F,X,D){let w=null;const P=X.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(P!==void 0)w=P;else if(w=X.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=w.uuid,et=F.uuid;let lt=p[Q];lt===void 0&&(lt={},p[Q]=lt);let ut=lt[et];ut===void 0&&(ut=w.clone(),lt[et]=ut,F.addEventListener("dispose",B)),w=ut}if(w.visible=F.visible,w.wireframe=F.wireframe,D===ua?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:g[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Q=s.properties.get(w);Q.light=X}return w}function C(G,F,X,D,w){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&w===ua)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,G.matrixWorld);const et=t.update(G),lt=G.material;if(Array.isArray(lt)){const ut=et.groups;for(let O=0,K=ut.length;O<K;O++){const q=ut[O],yt=lt[q.materialIndex];if(yt&&yt.visible){const U=L(G,yt,D,w);G.onBeforeShadow(s,G,F,X,et,U,q),s.renderBufferDirect(X,null,et,U,G,q),G.onAfterShadow(s,G,F,X,et,U,q)}}}else if(lt.visible){const ut=L(G,lt,D,w);G.onBeforeShadow(s,G,F,X,et,ut,null),s.renderBufferDirect(X,null,et,ut,G,null),G.onAfterShadow(s,G,F,X,et,ut,null)}}const Q=G.children;for(let et=0,lt=Q.length;et<lt;et++)C(Q[et],F,X,D,w)}function B(G){G.target.removeEventListener("dispose",B);for(const X in p){const D=p[X],w=G.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const _1={[id]:ad,[rd]:ld,[sd]:cd,[Ws]:od,[ad]:id,[ld]:rd,[cd]:sd,[od]:Ws};function g1(s,t){function i(){let k=!1;const Tt=new ke;let Rt=null;const It=new ke(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!k&&(s.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){k=Et},setClear:function(Et,_t,Gt,ae,Re){Re===!0&&(Et*=ae,_t*=ae,Gt*=ae),Tt.set(Et,_t,Gt,ae),It.equals(Tt)===!1&&(s.clearColor(Et,_t,Gt,ae),It.copy(Tt))},reset:function(){k=!1,Rt=null,It.set(-1,0,0,0)}}}function r(){let k=!1,Tt=!1,Rt=null,It=null,Et=null;return{setReversed:function(_t){if(Tt!==_t){const Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const ae=Et;Et=null,this.setClear(ae)}},getReversed:function(){return Tt},setTest:function(_t){_t?xt(s.DEPTH_TEST):Ot(s.DEPTH_TEST)},setMask:function(_t){Rt!==_t&&!k&&(s.depthMask(_t),Rt=_t)},setFunc:function(_t){if(Tt&&(_t=_1[_t]),It!==_t){switch(_t){case id:s.depthFunc(s.NEVER);break;case ad:s.depthFunc(s.ALWAYS);break;case rd:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case sd:s.depthFunc(s.EQUAL);break;case od:s.depthFunc(s.GEQUAL);break;case ld:s.depthFunc(s.GREATER);break;case cd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}It=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Et!==_t&&(Tt&&(_t=1-_t),s.clearDepth(_t),Et=_t)},reset:function(){k=!1,Rt=null,It=null,Et=null,Tt=!1}}}function l(){let k=!1,Tt=null,Rt=null,It=null,Et=null,_t=null,Gt=null,ae=null,Re=null;return{setTest:function(xe){k||(xe?xt(s.STENCIL_TEST):Ot(s.STENCIL_TEST))},setMask:function(xe){Tt!==xe&&!k&&(s.stencilMask(xe),Tt=xe)},setFunc:function(xe,vi,ln){(Rt!==xe||It!==vi||Et!==ln)&&(s.stencilFunc(xe,vi,ln),Rt=xe,It=vi,Et=ln)},setOp:function(xe,vi,ln){(_t!==xe||Gt!==vi||ae!==ln)&&(s.stencilOp(xe,vi,ln),_t=xe,Gt=vi,ae=ln)},setLocked:function(xe){k=xe},setClear:function(xe){Re!==xe&&(s.clearStencil(xe),Re=xe)},reset:function(){k=!1,Tt=null,Rt=null,It=null,Et=null,_t=null,Gt=null,ae=null,Re=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,M=[],T=null,R=!1,x=null,v=null,I=null,L=null,C=null,B=null,G=null,F=new Ue(0,0,0),X=0,D=!1,w=null,P=null,Q=null,et=null,lt=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=K>=1):q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=K>=2);let yt=null,U={};const $=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),St=new ke().fromArray($),wt=new ke().fromArray(vt);function at(k,Tt,Rt,It){const Et=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Gt=0;Gt<Rt;Gt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Tt,0,s.RGBA,1,1,It,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(Tt+Gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return _t}const dt={};dt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),xt(s.DEPTH_TEST),h.setFunc(Ws),Se(!1),Bt(Xg),xt(s.CULL_FACE),Ae(Qa);function xt(k){_[k]!==!0&&(s.enable(k),_[k]=!0)}function Ot(k){_[k]!==!1&&(s.disable(k),_[k]=!1)}function Yt(k,Tt){return g[k]!==Tt?(s.bindFramebuffer(k,Tt),g[k]=Tt,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Tt),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Tt),!0):!1}function ie(k,Tt){let Rt=M,It=!1;if(k){Rt=y.get(Tt),Rt===void 0&&(Rt=[],y.set(Tt,Rt));const Et=k.textures;if(Rt.length!==Et.length||Rt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Gt=Et.length;_t<Gt;_t++)Rt[_t]=s.COLOR_ATTACHMENT0+_t;Rt.length=Et.length,It=!0}}else Rt[0]!==s.BACK&&(Rt[0]=s.BACK,It=!0);It&&s.drawBuffers(Rt)}function He(k){return T!==k?(s.useProgram(k),T=k,!0):!1}const me={[Ar]:s.FUNC_ADD,[ex]:s.FUNC_SUBTRACT,[nx]:s.FUNC_REVERSE_SUBTRACT};me[ix]=s.MIN,me[ax]=s.MAX;const H={[rx]:s.ZERO,[sx]:s.ONE,[ox]:s.SRC_COLOR,[ed]:s.SRC_ALPHA,[dx]:s.SRC_ALPHA_SATURATE,[fx]:s.DST_COLOR,[cx]:s.DST_ALPHA,[lx]:s.ONE_MINUS_SRC_COLOR,[nd]:s.ONE_MINUS_SRC_ALPHA,[hx]:s.ONE_MINUS_DST_COLOR,[ux]:s.ONE_MINUS_DST_ALPHA,[px]:s.CONSTANT_COLOR,[mx]:s.ONE_MINUS_CONSTANT_COLOR,[_x]:s.CONSTANT_ALPHA,[gx]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(k,Tt,Rt,It,Et,_t,Gt,ae,Re,xe){if(k===Qa){R===!0&&(Ot(s.BLEND),R=!1);return}if(R===!1&&(xt(s.BLEND),R=!0),k!==tx){if(k!==x||xe!==D){if((v!==Ar||C!==Ar)&&(s.blendEquation(s.FUNC_ADD),v=Ar,C=Ar),xe)switch(k){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wg:s.blendFunc(s.ONE,s.ONE);break;case Yg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}I=null,L=null,B=null,G=null,F.set(0,0,0),X=0,x=k,D=xe}return}Et=Et||Tt,_t=_t||Rt,Gt=Gt||It,(Tt!==v||Et!==C)&&(s.blendEquationSeparate(me[Tt],me[Et]),v=Tt,C=Et),(Rt!==I||It!==L||_t!==B||Gt!==G)&&(s.blendFuncSeparate(H[Rt],H[It],H[_t],H[Gt]),I=Rt,L=It,B=_t,G=Gt),(ae.equals(F)===!1||Re!==X)&&(s.blendColor(ae.r,ae.g,ae.b,Re),F.copy(ae),X=Re),x=k,D=!1}function Kt(k,Tt){k.side===fa?Ot(s.CULL_FACE):xt(s.CULL_FACE);let Rt=k.side===Gn;Tt&&(Rt=!Rt),Se(Rt),k.blending===Vs&&k.transparent===!1?Ae(Qa):Ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const It=k.stencilWrite;d.setTest(It),It&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xt(s.SAMPLE_ALPHA_TO_COVERAGE):Ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function Bt(k){k!==QS?(xt(s.CULL_FACE),k!==P&&(k===Xg?s.cullFace(s.BACK):k===JS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ot(s.CULL_FACE),P=k}function Ge(k){k!==Q&&(O&&s.lineWidth(k),Q=k)}function Ft(k,Tt,Rt){k?(xt(s.POLYGON_OFFSET_FILL),(et!==Tt||lt!==Rt)&&(s.polygonOffset(Tt,Rt),et=Tt,lt=Rt)):Ot(s.POLYGON_OFFSET_FILL)}function oe(k){k?xt(s.SCISSOR_TEST):Ot(s.SCISSOR_TEST)}function qe(k){k===void 0&&(k=s.TEXTURE0+ut-1),yt!==k&&(s.activeTexture(k),yt=k)}function je(k,Tt,Rt){Rt===void 0&&(yt===null?Rt=s.TEXTURE0+ut-1:Rt=yt);let It=U[Rt];It===void 0&&(It={type:void 0,texture:void 0},U[Rt]=It),(It.type!==k||It.texture!==Tt)&&(yt!==Rt&&(s.activeTexture(Rt),yt=Rt),s.bindTexture(k,Tt||dt[k]),It.type=k,It.texture=Tt)}function N(){const k=U[yt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function nt(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(k){St.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function jt(k){wt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),wt.copy(k))}function Vt(k,Tt){let Rt=p.get(Tt);Rt===void 0&&(Rt=new WeakMap,p.set(Tt,Rt));let It=Rt.get(k);It===void 0&&(It=s.getUniformBlockIndex(Tt,k.name),Rt.set(k,It))}function Ct(k,Tt){const It=p.get(Tt).get(k);m.get(Tt)!==It&&(s.uniformBlockBinding(Tt,It,k.__bindingPointIndex),m.set(Tt,It))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},yt=null,U={},g={},y=new WeakMap,M=[],T=null,R=!1,x=null,v=null,I=null,L=null,C=null,B=null,G=null,F=new Ue(0,0,0),X=0,D=!1,w=null,P=null,Q=null,et=null,lt=null,St.set(0,0,s.canvas.width,s.canvas.height),wt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:xt,disable:Ot,bindFramebuffer:Yt,drawBuffers:ie,useProgram:He,setBlending:Ae,setMaterial:Kt,setFlipSided:Se,setCullFace:Bt,setLineWidth:Ge,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:qe,bindTexture:je,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:nt,texImage2D:Wt,texImage3D:Mt,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:At,texStorage3D:kt,texSubImage2D:ft,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Pt,scissor:Lt,viewport:jt,reset:se}}function v1(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,_=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,E){return M?new OffscreenCanvas(N,E):ol("canvas")}function R(N,E,nt){let ft=1;const gt=je(N);if((gt.width>nt||gt.height>nt)&&(ft=nt/Math.max(gt.width,gt.height)),ft<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(ft*gt.width),Pt=Math.floor(ft*gt.height);g===void 0&&(g=T(ct,Pt));const At=E?T(ct,Pt):g;return At.width=ct,At.height=Pt,At.getContext("2d").drawImage(N,0,0,ct,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+ct+"x"+Pt+")."),At}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),N;return N}function x(N){return N.generateMipmaps}function v(N){s.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(N,E,nt,ft,gt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=E;if(E===s.RED&&(nt===s.FLOAT&&(ct=s.R32F),nt===s.HALF_FLOAT&&(ct=s.R16F),nt===s.UNSIGNED_BYTE&&(ct=s.R8)),E===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.R8UI),nt===s.UNSIGNED_SHORT&&(ct=s.R16UI),nt===s.UNSIGNED_INT&&(ct=s.R32UI),nt===s.BYTE&&(ct=s.R8I),nt===s.SHORT&&(ct=s.R16I),nt===s.INT&&(ct=s.R32I)),E===s.RG&&(nt===s.FLOAT&&(ct=s.RG32F),nt===s.HALF_FLOAT&&(ct=s.RG16F),nt===s.UNSIGNED_BYTE&&(ct=s.RG8)),E===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.RG8UI),nt===s.UNSIGNED_SHORT&&(ct=s.RG16UI),nt===s.UNSIGNED_INT&&(ct=s.RG32UI),nt===s.BYTE&&(ct=s.RG8I),nt===s.SHORT&&(ct=s.RG16I),nt===s.INT&&(ct=s.RG32I)),E===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),nt===s.UNSIGNED_INT&&(ct=s.RGB32UI),nt===s.BYTE&&(ct=s.RGB8I),nt===s.SHORT&&(ct=s.RGB16I),nt===s.INT&&(ct=s.RGB32I)),E===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),nt===s.UNSIGNED_INT&&(ct=s.RGBA32UI),nt===s.BYTE&&(ct=s.RGBA8I),nt===s.SHORT&&(ct=s.RGBA16I),nt===s.INT&&(ct=s.RGBA32I)),E===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),E===s.RGBA){const Pt=gt?iu:be.getTransfer(ft);nt===s.FLOAT&&(ct=s.RGBA32F),nt===s.HALF_FLOAT&&(ct=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(ct=Pt===Ie?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function C(N,E){let nt;return N?E===null||E===Ur||E===il?nt=s.DEPTH24_STENCIL8:E===ha?nt=s.DEPTH32F_STENCIL8:E===nl&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ur||E===il?nt=s.DEPTH_COMPONENT24:E===ha?nt=s.DEPTH_COMPONENT32F:E===nl&&(nt=s.DEPTH_COMPONENT16),nt}function B(N,E){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==wi&&N.minFilter!==Gi?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function G(N){const E=N.target;E.removeEventListener("dispose",G),X(E),E.isVideoTexture&&_.delete(E)}function F(N){const E=N.target;E.removeEventListener("dispose",F),w(E)}function X(N){const E=r.get(N);if(E.__webglInit===void 0)return;const nt=N.source,ft=y.get(nt);if(ft){const gt=ft[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&D(N),Object.keys(ft).length===0&&y.delete(nt)}r.remove(N)}function D(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const nt=N.source,ft=y.get(nt);delete ft[E.__cacheKey],h.memory.textures--}function w(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(E.__webglFramebuffer[ft]))for(let gt=0;gt<E.__webglFramebuffer[ft].length;gt++)s.deleteFramebuffer(E.__webglFramebuffer[ft][gt]);else s.deleteFramebuffer(E.__webglFramebuffer[ft]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ft])}else{if(Array.isArray(E.__webglFramebuffer))for(let ft=0;ft<E.__webglFramebuffer.length;ft++)s.deleteFramebuffer(E.__webglFramebuffer[ft]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ft=0;ft<E.__webglColorRenderbuffer.length;ft++)E.__webglColorRenderbuffer[ft]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ft]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=N.textures;for(let ft=0,gt=nt.length;ft<gt;ft++){const ct=r.get(nt[ft]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),h.memory.textures--),r.remove(nt[ft])}r.remove(N)}let P=0;function Q(){P=0}function et(){const N=P;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),P+=1,N}function lt(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function ut(N,E){const nt=r.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&nt.__version!==N.version){const ft=N.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{dt(nt,N,E);return}}else N.isExternalTexture&&(nt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+E)}function O(N,E){const nt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){dt(nt,N,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+E)}function K(N,E){const nt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){dt(nt,N,E);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+E)}function q(N,E){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){xt(nt,N,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+E)}const yt={[hd]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[dd]:s.MIRRORED_REPEAT},U={[wi]:s.NEAREST,[Rx]:s.NEAREST_MIPMAP_NEAREST,[xc]:s.NEAREST_MIPMAP_LINEAR,[Gi]:s.LINEAR,[yh]:s.LINEAR_MIPMAP_NEAREST,[Cr]:s.LINEAR_MIPMAP_LINEAR},$={[Lx]:s.NEVER,[Bx]:s.ALWAYS,[Nx]:s.LESS,[fv]:s.LEQUAL,[Ox]:s.EQUAL,[zx]:s.GEQUAL,[Px]:s.GREATER,[Ix]:s.NOTEQUAL};function vt(N,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Gi||E.magFilter===yh||E.magFilter===xc||E.magFilter===Cr||E.minFilter===Gi||E.minFilter===yh||E.minFilter===xc||E.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,yt[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,yt[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,yt[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,$[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wi||E.minFilter!==xc&&E.minFilter!==Cr||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function St(N,E){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",G));const ft=E.source;let gt=y.get(ft);gt===void 0&&(gt={},y.set(ft,gt));const ct=lt(E);if(ct!==N.__cacheKey){gt[ct]===void 0&&(gt[ct]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),gt[ct].usedTimes++;const Pt=gt[N.__cacheKey];Pt!==void 0&&(gt[N.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(E)),N.__cacheKey=ct,N.__webglTexture=gt[ct].texture}return nt}function wt(N,E,nt){return Math.floor(Math.floor(N/nt)/E)}function at(N,E,nt,ft){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,nt,ft,E.data);else{ct.sort((Mt,Lt)=>Mt.start-Lt.start);let Pt=0;for(let Mt=1;Mt<ct.length;Mt++){const Lt=ct[Pt],jt=ct[Mt],Vt=Lt.start+Lt.count,Ct=wt(jt.start,E.width,4),se=wt(Lt.start,E.width,4);jt.start<=Vt+1&&Ct===se&&wt(jt.start+jt.count-1,E.width,4)===Ct?Lt.count=Math.max(Lt.count,jt.start+jt.count-Lt.start):(++Pt,ct[Pt]=jt)}ct.length=Pt+1;const At=s.getParameter(s.UNPACK_ROW_LENGTH),kt=s.getParameter(s.UNPACK_SKIP_PIXELS),Wt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Lt=ct.length;Mt<Lt;Mt++){const jt=ct[Mt],Vt=Math.floor(jt.start/4),Ct=Math.ceil(jt.count/4),se=Vt%E.width,k=Math.floor(Vt/E.width),Tt=Ct,Rt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,se),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,se,k,Tt,Rt,nt,ft,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,At),s.pixelStorei(s.UNPACK_SKIP_PIXELS,kt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Wt)}}function dt(N,E,nt){let ft=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=s.TEXTURE_3D);const gt=St(N,E),ct=E.source;i.bindTexture(ft,N.__webglTexture,s.TEXTURE0+nt);const Pt=r.get(ct);if(ct.version!==Pt.__version||gt===!0){i.activeTexture(s.TEXTURE0+nt);const At=be.getPrimaries(be.workingColorSpace),kt=E.colorSpace===Ka?null:be.getPrimaries(E.colorSpace),Wt=E.colorSpace===Ka||At===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let Mt=R(E.image,!1,l.maxTextureSize);Mt=qe(E,Mt);const Lt=c.convert(E.format,E.colorSpace),jt=c.convert(E.type);let Vt=L(E.internalFormat,Lt,jt,E.colorSpace,E.isVideoTexture);vt(ft,E);let Ct;const se=E.mipmaps,k=E.isVideoTexture!==!0,Tt=Pt.__version===void 0||gt===!0,Rt=ct.dataReady,It=B(E,Mt);if(E.isDepthTexture)Vt=C(E.format===rl,E.type),Tt&&(k?i.texStorage2D(s.TEXTURE_2D,1,Vt,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Lt,jt,null));else if(E.isDataTexture)if(se.length>0){k&&Tt&&i.texStorage2D(s.TEXTURE_2D,It,Vt,se[0].width,se[0].height);for(let Et=0,_t=se.length;Et<_t;Et++)Ct=se[Et],k?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,jt,Ct.data):i.texImage2D(s.TEXTURE_2D,Et,Vt,Ct.width,Ct.height,0,Lt,jt,Ct.data);E.generateMipmaps=!1}else k?(Tt&&i.texStorage2D(s.TEXTURE_2D,It,Vt,Mt.width,Mt.height),Rt&&at(E,Mt,Lt,jt)):i.texImage2D(s.TEXTURE_2D,0,Vt,Mt.width,Mt.height,0,Lt,jt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Tt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Vt,se[0].width,se[0].height,Mt.depth);for(let Et=0,_t=se.length;Et<_t;Et++)if(Ct=se[Et],E.format!==Ri)if(Lt!==null)if(k){if(Rt)if(E.layerUpdates.size>0){const Gt=x0(Ct.width,Ct.height,E.format,E.type);for(const ae of E.layerUpdates){const Re=Ct.data.subarray(ae*Gt/Ct.data.BYTES_PER_ELEMENT,(ae+1)*Gt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,ae,Ct.width,Ct.height,1,Lt,Re)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Et,Vt,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Rt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Et,0,0,0,Ct.width,Ct.height,Mt.depth,Lt,jt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Et,Vt,Ct.width,Ct.height,Mt.depth,0,Lt,jt,Ct.data)}else{k&&Tt&&i.texStorage2D(s.TEXTURE_2D,It,Vt,se[0].width,se[0].height);for(let Et=0,_t=se.length;Et<_t;Et++)Ct=se[Et],E.format!==Ri?Lt!==null?k?Rt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,Et,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Ct.width,Ct.height,Lt,jt,Ct.data):i.texImage2D(s.TEXTURE_2D,Et,Vt,Ct.width,Ct.height,0,Lt,jt,Ct.data)}else if(E.isDataArrayTexture)if(k){if(Tt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,It,Vt,Mt.width,Mt.height,Mt.depth),Rt)if(E.layerUpdates.size>0){const Et=x0(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const Gt=Mt.data.subarray(_t*Et/Mt.data.BYTES_PER_ELEMENT,(_t+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Lt,jt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,jt,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,Mt.width,Mt.height,Mt.depth,0,Lt,jt,Mt.data);else if(E.isData3DTexture)k?(Tt&&i.texStorage3D(s.TEXTURE_3D,It,Vt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,jt,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,Vt,Mt.width,Mt.height,Mt.depth,0,Lt,jt,Mt.data);else if(E.isFramebufferTexture){if(Tt)if(k)i.texStorage2D(s.TEXTURE_2D,It,Vt,Mt.width,Mt.height);else{let Et=Mt.width,_t=Mt.height;for(let Gt=0;Gt<It;Gt++)i.texImage2D(s.TEXTURE_2D,Gt,Vt,Et,_t,0,Lt,jt,null),Et>>=1,_t>>=1}}else if(se.length>0){if(k&&Tt){const Et=je(se[0]);i.texStorage2D(s.TEXTURE_2D,It,Vt,Et.width,Et.height)}for(let Et=0,_t=se.length;Et<_t;Et++)Ct=se[Et],k?Rt&&i.texSubImage2D(s.TEXTURE_2D,Et,0,0,Lt,jt,Ct):i.texImage2D(s.TEXTURE_2D,Et,Vt,Lt,jt,Ct);E.generateMipmaps=!1}else if(k){if(Tt){const Et=je(Mt);i.texStorage2D(s.TEXTURE_2D,It,Vt,Et.width,Et.height)}Rt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,jt,Mt)}else i.texImage2D(s.TEXTURE_2D,0,Vt,Lt,jt,Mt);x(E)&&v(ft),Pt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function xt(N,E,nt){if(E.image.length!==6)return;const ft=St(N,E),gt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+nt);const ct=r.get(gt);if(gt.version!==ct.__version||ft===!0){i.activeTexture(s.TEXTURE0+nt);const Pt=be.getPrimaries(be.workingColorSpace),At=E.colorSpace===Ka?null:be.getPrimaries(E.colorSpace),kt=E.colorSpace===Ka||Pt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!Wt&&!Mt?Lt[_t]=R(E.image[_t],!0,l.maxCubemapSize):Lt[_t]=Mt?E.image[_t].image:E.image[_t],Lt[_t]=qe(E,Lt[_t]);const jt=Lt[0],Vt=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),se=L(E.internalFormat,Vt,Ct,E.colorSpace),k=E.isVideoTexture!==!0,Tt=ct.__version===void 0||ft===!0,Rt=gt.dataReady;let It=B(E,jt);vt(s.TEXTURE_CUBE_MAP,E);let Et;if(Wt){k&&Tt&&i.texStorage2D(s.TEXTURE_CUBE_MAP,It,se,jt.width,jt.height);for(let _t=0;_t<6;_t++){Et=Lt[_t].mipmaps;for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];E.format!==Ri?Vt!==null?k?Rt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,ae.width,ae.height,Vt,ae.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,se,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,ae.width,ae.height,Vt,Ct,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,se,ae.width,ae.height,0,Vt,Ct,ae.data)}}}else{if(Et=E.mipmaps,k&&Tt){Et.length>0&&It++;const _t=je(Lt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,It,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){k?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Vt,Ct,Lt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Lt[_t].width,Lt[_t].height,0,Vt,Ct,Lt[_t].data);for(let Gt=0;Gt<Et.length;Gt++){const Re=Et[Gt].image[_t].image;k?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Re.width,Re.height,Vt,Ct,Re.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,se,Re.width,Re.height,0,Vt,Ct,Re.data)}}else{k?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Vt,Ct,Lt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Vt,Ct,Lt[_t]);for(let Gt=0;Gt<Et.length;Gt++){const ae=Et[Gt];k?Rt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Vt,Ct,ae.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,se,Vt,Ct,ae.image[_t])}}}x(E)&&v(s.TEXTURE_CUBE_MAP),ct.__version=gt.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function Ot(N,E,nt,ft,gt,ct){const Pt=c.convert(nt.format,nt.colorSpace),At=c.convert(nt.type),kt=L(nt.internalFormat,Pt,At,nt.colorSpace),Wt=r.get(E),Mt=r.get(nt);if(Mt.__renderTarget=E,!Wt.__hasExternalTextures){const Lt=Math.max(1,E.width>>ct),jt=Math.max(1,E.height>>ct);gt===s.TEXTURE_3D||gt===s.TEXTURE_2D_ARRAY?i.texImage3D(gt,ct,kt,Lt,jt,E.depth,0,Pt,At,null):i.texImage2D(gt,ct,kt,Lt,jt,0,Pt,At,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Ft(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ft,gt,Mt.__webglTexture,0,Ge(E)):(gt===s.TEXTURE_2D||gt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ft,gt,Mt.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(N,E,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const ft=E.depthTexture,gt=ft&&ft.isDepthTexture?ft.type:null,ct=C(E.stencilBuffer,gt),Pt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=Ge(E);Ft(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,ct,E.width,E.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,ct,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ct,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,N)}else{const ft=E.textures;for(let gt=0;gt<ft.length;gt++){const ct=ft[gt],Pt=c.convert(ct.format,ct.colorSpace),At=c.convert(ct.type),kt=L(ct.internalFormat,Pt,At,ct.colorSpace),Wt=Ge(E);nt&&Ft(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,kt,E.width,E.height):Ft(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,kt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,kt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ie(N,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=r.get(E.depthTexture);ft.__renderTarget=E,(!ft.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const gt=ft.__webglTexture,ct=Ge(E);if(E.depthTexture.format===al)Ft(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0);else if(E.depthTexture.format===rl)Ft(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function He(N){const E=r.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ft=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",gt)};ft.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=ft}if(N.depthTexture&&!E.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const ft=N.texture.mipmaps;ft&&ft.length>0?ie(E.__webglFramebuffer[0],N):ie(E.__webglFramebuffer,N)}else if(nt){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=s.createRenderbuffer(),Yt(E.__webglDepthbuffer[ft],N,!1);else{const gt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ft];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,ct)}}else{const ft=N.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Yt(E.__webglDepthbuffer,N,!1);else{const gt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function me(N,E,nt){const ft=r.get(N);E!==void 0&&Ot(ft.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&He(N)}function H(N){const E=N.texture,nt=r.get(N),ft=r.get(E);N.addEventListener("dispose",F);const gt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,Pt=gt.length>1;if(Pt||(ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture()),ft.__version=E.version,h.memory.textures++),ct){nt.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[At]=[];for(let kt=0;kt<E.mipmaps.length;kt++)nt.__webglFramebuffer[At][kt]=s.createFramebuffer()}else nt.__webglFramebuffer[At]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)nt.__webglFramebuffer[At]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let At=0,kt=gt.length;At<kt;At++){const Wt=r.get(gt[At]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&Ft(N)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let At=0;At<gt.length;At++){const kt=gt[At];nt.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[At]);const Wt=c.convert(kt.format,kt.colorSpace),Mt=c.convert(kt.type),Lt=L(kt.internalFormat,Wt,Mt,kt.colorSpace,N.isXRRenderTarget===!0),jt=Ge(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,Lt,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,nt.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,ft.__webglTexture),vt(s.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ot(nt.__webglFramebuffer[At][kt],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,kt);else Ot(nt.__webglFramebuffer[At],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);x(E)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let At=0,kt=gt.length;At<kt;At++){const Wt=gt[At],Mt=r.get(Wt);let Lt=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Mt.__webglTexture),vt(Lt,Wt),Ot(nt.__webglFramebuffer,N,Wt,s.COLOR_ATTACHMENT0+At,Lt,0),x(Wt)&&v(Lt)}i.unbindTexture()}else{let At=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(At,ft.__webglTexture),vt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)Ot(nt.__webglFramebuffer[kt],N,E,s.COLOR_ATTACHMENT0,At,kt);else Ot(nt.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,At,0);x(E)&&v(At),i.unbindTexture()}N.depthBuffer&&He(N)}function Ae(N){const E=N.textures;for(let nt=0,ft=E.length;nt<ft;nt++){const gt=E[nt];if(x(gt)){const ct=I(N),Pt=r.get(gt).__webglTexture;i.bindTexture(ct,Pt),v(ct),i.unbindTexture()}}}const Kt=[],Se=[];function Bt(N){if(N.samples>0){if(Ft(N)===!1){const E=N.textures,nt=N.width,ft=N.height;let gt=s.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(N),At=E.length>1;if(At)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const kt=N.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(gt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(gt|=s.STENCIL_BUFFER_BIT)),At){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Wt]);const Mt=r.get(E[Wt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,nt,ft,0,0,nt,ft,gt,s.NEAREST),m===!0&&(Kt.length=0,Se.length=0,Kt.push(s.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Kt.push(ct),Se.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Wt]);const Mt=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Wt,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Ge(N){return Math.min(l.maxSamples,N.samples)}function Ft(N){const E=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(N){const E=h.render.frame;_.get(N)!==E&&(_.set(N,E),N.update())}function qe(N,E){const nt=N.colorSpace,ft=N.format,gt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Lr&&nt!==Ka&&(be.getTransfer(nt)===Ie?(ft!==Ri||gt!==ma)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),E}function je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=q,this.rebindTextures=me,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=Ft}function y1(s,t){function i(r,l=Ka){let c;const h=be.getTransfer(l);if(r===ma)return s.UNSIGNED_BYTE;if(r===jd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===rv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===iv)return s.BYTE;if(r===av)return s.SHORT;if(r===nl)return s.UNSIGNED_SHORT;if(r===qd)return s.INT;if(r===Ur)return s.UNSIGNED_INT;if(r===ha)return s.FLOAT;if(r===ll)return s.HALF_FLOAT;if(r===sv)return s.ALPHA;if(r===ov)return s.RGB;if(r===Ri)return s.RGBA;if(r===al)return s.DEPTH_COMPONENT;if(r===rl)return s.DEPTH_STENCIL;if(r===lv)return s.RED;if(r===Kd)return s.RED_INTEGER;if(r===cv)return s.RG;if(r===Qd)return s.RG_INTEGER;if(r===Jd)return s.RGBA_INTEGER;if(r===Qc||r===Jc||r===$c||r===tu)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$c)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pd||r===md||r===_d||r===gd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===pd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===md)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_d)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vd||r===yd||r===Sd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===vd||r===yd)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Sd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xd||r===Md||r===Ed||r===bd||r===Td||r===Ad||r===Rd||r===wd||r===Cd||r===Dd||r===Ud||r===Ld||r===Nd||r===Od)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===xd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Td)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ad)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Nd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===eu||r===Pd||r===Id)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===eu)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Id)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uv||r===zd||r===Bd||r===Fd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===eu)return c.COMPRESSED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}class Nv extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x1=`
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

}`;class M1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Nv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ga({vertexShader:S1,fragmentShader:x1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new gi(new lu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E1 extends Pr{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,M=null,T=null;const R=new M1,x={},v=i.getContextAttributes();let I=null,L=null;const C=[],B=[],G=new ne;let F=null;const X=new si;X.viewport=new ke;const D=new si;D.viewport=new ke;const w=[X,D],P=new FM;let Q=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let dt=C[at];return dt===void 0&&(dt=new Hh,C[at]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(at){let dt=C[at];return dt===void 0&&(dt=new Hh,C[at]=dt),dt.getGripSpace()},this.getHand=function(at){let dt=C[at];return dt===void 0&&(dt=new Hh,C[at]=dt),dt.getHandSpace()};function lt(at){const dt=B.indexOf(at.inputSource);if(dt===-1)return;const xt=C[dt];xt!==void 0&&(xt.update(at.inputSource,at.frame,p||h),xt.dispatchEvent({type:at.type,data:at.inputSource}))}function ut(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",O);for(let at=0;at<C.length;at++){const dt=B[at];dt!==null&&(B[at]=null,C[at].disconnect(dt))}Q=null,et=null,R.reset();for(const at in x)delete x[at];t.setRenderTarget(I),M=null,y=null,g=null,l=null,L=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(F),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){d=at,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(at){p=at},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(I=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await i.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&(g=new XRWebGLBinding(l,i)),g!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ot=null,Yt=null;v.depth&&(Yt=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=v.stencil?rl:al,Ot=v.stencil?il:Ur);const ie={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};y=g.createProjectionLayer(ie),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),L=new Or(y.textureWidth,y.textureHeight,{format:Ri,type:ma,depthTexture:new Av(y.textureWidth,y.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Or(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ma,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function O(at){for(let dt=0;dt<at.removed.length;dt++){const xt=at.removed[dt],Ot=B.indexOf(xt);Ot>=0&&(B[Ot]=null,C[Ot].disconnect(xt))}for(let dt=0;dt<at.added.length;dt++){const xt=at.added[dt];let Ot=B.indexOf(xt);if(Ot===-1){for(let ie=0;ie<C.length;ie++)if(ie>=B.length){B.push(xt),Ot=ie;break}else if(B[ie]===null){B[ie]=xt,Ot=ie;break}if(Ot===-1)break}const Yt=C[Ot];Yt&&Yt.connect(xt)}}const K=new Y,q=new Y;function yt(at,dt,xt){K.setFromMatrixPosition(dt.matrixWorld),q.setFromMatrixPosition(xt.matrixWorld);const Ot=K.distanceTo(q),Yt=dt.projectionMatrix.elements,ie=xt.projectionMatrix.elements,He=Yt[14]/(Yt[10]-1),me=Yt[14]/(Yt[10]+1),H=(Yt[9]+1)/Yt[5],Ae=(Yt[9]-1)/Yt[5],Kt=(Yt[8]-1)/Yt[0],Se=(ie[8]+1)/ie[0],Bt=He*Kt,Ge=He*Se,Ft=Ot/(-Kt+Se),oe=Ft*-Kt;if(dt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(oe),at.translateZ(Ft),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),Yt[10]===-1)at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const qe=He+Ft,je=me+Ft,N=Bt-oe,E=Ge+(Ot-oe),nt=H*me/je*qe,ft=Ae*me/je*qe;at.projectionMatrix.makePerspective(N,E,nt,ft,qe,je),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function U(at,dt){dt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(dt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let dt=at.near,xt=at.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(xt=R.depthFar)),P.near=D.near=X.near=dt,P.far=D.far=X.far=xt,(Q!==P.near||et!==P.far)&&(l.updateRenderState({depthNear:P.near,depthFar:P.far}),Q=P.near,et=P.far),P.layers.mask=at.layers.mask|6,X.layers.mask=P.layers.mask&3,D.layers.mask=P.layers.mask&5;const Ot=at.parent,Yt=P.cameras;U(P,Ot);for(let ie=0;ie<Yt.length;ie++)U(Yt[ie],Ot);Yt.length===2?yt(P,X,D):P.projectionMatrix.copy(X.projectionMatrix),$(at,P,Ot)};function $(at,dt,xt){xt===null?at.matrix.copy(dt.matrixWorld):(at.matrix.copy(xt.matrixWorld),at.matrix.invert(),at.matrix.multiply(dt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(dt.projectionMatrix),at.projectionMatrixInverse.copy(dt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=sl*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(at){m=at,y!==null&&(y.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(P)},this.getCameraTexture=function(at){return x[at]};let vt=null;function St(at,dt){if(_=dt.getViewerPose(p||h),T=dt,_!==null){const xt=_.views;M!==null&&(t.setRenderTargetFramebuffer(L,M.framebuffer),t.setRenderTarget(L));let Ot=!1;xt.length!==P.cameras.length&&(P.cameras.length=0,Ot=!0);for(let me=0;me<xt.length;me++){const H=xt[me];let Ae=null;if(M!==null)Ae=M.getViewport(H);else{const Se=g.getViewSubImage(y,H);Ae=Se.viewport,me===0&&(t.setRenderTargetTextures(L,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(L))}let Kt=w[me];Kt===void 0&&(Kt=new si,Kt.layers.enable(me),Kt.viewport=new ke,w[me]=Kt),Kt.matrix.fromArray(H.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(H.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),me===0&&(P.matrix.copy(Kt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ot===!0&&P.cameras.push(Kt)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const me=g.getDepthInformation(xt[0]);me&&me.isValid&&me.texture&&R.init(me,l.renderState)}if(Yt&&Yt.includes("camera-access")&&(t.state.unbindTexture(),g))for(let me=0;me<xt.length;me++){const H=xt[me].camera;if(H){let Ae=x[H];Ae||(Ae=new Nv,x[H]=Ae);const Kt=g.getCameraImage(H);Ae.sourceTexture=Kt}}}for(let xt=0;xt<C.length;xt++){const Ot=B[xt],Yt=C[xt];Ot!==null&&Yt!==void 0&&Yt.update(Ot,dt,p||h)}vt&&vt(at,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),T=null}const wt=new wv;wt.setAnimationLoop(St),this.setAnimationLoop=function(at){vt=at},this.dispose=function(){}}}const br=new _a,b1=new tn;function T1(s,t){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,vv(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,I,L,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(x,v):v.isMeshToonMaterial?(c(x,v),g(x,v)):v.isMeshPhongMaterial?(c(x,v),_(x,v)):v.isMeshStandardMaterial?(c(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,C)):v.isMeshMatcapMaterial?(c(x,v),T(x,v)):v.isMeshDepthMaterial?c(x,v):v.isMeshDistanceMaterial?(c(x,v),R(x,v)):v.isMeshNormalMaterial?c(x,v):v.isLineBasicMaterial?(h(x,v),v.isLineDashedMaterial&&d(x,v)):v.isPointsMaterial?m(x,v,I,L):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Gn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Gn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const I=t.get(v),L=I.envMap,C=I.envMapRotation;L&&(x.envMap.value=L,br.copy(C),br.x*=-1,br.y*=-1,br.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),x.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(br)),x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function h(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function d(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,I,L){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*I,x.scale.value=L*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function g(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,I){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=I.texture,x.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,v){v.matcap&&(x.matcap.value=v.matcap)}function R(x,v){const I=t.get(v).light;x.referencePosition.value.setFromMatrixPosition(I.matrixWorld),x.nearDistance.value=I.shadow.camera.near,x.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function A1(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,L){const C=L.program;r.uniformBlockBinding(I,C)}function p(I,L){let C=l[I.id];C===void 0&&(T(I),C=_(I),l[I.id]=C,I.addEventListener("dispose",x));const B=L.program;r.updateUBOMapping(I,B);const G=t.render.frame;c[I.id]!==G&&(y(I),c[I.id]=G)}function _(I){const L=g();I.__bindingPointIndex=L;const C=s.createBuffer(),B=I.__size,G=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,B,G),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,C),C}function g(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const L=l[I.id],C=I.uniforms,B=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let G=0,F=C.length;G<F;G++){const X=Array.isArray(C[G])?C[G]:[C[G]];for(let D=0,w=X.length;D<w;D++){const P=X[D];if(M(P,G,D,B)===!0){const Q=P.__offset,et=Array.isArray(P.value)?P.value:[P.value];let lt=0;for(let ut=0;ut<et.length;ut++){const O=et[ut],K=R(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,Q+lt,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,lt),lt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(I,L,C,B){const G=I.value,F=L+"_"+C;if(B[F]===void 0)return typeof G=="number"||typeof G=="boolean"?B[F]=G:B[F]=G.clone(),!0;{const X=B[F];if(typeof G=="number"||typeof G=="boolean"){if(X!==G)return B[F]=G,!0}else if(X.equals(G)===!1)return X.copy(G),!0}return!1}function T(I){const L=I.uniforms;let C=0;const B=16;for(let F=0,X=L.length;F<X;F++){const D=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,P=D.length;w<P;w++){const Q=D[w],et=Array.isArray(Q.value)?Q.value:[Q.value];for(let lt=0,ut=et.length;lt<ut;lt++){const O=et[lt],K=R(O),q=C%B,yt=q%K.boundary,U=q+yt;C+=yt,U!==0&&B-U<K.storage&&(C+=B-U),Q.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=C,C+=K.storage}}}const G=C%B;return G>0&&(C+=B-G),I.__size=C,I.__cache={},this}function R(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function x(I){const L=I.target;L.removeEventListener("dispose",x);const C=h.indexOf(L.__bindingPointIndex);h.splice(C,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const I in l)s.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class R1{constructor(t={}){const{canvas:i=eM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),R=new Int32Array(4);let x=null,v=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=ri;let G=0,F=0,X=null,D=-1,w=null;const P=new ke,Q=new ke;let et=null;const lt=new Ue(0);let ut=0,O=i.width,K=i.height,q=1,yt=null,U=null;const $=new ke(0,0,O,K),vt=new ke(0,0,O,K);let St=!1;const wt=new Tv;let at=!1,dt=!1;const xt=new tn,Ot=new Y,Yt=new ke,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function me(){return X===null?q:1}let H=r;function Ae(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Yd}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Et,!1),H===null){const W="webgl2";if(H=Ae(W,A),H===null)throw Ae(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Kt,Se,Bt,Ge,Ft,oe,qe,je,N,E,nt,ft,gt,ct,Pt,At,kt,Wt,Mt,Lt,jt,Vt,Ct,se;function k(){Kt=new zT(H),Kt.init(),Vt=new y1(H,Kt),Se=new DT(H,Kt,t,Vt),Bt=new g1(H,Kt),Se.reversedDepthBuffer&&y&&Bt.buffers.depth.setReversed(!0),Ge=new HT(H),Ft=new a1,oe=new v1(H,Kt,Bt,Ft,Se,Vt,Ge),qe=new LT(C),je=new IT(C),N=new YM(H),Ct=new wT(H,N),E=new BT(H,N,Ge,Ct),nt=new VT(H,E,N,Ge),Mt=new GT(H,Se,oe),At=new UT(Ft),ft=new i1(C,qe,je,Kt,Se,Ct,At),gt=new T1(C,Ft),ct=new s1,Pt=new h1(Kt),Wt=new RT(C,qe,je,Bt,nt,M,m),kt=new m1(C,nt,Se),se=new A1(H,Ge,Se,Bt),Lt=new CT(H,Kt,Ge),jt=new FT(H,Kt,Ge),Ge.programs=ft.programs,C.capabilities=Se,C.extensions=Kt,C.properties=Ft,C.renderLists=ct,C.shadowMap=kt,C.state=Bt,C.info=Ge}k();const Tt=new E1(C,H);this.xr=Tt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=Kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(O,K,!1))},this.getSize=function(A){return A.set(O,K)},this.setSize=function(A,W,st=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,K=W,i.width=Math.floor(A*q),i.height=Math.floor(W*q),st===!0&&(i.style.width=A+"px",i.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(O*q,K*q).floor()},this.setDrawingBufferSize=function(A,W,st){O=A,K=W,q=st,i.width=Math.floor(A*st),i.height=Math.floor(W*st),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,W,st,ot){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,W,st,ot),Bt.viewport(P.copy($).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,W,st,ot){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,W,st,ot),Bt.scissor(Q.copy(vt).multiplyScalar(q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){Bt.setScissorTest(St=A)},this.setOpaqueSort=function(A){yt=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,st=!0){let ot=0;if(A){let Z=!1;if(X!==null){const bt=X.texture.format;Z=bt===Jd||bt===Qd||bt===Kd}if(Z){const bt=X.texture.type,Ut=bt===ma||bt===Ur||bt===nl||bt===il||bt===jd||bt===Zd,zt=Wt.getClearColor(),Nt=Wt.getClearAlpha(),Qt=zt.r,$t=zt.g,Xt=zt.b;Ut?(T[0]=Qt,T[1]=$t,T[2]=Xt,T[3]=Nt,H.clearBufferuiv(H.COLOR,0,T)):(R[0]=Qt,R[1]=$t,R[2]=Xt,R[3]=Nt,H.clearBufferiv(H.COLOR,0,R))}else ot|=H.COLOR_BUFFER_BIT}W&&(ot|=H.DEPTH_BUFFER_BIT),st&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),Wt.dispose(),ct.dispose(),Pt.dispose(),Ft.dispose(),qe.dispose(),je.dispose(),nt.dispose(),Ct.dispose(),se.dispose(),ft.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ln),Tt.removeEventListener("sessionend",cn),Ke.stop()};function Rt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const A=Ge.autoReset,W=kt.enabled,st=kt.autoUpdate,ot=kt.needsUpdate,Z=kt.type;k(),Ge.autoReset=A,kt.enabled=W,kt.autoUpdate=st,kt.needsUpdate=ot,kt.type=Z}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const W=A.target;W.removeEventListener("dispose",_t),Gt(W)}function Gt(A){ae(A),Ft.remove(A)}function ae(A){const W=Ft.get(A).programs;W!==void 0&&(W.forEach(function(st){ft.releaseProgram(st)}),A.isShaderMaterial&&ft.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,st,ot,Z,bt){W===null&&(W=ie);const Ut=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=va(A,W,st,ot,Z);Bt.setMaterial(ot,Ut);let Nt=st.index,Qt=1;if(ot.wireframe===!0){if(Nt=E.getWireframeAttribute(st),Nt===void 0)return;Qt=2}const $t=st.drawRange,Xt=st.attributes.position;let ue=$t.start*Qt,Me=($t.start+$t.count)*Qt;bt!==null&&(ue=Math.max(ue,bt.start*Qt),Me=Math.min(Me,(bt.start+bt.count)*Qt)),Nt!==null?(ue=Math.max(ue,0),Me=Math.min(Me,Nt.count)):Xt!=null&&(ue=Math.max(ue,0),Me=Math.min(Me,Xt.count));const We=Me-ue;if(We<0||We===1/0)return;Ct.setup(Z,ot,zt,st,Nt);let Le,fe=Lt;if(Nt!==null&&(Le=N.get(Nt),fe=jt,fe.setIndex(Le)),Z.isMesh)ot.wireframe===!0?(Bt.setLineWidth(ot.wireframeLinewidth*me()),fe.setMode(H.LINES)):fe.setMode(H.TRIANGLES);else if(Z.isLine){let Zt=ot.linewidth;Zt===void 0&&(Zt=1),Bt.setLineWidth(Zt*me()),Z.isLineSegments?fe.setMode(H.LINES):Z.isLineLoop?fe.setMode(H.LINE_LOOP):fe.setMode(H.LINE_STRIP)}else Z.isPoints?fe.setMode(H.POINTS):Z.isSprite&&fe.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ks("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))fe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Zt=Z._multiDrawStarts,Xe=Z._multiDrawCounts,_e=Z._multiDrawCount,Rn=Nt?N.get(Nt).bytesPerElement:1,yi=Ft.get(ot).currentProgram.getUniforms();for(let Pn=0;Pn<_e;Pn++)yi.setValue(H,"_gl_DrawID",Pn),fe.render(Zt[Pn]/Rn,Xe[Pn])}else if(Z.isInstancedMesh)fe.renderInstances(ue,We,Z.count);else if(st.isInstancedBufferGeometry){const Zt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Xe=Math.min(st.instanceCount,Zt);fe.renderInstances(ue,We,Xe)}else fe.render(ue,We)};function Re(A,W,st){A.transparent===!0&&A.side===fa&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Li(A,W,st),A.side=$a,A.needsUpdate=!0,Li(A,W,st),A.side=fa):Li(A,W,st)}this.compile=function(A,W,st=null){st===null&&(st=A),v=Pt.get(st),v.init(W),L.push(v),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),A!==st&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const ot=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const bt=Z.material;if(bt)if(Array.isArray(bt))for(let Ut=0;Ut<bt.length;Ut++){const zt=bt[Ut];Re(zt,st,Z),ot.add(zt)}else Re(bt,st,Z),ot.add(bt)}),v=L.pop(),ot},this.compileAsync=function(A,W,st=null){const ot=this.compile(A,W,st);return new Promise(Z=>{function bt(){if(ot.forEach(function(Ut){Ft.get(Ut).currentProgram.isReady()&&ot.delete(Ut)}),ot.size===0){Z(A);return}setTimeout(bt,10)}Kt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xe=null;function vi(A){xe&&xe(A)}function ln(){Ke.stop()}function cn(){Ke.start()}const Ke=new wv;Ke.setAnimationLoop(vi),typeof self<"u"&&Ke.setContext(self),this.setAnimationLoop=function(A){xe=A,Tt.setAnimationLoop(A),A===null?Ke.stop():Ke.start()},Tt.addEventListener("sessionstart",ln),Tt.addEventListener("sessionend",cn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(W),W=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,W,X),v=Pt.get(A,L.length),v.init(W),L.push(v),xt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),wt.setFromProjectionMatrix(xt,Vi,W.reversedDepth),dt=this.localClippingEnabled,at=At.init(this.clippingPlanes,dt),x=ct.get(A,I.length),x.init(),I.push(x),Tt.enabled===!0&&Tt.isPresenting===!0){const bt=C.xr.getDepthSensingMesh();bt!==null&&Ui(bt,W,-1/0,C.sortObjects)}Ui(A,W,0,C.sortObjects),x.finish(),C.sortObjects===!0&&x.sort(yt,U),He=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,He&&Wt.addToRenderList(x,A),this.info.render.frame++,at===!0&&At.beginShadows();const st=v.state.shadowsArray;kt.render(st,A,W),at===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=x.opaque,Z=x.transmissive;if(v.setupLights(),W.isArrayCamera){const bt=W.cameras;if(Z.length>0)for(let Ut=0,zt=bt.length;Ut<zt;Ut++){const Nt=bt[Ut];hl(ot,Z,A,Nt)}He&&Wt.render(A);for(let Ut=0,zt=bt.length;Ut<zt;Ut++){const Nt=bt[Ut];Ir(x,A,Nt,Nt.viewport)}}else Z.length>0&&hl(ot,Z,A,W),He&&Wt.render(A),Ir(x,A,W);X!==null&&F===0&&(oe.updateMultisampleRenderTarget(X),oe.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(C,A,W),Ct.resetDefaultState(),D=-1,w=null,L.pop(),L.length>0?(v=L[L.length-1],at===!0&&At.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,I.pop(),I.length>0?x=I[I.length-1]:x=null};function Ui(A,W,st,ot){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||wt.intersectsSprite(A)){ot&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const Ut=nt.update(A),zt=A.material;zt.visible&&x.push(A,Ut,zt,st,Yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||wt.intersectsObject(A))){const Ut=nt.update(A),zt=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Yt.copy(Ut.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(zt)){const Nt=Ut.groups;for(let Qt=0,$t=Nt.length;Qt<$t;Qt++){const Xt=Nt[Qt],ue=zt[Xt.materialIndex];ue&&ue.visible&&x.push(A,Ut,ue,st,Yt.z,Xt)}}else zt.visible&&x.push(A,Ut,zt,st,Yt.z,null)}}const bt=A.children;for(let Ut=0,zt=bt.length;Ut<zt;Ut++)Ui(bt[Ut],W,st,ot)}function Ir(A,W,st,ot){const Z=A.opaque,bt=A.transmissive,Ut=A.transparent;v.setupLightsView(st),at===!0&&At.setGlobalState(C.clippingPlanes,st),ot&&Bt.viewport(P.copy(ot)),Z.length>0&&zr(Z,W,st),bt.length>0&&zr(bt,W,st),Ut.length>0&&zr(Ut,W,st),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function hl(A,W,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ot.id]===void 0&&(v.state.transmissionRenderTarget[ot.id]=new Or(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?ll:ma,minFilter:Cr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const bt=v.state.transmissionRenderTarget[ot.id],Ut=ot.viewport||P;bt.setSize(Ut.z*C.transmissionResolutionScale,Ut.w*C.transmissionResolutionScale);const zt=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(bt),C.getClearColor(lt),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear(),He&&Wt.render(st);const $t=C.toneMapping;C.toneMapping=Ja;const Xt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),v.setupLightsView(ot),at===!0&&At.setGlobalState(C.clippingPlanes,ot),zr(A,st,ot),oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let ue=!1;for(let Me=0,We=W.length;Me<We;Me++){const Le=W[Me],fe=Le.object,Zt=Le.geometry,Xe=Le.material,_e=Le.group;if(Xe.side===fa&&fe.layers.test(ot.layers)){const Rn=Xe.side;Xe.side=Gn,Xe.needsUpdate=!0,Ks(fe,st,ot,Zt,Xe,_e),Xe.side=Rn,Xe.needsUpdate=!0,ue=!0}}ue===!0&&(oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt))}C.setRenderTarget(zt,Nt,Qt),C.setClearColor(lt,ut),Xt!==void 0&&(ot.viewport=Xt),C.toneMapping=$t}function zr(A,W,st){const ot=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,bt=A.length;Z<bt;Z++){const Ut=A[Z],zt=Ut.object,Nt=Ut.geometry,Qt=Ut.group;let $t=Ut.material;$t.allowOverride===!0&&ot!==null&&($t=ot),zt.layers.test(st.layers)&&Ks(zt,W,st,Nt,$t,Qt)}}function Ks(A,W,st,ot,Z,bt){A.onBeforeRender(C,W,st,ot,Z,bt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(C,W,st,ot,A,bt),Z.transparent===!0&&Z.side===fa&&Z.forceSinglePass===!1?(Z.side=Gn,Z.needsUpdate=!0,C.renderBufferDirect(st,W,ot,Z,A,bt),Z.side=$a,Z.needsUpdate=!0,C.renderBufferDirect(st,W,ot,Z,A,bt),Z.side=fa):C.renderBufferDirect(st,W,ot,Z,A,bt),A.onAfterRender(C,W,st,ot,Z,bt)}function Li(A,W,st){W.isScene!==!0&&(W=ie);const ot=Ft.get(A),Z=v.state.lights,bt=v.state.shadowsArray,Ut=Z.state.version,zt=ft.getParameters(A,Z.state,bt,W,st),Nt=ft.getProgramCacheKey(zt);let Qt=ot.programs;ot.environment=A.isMeshStandardMaterial?W.environment:null,ot.fog=W.fog,ot.envMap=(A.isMeshStandardMaterial?je:qe).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",_t),Qt=new Map,ot.programs=Qt);let $t=Qt.get(Nt);if($t!==void 0){if(ot.currentProgram===$t&&ot.lightsStateVersion===Ut)return Xi(A,zt),$t}else zt.uniforms=ft.getUniforms(A),A.onBeforeCompile(zt,C),$t=ft.acquireProgram(zt,Nt),Qt.set(Nt,$t),ot.uniforms=zt.uniforms;const Xt=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=At.uniform),Xi(A,zt),ot.needsLights=ya(A),ot.lightsStateVersion=Ut,ot.needsLights&&(Xt.ambientLightColor.value=Z.state.ambient,Xt.lightProbe.value=Z.state.probe,Xt.directionalLights.value=Z.state.directional,Xt.directionalLightShadows.value=Z.state.directionalShadow,Xt.spotLights.value=Z.state.spot,Xt.spotLightShadows.value=Z.state.spotShadow,Xt.rectAreaLights.value=Z.state.rectArea,Xt.ltc_1.value=Z.state.rectAreaLTC1,Xt.ltc_2.value=Z.state.rectAreaLTC2,Xt.pointLights.value=Z.state.point,Xt.pointLightShadows.value=Z.state.pointShadow,Xt.hemisphereLights.value=Z.state.hemi,Xt.directionalShadowMap.value=Z.state.directionalShadowMap,Xt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xt.spotShadowMap.value=Z.state.spotShadowMap,Xt.spotLightMatrix.value=Z.state.spotLightMatrix,Xt.spotLightMap.value=Z.state.spotLightMap,Xt.pointShadowMap.value=Z.state.pointShadowMap,Xt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ot.currentProgram=$t,ot.uniformsList=null,$t}function Br(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=nu.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Xi(A,W){const st=Ft.get(A);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function va(A,W,st,ot,Z){W.isScene!==!0&&(W=ie),oe.resetTextureUnits();const bt=W.fog,Ut=ot.isMeshStandardMaterial?W.environment:null,zt=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Lr,Nt=(ot.isMeshStandardMaterial?je:qe).get(ot.envMap||Ut),Qt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,$t=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!st.morphAttributes.position,ue=!!st.morphAttributes.normal,Me=!!st.morphAttributes.color;let We=Ja;ot.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=C.toneMapping);const Le=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,fe=Le!==void 0?Le.length:0,Zt=Ft.get(ot),Xe=v.state.lights;if(at===!0&&(dt===!0||A!==w)){const Qe=A===w&&ot.id===D;At.setState(ot,A,Qe)}let _e=!1;ot.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Xe.state.version||Zt.outputColorSpace!==zt||Z.isBatchedMesh&&Zt.batching===!1||!Z.isBatchedMesh&&Zt.batching===!0||Z.isBatchedMesh&&Zt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Zt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Zt.instancing===!1||!Z.isInstancedMesh&&Zt.instancing===!0||Z.isSkinnedMesh&&Zt.skinning===!1||!Z.isSkinnedMesh&&Zt.skinning===!0||Z.isInstancedMesh&&Zt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Zt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Zt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Zt.instancingMorph===!1&&Z.morphTexture!==null||Zt.envMap!==Nt||ot.fog===!0&&Zt.fog!==bt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==At.numPlanes||Zt.numIntersection!==At.numIntersection)||Zt.vertexAlphas!==Qt||Zt.vertexTangents!==$t||Zt.morphTargets!==Xt||Zt.morphNormals!==ue||Zt.morphColors!==Me||Zt.toneMapping!==We||Zt.morphTargetsCount!==fe)&&(_e=!0):(_e=!0,Zt.__version=ot.version);let Rn=Zt.currentProgram;_e===!0&&(Rn=Li(ot,W,Z));let yi=!1,Pn=!1,mn=!1;const Be=Rn.getUniforms(),In=Zt.uniforms;if(Bt.useProgram(Rn.program)&&(yi=!0,Pn=!0,mn=!0),ot.id!==D&&(D=ot.id,Pn=!0),yi||w!==A){Bt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Be.setValue(H,"projectionMatrix",A.projectionMatrix),Be.setValue(H,"viewMatrix",A.matrixWorldInverse);const Sn=Be.map.cameraPosition;Sn!==void 0&&Sn.setValue(H,Ot.setFromMatrixPosition(A.matrixWorld)),Se.logarithmicDepthBuffer&&Be.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Be.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Pn=!0,mn=!0)}if(Z.isSkinnedMesh){Be.setOptional(H,Z,"bindMatrix"),Be.setOptional(H,Z,"bindMatrixInverse");const Qe=Z.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Be.setValue(H,"boneTexture",Qe.boneTexture,oe))}Z.isBatchedMesh&&(Be.setOptional(H,Z,"batchingTexture"),Be.setValue(H,"batchingTexture",Z._matricesTexture,oe),Be.setOptional(H,Z,"batchingIdTexture"),Be.setValue(H,"batchingIdTexture",Z._indirectTexture,oe),Be.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Be.setValue(H,"batchingColorTexture",Z._colorsTexture,oe));const wn=st.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&Mt.update(Z,st,Rn),(Pn||Zt.receiveShadow!==Z.receiveShadow)&&(Zt.receiveShadow=Z.receiveShadow,Be.setValue(H,"receiveShadow",Z.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(In.envMap.value=Nt,In.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&W.environment!==null&&(In.envMapIntensity.value=W.environmentIntensity),Pn&&(Be.setValue(H,"toneMappingExposure",C.toneMappingExposure),Zt.needsLights&&nr(In,mn),bt&&ot.fog===!0&&gt.refreshFogUniforms(In,bt),gt.refreshMaterialUniforms(In,ot,q,K,v.state.transmissionRenderTarget[A.id]),nu.upload(H,Br(Zt),In,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(nu.upload(H,Br(Zt),In,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Be.setValue(H,"center",Z.center),Be.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Be.setValue(H,"normalMatrix",Z.normalMatrix),Be.setValue(H,"modelMatrix",Z.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Qe=ot.uniformsGroups;for(let Sn=0,Fr=Qe.length;Sn<Fr;Sn++){const Vn=Qe[Sn];se.update(Vn,Rn),se.bind(Vn,Rn)}}return Rn}function nr(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ya(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,W,st){const ot=Ft.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Ft.get(A.texture).__webglTexture=W,Ft.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const st=Ft.get(A);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0};const an=H.createFramebuffer();this.setRenderTarget=function(A,W=0,st=0){X=A,G=W,F=st;let ot=!0,Z=null,bt=!1,Ut=!1;if(A){const Nt=Ft.get(A);if(Nt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Nt.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Nt.__hasExternalTextures)oe.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xt=A.depthTexture;if(Nt.__boundDepthTexture!==Xt){if(Xt!==null&&Ft.has(Xt)&&(A.width!==Xt.image.width||A.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ut=!0);const $t=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[W])?Z=$t[W][st]:Z=$t[W],bt=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?Z=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?Z=$t[st]:Z=$t,P.copy(A.viewport),Q.copy(A.scissor),et=A.scissorTest}else P.copy($).multiplyScalar(q).floor(),Q.copy(vt).multiplyScalar(q).floor(),et=St;if(st!==0&&(Z=an),Bt.bindFramebuffer(H.FRAMEBUFFER,Z)&&ot&&Bt.drawBuffers(A,Z),Bt.viewport(P),Bt.scissor(Q),Bt.setScissorTest(et),bt){const Nt=Ft.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,st)}else if(Ut){const Nt=W;for(let Qt=0;Qt<A.textures.length;Qt++){const $t=Ft.get(A.textures[Qt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,st,Nt)}}else if(A!==null&&st!==0){const Nt=Ft.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Nt.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(A,W,st,ot,Z,bt,Ut,zt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){Bt.bindFramebuffer(H.FRAMEBUFFER,Nt);try{const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!Se.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ot&&st>=0&&st<=A.height-Z&&(A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(W,st,ot,Z,Vt.convert($t),Vt.convert(Xt),bt))}finally{const Qt=X!==null?Ft.get(X).__webglFramebuffer:null;Bt.bindFramebuffer(H.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(A,W,st,ot,Z,bt,Ut,zt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(W>=0&&W<=A.width-ot&&st>=0&&st<=A.height-Z){Bt.bindFramebuffer(H.FRAMEBUFFER,Nt);const Qt=A.textures[zt],$t=Qt.format,Xt=Qt.type;if(!Se.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.bufferData(H.PIXEL_PACK_BUFFER,bt.byteLength,H.STREAM_READ),A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+zt),H.readPixels(W,st,ot,Z,Vt.convert($t),Vt.convert(Xt),0);const Me=X!==null?Ft.get(X).__webglFramebuffer:null;Bt.bindFramebuffer(H.FRAMEBUFFER,Me);const We=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await nM(H,We,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ue),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,bt),H.deleteBuffer(ue),H.deleteSync(We),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,st=0){const ot=Math.pow(2,-st),Z=Math.floor(A.image.width*ot),bt=Math.floor(A.image.height*ot),Ut=W!==null?W.x:0,zt=W!==null?W.y:0;oe.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Ut,zt,Z,bt),Bt.unbindTexture()};const dl=H.createFramebuffer(),pl=H.createFramebuffer();this.copyTextureToTexture=function(A,W,st=null,ot=null,Z=0,bt=null){bt===null&&(Z!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=Z,Z=0):bt=0);let Ut,zt,Nt,Qt,$t,Xt,ue,Me,We;const Le=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(st!==null)Ut=st.max.x-st.min.x,zt=st.max.y-st.min.y,Nt=st.isBox3?st.max.z-st.min.z:1,Qt=st.min.x,$t=st.min.y,Xt=st.isBox3?st.min.z:0;else{const wn=Math.pow(2,-Z);Ut=Math.floor(Le.width*wn),zt=Math.floor(Le.height*wn),A.isDataArrayTexture?Nt=Le.depth:A.isData3DTexture?Nt=Math.floor(Le.depth*wn):Nt=1,Qt=0,$t=0,Xt=0}ot!==null?(ue=ot.x,Me=ot.y,We=ot.z):(ue=0,Me=0,We=0);const fe=Vt.convert(W.format),Zt=Vt.convert(W.type);let Xe;W.isData3DTexture?(oe.setTexture3D(W,0),Xe=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(oe.setTexture2DArray(W,0),Xe=H.TEXTURE_2D_ARRAY):(oe.setTexture2D(W,0),Xe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const _e=H.getParameter(H.UNPACK_ROW_LENGTH),Rn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),yi=H.getParameter(H.UNPACK_SKIP_PIXELS),Pn=H.getParameter(H.UNPACK_SKIP_ROWS),mn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Le.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Le.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qt),H.pixelStorei(H.UNPACK_SKIP_ROWS,$t),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Xt);const Be=A.isDataArrayTexture||A.isData3DTexture,In=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const wn=Ft.get(A),Qe=Ft.get(W),Sn=Ft.get(wn.__renderTarget),Fr=Ft.get(Qe.__renderTarget);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fr.__webglFramebuffer);for(let Vn=0;Vn<Nt;Vn++)Be&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,Z,Xt+Vn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.get(W).__webglTexture,bt,We+Vn)),H.blitFramebuffer(Qt,$t,Ut,zt,ue,Me,Ut,zt,H.DEPTH_BUFFER_BIT,H.NEAREST);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||Ft.has(A)){const wn=Ft.get(A),Qe=Ft.get(W);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,dl),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,pl);for(let Sn=0;Sn<Nt;Sn++)Be?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,wn.__webglTexture,Z,Xt+Sn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wn.__webglTexture,Z),In?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Qe.__webglTexture,bt,We+Sn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Qe.__webglTexture,bt),Z!==0?H.blitFramebuffer(Qt,$t,Ut,zt,ue,Me,Ut,zt,H.COLOR_BUFFER_BIT,H.NEAREST):In?H.copyTexSubImage3D(Xe,bt,ue,Me,We+Sn,Qt,$t,Ut,zt):H.copyTexSubImage2D(Xe,bt,ue,Me,Qt,$t,Ut,zt);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else In?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Xe,bt,ue,Me,We,Ut,zt,Nt,fe,Zt,Le.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Xe,bt,ue,Me,We,Ut,zt,Nt,fe,Le.data):H.texSubImage3D(Xe,bt,ue,Me,We,Ut,zt,Nt,fe,Zt,Le):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,bt,ue,Me,Ut,zt,fe,Zt,Le.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,bt,ue,Me,Le.width,Le.height,fe,Le.data):H.texSubImage2D(H.TEXTURE_2D,bt,ue,Me,Ut,zt,fe,Zt,Le);H.pixelStorei(H.UNPACK_ROW_LENGTH,_e),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Rn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,yi),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,mn),bt===0&&W.generateMipmaps&&H.generateMipmap(Xe),Bt.unbindTexture()},this.copyTextureToTexture3D=function(A,W,st=null,ot=null,Z=0){return ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,W,st,ot,Z)},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Bt.unbindTexture()},this.resetState=function(){G=0,F=0,X=null,Bt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const Y0={type:"change"},sp={type:"start"},Ov={type:"end"},Yc=new ep,q0=new ja,w1=Math.cos(70*hv.DEG2RAD),hn=new Y,qn=2*Math.PI,ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qh=1e-6;class Pv extends XM{constructor(t,i=null){super(t,i),this.state=ze.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:Bs.ROTATE,TWO:Bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Nr,this._lastTargetPosition=new Y,this._quat=new Nr().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new y0,this._sphericalDelta=new y0,this._scale=1,this._panOffset=new Y,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new Y,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D1.bind(this),this._onPointerDown=C1.bind(this),this._onPointerUp=U1.bind(this),this._onContextMenu=B1.bind(this),this._onMouseWheel=O1.bind(this),this._onKeyDown=P1.bind(this),this._onTouchStart=I1.bind(this),this._onTouchMove=z1.bind(this),this._onMouseDown=L1.bind(this),this._onMouseMove=N1.bind(this),this._interceptControlDown=F1.bind(this),this._interceptControlUp=H1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y0),this.update(),this.state=ze.NONE}update(t=null){const i=this.object.position;hn.copy(i).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=qn:r>Math.PI&&(r-=qn),l<-Math.PI?l+=qn:l>Math.PI&&(l-=qn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),i.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=hn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Yc.origin.copy(this.object.position),Yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Yc.direction))<w1?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Yc.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qh||this._lastTargetPosition.distanceToSquared(this.target)>Qh?(this.dispatchEvent(Y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qn/60*this.autoRotateSpeed*t:qn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){hn.setFromMatrixColumn(i,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,i){this.screenSpacePanning===!0?hn.setFromMatrixColumn(i,1):(hn.setFromMatrixColumn(i,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;hn.copy(l).sub(this.target);let c=hn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,h=r.width,d=r.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/i.clientHeight),this._rotateUp(qn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ne,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function C1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function D1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function U1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ov),this.state=ze.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function L1(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ze.DOLLY;break;case Gs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}break;case Gs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ze.PAN}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(sp)}function N1(s){switch(this.state){case ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function O1(s){this.enabled===!1||this.enableZoom===!1||this.state!==ze.NONE||(s.preventDefault(),this.dispatchEvent(sp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ov))}function P1(s){this.enabled!==!1&&this._handleKeyDown(s)}function I1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ze.TOUCH_ROTATE;break;case Bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ze.TOUCH_PAN;break;default:this.state=ze.NONE}break;case 2:switch(this.touches.TWO){case Bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ze.TOUCH_DOLLY_PAN;break;case Bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ze.TOUCH_DOLLY_ROTATE;break;default:this.state=ze.NONE}break;default:this.state=ze.NONE}this.state!==ze.NONE&&this.dispatchEvent(sp)}function z1(s){switch(this._trackPointer(s),this.state){case ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ze.NONE}}function B1(s){this.enabled!==!1&&s.preventDefault()}function F1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function H1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const G1=Math.PI*2/2880;function V1(s=1024,t="white",i="black"){const r=document.createElement("canvas"),l=window.devicePixelRatio||1;r.width=r.height=s*l;const c=r.getContext("2d"),h=s*.5,d=s*.05,m=h-d;if(!c)throw new Error("Failed to get 2D context for canvas");c.clearRect(0,0,s,s),c.beginPath(),c.arc(h,h,m,0,Math.PI*2),c.closePath(),t&&(c.fillStyle=t,c.fill()),i&&(c.lineWidth=d,c.strokeStyle=i,c.stroke());const p=new DM(r);return p.flipY=!1,p.premultiplyAlpha=!1,p.needsUpdate=!0,p}let Xd=1,qc=[];const ru={multiplier:1,setMultiplier:s=>{Xd=s,ru.multiplier=s,qc.forEach(t=>t(s))},getMultiplier:()=>Xd,subscribe:s=>(qc.push(s),()=>{qc=qc.filter(t=>t!==s)})},k1=()=>{const[s,t]=Za.useState(Xd);return Za.useEffect(()=>ru.subscribe(l=>{t(l)}),[]),[s,r=>{ru.setMultiplier(r)}]},j0=new tr,jc=new Y;class Iv extends BM{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new oi(t,3)),this.setAttribute("uv",new oi(i,2))}applyMatrix4(t){const i=this.attributes.instanceStart,r=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(t),r.applyMatrix4(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const r=new Gd(i,6,1);return this.setAttribute("instanceStart",new ki(r,3,0)),this.setAttribute("instanceEnd",new ki(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let i;t instanceof Float32Array?i=t:Array.isArray(t)&&(i=new Float32Array(t));const r=new Gd(i,6,1);return this.setAttribute("instanceColorStart",new ki(r,3,0)),this.setAttribute("instanceColorEnd",new ki(r,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new UM(t.geometry)),this}fromLineSegments(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;t!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(t),j0.setFromBufferAttribute(i),this.boundingBox.union(j0))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(t!==void 0&&i!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)jc.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(jc)),jc.fromBufferAttribute(i,c),l=Math.max(l,r.distanceToSquared(jc));this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}Dt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ne(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};jn.line={uniforms:ip.merge([Dt.common,Dt.fog,Dt.line]),vertexShader:`
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
		`};class op extends ga{constructor(t){super({type:"LineMaterial",uniforms:ip.clone(jn.line.uniforms),vertexShader:jn.line.vertexShader,fragmentShader:jn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Jh=new ke,Z0=new Y,K0=new Y,bn=new ke,Tn=new ke,Bi=new ke,$h=new Y,td=new tn,An=new kM,Q0=new Y,Zc=new tr,Kc=new cl,Fi=new ke;let Hi,Dr;function J0(s,t,i){return Fi.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),Fi.multiplyScalar(1/Fi.w),Fi.x=Dr/i.width,Fi.y=Dr/i.height,Fi.applyMatrix4(s.projectionMatrixInverse),Fi.multiplyScalar(1/Fi.w),Math.abs(Math.max(Fi.x,Fi.y))}function X1(s,t){const i=s.matrixWorld,r=s.geometry,l=r.attributes.instanceStart,c=r.attributes.instanceEnd,h=Math.min(r.instanceCount,l.count);for(let d=0,m=h;d<m;d++){An.start.fromBufferAttribute(l,d),An.end.fromBufferAttribute(c,d),An.applyMatrix4(i);const p=new Y,_=new Y;Hi.distanceSqToSegment(An.start,An.end,_,p),_.distanceTo(p)<Dr*.5&&t.push({point:_,pointOnLine:p,distance:Hi.origin.distanceTo(_),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}function W1(s,t,i){const r=t.projectionMatrix,c=s.material.resolution,h=s.matrixWorld,d=s.geometry,m=d.attributes.instanceStart,p=d.attributes.instanceEnd,_=Math.min(d.instanceCount,m.count),g=-t.near;Hi.at(1,Bi),Bi.w=1,Bi.applyMatrix4(t.matrixWorldInverse),Bi.applyMatrix4(r),Bi.multiplyScalar(1/Bi.w),Bi.x*=c.x/2,Bi.y*=c.y/2,Bi.z=0,$h.copy(Bi),td.multiplyMatrices(t.matrixWorldInverse,h);for(let y=0,M=_;y<M;y++){if(bn.fromBufferAttribute(m,y),Tn.fromBufferAttribute(p,y),bn.w=1,Tn.w=1,bn.applyMatrix4(td),Tn.applyMatrix4(td),bn.z>g&&Tn.z>g)continue;if(bn.z>g){const L=bn.z-Tn.z,C=(bn.z-g)/L;bn.lerp(Tn,C)}else if(Tn.z>g){const L=Tn.z-bn.z,C=(Tn.z-g)/L;Tn.lerp(bn,C)}bn.applyMatrix4(r),Tn.applyMatrix4(r),bn.multiplyScalar(1/bn.w),Tn.multiplyScalar(1/Tn.w),bn.x*=c.x/2,bn.y*=c.y/2,Tn.x*=c.x/2,Tn.y*=c.y/2,An.start.copy(bn),An.start.z=0,An.end.copy(Tn),An.end.z=0;const R=An.closestPointToPointParameter($h,!0);An.at(R,Q0);const x=hv.lerp(bn.z,Tn.z,R),v=x>=-1&&x<=1,I=$h.distanceTo(Q0)<Dr*.5;if(v&&I){An.start.fromBufferAttribute(m,y),An.end.fromBufferAttribute(p,y),An.start.applyMatrix4(h),An.end.applyMatrix4(h);const L=new Y,C=new Y;Hi.distanceSqToSegment(An.start,An.end,C,L),i.push({point:C,pointOnLine:L,distance:Hi.origin.distanceTo(C),object:s,face:null,faceIndex:y,uv:null,uv1:null})}}}class Y1 extends gi{constructor(t=new Iv,i=new op({color:Math.random()*16777215})){super(t,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,i=t.attributes.instanceStart,r=t.attributes.instanceEnd,l=new Float32Array(2*i.count);for(let h=0,d=0,m=i.count;h<m;h++,d+=2)Z0.fromBufferAttribute(i,h),K0.fromBufferAttribute(r,h),l[d]=d===0?0:l[d-1],l[d+1]=l[d]+Z0.distanceTo(K0);const c=new Gd(l,2,1);return t.setAttribute("instanceDistanceStart",new ki(c,1,0)),t.setAttribute("instanceDistanceEnd",new ki(c,1,1)),this}raycast(t,i){const r=this.material.worldUnits,l=t.camera;l===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const c=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Hi=t.ray;const h=this.matrixWorld,d=this.geometry,m=this.material;Dr=m.linewidth+c,d.boundingSphere===null&&d.computeBoundingSphere(),Kc.copy(d.boundingSphere).applyMatrix4(h);let p;if(r)p=Dr*.5;else{const g=Math.max(l.near,Kc.distanceToPoint(Hi.origin));p=J0(l,g,m.resolution)}if(Kc.radius+=p,Hi.intersectsSphere(Kc)===!1)return;d.boundingBox===null&&d.computeBoundingBox(),Zc.copy(d.boundingBox).applyMatrix4(h);let _;if(r)_=Dr*.5;else{const g=Math.max(l.near,Zc.distanceToPoint(Hi.origin));_=J0(l,g,m.resolution)}Zc.expandByScalar(_),Hi.intersectsBox(Zc)!==!1&&(r?X1(this,i):W1(this,l,i))}onBeforeRender(t){const i=this.material.uniforms;i&&i.resolution&&(t.getViewport(Jh),this.material.uniforms.resolution.value.set(Jh.z,Jh.w))}}class zv extends Iv{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const i=t.length-3,r=new Float32Array(2*i);for(let l=0;l<i;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setPositions(r),this}setColors(t){const i=t.length-3,r=new Float32Array(2*i);for(let l=0;l<i;l+=3)r[2*l]=t[l],r[2*l+1]=t[l+1],r[2*l+2]=t[l+2],r[2*l+3]=t[l+3],r[2*l+4]=t[l+4],r[2*l+5]=t[l+5];return super.setColors(r),this}setFromPoints(t){const i=t.length-1,r=new Float32Array(6*i);for(let l=0;l<i;l++)r[6*l]=t[l].x,r[6*l+1]=t[l].y,r[6*l+2]=t[l].z||0,r[6*l+3]=t[l+1].x,r[6*l+4]=t[l+1].y,r[6*l+5]=t[l+1].z||0;return super.setPositions(r),this}fromLine(t){const i=t.geometry;return this.setPositions(i.attributes.position.array),this}}class $0 extends Y1{constructor(t=new zv,i=new op({color:Math.random()*16777215})){super(t,i),this.isLine2=!0,this.type="Line2"}}function On(s,t){const i=new Fs;let r=0,l;const c=(I,L,C,B=0)=>{const G=L,F=L*Math.sqrt(1-C*C),X=L*C;let D=G*Math.cos(I)-X,w=F*Math.sin(I);if(B!==0){const P=D*Math.cos(B)-w*Math.sin(B),Q=D*Math.sin(B)+w*Math.cos(B);D=P,w=Q}return{x:D,z:w}};let h=null;s.orbitalPath?.visible&&s.orbitRadius>0&&(h=((L=0,C,B=0,G="0x444444",F=.4,X=2,D=2048)=>{const w=[];for(let et=0;et<=D;et++){const lt=et/D*Math.PI*2,{x:ut,z:O}=c(lt,C,L,B);w.push(ut,0,O)}const P=new zv;P.setPositions(w);const Q=new op({color:G,transparent:!0,opacity:F,linewidth:X});return Q.resolution.set(window.innerWidth*2,window.innerHeight*2),new $0(P,Q)})(s.eccentricity||0,s.orbitRadius,s.ellipseRotation||0,s.orbitalPath?.color||"0x444444",s.orbitalPath?.opacity||.4,s.orbitalPath?.lineWidth||2),s.orbitalInclination&&(h.rotation.x-=s.orbitalInclination),i.add(h));const d=new Rv().load(s.texture),m=new gi(new cu(s.diameter,64,64),new ou({map:d}));m.position.set(s.orbitRadius,0,0),s.axialTilt&&(m.rotation.x=s.axialTilt),m.renderOrder=0,i.add(m);let p=null;if(s.sprite){const I=V1(2048,s.sprite.color,s.sprite.borderColor),L=new Ev({map:I,transparent:!0,opacity:s.sprite.opacity,depthWrite:!1,alphaTest:.1});p=new AM(L),p.center.set(.4,.4),p.scale.set(s.diameter*s.sprite.scaleFactor,s.diameter*s.sprite.scaleFactor,1),p.frustumCulled=!1,p.renderOrder=1,p.isSprite=!0,p.userData.nonRaycastable=!0,p.position.copy(m.position),i.add(p)}let _=[];t&&t.forEach(I=>{const L=I();_.push(L),L.userData.parentSystemId=s.systemId,i.add(L)});const g=new si(60,window.innerWidth/window.innerHeight,.0015,999999999),y=s.cameraDistance||s.diameter*10+.5;g.position.set(s.orbitRadius+y,y*.3,y*.5),g.lookAt(s.orbitRadius,0,0);const M=s.orbitalInclination||0,T=M!==0?0*Math.sin(M):0;let R=new Y(s.orbitRadius,T,0);const x=(I,L)=>{const C=s.rotationalPeriod??1,B=ru.getMultiplier(),G=G1*B;C!==0&&(m.rotation.y+=G/C);let F,X;if(C===0)F=s.orbitRadius,X=0;else{const w=s.orbitalPeriod||365.25;if(r-=G/w,s.eccentricity&&I){const{x:P,z:Q}=c(r,s.orbitRadius,s.eccentricity,s.ellipseRotation||0),et=s.orbitalInclination||0;let lt=P,ut=Q,O=0;et!==0&&(ut=Q*Math.cos(et),O=Q*Math.sin(et)),F=I.x+lt,X=I.z+ut,m.position.y=I.y+O}else if(I){const P=Math.cos(r)*s.orbitRadius,Q=Math.sin(r)*s.orbitRadius,et=s.orbitalInclination||0;et!==0?(F=I.x+P,X=I.z+Q*Math.cos(et),m.position.y=I.y+Q*Math.sin(et)):(F=I.x+P,X=I.z+Q,m.position.y=I.y)}else{const P=Math.cos(r)*s.orbitRadius,Q=Math.sin(r)*s.orbitRadius,et=s.orbitalInclination||0;if(et!==0){F=P,X=Q*Math.cos(et);const lt=Q*Math.sin(et);m.position.y=lt}else F=P,X=Q}}if(l){const w=m.position.y,P=new Y(F-R.x,w-R.y,X-R.z);l.object.position.add(P)}const D=m.position.y;if(m.position.set(F,D,X),R.set(F,D,X),p){p.position.set(F,D,X);const w=L===g,P=_.some(Q=>Q.userData.camera===L);p.visible=!w&&!P}l&&(l.target.copy(m.position),l.update()),_.forEach(w=>{w&&w.userData.animate&&(w.userData.animate(m.position,L),w.children&&w.children.forEach(P=>{P instanceof $0&&P.position.copy(m.position)}))}),I&&h&&h.position.copy(I)},v=I=>{l=new Pv(g,I),l.target.copy(m.position)};return i.userData={camera:g,systemId:s.systemId,animate:x,setupControls:v,mesh:m,sprite:p,childSystems:_,parentSystemId:null},i}const er=1e3,q1={diameter:1e3,orbitRadius:0,texture:"solarimages/4k_sun.jpg",systemId:"solSystem",axialTilt:Math.PI*(1e-5/180),orbitalPeriod:0,rotationalPeriod:0,orbitalInclination:0},j1={diameter:.383,orbitRadius:4545,axialTilt:Math.PI*(.01/180),texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"lightgrey",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"lightgrey",opacity:.8,lineWidth:2},orbitalPeriod:88,rotationalPeriod:58.65,orbitalInclination:Math.PI*(7/180),systemId:"mercurySystem"},Z1={diameter:.949,orbitRadius:8476,axialTilt:Math.PI*(177.36/180),texture:"solarimages/2k_venus_atmosphere.jpg",sprite:{color:"transparent",borderColor:"yellow",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"yellow",opacity:.8,lineWidth:2},orbitalPeriod:224.7,rotationalPeriod:243,orbitalInclination:Math.PI*(3.4/180),systemId:"venusSystem"},K1={diameter:1,orbitRadius:11740,axialTilt:Math.PI*(23.4/180),texture:"solarimages/2k_earth_daymap.jpg",sprite:{color:"rgba(0,136,255,0.1)",borderColor:"#0088ff",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"#0088ff",opacity:.8,lineWidth:2},orbitalPeriod:365.25,rotationalPeriod:1,orbitalInclination:0,systemId:"earthSystem"},Q1={diameter:.53,orbitRadius:17891,axialTilt:Math.PI*(25.2/180),texture:"solarimages/2k_mars.jpg",sprite:{color:"transparent",borderColor:"orange",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"orange",opacity:.8,lineWidth:2},orbitalPeriod:687,rotationalPeriod:1.03,orbitalInclination:Math.PI*(1.85/180),systemId:"marsSystem"},J1={diameter:11.209,orbitRadius:47300,axialTilt:Math.PI*(3.13/180),texture:"solarimages/2k_jupiter.jpg",sprite:{color:"transparent",borderColor:"orange",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"orange",opacity:.8,lineWidth:2},orbitalPeriod:4332.6,rotationalPeriod:.41,orbitalInclination:Math.PI*(1.3/180),systemId:"jupiterSystem"},$1={diameter:9.45,orbitRadius:77830,axialTilt:Math.PI*(26.73/180),texture:"solarimages/2k_saturn.jpg",sprite:{color:"transparent",borderColor:"beige",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"beige",opacity:.8,lineWidth:2},orbitalPeriod:10759,rotationalPeriod:.72,orbitalInclination:Math.PI*(2.5/180),systemId:"saturnSystem"},tR={diameter:4.01,orbitRadius:118600,axialTilt:Math.PI*(97.77/180),texture:"solarimages/2k_uranus.jpg",sprite:{color:"transparent",borderColor:"green",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"green",opacity:.8,lineWidth:2},orbitalPeriod:30687,rotationalPeriod:1.0274,orbitalInclination:Math.PI*(.8/180),systemId:"uranusSystem"},eR={diameter:3.88,orbitRadius:142900,axialTilt:Math.PI*(28.32/180),texture:"solarimages/2k_neptune.jpg",sprite:{color:"transparent",borderColor:"blue",opacity:.6,scaleFactor:er},orbitalPath:{visible:!0,color:"blue",opacity:.8,lineWidth:2},orbitalPeriod:60190,rotationalPeriod:.67,orbitalInclination:Math.PI*(1.8/180),systemId:"neptuneSystem"},nR={diameter:.2727,orbitRadius:30,eccentricity:.0549,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},orbitalPeriod:27.3,orbitalInclination:Math.PI*(5.145/180),systemId:"lunaSystem"},iR={diameter:.00174,orbitRadius:.735,eccentricity:.01,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:1,scaleFactor:250},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},orbitalPeriod:.3191,systemId:"phobosSystem",orbitalInclination:Math.PI*(1.093/180),ellipseRotation:Math.PI*.025},aR={diameter:99e-5,orbitRadius:1.84,eccentricity:24e-5,sprite:{color:"transparent",borderColor:"grey",opacity:1,scaleFactor:250},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},texture:"solarimages/2k_mercury.jpg",orbitalPeriod:1.2624,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(1.8/180),systemId:"deimosSystem"},rR={diameter:.2859,orbitRadius:33.1,eccentricity:.0041,sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},texture:"solarimages/2k_mercury.jpg",orbitalPeriod:1.769,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.05/180),systemId:"ioSystem"},sR={diameter:.245,orbitRadius:52.7,eccentricity:.009,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},orbitalPeriod:3.551,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.47/180),systemId:"europaSystem"},oR={diameter:.4134,orbitRadius:84,eccentricity:.0013,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},orbitalPeriod:7.155,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.2/180),systemId:"ganymedeSystem"},lR={diameter:.3784,orbitRadius:147.8,eccentricity:.0074,texture:"solarimages/2k_mercury.jpg",sprite:{color:"transparent",borderColor:"grey",opacity:.3,scaleFactor:50},orbitalPath:{visible:!0,color:"grey",opacity:.8,lineWidth:2},orbitalPeriod:16.689,ellipseRotation:Math.PI*.025,orbitalInclination:Math.PI*(.192/180),systemId:"callistoSystem"},cR=()=>On(nR),uR=()=>On(K1,[()=>cR()]),fR=()=>{const s=new xv,t=new Rv().load("starmap.webp"),i=new cu(99999999999,32,32);i.scale(20,20,20);const r=new ou({map:t,side:Gn,depthWrite:!1,transparent:!0,opacity:1}),l=new gi(i,r);return s.add(l),s},hR=()=>On(iR),dR=()=>On(aR),pR=()=>On(Q1,[()=>hR(),()=>dR()]),mR=()=>On(q1),_R=()=>On(Z1),gR=()=>On(j1),vR=()=>On(rR),yR=()=>On(sR),SR=()=>On(oR),xR=()=>On(lR),MR=()=>On(J1,[()=>vR(),()=>yR(),()=>SR(),()=>xR()]),ER=()=>On($1),bR=()=>On(tR),TR=()=>On(eR);function AR(){const s=Za.useRef(null),t=Za.useRef(null),i=Za.useRef(new Map),r=Za.useRef([]),[l,c]=k1();return Za.useEffect(()=>{let h;if(!s.current)return;const d=new xv,m=new si(60,window.innerWidth/window.innerHeight,.1,999999999);m.position.setZ(6e3),t.current=m;const p=new R1({canvas:s.current,antialias:!0});p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.outputColorSpace=ri;const _=new Pv(m,p.domElement);_.enableDamping=!0,_.dampingFactor=.05,_.update();const g=fR();d.add(g);const y=uR(),M=pR(),T=mR(),R=_R(),x=gR(),v=MR(),I=ER(),L=bR(),C=TR(),B=[y,M,T,R,x,v,I,L,C],G=Q=>{Q.userData.childSystems&&Q.userData.childSystems.forEach(et=>{B.push(et),et.userData.parentSystemId=Q.userData.systemId,G(et)})};B.slice().forEach(G),r.current=B,B.forEach(Q=>{d.add(Q),Q.userData.camera&&Q.userData.systemId&&(i.current.set(Q.userData.systemId,Q.userData.camera),Q.userData.setupControls&&Q.userData.setupControls(p.domElement))});const F=Q=>{const et=i.current.get(Q);et&&(t.current=et)},X=()=>{t.current=m,_.object=m,_.update()},D=Q=>{const et=[],lt=ut=>{et.push(ut),ut.children.forEach(O=>{O instanceof Fs&&O.userData.systemId&&lt(O)})};return Q.forEach(lt),et},w=Q=>{const et=new HM,lt=new ne;lt.x=Q.clientX/window.innerWidth*2-1,lt.y=-(Q.clientY/window.innerHeight)*2+1,et.setFromCamera(lt,t.current);const ut=D(r.current);let O=null,K=null;for(const q of ut){const yt=et.intersectObjects(q.children,!0);if(yt.length>0){const $=yt.find(vt=>vt.object.type!=="Sprite")||yt[0];(!O||$.distance<O.distance||$.distance===O.distance&&yt.length<O.intersectCount)&&(O=$,O.intersectCount=yt.length,K=q)}}if(K){F(K.userData.systemId);return}X()};p.domElement.addEventListener("dblclick",w);const P=()=>{r.current.forEach(Q=>{if(Q.userData.animate){let et;if(Q.userData.parentSystemId){const lt=r.current.find(ut=>ut.userData.systemId===Q.userData.parentSystemId);lt&&lt.userData.mesh&&(et=lt.userData.mesh.position)}Q.userData.animate(et,t.current)}}),t.current===m&&_.update(),p.render(d,t.current),p.outputColorSpace=Lr,h=requestAnimationFrame(P)};return P(),()=>{p.domElement.removeEventListener("dblclick",w),cancelAnimationFrame(h),d.remove(y),d.remove(M),d.remove(R),d.remove(x),d.remove(v),d.remove(I),d.remove(L),d.remove(C),d.remove(T),d.remove(g),p.dispose()}},[]),Fn.jsxs(Fn.Fragment,{children:[Fn.jsx("canvas",{ref:s,id:"bg"}),Fn.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",zIndex:1e3,color:"white",fontFamily:"Arial, sans-serif"},children:[Fn.jsxs("label",{htmlFor:"speed-control",style:{display:"block",marginBottom:"5px"},children:["Time Speed: ",l,"x"]}),Fn.jsxs("select",{id:"speed-control",value:l,onChange:h=>c(Number(h.target.value)),style:{padding:"5px",fontSize:"14px",backgroundColor:"#333",color:"white",border:"1px solid #555",borderRadius:"4px"},children:[Fn.jsx("option",{value:0,children:"0x (Very Slow)"}),Fn.jsx("option",{value:.1,children:"1/10x (Very Slow)"}),Fn.jsx("option",{value:.25,children:"1/4x (Slow)"}),Fn.jsx("option",{value:1,children:"1x (Normal)"}),Fn.jsx("option",{value:10,children:"10x (Fast)"}),Fn.jsx("option",{value:100,children:"100x (Very Fast)"}),Fn.jsx("option",{value:1e3,children:"1000x (Ultra Fast)"})]})]})]})}KS.createRoot(document.getElementById("root")).render(Fn.jsx(Za.StrictMode,{children:Fn.jsx(AR,{})}));
