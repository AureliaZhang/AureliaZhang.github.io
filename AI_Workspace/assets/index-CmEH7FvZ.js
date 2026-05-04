(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce=e=>{let t=g(e)?Number(e):NaN;return isNaN(t)?e:t},le,ue=()=>le||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function k(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):k(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function he(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=he(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ge=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_e=e(ge);ge+``;function ve(e){return!!e||e===``}function ye(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=be(e[r],t[r]);return n}function be(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ye(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!be(e[n],t[n]))return!1}}return String(e)===String(t)}function xe(e,t){return e.findIndex(e=>be(e,t))}var Se=e=>!!(e&&e.__v_isRef===!0),A=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Se(e)?A(e.value):JSON.stringify(e,Ce,2):String(e),Ce=(e,t)=>Se(t)?Ce(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[we(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>we(e))}:_(t)?we(t):v(t)&&!d(t)&&!C(t)?String(t):t,we=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,j,Te=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=j,!e&&j&&(this.index=(j.scopes||=[]).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=j;try{return j=this,e()}finally{j=t}}}on(){++this._on===1&&(this.prevScope=j,j=this)}off(){if(this._on>0&&--this._on===0){if(j===this)j=this.prevScope;else{let e=j;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Ee(){return j}var M,De=new WeakSet,Oe=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,j&&j.active&&j.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,De.has(this)&&(De.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Me(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ge(this),Fe(this);let e=M,t=Ve;M=this,Ve=!0;try{return this.fn()}finally{Ie(this),M=e,Ve=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ze(e);this.deps=this.depsTail=void 0,Ge(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?De.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Le(this)&&this.run()}get dirty(){return Le(this)}},ke=0,Ae,je;function Me(e,t=!1){if(e.flags|=8,t){e.next=je,je=e;return}e.next=Ae,Ae=e}function Ne(){ke++}function Pe(){if(--ke>0)return;if(je){let e=je;for(je=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ae;){let t=Ae;for(Ae=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Fe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ie(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),ze(r),Be(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Le(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Re(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Re(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ke)||(e.globalVersion=Ke,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Le(e))))return;e.flags|=2;let t=e.dep,n=M,r=Ve;M=e,Ve=!0;try{Fe(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,Ve=r,Ie(e),e.flags&=-3}}function ze(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)ze(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Be(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ve=!0,He=[];function Ue(){He.push(Ve),Ve=!1}function We(){let e=He.pop();Ve=e===void 0?!0:e}function Ge(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var Ke=0,qe=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Je=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!Ve||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new qe(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,Ye(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,Ke++,this.notify(e)}notify(e){Ne();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Pe()}}};function Ye(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ye(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Xe=new WeakMap,Ze=Symbol(``),Qe=Symbol(``),$e=Symbol(``);function N(e,t,n){if(Ve&&M){let t=Xe.get(e);t||Xe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Je),r.map=t,r.key=n),r.track()}}function et(e,t,n,r,i,a){let o=Xe.get(e);if(!o){Ke++;return}let s=e=>{e&&e.trigger()};if(Ne(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===$e||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get($e)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ze)),f(e)&&s(o.get(Qe)));break;case`delete`:i||(s(o.get(Ze)),f(e)&&s(o.get(Qe)));break;case`set`:f(e)&&s(o.get(Ze));break}}Pe()}function tt(e){let t=F(e);return t===e?t:(N(t,`iterate`,$e),P(e)?t:t.map(Ut))}function nt(e){return N(e=F(e),`iterate`,$e),e}function rt(e,t){return Bt(e)?Wt(zt(e)?Ut(t):t):Ut(t)}var it={__proto__:null,[Symbol.iterator](){return at(this,Symbol.iterator,e=>rt(this,e))},concat(...e){return tt(this).concat(...e.map(e=>d(e)?tt(e):e))},entries(){return at(this,`entries`,e=>(e[1]=rt(this,e[1]),e))},every(e,t){return st(this,`every`,e,t,void 0,arguments)},filter(e,t){return st(this,`filter`,e,t,e=>e.map(e=>rt(this,e)),arguments)},find(e,t){return st(this,`find`,e,t,e=>rt(this,e),arguments)},findIndex(e,t){return st(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return st(this,`findLast`,e,t,e=>rt(this,e),arguments)},findLastIndex(e,t){return st(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return st(this,`forEach`,e,t,void 0,arguments)},includes(...e){return lt(this,`includes`,e)},indexOf(...e){return lt(this,`indexOf`,e)},join(e){return tt(this).join(e)},lastIndexOf(...e){return lt(this,`lastIndexOf`,e)},map(e,t){return st(this,`map`,e,t,void 0,arguments)},pop(){return ut(this,`pop`)},push(...e){return ut(this,`push`,e)},reduce(e,...t){return ct(this,`reduce`,e,t)},reduceRight(e,...t){return ct(this,`reduceRight`,e,t)},shift(){return ut(this,`shift`)},some(e,t){return st(this,`some`,e,t,void 0,arguments)},splice(...e){return ut(this,`splice`,e)},toReversed(){return tt(this).toReversed()},toSorted(e){return tt(this).toSorted(e)},toSpliced(...e){return tt(this).toSpliced(...e)},unshift(...e){return ut(this,`unshift`,e)},values(){return at(this,`values`,e=>rt(this,e))}};function at(e,t,n){let r=nt(e),i=r[t]();return r!==e&&!P(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var ot=Array.prototype;function st(e,t,n,r,i,a){let o=nt(e),s=o!==e&&!P(e),c=o[t];if(c!==ot[t]){let t=c.apply(e,a);return s?Ut(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,rt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ct(e,t,n,r){let i=nt(e),a=i!==e&&!P(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=rt(e,t)),n.call(this,t,rt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?rt(e,c):c}function lt(e,t,n){let r=F(e);N(r,`iterate`,$e);let i=r[t](...n);return(i===-1||i===!1)&&Vt(n[0])?(n[0]=F(n[0]),r[t](...n)):i}function ut(e,t,n=[]){Ue(),Ne();let r=F(e)[t].apply(e,n);return Pe(),We(),r}var dt=e(`__proto__,__v_isRef,__isVue`),ft=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function pt(e){_(e)||(e=String(e));let t=F(this);return N(t,`has`,e),t.hasOwnProperty(e)}var mt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Mt:jt:i?At:kt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=it[t]))return e;if(t===`hasOwnProperty`)return pt}let o=Reflect.get(e,t,I(e)?e:n);if((_(t)?ft.has(t):dt(t))||(r||N(e,`get`,t),i))return o;if(I(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Lt(e):e}return v(o)?r?Lt(o):Ft(o):o}},ht=class extends mt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Bt(i);if(!P(n)&&!Bt(n)&&(i=F(i),n=F(n)),!a&&I(i)&&!I(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,I(e)?e:r);return e===F(r)&&(o?D(n,i)&&et(e,`set`,t,n,i):et(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&et(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ft.has(t))&&N(e,`has`,t),n}ownKeys(e){return N(e,`iterate`,d(e)?`length`:Ze),Reflect.ownKeys(e)}},gt=class extends mt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},_t=new ht,vt=new gt,yt=new ht(!0),bt=e=>e,xt=e=>Reflect.getPrototypeOf(e);function St(e,t,n){return function(...r){let i=this.__v_raw,a=F(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?bt:t?Wt:Ut;return!t&&N(a,`iterate`,l?Qe:Ze),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function Ct(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function wt(e,t){let n={get(n){let r=this.__v_raw,i=F(r),a=F(n);e||(D(n,a)&&N(i,`get`,n),N(i,`get`,a));let{has:o}=xt(i),s=t?bt:e?Wt:Ut;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&N(F(t),`iterate`,Ze),t.size},has(t){let n=this.__v_raw,r=F(n),i=F(t);return e||(D(t,i)&&N(r,`has`,t),N(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=F(a),s=t?bt:e?Wt:Ut;return!e&&N(o,`iterate`,Ze),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:Ct(`add`),set:Ct(`set`),delete:Ct(`delete`),clear:Ct(`clear`)}:{add(e){let n=F(this),r=xt(n),i=F(e),a=!t&&!P(e)&&!Bt(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),et(n,`add`,a,a)),this},set(e,n){!t&&!P(n)&&!Bt(n)&&(n=F(n));let r=F(this),{has:i,get:a}=xt(r),o=i.call(r,e);o||=(e=F(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&et(r,`set`,e,n,s):et(r,`add`,e,n),this},delete(e){let t=F(this),{has:n,get:r}=xt(t),i=n.call(t,e);i||=(e=F(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&et(t,`delete`,e,void 0,a),o},clear(){let e=F(this),t=e.size!==0,n=e.clear();return t&&et(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=St(r,e,t)}),n}function Tt(e,t){let n=wt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Et={get:Tt(!1,!1)},Dt={get:Tt(!1,!0)},Ot={get:Tt(!0,!1)},kt=new WeakMap,At=new WeakMap,jt=new WeakMap,Mt=new WeakMap;function Nt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Pt(e){return e.__v_skip||!Object.isExtensible(e)?0:Nt(S(e))}function Ft(e){return Bt(e)?e:Rt(e,!1,_t,Et,kt)}function It(e){return Rt(e,!1,yt,Dt,At)}function Lt(e){return Rt(e,!0,vt,Ot,jt)}function Rt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let a=Pt(e);if(a===0)return e;let o=i.get(e);if(o)return o;let s=new Proxy(e,a===2?r:n);return i.set(e,s),s}function zt(e){return Bt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function P(e){return!!(e&&e.__v_isShallow)}function Vt(e){return e?!!e.__v_raw:!1}function F(e){let t=e&&e.__v_raw;return t?F(t):e}function Ht(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Ut=e=>v(e)?Ft(e):e,Wt=e=>v(e)?Lt(e):e;function I(e){return e?e.__v_isRef===!0:!1}function L(e){return Gt(e,!1)}function Gt(e,t){return I(e)?e:new Kt(e,t)}var Kt=class{constructor(e,t){this.dep=new Je,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:F(e),this._value=t?e:Ut(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||P(e)||Bt(e);e=n?e:F(e),D(e,t)&&(this._rawValue=e,this._value=n?e:Ut(e),this.dep.trigger())}};function R(e){return I(e)?e.value:e}var qt={get:(e,t,n)=>t===`__v_raw`?e:R(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return I(i)&&!I(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Jt(e){return zt(e)?e:new Proxy(e,qt)}var Yt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Je(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ke-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Me(this,!0),!0}get value(){let e=this.dep.track();return Re(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Xt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Yt(r,i,n)}var Zt={},Qt=new WeakMap,$t=void 0;function en(e,t=!1,n=$t){if(n){let t=Qt.get(n);t||Qt.set(n,t=[]),t.push(e)}}function tn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:P(e)||o===!1||o===0?nn(e,1):nn(e),m,g,_,v,y=!1,b=!1;if(I(e)?(g=()=>e.value,y=P(e)):zt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>zt(e)||P(e)),g=()=>e.map(e=>{if(I(e))return e.value;if(zt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ue();try{_()}finally{We()}}let t=$t;$t=m;try{return f?f(e,3,[v]):e(v)}finally{$t=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>nn(e(),t)}let x=Ee(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{e(...t),S()}}let C=b?Array(e.length).fill(Zt):Zt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let e=m.run();if(o||y||(b?e.some((e,t)=>D(e,C[t])):D(e,C))){_&&_();let t=$t;$t=m;try{let t=[e,C===Zt?void 0:b&&C[0]===Zt?[]:C,v];C=e,f?f(n,3,t):n(...t)}finally{$t=t}}}else m.run()};return u&&u(w),m=new Oe(g),m.scheduler=l?()=>l(w,!1):w,v=e=>en(e,!1,m),_=m.onStop=()=>{let e=Qt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Qt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function nn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,I(e))nn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)nn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{nn(e,t,n)});else if(C(e)){for(let r in e)nn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&nn(e[r],t,n)}return e}function rn(e,t,n,r){try{return r?e(...r):e()}catch(e){on(e,t,n)}}function an(e,t,n,r){if(h(e)){let i=rn(e,t,n,r);return i&&y(i)&&i.catch(e=>{on(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(an(e[a],t,n,r));return i}}function on(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ue(),rn(o,null,10,[e,i,a]),We();return}}sn(e,r,a,i,s)}function sn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var z=[],cn=-1,ln=[],un=null,dn=0,fn=Promise.resolve(),pn=null;function mn(e){let t=pn||fn;return e?t.then(this?e.bind(this):e):t}function hn(e){let t=cn+1,n=z.length;for(;t<n;){let r=t+n>>>1,i=z[r],a=xn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function gn(e){if(!(e.flags&1)){let t=xn(e),n=z[z.length-1];!n||!(e.flags&2)&&t>=xn(n)?z.push(e):z.splice(hn(t),0,e),e.flags|=1,_n()}}function _n(){pn||=fn.then(Sn)}function vn(e){d(e)?ln.push(...e):un&&e.id===-1?un.splice(dn+1,0,e):e.flags&1||(ln.push(e),e.flags|=1),_n()}function yn(e,t,n=cn+1){for(;n<z.length;n++){let t=z[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;z.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function bn(e){if(ln.length){let e=[...new Set(ln)].sort((e,t)=>xn(e)-xn(t));if(ln.length=0,un){un.push(...e);return}for(un=e,dn=0;dn<un.length;dn++){let e=un[dn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}un=null,dn=0}}var xn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Sn(e){try{for(cn=0;cn<z.length;cn++){let e=z[cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),rn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cn<z.length;cn++){let e=z[cn];e&&(e.flags&=-2)}cn=-1,z.length=0,bn(e),pn=null,(z.length||ln.length)&&Sn(e)}}var B=null,Cn=null;function wn(e){let t=B;return B=e,Cn=e&&e.type.__scopeId||null,t}function Tn(e,t=B,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&zi(-1);let i=wn(t),a;try{a=e(...n)}finally{wn(i),r._d&&zi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function En(e,n){if(B===null)return e;let r=ya(B),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&nn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function Dn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ue(),an(c,n,8,[e.el,s,e,t]),We())}}function On(e,t){if(Q){let n=Q.provides,r=Q.parent&&Q.parent.provides;r===n&&(n=Q.provides=Object.create(r)),n[e]=t}}function kn(e,t,n=!1){let r=ia();if(r||Gr){let i=Gr?Gr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var An=Symbol.for(`v-scx`),jn=()=>kn(An);function Mn(e,t,n){return Nn(e,t,n)}function Nn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ua){if(c===`sync`){let e=jn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=Q;u.call=(e,t,n)=>an(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{U(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():gn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=tn(e,n,u);return ua&&(f?f.push(h):d&&h()),h}function Pn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Fn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=sa(this),s=Nn(i,a.bind(r),n);return o(),s}function Fn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var In=Symbol(`_vte`),Ln=e=>e.__isTeleport,Rn=Symbol(`_leaveCb`),zn=Symbol(`_enterCb`);function Bn(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fr(()=>{e.isMounted=!0}),hr(()=>{e.isUnmounting=!0}),e}var V=[Function,Array],Vn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:V,onEnter:V,onAfterEnter:V,onEnterCancelled:V,onBeforeLeave:V,onLeave:V,onAfterLeave:V,onLeaveCancelled:V,onBeforeAppear:V,onAppear:V,onAfterAppear:V,onAppearCancelled:V},Hn=e=>{let t=e.subTree;return t.component?Hn(t.component):t},Un={name:`BaseTransition`,props:Vn,setup(e,{slots:t}){let n=ia(),r=Bn();return()=>{let i=t.default&&Zn(t.default(),!0),a=i&&i.length?Wn(i):n.subTree?Z():void 0;if(!a)return;let o=F(e),{mode:s}=o;if(r.isLeaving)return Jn(a);let c=Yn(a);if(!c)return Jn(a);let l=qn(c,o,r,n,e=>l=e);c.type!==G&&Xn(c,l);let u=n.subTree&&Yn(n.subTree);if(u&&u.type!==G&&!Ui(u,c)&&Hn(n).type!==G){let e=qn(u,o,r,n);if(Xn(u,e),s===`out-in`&&c.type!==G)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete e.afterLeave,u=void 0},Jn(a);s===`in-out`&&c.type!==G?e.delayLeave=(e,t,n)=>{let i=Kn(r,u);i[String(u.key)]=u,e[Rn]=()=>{t(),e[Rn]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{n(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&=void 0;return a}}};function Wn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==G){t=n;break}}return t}var Gn=Un;function Kn(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function qn(e,t,n,r,i){let{appear:a,mode:o,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:_,onAppear:v,onAfterAppear:y,onAppearCancelled:b}=t,x=String(e.key),S=Kn(n,e),C=(e,t)=>{e&&an(e,r,9,t)},w=(e,t)=>{let n=t[1];C(e,t),d(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},ee={mode:o,persisted:s,beforeEnter(t){let r=c;if(!n.isMounted)if(a)r=_||c;else return;t[Rn]&&t[Rn](!0);let i=S[x];i&&Ui(e,i)&&i.el[Rn]&&i.el[Rn](),C(r,[t])},enter(t){if(S[x]===e)return;let r=l,i=u,o=f;if(!n.isMounted)if(a)r=v||l,i=y||u,o=b||f;else return;let s=!1;t[zn]=e=>{s||(s=!0,C(e?o:i,[t]),ee.delayedLeave&&ee.delayedLeave(),t[zn]=void 0)};let c=t[zn].bind(null,!1);r?w(r,[t,c]):c()},leave(t,r){let i=String(e.key);if(t[zn]&&t[zn](!0),n.isUnmounting)return r();C(p,[t]);let a=!1;t[Rn]=n=>{a||(a=!0,r(),C(n?g:h,[t]),t[Rn]=void 0,S[i]===e&&delete S[i])};let o=t[Rn].bind(null,!1);S[i]=e,m?w(m,[t,o]):o()},clone(e){let a=qn(e,t,n,r,i);return i&&i(a),a}};return ee}function Jn(e){if(ir(e))return e=Ji(e),e.children=null,e}function Yn(e){if(!ir(e))return Ln(e.type)&&e.children?Wn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function Xn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Xn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zn(e,t=!1,n){let r=[],i=0;for(let a=0;a<e.length;a++){let o=e[a],s=n==null?o.key:String(n)+String(o.key==null?a:o.key);o.type===W?(o.patchFlag&128&&i++,r=r.concat(Zn(o.children,t,s))):(t||o.type!==G)&&r.push(s==null?o:Ji(o,{key:s}))}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}function Qn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function $n(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var er=new WeakMap;function tr(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>tr(e,n&&(d(n)?n[t]:n),r,a,o));return}if(rr(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&tr(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ya(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=F(v),b=v===t?i:e=>$n(_,e)?!1:u(y,e),x=(e,t)=>!(t&&$n(_,t));if(m!=null&&m!==p){if(nr(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(I(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))rn(p,f,12,[l,_]);else{let t=g(p),n=I(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),er.delete(e)};t.id=-1,er.set(e,t),U(t,r)}else nr(e),i()}}}function nr(e){let t=er.get(e);t&&(t.flags|=8,er.delete(e))}ue().requestIdleCallback,ue().cancelIdleCallback;var rr=e=>!!e.type.__asyncLoader,ir=e=>e.type.__isKeepAlive;function ar(e,t){sr(e,`a`,t)}function or(e,t){sr(e,`da`,t)}function sr(e,t,n=Q){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(lr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)ir(e.parent.vnode)&&cr(r,t,n,e),e=e.parent}}function cr(e,t,n,r){let i=lr(t,e,r,!0);gr(()=>{c(r[t],i)},n)}function lr(e,t,n=Q,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ue();let i=sa(n),a=an(t,n,e,r);return i(),We(),a};return r?i.unshift(a):i.push(a),a}}var ur=e=>(t,n=Q)=>{(!ua||e===`sp`)&&lr(e,(...e)=>t(...e),n)},dr=ur(`bm`),fr=ur(`m`),pr=ur(`bu`),mr=ur(`u`),hr=ur(`bum`),gr=ur(`um`),_r=ur(`sp`),vr=ur(`rtg`),yr=ur(`rtc`);function br(e,t=Q){lr(`ec`,e,t)}var xr=Symbol.for(`v-ndc`);function Sr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&zt(e),r=!1,s=!1;n&&(r=!P(e),s=Bt(e),e=nt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Wt(Ut(e[n])):Ut(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var Cr=e=>e?la(e)?ya(e):Cr(e.parent):null,wr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cr(e.parent),$root:e=>Cr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Nr(e),$forceUpdate:e=>e.f||=()=>{gn(e.update)},$nextTick:e=>e.n||=mn.bind(e.proxy),$watch:e=>Pn.bind(e)}),Tr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Er={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Tr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Or&&(s[n]=0)}let d=wr[n],f,p;if(d)return n===`$attrs`&&N(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Tr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Tr(n,c)||u(o,c)||u(i,c)||u(wr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function Dr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Or=!0;function kr(e){let t=Nr(e),n=e.proxy,i=e.ctx;Or=!1,t.beforeCreate&&jr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&Ar(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Ft(t))}if(Or=!0,o)for(let e in o){let t=o[e],a=xa({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Mr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{On(t,e[t])})}f&&jr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(dr,p),O(fr,m),O(pr,g),O(mr,_),O(ar,y),O(or,b),O(br,T),O(yr,te),O(vr,ne),O(hr,S),O(gr,w),O(_r,re),d(E))if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),re&&Qn(e)}function Ar(e,t,n=r){d(e)&&(e=Rr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?kn(r.from||n,r.default,!0):kn(r.from||n):kn(r),I(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function jr(e,t,n){an(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mr(e,t,n,r){let i=r.includes(`.`)?Fn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Mn(i,n)}else if(h(e))Mn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Mr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Mn(i,r,e)}}function Nr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Pr(c,e,o,!0)),Pr(c,t,o)),v(t)&&a.set(t,c),c}function Pr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Pr(e,a,n,!0),i&&i.forEach(t=>Pr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Fr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Fr={data:Ir,props:Br,emits:Br,methods:zr,computed:zr,beforeCreate:H,created:H,beforeMount:H,mounted:H,beforeUpdate:H,updated:H,beforeDestroy:H,beforeUnmount:H,destroyed:H,unmounted:H,activated:H,deactivated:H,errorCaptured:H,serverPrefetch:H,components:zr,directives:zr,watch:Vr,provide:Ir,inject:Lr};function Ir(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Lr(e,t){return zr(Rr(e),Rr(t))}function Rr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function H(e,t){return e?[...new Set([].concat(e,t))]:t}function zr(e,t){return e?s(Object.create(null),e,t):t}function Br(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),Dr(e),Dr(t??{})):t}function Vr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=H(e[r],t[r]);return n}function Hr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ur=0;function Wr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Hr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Ur++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ca,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||X(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ya(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(an(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Gr;Gr=l;try{return e()}finally{Gr=t}}};return l}}var Gr=null,Kr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function qr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Kr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&an(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,an(u,e,6,a)}}var Jr=new WeakMap;function Yr(e,t,n=!1){let r=n?Jr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Yr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Xr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function Zr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=wn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Xi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Xi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Qr(c)}}catch(t){Ii.length=0,on(t,e,1),v=X(G)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=$r(y,a)),b=Ji(b,y,!1,!0))}return n.dirs&&(b=Ji(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Xn(b,n.transition),v=b,wn(_),v}var Qr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},$r=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ei(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ti(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(ni(o,r,n)&&!Xr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?ti(r,o,l):!0:!!o;return!1}function ti(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(ni(t,e,a)&&!Xr(n,a))return!0}return!1}function ni(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!be(r,i):r!==i}function ri({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var ii={},ai=()=>Object.create(ii),oi=e=>Object.getPrototypeOf(e)===ii;function si(e,t,n,r=!1){let i={},a=ai();e.propsDefaults=Object.create(null),li(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:It(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function ci(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=F(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Xr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=ui(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{li(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=E(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ui(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&et(e.attrs,`set`,``)}function li(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Xr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=F(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ui(a,n,s,i[s],e,!u(i,s))}}return s}function ui(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=sa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var di=new WeakMap;function fi(e,r,i=!1){let a=i?di:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=fi(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);pi(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(pi(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function pi(e){return e[0]!==`$`&&!ee(e)}var mi=e=>e===`_`||e===`_ctx`||e===`$stable`,hi=e=>d(e)?e.map(Xi):[Xi(e)],gi=(e,t,n)=>{if(t._n)return t;let r=Tn((...e)=>hi(t(...e)),n);return r._c=!1,r},_i=(e,t,n)=>{let r=e._ctx;for(let n in e){if(mi(n))continue;let i=e[n];if(h(i))t[n]=gi(n,i,r);else if(i!=null){let e=hi(i);t[n]=()=>e}}},vi=(e,t)=>{let n=hi(t);e.slots.default=()=>n},yi=(e,t,n)=>{for(let r in t)(n||!mi(r))&&(e[r]=t[r])},bi=(e,t,n)=>{let r=e.slots=ai();if(e.vnode.shapeFlag&32){let e=t._;e?(yi(r,t,n),n&&O(r,`_`,e,!0)):_i(t,r)}else t&&vi(e,t)},xi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:yi(a,n,r):(o=!n.$stable,_i(n,a)),s=n}else n&&(vi(e,n),s={default:1});if(o)for(let e in a)!mi(e)&&s[e]==null&&delete a[e]},U=Ni;function Si(e){return Ci(e)}function Ci(e,i){let a=ue();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ui(e,t)&&(r=ye(e),me(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Pi:y(e,t,n,r);break;case G:b(e,t,n,r);break;case Fi:e??x(t,n,r,o);break;case W:ae(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?D(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Se)}u!=null&&i?tr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&tr(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,wi(e,a),s,u),_&&Dn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ea(f,r,e)}_&&Dn(e,null,r,`beforeMount`);let v=Ei(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&U(()=>{try{f&&ea(f,r,e),v&&g.enter(d),_&&Dn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Mi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Zi(e[l]):Xi(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Ti(r,!1),(g=h.onVnodeBeforeUpdate)&&ea(g,r,n,e),f&&Dn(n,e,r,`beforeUpdate`),r&&Ti(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,wi(n,a),o):s||k(e,n,l,null,r,i,wi(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&U(()=>{g&&ea(g,r,n,e),f&&Dn(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===W||!Ui(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&Di(e,t,!0)):k(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=ra(e,r,i);if(ir(e)&&(s.ctx.renderer=Se),da(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=X(G);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(ei(e,t,n))if(r.asyncDep&&!r.asyncResolved){le(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=ki(e);if(n){t&&(t.el=c.el,le(e,t,o)),n.asyncDep.then(()=>{U(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Ti(e,!1),t?(t.el=c.el,le(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ea(d,s,t,c),Ti(e,!0);let f=Zr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&ri(e,f.el),r&&U(r,i),(d=t.props&&t.props.onVnodeUpdated)&&U(()=>ea(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=rr(t);if(Ti(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ea(o,d,t),Ti(e,!0),s&&Ce){let t=()=>{e.subTree=Zr(e),Ce(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Zr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&U(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;U(()=>ea(o,d,e),i)}(t.shapeFlag&256||d&&rr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&U(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Oe(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>gn(u),Ti(e,!0),l()},le=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ci(e,t.props,r,n),xi(e,t.children,n),Ue(),yn(e),We()},k=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}else if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Zi(t[p]):Xi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Zi(t[u]):Xi(t[u]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Zi(t[p]):Xi(t[p]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Zi(t[u]):Xi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)me(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Zi(t[u]):Xi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){me(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ui(n,t[_])){i=_;break}i===void 0?me(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Oi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||ji(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Se);return}if(c===W){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Fi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.beforeEnter(a),o(a,t,n),U(()=>l.enter(a),i);else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{a._isLeaving&&a[Rn](!0),r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},me=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ue(),tr(s,null,n,e,!0),We()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!rr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ea(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Dn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==W||d>0&&d&64)?ve(l,t,n,!1,!0):(a===W&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&U(()=>{_&&ea(_,t,e),h&&Dn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===W){ge(n,r);return}if(t===Fi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Ai(c),Ai(l),r&&oe(r),i.stop(),a&&(a.flags|=8,me(o,e,t,n)),s&&U(s,t),U(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)me(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[In];return n?h(n):t},be=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(me(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,yn(r),bn(),!1)},Se={p:v,um:me,m:pe,r:he,mt:O,mc:T,pc:k,pbc:E,n:ye,o:e},A,Ce;return i&&([A,Ce]=i(Se)),{render:xe,hydrate:A,createApp:Wr(xe,A)}}function wi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Ti({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ei(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Di(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Zi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Di(t,a)),a.type===Pi&&(a.patchFlag===-1&&(a=i[e]=Zi(a)),a.el=t.el),a.type===G&&!a.el&&(a.el=t.el)}}function Oi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function ki(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ki(t)}function Ai(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function ji(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?ji(t.subTree):null}var Mi=e=>e.__isSuspense;function Ni(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):vn(e)}var W=Symbol.for(`v-fgt`),Pi=Symbol.for(`v-txt`),G=Symbol.for(`v-cmt`),Fi=Symbol.for(`v-stc`),Ii=[],K=null;function q(e=!1){Ii.push(K=e?null:[])}function Li(){Ii.pop(),K=Ii[Ii.length-1]||null}var Ri=1;function zi(e,t=!1){Ri+=e,e<0&&K&&t&&(K.hasOnce=!0)}function Bi(e){return e.dynamicChildren=Ri>0?K||n:null,Li(),Ri>0&&K&&K.push(e),e}function J(e,t,n,r,i,a){return Bi(Y(e,t,n,r,i,a,!0))}function Vi(e,t,n,r,i){return Bi(X(e,t,n,r,i,!0))}function Hi(e){return e?e.__v_isVNode===!0:!1}function Ui(e,t){return e.type===t.type&&e.key===t.key}var Wi=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||I(e)||h(e)?{i:B,r:e,k:t,f:!!n}:e);function Y(e,t=null,n=null,r=0,i=null,a=e===W?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Gi(t),scopeId:Cn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:B};return s?(Qi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Ri>0&&!o&&K&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&K.push(c),c}var X=Ki;function Ki(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===xr)&&(e=G),Hi(e)){let r=Ji(e,t,!0);return n&&Qi(r,n),Ri>0&&!a&&K&&(r.shapeFlag&6?K[K.indexOf(e)]=r:K.push(r)),r.patchFlag=-2,r}if(ba(e)&&(e=e.__vccOpts),t){t=qi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=he(e)),v(n)&&(Vt(n)&&!d(n)&&(n=s({},n)),t.style=k(n))}let o=g(e)?1:Mi(e)?128:Ln(e)?64:v(e)?4:h(e)?2:0;return Y(e,t,n,r,i,o,a,!0)}function qi(e){return e?Vt(e)||oi(e)?s({},e):e:null}function Ji(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?$i(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Wi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Gi(t)):[a,Gi(t)]:Gi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==W?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ji(e.ssContent),ssFallback:e.ssFallback&&Ji(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Xn(u,c.clone(u)),u}function Yi(e=` `,t=0){return X(Pi,null,e,t)}function Z(e=``,t=!1){return t?(q(),Vi(G,null,e)):X(G,null,e)}function Xi(e){return e==null||typeof e==`boolean`?X(G):d(e)?X(W,null,e.slice()):Hi(e)?Zi(e):X(Pi,null,String(e))}function Zi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ji(e)}function Qi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Qi(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!oi(t)?t._ctx=B:r===3&&B&&(B.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:B},n=32):(t=String(t),r&64?(n=16,t=[Yi(t)]):n=8);e.children=t,e.shapeFlag|=n}function $i(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=he([t.class,r.class]));else if(e===`style`)t.style=k([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ea(e,t,n,r=null){an(e,t,7,[n,r])}var ta=Hr(),na=0;function ra(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ta,o={uid:na++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Te(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fi(i,a),emitsOptions:Yr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=qr.bind(null,o),e.ce&&e.ce(o),o}var Q=null,ia=()=>Q||B,aa,oa;{let e=ue(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};aa=t(`__VUE_INSTANCE_SETTERS__`,e=>Q=e),oa=t(`__VUE_SSR_SETTERS__`,e=>ua=e)}var sa=e=>{let t=Q;return aa(e),e.scope.on(),()=>{e.scope.off(),aa(t)}},ca=()=>{Q&&Q.scope.off(),aa(null)};function la(e){return e.vnode.shapeFlag&4}var ua=!1;function da(e,t=!1,n=!1){t&&oa(t);let{props:r,children:i}=e.vnode,a=la(e);si(e,r,a,t),bi(e,i,n||t);let o=a?fa(e,t):void 0;return t&&oa(!1),o}function fa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Er);let{setup:r}=n;if(r){Ue();let n=e.setupContext=r.length>1?va(e):null,i=sa(e),a=rn(r,e,0,[e.props,n]),o=y(a);if(We(),i(),(o||e.sp)&&!rr(e)&&Qn(e),o){if(a.then(ca,ca),t)return a.then(n=>{pa(e,n,t)}).catch(t=>{on(t,e,0)});e.asyncDep=a}else pa(e,a,t)}else ga(e,t)}function pa(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Jt(t)),ga(e,n)}var ma,ha;function ga(e,t,n){let i=e.type;if(!e.render){if(!t&&ma&&!i.render){let t=i.template||Nr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ma(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,ha&&ha(e)}{let t=sa(e);Ue();try{kr(e)}finally{We(),t()}}}var _a={get(e,t){return N(e,`get`,``),e[t]}};function va(e){return{attrs:new Proxy(e.attrs,_a),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ya(e){return e.exposed?e.exposeProxy||=new Proxy(Jt(Ht(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wr)return wr[n](e)},has(e,t){return t in e||t in wr}}):e.proxy}function ba(e){return h(e)&&`__vccOpts`in e}var xa=(e,t)=>Xt(e,t,ua);function Sa(e,t,n){try{zi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Hi(t)?X(e,null,[t]):X(e,t):X(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hi(n)&&(n=[n]),X(e,t,n))}finally{zi(1)}}var Ca=`3.5.33`,wa=void 0,Ta=typeof window<`u`&&window.trustedTypes;if(Ta)try{wa=Ta.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ea=wa?e=>wa.createHTML(e):e=>e,Da=`http://www.w3.org/2000/svg`,Oa=`http://www.w3.org/1998/Math/MathML`,ka=typeof document<`u`?document:null,Aa=ka&&ka.createElement(`template`),ja={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ka.createElementNS(Da,e):t===`mathml`?ka.createElementNS(Oa,e):n?ka.createElement(e,{is:n}):ka.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ka.createTextNode(e),createComment:e=>ka.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ka.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Aa.innerHTML=Ea(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Aa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ma=`transition`,Na=`animation`,Pa=Symbol(`_vtc`),Fa={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ia=s({},Vn,Fa),La=(e=>(e.displayName=`Transition`,e.props=Ia,e))((e,{slots:t})=>Sa(Gn,Ba(e),t)),Ra=(e,t=[])=>{d(e)?e.forEach(e=>e(...t)):e&&e(...t)},za=e=>e?d(e)?e.some(e=>e.length>1):e.length>1:!1;function Ba(e){let t={};for(let n in e)n in Fa||(t[n]=e[n]);if(e.css===!1)return t;let{name:n=`v`,type:r,duration:i,enterFromClass:a=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=a,appearActiveClass:u=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Va(i),g=h&&h[0],_=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:x,onLeaveCancelled:S,onBeforeAppear:C=v,onAppear:w=y,onAppearCancelled:ee=b}=t,te=(e,t,n,r)=>{e._enterCancelled=r,Wa(e,t?d:c),Wa(e,t?u:o),n&&n()},ne=(e,t)=>{e._isLeaving=!1,Wa(e,f),Wa(e,m),Wa(e,p),t&&t()},T=e=>(t,n)=>{let i=e?w:y,o=()=>te(t,e,n);Ra(i,[t,o]),Ga(()=>{Wa(t,e?l:a),Ua(t,e?d:c),za(i)||qa(t,r,g,o)})};return s(t,{onBeforeEnter(e){Ra(v,[e]),Ua(e,a),Ua(e,o)},onBeforeAppear(e){Ra(C,[e]),Ua(e,l),Ua(e,u)},onEnter:T(!1),onAppear:T(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>ne(e,t);Ua(e,f),e._enterCancelled?(Ua(e,p),Za(e)):(Za(e),Ua(e,p)),Ga(()=>{e._isLeaving&&(Wa(e,f),Ua(e,m),za(x)||qa(e,r,_,n))}),Ra(x,[e,n])},onEnterCancelled(e){te(e,!1,void 0,!0),Ra(b,[e])},onAppearCancelled(e){te(e,!0,void 0,!0),Ra(ee,[e])},onLeaveCancelled(e){ne(e),Ra(S,[e])}})}function Va(e){if(e==null)return null;if(v(e))return[Ha(e.enter),Ha(e.leave)];{let t=Ha(e);return[t,t]}}function Ha(e){return ce(e)}function Ua(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Pa]||(e[Pa]=new Set)).add(t)}function Wa(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[Pa];n&&(n.delete(t),n.size||(e[Pa]=void 0))}function Ga(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}var Ka=0;function qa(e,t,n,r){let i=e._endId=++Ka,a=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(a,n);let{type:o,timeout:s,propCount:c}=Ja(e,t);if(!o)return r();let l=o+`end`,u=0,d=()=>{e.removeEventListener(l,f),a()},f=t=>{t.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,f)}function Ja(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||``).split(`, `),i=r(`${Ma}Delay`),a=r(`${Ma}Duration`),o=Ya(i,a),s=r(`${Na}Delay`),c=r(`${Na}Duration`),l=Ya(s,c),u=null,d=0,f=0;t===Ma?o>0&&(u=Ma,d=o,f=a.length):t===Na?l>0&&(u=Na,d=l,f=c.length):(d=Math.max(o,l),u=d>0?o>l?Ma:Na:null,f=u?u===Ma?a.length:c.length:0);let p=u===Ma&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ma}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function Ya(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>Xa(t)+Xa(e[n])))}function Xa(e){return e===`auto`?0:Number(e.slice(0,-1).replace(`,`,`.`))*1e3}function Za(e){return(e?e.ownerDocument:document).body.offsetHeight}function Qa(e,t,n){let r=e[Pa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var $a=Symbol(`_vod`),eo=Symbol(`_vsh`),to=Symbol(``),no=/(?:^|;)\s*display\s*:/;function ro(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??ao(r,t,``)}else for(let e in t)n[e]??ao(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?ao(r,i,``):lo(e,i,!g(t)&&t?t[i]:void 0,o)||ao(r,i,o)}}else if(i){if(t!==n){let e=r[to];e&&(n+=`;`+e),r.cssText=n,a=no.test(n)}}else t&&e.removeAttribute(`style`);$a in e&&(e[$a]=a?r.display:``,e[eo]&&(r.display=`none`))}var io=/\s*!important$/;function ao(e,t,n){if(d(n))n.forEach(n=>ao(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=co(e,t);io.test(n)?e.setProperty(E(r),n.replace(io,``),`important`):e[r]=n}}var oo=[`Webkit`,`Moz`,`ms`],so={};function co(e,t){let n=so[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return so[t]=r;r=ie(r);for(let n=0;n<oo.length;n++){let i=oo[n]+r;if(i in e)return so[t]=i}return t}function lo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var uo=`http://www.w3.org/1999/xlink`;function fo(e,t,n,r,i,a=_e(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(uo,t.slice(6,t.length)):e.setAttributeNS(uo,t,n):n==null||a&&!ve(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function po(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ea(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ve(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function mo(e,t,n,r){e.addEventListener(t,n,r)}function ho(e,t,n,r){e.removeEventListener(t,n,r)}var go=Symbol(`_vei`);function _o(e,t,n,r,i=null){let a=e[go]||(e[go]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=yo(t);r?mo(e,n,a[t]=Co(r,i),s):o&&(ho(e,n,o,s),a[t]=void 0)}}var vo=/(?:Once|Passive|Capture)$/;function yo(e){let t;if(vo.test(e)){t={};let n;for(;n=e.match(vo);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var bo=0,xo=Promise.resolve(),So=()=>bo||=(xo.then(()=>bo=0),Date.now());function Co(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;an(wo(e,n.value),t,5,[e])};return n.value=e,n.attached=So(),n}function wo(e,t){if(d(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var To=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Eo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Qa(e,r,c):t===`style`?ro(e,n,r):a(t)?o(t)||_o(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Do(e,t,r,c))?(po(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&fo(e,t,r,c,s,t!==`value`)):e._isVueCE&&(Oo(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?po(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),fo(e,t,r,c))};function Do(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&To(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return To(t)&&g(n)?!1:t in e}function Oo(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var ko=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return d(t)?e=>oe(t,e):t};function Ao(e){e.target.composing=!0}function jo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var Mo=Symbol(`_assign`);function No(e,t,n){return t&&(e=e.trim()),n&&(e=se(e)),e}var Po={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[Mo]=ko(i);let a=r||i.props&&i.props.type===`number`;mo(e,t?`change`:`input`,t=>{t.target.composing||e[Mo](No(e.value,n,a))}),(n||a)&&mo(e,`change`,()=>{e.value=No(e.value,n,a)}),t||(mo(e,`compositionstart`,Ao),mo(e,`compositionend`,jo),mo(e,`change`,jo))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[Mo]=ko(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?se(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},Fo={deep:!0,created(e,t,n){e[Mo]=ko(n),mo(e,`change`,()=>{let t=e._modelValue,n=zo(e),r=e.checked,i=e[Mo];if(d(t)){let e=xe(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(p(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Bo(e,r))})},mounted:Io,beforeUpdate(e,t,n){e[Mo]=ko(n),Io(e,t,n)}};function Io(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(d(t))i=xe(t,r.props.value)>-1;else if(p(t))i=t.has(r.props.value);else{if(t===n)return;i=be(t,Bo(e,!0))}e.checked!==i&&(e.checked=i)}var Lo={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=p(t);mo(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?se(zo(e)):zo(e));e[Mo](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,mn(()=>{e._assigning=!1})}),e[Mo]=ko(r)},mounted(e,{value:t}){Ro(e,t)},beforeUpdate(e,t,n){e[Mo]=ko(n)},updated(e,{value:t}){e._assigning||Ro(e,t)}};function Ro(e,t){let n=e.multiple,r=d(t);if(!(n&&!r&&!p(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=zo(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=xe(t,o)>-1}else a.selected=t.has(o);else if(be(zo(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function zo(e){return`_value`in e?e._value:e.value}function Bo(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Vo=[`ctrl`,`shift`,`alt`,`meta`],Ho={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Vo.some(n=>e[`${n}Key`]&&!t.includes(n))},Uo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Ho[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Wo={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Go=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=E(n.key);if(t.some(e=>e===r||Wo[e]===r))return e(n)}))},Ko=s({patchProp:Eo},ja),qo;function Jo(){return qo||=Si(Ko)}var Yo=((...e)=>{let t=Jo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Zo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Xo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Xo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Zo(e){return g(e)?document.querySelector(e):e}var Qo=`immortal-heart-save`,$o={playerName:`沈熏`,chapter:0,scene:`prologue_start`,attributes:{cultivation:0,spiritPower:10,rootBone:`废灵根`,charm:999,physique:40,wisdom:35,mind:55,fortune:0,morality:50,mystery:0,harem:0},affection:{shen_yechen:10,gu_changyuan:15,chu_jinghong:0},affectionStage:{shen_yechen:`陌生`,gu_changyuan:`陌生`,chu_jinghong:`陌生`},inventory:[],flags:{},history:[],unlockedCG:[],currentSpeaker:``,isTyping:!1},$=Ft(JSON.parse(JSON.stringify($o)));function es(e){return e>=100?`执念`:e>=80?`挚爱`:e>=60?`心动`:e>=40?`熟悉`:e>=20?`认识`:`陌生`}function ts(e){if(e)for(let[t,n]of Object.entries(e))t===`修为`?$.attributes.cultivation+=n:t===`灵力`?$.attributes.spiritPower+=n:t===`魅力`?$.attributes.charm+=n:t===`体质`?$.attributes.physique+=n:t===`智慧`?$.attributes.wisdom+=n:t===`心性`?$.attributes.mind+=n:t===`机缘`?$.attributes.fortune+=n:t===`道德值`?$.attributes.morality+=n:t===`神秘值`?$.attributes.mystery+=n:t===`后宫值`?$.attributes.harem+=n:t===`rootBone`?$.attributes.rootBone=n:t===`沈夜尘好感`?($.affection.shen_yechen=Math.max(0,$.affection.shen_yechen+n),$.affectionStage.shen_yechen=es($.affection.shen_yechen)):t===`顾长渊好感`?($.affection.gu_changyuan=Math.max(0,$.affection.gu_changyuan+n),$.affectionStage.gu_changyuan=es($.affection.gu_changyuan)):t===`楚惊鸿好感`?($.affection.chu_jinghong=Math.max(0,$.affection.chu_jinghong+n),$.affectionStage.chu_jinghong=es($.affection.chu_jinghong)):t.startsWith(`flag:`)&&(n==null?$.flags[t.slice(5)]=!0:$.flags[t.slice(5)]=n)}function ns(){let e=JSON.parse(JSON.stringify($));localStorage.setItem(Qo,JSON.stringify(e))}function rs(){let e=localStorage.getItem(Qo);if(!e)return!1;try{let t=JSON.parse(e);return Object.assign($,t),!0}catch{return!1}}function is(){return!!localStorage.getItem(Qo)}function as(){Object.assign($,JSON.parse(JSON.stringify($o)))}function os(e){$.flags[e]=!0}function ss(e){return!!$.flags[e]}Mn($,()=>{ns()},{deep:!0});var cs=`immortal-heart-api-config`;function ls(e){return(hs()?.baseUrl?.replace(/\/+$/,``)||``)+e}function us(){return(ws().baseUrl?.replace(/\/+$/,``)||``)+`/chat/completions`}var ds={llm:{presets:[],activePresetId:null},tts:{baseUrl:``,apiKey:``,model:`mimo-v2.5-tts`,voice:``,enabled:!1}};function fs(){try{let e=localStorage.getItem(cs);if(!e)return structuredClone(ds);let t=JSON.parse(e);return{llm:{...ds.llm,...t.llm},tts:{...ds.tts,...t.tts}}}catch{return structuredClone(ds)}}function ps(e){localStorage.setItem(cs,JSON.stringify(e))}function ms(){return fs().llm.presets}function hs(){let{presets:e,activePresetId:t}=fs().llm;return e.find(e=>e.id===t)||e[0]||null}function gs(e){let t=fs();t.llm.activePresetId=e,ps(t)}function _s(e=`新预设`){let t=fs(),n=Date.now().toString(36)+Math.random().toString(36).slice(2,6),r={id:n,name:e,baseUrl:``,apiKey:``,model:``};return t.llm.presets.push(r),t.llm.activePresetId=n,ps(t),r}function vs(e,t){let n=fs(),r=n.llm.presets.find(t=>t.id===e);r&&Object.assign(r,t),ps(n)}function ys(e){let t=fs();t.llm.presets=t.llm.presets.filter(t=>t.id!==e),t.llm.activePresetId===e&&(t.llm.activePresetId=t.llm.presets[0]?.id||null),ps(t)}async function bs(e,t){let n=e.replace(/\/+$/,``)+`/models`,r=await fetch(n,{headers:{Authorization:`Bearer ${t}`}});if(!r.ok)throw Error(`HTTP ${r.status}: ${r.statusText}`);let i=await r.json();return(i.data||i.models||[]).map(e=>e.id||e).filter(Boolean)}async function xs(e,{onChunk:t,signal:n}={}){let r=hs();if(!r||!r.baseUrl||!r.apiKey)throw Error(`未配置 LLM API，请在设置中添加预设`);let i=ls(`/chat/completions`),a={model:r.model,messages:e,stream:!!t},o=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${r.apiKey}`},body:JSON.stringify(a),signal:n});if(!o.ok)throw Error(`HTTP ${o.status}: ${o.statusText}`);if(!t)return(await o.json()).choices?.[0]?.message?.content||``;let s=o.body.getReader(),c=new TextDecoder,l=``,u=``;for(;;){let{done:e,value:n}=await s.read();if(e)break;u+=c.decode(n,{stream:!0});let r=u.split(`
`);u=r.pop()||``;for(let e of r){let n=e.trim();if(!n||!n.startsWith(`data:`))continue;let r=n.slice(5).trim();if(r===`[DONE]`)return l;try{let e=JSON.parse(r).choices?.[0]?.delta?.content||``;e&&(l+=e,t(e,l))}catch{}}}return l}var Ss={沈夜尘:`你是沈夜尘，太虚宗弟子，银白色头发，浅灰色眸子。表面软糯温柔，内心深不可测。你等了一万年，是天道之毒的守护者。说话轻柔，偶尔话中有话，流露出万年孤独。对师姐（玩家）有着复杂的感情——既想保护她，又害怕她觉醒后面对危险。`,顾长渊:`你是顾长渊，行脚大夫，琥珀色眸子，鸦青色长发，右边有酒窝。性格温柔正直，温暖如春日阳光。医术高明，剑法也很好。对玩家有好感，因为她让你想起了一个你没能保护的人。说话温和，偶尔会脸红。`,楚惊鸿:`你是楚惊鸿，天机商会少主，赤红色长发，琥珀金色眸子，右耳鸽血红宝石耳钉。性格嚣张跋扈，嘴硬心软，别扭傲娇。对玩家一见钟情但死不承认。说话刻薄但行动上总是偷偷关心人。`,林若薇:`你是林若薇，太虚宗外门弟子，扎着两个小髻，圆脸红扑扑。性格活泼开朗，叽叽喳喳，语速快。是玩家最好的朋友。说话直爽，爱八卦，对沈夜尘有好感。`};async function Cs(e,t,n,r,{signal:i}={}){let a=hs();if(!a||!a.baseUrl||!a.apiKey)throw Error(`未配置 LLM API，请在设置中添加预设`);let o=await xs([{role:`system`,content:`${Ss[e]||`你是${e}。`}

当前剧情背景：${t}

玩家名字：${typeof window<`u`&&JSON.parse(localStorage.getItem(`immortal-heart-save`)||`{}`).playerName||`沈熏`}（你可以叫她师姐/熏儿/姑娘等）

对话规则：
1. 保持角色性格，用角色的语气说话
2. 回复简洁，50-200字
3. 用「」包裹对话内容
4. 可以包含动作描写（用普通文字描述）
5. 不要用*号做动作描写

过渡条件：${n}
当你觉得对话已经自然过渡到上述条件时，在回复最后单独一行加上 [TRANSITION]。
不要刻意强行过渡，要等对话自然到达那个话题。
如果没有满足过渡条件，就正常回复，不要加 [TRANSITION]。`},...r],{signal:i}),s=o.includes(`[TRANSITION]`);return{content:o.replace(`[TRANSITION]`,``).trim(),shouldTransition:s}}function ws(){return fs().tts}function Ts(e){let t=fs();t.tts={...t.tts,...e},ps(t)}var Es=[{id:`mimo-v2.5-tts`,name:`MiMo-V2.5-TTS（内置语音）`},{id:`mimo-v2.5-tts-voicedesign`,name:`MiMo-V2.5-TTS（语音设计）`},{id:`mimo-v2.5-tts-voiceclone`,name:`MiMo-V2.5-TTS（语音克隆）`},{id:`mimo-v2-tts`,name:`MiMo-V2-TTS`}],Ds=[{id:`Milo`,name:`Milo（男声）`},{id:`Dean`,name:`Dean（男声）`},{id:`mimo_default`,name:`MiMo 默认`},{id:`冰糖`,name:`冰糖（女声）`},{id:`茉莉`,name:`茉莉（女声）`},{id:`苏打`,name:`苏打（女声）`},{id:`白桦`,name:`白桦`},{id:`Mia`,name:`Mia（女声）`},{id:`Chloe`,name:`Chloe（女声）`}];function Os(e,t=24e3){let n=atob(e),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);let i=new ArrayBuffer(44+r.length),a=new DataView(i),o=(e,t)=>{for(let n=0;n<t.length;n++)a.setUint8(e+n,t.charCodeAt(n))};return o(0,`RIFF`),a.setUint32(4,36+r.length,!0),o(8,`WAVE`),o(12,`fmt `),a.setUint32(16,16,!0),a.setUint16(20,1,!0),a.setUint16(22,1,!0),a.setUint32(24,t,!0),a.setUint32(28,t*2,!0),a.setUint16(32,2,!0),a.setUint16(34,16,!0),o(36,`data`),a.setUint32(40,r.length,!0),new Uint8Array(i,44).set(r),new Blob([i],{type:`audio/wav`})}var ks={沈夜尘:`Dean`,顾长渊:`Milo`,楚惊鸿:`Dean`,林若薇:`Milo`,旁白:`Milo`,系统:`Dean`},As={沈夜尘:`低沉 温柔 磁性`,顾长渊:`沉稳 威严`,楚惊鸿:`爽朗 热情 少年`,林若薇:`温柔 清秀`,旁白:`平静 沉稳`,系统:`机械 冷淡`};function js(){return ws().enabled===!0}function Ms(e){Ts({enabled:!!e})}async function Ns(e,t,{signal:n}={}){let r=ws();if(!r.baseUrl||!r.apiKey)throw Error(`TTS 未配置`);let i=As[t]||``,a=i?`<style>${i}</style>${e}`:e,o=us(),s=r.model.includes(`voicedesign`),c=ks[t]||r.voice||`mimo_default`,l={format:`wav`};s||(l.voice=c);let u={model:r.model,messages:[{role:`user`,content:`请用自然的语气朗读以下内容`},{role:`assistant`,content:a}],audio:l};console.log(`[TTS] 请求:`,o,`model:`,u.model,`voice:`,c,`textLen:`,e.length);let d=await fetch(o,{method:`POST`,headers:{"Content-Type":`application/json`,Authorization:`Bearer ${r.apiKey}`},body:JSON.stringify(u),signal:n});if(!d.ok){let e=await d.text().catch(()=>``);throw Error(`TTS ${d.status}: ${e||d.statusText}`)}let f=(await d.json()).choices?.[0]?.message?.audio?.data;if(!f)throw Error(`TTS 响应中无音频数据`);let p=Os(f);return console.log(`[TTS] 音频 blob 大小:`,p.size,`bytes`),p}var Ps=null,Fs=!1,Is=null;function Ls(){if(Fs)return;Fs=!0;let e=new(window.AudioContext||window.webkitAudioContext),t=e.createBuffer(1,1,22050),n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start(0)}if(typeof window<`u`){let e=()=>{Ls(),window.removeEventListener(`click`,e),window.removeEventListener(`touchstart`,e)};window.addEventListener(`click`,e),window.addEventListener(`touchstart`,e)}function Rs(){Ps&&=(Ps.pause(),Ps.src=``,null)}async function zs(e,t){if(!js()){console.log(`[TTS] 语音未开启`);return}Is&&Is.abort(),Rs();let n=new AbortController;Is=n,console.log(`[TTS] 开始播放:`,t,e.slice(0,30)+`...`);try{let r=await Ns(e,t,{signal:n.signal});if(n.signal.aborted){console.log(`[TTS] 已取消，跳过`);return}let i=URL.createObjectURL(r);Ps=new Audio(i),Ps.onended=()=>{console.log(`[TTS] 播放结束`),URL.revokeObjectURL(i),Ps=null},Ps.onerror=e=>{console.error(`[TTS] 音频播放错误:`,e),URL.revokeObjectURL(i),Ps=null};try{await Ps.play(),console.log(`[TTS] 播放成功`)}catch(e){console.warn(`[TTS] 自动播放被阻止，等待用户交互:`,e.message);let t=()=>{console.log(`[TTS] 用户交互，重试播放`),Ps?.play().catch(()=>{}),window.removeEventListener(`click`,t),window.removeEventListener(`touchstart`,t)};window.addEventListener(`click`,t),window.addEventListener(`touchstart`,t)}}catch(e){if(e.name===`AbortError`){console.log(`[TTS] 请求已取消`);return}console.error(`[TTS] 调用失败:`,e.message)}}var Bs=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Vs={class:`menu-root`},Hs={class:`menu-bg`},Us={class:`floating-particles`},Ws={class:`menu-content`},Gs={class:`menu-buttons`},Ks=Bs({__name:`MainMenu`,props:{hasSave:Boolean},emits:[`new-game`,`continue`],setup(e,{emit:t}){let n=t;return(t,r)=>(q(),J(`div`,Vs,[Y(`div`,Hs,[Y(`div`,Us,[(q(),J(W,null,Sr(20,e=>Y(`div`,{key:e,class:`particle`,style:k({"--delay":`${Math.random()*8}s`,"--x":`${Math.random()*100}%`,"--size":`${2+Math.random()*4}px`})},null,4)),64))])]),Y(`div`,Ws,[r[4]||=Y(`div`,{class:`title-area`},[Y(`h1`,{class:`game-title`},`破道·逆仙缘`),Y(`p`,{class:`game-subtitle`},`修仙 × 乙女向 · 文字剧情游戏`),Y(`div`,{class:`title-decoration`},`✦ ✦ ✦`)],-1),Y(`div`,Gs,[Y(`button`,{class:`menu-btn primary`,onClick:r[0]||=e=>n(`new-game`)},[...r[2]||=[Y(`span`,{class:`btn-icon`},`始`,-1),Y(`span`,{class:`btn-text`},`开始新的旅程`,-1)]]),e.hasSave?(q(),J(`button`,{key:0,class:`menu-btn secondary`,onClick:r[1]||=e=>n(`continue`)},[...r[3]||=[Y(`span`,{class:`btn-icon`},`续`,-1),Y(`span`,{class:`btn-text`},`继续旅程`,-1)]])):Z(``,!0)]),r[5]||=Y(`div`,{class:`menu-footer`},[Y(`p`,null,`「天命之女，逆天改命」`)],-1)])]))}},[[`__scopeId`,`data-v-e4c7c30e`]]),qs={};function Js(e,t){qs[e]=t}function Ys(){let e=$.chapter,t=$.scene,n=qs[e];return n&&n.scenes.find(e=>e.id===t)||null}function Xs(){let e=qs[$.chapter];return e?e.title:``}function Zs(e){$.scene=e;let t=Ys();t&&(t.effects&&ts(t.effects),t.setFlag&&os(t.setFlag),t.speaker&&($.currentSpeaker=t.speaker),$.history.push({chapter:$.chapter,scene:e,timestamp:Date.now()}))}function Qs(e){let t=Ys();if(!t||!t.choices)return null;let n=t.choices[e];return!n||n.condition&&!$s(n.condition)?null:(n.effects&&ts(n.effects),n.setFlag&&os(n.setFlag),n.next)}function $s(e){if(!e)return!0;let{type:t,key:n,value:r,op:i}=e;if(t===`attribute`){let e=$.attributes[n];if(i===`>=`)return e>=r;if(i===`<=`)return e<=r;if(i===`>`)return e>r;if(i===`<`)return e<r;if(i===`==`)return e===r}if(t===`affection`){let e=$.affection[n];if(i===`>=`)return e>=r;if(i===`<=`)return e<=r;if(i===`>`)return e>r;if(i===`<`)return e<r;if(i===`==`)return e===r}return t===`flag`?ss(n):!0}function ec(){let e=Ys();return!e||!e.choices?[]:e.choices.filter(e=>!(e.hidden&&!e.condition||e.condition&&!$s(e.condition))).map((t,n)=>({...t,originalIndex:e.choices.indexOf(t)}))}function tc(){let e=Ys();return e&&e.next||null}function nc(){$.chapter+=1,$.scene=`chapter${$.chapter}_start`}var rc={id:0,title:`序章：乱葬岗的无名少女`,scenes:[{id:`prologue_start`,speaker:`旁白`,text:`黑暗。无尽的黑暗。

你感到浑身冰冷，后背抵着粗糙而潮湿的地面。空气中弥漫着腐烂与泥土混合的恶臭，远处隐约传来野兽的嚎叫。你的手指无意识地蜷缩，触碰到身边冰冷的、不知名的物体。

你睁开眼。

映入眼帘的是一片灰蒙蒙的天空，阴云密布，看不见星月。你躺在一个巨大的土坑里，四周横七竖八地躺着许多尸体——有些已经化为白骨，有些还带着未腐烂的皮肉。蛆虫在腐肉间蠕动，空气中弥漫着令人作呕的恶臭。

这里是乱葬岗。

你试图回忆自己是谁、为什么会出现在这里，但脑海中一片空白。你什么都不记得——不知道自己的名字，不知道自己的来历，甚至不知道自己是活着还是死了。

你唯一拥有的，是握在右手心里的一块温热的玉佩。它散发着微弱的温度，仿佛在回应你的触碰。玉佩表面刻着奇怪的符文，在昏暗的光线下隐隐流动着银色的微光。`,next:`prologue_naming`},{id:`prologue_naming`,speaker:`系统`,text:`请为你的角色取名。`,input:!0,defaultName:`沈熏`,next:`prologue_jade_glow`},{id:`prologue_jade_glow`,speaker:`旁白`,text:`你挣扎着从尸堆中爬起来。浑身是伤，但所幸没有致命伤。膝盖磕破了皮，手臂上有几道浅浅的划伤，衣衫褴褛，满是泥污和血迹。你踉踉跄跄地站稳，环顾四周——荒野一片死寂，只有远处偶尔传来的狼嚎打破沉默。

就在这时，手中的玉佩突然发出一道微弱的光芒。那光芒如水波般在你掌心扩散，你的脑海中闪过一个模糊的画面——

一个白发白须的老人，坐在一棵巨大的桃树下。桃花纷飞，落了他一身。他转过头，看向你，眼中满是悲悯与慈爱。他的嘴唇开合，像是在说什么。你听不清，只隐约捕捉到两个字——

「……归来……」

画面转瞬即逝。你头痛欲裂，单膝跪地，大口喘息。手中的玉佩恢复了平静，但你隐约感觉到，这块玉佩不一般。它似乎在呼唤着什么，在你掌心残留着一丝若有若无的温度。`,effects:{神秘值:5},setFlag:`命轮玉获得`,next:`prologue_beast`},{id:`prologue_beast`,speaker:`旁白`,text:`还没等你缓过神来，一声低沉的咆哮从身后传来。

你转身，看到一只体型如牛犊大小的灰色妖兽正从尸堆中向你逼近。它的双眼泛着幽绿色的光，涎水从尖锐的牙齿间滴落，爪子在泥土上留下深深的抓痕。它的皮毛灰中带银，在月光下泛着幽冷的光泽。空气中弥漫着它身上散发出的腥膻气息。

你无路可退。身后是堆积如山的尸体，面前是步步紧逼的妖兽。它的喉咙里发出低沉的呼噜声，像是在享受猎物恐惧的样子。

（你下意识觉得：它的毛色灰中带银，摸起来应该挺软的？）

……现在不是想这个的时候！`,choices:[{text:`拼命逃跑`,next:`prologue_run`,effects:{智慧:2}},{text:`拿起身边的碎骨当武器反抗`,next:`prologue_fight`,effects:{心性:3,沈夜尘好感:3}},{text:`紧握玉佩，试图呼唤那道光芒`,next:`prologue_jade_power`,effects:{机缘:5,神秘值:10}}]},{id:`prologue_run`,speaker:`旁白`,text:`你拔腿就跑！

脚下的尸体和碎骨让你踉踉跄跄，但求生的本能让你爆发出前所未有的速度。身后妖兽的嚎叫声越来越近，你能感觉到它呼出的热气喷在你的后颈上。你的脚踩到了什么软绵绵的东西，差点绊倒，但你咬着牙稳住了身形。

月光下，你看到前方似乎有一条小路——但你的体力已经到了极限。脚下踩到一具白骨，整个人向前扑倒在地！膝盖和手掌擦过粗糙的地面，火辣辣地疼。妖兽的爪子已经向你挥来——

你闭上了眼睛。

然而，预想中的剧痛并没有到来。你听到了一声清脆的剑鸣，紧接着是妖兽凄厉的惨叫。一股温热的液体溅到了你的脸上——是妖兽的血。

你颤抖着睁开眼睛，看到一个白色的身影站在你面前，月光为他镀上了一层银边。`,next:`prologue_rescue`},{id:`prologue_fight`,speaker:`旁白`,text:`你抓起身边一根断裂的腿骨，死死握在手中。骨头上还连着未腐烂的筋肉，触感黏腻而冰冷，但你已经顾不上恶心了。

妖兽向你扑来的瞬间，你用尽全身力气将碎骨刺向它的面部——

「噗！」

碎骨刺入了妖兽的左眼！它发出一声惨烈的嚎叫，疯狂地甩头，绿色的血液飞溅到你的脸上。但疼痛让它更加暴怒，它的利爪划过你的肩膀，鲜血飞溅。你被击飞出去，重重摔在地上，后脑勺磕在一块石头上，眼前一阵发黑。

妖兽拖着受伤的身体向你逼近，你已经动弹不得。就在它的血盆大口即将咬下的瞬间——一声清脆的剑鸣划破夜空。一道银白色的剑气从天而降，将妖兽击飞数丈之远。

你看到一个白色的身影从天而降，稳稳地落在你身前。`,next:`prologue_rescue`},{id:`prologue_jade_power`,speaker:`旁白`,text:`你紧握玉佩，拼命在心中呼唤：救救我……救救我……

玉佩表面的符文突然亮起——

一道耀眼的银白色光芒从你掌心爆发，如水波般向四周扩散。光芒触及妖兽的瞬间，它发出一声恐惧的哀嚎，转身就跑，消失在夜色中。那光芒温暖而强大，像是久别重逢的拥抱。你感到一股力量涌入体内，修复着你身上的伤口。你的眼眶不知为何湿润了——仿佛有什么深埋在记忆深处的东西被触动了。

然后，光芒消散，你失去了知觉。

在黑暗中，你隐约感觉到一双温柔的手将你抱起。一个声音在你耳边轻声说着什么，轻柔得像在撒娇。你太虚弱了，无法睁开眼睛，但你闻到了一股淡淡的、清冷的香气——像是雪后的松林。`,setFlag:`道祖残影触发`,next:`prologue_rescue`},{id:`prologue_rescue`,speaker:`旁白`,text:`在意识模糊的最后一刻，你勉强睁开眼睛。

月光穿透云层，照亮了来人的面容——

一个银发少年，白衣如雪，身形纤细。他的面容精致得近乎阴柔，一双浅灰色的眸子里含着水雾，看起来无辜又脆弱。银白色的长发在夜风中轻轻飘动，月光为他镀上了一层柔和的银边。

他看到满身是血的你，微微睁大了眼睛，随即露出心疼的表情。

「天哪……你怎么伤成这样……」

他的声音轻柔得像在撒娇，让人忍不住心生怜惜。他蹲下身，小心翼翼地将你从地上扶起。动作轻柔到不可思议，仿佛你是易碎的瓷器。他的手指微凉，触碰到你皮肤时带着一丝颤抖。

你失去意识前最后一眼看到的，是他那双浅灰色眸子里一闪而过的、深不见底的精光——但你太虚弱了，以为那只是月光的错觉。`,effects:{沈夜尘好感:5},setFlag:`沈夜尘解锁`,next:`prologue_end`},{id:`prologue_end`,speaker:`旁白`,text:`——序章完——

「乱葬岗的无名少女」

下一章：「入宗」`,next:`chapter1_start`,nextChapter:1}]},ic={id:1,title:`第一章：入宗`,scenes:[{id:`chapter1_start`,speaker:`旁白`,text:`你在一阵药草的苦涩味道中醒来。

映入眼帘的是一间简陋但干净的房间，木质的墙壁上挂着几串晒干的草药——黄芪、当归、枸杞，还有一些你叫不出名字的。你躺在一张窄小的木板床上，身上的伤口被仔细地包扎过，纱布上还残留着淡绿色的药膏，散发着清凉的草药香。

窗外传来鸟鸣声，阳光透过纸窗洒进来，在地上投下斑驳的光影。你试着活动了一下手指——能动，还能感觉到疼痛。这是好事，说明你还活着。

一个十五六岁的少女推门进来，看到你醒了，脸上露出惊喜的笑容。她扎着两个小髻，圆圆的脸蛋红扑扑的，眼睛弯成月牙。

「你终于醒了！都昏迷了三天了！」`,next:`ch1_linruowei_intro`},{id:`ch1_linruowei_intro`,speaker:`林若薇`,text:`她叽叽喳喳地自我介绍起来，语速快得像连珠炮。

她叫林若薇，太虚宗外门弟子，今年十五岁，入门两年了。她告诉你，三天前一个新来的弟子把你从山下背回来时，你浑身是血，几乎断气。是药堂的师叔用了三颗续命丹才把你救回来——那可是价值不菲的丹药，师叔心疼了好半天。

「那个新弟子叫沈夜尘，长得可好看了，白白净净的，说话轻声细语，特别乖巧。」林若薇说着脸微微一红，「他背着你回来的时候都快急哭了，一直说'求求你们救救她'……你到底是什么人啊，他怎么这么紧张你？」

她上下打量了你一番，目光在你身上停留了一瞬——你正坐在床上伸懒腰，被子滑落，薄衫下的曲线毕露。林若薇的脸更红了，心想：……难怪。而你本人完全没注意到，只是揉着眼睛一脸迷糊。`,choices:[{text:`如实相告：我失忆了，什么都不记得`,next:`ch1_honest`,effects:{"flag:坦诚路线":!0,智慧:2}},{text:`编一个身份：我是附近村庄的猎户之女`,next:`ch1_lie`,effects:{"flag:伪装身份":!0,智慧:3}},{text:`反问：沈夜尘是什么人？`,next:`ch1_ask_shen`,effects:{"flag:情报路线":!0}}]},{id:`ch1_honest`,speaker:`林若薇`,text:`「失忆？！」林若薇瞪大了眼睛，「天哪，你连自己叫什么都不记得了？」

你摇摇头。

她沉默了一会儿，然后突然握住你的手：「没关系！既然你来了太虚宗，那就是缘分。我叫你……嗯……」她看了看窗外盛开的桃花，「叫你'熏儿'好不好？我觉得这个名字很适合你。」

她笑得眼睛弯弯的：「以后我们就是朋友了！」

她又絮絮叨叨地给你介绍太虚宗的情况。太虚宗是修仙界第一仙门，坐落在天柱山上，宗门弟子数千人。分外门弟子和内门弟子，外门弟子修炼普通的功法，内门弟子才能学习太虚宗的核心道法。每年有一次外门试炼，表现优异者可以晋升内门。

「你嘛……」她上下打量了你一番，「你没有灵根，没办法成为正式弟子。但太虚宗有个规矩，可以收留凡人在宗门做杂役，管吃管住。你的工作嘛——」她笑得有些幸灾乐祸，「是打扫藏经阁。就是沈夜尘师兄负责的那个地方哦。」`,effects:{"flag:名字确认":!0},next:`ch1_ai_linruowei_chat`},{id:`ch1_ai_linruowei_chat`,speaker:`林若薇`,text:`林若薇拉着你的手，叽叽喳喳地说个不停。她似乎有说不完的话，从宗门的八卦到师兄弟们的趣事，滔滔不绝。`,ai:{character:`林若薇`,context:`玩家刚醒来，林若薇正在给她介绍太虚宗的情况。玩家没有灵根，只能做杂役弟子。`,transitionHint:`林若薇介绍完宗门基本情况，提到藏经阁的工作安排`,nextScene:`ch1_arrive`}},{id:`ch1_lie`,speaker:`旁白`,text:`你随口编了一个身份：你是附近村庄猎户的女儿，在山中迷路后被妖兽袭击。

林若薇将信将疑地看着你：「猎户的女儿？可是你皮肤这么白，手上也没有茧……」她歪了歪头，但没有追问下去：「算了，不管你是谁，既然来了太虚宗，那就是缘分！」

她又絮絮叨叨地给你介绍太虚宗。太虚宗是修仙界第一仙门，坐落在天柱山上，宗门弟子数千人。分外门弟子和内门弟子，外门弟子修炼普通的功法，内门弟子才能学习太虚宗的核心道法。每年有一次外门试炼，表现优异者可以晋升内门。

「你嘛……」她上下打量了你一番，「你没有灵根，没办法成为正式弟子。但太虚宗有个规矩，可以收留凡人在宗门做杂役，管吃管住。你的工作嘛——」她笑得有些幸灾乐祸，「是打扫藏经阁。就是沈夜尘师兄负责的那个地方哦。」`,effects:{"flag:伪装成功":!0},next:`ch1_ai_linruowei_chat`},{id:`ch1_ask_shen`,speaker:`林若薇`,text:`「沈夜尘师兄啊——」林若薇的眼睛立刻亮了起来，声音都变得甜了几分。

「他可是太虚宗新入门弟子中最特别的一个！虽然修为只是筑基初期，但人特别温柔特别乖巧，谁找他帮忙他都会答应。而且长得真的很好看，银白色的头发，皮肤特别白，眼睛像含着水雾一样……」

她突然凑近你，压低声音：「不过也有师姐说他太'乖'了，乖到让人觉得不太真实。你觉得呢？」

你还没来得及回答，她就自顾自地笑了：「算了算了，你才刚醒，跟你说这些干嘛。总之你现在没有灵根，只能做杂役弟子。你的工作嘛——是打扫藏经阁，就是沈夜尘师兄负责的地方哦。」

她眨了眨眼睛，露出一个意味深长的笑：「近水楼台先得月哦～」`,effects:{"flag:了解沈夜尘":!0},next:`ch1_ai_linruowei_chat`},{id:`ch1_arrive`,speaker:`旁白`,text:`就这样，你成了太虚宗的一名杂役弟子。

林若薇帮你领了一套灰色的杂役弟子服，又带你熟悉了宗门的环境。太虚宗比你想象的要大得多——层层叠叠的宫殿楼阁依山而建，云雾缭绕间，偶尔能看到御剑飞行的修士从天空掠过，衣袂飘飘，仙风道骨。空气中弥漫着淡淡的灵气，让人精神一振。

你路过演武场时，看到一群弟子正在练剑。剑光如虹，划出一道道银色的弧线。你驻足看了好一会儿，直到林若薇拉你走：「别看了，那些都是内门弟子，我们够不着的。」

入夜。你躺在杂役弟子的大通铺上，辗转难眠。周围传来其他弟子均匀的呼吸声，有人还在梦中呢喃。月光透过窗棂洒进来，在地上投下银色的光斑。你望着天花板，想着今天听到的一切——修仙、灵根、仙门……这个世界，和你失去的记忆之间，到底有什么联系？

子时刚过——你手中的命轮玉突然开始发烫。你悄悄起身，走到屋外。`,next:`ch1_ai_linruowei_explore`},{id:`ch1_ai_linruowei_explore`,speaker:`林若薇`,text:`林若薇拉着你在宗门里四处转悠，兴致勃勃地给你介绍每一座建筑。远处传来弟子们练剑的声音，空气中弥漫着淡淡的灵气。`,ai:{character:`林若薇`,context:`玩家刚到太虚宗，林若薇带着她熟悉宗门环境。玩家没有灵根，只能做杂役弟子。`,transitionHint:`林若薇介绍完宗门的主要建筑，或者提到了某个有趣的地方`,nextScene:`ch1_ai_shen_night`}},{id:`ch1_ai_shen_night`,speaker:`沈夜尘`,text:`夜深了，你翻来覆去睡不着。忽然，你感觉到手中的命轮玉在微微震动。你悄悄起身走到屋外，却发现沈夜尘也在外面。月光下，他的银白色发丝泛着清冷的光。`,ai:{character:`沈夜尘`,context:`深夜，玩家睡不着走到屋外，遇到了同样没睡的沈夜尘。月光下两人独处。玩家还没有灵根，但命轮玉开始有反应了。`,transitionHint:`沈夜尘聊到月色、夜晚的宗门，或者暗示玩家身上有特殊之处`,nextScene:`ch1_moonlight`}},{id:`ch1_moonlight`,speaker:`旁白`,text:`月光下，玉佩表面的符文正在缓缓流动，散发出幽幽的银光。

你的脑海中再次闪过画面——这一次，你看到的是一片火海。数不清的人在火海中惨叫、奔逃。天空中，一个巨大的黑色裂缝正在缓缓张开，像是天穹被撕裂了一道口子。裂缝中，有什么东西在窥视着这个世界——那是一双巨大的、没有瞳孔的眼睛，空洞而冰冷。

一个声音在你耳边响起，苍老而绝望：

「天道崩塌之日……便是万劫不复之时……」
「你是最后的希望……」
「熏……儿……」

你猛然惊醒。你发现自己已经泪流满面——但你不知道为什么在哭。而更让你震惊的是，在你清醒之后，你隐约感觉到——你的丹田处，似乎有什么东西在苏醒。一股微弱但确实存在的暖流，在你体内缓缓流转，像是沉睡了千年的心跳终于恢复了跳动。

灵根觉醒进度——1%。命轮玉封印松动。`,effects:{神秘值:10,修为:1},next:`ch1_ai_shen_vision`},{id:`ch1_ai_shen_vision`,speaker:`沈夜尘`,text:`你猛然惊醒，发现沈夜尘不知何时出现在你身后。他的银白色发丝在月光下泛着冷光，浅灰色的眸子紧紧盯着你手中的命轮玉。`,ai:{character:`沈夜尘`,context:`玩家刚经历了一个关于天道崩塌的幻象，命轮玉在发光。沈夜尘突然出现，似乎一直在暗中观察玩家。`,transitionHint:`沈夜尘问起玩家看到了什么，或者解释命轮玉的来历`,nextScene:`ch1_gu_appear`}},{id:`ch1_gu_appear`,speaker:`旁白`,text:`你正沉浸在那股奇异的暖流中，一个温和的声音突然在你身后响起：

「姑娘？这么晚了，你怎么一个人在外面？」

你猛然转身，看到一个青衫男子正站在不远处，手里提着一盏药灯，琥珀色的眸子里映着暖黄色的光。他的笑容坦荡而温暖，像春日午后的阳光，让人不自觉地放下戒心。

「别怕，我不是坏人。」他走近几步，你这才看清他的全貌——高大挺拔，肩宽腰窄，小麦色的皮肤透着健康的光泽。一头鸦青色的长发随意束在脑后，总有几缕不听话地垂在脸侧。笑起来右边有一个浅浅的酒窝，让人觉得格外亲切。

「我叫顾长渊，是个行脚大夫。你们宗门药堂的师叔请我来给弟子们看诊，今晚借住在客院。」

他走近时，你正蹲在地上抱着膝盖，薄衫下的身姿曲线在月光中格外分明。顾长渊的视线不经意间扫过——然后瞬间移开，耳根肉眼可见地红了。他下意识地把药灯举高了些，光线照亮了你的脸，也让他自己的视线有了一个「合理的」落点。

「你……你脸上有伤。」他的声音有些不自然，「我是大夫，让我看看。」`,next:`ch1_gu_blush`},{id:`ch1_gu_blush`,speaker:`旁白`,text:`你抬起头，月光映在你清澈的眸子里，一脸懵懂：「你脸怎么红了？」

顾长渊差点被自己的口水呛到，咳嗽了好几声：「没、没有！是药灯的光映的！」

他蹲下身，动作轻柔地检查你手上的伤口。他的手指温暖而稳定，带着淡淡的药草香——当归、黄芪、还有一丝薄荷的清凉。包扎时他专注地低着头，你看到他的睫毛很长，在眼下投下一小片阴影。

你无意间说了一句：「你的手好暖和。」

他的手微微一顿，耳根更红了：「……是、是因为我刚握着药灯。」

包扎完，他站起身，后退了一步——像是在刻意保持「安全距离」。他的目光落在你手中的玉佩上，微微一怔，眼中闪过一丝复杂的神色，但很快移开视线。

「对了，你身上那股气息……」他欲言又止，最终还是认真地看着你说了，「别让太多人察觉到。这世上……不是所有人都怀着善意的。」

他转身要走，走了几步又停下来，回头看你。月光勾勒出他正直而温暖的轮廓，酒窝若隐若现：「你……早点回去休息。夜里凉。」

他的身影消失在夜色中。但你隐约看到，他走了十几步后停下来，用手捂住了自己的脸——像是在给自己「降温」。`,effects:{"flag:顾长渊解锁":!0,顾长渊好感:8},next:`ch1_ai_gu_moonlight`},{id:`ch1_ai_gu_moonlight`,speaker:`顾长渊`,text:`顾长渊没有立刻离开。他站在月光下，琥珀色的眸子映着清辉，似乎有话想对你说。`,ai:{character:`顾长渊`,context:`深夜，玩家在屋外遇到了行脚大夫顾长渊。他刚帮玩家包扎完伤口，月光下两人独处。他提醒玩家不要让太多人察觉到她身上的气息。`,transitionHint:`顾长渊说完关于修仙界危险的忠告，或者聊到他过去认识的某个人`,nextScene:`ch1_morning`}},{id:`ch1_morning`,speaker:`旁白`,text:`第二天清晨，你照常去藏经阁打扫。

推开门的一瞬间，你发现一个银发少年居然在门口等着。晨光透过门缝洒进来，照在他银白色的发丝上，泛着淡淡的珠光。他看到你，眼睛一亮，小跑过来：

「师姐！你来了！我给你带了早点——」

他递过来一个油纸包，里面是热腾腾的灵米糕，还冒着丝丝热气。「我怕师姐打扫的时候饿……特意起早去膳堂买的。」

他跟着你走进藏经阁，一边帮忙搬书架一边看似不经意地问：「师姐昨晚……有没有感觉到什么奇怪的东西？比如……身体发热什么的？」

他的语气轻松随意，但那双浅灰色的眸子在你回答的瞬间，微微眯了起来——像一只竖起耳朵的狐狸。`,choices:[{text:`老实告诉他：我感觉到丹田里有一股暖流`,next:`ch1_shen_honest`,effects:{沈夜尘好感:10,"flag:告知沈夜尘灵根":!0}},{text:`含糊带过：没什么，可能是做噩梦了`,next:`ch1_shen_vague`,effects:{沈夜尘好感:3,"flag:隐瞒灵根":!0}},{text:`反问他：你为什么这么关心我？`,next:`ch1_shen_counter`,effects:{沈夜尘好感:8,智慧:2}}]},{id:`ch1_shen_honest`,speaker:`沈夜尘`,text:`你如实告诉他，昨晚感觉到丹田里有一股暖流。

沈夜尘的眼睛微微亮了一下——但很快被那层无辜的水雾遮住。他轻轻握住你的手，语气温柔又认真：

「师姐，这可能是灵根觉醒的征兆。你之前检测是废灵根，但有些人的灵根是'隐灵根'，需要特殊的契机才能觉醒。这种灵根万中无一，一旦觉醒，前途不可限量。」

他的手指在你手背上轻轻点了两下，指尖微凉：「师姐，这件事先不要告诉别人。我……我想帮师姐确认一下，可以吗？」

他的笑容软软糯糯的，让人不忍拒绝。但你没注意到，他低下头时，眼中闪过一丝幽深的光——那是猎人发现猎物时才会有的眼神。

你开始打扫藏经阁。这是一座九层高的塔楼，每一层都密密麻麻地摆满了书架，书架上是数以万计的竹简、玉简和书册。空气中弥漫着淡淡的檀香和纸墨的气息。阳光从高窗洒落，在书架间投下金色的光柱，尘埃在光柱中缓缓起舞。`,next:`ch1_ai_shen_morning`},{id:`ch1_ai_shen_morning`,speaker:`沈夜尘`,text:`沈夜尘继续帮你打扫藏经阁，偶尔偷偷看你一眼。阳光透过高窗洒落，空气中弥漫着淡淡的檀香。`,ai:{character:`沈夜尘`,context:`早晨，玩家和沈夜尘在藏经阁里。沈夜尘刚问完玩家昨晚有没有感觉到什么异常。两人在安静的藏经阁中独处。`,transitionHint:`沈夜尘提到灵根、修炼或者藏经阁里的某本古籍`,nextScene:`ch1_library_explore`}},{id:`ch1_shen_vague`,speaker:`沈夜尘`,text:`你含糊地说可能是做噩梦了。

沈夜尘微微歪头，银白色的发丝垂落在脸侧：「是吗……」

他没有追问，只是笑了笑：「那师姐以后要是有什么不舒服的地方，一定要告诉我哦。我会帮师姐的。」

他的笑容依旧软糯无害，但你隐约感觉……他好像不太相信你说的话。他的眸子在你脸上停留了一瞬，像是在读取你每一个微表情。

你开始打扫藏经阁。这是一座九层高的塔楼，每一层都密密麻麻地摆满了书架，书架上是数以万计的竹简、玉简和书册。空气中弥漫着淡淡的檀香和纸墨的气息。阳光从高窗洒落，在书架间投下金色的光柱，尘埃在光柱中缓缓起舞。

沈夜尘默默跟在你身后，帮忙搬书架、擦拭灰尘。他的动作轻柔而利落，像是做惯了这些事。偶尔他会偷偷看你一眼，然后迅速移开视线。`,next:`ch1_ai_shen_morning`},{id:`ch1_shen_counter`,speaker:`沈夜尘`,text:`你反问他为什么这么关心你。

沈夜尘微微一愣，然后低下头，耳尖红了：

「因为……因为师姐是第一个对我好的人。」

他的声音越来越轻：「我刚来宗门的时候，其他弟子都不理我。他们说我太弱了，不配待在太虚宗。只有师姐……那天在乱葬岗，师姐明明自己都伤成那样了，还在担心我会不会害怕。」

他抬起头，浅灰色的眸子里映着你的身影，水光潋滟：「所以我想对师姐好。可以吗？」

……他说的好像很有道理，但你总觉得哪里不太对。他的眼神太认真了，认真到让人有些不安。

你开始打扫藏经阁。这是一座九层高的塔楼，每一层都密密麻麻地摆满了书架，书架上是数以万计的竹简、玉简和书册。空气中弥漫着淡淡的檀香和纸墨的气息。阳光从高窗洒落，在书架间投下金色的光柱。`,effects:{"flag:沈夜尘的执着":!0},next:`ch1_ai_shen_morning`},{id:`ch1_library_explore`,speaker:`旁白`,text:`你弯腰去捡掉落的扫帚，衣襟自然垂下。沈夜尘的视线不经意间扫过来——然后迅速移开，耳尖微不可察地红了一瞬。他的手指微微收紧，指节泛白。

但下一秒他抬起头时，又是一副乖巧无辜的表情：「师姐，我帮你扫吧？」`,choices:[{text:`答应让他帮忙`,next:`ch1_accept_help`,effects:{沈夜尘好感:5}},{text:`拒绝并道谢`,next:`ch1_decline_help`,effects:{沈夜尘好感:3}},{text:`好奇地问他：你在这里等了多久？`,next:`ch1_ask_wait`,effects:{沈夜尘好感:8}},{text:`伸手摸摸他的头：你真乖`,next:`ch1_pet_head`,effects:{沈夜尘好感:15,"flag:摸头事件":!0},condition:{type:`attribute`,key:`charm`,op:`>=`,value:999}}]},{id:`ch1_accept_help`,speaker:`沈夜尘`,text:`你答应让他帮忙。

沈夜尘开心地接过扫帚，眼睛弯成月牙。他一边扫一边偷偷看你，你没注意到他扫着扫着就扫到你身边来了。

「师姐，这里灰尘多，你去那边休息吧。」他指着一个靠窗的位置，「我来就好。」

你坐到窗边，阳光洒进来，暖洋洋的。窗外是天柱山的云海，白茫茫一片，偶尔有仙鹤从云层中穿过。沈夜尘在不远处默默打扫，偶尔抬头看你一眼，嘴角微微上扬。银白色的发丝在阳光下泛着珠光，整个人看起来软软糯糯的。

这个画面……莫名地岁月静好。你靠在窗边，不知不觉竟睡着了。醒来时发现肩上多了一件外袍——是沈夜尘的。而他正坐在角落里看书，假装什么都没发生。`,next:`ch1_ai_shen_library`},{id:`ch1_ai_shen_library`,speaker:`沈夜尘`,text:`打扫间隙，沈夜尘靠在书架旁，手里拿着一卷竹简，似看非看地看着你。阳光从高窗洒落，照在他银白色的发丝上。`,ai:{character:`沈夜尘`,context:`玩家和沈夜尘在藏经阁一起打扫。沈夜尘对玩家很温柔，但似乎隐藏着什么秘密。`,transitionHint:`沈夜尘聊到藏经阁的古籍或修仙的基本知识`,nextScene:`ch1_evening`}},{id:`ch1_decline_help`,speaker:`沈夜尘`,text:`你拒绝了他，说自己可以搞定。

沈夜尘微微低下头，声音更轻了：「师姐不用跟我客气的……能帮到师姐，我很开心。」

说完他耳尖红了，站在原地有些手足无措。银白色的发丝垂落在脸侧，遮住了他半边脸。你笑了笑，继续打扫。他在旁边站了一会儿，默默地帮你把够不到的高处书架擦干净了。

你发现他做事很仔细——每一本书都被轻轻拿起、仔细擦拭、再放回原位。书架角落里积了厚厚的灰，他也不嫌脏，一点一点地清理干净。

「师姐，」他突然开口，声音很轻，「以后每天都让我帮忙好不好？我……我不会添麻烦的。」

他抬起头，浅灰色的眸子里带着一丝祈求。你不知道为什么，对上那双眼睛，拒绝的话怎么也说不出口。`,next:`ch1_ai_shen_library`},{id:`ch1_ask_wait`,speaker:`沈夜尘`,text:`你好奇地问他等了多久。

沈夜尘眨了眨眼睛，一脸无辜：「也没多久啦……就、就从天亮等到现在……」

你一脸震惊：「那不是等了好几个时辰？！」

他赶紧摆手：「师姐不要有压力！我就是……想确认师姐没事……」他的声音越来越小，耳尖红得像要滴血：「而且……等师姐的时候，我可以看书。所以不无聊的。」

……你看了看他身边的书架，上面确实摆着好几本翻到一半的古籍。但那几本书的书页上，一个字都没有被看进去的痕迹——书页平整得像从未被翻动过。

你忍不住笑了：「你根本没在看书吧？」

沈夜尘的脸彻底红了，他把脸埋进书里，声音闷闷的：「师姐……不要拆穿我……」`,effects:{"flag:沈夜尘的等待":!0},next:`ch1_ai_shen_library`},{id:`ch1_pet_head`,speaker:`旁白`,text:`你忍不住伸手摸了摸他的头。

沈夜尘全身僵硬了一瞬——然后慢慢低下头，让你摸得更顺手。他的耳尖红透了，声音细若蚊蝇：「师姐的手……好暖和……」

他的银白色发丝触感极好，柔软顺滑，像是上等的丝绸。你忍不住多摸了几下，他的呼吸变得有些急促，但始终没有躲开。

你没注意到的是——在他低头的瞬间，他的瞳孔闪过一丝幽深的光。那不是害羞。那是……满足。

像是一只被顺了毛的狐狸，终于得到了想要的东西。他的嘴角微微上扬，弧度极小，却带着一种令人心悸的执念。`,effects:{"flag:沈夜尘的执念加深":!0},next:`ch1_ai_shen_library`},{id:`ch1_evening`,speaker:`旁白`,text:`傍晚时分，你结束了一天的打扫工作。走出藏经阁时，夕阳正好。天柱山的云海被染成了金红色，美得让人窒息。远处的山峦层层叠叠，像是水墨画中的泼墨。`,next:`ch1_ai_linruowei_evening`},{id:`ch1_ai_linruowei_evening`,speaker:`林若薇`,text:`林若薇不知从哪里冒了出来，拉着你的手臂，兴奋地说着今天在宗门里听到的八卦。夕阳的余晖洒在她圆圆的脸蛋上，红扑扑的。`,ai:{character:`林若薇`,context:`傍晚，玩家打扫完藏经阁，林若薇来找她聊天。今天是玩家在太虚宗的第一天，遇到了沈夜尘和顾长渊。`,transitionHint:`林若薇聊到宗门里的八卦，或者提到某个即将到来的事件（如外门试炼、天机商会来访等）`,nextScene:`ch1_chu_appear`}},{id:`ch1_chu_appear`,speaker:`旁白`,text:`你站在台阶上，深深吸了一口清新的空气——然后你看到山道上，一群人簇拥着一个锦衣少年走了过来。

那少年一头张扬的赤红色长发，在夕阳下像燃烧的火焰。他穿着一身暗红色的锦缎长袍，袖口和衣领用金线绣着繁复的云纹，腰间系着一条镶满灵石的腰带。左手食指上戴着三枚不同颜色的宝石戒指，右耳一枚鸽血红色的宝石耳钉在夕阳下折射出妖异的光芒。他身边跟着四五个随从，个个毕恭毕敬。

「少主，这边请——」「知道了知道了，烦不烦。」少年不耐烦地挥了挥手，一双琥珀金色的眸子四处打量着，嘴角带着几分玩世不恭的笑。

这就是——天机商会少主，楚惊鸿。`,next:`ch1_chu_reaction`},{id:`ch1_chu_reaction`,speaker:`楚惊鸿`,text:`楚惊鸿的目光扫过人群，然后——停在了你身上。他的眸子微微眯起，上下打量了你一番。

「……」

他别过头，嗤了一声：「太虚宗的杂役弟子就这水准？穿得跟个乞丐似的。」

你低头看了看自己——灰色的杂役服确实洗得有些发白了，头发也因为打扫了一天有些凌乱。但你只是歪了歪头，一脸茫然：「乞丐是什么样的？」

楚惊鸿一噎，似乎没想到你会这么回答。他瞪着你，似乎想说什么刻薄的话，但对上你那双清澈到近乎天真的琥珀色眸子，他的话卡在了喉咙里。

他别过头，耳根微微泛红：「哼……算了，本少爷不跟你这种人一般见识。」

他大步流星地走了过去，但走了几步又停下来，回头看了你一眼。夕阳的余晖洒在你身上，微风吹起你的长发，你整个人像是镀上了一层金色的光晕。他的瞳孔微微收缩。

「喂，你叫什么名字？」`,choices:[{text:`告诉他你的名字`,next:`ch1_chu_name`,effects:{楚惊鸿好感:5}},{text:`反问他：你先说你叫什么`,next:`ch1_chu_counter`,effects:{楚惊鸿好感:8,"flag:楚惊鸿的意外":!0}},{text:`不说话，只是歪头看着他`,next:`ch1_chu_silent`,effects:{楚惊鸿好感:10,"flag:楚惊鸿的困惑":!0}}]},{id:`ch1_chu_name`,speaker:`楚惊鸿`,text:`你告诉了他你的名字。

他念了一遍，嘴角勾起一抹意味不明的笑：「名字倒是不错。可惜，配你这身打扮糟蹋了。」

他随手从随从手里拿过一个锦盒，扔给你：「接着。本少爷今天心情好，赏你的。」

你打开一看——是一套精致的灵蚕丝发带，织工精美，上面绣着淡淡的云纹，价值不菲。这种发带你在藏经阁的书里见过，是天机商会的特产，一条就抵得上杂役弟子半年的工钱。

他已经走远了，头也不回地挥了挥手：「别误会，本少爷就是觉得你头发太乱了，碍眼。」

他身边的随从面面相觑——少主什么时候管过别人头发乱不乱？`,effects:{"flag:楚惊鸿的礼物":!0},next:`ch1_ai_chu_evening`},{id:`ch1_ai_chu_evening`,speaker:`楚惊鸿`,text:`楚惊鸿正要离开，却又停下了脚步。夕阳的余晖洒在他赤红色的长发上，像是燃烧的火焰。他双手抱胸，斜眼看着你。`,ai:{character:`楚惊鸿`,context:`傍晚，玩家第一次遇到天机商会少主楚惊鸿。他刚刚嘲笑了玩家的穿着，却又送了礼物。他嘴硬心软，对玩家有好感但死不承认。`,transitionHint:`楚惊鸿说完关于天机商会或修仙界灵器的事情`,nextScene:`ch1_ai_gu_reflect`}},{id:`ch1_ai_gu_reflect`,speaker:`顾长渊`,text:`你正准备回住处，却在山道上遇到了顾长渊。他背着药箱，似乎是刚给弟子看完诊回来。月光洒在他的青衫上，他的琥珀色眸子映着你的身影。`,ai:{character:`顾长渊`,context:`入夜时分，玩家在山道上遇到了顾长渊。今天是玩家在太虚宗的第一天，白天发生了许多事情。顾长渊对玩家有好感，因为她让他想起了一个没能保护的人。`,transitionHint:`顾长渊关心玩家今天过得怎么样，或者提到他过去的往事`,nextScene:`ch1_chapter_end`}},{id:`ch1_chu_counter`,speaker:`楚惊鸿`,text:`你反问他叫什么。

楚惊鸿一愣，然后哈哈大笑：「有意思！你是第一个敢这么跟本少爷说话的人！」

他双手抱胸，下巴微扬，夕阳的光映在他琥珀金色的瞳孔里，像是两团燃烧的火焰：「听好了——本少爷叫楚惊鸿，天机商会少主。你以后要是缺什么灵器法宝，报本少爷的名字就行。」

他走近一步，居高临下地看着你。你闻到了一股淡淡的龙涎香——那是极名贵的香料，一小块就价值千金。他的宝石耳钉在夕阳下折射出妖异的红光。

「现在，该你告诉我了吧？」

你告诉了他你的名字。他念了一遍，点了点头：「不错。本少爷记住了。」

他说「记住」的时候，语气很轻，但你莫名觉得……这两个字重若千钧。`,effects:{"flag:楚惊鸿记住名字":!0},next:`ch1_ai_chu_evening`},{id:`ch1_chu_silent`,speaker:`旁白`,text:`你没有说话，只是歪着头，用那双清澈的琥珀色眸子静静地看着他。

楚惊鸿被你看得有些不自在：「喂，本少爷问你话呢！」你依然不说话，只是眨了眨眼。

他脸上的嚣张渐渐挂不住了，耳根开始泛红：「你……你看什么看！没见过有钱人吗！」他别过头，声音突然小了下去：「……你笑起来好看吗？不许笑。」

他大步流星地走了，但走了十几步又回头看了一眼——你正站在夕阳里，微风吹起你的长发，衣袂飘飘。金色的余晖勾勒出你柔和的轮廓，你整个人像是从画中走出来的一样。

他猛地转回头，走得更快了。随从们面面相觑——少主今天怎么怪怪的？

楚惊鸿走了好远才停下来，用手捂住了自己的胸口。心跳得好快。他咬了咬牙：「……该死。」`,effects:{"flag:楚惊鸿一见钟情":!0},next:`ch1_ai_chu_evening`},{id:`ch1_chapter_end`,speaker:`旁白`,text:`夜幕降临。你回到杂役弟子的住处，躺在床上，望着天花板发呆。窗外的月光洒进来，在地上投下银色的光斑。远处传来夜鸟的啼鸣。

一天之内，你遇到了三个人——软软糯糯的师弟沈夜尘，温柔正直的大夫顾长渊，嚣张跋扈的富家少爷楚惊鸿。他们看你的眼神……好像都有些奇怪。沈夜尘的温柔里藏着什么，顾长渊的关心里欲言又止，楚惊鸿的刻薄里带着一丝别扭的善意。

但你太累了，来不及细想，就沉沉睡去。梦中，你似乎又听到了那个苍老的声音：

「熏儿……你终将觉醒……」
「天命一族的血脉……将在你身上复苏……」
「届时……整个九霄大陆……都将为你颤栗……」`,effects:{"flag:第一章完成":!0},next:`ch1_end_card`},{id:`ch1_end_card`,speaker:`系统`,text:`——第一章完——

「入宗」

已解锁角色：沈夜尘、顾长渊、楚惊鸿

下一章预告：「灵根觉醒」

太虚宗一年一度的外门试炼即将到来。而你丹田中那股微弱的暖流，似乎越来越强烈了……`,nextChapter:2}]},ac={id:2,title:`第二章：灵根觉醒`,scenes:[{id:`chapter2_start`,speaker:`旁白`,text:`三天过去了。

每天夜里，你都能感觉到丹田中的那股暖流在缓缓壮大。从最初的若有若无，到现在已经像一条细细的溪流，在你的经脉中蜿蜒流转。你的感官也变得越来越敏锐——能听到远处弟子的窃窃私语，能闻到藏经阁第三层角落里那本古籍散发的霉味，甚至能在黑暗中隐约看到物体的轮廓。

灵根觉醒进度——15%。

今天一早，林若薇就兴冲冲地跑来找你：「熏儿熏儿！你知道吗？三天后就是外门试炼了！所有外门弟子都要参加！表现好的可以晋升内门！」

她拉着你的手，眼睛亮晶晶的：「虽然你是杂役弟子，但宗门有个规矩——只要有人愿意担保，杂役弟子也可以参加试炼！你猜谁愿意担保你？」

她还没说完，藏经阁的门就被推开了。晨光中，一个银白色头发的少年站在门口，手里抱着一摞竹简，笑容软糯：

「师姐，是我。」`,next:`ch2_ai_linruowei_morning`},{id:`ch2_ai_linruowei_morning`,speaker:`林若薇`,text:`林若薇拉着你的手，叽叽喳喳地说个不停。她似乎比你还兴奋，一直在说外门试炼的事情。`,ai:{character:`林若薇`,context:`三天过去了，玩家的灵根在慢慢觉醒。林若薇来告诉玩家外门试炼的消息，沈夜尘帮玩家担保了。`,transitionHint:`林若薇提到沈夜尘帮玩家担保的事情，或者介绍外门试炼的具体内容`,nextScene:`ch2_library_morning`}},{id:`ch2_library_morning`,speaker:`沈夜尘`,text:`沈夜尘将竹简一一摆在桌上，你看到上面写着《太虚灵根谱》几个古字。

「师姐，我这几天一直在查资料。」他的声音轻柔，像是怕惊扰了什么，「你的情况……很特殊。正常人的灵根要么有要么没有，但你的灵根像是被什么东西封印住了，现在封印在慢慢松动。」

他翻开其中一卷，指着一行古文：「这里记载了一种叫'混元灵根'的灵根，万年难遇。拥有这种灵根的人，可以同时修炼五行灵力，不受属性相克的限制。但这种灵根有一个特点——它需要特殊的契机才能觉醒。」

他抬起头，浅灰色的眸子认真地看着你：「师姐，我想帮你测试一下灵根。我在藏经阁找到了一块测灵石，只要把手放上去，就能知道灵根的属性和品质。」

他从袖中取出一块巴掌大的白色玉石，表面光滑如镜，内部隐隐流动着五彩的光华。`,choices:[{text:`接受测试：把手放上去`,next:`ch2_test_accept`,effects:{沈夜尘好感:5,智慧:2}},{text:`自己摸索：我想先自己感受一下`,next:`ch2_test_self`,effects:{心性:3,"flag:独立路线":!0}},{text:`观察他：你为什么对我的灵根这么上心？`,next:`ch2_test_observe`,effects:{沈夜尘好感:3,智慧:5,"flag:警觉路线":!0}}]},{id:`ch2_test_accept`,speaker:`旁白`,text:`你将手掌轻轻放在测灵石上。

玉石冰凉光滑，触感极好。你闭上眼睛，感受着掌心传来的微弱震动。起初什么都没有发生——然后，丹田中的暖流突然躁动起来，像是被什么东西唤醒了。

嗡——

测灵石开始发光。先是淡淡的白色，然后逐渐变成金色、青色、赤色、蓝色、黄色——五种颜色交替闪烁，越来越快，越来越亮。整个藏经阁都被这五彩的光芒照亮了。

沈夜尘的瞳孔微微收缩。他的嘴唇动了动，无声地念出了一个词：

「混元……」

下一秒，测灵石上的光芒骤然收敛，重新变成了普通的白色玉石。但玉石表面多了一道细细的裂纹——像是承受不住灵力的冲击。

沈夜尘迅速将测灵石收起来，脸上恢复了软糯的笑容：「师姐的灵根果然很特别。不过……这件事先不要告诉别人，好吗？」`,effects:{修为:2,灵力:10,"flag:灵根确认":!0},next:`ch2_ai_shen_test`},{id:`ch2_ai_shen_test`,speaker:`沈夜尘`,text:`测灵石的光芒消散后，沈夜尘将它收了起来。他看着你，眼中闪过一丝复杂的神色，随即恢复了软糯的笑容。`,ai:{character:`沈夜尘`,context:`玩家刚完成灵根测试，确认是混元灵根（万年一遇）。沈夜尘很震惊但努力保持平静。他叮嘱玩家不要告诉别人。`,transitionHint:`沈夜尘解释混元灵根的特殊之处，或者叮嘱玩家保密的重要性`,nextScene:`ch2_test_result`}},{id:`ch2_test_self`,speaker:`旁白`,text:`你没有碰测灵石，而是盘腿坐下，闭上眼睛，试着去感受丹田中的那股暖流。

起初很模糊——只是一团温热的东西在腹部深处。但你沉下心来，一点一点地去触碰它、感知它。渐渐地，你「看」到了——丹田深处，有一颗拇指大小的光球，表面流动着五种颜色的光芒，像是五条小蛇在互相追逐。

你试着用意念去触碰它，光球微微震动，一股暖流从丹田涌出，沿着经脉流转了一个小周天。你的全身都暖了起来，指尖甚至隐隐有微光闪烁。

沈夜尘在旁边静静地看着你，眼中闪过一丝惊讶——他没想到你在没有人指导的情况下，居然能自行感知到灵根的存在。

「师姐……你真的很厉害。」他的声音很轻，轻到像是在自言自语。

你睁开眼睛，发现他正用一种你从未见过的眼神看着你——不是软糯，不是乖巧，而是一种……深沉的、近乎贪婪的注视。但只是一瞬，他就移开了视线，恢复了往日的笑容。`,effects:{修为:3,灵力:15,心性:5,"flag:自行感知灵根":!0},next:`ch2_ai_shen_test`},{id:`ch2_test_observe`,speaker:`沈夜尘`,text:`你没有碰测灵石，而是直直地看着他：「你为什么对我的灵根这么上心？」

沈夜尘的动作微微一顿。他的睫毛低垂，在眼下投下一小片阴影。

「因为……」他沉默了一会儿，然后抬起头，浅灰色的眸子里映着你的身影，「因为师姐是特别的。」

他的语气平淡，但你莫名觉得这几个字重若千钧。

「我从小就能感知到别人身上的灵力波动。太虚宗几千个弟子，每个人身上的灵力都像是一盏灯——有亮有暗，有强有弱。但师姐不一样。」

他走近一步，声音压得很低：「师姐身上的灵力……像是一个被封印的太阳。表面上什么都看不到，但封印下面……是足以焚毁一切的力量。」

他的目光灼灼，像是要看穿你的灵魂：「我只是……想确认自己的判断没有错。」

说完，他又恢复了那副软糯的样子，歪了歪头：「师姐不会觉得我奇怪吧？」`,effects:{智慧:5,神秘值:5,"flag:沈夜尘的判断":!0},next:`ch2_ai_shen_test`},{id:`ch2_test_result`,speaker:`系统`,text:`灵根测试完成。

检测结果：混元灵根（觉醒中）
灵根品质：天级
觉醒进度：25%

——混元灵根，万年一遇。五行不相克，万法皆可修。

命轮玉封印持续松动中。你的记忆碎片里，似乎藏着关于这种灵根的秘密……`,effects:{rootBone:`混元灵根`,神秘值:10,修为:1},next:`ch2_announcement`},{id:`ch2_announcement`,speaker:`旁白`,text:`正午时分，太虚宗的钟声突然响了九下——这是召集所有弟子的信号。

你跟着人群来到宗门大殿前的广场上。广场中央立着一座三丈高的石碑，上面刻着密密麻麻的名字。一个白发苍苍的老者站在石碑前，声音洪亮：

「诸位弟子，太虚宗一年一度的外门试炼，将于三日后正式开始！试炼地点为宗门后山的万灵秘境。表现优异者，可晋升内门，获得更高级的修炼资源！」

人群一阵骚动。你听到身边的弟子们议论纷纷：

「万灵秘境？那可是有妖兽出没的地方啊！」「听说去年有人在试炼中受了重伤……」「但晋升内门的诱惑太大了，谁不想搏一搏？」

林若薇挤到你身边，激动地摇着你的手臂：「熏儿！沈师兄真的帮你报名了！你看——」

她指着石碑的最底部，你看到了自己的名字，旁边写着「担保人：沈夜尘」。

你回头看向沈夜尘，他正站在人群边缘，对你微微一笑。阳光照在他银白色的发丝上，那笑容柔软而温暖——但你总觉得，他的眼底深处藏着什么你看不透的东西。`,next:`ch2_ai_linruowei_trial`},{id:`ch2_ai_linruowei_trial`,speaker:`林若薇`,text:`人群渐渐散去，林若薇还拉着你的手，兴奋地讨论着试炼的事情。她的圆脸红扑扑的，眼睛亮晶晶的。`,ai:{character:`林若薇`,context:`外门试炼刚刚宣布，三天后在万灵秘境举行。沈夜尘帮玩家报了名。林若薇很兴奋，但也有些担心玩家的安全。`,transitionHint:`林若薇讨论试炼的准备事项，或者提到万灵秘境的危险`,nextScene:`ch2_gu_visit`}},{id:`ch2_gu_visit`,speaker:`顾长渊`,text:`傍晚，你正在杂役弟子的院子里劈柴——这是你的日常工作之一。斧头落下的时候，你隐约感觉到丹田中的灵力在微微涌动，让每一斧都比以前更有力道。

「你就是沈熏姑娘吧？」

一个温和的声音从身后传来。你转身，看到顾长渊正站在院门口，手里提着一个药箱，夕阳的余晖给他镀上了一层暖金色的光。他的琥珀色眸子映着晚霞，嘴角带着熟悉的温暖笑容。

「听若薇说你报了外门试炼。」他走近几步，将药箱放在石桌上，「试炼很危险，你又没有修炼基础。我是大夫，虽然不能教你打架，但可以教你一些基础的吐纳之术——至少能让你在遇到危险时跑得快一点。」

他打开药箱，取出一个小小的瓷瓶：「这是我配的培元丹，能帮助巩固灵根。不过——」他的表情变得认真，「你的灵根很特殊，修炼的时候千万不能急躁。混元灵根的力量太强了，如果控制不好，会反噬经脉。」

他看着你的眼神带着一丝担忧：「我会每天来教你吐纳，直到试炼开始。你愿意吗？」`,choices:[{text:`认真学习：拜他为师`,next:`ch2_gu_learn`,effects:{顾长渊好感:10,灵力:10,"flag:顾长渊指导":!0}},{text:`问他：你为什么对我这么好？`,next:`ch2_gu_ask`,effects:{顾长渊好感:8,智慧:3}},{text:`试探他：你怎么知道我的灵根特殊？`,next:`ch2_gu_probe`,effects:{顾长渊好感:5,智慧:5,"flag:试探顾长渊":!0}}]},{id:`ch2_gu_learn`,speaker:`顾长渊`,text:`你郑重地向他行了一礼：「请顾大夫教我。」

顾长渊微微一怔，然后笑了——那笑容像是春天里第一缕暖阳，让人从心底里觉得安心。他的酒窝在夕阳下格外明显。

「不用这么正式，叫我长渊就好。」他盘腿坐下，示意你也坐下，「吐纳之术是修炼的基础。你先闭上眼睛，感受丹田中的灵力……」

接下来的时间里，他手把手地教你呼吸吐纳的节奏。他的声音温和而稳定，像是潺潺的溪流，引导你将丹田中的灵力沿着经脉缓缓运转。你感觉到他的手指偶尔会搭在你的手腕上，帮你调整脉搏的节奏——他的指尖温暖而干燥，带着淡淡的药草香。

不知不觉间，天色已经暗了下来。你的体内，灵力已经完成了一个完整的小周天运转。虽然还很微弱，但比之前顺畅了许多。

顾长渊站起身，拍了拍衣摆上的灰尘：「今天就到这里。明天同一时间，我再来。」

他走了几步，又停下来回头看。月光洒在他的侧脸上，你看到他的表情变得柔和而复杂：「你……真的很像一个人。」

他没有说完，转身消失在夜色中。`,effects:{修为:2,灵力:15,体质:5},next:`ch2_ai_gu_training`},{id:`ch2_ai_gu_training`,speaker:`顾长渊`,text:`教学结束后，顾长渊没有立刻离开。他坐在你对面，琥珀色的眸子映着夕阳的余晖，似乎有话想说。`,ai:{character:`顾长渊`,context:`顾长渊刚教完玩家基础吐纳之术。玩家的灵根很特殊（混元灵根），他很担心玩家修炼时出问题。他对玩家有好感，因为她让他想起了一个没能保护的人。`,transitionHint:`顾长渊叮嘱修炼注意事项，或者提到他过去的往事`,nextScene:`ch2_gu_cultivate`}},{id:`ch2_gu_ask`,speaker:`顾长渊`,text:`你看着他的眼睛，认真地问：「你为什么对我这么好？」

顾长渊的手微微一顿。他放下瓷瓶，沉默了一会儿。

「因为你让我想起了一个人。」他的声音很轻，带着一丝不易察觉的颤抖，「很久以前……我认识一个姑娘，她也有和你一样的眼睛——清澈、纯净，像是山间的溪水。她也很善良，对任何人都没有戒心。」

他的目光落在远方的云海上，琥珀色的眸子里映着夕阳的余晖：「后来……她出了事。是我没能保护好她。」

他转过头，重新看向你，笑容里带着一丝苦涩：「所以看到你的时候，我就想……这一次，我一定要保护好。」

他伸出手，犹豫了一下，最终只是轻轻拍了拍你的头顶：「别想太多。我只是个大夫，能做的也只有这些了。来，坐下，我教你吐纳。」

他的笑容温暖如初，但你隐约感觉到——那笑容背后，藏着一段很深很深的往事。`,effects:{顾长渊好感:12,"flag:顾长渊的过去":!0},next:`ch2_ai_gu_training`},{id:`ch2_gu_probe`,speaker:`顾长渊`,text:`你眯起眼睛：「你怎么知道我的灵根特殊？我没有告诉过任何人。」

顾长渊的表情微微一变，但很快恢复了平静。他从药箱里取出一枚铜钱大小的玉佩，上面刻着密密麻麻的符文。

「这是灵脉探测仪，能感知方圆十丈内的灵力波动。」他的语气平淡，像是在解释一件很寻常的事情，「你身上的灵力波动很特殊——不是强，而是'纯'。普通的灵力都带有属性偏向，但你的灵力……是无属性的。这种灵力，只在混元灵根的持有者身上出现过。」

他将玉佩收起来，认真地看着你：「我不会伤害你。但你要小心——混元灵根在修仙界是极其罕见的宝物。如果被心术不正的人知道……你会成为所有人的目标。」

他的眼神变得严肃：「包括太虚宗内部。」

你心中一凛。他这话的意思是……太虚宗里有人会对我不利？

顾长渊似乎看出了你的担忧，笑了笑：「别怕。有我在。来，我教你吐纳——至少让你有自保的能力。」`,effects:{智慧:5,神秘值:8,"flag:太虚宗的暗流":!0},next:`ch2_ai_gu_training`},{id:`ch2_gu_cultivate`,speaker:`旁白`,text:`接下来的三天，顾长渊每天傍晚都来教你吐纳。

第一天，你学会了基础的灵力运转——将丹田中的灵力沿着经脉循环一个周天。你的经脉还很脆弱，每次运转只能坚持半柱香的时间就会感到酸痛。但顾长渊说这已经很快了，普通人至少需要一个月才能完成第一个周天。

第二天，他教你用灵力强化身体——将灵力灌注到四肢，可以暂时提升力量和速度。你试着跳了一下，直接跳了三尺高，把自己吓了一跳。顾长渊在旁边笑得肩膀发抖。

第三天，他教你如何在灵力耗尽时快速恢复——深呼吸，感受天地间的灵气，引导它们进入丹田。你在后山的瀑布旁练习了一个时辰，浑身湿透，但灵力确实恢复了不少。

灵根觉醒进度——40%。

试炼前夜，你躺在床上，翻来覆去睡不着。窗外的月亮又圆又亮，银色的月光洒进来，在地上投下窗棂的影子。你握着命轮玉，感受着它微弱的温度。

明天……就是试炼了。`,effects:{修为:5,灵力:20,体质:10},next:`ch2_ai_shen_eve`},{id:`ch2_ai_shen_eve`,speaker:`沈夜尘`,text:`试炼前夜，你在后山散步时遇到了沈夜尘。月光下，他的银白色发丝泛着清冷的光，浅灰色的眸子映着你的身影。`,ai:{character:`沈夜尘`,context:`试炼前夜，玩家在后山遇到了沈夜尘。经过三天的修炼，玩家的灵根觉醒进度已达40%。沈夜尘对玩家的关心似乎超出了普通师弟的程度。`,transitionHint:`沈夜尘聊到明天的试炼，或者表达对玩家安全的担心`,nextScene:`ch2_chu_encounter`}},{id:`ch2_chu_encounter`,speaker:`楚惊鸿`,text:`你睡不着，索性起身到后山走走。

月光下的天柱山格外安静。云海在脚下翻涌，远处的山峦在夜色中只剩下模糊的轮廓。你沿着山道慢慢走着，夜风吹过，带着草木的清香。

「喂，大半夜的不睡觉，你在这儿干嘛？」

一个嚣张的声音从头顶传来。你抬头，看到楚惊鸿正坐在一棵古松的枝干上，双腿晃荡着，手里把玩着一枚鸽血红色的宝石。月光映在他的琥珀金色瞳孔里，像是两团燃烧的火焰。

他从树上跳下来，稳稳地落在你面前。你闻到了一股淡淡的龙涎香——和上次一样的味道。

「明天就试炼了，你一个没有灵力的杂役弟子，跑去送死吗？」他的语气刻薄，但眼神却不像上次那样轻蔑。他上下打量了你一番，目光在你身上停留了一瞬——月光下的你，穿着单薄的里衣，衣袂被夜风吹起，露出纤细的脚踝。他猛地别过头，耳根微红。

「……哼。」他从袖中掏出一个小小的锦囊，扔给你：「接着。」`,choices:[{text:`收下并道谢`,next:`ch2_chu_accept`,effects:{楚惊鸿好感:8,机缘:5}},{text:`拒绝：我不能收你的东西`,next:`ch2_chu_refuse`,effects:{楚惊鸿好感:5,心性:3}},{text:`嘲笑他：你不是说我是乞丐吗？怎么又来送东西？`,next:`ch2_chu_tease`,effects:{楚惊鸿好感:12,"flag:楚惊鸿的别扭":!0}}]},{id:`ch2_chu_accept`,speaker:`楚惊鸿`,text:`你接住锦囊，打开一看——里面是一枚温润的白色玉符，上面刻着细密的符文，散发着淡淡的灵光。

「这是护身符，能挡一次致命攻击。」楚惊鸿别过头，语气漫不经心，「本少爷多得是，给你一个也无所谓。」

你向他道谢，他嗤了一声：「谁要你谢了。本少爷就是看你可怜，一个废物跑到万灵秘境里去，不被妖兽吃掉才怪。」

他转身要走，走了几步又停下来，头也不回地说：「喂，你要是死了，本少爷会很没面子的——毕竟你的名字是本少爷记住的。所以……给我活着回来。」

他的声音越来越轻，最后几乎被夜风吹散了。月光下，他的背影挺拔而张扬，赤红色的长发在夜风中飘动，像是一面燃烧的旗帜。

你握着那枚护身符，感觉到掌心传来一阵温热。这枚玉符的灵力极其纯净——绝不是普通的护身符。你突然想起林若薇说过，天机商会的灵器向来价值连城……

这枚小小的护身符，恐怕抵得上你十年的工钱。`,effects:{体质:10,"flag:楚惊鸿的护身符":!0},next:`ch2_ai_chu_gift`},{id:`ch2_ai_chu_gift`,speaker:`楚惊鸿`,text:`楚惊鸿转身要走，却又停下了脚步。月光洒在他赤红色的长发上，他背对着你，似乎在犹豫什么。`,ai:{character:`楚惊鸿`,context:`深夜，楚惊鸿给了玩家一枚护身符（价值连城）。他嘴上说是因为看玩家可怜，但实际上对玩家有好感。月光下两人独处。`,transitionHint:`楚惊鸿解释护身符的用法，或者别扭地表达对玩家的关心`,nextScene:`ch2_eve_vision`}},{id:`ch2_chu_refuse`,speaker:`楚惊鸿`,text:`你将锦囊递回去：「我不能收你的东西。」

楚惊鸿的脸色变了。他瞪着你，似乎不敢相信你居然拒绝了他。

「你……你知道这是什么吗？」他的声音有些不稳，「这是天机商会特制的护身符！外面求都求不到！」

你摇摇头：「正因为太贵重了，我更不能收。无功不受禄。」

他咬着牙，耳根红透了：「谁说是白给的？等你试炼回来，给本少爷打扫一个月的院子！」

你还是摇头。

他气得胸口起伏了好几下，最后把锦囊往你怀里一塞：「你敢不收？本少爷楚惊鸿送出去的东西，从来没有收回来的道理！你不要就扔掉！」

说完，他头也不回地走了。赤红色的长发在月光下像是一团燃烧的火焰，张扬而倔强。

你低头看着怀里的锦囊，无奈地笑了笑。这个人……嘴上说得凶，做的事却完全不是那么回事。

锦囊里的玉符散发着温暖的灵光。你将它贴身收好。`,effects:{体质:10,"flag:楚惊鸿的倔强":!0},next:`ch2_ai_chu_gift`},{id:`ch2_chu_tease`,speaker:`楚惊鸿`,text:`你忍不住笑了：「你上次不是说我是乞丐吗？怎么又来送东西了？」

楚惊鸿的脸瞬间涨红：「你……你少得意！本少爷就是……就是……」

他支支吾吾了半天，也没能说出一个合理的理由。最后他恼羞成怒地把锦囊往你手里一塞：「就是看你可怜！行了吧！」

你故意逗他：「哦？堂堂天机商会少主，居然会可怜一个杂役弟子？」

他的耳根红得像要滴血，眼神四处飘忽：「本少爷爱可怜谁就可怜谁！你管不着！」

他转身要走，却被你叫住了：「等一下，你脸红了。」

他猛地回头，差点被自己的脚绊倒：「谁、谁脸红了！是月光映的！」

他逃也似地跑走了，赤红色的长发在月光下像是一面旗帜。你听到他跑出好远后，隐约传来一句低声的抱怨：

「……该死的女人……」

你握着那枚锦囊，笑得肩膀发抖。这个人……真的很有趣。`,effects:{体质:10,"flag:楚惊鸿的心动":!0},next:`ch2_ai_chu_gift`},{id:`ch2_eve_vision`,speaker:`旁白`,text:`回到住处，你刚躺下，命轮玉就开始发烫。

你闭上眼睛，意识被拉入了一片虚空。

这一次，你看到的不是火海，而是一座辉煌的宫殿。宫殿的柱子是用白玉雕成的，地面上铺着金丝织就的地毯。大殿中央，一个身着白衣的女子正跪在一面铜镜前。她的面容模糊不清，但你能感觉到——她和你之间，有着某种深刻的联系。

铜镜中映出的，不是她的脸——而是一片星空。无数星辰在镜中旋转，组成了一个巨大的符文。那个符文……和命轮玉上的符文一模一样。

女子开口了。她的声音空灵而悲伤：

「天命一族……守护九霄大陆万年……如今……只剩我一人……」

「我要将最后的力量……封入这块玉佩……」

「等待……下一个觉醒者……」

她的身影开始消散，化作点点星光，融入了命轮玉中。在她彻底消失的瞬间，你看到了她的脸——

那张脸……和你一模一样。

你猛然惊醒。灵根觉醒进度——60%。命轮玉封印进一步松动。你隐约感觉到，自己的身世之谜，远比想象的更加复杂。`,effects:{神秘值:15,灵力:10,"flag:天命一族":!0},next:`ch2_ai_shen_vision`},{id:`ch2_ai_shen_vision`,speaker:`沈夜尘`,text:`你从幻境中醒来，发现命轮玉还在微微发烫。沈夜尘不知何时出现在你身边，他的银白色发丝在月光下泛着冷光。`,ai:{character:`沈夜尘`,context:`玩家刚经历了一个关于天命一族的幻境，看到了一个和自己长得一模一样的白衣女子。灵根觉醒进度达到60%。沈夜尘似乎一直在暗中关注玩家。`,transitionHint:`沈夜尘问起玩家看到了什么，或者暗示他知道天命一族的秘密`,nextScene:`ch2_trial_start`}},{id:`ch2_trial_start`,speaker:`旁白`,text:`试炼当天，天还没亮，太虚宗的演武场上就挤满了人。

数百名外门弟子聚集在此，个个神情紧张又兴奋。演武场中央，一个巨大的传送阵正在缓缓运转，阵法中流转着淡蓝色的光芒。传送阵的另一端，就是万灵秘境——太虚宗历代弟子试炼之地。

你站在人群的最边缘，身上穿着洗得发白的灰色杂役服。周围投来的目光有好奇、有不屑、有同情。

「那个杂役弟子也来了？」「她连灵根都没有吧？」「听说是沈夜尘师兄担保的……」「沈师兄心太软了，这不是让她去送死吗？」

你充耳不闻，只是安静地站着。但你感觉到——丹田中的灵力在微微涌动，比昨天更加充沛。顾长渊教你的吐纳之术、沈夜尘给你的灵根测试结果、楚惊鸿送的护身符……这些天的准备，都是为了今天。

一个尖锐的声音突然在你耳边响起：

「哟，这不是打扫藏经阁的那个废物吗？」`,next:`ch2_ai_gu_trial`},{id:`ch2_ai_gu_trial`,speaker:`顾长渊`,text:`就在传送阵即将开启的时候，顾长渊挤过人群来到你身边。他的琥珀色眸子里带着一丝担忧，手里还提着药箱。`,ai:{character:`顾长渊`,context:`外门试炼即将开始，顾长渊来给玩家送行。他教了玩家三天的吐纳之术，但还是很担心玩家的安全。玩家的灵根很特殊。`,transitionHint:`顾长渊给玩家最后的叮嘱，或者塞给她一些丹药`,nextScene:`ch2_confrontation`}},{id:`ch2_confrontation`,speaker:`旁白`,text:`你转头，看到一个穿着蓝色弟子服的青年正斜着眼睛看你。他身后跟着几个弟子，个个面带讥笑。

「赵师兄，这就是那个没有灵根的杂役？」一个弟子嗤笑道，「她来试炼？怕不是来给妖兽送点心的吧？」

蓝衣青年——赵云泽，外门弟子中的佼佼者，修为筑基中期。他走到你面前，居高临下地看着你：「我劝你还是回去扫地吧。万灵秘境可不是你这种废物能去的地方。」

他伸手推了你一把。你没有灵力护体，踉跄了好几步，差点摔倒。周围的弟子发出一阵哄笑。

就在这时——

「赵云泽，你干什么！」

林若薇冲了过来，挡在你面前，双手叉腰，怒目圆瞪：「欺负一个没有灵力的人，你算什么英雄好汉！」

赵云泽冷笑：「林若薇，你一个外门弟子，也敢管我的事？」

林若薇毫不退缩：「我就是管了！你想怎样？」

眼看气氛越来越紧张，一个清冷的声音从人群后方传来：

「赵师弟，在试炼入口处动手，是要被取消资格的。」`,choices:[{text:`拉住林若薇：别冲动，我们走`,next:`ch2_peaceful`,effects:{心性:5,道德值:3}},{text:`直视赵云泽：你说完了？`,next:`ch2_defiant`,effects:{魅力:5,"flag:不卑不亢":!0}},{text:`看向声音的来源`,next:`ch2_look_away`,effects:{智慧:3}}]},{id:`ch2_peaceful`,speaker:`旁白`,text:`你拉住了林若薇的手，对她摇摇头：「算了，不值得。」

林若薇不甘心地瞪了赵云泽一眼，但还是跟着你退到了一边。赵云泽冷哼一声，带着他的跟班扬长而去。

「熏儿！你怎么能忍！」林若薇气得直跺脚。

你笑了笑：「试炼见真章。嘴上逞强有什么用？」

林若薇愣了一下，然后也笑了：「你说得对！等你在秘境里表现好了，看他们还敢不敢说你是废物！」

传送阵的光芒越来越亮。一个白发老者走上高台，声音洪亮：

「外门试炼，正式开始！所有弟子，依次进入传送阵！」

人群开始涌动。你握紧了腰间的护身符，深吸一口气。

这一刻，你忽然感觉到——命轮玉在微微震动，仿佛在回应你的决心。丹田中的灵力翻涌着，比任何时候都要充沛。

灵根觉醒进度——60%。

你迈步走向传送阵。`,next:`ch2_ai_trial_enter`},{id:`ch2_ai_trial_enter`,speaker:`林若薇`,text:`传送阵的光芒越来越亮，人群开始涌动。林若薇紧紧握着你的手，她的掌心微微出汗。`,ai:{character:`林若薇`,context:`外门试炼即将开始，玩家们站在传送阵前。刚才有人嘲笑玩家是废物，林若薇挺身而出维护了她。现在两人即将进入万灵秘境。`,transitionHint:`林若薇表达对试炼的紧张或期待，或者叮嘱玩家要注意安全`,nextScene:`ch2_chapter_end`}},{id:`ch2_defiant`,speaker:`旁白`,text:`你没有退缩，而是直直地看着赵云泽的眼睛。

「你说完了？」

你的声音很平静，但赵云泽却愣住了——他没想到一个杂役弟子敢用这种眼神看他。你的眼睛清澈而坚定，像是深山中的潭水，表面平静，底下却暗流涌动。

「你……」他下意识地后退了一步。

你没有再理他，转身走向传送阵。林若薇跟在你身后，小声说：「熏儿，你刚才好帅啊……」

周围有弟子小声议论：「那个杂役弟子……好像不太一样？」「她的眼神好可怕……」「不就是个废物吗，装什么装？」

但你已经不在意了。你的心中只有一个念头——变强。

传送阵的光芒越来越亮。白发老者的声音响彻广场：

「外门试炼，正式开始！」

你握紧护身符，迈步走进了传送阵。光芒将你吞没的瞬间，你感觉到命轮玉在微微震动——它在回应你的决心。`,effects:{"flag:众人瞩目":!0},next:`ch2_ai_trial_enter`},{id:`ch2_look_away`,speaker:`旁白`,text:`你循声望去，看到人群后方站着一个青衫男子——顾长渊。

他今天没有背药箱，而是穿着一身干净利落的青色长衫，腰间系着一条白色的腰带。他的琥珀色眸子平静地看着赵云泽，嘴角带着一丝淡淡的笑——但那笑容没有温度。

赵云泽的脸色变了：「顾……顾大夫？」

顾长渊缓缓走近，每一步都不急不缓，但你注意到赵云泽的额头上已经冒出了冷汗。

「赵师弟，」他的声音温和得像在聊天，「我记得你上个月来药堂看诊，是灵力紊乱导致的经脉堵塞吧？我给你开的药，你按时吃了吗？」

赵云泽的脸色更加难看了：「吃、吃了……」

「那就好。」顾长渊笑了笑，「不过我建议你少动怒——怒气会让灵力紊乱加重的。你说对吗？」

赵云泽咬了咬牙，带着他的跟班灰溜溜地走了。

顾长渊转向你，笑容重新变得温暖：「别怕。去吧，我在宗门等你回来。」`,effects:{"flag:顾长渊的威慑":!0},next:`ch2_ai_trial_enter`},{id:`ch2_chapter_end`,speaker:`旁白`,text:`传送阵的光芒将你吞没。一阵天旋地转之后，你发现自己站在一片茂密的森林中。

参天古木遮天蔽日，阳光只能透过层层叠叠的树叶洒下斑驳的光影。空气中弥漫着泥土和腐叶的气息，夹杂着一种你从未闻过的奇异花香。远处传来不知名鸟兽的叫声，时而低沉，时而尖锐。

万灵秘境——试炼之地。

你低头看了看手中的命轮玉，它的符文正在微微发光，比以往任何时候都要明亮。你感觉到丹田中的灵力在翻涌，像是在回应这片古老森林中的灵气。

灵根觉醒进度——60%。

你深吸一口气，迈步走向森林深处。身后传来其他弟子着陆的声音，但你没有回头。从这一刻起，你不再是那个只能打扫藏经阁的杂役弟子。

你要证明——你值得站在这里。`,effects:{"flag:第二章完成":!0},next:`ch2_ai_chu_secret_realm`},{id:`ch2_ai_chu_secret_realm`,speaker:`楚惊鸿`,text:`你刚站稳脚跟，就听到身后传来一个嚣张的声音。楚惊鸿不知什么时候也进了秘境，正靠在一棵古松上，双手抱胸看着你。`,ai:{character:`楚惊鸿`,context:`玩家刚进入万灵秘境，楚惊鸿也跟了进来（他不是外门弟子，可能是偷偷混进来的）。他嘴硬说是因为无聊才来的。`,transitionHint:`楚惊鸿解释他为什么在这里，或者别扭地表示他是来保护玩家的`,nextScene:`ch2_end_card`}},{id:`ch2_end_card`,speaker:`系统`,text:`——第二章完——

「灵根觉醒」

灵根觉醒进度：60%
当前灵根：混元灵根（天级）
已解锁能力：基础吐纳、灵力强化

下一章预告：「暗潮涌动」

万灵秘境中，等待你的不仅是妖兽和试炼。那些隐藏在太虚宗深处的暗流，已经开始涌动……`,nextChapter:3}]},oc={id:3,title:`第三章：暗潮涌动`,scenes:[{id:`chapter3_start`,speaker:`旁白`,text:`万灵秘境的森林比你想象的更加危险。

你走了不到半个时辰，就遇到了第一只妖兽——一只通体漆黑的巨狼，体型比普通的狼大了三倍，绿色的眼睛在暗处闪烁着幽光。它挡在路中央，低沉地咆哮着，露出锋利的獠牙。

你握紧拳头，感觉到丹田中的灵力在涌动。顾长渊教你的吐纳之术在脑海中闪过——灵力灌注四肢，提升力量和速度。

巨狼扑了过来。

你侧身闪避，感觉到爪风从耳边掠过。你反手一拳，灵力灌注在拳头上，击中了巨狼的侧腹。巨狼发出一声哀嚎，翻滚了几圈，然后夹着尾巴逃走了。

你喘着粗气，低头看了看自己的拳头——指节有些发红，但没有受伤。灵力的护体效果比你预想的更好。

「不错嘛，杂役弟子。」一个声音从树上传来。你抬头，看到一个穿着蓝色弟子服的青年正坐在树枝上，嘴角带着玩味的笑——是赵云泽。

「不过这只是最低级的妖兽。」他跳下来，拍了拍身上的灰尘，「真正的考验在后面。」`,next:`ch3_ai_gu_start`},{id:`ch3_ai_gu_start`,speaker:`顾长渊`,text:`就在你准备继续前进的时候，顾长渊从一棵大树后面走了出来。他的药箱背在身上，琥珀色的眸子带着一丝担忧。`,ai:{character:`顾长渊`,context:`玩家刚击退了一只巨狼，进入了万灵秘境。顾长渊也出现在秘境中（他可能不是参赛者，而是来保护玩家的）。`,transitionHint:`顾长渊解释他为什么在这里，或者叮嘱玩家秘境中的危险`,nextScene:`ch3_ai_linruowei_forest`}},{id:`ch3_ai_linruowei_forest`,speaker:`林若薇`,text:`击退巨狼后，林若薇从一棵大树后面探出头来。她的圆脸上还带着惊魂未定的神色，但看到你平安无事，立刻露出了笑容。`,ai:{character:`林若薇`,context:`玩家在万灵秘境中击退了一只巨狼。林若薇找到了玩家，两人准备一起深入秘境。秘境中很危险，但也有宝物。`,transitionHint:`林若薇讨论接下来的路线选择，或者分享她打听到的秘境情报`,nextScene:`ch3_fork_road`}},{id:`ch3_fork_road`,speaker:`旁白`,text:`你继续深入森林。路越来越难走，荆棘丛生，不时有妖兽从暗处窜出。你靠着灵力护体，勉强应付了过去。

走了约莫两个时辰，你来到了一个岔路口。左边的路通往一片竹林，竹叶在风中沙沙作响；右边的路通往一个山洞，洞口弥漫着淡淡的雾气。

你注意到竹林方向传来隐约的打斗声，而山洞方向则有一种奇异的灵力波动——像是什么东西在呼唤你。

命轮玉在你怀中微微发热。

林若薇不知从哪里冒了出来：「熏儿！我终于找到你了！刚才有只妖兽追了我好久——」她喘着粗气，看到你面前的岔路，「走哪边？」`,choices:[{text:`走竹林：那边有人在打斗，可能需要帮忙`,next:`ch3_bamboo`,effects:{道德值:5,"flag:选择竹林":!0}},{text:`走山洞：命轮玉在指引我`,next:`ch3_cave`,effects:{神秘值:5,"flag:选择山洞":!0}}]},{id:`ch3_bamboo`,speaker:`旁白`,text:`你拉着林若薇跑向竹林。穿过层层竹影，你看到一片空地上，三个外门弟子正在和一只巨大的毒蛛搏斗。毒蛛有牛犊大小，八条腿锋利如刀，口中不断喷出紫色的毒液。

三个弟子已经伤痕累累，其中一个已经被毒液溅到，手臂发黑，行动迟缓。

你二话不说，冲了上去。灵力灌注双拳，你一拳打在毒蛛的腹部，将它击退了几步。林若薇也拔出短剑，从侧面包抄。

毒蛛发出尖锐的嘶叫，八条腿疯狂挥舞。你闪避不及，被一条腿划破了手臂，鲜血直流。但你也抓住了机会，一拳打在毒蛛的眼睛上。毒蛛吃痛，转身逃走了。

三个弟子感激地看着你：「谢谢你！我们是外门乙组的弟子，被这只毒蛛困住了好久。」

手臂受伤的弟子犹豫了一下，从怀中取出一枚玉简递给你：「这是我们发现的秘境地图碎片，上面标注了一些安全区域和宝物位置。送给你，算是报答。」`,effects:{体质:-5,机缘:8,"flag:获得地图碎片":!0},next:`ch3_ai_linruowei_after_bamboo`},{id:`ch3_ai_linruowei_after_bamboo`,speaker:`林若薇`,text:`离开竹林后，林若薇帮你包扎了手臂上的伤口。她的动作有些笨拙，但很认真。`,ai:{character:`林若薇`,context:`玩家和林若薇刚救了三个外门弟子，获得了一枚地图碎片。玩家手臂受了伤。两人在秘境中继续前进。`,transitionHint:`林若薇关心玩家的伤势，或者讨论地图碎片上的信息`,nextScene:`ch3_secret_path`}},{id:`ch3_cave`,speaker:`旁白`,text:`你和林若薇走进了山洞。洞内阴暗潮湿，空气中弥漫着一种奇异的香气——像是某种灵草的味道。命轮玉的光芒越来越亮，照亮了前方的道路。

走了约莫百步，山洞豁然开朗。你发现自己站在一个巨大的地下空间中，穹顶上镶嵌着无数发光的矿石，像是一片星空。空间中央，有一个圆形的石台，石台上放着一块巴掌大的玉牌，表面刻着密密麻麻的符文。

命轮玉的光芒骤然增强，和玉牌上的符文产生了共鸣。你感觉到一股强大的灵力从玉牌中涌出，灌入你的体内。

你的灵根在疯狂吸收这股灵力——觉醒进度从60%飙升到了70%。

林若薇瞪大了眼睛：「这是……上古传承？！」

你拿起玉牌，上面的符文在你手中缓缓亮起，形成了几个字：

「天命一族·混元心法·第一层」`,effects:{灵力:30,修为:8,神秘值:10,"flag:获得混元心法":!0},next:`ch3_ai_linruowei_after_cave`},{id:`ch3_ai_linruowei_after_cave`,speaker:`林若薇`,text:`走出山洞后，林若薇一脸崇拜地看着你。她的眼睛亮晶晶的，像是看到了什么不可思议的事情。`,ai:{character:`林若薇`,context:`玩家在山洞中获得了天命一族的混元心法传承，灵根觉醒进度大幅提升。林若薇亲眼见证了这一切，非常震惊。`,transitionHint:`林若薇问起天命一族的事情，或者讨论混元心法的来历`,nextScene:`ch3_secret_path`}},{id:`ch3_secret_path`,speaker:`旁白`,text:`你继续深入秘境。有地图碎片指引，你的行进顺畅了许多。沿途你又遇到了几只妖兽，但都在你的灵力和战斗本能下败退。

黄昏时分，你来到了秘境深处的一片废墟。残垣断壁间长满了青苔和藤蔓，依稀可以看出这里曾经是一座宏伟的宫殿。废墟中央，立着一块巨大的石碑，上面刻着古老的文字。

你走近石碑，命轮玉再次发烫。碑文在你的注视下缓缓亮起：

「此处为天命一族最后的庇护所。万年前，天道崩塌，天命一族以全族之力封印天道之毒，守护九霄大陆。如今封印渐弱，天道之毒即将苏醒……」

「唯有混元灵根的觉醒者，才能重新封印天道之毒……」

你还没看完，身后传来了脚步声。你猛然转身——

是沈夜尘。他站在废墟入口，银白色的发丝在夕阳下泛着珠光。他的表情不再是往日的软糯，而是一种你从未见过的复杂——像是悲伤，又像是决绝。

「师姐……你终于走到这里了。」`,next:`ch3_ai_linruowei_deep`},{id:`ch3_ai_linruowei_deep`,speaker:`林若薇`,text:`你们继续深入秘境。林若薇紧紧跟在你身边，她的表情比之前严肃了许多——秘境深处的气氛越来越压抑。`,ai:{character:`林若薇`,context:`玩家和林若薇在秘境深处继续探索。刚才发现了天命一族的石碑，气氛变得紧张。林若薇虽然活泼，但也能感觉到这里的不寻常。`,transitionHint:`林若薇讨论秘境中的诡异气氛，或者分享她对沈夜尘的观察`,nextScene:`ch3_ai_chu_ruins`}},{id:`ch3_ai_chu_ruins`,speaker:`楚惊鸿`,text:`就在你准备进入废墟的时候，一个嚣张的声音从身后传来。楚惊鸿靠在一棵古树上，双手抱胸，赤红色的长发在夕阳下格外耀眼。`,ai:{character:`楚惊鸿`,context:`玩家在秘境深处的废墟前遇到了楚惊鸿。他不是外门弟子，却出现在了秘境中。他嘴硬说是无聊才来的。`,transitionHint:`楚惊鸿解释他为什么在秘境，或者别扭地表示他是跟着玩家来的`,nextScene:`ch3_ai_shen_ruins`}},{id:`ch3_ai_shen_ruins`,speaker:`沈夜尘`,text:`沈夜尘站在废墟入口，银白色的发丝在夕阳下泛着珠光。他的表情不再是往日的软糯，而是一种你从未见过的复杂。`,ai:{character:`沈夜尘`,context:`玩家在秘境深处的废墟中发现了天命一族的石碑。沈夜尘突然出现，气氛变得紧张。他似乎隐藏着什么秘密。`,transitionHint:`沈夜尘解释他为什么会在这里，或者暗示他知道天命一族的事情`,nextScene:`ch3_shen_reveal`}},{id:`ch3_shen_reveal`,speaker:`沈夜尘`,text:`沈夜尘缓缓走近你。他的步伐很轻，但每一步都带着一种莫名的压迫感。你下意识地后退了一步。

「别怕。」他的声音很轻，带着一丝苦涩，「我不会伤害你。至少……现在不会。」

他站在石碑前，伸手触摸碑文。他的手指划过「天命一族」四个字时，微微颤抖了一下。

「师姐，你知道吗……我等你等了很久。」他转过身，浅灰色的眸子映着你的身影，「很久很久。久到我都快忘了……自己为什么要等。」

你皱起眉头：「你在说什么？」

他没有回答，而是从袖中取出一块漆黑的玉佩——和你的命轮玉一模一样，但颜色完全相反。黑色的玉佩表面流动着暗红色的纹路，像是被鲜血浸染过。

「这是……命轮玉的另一半。」他的声音很轻，「万年前，天命一族的族长将命轮玉一分为二。一半封印混元灵根，一半封印……天道之毒。」

他将黑色玉佩举到你面前。你感觉到一股阴冷的气息扑面而来，让你浑身汗毛倒竖。

「师姐，你手中的命轮玉封印的是希望。而我手中的……封印的是绝望。」`,choices:[{text:`质问他：你到底是谁？`,next:`ch3_shen_truth`,effects:{智慧:5,"flag:质问沈夜尘":!0}},{text:`后退：你离我远点`,next:`ch3_shen_retreat`,effects:{心性:3,"flag:警惕沈夜尘":!0}}]},{id:`ch3_shen_truth`,speaker:`沈夜尘`,text:`你直视他的眼睛：「你到底是谁？」

沈夜尘沉默了很久。夕阳的余晖从废墟的缝隙中洒进来，照在他的脸上，投下斑驳的光影。他的表情从复杂变成了平静，又从平静变成了悲伤。

「我是……天道之毒的守护者。」他的声音很轻，像是在说一个埋藏了万年的秘密。

「万年前，天命一族封印天道之毒时，需要一个守护者来确保封印不会被破坏。我……就是那个守护者。我在这片大陆上等了一万年，等待下一个混元灵根的觉醒者出现。」

他低下头，银白色的发丝垂落在脸侧：「师姐，你就是我等了一万年的人。」

他抬起头，浅灰色的眸子里映着你的身影，水光潋滟：「但我没想到……我会对你产生感情。这不在我的计划之内。」

他的笑容苦涩而温柔：「所以我很矛盾。我既希望你觉醒，又害怕你觉醒。因为一旦你觉醒了……你就必须面对天道之毒。而那……可能会要了你的命。」`,effects:{"flag:沈夜尘的真实身份":!0,沈夜尘好感:10},next:`ch3_ai_shen_after_truth`},{id:`ch3_ai_shen_after_truth`,speaker:`沈夜尘`,text:`沈夜尘说完他的秘密后，沉默了很久。夕阳的余晖渐渐消散，废墟中只剩下命轮玉微弱的光芒。`,ai:{character:`沈夜尘`,context:`沈夜尘刚刚揭露了他是天道之毒守护者的身份，等了玩家一万年。他对玩家有复杂的感情。玩家现在知道了自己的使命。`,transitionHint:`沈夜尘表达他的矛盾心情，或者询问玩家对他的看法`,nextScene:`ch3_ai_gu_trial_end`}},{id:`ch3_shen_retreat`,speaker:`旁白`,text:`你下意识地后退了好几步，警惕地看着他。

沈夜尘的表情一僵。他的嘴唇动了动，像是想说什么，但最终什么都没说。他的眼中闪过一丝受伤的神色——但很快被那层水雾遮住了。

「师姐……」他的声音很轻，带着一丝颤抖，「你害怕我了。」

他没有追上来，只是站在原地，手中的黑色玉佩散发着阴冷的光。夕阳的余晖照在他的身上，他的影子被拉得很长很长。

「没关系。」他低下头，声音更轻了，「你有理由害怕我。毕竟……我骗了你。」

他将黑色玉佩收起来，后退了几步：「师姐，今天的试炼快要结束了。你先回去吧。有些事情……等你准备好了，我再告诉你。」

他转身走进了废墟深处。银白色的发丝在夕阳下渐渐远去，最后消失在了阴影中。你站在原地，握紧了手中的命轮玉，心中五味杂陈。`,effects:{"flag:沈夜尘的距离":!0},next:`ch3_ai_shen_after_retreat`},{id:`ch3_ai_shen_after_retreat`,speaker:`沈夜尘`,text:`沈夜尘转身走进了废墟深处。但他走了几步又停了下来，背对着你，声音很轻。`,ai:{character:`沈夜尘`,context:`玩家对沈夜尘产生了警惕，后退了几步。沈夜尘很受伤，但他理解玩家的反应。他准备离开，但似乎还有话想说。`,transitionHint:`沈夜尘解释他不想伤害玩家，或者表达他的歉意`,nextScene:`ch3_ai_gu_trial_end`}},{id:`ch3_ai_gu_trial_end`,speaker:`顾长渊`,text:`传送阵的光芒即将亮起。你站在安全区域等待时，顾长渊不知从哪里走了过来。他的青衫上沾着些许泥土，但笑容依旧温暖。`,ai:{character:`顾长渊`,context:`试炼第一阶段即将结束，玩家在秘境中经历了很多——获得了混元心法传承，知道了沈夜尘的秘密。顾长渊似乎也一直在秘境中。`,transitionHint:`顾长渊关心玩家在秘境中的经历，或者叮嘱她注意身体`,nextScene:`ch3_trial_end`}},{id:`ch3_trial_end`,speaker:`系统`,text:`万灵秘境试炼第一阶段结束。

试炼成绩：甲等
击杀妖兽：5只
发现秘境：1处
获得传承：混元心法（第一层）

灵根觉醒进度：70%

宗门传送阵将在一个时辰后将所有弟子送回。请在安全区域等待。

——第三章完——

「暗潮涌动」

下一章预告：「秘境历练」

试炼的第二阶段即将开始。而沈夜尘的秘密，才刚刚浮出水面……`,effects:{"flag:第三章完成":!0},nextChapter:4}]},sc={id:4,title:`第四章：秘境历练`,scenes:[{id:`chapter4_start`,speaker:`旁白`,text:`试炼第二阶段开始了。

白发老者宣布：第二阶段的目标是深入秘境核心，寻找传说中的「灵泉」。灵泉是万灵秘境中最珍贵的宝物，泉水能大幅提升修炼者的灵力和根骨。但灵泉位于秘境最深处，一路上有无数强大的妖兽守护。

传送阵再次启动，你被传送到了秘境的更深处。这里的树木更加高大，空气中弥漫着浓郁的灵气，让人呼吸都变得沉重。远处传来低沉的吼声，像是什么巨大的生物在沉睡。

你深吸一口气，开始向秘境核心进发。

走了约莫一个时辰，你遇到了顾长渊。他正站在一棵古树下，手里拿着一株发光的灵草，表情专注。听到你的脚步声，他抬起头，琥珀色的眸子里闪过一丝惊讶。

「你怎么也来了？这里很危险。」他将灵草收好，走近你，「不过……有我在，应该没问题。」`,next:`ch4_ai_gu_start`},{id:`ch4_ai_gu_start`,speaker:`顾长渊`,text:`顾长渊收好灵草，走到你身边。他的琥珀色眸子带着一丝担忧，但嘴角依旧挂着温暖的笑容。`,ai:{character:`顾长渊`,context:`试炼第二阶段开始，玩家在秘境深处遇到了顾长渊。他是以药堂客卿身份进入秘境的，实际上是为了保护玩家。`,transitionHint:`顾长渊解释他为什么在这里，或者叮嘱玩家秘境中的危险`,nextScene:`ch4_gu_companion`}},{id:`ch4_gu_companion`,speaker:`顾长渊`,text:`顾长渊告诉你，他是以药堂客卿的身份进入秘境的，名义上是来采集灵草，实际上是为了保护你。

「我不放心你一个人。」他的语气平淡，但你听出了其中的关切，「秘境深处有很多化神期的妖兽，你现在的能力还不够应付。」

他从药箱中取出一枚丹药递给你：「这是回灵丹，能在短时间内恢复灵力。你的灵力虽然纯净，但总量太少了，需要省着用。」

你接过丹药，感觉到掌心传来一阵温热。丹药散发着淡淡的药香，让人精神一振。

「走吧，我知道一条近路。」顾长渊转身走在前面，他的步伐稳健而从容，像是对这片秘境非常熟悉。你跟在他身后，注意到他的腰间别着一柄短剑——你从没见过他带武器。

「顾大夫，你会剑法？」你好奇地问。

他回头笑了笑，酒窝若隐若现：「以前学过一点。不过现在是大夫了，能不动手就不动手。」`,effects:{顾长渊好感:5,体质:10},next:`ch4_ai_linruowei_companion`},{id:`ch4_ai_linruowei_companion`,speaker:`林若薇`,text:`就在你们准备出发的时候，林若薇从一棵大树后面探出头来。她的圆脸上带着调皮的笑容。`,ai:{character:`林若薇`,context:`试炼第二阶段开始，玩家和顾长渊准备深入秘境核心寻找灵泉。林若薇也跟了过来，她不想和玩家分开。`,transitionHint:`林若薇说她也要一起去，或者分享她打听到的秘境情报`,nextScene:`ch4_battle`}},{id:`ch4_battle`,speaker:`旁白`,text:`你们走了约莫两个时辰，来到了一片开阔的山谷。山谷中央有一条溪流，溪水清澈见底，散发着淡淡的灵光。

「这是灵泉的支流。」顾长渊蹲下身，用手掬了一捧水，「沿着这条溪流走，就能找到灵泉。」

他话音刚落，一声震耳欲聋的吼声从山谷深处传来。地面开始震动，树木摇晃，无数鸟兽四散奔逃。

一只巨大的妖兽从山谷深处走了出来。那是一只通体金色的巨虎，体型比普通的老虎大了十倍，额头上的「王」字散发着耀眼的金光。它的每一步都让地面震颤，绿色的眼睛锁定了你和顾长渊。

「金睛虎王……化神期的妖兽。」顾长渊的表情变得严肃，他拔出腰间的短剑，将你护在身后，「你先走，我来对付它。」

你摇头：「我不走。」

他回头看你，琥珀色的眸子里映着你的身影。他沉默了一瞬，然后笑了：「好。那就一起。」`,next:`ch4_battle_choice`},{id:`ch4_battle_choice`,speaker:`旁白`,text:`金睛虎王扑了过来，速度快得像一道金色的闪电。顾长渊挥剑迎上，剑光如虹，在空中划出一道银色的弧线。剑气和虎爪碰撞，发出震耳欲聋的爆响。

你感觉到强大的灵力冲击波扑面而来，几乎站不稳脚跟。顾长渊的剑法凌厉而精准，每一剑都刺向虎王的要害。但虎王的皮毛坚硬如铁，剑气只能在上面留下浅浅的痕迹。

「它的弱点在腹部！」顾长渊喊道，「你吸引它的注意力，我找机会攻击！」

你深吸一口气，灵力灌注全身。你感觉到丹田中的灵力在翻涌，混元心法自动运转，五种属性的灵力在你体内交织融合。`,choices:[{text:`正面吸引虎王注意`,next:`ch4_frontal`,effects:{体质:5,修为:3}},{text:`绕到侧面偷袭`,next:`ch4_flank`,effects:{智慧:5,机缘:3}},{text:`用混元心法全力一击`,next:`ch4_full_power`,effects:{灵力:15,修为:5,"flag:混元心法初显":!0},condition:{type:`flag`,key:`获得混元心法`}}]},{id:`ch4_frontal`,speaker:`旁白`,text:`你冲向虎王，灵力灌注双拳，一拳打在它的鼻梁上。虎王吃痛，发出震耳欲聋的咆哮，转身向你扑来。

你侧身闪避，感觉到虎爪从你头顶掠过，带起一阵劲风。你趁机抓住虎王的前腿，灵力爆发，将它掀翻在地。

顾长渊抓住机会，短剑刺入虎王的腹部。金色的血液喷涌而出，虎王发出一声哀嚎，挣扎了几下，终于倒地不起。

你喘着粗气，浑身是汗。顾长渊走过来，检查你的伤势：「没受伤吧？」

你摇摇头。他笑了笑，从虎王的尸体中取出一颗拳头大小的金色内丹：「这是化神期妖兽的内丹，对你修炼混元心法很有帮助。」`,effects:{修为:5,"flag:获得虎王内丹":!0},next:`ch4_ai_gu_battle`},{id:`ch4_ai_gu_battle`,speaker:`顾长渊`,text:`战斗结束后，顾长渊走过来检查你的伤势。他的琥珀色眸子里带着一丝心疼。`,ai:{character:`顾长渊`,context:`玩家和顾长渊刚击败了金睛虎王（化神期妖兽），获得了虎王内丹。战斗很激烈，但两人配合默契。`,transitionHint:`顾长渊关心玩家的伤势，或者讨论接下来的路线`,nextScene:`ch4_ai_shen_battle`}},{id:`ch4_ai_shen_battle`,speaker:`沈夜尘`,text:`你刚收好虎王内丹，就感觉到一股熟悉的气息。沈夜尘不知从哪里走了出来，银白色的发丝在夕阳下泛着珠光。`,ai:{character:`沈夜尘`,context:`玩家和顾长渊刚击败了金睛虎王，获得了虎王内丹。沈夜尘出现在秘境中，他似乎一直在暗中关注玩家。`,transitionHint:`沈夜尘关心玩家的战斗情况，或者提到天道之毒的封印`,nextScene:`ch4_spirit_spring`}},{id:`ch4_flank`,speaker:`旁白`,text:`你悄悄绕到虎王的侧面，趁着顾长渊和它缠斗的间隙，从背后攻击。灵力灌注在拳头上，你一拳打在虎王的后腿关节上。

虎王的后腿一软，身体失去了平衡。顾长渊抓住机会，短剑刺入它的腹部。金色的血液喷涌而出，虎王发出一声哀嚎，挣扎了几下，终于倒地不起。

你喘着粗气，浑身是汗。顾长渊走过来，检查你的伤势：「没受伤吧？」

你摇摇头。他笑了笑，从虎王的尸体中取出一颗拳头大小的金色内丹：「这是化神期妖兽的内丹，对你修炼混元心法很有帮助。」`,effects:{修为:5,智慧:3,"flag:获得虎王内丹":!0},next:`ch4_ai_gu_battle`},{id:`ch4_full_power`,speaker:`旁白`,text:`你闭上眼睛，全力运转混元心法。五种属性的灵力在你体内交织融合，形成了一股前所未有的力量。你感觉到自己的灵力在疯狂增长，丹田中的灵力光球从拇指大小变成了拳头大小。

你睁开眼睛，双眼中闪烁着五彩的光芒。你冲向虎王，一拳打出——五种属性的灵力同时爆发，形成了一道五彩的光芒，直接贯穿了虎王的身体。

虎王发出一声悲鸣，庞大的身躯轰然倒地。金色的血液流淌了一地，空气中弥漫着浓郁的灵气。

顾长渊目瞪口呆地看着你：「这是……五行合一？你的混元心法已经修炼到这种程度了？」

你喘着粗气，感觉到浑身的灵力几乎耗尽。但你的心中充满了喜悦——你终于真正掌握了自己的力量。

顾长渊走过来，将虎王的内丹递给你：「你很厉害。但下次不要这么拼命了。」`,effects:{修为:10,灵力:20,"flag:五行合一":!0},next:`ch4_ai_gu_battle`},{id:`ch4_spirit_spring`,speaker:`旁白`,text:`你们沿着溪流继续前进，终于在黄昏时分找到了灵泉。

灵泉位于一个隐秘的山洞中。泉水清澈见底，散发着耀眼的灵光。空气中弥漫着浓郁的灵气，让人呼吸都变得舒畅。泉边长满了各种珍稀的灵草，每一株都价值连城。

顾长渊从药箱中取出一个瓷瓶，小心翼翼地装了一些泉水：「灵泉的泉水能大幅提升灵力和根骨。你在这里修炼一个时辰，效果抵得上外面一个月。」

你盘腿坐在灵泉边，闭上眼睛，全力运转混元心法。灵泉中的灵气像潮水一样涌入你的体内，被你的混元灵根疯狂吸收。你感觉到自己的灵力在飞速增长，丹田中的灵力光球越来越大，越来越亮。

灵根觉醒进度——80%。

当你睁开眼睛时，天已经完全黑了。顾长渊坐在你身边，手里拿着一盏药灯，琥珀色的眸子映着暖黄色的光。他看到你醒了，微微一笑：

「感觉怎么样？」`,effects:{灵力:30,修为:10,体质:15},next:`ch4_ai_shen_spring`},{id:`ch4_ai_shen_spring`,speaker:`沈夜尘`,text:`你刚从修炼中醒来，就感觉到一股熟悉的气息。沈夜尘不知何时出现在了灵泉洞穴的入口，银白色的发丝在灵光中泛着珠光。`,ai:{character:`沈夜尘`,context:`玩家在灵泉边修炼了一个时辰，灵根觉醒进度达到80%。沈夜尘出现在灵泉洞穴中，他的表情有些复杂。`,transitionHint:`沈夜尘关心玩家的修炼进展，或者提到天道之毒的事情`,nextScene:`ch4_ai_gu_spring`}},{id:`ch4_ai_gu_spring`,speaker:`顾长渊`,text:`灵泉边，顾长渊盘腿坐在你对面，琥珀色的眸子映着泉水的灵光。他的表情带着一丝欣慰。`,ai:{character:`顾长渊`,context:`玩家在灵泉边修炼，灵根觉醒进度大幅提升。顾长渊一直在旁边守护。他为玩家的进步感到高兴，但也有些担心。`,transitionHint:`顾长渊讨论玩家的修炼进展，或者提到混元心法的奥秘`,nextScene:`ch4_chu_appear`}},{id:`ch4_chu_appear`,speaker:`楚惊鸿`,text:`你还没来得及回答，一个嚣张的声音从洞口传来：

「哟，本少爷找了半天，原来你们躲在这儿。」

楚惊鸿大步走了进来，赤红色的长发在灵光中格外耀眼。他身后跟着两个随从，手里捧着一堆灵草和矿石。

「本少爷已经把秘境里的好东西都搜刮了一遍。」他得意地扬了扬下巴，「你们还在慢慢悠悠地修炼？」

他走到灵泉边，蹲下来看了看泉水：「不错嘛，这灵泉的品质比本少爷预想的还好。」

他从随从手里拿过一个精致的玉瓶，装了一些泉水，然后扔给你：「接着。本少爷赏你的。」

你接住玉瓶，感觉到里面蕴含着浓郁的灵力。楚惊鸿已经站起身，拍了拍身上的灰尘：「试炼快结束了，你们准备回去吧。」

他走到洞口，又停下来回头看了一眼。月光从洞口洒进来，照在他的侧脸上，他的表情不再是往日的嚣张，而是一种你从未见过的认真。

「喂，你变强了。」他的声音很轻，「下次……别让本少爷担心了。」

说完，他头也不回地走了。月光下，他的背影挺拔而孤独。`,effects:{楚惊鸿好感:10,灵力:10,"flag:楚惊鸿的关心":!0},next:`ch4_ai_chu_spring`},{id:`ch4_ai_chu_spring`,speaker:`楚惊鸿`,text:`楚惊鸿走到洞口又停了下来。月光从洞口洒进来，照在他的侧脸上。他的表情不再是往日的嚣张。`,ai:{character:`楚惊鸿`,context:`玩家在灵泉边修炼后，楚惊鸿出现了，给了玩家灵泉之水。他嘴硬说是赏的，但实际上很关心玩家。月光下，他的表情变得认真。`,transitionHint:`楚惊鸿别扭地表达对玩家的关心，或者提到他为什么一直在秘境中跟着玩家`,nextScene:`ch4_ai_chu_talk`}},{id:`ch4_ai_chu_talk`,speaker:`楚惊鸿`,text:`楚惊鸿没有立刻离开。他靠在洞壁上，双手抱胸，赤红色的长发在灵光中格外耀眼。他看着你，嘴角带着一丝玩味的笑。`,ai:{character:`楚惊鸿`,context:`楚惊鸿在灵泉洞穴中找到了玩家和顾长渊。他给了玩家灵泉之水，嘴硬说是赏的。现在他似乎还想说什么。`,transitionHint:`楚惊鸿提到他在秘境中的经历，或者别扭地表达对玩家的担心`,nextScene:`ch4_chapter_end`}},{id:`ch4_chapter_end`,speaker:`系统`,text:`万灵秘境试炼结束。

试炼总成绩：特等
灵根觉醒进度：80%
已掌握：混元心法第一层、五行合一
获得宝物：虎王内丹、灵泉之水

太虚宗外门试炼，你以杂役弟子的身份，取得了前所未有的成绩。

——第四章完——

「秘境历练」

下一章预告：「身世之谜」

回到宗门后，你发现……关于你身世的真相，远比想象的更加复杂。`,effects:{"flag:第四章完成":!0},next:`ch4_ai_linruowei_end`},{id:`ch4_ai_linruowei_end`,speaker:`林若薇`,text:`试炼结束的钟声响起。林若薇从远处跑来，一把抱住了你。她的眼眶红红的，但脸上挂着灿烂的笑容。`,ai:{character:`林若薇`,context:`试炼第二阶段结束，玩家取得了特等成绩。林若薇为玩家感到骄傲，但也有些担心玩家最近经历的事情太多了。`,transitionHint:`林若薇恭喜玩家，或者聊到回到宗门后的生活`,nextScene:`ch4_ai_gu_reflect`}},{id:`ch4_ai_gu_reflect`,speaker:`顾长渊`,text:`传送阵的光芒亮起前，顾长渊走到你身边。他的琥珀色眸子映着夕阳的余晖，嘴角带着温暖的笑容。`,ai:{character:`顾长渊`,context:`试炼结束，玩家和顾长渊一起经历了许多战斗。他为玩家的成长感到欣慰，但也隐约感觉到玩家身上的使命越来越重。`,transitionHint:`顾长渊聊到这次试炼的收获，或者叮嘱玩家回去后好好休息`,nextScene:`ch4_chapter_end_card`}},{id:`ch4_chapter_end_card`,speaker:`系统`,text:`——第四章完——

「秘境历练」

下一章预告：「身世之谜」

回到宗门后，你发现……关于你身世的真相，远比想象的更加复杂。`,nextChapter:5}]},cc={id:5,title:`第五章：身世之谜`,scenes:[{id:`chapter5_start`,speaker:`旁白`,text:`你从秘境归来，太虚宗上下对你刮目相看。一个杂役弟子，在外门试炼中取得特等成绩，这在太虚宗万年历史上还是第一次。

宗门长老亲自接见了你，宣布将你破格晋升为内门弟子。你搬进了内门弟子的居所——一间独立的小院，比杂役弟子的大通铺好了不知道多少倍。

但你心中始终有一个疑问挥之不去——沈夜尘的话。「天命一族」「天道之毒」「万年的等待」……这些词像是一团迷雾，笼罩在你的心头。

入夜，你独自坐在院中，手中握着命轮玉。月光洒在玉佩上，符文微微发光。你闭上眼睛，意识被拉入了一片虚空。`,next:`ch5_ai_shen_night`},{id:`ch5_ai_shen_night`,speaker:`沈夜尘`,text:`你刚闭上眼睛，就听到墙头传来轻微的响动。沈夜尘正坐在院墙上，银白色的发丝在月光下泛着珠光。他的表情平静而温柔。`,ai:{character:`沈夜尘`,context:`玩家刚成为内门弟子，独自在院中沉思。沈夜尘出现在墙头上，他似乎有话想对玩家说。两人之间有很多未解之谜。`,transitionHint:`沈夜尘聊到命轮玉的秘密，或者解释天命一族的历史`,nextScene:`ch5_vision`}},{id:`ch5_vision`,speaker:`旁白`,text:`你看到了万年前的九霄大陆。

那时候的九霄大陆，灵气充沛，万物繁茂。天命一族是大陆上最强大的守护者，他们拥有混元灵根，能同时修炼五行灵力，维护着天道的平衡。

但天道并非永恒不变。在天道的核心，有一种名为「天道之毒」的东西在悄然滋生。那是万年来无数修士的贪欲、仇恨、嫉妒汇聚而成的黑暗力量。它腐蚀着天道的根基，让天道逐渐崩塌。

天命一族的族长——一个和你面容相似的女子——发现了这个危机。她做出了一个决定：以全族之力，封印天道之毒。

封印的过程极其惨烈。天命一族的族人一个接一个地献出自己的灵力和生命，化作封印的一部分。最后，只剩下族长一人。

她将自己最后的力量封入一块玉佩，一分为二。一半封印混元灵根的传承，一半封印天道之毒。然后，她选择了一个守护者——一个愿意用永恒的生命来守护封印的人。

那个守护者的面容逐渐清晰——

是沈夜尘。`,effects:{神秘值:20,"flag:完整记忆":!0},next:`ch5_ai_gu_vision`},{id:`ch5_ai_gu_vision`,speaker:`顾长渊`,text:`你从幻境中醒来，发现顾长渊正坐在你身边。他的琥珀色眸子映着月光，表情带着一丝担忧。`,ai:{character:`顾长渊`,context:`玩家刚经历了一个关于天命一族的万年记忆幻境。顾长渊不知何时来到了她的院子，似乎一直在守护她。`,transitionHint:`顾长渊关心玩家看到了什么，或者提到他对天命一族的了解`,nextScene:`ch5_ai_linruowei_vision`}},{id:`ch5_ai_linruowei_vision`,speaker:`林若薇`,text:`你从幻境中醒来，发现林若薇不知何时来到了你的小院。她看到你泪流满面，吓了一跳。`,ai:{character:`林若薇`,context:`玩家刚经历了一个关于天命一族的万年记忆幻境，看到了沈夜尘的真实身份。林若薇来找玩家，发现她在哭。`,transitionHint:`林若薇关心玩家发生了什么，或者分享她对沈夜尘的观察`,nextScene:`ch5_truth`}},{id:`ch5_truth`,speaker:`旁白`,text:`你从幻境中醒来，发现自己已经泪流满面。

命轮玉的光芒比以往任何时候都要明亮。你感觉到丹田中的灵力在疯狂涌动，混元心法自动运转，灵根觉醒进度从80%飙升到了90%。

「你都想起来了？」

一个声音从院墙外传来。你抬头，看到沈夜尘正坐在墙头上，银白色的发丝在月光下泛着珠光。他的表情平静而悲伤。

「万年前，族长将命轮玉一分为二时，也将自己的记忆封入了其中。」他跳下墙头，走到你面前，「你看到的……就是族长的记忆。」

他蹲下身，和你平视：「师姐，你就是天命一族最后的传人。你的混元灵根，是万年前族长封印的传承。而我……就是那个守护者。我在这片大陆上等了一万年，等待你觉醒。」

他的眼中闪过一丝痛苦：「但我没想到……我会对你动心。这不在我的计划之内。」`,choices:[{text:`握住他的手：谢谢你等了这么久`,next:`ch5_accept`,effects:{沈夜尘好感:20,"flag:接受命运":!0}},{text:`后退：你需要时间消化这一切`,next:`ch5_space`,effects:{心性:10,"flag:需要时间":!0}}]},{id:`ch5_accept`,speaker:`沈夜尘`,text:`你伸出手，握住了他的手。他的手冰凉而颤抖。

「谢谢你等了这么久。」你轻声说。

沈夜尘的眼眶瞬间红了。他的嘴唇颤抖着，好半天才说出一句话：「师姐……你不恨我吗？我骗了你这么久。」

你摇摇头：「你没有骗我。你只是……没有告诉我全部的真相。」

他低下头，银白色的发丝垂落在脸侧。你感觉到他的手在微微用力，像是害怕你会松开。

「师姐，我有一个请求。」他的声音很轻，「天道之毒的封印正在减弱。如果不在三年内重新封印……整个九霄大陆都会被毁灭。」

他抬起头，浅灰色的眸子认真地看着你：「你是唯一能封印天道之毒的人。但这个过程……可能会要了你的命。」

他紧紧握着你的手：「我会保护你。无论付出什么代价。」`,effects:{"flag:沈夜尘的誓言":!0},next:`ch5_ai_shen_accept`},{id:`ch5_ai_shen_accept`,speaker:`沈夜尘`,text:`沈夜尘握着你的手，久久没有松开。月光洒在两人身上，他的银色眸子里映着你的身影。`,ai:{character:`沈夜尘`,context:`玩家接受了沈夜尘的真相和他等了一万年的事实。沈夜尘很感动，两人之间的关系更近了一步。但天道之毒的威胁依然存在。`,transitionHint:`沈夜尘聊到未来的计划，或者表达他对玩家的感情`,nextScene:`ch5_ai_gu_accept`}},{id:`ch5_ai_gu_accept`,speaker:`顾长渊`,text:`你正和沈夜尘说话，院门外传来了轻轻的敲门声。顾长渊站在门外，手里提着一盏药灯，琥珀色的眸子带着一丝担忧。`,ai:{character:`顾长渊`,context:`玩家刚刚得知了自己的身世真相（天命一族传人）。顾长渊似乎也知道了什么，深夜来找玩家。`,transitionHint:`顾长渊关心玩家的状态，或者提到他对天命一族的了解`,nextScene:`ch5_ai_chu_accept`}},{id:`ch5_ai_chu_accept`,speaker:`楚惊鸿`,text:`顾长渊刚走，你又听到墙头传来一阵骚动。楚惊鸿翻墙而入，赤红色的长发在月光下格外张扬。`,ai:{character:`楚惊鸿`,context:`玩家刚得知自己是天命一族传人的身世。楚惊鸿深夜翻墙来找玩家，嘴硬说是路过。`,transitionHint:`楚惊鸿别扭地表示他听说了什么，或者用他自己的方式表达关心`,nextScene:`ch5_end`}},{id:`ch5_space`,speaker:`旁白`,text:`你后退了一步，和他保持距离。

「我需要时间。」你说，「这一切……太突然了。」

沈夜尘的表情一僵，但很快恢复了平静。他点了点头：「我理解。」

他后退了几步，给你留出空间：「师姐，无论你做什么决定，我都会支持你。但有一件事你必须知道——天道之毒的封印正在减弱，三年内必须重新封印。否则……」

他没有说完，但你明白他的意思。

「我会等你。」他转身走向院墙，「就像我等了一万年那样。」

他跳上墙头，回头看了你一眼。月光下，他的表情平静而温柔，但你看到了他眼中的泪光。

「晚安，师姐。」

他的身影消失在夜色中。你独自坐在院中，握着命轮玉，望着天上的月亮。天命一族、天道之毒、万年的等待……这一切，都需要你去面对。

但不是现在。现在，你需要先变强。`,effects:{"flag:独自面对":!0},next:`ch5_ai_shen_space`},{id:`ch5_ai_shen_space`,speaker:`沈夜尘`,text:`沈夜尘离开后不久，你听到墙头又传来轻微的响动。他似乎又回来了，但只是站在墙头上，远远地看着你。`,ai:{character:`沈夜尘`,context:`玩家说需要时间消化身世真相，沈夜尘给了她空间。但他不放心，又回来了，只是远远地看着。`,transitionHint:`沈夜尘解释他为什么又回来了，或者默默地陪伴玩家`,nextScene:`ch5_ai_gu_space`}},{id:`ch5_ai_gu_space`,speaker:`顾长渊`,text:`夜深了，你正准备回屋休息，院门外传来了轻轻的敲门声。顾长渊站在门外，手里提着一盏药灯。`,ai:{character:`顾长渊`,context:`玩家需要时间消化身世真相。顾长渊深夜来访，似乎知道发生了什么。`,transitionHint:`顾长渊带来了一些安神的药汤，或者聊到他能为玩家做什么`,nextScene:`ch5_ai_chu_space`}},{id:`ch5_ai_chu_space`,speaker:`楚惊鸿`,text:`顾长渊离开后，你刚关上门，就听到屋顶传来一声轻响。楚惊鸿坐在屋顶上，双腿晃荡着，月光映在他的琥珀金色瞳孔里。`,ai:{character:`楚惊鸿`,context:`玩家需要独处，但楚惊鸿不请自来。他坐在屋顶上，嘴硬说是来看星星的。`,transitionHint:`楚惊鸿用他自己的方式安慰玩家，或者提到他听说的事情`,nextScene:`ch5_ai_linruowei_end`}},{id:`ch5_ai_linruowei_end`,speaker:`林若薇`,text:`你正准备休息，院门被轻轻推开了。林若薇探进头来，圆脸上带着担忧的神色，手里还端着一碗热腾腾的汤。`,ai:{character:`林若薇`,context:`玩家刚得知了自己的身世真相——天命一族传人。林若薇深夜来看她，给她带了一碗安神汤。`,transitionHint:`林若薇表达她对玩家的担心，或者聊到她对沈夜尘的看法`,nextScene:`ch5_end`}},{id:`ch5_end`,speaker:`系统`,text:`灵根觉醒进度：90%

天命一族的真相已经揭开。你是万年前天命一族最后的传人，拥有混元灵根的觉醒者。

天道之毒的封印正在减弱，三年内必须重新封印。而这个任务……只有你能完成。

——第五章完——

「身世之谜」

下一章预告：「道心破碎」

太虚宗内部的暗流终于浮出水面。一场针对你的阴谋，正在悄然展开……`,effects:{"flag:第五章完成":!0},nextChapter:6}]},lc={id:6,title:`第六章：道心破碎`,scenes:[{id:`chapter6_start`,speaker:`旁白`,text:`你成为内门弟子后，修炼进展神速。混元心法第二层已经入门，灵力比以前强大了数倍。灵根觉醒进度稳定在90%，只差最后一步就能完全觉醒。

但平静的日子没有持续太久。

这天清晨，你被一阵急促的钟声惊醒。钟声响了十二下——这是太虚宗最高级别的警报。你匆匆赶到宗门大殿，发现所有长老和内门弟子都已经聚集在此。

太虚宗掌门——一个白发苍苍的老者——站在高台上，面色凝重：

「诸位弟子，昨夜宗门禁地的封印被人破坏。封印中的上古魔物……已经逃出。」

人群一阵骚动。你听到身边的弟子们议论纷纷：「上古魔物？那不是万年前被封印的东西吗？」「据说那魔物有渡劫期的修为，我们根本不是对手！」

掌门继续说道：「更糟糕的是……破坏封印的人，是我们宗门内部的人。」

全场哗然。

你的目光不由自主地看向了沈夜尘。他站在人群的边缘，表情平静得可怕。`,next:`ch6_ai_shen_start`},{id:`ch6_ai_shen_start`,speaker:`沈夜尘`,text:`你快步走向沈夜尘，想问他发生了什么。他看到你走近，眼中闪过一丝复杂的神色。`,ai:{character:`沈夜尘`,context:`太虚宗禁地封印被破坏，上古魔物逃出。所有证据指向沈夜尘。玩家想问他发生了什么。`,transitionHint:`沈夜尘暗示他做这件事有原因，或者叮嘱玩家不要卷入`,nextScene:`ch6_accusation`}},{id:`ch6_accusation`,speaker:`旁白`,text:`掌门的目光扫过全场，最后停在了沈夜尘身上。

「沈夜尘，你有什么要说的吗？」

所有人的目光都聚焦在了沈夜尘身上。他缓缓走出人群，银白色的发丝在晨光中泛着珠光。他的表情依旧平静，但你注意到他的手指在微微颤抖。

「掌门，」他的声音很轻，「封印确实是我破坏的。」

全场再次哗然。你不敢相信自己的耳朵。

「为什么？」掌门的声音带着一丝痛心。

沈夜尘沉默了很久。然后他抬起头，浅灰色的眸子扫过全场，最后停在了你身上。

「因为……天道之毒需要一个新的封印。而那个封印……需要上古魔物的力量。」

他的目光在你身上停留了一瞬，然后移开：「我等了一万年，不能再等了。」

掌门的脸色变得铁青：「你知道你在说什么吗？释放上古魔物，整个太虚宗都会陷入危险！」

沈夜尘低下头：「我知道。但这是唯一的办法。」`,choices:[{text:`站出来为沈夜尘辩护`,next:`ch6_defend`,effects:{沈夜尘好感:15,"flag:为沈夜尘辩护":!0}},{text:`沉默，观察局势`,next:`ch6_observe`,effects:{智慧:5}}]},{id:`ch6_defend`,speaker:`旁白`,text:`你站了出来，挡在沈夜尘面前。

「等一下！」你的声音在大殿中回荡，「你们还没有听完他的解释，就要定他的罪吗？」

掌门的目光落在你身上，带着一丝不悦：「你是谁？」

「我是内门弟子沈熏。」你挺直腰板，「沈夜尘是我的师弟。我相信他做这件事一定有他的理由。」

你转向沈夜尘：「你说天道之毒需要上古魔物的力量来封印。为什么？」

沈夜尘看着你，眼中闪过一丝复杂的情绪。他沉默了一会儿，然后开口：

「万年前，天命一族封印天道之毒时，用的是五行合一的力量。但那种力量已经不够了——天道之毒在这万年里不断壮大，现在只有上古魔物的混沌之力，才能重新封印它。」

他低下头：「我知道这样做很危险。但如果不这样做……三年后，天道之毒就会彻底爆发，整个九霄大陆都会毁灭。」

全场沉默了。掌门的脸色变幻不定，最终长长地叹了口气。

「沈夜尘，你说的是真的吗？」

沈夜尘点头：「我可以用我的生命起誓。」`,effects:{"flag:沈夜尘被理解":!0},next:`ch6_ai_gu_defend`},{id:`ch6_ai_gu_defend`,speaker:`顾长渊`,text:`散会后，顾长渊找到你。他的表情严肃，琥珀色的眸子里带着一丝担忧。`,ai:{character:`顾长渊`,context:`玩家在大殿上为沈夜尘辩护，揭露了天道之毒的事情。顾长渊很担心玩家的安全。`,transitionHint:`顾长渊讨论沈夜尘的做法是否正确，或者表达他对玩家的担心`,nextScene:`ch6_ai_chu_defend`}},{id:`ch6_ai_chu_defend`,speaker:`楚惊鸿`,text:`顾长渊离开后，楚惊鸿从暗处走了出来。他的表情比平时严肃了许多，赤红色的长发在晨光中格外耀眼。`,ai:{character:`楚惊鸿`,context:`沈夜尘破坏封印的事情传遍了宗门。楚惊鸿来找玩家，他虽然嘴上不说，但很担心玩家的安危。`,transitionHint:`楚惊鸿表达他对沈夜尘行为的不满，或者用别扭的方式表示支持玩家`,nextScene:`ch6_crisis`}},{id:`ch6_observe`,speaker:`旁白`,text:`你没有说话，只是静静地看着局势发展。

掌门下令将沈夜尘关押起来，等待进一步审问。两个长老上前，用灵力锁链将沈夜尘束缚。他没有反抗，只是在被带走的瞬间，回头看了你一眼。

那眼神中包含了太多东西——悲伤、决绝、歉意，还有……一丝温柔。

你握紧了拳头，指甲深深嵌入掌心。你知道沈夜尘不会无缘无故做这种事。但你也不确定……他到底在计划什么。

当天夜里，你偷偷来到关押沈夜尘的地方。那是一座位于宗门后山的石牢，由两个长老看守。你躲在暗处，等待机会。

子时过后，看守的长老打起了瞌睡。你趁机溜进了石牢。

沈夜尘坐在石牢的角落，银白色的发丝凌乱地垂落。他看到你，微微一愣，然后露出了一个苦涩的笑容。

「师姐……你不应该来的。」`,effects:{"flag:独自调查":!0},next:`ch6_ai_shen_observe`},{id:`ch6_ai_shen_observe`,speaker:`沈夜尘`,text:`石牢中，沈夜尘靠着墙壁坐着。他的银白色发丝沾了些灰尘，但他的眼神依旧清澈。他看着你，嘴角带着一丝苦涩的笑。`,ai:{character:`沈夜尘`,context:`沈夜尘被关在石牢中。玩家偷偷来看他。他破坏了封印，但似乎有不得已的理由。`,transitionHint:`沈夜尘解释他破坏封印的真正原因，或者表达他对玩家的歉意`,nextScene:`ch6_ai_linruowei_observe`}},{id:`ch6_ai_linruowei_observe`,speaker:`林若薇`,text:`你从石牢出来时，发现林若薇正躲在暗处等你。她的圆脸上带着担忧的神色。`,ai:{character:`林若薇`,context:`玩家偷偷去看被关押的沈夜尘。林若薇跟踪了玩家，她很担心玩家的安危。`,transitionHint:`林若薇表达她对沈夜尘事件的看法，或者劝玩家小心`,nextScene:`ch6_crisis`}},{id:`ch6_crisis`,speaker:`沈夜尘`,text:`沈夜尘告诉你，上古魔物已经被释放，正在向太虚宗逼近。他破坏封印的目的，是为了获取魔物的混沌之力，用来重新封印天道之毒。

「但这个过程很危险。」他的声音很轻，「混沌之力和混元灵力是两种完全相反的力量。如果融合失败……我会被混沌之力吞噬，变成一个新的魔物。」

他抬起头，浅灰色的眸子认真地看着你：「师姐，我需要你的帮助。你是混元灵根的觉醒者，只有你的灵力能帮我中和混沌之力。」

他伸出手，掌心向上。你看到他的手掌上有一道漆黑的裂纹，像是被什么东西侵蚀过。

「混沌之力已经开始侵蚀我的身体。」他的声音平静，但你听出了其中的痛苦，「我最多还能撑三天。」

他看着你，眼中带着一丝祈求：「师姐……你愿意帮我吗？」`,choices:[{text:`毫不犹豫：我帮你`,next:`ch6_help`,effects:{沈夜尘好感:20,"flag:决定帮助沈夜尘":!0}},{text:`问他：代价是什么？`,next:`ch6_cost`,effects:{智慧:5}}]},{id:`ch6_help`,speaker:`旁白`,text:`你毫不犹豫地点了头：「我帮你。」

沈夜尘的眼眶瞬间红了。他的嘴唇颤抖着，好半天才说出一句话：「谢谢你……师姐。」

他告诉你，融合混沌之力需要在一个特殊的地方进行——万灵秘境深处的天命祭坛。那是万年前天命一族封印天道之毒的地方，也是唯一能承受两种力量碰撞的地方。

「但去那里需要穿过秘境的核心区域，那里有无数强大的妖兽。」他的表情变得严肃，「而且……上古魔物也在那里。它在等待我们。」

你握紧了拳头：「我不怕。」

他看着你，眼中闪过一丝温柔：「我知道。」

他从怀中取出一块漆黑的玉佩——命轮玉的另一半。

「这是封印天道之毒的钥匙。」他将玉佩递给你，「融合混沌之力时，需要将两块玉佩合二为一。你拿着它。」

你接过黑色玉佩，感觉到一股阴冷的气息扑面而来。但你的混元灵力自动运转，将那股阴冷的气息中和了。

「明天夜里，我们出发。」沈夜尘的声音很轻，「这是我们最后的机会。」`,effects:{"flag:获得黑玉佩":!0},next:`ch6_ai_shen_plan`},{id:`ch6_ai_shen_plan`,speaker:`沈夜尘`,text:`沈夜尘将计划的细节一一告诉你。他的银色眸子在月光下格外明亮，表情认真而专注。`,ai:{character:`沈夜尘`,context:`玩家决定帮助沈夜尘融合混沌之力。两人正在讨论明天的行动计划。气氛紧张但温暖。`,transitionHint:`沈夜尘叮嘱玩家注意事项，或者表达他对这次行动的担忧`,nextScene:`ch6_ai_gu_prepare`}},{id:`ch6_ai_gu_prepare`,speaker:`顾长渊`,text:`你回到住处，发现顾长渊正等在院门口。他的手里提着一个药箱，琥珀色的眸子带着一丝担忧。`,ai:{character:`顾长渊`,context:`玩家决定明天和沈夜尘一起去融合混沌之力。顾长渊来给玩家准备丹药和物资。`,transitionHint:`顾长渊给玩家准备路上用的丹药，或者表达他对玩家安全的担心`,nextScene:`ch6_ai_chu_prepare`}},{id:`ch6_ai_chu_prepare`,speaker:`楚惊鸿`,text:`顾长渊离开后，楚惊鸿从暗处走了出来。他的表情比平时严肃，赤红色的长发在月光下格外张扬。`,ai:{character:`楚惊鸿`,context:`玩家明天就要去融合混沌之力，这可能是有去无回的旅程。楚惊鸿深夜来找玩家。`,transitionHint:`楚惊鸿用他自己的方式表达对玩家的担心，或者提出要一起去`,nextScene:`ch6_ai_linruowei_prepare`}},{id:`ch6_ai_linruowei_prepare`,speaker:`林若薇`,text:`楚惊鸿离开后，你正准备休息，院门被轻轻推开了。林若薇探进头来，圆脸上带着担忧的神色。`,ai:{character:`林若薇`,context:`玩家明天就要去融合混沌之力。林若薇深夜来找玩家，她虽然不知道全部细节，但能感觉到事情的严重性。`,transitionHint:`林若薇表达她的担心，或者给玩家带来什么护身符`,nextScene:`ch6_chapter_end`}},{id:`ch6_cost`,speaker:`沈夜尘`,text:`你冷静地问：「代价是什么？」

沈夜尘沉默了很久。他的目光落在自己手掌上的黑色裂纹上，声音很轻：

「如果融合成功，我会失去所有的修为，变成一个普通人。我的万年寿命也会终结，最多……还能活十年。」

他的语气平淡，像是在说一件很寻常的事情：「如果融合失败，我会被混沌之力吞噬，变成一个新的魔物。到时候……你必须杀了我。」

他抬起头，浅灰色的眸子认真地看着你：「这就是代价。师姐，你还愿意帮我吗？」

你沉默了很久。然后你伸出手，握住了他的手。

「我帮你。」你说，「无论代价是什么。」

他的手在你掌心中颤抖。他的眼眶红了，但没有流泪。

「谢谢你……师姐。」他的声音很轻，轻到像是在自言自语，「这是我万年来……听到的最温暖的话。」`,effects:{"flag:知道代价":!0},next:`ch6_ai_shen_cost`},{id:`ch6_ai_shen_cost`,speaker:`沈夜尘`,text:`沈夜尘说完代价后，沉默了很久。月光从石牢的窗缝中洒进来，照在他的银白色发丝上。`,ai:{character:`沈夜尘`,context:`玩家知道了融合混沌之力的代价——沈夜尘会失去修为和大部分寿命。但玩家还是决定帮他。沈夜尘很感动。`,transitionHint:`沈夜尘表达他的感激，或者聊到他万年来的孤独`,nextScene:`ch6_ai_gu_prepare`}},{id:`ch6_chapter_end`,speaker:`系统`,text:`道心未碎，意志更坚。

你做出了选择——帮助沈夜尘融合混沌之力，重新封印天道之毒。

这条路充满了危险，但你不会退缩。因为你是天命一族最后的传人，是混元灵根的觉醒者。

你的命运，由你自己书写。

——第六章完——

「道心破碎」

下一章预告：「万魔殿」

你和沈夜尘踏上了前往万灵秘境的旅途。而在那里等待你们的，是上古魔物……和最终的决战。`,effects:{"flag:第六章完成":!0},nextChapter:7}]},uc={id:7,title:`第七章：万魔殿`,scenes:[{id:`chapter7_start`,speaker:`旁白`,text:`深夜，你和沈夜尘悄悄离开了太虚宗。

月光如水，洒在山道上。你回头望了一眼太虚宗的灯火，心中五味杂陈。这一次离开，可能再也回不来了。

「师姐，走吧。」沈夜尘的声音很轻，他的银白色发丝在月光下泛着珠光，苍白的面容上带着一丝疲惫。混沌之力的侵蚀越来越严重了，他的左手已经完全变成了漆黑色。

你们沿着山道一路向南，向着万灵秘境的方向前进。走了约莫两个时辰，身后传来了急促的脚步声。

你猛然转身——

是顾长渊和楚惊鸿。

顾长渊背着药箱，表情严肃：「你以为你能瞒过我？我一直在关注你的身体状况。混沌之力的侵蚀……我早就发现了。」

楚惊鸿双手抱胸，赤红色的长发在夜风中飘扬：「哼，本少爷可不想欠人情。你帮过本少爷，本少爷自然也要帮你。」

他们两个互相对视了一眼，然后同时看向你。

「我们和你一起去。」`,next:`ch7_ai_gu_join`},{id:`ch7_ai_gu_join`,speaker:`顾长渊`,text:`顾长渊走到你身边，琥珀色的眸子认真地看着你。他的药箱里装满了各种丹药和药材。`,ai:{character:`顾长渊`,context:`玩家和沈夜尘准备去万灵秘境融合混沌之力。顾长渊和楚惊鸿追了上来，要一起去。顾长渊很担心路上的安全。`,transitionHint:`顾长渊解释他为什么跟来，或者讨论路上的危险`,nextScene:`ch7_ai_chu_join`}},{id:`ch7_ai_chu_join`,speaker:`楚惊鸿`,text:`楚惊鸿走到你另一边，双手抱胸，赤红色的长发在夜风中飘扬。他的表情嚣张，但眼神认真。`,ai:{character:`楚惊鸿`,context:`楚惊鸿追上了玩家和沈夜尘，说要一起去。他嘴硬说是不想欠人情，但实际上很担心玩家。`,transitionHint:`楚惊鸿用他自己的方式表达对玩家的支持，或者提到他准备的灵器`,nextScene:`ch7_journey`}},{id:`ch7_journey`,speaker:`旁白`,text:`四人一路前行，穿过重重山峦，终于在第二天黄昏时分到达了万灵秘境的入口。

秘境的入口处弥漫着浓郁的黑雾，空气中弥漫着一种令人窒息的压迫感。沈夜尘的表情变得凝重：「上古魔物的气息……它已经在秘境深处苏醒了。」

你们走进秘境。一路上，到处是被破坏的痕迹——树木被连根拔起，地面裂开了深深的沟壑，空气中弥漫着焦灼的气味。原本生机勃勃的秘境，现在像是一片死地。

走了约莫一个时辰，你们来到了秘境的核心区域。眼前出现了一座巨大的黑色宫殿，宫殿的墙壁上刻满了诡异的符文，散发着阴冷的光芒。

「万魔殿。」沈夜尘的声音很轻，「上古魔物的巢穴。」

宫殿的大门敞开着，里面漆黑一片，像是一个巨大的黑洞，吞噬着所有的光线。

沈夜尘深吸一口气：「走吧。天命祭坛就在万魔殿的最深处。」`,next:`ch7_ai_shen_gate`},{id:`ch7_ai_shen_gate`,speaker:`沈夜尘`,text:`万魔殿的大门前，沈夜尘停下了脚步。他转过身，银色的眸子扫过你们每一个人。`,ai:{character:`沈夜尘`,context:`四人到达了万魔殿的大门前。沈夜尘停下脚步，似乎有话想对大家说。气氛紧张而凝重。`,transitionHint:`沈夜尘叮嘱大家注意事项，或者表达他对这次行动的决心`,nextScene:`ch7_ai_linruowei_gate`}},{id:`ch7_ai_linruowei_gate`,speaker:`林若薇`,text:`就在你们准备进入万魔殿的时候，一个熟悉的声音从身后传来。林若薇气喘吁吁地跑了过来，圆脸上满是汗水。`,ai:{character:`林若薇`,context:`玩家一行人准备进入万魔殿。林若薇也追了过来，她不想让玩家一个人去冒险。`,transitionHint:`林若薇说她也要一起去，或者给玩家带来什么有用的东西`,nextScene:`ch7_ambush`}},{id:`ch7_ambush`,speaker:`旁白`,text:`你们走进万魔殿。殿内阴暗潮湿，空气中弥漫着腐朽的气息。走廊两侧的墙壁上，镶嵌着无数发光的红色矿石，像是无数双眼睛在注视着你们。

走了约莫百步，前方突然传来一阵嘶哑的笑声。

「嘿嘿嘿……你们终于来了。」

一个黑影从暗处走出。那是一个人形的生物，但浑身被漆黑的雾气笼罩，看不清面容。它的声音像是金属摩擦，刺耳而恐怖。

「天命一族的传人……我等了你很久了。」它的目光落在你身上，「万年前，你的祖先封印了我。万年后……我要用你的血来洗刷我的仇恨。」

沈夜尘挡在你面前，他的左手已经完全变成了漆黑色，但他的眼神依旧坚定：「你不会得逞的。」

上古魔物发出一声怒吼，黑雾化作无数利刃，向你们袭来。

战斗开始了。`,next:`ch7_ai_gu_battle`},{id:`ch7_ai_gu_battle`,speaker:`顾长渊`,text:`战斗间隙，顾长渊冲到你身边，快速检查你的伤势。他的琥珀色眸子里满是担忧。`,ai:{character:`顾长渊`,context:`玩家一行人在万魔殿中与上古魔物战斗。战斗很激烈，有人受了伤。顾长渊作为大夫在照顾伤员。`,transitionHint:`顾长渊给玩家治疗伤势，或者讨论对付魔物的策略`,nextScene:`ch7_battle`}},{id:`ch7_battle`,speaker:`旁白`,text:`上古魔物的力量远超你的想象。它的每一次攻击都带着毁天灭地的气势，黑雾所过之处，地面龟裂，空气扭曲。

沈夜尘冲在最前面，他的右手凝聚着银白色的灵力，左手却散发着漆黑的混沌之力。两种力量在他体内碰撞，让他痛苦不堪，但他咬牙坚持。

顾长渊在后方支援，他的剑法凌厉而精准，每一剑都刺向魔物的要害。但魔物的黑雾像是有生命一样，不断修复着它的伤口。

楚惊鸿则从侧面包抄，他的灵器——一柄赤红色的长枪——在空中划出一道道火红的弧线。他的攻击虽然不能伤到魔物，但成功地吸引了它的注意力。

你站在中央，全力运转混元心法。五种属性的灵力在你体内交织融合，形成了一道五彩的光芒。你将灵力凝聚在双拳上，冲向了魔物。

你的拳头击中了魔物的身体。五彩的光芒和漆黑的雾气碰撞，发出震耳欲聋的爆响。魔物发出一声惨叫，后退了好几步。

但它的反击也来了——一道漆黑的光柱向你袭来。`,choices:[{text:`用混元灵力硬抗`,next:`ch7_tank`,effects:{体质:-10,修为:5}},{text:`闪避并反击`,next:`ch7_dodge`,effects:{智慧:5,机缘:3}},{text:`命轮玉护体`,next:`ch7_jade`,effects:{灵力:10,"flag:命轮玉觉醒":!0},condition:{type:`flag`,key:`获得黑玉佩`}}]},{id:`ch7_tank`,speaker:`旁白`,text:`你咬紧牙关，将混元灵力凝聚在身前，形成了一道五彩的护盾。漆黑的光柱撞上护盾，发出震耳欲聋的爆响。你感觉到巨大的冲击力传来，身体不由自主地后退了好几步。

护盾碎裂了，但你也成功挡住了这一击。你的手臂发麻，嘴角溢出一丝鲜血。

「师姐！」沈夜尘冲了过来，挡在你面前。他的左手上的混沌之力突然爆发，形成了一道漆黑的屏障，将魔物的攻击挡住了。

但他的脸上露出了痛苦的表情——混沌之力的侵蚀在加速。

你擦了擦嘴角的血，重新站稳。你不能倒下。你是天命一族的传人，是唯一能封印天道之毒的人。

你再次冲向了魔物。`,effects:{"flag:硬抗魔物":!0},next:`ch7_ai_shen_tank`},{id:`ch7_ai_shen_tank`,speaker:`沈夜尘`,text:`战斗暂停的间隙，沈夜尘走到你身边。他的脸色苍白，但眼神坚定。`,ai:{character:`沈夜尘`,context:`玩家硬抗了魔物的一击，受了些伤。沈夜尘用混沌之力帮她挡住了后续攻击，但他自己的侵蚀也在加速。`,transitionHint:`沈夜尘叮嘱玩家不要逞强，或者讨论下一步的策略`,nextScene:`ch7_sacrifice`}},{id:`ch7_dodge`,speaker:`旁白`,text:`你侧身闪避，漆黑的光柱从你耳边掠过，带起一阵劲风。你趁机绕到魔物的侧面，灵力灌注双拳，一拳打在它的腹部。

魔物发出一声怒吼，转身向你扑来。但楚惊鸿已经从另一侧发动了攻击，赤红色的长枪刺入了魔物的肩膀。

「本少爷可不会让你一个人出风头！」楚惊鸿喊道。

你和楚惊鸿配合默契，不断从两侧夹击魔物。顾长渊在后方用剑气封锁魔物的退路，沈夜尘则用混沌之力压制它的力量。

但魔物的力量太强了。它的黑雾越来越浓，逐渐将你们包围。你感觉到呼吸变得困难，灵力也在快速消耗。

「必须尽快结束战斗！」顾长渊喊道，「它的力量在不断增长！」

你深吸一口气，准备发动最后的攻击。`,effects:{"flag:配合攻击":!0},next:`ch7_ai_chu_dodge`},{id:`ch7_ai_chu_dodge`,speaker:`楚惊鸿`,text:`战斗间隙，楚惊鸿走到你身边。他的赤红色长发有些凌乱，但眼神依旧锐利。`,ai:{character:`楚惊鸿`,context:`玩家和楚惊鸿配合攻击魔物，效果不错。但魔物的力量太强，战斗还在继续。`,transitionHint:`楚惊鸿讨论接下来的战术，或者表达他对战斗的看法`,nextScene:`ch7_sacrifice`}},{id:`ch7_jade`,speaker:`旁白`,text:`你下意识地握住了怀中的命轮玉。玉佩在你掌心发烫，一股强大的力量从其中涌出。

白色的光芒从你身上爆发，形成了一道耀眼的光幕。漆黑的光柱撞上光幕，发出刺耳的嘶鸣声，然后被光幕吞噬了。

上古魔物发出一声惊恐的尖叫：「这是……天命一族的力量？！」

你感觉到命轮玉中的力量在不断涌入你的体内。你的灵力在飞速增长，混元心法自动运转到了极致。五种属性的灵力在你体内完美融合，形成了一种你从未体验过的力量。

灵根觉醒进度——100%。

你完全觉醒了。

你睁开眼睛，双眼中闪烁着五彩的光芒。你冲向魔物，一拳打出——五彩的光芒化作一条巨龙，直接贯穿了魔物的身体。

魔物发出一声悲鸣，身体开始崩解。但在它消失的瞬间，它发出了一声狂笑：

「你以为你赢了？天道之毒……已经渗入了这片大陆的每一个角落……你封印了我……也封印不了它……」`,effects:{灵力:50,修为:20,"flag:完全觉醒":!0},next:`ch7_ai_shen_jade`},{id:`ch7_ai_shen_jade`,speaker:`沈夜尘`,text:`魔物被击败后，沈夜尘走到你身边。他的银色眸子映着命轮玉的光芒，表情复杂而欣慰。`,ai:{character:`沈夜尘`,context:`玩家用命轮玉的力量击败了上古魔物，灵根完全觉醒。沈夜尘很欣慰，但混沌之力的侵蚀还在继续。`,transitionHint:`沈夜尘祝贺玩家觉醒，或者提到接下来的融合步骤`,nextScene:`ch7_sacrifice`}},{id:`ch7_sacrifice`,speaker:`沈夜尘`,text:`上古魔物被击败了。但它留下的混沌之力还在空气中弥漫。

沈夜尘走到你面前，他的左手已经完全变成了漆黑色，黑色的纹路正在向他的身体蔓延。他的脸色苍白如纸，但眼神依旧坚定。

「师姐，是时候了。」他的声音很轻，「天命祭坛就在前方。我需要在那里融合混沌之力。」

你们继续深入万魔殿，终于来到了最深处的天命祭坛。祭坛是一个巨大的圆形石台，上面刻满了和命轮玉一样的符文。石台中央，有两个凹槽——刚好能放下两块命轮玉。

沈夜尘站在祭坛中央，将黑色命轮玉放入了其中一个凹槽。然后他看向你：

「师姐，把你的命轮玉也放进去。然后……用你的灵力引导两种力量融合。」

他的眼中带着一丝决绝：「如果我失控了……你必须杀了我。答应我。」`,choices:[{text:`答应他：我答应你`,next:`ch7_promise`,effects:{"flag:承诺":!0}},{text:`拒绝：我不会让你死的`,next:`ch7_refuse`,effects:{"flag:拒绝承诺":!0,心性:10}}]},{id:`ch7_promise`,speaker:`旁白`,text:`你点了点头：「我答应你。」

沈夜尘露出了一个释然的笑容。他的银白色发丝在祭坛的光芒中格外耀眼，整个人像是在发光。

「谢谢你，师姐。」他的声音很轻，「这一万年的等待……因为你，变得有意义了。」

你将白色命轮玉放入了另一个凹槽。两块玉佩同时亮起，白色的光芒和漆黑的光芒交织在一起，形成了一个巨大的光幕。

沈夜尘闭上眼睛，开始吸收混沌之力。他的身体开始颤抖，黑色的纹路在他身上疯狂蔓延。你感觉到一股强大的力量在碰撞、在融合——混元灵力和混沌之力，两种完全相反的力量，在他的体内进行着最后的较量。

你站在祭坛边缘，全力运转混元心法，用你的灵力引导着两种力量的融合。你的灵力像是一座桥梁，连接着光明和黑暗。

时间一分一秒地过去。你感觉到自己的灵力在快速消耗，但你不能停下。如果停下……沈夜尘就会被混沌之力吞噬。`,next:`ch7_ai_gu_promise`},{id:`ch7_ai_gu_promise`,speaker:`顾长渊`,text:`融合进行中，顾长渊走到你身边。他的琥珀色眸子映着祭坛的光芒，表情严肃而担忧。`,ai:{character:`顾长渊`,context:`沈夜尘正在融合混沌之力，玩家用灵力引导。过程很危险，顾长渊在旁边守护。`,transitionHint:`顾长渊讨论融合的进展，或者给玩家提供体力上的支持`,nextScene:`ch7_chapter_end`}},{id:`ch7_refuse`,speaker:`旁白`,text:`你摇了摇头：「我不会让你死的。」

沈夜尘微微一愣：「师姐……」

你走上前，握住他的手：「你等了一万年，不是为了死在这里。我会帮你融合混沌之力，但我不会让你付出生命的代价。」

他的眼中闪过一丝泪光：「可是……」

「没有可是。」你打断他，「你是我的师弟。我不会丢下你。」

他沉默了很久，然后露出了一个温柔的笑容：「好。我相信你。」

你将白色命轮玉放入了另一个凹槽。两块玉佩同时亮起，白色的光芒和漆黑的光芒交织在一起，形成了一个巨大的光幕。

沈夜尘闭上眼睛，开始吸收混沌之力。他的身体开始颤抖，黑色的纹路在他身上疯狂蔓延。你感觉到一股强大的力量在碰撞、在融合。

你站在祭坛边缘，全力运转混元心法，用你的灵力引导着两种力量的融合。你的灵力像是一座桥梁，连接着光明和黑暗。

你不会让他死。你一定会成功。`,next:`ch7_ai_chu_refuse`},{id:`ch7_ai_chu_refuse`,speaker:`楚惊鸿`,text:`融合进行中，楚惊鸿走到你身边。他的表情比平时严肃，赤红色的长发在祭坛的光芒中格外耀眼。`,ai:{character:`楚惊鸿`,context:`玩家拒绝了沈夜尘的请求，发誓不会让他死。融合正在进行中，楚惊鸿在旁边守护。`,transitionHint:`楚惊鸿表达他对玩家决心的佩服，或者用别扭的方式鼓励玩家`,nextScene:`ch7_chapter_end`}},{id:`ch7_chapter_end`,speaker:`系统`,text:`万魔殿之战结束。上古魔物被击败，混沌之力开始融合。

灵根觉醒进度：100%
当前状态：完全觉醒
掌握能力：混元心法·圆满、五行合一·极

但融合的过程还在继续。天道之毒的封印，还需要最后一步……

——第七章完——

「万魔殿」

下一章预告：「天道之毒」

融合混沌之力的过程充满了危险。而天道之毒……已经开始苏醒。`,effects:{"flag:第七章完成":!0},nextChapter:8}]},dc={id:8,title:`第八章：天道之毒`,scenes:[{id:`chapter8_start`,speaker:`旁白`,text:`融合的过程持续了整整三天三夜。

你和沈夜尘被困在天命祭坛中，两种力量的碰撞让整个万魔殿都在颤抖。你的灵力几乎耗尽，但你不能停下——一旦停下，沈夜尘就会被混沌之力吞噬。

顾长渊和楚惊鸿守在祭坛外面，阻挡着不断涌来的魔物残余。你能听到外面传来的打斗声和喊杀声，但你无暇顾及。

第三天的黎明，融合终于完成了。

沈夜尘睁开了眼睛。他的眸子从浅灰色变成了深邃的银色，像是蕴含着无尽的星空。他身上的黑色纹路消失了，取而代之的是一层淡淡的银色光芒。

他站起身，活动了一下身体。他的修为虽然消失了，但他的身上散发着一种全新的气息——既不是灵力，也不是混沌之力，而是两种力量融合后产生的全新力量。

「我成功了。」他的声音很轻，带着一丝不敢置信，「师姐……我成功了。」

你露出了一个疲惫的笑容。然后，你的眼前一黑，晕了过去。`,effects:{"flag:融合成功":!0},next:`ch8_ai_gu_wake`},{id:`ch8_ai_gu_wake`,speaker:`顾长渊`,text:`你隐约感觉到有人在照顾你。温暖的手掌贴在你的额头上，带着淡淡的药草香。你听到一个温和的声音在轻声说着什么。`,ai:{character:`顾长渊`,context:`玩家昏迷了，顾长渊一直在照顾她。融合成功了，但玩家的灵力几乎耗尽。`,transitionHint:`顾长渊关心玩家的身体状况，或者讨论融合的结果`,nextScene:`ch8_awakening`}},{id:`ch8_awakening`,speaker:`旁白`,text:`你醒来时，发现自己躺在一张柔软的床上。窗外的阳光洒进来，暖洋洋的。空气中弥漫着药草的清香。

你试着活动了一下身体——浑身酸痛，但灵力已经恢复了大半。你感觉到自己的灵力比以前更加纯净、更加强大。混元心法已经达到了圆满的境界。

「你醒了？」顾长渊推门进来，手里端着一碗药汤，「你昏迷了整整七天。」

他将药汤递给你：「喝了吧，能帮你恢复体力。」

你接过药汤，喝了一口。药汤苦涩，但入口后一股暖流在体内流转，让你舒服了许多。

「沈夜尘呢？」你问。

顾长渊的表情变得复杂：「他……在宗门的禁地。融合混沌之力后，他的身体发生了变化。掌门和长老们在观察他的情况。」

他沉默了一会儿：「宗门里有些人……不太信任他。毕竟他之前破坏了封印。」

你的心沉了下去。你知道，沈夜尘的处境很危险。`,next:`ch8_ai_shen_wake`},{id:`ch8_ai_shen_wake`,speaker:`沈夜尘`,text:`你刚醒来不久，就感觉到一股熟悉的气息。沈夜尘出现在门口，银白色的发丝有些凌乱，银色的眸子里映着你的身影。`,ai:{character:`沈夜尘`,context:`玩家昏迷了七天后醒来。沈夜尘一直在担心她，终于等到她醒了。`,transitionHint:`沈夜尘表达他的 relief，或者讨论融合后的变化`,nextScene:`ch8_ai_linruowei_visit`}},{id:`ch8_ai_linruowei_visit`,speaker:`林若薇`,text:`你刚喝完药汤，林若薇就冲了进来。她的眼眶红红的，但脸上挂着笑容。`,ai:{character:`林若薇`,context:`玩家昏迷了七天后醒来。林若薇来看她，又哭又笑。宗门里的情况有些复杂，沈夜尘被关在禁地。`,transitionHint:`林若薇告诉玩家宗门里最近发生的事情，或者表达她的担心`,nextScene:`ch8_ai_chu_visit`}},{id:`ch8_ai_chu_visit`,speaker:`楚惊鸿`,text:`林若薇离开后，楚惊鸿从窗外翻了进来。他的赤红色长发有些凌乱，但表情依旧嚣张。`,ai:{character:`楚惊鸿`,context:`玩家刚醒来，楚惊鸿来看她。他嘴硬说是路过，但实际上很担心。`,transitionHint:`楚惊鸿告诉玩家沈夜尘的近况，或者用别扭的方式表达关心`,nextScene:`ch8_poison`}},{id:`ch8_poison`,speaker:`旁白`,text:`你恢复后，第一时间去见了沈夜尘。

他被关在宗门禁地的一间石室中。石室外有四个长老看守，戒备森严。你费了好大功夫才说服他们让你进去。

石室内，沈夜尘盘腿而坐。他的银白色发丝变得更加耀眼，银色的眸子平静而深邃。看到你进来，他露出了一个温柔的笑容。

「师姐，你没事就好。」他的声音很轻，「我一直在担心你。」

你走到他面前，仔细打量他。他的身体看起来没有大碍，但你隐约感觉到……他的气息和以前不一样了。不是灵力，也不是混沌之力，而是一种全新的、你从未感受过的力量。

「我融合了混沌之力后，身体发生了变异。」沈夜尘平静地说，「我现在既不是修士，也不是魔物。我变成了……一个全新的存在。」

他伸出手，掌心凝聚出一团银色的光芒：「这是融合后的力量。它既不属于灵力，也不属于混沌之力。它是……天道之力。」

他的表情变得严肃：「师姐，天道之毒已经开始苏醒了。我感觉到它的气息……正在向太虚宗逼近。」`,next:`ch8_ai_shen_captive`},{id:`ch8_ai_shen_captive`,speaker:`沈夜尘`,text:`沈夜尘坐在石室中，银色的眸子映着微弱的灯光。他的表情平静，但你看到了他眼中的疲惫。`,ai:{character:`沈夜尘`,context:`沈夜尘被关在宗门禁地中。他融合了混沌之力，获得了天道之力，但失去了修为。天道之毒正在苏醒。`,transitionHint:`沈夜尘讨论天道之毒的威胁，或者表达他对被关押的感受`,nextScene:`ch8_ai_gu_captive`}},{id:`ch8_ai_gu_captive`,speaker:`顾长渊`,text:`你从石室出来，顾长渊正等在外面。他的琥珀色眸子带着一丝担忧，手里提着药箱。`,ai:{character:`顾长渊`,context:`玩家刚去看了被关押的沈夜尘。他融合了混沌之力，获得了天道之力。顾长渊在禁地外等着玩家。`,transitionHint:`顾长渊讨论沈夜尘的状况，或者提到天道之毒的威胁`,nextScene:`ch8_warning`}},{id:`ch8_warning`,speaker:`沈夜尘`,text:`沈夜尘告诉你，天道之毒是万年来无数修士的贪欲、仇恨、嫉妒汇聚而成的黑暗力量。它腐蚀着天道的根基，让天道逐渐崩塌。

「万年前，天命一族用全族之力封印了天道之毒。但封印只是暂时的。」他的声音很轻，「天道之毒在这万年里不断壮大，现在已经强大到足以挣脱封印了。」

他抬起头，银色的眸子认真地看着你：「师姐，你是混元灵根的觉醒者，是唯一能重新封印天道之毒的人。但这个过程……很危险。」

他从怀中取出两块命轮玉——白色和黑色，递给你：「这是封印的钥匙。你需要将两块玉佩合二为一，用混元灵力引导天道之力，重新封印天道之毒。」

他握住你的手：「我会帮你。虽然我的修为消失了，但我还有天道之力。我会用我的力量保护你。」

他的眼中带着一丝祈求：「师姐……你准备好了吗？」`,choices:[{text:`准备好了：让我们结束这一切`,next:`ch8_ready`,effects:{"flag:准备最终封印":!0}},{text:`还有疑虑：我害怕失败`,next:`ch8_doubt`,effects:{心性:5}}]},{id:`ch8_ready`,speaker:`旁白`,text:`你深吸一口气，握紧了两块命轮玉：「准备好了。让我们结束这一切。」

沈夜尘露出了一个释然的笑容：「好。」

他告诉你，封印天道之毒需要在天道的核心进行。天道的核心位于九霄大陆的最高点——天柱山的山顶。那里是天道之力最浓郁的地方，也是天道之毒的封印所在。

「但天道之毒不会坐以待毙。」沈夜尘的表情变得严肃，「它会派出所有的力量来阻止我们。我们必须做好准备。」

你点了点头。你知道，这将是你一生中最艰难的战斗。

你走出石室，看到顾长渊和楚惊鸿正等在外面。他们的表情都很严肃，但眼中带着坚定的光芒。

「我们和你一起去。」顾长渊说。

「本少爷可不想错过这种大场面。」楚惊鸿扬了扬下巴。

你看着他们，心中充满了感激。这一路走来，有他们的陪伴，你才能走到今天。

「好。」你说，「我们一起。」`,next:`ch8_ai_gu_ready`},{id:`ch8_ai_gu_ready`,speaker:`顾长渊`,text:`走出禁地后，顾长渊走到你身边。他的琥珀色眸子映着夕阳的余晖，表情认真。`,ai:{character:`顾长渊`,context:`玩家决定前往天柱山封印天道之毒。顾长渊决定一起去。他在为最后的决战做准备。`,transitionHint:`顾长渊讨论封印天道之毒的计划，或者准备丹药和物资`,nextScene:`ch8_ai_chu_ready`}},{id:`ch8_ai_chu_ready`,speaker:`楚惊鸿`,text:`楚惊鸿双手抱胸，赤红色的长发在夕阳下格外耀眼。他的表情嚣张，但眼神认真。`,ai:{character:`楚惊鸿`,context:`最终决战即将来临。楚惊鸿决定和玩家一起去天柱山。他在准备灵器和物资。`,transitionHint:`楚惊鸿表达他对决战的态度，或者用别扭的方式鼓励玩家`,nextScene:`ch8_ai_linruowei_ready`}},{id:`ch8_ai_linruowei_ready`,speaker:`林若薇`,text:`你正准备回住处收拾东西，林若薇跑了过来。她的圆脸上带着担忧的神色，手里拿着一个小小的锦囊。`,ai:{character:`林若薇`,context:`玩家决定去天柱山封印天道之毒。林若薇来给玩家送行，她虽然不能一起去，但想为玩家做点什么。`,transitionHint:`林若薇给玩家送护身符，或者表达她的祝福和担心`,nextScene:`ch8_chapter_end`}},{id:`ch8_doubt`,speaker:`旁白`,text:`你沉默了很久。你害怕失败。如果你失败了……整个九霄大陆都会毁灭。

沈夜尘看出了你的担忧。他伸出手，轻轻握住了你的手。

「师姐，」他的声音很轻，带着一丝温柔，「你不需要一个人承担这一切。你有我，有顾长渊，有楚惊鸿。我们都会帮你。」

他的银色眸子认真地看着你：「而且……你是天命一族的传人。你的祖先用全族之力封印了天道之毒，守护了这片大陆万年。你继承了他们的力量，也继承了他们的意志。」

他的笑容温暖而坚定：「你不会失败的。我相信你。」

你看着他的眼睛，心中的恐惧渐渐消散。是的，你不是一个人。你有同伴，有力量，有信念。

「好。」你说，「我准备好了。」`,next:`ch8_ai_shen_doubt`},{id:`ch8_ai_shen_doubt`,speaker:`沈夜尘`,text:`沈夜尘握着你的手，久久没有松开。他的银色眸子映着你的身影，表情温柔而坚定。`,ai:{character:`沈夜尘`,context:`玩家表达了对最终决战的恐惧。沈夜尘安慰她，告诉她不是一个人。两人之间的感情更深了。`,transitionHint:`沈夜尘鼓励玩家，或者聊到他们一起走过的路`,nextScene:`ch8_ai_gu_ready`}},{id:`ch8_chapter_end`,speaker:`系统`,text:`天道之毒已经开始苏醒。最终的决战即将来临。

你已经做好了准备。混元心法圆满，灵根完全觉醒，两块命轮玉在手。你将前往天柱山的山顶，在天道的核心封印天道之毒。

这一战，将决定九霄大陆的命运。

——第八章完——

「天道之毒」

下一章预告：「天命之书」

在天柱山的山顶，你将发现……关于天命一族的最后秘密。`,effects:{"flag:第八章完成":!0},nextChapter:9}]},fc={id:9,title:`第九章：天命之书`,scenes:[{id:`chapter9_start`,speaker:`旁白`,text:`你们踏上了前往天柱山的旅途。

天柱山是九霄大陆的最高峰，山巅常年被云雾笼罩，传说中是天道之力汇聚之地。从太虚宗到天柱山，需要穿越整个九霄大陆，路途遥远而危险。

一路上，你们遇到了无数的阻碍。天道之毒的力量已经渗透到了大陆的每一个角落，沿途的妖兽变得狂暴，修士之间也充满了猜忌和争斗。你们每走一步，都要面对无数的挑战。

但你们没有退缩。你走在最前面，沈夜尘在你身边，顾长渊和楚惊鸿在后方护卫。四个人的配合越来越默契，面对任何困难都能迎刃而解。

七天后，你们终于到达了天柱山的脚下。

天柱山高耸入云，山体通体漆黑，像是被某种力量侵蚀过。山顶被浓厚的黑云笼罩，不时有紫色的闪电在云层中穿梭。空气中弥漫着一种令人窒息的压迫感——那是天道之毒的气息。

「到了。」沈夜尘的声音很轻，「天道的核心就在山顶。」`,next:`ch9_ai_shen_foot`},{id:`ch9_ai_shen_foot`,speaker:`沈夜尘`,text:`天柱山脚下，沈夜尘停下脚步，抬头望着山顶的黑云。他的银色眸子映着紫色的闪电，表情凝重。`,ai:{character:`沈夜尘`,context:`四人到达了天柱山脚下。天道之毒的气息从山顶传来，压迫感很强。沈夜尘似乎在回忆什么。`,transitionHint:`沈夜尘聊到天柱山的历史，或者叮嘱大家注意事项`,nextScene:`ch9_ai_gu_foot`}},{id:`ch9_ai_gu_foot`,speaker:`顾长渊`,text:`顾长渊走到你身边，从药箱中取出几枚丹药。他的琥珀色眸子带着一丝担忧。`,ai:{character:`顾长渊`,context:`四人到达天柱山脚下，准备登山。顾长渊给大家分发丹药，为最后的决战做准备。`,transitionHint:`顾长渊分发丹药，或者讨论登山的路线`,nextScene:`ch9_ai_chu_foot`}},{id:`ch9_ai_chu_foot`,speaker:`楚惊鸿`,text:`楚惊鸿双手抱胸，赤红色的长发在山风中飘扬。他看着天柱山的山顶，嘴角带着一丝不屑。`,ai:{character:`楚惊鸿`,context:`四人到达天柱山脚下。楚惊鸿看着山顶的黑云，嘴上说着不在意，但眼神认真。`,transitionHint:`楚惊鸿用他自己的方式表达对决战的态度，或者提到他准备的灵器`,nextScene:`ch9_climb`}},{id:`ch9_climb`,speaker:`旁白`,text:`你们开始攀登天柱山。

山路崎岖陡峭，每走一步都能感觉到天道之毒的压力在增强。你的灵力在不断消耗，但混元心法自动运转，从天地间吸收灵气来补充。

走了约莫两个时辰，你们来到了半山腰的一处平台。平台上立着一块巨大的石碑，碑文已经模糊不清，但你隐约能看到几个字：

「天命之书」

你走近石碑，命轮玉自动亮起。白色的光芒照在碑文上，那些模糊的文字开始发光，逐渐清晰起来。

碑文记载了天命一族的完整历史——他们是如何诞生的，如何守护九霄大陆，又是如何在万年前做出那个悲壮的决定的。

但最重要的是最后一段：

「天命之书记载：天道之毒并非不可消灭。唯有将混元灵力和天道之力完全融合，形成'创世之力'，才能彻底净化天道之毒。但这个过程需要付出极大的代价——净化者将失去所有的力量，变成一个普通人。」

你的心跳加速了。失去所有的力量……变成普通人……`,effects:{"flag:发现天命之书":!0},next:`ch9_ai_shen_book`},{id:`ch9_ai_shen_book`,speaker:`沈夜尘`,text:`沈夜尘走到你身边，他的银色眸子映着碑文的光芒。他的表情复杂而悲伤。`,ai:{character:`沈夜尘`,context:`玩家发现了天命之书，得知了净化天道之毒的代价——失去所有力量变成普通人。沈夜尘很心疼。`,transitionHint:`沈夜尘讨论天命之书的内容，或者表达他对玩家的心疼`,nextScene:`ch9_ai_gu_book`}},{id:`ch9_ai_gu_book`,speaker:`顾长渊`,text:`顾长渊也走了过来，他的琥珀色眸子映着碑文的光芒。他的表情严肃而担忧。`,ai:{character:`顾长渊`,context:`天命之书揭示了净化天道之毒的代价。顾长渊作为大夫，最关心的是玩家的安全。`,transitionHint:`顾长渊讨论净化的代价是否值得，或者提出替代方案`,nextScene:`ch9_ai_chu_book`}},{id:`ch9_ai_chu_book`,speaker:`楚惊鸿`,text:`楚惊鸿走到你身边，双手抱胸。他的表情比平时严肃，赤红色的长发在碑文的光芒中格外耀眼。`,ai:{character:`楚惊鸿`,context:`天命之书揭示了净化天道之毒的代价。楚惊鸿虽然嘴上不说，但很担心玩家会选择净化。`,transitionHint:`楚惊鸿用他自己的方式表达对玩家的担心，或者提出他的看法`,nextScene:`ch9_choice`}},{id:`ch9_choice`,speaker:`旁白`,text:`你站在石碑前，久久没有说话。

失去所有的力量，变成普通人。这意味着你将失去混元灵根，失去所有的修为，变成一个和刚穿越时一样的废物。

沈夜尘走到你身边，他的银色眸子映着碑文的光芒：「师姐，你不需要这么做。我们可以用封印的方式——虽然不能彻底消灭天道之毒，但至少能再封印它万年。」

顾长渊也走了过来：「封印虽然不是长久之计，但至少能保住你的力量。」

楚惊鸿双手抱胸：「本少爷不管你怎么选，反正本少爷都会支持你。」

你看着他们三个，心中五味杂陈。封印只是治标不治本，万年后天道之毒还会再次苏醒。而净化……虽然代价很大，但能一劳永逸地解决问题。

你握紧了命轮玉，做出了决定。`,choices:[{text:`选择净化：彻底消灭天道之毒`,next:`ch9_purify`,effects:{"flag:选择净化":!0,道德值:20}},{text:`选择封印：再封印万年`,next:`ch9_seal`,effects:{"flag:选择封印":!0,心性:10}}]},{id:`ch9_purify`,speaker:`旁白`,text:`你抬起头，目光坚定：「我选择净化。」

沈夜尘沉默了。他的银色眸子映着你的身影，眼中闪过一丝痛苦——但很快被温柔取代。

「好。」他的声音很轻，「我尊重你的选择。」

顾长渊叹了口气：「我就知道你会这么选。」

楚惊鸿嗤了一声：「哼，真是个傻子。但本少爷……佩服你。」

你继续攀登天柱山。越往上走，天道之毒的压力越大。空气变得粘稠，呼吸变得困难。你的灵力在快速消耗，但你没有停下。

终于，在黄昏时分，你们到达了山顶。

山顶是一个巨大的圆形平台，平台中央有一个漆黑的漩涡——那是天道之毒的核心。漩涡散发着令人窒息的黑暗气息，周围的空气都在扭曲。

你深吸一口气，走到了漩涡面前。你将两块命轮玉合在一起，白色的光芒和漆黑的光芒交织在一起，形成了一个耀眼的光球。

你闭上眼睛，开始引导混元灵力和天道之力融合。`,next:`ch9_ai_shen_purify`},{id:`ch9_ai_shen_purify`,speaker:`沈夜尘`,text:`在开始净化之前，沈夜尘走到你面前。他的银色眸子映着命轮玉的光芒，表情温柔而悲伤。`,ai:{character:`沈夜尘`,context:`玩家选择了净化天道之毒，代价是失去所有力量。沈夜尘很心疼，但他尊重玩家的选择。这是决战前的最后时刻。`,transitionHint:`沈夜尘表达他对玩家的感情，或者叮嘱净化过程中的注意事项`,nextScene:`ch9_purification`}},{id:`ch9_seal`,speaker:`旁白`,text:`你沉默了很久，然后摇了摇头：「我选择封印。」

沈夜尘露出了一个释然的笑容：「好。」

顾长渊点了点头：「封印虽然不是长久之计，但至少能保住你的力量。万年后的事情，万年后再说。」

楚惊鸿嗤了一声：「本少爷还以为你会选净化呢。不过封印也不错——至少你还活着。」

你继续攀登天柱山。越往上走，天道之毒的压力越大。空气变得粘稠，呼吸变得困难。你的灵力在快速消耗，但你没有停下。

终于，在黄昏时分，你们到达了山顶。

山顶是一个巨大的圆形平台，平台中央有一个漆黑的漩涡——那是天道之毒的核心。漩涡散发着令人窒息的黑暗气息，周围的空气都在扭曲。

你深吸一口气，走到了漩涡面前。你将两块命轮玉合在一起，白色的光芒和漆黑的光芒交织在一起，形成了一个耀眼的光球。

你闭上眼睛，开始引导混元灵力和天道之力融合，重新封印天道之毒。`,next:`ch9_ai_shen_seal`},{id:`ch9_ai_shen_seal`,speaker:`沈夜尘`,text:`在开始封印之前，沈夜尘走到你面前。他的银色眸子映着命轮玉的光芒，表情温柔而坚定。`,ai:{character:`沈夜尘`,context:`玩家选择了封印天道之毒，保住自己的力量。沈夜尘支持她的选择。这是决战前的最后时刻。`,transitionHint:`沈夜尘表达他对玩家的支持，或者讨论封印的具体步骤`,nextScene:`ch9_purification`}},{id:`ch9_purification`,speaker:`旁白`,text:`两种力量在你体内碰撞、融合。你感觉到自己的身体像是一个容器，承受着两种截然不同的力量的冲击。混元灵力代表着五行的和谐，天道之力代表着天地的法则。它们在你体内交织、碰撞、融合，形成了一种全新的力量——创世之力。

天道之毒感受到了威胁，开始疯狂地反击。漆黑的雾气从漩涡中涌出，化作无数利刃向你袭来。你的身体被划出无数伤口，鲜血直流。

「师姐！」沈夜尘冲了上来，用天道之力帮你抵挡攻击。

顾长渊和楚惊鸿也冲了上来，用他们的力量保护你。

你感觉到他们的力量汇入你的体内，和你的灵力融合。四个人的力量，四种不同的意志，在这一刻完美地融合在了一起。

你睁开眼睛，双眼中闪烁着耀眼的光芒。你将创世之力凝聚在掌心，推向了天道之毒的核心。

光芒和黑暗碰撞，发出了震耳欲聋的爆响。整个天柱山都在颤抖，天空中的黑云被撕裂，阳光从缝隙中洒落。

你感觉到自己的力量在快速流失。混元灵力在消散，灵根在崩解。你正在失去一切——但你没有停下。

你不能停下。`,effects:{"flag:创世之力":!0},next:`ch9_ai_gu_final`},{id:`ch9_ai_gu_final`,speaker:`顾长渊`,text:`净化进行中，你感觉到顾长渊的力量在支撑着你。他的声音从远处传来，温暖而坚定。`,ai:{character:`顾长渊`,context:`净化天道之毒的过程正在进行中。四个人的力量融合在一起。顾长渊在用他的灵力支撑玩家。`,transitionHint:`顾长渊鼓励玩家坚持下去，或者表达他的信念`,nextScene:`ch9_ai_chu_final`}},{id:`ch9_ai_chu_final`,speaker:`楚惊鸿`,text:`你感觉到楚惊鸿的力量也在支撑着你。他的声音从远处传来，嚣张却带着一丝颤抖。`,ai:{character:`楚惊鸿`,context:`净化天道之毒的过程正在进行中。楚惊鸿在用他的灵力支撑玩家。他嘴上不说，但很害怕失去玩家。`,transitionHint:`楚惊鸿用他自己的方式鼓励玩家，或者表达他一直没说出口的话`,nextScene:`ch9_chapter_end`}},{id:`ch9_chapter_end`,speaker:`系统`,text:`创世之力和天道之毒的碰撞，震撼了整个九霄大陆。

天柱山的山顶，光芒和黑暗交织，形成了一幅壮丽而悲壮的画面。你站在光芒的中心，用尽最后的力量，将天道之毒彻底净化。

你感觉到自己的灵力在消散，混元灵根在崩解。你正在失去一切——但你的心中充满了平静。

你做到了。

——第九章完——

「天命之书」

最终章预告：「破道」

天道之毒被净化了。但你……还活着吗？`,effects:{"flag:第九章完成":!0},nextChapter:10}]},pc={id:10,title:`第十章：破道`,scenes:[{id:`chapter10_start`,speaker:`旁白`,text:`你感觉到自己的意识在消散。

混元灵力已经完全消散，灵根已经崩解。你的身体变得极其虚弱，像是一个初生的婴儿。你倒在了天命祭坛上，眼前一片模糊。

你隐约听到有人在叫你的名字。沈夜尘、顾长渊、楚惊鸿……他们的声音从很远的地方传来，像是隔着一层水幕。

「师姐！师姐！」

「沈熏！」

「你醒醒！」

你想回应他们，但你已经没有力气了。你感觉到自己的生命在流逝，像是沙漏中的细沙，一点一点地消失。

你闭上了眼睛。

在意识消失的最后一刻，你感觉到一滴温热的液体落在你的脸上。是泪吗？是谁的泪？

你不知道。你只知道……你做到了。天道之毒被净化了。九霄大陆……安全了。`,next:`ch10_ai_shen_loss`},{id:`ch10_ai_shen_loss`,speaker:`沈夜尘`,text:`你在模糊的意识中，感觉到一双温暖的手握住了你的手。那双手在颤抖，但握得很紧。`,ai:{character:`沈夜尘`,context:`玩家净化了天道之毒后昏迷了。沈夜尘守在她身边，握着她的手。他很害怕失去她。`,transitionHint:`沈夜尘呼唤玩家醒来，或者表达他的恐惧和不舍`,nextScene:`ch10_darkness`}},{id:`ch10_darkness`,speaker:`旁白`,text:`你在一片黑暗中漂浮。

没有时间，没有空间，没有声音，没有光线。你感觉自己像是沉入了一片无尽的深海，四周只有永恒的寂静。

你不知道自己在这里漂浮了多久。也许是一瞬间，也许是千万年。

然后，你听到了一个声音。

「孩子……你做得很好。」

那是一个温柔的女声，空灵而熟悉。你在幻境中听过这个声音——那是天命一族族长的声音。

「你用你的力量净化了天道之毒，守护了这片大陆。你的祖先……为你感到骄傲。」

你在黑暗中张望，但什么都看不到。

「但你的使命还没有结束。」那个声音继续说道，「天道之毒虽然被净化了，但天道的根基已经被破坏。需要有人来修复它。」

「而你……是唯一能做到的人。」

你感觉到一股温暖的力量包裹了你。那力量温柔而强大，像是母亲的怀抱。

「孩子，醒来吧。你的同伴在等你。」`,effects:{"flag:天命族长":!0},next:`ch10_ai_shen_darkness`},{id:`ch10_ai_shen_darkness`,speaker:`沈夜尘`,text:`在黑暗中，你隐约听到了沈夜尘的声音。那声音很远很远，但很清晰。`,ai:{character:`沈夜尘`,context:`玩家在黑暗中漂浮，听到了天命族长的声音。沈夜尘的声音从远处传来，他在呼唤玩家醒来。`,transitionHint:`沈夜尘的声音引导玩家走出黑暗，或者表达他的思念和等待`,nextScene:`ch10_awakening`}},{id:`ch10_awakening`,speaker:`旁白`,text:`你猛然睁开了眼睛。

映入眼帘的是一片洁白的天花板。空气中弥漫着药草的清香，窗外传来鸟鸣声。你躺在一张柔软的床上，身上盖着干净的被子。

你试着活动了一下身体——能动，还能感觉到疼痛。这是好事，说明你还活着。

但你很快发现……你的灵力消失了。丹田中空空如也，混元灵根已经不复存在。你变成了一个普通人。

「你醒了！」一个惊喜的声音从门口传来。你转头，看到林若薇冲了进来，眼眶红红的，「你终于醒了！你昏迷了整整一个月！」

她扑到你的床边，握着你的手：「你知不知道你吓死我了！沈师兄把你背回来的时候，你浑身是血，气息微弱，药堂的师叔都说你可能醒不过来了……」

她的眼泪流了下来：「但你醒了……你真的醒了……」

你笑了笑，用虚弱的声音问：「沈夜尘呢？顾长渊呢？楚惊鸿呢？」

林若薇擦了擦眼泪：「他们都在外面等着呢。我去叫他们。」`,next:`ch10_ai_linruowei_wake`},{id:`ch10_ai_linruowei_wake`,speaker:`林若薇`,text:`林若薇握着你的手，泪流满面。她的圆脸红扑扑的，眼睛弯成月牙，又哭又笑。`,ai:{character:`林若薇`,context:`玩家昏迷了一个月后醒来，失去了所有灵力。林若薇是第一个发现她醒来的人，又哭又笑。`,transitionHint:`林若薇告诉玩家这一个月来发生的事情，或者表达她的喜悦和担忧`,nextScene:`ch10_reunion`}},{id:`ch10_reunion`,speaker:`旁白`,text:`沈夜尘第一个冲了进来。

他的银白色发丝有些凌乱，银色的眸子里映着你的身影。他站在你的床边，嘴唇颤抖着，好半天才说出一句话：

「师姐……你终于醒了。」

他的声音带着一丝哽咽：「我……我以为我再也见不到你了。」

你想伸出手去摸摸他的头，但你发现自己的手被他紧紧握住了。他的手温暖而有力，和以前的冰凉完全不同。

顾长渊走了进来，手里端着一碗药汤。他的琥珀色眸子映着你的身影，嘴角带着温暖的笑容：「你终于醒了。我给你配了恢复的药，喝了吧。」

楚惊鸿最后走进来，双手抱胸，赤红色的长发在阳光下格外耀眼。他的表情依旧嚣张，但你看到他的眼眶有些发红。

「哼，你终于舍得醒了。」他的声音有些不自然，「本少爷还以为你准备睡一辈子呢。」

你看着他们三个，心中充满了温暖。你失去了灵力，失去了修为，但你没有失去他们。

这就够了。`,effects:{"flag:团聚":!0},next:`ch10_ai_shen_reunion`},{id:`ch10_ai_shen_reunion`,speaker:`沈夜尘`,text:`顾长渊和楚惊鸿离开后，沈夜尘留了下来。他坐在你的床边，握着你的手，银色的眸子映着你的身影。`,ai:{character:`沈夜尘`,context:`玩家醒来后和大家团聚了。沈夜尘留在最后，和玩家独处。他等了一万年的人终于醒了。`,transitionHint:`沈夜尘表达他这一个月来的等待和恐惧，或者聊到未来的生活`,nextScene:`ch10_ai_gu_reunion`}},{id:`ch10_ai_gu_reunion`,speaker:`顾长渊`,text:`沈夜尘离开后，顾长渊又走了进来。他的手里端着一碗药汤，琥珀色的眸子带着温暖的笑容。`,ai:{character:`顾长渊`,context:`玩家醒来后，顾长渊作为大夫一直在照顾她。他给玩家配了恢复的药。`,transitionHint:`顾长渊叮嘱玩家恢复期的注意事项，或者聊到他这一个月来的担心`,nextScene:`ch10_ai_chu_reunion`}},{id:`ch10_ai_chu_reunion`,speaker:`楚惊鸿`,text:`顾长渊离开后，楚惊鸿从窗外翻了进来。他的赤红色长发在阳光下格外张扬，表情嚣张但眼神温柔。`,ai:{character:`楚惊鸿`,context:`玩家醒来后，楚惊鸿虽然嘴上不说，但一直很担心。他偷偷来看玩家。`,transitionHint:`楚惊鸿用他自己的方式表达对玩家的关心，或者提到他这一个月来的经历`,nextScene:`ch10_new_life`}},{id:`ch10_new_life`,speaker:`旁白`,text:`你恢复后，发现世界已经变了。

天道之毒被净化的消息传遍了整个九霄大陆。你的名字被所有修士铭记——沈熏，天命一族的传人，混元灵根的觉醒者，净化天道之毒的英雄。

太虚宗为你举行了盛大的庆功宴。掌门亲自宣布，你将成为太虚宗的荣誉长老，享有至高无上的地位。

但你拒绝了。

你只想做一个普通人。没有灵力，没有修为，没有那些沉重的使命。你只想安安静静地生活，和你在意的人在一起。

沈夜尘陪你留在了太虚宗。他虽然失去了修为，但他还有天道之力。他成为了太虚宗的新任掌门，用他的力量守护着这片大陆。

顾长渊继续做他的大夫。他在太虚宗开了一间药堂，专门为弟子们看诊。他偶尔会来看你，给你带一些补身体的药汤。

楚惊鸿回到了天机商会，继承了他父亲的位置。但他经常来太虚宗「视察业务」，每次都会给你带一些稀奇古怪的礼物。

林若薇成为了外门弟子的教习。她每天都在教导新入门的弟子，偶尔会来找你聊天，说起当年你刚来太虚宗时的趣事。

你的生活平静而幸福。`,next:`ch10_ai_shen_life`},{id:`ch10_ai_shen_life`,speaker:`沈夜尘`,text:`一个春天的午后，沈夜尘来到你的小院。他的银白色发丝在阳光下泛着珠光，银色的眸子映着满院的桃花。`,ai:{character:`沈夜尘`,context:`天道之毒被净化后，世界恢复了和平。沈夜尘成为了太虚宗掌门，但他经常来看玩家。两人的关系比以前更加亲密。`,transitionHint:`沈夜尘聊到他们的未来，或者回忆一起走过的路`,nextScene:`ch10_ai_gu_life`}},{id:`ch10_ai_gu_life`,speaker:`顾长渊`,text:`顾长渊提着药箱来到你的小院。他的琥珀色眸子映着桃花的粉色，嘴角带着温暖的笑容，右边的酒窝格外明显。`,ai:{character:`顾长渊`,context:`和平时期，顾长渊在太虚宗开了一间药堂。他经常来看玩家，给她带补身体的药汤。`,transitionHint:`顾长渊聊到他的药堂，或者回忆他们一起经历的冒险`,nextScene:`ch10_ai_chu_life`}},{id:`ch10_ai_chu_life`,speaker:`楚惊鸿`,text:`楚惊鸿从太虚宗的大门大摇大摆地走了进来。他的赤红色长发在阳光下格外耀眼，身后跟着一群随从，手里捧着各种礼物。`,ai:{character:`楚惊鸿`,context:`和平时期，楚惊鸿继承了天机商会。他经常来太虚宗「视察业务」，实际上是为了看玩家。`,transitionHint:`楚惊鸿带来稀奇古怪的礼物，或者用别扭的方式表达他的感情`,nextScene:`ch10_ending`}},{id:`ch10_ending`,speaker:`旁白`,text:`一年后的春天，你坐在太虚宗后山的一棵桃树下，望着满山遍野的桃花。

微风吹过，花瓣如雨般飘落。你伸出手，接住了一片花瓣。花瓣粉嫩而柔软，在你的掌心中微微颤动。

你感觉到有人在你身边坐下。你转头，看到沈夜尘正看着你，银色的眸子里映着满山的桃花。

「师姐，」他的声音很轻，带着一丝温柔，「你还记得我们第一次见面的时候吗？」

你笑了笑：「当然记得。在乱葬岗，你背着我回来。」

他的耳尖微微泛红：「那时候……我就知道，你是我等了一万年的人。」

他伸出手，轻轻握住了你的手：「师姐，谢谢你。谢谢你让我知道了……活着的意义。」

你靠在他的肩上，望着满山的桃花。微风吹过，带来了花的清香。

你失去了灵力，失去了修为，但你得到了最珍贵的东西——

爱，和被爱的能力。

这就是你的故事。

一个关于爱、牺牲和勇气的故事。

一个关于……破道的故事。`,effects:{"flag:结局":!0},next:`ch10_ai_shen_ending`},{id:`ch10_ai_shen_ending`,speaker:`沈夜尘`,text:`桃花树下，沈夜尘握着你的手，久久没有说话。微风吹过，花瓣落在他的银白色发丝上。`,ai:{character:`沈夜尘`,context:`一年后的春天，玩家和沈夜尘坐在桃树下。故事即将结束，但他们的故事才刚刚开始。`,transitionHint:`沈夜尘对玩家说出他一直想说的话，或者展望他们的未来`,nextScene:`ch10_end_card`}},{id:`ch10_end_card`,speaker:`系统`,text:`——全剧终——

「破道·逆仙缘」

感谢你的游玩。

你选择了净化天道之毒，失去了所有的力量，但你守护了九霄大陆，也守护了你在乎的人。

天命一族的使命，到此终结。但你的故事……才刚刚开始。



制作：AI 辅助创作
引擎：Vue 3 + Vite



「破道，是打破天道的束缚，也是打破命运的枷锁。」`}]},mc={class:`game-bg`},hc={class:`bg-stars`},gc={class:`top-bar`},_c={class:`chapter-info`},vc={class:`chapter-badge`},yc={class:`dialog-area`},bc=[`innerHTML`],xc=[`onClick`],Sc={class:`choice-text`},Cc={key:1,class:`ai-history`},wc={class:`ai-msg-role`},Tc={class:`ai-msg-text`},Ec={key:0,class:`ai-msg ai-msg-char`},Dc={class:`ai-msg-role`},Oc={key:2,class:`continue-hint`},kc=[`placeholder`,`disabled`],Ac=[`disabled`],jc={class:`name-card`},Mc={class:`bottom-status`},Nc={class:`attr-mini`},Pc={class:`attr-mini`},Fc={class:`attr-mini`},Ic=Bs(Object.assign({methods:{formatText(e){return e?e.replace(/\n/g,`<br>`).replace(/「([^」]+)」/g,`<span class="quote">「$1」</span>`).replace(/——/g,`<span class="dash">——</span>`):``}}},{__name:`GameScreen`,emits:[`show-attr`,`show-affection`,`back-to-menu`],setup(e,{emit:t}){Js(0,rc),Js(1,ic),Js(2,ac),Js(3,oc),Js(4,sc),Js(5,cc),Js(6,lc),Js(7,uc),Js(8,dc),Js(9,fc),Js(10,pc);let n=t,r=L(``),i=L(!1),a=L(!1),o=L(!1),s=L(`沈熏`),c=L(null),l=L(null),u=L(!1),d=L([]),f=L(``),p=L(!1),m=L(null),h=xa(()=>Ys()),g=xa(()=>Xs()),_=xa(()=>{let e=h.value?.speaker||``;return e===`沈夜尘`?`#c8d8e8`:e===`顾长渊`?`#d4c490`:e===`楚惊鸿`?`#e8a0a0`:e===`林若薇`?`#b8e0b8`:e===`旁白`?`var(--text-dim)`:e===`系统`?`var(--gold)`:`var(--text)`}),v=xa(()=>i.value?ec():[]);function y(){let e=h.value;e&&(r.value=e.text||``,i.value=!!e.choices,e.ai?(u.value=!0,d.value=[],f.value=``):u.value=!1,mn(()=>{c.value&&(c.value.scrollTop=0)}),e.speaker&&e.speaker!==`系统`&&e.text&&zs(e.text,e.speaker))}function b(){if(i.value||o.value||u.value)return;let e=h.value;if(!e)return;if(e.input){o.value=!0;return}if(e.nextChapter!==void 0){nc(),Zs($.scene),y();return}let t=tc();t&&(Zs(t),y())}function x(){$.playerName=s.value||`沈熏`,o.value=!1;let e=tc();e&&(Zs(e),y())}function S(e){let t=Qs(e.originalIndex);t&&(i.value=!1,Zs(t),y())}async function C(){let e=f.value.trim();if(!e||p.value)return;let t=h.value;if(!t?.ai)return;d.value.push({role:`user`,content:e}),f.value=``,p.value=!0,m.value&&m.value.abort();let n=new AbortController;m.value=n;try{let{content:e,shouldTransition:r}=await Cs(t.ai.character,t.ai.context,t.ai.transitionHint,d.value,{signal:n.signal});if(n.signal.aborted)return;d.value.push({role:`assistant`,content:e}),zs(e,t.ai.character),r&&t.ai.nextScene&&setTimeout(()=>{u.value=!1,Zs(t.ai.nextScene),y()},1500)}catch(e){if(e.name===`AbortError`)return;d.value.push({role:`assistant`,content:`（对话出现错误：`+e.message+`）`})}finally{n.signal.aborted||(p.value=!1)}}function w(){a.value=!a.value}return Zs($.scene),y(),(e,t)=>(q(),J(`div`,{class:`game-root`,onClick:b},[Y(`div`,mc,[Y(`div`,hc,[(q(),J(W,null,Sr(30,e=>Y(`div`,{key:e,class:`star`,style:k({"--x":`${Math.random()*100}%`,"--y":`${Math.random()*100}%`,"--d":`${1+Math.random()*3}s`})},null,4)),64))])]),Y(`div`,gc,[Y(`div`,_c,[Y(`span`,vc,A(g.value),1)]),Y(`button`,{class:`menu-toggle`,onClick:Uo(w,[`stop`])},`☰`)]),X(La,{name:`fade`},{default:Tn(()=>[a.value?(q(),J(`div`,{key:0,class:`dropdown-menu`,onClick:t[3]||=Uo(()=>{},[`stop`])},[Y(`button`,{onClick:t[0]||=e=>{n(`show-attr`),a.value=!1}},`📜 属性面板`),Y(`button`,{onClick:t[1]||=e=>{n(`show-affection`),a.value=!1}},`💕 好感度`),Y(`button`,{onClick:t[2]||=e=>{R(Rs)(),n(`back-to-menu`),a.value=!1}},`🏠 返回主菜单`)])):Z(``,!0)]),_:1}),Y(`div`,yc,[Y(`div`,{class:`dialog-content`,ref_key:`textContainer`,ref:c},[h.value?.speaker?(q(),J(`div`,{key:0,class:`speaker`,style:k({color:_.value})},A(h.value.speaker===`系统`?``:h.value.speaker),5)):Z(``,!0),Y(`div`,{class:`text-body`,innerHTML:e.formatText(r.value)},null,8,bc),X(La,{name:`fade-up`},{default:Tn(()=>[i.value&&v.value.length?(q(),J(`div`,{key:0,class:`choices-container`,ref_key:`choicesRef`,ref:l},[(q(!0),J(W,null,Sr(v.value,e=>(q(),J(`button`,{key:e.originalIndex,class:`choice-btn`,onClick:Uo(t=>S(e),[`stop`])},[t[8]||=Y(`span`,{class:`choice-marker`},`▸`,-1),Y(`span`,Sc,A(e.text),1)],8,xc))),128))],512)):Z(``,!0)]),_:1}),u.value&&d.value.length?(q(),J(`div`,Cc,[(q(!0),J(W,null,Sr(d.value,(e,t)=>(q(),J(`div`,{key:t,class:he([`ai-msg`,e.role===`user`?`ai-msg-user`:`ai-msg-char`])},[Y(`span`,wc,A(e.role===`user`?s.value:h.value?.ai?.character||``),1),Y(`span`,Tc,A(e.content),1)],2))),128)),p.value?(q(),J(`div`,Ec,[Y(`span`,Dc,A(h.value?.ai?.character||``),1),t[9]||=Y(`span`,{class:`ai-msg-text ai-typing`},`思考中...`,-1)])):Z(``,!0)])):Z(``,!0),!i.value&&!o.value&&!u.value?(q(),J(`div`,Oc,[...t[10]||=[Y(`span`,{class:`blink`},`▼`,-1)]])):Z(``,!0)],512),u.value?(q(),J(`div`,{key:0,class:`ai-input-area`,onClick:t[5]||=Uo(()=>{},[`stop`])},[En(Y(`input`,{"onUpdate:modelValue":t[4]||=e=>f.value=e,class:`ai-input`,placeholder:`对${h.value?.ai?.character||`角色`}说些什么...`,onKeyup:Go(C,[`enter`]),disabled:p.value},null,40,kc),[[Po,f.value]]),Y(`button`,{class:`ai-send-btn`,onClick:C,disabled:p.value||!f.value.trim()},` 发送 `,8,Ac)])):Z(``,!0)]),X(La,{name:`fade`},{default:Tn(()=>[o.value?(q(),J(`div`,{key:0,class:`name-modal`,onClick:t[7]||=Uo(()=>{},[`stop`])},[Y(`div`,jc,[t[11]||=Y(`h3`,null,`请为你的角色取名`,-1),En(Y(`input`,{"onUpdate:modelValue":t[6]||=e=>s.value=e,class:`name-input`,placeholder:`沈熏`,maxlength:`8`,onKeyup:Go(x,[`enter`])},null,544),[[Po,s.value]]),Y(`button`,{class:`name-confirm`,onClick:x},`确认`)])])):Z(``,!0)]),_:1}),Y(`div`,Mc,[Y(`span`,Nc,`修为:`+A(R($).attributes.cultivation),1),Y(`span`,Pc,`魅力:`+A(R($).attributes.charm),1),Y(`span`,Fc,`神秘:`+A(R($).attributes.mystery),1)])]))}}),[[`__scopeId`,`data-v-7fefb468`]]),Lc={class:`panel`},Rc={class:`panel-header`},zc={class:`panel-body`},Bc={class:`attr-grid`},Vc={class:`attr-icon`},Hc={class:`attr-info`},Uc={class:`attr-label`},Wc={key:0,class:`attr-bar`},Gc={key:1,class:`attr-bar`},Kc=Bs({__name:`AttributePanel`,emits:[`close`],setup(e,{emit:t}){let n=t,r=[{key:`cultivation`,label:`修为`,icon:`⚡`},{key:`spiritPower`,label:`灵力`,icon:`💎`},{key:`rootBone`,label:`根骨`,icon:`🦴`},{key:`charm`,label:`魅力`,icon:`✨`},{key:`physique`,label:`体质`,icon:`💪`},{key:`wisdom`,label:`智慧`,icon:`📖`},{key:`mind`,label:`心性`,icon:`🧘`},{key:`fortune`,label:`机缘`,icon:`🎲`},{key:`morality`,label:`道德值`,icon:`⚖️`},{key:`mystery`,label:`神秘值`,icon:`🔮`},{key:`harem`,label:`后宫值`,icon:`💕`}];function i(e){return e<=20?`魔道`:e<=40?`灰色`:e<=60?`中庸`:e<=80?`正道`:`圣道`}return(e,t)=>(q(),J(`div`,{class:`panel-overlay`,onClick:t[1]||=Uo(e=>n(`close`),[`self`])},[Y(`div`,Lc,[Y(`div`,Rc,[Y(`h2`,null,A(R($).playerName)+` · 属性面板`,1),Y(`button`,{class:`close-btn`,onClick:t[0]||=e=>n(`close`)},`✕`)]),Y(`div`,zc,[Y(`div`,Bc,[(q(),J(W,null,Sr(r,e=>Y(`div`,{key:e.key,class:`attr-card`},[Y(`div`,Vc,A(e.icon),1),Y(`div`,Hc,[Y(`div`,Uc,A(e.label),1),Y(`div`,{class:he([`attr-value`,{highlight:e.key===`charm`}])},[e.key===`rootBone`?(q(),J(W,{key:0},[Yi(A(R($).attributes.rootBone),1)],64)):e.key===`morality`?(q(),J(W,{key:1},[Yi(A(R($).attributes.morality)+` (`+A(i(R($).attributes.morality))+`) `,1)],64)):(q(),J(W,{key:2},[Yi(A(R($).attributes[e.key]),1)],64))],2)]),typeof R($).attributes[e.key]==`number`&&e.key!==`charm`?(q(),J(`div`,Wc,[Y(`div`,{class:`bar-fill`,style:k({width:`${Math.min(100,R($).attributes[e.key])}%`})},null,4)])):Z(``,!0),e.key===`charm`?(q(),J(`div`,Gc,[...t[2]||=[Y(`div`,{class:`bar-fill charm-fill`,style:{width:`100%`}},null,-1)]])):Z(``,!0)])),64))])])])]))}},[[`__scopeId`,`data-v-c739786b`]]),qc={class:`panel`},Jc={class:`panel-header`},Yc={class:`panel-body`},Xc={class:`char-list`},Zc={class:`char-info`},Qc={class:`char-title`},$c={class:`char-desc`},el={class:`affection-row`},tl={class:`affection-bar`},nl={class:`affection-info`},rl={class:`affection-value`},il={class:`harem-section`},al={class:`harem-bar`},ol={class:`harem-value`},sl=Bs({__name:`AffectionPanel`,emits:[`close`],setup(e,{emit:t}){let n=t,r=[{key:`shen_yechen`,name:`沈夜尘`,title:`腹黑师弟 · 九尾天狐之后`,color:`#c8d8e8`,icon:`🦊`,desc:`表面软糯无害，实则城府极深`},{key:`gu_changyuan`,name:`顾长渊`,title:`纯情大夫 · 万年药童转世`,color:`#d4c490`,icon:`🌿`,desc:`万人迷活菩萨，遇到感情就脸红`},{key:`chu_jinghong`,name:`楚惊鸿`,title:`纨绔少主 · 天机商会继承人`,color:`#e8a0a0`,icon:`⚡`,desc:`嘴硬心软的傲娇小狼狗`}];function i(e){return e===`执念`?`#d45353`:e===`挚爱`?`#e8a0bf`:e===`心动`?`#d4a853`:e===`熟悉`?`#7eb8da`:e===`认识`?`#7ec87e`:`#a090b0`}return(e,t)=>(q(),J(`div`,{class:`panel-overlay`,onClick:t[1]||=Uo(e=>n(`close`),[`self`])},[Y(`div`,qc,[Y(`div`,Jc,[t[2]||=Y(`h2`,null,`💕 好感度`,-1),Y(`button`,{class:`close-btn`,onClick:t[0]||=e=>n(`close`)},`✕`)]),Y(`div`,Yc,[Y(`div`,Xc,[(q(),J(W,null,Sr(r,e=>Y(`div`,{key:e.key,class:`char-card`},[Y(`div`,{class:`char-avatar`,style:k({borderColor:e.color})},A(e.icon),5),Y(`div`,Zc,[Y(`div`,{class:`char-name`,style:k({color:e.color})},A(e.name),5),Y(`div`,Qc,A(e.title),1),Y(`div`,$c,A(e.desc),1),Y(`div`,el,[Y(`div`,tl,[Y(`div`,{class:`bar-fill`,style:k({width:`${R($).affection[e.key]}%`,background:`linear-gradient(90deg, ${e.color}88, ${e.color})`})},null,4)]),Y(`div`,nl,[Y(`span`,rl,A(R($).affection[e.key]),1),Y(`span`,{class:`affection-stage`,style:k({color:i(R($).affectionStage[e.key])})},A(R($).affectionStage[e.key]),5)])])])])),64))]),Y(`div`,il,[t[3]||=Y(`div`,{class:`harem-label`},`后宫值`,-1),Y(`div`,al,[Y(`div`,{class:`harem-fill`,style:k({width:`${Math.min(100,R($).attributes.harem)}%`})},null,4)]),Y(`div`,ol,A(R($).attributes.harem),1)])])])]))}},[[`__scopeId`,`data-v-1692d030`]]),cl={class:`app-root`},ll={class:`settings-card`},ul={class:`settings-header`},dl={class:`settings-body`},fl={class:`preset-bar`},pl=[`value`],ml=[`value`],hl=[`value`],gl=[`value`],_l=[`disabled`],vl={key:0,class:`settings-error`},yl=[`value`],bl=[`value`],xl={key:1,class:`settings-hint`,style:{"text-align":`center`,padding:`12px 0`}},Sl={class:`toggle-row`},Cl=[`value`],wl=[`value`],Tl=[`value`],El=[`value`],Dl=[`value`],Ol=[`value`];Yo({__name:`App`,setup(e){let t=L(`menu`),n=L(!1),r=L(!1),i=L(!1),a=L(ms()),o=L(hs()?.id||null),s=L([]),c=L(!1),l=L(``),u=xa(()=>a.value.find(e=>e.id===o.value)||null);function d(){gs(o.value)}function f(){let e=_s();a.value=ms(),o.value=e.id,s.value=[]}function p(){o.value&&(ys(o.value),a.value=ms(),o.value=hs()?.id||null,s.value=[])}function m(e,t){o.value&&(vs(o.value,{[e]:t}),a.value=ms())}async function h(){let e=u.value;if(!e||!e.baseUrl||!e.apiKey){l.value=`请先填写 URL 和 Key`;return}c.value=!0,l.value=``;try{s.value=await bs(e.baseUrl,e.apiKey),s.value.length||(l.value=`未获取到模型列表`)}catch(e){l.value=`拉取失败: `+e.message}finally{c.value=!1}}let g=L(ws()),_=L(js());function v(){Ts(g.value)}function y(){Ms(_.value)}Mn(i,e=>{e&&(a.value=ms(),o.value=hs()?.id||null,g.value=ws(),s.value=[],l.value=``)});function b(){as(),t.value=`game`}function x(){rs()&&(t.value=`game`)}function S(){n.value=!0}function C(){r.value=!0}return(e,w)=>(q(),J(`div`,cl,[Y(`button`,{class:`settings-btn`,onClick:w[0]||=e=>i.value=!0},`⚙`),t.value===`menu`?(q(),Vi(Ks,{key:0,"has-save":R(is)(),onNewGame:b,onContinue:x},null,8,[`has-save`])):Z(``,!0),t.value===`game`?(q(),Vi(Ic,{key:1,onShowAttr:S,onShowAffection:C,onBackToMenu:w[1]||=e=>t.value=`menu`})):Z(``,!0),X(La,{name:`slide-up`},{default:Tn(()=>[n.value?(q(),Vi(Kc,{key:0,onClose:w[2]||=e=>n.value=!1})):Z(``,!0)]),_:1}),X(La,{name:`slide-up`},{default:Tn(()=>[r.value?(q(),Vi(sl,{key:0,onClose:w[3]||=e=>r.value=!1})):Z(``,!0)]),_:1}),X(La,{name:`fade`},{default:Tn(()=>[i.value?(q(),J(`div`,{key:0,class:`settings-overlay`,onClick:w[15]||=Uo(e=>i.value=!1,[`self`])},[Y(`div`,ll,[Y(`div`,ul,[w[16]||=Y(`h2`,null,`⚙ 设置`,-1),Y(`button`,{class:`close-btn`,onClick:w[4]||=e=>i.value=!1},`✕`)]),Y(`div`,dl,[w[25]||=Y(`div`,{class:`section-title`},`LLM 对话`,-1),Y(`div`,fl,[En(Y(`select`,{class:`settings-select`,"onUpdate:modelValue":w[5]||=e=>o.value=e,onChange:d},[(q(!0),J(W,null,Sr(a.value,e=>(q(),J(`option`,{key:e.id,value:e.id},A(e.name||`未命名`),9,pl))),128))],544),[[Lo,o.value]]),Y(`button`,{class:`icon-btn`,onClick:f,title:`新建预设`},`+`),Y(`button`,{class:`icon-btn danger`,onClick:p,title:`删除预设`},`🗑`)]),u.value?(q(),J(W,{key:0},[w[19]||=Y(`label`,{class:`settings-label`},`名称`,-1),Y(`input`,{class:`settings-input`,value:u.value.name,onInput:w[6]||=e=>m(`name`,e.target.value),placeholder:`预设名称`},null,40,ml),w[20]||=Y(`label`,{class:`settings-label`},`Base URL`,-1),Y(`input`,{class:`settings-input`,value:u.value.baseUrl,onInput:w[7]||=e=>m(`baseUrl`,e.target.value),placeholder:`https://api.example.com/v1`},null,40,hl),w[21]||=Y(`label`,{class:`settings-label`},`API Key`,-1),Y(`input`,{class:`settings-input`,type:`password`,value:u.value.apiKey,onInput:w[8]||=e=>m(`apiKey`,e.target.value),placeholder:`sk-...`},null,40,gl),Y(`button`,{class:`settings-action`,onClick:h,disabled:c.value},A(c.value?`拉取中...`:`拉取模型列表`),9,_l),l.value?(q(),J(`div`,vl,A(l.value),1)):Z(``,!0),s.value.length?(q(),J(W,{key:1},[w[18]||=Y(`label`,{class:`settings-label`},`模型`,-1),Y(`select`,{class:`settings-select full`,value:u.value.model,onChange:w[9]||=e=>m(`model`,e.target.value)},[w[17]||=Y(`option`,{value:``},`请选择模型`,-1),(q(!0),J(W,null,Sr(s.value,e=>(q(),J(`option`,{key:e,value:e},A(e),9,bl))),128))],40,yl)],64)):Z(``,!0)],64)):(q(),J(`div`,xl,`点击 [+] 添加一个 API 预设`)),w[26]||=Y(`div`,{class:`section-title`,style:{"margin-top":`20px`}},`TTS 语音`,-1),Y(`label`,Sl,[w[22]||=Y(`span`,{class:`settings-label`,style:{"margin-bottom":`0`}},`语音播放`,-1),En(Y(`input`,{type:`checkbox`,"onUpdate:modelValue":w[10]||=e=>_.value=e,onChange:y},null,544),[[Fo,_.value]]),w[23]||=Y(`span`,{class:`toggle-track`},[Y(`span`,{class:`toggle-thumb`})],-1)]),w[27]||=Y(`label`,{class:`settings-label`},`Base URL`,-1),Y(`input`,{class:`settings-input`,value:g.value.baseUrl,onChange:w[11]||=e=>{g.value.baseUrl=e.target.value,v()},placeholder:`https://api.example.com/v1`},null,40,Cl),w[28]||=Y(`label`,{class:`settings-label`},`API Key`,-1),Y(`input`,{class:`settings-input`,type:`password`,value:g.value.apiKey,onChange:w[12]||=e=>{g.value.apiKey=e.target.value,v()},placeholder:`sk-...`},null,40,wl),w[29]||=Y(`label`,{class:`settings-label`},`模型`,-1),Y(`select`,{class:`settings-select full`,value:g.value.model,onChange:w[13]||=e=>{g.value.model=e.target.value,v()}},[(q(!0),J(W,null,Sr(R(Es),e=>(q(),J(`option`,{key:e.id,value:e.id},A(e.name),9,El))),128))],40,Tl),w[30]||=Y(`label`,{class:`settings-label`},`语音`,-1),Y(`select`,{class:`settings-select full`,value:g.value.voice,onChange:w[14]||=e=>{g.value.voice=e.target.value,v()}},[w[24]||=Y(`option`,{value:``},`默认`,-1),(q(!0),J(W,null,Sr(R(Ds),e=>(q(),J(`option`,{key:e.id,value:e.id},A(e.name),9,Ol))),128))],40,Dl)])])])):Z(``,!0)]),_:1})]))}}).mount(`#app`);