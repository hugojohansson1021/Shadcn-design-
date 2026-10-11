/*! Gallery bundle: img-fx (MIT © Jakub Antalik), React 18 (MIT © Meta), three.js (MIT © three.js authors). Built from ../source. */
(()=>{var wx=Object.create;var qp=Object.defineProperty;var Ex=Object.getOwnPropertyDescriptor;var bx=Object.getOwnPropertyNames;var Tx=Object.getPrototypeOf,Cx=Object.prototype.hasOwnProperty;var ri=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Rx=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of bx(e))!Cx.call(t,r)&&r!==n&&qp(t,r,{get:()=>e[r],enumerable:!(i=Ex(e,r))||i.enumerable});return t};var pr=(t,e,n)=>(n=t!=null?wx(Tx(t)):{},Rx(e||!t||!t.__esModule?qp(n,"default",{value:t,enumerable:!0}):n,t));var rm=ri(Ye=>{"use strict";var ro=Symbol.for("react.element"),Px=Symbol.for("react.portal"),Ix=Symbol.for("react.fragment"),Lx=Symbol.for("react.strict_mode"),Dx=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Ux=Symbol.for("react.context"),Fx=Symbol.for("react.forward_ref"),Ox=Symbol.for("react.suspense"),Bx=Symbol.for("react.memo"),kx=Symbol.for("react.lazy"),Yp=Symbol.iterator;function zx(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var Zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qp=Object.assign,jp={};function Kr(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Zp}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Kr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $p(){}$p.prototype=Kr.prototype;function Jc(t,e,n){this.props=t,this.context=e,this.refs=jp,this.updater=n||Zp}var Kc=Jc.prototype=new $p;Kc.constructor=Jc;Qp(Kc,Kr.prototype);Kc.isPureReactComponent=!0;var Jp=Array.isArray,em=Object.prototype.hasOwnProperty,Zc={current:null},tm={key:!0,ref:!0,__self:!0,__source:!0};function nm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)em.call(e,i)&&!tm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ro,type:t,key:s,ref:o,props:r,_owner:Zc.current}}function Hx(t,e){return{$$typeof:ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Qc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ro}function Vx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kp=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Vx(""+t.key):e.toString(36)}function xa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ro:case Px:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Yc(o,0):i,Jp(r)?(n="",t!=null&&(n=t.replace(Kp,"$&/")+"/"),xa(r,e,n,"",function(c){return c})):r!=null&&(Qc(r)&&(r=Hx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Kp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Yc(s,a);o+=xa(s,e,n,l,r)}else if(l=zx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Yc(s,a++),o+=xa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var i=[],r=0;return xa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Gx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wt={current:null},_a={transition:null},Wx={ReactCurrentDispatcher:Wt,ReactCurrentBatchConfig:_a,ReactCurrentOwner:Zc};function im(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Qc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Kr;Ye.Fragment=Ix;Ye.Profiler=Dx;Ye.PureComponent=Jc;Ye.StrictMode=Lx;Ye.Suspense=Ox;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wx;Ye.act=im;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Qp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)em.call(e,l)&&!tm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ro,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:Ux,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nx,_context:t},t.Consumer=t};Ye.createElement=nm;Ye.createFactory=function(t){var e=nm.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Fx,render:t}};Ye.isValidElement=Qc;Ye.lazy=function(t){return{$$typeof:kx,_payload:{_status:-1,_result:t},_init:Gx}};Ye.memo=function(t,e){return{$$typeof:Bx,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=_a.transition;_a.transition={};try{t()}finally{_a.transition=e}};Ye.unstable_act=im;Ye.useCallback=function(t,e){return Wt.current.useCallback(t,e)};Ye.useContext=function(t){return Wt.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return Wt.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return Wt.current.useEffect(t,e)};Ye.useId=function(){return Wt.current.useId()};Ye.useImperativeHandle=function(t,e,n){return Wt.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return Wt.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return Wt.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return Wt.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return Wt.current.useReducer(t,e,n)};Ye.useRef=function(t){return Wt.current.useRef(t)};Ye.useState=function(t){return Wt.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return Wt.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return Wt.current.useTransition()};Ye.version="18.3.1"});var so=ri((LT,sm)=>{"use strict";sm.exports=rm()});var mm=ri(st=>{"use strict";function tu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Sa(r,e))t[i]=e,t[n]=r,n=i;else break e}}function Ln(t){return t.length===0?null:t[0]}function Aa(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Sa(a,n))l<r&&0>Sa(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Sa(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Sa(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(om=performance,st.unstable_now=function(){return om.now()}):(jc=Date,am=jc.now(),st.unstable_now=function(){return jc.now()-am});var om,jc,am,Jn=[],Pi=[],Xx=1,xn=null,Ft=3,wa=!1,mr=!1,ao=!1,um=typeof setTimeout=="function"?setTimeout:null,hm=typeof clearTimeout=="function"?clearTimeout:null,lm=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function nu(t){for(var e=Ln(Pi);e!==null;){if(e.callback===null)Aa(Pi);else if(e.startTime<=t)Aa(Pi),e.sortIndex=e.expirationTime,tu(Jn,e);else break;e=Ln(Pi)}}function iu(t){if(ao=!1,nu(t),!mr)if(Ln(Jn)!==null)mr=!0,su(ru);else{var e=Ln(Pi);e!==null&&ou(iu,e.startTime-t)}}function ru(t,e){mr=!1,ao&&(ao=!1,hm(lo),lo=-1),wa=!0;var n=Ft;try{for(nu(e),xn=Ln(Jn);xn!==null&&(!(xn.expirationTime>e)||t&&!pm());){var i=xn.callback;if(typeof i=="function"){xn.callback=null,Ft=xn.priorityLevel;var r=i(xn.expirationTime<=e);e=st.unstable_now(),typeof r=="function"?xn.callback=r:xn===Ln(Jn)&&Aa(Jn),nu(e)}else Aa(Jn);xn=Ln(Jn)}if(xn!==null)var s=!0;else{var o=Ln(Pi);o!==null&&ou(iu,o.startTime-e),s=!1}return s}finally{xn=null,Ft=n,wa=!1}}var Ea=!1,Ma=null,lo=-1,dm=5,fm=-1;function pm(){return!(st.unstable_now()-fm<dm)}function $c(){if(Ma!==null){var t=st.unstable_now();fm=t;var e=!0;try{e=Ma(!0,t)}finally{e?oo():(Ea=!1,Ma=null)}}else Ea=!1}var oo;typeof lm=="function"?oo=function(){lm($c)}:typeof MessageChannel<"u"?(eu=new MessageChannel,cm=eu.port2,eu.port1.onmessage=$c,oo=function(){cm.postMessage(null)}):oo=function(){um($c,0)};var eu,cm;function su(t){Ma=t,Ea||(Ea=!0,oo())}function ou(t,e){lo=um(function(){t(st.unstable_now())},e)}st.unstable_IdlePriority=5;st.unstable_ImmediatePriority=1;st.unstable_LowPriority=4;st.unstable_NormalPriority=3;st.unstable_Profiling=null;st.unstable_UserBlockingPriority=2;st.unstable_cancelCallback=function(t){t.callback=null};st.unstable_continueExecution=function(){mr||wa||(mr=!0,su(ru))};st.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):dm=0<t?Math.floor(1e3/t):5};st.unstable_getCurrentPriorityLevel=function(){return Ft};st.unstable_getFirstCallbackNode=function(){return Ln(Jn)};st.unstable_next=function(t){switch(Ft){case 1:case 2:case 3:var e=3;break;default:e=Ft}var n=Ft;Ft=e;try{return t()}finally{Ft=n}};st.unstable_pauseExecution=function(){};st.unstable_requestPaint=function(){};st.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Ft;Ft=t;try{return e()}finally{Ft=n}};st.unstable_scheduleCallback=function(t,e,n){var i=st.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:Xx++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,tu(Pi,t),Ln(Jn)===null&&t===Ln(Pi)&&(ao?(hm(lo),lo=-1):ao=!0,ou(iu,n-i))):(t.sortIndex=r,tu(Jn,t),mr||wa||(mr=!0,su(ru))),t};st.unstable_shouldYield=pm;st.unstable_wrapCallback=function(t){var e=Ft;return function(){var n=Ft;Ft=e;try{return t.apply(this,arguments)}finally{Ft=n}}}});var vm=ri((NT,gm)=>{"use strict";gm.exports=mm()});var Sv=ri(fn=>{"use strict";var qx=so(),hn=vm();function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,Io={};function Cr(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(Io[t]=e,t=0;t<e.length;t++)wg.add(e[t])}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ru=Object.prototype.hasOwnProperty,Yx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ym={},xm={};function Jx(t){return Ru.call(xm,t)?!0:Ru.call(ym,t)?!1:Yx.test(t)?xm[t]=!0:(ym[t]=!0,!1)}function Kx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zx(t,e,n,i){if(e===null||typeof e>"u"||Kx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,Mh);Ut[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,Mh);Ut[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,Mh);Ut[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ah(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zx(e,n,r,i)&&(n=null),i||r===null?Jx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var pi=qx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ba=Symbol.for("react.element"),jr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),Pu=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),bg=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),Lu=Symbol.for("react.suspense_list"),bh=Symbol.for("react.memo"),Li=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Tg=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var _m=Symbol.iterator;function co(t){return t===null||typeof t!="object"?null:(t=_m&&t[_m]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,au;function yo(t){if(au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);au=e&&e[1]||""}return`
`+au+t}var lu=!1;function cu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function Qx(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function Du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case jr:return"Portal";case Pu:return"Profiler";case wh:return"StrictMode";case Iu:return"Suspense";case Lu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case bg:return(t.displayName||"Context")+".Consumer";case Eg:return(t._context.displayName||"Context")+".Provider";case Eh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case bh:return e=t.displayName||null,e!==null?e:Du(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return Du(t(e))}catch{}}return null}function jx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Du(e);case 8:return e===wh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $x(t){var e=Cg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ta(t){t._valueTracker||(t._valueTracker=$x(t))}function Rg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Cg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nu(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=qi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&Ah(t,"checked",e,!1)}function Uu(t,e){Pg(t,e);var n=qi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fu(t,e.type,qi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fu(t,e,n){(e!=="number"||tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xo=Array.isArray;function us(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+qi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(xo(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qi(n)}}function Ig(t,e){var n=qi(e.value),i=qi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ca,Dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ca=Ca||document.createElement("div"),Ca.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ca.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e_=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){e_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function Ng(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function Ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ng(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var t_=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(t_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function zu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function Th(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vu=null,hs=null,ds=null;function Em(t){if(t=Zo(t)){if(typeof Vu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Rl(e),Vu(t.stateNode,t.type,e))}}function Fg(t){hs?ds?ds.push(t):ds=[t]:hs=t}function Og(){if(hs){var t=hs,e=ds;if(ds=hs=null,Em(t),e)for(t=0;t<e.length;t++)Em(e[t])}}function Bg(t,e){return t(e)}function kg(){}var uu=!1;function zg(t,e,n){if(uu)return t(e,n);uu=!0;try{return Bg(t,e,n)}finally{uu=!1,(hs!==null||ds!==null)&&(kg(),Og())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var i=Rl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Gu=!1;if(ui)try{Zr={},Object.defineProperty(Zr,"passive",{get:function(){Gu=!0}}),window.addEventListener("test",Zr,Zr),window.removeEventListener("test",Zr,Zr)}catch{Gu=!1}var Zr;function n_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Ao=!1,nl=null,il=!1,Wu=null,i_={onError:function(t){Ao=!0,nl=t}};function r_(t,e,n,i,r,s,o,a,l){Ao=!1,nl=null,n_.apply(i_,arguments)}function s_(t,e,n,i,r,s,o,a,l){if(r_.apply(this,arguments),Ao){if(Ao){var c=nl;Ao=!1,nl=null}else throw Error(ne(198));il||(il=!0,Wu=c)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bm(t){if(Rr(t)!==t)throw Error(ne(188))}function o_(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return bm(r),t;if(s===i)return bm(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Vg(t){return t=o_(t),t!==null?Gg(t):null}function Gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=hn.unstable_scheduleCallback,Tm=hn.unstable_cancelCallback,a_=hn.unstable_shouldYield,l_=hn.unstable_requestPaint,xt=hn.unstable_now,c_=hn.unstable_getCurrentPriorityLevel,Ch=hn.unstable_ImmediatePriority,Xg=hn.unstable_UserBlockingPriority,rl=hn.unstable_NormalPriority,u_=hn.unstable_LowPriority,qg=hn.unstable_IdlePriority,El=null,jn=null;function h_(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(El,t,void 0,(t.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:p_,d_=Math.log,f_=Math.LN2;function p_(t){return t>>>=0,t===0?32:31-(d_(t)/f_|0)|0}var Ra=64,Pa=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function sl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=_o(a):(s&=o,s!==0&&(i=_o(s)))}else o=n&~r,o!==0?i=_o(o):s!==0&&(i=_o(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-On(e),r=1<<n,i|=t[n],e&=~r;return i}function m_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-On(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=m_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yg(){var t=Ra;return Ra<<=1,!(Ra&4194240)&&(Ra=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-On(e),t[e]=n}function v_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-On(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Rh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-On(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Jg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kg,Ph,Zg,Qg,jg,qu=!1,Ia=[],Bi=null,ki=null,zi=null,No=new Map,Uo=new Map,Ni=[],y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":ki=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function uo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Zo(e),e!==null&&Ph(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x_(t,e,n,i,r){switch(e){case"focusin":return Bi=uo(Bi,t,e,n,i,r),!0;case"dragenter":return ki=uo(ki,t,e,n,i,r),!0;case"mouseover":return zi=uo(zi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return No.set(s,uo(No.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Uo.set(s,uo(Uo.get(s)||null,t,e,n,i,r)),!0}return!1}function $g(t){var e=yr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hg(n),e!==null){t.blockedOn=e,jg(t.priority,function(){Zg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hu=i,n.target.dispatchEvent(i),Hu=null}else return e=Zo(n),e!==null&&Ph(e),t.blockedOn=n,!1;e.shift()}return!0}function Rm(t,e,n){Xa(t)&&n.delete(e)}function __(){qu=!1,Bi!==null&&Xa(Bi)&&(Bi=null),ki!==null&&Xa(ki)&&(ki=null),zi!==null&&Xa(zi)&&(zi=null),No.forEach(Rm),Uo.forEach(Rm)}function ho(t,e){t.blockedOn===e&&(t.blockedOn=null,qu||(qu=!0,hn.unstable_scheduleCallback(hn.unstable_NormalPriority,__)))}function Fo(t){function e(r){return ho(r,t)}if(0<Ia.length){ho(Ia[0],t);for(var n=1;n<Ia.length;n++){var i=Ia[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&ho(Bi,t),ki!==null&&ho(ki,t),zi!==null&&ho(zi,t),No.forEach(e),Uo.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&Ni.shift()}var fs=pi.ReactCurrentBatchConfig,ol=!0;function S_(t,e,n,i){var r=it,s=fs.transition;fs.transition=null;try{it=1,Ih(t,e,n,i)}finally{it=r,fs.transition=s}}function M_(t,e,n,i){var r=it,s=fs.transition;fs.transition=null;try{it=4,Ih(t,e,n,i)}finally{it=r,fs.transition=s}}function Ih(t,e,n,i){if(ol){var r=Yu(t,e,n,i);if(r===null)yu(t,e,i,al,n),Cm(t,i);else if(x_(r,t,e,n,i))i.stopPropagation();else if(Cm(t,i),e&4&&-1<y_.indexOf(t)){for(;r!==null;){var s=Zo(r);if(s!==null&&Kg(s),s=Yu(t,e,n,i),s===null&&yu(t,e,i,al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yu(t,e,i,null,n)}}var al=null;function Yu(t,e,n,i){if(al=null,t=Th(i),t=yr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return al=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c_()){case Ch:return 1;case Xg:return 4;case rl:case u_:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Fi=null,Lh=null,qa=null;function t0(){if(qa)return qa;var t,e=Lh,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return qa=r.slice(t,1<i?1-i:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function La(){return!0}function Pm(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?La:Pm,this.isPropagationStopped=Pm,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),e}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dh=dn(As),Ko=mt({},As,{view:0,detail:0}),A_=dn(Ko),du,fu,fo,bl=mt({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fo&&(fo&&t.type==="mousemove"?(du=t.screenX-fo.screenX,fu=t.screenY-fo.screenY):fu=du=0,fo=t),du)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),Im=dn(bl),w_=mt({},bl,{dataTransfer:0}),E_=dn(w_),b_=mt({},Ko,{relatedTarget:0}),pu=dn(b_),T_=mt({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),C_=dn(T_),R_=mt({},As,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),P_=dn(R_),I_=mt({},As,{data:0}),Lm=dn(I_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N_[t])?!!e[t]:!1}function Nh(){return U_}var F_=mt({},Ko,{key:function(t){if(t.key){var e=L_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nh,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O_=dn(F_),B_=mt({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=dn(B_),k_=mt({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nh}),z_=dn(k_),H_=mt({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=dn(H_),G_=mt({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),W_=dn(G_),X_=[9,13,27,32],Uh=ui&&"CompositionEvent"in window,wo=null;ui&&"documentMode"in document&&(wo=document.documentMode);var q_=ui&&"TextEvent"in window&&!wo,n0=ui&&(!Uh||wo&&8<wo&&11>=wo),Nm=" ",Um=!1;function i0(t,e){switch(t){case"keyup":return X_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function Y_(t,e){switch(t){case"compositionend":return r0(e);case"keypress":return e.which!==32?null:(Um=!0,Nm);case"textInput":return t=e.data,t===Nm&&Um?null:t;default:return null}}function J_(t,e){if(es)return t==="compositionend"||!Uh&&i0(t,e)?(t=t0(),qa=Lh=Fi=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var K_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K_[t.type]:e==="textarea"}function s0(t,e,n,i){Fg(i),e=ll(e,"onChange"),0<e.length&&(n=new Dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Eo=null,Oo=null;function Z_(t){g0(t,0)}function Tl(t){var e=is(t);if(Rg(e))return t}function Q_(t,e){if(t==="change")return e}var o0=!1;ui&&(ui?(Na="oninput"in document,Na||(mu=document.createElement("div"),mu.setAttribute("oninput","return;"),Na=typeof mu.oninput=="function"),Da=Na):Da=!1,o0=Da&&(!document.documentMode||9<document.documentMode));var Da,Na,mu;function Om(){Eo&&(Eo.detachEvent("onpropertychange",a0),Oo=Eo=null)}function a0(t){if(t.propertyName==="value"&&Tl(Oo)){var e=[];s0(e,Oo,t,Th(t)),zg(Z_,e)}}function j_(t,e,n){t==="focusin"?(Om(),Eo=e,Oo=n,Eo.attachEvent("onpropertychange",a0)):t==="focusout"&&Om()}function $_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(Oo)}function eS(t,e){if(t==="click")return Tl(e)}function tS(t,e){if(t==="input"||t==="change")return Tl(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kn=typeof Object.is=="function"?Object.is:nS;function Bo(t,e){if(kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ru.call(e,r)||!kn(t[r],e[r]))return!1}return!0}function Bm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function km(t,e){var n=Bm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bm(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(){for(var t=window,e=tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=tl(t.document)}return e}function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iS(t){var e=c0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(i!==null&&Fh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=km(n,s);var o=km(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rS=ui&&"documentMode"in document&&11>=document.documentMode,ts=null,Ju=null,bo=null,Ku=!1;function zm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ku||ts==null||ts!==tl(i)||(i=ts,"selectionStart"in i&&Fh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),bo&&Bo(bo,i)||(bo=i,i=ll(Ju,"onSelect"),0<i.length&&(e=new Dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ts)))}function Ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},gu={},u0={};ui&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Cl(t){if(gu[t])return gu[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u0)return gu[t]=e[n];return t}var h0=Cl("animationend"),d0=Cl("animationiteration"),f0=Cl("animationstart"),p0=Cl("transitionend"),m0=new Map,Hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){m0.set(t,e),Cr(e,[t])}for(Fa=0;Fa<Hm.length;Fa++)Oa=Hm[Fa],Vm=Oa.toLowerCase(),Gm=Oa[0].toUpperCase()+Oa.slice(1),Ji(Vm,"on"+Gm);var Oa,Vm,Gm,Fa;Ji(h0,"onAnimationEnd");Ji(d0,"onAnimationIteration");Ji(f0,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(p0,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sS=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function Wm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,s_(i,e,void 0,t),t.currentTarget=null}function g0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Wm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Wm(r,a,c),s=l}}}if(il)throw t=Wu,il=!1,Wu=null,t}function lt(t,e){var n=e[eh];n===void 0&&(n=e[eh]=new Set);var i=t+"__bubble";n.has(i)||(v0(e,t,2,!1),n.add(i))}function vu(t,e,n){var i=0;e&&(i|=4),v0(n,t,i,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[Ba]){t[Ba]=!0,wg.forEach(function(n){n!=="selectionchange"&&(sS.has(n)||vu(n,!1,t),vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,vu("selectionchange",!1,e))}}function v0(t,e,n,i){switch(e0(e)){case 1:var r=S_;break;case 4:r=M_;break;default:r=Ih}n=r.bind(null,e,n,t),r=void 0,!Gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}zg(function(){var c=s,h=Th(n),f=[];e:{var d=m0.get(t);if(d!==void 0){var m=Dh,x=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":m=O_;break;case"focusin":x="focus",m=pu;break;case"focusout":x="blur",m=pu;break;case"beforeblur":case"afterblur":m=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Im;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=E_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=z_;break;case h0:case d0:case f0:m=C_;break;case p0:m=V_;break;case"scroll":m=A_;break;case"wheel":m=W_;break;case"copy":case"cut":case"paste":m=P_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Dm}var _=(e&4)!==0,p=!_&&t==="scroll",u=_?d!==null?d+"Capture":null:d;_=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Do(g,u),M!=null&&_.push(zo(g,M,v)))),p)break;g=g.return}0<_.length&&(d=new m(d,x,null,n,h),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Hu&&(x=n.relatedTarget||n.fromElement)&&(yr(x)||x[hi]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?yr(x):null,x!==null&&(p=Rr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(_=Im,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Dm,M="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?d:is(m),v=x==null?d:is(x),d=new _(M,g+"leave",m,n,h),d.target=p,d.relatedTarget=v,M=null,yr(h)===c&&(_=new _(u,g+"enter",x,n,h),_.target=v,_.relatedTarget=p,M=_),p=M,m&&x)t:{for(_=m,u=x,g=0,v=_;v;v=Qr(v))g++;for(v=0,M=u;M;M=Qr(M))v++;for(;0<g-v;)_=Qr(_),g--;for(;0<v-g;)u=Qr(u),v--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=Qr(_),u=Qr(u)}_=null}else _=null;m!==null&&Xm(f,d,m,_,!1),x!==null&&p!==null&&Xm(f,p,x,_,!0)}}e:{if(d=c?is(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var P=Q_;else if(Fm(d))if(o0)P=tS;else{P=$_;var b=j_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=eS);if(P&&(P=P(t,c))){s0(f,P,n,h);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Fu(d,"number",d.value)}switch(b=c?is(c):window,t){case"focusin":(Fm(b)||b.contentEditable==="true")&&(ts=b,Ju=c,bo=null);break;case"focusout":bo=Ju=ts=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,zm(f,n,h);break;case"selectionchange":if(rS)break;case"keydown":case"keyup":zm(f,n,h)}var E;if(Uh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else es?i0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(n0&&n.locale!=="ko"&&(es||R!=="onCompositionStart"?R==="onCompositionEnd"&&es&&(E=t0()):(Fi=h,Lh="value"in Fi?Fi.value:Fi.textContent,es=!0)),b=ll(c,R),0<b.length&&(R=new Lm(R,t,null,n,h),f.push({event:R,listeners:b}),E?R.data=E:(E=r0(n),E!==null&&(R.data=E)))),(E=q_?Y_(t,n):J_(t,n))&&(c=ll(c,"onBeforeInput"),0<c.length&&(h=new Lm("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}g0(f,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ll(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Do(t,n),s!=null&&i.unshift(zo(t,s,r)),s=Do(t,e),s!=null&&i.push(zo(t,s,r))),t=t.return}return i}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Do(n,s),l!=null&&o.unshift(zo(n,l,a))):r||(l=Do(n,s),l!=null&&o.push(zo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var oS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function qm(t){return(typeof t=="string"?t:""+t).replace(oS,`
`).replace(aS,"")}function ka(t,e,n){if(e=qm(e),qm(t)!==e&&n)throw Error(ne(425))}function cl(){}var Zu=null,Qu=null;function ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,lS=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(t){return Ym.resolve(null).then(t).catch(uS)}:$u;function uS(t){setTimeout(function(){throw t})}function xu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fo(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Qn="__reactFiber$"+ws,Ho="__reactProps$"+ws,hi="__reactContainer$"+ws,eh="__reactEvents$"+ws,hS="__reactListeners$"+ws,dS="__reactHandles$"+ws;function yr(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jm(t);t!==null;){if(n=t[Qn])return n;t=Jm(t)}return e}t=n,n=t.parentNode}return null}function Zo(t){return t=t[Qn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Rl(t){return t[Ho]||null}var th=[],rs=-1;function Ki(t){return{current:t}}function ct(t){0>rs||(t.current=th[rs],th[rs]=null,rs--)}function ot(t,e){rs++,th[rs]=t.current,t.current=e}var Yi={},zt=Ki(Yi),$t=Ki(!1),Ar=Yi;function vs(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function en(t){return t=t.childContextTypes,t!=null}function ul(){ct($t),ct(zt)}function Km(t,e,n){if(zt.current!==Yi)throw Error(ne(168));ot(zt,e),ot($t,n)}function y0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,jx(t)||"Unknown",r));return mt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Ar=zt.current,ot(zt,t),ot($t,$t.current),!0}function Zm(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=y0(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,ct($t),ct(zt),ot(zt,t)):ct($t),ot($t,n)}var oi=null,Pl=!1,_u=!1;function x0(t){oi===null?oi=[t]:oi.push(t)}function fS(t){Pl=!0,x0(t)}function Zi(){if(!_u&&oi!==null){_u=!0;var t=0,e=it;try{var n=oi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}oi=null,Pl=!1}catch(r){throw oi!==null&&(oi=oi.slice(t+1)),Wg(Ch,Zi),r}finally{it=e,_u=!1}}return null}var ss=[],os=0,dl=null,fl=0,_n=[],Sn=0,wr=null,ai=1,li="";function gr(t,e){ss[os++]=fl,ss[os++]=dl,dl=t,fl=e}function _0(t,e,n){_n[Sn++]=ai,_n[Sn++]=li,_n[Sn++]=wr,wr=t;var i=ai;t=li;var r=32-On(i)-1;i&=~(1<<r),n+=1;var s=32-On(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ai=1<<32-On(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function Oh(t){t.return!==null&&(gr(t,1),_0(t,1,0))}function Bh(t){for(;t===dl;)dl=ss[--os],ss[os]=null,fl=ss[--os],ss[os]=null;for(;t===wr;)wr=_n[--Sn],_n[Sn]=null,li=_n[--Sn],_n[Sn]=null,ai=_n[--Sn],_n[Sn]=null}var un=null,cn=null,ht=!1,Fn=null;function S0(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,un=t,cn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,un=t,cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=wr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,un=t,cn=null,!0):!1;default:return!1}}function nh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ih(t){if(ht){var e=cn;if(e){var n=e;if(!Qm(t,e)){if(nh(t))throw Error(ne(418));e=Hi(n.nextSibling);var i=un;e&&Qm(t,e)?S0(i,n):(t.flags=t.flags&-4097|2,ht=!1,un=t)}}else{if(nh(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ht=!1,un=t}}}function jm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;un=t}function za(t){if(t!==un)return!1;if(!ht)return jm(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ju(t.type,t.memoizedProps)),e&&(e=cn)){if(nh(t))throw M0(),Error(ne(418));for(;e;)S0(t,e),e=Hi(e.nextSibling)}if(jm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){cn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}cn=null}}else cn=un?Hi(t.stateNode.nextSibling):null;return!0}function M0(){for(var t=cn;t;)t=Hi(t.nextSibling)}function ys(){cn=un=null,ht=!1}function kh(t){Fn===null?Fn=[t]:Fn.push(t)}var pS=pi.ReactCurrentBatchConfig;function po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $m(t){var e=t._init;return e(t._payload)}function A0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Xi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,v,M){return g===null||g.tag!==6?(g=Tu(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var P=v.type;return P===$r?h(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Li&&$m(P)===g.type)?(M=r(g,v.props),M.ref=po(u,g,v),M.return=u,M):(M=el(v.type,v.key,v.props,null,u.mode,M),M.ref=po(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Cu(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function h(u,g,v,M,P){return g===null||g.tag!==7?(g=Mr(v,u.mode,M,P),g.return=u,g):(g=r(g,v),g.return=u,g)}function f(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Tu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ba:return v=el(g.type,g.key,g.props,null,u.mode,v),v.ref=po(u,null,g),v.return=u,v;case jr:return g=Cu(g,u.mode,v),g.return=u,g;case Li:var M=g._init;return f(u,M(g._payload),v)}if(xo(g)||co(g))return g=Mr(g,u.mode,v,null),g.return=u,g;Ha(u,g)}return null}function d(u,g,v,M){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:return v.key===P?l(u,g,v,M):null;case jr:return v.key===P?c(u,g,v,M):null;case Li:return P=v._init,d(u,g,P(v._payload),M)}if(xo(v)||co(v))return P!==null?null:h(u,g,v,M,null);Ha(u,v)}return null}function m(u,g,v,M,P){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,a(g,u,""+M,P);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ba:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,P);case jr:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,P);case Li:var b=M._init;return m(u,g,v,b(M._payload),P)}if(xo(M)||co(M))return u=u.get(v)||null,h(g,u,M,P,null);Ha(g,M)}return null}function x(u,g,v,M){for(var P=null,b=null,E=g,R=g=0,H=null;E!==null&&R<v.length;R++){E.index>R?(H=E,E=null):H=E.sibling;var y=d(u,E,v[R],M);if(y===null){E===null&&(E=H);break}t&&E&&y.alternate===null&&e(u,E),g=s(y,g,R),b===null?P=y:b.sibling=y,b=y,E=H}if(R===v.length)return n(u,E),ht&&gr(u,R),P;if(E===null){for(;R<v.length;R++)E=f(u,v[R],M),E!==null&&(g=s(E,g,R),b===null?P=E:b.sibling=E,b=E);return ht&&gr(u,R),P}for(E=i(u,E);R<v.length;R++)H=m(E,u,R,v[R],M),H!==null&&(t&&H.alternate!==null&&E.delete(H.key===null?R:H.key),g=s(H,g,R),b===null?P=H:b.sibling=H,b=H);return t&&E.forEach(function(A){return e(u,A)}),ht&&gr(u,R),P}function _(u,g,v,M){var P=co(v);if(typeof P!="function")throw Error(ne(150));if(v=P.call(v),v==null)throw Error(ne(151));for(var b=P=null,E=g,R=g=0,H=null,y=v.next();E!==null&&!y.done;R++,y=v.next()){E.index>R?(H=E,E=null):H=E.sibling;var A=d(u,E,y.value,M);if(A===null){E===null&&(E=H);break}t&&E&&A.alternate===null&&e(u,E),g=s(A,g,R),b===null?P=A:b.sibling=A,b=A,E=H}if(y.done)return n(u,E),ht&&gr(u,R),P;if(E===null){for(;!y.done;R++,y=v.next())y=f(u,y.value,M),y!==null&&(g=s(y,g,R),b===null?P=y:b.sibling=y,b=y);return ht&&gr(u,R),P}for(E=i(u,E);!y.done;R++,y=v.next())y=m(E,u,R,y.value,M),y!==null&&(t&&y.alternate!==null&&E.delete(y.key===null?R:y.key),g=s(y,g,R),b===null?P=y:b.sibling=y,b=y);return t&&E.forEach(function(N){return e(u,N)}),ht&&gr(u,R),P}function p(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===$r&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ba:e:{for(var P=v.key,b=g;b!==null;){if(b.key===P){if(P=v.type,P===$r){if(b.tag===7){n(u,b.sibling),g=r(b,v.props.children),g.return=u,u=g;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Li&&$m(P)===b.type){n(u,b.sibling),g=r(b,v.props),g.ref=po(u,b,v),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}v.type===$r?(g=Mr(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=el(v.type,v.key,v.props,null,u.mode,M),M.ref=po(u,g,v),M.return=u,u=M)}return o(u);case jr:e:{for(b=v.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Cu(v,u.mode,M),g.return=u,u=g}return o(u);case Li:return b=v._init,p(u,g,b(v._payload),M)}if(xo(v))return x(u,g,v,M);if(co(v))return _(u,g,v,M);Ha(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Tu(v,u.mode,M),g.return=u,u=g),o(u)):n(u,g)}return p}var xs=A0(!0),w0=A0(!1),pl=Ki(null),ml=null,as=null,zh=null;function Hh(){zh=as=ml=null}function Vh(t){var e=pl.current;ct(pl),t._currentValue=e}function rh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ps(t,e){ml=t,zh=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(zh!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(ml===null)throw Error(ne(308));as=t,ml.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var xr=null;function Gh(t){xr===null?xr=[t]:xr.push(t)}function E0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Gh(e)):(n.next=r.next,r.next=n),e.interleaved=n,di(t,i)}function di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Di=!1;function Wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,di(t,n)}return r=i.interleaved,r===null?(e.next=e,Gh(i)):(e.next=r.next,r.next=e),i.interleaved=e,di(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rh(t,n)}}function eg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function gl(t,e,n,i){var r=t.updateQueue;Di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,h=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,_=a;switch(d=e,m=n,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(m,f,d);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,d=typeof x=="function"?x.call(m,f,d):x,d==null)break e;f=mt({},f,d);break e;case 2:Di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=m,l=f):h=h.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);br|=o,t.lanes=o,t.memoizedState=f}}function tg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Qo={},$n=Ki(Qo),Vo=Ki(Qo),Go=Ki(Qo);function _r(t){if(t===Qo)throw Error(ne(174));return t}function Xh(t,e){switch(ot(Go,e),ot(Vo,t),ot($n,Qo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bu(e,t)}ct($n),ot($n,e)}function _s(){ct($n),ct(Vo),ct(Go)}function T0(t){_r(Go.current);var e=_r($n.current),n=Bu(e,t.type);e!==n&&(ot(Vo,t),ot($n,n))}function qh(t){Vo.current===t&&(ct($n),ct(Vo))}var ft=Ki(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Su=[];function Yh(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var Ka=pi.ReactCurrentDispatcher,Mu=pi.ReactCurrentBatchConfig,Er=0,pt=null,wt=null,Rt=null,yl=!1,To=!1,Wo=0,mS=0;function Ot(){throw Error(ne(321))}function Jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kn(t[n],e[n]))return!1;return!0}function Kh(t,e,n,i,r,s){if(Er=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ka.current=t===null||t.memoizedState===null?xS:_S,t=n(i,r),To){s=0;do{if(To=!1,Wo=0,25<=s)throw Error(ne(301));s+=1,Rt=wt=null,e.updateQueue=null,Ka.current=SS,t=n(i,r)}while(To)}if(Ka.current=xl,e=wt!==null&&wt.next!==null,Er=0,Rt=wt=pt=null,yl=!1,e)throw Error(ne(300));return t}function Zh(){var t=Wo!==0;return Wo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?pt.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function En(){if(wt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Rt===null?pt.memoizedState:Rt.next;if(e!==null)Rt=e,wt=t;else{if(t===null)throw Error(ne(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Rt===null?pt.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Xo(t,e){return typeof e=="function"?e(t):e}function Au(t){var e=En(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Er&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,pt.lanes|=h,br|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,br|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wu(t){var e=En(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function C0(){}function R0(t,e){var n=pt,i=En(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,jt=!0),i=i.queue,Qh(L0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,qo(9,I0.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ne(349));Er&30||P0(n,e,r)}return r}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function I0(t,e,n,i){e.value=n,e.getSnapshot=i,D0(e)&&N0(t)}function L0(t,e,n){return n(function(){D0(e)&&N0(t)})}function D0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kn(t,n)}catch{return!0}}function N0(t){var e=di(t,1);e!==null&&Bn(e,t,1,-1)}function ng(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:t},e.queue=t,t=t.dispatch=yS.bind(null,pt,t),[e.memoizedState,t]}function qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function U0(){return En().memoizedState}function Za(t,e,n,i){var r=Zn();pt.flags|=t,r.memoizedState=qo(1|e,n,void 0,i===void 0?null:i)}function Il(t,e,n,i){var r=En();i=i===void 0?null:i;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,i!==null&&Jh(i,o.deps)){r.memoizedState=qo(e,n,s,i);return}}pt.flags|=t,r.memoizedState=qo(1|e,n,s,i)}function ig(t,e){return Za(8390656,8,t,e)}function Qh(t,e){return Il(2048,8,t,e)}function F0(t,e){return Il(4,2,t,e)}function O0(t,e){return Il(4,4,t,e)}function B0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k0(t,e,n){return n=n!=null?n.concat([t]):null,Il(4,4,B0.bind(null,e,t),n)}function jh(){}function z0(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=En();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Jh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function V0(t,e,n){return Er&21?(kn(n,e)||(n=Yg(),pt.lanes|=n,br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function gS(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Mu.transition;Mu.transition={};try{t(!1),e()}finally{it=n,Mu.transition=i}}function G0(){return En().memoizedState}function vS(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},W0(t))X0(e,n);else if(n=E0(t,e,n,i),n!==null){var r=qt();Bn(n,t,i,r),q0(n,e,i)}}function yS(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(W0(t))X0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,Gh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=E0(t,e,r,i),n!==null&&(r=qt(),Bn(n,t,i,r),q0(n,e,i))}}function W0(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function X0(t,e){To=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function q0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Rh(t,n)}}var xl={readContext:wn,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},xS={readContext:wn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,B0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vS.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:ng,useDebugValue:jh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=ng(!1),e=t[0];return t=gS.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Zn();if(ht){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Pt===null)throw Error(ne(349));Er&30||P0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ig(L0.bind(null,i,s,t),[t]),i.flags|=2048,qo(9,I0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Pt.identifierPrefix;if(ht){var n=li,i=ai;n=(i&~(1<<32-On(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=mS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_S={readContext:wn,useCallback:z0,useContext:wn,useEffect:Qh,useImperativeHandle:k0,useInsertionEffect:F0,useLayoutEffect:O0,useMemo:H0,useReducer:Au,useRef:U0,useState:function(){return Au(Xo)},useDebugValue:jh,useDeferredValue:function(t){var e=En();return V0(e,wt.memoizedState,t)},useTransition:function(){var t=Au(Xo)[0],e=En().memoizedState;return[t,e]},useMutableSource:C0,useSyncExternalStore:R0,useId:G0,unstable_isNewReconciler:!1},SS={readContext:wn,useCallback:z0,useContext:wn,useEffect:Qh,useImperativeHandle:k0,useInsertionEffect:F0,useLayoutEffect:O0,useMemo:H0,useReducer:wu,useRef:U0,useState:function(){return wu(Xo)},useDebugValue:jh,useDeferredValue:function(t){var e=En();return wt===null?e.memoizedState=t:V0(e,wt.memoizedState,t)},useTransition:function(){var t=wu(Xo)[0],e=En().memoizedState;return[t,e]},useMutableSource:C0,useSyncExternalStore:R0,useId:G0,unstable_isNewReconciler:!1};function Nn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function sh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Wi(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Bn(e,t,r,i),Ja(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Wi(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Vi(t,s,r),e!==null&&(Bn(e,t,r,i),Ja(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Wi(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Vi(t,r,i),e!==null&&(Bn(e,t,i,n),Ja(e,t,i))}};function rg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Bo(n,i)||!Bo(r,s):!0}function Y0(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=en(e)?Ar:zt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=en(e)?Ar:zt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ll.enqueueReplaceState(r,r.state,null),gl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=Qx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ah(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var MS=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Sl||(Sl=!0,vh=i),ah(t,e)},n}function K0(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ah(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ah(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function og(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new MS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function ag(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Vi(n,e,1))),n.lanes|=1),t)}var AS=pi.ReactCurrentOwner,jt=!1;function Xt(t,e,n,i){e.child=t===null?w0(e,null,n,i):xs(e,t.child,n,i)}function cg(t,e,n,i,r){n=n.render;var s=e.ref;return ps(e,r),i=Kh(t,e,n,i,s,r),n=Zh(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ht&&n&&Oh(e),e.flags|=1,Xt(t,e,i,r),e.child)}function ug(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Z0(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bo,n(o,i)&&t.ref===e.ref)return fi(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Z0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Bo(s,i)&&t.ref===e.ref)if(jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,fi(t,e,r)}return lh(t,e,n,i,r)}function Q0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(cs,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(cs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(cs,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(cs,ln),ln|=i;return Xt(t,e,r,n),e.child}function j0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function lh(t,e,n,i,r){var s=en(n)?Ar:zt.current;return s=vs(e,s),ps(e,r),n=Kh(t,e,n,i,s,r),i=Zh(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,fi(t,e,r)):(ht&&i&&Oh(e),e.flags|=1,Xt(t,e,n,r),e.child)}function hg(t,e,n,i,r){if(en(n)){var s=!0;hl(e)}else s=!1;if(ps(e,r),e.stateNode===null)Qa(t,e),Y0(e,n,i),oh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wn(c):(c=en(n)?Ar:zt.current,c=vs(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&sg(e,o,i,c),Di=!1;var d=e.memoizedState;o.state=d,gl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||$t.current||Di?(typeof h=="function"&&(sh(e,n,h,i),l=e.memoizedState),(a=Di||rg(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,b0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Nn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=en(n)?Ar:zt.current,l=vs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&sg(e,o,i,l),Di=!1,d=e.memoizedState,o.state=d,gl(e,i,o,r);var x=e.memoizedState;a!==f||d!==x||$t.current||Di?(typeof m=="function"&&(sh(e,n,m,i),x=e.memoizedState),(c=Di||rg(e,n,c,i,d,x,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ch(t,e,n,i,s,r)}function ch(t,e,n,i,r,s){j0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zm(e,n,!1),fi(t,e,s);i=e.stateNode,AS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,s),e.child=xs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Zm(e,n,!0),e.child}function $0(t){var e=t.stateNode;e.pendingContext?Km(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Km(t,e.context,!1),Xh(t,e.containerInfo)}function dg(t,e,n,i,r){return ys(),kh(r),e.flags|=256,Xt(t,e,n,i),e.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function hh(t){return{baseLanes:t,cachePool:null,transitions:null}}function ev(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ft,r&1),t===null)return ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hh(n),e.memoizedState=uh,t):$h(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Xi(a,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?hh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=uh,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $h(t,e){return e=Ul({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&kh(i),xs(e,t.child,null,n),t=$h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Eu(Error(ne(422))),Va(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ul({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=hh(o),e.memoizedState=uh,s);if(!(e.mode&1))return Va(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Eu(s,i,void 0),Va(t,e,o,i)}if(a=(o&t.childLanes)!==0,jt||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,di(t,r),Bn(i,t,r,-1))}return sd(),i=Eu(Error(ne(421))),Va(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=OS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,cn=Hi(r.nextSibling),un=e,ht=!0,Fn=null,t!==null&&(_n[Sn++]=ai,_n[Sn++]=li,_n[Sn++]=wr,ai=t.id,li=t.overflow,wr=e),e=$h(e,i.children),e.flags|=4096,e)}function fg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),rh(t.return,e,n)}function bu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&fg(t,n,e);else if(t.tag===19)fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bu(e,!0,n,null,s);break;case"together":bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ES(t,e,n){switch(e.tag){case 3:$0(e),ys();break;case 5:T0(e);break;case 1:en(e.type)&&hl(e);break;case 4:Xh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?ev(t,e,n):(ot(ft,ft.current&1),t=fi(t,e,n),t!==null?t.sibling:null);ot(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,Q0(t,e,n)}return fi(t,e,n)}var nv,dh,iv,rv;nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dh=function(){};iv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r($n.current);var s=null;switch(n){case"input":r=Nu(t,r),i=Nu(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Ou(t,r),i=Ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=cl)}ku(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};rv=function(t,e,n,i){n!==i&&(e.flags|=4)};function mo(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bS(t,e,n){var i=e.pendingProps;switch(Bh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return en(e.type)&&ul(),Bt(e),null;case 3:return i=e.stateNode,_s(),ct($t),ct(zt),Yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(_h(Fn),Fn=null))),dh(t,e),Bt(e),null;case 5:qh(e);var r=_r(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)iv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Bt(e),null}if(t=_r($n.current),za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<So.length;r++)lt(So[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Sm(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Am(i,s),lt("invalid",i)}ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":Ta(i),Mm(i,s,!0);break;case"textarea":Ta(i),wm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[Ho]=i,nv(t,e,!1,!1),e.stateNode=t;e:{switch(o=zu(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<So.length;r++)lt(So[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Sm(t,i),r=Nu(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Am(t,i),r=Ou(t,i),lt("invalid",t);break;default:r=i}ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Dg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Lo(t,l):typeof l=="number"&&Lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Ah(t,s,l,o))}switch(n){case"input":Ta(t),Mm(t,i,!1);break;case"textarea":Ta(t),wm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+qi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?us(t,!!i.multiple,s,!1):i.defaultValue!=null&&us(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)rv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=_r(Go.current),_r($n.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=un,t!==null))switch(t.tag){case 3:ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Bt(e),null;case 13:if(ct(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&cn!==null&&e.mode&1&&!(e.flags&128))M0(),ys(),e.flags|=98560,s=!1;else if(s=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[Qn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Fn!==null&&(_h(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?Et===0&&(Et=3):sd())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return _s(),dh(t,e),t===null&&ko(e.stateNode.containerInfo),Bt(e),null;case 10:return Vh(e.type._context),Bt(e),null;case 17:return en(e.type)&&ul(),Bt(e),null;case 19:if(ct(ft),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)mo(s,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,mo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>Ms&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304)}else{if(!i)if(t=vl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Bt(e),null}else 2*xt()-s.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,mo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=ft.current,ot(ft,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return rd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function TS(t,e){switch(Bh(e),e.tag){case 1:return en(e.type)&&ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),ct($t),ct(zt),Yh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(ct(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ft),null;case 4:return _s(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var Ga=!1,kt=!1,CS=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function fh(t,e,n){try{n()}catch(i){vt(t,e,i)}}var pg=!1;function RS(t,e){if(Zu=ol,t=c0(),Fh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++h===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:t,selectionRange:n},ol=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,p=x.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:Nn(e.type,_),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){vt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return x=pg,pg=!1,x}function Co(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&fh(e,n,s)}r=r.next}while(r!==i)}}function Dl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ph(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sv(t){var e=t.alternate;e!==null&&(t.alternate=null,sv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[Ho],delete e[eh],delete e[hS],delete e[dS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ov(t){return t.tag===5||t.tag===3||t.tag===4}function mg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ov(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=cl));else if(i!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}function gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}var Dt=null,Un=!1;function Ii(t,e,n){for(n=n.child;n!==null;)av(t,e,n),n=n.sibling}function av(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:kt||ls(n,e);case 6:var i=Dt,r=Un;Dt=null,Ii(t,e,n),Dt=i,Un=r,Dt!==null&&(Un?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Un?(t=Dt,n=n.stateNode,t.nodeType===8?xu(t.parentNode,n):t.nodeType===1&&xu(t,n),Fo(t)):xu(Dt,n.stateNode));break;case 4:i=Dt,r=Un,Dt=n.stateNode.containerInfo,Un=!0,Ii(t,e,n),Dt=i,Un=r;break;case 0:case 11:case 14:case 15:if(!kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fh(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!kt&&(ls(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(kt=(i=kt)||n.memoizedState!==null,Ii(t,e,n),kt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function gg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new CS),e.forEach(function(i){var r=BS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Dt=a.stateNode,Un=!1;break e;case 3:Dt=a.stateNode.containerInfo,Un=!0;break e;case 4:Dt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(Dt===null)throw Error(ne(160));av(s,o,r),Dt=null,Un=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lv(e,t),e=e.sibling}function lv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Kn(t),i&4){try{Co(3,t,t.return),Dl(3,t)}catch(_){vt(t,t.return,_)}try{Co(5,t,t.return)}catch(_){vt(t,t.return,_)}}break;case 1:Dn(e,t),Kn(t),i&512&&n!==null&&ls(n,n.return);break;case 5:if(Dn(e,t),Kn(t),i&512&&n!==null&&ls(n,n.return),t.flags&32){var r=t.stateNode;try{Lo(r,"")}catch(_){vt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pg(r,s),zu(a,o);var c=zu(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?Ug(r,f):h==="dangerouslySetInnerHTML"?Dg(r,f):h==="children"?Lo(r,f):Ah(r,h,f,c)}switch(a){case"input":Uu(r,s);break;case"textarea":Ig(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?us(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?us(r,!!s.multiple,s.defaultValue,!0):us(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ho]=s}catch(_){vt(t,t.return,_)}}break;case 6:if(Dn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){vt(t,t.return,_)}}break;case 3:if(Dn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(_){vt(t,t.return,_)}break;case 4:Dn(e,t),Kn(t);break;case 13:Dn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(nd=xt())),i&4&&gg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(kt=(c=kt)||h,Dn(e,t),kt=c):Dn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(_e=t,h=t.child;h!==null;){for(f=_e=h;_e!==null;){switch(d=_e,m=d.child,d.tag){case 0:case 11:case 14:case 15:Co(4,d,d.return);break;case 1:ls(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){vt(i,n,_)}}break;case 5:ls(d,d.return);break;case 22:if(d.memoizedState!==null){yg(f);continue}}m!==null?(m.return=d,_e=m):yg(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ng("display",o))}catch(_){vt(t,t.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){vt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Dn(e,t),Kn(t),i&4&&gg(t);break;case 21:break;default:Dn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ov(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Lo(r,""),i.flags&=-33);var s=mg(t);gh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=mg(t);mh(t,a,o);break;default:throw Error(ne(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function PS(t,e,n){_e=t,cv(t,e,n)}function cv(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||kt;a=Ga;var c=kt;if(Ga=o,(kt=l)&&!c)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?xg(r):l!==null?(l.return=o,_e=l):xg(r);for(;s!==null;)_e=s,cv(s,e,n),s=s.sibling;_e=r,Ga=a,kt=c}vg(t,e,n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):vg(t,e,n)}}function vg(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:kt||Dl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Nn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}kt||e.flags&512&&ph(e)}catch(d){vt(e,e.return,d)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function yg(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function xg(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dl(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{ph(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{ph(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var IS=Math.ceil,_l=pi.ReactCurrentDispatcher,ed=pi.ReactCurrentOwner,An=pi.ReactCurrentBatchConfig,Ze=0,Pt=null,Mt=null,Nt=0,ln=0,cs=Ki(0),Et=0,Yo=null,br=0,Nl=0,td=0,Ro=null,Qt=null,nd=0,Ms=1/0,si=null,Sl=!1,vh=null,Gi=null,Wa=!1,Oi=null,Ml=0,Po=0,yh=null,ja=-1,$a=0;function qt(){return Ze&6?xt():ja!==-1?ja:ja=xt()}function Wi(t){return t.mode&1?Ze&2&&Nt!==0?Nt&-Nt:pS.transition!==null?($a===0&&($a=Yg()),$a):(t=it,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t):1}function Bn(t,e,n,i){if(50<Po)throw Po=0,yh=null,Error(ne(185));Jo(t,n,i),(!(Ze&2)||t!==Pt)&&(t===Pt&&(!(Ze&2)&&(Nl|=n),Et===4&&Ui(t,Nt)),tn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Ms=xt()+500,Pl&&Zi()))}function tn(t,e){var n=t.callbackNode;g_(t,e);var i=sl(t,t===Pt?Nt:0);if(i===0)n!==null&&Tm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Tm(n),e===1)t.tag===0?fS(_g.bind(null,t)):x0(_g.bind(null,t)),cS(function(){!(Ze&6)&&Zi()}),n=null;else{switch(Jg(i)){case 1:n=Ch;break;case 4:n=Xg;break;case 16:n=rl;break;case 536870912:n=qg;break;default:n=rl}n=vv(n,uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uv(t,e){if(ja=-1,$a=0,Ze&6)throw Error(ne(327));var n=t.callbackNode;if(ms()&&t.callbackNode!==n)return null;var i=sl(t,t===Pt?Nt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Al(t,i);else{e=i;var r=Ze;Ze|=2;var s=dv();(Pt!==t||Nt!==e)&&(si=null,Ms=xt()+500,Sr(t,e));do try{NS();break}catch(a){hv(t,a)}while(!0);Hh(),_l.current=s,Ze=r,Mt!==null?e=0:(Pt=null,Nt=0,e=Et)}if(e!==0){if(e===2&&(r=Xu(t),r!==0&&(i=r,e=xh(t,r))),e===1)throw n=Yo,Sr(t,0),Ui(t,i),tn(t,xt()),n;if(e===6)Ui(t,i);else{if(r=t.current.alternate,!(i&30)&&!LS(r)&&(e=Al(t,i),e===2&&(s=Xu(t),s!==0&&(i=s,e=xh(t,s))),e===1))throw n=Yo,Sr(t,0),Ui(t,i),tn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:vr(t,Qt,si);break;case 3:if(Ui(t,i),(i&130023424)===i&&(e=nd+500-xt(),10<e)){if(sl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$u(vr.bind(null,t,Qt,si),e);break}vr(t,Qt,si);break;case 4:if(Ui(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-On(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IS(i/1960))-i,10<i){t.timeoutHandle=$u(vr.bind(null,t,Qt,si),i);break}vr(t,Qt,si);break;case 5:vr(t,Qt,si);break;default:throw Error(ne(329))}}}return tn(t,xt()),t.callbackNode===n?uv.bind(null,t):null}function xh(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&_h(e)),t}function _h(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function LS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ui(t,e){for(e&=~td,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-On(e),i=1<<n;t[n]=-1,e&=~i}}function _g(t){if(Ze&6)throw Error(ne(327));ms();var e=sl(t,0);if(!(e&1))return tn(t,xt()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var i=Xu(t);i!==0&&(e=i,n=xh(t,i))}if(n===1)throw n=Yo,Sr(t,0),Ui(t,e),tn(t,xt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,Qt,si),tn(t,xt()),null}function id(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Ms=xt()+500,Pl&&Zi())}}function Tr(t){Oi!==null&&Oi.tag===0&&!(Ze&6)&&ms();var e=Ze;Ze|=1;var n=An.transition,i=it;try{if(An.transition=null,it=1,t)return t()}finally{it=i,An.transition=n,Ze=e,!(Ze&6)&&Zi()}}function rd(){ln=cs.current,ct(cs)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,lS(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Bh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ul();break;case 3:_s(),ct($t),ct(zt),Yh();break;case 5:qh(i);break;case 4:_s();break;case 13:ct(ft);break;case 19:ct(ft);break;case 10:Vh(i.type._context);break;case 22:case 23:rd()}n=n.return}if(Pt=t,Mt=t=Xi(t.current,null),Nt=ln=e,Et=0,Yo=null,td=Nl=br=0,Qt=Ro=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xr=null}return t}function hv(t,e){do{var n=Mt;try{if(Hh(),Ka.current=xl,yl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Er=0,Rt=wt=pt=null,To=!1,Wo=0,ed.current=null,n===null||n.return===null){Et=1,Yo=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Nt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=ag(o);if(m!==null){m.flags&=-257,lg(m,o,a,s,e),m.mode&1&&og(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){og(s,c,e),sd();break e}l=Error(ne(426))}}else if(ht&&a.mode&1){var p=ag(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),lg(p,o,a,s,e),kh(Ss(l,a));break e}}s=l=Ss(l,a),Et!==4&&(Et=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=J0(s,l,e);eg(s,u);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Gi===null||!Gi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=K0(s,a,e);eg(s,M);break e}}s=s.return}while(s!==null)}pv(n)}catch(P){e=P,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function dv(){var t=_l.current;return _l.current=xl,t===null?xl:t}function sd(){(Et===0||Et===3||Et===2)&&(Et=4),Pt===null||!(br&268435455)&&!(Nl&268435455)||Ui(Pt,Nt)}function Al(t,e){var n=Ze;Ze|=2;var i=dv();(Pt!==t||Nt!==e)&&(si=null,Sr(t,e));do try{DS();break}catch(r){hv(t,r)}while(!0);if(Hh(),Ze=n,_l.current=i,Mt!==null)throw Error(ne(261));return Pt=null,Nt=0,Et}function DS(){for(;Mt!==null;)fv(Mt)}function NS(){for(;Mt!==null&&!a_();)fv(Mt)}function fv(t){var e=gv(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?pv(t):Mt=e,ed.current=null}function pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TS(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,Mt=null;return}}else if(n=bS(n,e,ln),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);Et===0&&(Et=5)}function vr(t,e,n){var i=it,r=An.transition;try{An.transition=null,it=1,US(t,e,n,i)}finally{An.transition=r,it=i}return null}function US(t,e,n,i){do ms();while(Oi!==null);if(Ze&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(v_(t,s),t===Pt&&(Mt=Pt=null,Nt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,vv(rl,function(){return ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=it;it=1;var a=Ze;Ze|=4,ed.current=null,RS(t,n),lv(n,t),iS(Qu),ol=!!Zu,Qu=Zu=null,t.current=n,PS(n,t,r),l_(),Ze=a,it=o,An.transition=s}else t.current=n;if(Wa&&(Wa=!1,Oi=t,Ml=r),s=t.pendingLanes,s===0&&(Gi=null),h_(n.stateNode,i),tn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sl)throw Sl=!1,t=vh,vh=null,t;return Ml&1&&t.tag!==0&&ms(),s=t.pendingLanes,s&1?t===yh?Po++:(Po=0,yh=t):Po=0,Zi(),null}function ms(){if(Oi!==null){var t=Jg(Ml),e=An.transition,n=it;try{if(An.transition=null,it=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,Ml=0,Ze&6)throw Error(ne(331));var r=Ze;for(Ze|=4,_e=t.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(_e=c;_e!==null;){var h=_e;switch(h.tag){case 0:case 11:case 15:Co(8,h,s)}var f=h.child;if(f!==null)f.return=h,_e=f;else for(;_e!==null;){h=_e;var d=h.sibling,m=h.return;if(sv(h),h===c){_e=null;break}if(d!==null){d.return=m,_e=d;break}_e=m}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var p=_.sibling;_.sibling=null,_=p}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,_e=u;break e}_e=s.return}}var g=t.current;for(_e=g;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=g;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Dl(9,a)}}catch(P){vt(a,a.return,P)}if(a===o){_e=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,_e=M;break e}_e=a.return}}if(Ze=r,Zi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(El,t)}catch{}i=!0}return i}finally{it=n,An.transition=e}}return!1}function Sg(t,e,n){e=Ss(n,e),e=J0(t,e,1),t=Vi(t,e,1),e=qt(),t!==null&&(Jo(t,1,e),tn(t,e))}function vt(t,e,n){if(t.tag===3)Sg(t,t,n);else for(;e!==null;){if(e.tag===3){Sg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ss(n,t),t=K0(e,t,1),e=Vi(e,t,1),t=qt(),e!==null&&(Jo(e,1,t),tn(e,t));break}}e=e.return}}function FS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(Nt&n)===n&&(Et===4||Et===3&&(Nt&130023424)===Nt&&500>xt()-nd?Sr(t,0):td|=n),tn(t,e)}function mv(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=qt();t=di(t,e),t!==null&&(Jo(t,e,n),tn(t,n))}function OS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mv(t,n)}function BS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),mv(t,n)}var gv;gv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,ES(t,e,n);jt=!!(t.flags&131072)}else jt=!1,ht&&e.flags&1048576&&_0(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qa(t,e),t=e.pendingProps;var r=vs(e,zt.current);ps(e,n),r=Kh(null,e,i,t,r,n);var s=Zh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,en(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wh(e),r.updater=Ll,e.stateNode=r,r._reactInternals=e,oh(e,i,t,n),e=ch(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Oh(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=zS(i),t=Nn(i,t),r){case 0:e=lh(null,e,i,t,n);break e;case 1:e=hg(null,e,i,t,n);break e;case 11:e=cg(null,e,i,t,n);break e;case 14:e=ug(null,e,i,Nn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),lh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),hg(t,e,i,r,n);case 3:e:{if($0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,b0(t,e),gl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ss(Error(ne(423)),e),e=dg(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(ne(424)),e),e=dg(t,e,i,n,r);break e}else for(cn=Hi(e.stateNode.containerInfo.firstChild),un=e,ht=!0,Fn=null,n=w0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=fi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return T0(e),t===null&&ih(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ju(i,r)?o=null:s!==null&&ju(i,s)&&(e.flags|=32),j0(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&ih(e),null;case 13:return ev(t,e,n);case 4:return Xh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),cg(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(pl,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!$t.current){e=fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ps(e,n),r=wn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=Nn(i,e.pendingProps),r=Nn(i.type,r),ug(t,e,i,r,n);case 15:return Z0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Nn(i,r),Qa(t,e),e.tag=1,en(i)?(t=!0,hl(e)):t=!1,ps(e,n),Y0(e,i,r),oh(e,i,r,n),ch(null,e,i,!0,t,n);case 19:return tv(t,e,n);case 22:return Q0(t,e,n)}throw Error(ne(156,e.tag))};function vv(t,e){return Wg(t,e)}function kS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new kS(t,e,n,i)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zS(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Eh)return 11;if(t===bh)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $r:return Mr(n.children,r,s,e);case wh:o=8,r|=8;break;case Pu:return t=Mn(12,n,e,r|2),t.elementType=Pu,t.lanes=s,t;case Iu:return t=Mn(13,n,e,r),t.elementType=Iu,t.lanes=s,t;case Lu:return t=Mn(19,n,e,r),t.elementType=Lu,t.lanes=s,t;case Tg:return Ul(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Eg:o=10;break e;case bg:o=9;break e;case Eh:o=11;break e;case bh:o=14;break e;case Li:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function Ul(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Tu(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function Cu(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ad(t,e,n,i,r,s,o,a,l){return t=new HS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(s),t}function VS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function yv(t){if(!t)return Yi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(en(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(en(n))return y0(t,n,e)}return e}function xv(t,e,n,i,r,s,o,a,l){return t=ad(n,i,!0,t,r,s,o,a,l),t.context=yv(null),n=t.current,i=qt(),r=Wi(n),s=ci(i,r),s.callback=e??null,Vi(n,s,r),t.current.lanes=r,Jo(t,r,i),tn(t,i),t}function Fl(t,e,n,i){var r=e.current,s=qt(),o=Wi(r);return n=yv(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Vi(r,e,o),t!==null&&(Bn(t,r,o,s),Ja(t,r,o)),o}function wl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){Mg(t,e),(t=t.alternate)&&Mg(t,e)}function GS(){return null}var _v=typeof reportError=="function"?reportError:function(t){console.error(t)};function cd(t){this._internalRoot=t}Ol.prototype.render=cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Fl(t,e,null,null)};Ol.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Fl(null,t,null,null)}),e[hi]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&$g(t)}};function ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ag(){}function WS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=wl(o);s.call(c)}}var o=xv(e,i,t,0,null,!1,!1,"",Ag);return t._reactRootContainer=o,t[hi]=o.current,ko(t.nodeType===8?t.parentNode:t),Tr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=wl(l);a.call(c)}}var l=ad(t,0,!1,null,null,!1,!1,"",Ag);return t._reactRootContainer=l,t[hi]=l.current,ko(t.nodeType===8?t.parentNode:t),Tr(function(){Fl(e,l,n,i)}),l}function kl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=wl(o);a.call(l)}}Fl(e,o,t,r)}else o=WS(n,e,t,r,i);return wl(o)}Kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(Rh(e,n|1),tn(e,xt()),!(Ze&6)&&(Ms=xt()+500,Zi()))}break;case 13:Tr(function(){var i=di(t,1);if(i!==null){var r=qt();Bn(i,t,1,r)}}),ld(t,1)}};Ph=function(t){if(t.tag===13){var e=di(t,134217728);if(e!==null){var n=qt();Bn(e,t,134217728,n)}ld(t,134217728)}};Zg=function(t){if(t.tag===13){var e=Wi(t),n=di(t,e);if(n!==null){var i=qt();Bn(n,t,e,i)}ld(t,e)}};Qg=function(){return it};jg=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Vu=function(t,e,n){switch(e){case"input":if(Uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Rl(i);if(!r)throw Error(ne(90));Rg(i),Uu(i,r)}}}break;case"textarea":Ig(t,n);break;case"select":e=n.value,e!=null&&us(t,!!n.multiple,e,!1)}};Bg=id;kg=Tr;var XS={usingClientEntryPoint:!1,Events:[Zo,is,Rl,Fg,Og,id]},go={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qS={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||GS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(vo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!vo.isDisabled&&vo.supportsFiber))try{El=vo.inject(qS),jn=vo}catch{}var vo;fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XS;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(e))throw Error(ne(200));return VS(t,e,null,n)};fn.createRoot=function(t,e){if(!ud(t))throw Error(ne(299));var n=!1,i="",r=_v;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ad(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,ko(t.nodeType===8?t.parentNode:t),new cd(e)};fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};fn.flushSync=function(t){return Tr(t)};fn.hydrate=function(t,e,n){if(!Bl(e))throw Error(ne(200));return kl(null,t,e,!0,n)};fn.hydrateRoot=function(t,e,n){if(!ud(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=_v;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xv(e,null,t,1,n??null,r,!1,s,o),t[hi]=e.current,ko(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ol(e)};fn.render=function(t,e,n){if(!Bl(e))throw Error(ne(200));return kl(null,t,e,!1,n)};fn.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(ne(40));return t._reactRootContainer?(Tr(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};fn.unstable_batchedUpdates=id;fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bl(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return kl(t,e,n,!1,i)};fn.version="18.3.1-next-f1338f8080-20240426"});var wv=ri((FT,Av)=>{"use strict";function Mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mv)}catch(t){console.error(t)}}Mv(),Av.exports=Sv()});var bv=ri(hd=>{"use strict";var Ev=wv();hd.createRoot=Ev.createRoot,hd.hydrateRoot=Ev.hydrateRoot;var OT});var fx=ri(Hc=>{"use strict";var gT=so(),vT=Symbol.for("react.element"),yT=Symbol.for("react.fragment"),xT=Object.prototype.hasOwnProperty,_T=gT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ST={key:!0,ref:!0,__self:!0,__source:!0};function dx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xT.call(e,i)&&!ST.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vT,type:t,key:s,ref:o,props:r,_owner:_T.current}}Hc.Fragment=yT;Hc.jsx=dx;Hc.jsxs=dx});var ma=ri((vC,px)=>{"use strict";px.exports=fx()});var Gt=pr(so()),xx=pr(bv());var Ue=pr(so(),1);var rp="169";var YS=0,Tv=1,JS=2;var Ay=1,KS=2,_i=3,ar=0,sn=1,Mi=2,rr=0,sr=1,Cv=2,Rv=3,Pv=4,ZS=5,Or=100,QS=101,jS=102,$S=103,e1=104,t1=200,n1=201,i1=202,r1=203,Gd=204,Wd=205,s1=206,o1=207,a1=208,l1=209,c1=210,u1=211,h1=212,d1=213,f1=214,Xd=0,qd=1,Yd=2,Ws=3,Jd=4,Kd=5,Zd=6,Qd=7,wy=0,p1=1,m1=2,or=0,g1=1,v1=2,y1=3,x1=4,_1=5,S1=6,M1=7;var Ey=300,Xs=301,qs=302,jd=303,$d=304,Nc=306,ef=1e3,zr=1001,tf=1002,Tn=1003,A1=1004;var zl=1005;var Gn=1006,dd=1007;var Hr=1008;var bi=1009,by=1010,Ty=1011,oa=1012,sp=1013,Vr=1014,Ai=1015,ua=1016,op=1017,ap=1018,Ys=1020,Cy=35902,Ry=1021,Py=1022,Wn=1023,Iy=1024,Ly=1025,Hs=1026,Js=1027,Dy=1028,lp=1029,Ny=1030,cp=1031;var up=1033,lc=33776,cc=33777,uc=33778,hc=33779,nf=35840,rf=35841,sf=35842,of=35843,af=36196,lf=37492,cf=37496,uf=37808,hf=37809,df=37810,ff=37811,pf=37812,mf=37813,gf=37814,vf=37815,yf=37816,xf=37817,_f=37818,Sf=37819,Mf=37820,Af=37821,dc=36492,wf=36494,Ef=36495,Uy=36283,bf=36284,Tf=36285,Cf=36286;var pc=2300,Rf=2301,fd=2302,Iv=2400,Lv=2401,Dv=2402;var w1=3200,E1=3201;var b1=0,T1=1,ir="",ei="srgb",ur="srgb-linear",hp="display-p3",Uc="display-p3-linear",mc="linear",ut="srgb",gc="rec709",vc="p3";var Es=7680;var Nv=519,C1=512,R1=513,P1=514,Fy=515,I1=516,L1=517,D1=518,N1=519,Uv=35044;var Fv="300 es",wi=2e3,yc=2001,lr=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pd=Math.PI/180,Pf=180/Math.PI;function ha(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function U1(t,e){return(t%e+e)%e}function md(t,e,n){return(1-n)*t+n*e}function jo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var rt=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],x=i[8],_=r[0],p=r[3],u=r[6],g=r[1],v=r[4],M=r[7],P=r[2],b=r[5],E=r[8];return s[0]=o*_+a*g+l*P,s[3]=o*p+a*v+l*b,s[6]=o*u+a*M+l*E,s[1]=c*_+h*g+f*P,s[4]=c*p+h*v+f*b,s[7]=c*u+h*M+f*E,s[2]=d*_+m*g+x*P,s[5]=d*p+m*v+x*b,s[8]=d*u+m*M+x*E,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return n*o*h-n*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,d=a*l-h*s,m=c*s-o*l,x=n*f+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/x;return e[0]=f*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(h*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(gd.makeScale(e,n)),this}rotate(e){return this.premultiply(gd.makeRotation(-e)),this}translate(e,n){return this.premultiply(gd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gd=new Ge;function Oy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function xc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function F1(){let t=xc("canvas");return t.style.display="block",t}var Ov={};function fc(t){t in Ov||(Ov[t]=!0,console.warn(t))}function O1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function B1(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function k1(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Bv=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kv=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$o={[ur]:{transfer:mc,primaries:gc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ei]:{transfer:ut,primaries:gc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Uc]:{transfer:mc,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(kv),fromReference:t=>t.applyMatrix3(Bv)},[hp]:{transfer:ut,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(kv),fromReference:t=>t.applyMatrix3(Bv).convertLinearToSRGB()}},z1=new Set([ur,Uc]),tt={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!z1.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=$o[e].toReference,r=$o[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return $o[t].primaries},getTransfer:function(t){return t===ir?mc:$o[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray($o[e].luminanceCoefficients)}};function Vs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var bs,If=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bs===void 0&&(bs=xc("canvas")),bs.width=e.width,bs.height=e.height;let i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=xc("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Vs(n[i]/255)*255):n[i]=Vs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},H1=0,_c=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yd(r[o].image)):s.push(yd(r[o]))}else s=yd(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function yd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?If.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var V1=0,Rn=class t extends lr{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=zr,r=zr,s=Gn,o=Hr,a=Wn,l=bi,c=t.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=ha(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ey)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case zr:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case zr:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=Ey;Rn.DEFAULT_ANISOTROPY=1;var _t=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],x=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(x+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,M=(m+1)/2,P=(u+1)/2,b=(h+d)/4,E=(f+_)/4,R=(x+p)/4;return v>M&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=E/i):M>P?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=E/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-x)*(p-x)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(p-x)/g,this.y=(f-_)/g,this.z=(d-h)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lf=class extends lr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);let r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new _c(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends Lf{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Sc=class extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Df=class extends Rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],d=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(f!==_||l!==d||c!==m||h!==x){let p=1-a,u=l*d+c*m+h*x+f*_,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let P=Math.sqrt(v),b=Math.atan2(P,u*g);p=Math.sin(p*b)/P,a=Math.sin(a*b)/P}let M=a*g;if(l=l*p+d*M,c=c*p+m*M,h=h*p+x*M,f=f*p+_*M,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=P,c*=P,h*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+h*f+l*m-c*d,e[n+1]=l*x+h*d+c*f-a*m,e[n+2]=c*x+h*m+a*d-l*f,e[n+3]=h*x-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*h*f+c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f-d*m*x;break;case"YXZ":this._x=d*h*f+c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f+d*m*x;break;case"ZXY":this._x=d*h*f-c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f-d*m*x;break;case"ZYX":this._x=d*h*f-c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f+d*m*x;break;case"YZX":this._x=d*h*f+c*m*x,this._y=c*m*f+d*h*x,this._z=c*h*x-d*m*f,this._w=c*h*f-d*m*x;break;case"XZY":this._x=d*h*f-c*m*x,this._y=c*m*f-d*h*x,this._z=c*h*x+d*m*f,this._w=c*h*f+d*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],f=n[10],d=i+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-n)*h)/c,d=Math.sin(n*h)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zv.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*h,this.y=i+l*h+a*c-s*f,this.z=r+l*f+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xd.copy(this).projectOnVector(e),this.sub(xd)}reflect(e){return this.sub(xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xd=new V,zv=new cr,Gr=class{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Hl.copy(i.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Vl.subVectors(this.max,ea),Ts.subVectors(e.a,ea),Cs.subVectors(e.b,ea),Rs.subVectors(e.c,ea),Qi.subVectors(Cs,Ts),ji.subVectors(Rs,Cs),Pr.subVectors(Ts,Rs);let n=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-Pr.z,Pr.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,Pr.z,0,-Pr.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-Pr.y,Pr.x,0];return!_d(n,Ts,Cs,Rs,Vl)||(n=[1,0,0,0,1,0,0,0,1],!_d(n,Ts,Cs,Rs,Vl))?!1:(Gl.crossVectors(Qi,ji),n=[Gl.x,Gl.y,Gl.z],_d(n,Ts,Cs,Rs,Vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},mi=[new V,new V,new V,new V,new V,new V,new V,new V],zn=new V,Hl=new Gr,Ts=new V,Cs=new V,Rs=new V,Qi=new V,ji=new V,Pr=new V,ea=new V,Vl=new V,Gl=new V,Ir=new V;function _d(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ir.fromArray(t,s);let a=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),l=e.dot(Ir),c=n.dot(Ir),h=i.dot(Ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var G1=new Gr,ta=new V,Sd=new V,aa=class{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):G1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);let n=ta.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(Sd)),this.expandByPoint(ta.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},gi=new V,Md=new V,Wl=new V,$i=new V,Ad=new V,Xl=new V,wd=new V,Nf=class{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Md.copy(e).add(n).multiplyScalar(.5),Wl.copy(n).sub(e).normalize(),$i.copy(this.origin).sub(Md);let s=e.distanceTo(n)*.5,o=-this.direction.dot(Wl),a=$i.dot(this.direction),l=-$i.dot(Wl),c=$i.lengthSq(),h=Math.abs(1-o*o),f,d,m,x;if(h>0)if(f=o*l-a,d=o*a-l,x=s*h,f>=0)if(d>=-x)if(d<=x){let _=1/h;f*=_,d*=_,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Md).addScaledVector(Wl,d),m}intersectSphere(e,n){gi.subVectors(e.center,this.origin);let i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){Ad.subVectors(n,e),Xl.subVectors(i,e),wd.crossVectors(Ad,Xl);let o=this.direction.dot(wd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let l=a*this.direction.dot(Xl.crossVectors($i,Xl));if(l<0)return null;let c=a*this.direction.dot(Ad.cross($i));if(c<0||l+c>o)return null;let h=-a*$i.dot(wd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class t{constructor(e,n,i,r,s,o,a,l,c,h,f,d,m,x,_,p){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,h,f,d,m,x,_,p)}set(e,n,i,r,s,o,a,l,c,h,f,d,m,x,_,p){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=x,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let d=o*h,m=o*f,x=a*h,_=a*f;n[0]=l*h,n[4]=-l*f,n[8]=c,n[1]=m+x*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*f,x=c*h,_=c*f;n[0]=d+_*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*h,n[9]=-a,n[2]=m*a-x,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*f,x=c*h,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*h,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*f,x=a*h,_=a*f;n[0]=l*h,n[4]=x*c-m,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*h,n[4]=_-d*f,n[8]=x*f+m,n[1]=f,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=m*f+x,n[10]=d-_*f}else if(e.order==="XZY"){let d=o*l,m=o*c,x=a*l,_=a*c;n[0]=l*h,n[4]=-f,n[8]=c*h,n[1]=d*f+_,n[5]=o*h,n[9]=m*f-x,n[2]=x*f-m,n[6]=a*h,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W1,e,X1)}lookAt(e,n,i){let r=this.elements;return pn.subVectors(e,n),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),er.crossVectors(i,pn),er.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),er.crossVectors(i,pn)),er.normalize(),ql.crossVectors(pn,er),r[0]=er.x,r[4]=ql.x,r[8]=pn.x,r[1]=er.y,r[5]=ql.y,r[9]=pn.y,r[2]=er.z,r[6]=ql.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],x=i[2],_=i[6],p=i[10],u=i[14],g=i[3],v=i[7],M=i[11],P=i[15],b=r[0],E=r[4],R=r[8],H=r[12],y=r[1],A=r[5],N=r[9],O=r[13],G=r[2],q=r[6],F=r[10],Z=r[14],z=r[3],ie=r[7],te=r[11],le=r[15];return s[0]=o*b+a*y+l*G+c*z,s[4]=o*E+a*A+l*q+c*ie,s[8]=o*R+a*N+l*F+c*te,s[12]=o*H+a*O+l*Z+c*le,s[1]=h*b+f*y+d*G+m*z,s[5]=h*E+f*A+d*q+m*ie,s[9]=h*R+f*N+d*F+m*te,s[13]=h*H+f*O+d*Z+m*le,s[2]=x*b+_*y+p*G+u*z,s[6]=x*E+_*A+p*q+u*ie,s[10]=x*R+_*N+p*F+u*te,s[14]=x*H+_*O+p*Z+u*le,s[3]=g*b+v*y+M*G+P*z,s[7]=g*E+v*A+M*q+P*ie,s[11]=g*R+v*N+M*F+P*te,s[15]=g*H+v*O+M*Z+P*le,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],x=e[3],_=e[7],p=e[11],u=e[15];return x*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*m-i*l*m)+_*(+n*l*m-n*c*d+s*o*d-r*o*m+r*c*h-s*l*h)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*h-i*c*h)+u*(-r*a*h-n*l*f+n*a*d+r*o*f-i*o*d+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],x=e[12],_=e[13],p=e[14],u=e[15],g=f*p*c-_*d*c+_*l*m-a*p*m-f*l*u+a*d*u,v=x*d*c-h*p*c-x*l*m+o*p*m+h*l*u-o*d*u,M=h*_*c-x*f*c+x*a*m-o*_*m-h*a*u+o*f*u,P=x*f*l-h*_*l-x*a*d+o*_*d+h*a*p-o*f*p,b=n*g+i*v+r*M+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=g*E,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*u-i*d*u)*E,e[2]=(a*p*s-_*l*s+_*r*c-i*p*c-a*r*u+i*l*u)*E,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*m-i*l*m)*E,e[4]=v*E,e[5]=(h*p*s-x*d*s+x*r*m-n*p*m-h*r*u+n*d*u)*E,e[6]=(x*l*s-o*p*s-x*r*c+n*p*c+o*r*u-n*l*u)*E,e[7]=(o*d*s-h*l*s+h*r*c-n*d*c-o*r*m+n*l*m)*E,e[8]=M*E,e[9]=(x*f*s-h*_*s-x*i*m+n*_*m+h*i*u-n*f*u)*E,e[10]=(o*_*s-x*a*s+x*i*c-n*_*c-o*i*u+n*a*u)*E,e[11]=(h*a*s-o*f*s-h*i*c+n*f*c+o*i*m-n*a*m)*E,e[12]=P*E,e[13]=(h*_*r-x*f*r+x*i*d-n*_*d-h*i*p+n*f*p)*E,e[14]=(x*a*r-o*_*r-x*i*l+n*_*l+o*i*p-n*a*p)*E,e[15]=(o*f*r-h*a*r+h*i*l-n*f*l-o*i*d+n*a*d)*E,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,h=o+o,f=a+a,d=s*c,m=s*h,x=s*f,_=o*h,p=o*f,u=a*f,g=l*c,v=l*h,M=l*f,P=i.x,b=i.y,E=i.z;return r[0]=(1-(_+u))*P,r[1]=(m+M)*P,r[2]=(x-v)*P,r[3]=0,r[4]=(m-M)*b,r[5]=(1-(d+u))*b,r[6]=(p+g)*b,r[7]=0,r[8]=(x+v)*E,r[9]=(p-g)*E,r[10]=(1-(d+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Ps.set(r[0],r[1],r[2]).length(),o=Ps.set(r[4],r[5],r[6]).length(),a=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Hn.copy(this);let c=1/s,h=1/o,f=1/a;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=f,Hn.elements[9]*=f,Hn.elements[10]*=f,n.setFromRotationMatrix(Hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=wi){let l=this.elements,c=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r),m,x;if(a===wi)m=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===yc)m=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=wi){let l=this.elements,c=1/(n-e),h=1/(i-r),f=1/(o-s),d=(n+e)*c,m=(i+r)*h,x,_;if(a===wi)x=(o+s)*f,_=-2*f;else if(a===yc)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ps=new V,Hn=new bt,W1=new V(0,0,0),X1=new V(1,1,1),er=new V,ql=new V,pn=new V,Hv=new bt,Vv=new cr,Ci=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vv.setFromEuler(this),this.setFromQuaternion(Vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ci.DEFAULT_ORDER="XYZ";var Mc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},q1=0,Gv=new V,Is=new cr,vi=new bt,Yl=new V,na=new V,Y1=new V,J1=new cr,Wv=new V(1,0,0),Xv=new V(0,1,0),qv=new V(0,0,1),Yv={type:"added"},K1={type:"removed"},Ls={type:"childadded",child:null},Ed={type:"childremoved",child:null},Xn=class t extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new V,n=new Ci,i=new cr,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ge}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Wv,e)}rotateY(e){return this.rotateOnAxis(Xv,e)}rotateZ(e){return this.rotateOnAxis(qv,e)}translateOnAxis(e,n){return Gv.copy(e).applyQuaternion(this.quaternion),this.position.add(Gv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wv,e)}translateY(e){return this.translateOnAxis(Xv,e)}translateZ(e){return this.translateOnAxis(qv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Yl.copy(e):Yl.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(na,Yl,this.up):vi.lookAt(Yl,na,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(vi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(K1),Ed.child=e,this.dispatchEvent(Ed),Ed.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yv),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,Y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,J1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Xn.DEFAULT_UP=new V(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new V,yi=new V,bd=new V,xi=new V,Ds=new V,Ns=new V,Jv=new V,Td=new V,Cd=new V,Rd=new V,Pd=new _t,Id=new _t,Ld=new _t,Br=class t{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),yi.subVectors(i,n),bd.subVectors(e,n);let o=Vn.dot(Vn),a=Vn.dot(yi),l=Vn.dot(bd),c=yi.dot(yi),h=yi.dot(bd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,m=(c*l-a*h)*d,x=(o*h-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Pd.setScalar(0),Id.setScalar(0),Ld.setScalar(0),Pd.fromBufferAttribute(e,n),Id.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pd,s.x),o.addScaledVector(Id,s.y),o.addScaledVector(Ld,s.z),o}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),yi.subVectors(e,n),Vn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Vn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Ds.subVectors(r,i),Ns.subVectors(s,i),Td.subVectors(e,i);let l=Ds.dot(Td),c=Ns.dot(Td);if(l<=0&&c<=0)return n.copy(i);Cd.subVectors(e,r);let h=Ds.dot(Cd),f=Ns.dot(Cd);if(h>=0&&f<=h)return n.copy(r);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(Ds,o);Rd.subVectors(e,s);let m=Ds.dot(Rd),x=Ns.dot(Rd);if(x>=0&&m<=x)return n.copy(s);let _=m*c-l*x;if(_<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(Ns,a);let p=h*x-m*f;if(p<=0&&f-h>=0&&m-x>=0)return Jv.subVectors(s,r),a=(f-h)/(f-h+(m-x)),n.copy(r).addScaledVector(Jv,a);let u=1/(p+_+d);return o=_*u,a=d*u,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},By={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var qe=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=U1(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Dd(o,s,e+1/3),this.g=Dd(o,s,e),this.b=Dd(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=ei){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){let i=By[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=vd(e.r),this.g=vd(e.g),this.b=vd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return tt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(rn(Vt.r*255,0,255))*65536+Math.round(rn(Vt.g*255,0,255))*256+Math.round(rn(Vt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Vt.copy(this),n);let i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=ei){tt.fromWorkingColorSpace(Vt.copy(this),e);let n=Vt.r,i=Vt.g,r=Vt.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(Jl);let i=md(tr.h,Jl.h,n),r=md(tr.s,Jl.s,n),s=md(tr.l,Jl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new qe;qe.NAMES=By;var Z1=0,Ks=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=sr,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Wd,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gd&&(i.blendSrc=this.blendSrc),this.blendDst!==Wd&&(i.blendDst=this.blendDst),this.blendEquation!==Or&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ac=class extends Ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ci,this.combine=wy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new V,Kl=new rt,Cn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Uv,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Kl.fromBufferAttribute(this,n),Kl.applyMatrix3(e),this.setXY(n,Kl.x,Kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=jo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uv&&(e.usage=this.usage),e}};var wc=class extends Cn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ec=class extends Cn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var Ei=class extends Cn{constructor(e,n,i){super(new Float32Array(e),n,i)}},Q1=0,bn=new bt,Nd=new Xn,Us=new V,mn=new Gr,ia=new Gr,It=new V,Wr=class t extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oy(e)?Ec:wc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ei(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(mn.min,ia.min),mn.expandByPoint(It),It.addVectors(mn.max,ia.max),mn.expandByPoint(It)):(mn.expandByPoint(ia.min),mn.expandByPoint(ia.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)It.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(e,c),It.add(Us)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new V,l[R]=new V;let c=new V,h=new V,f=new V,d=new rt,m=new rt,x=new rt,_=new V,p=new V;function u(R,H,y){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,H),f.fromBufferAttribute(i,y),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,H),x.fromBufferAttribute(s,y),h.sub(c),f.sub(c),m.sub(d),x.sub(d);let A=1/(m.x*x.y-x.x*m.y);isFinite(A)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(A),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(A),a[R].add(_),a[H].add(_),a[y].add(_),l[R].add(p),l[H].add(p),l[y].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,H=g.length;R<H;++R){let y=g[R],A=y.start,N=y.count;for(let O=A,G=A+N;O<G;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let v=new V,M=new V,P=new V,b=new V;function E(R){P.fromBufferAttribute(r,R),b.copy(P);let H=a[R];v.copy(H),v.sub(P.multiplyScalar(P.dot(H))).normalize(),M.crossVectors(b,H);let A=M.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,A)}for(let R=0,H=g.length;R<H;++R){let y=g[R],A=y.start,N=y.count;for(let O=A,G=A+N;O<G;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,h=new V,f=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){let x=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,p),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,d=new c.constructor(l.length*h),m=0,x=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)d[x++]=c[m++]}return new Cn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,f=c.length;h<f;h++){let d=c[h],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(n))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kv=new bt,Lr=new Nf,Zl=new aa,Zv=new V,Ql=new V,jl=new V,$l=new V,Ud=new V,ec=new V,Qv=new V,tc=new V,vn=class extends Xn{constructor(e=new Wr,n=new Ac){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],f=s[l];h!==0&&(Ud.fromBufferAttribute(f,e),o?ec.addScaledVector(Ud,h):ec.addScaledVector(Ud.sub(n),h))}n.add(ec)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Zl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Zl,Zv)===null||Lr.origin.distanceToSquared(Zv)>(e.far-e.near)**2))&&(Kv.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Kv),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){let p=d[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,P=v;M<P;M+=3){let b=a.getX(M),E=a.getX(M+1),R=a.getX(M+2);r=nc(this,u,e,i,c,h,f,b,E,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{let x=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){let g=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);r=nc(this,o,e,i,c,h,f,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=d.length;x<_;x++){let p=d[x],u=o[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,P=v;M<P;M+=3){let b=M,E=M+1,R=M+2;r=nc(this,u,e,i,c,h,f,b,E,R),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{let x=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=x,u=_;p<u;p+=3){let g=p,v=p+1,M=p+2;r=nc(this,o,e,i,c,h,f,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}};function j1(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ar,a),l===null)return null;tc.copy(a),tc.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(tc);return c<n.near||c>n.far?null:{distance:c,point:tc.clone(),object:t}}function nc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ql),t.getVertexPosition(l,jl),t.getVertexPosition(c,$l);let h=j1(t,e,n,i,Ql,jl,$l,Qv);if(h){let f=new V;Br.getBarycoord(Qv,Ql,jl,$l,f),r&&(h.uv=Br.getInterpolatedAttribute(r,a,l,c,f,new rt)),s&&(h.uv1=Br.getInterpolatedAttribute(s,a,l,c,f,new rt)),o&&(h.normal=Br.getInterpolatedAttribute(o,a,l,c,f,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new V,materialIndex:0};Br.getNormal(Ql,jl,$l,d.normal),h.face=d,h.barycoord=f}return h}var la=class t extends Wr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],f=[],d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(h,3)),this.setAttribute("uv",new Ei(f,2));function x(_,p,u,g,v,M,P,b,E,R,H){let y=M/E,A=P/R,N=M/2,O=P/2,G=b/2,q=E+1,F=R+1,Z=0,z=0,ie=new V;for(let te=0;te<F;te++){let le=te*A-O;for(let Me=0;Me<q;Me++){let He=Me*y-N;ie[_]=He*g,ie[p]=le*v,ie[u]=G,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[p]=0,ie[u]=b>0?1:-1,h.push(ie.x,ie.y,ie.z),f.push(Me/E),f.push(1-te/R),Z+=1}}for(let te=0;te<R;te++)for(let le=0;le<E;le++){let Me=d+le+q*te,He=d+le+q*(te+1),X=d+(le+1)+q*(te+1),K=d+(le+1)+q*te;l.push(Me,He,K),l.push(He,X,K),z+=6}a.addGroup(m,z,H),m+=z,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){let e={};for(let n=0;n<t.length;n++){let i=Zs(t[n]);for(let r in i)e[r]=i[r]}return e}function $1(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ky(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var eM={clone:Zs,merge:Jt},tM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=$1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},bc=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nr=new V,jv=new rt,$v=new rt,gn=class extends bc{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Pf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pf*2*Math.atan(Math.tan(pd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,jv,$v),n.subVectors($v,jv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(pd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Fs=-90,Os=1,Uf=class extends Xn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new gn(Fs,Os,e,n);r.layers=this.layers,this.add(r);let s=new gn(Fs,Os,e,n);s.layers=this.layers,this.add(s);let o=new gn(Fs,Os,e,n);o.layers=this.layers,this.add(o);let a=new gn(Fs,Os,e,n);a.layers=this.layers,this.add(a);let l=new gn(Fs,Os,e,n);l.layers=this.layers,this.add(l);let c=new gn(Fs,Os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Tc=class extends Rn{constructor(e,n,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ff=class extends Ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tc(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Gn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new la(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:rr});s.uniforms.tEquirect.value=n;let o=new vn(r,s),a=n.minFilter;return n.minFilter===Hr&&(n.minFilter=Gn),new Uf(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},Fd=new V,iM=new V,rM=new Ge,Si=class{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Fd.subVectors(i,n).cross(iM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Fd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||rM.getNormalMatrix(e),r=this.coplanarPoint(Fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new aa,ic=new V,Cc=class{constructor(e=new Si,n=new Si,i=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],m=r[8],x=r[9],_=r[10],p=r[11],u=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,p-m,M-u).normalize(),i[1].setComponents(l+s,d+c,p+m,M+u).normalize(),i[2].setComponents(l+o,d+h,p+x,M+g).normalize(),i[3].setComponents(l-o,d-h,p-x,M-g).normalize(),i[4].setComponents(l-a,d-f,p-_,M-v).normalize(),n===wi)i[5].setComponents(l+a,d+f,p+_,M+v).normalize();else if(n===yc)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(ic.x=r.normal.x>0?e.max.x:e.min.x,ic.y=r.normal.y>0?e.max.y:e.min.y,ic.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zy(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function sM(t){let e=new WeakMap;function n(a,l){let c=a.array,h=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,h);else{f.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<f.length;m++){let x=f[d],_=f[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++d,f[d]=_)}f.length=d+1;for(let m=0,x=f.length;m<x;m++){let _=f[m];t.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Qs=class t extends Wr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,f=e/a,d=n/l,m=[],x=[],_=[],p=[];for(let u=0;u<h;u++){let g=u*d-o;for(let v=0;v<c;v++){let M=v*f-s;x.push(M,-g,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){let v=g+c*u,M=g+c*(u+1),P=g+1+c*(u+1),b=g+1+c*u;m.push(v,M,b),m.push(M,P,b)}this.setIndex(m),this.setAttribute("position",new Ei(x,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aM=`#ifdef USE_ALPHAHASH
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
#endif`,lM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
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
#endif`,fM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pM=`#ifdef USE_BATCHING
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
#endif`,mM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xM=`#ifdef USE_IRIDESCENCE
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
#endif`,_M=`#ifdef USE_BUMPMAP
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RM=`#define PI 3.141592653589793
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
} // validated`,PM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IM=`vec3 transformedNormal = objectNormal;
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
#endif`,LM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BM=`#ifdef USE_ENVMAP
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
#endif`,kM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,HM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
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
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
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
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iA=`PhysicalMaterial material;
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
#endif`,rA=`struct PhysicalMaterial {
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
}`,sA=`
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
#endif`,oA=`#if defined( RE_IndirectDiffuse )
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
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mA=`#if defined( USE_POINTS_UV )
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
#endif`,gA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_A=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SA=`#ifdef USE_MORPHTARGETS
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
#endif`,MA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,EA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CA=`#ifdef USE_NORMALMAP
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
#endif`,RA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
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
#endif`,VA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WA=`float getShadowMask() {
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
}`,XA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qA=`#ifdef USE_SKINNING
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
#endif`,YA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JA=`#ifdef USE_SKINNING
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
#endif`,KA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$A=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#ifdef USE_TRANSMISSION
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ow=`uniform sampler2D t2D;
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`#include <common>
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
}`,dw=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fw=`#define DISTANCE
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
}`,pw=`#define DISTANCE
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
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vw=`uniform float scale;
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
}`,yw=`uniform vec3 diffuse;
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
}`,xw=`#include <common>
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
}`,_w=`uniform vec3 diffuse;
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
}`,Sw=`#define LAMBERT
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
}`,Mw=`#define LAMBERT
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
}`,Aw=`#define MATCAP
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
}`,ww=`#define MATCAP
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
}`,Ew=`#define NORMAL
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
}`,bw=`#define NORMAL
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
}`,Tw=`#define PHONG
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
}`,Cw=`#define PHONG
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
}`,Rw=`#define STANDARD
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
}`,Pw=`#define STANDARD
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
}`,Iw=`#define TOON
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
}`,Lw=`#define TOON
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
}`,Dw=`uniform float size;
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
}`,Nw=`uniform vec3 diffuse;
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
}`,Uw=`#include <common>
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
}`,Fw=`uniform vec3 color;
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
}`,Ow=`uniform float rotation;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:oM,alphahash_pars_fragment:aM,alphamap_fragment:lM,alphamap_pars_fragment:cM,alphatest_fragment:uM,alphatest_pars_fragment:hM,aomap_fragment:dM,aomap_pars_fragment:fM,batching_pars_vertex:pM,batching_vertex:mM,begin_vertex:gM,beginnormal_vertex:vM,bsdfs:yM,iridescence_fragment:xM,bumpmap_pars_fragment:_M,clipping_planes_fragment:SM,clipping_planes_pars_fragment:MM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:wM,color_fragment:EM,color_pars_fragment:bM,color_pars_vertex:TM,color_vertex:CM,common:RM,cube_uv_reflection_fragment:PM,defaultnormal_vertex:IM,displacementmap_pars_vertex:LM,displacementmap_vertex:DM,emissivemap_fragment:NM,emissivemap_pars_fragment:UM,colorspace_fragment:FM,colorspace_pars_fragment:OM,envmap_fragment:BM,envmap_common_pars_fragment:kM,envmap_pars_fragment:zM,envmap_pars_vertex:HM,envmap_physical_pars_fragment:jM,envmap_vertex:VM,fog_vertex:GM,fog_pars_vertex:WM,fog_fragment:XM,fog_pars_fragment:qM,gradientmap_pars_fragment:YM,lightmap_pars_fragment:JM,lights_lambert_fragment:KM,lights_lambert_pars_fragment:ZM,lights_pars_begin:QM,lights_toon_fragment:$M,lights_toon_pars_fragment:eA,lights_phong_fragment:tA,lights_phong_pars_fragment:nA,lights_physical_fragment:iA,lights_physical_pars_fragment:rA,lights_fragment_begin:sA,lights_fragment_maps:oA,lights_fragment_end:aA,logdepthbuf_fragment:lA,logdepthbuf_pars_fragment:cA,logdepthbuf_pars_vertex:uA,logdepthbuf_vertex:hA,map_fragment:dA,map_pars_fragment:fA,map_particle_fragment:pA,map_particle_pars_fragment:mA,metalnessmap_fragment:gA,metalnessmap_pars_fragment:vA,morphinstance_vertex:yA,morphcolor_vertex:xA,morphnormal_vertex:_A,morphtarget_pars_vertex:SA,morphtarget_vertex:MA,normal_fragment_begin:AA,normal_fragment_maps:wA,normal_pars_fragment:EA,normal_pars_vertex:bA,normal_vertex:TA,normalmap_pars_fragment:CA,clearcoat_normal_fragment_begin:RA,clearcoat_normal_fragment_maps:PA,clearcoat_pars_fragment:IA,iridescence_pars_fragment:LA,opaque_fragment:DA,packing:NA,premultiplied_alpha_fragment:UA,project_vertex:FA,dithering_fragment:OA,dithering_pars_fragment:BA,roughnessmap_fragment:kA,roughnessmap_pars_fragment:zA,shadowmap_pars_fragment:HA,shadowmap_pars_vertex:VA,shadowmap_vertex:GA,shadowmask_pars_fragment:WA,skinbase_vertex:XA,skinning_pars_vertex:qA,skinning_vertex:YA,skinnormal_vertex:JA,specularmap_fragment:KA,specularmap_pars_fragment:ZA,tonemapping_fragment:QA,tonemapping_pars_fragment:jA,transmission_fragment:$A,transmission_pars_fragment:ew,uv_pars_fragment:tw,uv_pars_vertex:nw,uv_vertex:iw,worldpos_vertex:rw,background_vert:sw,background_frag:ow,backgroundCube_vert:aw,backgroundCube_frag:lw,cube_vert:cw,cube_frag:uw,depth_vert:hw,depth_frag:dw,distanceRGBA_vert:fw,distanceRGBA_frag:pw,equirect_vert:mw,equirect_frag:gw,linedashed_vert:vw,linedashed_frag:yw,meshbasic_vert:xw,meshbasic_frag:_w,meshlambert_vert:Sw,meshlambert_frag:Mw,meshmatcap_vert:Aw,meshmatcap_frag:ww,meshnormal_vert:Ew,meshnormal_frag:bw,meshphong_vert:Tw,meshphong_frag:Cw,meshphysical_vert:Rw,meshphysical_frag:Pw,meshtoon_vert:Iw,meshtoon_frag:Lw,points_vert:Dw,points_frag:Nw,shadow_vert:Uw,shadow_frag:Fw,sprite_vert:Ow,sprite_frag:Bw},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ti={basic:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Jt([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Jt([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Jt([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Jt([fe.common,fe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Jt([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ti.physical={uniforms:Jt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var rc={r:0,b:0,g:0},Nr=new Ci,kw=new bt;function zw(t,e,n,i,r,s,o){let a=new qe(0),l=s===!0?0:1,c,h,f=null,d=0,m=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function _(g){let v=!1,M=x(g);M===null?u(a,l):M&&M.isColor&&(u(M,1),v=!0);let P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){let M=x(v);M&&(M.isCubeTexture||M.mapping===Nc)?(h===void 0&&(h=new vn(new la(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Zs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Nr.copy(v.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kw.makeRotationFromEuler(Nr)),h.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,(f!==M||d!==M.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,f=M,d=M.version,m=t.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new vn(new Qs(2,2),new Pn({name:"BackgroundMaterial",uniforms:Zs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(rc,ky(t)),i.buffers.color.setClear(rc.r,rc.g,rc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(a,l)},render:_,addToRenderList:p}}function Hw(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(y,A,N,O,G){let q=!1,F=f(O,N,A);s!==F&&(s=F,c(s.object)),q=m(y,O,N,G),q&&x(y,O,N,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(y,A,N,O),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function h(y){return t.deleteVertexArray(y)}function f(y,A,N){let O=N.wireframe===!0,G=i[y.id];G===void 0&&(G={},i[y.id]=G);let q=G[A.id];q===void 0&&(q={},G[A.id]=q);let F=q[O];return F===void 0&&(F=d(l()),q[O]=F),F}function d(y){let A=[],N=[],O=[];for(let G=0;G<n;G++)A[G]=0,N[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:N,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,A,N,O){let G=s.attributes,q=A.attributes,F=0,Z=N.getAttributes();for(let z in Z)if(Z[z].location>=0){let te=G[z],le=q[z];if(le===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),te===void 0||te.attribute!==le||le&&te.data!==le.data)return!0;F++}return s.attributesNum!==F||s.index!==O}function x(y,A,N,O){let G={},q=A.attributes,F=0,Z=N.getAttributes();for(let z in Z)if(Z[z].location>=0){let te=q[z];te===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));let le={};le.attribute=te,te&&te.data&&(le.data=te.data),G[z]=le,F++}s.attributes=G,s.attributesNum=F,s.index=O}function _(){let y=s.newAttributes;for(let A=0,N=y.length;A<N;A++)y[A]=0}function p(y){u(y,0)}function u(y,A){let N=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;N[y]=1,O[y]===0&&(t.enableVertexAttribArray(y),O[y]=1),G[y]!==A&&(t.vertexAttribDivisor(y,A),G[y]=A)}function g(){let y=s.newAttributes,A=s.enabledAttributes;for(let N=0,O=A.length;N<O;N++)A[N]!==y[N]&&(t.disableVertexAttribArray(N),A[N]=0)}function v(y,A,N,O,G,q,F){F===!0?t.vertexAttribIPointer(y,A,N,G,q):t.vertexAttribPointer(y,A,N,O,G,q)}function M(y,A,N,O){_();let G=O.attributes,q=N.getAttributes(),F=A.defaultAttributeValues;for(let Z in q){let z=q[Z];if(z.location>=0){let ie=G[Z];if(ie===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){let te=ie.normalized,le=ie.itemSize,Me=e.get(ie);if(Me===void 0)continue;let He=Me.buffer,X=Me.type,K=Me.bytesPerElement,ce=X===t.INT||X===t.UNSIGNED_INT||ie.gpuType===sp;if(ie.isInterleavedBufferAttribute){let se=ie.data,pe=se.stride,ve=ie.offset;if(se.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)u(z.location+Ae,se.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)p(z.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ae=0;Ae<z.locationSize;Ae++)v(z.location+Ae,le/z.locationSize,X,te,pe*K,(ve+le/z.locationSize*Ae)*K,ce)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<z.locationSize;se++)u(z.location+se,ie.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<z.locationSize;se++)p(z.location+se);t.bindBuffer(t.ARRAY_BUFFER,He);for(let se=0;se<z.locationSize;se++)v(z.location+se,le/z.locationSize,X,te,le*K,le/z.locationSize*se*K,ce)}}else if(F!==void 0){let te=F[Z];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(z.location,te);break;case 3:t.vertexAttrib3fv(z.location,te);break;case 4:t.vertexAttrib4fv(z.location,te);break;default:t.vertexAttrib1fv(z.location,te)}}}}g()}function P(){R();for(let y in i){let A=i[y];for(let N in A){let O=A[N];for(let G in O)h(O[G].object),delete O[G];delete A[N]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;let A=i[y.id];for(let N in A){let O=A[N];for(let G in O)h(O[G].object),delete O[G];delete A[N]}delete i[y.id]}function E(y){for(let A in i){let N=i[A];if(N[y.id]===void 0)continue;let O=N[y.id];for(let G in O)h(O[G].object),delete O[G];delete N[y.id]}}function R(){H(),o=!0,s!==r&&(s=r,c(s.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:g}}function Vw(t,e,n){let i;function r(c){i=c}function s(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function o(c,h,f){f!==0&&(t.drawArraysInstanced(i,c,h,f),n.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let m=0;for(let x=0;x<f;x++)m+=h[x];n.update(m,i,1)}function l(c,h,f,d){if(f===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],h[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,f);let x=0;for(let _=0;_<f;_++)x+=h[_];for(let _=0;_<d.length;_++)n.update(x,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Gw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Wn&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==bi&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ai&&!R)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function Ww(t){let e=this,n=null,i=0,r=!1,s=!1,o=new Si,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){let x=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||x===null||x.length===0||s&&!p)s?h(null):c();else{let g=s?0:i,v=g*4,M=u.clippingState||null;l.value=M,M=h(x,d,v,m);for(let P=0;P!==v;++P)M[P]=n[P];u.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,x){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=l.value,x!==!0||p===null){let u=m+_*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=m;v!==_;++v,M+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Xw(t){let e=new WeakMap;function n(o,a){return a===jd?o.mapping=Xs:a===$d&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===jd||a===$d)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ff(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ca=class extends bc{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},ks=4,ey=[.125,.215,.35,.446,.526,.582],kr=20,Od=new ca,ty=new qe,Bd=null,kd=0,zd=0,Hd=!1,Fr=(1+Math.sqrt(5))/2,Bs=1/Fr,ny=[new V(-Fr,Bs,0),new V(Fr,Bs,0),new V(-Bs,0,Fr),new V(Bs,0,Fr),new V(0,Fr,-Bs),new V(0,Fr,Bs),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Rc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ry(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,kd,zd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:ua,format:Wn,colorSpace:ur,depthBuffer:!1},r=iy(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iy(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(s)),this._blurMaterial=Yw(s,e,n)}return r}_compileMaterial(e){let n=new vn(this._lodPlanes[0],e);this._renderer.compile(n,Od)}_sceneToCubeUV(e,n,i,r){let a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(ty),h.toneMapping=or,h.autoClear=!1;let m=new Ac({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),x=new vn(new la,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(ty),_=!0);for(let u=0;u<6;u++){let g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;sc(r,g*v,u>2?v:0,v,v),h.setRenderTarget(r),_&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===Xs||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ry());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new vn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;sc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Od)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ny[(r-s-1)%ny.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new vn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*kr-1),_=s/x,p=isFinite(s)?1+Math.floor(h*_):kr;p>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${kr}`);let u=[],g=0;for(let E=0;E<kr;++E){let R=E/_,H=Math.exp(-R*R/2);u.push(H),E===0?g+=H:E<p&&(g+=2*H)}for(let E=0;E<u.length;E++)u[E]=u[E]/g;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;let M=this._sizeLods[r],P=3*M*(r>v-ks?r-v+ks:0),b=4*(this._cubeSize-M);sc(n,P,b,3*M,2*M),l.setRenderTarget(n),l.render(f,Od)}};function qw(t){let e=[],n=[],i=[],r=t,s=t-ks+1+ey.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ks?l=ey[o-t+ks-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,_=3,p=2,u=1,g=new Float32Array(_*x*m),v=new Float32Array(p*x*m),M=new Float32Array(u*x*m);for(let b=0;b<m;b++){let E=b%3*2/3-1,R=b>2?0:-1,H=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];g.set(H,_*x*b),v.set(d,p*x*b);let y=[b,b,b,b,b,b];M.set(y,u*x*b)}let P=new Wr;P.setAttribute("position",new Cn(g,_)),P.setAttribute("uv",new Cn(v,p)),P.setAttribute("faceIndex",new Cn(M,u)),e.push(P),r>ks&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function iy(t,e,n){let i=new Ti(t,e,n);return i.texture.mapping=Nc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Yw(t,e,n){let i=new Float32Array(kr),r=new V(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dp(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function ry(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function sy(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function dp(){return`

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
	`}function Jw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===jd||l===$d,h=l===Xs||l===qs;if(c||h){let f=e.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Rc(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new Rc(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Kw(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let r=n(i);return r===null&&fc("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zw(t,e,n,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);for(let x in d.morphAttributes){let _=d.morphAttributes[x];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete r[d.id];let m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){let d=f.attributes;for(let x in d)e.update(d[x],t.ARRAY_BUFFER);let m=f.morphAttributes;for(let x in m){let _=m[x];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(f){let d=[],m=f.index,x=f.attributes.position,_=0;if(m!==null){let g=m.array;_=m.version;for(let v=0,M=g.length;v<M;v+=3){let P=g[v+0],b=g[v+1],E=g[v+2];d.push(P,b,b,E,E,P)}}else if(x!==void 0){let g=x.array;_=x.version;for(let v=0,M=g.length/3-1;v<M;v+=3){let P=v+0,b=v+1,E=v+2;d.push(P,b,b,E,E,P)}}else return;let p=new(Oy(d)?Ec:wc)(d,1);p.version=_;let u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){let d=s.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Qw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,d*o,x),n.update(m,i,x))}function h(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,x);let p=0;for(let u=0;u<x;u++)p+=m[u];n.update(p,i,1)}function f(d,m,x,_){if(x===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/o,m[u],_[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,_,0,x);let u=0;for(let g=0;g<x;g++)u+=m[g];for(let g=0;g<_.length;g++)n.update(u,i,_[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function jw(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $w(t,e,n){let i=new WeakMap,r=new _t;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==f){let H=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",H)};d!==void 0&&d.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;m===!0&&(v=1),x===!0&&(v=2),_===!0&&(v=3);let M=a.attributes.position.count*v,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*P*4*f),E=new Sc(b,M,P,f);E.type=Ai,E.needsUpdate=!0;let R=v*4;for(let y=0;y<f;y++){let A=p[y],N=u[y],O=g[y],G=M*P*4*y;for(let q=0;q<A.count;q++){let F=q*R;m===!0&&(r.fromBufferAttribute(A,q),b[G+F+0]=r.x,b[G+F+1]=r.y,b[G+F+2]=r.z,b[G+F+3]=0),x===!0&&(r.fromBufferAttribute(N,q),b[G+F+4]=r.x,b[G+F+5]=r.y,b[G+F+6]=r.z,b[G+F+7]=0),_===!0&&(r.fromBufferAttribute(O,q),b[G+F+8]=r.x,b[G+F+9]=r.y,b[G+F+10]=r.z,b[G+F+11]=O.itemSize===4?r.w:1)}}d={count:f,texture:E,size:new rt(M,P)},i.set(a,d),a.addEventListener("dispose",H)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function eE(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var Pc=class extends Rn{constructor(e,n,i,r,s,o,a,l,c,h=Hs){if(h!==Hs&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Hs&&(i=Vr),i===void 0&&h===Js&&(i=Ys),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Hy=new Rn,oy=new Pc(1,1),Vy=new Sc,Gy=new Df,Wy=new Tc,ay=[],ly=[],cy=new Float32Array(16),uy=new Float32Array(9),hy=new Float32Array(4);function $s(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=ay[r];if(s===void 0&&(s=new Float32Array(r),ay[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fc(t,e){let n=ly[e];n===void 0&&(n=new Int32Array(e),ly[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function iE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function rE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function sE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;hy.set(i),t.uniformMatrix2fv(this.addr,!1,hy),Ct(n,i)}}function oE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;uy.set(i),t.uniformMatrix3fv(this.addr,!1,uy),Ct(n,i)}}function aE(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;cy.set(i),t.uniformMatrix4fv(this.addr,!1,cy),Ct(n,i)}}function lE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function uE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function hE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function dE(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function fE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function pE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function mE(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function gE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(oy.compareFunction=Fy,s=oy):s=Hy,n.setTexture2D(e||s,r)}function vE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Gy,r)}function yE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Wy,r)}function xE(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Vy,r)}function _E(t){switch(t){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return rE;case 35674:return sE;case 35675:return oE;case 35676:return aE;case 5124:case 35670:return lE;case 35667:case 35671:return cE;case 35668:case 35672:return uE;case 35669:case 35673:return hE;case 5125:return dE;case 36294:return fE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return xE}}function SE(t,e){t.uniform1fv(this.addr,e)}function ME(t,e){let n=$s(e,this.size,2);t.uniform2fv(this.addr,n)}function AE(t,e){let n=$s(e,this.size,3);t.uniform3fv(this.addr,n)}function wE(t,e){let n=$s(e,this.size,4);t.uniform4fv(this.addr,n)}function EE(t,e){let n=$s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bE(t,e){let n=$s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TE(t,e){let n=$s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CE(t,e){t.uniform1iv(this.addr,e)}function RE(t,e){t.uniform2iv(this.addr,e)}function PE(t,e){t.uniform3iv(this.addr,e)}function IE(t,e){t.uniform4iv(this.addr,e)}function LE(t,e){t.uniform1uiv(this.addr,e)}function DE(t,e){t.uniform2uiv(this.addr,e)}function NE(t,e){t.uniform3uiv(this.addr,e)}function UE(t,e){t.uniform4uiv(this.addr,e)}function FE(t,e,n){let i=this.cache,r=e.length,s=Fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Hy,s[o])}function OE(t,e,n){let i=this.cache,r=e.length,s=Fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Gy,s[o])}function BE(t,e,n){let i=this.cache,r=e.length,s=Fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Wy,s[o])}function kE(t,e,n){let i=this.cache,r=e.length,s=Fc(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Vy,s[o])}function zE(t){switch(t){case 5126:return SE;case 35664:return ME;case 35665:return AE;case 35666:return wE;case 35674:return EE;case 35675:return bE;case 35676:return TE;case 5124:case 35670:return CE;case 35667:case 35671:return RE;case 35668:case 35672:return PE;case 35669:case 35673:return IE;case 5125:return LE;case 36294:return DE;case 36295:return NE;case 36296:return UE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return BE;case 36289:case 36303:case 36311:case 36292:return kE}}var Of=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_E(n.type)}},Bf=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zE(n.type)}},kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Vd=/(\w+)(\])?(\[|\.)?/g;function dy(t,e){t.seq.push(e),t.map[e.id]=e}function HE(t,e,n){let i=t.name,r=i.length;for(Vd.lastIndex=0;;){let s=Vd.exec(i),o=Vd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dy(n,c===void 0?new Of(a,t,e):new Bf(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new kf(a),dy(n,f)),n=f}}}var Gs=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);HE(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function fy(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var VE=37297,GE=0;function WE(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function XE(t){let e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t),i;switch(e===n?i="":e===vc&&n===gc?i="LinearDisplayP3ToLinearSRGB":e===gc&&n===vc&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case Uc:return[i,"LinearTransferOETF"];case ei:case hp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function py(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+WE(t.getShaderSource(e),o)}else return r}function qE(t,e){let n=XE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function YE(t,e){let n;switch(e){case g1:n="Linear";break;case v1:n="Reinhard";break;case y1:n="Cineon";break;case x1:n="ACESFilmic";break;case S1:n="AgX";break;case M1:n="Neutral";break;case _1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var oc=new V;function JE(){tt.getLuminanceCoefficients(oc);let t=oc.x.toFixed(4),e=oc.y.toFixed(4),n=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function ZE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function QE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ra(t){return t!==""}function my(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gy(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jE=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(t){return t.replace(jE,eb)}var $E=new Map;function eb(t,e){let n=Ve[e];if(n===void 0){let i=$E.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zf(n)}var tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vy(t){return t.replace(tb,nb)}function nb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yy(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ib(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ay?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===KS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function rb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case Nc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function ob(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wy:e="ENVMAP_BLENDING_MULTIPLY";break;case p1:e="ENVMAP_BLENDING_MIX";break;case m1:e="ENVMAP_BLENDING_ADD";break}return e}function ab(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lb(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=ib(n),c=rb(n),h=sb(n),f=ob(n),d=ab(n),m=KE(n),x=ZE(s),_=r.createProgram(),p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ra).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ra).join(`
`),u.length>0&&(u+=`
`)):(p=[yy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),u=[yy(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?Ve.tonemapping_pars_fragment:"",n.toneMapping!==or?YE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,qE("linearToOutputTexel",n.outputColorSpace),JE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ra).join(`
`)),o=zf(o),o=my(o,n),o=gy(o,n),a=zf(a),a=my(a,n),a=gy(a,n),o=vy(o),a=vy(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===Fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=g+p+o,M=g+u+a,P=fy(r,r.VERTEX_SHADER,v),b=fy(r,r.FRAGMENT_SHADER,M);r.attachShader(_,P),r.attachShader(_,b),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(A){if(t.debug.checkShaderErrors){let N=r.getProgramInfoLog(_).trim(),O=r.getShaderInfoLog(P).trim(),G=r.getShaderInfoLog(b).trim(),q=!0,F=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,P,b);else{let Z=py(r,P,"vertex"),z=py(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+Z+`
`+z)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||G==="")&&(F=!1);F&&(A.diagnostics={runnable:q,programLog:N,vertexShader:{log:O,prefix:p},fragmentShader:{log:G,prefix:u}})}r.deleteShader(P),r.deleteShader(b),R=new Gs(r,_),H=QE(r,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let H;this.getAttributes=function(){return H===void 0&&E(this),H};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,VE)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GE++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=b,this}var cb=0,Hf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new Vf(e),n.set(e,i)),i}},Vf=class{constructor(e){this.id=cb++,this.code=e,this.usedTimes=0}};function ub(t,e,n,i,r,s,o){let a=new Mc,l=new Hf,c=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,m=r.vertexTextures,x=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,A,N,O,G){let q=O.fog,F=G.geometry,Z=y.isMeshStandardMaterial?O.environment:null,z=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),ie=z&&z.mapping===Nc?z.image.height:null,te=_[y.type];y.precision!==null&&(x=r.getMaxPrecision(y.precision),x!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",x,"instead."));let le=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Me=le!==void 0?le.length:0,He=0;F.morphAttributes.position!==void 0&&(He=1),F.morphAttributes.normal!==void 0&&(He=2),F.morphAttributes.color!==void 0&&(He=3);let X,K,ce,se;if(te){let Zt=ti[te];X=Zt.vertexShader,K=Zt.fragmentShader}else X=y.vertexShader,K=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);let pe=t.getRenderTarget(),ve=G.isInstancedMesh===!0,Ae=G.isBatchedMesh===!0,Ne=!!y.map,Fe=!!y.matcap,C=!!z,We=!!y.aoMap,Ie=!!y.lightMap,Oe=!!y.bumpMap,Se=!!y.normalMap,Je=!!y.displacementMap,Ce=!!y.emissiveMap,T=!!y.metalnessMap,S=!!y.roughnessMap,U=y.anisotropy>0,Y=y.clearcoat>0,j=y.dispersion>0,J=y.iridescence>0,Ee=y.sheen>0,ue=y.transmission>0,$=U&&!!y.anisotropyMap,Le=Y&&!!y.clearcoatMap,ee=Y&&!!y.clearcoatNormalMap,re=Y&&!!y.clearcoatRoughnessMap,he=J&&!!y.iridescenceMap,de=J&&!!y.iridescenceThicknessMap,ae=Ee&&!!y.sheenColorMap,Xe=Ee&&!!y.sheenRoughnessMap,De=!!y.specularMap,Qe=!!y.specularColorMap,I=!!y.specularIntensityMap,ye=ue&&!!y.transmissionMap,W=ue&&!!y.thicknessMap,Q=!!y.gradientMap,me=!!y.alphaMap,xe=y.alphaTest>0,Ke=!!y.alphaHash,St=!!y.extensions,Kt=or;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Kt=t.toneMapping);let je={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:K,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:x,batching:Ae,batchingColor:Ae&&G._colorsTexture!==null,instancing:ve,instancingColor:ve&&G.instanceColor!==null,instancingMorph:ve&&G.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ur,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:Fe,envMap:C,envMapMode:C&&z.mapping,envMapCubeUVHeight:ie,aoMap:We,lightMap:Ie,bumpMap:Oe,normalMap:Se,displacementMap:m&&Je,emissiveMap:Ce,normalMapObjectSpace:Se&&y.normalMapType===T1,normalMapTangentSpace:Se&&y.normalMapType===b1,metalnessMap:T,roughnessMap:S,anisotropy:U,anisotropyMap:$,clearcoat:Y,clearcoatMap:Le,clearcoatNormalMap:ee,clearcoatRoughnessMap:re,dispersion:j,iridescence:J,iridescenceMap:he,iridescenceThicknessMap:de,sheen:Ee,sheenColorMap:ae,sheenRoughnessMap:Xe,specularMap:De,specularColorMap:Qe,specularIntensityMap:I,transmission:ue,transmissionMap:ye,thicknessMap:W,gradientMap:Q,opaque:y.transparent===!1&&y.blending===sr&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:xe,alphaHash:Ke,combine:y.combine,mapUv:Ne&&p(y.map.channel),aoMapUv:We&&p(y.aoMap.channel),lightMapUv:Ie&&p(y.lightMap.channel),bumpMapUv:Oe&&p(y.bumpMap.channel),normalMapUv:Se&&p(y.normalMap.channel),displacementMapUv:Je&&p(y.displacementMap.channel),emissiveMapUv:Ce&&p(y.emissiveMap.channel),metalnessMapUv:T&&p(y.metalnessMap.channel),roughnessMapUv:S&&p(y.roughnessMap.channel),anisotropyMapUv:$&&p(y.anisotropyMap.channel),clearcoatMapUv:Le&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(y.sheenRoughnessMap.channel),specularMapUv:De&&p(y.specularMap.channel),specularColorMapUv:Qe&&p(y.specularColorMap.channel),specularIntensityMapUv:I&&p(y.specularIntensityMap.channel),transmissionMapUv:ye&&p(y.transmissionMap.channel),thicknessMapUv:W&&p(y.thicknessMap.channel),alphaMapUv:me&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Se||U),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!F.attributes.uv&&(Ne||me),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:He,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&tt.getTransfer(y.map.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Mi,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:St&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&y.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let N in y.defines)A.push(N),A.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(v(A,y),M(A,y),A.push(t.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function M(y,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){let A=_[y.type],N;if(A){let O=ti[A];N=eM.clone(O.uniforms)}else N=y.uniforms;return N}function b(y,A){let N;for(let O=0,G=h.length;O<G;O++){let q=h[O];if(q.cacheKey===A){N=q,++N.usedTimes;break}}return N===void 0&&(N=new lb(t,A,y,s),h.push(N)),N}function E(y){if(--y.usedTimes===0){let A=h.indexOf(y);h[A]=h[h.length-1],h.pop(),y.destroy()}}function R(y){l.remove(y)}function H(){l.dispose()}return{getParameters:u,getProgramCacheKey:g,getUniforms:P,acquireProgram:b,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:H}}function hb(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function db(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _y(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,x,_,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:x,renderOrder:f.renderOrder,z:_,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function a(f,d,m,x,_,p){let u=o(f,d,m,x,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,d,m,x,_,p){let u=o(f,d,m,x,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,d){n.length>1&&n.sort(f||db),i.length>1&&i.sort(d||xy),r.length>1&&r.sort(d||xy)}function h(){for(let f=e,d=t.length;f<d;f++){let m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function fb(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new _y,t.set(i,[o])):r>=s.length?(o=new _y,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function pb(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new qe};break;case"SpotLight":n={position:new V,direction:new V,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function mb(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var gb=0;function vb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yb(t){let e=new pb,n=mb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);let r=new V,s=new bt,o=new bt;function a(c){let h=0,f=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let m=0,x=0,_=0,p=0,u=0,g=0,v=0,M=0,P=0,b=0,E=0;c.sort(vb);for(let H=0,y=c.length;H<y;H++){let A=c[H],N=A.color,O=A.intensity,G=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=N.r*O,f+=N.g*O,d+=N.b*O;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],O);E++}else if(A.isDirectionalLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,z=n.get(A);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.directionalShadow[m]=z,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=A.shadow.matrix,g++}i.directional[m]=F,m++}else if(A.isSpotLight){let F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(N).multiplyScalar(O),F.distance=G,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[_]=F;let Z=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,Z.updateMatrices(A),A.castShadow&&b++),i.spotLightMatrix[_]=Z.matrix,A.castShadow){let z=n.get(A);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=q,M++}_++}else if(A.isRectAreaLight){let F=e.get(A);F.color.copy(N).multiplyScalar(O),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[p]=F,p++}else if(A.isPointLight){let F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){let Z=A.shadow,z=n.get(A);z.shadowIntensity=Z.intensity,z.shadowBias=Z.bias,z.shadowNormalBias=Z.normalBias,z.shadowRadius=Z.radius,z.shadowMapSize=Z.mapSize,z.shadowCameraNear=Z.camera.near,z.shadowCameraFar=Z.camera.far,i.pointShadow[x]=z,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=A.shadow.matrix,v++}i.point[x]=F,x++}else if(A.isHemisphereLight){let F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(O),F.groundColor.copy(A.groundColor).multiplyScalar(O),i.hemi[u]=F,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let R=i.hash;(R.directionalLength!==m||R.pointLength!==x||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==u||R.numDirectionalShadows!==g||R.numPointShadows!==v||R.numSpotShadows!==M||R.numSpotMaps!==P||R.numLightProbes!==E)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+P-b,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=E,R.directionalLength=m,R.pointLength=x,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=u,R.numDirectionalShadows=g,R.numPointShadows=v,R.numSpotShadows=M,R.numSpotMaps=P,R.numLightProbes=E,i.version=gb++)}function l(c,h){let f=0,d=0,m=0,x=0,_=0,p=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let v=c[u];if(v.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=i.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Sy(t){let e=new yb(t),n=[],i=[];function r(h){c.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function o(h){i.push(h)}function a(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xb(t){let e=new WeakMap;function n(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Sy(t),e.set(r,[a])):s>=o.length?(a=new Sy(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}var Gf=class extends Ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wf=class extends Ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sb=`uniform sampler2D shadow_pass;
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
}`;function Mb(t,e,n){let i=new Cc,r=new rt,s=new rt,o=new _t,a=new Gf({depthPacking:E1}),l=new Wf,c={},h=n.maxTextureSize,f={[ar]:sn,[sn]:ar,[Mi]:Mi},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:_b,fragmentShader:Sb}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let x=new Wr;x.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new vn(x,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ay;let u=this.type;this.render=function(b,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;let H=t.getRenderTarget(),y=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),N=t.state;N.setBlending(rr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let O=u!==_i&&this.type===_i,G=u===_i&&this.type!==_i;for(let q=0,F=b.length;q<F;q++){let Z=b[q],z=Z.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);let ie=z.getFrameExtents();if(r.multiply(ie),s.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ie.x),r.x=s.x*ie.x,z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ie.y),r.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||O===!0||G===!0){let le=this.type!==_i?{minFilter:Tn,magFilter:Tn}:{};z.map!==null&&z.map.dispose(),z.map=new Ti(r.x,r.y,le),z.map.texture.name=Z.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();let te=z.getViewportCount();for(let le=0;le<te;le++){let Me=z.getViewport(le);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),N.viewport(o),z.updateMatrices(Z,le),i=z.getFrustum(),M(E,R,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===_i&&g(z,R),z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(H,y,A)};function g(b,E){let R=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ti(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(E,null,R,d,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(E,null,R,m,_,null)}function v(b,E,R,H){let y=null,A=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)y=A;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=y.uuid,O=E.uuid,G=c[N];G===void 0&&(G={},c[N]=G);let q=G[O];q===void 0&&(q=y.clone(),G[O]=q,E.addEventListener("dispose",P)),y=q}if(y.visible=E.visible,y.wireframe=E.wireframe,H===_i?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=t.properties.get(y);N.light=R}return y}function M(b,E,R,H,y){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===_i)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);let O=e.update(b),G=b.material;if(Array.isArray(G)){let q=O.groups;for(let F=0,Z=q.length;F<Z;F++){let z=q[F],ie=G[z.materialIndex];if(ie&&ie.visible){let te=v(b,ie,H,y);b.onBeforeShadow(t,b,E,R,O,te,z),t.renderBufferDirect(R,null,O,te,b,z),b.onAfterShadow(t,b,E,R,O,te,z)}}}else if(G.visible){let q=v(b,G,H,y);b.onBeforeShadow(t,b,E,R,O,q,null),t.renderBufferDirect(R,null,O,q,b,null),b.onAfterShadow(t,b,E,R,O,q,null)}}let N=b.children;for(let O=0,G=N.length;O<G;O++)M(N[O],E,R,H,y)}function P(b){b.target.removeEventListener("dispose",P);for(let R in c){let H=c[R],y=b.target.uuid;y in H&&(H[y].dispose(),delete H[y])}}}var Ab={[Xd]:qd,[Yd]:Zd,[Jd]:Qd,[Ws]:Kd,[qd]:Xd,[Zd]:Yd,[Qd]:Jd,[Kd]:Ws};function wb(t){function e(){let I=!1,ye=new _t,W=null,Q=new _t(0,0,0,0);return{setMask:function(me){W!==me&&!I&&(t.colorMask(me,me,me,me),W=me)},setLocked:function(me){I=me},setClear:function(me,xe,Ke,St,Kt){Kt===!0&&(me*=St,xe*=St,Ke*=St),ye.set(me,xe,Ke,St),Q.equals(ye)===!1&&(t.clearColor(me,xe,Ke,St),Q.copy(ye))},reset:function(){I=!1,W=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,ye=!1,W=null,Q=null,me=null;return{setReversed:function(xe){ye=xe},setTest:function(xe){xe?ce(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(xe){W!==xe&&!I&&(t.depthMask(xe),W=xe)},setFunc:function(xe){if(ye&&(xe=Ab[xe]),Q!==xe){switch(xe){case Xd:t.depthFunc(t.NEVER);break;case qd:t.depthFunc(t.ALWAYS);break;case Yd:t.depthFunc(t.LESS);break;case Ws:t.depthFunc(t.LEQUAL);break;case Jd:t.depthFunc(t.EQUAL);break;case Kd:t.depthFunc(t.GEQUAL);break;case Zd:t.depthFunc(t.GREATER);break;case Qd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=xe}},setLocked:function(xe){I=xe},setClear:function(xe){me!==xe&&(t.clearDepth(xe),me=xe)},reset:function(){I=!1,W=null,Q=null,me=null}}}function i(){let I=!1,ye=null,W=null,Q=null,me=null,xe=null,Ke=null,St=null,Kt=null;return{setTest:function(je){I||(je?ce(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(je){ye!==je&&!I&&(t.stencilMask(je),ye=je)},setFunc:function(je,Zt,ii){(W!==je||Q!==Zt||me!==ii)&&(t.stencilFunc(je,Zt,ii),W=je,Q=Zt,me=ii)},setOp:function(je,Zt,ii){(xe!==je||Ke!==Zt||St!==ii)&&(t.stencilOp(je,Zt,ii),xe=je,Ke=Zt,St=ii)},setLocked:function(je){I=je},setClear:function(je){Kt!==je&&(t.clearStencil(je),Kt=je)},reset:function(){I=!1,ye=null,W=null,Q=null,me=null,xe=null,Ke=null,St=null,Kt=null}}}let r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,d=[],m=null,x=!1,_=null,p=null,u=null,g=null,v=null,M=null,P=null,b=new qe(0,0,0),E=0,R=!1,H=null,y=null,A=null,N=null,O=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,F=0,Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=F>=1):Z.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=F>=2);let z=null,ie={},te=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Me=new _t().fromArray(te),He=new _t().fromArray(le);function X(I,ye,W,Q){let me=new Uint8Array(4),xe=t.createTexture();t.bindTexture(I,xe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<W;Ke++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(ye+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return xe}let K={};K[t.TEXTURE_2D]=X(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=X(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=X(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=X(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Ws),Ie(!1),Oe(Tv),ce(t.CULL_FACE),C(rr);function ce(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function se(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function pe(I,ye){return h[I]!==ye?(t.bindFramebuffer(I,ye),h[I]=ye,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ye),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function ve(I,ye){let W=d,Q=!1;if(I){W=f.get(ye),W===void 0&&(W=[],f.set(ye,W));let me=I.textures;if(W.length!==me.length||W[0]!==t.COLOR_ATTACHMENT0){for(let xe=0,Ke=me.length;xe<Ke;xe++)W[xe]=t.COLOR_ATTACHMENT0+xe;W.length=me.length,Q=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,Q=!0);Q&&t.drawBuffers(W)}function Ae(I){return m!==I?(t.useProgram(I),m=I,!0):!1}let Ne={[Or]:t.FUNC_ADD,[QS]:t.FUNC_SUBTRACT,[jS]:t.FUNC_REVERSE_SUBTRACT};Ne[$S]=t.MIN,Ne[e1]=t.MAX;let Fe={[t1]:t.ZERO,[n1]:t.ONE,[i1]:t.SRC_COLOR,[Gd]:t.SRC_ALPHA,[c1]:t.SRC_ALPHA_SATURATE,[a1]:t.DST_COLOR,[s1]:t.DST_ALPHA,[r1]:t.ONE_MINUS_SRC_COLOR,[Wd]:t.ONE_MINUS_SRC_ALPHA,[l1]:t.ONE_MINUS_DST_COLOR,[o1]:t.ONE_MINUS_DST_ALPHA,[u1]:t.CONSTANT_COLOR,[h1]:t.ONE_MINUS_CONSTANT_COLOR,[d1]:t.CONSTANT_ALPHA,[f1]:t.ONE_MINUS_CONSTANT_ALPHA};function C(I,ye,W,Q,me,xe,Ke,St,Kt,je){if(I===rr){x===!0&&(se(t.BLEND),x=!1);return}if(x===!1&&(ce(t.BLEND),x=!0),I!==ZS){if(I!==_||je!==R){if((p!==Or||v!==Or)&&(t.blendEquation(t.FUNC_ADD),p=Or,v=Or),je)switch(I){case sr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cv:t.blendFunc(t.ONE,t.ONE);break;case Rv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case sr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Cv:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Rv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,g=null,M=null,P=null,b.set(0,0,0),E=0,_=I,R=je}return}me=me||ye,xe=xe||W,Ke=Ke||Q,(ye!==p||me!==v)&&(t.blendEquationSeparate(Ne[ye],Ne[me]),p=ye,v=me),(W!==u||Q!==g||xe!==M||Ke!==P)&&(t.blendFuncSeparate(Fe[W],Fe[Q],Fe[xe],Fe[Ke]),u=W,g=Q,M=xe,P=Ke),(St.equals(b)===!1||Kt!==E)&&(t.blendColor(St.r,St.g,St.b,Kt),b.copy(St),E=Kt),_=I,R=!1}function We(I,ye){I.side===Mi?se(t.CULL_FACE):ce(t.CULL_FACE);let W=I.side===sn;ye&&(W=!W),Ie(W),I.blending===sr&&I.transparent===!1?C(rr):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);let Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Je(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(I){H!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),H=I)}function Oe(I){I!==YS?(ce(t.CULL_FACE),I!==y&&(I===Tv?t.cullFace(t.BACK):I===JS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),y=I}function Se(I){I!==A&&(q&&t.lineWidth(I),A=I)}function Je(I,ye,W){I?(ce(t.POLYGON_OFFSET_FILL),(N!==ye||O!==W)&&(t.polygonOffset(ye,W),N=ye,O=W)):se(t.POLYGON_OFFSET_FILL)}function Ce(I){I?ce(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function T(I){I===void 0&&(I=t.TEXTURE0+G-1),z!==I&&(t.activeTexture(I),z=I)}function S(I,ye,W){W===void 0&&(z===null?W=t.TEXTURE0+G-1:W=z);let Q=ie[W];Q===void 0&&(Q={type:void 0,texture:void 0},ie[W]=Q),(Q.type!==I||Q.texture!==ye)&&(z!==W&&(t.activeTexture(W),z=W),t.bindTexture(I,ye||K[I]),Q.type=I,Q.texture=ye)}function U(){let I=ie[z];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(I){Me.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Me.copy(I))}function ae(I){He.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),He.copy(I))}function Xe(I,ye){let W=l.get(ye);W===void 0&&(W=new WeakMap,l.set(ye,W));let Q=W.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(ye,I.name),W.set(I,Q))}function De(I,ye){let Q=l.get(ye).get(I);a.get(ye)!==Q&&(t.uniformBlockBinding(ye,Q,I.__bindingPointIndex),a.set(ye,Q))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},z=null,ie={},h={},f=new WeakMap,d=[],m=null,x=!1,_=null,p=null,u=null,g=null,v=null,M=null,P=null,b=new qe(0,0,0),E=0,R=!1,H=null,y=null,A=null,N=null,O=null,Me.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ce,disable:se,bindFramebuffer:pe,drawBuffers:ve,useProgram:Ae,setBlending:C,setMaterial:We,setFlipSided:Ie,setCullFace:Oe,setLineWidth:Se,setPolygonOffset:Je,setScissorTest:Ce,activeTexture:T,bindTexture:S,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:re,texImage3D:he,updateUBOMapping:Xe,uniformBlockBinding:De,texStorage2D:Le,texStorage3D:ee,texSubImage2D:J,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:$,scissor:de,viewport:ae,reset:Qe}}function My(t,e,n,i){let r=Eb(i);switch(n){case Ry:return t*e;case Iy:return t*e;case Ly:return t*e*2;case Dy:return t*e/r.components*r.byteLength;case lp:return t*e/r.components*r.byteLength;case Ny:return t*e*2/r.components*r.byteLength;case cp:return t*e*2/r.components*r.byteLength;case Py:return t*e*3/r.components*r.byteLength;case Wn:return t*e*4/r.components*r.byteLength;case up:return t*e*4/r.components*r.byteLength;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case uc:case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rf:case of:return Math.max(t,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(t,8)*Math.max(e,8)/2;case af:case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Af:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case dc:case wf:case Ef:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Uy:case bf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tf:case Cf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Eb(t){switch(t){case bi:case by:return{byteLength:1,components:1};case oa:case Ty:case ua:return{byteLength:2,components:1};case op:case ap:return{byteLength:2,components:4};case Vr:case sp:case Ai:return{byteLength:4,components:1};case Cy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function bb(t,e,n,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,S){return m?new OffscreenCanvas(T,S):xc("canvas")}function _(T,S,U){let Y=1,j=Ce(T);if((j.width>U||j.height>U)&&(Y=U/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let J=Math.floor(Y*j.width),Ee=Math.floor(Y*j.height);f===void 0&&(f=x(J,Ee));let ue=S?x(J,Ee):f;return ue.width=J,ue.height=Ee,ue.getContext("2d").drawImage(T,0,0,J,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+Ee+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Tn&&T.minFilter!==Gn}function u(T){t.generateMipmap(T)}function g(T,S,U,Y,j=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===t.RED&&(U===t.FLOAT&&(J=t.R32F),U===t.HALF_FLOAT&&(J=t.R16F),U===t.UNSIGNED_BYTE&&(J=t.R8)),S===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(J=t.R8UI),U===t.UNSIGNED_SHORT&&(J=t.R16UI),U===t.UNSIGNED_INT&&(J=t.R32UI),U===t.BYTE&&(J=t.R8I),U===t.SHORT&&(J=t.R16I),U===t.INT&&(J=t.R32I)),S===t.RG&&(U===t.FLOAT&&(J=t.RG32F),U===t.HALF_FLOAT&&(J=t.RG16F),U===t.UNSIGNED_BYTE&&(J=t.RG8)),S===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(J=t.RG8UI),U===t.UNSIGNED_SHORT&&(J=t.RG16UI),U===t.UNSIGNED_INT&&(J=t.RG32UI),U===t.BYTE&&(J=t.RG8I),U===t.SHORT&&(J=t.RG16I),U===t.INT&&(J=t.RG32I)),S===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(J=t.RGB8UI),U===t.UNSIGNED_SHORT&&(J=t.RGB16UI),U===t.UNSIGNED_INT&&(J=t.RGB32UI),U===t.BYTE&&(J=t.RGB8I),U===t.SHORT&&(J=t.RGB16I),U===t.INT&&(J=t.RGB32I)),S===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),U===t.UNSIGNED_INT&&(J=t.RGBA32UI),U===t.BYTE&&(J=t.RGBA8I),U===t.SHORT&&(J=t.RGBA16I),U===t.INT&&(J=t.RGBA32I)),S===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),S===t.RGBA){let Ee=j?mc:tt.getTransfer(Y);U===t.FLOAT&&(J=t.RGBA32F),U===t.HALF_FLOAT&&(J=t.RGBA16F),U===t.UNSIGNED_BYTE&&(J=Ee===ut?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(T,S){let U;return T?S===null||S===Vr||S===Ys?U=t.DEPTH24_STENCIL8:S===Ai?U=t.DEPTH32F_STENCIL8:S===oa&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Vr||S===Ys?U=t.DEPTH_COMPONENT24:S===Ai?U=t.DEPTH_COMPONENT32F:S===oa&&(U=t.DEPTH_COMPONENT16),U}function M(T,S){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tn&&T.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function P(T){let S=T.target;S.removeEventListener("dispose",P),E(S),S.isVideoTexture&&h.delete(S)}function b(T){let S=T.target;S.removeEventListener("dispose",b),H(S)}function E(T){let S=i.get(T);if(S.__webglInit===void 0)return;let U=T.source,Y=d.get(U);if(Y){let j=Y[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(T),Object.keys(Y).length===0&&d.delete(U)}i.remove(T)}function R(T){let S=i.get(T);t.deleteTexture(S.__webglTexture);let U=T.source,Y=d.get(U);delete Y[S.__cacheKey],o.memory.textures--}function H(T){let S=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(S.__webglFramebuffer[Y]))for(let j=0;j<S.__webglFramebuffer[Y].length;j++)t.deleteFramebuffer(S.__webglFramebuffer[Y][j]);else t.deleteFramebuffer(S.__webglFramebuffer[Y]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Y])}else{if(Array.isArray(S.__webglFramebuffer))for(let Y=0;Y<S.__webglFramebuffer.length;Y++)t.deleteFramebuffer(S.__webglFramebuffer[Y]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Y=0;Y<S.__webglColorRenderbuffer.length;Y++)S.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Y]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=T.textures;for(let Y=0,j=U.length;Y<j;Y++){let J=i.get(U[Y]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(U[Y])}i.remove(T)}let y=0;function A(){y=0}function N(){let T=y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),y+=1,T}function O(T){let S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function G(T,S){let U=i.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){let Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(U,T,S);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+S)}function q(T,S){let U=i.get(T);if(T.version>0&&U.__version!==T.version){He(U,T,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+S)}function F(T,S){let U=i.get(T);if(T.version>0&&U.__version!==T.version){He(U,T,S);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+S)}function Z(T,S){let U=i.get(T);if(T.version>0&&U.__version!==T.version){X(U,T,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+S)}let z={[ef]:t.REPEAT,[zr]:t.CLAMP_TO_EDGE,[tf]:t.MIRRORED_REPEAT},ie={[Tn]:t.NEAREST,[A1]:t.NEAREST_MIPMAP_NEAREST,[zl]:t.NEAREST_MIPMAP_LINEAR,[Gn]:t.LINEAR,[dd]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},te={[C1]:t.NEVER,[N1]:t.ALWAYS,[R1]:t.LESS,[Fy]:t.LEQUAL,[P1]:t.EQUAL,[D1]:t.GEQUAL,[I1]:t.GREATER,[L1]:t.NOTEQUAL};function le(T,S){if(S.type===Ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gn||S.magFilter===dd||S.magFilter===zl||S.magFilter===Hr||S.minFilter===Gn||S.minFilter===dd||S.minFilter===zl||S.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,z[S.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,z[S.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,z[S.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ie[S.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Tn||S.minFilter!==zl&&S.minFilter!==Hr||S.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Me(T,S){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",P));let Y=S.source,j=d.get(Y);j===void 0&&(j={},d.set(Y,j));let J=O(S);if(J!==T.__cacheKey){j[J]===void 0&&(j[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[J].usedTimes++;let Ee=j[T.__cacheKey];Ee!==void 0&&(j[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&R(S)),T.__cacheKey=J,T.__webglTexture=j[J].texture}return U}function He(T,S,U){let Y=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Y=t.TEXTURE_3D);let j=Me(T,S),J=S.source;n.bindTexture(Y,T.__webglTexture,t.TEXTURE0+U);let Ee=i.get(J);if(J.version!==Ee.__version||j===!0){n.activeTexture(t.TEXTURE0+U);let ue=tt.getPrimaries(tt.workingColorSpace),$=S.colorSpace===ir?null:tt.getPrimaries(S.colorSpace),Le=S.colorSpace===ir||ue===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ee=_(S.image,!1,r.maxTextureSize);ee=Je(S,ee);let re=s.convert(S.format,S.colorSpace),he=s.convert(S.type),de=g(S.internalFormat,re,he,S.colorSpace,S.isVideoTexture);le(Y,S);let ae,Xe=S.mipmaps,De=S.isVideoTexture!==!0,Qe=Ee.__version===void 0||j===!0,I=J.dataReady,ye=M(S,ee);if(S.isDepthTexture)de=v(S.format===Js,S.type),Qe&&(De?n.texStorage2D(t.TEXTURE_2D,1,de,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,de,ee.width,ee.height,0,re,he,null));else if(S.isDataTexture)if(Xe.length>0){De&&Qe&&n.texStorage2D(t.TEXTURE_2D,ye,de,Xe[0].width,Xe[0].height);for(let W=0,Q=Xe.length;W<Q;W++)ae=Xe[W],De?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ae.width,ae.height,re,he,ae.data):n.texImage2D(t.TEXTURE_2D,W,de,ae.width,ae.height,0,re,he,ae.data);S.generateMipmaps=!1}else De?(Qe&&n.texStorage2D(t.TEXTURE_2D,ye,de,ee.width,ee.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,re,he,ee.data)):n.texImage2D(t.TEXTURE_2D,0,de,ee.width,ee.height,0,re,he,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,de,Xe[0].width,Xe[0].height,ee.depth);for(let W=0,Q=Xe.length;W<Q;W++)if(ae=Xe[W],S.format!==Wn)if(re!==null)if(De){if(I)if(S.layerUpdates.size>0){let me=My(ae.width,ae.height,S.format,S.type);for(let xe of S.layerUpdates){let Ke=ae.data.subarray(xe*me/ae.data.BYTES_PER_ELEMENT,(xe+1)*me/ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,xe,ae.width,ae.height,1,re,Ke,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ae.width,ae.height,ee.depth,re,ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,de,ae.width,ae.height,ee.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ae.width,ae.height,ee.depth,re,he,ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,de,ae.width,ae.height,ee.depth,0,re,he,ae.data)}else{De&&Qe&&n.texStorage2D(t.TEXTURE_2D,ye,de,Xe[0].width,Xe[0].height);for(let W=0,Q=Xe.length;W<Q;W++)ae=Xe[W],S.format!==Wn?re!==null?De?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ae.width,ae.height,re,ae.data):n.compressedTexImage2D(t.TEXTURE_2D,W,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ae.width,ae.height,re,he,ae.data):n.texImage2D(t.TEXTURE_2D,W,de,ae.width,ae.height,0,re,he,ae.data)}else if(S.isDataArrayTexture)if(De){if(Qe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,de,ee.width,ee.height,ee.depth),I)if(S.layerUpdates.size>0){let W=My(ee.width,ee.height,S.format,S.type);for(let Q of S.layerUpdates){let me=ee.data.subarray(Q*W/ee.data.BYTES_PER_ELEMENT,(Q+1)*W/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,ee.width,ee.height,1,re,he,me)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,re,he,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,ee.width,ee.height,ee.depth,0,re,he,ee.data);else if(S.isData3DTexture)De?(Qe&&n.texStorage3D(t.TEXTURE_3D,ye,de,ee.width,ee.height,ee.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,re,he,ee.data)):n.texImage3D(t.TEXTURE_3D,0,de,ee.width,ee.height,ee.depth,0,re,he,ee.data);else if(S.isFramebufferTexture){if(Qe)if(De)n.texStorage2D(t.TEXTURE_2D,ye,de,ee.width,ee.height);else{let W=ee.width,Q=ee.height;for(let me=0;me<ye;me++)n.texImage2D(t.TEXTURE_2D,me,de,W,Q,0,re,he,null),W>>=1,Q>>=1}}else if(Xe.length>0){if(De&&Qe){let W=Ce(Xe[0]);n.texStorage2D(t.TEXTURE_2D,ye,de,W.width,W.height)}for(let W=0,Q=Xe.length;W<Q;W++)ae=Xe[W],De?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,re,he,ae):n.texImage2D(t.TEXTURE_2D,W,de,re,he,ae);S.generateMipmaps=!1}else if(De){if(Qe){let W=Ce(ee);n.texStorage2D(t.TEXTURE_2D,ye,de,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re,he,ee)}else n.texImage2D(t.TEXTURE_2D,0,de,re,he,ee);p(S)&&u(Y),Ee.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function X(T,S,U){if(S.image.length!==6)return;let Y=Me(T,S),j=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);let J=i.get(j);if(j.version!==J.__version||Y===!0){n.activeTexture(t.TEXTURE0+U);let Ee=tt.getPrimaries(tt.workingColorSpace),ue=S.colorSpace===ir?null:tt.getPrimaries(S.colorSpace),$=S.colorSpace===ir||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let Le=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,re=[];for(let Q=0;Q<6;Q++)!Le&&!ee?re[Q]=_(S.image[Q],!0,r.maxCubemapSize):re[Q]=ee?S.image[Q].image:S.image[Q],re[Q]=Je(S,re[Q]);let he=re[0],de=s.convert(S.format,S.colorSpace),ae=s.convert(S.type),Xe=g(S.internalFormat,de,ae,S.colorSpace),De=S.isVideoTexture!==!0,Qe=J.__version===void 0||Y===!0,I=j.dataReady,ye=M(S,he);le(t.TEXTURE_CUBE_MAP,S);let W;if(Le){De&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Xe,he.width,he.height);for(let Q=0;Q<6;Q++){W=re[Q].mipmaps;for(let me=0;me<W.length;me++){let xe=W[me];S.format!==Wn?de!==null?De?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,xe.width,xe.height,de,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Xe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,xe.width,xe.height,de,ae,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,Xe,xe.width,xe.height,0,de,ae,xe.data)}}}else{if(W=S.mipmaps,De&&Qe){W.length>0&&ye++;let Q=Ce(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ye,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ee){De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,re[Q].width,re[Q].height,de,ae,re[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,re[Q].width,re[Q].height,0,de,ae,re[Q].data);for(let me=0;me<W.length;me++){let Ke=W[me].image[Q].image;De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Ke.width,Ke.height,de,ae,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Xe,Ke.width,Ke.height,0,de,ae,Ke.data)}}else{De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,de,ae,re[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,de,ae,re[Q]);for(let me=0;me<W.length;me++){let xe=W[me];De?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,de,ae,xe.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,Xe,de,ae,xe.image[Q])}}}p(S)&&u(t.TEXTURE_CUBE_MAP),J.__version=j.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function K(T,S,U,Y,j,J){let Ee=s.convert(U.format,U.colorSpace),ue=s.convert(U.type),$=g(U.internalFormat,Ee,ue,U.colorSpace);if(!i.get(S).__hasExternalTextures){let ee=Math.max(1,S.width>>J),re=Math.max(1,S.height>>J);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,J,$,ee,re,S.depth,0,Ee,ue,null):n.texImage2D(j,J,$,ee,re,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Oe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,j,i.get(U).__webglTexture,0,Ie(S)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,j,i.get(U).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(T,S,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),S.depthBuffer){let Y=S.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,J=v(S.stencilBuffer,j),Ee=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=Ie(S);Oe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,J,S.width,S.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,J,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,J,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,T)}else{let Y=S.textures;for(let j=0;j<Y.length;j++){let J=Y[j],Ee=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),$=g(J.internalFormat,Ee,ue,J.colorSpace),Le=Ie(S);U&&Oe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,$,S.width,S.height):Oe(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Le,$,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let Y=i.get(S.depthTexture).__webglTexture,j=Ie(S);if(S.depthTexture.format===Hs)Oe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Y,0);else if(S.depthTexture.format===Js)Oe(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function pe(T){let S=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let Y=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Y){let j=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),S.__depthDisposeCallback=j}S.__boundDepthTexture=Y}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");se(S.__webglFramebuffer,T)}else if(U){S.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Y]),S.__webglDepthbuffer[Y]===void 0)S.__webglDepthbuffer[Y]=t.createRenderbuffer(),ce(S.__webglDepthbuffer[Y],T,!1);else{let j=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,J)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ce(S.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,j)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(T,S,U){let Y=i.get(T);S!==void 0&&K(Y.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&pe(T)}function Ae(T){let S=T.texture,U=i.get(T),Y=i.get(S);T.addEventListener("dispose",b);let j=T.textures,J=T.isWebGLCubeRenderTarget===!0,Ee=j.length>1;if(Ee||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=S.version,o.memory.textures++),J){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let $=0;$<S.mipmaps.length;$++)U.__webglFramebuffer[ue][$]=t.createFramebuffer()}else U.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)U.__webglFramebuffer[ue]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,$=j.length;ue<$;ue++){let Le=i.get(j[ue]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Oe(T)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<j.length;ue++){let $=j[ue];U.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);let Le=s.convert($.format,$.colorSpace),ee=s.convert($.type),re=g($.internalFormat,Le,ee,$.colorSpace,T.isXRRenderTarget===!0),he=Ie(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,re,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),le(t.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)K(U.__webglFramebuffer[ue][$],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,$);else K(U.__webglFramebuffer[ue],T,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,$=j.length;ue<$;ue++){let Le=j[ue],ee=i.get(Le);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),le(t.TEXTURE_2D,Le),K(U.__webglFramebuffer,T,Le,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),p(Le)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Y.__webglTexture),le(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let $=0;$<S.mipmaps.length;$++)K(U.__webglFramebuffer[$],T,S,t.COLOR_ATTACHMENT0,ue,$);else K(U.__webglFramebuffer,T,S,t.COLOR_ATTACHMENT0,ue,0);p(S)&&u(ue),n.unbindTexture()}T.depthBuffer&&pe(T)}function Ne(T){let S=T.textures;for(let U=0,Y=S.length;U<Y;U++){let j=S[U];if(p(j)){let J=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(j).__webglTexture;n.bindTexture(J,Ee),u(J),n.unbindTexture()}}}let Fe=[],C=[];function We(T){if(T.samples>0){if(Oe(T)===!1){let S=T.textures,U=T.width,Y=T.height,j=t.COLOR_BUFFER_BIT,J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(T),ue=S.length>1;if(ue)for(let $=0;$<S.length;$++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let $=0;$<S.length;$++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[$]);let Le=i.get(S[$]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,U,Y,0,0,U,Y,j,t.NEAREST),l===!0&&(Fe.length=0,C.length=0,Fe.push(t.COLOR_ATTACHMENT0+$),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(J),C.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,C)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let $=0;$<S.length;$++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[$]);let Le=i.get(S[$]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let S=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ie(T){return Math.min(r.maxSamples,T.samples)}function Oe(T){let S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(T){let S=o.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function Je(T,S){let U=T.colorSpace,Y=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==ur&&U!==ir&&(tt.getTransfer(U)===ut?(Y!==Wn||j!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function Ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=F,this.setTextureCube=Z,this.rebindTextures=ve,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Oe}function Tb(t,e){function n(i,r=ir){let s,o=tt.getTransfer(r);if(i===bi)return t.UNSIGNED_BYTE;if(i===op)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Cy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===by)return t.BYTE;if(i===Ty)return t.SHORT;if(i===oa)return t.UNSIGNED_SHORT;if(i===sp)return t.INT;if(i===Vr)return t.UNSIGNED_INT;if(i===Ai)return t.FLOAT;if(i===ua)return t.HALF_FLOAT;if(i===Ry)return t.ALPHA;if(i===Py)return t.RGB;if(i===Wn)return t.RGBA;if(i===Iy)return t.LUMINANCE;if(i===Ly)return t.LUMINANCE_ALPHA;if(i===Hs)return t.DEPTH_COMPONENT;if(i===Js)return t.DEPTH_STENCIL;if(i===Dy)return t.RED;if(i===lp)return t.RED_INTEGER;if(i===Ny)return t.RG;if(i===cp)return t.RG_INTEGER;if(i===up)return t.RGBA_INTEGER;if(i===lc||i===cc||i===uc||i===hc)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nf||i===rf||i===sf||i===of)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===af||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===af||i===lf)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uf||i===hf||i===df||i===ff||i===pf||i===mf||i===gf||i===vf||i===yf||i===xf||i===_f||i===Sf||i===Mf||i===Af)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===df)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ff)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_f)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Mf)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Af)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dc||i===wf||i===Ef)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===dc)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ef)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uy||i===bf||i===Tf||i===Cf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===dc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var Xf=class extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},zs=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cb={type:"move"},sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=n.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},Rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pb=`
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

}`,qf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let r=new Rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new Pn({vertexShader:Rb,fragmentShader:Pb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vn(new Qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yf=class extends lr{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,x=null,_=new qf,p=n.getContextAttributes(),u=null,g=null,v=[],M=[],P=new rt,b=null,E=new gn;E.layers.enable(1),E.viewport=new _t;let R=new gn;R.layers.enable(2),R.viewport=new _t;let H=[E,R],y=new Xf;y.layers.enable(1),y.layers.enable(2);let A=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=v[X];return K===void 0&&(K=new sa,v[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=v[X];return K===void 0&&(K=new sa,v[X]=K),K.getGripSpace()},this.getHand=function(X){let K=v[X];return K===void 0&&(K=new sa,v[X]=K),K.getHandSpace()};function O(X){let K=M.indexOf(X.inputSource);if(K===-1)return;let ce=v[K];ce!==void 0&&(ce.update(X.inputSource,X.frame,c||o),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",q);for(let X=0;X<v.length;X++){let K=M[X];K!==null&&(M[X]=null,v[X].disconnect(K))}A=null,N=null,_.reset(),e.setRenderTarget(u),m=null,d=null,f=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",G),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let K={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Ti(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let K=null,ce=null,se=null;p.depth&&(se=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=p.stencil?Js:Hs,ce=p.stencil?Ys:Vr);let pe={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Ti(d.textureWidth,d.textureHeight,{format:Wn,type:bi,depthTexture:new Pc(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let K=0;K<X.removed.length;K++){let ce=X.removed[K],se=M.indexOf(ce);se>=0&&(M[se]=null,v[se].disconnect(ce))}for(let K=0;K<X.added.length;K++){let ce=X.added[K],se=M.indexOf(ce);if(se===-1){for(let ve=0;ve<v.length;ve++)if(ve>=M.length){M.push(ce),se=ve;break}else if(M[ve]===null){M[ve]=ce,se=ve;break}if(se===-1)break}let pe=v[se];pe&&pe.connect(ce)}}let F=new V,Z=new V;function z(X,K,ce){F.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(ce.matrixWorld);let se=F.distanceTo(Z),pe=K.projectionMatrix.elements,ve=ce.projectionMatrix.elements,Ae=pe[14]/(pe[10]-1),Ne=pe[14]/(pe[10]+1),Fe=(pe[9]+1)/pe[5],C=(pe[9]-1)/pe[5],We=(pe[8]-1)/pe[0],Ie=(ve[8]+1)/ve[0],Oe=Ae*We,Se=Ae*Ie,Je=se/(-We+Ie),Ce=Je*-We;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ce),X.translateZ(Je),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pe[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let T=Ae+Je,S=Ne+Je,U=Oe-Ce,Y=Se+(se-Ce),j=Fe*Ne/S*T,J=C*Ne/S*T;X.projectionMatrix.makePerspective(U,Y,j,J,T,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ie(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let K=X.near,ce=X.far;_.texture!==null&&(_.depthNear>0&&(K=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),y.near=R.near=E.near=K,y.far=R.far=E.far=ce,(A!==y.near||N!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,N=y.far);let se=X.parent,pe=y.cameras;ie(y,se);for(let ve=0;ve<pe.length;ve++)ie(pe[ve],se);pe.length===2?z(y,E,R):y.projectionMatrix.copy(E.projectionMatrix),te(X,y,se)};function te(X,K,ce){ce===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Pf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let le=null;function Me(X,K){if(h=K.getViewerPose(c||o),x=K,h!==null){let ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let se=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let ve=0;ve<ce.length;ve++){let Ae=ce[ve],Ne=null;if(m!==null)Ne=m.getViewport(Ae);else{let C=f.getViewSubImage(d,Ae);Ne=C.viewport,ve===0&&(e.setRenderTargetTextures(g,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(g))}let Fe=H[ve];Fe===void 0&&(Fe=new gn,Fe.layers.enable(ve),Fe.viewport=new _t,H[ve]=Fe),Fe.matrix.fromArray(Ae.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ae.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),ve===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(Fe)}let pe=r.enabledFeatures;if(pe&&pe.includes("depth-sensing")){let ve=f.getDepthInformation(ce[0]);ve&&ve.isValid&&ve.texture&&_.init(e,ve,r.renderState)}}for(let ce=0;ce<v.length;ce++){let se=M[ce],pe=v[ce];se!==null&&pe!==void 0&&pe.update(se,K,c||o)}le&&le(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let He=new zy;He.setAnimationLoop(Me),this.setAnimationLoop=function(X){le=X},this.dispose=function(){}}},Ur=new Ci,Ib=new bt;function Lb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,ky(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),x(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===sn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===sn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let g=e.get(u),v=g.envMap,M=g.envMapRotation;v&&(p.envMap.value=v,Ur.copy(M),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),p.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(Ur)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===sn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Db(t,e,n,i){let r={},s={},o=[],a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){let M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(x(g),M=h(g),r[g.id]=M,g.addEventListener("dispose",p));let P=v.program;i.updateUBOMapping(g,P);let b=e.render.frame;s[g.id]!==b&&(d(g),s[g.id]=b)}function h(g){let v=f();g.__bindingPointIndex=v;let M=t.createBuffer(),P=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){let v=r[g.id],M=g.uniforms,P=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,E=M.length;b<E;b++){let R=Array.isArray(M[b])?M[b]:[M[b]];for(let H=0,y=R.length;H<y;H++){let A=R[H];if(m(A,b,H,P)===!0){let N=A.__offset,O=Array.isArray(A.value)?A.value:[A.value],G=0;for(let q=0;q<O.length;q++){let F=O[q],Z=_(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,t.bufferSubData(t.UNIFORM_BUFFER,N+G,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,N,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,M,P){let b=g.value,E=v+"_"+M;if(P[E]===void 0)return typeof b=="number"||typeof b=="boolean"?P[E]=b:P[E]=b.clone(),!0;{let R=P[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return P[E]=b,!0}else if(R.equals(b)===!1)return R.copy(b),!0}return!1}function x(g){let v=g.uniforms,M=0,P=16;for(let E=0,R=v.length;E<R;E++){let H=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,A=H.length;y<A;y++){let N=H[y],O=Array.isArray(N.value)?N.value:[N.value];for(let G=0,q=O.length;G<q;G++){let F=O[G],Z=_(F),z=M%P,ie=z%Z.boundary,te=z+ie;M+=ie,te!==0&&P-te<Z.storage&&(M+=P-te),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Z.storage}}}let b=M%P;return b>0&&(M+=P-b),g.__size=M,g.__cache={},this}function _(g){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){let v=g.target;v.removeEventListener("dispose",p);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(let g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}var Ic=class{constructor(e={}){let{canvas:n=F1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;let m=new Uint32Array(4),x=new Int32Array(4),_=null,p=null,u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=or,this.toneMappingExposure=1;let v=this,M=!1,P=0,b=0,E=null,R=-1,H=null,y=new _t,A=new _t,N=null,O=new qe(0),G=0,q=n.width,F=n.height,Z=1,z=null,ie=null,te=new _t(0,0,q,F),le=new _t(0,0,q,F),Me=!1,He=new Cc,X=!1,K=!1,ce=new bt,se=new bt,pe=new V,ve=new _t,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Fe(){return E===null?Z:1}let C=i;function We(w,L){return n.getContext(w,L)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rp}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",xe,!1),C===null){let L="webgl2";if(C=We(L,w),C===null)throw We(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ie,Oe,Se,Je,Ce,T,S,U,Y,j,J,Ee,ue,$,Le,ee,re,he,de,ae,Xe,De,Qe,I;function ye(){Ie=new Kw(C),Ie.init(),De=new Tb(C,Ie),Oe=new Gw(C,Ie,e,De),Se=new wb(C),Oe.reverseDepthBuffer&&Se.buffers.depth.setReversed(!0),Je=new jw(C),Ce=new hb,T=new bb(C,Ie,Se,Ce,Oe,De,Je),S=new Xw(v),U=new Jw(v),Y=new sM(C),Qe=new Hw(C,Y),j=new Zw(C,Y,Je,Qe),J=new eE(C,j,Y,Je),de=new $w(C,Oe,T),ee=new Ww(Ce),Ee=new ub(v,S,U,Ie,Oe,Qe,ee),ue=new Lb(v,Ce),$=new fb,Le=new xb(Ie),he=new zw(v,S,U,Se,J,d,l),re=new Mb(v,J,Oe),I=new Db(C,Je,Oe,Se),ae=new Vw(C,Ie,Je),Xe=new Qw(C,Ie,Je),Je.programs=Ee.programs,v.capabilities=Oe,v.extensions=Ie,v.properties=Ce,v.renderLists=$,v.shadowMap=re,v.state=Se,v.info=Je}ye();let W=new Yf(v,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let w=Ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(q,F,!1))},this.getSize=function(w){return w.set(q,F)},this.setSize=function(w,L,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,F=L,n.width=Math.floor(w*Z),n.height=Math.floor(L*Z),B===!0&&(n.style.width=w+"px",n.style.height=L+"px"),this.setViewport(0,0,w,L)},this.getDrawingBufferSize=function(w){return w.set(q*Z,F*Z).floor()},this.setDrawingBufferSize=function(w,L,B){q=w,F=L,Z=B,n.width=Math.floor(w*B),n.height=Math.floor(L*B),this.setViewport(0,0,w,L)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,L,B,k){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,L,B,k),Se.viewport(y.copy(te).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,L,B,k){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,L,B,k),Se.scissor(A.copy(le).multiplyScalar(Z).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Se.setScissorTest(Me=w)},this.setOpaqueSort=function(w){z=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(w=!0,L=!0,B=!0){let k=0;if(w){let D=!1;if(E!==null){let oe=E.texture.format;D=oe===up||oe===cp||oe===lp}if(D){let oe=E.texture.type,ge=oe===bi||oe===Vr||oe===oa||oe===Ys||oe===op||oe===ap,we=he.getClearColor(),be=he.getClearAlpha(),Be=we.r,ze=we.g,Re=we.b;ge?(m[0]=Be,m[1]=ze,m[2]=Re,m[3]=be,C.clearBufferuiv(C.COLOR,0,m)):(x[0]=Be,x[1]=ze,x[2]=Re,x[3]=be,C.clearBufferiv(C.COLOR,0,x))}else k|=C.COLOR_BUFFER_BIT}L&&(k|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),$.dispose(),Le.dispose(),Ce.dispose(),S.dispose(),U.dispose(),J.dispose(),Qe.dispose(),I.dispose(),Ee.dispose(),W.dispose(),W.removeEventListener("sessionstart",Bp),W.removeEventListener("sessionend",kp),fr.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let w=Je.autoReset,L=re.enabled,B=re.autoUpdate,k=re.needsUpdate,D=re.type;ye(),Je.autoReset=w,re.enabled=L,re.autoUpdate=B,re.needsUpdate=k,re.type=D}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ke(w){let L=w.target;L.removeEventListener("dispose",Ke),St(L)}function St(w){Kt(w),Ce.remove(w)}function Kt(w){let L=Ce.get(w).programs;L!==void 0&&(L.forEach(function(B){Ee.releaseProgram(B)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,L,B,k,D,oe){L===null&&(L=Ae);let ge=D.isMesh&&D.matrixWorld.determinant()<0,we=_x(w,L,B,k,D);Se.setMaterial(k,ge);let be=B.index,Be=1;if(k.wireframe===!0){if(be=j.getWireframeAttribute(B),be===void 0)return;Be=2}let ze=B.drawRange,Re=B.attributes.position,nt=ze.start*Be,at=(ze.start+ze.count)*Be;oe!==null&&(nt=Math.max(nt,oe.start*Be),at=Math.min(at,(oe.start+oe.count)*Be)),be!==null?(nt=Math.max(nt,0),at=Math.min(at,be.count)):Re!=null&&(nt=Math.max(nt,0),at=Math.min(at,Re.count));let gt=at-nt;if(gt<0||gt===1/0)return;Qe.setup(D,k,we,B,be);let on,$e=ae;if(be!==null&&(on=Y.get(be),$e=Xe,$e.setIndex(on)),D.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*Fe()),$e.setMode(C.LINES)):$e.setMode(C.TRIANGLES);else if(D.isLine){let Pe=k.linewidth;Pe===void 0&&(Pe=1),Se.setLineWidth(Pe*Fe()),D.isLineSegments?$e.setMode(C.LINES):D.isLineLoop?$e.setMode(C.LINE_LOOP):$e.setMode(C.LINE_STRIP)}else D.isPoints?$e.setMode(C.POINTS):D.isSprite&&$e.setMode(C.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)$e.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))$e.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{let Pe=D._multiDrawStarts,Lt=D._multiDrawCounts,et=D._multiDrawCount,In=be?Y.get(be).bytesPerElement:1,Jr=Ce.get(k).currentProgram.getUniforms();for(let an=0;an<et;an++)Jr.setValue(C,"_gl_DrawID",an),$e.render(Pe[an]/In,Lt[an])}else if(D.isInstancedMesh)$e.renderInstances(nt,gt,D.count);else if(B.isInstancedBufferGeometry){let Pe=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Lt=Math.min(B.instanceCount,Pe);$e.renderInstances(nt,gt,Lt)}else $e.render(nt,gt)};function je(w,L,B){w.transparent===!0&&w.side===Mi&&w.forceSinglePass===!1?(w.side=sn,w.needsUpdate=!0,va(w,L,B),w.side=ar,w.needsUpdate=!0,va(w,L,B),w.side=Mi):va(w,L,B)}this.compile=function(w,L,B=null){B===null&&(B=w),p=Le.get(B),p.init(L),g.push(p),B.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),w!==B&&w.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();let k=new Set;return w.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;let oe=D.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let we=oe[ge];je(we,B,D),k.add(we)}else je(oe,B,D),k.add(oe)}),g.pop(),p=null,k},this.compileAsync=function(w,L,B=null){let k=this.compile(w,L,B);return new Promise(D=>{function oe(){if(k.forEach(function(ge){Ce.get(ge).currentProgram.isReady()&&k.delete(ge)}),k.size===0){D(w);return}setTimeout(oe,10)}Ie.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Zt=null;function ii(w){Zt&&Zt(w)}function Bp(){fr.stop()}function kp(){fr.start()}let fr=new zy;fr.setAnimationLoop(ii),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(w){Zt=w,W.setAnimationLoop(w),w===null?fr.stop():fr.start()},W.addEventListener("sessionstart",Bp),W.addEventListener("sessionend",kp),this.render=function(w,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,L,E),p=Le.get(w,g.length),p.init(L),g.push(p),se.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),He.setFromProjectionMatrix(se),K=this.localClippingEnabled,X=ee.init(this.clippingPlanes,K),_=$.get(w,u.length),_.init(),u.push(_),W.enabled===!0&&W.isPresenting===!0){let oe=v.xr.getDepthSensingMesh();oe!==null&&Gc(oe,L,-1/0,v.sortObjects)}Gc(w,L,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(z,ie),Ne=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Ne&&he.addToRenderList(_,w),this.info.render.frame++,X===!0&&ee.beginShadows();let B=p.state.shadowsArray;re.render(B,w,L),X===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=_.opaque,D=_.transmissive;if(p.setupLights(),L.isArrayCamera){let oe=L.cameras;if(D.length>0)for(let ge=0,we=oe.length;ge<we;ge++){let be=oe[ge];Hp(k,D,w,be)}Ne&&he.render(w);for(let ge=0,we=oe.length;ge<we;ge++){let be=oe[ge];zp(_,w,be,be.viewport)}}else D.length>0&&Hp(k,D,w,L),Ne&&he.render(w),zp(_,w,L);E!==null&&(T.updateMultisampleRenderTarget(E),T.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,L),Qe.resetDefaultState(),R=-1,H=null,g.pop(),g.length>0?(p=g[g.length-1],X===!0&&ee.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Gc(w,L,B,k){if(w.visible===!1)return;if(w.layers.test(L.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(L);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||He.intersectsSprite(w)){k&&ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(se);let ge=J.update(w),we=w.material;we.visible&&_.push(w,ge,we,B,ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||He.intersectsObject(w))){let ge=J.update(w),we=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ve.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ve.copy(ge.boundingSphere.center)),ve.applyMatrix4(w.matrixWorld).applyMatrix4(se)),Array.isArray(we)){let be=ge.groups;for(let Be=0,ze=be.length;Be<ze;Be++){let Re=be[Be],nt=we[Re.materialIndex];nt&&nt.visible&&_.push(w,ge,nt,B,ve.z,Re)}}else we.visible&&_.push(w,ge,we,B,ve.z,null)}}let oe=w.children;for(let ge=0,we=oe.length;ge<we;ge++)Gc(oe[ge],L,B,k)}function zp(w,L,B,k){let D=w.opaque,oe=w.transmissive,ge=w.transparent;p.setupLightsView(B),X===!0&&ee.setGlobalState(v.clippingPlanes,B),k&&Se.viewport(y.copy(k)),D.length>0&&ga(D,L,B),oe.length>0&&ga(oe,L,B),ge.length>0&&ga(ge,L,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Hp(w,L,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Ti(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?ua:bi,minFilter:Hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let oe=p.state.transmissionRenderTarget[k.id],ge=k.viewport||y;oe.setSize(ge.z,ge.w);let we=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(O),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Ne&&he.render(B);let be=v.toneMapping;v.toneMapping=or;let Be=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),X===!0&&ee.setGlobalState(v.clippingPlanes,k),ga(w,B,k),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Re=0,nt=L.length;Re<nt;Re++){let at=L[Re],gt=at.object,on=at.geometry,$e=at.material,Pe=at.group;if($e.side===Mi&&gt.layers.test(k.layers)){let Lt=$e.side;$e.side=sn,$e.needsUpdate=!0,Vp(gt,B,k,on,$e,Pe),$e.side=Lt,$e.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}v.setRenderTarget(we),v.setClearColor(O,G),Be!==void 0&&(k.viewport=Be),v.toneMapping=be}function ga(w,L,B){let k=L.isScene===!0?L.overrideMaterial:null;for(let D=0,oe=w.length;D<oe;D++){let ge=w[D],we=ge.object,be=ge.geometry,Be=k===null?ge.material:k,ze=ge.group;we.layers.test(B.layers)&&Vp(we,L,B,be,Be,ze)}}function Vp(w,L,B,k,D,oe){w.onBeforeRender(v,L,B,k,D,oe),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),D.onBeforeRender(v,L,B,k,w,oe),D.transparent===!0&&D.side===Mi&&D.forceSinglePass===!1?(D.side=sn,D.needsUpdate=!0,v.renderBufferDirect(B,L,k,D,w,oe),D.side=ar,D.needsUpdate=!0,v.renderBufferDirect(B,L,k,D,w,oe),D.side=Mi):v.renderBufferDirect(B,L,k,D,w,oe),w.onAfterRender(v,L,B,k,D,oe)}function va(w,L,B){L.isScene!==!0&&(L=Ae);let k=Ce.get(w),D=p.state.lights,oe=p.state.shadowsArray,ge=D.state.version,we=Ee.getParameters(w,D.state,oe,L,B),be=Ee.getProgramCacheKey(we),Be=k.programs;k.environment=w.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(w.isMeshStandardMaterial?U:S).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?L.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",Ke),Be=new Map,k.programs=Be);let ze=Be.get(be);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===ge)return Wp(w,we),ze}else we.uniforms=Ee.getUniforms(w),w.onBeforeCompile(we,v),ze=Ee.acquireProgram(we,be),Be.set(be,ze),k.uniforms=we.uniforms;let Re=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=ee.uniform),Wp(w,we),k.needsLights=Mx(w),k.lightsStateVersion=ge,k.needsLights&&(Re.ambientLightColor.value=D.state.ambient,Re.lightProbe.value=D.state.probe,Re.directionalLights.value=D.state.directional,Re.directionalLightShadows.value=D.state.directionalShadow,Re.spotLights.value=D.state.spot,Re.spotLightShadows.value=D.state.spotShadow,Re.rectAreaLights.value=D.state.rectArea,Re.ltc_1.value=D.state.rectAreaLTC1,Re.ltc_2.value=D.state.rectAreaLTC2,Re.pointLights.value=D.state.point,Re.pointLightShadows.value=D.state.pointShadow,Re.hemisphereLights.value=D.state.hemi,Re.directionalShadowMap.value=D.state.directionalShadowMap,Re.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Re.spotShadowMap.value=D.state.spotShadowMap,Re.spotLightMatrix.value=D.state.spotLightMatrix,Re.spotLightMap.value=D.state.spotLightMap,Re.pointShadowMap.value=D.state.pointShadowMap,Re.pointShadowMatrix.value=D.state.pointShadowMatrix),k.currentProgram=ze,k.uniformsList=null,ze}function Gp(w){if(w.uniformsList===null){let L=w.currentProgram.getUniforms();w.uniformsList=Gs.seqWithValue(L.seq,w.uniforms)}return w.uniformsList}function Wp(w,L){let B=Ce.get(w);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function _x(w,L,B,k,D){L.isScene!==!0&&(L=Ae),T.resetTextureUnits();let oe=L.fog,ge=k.isMeshStandardMaterial?L.environment:null,we=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:ur,be=(k.isMeshStandardMaterial?U:S).get(k.envMap||ge),Be=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ze=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Re=!!B.morphAttributes.position,nt=!!B.morphAttributes.normal,at=!!B.morphAttributes.color,gt=or;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(gt=v.toneMapping);let on=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$e=on!==void 0?on.length:0,Pe=Ce.get(k),Lt=p.state.lights;if(X===!0&&(K===!0||w!==H)){let yn=w===H&&k.id===R;ee.setState(k,w,yn)}let et=!1;k.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Lt.state.version||Pe.outputColorSpace!==we||D.isBatchedMesh&&Pe.batching===!1||!D.isBatchedMesh&&Pe.batching===!0||D.isBatchedMesh&&Pe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Pe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Pe.instancing===!1||!D.isInstancedMesh&&Pe.instancing===!0||D.isSkinnedMesh&&Pe.skinning===!1||!D.isSkinnedMesh&&Pe.skinning===!0||D.isInstancedMesh&&Pe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Pe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Pe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Pe.instancingMorph===!1&&D.morphTexture!==null||Pe.envMap!==be||k.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ee.numPlanes||Pe.numIntersection!==ee.numIntersection)||Pe.vertexAlphas!==Be||Pe.vertexTangents!==ze||Pe.morphTargets!==Re||Pe.morphNormals!==nt||Pe.morphColors!==at||Pe.toneMapping!==gt||Pe.morphTargetsCount!==$e)&&(et=!0):(et=!0,Pe.__version=k.version);let In=Pe.currentProgram;et===!0&&(In=va(k,L,D));let Jr=!1,an=!1,Wc=!1,yt=In.getUniforms(),Ri=Pe.uniforms;if(Se.useProgram(In.program)&&(Jr=!0,an=!0,Wc=!0),k.id!==R&&(R=k.id,an=!0),Jr||H!==w){Oe.reverseDepthBuffer?(ce.copy(w.projectionMatrix),B1(ce),k1(ce),yt.setValue(C,"projectionMatrix",ce)):yt.setValue(C,"projectionMatrix",w.projectionMatrix),yt.setValue(C,"viewMatrix",w.matrixWorldInverse);let yn=yt.map.cameraPosition;yn!==void 0&&yn.setValue(C,pe.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&yt.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&yt.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),H!==w&&(H=w,an=!0,Wc=!0)}if(D.isSkinnedMesh){yt.setOptional(C,D,"bindMatrix"),yt.setOptional(C,D,"bindMatrixInverse");let yn=D.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),yt.setValue(C,"boneTexture",yn.boneTexture,T))}D.isBatchedMesh&&(yt.setOptional(C,D,"batchingTexture"),yt.setValue(C,"batchingTexture",D._matricesTexture,T),yt.setOptional(C,D,"batchingIdTexture"),yt.setValue(C,"batchingIdTexture",D._indirectTexture,T),yt.setOptional(C,D,"batchingColorTexture"),D._colorsTexture!==null&&yt.setValue(C,"batchingColorTexture",D._colorsTexture,T));let Xc=B.morphAttributes;if((Xc.position!==void 0||Xc.normal!==void 0||Xc.color!==void 0)&&de.update(D,B,In),(an||Pe.receiveShadow!==D.receiveShadow)&&(Pe.receiveShadow=D.receiveShadow,yt.setValue(C,"receiveShadow",D.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ri.envMap.value=be,Ri.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(Ri.envMapIntensity.value=L.environmentIntensity),an&&(yt.setValue(C,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&Sx(Ri,Wc),oe&&k.fog===!0&&ue.refreshFogUniforms(Ri,oe),ue.refreshMaterialUniforms(Ri,k,Z,F,p.state.transmissionRenderTarget[w.id]),Gs.upload(C,Gp(Pe),Ri,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Gs.upload(C,Gp(Pe),Ri,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&yt.setValue(C,"center",D.center),yt.setValue(C,"modelViewMatrix",D.modelViewMatrix),yt.setValue(C,"normalMatrix",D.normalMatrix),yt.setValue(C,"modelMatrix",D.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let yn=k.uniformsGroups;for(let qc=0,Ax=yn.length;qc<Ax;qc++){let Xp=yn[qc];I.update(Xp,In),I.bind(Xp,In)}}return In}function Sx(w,L){w.ambientLightColor.needsUpdate=L,w.lightProbe.needsUpdate=L,w.directionalLights.needsUpdate=L,w.directionalLightShadows.needsUpdate=L,w.pointLights.needsUpdate=L,w.pointLightShadows.needsUpdate=L,w.spotLights.needsUpdate=L,w.spotLightShadows.needsUpdate=L,w.rectAreaLights.needsUpdate=L,w.hemisphereLights.needsUpdate=L}function Mx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,L,B){Ce.get(w.texture).__webglTexture=L,Ce.get(w.depthTexture).__webglTexture=B;let k=Ce.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,L){let B=Ce.get(w);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(w,L=0,B=0){E=w,P=L,b=B;let k=!0,D=null,oe=!1,ge=!1;if(w){let be=Ce.get(w);if(be.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(be.__hasExternalTextures)T.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Re=w.depthTexture;if(be.__boundDepthTexture!==Re){if(Re!==null&&Ce.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}let Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ge=!0);let ze=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[L])?D=ze[L][B]:D=ze[L],oe=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?D=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?D=ze[B]:D=ze,y.copy(w.viewport),A.copy(w.scissor),N=w.scissorTest}else y.copy(te).multiplyScalar(Z).floor(),A.copy(le).multiplyScalar(Z).floor(),N=Me;if(Se.bindFramebuffer(C.FRAMEBUFFER,D)&&k&&Se.drawBuffers(w,D),Se.viewport(y),Se.scissor(A),Se.setScissorTest(N),oe){let be=Ce.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+L,be.__webglTexture,B)}else if(ge){let be=Ce.get(w.texture),Be=L||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,be.__webglTexture,B||0,Be)}R=-1},this.readRenderTargetPixels=function(w,L,B,k,D,oe,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){Se.bindFramebuffer(C.FRAMEBUFFER,we);try{let be=w.texture,Be=be.format,ze=be.type;if(!Oe.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=w.width-k&&B>=0&&B<=w.height-D&&C.readPixels(L,B,k,D,De.convert(Be),De.convert(ze),oe)}finally{let be=E!==null?Ce.get(E).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,L,B,k,D,oe,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){let be=w.texture,Be=be.format,ze=be.type;if(!Oe.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=w.width-k&&B>=0&&B<=w.height-D){Se.bindFramebuffer(C.FRAMEBUFFER,we);let Re=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.bufferData(C.PIXEL_PACK_BUFFER,oe.byteLength,C.STREAM_READ),C.readPixels(L,B,k,D,De.convert(Be),De.convert(ze),0);let nt=E!==null?Ce.get(E).__webglFramebuffer:null;Se.bindFramebuffer(C.FRAMEBUFFER,nt);let at=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await O1(C,at,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Re),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,oe),C.deleteBuffer(Re),C.deleteSync(at),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,L=null,B=0){w.isTexture!==!0&&(fc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,w=arguments[1]);let k=Math.pow(2,-B),D=Math.floor(w.image.width*k),oe=Math.floor(w.image.height*k),ge=L!==null?L.x:0,we=L!==null?L.y:0;T.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,ge,we,D,oe),Se.unbindTexture()},this.copyTextureToTexture=function(w,L,B=null,k=null,D=0){w.isTexture!==!0&&(fc("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],L=arguments[2],D=arguments[3]||0,B=null);let oe,ge,we,be,Be,ze;B!==null?(oe=B.max.x-B.min.x,ge=B.max.y-B.min.y,we=B.min.x,be=B.min.y):(oe=w.image.width,ge=w.image.height,we=0,be=0),k!==null?(Be=k.x,ze=k.y):(Be=0,ze=0);let Re=De.convert(L.format),nt=De.convert(L.type);T.setTexture2D(L,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let at=C.getParameter(C.UNPACK_ROW_LENGTH),gt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),on=C.getParameter(C.UNPACK_SKIP_PIXELS),$e=C.getParameter(C.UNPACK_SKIP_ROWS),Pe=C.getParameter(C.UNPACK_SKIP_IMAGES),Lt=w.isCompressedTexture?w.mipmaps[D]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,we),C.pixelStorei(C.UNPACK_SKIP_ROWS,be),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,Be,ze,oe,ge,Re,nt,Lt.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,Be,ze,Lt.width,Lt.height,Re,Lt.data):C.texSubImage2D(C.TEXTURE_2D,D,Be,ze,oe,ge,Re,nt,Lt),C.pixelStorei(C.UNPACK_ROW_LENGTH,at),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,gt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,on),C.pixelStorei(C.UNPACK_SKIP_ROWS,$e),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pe),D===0&&L.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,L,B=null,k=null,D=0){w.isTexture!==!0&&(fc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,w=arguments[2],L=arguments[3],D=arguments[4]||0);let oe,ge,we,be,Be,ze,Re,nt,at,gt=w.isCompressedTexture?w.mipmaps[D]:w.image;B!==null?(oe=B.max.x-B.min.x,ge=B.max.y-B.min.y,we=B.max.z-B.min.z,be=B.min.x,Be=B.min.y,ze=B.min.z):(oe=gt.width,ge=gt.height,we=gt.depth,be=0,Be=0,ze=0),k!==null?(Re=k.x,nt=k.y,at=k.z):(Re=0,nt=0,at=0);let on=De.convert(L.format),$e=De.convert(L.type),Pe;if(L.isData3DTexture)T.setTexture3D(L,0),Pe=C.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)T.setTexture2DArray(L,0),Pe=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,L.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,L.unpackAlignment);let Lt=C.getParameter(C.UNPACK_ROW_LENGTH),et=C.getParameter(C.UNPACK_IMAGE_HEIGHT),In=C.getParameter(C.UNPACK_SKIP_PIXELS),Jr=C.getParameter(C.UNPACK_SKIP_ROWS),an=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,gt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,gt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,be),C.pixelStorei(C.UNPACK_SKIP_ROWS,Be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Pe,D,Re,nt,at,oe,ge,we,on,$e,gt.data):L.isCompressedArrayTexture?C.compressedTexSubImage3D(Pe,D,Re,nt,at,oe,ge,we,on,gt.data):C.texSubImage3D(Pe,D,Re,nt,at,oe,ge,we,on,$e,gt),C.pixelStorei(C.UNPACK_ROW_LENGTH,Lt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et),C.pixelStorei(C.UNPACK_SKIP_PIXELS,In),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,an),D===0&&L.generateMipmaps&&C.generateMipmap(Pe),Se.unbindTexture()},this.initRenderTarget=function(w){Ce.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){P=0,b=0,E=null,Se.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===hp?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===Uc?"display-p3":"srgb"}};var Lc=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ci,this.environmentIntensity=1,this.environmentRotation=new Ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};function ac(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Nb(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var js=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jf=class extends js{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Iv,endingEnd:Iv}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lv:s=e,a=2*n-i;break;case Dv:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lv:o=e,l=2*i-n;break;case Dv:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,x=(i-n)/(r-n),_=x*x,p=_*x,u=-d*p+2*d*_-d*x,g=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*x+1,v=(-1-m)*p+(1.5+m)*_+.5*x,M=m*p-m*_;for(let P=0;P!==a;++P)s[P]=u*o[h+P]+g*o[c+P]+v*o[l+P]+M*o[f+P];return s}},Kf=class extends js{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*h;return s}},Zf=class extends js{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qn=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ac(n,this.TimeBufferType),this.values=ac(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:ac(e.times,Array),values:ac(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case pc:n=this.InterpolantFactoryMethodDiscrete;break;case Rf:n=this.InterpolantFactoryMethodLinear;break;case fd:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pc;case this.InterpolantFactoryMethodLinear:return Rf;case this.InterpolantFactoryMethodSmooth:return fd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Nb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===fd,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(r)l=!0;else{let f=a*i,d=f-i,m=f+i;for(let x=0;x!==i;++x){let _=n[f+x];if(_!==n[d+x]||_!==n[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,d=o*i;for(let m=0;m!==i;++m)n[d+m]=n[f+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Rf;var Xr=class extends qn{constructor(e,n,i){super(e,n,i)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=pc;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Qf=class extends qn{};Qf.prototype.ValueTypeName="color";var jf=class extends qn{};jf.prototype.ValueTypeName="number";var $f=class extends js{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let h=c+a;c!==h;c+=4)cr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Dc=class extends qn{InterpolantFactoryMethodLinear(e){return new $f(this.times,this.values,this.getValueSize(),e)}};Dc.prototype.ValueTypeName="quaternion";Dc.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends qn{constructor(e,n,i){super(e,n,i)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=pc;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var ep=class extends qn{};ep.prototype.ValueTypeName="vector";var tp=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},Ub=new tp,np=class{constructor(e){this.manager=e!==void 0?e:Ub,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};np.DEFAULT_MATERIAL_NAME="__DEFAULT";var fp="\\[\\]\\.:\\/",Fb=new RegExp("["+fp+"]","g"),pp="[^"+fp+"]",Ob="[^"+fp.replace("\\.","")+"]",Bb=/((?:WC+[\/:])*)/.source.replace("WC",pp),kb=/(WCOD+)?/.source.replace("WCOD",Ob),zb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pp),Hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pp),Vb=new RegExp("^"+Bb+kb+zb+Hb+"$"),Gb=["material","materials","bones","map"],ip=class{constructor(e,n,i){let r=i||dt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},dt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fb,"")}static parseTrackName(e){let n=Vb.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Gb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=ip;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kT=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);var Xy={name:"pixels-mechanic",modes:{dark:{theme:"dark",effectIndex:11,colors:["#949494","#2d2d2d","#333333","#3a3a3a","#0b0b0b","#060606","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.7,intensity:1,scale:1.4,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"},light:{theme:"light",effectIndex:11,colors:["#e0e0e0","#fdfdfd","#f2f2f2","#0a0a0a","#dcdcdc","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.55,intensity:.85,scale:.9,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor3",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Nebula"}}};var qy={name:"pixels-organic",modes:{dark:{theme:"dark",effectIndex:22,colors:["#0f0f0f","#4a4949","#b9b9b9","#0f0f0f","#d8d8d8","#0f0f0f","#2f2f2f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:.3,intensity:1,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.2,vignette:.26,vigOpacity:1,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"},light:{theme:"light",effectIndex:22,colors:["#e3e3e3","#ffffff","#f5f5f5","#f5f5f5","#080808","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:25,speed:.3,intensity:.85,scale:1,softness:.76,distortion:.3,complexity:.2,shape:.52,blur:1,highlight:.7,vignette:0,vigOpacity:0,shaderOpacity:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"shaderColor4",softness:.5,blur:0,pixDuration:2.55,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Chromium Flow"}}};var Yy={name:"sweep-gradient",modes:{dark:{theme:"dark",effectIndex:25,colors:["#0f0f0f","#0f0f0f","#282828","#3a3a3a","#525252","#0f0f0f","#0f0f0f"],alphas:[1,1,1,1,1,1,1],cardBg:"#0f0f0f",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.44,edgeFade:24,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:1,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.32,vignette:.26,vigOpacity:1,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.65,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"},light:{theme:"light",effectIndex:25,colors:["#f5f5f5","#f5f5f5","#ededed","#eaeaea","#d2d2d2","#f5f5f5","#f5f5f5"],alphas:[1,1,1,1,1,1,1],cardBg:"#f5f5f5",dotMode:1,pixelConfig:{cellSize:.22,gap:.14,dotOpacity:.68,dotSize:.8,dotSoftness:.1,hlScale:.8,fillOpacity:.18,edgeFade:20,fadeStr:1},dotConfig:{cellSize:.58,gap:0,dotOpacity:1,dotSize:.22,dotSoftness:.1,hlScale:.26,fillOpacity:0,edgeFade:34,fadeStr:.34},direction:0,speed:2.65,intensity:.85,scale:1,softness:.76,distortion:.3,flicker:.5,complexity:.2,shape:.52,blur:1,highlight:.92,vignette:0,vigOpacity:0,shaderOpacity:1,sweepEase:1,revealConfig:{duration:3,easing:"easeOutCubic",maskShape:"gradientSweep",softness:.5,blur:0,pixDuration:2.6,pixEasing:"easeOutCubic",dotDuration:2.05,dotEasing:"easeOutCubic"},effect:"Gradient Sweep"}}};var Xb={"pixels-organic":qy,"pixels-mechanic":Xy,"sweep-gradient":Yy},Oc=Xb;var da;function qb(){if(da!==void 0)return da;if(typeof document>"u")return da=null,null;let t=document.createElement("canvas");return t.width=1,t.height=1,da=t.getContext("2d"),da}function ni(t){if(typeof t!="string"||t.length===0)return[0,0,0];if(t[0]==="#"){let o=t.slice(1);if(o.length===3&&(o=o[0]+o[0]+o[1]+o[1]+o[2]+o[2]),(o.length===6||o.length===8)&&/^[0-9a-fA-F]+$/.test(o))return[parseInt(o.slice(0,2),16)/255,parseInt(o.slice(2,4),16)/255,parseInt(o.slice(4,6),16)/255]}let e=qb();if(!e)return[0,0,0];e.fillStyle="#000000",e.fillStyle=t;let n=e.fillStyle;e.fillStyle="#ffffff",e.fillStyle=t;let i=e.fillStyle;if(n!==i)return[0,0,0];let r=n;if(r[0]==="#")return[parseInt(r.slice(1,3),16)/255,parseInt(r.slice(3,5),16)/255,parseInt(r.slice(5,7),16)/255];let s=r.match(/^rgba?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)/);if(s){let o=a=>Math.max(0,Math.min(255,a))/255;return[o(parseFloat(s[1])),o(parseFloat(s[2])),o(parseFloat(s[3]))]}return[0,0,0]}var Jy=`
  void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ky=`
  uniform vec2 u_resolution;
  uniform float u_dpr;
  uniform float u_time;
  uniform vec3 u_color1, u_color2, u_color3, u_color4, u_color5, u_color6, u_color7, u_cardBg;
  uniform float u_alpha1, u_alpha2, u_alpha3, u_alpha4, u_alpha5, u_alpha6, u_alpha7;
  uniform float u_speed, u_intensity, u_scale, u_direction;
  uniform float u_softness, u_distortion, u_complexity, u_shape, u_flicker;
  uniform float u_vignette, u_vigOpacity, u_blur, u_highlight, u_shaderOpacity;
  uniform float u_cellSize, u_gap, u_dotSize, u_dotSoftness, u_dotOpacity, u_hlScale, u_fillOpacity, u_edgeFade, u_fadeStr;
  uniform float u_dotMode;
  uniform int u_effect;
  uniform int u_sweepEase;

  // Reference card edge length (CSS px) at which the original preset cellSize
  // gives the canonical cell count. Cell PIXEL size stays constant across card
  // sizes by scaling gridSize proportionally to (currentCssDim / REF_DIM).
  const float REF_DIM = 320.0;

  /** Anisotropic cell count: returns the number of cells along x and y so that
   *  each cell stays SQUARE in screen space regardless of the card's aspect
   *  ratio. A 600\xD7300 card gets twice as many cells horizontally as vertically;
   *  cells stay the same physical size as on a 300\xD7300 card. */
  vec2 gridCounts(float baseCount) {
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    return max(vec2(2.0), floor(baseCount * cssRes / REF_DIM));
  }

  vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec2 mod289v2(vec2 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289((x * 34.0 + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289v2(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x_ = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x_) - 0.5;
    vec3 ox = floor(x_ + 0.5);
    vec3 a0 = x_ - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p, float oct) {
    float val = 0.0, amp = 0.5;
    int n = int(oct);
    for (int i = 0; i < 4; i++) {
      if (i >= n) break;
      val += amp * snoise(p);
      p *= 2.0;
      amp *= 0.5;
    }
    return val;
  }

  float nfbm(vec2 p) { return fbm(p, 2.0 + u_complexity * 2.0); }

  vec3 palette(float t) {
    t = clamp(t, 0.0, 1.0);
    t = t * t * (3.0 - 2.0 * t);
    float k = 64.0;
    float w1 = u_alpha1 * exp(-k * t * t);
    float w2 = u_alpha2 * exp(-k * (t - 0.25) * (t - 0.25));
    float w3 = u_alpha3 * exp(-k * (t - 0.5)  * (t - 0.5));
    float w4 = u_alpha4 * exp(-k * (t - 0.75) * (t - 0.75));
    float w5 = u_alpha5 * exp(-k * (t - 1.0)  * (t - 1.0));
    float total = w1 + w2 + w3 + w4 + w5 + 0.0001;
    return (u_color1*w1 + u_color2*w2 + u_color3*w3 + u_color4*w4 + u_color5*w5) / total;
  }

  vec3 softBlend(float a, float b, float c) {
    a = clamp(a, 0.0, 1.0); a *= a;
    b = clamp(b, 0.0, 1.0); b *= b;
    c = clamp(c, 0.0, 1.0); c *= c;
    float d = clamp(a * 0.7 + c * 0.3, 0.0, 1.0); d *= d;
    float e = clamp(b * 0.5 + c * 0.5, 0.0, 1.0); e *= e;
    a *= u_alpha1; b *= u_alpha2; c *= u_alpha3; d *= u_alpha4; e *= u_alpha5;
    float total = a + b + c + d + e;
    float floorW = max(0.001 - total, 0.0);
    vec3 fallback = (u_color1 + u_color2 + u_color3 + u_color4 + u_color5) * 0.2;
    return (u_color1 * a + u_color2 * b + u_color3 * c + u_color4 * d + u_color5 * e + fallback * floorW) / (total + floorW);
  }

  vec2 warp(vec2 p, float t) {
    float str = u_distortion * 2.0;
    return vec2(
      nfbm(p + vec2(t * 0.1, 0.0)),
      nfbm(p + vec2(0.0, t * 0.12) + 5.0)
    ) * str;
  }

  float sweepEase(float x) {
    if (u_sweepEase == 1) return x * x * (3.0 - 2.0 * x);
    if (u_sweepEase == 2) {
      float p = 1.0 - x;
      return 1.0 - p * p * p;
    }
    if (u_sweepEase == 3) {
      return x < 0.5 ? 4.0 * x * x * x : 1.0 - pow(-2.0 * x + 2.0, 3.0) * 0.5;
    }
    if (u_sweepEase == 4) return 1.0 - pow(2.0, -10.0 * x) * (1.0 - x);
    return x;
  }

  float blob(vec2 p, vec2 center, float radius) {
    float r = radius * (0.5 + u_shape * 0.8);
    float soft = 0.05 + u_softness * 0.4;
    return smoothstep(r + soft, r - soft * 0.5, length(p - center));
  }

  vec3 computeEffect(vec2 uv, float aspect, float t, float dist, float soft, float cpx, float shp) {
    vec2 p = (uv - 0.5) * u_scale;
    p.x *= aspect;
    p += vec2(cos(u_direction), sin(u_direction)) * t * 0.15;
    vec3 col = vec3(0.0);

    if (u_effect == 0) {
      float val = sin(p.x * 3.0 + t) * 0.5 + 0.5;
      val += sin(p.y * 2.0 + t * 0.7) * 0.3;
      val += sin((p.x + p.y) * (1.0 + cpx * 3.0) - t * 0.5) * 0.2;
      vec2 w = warp(p, t);
      val += (w.x + w.y) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 1) {
      float freq = 3.0 + cpx * 8.0;
      float val = 0.0;
      val += sin(p.x * freq + t);
      val += sin(p.y * freq + t * 1.3);
      val += sin((p.x + p.y) * freq * 0.7 + t * 0.7);
      val += sin(length(p) * freq * 0.8 - t * 1.5);
      vec2 w = warp(p, t);
      val += (w.x + w.y) * dist;
      val = val * 0.2 * u_intensity + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 2) {
      vec2 q = vec2(nfbm(p + t * 0.3), nfbm(p + vec2(5.2, 1.3) + t * 0.2));
      float val = nfbm(p + q * (1.0 + dist * 3.0) + t * 0.1);
      val = val * u_intensity * 0.5 + 0.5;
      col = palette(clamp(val, 0.0, 1.0));

    } else if (u_effect == 3) {
      float d = length(p);
      float val = sin(d * (3.0 + cpx * 6.0) - t * 2.0) * 0.5 + 0.5;
      val *= exp(-d * (0.3 + shp * 1.0));
      val += sin(atan(p.y, p.x) * (1.5 + cpx * 2.0) + t) * 0.15;
      col = palette(clamp(val * u_intensity, 0.0, 1.0));

    } else if (u_effect == 4) {
      vec2 q = vec2(nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.12, t * 0.08)), nfbm(p * (0.5 + shp * 0.6) + vec2(t * 0.09, -t * 0.11)));
      vec2 r = vec2(nfbm(p + q * (1.0 + dist * 2.0) + vec2(1.7, 9.2) + t * 0.06), nfbm(p + q * (1.0 + dist * 2.0) + vec2(8.3, 2.8) - t * 0.08));
      float val = nfbm(p + r * 2.0);
      float lo = -0.3 - soft * 0.5;
      float hi = 0.5 + soft * 0.5;
      val = smoothstep(lo, hi, val * u_intensity);
      col = palette(val);

    } else if (u_effect == 5) {
      float n1 = nfbm(vec2(p.x * 0.5 + t * 0.15, p.y * (1.0 + cpx * 1.5)));
      float n2 = nfbm(vec2(p.x * 0.3 - t * 0.1, p.y * (0.8 + cpx * 1.0) + 3.0));
      float band = sin(p.y * 3.0 + n1 * (1.0 + dist * 2.0) + t * 0.3) * 0.5 + 0.5;
      float shimmer = sin(p.y * 4.0 + n2 * 1.5 - t * 0.2) * 0.5 + 0.5;
      float w1 = band * (0.5 + 0.5 * sin(p.x * 1.5 + t * 0.2 + n1));
      float w2 = shimmer * (0.5 + 0.5 * cos(p.x * 1.0 - t * 0.15 + n2));
      float w3 = nfbm(p * 0.5 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(w1 * u_intensity, w2 * u_intensity, w3 * 0.6 * u_intensity);

    } else if (u_effect == 6) {
      vec2 wp = warp(p * 1.2, t);
      float blobR = 0.15 + shp * 0.2;
      float b1 = blob(p, vec2(sin(t * 0.3) * 0.3, cos(t * 0.2) * 0.4) + wp * 0.2, blobR);
      float b2 = blob(p, vec2(cos(t * 0.25) * 0.4, sin(t * 0.35) * 0.3 - 0.2) + wp * 0.15, blobR * 1.2);
      float b3 = blob(p, vec2(-sin(t * 0.2) * 0.3, -cos(t * 0.3) * 0.35) + wp * 0.18, blobR);
      float bg = nfbm(p * 0.5 + t * 0.05) * 0.3 + 0.15;
      col = softBlend((b1 + bg * 0.5) * u_intensity, (b2 + bg * 0.3) * u_intensity, (b3 + bg * 0.4) * u_intensity);

    } else if (u_effect == 7) {
      float sz = 0.4 + shp * 0.6;
      float sigma = sz * sz * 2.0;
      vec2 a1 = vec2(-0.45 + sin(t * 0.07) * 0.06, 0.45 + cos(t * 0.09) * 0.05);
      vec2 a2 = vec2(0.45 + cos(t * 0.08) * 0.06, 0.45 + sin(t * 0.06) * 0.05);
      vec2 a3 = vec2(0.0 + sin(t * 0.05) * 0.1, 0.0 + cos(t * 0.07) * 0.1);
      vec2 a4 = vec2(-0.4 + cos(t * 0.06) * 0.07, -0.3 + sin(t * 0.08) * 0.06);
      vec2 a5 = vec2(0.4 + sin(t * 0.07) * 0.06, -0.4 + cos(t * 0.05) * 0.06);
      float g1 = exp(-dot(p - a1, p - a1) / sigma);
      float g2 = exp(-dot(p - a2, p - a2) / sigma);
      float g3 = exp(-dot(p - a3, p - a3) / sigma);
      float g4 = exp(-dot(p - a4, p - a4) / sigma);
      float g5 = exp(-dot(p - a5, p - a5) / sigma);
      float nudge = dist > 0.01 ? snoise(p * (0.5 + cpx) + t * 0.04) * dist * 0.08 : 0.0;
      float w1 = (g1 + g4 + nudge) * u_intensity;
      float w2 = (g2 + g5 + nudge) * u_intensity;
      float w3 = (g3 + nudge) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 8) {
      vec2 w1 = vec2(nfbm(p * (0.7 + cpx * 0.5) + t * 0.1), nfbm(p * (0.7 + cpx * 0.5) + vec2(3.3, 7.7) + t * 0.08));
      vec2 w2 = vec2(nfbm(p * 0.6 + w1 * (1.0 + dist) + t * 0.06), nfbm(p * 0.6 + w1 * (1.0 + dist) + vec2(1.7, 4.2) - t * 0.07));
      float f1 = nfbm(p + w2 * 1.5);
      float f2 = nfbm(p + w2 * 1.5 + vec2(4.1, 2.3));
      float f3 = nfbm(p + w2 * 1.5 + vec2(7.5, 6.1));
      col = softBlend((f1 * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (f3 * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 9) {
      vec2 sw = vec2(sin(p.y * 2.0 + t * 0.3) * 0.15 + snoise(p * 1.5 + t * 0.15) * dist * 0.3, cos(p.x * 1.8 + t * 0.25) * 0.15 + snoise(p * 1.5 + vec2(5.0, 0.0) + t * 0.12) * dist * 0.3);
      vec2 wp = p + sw;
      float caustic = (snoise(wp * (1.5 + cpx * 2.0) + t * 0.2) * 0.5 + 0.5) + (snoise(wp * (2.0 + cpx * 2.0) - t * 0.15) * 0.5 + 0.5) * 0.5;
      caustic = caustic / 1.5;
      float depth = nfbm(vec2(p.x * 0.3, p.y * 0.8) + t * 0.05) * 0.5 + 0.5;
      col = softBlend(depth * u_intensity, (1.0 - depth) * u_intensity, caustic * u_intensity);

    } else if (u_effect == 10) {
      float angle = 0.6 + shp * 1.2;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float n1 = nfbm(rp * 0.8 + t * 0.12) * (1.0 + dist * 2.0);
      float n2 = nfbm(rp * 0.6 + vec2(3.0, 0.0) + t * 0.1) * (1.0 + dist * 1.5);
      float wave = sin(rp.x * (2.0 + cpx * 2.0) + n1 + t * 0.3);
      float wave2 = sin(rp.x * (1.5 + cpx * 1.5) + n2 - t * 0.2);
      float ribbon1 = exp(-2.0 * (rp.y - wave * 0.35) * (rp.y - wave * 0.35)) * u_intensity;
      float ribbon2 = exp(-2.0 * (rp.y - 0.15 - wave2 * 0.3) * (rp.y - 0.15 - wave2 * 0.3)) * u_intensity;
      float bg = nfbm(p * 0.4 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(ribbon1, ribbon2, bg * 0.5 * u_intensity);

    } else if (u_effect == 11) {
      vec2 q = vec2(nfbm(p * 0.5 + vec2(t * 0.05, 0.0)), nfbm(p * 0.5 + vec2(0.0, t * 0.07)));
      vec2 r = vec2(nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(1.7, 9.2) + t * 0.03), nfbm(p * 0.6 + q * (1.0 + dist * 1.5) + vec2(8.3, 2.8) + t * 0.04));
      float f = nfbm(p + r * 1.5);
      float f2 = nfbm(p * 0.7 + r + vec2(3.0, 7.0));
      col = softBlend((f * 0.5 + 0.5) * u_intensity, (f2 * 0.5 + 0.5) * u_intensity, (nfbm(p * 0.4 - t * 0.02) * 0.5 + 0.5) * u_intensity);

    } else if (u_effect == 12) {
      vec2 w = warp(p * 0.5, t * 0.7);
      float fold1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * 1.5 + t * 0.2) * 0.5 + 0.5;
      float fold2 = sin(p.y * (1.2 + cpx * 1.5) + w.y * 1.5 - t * 0.15) * 0.5 + 0.5;
      float fold3 = sin((p.x - p.y) * (0.8 + cpx * 0.8) + (w.x + w.y) + t * 0.1) * 0.5 + 0.5;
      col = softBlend(fold1 * u_intensity, fold2 * u_intensity, fold3 * 0.7 * u_intensity);

    } else if (u_effect == 13) {
      float spread = 0.25 + shp * 0.35;
      vec2 w = warp(p, t * 0.5);
      vec2 c1 = vec2(sin(t * 0.08) * spread, cos(t * 0.11) * spread) + w * 0.15;
      vec2 c2 = vec2(cos(t * 0.09) * spread * 1.3, sin(t * 0.07) * spread) + w * 0.12;
      vec2 c3 = vec2(-sin(t * 0.1) * spread, -cos(t * 0.08) * spread * 1.2) + w * 0.1;
      float falloff = 0.3 + soft * 0.7;
      float d1 = 1.0 - smoothstep(0.0, falloff, length(p - c1 + w * dist * 0.3));
      float d2 = 1.0 - smoothstep(0.0, falloff, length(p - c2 + w * dist * 0.25));
      float d3 = 1.0 - smoothstep(0.0, falloff, length(p - c3 + w * dist * 0.2));
      float detail = nfbm(p * 2.0 + t * 0.05) * cpx * 0.3;
      col = softBlend((d1 + detail) * u_intensity, (d2 + detail) * u_intensity, (d3 + detail) * u_intensity);

    } else if (u_effect == 14) {
      vec2 w = warp(p * 0.6, t * 0.6);
      float angle = atan(p.y + w.y * dist, p.x + w.x * dist);
      float radius = length(p);
      float field1 = sin(angle * (2.0 + cpx * 4.0) + radius * (3.0 + cpx * 3.0) + t * 0.4 + nfbm(p + t * 0.1) * dist * 2.0) * 0.5 + 0.5;
      float field2 = sin(angle * (1.5 + cpx * 2.5) - radius * 2.0 - t * 0.3 + nfbm(p * 0.6 + t * 0.08) * dist * 1.5) * 0.5 + 0.5;
      float bg = nfbm(p * 0.3 + t * 0.03) * 0.5 + 0.5;
      col = softBlend(field1 * u_intensity, field2 * u_intensity, bg * 0.5 * u_intensity);

    } else if (u_effect == 15) {
      vec2 drift = vec2(t * 0.06, t * 0.03);
      float c1 = nfbm((p + drift) * (0.4 + cpx * 0.5)) * 0.5 + 0.5;
      float c2 = nfbm((p + drift + vec2(3.7, 1.2)) * (0.35 + cpx * 0.4)) * 0.5 + 0.5;
      float c3 = nfbm((p + drift + vec2(7.1, 4.5)) * (0.3 + cpx * 0.35)) * 0.5 + 0.5;
      vec2 w = warp(p * 0.2, t * 0.4);
      c1 += w.x * dist * 0.3;
      c2 += w.y * dist * 0.25;
      col = softBlend(c1 * u_intensity, c2 * u_intensity, c3 * u_intensity);

    } else if (u_effect == 16) {
      vec2 w = warp(vec2(p.x * 0.3, p.y * 0.6), t * 0.5);
      float c1 = sin(p.x * (1.5 + cpx * 2.0) + w.x * (1.0 + dist * 2.0) + t * 0.15) * 0.5 + 0.5;
      float c2 = sin(p.x * (1.0 + cpx * 1.5) + w.y * (1.0 + dist * 1.5) - t * 0.12 + 2.0) * 0.5 + 0.5;
      float c3 = sin(p.x * (0.8 + cpx * 1.0) + (w.x + w.y) * 0.5 * (1.0 + dist) + t * 0.08 + 4.0) * 0.5 + 0.5;
      float fade = nfbm(vec2(p.x * 0.3, p.y * 0.5) + t * 0.03) * 0.5 + 0.5;
      col = softBlend(c1 * fade * u_intensity, c2 * fade * u_intensity, c3 * (1.0 - fade * 0.4) * u_intensity * 0.7);

    } else if (u_effect == 17) {
      vec2 w = warp(p * 0.8, t * 0.6);
      vec2 w2 = warp(p * 0.5 + w * 0.4, t * 0.4);
      float r1 = (snoise((p + w * dist * 0.5) * (1.5 + cpx * 2.0) + t * 0.1) * 0.5 + 0.5) * u_intensity;
      float r2 = (snoise((p + w2 * dist * 0.4) * (1.2 + cpx * 1.5) + t * 0.08 + 3.0) * 0.5 + 0.5) * u_intensity;
      float r3 = (snoise((p + (w + w2) * dist * 0.3) * (0.8 + cpx * 1.0) - t * 0.06 + 7.0) * 0.5 + 0.5) * u_intensity;
      col = softBlend(r1, r2, r3);

    } else if (u_effect == 18) {
      vec2 w = warp(p * 0.5, t * 0.5);
      float blobSize = 0.2 + shp * 0.3;
      float total1 = 0.0, total2 = 0.0;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        vec2 c1 = vec2(sin(t * 0.1 + fi * 2.1) * 0.4, cos(t * 0.13 + fi * 1.7) * 0.35) + w * dist * 0.15;
        vec2 c2 = vec2(cos(t * 0.12 + fi * 1.9) * 0.35, sin(t * 0.09 + fi * 2.3) * 0.4) + w * dist * 0.12;
        total1 += blobSize * blobSize / (dot(p - c1, p - c1) + 0.02);
        total2 += blobSize * blobSize / (dot(p - c2, p - c2) + 0.02);
      }
      total1 = clamp(total1 * 0.25, 0.0, 1.0);
      total2 = clamp(total2 * 0.25, 0.0, 1.0);
      float total3 = nfbm(p + w * dist * 0.3 + t * 0.05) * 0.5 + 0.5;
      col = softBlend(total1 * u_intensity, total2 * u_intensity, total3 * 0.7 * u_intensity);

    } else if (u_effect == 19) {
      vec2 w = warp(p * 0.4, t * 0.4);
      float angle = atan(p.y, p.x);
      float radius = length(p);
      float s1 = sin(angle * (1.5 + cpx * 2.0) + radius * (3.0 + cpx * 3.0) + t * 0.3 + w.x * dist * 1.5) * 0.5 + 0.5;
      float s2 = sin(angle * (1.2 + cpx * 1.5) - radius * (2.5 + cpx * 2.5) - t * 0.25 + w.y * dist * 1.5 + 1.5) * 0.5 + 0.5;
      float s3 = sin((angle + 3.14) * (0.8 + cpx) + radius * (2.0 + cpx * 2.0) + t * 0.15 + (w.x + w.y) * dist) * 0.5 + 0.5;
      float fade = exp(-radius * (0.5 - shp * 0.3));
      col = softBlend(s1 * fade * u_intensity, s2 * fade * u_intensity, s3 * fade * 0.7 * u_intensity);

    } else if (u_effect == 20) {
      vec2 w = warp(p * 0.5, t * 0.4);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float scale = 0.6 + cpx * 0.8;
      float h  = nfbm(wp * scale + t * 0.08);
      float eps = 0.06;
      float hx = nfbm((wp + vec2(eps, 0.0)) * scale + t * 0.08) - h;
      float hy = nfbm((wp + vec2(0.0, eps)) * scale + t * 0.08) - h;
      vec3 n = normalize(vec3(-hx * 6.0, -hy * 6.0, 1.0));
      vec3 lightDir = normalize(vec3(0.55, 0.65, 0.8));
      float light = max(dot(n, lightDir), 0.0);
      float spec = pow(light, 6.0 + shp * 26.0);
      float diffuse = light * 0.6 + 0.35;
      float fres = pow(1.0 - max(n.z, 0.0), 2.0);
      float w1 = (diffuse + spec * 0.5) * u_intensity;
      float w2 = (h * 0.5 + 0.5 + spec * 0.3 + fres * 0.3) * u_intensity;
      float w3 = (spec * 1.4 + fres * 0.5) * u_intensity;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 21) {
      vec2 w = warp(p * 0.4, t * 0.3);
      float angle = 0.2 + shp * 1.3;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      float band = sin(rp.y * (3.0 + cpx * 5.0) + w.x * (1.0 + dist * 2.5) + t * 0.35);
      float ridge = 1.0 - abs(band);
      ridge = pow(ridge, 5.0 + shp * 10.0);
      float band2 = sin(rp.y * (2.0 + cpx * 3.0) + w.y * (0.8 + dist * 2.0) - t * 0.22 + 1.4);
      float ridge2 = 1.0 - abs(band2);
      ridge2 = pow(ridge2, 3.0 + shp * 8.0);
      float bg = nfbm(p * 0.45 + t * 0.05) * 0.5 + 0.5;
      float w1 = (ridge * 1.4 + bg * 0.25) * u_intensity;
      float w2 = (ridge2 * 1.0 + bg * 0.45) * u_intensity;
      float w3 = (ridge * 0.5 + ridge2 * 0.5) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 22) {
      vec2 w  = warp(p * 0.7, t * 0.5);
      vec2 w2 = warp(p * 0.4 + w * 0.3, t * 0.3);
      vec2 wp = p + w * (0.4 + dist * 0.6);
      float n1 = snoise(wp * (1.4 + cpx * 1.6) + t * 0.14);
      float n2 = snoise((wp + w2 * dist * 0.4) * (2.0 + cpx * 2.0) + vec2(3.0, 7.0) - t * 0.1);
      float ridge1 = 1.0 - abs(n1);
      ridge1 = pow(ridge1, 5.0 + shp * 12.0);
      float ridge2 = 1.0 - abs(n2);
      ridge2 = pow(ridge2, 4.0 + shp * 10.0);
      float base = (n1 + n2) * 0.25 + 0.5;
      float w1 = (base * 0.6 + ridge1 * 1.2) * u_intensity;
      float w2c = ((1.0 - base) * 0.6 + ridge2 * 1.0) * u_intensity;
      float w3 = (ridge1 * 0.8 + ridge2 * 0.6) * u_intensity;
      col = softBlend(w1, w2c, w3);

    } else if (u_effect == 23) {
      float angle = 0.1 + shp * 1.4;
      float ca = cos(angle), sa = sin(angle);
      vec2 rp = vec2(p.x * ca - p.y * sa, p.x * sa + p.y * ca);
      vec2 stretch = vec2(rp.x * (5.0 + cpx * 4.0), rp.y * (0.35 + cpx * 0.3));
      vec2 sw = warp(stretch * 0.3, t * 0.3) * dist;
      float n1 = snoise(stretch + sw + t * 0.08);
      float n2 = snoise(stretch * 1.4 + vec2(2.0, 5.0) + sw - t * 0.06);
      float streak = 1.0 - abs(n1);
      streak = pow(streak, 6.0 + shp * 12.0);
      float streak2 = 1.0 - abs(n2);
      streak2 = pow(streak2, 4.0 + shp * 8.0);
      float bg = nfbm(p * 0.4 + t * 0.04) * 0.4 + 0.4;
      float w1 = (streak * 1.4 + bg * 0.3) * u_intensity;
      float w2 = (streak2 * 0.9 + bg * 0.5) * u_intensity;
      float w3 = (streak * 0.7 + streak2 * 0.4) * u_intensity * 0.8;
      col = softBlend(w1, w2, w3);

    } else if (u_effect == 24) {
      vec2 w1 = warp(p * 0.55, t * 0.4);
      vec2 w2 = warp(p * 0.7 + w1 * 0.4, t * 0.3);
      vec2 wp = p + (w1 + w2) * (0.4 + dist * 0.7);

      float scale = 0.65 + cpx * 0.7;
      float n1 = nfbm(wp * scale + vec2(0.0, 0.0) + t * 0.10);
      float n2 = nfbm(wp * scale + vec2(3.7, 5.2) - t * 0.07);
      float n3 = nfbm(wp * scale + vec2(7.1, 2.3) + t * 0.06);
      float n4 = nfbm(wp * scale + vec2(1.8, 8.4) - t * 0.08);
      float n5 = nfbm(wp * scale + vec2(4.9, 1.1) + t * 0.05);
      float n6 = nfbm(wp * scale + vec2(6.3, 7.8) - t * 0.09);
      float n7 = nfbm(wp * scale + vec2(2.4, 4.6) + t * 0.04);

      float pw = 2.5 + shp * 5.0;
      n1 = pow(clamp(n1, 0.0, 1.0), pw);
      n2 = pow(clamp(n2, 0.0, 1.0), pw);
      n3 = pow(clamp(n3, 0.0, 1.0), pw);
      n4 = pow(clamp(n4, 0.0, 1.0), pw);
      n5 = pow(clamp(n5, 0.0, 1.0), pw);
      n6 = pow(clamp(n6, 0.0, 1.0), pw);
      n7 = pow(clamp(n7, 0.0, 1.0), pw);

      float intens = 0.5 + u_intensity * 0.9;
      float a1 = n1 * u_alpha1 * intens;
      float a2 = n2 * u_alpha2 * intens;
      float a3 = n3 * u_alpha3 * intens;
      float a4 = n4 * u_alpha4 * intens;
      float a5 = n5 * u_alpha5 * intens;
      float a6 = n6 * u_alpha6 * intens;
      float a7 = n7 * u_alpha7 * intens;
      float total = a1 + a2 + a3 + a4 + a5 + a6 + a7 + 0.001;
      col = (u_color1 * a1 + u_color2 * a2 + u_color3 * a3 + u_color4 * a4
           + u_color5 * a5 + u_color6 * a6 + u_color7 * a7) / total;

    } else if (u_effect == 25) {
      float d = (uv.x + (1.0 - uv.y)) * 0.5;
      float w = 0.9 / max(u_scale, 0.25);
      float cyc = t * 0.08;
      float pA = mix(-w, 1.0 + w, sweepEase(fract(cyc)));
      float pB = mix(-w, 1.0 + w, sweepEase(fract(cyc + 0.5)));
      float band = max(
        clamp(1.0 - abs(d - pA) / w, 0.0, 1.0),
        clamp(1.0 - abs(d - pB) / w, 0.0, 1.0)
      );
      float v = band * u_intensity;

      vec2 ggs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        ggs = max(vec2(2.0), floor(ggs * (1.0 - u_gap * 0.8)));
      }
      vec2 cell = floor(uv * ggs);
      float clk = t * 1.6;
      // Wrap the stepped clock to keep sin() arguments small. u_time grows
      // unbounded over a session; on mediump-float GPUs (older Android, some
      // iOS) large hash inputs lose precision and the flicker bands/freezes.
      // mod(x, 1024) keeps the crossfade continuous across the wrap
      // (step 1023 fades into step 0, whose hash is the next s0).
      float step0 = mod(floor(clk), 1024.0);
      float step1 = mod(step0 + 1.0, 1024.0);
      float fz = smoothstep(0.0, 1.0, fract(clk));
      float cellSeed = dot(cell, vec2(127.1, 311.7));
      float r1 = fract(sin(cellSeed + step0 * 17.23) * 43758.5453);
      float r2 = fract(sin(cellSeed + step1 * 17.23) * 43758.5453);
      float rnd = mix(r1, r2, fz);
      v += (rnd - 0.5) * u_flicker * 0.9 * (0.15 + band * 0.85);

      col = palette(clamp(v, 0.0, 1.0));
    }

    return col;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    float t = u_time * u_speed;
    float dist = u_distortion;
    float soft = u_softness;
    float cpx = u_complexity;
    float shp = u_shape;

    vec2 sampleUV = uv;
    if (u_dotMode > 0.5) {
      vec2 gs = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gs = max(vec2(2.0), floor(gs * (1.0 - u_gap * 0.8)));
      }
      sampleUV = (floor(uv * gs) + vec2(0.5)) / gs;
    }

    vec3 col;
    if (u_blur < 0.01) {
      col = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp);
    } else {
      float r = u_blur * 0.02;
      col  = computeEffect(sampleUV, aspect, t, dist, soft, cpx, shp) * 0.4;
      col += computeEffect(sampleUV + vec2( r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2(-r,  0.0), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0,  r), aspect, t, dist, soft, cpx, shp) * 0.15;
      col += computeEffect(sampleUV + vec2( 0.0, -r), aspect, t, dist, soft, cpx, shp) * 0.15;
    }

    vec3 baseCol = col;
    if (u_dotMode < 0.5) {
      col = pow(col, vec3(1.3));
    }

    // CSS-pixel distance to the nearest edge \u2014 keeps the vignette / edge-fade
    // bands a consistent physical width on every side of any aspect ratio.
    vec2 cssRes = u_resolution / max(u_dpr, 0.0001);
    vec2 cssCoord = uv * cssRes;
    float edgeDistPx = min(
      min(cssCoord.x, cssRes.x - cssCoord.x),
      min(cssCoord.y, cssRes.y - cssCoord.y)
    );
    float vigRangePx = 40.0 * (1.0 + u_vignette * 3.0);
    float vig = (edgeDistPx * edgeDistPx) / (vigRangePx * vigRangePx);
    vig = smoothstep(0.0, 1.0, vig);
    col *= mix(1.0, vig, u_vignette * u_vigOpacity);

    float colorAlpha = (u_alpha1 + u_alpha2 + u_alpha3 + u_alpha4 + u_alpha5) / 5.0;
    if (colorAlpha < 0.999) {
      vec3 c1d = col - u_color1, c2d = col - u_color2, c3d = col - u_color3, c4d = col - u_color4, c5d = col - u_color5;
      float prox1 = exp(-8.0 * dot(c1d, c1d));
      float prox2 = exp(-8.0 * dot(c2d, c2d));
      float prox3 = exp(-8.0 * dot(c3d, c3d));
      float prox4 = exp(-8.0 * dot(c4d, c4d));
      float prox5 = exp(-8.0 * dot(c5d, c5d));
      float pTotal = prox1 + prox2 + prox3 + prox4 + prox5 + 0.0001;
      colorAlpha = (prox1*u_alpha1 + prox2*u_alpha2 + prox3*u_alpha3 + prox4*u_alpha4 + prox5*u_alpha5) / pTotal;
    }
    float alpha = colorAlpha;

    if (u_dotMode > 0.5) {
      vec2 gridSize = gridCounts(6.0 + u_cellSize * 74.0);
      if (u_dotMode > 1.5) {
        gridSize = max(vec2(2.0), floor(gridSize * (1.0 - u_gap * 0.8)));
      }
      // cellLocal is in [0,1] within each cell. Because gridSize was chosen so
      // that cell PIXEL size is square, distance / mask math here works in
      // screen-square units even though we're operating in normalised cell uv.
      vec2 cellLocal = fract(uv * gridSize);

      float hlFactor = 0.0;
      if (u_highlight > 0.01 || u_hlScale > 0.01) {
        vec2 cellCenter = (floor(uv * gridSize) + vec2(0.5)) / gridSize;
        vec2 cp2 = (cellCenter - 0.5) * u_scale;
        cp2.x *= aspect;
        float lw = sin(cp2.x * 3.0 + t * 1.5) * 0.5 + 0.5;
        lw *= sin(cp2.y * 2.5 - t * 1.1) * 0.5 + 0.5;
        lw += (snoise(cp2 * 2.0 + t * 0.6) * 0.5 + 0.5) * 0.3;
        hlFactor = clamp(lw, 0.0, 1.0);
        hlFactor *= hlFactor;
      }

      float scaleBoost = 1.0 + smoothstep(0.2, 0.8, hlFactor) * u_hlScale * 1.2;

      float mask = 1.0;
      if (u_dotMode < 1.5) {
        float gapW = u_gap * 0.35 / scaleBoost;
        if (gapW > 0.003) {
          mask = step(gapW, cellLocal.x) * step(gapW, 1.0 - cellLocal.x)
               * step(gapW, cellLocal.y) * step(gapW, 1.0 - cellLocal.y);
        }
      } else {
        // Render the circular dot mask in screen-pixel space rather than
        // cell-local UV. We map the cell-local offset to actual pixels
        // (cellPx = u_resolution / gridSize), then apply a 1-pixel AA
        // floor to the smoothstep edge so the dot rim is crisp and
        // properly anti-aliased even at u_dotSoftness near 0. The user
        // softness slider still scales linearly on top of the floor.
        // No fwidth() / GL_OES_standard_derivatives needed - dPx is
        // already in pixel units, so a fixed 1-px edge IS pixel-perfect.
        // gridCounts() already keeps cells square in screen space, so
        // pxOffset traces true circles (not ellipses) on any aspect.
        vec2 cellPx = u_resolution / gridSize;
        vec2 pxOffset = (cellLocal - 0.5) * cellPx;
        float dPx = length(pxOffset);
        float minCellPx = min(cellPx.x, cellPx.y);
        float radiusPx = u_dotSize * 0.5 * minCellPx * scaleBoost;
        // 0.5-px AA floor (1-px total smoothstep ramp) keeps the rim
        // pixel-perfect at u_dotSoftness=0 while letting the user softness
        // value dominate at the bundled preset defaults (e.g. softness=0.1
        // on a ~28-px cell yields softPx=0.56 -> ~1.1-px ramp, matching
        // the original cell-local behaviour). A larger floor (e.g. 1.0)
        // would widen low-softness dots and visually lighten dot presets.
        float aaPx = 0.5;
        float softPx = u_dotSoftness * 0.2 * minCellPx;
        float edgePx = max(aaPx, softPx);
        mask = 1.0 - smoothstep(radiusPx - edgePx, radiusPx + edgePx, dPx);
      }

      if (u_highlight > 0.01) {
        float hl = hlFactor * u_highlight;
        col = col * (1.0 + hl * 2.5) + vec3(hl * hl * 0.3);
      }

      if (u_edgeFade > 0.5 && u_fadeStr > 0.005) {
        float ef = smoothstep(0.0, u_edgeFade, edgeDistPx);
        mask *= mix(1.0, ef, u_fadeStr);
      }

      float baseOpacity = (u_dotMode < 1.5) ? u_fillOpacity : 0.0;
      alpha = colorAlpha * mix(baseOpacity, u_dotOpacity, mask);

      float bgLum  = dot(u_cardBg, vec3(0.299, 0.587, 0.114));
      float colLum = dot(baseCol, vec3(0.299, 0.587, 0.114));
      alpha *= smoothstep(0.0, 0.33, abs(colLum - bgLum));
    }

    gl_FragColor = vec4(col, alpha * u_shaderOpacity);
  }
`;var Zy=1e3/10,mp=1.25,Yb=2;function jy(){return typeof window>"u"?1:Math.min(window.devicePixelRatio||1,Yb)}var Te=null;function Jb(){return{u_resolution:{value:new rt(1,1)},u_dpr:{value:1},u_time:{value:0},u_color1:{value:new qe(1710618)},u_color2:{value:new qe(8421504)},u_color3:{value:new qe(14277081)},u_color4:{value:new qe(4210752)},u_color5:{value:new qe(12632256)},u_color6:{value:new qe(6316128)},u_color7:{value:new qe(10526880)},u_cardBg:{value:new qe(986895)},u_alpha1:{value:1},u_alpha2:{value:1},u_alpha3:{value:1},u_alpha4:{value:1},u_alpha5:{value:1},u_alpha6:{value:1},u_alpha7:{value:1},u_speed:{value:1},u_intensity:{value:1},u_scale:{value:1.5},u_direction:{value:0},u_softness:{value:.75},u_distortion:{value:.3},u_complexity:{value:.2},u_shape:{value:.5},u_flicker:{value:0},u_vignette:{value:.25},u_vigOpacity:{value:1},u_blur:{value:0},u_highlight:{value:.4},u_shaderOpacity:{value:1},u_cellSize:{value:.5},u_gap:{value:.3},u_dotSize:{value:.8},u_dotSoftness:{value:.1},u_dotOpacity:{value:1},u_hlScale:{value:0},u_fillOpacity:{value:0},u_edgeFade:{value:16},u_fadeStr:{value:1},u_dotMode:{value:2},u_effect:{value:4},u_sweepEase:{value:0}}}function Kb(){if(Te)return Te;let t=document.createElement("canvas");t.width=8,t.height=8;let e=new Ic({canvas:t,alpha:!0,premultipliedAlpha:!1,preserveDrawingBuffer:!1,antialias:!1,powerPreference:"high-performance"});e.setPixelRatio(Math.min(typeof window<"u"?window.devicePixelRatio:1,mp)),e.setClearColor(0,0),e.autoClear=!0;let n=e.getContext(),i=new Lc,r=new ca(-1,1,1,-1,0,1),s=Jb(),o=new Pn({vertexShader:Jy,fragmentShader:Ky,uniforms:s,transparent:!0,depthTest:!1,depthWrite:!1,blending:sr}),a=new Qs(2,2),l=new vn(a,o);i.add(l),Te={glCanvas:t,gl:n,renderer:e,scene:i,camera:r,material:o,geometry:a,mesh:l,uniforms:s,instances:new Set,rafId:0,lastFrameMs:0,lastTickMs:performance.now(),lastInstance:null,onContextLost:null,onContextRestored:null,contextLost:!1};let c=f=>{f.preventDefault(),Te&&(Te.contextLost=!0,Te.rafId!==0&&(cancelAnimationFrame(Te.rafId),Te.rafId=0))},h=()=>{if(Te){Te.contextLost=!1,Te.lastInstance=null;for(let f of Te.instances)f.uniformsDirty=!0;fa()}};return t.addEventListener("webglcontextlost",c,!1),t.addEventListener("webglcontextrestored",h,!1),Te.onContextLost=c,Te.onContextRestored=h,fa(),Te}function Zb(){Te&&(Te.rafId!==0&&cancelAnimationFrame(Te.rafId),Te.onContextLost&&Te.glCanvas.removeEventListener("webglcontextlost",Te.onContextLost,!1),Te.onContextRestored&&Te.glCanvas.removeEventListener("webglcontextrestored",Te.onContextRestored,!1),Te.geometry.dispose(),Te.material.dispose(),Te.renderer.dispose(),Te=null)}function Qb(t,e){let n=e.preset,i=t.uniforms;i.u_effect.value=n.effectIndex,i.u_speed.value=n.speed,i.u_intensity.value=n.intensity,i.u_scale.value=n.scale,i.u_direction.value=n.direction*Math.PI/180,i.u_softness.value=n.softness,i.u_distortion.value=n.distortion,i.u_complexity.value=n.complexity,i.u_shape.value=n.shape,i.u_flicker.value=n.flicker??0,i.u_vignette.value=n.vignette,i.u_vigOpacity.value=n.vigOpacity,i.u_blur.value=n.blur,i.u_highlight.value=n.highlight,i.u_shaderOpacity.value=n.shaderOpacity,i.u_dotMode.value=n.dotMode,i.u_sweepEase.value=n.sweepEase!=null?Math.floor(n.sweepEase):0;let r=n.dotMode===1?n.pixelConfig:n.dotConfig;i.u_cellSize.value=Yr(r.cellSize,e.pixelScale),i.u_gap.value=r.gap,i.u_dotSize.value=r.dotSize,i.u_dotSoftness.value=r.dotSoftness,i.u_dotOpacity.value=r.dotOpacity,i.u_hlScale.value=r.hlScale,i.u_fillOpacity.value=r.fillOpacity,i.u_edgeFade.value=r.edgeFade,i.u_fadeStr.value=r.fadeStr;let[s,o,a]=ni(e.cardBgOverride??n.cardBg);for(let l=0;l<7;l++){let c=e.colorsOverride?.[l],[h,f,d]=c!=null?ni(c):pa(e,l);i[`u_color${l+1}`].value.setRGB(h,f,d),i[`u_alpha${l+1}`].value=n.alphas[l]}i.u_cardBg.value.setRGB(s,o,a),e.uniformsDirty=!1}function gp(t){return t.cardBgOverride??t.preset.cardBg}function pa(t,e){let n=t.preset,[i,r,s]=ni(n.colors[e]);if(t.cardBgOverride==null)return[i,r,s];let[o,a,l]=ni(n.cardBg),c=h=>Math.round(h*255);return c(i)===c(o)&&c(r)===c(a)&&c(s)===c(l)?ni(t.cardBgOverride):[i,r,s]}function jb(t){return{iw:Math.max(1,Math.floor(t.cssWidth*t.dpr)),ih:Math.max(1,Math.floor(t.cssHeight*t.dpr))}}function $y(t){let e=0,n=0;for(let h of t.instances)!h.visible||h.paused||(h.cssWidth>e&&(e=h.cssWidth),h.cssHeight>n&&(n=h.cssHeight));if(e<=0||n<=0)return;let i=t.renderer.getPixelRatio(),r=Math.max(1,Math.floor(e*i)),s=Math.max(1,Math.floor(n*i)),o=t.glCanvas.width,a=t.glCanvas.height;if(r<=o&&s<=a)return;let l=Math.max(e,o/Math.max(i,1e-4)),c=Math.max(n,a/Math.max(i,1e-4));t.renderer.setSize(l,c,!1)}function ex(t,e,n){if(t.contextLost)return;let{iw:i,ih:r}=jb(e),s=Math.max(1,e.cssWidth),o=Math.max(1,e.cssHeight);t.renderer.setViewport(0,0,s,o),t.renderer.setScissor(0,0,s,o),t.renderer.setScissorTest(!0),t.uniforms.u_resolution.value.set(i,r),t.uniforms.u_dpr.value=e.dpr||1,t.lastInstance===e&&!e.uniformsDirty||(Qb(t,e),t.lastInstance=e),t.uniforms.u_time.value=e.accumulatedTime,t.renderer.render(t.scene,t.camera);let l=Math.max(1,Math.floor(e.cssWidth*e.canvasDpr)),c=Math.max(1,Math.floor(e.cssHeight*e.canvasDpr));(e.canvas.width!==l||e.canvas.height!==c)&&(e.canvas.width=l,e.canvas.height=c),e.ctx.clearRect(0,0,l,c);let h=t.glCanvas.height-r;e.ctx.imageSmoothingEnabled=!1,e.ctx.drawImage(t.glCanvas,0,h,i,r,0,0,l,c),e.reveal?.afterShaderFrame(t,e,n),e.reveal&&e.reveal.isActive()&&(t.lastInstance=null)}function $b(t,e,n){!e.visible||e.paused||e.cssWidth<1||e.cssHeight<1||ex(t,e,n)}function eo(t){Te&&(Te.contextLost||t.visible&&(t.cssWidth<1||t.cssHeight<1||($y(Te),ex(Te,t,performance.now()))))}var Qy=null;function eT(t){for(let e of t.instances)if(e.visible&&!e.paused)return!0;return!1}var tx=t=>{if(!Te)return;if(Te.contextLost){Te.rafId=0;return}if(!eT(Te)){Te.rafId=0,Qy?.();return}Te.rafId=requestAnimationFrame(tx);let e=t-Te.lastFrameMs;if(e<Zy)return;Te.lastFrameMs=t-e%Zy;let n=(t-Te.lastTickMs)/1e3;Te.lastTickMs=t;for(let i of Te.instances)i.visible&&!i.paused&&(i.accumulatedTime+=n);$y(Te);for(let i of Te.instances)$b(Te,i,t);Qy?.()};function fa(){Te&&(Te.contextLost||Te.rafId===0&&(Te.lastTickMs=performance.now(),Te.lastFrameMs=Te.lastTickMs,Te.rafId=requestAnimationFrame(tx)))}function Yr(t,e){return!(e>0)||e===1?t:((6+t*74)/e-6)/74}function vp(t){let e=Kb(),n=t.canvas.getContext("2d");if(!n)throw new Error("img-fx: 2D context unavailable");let i={canvas:t.canvas,ctx:n,cssWidth:t.cssWidth,cssHeight:t.cssHeight,dpr:Math.min(typeof window<"u"?window.devicePixelRatio:1,mp),canvasDpr:jy(),preset:t.preset,cardBgOverride:t.cardBg??null,colorsOverride:null,strength:t.strength??1,pixelScale:t.pixelScale!=null&&t.pixelScale>0?t.pixelScale:1,visible:!0,paused:!1,uniformsDirty:!0,reveal:null,accumulatedTime:Math.random()*1e3,startedAtMs:performance.now()};return e.instances.add(i),fa(),i}function yp(t){Te&&(Te.instances.delete(t),Te.lastInstance===t&&(Te.lastInstance=null),t.reveal?.dispose(),t.reveal=null,Te.instances.size===0&&Zb())}function xp(t,e,n){t.cssWidth=e,t.cssHeight=n,typeof window<"u"&&(t.dpr=Math.min(window.devicePixelRatio,mp),t.canvasDpr=jy())}function _p(t,e){t.preset=e,t.uniformsDirty=!0}function Sp(t,e){t.cardBgOverride=e,t.uniformsDirty=!0}function Mp(t,e){t.colorsOverride=e&&e.length>0?e.slice(0,7):null,t.uniformsDirty=!0}function Ap(t,e){t.visible=e,e&&fa()}function wp(t,e){t.paused=e,e||fa()}function Ep(t,e){t.strength=Math.max(0,Math.min(1,e))}function bp(t,e){t.pixelScale=e>0?e:1,t.uniformsDirty=!0}var nx={linear:t=>t,smoothstep:t=>t*t*(3-2*t),easeOutCubic:t=>1-Math.pow(1-t,3),easeOutQuint:t=>1-Math.pow(1-t,5),easeInOutCubic:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,easeOutExpo:t=>t===1?1:1-Math.pow(2,-10*t),easeOutBack:t=>1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)};function to(t,e){return(nx[t]??nx.smoothstep)(Math.max(0,Math.min(1,e)))}var tT=64,nT=96,no=320,iT=.006;function Pp(t,e,n){let i=e/Math.max(1,n),r=t.width/Math.max(1,t.height),s=0,o=0,a=t.width,l=t.height;r>i?(a=t.height*i,s=(t.width-a)/2):(l=t.width/i,o=(t.height-l)/2);let c=Math.min(a,l)*iT;return a-2*c>1&&l-2*c>1&&(s+=c,o+=c,a-=2*c,l-=2*c),{sx:s,sy:o,sw:a,sh:l}}var Tp=new Map;function Ip(t){let e=Tp.get(t);return e||(e=new Promise((n,i)=>{let r=new Image,s=()=>n(r);r.onerror=o=>{Tp.delete(t),i(o)},typeof r.decode=="function"?(r.src=t,r.decode().then(s,()=>{r.complete&&r.naturalWidth>0?s():r.onload=s})):(r.onload=s,r.src=t)}),Tp.set(t,e),e)}function Yn(t,e,n,i,r){let s=e==="a"?t.coverA:t.coverB;if(!s){let o=document.createElement("canvas"),a=o.getContext("2d");if(!a)throw new Error("img-fx: 2D context unavailable for cover bitmap");s={canvas:o,ctx:a,img:null,w:0,h:0},e==="a"?t.coverA=s:t.coverB=s}if(s.img!==n||s.w!==i||s.h!==r){s.canvas.width=i,s.canvas.height=r,s.w=i,s.h=r,s.img=n;let{sx:o,sy:a,sw:l,sh:c}=Pp(n,i,r);s.ctx.clearRect(0,0,i,r),s.ctx.imageSmoothingEnabled=!0,s.ctx.imageSmoothingQuality="high",s.ctx.drawImage(n,o,a,l,c,0,0,i,r)}return s.canvas}function sx(t){return t.dotMode===2?nT:tT}function ox(t){let e=t.revealConfig;return t.dotMode===2?{duration:Math.max(.05,e.dotDuration),easingKey:e.dotEasing}:{duration:Math.max(.05,e.duration),easingKey:e.easing}}function rT(t,e,n,i){let r=n/(i-1),s=e/(i-1),o=r-.5,a=s-.5;switch(t){case"radialCenter":return 1-Math.sqrt(o*o+a*a)*2;case"radialCorner":return 1-Math.sqrt(r*r+s*s)/1.414;case"linearTop":return 1-s;case"linearBottom":return s;case"linearLeft":return 1-r;case"linearRight":return r;case"diagonalTL":return 1-(r+s)/2;case"diagonalBR":return(r+s)/2;case"diamond":return 1-(Math.abs(o)+Math.abs(a));case"blindsH":return 1-s*8%1;case"blindsV":return 1-r*8%1;default:return-1}}function ax(t,e,n,i,r){let s=e.uniforms.u_dotMode.value,o=e.uniforms.u_fillOpacity.value,a=n.preset.dotMode,l=a<1.5?0:1;e.uniforms.u_dotMode.value=l,e.uniforms.u_fillOpacity.value=l>.5?a===1?n.preset.pixelConfig.fillOpacity:n.preset.dotConfig.fillOpacity:0,e.renderer.render(e.scene,e.camera);let c=Math.max(1,Math.floor(n.cssWidth*n.dpr)),h=Math.max(1,Math.floor(n.cssHeight*n.dpr)),f=Math.max(0,e.glCanvas.height-h);t.sampleGpuCanvas||(t.sampleGpuCanvas=document.createElement("canvas"),t.sampleGpuCtx=t.sampleGpuCanvas.getContext("2d"));let d=t.sampleGpuCanvas,m=t.sampleGpuCtx;return(d.width!==r||d.height!==r)&&(d.width=r,d.height=r),m.clearRect(0,0,r,r),m.drawImage(e.glCanvas,0,f,c,h,0,0,r,r),i.clearRect(0,0,r,r),i.drawImage(d,0,0),e.uniforms.u_dotMode.value=s,e.uniforms.u_fillOpacity.value=o,t.sampleImgData=i.getImageData(0,0,r,r),t.sampleDataCache=t.sampleImgData.data,t.sampleDataCache}function lx(t,e){t.sampleCanvas||(t.sampleCanvas=document.createElement("canvas"),t.sampleCtx=t.sampleCanvas.getContext("2d",{willReadFrequently:!0})),(t.sampleCanvas.width!==e||t.sampleCanvas.height!==e)&&(t.sampleCanvas.width=e,t.sampleCanvas.height=e,t.sampleImgData=null,t.sampleDataCache=null,t.sampleFrameCounter=0),t.maskGrad||(t.maskGrad=document.createElement("canvas"),t.maskGradCtx=t.maskGrad.getContext("2d")),(t.maskGrad.width!==e||t.maskGrad.height!==e)&&(t.maskGrad.width=e,t.maskGrad.height=e,t.maskImgData=null),!t.maskImgData&&t.maskGradCtx&&(t.maskImgData=t.maskGradCtx.createImageData(e,e))}function sT(t,e,n,i){if(!t.image)return;let r=n.preset,s=n.canvas.width,o=n.canvas.height;(i.canvas.width!==s||i.canvas.height!==o)&&(i.canvas.width=s,i.canvas.height=o),i.clearRect(0,0,s,o);let{duration:a,easingKey:l}=ox(r),c=(performance.now()-t.revealStartMs)/1e3,h=Math.min(c/a,1),f=to(l,h),d=t.image,{sx:m,sy:x,sw:_,sh:p}=Pp(d,s,o),u=r.revealConfig.blur;if(h<1&&u>0){let K=u*(1-f);i.canvas.style.filter=K>.1?`blur(${K.toFixed(1)}px)`:"none"}else i.canvas.style.filter="none";if(h>=1){i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(Yn(t,"a",d,s,o),0,0);return}let g=sx(r);lx(t,g);let v=t.sampleCtx,M=t.maskGrad,P=t.maskGradCtx,b=r.revealConfig.maskShape,E=r.revealConfig.softness,R=b.startsWith("shader"),H=null,y=null,A=null;if(R){let K=t.sampleFrameCounter++;t.sampleDataCache==null||(K&1)===0?H=ax(t,e,n,v,g):H=t.sampleDataCache;let se={shaderColor1:0,shaderColor2:1,shaderColor3:2,shaderColor4:3,shaderColor5:4};if(se[b]!=null&&(y=pa(n,se[b])),b==="shaderHighlight"){let pe=ni(gp(n));A=[];for(let ve=0;ve<5;ve++){let Ae=pa(n,ve),Ne=Ae[0]-pe[0],Fe=Ae[1]-pe[1],C=Ae[2]-pe[2];Math.sqrt(Ne*Ne+Fe*Fe+C*C)>.15&&A.push(Ae)}A.length===0&&(A=[pa(n,0)])}}let N=1-f*(1+E),O=b==="gradientSweep",G=0,q=0,F=2,Z=r.flicker??0,z=null,ie=null,te=0,le=0,Me=0;if(Z>.003){F=Math.max(2,Math.floor(6+Yr(r.pixelConfig.cellSize,n.pixelScale)*74));let K=n.accumulatedTime*Math.max(r.speed,2)*1.6,ce=Math.floor(K);te=ce%1024,le=(te+1)%1024,Me=K-ce,Me=Me*Me*(3-2*Me);let se=(ve,Ae)=>{let Ne=Math.sin(ve*127.1+Ae*17.23)*43758.5453;return Ne-Math.floor(Ne)};ie=se;let pe=F*F;(!t.gsFlickerTable||t.gsFlickerTable.length!==pe)&&(t.gsFlickerTable=new Float32Array(pe)),z=t.gsFlickerTable;for(let ve=0;ve<pe;ve++){let Ae=se(ve,te)*(1-Me)+se(ve,le)*Me;z[ve]=(Ae-.5)*Z*1.6}}O&&(G=.9/Math.max(r.scale,.25),q=-G+f*(1+2*G));let He=t.maskImgData,X=He.data;for(let K=0;K<g;K++)for(let ce=0;ce<g;ce++){let se;if(R&&H){let Ae=(K*g+ce)*4,Ne=H[Ae]/255,Fe=H[Ae+1]/255,C=H[Ae+2]/255;if(A){let We=0;for(let Ie of A){let Oe=Ne-Ie[0],Se=Fe-Ie[1],Je=C-Ie[2],Ce=Math.exp(-10*(Oe*Oe+Se*Se+Je*Je));Ce>We&&(We=Ce)}se=We}else if(y){let We=Ne-y[0],Ie=Fe-y[1],Oe=C-y[2];se=Math.exp(-8*(We*We+Ie*Ie+Oe*Oe))}else se=(H[Ae]*.299+H[Ae+1]*.587+H[Ae+2]*.114)/255}else O?se=0:se=rT(b,K,ce,g);let pe;if(O){let Ae=ce/(g-1),Ne=K/(g-1),Fe=(Ae+Ne)*.5;pe=(q+G-Fe)/(2*G)}else pe=(se-N)/E;if(z&&pe>-.5&&pe<1.5){let Ae=pe<0?0:pe>1?1:pe,Ne=Ae*(1-Ae)*4;if(Ne>.001){let Fe=ce/(g-1),C=K/(g-1),We=Math.floor(C*F)*F+Math.floor(Fe*F);pe+=z[We]*Ne}}pe<0?pe=0:pe>1&&(pe=1),pe=pe*pe*(3-2*pe);let ve=(K*g+ce)*4;X[ve]=255,X[ve+1]=255,X[ve+2]=255,X[ve+3]=pe*255+.5|0}if(P.putImageData(He,0,0),r.dotMode===1)aT(t,i,d,m,x,_,p,r,c,s,o,n,O?0:Z,ie,te,le,Me);else{r.dotMode===2?oT(t,i,d,m,x,_,p,Yr(r.pixelConfig.cellSize,n.pixelScale),c,r.revealConfig.pixDuration,r.revealConfig.pixEasing,n,s,o):(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.drawImage(Yn(t,"a",d,s,o),0,0)),i.globalCompositeOperation="destination-in";let K=r.dotMode===2&&R;K&&(i.imageSmoothingEnabled=!1),i.drawImage(M,0,0,s,o),K&&(i.imageSmoothingEnabled=!0),i.globalCompositeOperation="source-over"}}function oT(t,e,n,i,r,s,o,a,l,c,h,f,d,m){let x=6+a*74,_=Math.max(1,f.cssWidth),p=Math.max(1,f.cssHeight),u=Math.max(2,Math.floor(x*_/no)),g=Math.max(2,Math.floor(x*p/no)),v=u*g,M=Math.max(.05,c),P=Math.max(0,Math.min(1,l/M)),b=to(h,P);t.pixCanvas||(t.pixCanvas=document.createElement("canvas"),t.pixCtx=t.pixCanvas.getContext("2d"));let E=t.pixCanvas,R=t.pixCtx;(E.width!==u||E.height!==g)&&(E.width=u,E.height=g),t.pixDrop||(t.pixDrop=document.createElement("canvas"),t.pixDropCtx=t.pixDrop.getContext("2d"));let H=t.pixDrop,y=t.pixDropCtx;if(H.width!==u||H.height!==g){H.width=u,H.height=g,t.pixDropImgData=y.createImageData(u,g);let q=t.pixDropImgData.data;for(let F=0;F<q.length;F+=4)q[F]=255,q[F+1]=255,q[F+2]=255}let A=.07,N=1/(2*A);if(!t.pixDropPattern||t.pixDropPatternW!==u||t.pixDropPatternH!==g||t.pixDropRevealStart!==t.revealStartMs){t.pixDropPattern=new Float32Array(v);let q=A,F=1-2*A;for(let Z=0;Z<t.pixDropPattern.length;Z++)t.pixDropPattern[Z]=q+Math.random()*F;t.pixDropPatternW=u,t.pixDropPatternH=g,t.pixDropRevealStart=t.revealStartMs}let O=t.pixDropImgData.data,G=t.pixDropPattern;for(let q=0;q<G.length;q++){let Z=.5+(G[q]-b)*N;Z<0?Z=0:Z>1&&(Z=1),O[q*4+3]=Z*255+.5|0}y.putImageData(t.pixDropImgData,0,0),R.globalCompositeOperation="source-over",R.clearRect(0,0,u,g),R.imageSmoothingEnabled=!0,R.imageSmoothingQuality="high",R.drawImage(Yn(t,"a",n,d,m),0,0,d,m,0,0,u,g),R.globalCompositeOperation="destination-in",R.imageSmoothingEnabled=!1,R.drawImage(H,0,0),R.globalCompositeOperation="source-over",e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(Yn(t,"a",n,d,m),0,0),e.imageSmoothingEnabled=!1,e.drawImage(E,0,0,u,g,0,0,d,m),e.imageSmoothingEnabled=!0}function aT(t,e,n,i,r,s,o,a,l,c,h,f,d,m,x,_,p){let g=6+Yr(a.pixelConfig.cellSize,f.pixelScale)*74,v=Math.max(1,f.cssWidth),M=Math.max(1,f.cssHeight),P=Math.max(2,Math.floor(g*v/no)),b=Math.max(2,Math.floor(g*M/no)),E=P*b,R=Math.max(.05,a.revealConfig.pixDuration),H=Math.max(0,Math.min(1,l/R)),y=to(a.revealConfig.pixEasing,H);t.pixCanvas||(t.pixCanvas=document.createElement("canvas"),t.pixCtx=t.pixCanvas.getContext("2d"));let A=t.pixCanvas,N=t.pixCtx;(A.width!==P||A.height!==b)&&(A.width=P,A.height=b),t.pixDrop||(t.pixDrop=document.createElement("canvas"),t.pixDropCtx=t.pixDrop.getContext("2d"));let O=t.pixDrop,G=t.pixDropCtx;if(O.width!==P||O.height!==b){O.width=P,O.height=b,t.pixDropImgData=G.createImageData(P,b);let te=t.pixDropImgData.data;for(let le=0;le<te.length;le+=4)te[le]=255,te[le+1]=255,te[le+2]=255}let q=.07,F=1/(2*q);if(!t.pixDropPattern||t.pixDropPatternW!==P||t.pixDropPatternH!==b||t.pixDropRevealStart!==t.revealStartMs){t.pixDropPattern=new Float32Array(E);let te=q,le=1-2*q;for(let Me=0;Me<t.pixDropPattern.length;Me++)t.pixDropPattern[Me]=te+Math.random()*le;t.pixDropPatternW=P,t.pixDropPatternH=b,t.pixDropRevealStart=t.revealStartMs}let Z=t.pixDropImgData.data,z=t.pixDropPattern,ie=d>.003&&m!=null;for(let te=0;te<z.length;te++){let le=z[te],Me=.5+(le-y)*F;if(Me<0?Me=0:Me>1&&(Me=1),ie){let He=1-Math.abs(y-le)*6.25;if(He>0){let X=m(te,x)*(1-p)+m(te,_)*p;Me+=(X-.5)*d*1.6*He,Me<0?Me=0:Me>1&&(Me=1)}}Z[te*4+3]=Me*255+.5|0}G.putImageData(t.pixDropImgData,0,0),N.globalCompositeOperation="source-over",N.clearRect(0,0,P,b),N.imageSmoothingEnabled=!0,N.imageSmoothingQuality="high",N.drawImage(Yn(t,"a",n,c,h),0,0,c,h,0,0,P,b),N.globalCompositeOperation="destination-in",N.imageSmoothingEnabled=!1,N.drawImage(O,0,0),N.globalCompositeOperation="source-over",e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(Yn(t,"a",n,c,h),0,0),e.imageSmoothingEnabled=!1,e.drawImage(A,0,0,P,b,0,0,c,h),e.imageSmoothingEnabled=!0,N.globalCompositeOperation="source-over",N.clearRect(0,0,P,b),N.imageSmoothingEnabled=!0,N.imageSmoothingQuality="high",N.drawImage(t.maskGrad,0,0,P,b),e.imageSmoothingEnabled=!1,e.globalCompositeOperation="destination-in",e.drawImage(A,0,0,P,b,0,0,c,h),e.imageSmoothingEnabled=!0,e.globalCompositeOperation="source-over"}var Cp=800,Rp=300,lT=1,cT=.5,uT=.03,ix=.6,rx=800,hT=400,dT=1200;function fT(t,e,n,i,r,s){let o=t.image;if(!o)return;let a=n.preset,l=n.canvas.width,c=n.canvas.height;(i.canvas.width!==l||i.canvas.height!==c)&&(i.canvas.width=l,i.canvas.height=c),i.canvas.style.filter="none";let f=6+Yr(a.pixelConfig.cellSize,n.pixelScale)*74,d=Math.max(1,n.cssWidth),m=Math.max(1,n.cssHeight),x=Math.max(2,Math.floor(f*d/no)),_=Math.max(2,Math.floor(f*m/no)),p=x*_,u=t.pendingReveal,g=u&&t.boilHandoffStartMs>0?s-t.boilHandoffStartMs:-1,v=$=>$*$*(3-2*$),M=g<0?0:v(Math.min(1,g/rx)),P=g<0?-1:g-rx,b=P<=0?0:v(Math.min(1,P/hT)),E=P<=0?0:Math.min(1,P/dT),R=u!=null&&P>0,H=s-t.boilStartMs,y=Math.min(1,H/Cp),A=y*y*(3-2*y),N=y<1,O=Math.min(1,Math.max(0,H-(Cp-Rp))/Rp),G=1-O*O*(3-2*O),q=Math.min(1,Math.max(0,H-(Cp-Rp))/(lT*1e3)),F=q*q*(3-2*q),Z=F*cT;r.style.opacity=String(F),t.pixCanvas||(t.pixCanvas=document.createElement("canvas"),t.pixCtx=t.pixCanvas.getContext("2d"));let z=t.pixCanvas,ie=t.pixCtx;(z.width!==x||z.height!==_)&&(z.width=x,z.height=_),t.pixDrop||(t.pixDrop=document.createElement("canvas"),t.pixDropCtx=t.pixDrop.getContext("2d"));let te=t.pixDrop,le=t.pixDropCtx;if(te.width!==x||te.height!==_||!t.pixDropImgData){te.width=x,te.height=_,t.pixDropImgData=le.createImageData(x,_);let $=t.pixDropImgData.data;for(let Le=0;Le<$.length;Le+=4)$[Le]=255,$[Le+1]=255,$[Le+2]=255}if(!t.boilPattern||t.boilPatternW!==x||t.boilPatternH!==_){t.boilPattern=new Float32Array(p);for(let $=0;$<p;$++)t.boilPattern[$]=Math.random();t.boilPatternW=x,t.boilPatternH=_}let Me=Math.max(a.flicker??0,.5),He=n.accumulatedTime*Math.max(a.speed,2)*1.6,X=Math.floor(He),K=X%1024,ce=(K+1)%1024,se=He-X;se=se*se*(3-2*se);let pe=($,Le)=>{let ee=Math.sin($*127.1+Le*17.23)*43758.5453;return ee-Math.floor(ee)},ve=t.pixDropImgData.data,Ae=t.boilPattern,Ne=sx(a);lx(t,Ne);let Fe=t.sampleFrameCounter++,C=t.sampleDataCache==null||Fe%3===0,We=!t.boilField||t.boilField.length!==p,Ie=C?ax(t,e,n,t.sampleCtx,Ne):t.sampleDataCache;if(C||We){We&&(t.boilField=new Float32Array(p));let $=t.boilField,Le=1,ee=0;for(let he=0;he<_;he++){let de=Math.min(Ne-1,(he+.5)*Ne/_|0);for(let ae=0;ae<x;ae++){let Xe=Math.min(Ne-1,(ae+.5)*Ne/x|0),De=(de*Ne+Xe)*4,Qe=(Ie[De]*.299+Ie[De+1]*.587+Ie[De+2]*.114)/255;$[he*x+ae]=Qe,Qe<Le&&(Le=Qe),Qe>ee&&(ee=Qe)}}let re=ee-Le>.001?1/(ee-Le):0;for(let he=0;he<p;he++)$[he]=re>0?($[he]-Le)*re:.5}let Oe=t.boilField,Se=1/(2*uT),Je=Me*.6*(1-E),Ce=1-ix,T=R?to(a.revealConfig.pixEasing,E):0,U=1/(2*.07),Y=a.flicker??0;for(let $=0;$<p;$++){let Le=pe($,K)*(1-se)+pe($,ce)*se,re=.5+(Oe[$]*ix+Ae[$]*Ce+(Le-.5)*Je-Z)*Se;if(re<0?re=0:re>1&&(re=1),N){let he=Ae[$],de=.5+(A-he)*U;de<0?de=0:de>1&&(de=1);let ae=1-Math.abs(A-he)*6.25;ae>0&&(de+=(Le-.5)*Me*1.6*ae,de<0?de=0:de>1&&(de=1)),de<re&&(re=de)}if(R){let he=Ae[$],de=.5+(he-T)*U;if(de<0?de=0:de>1&&(de=1),Y>.003){let ae=1-Math.abs(T-he)*6.25;ae>0&&(de+=(Le-.5)*Y*1.6*ae,de<0?de=0:de>1&&(de=1))}de<re&&(re=de)}ve[$*4+3]=re*255+.5|0}le.putImageData(t.pixDropImgData,0,0);let{sx:j,sy:J,sw:Ee,sh:ue}=Pp(o,l,c);ie.globalCompositeOperation="source-over",ie.clearRect(0,0,x,_),ie.imageSmoothingEnabled=!0,ie.imageSmoothingQuality="high",M<1&&ie.drawImage(Yn(t,"a",o,l,c),0,0,l,c,0,0,x,_),u&&M>0&&(ie.globalAlpha=M,ie.drawImage(Yn(t,"b",u.image,l,c),0,0,l,c,0,0,x,_),ie.globalAlpha=1),ie.globalCompositeOperation="destination-in",ie.imageSmoothingEnabled=!1,ie.drawImage(te,0,0),ie.globalCompositeOperation="source-over",i.clearRect(0,0,l,c),N&&G>0?(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=G,i.drawImage(Yn(t,"a",o,l,c),0,0),i.globalAlpha=1):R&&u&&b>0&&(i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=b,i.drawImage(Yn(t,"b",u.image,l,c),0,0),i.globalAlpha=1),i.imageSmoothingEnabled=!1,i.drawImage(z,0,0,x,_,0,0,l,c),i.imageSmoothingEnabled=!0,R&&u&&E>=1&&b>=1&&(t.image=u.image,t.pendingReveal=null,t.boilHandoffStartMs=0,t.holdPaintedImg=null,t.phase="hold",r.style.opacity="0",t.onRevealComplete?.())}function Lp(t){let e=t.canvas.getContext("2d");if(!e)throw new Error("img-fx: 2D context unavailable for reveal canvas");let n={active:!1,phase:"idle",revealStartMs:0,hideStartMs:0,hideDurationMs:300,boilStartMs:0,boilPattern:null,boilPatternW:0,boilPatternH:0,boilField:null,boilHandoffStartMs:0,pendingReveal:null,image:null,cssWidth:t.cssWidth,cssHeight:t.cssHeight,sampleCanvas:null,sampleCtx:null,sampleImgData:null,sampleDataCache:null,sampleFrameCounter:0,maskGrad:null,maskGradCtx:null,maskImgData:null,gsFlickerTable:null,pixCanvas:null,pixCtx:null,pixDrop:null,pixDropCtx:null,pixDropImgData:null,pixDropPattern:null,pixDropPatternW:0,pixDropPatternH:0,pixDropRevealStart:-1,coverA:null,coverB:null,holdPaintedImg:null,holdPaintedW:0,holdPaintedH:0,sampleGpuCanvas:null,sampleGpuCtx:null},i=t.shaderCanvas;function r(o){n.image=o.image,n.cssWidth=o.cssWidth,n.cssHeight=o.cssHeight,n.onRevealComplete=o.onRevealComplete,n.revealStartMs=performance.now(),n.phase="reveal",n.active=!0,n.boilHandoffStartMs=0,n.pendingReveal=null,n.sampleFrameCounter=0,n.sampleDataCache=null,n.holdPaintedImg=null,e.canvas.style.opacity="1"}return{canvas:t.canvas,ctx:e,afterShaderFrame(o,a,l){if(n.cssWidth=a.cssWidth,n.cssHeight=a.cssHeight,!n.active){e.canvas.style.filter="none";return}let{duration:c,easingKey:h}=ox(a.preset);if(n.phase==="reveal"&&n.image){let f=(l-n.revealStartMs)/1e3,d=Math.min(f/c,1),m=to(h,d);i.style.opacity=String(1-m),sT(n,o,a,e),d>=1&&(n.phase="hold",i.style.opacity="0",n.onRevealComplete?.())}else if(n.phase==="hold"&&n.image){e.canvas.style.filter="none";let f=n.image,d=a.canvas.width,m=a.canvas.height;(e.canvas.width!==d||e.canvas.height!==m)&&(e.canvas.width=d,e.canvas.height=m,n.holdPaintedImg=null),(n.holdPaintedImg!==f||n.holdPaintedW!==d||n.holdPaintedH!==m)&&(e.clearRect(0,0,d,m),e.globalCompositeOperation="source-over",e.globalAlpha=1,e.imageSmoothingEnabled=!0,e.imageSmoothingQuality="high",e.drawImage(Yn(n,"a",f,d,m),0,0),n.holdPaintedImg=f,n.holdPaintedW=d,n.holdPaintedH=m),i.style.opacity="0"}else if(n.phase==="boil"&&n.image)fT(n,o,a,e,i,l);else if(n.phase==="hide"){let f=l-n.hideStartMs,d=Math.min(f/Math.max(1,n.hideDurationMs),1),m=1-d;e.canvas.style.opacity=String(m),i.style.opacity=String(d),d>=1&&(n.active=!1,n.phase="idle",e.canvas.style.opacity="1",e.clearRect(0,0,e.canvas.width,e.canvas.height),i.style.opacity="1",n.image=null)}},startReveal(o){if(n.phase==="boil"&&n.active){n.pendingReveal=o,n.onRevealComplete=o.onRevealComplete,n.cssWidth=o.cssWidth,n.cssHeight=o.cssHeight,n.boilHandoffStartMs===0&&(n.boilHandoffStartMs=performance.now());return}r(o)},startHide(o=300){!n.active||n.phase==="hide"||(n.phase="hide",n.hideStartMs=performance.now(),n.hideDurationMs=o)},startBoil(){!n.active||!n.image||n.phase!=="hold"&&n.phase!=="reveal"||(n.phase="boil",n.boilStartMs=performance.now(),n.boilHandoffStartMs=0,n.pendingReveal=null,n.boilPattern=null,n.sampleFrameCounter=0,n.sampleDataCache=null,n.holdPaintedImg=null,e.canvas.style.opacity="1")},clear(){let o=n.active;n.active=!1,n.phase="idle",n.image=null,n.boilHandoffStartMs=0,n.pendingReveal=null,n.holdPaintedImg=null,e.clearRect(0,0,e.canvas.width,e.canvas.height),o&&(e.canvas.style.filter="none",e.canvas.style.opacity="1",i.style.opacity="1")},isActive(){return n.active},dispose(){n.image=null,n.sampleCanvas=null,n.sampleCtx=null,n.sampleImgData=null,n.sampleDataCache=null,n.sampleFrameCounter=0,n.maskGrad=null,n.maskGradCtx=null,n.maskImgData=null,n.gsFlickerTable=null,n.pixCanvas=null,n.pixCtx=null,n.pixDrop=null,n.pixDropCtx=null,n.pixDropImgData=null,n.pixDropPattern=null,n.boilPattern=null,n.boilField=null,n.pendingReveal=null,n.coverA=null,n.coverB=null,n.holdPaintedImg=null,n.sampleGpuCanvas=null,n.sampleGpuCtx=null}}}function Bc(t,e){if(t.length===0)return null;if(t.length===1)return{src:t[0],idx:0};let n;do n=Math.floor(Math.random()*t.length);while(n===e);return{src:t[n],idx:n}}function Dp(t){let e=t.images.slice(),n=t.delayRange,i=t.holdMs,r=t.fadeOutMs,s=t.onPhase,o=t.excludeSrcs,a="idle",l=null,c=-1,h=!1,f=!1,d=null,m=!1,x="auto";function _(E){a=E,s?.({phase:E,src:d})}function p(){l!=null&&(clearTimeout(l),l=null)}function u(){if(typeof i=="number")return Math.max(0,i);let[E,R]=i,H=Math.max(0,Math.min(E,R)),y=Math.max(0,Math.max(E,R));return H+Math.random()*(y-H)}function g(E){if(!h||f)return;_("idle");let[R,H]=n,y=R+Math.random()*Math.max(0,H-R),A=E??y*1e3;p(),l=setTimeout(()=>{l=null,P(!0,"auto")},A)}function v(){f||(_("hide"),t.reveal.startHide(r),p(),l=setTimeout(()=>{l=null,!f&&(d=null,m?g():(h=!1,_("idle")))},r))}function M(){if(e.length===0)return null;let E=o?.(),R=E==null?null:E instanceof Set?E:new Set(E);if(!R||R.size===0)return Bc(e,c);let H=c>=0&&c<e.length?e[c]:null,y=[];for(let N=0;N<e.length;N++){let O=e[N];R.has(O)||O===H&&e.length>R.size+1||y.push(N)}if(y.length===0)return Bc(e,c);let A=y[Math.floor(Math.random()*y.length)];return{src:e[A],idx:A}}function P(E,R){if(!h||f)return;if(e.length===0){E?g(500):h=!1;return}let H=M();if(!H){E?g(500):h=!1;return}c=H.idx,d=H.src,m=E,x=R,Ip(H.src).then(y=>{!h||f||(_("reveal"),t.reveal.startReveal({image:y,cssWidth:t.reveal.canvas.clientWidth||t.reveal.canvas.width,cssHeight:t.reveal.canvas.clientHeight||t.reveal.canvas.height,onRevealComplete:()=>{if(!h||f)return;if(_("visible"),R==="manual"){p();return}p();let A=u();l=setTimeout(()=>{l=null,!(!h||f)&&v()},A)}}))}).catch(()=>{d=null,E?g(500):h=!1})}function b(E){if(f||a==="reveal"||a==="visible"||a==="hide")return;let R=h;p(),R||(h=!0),P(R,E?.hold??"auto")}return{start(){if(h)return;h=!0,f=!1;let E=t.initialDelayMs??Math.random()*1500;g(E)},stop(){h=!1,p(),t.reveal.clear(),d=null,a="idle"},triggerOnce(E){b(E)},triggerHide(){f||a!=="reveal"&&a!=="visible"||v()},triggerBoil(E){if(f||a!=="reveal"&&a!=="visible")return;p(),t.reveal.startBoil(),d=null,h=!1,_("idle");let R=E?.autoRevealAfterMs;R!=null&&Number.isFinite(R)&&(l=setTimeout(()=>{l=null,b({hold:"manual"})},Math.max(0,R)))},getPhase(){return a},setPaused(E){if(f!==E){if(f=E,f)p();else if(h)if(a==="visible"){if(x==="manual")return;p(),l=setTimeout(()=>{l=null,v()},Math.min(u(),500))}else a==="hide"?(p(),l=setTimeout(()=>{l=null,d=null,g()},r)):g()}},setImages(E){e=E.slice(),c=-1},setExcludeSrcs(E){o=E??void 0},setOptions(E){E.delayRange&&(n=E.delayRange),E.holdMs!=null&&(i=E.holdMs),E.fadeOutMs!=null&&(r=E.fadeOutMs),E.onPhase&&(s=E.onPhase)},isRunning(){return h&&!f},dispose(){h=!1,p()}}}var cx=(t,e,n)=>.299*t+.587*e+.114*n,ux=(t,e,n)=>`#${[t,e,n].map(i=>Math.round(i).toString(16).padStart(2,"0")).join("")}`,hr=24,kc=null,zc=null;function pT(){return zc||(typeof document>"u"?null:(kc=document.createElement("canvas"),kc.width=hr,kc.height=hr,zc=kc.getContext("2d",{willReadFrequently:!0}),zc))}function Np(t,e){if(t.width===0||t.height===0)return null;let n=pT();if(!n)return null;n.imageSmoothingEnabled=!0,n.clearRect(0,0,hr,hr),n.drawImage(t,0,0,hr,hr);let i;try{i=n.getImageData(0,0,hr,hr).data}catch{return null}let r=[],s=0,o=0,a=0;for(let f=0;f<i.length;f+=4){if(i[f+3]<8)continue;let d=i[f],m=i[f+1],x=i[f+2];r.push({r:d,g:m,b:x,lum:cx(d,m,x)}),s+=d,o+=m,a+=x}if(r.length===0)return null;r.sort((f,d)=>f.lum-d.lum);let l=ux(s/r.length,o/r.length,a/r.length),c=e.map((f,d)=>{let[m,x,_]=ni(f);return{slot:d,lum:cx(m,x,_)}}).sort((f,d)=>f.lum-d.lum),h=new Array(c.length);for(let f=0;f<c.length;f++){let d=.05+.9*f/Math.max(1,c.length-1),m=r[Math.min(r.length-1,Math.round(d*(r.length-1)))];h[c[f].slot]=ux(m.r,m.g,m.b)}return{colors:h,cardBg:l}}var hx="img-fx-styles",mT=`
.image-gen-root {
  position: relative;
  display: inline-block;
  isolation: isolate;
  overflow: hidden;
  vertical-align: top;
  line-height: 0;
  flex: 0 0 auto;
}

.image-gen-root > .image-gen-shader,
.image-gen-root > .image-gen-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
  display: block;
}

.image-gen-root > .image-gen-shader {
  z-index: 1;
}

.image-gen-root > .image-gen-overlay {
  z-index: 2;
}

.image-gen-root > .image-gen-child {
  position: relative;
  z-index: 0;
  display: block;
  line-height: normal;
}
`,Up=!1;function Fp(){if(typeof document>"u"||Up)return;if(document.getElementById(hx)){Up=!0;return}let t=document.createElement("style");t.id=hx,t.textContent=mT,document.head.appendChild(t),Up=!0}var io=pr(ma(),1);Fp();function mx(){if(typeof document>"u")return"dark";let t=document.documentElement,e=t.getAttribute("data-theme");if(e==="dark"||e==="light")return e;if(t.classList.contains("dark"))return"dark";if(t.classList.contains("light"))return"light";let n=t.style.colorScheme||getComputedStyle(t).colorScheme;return n==="dark"?"dark":n==="light"?"light":typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"}function MT(t){let[e,n]=(0,Ue.useState)(()=>t!=="auto"?t:mx());return(0,Ue.useEffect)(()=>{if(t!=="auto"){n(t);return}if(typeof window>"u")return;let i=()=>n(mx());i();let r=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;r?.addEventListener("change",i);let s=null;return typeof document<"u"&&typeof MutationObserver<"u"&&(s=new MutationObserver(i),s.observe(document.documentElement,{attributes:!0,attributeFilter:["class","style","data-theme"]})),()=>{r?.removeEventListener("change",i),s?.disconnect()}},[t]),e}function AT(t){return t?typeof t=="string"?[t]:t.slice():[]}var Op=["pixels-mechanic","pixels-organic"];function wT(t){return Op.includes(t)}var Vc=(0,Ue.forwardRef)(function({children:e,preset:n="pixels-organic",theme:i="auto",strength:r=1,pixelScale:s=1,cardBg:o,colors:a,images:l,autoReveal:c=!1,revealDelayRange:h=[2,4],revealInitialDelay:f,revealHoldMs:d=2e3,revealFadeOutMs:m=300,borderRadius:x,paused:_=!1,onCycle:p,excludeSrcs:u,className:g,style:v,...M},P){let b=(0,Ue.useRef)(null),E=(0,Ue.useRef)(null),R=(0,Ue.useRef)(null),H=(0,Ue.useRef)(null),y=(0,Ue.useRef)(null),A=(0,Ue.useRef)(null),N=(0,Ue.useRef)(null),O=(0,Ue.useRef)(p),G=(0,Ue.useRef)(u),[q,F]=(0,Ue.useState)(null),[Z,z]=(0,Ue.useState)(null);(0,Ue.useImperativeHandle)(P,()=>({get element(){return b.current},triggerReveal(C){N.current?.triggerOnce(C)},triggerHide(){N.current?.triggerHide()},triggerRegenerate(C){let We=N.current;if(!We||K.current)return;let Ie=We.getPhase();if(Ie!=="reveal"&&Ie!=="visible")return;let Oe=He.current,Se=wT(Oe)?null:Op[Math.floor(Math.random()*Op.length)];if(C?.tintFromImage??!0){let Ce=R.current;if(Ce){let T=Se?Oc[Se].modes[X.current].colors:Me.current.colors,S=Np(Ce,T);S&&F(S)}}Se&&z(Se);let Je=C?.autoReveal??!0;We.triggerBoil(Je?{autoRevealAfterMs:C?.durationMs??4e3}:void 0)},isImageActive(){let C=N.current?.getPhase()??"idle";return C==="reveal"||C==="visible"||C==="hide"}}),[]),(0,Ue.useLayoutEffect)(()=>{Fp()},[]),(0,Ue.useEffect)(()=>{O.current=p},[p]),(0,Ue.useEffect)(()=>{G.current=u},[u]);let ie=MT(i),te=(0,Ue.useMemo)(()=>Oc[n].modes[ie],[n,ie]),le=o??te.cardBg,Me=(0,Ue.useRef)(te);Me.current=te;let He=(0,Ue.useRef)(n);He.current=n;let X=(0,Ue.useRef)(ie);X.current=ie;let K=(0,Ue.useRef)(_);K.current=_;let ce=(0,Ue.useMemo)(()=>AT(l),[l]),se=(0,Ue.useRef)(ce),pe=(0,Ue.useRef)(h),ve=(0,Ue.useRef)(d),Ae=(0,Ue.useRef)(m);se.current=ce,pe.current=h,ve.current=d,Ae.current=m;let Ne=(0,Ue.useRef)((0,Ue.useMemo)(()=>{if(f==null)return;if(typeof f=="number")return Math.max(0,f)*1e3;let[C,We]=f,Ie=Math.max(0,Math.min(C,We)),Oe=Math.max(0,Math.max(C,We));return(Ie+Math.random()*(Oe-Ie))*1e3},[]));(0,Ue.useLayoutEffect)(()=>{let C=b.current,We=E.current,Ie=R.current;if(!C||!We||!Ie)return;let Oe=()=>{let re=C.getBoundingClientRect(),he=Math.max(1,Math.round(re.width)),de=Math.max(1,Math.round(re.height)),ae=0;if(typeof x=="number")ae=x;else{let Xe=H.current?.firstElementChild;if(Xe){let De=parseFloat(getComputedStyle(Xe).borderTopLeftRadius);Number.isFinite(De)&&De>0&&(ae=De)}if(ae===0){let De=parseFloat(getComputedStyle(C).borderTopLeftRadius);Number.isFinite(De)&&De>0&&(ae=De)}}return{w:he,h:de,r:ae}},Se=Oe(),Je=vp({canvas:We,cssWidth:Se.w,cssHeight:Se.h,preset:te,strength:r,cardBg:o??null,pixelScale:s});y.current=Je,Je.canvas.style.opacity=String(Math.max(0,Math.min(1,r)));let Ce=Lp({canvas:Ie,cssWidth:Se.w,cssHeight:Se.h,shaderCanvas:We});Je.reveal=Ce,A.current=Ce;let T=Dp({reveal:Ce,images:se.current,delayRange:pe.current,holdMs:ve.current,fadeOutMs:Ae.current,initialDelayMs:Ne.current,onPhase:re=>{re.phase==="visible"&&(F(null),z(null)),O.current?.(re)},excludeSrcs:()=>G.current?.()??null});N.current=T,_&&T.setPaused(!0),C.style.setProperty("--image-gen-radius",`${Se.r}px`),C.style.borderRadius=`${Se.r}px`;let S=0,U=-1,Y=-1,j=-1,J=()=>{S=0;let re=y.current;if(!re)return;let he=Oe();(he.w!==U||he.h!==Y)&&(xp(re,he.w,he.h),U=he.w,Y=he.h),he.r!==j&&(C.style.setProperty("--image-gen-radius",`${he.r}px`),C.style.borderRadius=`${he.r}px`,j=he.r)},Ee=()=>{S===0&&(S=requestAnimationFrame(J))},ue=new ResizeObserver(Ee);ue.observe(C);let $=H.current?.firstElementChild;$&&ue.observe($);let Le=null;$&&typeof MutationObserver<"u"&&(Le=new MutationObserver(Ee),Le.observe($,{attributes:!0,attributeFilter:["class","style"]})),U=Se.w,Y=Se.h,j=Se.r;let ee=null;return typeof IntersectionObserver<"u"&&(ee=new IntersectionObserver(re=>{let he=y.current;if(he)for(let de of re)Ap(he,de.isIntersecting)},{rootMargin:"64px"}),ee.observe(C)),()=>{ue.disconnect(),Le?.disconnect(),ee?.disconnect(),S!==0&&cancelAnimationFrame(S),N.current?.dispose(),N.current=null,Ce.dispose(),A.current=null;let re=y.current;re&&yp(re),y.current=null}},[]),(0,Ue.useEffect)(()=>{let C=y.current;if(!C)return;let We=Z?Oc[Z].modes[ie]:te;_p(C,We),eo(C)},[te,Z,ie]),(0,Ue.useEffect)(()=>{let C=y.current;C&&(Sp(C,q?.cardBg??o??null),eo(C))},[o,q]),(0,Ue.useEffect)(()=>{let C=y.current;C&&(Mp(C,q?.colors??a??null),eo(C))},[a,q]),(0,Ue.useEffect)(()=>{let C=y.current;C&&(Ep(C,r),C.canvas&&(C.canvas.style.opacity=String(Math.max(0,Math.min(1,r)))))},[r]),(0,Ue.useEffect)(()=>{let C=y.current;C&&(bp(C,s),eo(C))},[s]),(0,Ue.useEffect)(()=>{let C=y.current;C&&wp(C,_),N.current?.setPaused(_)},[_]),(0,Ue.useEffect)(()=>{N.current?.setImages(ce)},[ce]),(0,Ue.useEffect)(()=>{N.current?.setOptions({delayRange:h,holdMs:d,fadeOutMs:m})},[h,d,m]),(0,Ue.useEffect)(()=>{let C=N.current;if(C){if(c)return C.start(),()=>C.stop();C.stop()}},[c]);let Fe=(0,Ue.useMemo)(()=>({background:q?.cardBg??le,...v}),[le,q,v]);return(0,io.jsxs)("div",{...M,ref:b,className:["image-gen-root",g].filter(Boolean).join(" "),"data-preset":n,"data-theme":ie,"data-paused":_?"true":void 0,style:Fe,children:[(0,io.jsx)("canvas",{ref:E,className:"image-gen-shader","aria-hidden":"true"}),(0,io.jsx)("canvas",{ref:R,className:"image-gen-overlay","aria-hidden":"true"}),(0,io.jsx)("div",{ref:H,className:"image-gen-child",children:e})]})});Vc.displayName="ImageGeneration";var gx="data:image/avif;base64,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";var ke=pr(ma()),ET=[["pixels-organic","Organisk","Chromium Flow: en pixelmosaik med mjuka, organiska krom-\xE5sar"],["pixels-mechanic","Mekanisk","Nebula: en mer kantig, maskinell pixelmosaik"],["sweep-gradient","Svep","En diagonal gradient som sveper \xF6ver kortet med flimrande celler, och bilden byggs upp cell f\xF6r cell"]],dr={get(t,e){try{let n=localStorage.getItem("imgfx:"+t);return n==null?e:JSON.parse(n)}catch{return e}},set(t,e){try{localStorage.setItem("imgfx:"+t,JSON.stringify(e))}catch{}}};function vx(t,e){let n=document.createElement("canvas");n.width=n.height=640;let i=n.getContext("2d"),r=i.createLinearGradient(0,0,640,640);t.forEach((a,l)=>r.addColorStop(l/(t.length-1),a)),i.fillStyle=r,i.fillRect(0,0,640,640);let s=e,o=()=>(s=(s*9301+49297)%233280,s/233280);for(let a=0;a<7;a++){let l=o()*640,c=o()*640,h=80+o()*220,f=i.createRadialGradient(l,c,0,l,c,h);f.addColorStop(0,`hsla(${Math.floor(o()*360)}, 80%, 70%, 0.55)`),f.addColorStop(1,"hsla(0,0%,100%,0)"),i.fillStyle=f,i.fillRect(0,0,640,640)}return n.toDataURL("image/jpeg",.9)}function bT(){let[t,e]=Gt.useState(()=>dr.get("theme","light"));return Gt.useEffect(()=>{document.documentElement.dataset.theme=t,dr.set("theme",t)},[t]),[t,e]}function TT(t,e){let n=[`preset="${t}"`,'images={["/img/a.jpg", "/img/b.jpg"]}'];return e.autoReveal&&n.push("autoReveal"),e.pixelScale!==1&&n.push(`pixelScale={${e.pixelScale}}`),e.strength!==1&&n.push(`strength={${e.strength}}`),`import { ImageGeneration } from "img-fx"

<ImageGeneration
  ${n.join(`
  `)}
>
  <div style={{ width: 320, height: 320, borderRadius: 20 }} />
</ImageGeneration>`}var yx={autoReveal:!0,pixelScale:1,strength:1,paused:!1};function CT({preset:t,label:e,desc:n,images:i,s:r,selected:s,fav:o,onSelect:a,onFav:l}){let c=Gt.useRef(null);return(0,ke.jsxs)("div",{className:"card","aria-selected":s,onClick:a,children:[(0,ke.jsx)("button",{className:"star","aria-pressed":o,"aria-label":`Favorit: ${e}`,onClick:h=>{h.stopPropagation(),l()},children:"\u2605"}),(0,ke.jsx)("div",{className:"stage",children:(0,ke.jsx)(Vc,{ref:c,preset:t,images:i,autoReveal:r.autoReveal,pixelScale:r.pixelScale,strength:r.strength,paused:r.paused,children:(0,ke.jsx)("div",{style:{width:240,height:240,borderRadius:16}})})}),(0,ke.jsxs)("div",{className:"name",children:[e," ",(0,ke.jsx)("code",{children:t})]}),(0,ke.jsx)("p",{className:"desc",children:n}),(0,ke.jsxs)("div",{className:"actions",onClick:h=>h.stopPropagation(),children:[(0,ke.jsx)("button",{className:"btn",onClick:()=>c.current?.triggerReveal(),children:"Visa bild"}),(0,ke.jsx)("button",{className:"btn",onClick:()=>c.current?.triggerRegenerate?.({durationMs:3e3}),children:"Generera om"})]})]})}function RT(){let[t,e]=bT(),[n,i]=Gt.useState(()=>({...yx,...dr.get("settings",{})})),[r,s]=Gt.useState(()=>dr.get("selected","pixels-organic")),[o,a]=Gt.useState(()=>dr.get("favs",[])),[l,c]=Gt.useState([]),[h,f]=Gt.useState(!1),d=Gt.useMemo(()=>[gx,vx(["#1e1b4b","#7c3aed","#f472b6"],7),vx(["#022c22","#0ea5e9","#fde68a"],42)],[]),m=l.length?l:d;Gt.useEffect(()=>dr.set("settings",n),[n]),Gt.useEffect(()=>dr.set("selected",r),[r]),Gt.useEffect(()=>dr.set("favs",o),[o]);let x=(p,u)=>i(g=>({...g,[p]:u})),_=TT(r,n);return(0,ke.jsxs)("main",{children:[(0,ke.jsxs)("header",{children:[(0,ke.jsx)("h1",{children:"Image generation (img-fx)"}),(0,ke.jsx)("p",{children:'Tre WebGL-effekter som "genererar" och sedan visar en bild. Klicka p\xE5 ett kort f\xF6r att se koden, och stj\xE4rnm\xE4rk dina favoriter.'})]}),(0,ke.jsxs)("div",{className:"toolbar",role:"toolbar","aria-label":"Inst\xE4llningar",children:[(0,ke.jsxs)("div",{className:"seg",role:"group","aria-label":"Tema",children:[(0,ke.jsx)("button",{className:"btn","aria-pressed":t==="light",onClick:()=>e("light"),children:"Ljust"}),(0,ke.jsx)("button",{className:"btn","aria-pressed":t==="dark",onClick:()=>e("dark"),children:"M\xF6rkt"})]}),(0,ke.jsxs)("label",{className:"ctl",children:["Pixelstorlek",(0,ke.jsx)("input",{type:"range",min:.5,max:2.5,step:.05,value:n.pixelScale,onChange:p=>x("pixelScale",+p.target.value)}),(0,ke.jsxs)("output",{children:[n.pixelScale,"\xD7"]})]}),(0,ke.jsxs)("label",{className:"ctl",children:["Styrka",(0,ke.jsx)("input",{type:"range",min:.2,max:1,step:.05,value:n.strength,onChange:p=>x("strength",+p.target.value)}),(0,ke.jsx)("output",{children:n.strength})]}),(0,ke.jsx)("button",{className:"btn","aria-pressed":n.autoReveal,onClick:()=>x("autoReveal",!n.autoReveal),children:"Auto-visa"}),(0,ke.jsx)("button",{className:"btn","aria-pressed":n.paused,onClick:()=>x("paused",!n.paused),children:n.paused?"Spela":"Pausa"}),(0,ke.jsxs)("label",{className:"btn file",children:["Egna bilder\u2026",(0,ke.jsx)("input",{type:"file",accept:"image/*",multiple:!0,onChange:p=>{let u=Array.from(p.target.files??[]);u.length&&c(u.map(g=>URL.createObjectURL(g)))}})]}),l.length>0&&(0,ke.jsx)("button",{className:"btn",onClick:()=>c([]),children:"Standardbilder"}),(0,ke.jsx)("button",{className:"btn",onClick:()=>i(yx),children:"\xC5terst\xE4ll"})]}),(0,ke.jsx)("div",{className:"grid",children:ET.map(([p,u,g])=>(0,ke.jsx)(CT,{preset:p,label:u,desc:g,images:m,s:n,selected:r===p,fav:o.includes(p),onSelect:()=>s(p),onFav:()=>a(v=>v.includes(p)?v.filter(M=>M!==p):[...v,p])},p+m.length+m[0].slice(-16)))}),(0,ke.jsx)("p",{className:"favs",children:o.length?"Favoriter: "+o.join(", "):"Inga favoriter \xE4n. Klicka p\xE5 \u2605 p\xE5 ett kort."}),(0,ke.jsxs)("section",{className:"detail",children:[(0,ke.jsxs)("div",{className:"code-head",children:[(0,ke.jsx)("span",{children:"React: npm install img-fx three"}),(0,ke.jsx)("button",{className:"btn",onClick:async()=>{try{await navigator.clipboard.writeText(_),f(!0),setTimeout(()=>f(!1),1500)}catch{}},children:h?"Kopierat!":"Kopiera"})]}),(0,ke.jsx)("pre",{children:(0,ke.jsx)("code",{children:_})})]}),(0,ke.jsxs)("footer",{children:["img-fx \xA9 Jakub Antalik, MIT-licens. ",(0,ke.jsx)("a",{href:"https://libraries.dev/image.html",children:"libraries.dev/image"})," \xB7"," ",(0,ke.jsx)("a",{href:"https://github.com/Jakubantalik/img-fx",children:"GitHub"}),". Byggd lokalt fr\xE5n ",(0,ke.jsx)("code",{children:"../source"})," med React 18 och three.js."]})]})}(0,xx.createRoot)(document.getElementById("root")).render((0,ke.jsx)(RT,{}));})();
