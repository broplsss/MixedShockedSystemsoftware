(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var n=this||self;function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}} 
function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}function ca(a,b){function c(){}c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.S=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}};var da,r;a:{for(var ea=["CLOSURE_FLAGS"],t=n,fa=0;fa<ea.length;fa++)if(t=t[ea[fa]],null==t){r=null;break a}r=t}var la=r&&r[610401301];da=null!=la?la:!1;var u;const ma=n.navigator;u=ma?ma.userAgentData||null:null;function na(a){return da?u?u.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}function v(a){var b;a:{if(b=n.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};function w(){return da?!!u&&0<u.brands.length:!1}function oa(){return w()?na("Chromium"):(v("Chrome")||v("CriOS"))&&!(w()?0:v("Edge"))||v("Silk")};function x(a,b){Array.prototype.forEach.call(a,b,void 0)};!v("Android")||oa();oa();v("Safari")&&(oa()||(w()?0:v("Coast"))||(w()?0:v("Opera"))||(w()?0:v("Edge"))||(w()?na("Microsoft Edge"):v("Edg/"))||w()&&na("Opera"));const y=Symbol();function z(a,b){if(y)return a[y]|=b;if(void 0!==a.g)return a.g|=b;Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}function B(a){let b;y?b=a[y]:b=a.g;return null==b?0:b}function C(a,b){y?a[y]=b:void 0!==a.g?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}function pa(a,b){C(b,(a|0)&-51)}function qa(a,b){C(b,(a|18)&-41)};var D={};function ra(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var E=Object.freeze(C([],23));function sa(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.I===D)return a;if(d){var e=d=B(a);0===e&&(e|=c&16);e|=c&2;e!==d&&C(a,e);return new b(a)}};function ta(a){const b=a.g+a.u;return a.o||(a.o=a.j[b]={})}function F(a,b,c){return-1===b?null:b>=a.g?a.o?a.o[b]:void 0:c&&a.o&&(c=a.o[b],null!=c)?c:a.j[b+a.u]}function I(a,b,c,d){a.h&&(a.h=void 0);b>=a.g||d?ta(a)[b]=c:(a.j[b+a.u]=c,(a=a.o)&&b in a&&delete a[b])}function J(a,b){a=F(a,b);a=null==a?a:!!a;return null==a?!1:a}function ua(a){var b=F(a,1,!1),c=sa(b,va,B(a.j));c!==b&&null!=c&&I(a,1,c,!1);b=c;if(null==b)return b;B(a.j)&2||(c=wa(b),c!==b&&(b=c,I(a,1,b,!1)));return b} 
function xa(a){var b=B(a.j),c=!!(b&2);var d=c?1:2,e=Ba,f=!!(b&2),g=f,h=F(a,1);Array.isArray(h)||(h=E);var k=B(h);k&1||z(h,1);g?k&2||z(h,18):k&16&&!(k&2)&&(g=h,y?g[y]&&(g[y]&=-17):void 0!==g.g&&(g.g&=-17));if(h!==E&&B(h)&4)3===d||f||(e=Object.isFrozen(h),1===d?e||Object.freeze(h):(d=B(h),f=d&-19,e&&(h=Array.prototype.slice.call(h),d=0,I(a,1,h)),d!==f&&C(h,f))),a=h;else{g=h;f=!!(b&2);var m=!!(B(g)&2);h=g;!f&&m&&(g=Array.prototype.slice.call(g));k=b|(m?2:0);b=m;let l=m=0;for(;m<g.length;m++){const q= 
sa(g[m],e,k);void 0!==q&&(b||(b=!!(2&B(q.j))),g[l++]=q)}l<m&&(g.length=l);e=g;g=B(e);k=g|5;b=b?k&-9:k|8;g!=b&&(Object.isFrozen(e)&&(e=Array.prototype.slice.call(e)),C(e,b));g=e;h!==g&&I(a,1,g);(f||1===d)&&Object.freeze(g);a=g}if(!(c||B(a)&8)){for(c=0;c<a.length;c++)d=a[c],e=wa(d),d!==e&&(a[c]=e);z(a,8)}return a}function K(a,b){a=F(a,b);return null==a?0:a}function L(a){a=F(a,1);return null==a?"":a}function M(a,b){a=F(a,b);return null==a?1:a};let Ca;function Da(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&B(a)&1?void 0:f&&B(a)&2?a:Ea(a,b,c,void 0!==d,e,f);else if(ra(a)){const g={};for(let h in a)g[h]=Da(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}function Ea(a,b,c,d,e,f){const g=B(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(let h=0;h<a.length;h++)a[h]=Da(a[h],b,c,d,e,f);c&&c(g,a);return a} 
function Fa(a){if(a.I===D)a=a.toJSON();else a:switch(typeof a){case "number":a=isFinite(a)?a:String(a);break a;case "object":if(a&&!Array.isArray(a)&&null!=a&&a instanceof Uint8Array){let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}}return a};function Ga(a,b,c=qa){if(null!=a){if(a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=B(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return C(a,d|18),a;a=Ea(a,Ga,d&4?qa:c,!0,!1,!0);b=B(a);b&4&&b&2&&Object.freeze(a);return a}a.I===D&&(B(a.j)&2||(a=Ha(a,!0),z(a.j,18)));return a}} 
function Ha(a,b){var c=a.j,d=[];z(d,16);var e=a.constructor.g;e&&d.push(e);e=a.o;if(e){d.length=c.length;var f={};d[d.length-1]=f}b=b||B(a.j)&2?qa:pa;f=a.constructor;Ca=d;d=new f(d);Ca=void 0;a.M&&(d.M=a.M.slice());f=!!(B(c)&16);var g=e?c.length-1:c.length;for(let l=0;l<g;l++){var h=d,k=l-a.u,m=Ga(c[l],f,b);if(B(h.j)&2)throw Error();I(h,k,m,!1)}if(e)for(const l in e){a=d;c=+l;g=Ga(e[l],f,b);if(B(a.j)&2)throw Error();I(a,c,g,!0)}return d} 
function wa(a){if(!(B(a.j)&2))return a;const b=Ha(a,!1);b.h=a;return b};var N=class{constructor(a,b,c){null==a&&(a=Ca);Ca=void 0;var d=this.constructor.g;if(null==a){a=d?[d]:[];var e=!0;C(a,48)}else{if(!Array.isArray(a))throw Error();if(d&&d!==a[0])throw Error();var f=z(a,0)|32;e=0!==(16&f);C(a,f)}this.u=d?0:-1;this.j=a;a:{f=this.j.length;d=f-1;if(f&&(f=this.j[d],ra(f))){this.o=f;this.g=d-this.u;break a}void 0!==b&&-1<b?(this.g=Math.max(b,d+1-this.u),this.o=void 0):this.g=Number.MAX_VALUE}if(c){b=e&&!0;e=this.g;let h;for(d=0;d<c.length;d++)if(f=c[d],f<e){f+=this.u;var g= 
a[f];g?Ia(g,b):a[f]=E}else h||(h=ta(this)),(g=h[f])?Ia(g,b):h[f]=E}}toJSON(){return Ea(this.j,Fa,void 0,void 0,!1,!1)}};function Ia(a,b){if(Array.isArray(a)){var c=B(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&C(a,c|d)}}N.prototype.I=D;N.prototype.toString=function(){return this.j.toString()};var Ba=class extends N{constructor(a){super(a)}};var va=class extends N{constructor(a){super(a,-1,Ja)}},Ja=[1];var Ka=class extends N{constructor(a){super(a)}};function La(){}function Ma(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Na={capture:!0},Oa={passive:!0},Pa=Ma(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function Qa(a){return a?a.passive&&Pa()?a:a.capture||!1:!1}function O(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Qa(d))};var Q=class{constructor(a,b){this.g=b===Ra?a:""}toString(){return this.g.toString()}};Q.prototype.i=!0;Q.prototype.h=function(){return this.g.toString()};var Ra={},Sa=new Q("about:invalid#zClosurez",Ra);function Ta(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ta(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
class Ua{constructor(a){this.P=a}}function R(a){return new Ua(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const Va=new Ua(a=>/^[^:]*([/?#]|$)/.test(a));var Wa=R("http"),Xa=R("https"),Ya=R("ftp"),Za=R("mailto");const $a=[R("data"),Wa,Xa,Za,Ya,Va];function ab(a=$a){for(let b=0;b<a.length;++b){const c=a[b];if(c instanceof Ua&&c.P("#"))return new Q("#",Ra)}}function bb(a=$a){return ab(a)||Sa};function cb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let db=[];const eb=()=>{const a=db;db=[];for(const b of a)try{b()}catch{}};var fb=a=>{var b=S;"complete"===b.readyState||"interactive"===b.readyState?(db.push(a),1==db.length&&(window.Promise?Promise.resolve().then(eb):window.setImmediate?setImmediate(eb):setTimeout(eb,0))):b.addEventListener("DOMContentLoaded",a)};function gb(a=document){return a.createElement("img")};function hb(a,b,c=null,d=!1){ib(a,b,c,d)}function ib(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=gb(a.document);if(c||d){const f=g=>{c&&c(g);if(d){g=a.google_image_requests;var h=Array.prototype.indexOf.call(g,e,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,Qa());e.removeEventListener&&e.removeEventListener("error",f,Qa())};O(e,"load",f);O(e,"error",f)}e.src=b;a.google_image_requests.push(e)};function jb(a=null){return a&&"23"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="23"]')} 
function kb(){if(!(.01<Math.random())){var a=jb(document.currentScript);a=a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com";var b=(b=jb(document.currentScript))&&b.getAttribute("data-jc-version")||"unknown";a=`https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):hb(b,a,void 0, 
!1)}};var S=document,T=window;var lb=(a=[])=>{n.google_logging_queue||(n.google_logging_queue=[]);n.google_logging_queue.push([12,a])};const mb=[Wa,Xa,Za,Ya,Va,R("market"),R("itms"),R("intent"),R("itms-appss")]; 
var nb=()=>{var a=`${"http:"===T.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return b=>{b={id:"unsafeurl",ctx:625,url:b};var c=[];for(d in b)Ta(d,b[d],c);var d=c.join("&");if(d){b=a.indexOf("#");0>b&&(b=a.length);c=a.indexOf("?");if(0>c||c>b){c=b;var e=""}else e=a.substring(c+1,b);b=[a.slice(0,c),e,a.slice(b)];c=b[1];b[1]=d?c?c+"&"+d:d:c;d=b[0]+(b[1]?"?"+b[1]:"")+b[2]}else d=a;navigator.sendBeacon&&navigator.sendBeacon(d,"")}};var ob=()=>{var a=S;try{return a.querySelectorAll("*[data-ifc]")}catch(b){return[]}},pb=(a,b)=>{a&&cb(b,(c,d)=>{a.style[d]=c})},qb=a=>{var b=S.body;const c=document.createDocumentFragment(),d=a.length;for(let e=0;e<d;++e)c.appendChild(a[e]);b.appendChild(c)};function rb(a,b,c,d,e){const f=[];cb(a,function(g,h){(g=sb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}function sb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(sb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(rb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))} 
function tb(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1} 
function ub(a){let b="https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",c=tb(a)-24;if(0>c)return"";a.g.sort(function(f,g){return f-g});let d=null,e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let k=0;k<h.length;k++){if(!c){d=null==d?g:d;break}let m=rb(h[k],a.i,",$");if(m){m=e+m;if(c>=m.length){c-=m.length;b+=m;e=a.i;break}d=null==d?g:d}}}a="";null!=d&&(a=e+"trn="+d);return b+a}class vb{constructor(){this.i="&";this.h={};this.m=0;this.g=[]}};function wb(){var a=xb,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}function yb(a){if(.01>xb.g)try{let b;a instanceof vb?b=a:(b=new vb,cb(a,(d,e)=>{var f=b;const g=f.m++,h={};h[e]=d;d=[h];f.g.push(g);f.h[g]=d}));const c=ub(b);c&&hb(n,c)}catch(b){}}class zb{constructor(){this.g=Math.random()}};let Ab=null;function Bb(){const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function Cb(){const a=n.performance;return a&&a.now?a.now():null};class Db{constructor(a,b){var c=Cb()||Bb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const U=n.performance,Eb=!!(U&&U.mark&&U.measure&&U.clearMarks),V=Ma(()=>{var a;if(a=Eb){var b;if(null===Ab){Ab="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(Ab=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Ab;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Fb(a){a&&U&&V()&&(U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class Gb{constructor(){var a=window;this.g=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.g=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.h=V()||(null!=b?b:1>Math.random())}start(a,b){if(!this.h)return null;a=new Db(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;U&&V()&&U.mark(b);return a}end(a){if(this.h&&"number"===typeof a.value){a.duration=(Cb()||Bb())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;U&&V()&&U.mark(b);!this.h||2048< 
this.g.length||this.g.push(a)}}};function Hb(){this.h=this.h;this.i=this.i}Hb.prototype.h=!1;function Ib(a){a.h||(a.h=!0,a.m())}Hb.prototype.m=function(){if(this.i)for(;this.i.length;)this.i.shift()()};class Jb{};let xb;const W=new Gb;var Kb=()=>{window.google_measure_js_timing||(W.h=!1,W.g!=W.i.google_js_reporting_queue&&(V()&&x(W.g,Fb),W.g.length=0))};(a=>{xb=a??new zb;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());wb();"complete"==window.document.readyState?Kb():W.h&&O(window,"load",()=>{Kb()})})();var Lb=a=>{O(T,"message",b=>{let c;try{c=JSON.parse(b.data)}catch(d){return}!c||"ig"!==c.googMsgType||a(c,b)})};function X(a,b,c){Hb.call(this);this.s=a;this.F=b||0;this.v=c;this.B=p(this.C,this)}ca(X,Hb);X.prototype.g=0;X.prototype.m=function(){X.R.m.call(this);this.isActive()&&n.clearTimeout(this.g);this.g=0;delete this.s;delete this.v}; 
X.prototype.start=function(a){this.isActive()&&n.clearTimeout(this.g);this.g=0;var b=this.B;a=void 0!==a?a:this.F;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=p(b.handleEvent,b);else throw Error("Invalid listener argument");this.g=2147483647<Number(a)?-1:n.setTimeout(b,a||0)};X.prototype.isActive=function(){return 0!=this.g};X.prototype.C=function(){this.g=0;this.s&&this.s.call(this.v)};const Mb={display:"inline-block",position:"absolute"},Nb={display:"none",width:"100%",height:"100%",top:"0",left:"0"},Y=(a,b)=>{a&&(a.style.display=b?"inline-block":"none")};function Ob(a=""){const b={top:0,right:0,bottom:0,left:0};a&&(a=a.split(","),4===a.length&&a.reduce((c,d)=>c&&!isNaN(+d),!0)&&([b.top,b.right,b.bottom,b.left]=a.map(c=>+c)));return b} 
function Pb(a,b,c=2147483647){const d=S.createElement("div");pb(d,{...Mb,"z-index":String(c),...b});J(a.data,10)&&O(d,"click",La);if(J(a.data,11)){a=b=S.createElement("a");c=nb();const f=bb(mb);f===Sa&&c("#");c=f;if(c instanceof Q)var e=c;else if(c instanceof Q)e=c;else{c="object"==typeof c&&c.i?c.h():String(c);b:{try{e=new URL(c)}catch(g){e="https:";break b}e=e.protocol}"javascript:"===e&&(c="about:invalid#zClosurez");e=new Q(c,Ra)}a.href=e instanceof Q&&e.constructor===Q?e.g:"type_error:SafeUrl"; 
b.appendChild(d);return b}return d} 
function Qb(a,b){switch(M(b.l,5)){case 2:T.AFMA_Communicator?.addEventListener?.("onshow",()=>{Z(a,b)});break;case 10:O(T,"i-creative-view",()=>{Z(a,b)});break;case 4:O(S,"DOMContentLoaded",()=>{Z(a,b)});break;case 8:Lb(c=>{c.rr&&Z(a,b)});break;case 9:if("IntersectionObserver"in T){const c=new IntersectionObserver(d=>{for(const e of d)if(0<e.intersectionRatio){Z(a,b);break}});c.observe(S.body);a.O.push(c)}break;case 11:T.AFMA_Communicator?.addEventListener?.("onAdVisibilityChanged",()=>{Z(a,b)})}} 
function Rb(a,b){b=Ob(b);const c=K(a.data,9);a.m=[{width:"100%",height:b.top+c+"px",top:-c+"px",left:"0"},{width:b.right+c+"px",height:"100%",top:"0",right:-c+"px"},{width:"100%",height:b.bottom+c+"px",bottom:-c+"px",left:"0"},{width:b.left+c+"px",height:"100%",top:"0",left:-c+"px"}].map(d=>Pb(a,d,9019))} 
function Sb(a){var b=0;for(const d of a.N){const e=d.l,f=a.C[M(e,5)];d.A||void 0===f||(b=Math.max(b,f+K(e,2)))}a.s&&Ib(a.s);b-=Date.now();const c=a.h;0<b?(Y(c,!0),a.s=new X(()=>{Y(c,!1)},b),a.s.start()):Y(c,!1)}function Z(a,b){b.A||(a.C[M(b.l,5)]=Date.now(),J(b.l,9)&&(a.N.push(b),Sb(a)))} 
function Tb(a,b,c){if(!a.g||!a.B||300<=b.timeStamp-a.g.timeStamp)return!1;const d=new Map;x(a.B.changedTouches,e=>{d.set(e.identifier,{x:e.clientX,y:e.clientY})});b=K(c.l,11)||10;for(const e of a.g.changedTouches)if(a=d.get(e.identifier),!a||Math.abs(a.x-e.clientX)>b||Math.abs(a.y-e.clientY)>b)return!0;return!1} 
var Vb=class{constructor(){var a=Ub;this.m=[];this.s=this.h=null;this.N=[];this.data=null;this.F=[];this.i=[];this.v=[];this.C={};this.O=[];this.B=this.g=null;this.J="";this.K="true"===a["send-fccs"];this.J=a.qid||""}init(a){lb([a]);this.data=new Ka(a);a=ua(this.data);x(xa(a),f=>{this.v.push({G:0,A:!1,H:0,l:f,D:-1})});this.i=ob();let b=!1;a=this.i.length;for(let f=0;f<a;++f){var c=new va(JSON.parse(this.i[f].getAttribute("data-ifc")||"[]"));x(xa(c),g=>{this.v.push({G:0,A:!1,H:0,l:g,D:f});1===M(g, 
4)&&(b=!0)})}c=a=!1;let d=J(this.data,12);for(var e of this.v){const f=e.l;0<K(f,2)&&0<M(f,5)?(!this.h&&J(f,9)&&(this.h=Pb(this,Nb)),Qb(this,e)):L(f)&&J(f,9)&&Rb(this,L(f));L(f)&&(a=!0);0<K(f,11)&&(c=!0);J(f,12)&&(d=!0)}e=[];this.h&&e.push(this.h);!b&&e.push(...this.m);S.body&&qb(e);J(this.data,13)&&fb(()=>{const f=S.body.querySelectorAll(".amp-fcp, .amp-bcp");for(let h=0;h<f.length;++h){var g=(g=f[h])?T.getComputedStyle(g).getPropertyValue("position"):void 0;"absolute"===g&&Y(f[h],!1)}});O(S,"click", 
f=>{if(this.K){var g={cx:f.clientX,cy:f.clientY,et:Date.now(),qid:this.J};var h=Jb;var k="L";h.L&&h.hasOwnProperty(k)||(k=new h,h.L=k);h=[];!g.eid&&h.length&&(g.eid=h.toString());yb(g);this.K=!1}if(!1===f.isTrusted&&J(this.data,15))f.preventDefault?f.preventDefault():f.returnValue=!1,f.stopImmediatePropagation(),kb();else{g=-1;h=[];for(var m of this.v){k=m.D;var l=-1!==k;if(!(K(m.l,3)<=g||m.A||l&&!1===h[k])){var q=!l||h[k]||this.i[k].contains(f.target);l&&q&&(h[k]=!0);if(k=q)if(k=f,q=m,l=q.l,0<K(l, 
2)&&0<M(l,5))k=this.C[M(l,5)],k=void 0!==k&&Date.now()<k+K(l,2);else if(L(l)){{l=(0<=q.D?this.i[q.D]:S.body).getBoundingClientRect();var A=Number;var G=(G=S.body)?T.getComputedStyle(G).getPropertyValue("zoom"):void 0;const P=A(G||"1"),[Zb,$b]=[k.clientX,k.clientY],[ha,ia,ya,za]=[Zb/P-l.left,$b/P-l.top,l.width,l.height];if(!(0<ya&&0<za)||isNaN(ha)||isNaN(ia)||0>ha||0>ia)k=!1;else{A=Ob(L(q.l));G=!(ha>=A.left&&ya-ha>A.right&&ia>=A.top&&za-ia>A.bottom);q=J(q.l,12);if(this.g&&(J(this.data,12)||q)&&300> 
k.timeStamp-this.g.timeStamp){k=this.g.changedTouches[0];const [ja,ka]=[k.clientX/P-l.left,k.clientY/P-l.top];!isNaN(ja)&&!isNaN(ka)&&0<=ja&&0<=ka&&(G=(G=J(this.data,16)||q?G:!1)||!(ja>=A.left&&ya-ja>A.right&&ka>=A.top&&za-ka>A.bottom))}k=G}}}else k=0<K(l,11)?Tb(this,k,q):!0;if(k){var H=m;g=K(m.l,3)}}}if(H)switch(m=H.l,M(m,4)){case 2:case 3:f.preventDefault?f.preventDefault():f.returnValue=!1;g=Date.now();500<g-H.H&&(H.H=g,++H.G);g=H.l;if(K(g,8)&&H.G>=K(g,8))if(H.A=!0,this.h&&0<K(g,2))Sb(this);else if(0< 
this.m.length&&L(g))for(var Aa of this.m)Y(Aa,!1);kb();Aa=m.toJSON();for(const P of this.F)P(f,Aa)}}},Na);c&&O(S,"touchstart",f=>{this.B=f},Oa);(a&&d||c)&&O(S,"touchend",f=>{this.g=f},Oa)}registerCallback(a){this.F.push(a)}};const Wb=jb(document.currentScript);if(null==Wb)throw Error("JSC not found 23");var Ub;const Xb={},Yb=Wb.attributes;for(let a=Yb.length-1;0<=a;a--){const b=Yb[a].name;0===b.indexOf("data-jcp-")&&(Xb[b.substring(9)]=Yb[a].value)}Ub=Xb;const ac=window;ac.googqscp=new Vb;Ub["init-data"]&&ac.googqscp.init(JSON.parse(Ub["init-data"]));}).call(this);
