if (window && window.performance && window.performance.mark) {window.performance.mark("richTextEditor--ExecutionStart");}
var richTextEditor =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/richTextEditor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/@ms/compact-quill/1.3.25/node_modules/@ms/compact-quill/dist/quill.custom.js":
/*!*************************************************************************************************************************************************************!*\
  !*** C:/_work/4/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/@ms/compact-quill/1.3.25/node_modules/@ms/compact-quill/dist/quill.custom.js ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=51)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(9),o=n(10),i=n(11),u=n(28),a=n(29),s=n(30),c=n(31),l=n(32),f=n(7),p=n(14),h=n(15),y=n(13),d=n(3),b={Scope:d.Scope,create:d.create,find:d.find,query:d.query,register:d.register,Container:r.default,Format:o.default,Leaf:i.default,Embed:c.default,Scroll:u.default,Block:s.default,Inline:a.default,Text:l.default,Attributor:{Attribute:f.default,Class:p.default,Style:h.default,Store:y.default}};e.default=b},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(34),i=n(5),u=n(2),a=n(6),s=String.fromCharCode(0),c=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};c.prototype.insert=function(t,e){var n={};return 0===t.length?this:(n.insert=t,null!=e&&"object"===r(e)&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},c.prototype.delete=function(t){return t<=0?this:this.push({delete:t})},c.prototype.retain=function(t,e){if(t<=0)return this;var n={retain:t};return null!=e&&"object"===r(e)&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},c.prototype.push=function(t){var e=this.ops.length,n=this.ops[e-1];if(t=u(!0,{},t),"object"===r(n)){if("number"==typeof t.delete&&"number"==typeof n.delete)return this.ops[e-1]={delete:n.delete+t.delete},this;if("number"==typeof n.delete&&null!=t.insert&&(e-=1,"object"!==r(n=this.ops[e-1])))return this.ops.unshift(t),this;if(i(t.attributes,n.attributes)){if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={insert:n.insert+t.insert},"object"===r(t.attributes)&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={retain:n.retain+t.retain},"object"===r(t.attributes)&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},c.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},c.prototype.filter=function(t){return this.ops.filter(t)},c.prototype.forEach=function(t){this.ops.forEach(t)},c.prototype.map=function(t){return this.ops.map(t)},c.prototype.partition=function(t){var e=[],n=[];return this.forEach((function(r){(t(r)?e:n).push(r)})),[e,n]},c.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},c.prototype.changeLength=function(){return this.reduce((function(t,e){return e.insert?t+a.length(e):e.delete?t-e.delete:t}),0)},c.prototype.length=function(){return this.reduce((function(t,e){return t+a.length(e)}),0)},c.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var n=[],r=a.iterator(this.ops),o=0;o<e&&r.hasNext();){var i;o<t?i=r.next(t-o):(i=r.next(e-o),n.push(i)),o+=a.length(i)}return new c(n)},c.prototype.compose=function(t){var e=a.iterator(this.ops),n=a.iterator(t.ops),r=[],o=n.peek();if(null!=o&&"number"==typeof o.retain&&null==o.attributes){for(var u=o.retain;"insert"===e.peekType()&&e.peekLength()<=u;)u-=e.peekLength(),r.push(e.next());o.retain-u>0&&n.next(o.retain-u)}for(var s=new c(r);e.hasNext()||n.hasNext();)if("insert"===n.peekType())s.push(n.next());else if("delete"===e.peekType())s.push(e.next());else{var l=Math.min(e.peekLength(),n.peekLength()),f=e.next(l),p=n.next(l);if("number"==typeof p.retain){var h={};"number"==typeof f.retain?h.retain=l:h.insert=f.insert;var y=a.attributes.compose(f.attributes,p.attributes,"number"==typeof f.retain);if(y&&(h.attributes=y),s.push(h),!n.hasNext()&&i(s.ops[s.ops.length-1],h)){var d=new c(e.rest());return s.concat(d).chop()}}else"number"==typeof p.delete&&"number"==typeof f.retain&&s.push(p)}return s.chop()},c.prototype.concat=function(t){var e=new c(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},c.prototype.diff=function(t,e){if(this.ops===t.ops)return new c;var n=[this,t].map((function(e){return e.map((function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:s;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join("")})),r=new c,u=o(n[0],n[1],e),l=a.iterator(this.ops),f=a.iterator(t.ops);return u.forEach((function(t){for(var e=t[1].length;e>0;){var n=0;switch(t[0]){case o.INSERT:n=Math.min(f.peekLength(),e),r.push(f.next(n));break;case o.DELETE:n=Math.min(e,l.peekLength()),l.next(n),r.delete(n);break;case o.EQUAL:n=Math.min(l.peekLength(),f.peekLength(),e);var u=l.next(n),s=f.next(n);i(u.insert,s.insert)?r.retain(n,a.attributes.diff(u.attributes,s.attributes)):r.push(s).delete(n)}e-=n}})),r.chop()},c.prototype.eachLine=function(t,e){e=e||"\n";for(var n=a.iterator(this.ops),r=new c,o=0;n.hasNext();){if("insert"!==n.peekType())return;var i=n.peek(),u=a.length(i)-n.peekLength(),s="string"==typeof i.insert?i.insert.indexOf(e,u)-u:-1;if(s<0)r.push(n.next());else if(s>0)r.push(n.next(s));else{if(!1===t(r,n.next(1).attributes||{},o))return;o+=1,r=new c}}r.length()>0&&t(r,{},o)},c.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var n=a.iterator(this.ops),r=a.iterator(t.ops),o=new c;n.hasNext()||r.hasNext();)if("insert"!==n.peekType()||!e&&"insert"===r.peekType())if("insert"===r.peekType())o.push(r.next());else{var i=Math.min(n.peekLength(),r.peekLength()),u=n.next(i),s=r.next(i);if(u.delete)continue;s.delete?o.push(s):o.retain(i,a.attributes.transform(u.attributes,s.attributes,e))}else o.retain(a.length(n.next()));return o.chop()},c.prototype.transformPosition=function(t,e){e=!!e;for(var n=a.iterator(this.ops),r=0;n.hasNext()&&r<=t;){var o=n.peekLength(),i=n.peekType();n.next(),"delete"!==i?("insert"===i&&(r<t||!e)&&(t+=o),r+=o):t-=Math.min(o,t-r)}return t},t.exports=c},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=Object.prototype.hasOwnProperty,i=Object.prototype.toString,u=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===i.call(t)},c=function(t){if(!t||"[object Object]"!==i.call(t))return!1;var e,n=o.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&o.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!r)return!1;for(e in t);return void 0===e||o.call(t,e)},l=function(t,e){u&&"__proto__"===e.name?u(t,e.name,{enumerable:!0,configurable:!0,value:e.newValue,writable:!0}):t[e.name]=e.newValue},f=function(t,e){if("__proto__"===e){if(!o.call(t,e))return;if(a)return a(t,e).value}return t[e]};t.exports=function t(){var e,n,o,i,u,a,p=arguments[0],h=1,y=arguments.length,d=!1;for("boolean"==typeof p&&(d=p,p=arguments[1]||{},h=2),(null==p||"object"!==r(p)&&"function"!=typeof p)&&(p={});h<y;++h)if(null!=(e=arguments[h]))for(n in e)o=f(p,n),p!==(i=f(e,n))&&(d&&i&&(c(i)||(u=s(i)))?(u?(u=!1,a=o&&s(o)?o:[]):a=o&&c(o)?o:{},l(p,{name:n,newValue:t(d,a,i)})):void 0!==i&&l(p,{name:n,newValue:i}));return p}},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e){var n=this;return e="[Parchment] "+e,(n=t.call(this,e)||this).message=e,n.name=n.constructor.name,n}return o(e,t),e}(Error);e.ParchmentError=i;var u,a={},s={},c={},l={};function f(t,e){var n;if(void 0===e&&(e=u.ANY),"string"==typeof t)n=l[t]||a[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)n=l.text;else if("number"==typeof t)t&u.LEVEL&u.BLOCK?n=l.block:t&u.LEVEL&u.INLINE&&(n=l.inline);else if(t instanceof HTMLElement){var r=(t.getAttribute("class")||"").split(/\s+/);for(var o in r)if(n=s[r[o]])break;n=n||c[t.tagName]}return null==n?null:e&u.LEVEL&n.scope&&e&u.TYPE&n.scope?n:null}e.DATA_KEY="__blot",function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"}(u=e.Scope||(e.Scope={})),e.create=function(t,e){var n=f(t);if(null==n)throw new i("Unable to create "+t+" blot");var r=n,o=t instanceof Node||t.nodeType===Node.TEXT_NODE?t:r.create(e);return new r(o,e)},e.find=function t(n,r){return void 0===r&&(r=!1),null==n?null:null!=n[e.DATA_KEY]?n[e.DATA_KEY].blot:r?t(n.parentNode,r):null},e.query=f,e.register=function t(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(e.length>1)return e.map((function(e){return t(e)}));var r=e[0];if("string"!=typeof r.blotName&&"string"!=typeof r.attrName)throw new i("Invalid definition");if("abstract"===r.blotName)throw new i("Cannot register abstract class");if(l[r.blotName||r.attrName]=r,"string"==typeof r.keyName)a[r.keyName]=r;else if(null!=r.className&&(s[r.className]=r),null!=r.tagName){Array.isArray(r.tagName)?r.tagName=r.tagName.map((function(t){return t.toUpperCase()})):r.tagName=r.tagName.toUpperCase();var o=Array.isArray(r.tagName)?r.tagName:[r.tagName];o.forEach((function(t){null!=c[t]&&null!=r.className||(c[t]=r)}))}return r}},function(t,e,n){(function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r=function(){"use strict";function e(t,e){return null!=e&&t instanceof e}var r,o,i;try{r=Map}catch(t){r=function(){}}try{o=Set}catch(t){o=function(){}}try{i=Promise}catch(t){i=function(){}}function u(a,c,l,f,p){"object"===n(c)&&(l=c.depth,f=c.prototype,p=c.includeNonEnumerable,c=c.circular);var h=[],y=[],d=void 0!==t;return void 0===c&&(c=!0),void 0===l&&(l=1/0),function a(l,b){if(null===l)return null;if(0===b)return l;var v,m;if("object"!=n(l))return l;if(e(l,r))v=new r;else if(e(l,o))v=new o;else if(e(l,i))v=new i((function(t,e){l.then((function(e){t(a(e,b-1))}),(function(t){e(a(t,b-1))}))}));else if(u.__isArray(l))v=[];else if(u.__isRegExp(l))v=new RegExp(l.source,s(l)),l.lastIndex&&(v.lastIndex=l.lastIndex);else if(u.__isDate(l))v=new Date(l.getTime());else{if(d&&t.isBuffer(l))return v=t.allocUnsafe?t.allocUnsafe(l.length):new t(l.length),l.copy(v),v;e(l,Error)?v=Object.create(l):void 0===f?(m=Object.getPrototypeOf(l),v=Object.create(m)):(v=Object.create(f),m=f)}if(c){var g=h.indexOf(l);if(-1!=g)return y[g];h.push(l),y.push(v)}for(var w in e(l,r)&&l.forEach((function(t,e){var n=a(e,b-1),r=a(t,b-1);v.set(n,r)})),e(l,o)&&l.forEach((function(t){var e=a(t,b-1);v.add(e)})),l){var O;m&&(O=Object.getOwnPropertyDescriptor(m,w)),O&&null==O.set||(v[w]=a(l[w],b-1))}if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(l);for(w=0;w<S.length;w++){var E=S[w];(!(_=Object.getOwnPropertyDescriptor(l,E))||_.enumerable||p)&&(v[E]=a(l[E],b-1),_.enumerable||Object.defineProperty(v,E,{enumerable:!1}))}}if(p){var A=Object.getOwnPropertyNames(l);for(w=0;w<A.length;w++){var _,N=A[w];(_=Object.getOwnPropertyDescriptor(l,N))&&_.enumerable||(v[N]=a(l[N],b-1),Object.defineProperty(v,N,{enumerable:!1}))}}return v}(a,l)}function a(t){return Object.prototype.toString.call(t)}function s(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return u.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},u.__objToStr=a,u.__isDate=function(t){return"object"===n(t)&&"[object Date]"===a(t)},u.__isArray=function(t){return"object"===n(t)&&"[object Array]"===a(t)},u.__isRegExp=function(t){return"object"===n(t)&&"[object RegExp]"===a(t)},u.__getRegExpFlags=s,u}();"object"===n(e)&&e.exports&&(e.exports=r)}).call(this,n(46).Buffer,n(50)(t))},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(16),i=n(36),u=n(37),a=n(42),s=n(43),c=n(45),l=Date.prototype.getTime;function f(t,e,n){var y=n||{};return!!(y.strict?u(t,e):t===e)||(!t||!e||"object"!==r(t)&&"object"!==r(e)?y.strict?u(t,e):t==e:function(t,e,n){var u,y;if(r(t)!==r(e))return!1;if(p(t)||p(e))return!1;if(t.prototype!==e.prototype)return!1;if(i(t)!==i(e))return!1;var d=a(t),b=a(e);if(d!==b)return!1;if(d||b)return t.source===e.source&&s(t)===s(e);if(c(t)&&c(e))return l.call(t)===l.call(e);var v=h(t),m=h(e);if(v!==m)return!1;if(v||m){if(t.length!==e.length)return!1;for(u=0;u<t.length;u++)if(t[u]!==e[u])return!1;return!0}if(r(t)!==r(e))return!1;try{var g=o(t),w=o(e)}catch(t){return!1}if(g.length!==w.length)return!1;for(g.sort(),w.sort(),u=g.length-1;u>=0;u--)if(g[u]!=w[u])return!1;for(u=g.length-1;u>=0;u--)if(y=g[u],!f(t[y],e[y],n))return!1;return!0}(t,e,y))}function p(t){return null==t}function h(t){return!(!t||"object"!==r(t)||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}t.exports=f},function(t,e,n){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(5),i=n(2),u={attributes:{compose:function(t,e,n){"object"!==r(t)&&(t={}),"object"!==r(e)&&(e={});var o=i(!0,{},e);for(var u in n||(o=Object.keys(o).reduce((function(t,e){return null!=o[e]&&(t[e]=o[e]),t}),{})),t)void 0!==t[u]&&void 0===e[u]&&(o[u]=t[u]);return Object.keys(o).length>0?o:void 0},diff:function(t,e){"object"!==r(t)&&(t={}),"object"!==r(e)&&(e={});var n=Object.keys(t).concat(Object.keys(e)).reduce((function(n,r){return o(t[r],e[r])||(n[r]=void 0===e[r]?null:e[r]),n}),{});return Object.keys(n).length>0?n:void 0},transform:function(t,e,n){if("object"!==r(t))return e;if("object"===r(e)){if(!n)return e;var o=Object.keys(e).reduce((function(n,r){return void 0===t[r]&&(n[r]=e[r]),n}),{});return Object.keys(o).length>0?o:void 0}}},iterator:function(t){return new a(t)},length:function(t){return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};function a(t){this.ops=t,this.index=0,this.offset=0}a.prototype.hasNext=function(){return this.peekLength()<1/0},a.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var n=this.offset,r=u.length(e);if(t>=r-n?(t=r-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(n,t):o.insert=e.insert,o}return{retain:1/0}},a.prototype.peek=function(){return this.ops[this.index]},a.prototype.peekLength=function(){return this.ops[this.index]?u.length(this.ops[this.index])-this.offset:1/0},a.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},a.prototype.rest=function(){if(this.hasNext()){if(0===this.offset)return this.ops.slice(this.index);var t=this.offset,e=this.index,n=this.next(),r=this.ops.slice(this.index);return this.offset=t,this.index=e,[n].concat(r)}return[]},t.exports=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(){function t(t,e,n){void 0===n&&(n={}),this.attrName=t,this.keyName=e;var o=r.Scope.TYPE&r.Scope.ATTRIBUTE;null!=n.scope?this.scope=n.scope&r.Scope.LEVEL|o:this.scope=r.Scope.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}return t.keys=function(t){return[].map.call(t.attributes,(function(t){return t.name}))},t.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)},t.prototype.canAdd=function(t,e){return null!=r.query(t,r.Scope.BLOT&(this.scope|r.Scope.TYPE))&&(null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1))},t.prototype.remove=function(t){t.removeAttribute(this.keyName)},t.prototype.value=function(t){var e=t.getAttribute(this.keyName);return this.canAdd(t,e)&&e?e:""},t}();e.default=o},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(16),i="function"==typeof Symbol&&"symbol"===r(Symbol("foo")),u=Object.prototype.toString,a=Array.prototype.concat,s=Object.defineProperty,c=s&&function(){var t={};try{for(var e in s(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),l=function(t,e,n,r){var o;(!(e in t)||"function"==typeof(o=r)&&"[object Function]"===u.call(o)&&r())&&(c?s(t,e,{configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},f=function(t,e){var n=arguments.length>2?arguments[2]:{},r=o(e);i&&(r=a.call(r,Object.getOwnPropertySymbols(e)));for(var u=0;u<r.length;u+=1)l(t,r[u],e[r[u]],n[r[u]])};f.supportsDescriptors=!!c,t.exports=f},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),u=n(12),a=n(3),s=function(t){function e(e){var n=t.call(this,e)||this;return n.build(),n}return o(e,t),e.prototype.appendChild=function(t){this.insertBefore(t)},e.prototype.attach=function(){t.prototype.attach.call(this),this.children.forEach((function(t){t.attach()}))},e.prototype.build=function(){var t=this;this.children=new i.default,[].slice.call(this.domNode.childNodes).reverse().forEach((function(e){try{var n=c(e);t.insertBefore(n,t.children.head||void 0)}catch(t){if(t instanceof a.ParchmentError)return;throw t}}))},e.prototype.deleteAt=function(t,e){if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,(function(t,e,n){t.deleteAt(e,n)}))},e.prototype.descendant=function(t,n){var r=this.children.find(n),o=r[0],i=r[1];return null==t.blotName&&t(o)||null!=t.blotName&&o instanceof t?[o,i]:o instanceof e?o.descendant(t,i):[null,-1]},e.prototype.descendants=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_VALUE);var o=[],i=r;return this.children.forEachAt(n,r,(function(n,r,u){(null==t.blotName&&t(n)||null!=t.blotName&&n instanceof t)&&o.push(n),n instanceof e&&(o=o.concat(n.descendants(t,r,i))),i-=u})),o},e.prototype.detach=function(){this.children.forEach((function(t){t.detach()})),t.prototype.detach.call(this)},e.prototype.formatAt=function(t,e,n,r){this.children.forEachAt(t,e,(function(t,e,o){t.formatAt(e,o,n,r)}))},e.prototype.insertAt=function(t,e,n){var r=this.children.find(t),o=r[0],i=r[1];if(o)o.insertAt(i,e,n);else{var u=null==n?a.create("text",e):a.create(e,n);this.appendChild(u)}},e.prototype.insertBefore=function(t,e){if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some((function(e){return t instanceof e})))throw new a.ParchmentError("Cannot insert "+t.statics.blotName+" into "+this.statics.blotName);t.insertInto(this,e)},e.prototype.length=function(){return this.children.reduce((function(t,e){return t+e.length()}),0)},e.prototype.moveChildren=function(t,e){this.children.forEach((function(n){t.insertBefore(n,e)}))},e.prototype.optimize=function(e){if(t.prototype.optimize.call(this,e),0===this.children.length)if(null!=this.statics.defaultChild){var n=a.create(this.statics.defaultChild);this.appendChild(n),n.optimize(e)}else this.remove()},e.prototype.path=function(t,n){void 0===n&&(n=!1);var r=this.children.find(t,n),o=r[0],i=r[1],u=[[this,t]];return o instanceof e?u.concat(o.path(i,n)):(null!=o&&u.push([o,i]),u)},e.prototype.removeChild=function(t){this.children.remove(t)},e.prototype.replace=function(n){n instanceof e&&n.moveChildren(this),t.prototype.replace.call(this,n)},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=this.clone();return this.parent.insertBefore(n,this.next),this.children.forEachAt(t,this.length(),(function(t,r,o){t=t.split(r,e),n.appendChild(t)})),n},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(t,e){var n=this,r=[],o=[];t.forEach((function(t){t.target===n.domNode&&"childList"===t.type&&(r.push.apply(r,t.addedNodes),o.push.apply(o,t.removedNodes))})),o.forEach((function(t){if(!(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var e=a.find(t);null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==n.domNode||e.detach())}})),r.filter((function(t){return t.parentNode==n.domNode})).sort((function(t,e){return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1})).forEach((function(t){var e=null;null!=t.nextSibling&&(e=a.find(t.nextSibling));var r=c(t);r.next==e&&null!=r.next||(null!=r.parent&&r.parent.removeChild(n),n.insertBefore(r,e||void 0))}))},e}(u.default);function c(t){var e=a.find(t);if(null==e)try{e=a.create(t)}catch(n){e=a.create(a.Scope.INLINE),[].slice.call(t.childNodes).forEach((function(t){e.domNode.appendChild(t)})),t.parentNode&&t.parentNode.replaceChild(e.domNode,t),e.attach()}return e}e.default=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),u=n(13),a=n(9),s=n(3),c=function(t){function e(e){var n=t.call(this,e)||this;return n.attributes=new u.default(n.domNode),n}return o(e,t),e.formats=function(t){return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)},e.prototype.format=function(t,e){var n=s.query(t);n instanceof i.default?this.attributes.attribute(n,e):e&&(null==n||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))},e.prototype.formats=function(){var t=this.attributes.values(),e=this.statics.formats(this.domNode);return null!=e&&(t[this.statics.blotName]=e),t},e.prototype.replaceWith=function(e,n){var r=t.prototype.replaceWith.call(this,e,n);return this.attributes.copy(r),r},e.prototype.update=function(e,n){var r=this;t.prototype.update.call(this,e,n),e.some((function(t){return t.target===r.domNode&&"attributes"===t.type}))&&this.attributes.build()},e.prototype.wrap=function(n,r){var o=t.prototype.wrap.call(this,n,r);return o instanceof e&&o.statics.scope===this.statics.scope&&this.attributes.move(o),o},e}(a.default);e.default=c},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),u=n(3),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.value=function(t){return!0},e.prototype.index=function(t,e){return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1},e.prototype.position=function(t,e){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]},e.prototype.value=function(){var t;return(t={})[this.statics.blotName]=this.statics.value(this.domNode)||!0,t},e.scope=u.Scope.INLINE_BLOT,e}(i.default);e.default=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(){function t(t){this.domNode=t,this.domNode[r.DATA_KEY]={blot:this}}return Object.defineProperty(t.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),t.create=function(t){if(null==this.tagName)throw new r.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t).toString()===t&&(t=parseInt(t))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e},t.prototype.attach=function(){null!=this.parent&&(this.scroll=this.parent.scroll)},t.prototype.clone=function(){var t=this.domNode.cloneNode(!1);return r.create(t)},t.prototype.detach=function(){null!=this.parent&&this.parent.removeChild(this),delete this.domNode[r.DATA_KEY]},t.prototype.deleteAt=function(t,e){this.isolate(t,e).remove()},t.prototype.formatAt=function(t,e,n,o){var i=this.isolate(t,e);if(null!=r.query(n,r.Scope.BLOT)&&o)i.wrap(n,o);else if(null!=r.query(n,r.Scope.ATTRIBUTE)){var u=r.create(this.statics.scope);i.wrap(u),u.format(n,o)}},t.prototype.insertAt=function(t,e,n){var o=null==n?r.create("text",e):r.create(e,n),i=this.split(t);this.parent.insertBefore(o,i)},t.prototype.insertInto=function(t,e){void 0===e&&(e=null),null!=this.parent&&this.parent.children.remove(this);var n=null;t.children.insertBefore(this,e),null!=e&&(n=e.domNode),this.domNode.parentNode==t.domNode&&this.domNode.nextSibling==n||t.domNode.insertBefore(this.domNode,n),this.parent=t,this.attach()},t.prototype.isolate=function(t,e){var n=this.split(t);return n.split(e),n},t.prototype.length=function(){return 1},t.prototype.offset=function(t){return void 0===t&&(t=this.parent),null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)},t.prototype.optimize=function(t){null!=this.domNode[r.DATA_KEY]&&delete this.domNode[r.DATA_KEY].mutations},t.prototype.remove=function(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},t.prototype.replace=function(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())},t.prototype.replaceWith=function(t,e){var n="string"==typeof t?r.create(t,e):t;return n.replace(this),n},t.prototype.split=function(t,e){return 0===t?this:this.next},t.prototype.update=function(t,e){},t.prototype.wrap=function(t,e){var n="string"==typeof t?r.create(t,e):t;return null!=this.parent&&this.parent.insertBefore(n,this.next),n.appendChild(this),n},t.blotName="abstract",t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=n(14),i=n(15),u=n(3),a=function(){function t(t){this.attributes={},this.domNode=t,this.build()}return t.prototype.attribute=function(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])},t.prototype.build=function(){var t=this;this.attributes={};var e=r.default.keys(this.domNode),n=o.default.keys(this.domNode),a=i.default.keys(this.domNode);e.concat(n).concat(a).forEach((function(e){var n=u.query(e,u.Scope.ATTRIBUTE);n instanceof r.default&&(t.attributes[n.attrName]=n)}))},t.prototype.copy=function(t){var e=this;Object.keys(this.attributes).forEach((function(n){var r=e.attributes[n].value(e.domNode);t.format(n,r)}))},t.prototype.move=function(t){var e=this;this.copy(t),Object.keys(this.attributes).forEach((function(t){e.attributes[t].remove(e.domNode)})),this.attributes={}},t.prototype.values=function(){var t=this;return Object.keys(this.attributes).reduce((function(e,n){return e[n]=t.attributes[n].value(t.domNode),e}),{})},t}();e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function i(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter((function(t){return 0===t.indexOf(e+"-")}))}Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("class")||"").split(/\s+/).map((function(t){return t.split("-").slice(0,-1).join("-")}))},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(this.keyName+"-"+e),!0)},e.prototype.remove=function(t){i(t,this.keyName).forEach((function(e){t.classList.remove(e)})),0===t.classList.length&&t.removeAttribute("class")},e.prototype.value=function(t){var e=(i(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""},e}(n(7).default);e.default=u},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function i(t){var e=t.split("-"),n=e.slice(1).map((function(t){return t[0].toUpperCase()+t.slice(1)})).join("");return e[0]+n}Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.keys=function(t){return(t.getAttribute("style")||"").split(";").map((function(t){return t.split(":")[0].trim()}))},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.style[i(this.keyName)]=e,!0)},e.prototype.remove=function(t){t.style[i(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")},e.prototype.value=function(t){var e=t.style[i(this.keyName)];return this.canAdd(t,e)?e:""},e}(n(7).default);e.default=u},function(t,e,n){"use strict";var r=Array.prototype.slice,o=n(17),i=Object.keys,u=i?function(t){return i(t)}:n(35),a=Object.keys;u.shim=function(){Object.keys?function(){var t=Object.keys(arguments);return t&&t.length===arguments.length}(1,2)||(Object.keys=function(t){return o(t)?a(r.call(t)):a(t)}):Object.keys=u;return Object.keys||u},t.exports=u},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=Object.prototype.toString;t.exports=function(t){var e=o.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"===r(t)&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===o.call(t.callee)),n}},function(t,e,n){"use strict";var r=n(19),o=n(39),i=o("%Function.prototype.apply%"),u=o("%Function.prototype.call%"),a=o("%Reflect.apply%",!0)||r.call(u,i);t.exports=function(){return a(r,u,arguments)},t.exports.apply=function(){return a(r,i,arguments)}},function(t,e,n){"use strict";var r=n(38);t.exports=Function.prototype.bind||r},function(t,e,n){"use strict";(function(e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=e.Symbol,i=n(40);t.exports=function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"===r(o("foo"))&&("symbol"===r(Symbol("bar"))&&i())))}}).call(this,n(21))},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";var r=function(t){return t!=t};t.exports=function(t,e){return 0===t&&0===e?1/t==1/e:t===e||!(!r(t)||!r(e))}},function(t,e,n){"use strict";var r=n(22);t.exports=function(){return"function"==typeof Object.is?Object.is:r}},function(t,e,n){"use strict";var r=Object,o=TypeError;t.exports=function(){if(null!=this&&this!==r(this))throw new o("RegExp.prototype.flags getter called on non-object");var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t}},function(t,e,n){"use strict";var r=n(24),o=n(8).supportsDescriptors,i=Object.getOwnPropertyDescriptor,u=TypeError;t.exports=function(){if(!o)throw new u("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");if("gim"===/a/gim.flags){var t=i(RegExp.prototype,"flags");if(t&&"function"==typeof t.get&&"boolean"==typeof/a/.dotAll)return t.get}return r}},function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o="~";function i(){}function u(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function a(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(o=!1)),a.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)r.call(t,e)&&n.push(o?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},a.prototype.listeners=function(t,e){var n=o?o+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var i=0,u=r.length,a=new Array(u);i<u;i++)a[i]=r[i].fn;return a},a.prototype.emit=function(t,e,n,r,i,u){var a=o?o+t:t;if(!this._events[a])return!1;var s,c,l=this._events[a],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,n),!0;case 4:return l.fn.call(l.context,e,n,r),!0;case 5:return l.fn.call(l.context,e,n,r,i),!0;case 6:return l.fn.call(l.context,e,n,r,i,u),!0}for(c=1,s=new Array(f-1);c<f;c++)s[c-1]=arguments[c];l.fn.apply(l.context,s)}else{var p,h=l.length;for(c=0;c<h;c++)switch(l[c].once&&this.removeListener(t,l[c].fn,void 0,!0),f){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,e);break;case 3:l[c].fn.call(l[c].context,e,n);break;case 4:l[c].fn.call(l[c].context,e,n,r);break;default:if(!s)for(p=1,s=new Array(f-1);p<f;p++)s[p-1]=arguments[p];l[c].fn.apply(l[c].context,s)}}return!0},a.prototype.on=function(t,e,n){var r=new u(e,n||this),i=o?o+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],r]:this._events[i].push(r):(this._events[i]=r,this._eventsCount++),this},a.prototype.once=function(t,e,n){var r=new u(e,n||this,!0),i=o?o+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],r]:this._events[i].push(r):(this._events[i]=r,this._eventsCount++),this},a.prototype.removeListener=function(t,e,n,r){var u=o?o+t:t;if(!this._events[u])return this;if(!e)return 0==--this._eventsCount?this._events=new i:delete this._events[u],this;var a=this._events[u];if(a.fn)a.fn!==e||r&&!a.once||n&&a.context!==n||(0==--this._eventsCount?this._events=new i:delete this._events[u]);else{for(var s=0,c=[],l=a.length;s<l;s++)(a[s].fn!==e||r&&!a[s].once||n&&a[s].context!==n)&&c.push(a[s]);c.length?this._events[u]=1===c.length?c[0]:c:0==--this._eventsCount?this._events=new i:delete this._events[u]}return this},a.prototype.removeAllListeners=function(t){var e;return t?(e=o?o+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new i:delete this._events[e])):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prototype.setMaxListeners=function(){return this},a.prefixed=o,a.EventEmitter=a,t.exports=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.head=this.tail=null,this.length=0}return t.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.insertBefore(t[0],null),t.length>1&&this.append.apply(this,t.slice(1))},t.prototype.contains=function(t){for(var e,n=this.iterator();e=n();)if(e===t)return!0;return!1},t.prototype.insertBefore=function(t,e){t&&(t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)},t.prototype.offset=function(t){for(var e=0,n=this.head;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1},t.prototype.remove=function(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)},t.prototype.iterator=function(t){return void 0===t&&(t=this.head),function(){var e=t;return null!=t&&(t=t.next),e}},t.prototype.find=function(t,e){void 0===e&&(e=!1);for(var n,r=this.iterator();n=r();){var o=n.length();if(t<o||e&&t===o&&(null==n.next||0!==n.next.length()))return[n,t];t-=o}return[null,0]},t.prototype.forEach=function(t){for(var e,n=this.iterator();e=n();)t(e)},t.prototype.forEachAt=function(t,e,n){if(!(e<=0))for(var r,o=this.find(t),i=o[0],u=t-o[1],a=this.iterator(i);(r=a())&&u<t+e;){var s=r.length();t>u?n(r,t-u,Math.min(e,u+s-t)):n(r,0,Math.min(s,t+e-u)),u+=s}},t.prototype.map=function(t){return this.reduce((function(e,n){return e.push(t(n)),e}),[])},t.prototype.reduce=function(t,e){for(var n,r=this.iterator();n=r();)e=t(e,n);return e},t}();e.default=r},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),u=n(3),a={attributes:!0,characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},s=function(t){function e(e){var n=t.call(this,e)||this;return n.scroll=n,n.observer=new MutationObserver((function(t){n.update(t)})),n.observer.observe(n.domNode,a),n.attach(),n}return o(e,t),e.prototype.detach=function(){t.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(e,n){this.update(),0===e&&n===this.length()?this.children.forEach((function(t){t.remove()})):t.prototype.deleteAt.call(this,e,n)},e.prototype.formatAt=function(e,n,r,o){this.update(),t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){this.update(),t.prototype.insertAt.call(this,e,n,r)},e.prototype.optimize=function(e,n){var r=this;void 0===e&&(e=[]),void 0===n&&(n={}),t.prototype.optimize.call(this,n);for(var o=[].slice.call(this.observer.takeRecords());o.length>0;)e.push(o.pop());for(var a=function(t,e){void 0===e&&(e=!0),null!=t&&t!==r&&null!=t.domNode.parentNode&&(null==t.domNode[u.DATA_KEY].mutations&&(t.domNode[u.DATA_KEY].mutations=[]),e&&a(t.parent))},s=function(t){null!=t.domNode[u.DATA_KEY]&&null!=t.domNode[u.DATA_KEY].mutations&&(t instanceof i.default&&t.children.forEach(s),t.optimize(n))},c=e,l=0;c.length>0;l+=1){if(l>=100)throw new Error("[Parchment] Maximum optimize iterations reached");for(c.forEach((function(t){var e=u.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(a(u.find(t.previousSibling,!1)),[].forEach.call(t.addedNodes,(function(t){var e=u.find(t,!1);a(e,!1),e instanceof i.default&&e.children.forEach((function(t){a(t,!1)}))}))):"attributes"===t.type&&a(e.prev)),a(e))})),this.children.forEach(s),o=(c=[].slice.call(this.observer.takeRecords())).slice();o.length>0;)e.push(o.pop())}},e.prototype.update=function(e,n){var r=this;void 0===n&&(n={}),(e=e||this.observer.takeRecords()).map((function(t){var e=u.find(t.target,!0);return null==e?null:null==e.domNode[u.DATA_KEY].mutations?(e.domNode[u.DATA_KEY].mutations=[t],e):(e.domNode[u.DATA_KEY].mutations.push(t),null)})).forEach((function(t){null!=t&&t!==r&&null!=t.domNode[u.DATA_KEY]&&t.update(t.domNode[u.DATA_KEY].mutations||[],n)})),null!=this.domNode[u.DATA_KEY].mutations&&t.prototype.update.call(this,this.domNode[u.DATA_KEY].mutations,n),this.optimize(e,n)},e.blotName="scroll",e.defaultChild="block",e.scope=u.Scope.BLOCK_BLOT,e.tagName="DIV",e}(i.default);e.default=s},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),u=n(3);var a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(n){if(n.tagName!==e.tagName)return t.formats.call(this,n)},e.prototype.format=function(n,r){var o=this;n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):(this.children.forEach((function(t){t instanceof i.default||(t=t.wrap(e.blotName,!0)),o.attributes.copy(t)})),this.unwrap())},e.prototype.formatAt=function(e,n,r,o){null!=this.formats()[r]||u.query(r,u.Scope.ATTRIBUTE)?this.isolate(e,n).format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n);var r=this.formats();if(0===Object.keys(r).length)return this.unwrap();var o=this.next;o instanceof e&&o.prev===this&&function(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}(r,o.formats())&&(o.moveChildren(this),o.remove())},e.blotName="inline",e.scope=u.Scope.INLINE_BLOT,e.tagName="SPAN",e}(i.default);e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(10),u=n(3),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(n){var r=u.query(e.blotName).tagName;if(n.tagName!==r)return t.formats.call(this,n)},e.prototype.format=function(n,r){null!=u.query(n,u.Scope.BLOCK)&&(n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):this.replaceWith(e.blotName))},e.prototype.formatAt=function(e,n,r,o){null!=u.query(r,u.Scope.BLOCK)?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){if(null==r||null!=u.query(n,u.Scope.INLINE))t.prototype.insertAt.call(this,e,n,r);else{var o=this.split(e),i=u.create(n,r);o.parent.insertBefore(i,o)}},e.prototype.update=function(e,n){navigator.userAgent.match(/Trident/)?this.build():t.prototype.update.call(this,e,n)},e.blotName="block",e.scope=u.Scope.BLOCK_BLOT,e.tagName="P",e}(i.default);e.default=a},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.formats=function(t){},e.prototype.format=function(e,n){t.prototype.formatAt.call(this,0,this.length(),e,n)},e.prototype.formatAt=function(e,n,r,o){0===e&&n===this.length()?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.formats=function(){return this.statics.formats(this.domNode)},e}(n(11).default);e.default=i},function(t,e,n){"use strict";var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(11),u=n(3),a=function(t){function e(e){var n=t.call(this,e)||this;return n.text=n.statics.value(n.domNode),n}return o(e,t),e.create=function(t){return document.createTextNode(t)},e.value=function(t){var e=t.data;return e.normalize&&(e=e.normalize()),e},e.prototype.deleteAt=function(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)},e.prototype.index=function(t,e){return this.domNode===t?e:-1},e.prototype.insertAt=function(e,n,r){null==r?(this.text=this.text.slice(0,e)+n+this.text.slice(e),this.domNode.data=this.text):t.prototype.insertAt.call(this,e,n,r)},e.prototype.length=function(){return this.text.length},e.prototype.optimize=function(n){t.prototype.optimize.call(this,n),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof e&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},e.prototype.position=function(t,e){return void 0===e&&(e=!1),[this.domNode,t]},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=u.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},e.prototype.update=function(t,e){var n=this;t.some((function(t){return"characterData"===t.type&&t.target===n.domNode}))&&(this.text=this.statics.value(this.domNode))},e.prototype.value=function(){return this.text},e.blotName="text",e.scope=u.Scope.INLINE_BLOT,e}(i.default);e.default=a},function(t,e){var n=document.createElement("div");if(n.classList.toggle("test-class",!1),n.classList.contains("test-class")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return arguments.length>1&&!this.contains(t)==!e?e:r.call(this,t)}}String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var n=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length;var r=n.indexOf(t,e);return-1!==r&&r===e}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,n=Object(this),r=n.length>>>0,o=arguments[1],i=0;i<r;i++)if(e=n[i],t.call(o,e,i,n))return e}}),document.addEventListener("DOMContentLoaded",(function(){document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)}))},function(t,e){function n(t,e,u){if(t==e)return t?[[0,t]]:[];(u<0||t.length<u)&&(u=null);var s=o(t,e),c=t.substring(0,s);s=i(t=t.substring(s),e=e.substring(s));var l=t.substring(t.length-s),f=function(t,e){var u;if(!t)return[[1,e]];if(!e)return[[-1,t]];var a=t.length>e.length?t:e,s=t.length>e.length?e:t,c=a.indexOf(s);if(-1!=c)return u=[[1,a.substring(0,c)],[0,s],[1,a.substring(c+s.length)]],t.length>e.length&&(u[0][0]=u[2][0]=-1),u;if(1==s.length)return[[-1,t],[1,e]];var l=function(t,e){var n=t.length>e.length?t:e,r=t.length>e.length?e:t;if(n.length<4||2*r.length<n.length)return null;function u(t,e,n){for(var r,u,a,s,c=t.substring(n,n+Math.floor(t.length/4)),l=-1,f="";-1!=(l=e.indexOf(c,l+1));){var p=o(t.substring(n),e.substring(l)),h=i(t.substring(0,n),e.substring(0,l));f.length<h+p&&(f=e.substring(l-h,l)+e.substring(l,l+p),r=t.substring(0,n-h),u=t.substring(n+p),a=e.substring(0,l-h),s=e.substring(l+p))}return 2*f.length>=t.length?[r,u,a,s,f]:null}var a,s,c,l,f,p=u(n,r,Math.ceil(n.length/4)),h=u(n,r,Math.ceil(n.length/2));if(!p&&!h)return null;a=h?p&&p[4].length>h[4].length?p:h:p;t.length>e.length?(s=a[0],c=a[1],l=a[2],f=a[3]):(l=a[0],f=a[1],s=a[2],c=a[3]);var y=a[4];return[s,c,l,f,y]}(t,e);if(l){var f=l[0],p=l[1],h=l[2],y=l[3],d=l[4],b=n(f,h),v=n(p,y);return b.concat([[0,d]],v)}return function(t,e){for(var n=t.length,o=e.length,i=Math.ceil((n+o)/2),u=i,a=2*i,s=new Array(a),c=new Array(a),l=0;l<a;l++)s[l]=-1,c[l]=-1;s[u+1]=0,c[u+1]=0;for(var f=n-o,p=f%2!=0,h=0,y=0,d=0,b=0,v=0;v<i;v++){for(var m=-v+h;m<=v-y;m+=2){for(var g=u+m,w=(_=m==-v||m!=v&&s[g-1]<s[g+1]?s[g+1]:s[g-1]+1)-m;_<n&&w<o&&t.charAt(_)==e.charAt(w);)_++,w++;if(s[g]=_,_>n)y+=2;else if(w>o)h+=2;else if(p){if((E=u+f-m)>=0&&E<a&&-1!=c[E]){var O=n-c[E];if(_>=O)return r(t,e,_,w)}}}for(var S=-v+d;S<=v-b;S+=2){for(var E=u+S,A=(O=S==-v||S!=v&&c[E-1]<c[E+1]?c[E+1]:c[E-1]+1)-S;O<n&&A<o&&t.charAt(n-O-1)==e.charAt(o-A-1);)O++,A++;if(c[E]=O,O>n)b+=2;else if(A>o)d+=2;else if(!p){if((g=u+f-S)>=0&&g<a&&-1!=s[g]){var _=s[g];w=u+_-g;if(_>=(O=n-O))return r(t,e,_,w)}}}}return[[-1,t],[1,e]]}(t,e)}(t=t.substring(0,t.length-s),e=e.substring(0,e.length-s));return c&&f.unshift([0,c]),l&&f.push([0,l]),function t(e){e.push([0,""]);var n,r=0,u=0,a=0,s="",c="";for(;r<e.length;)switch(e[r][0]){case 1:a++,c+=e[r][1],r++;break;case-1:u++,s+=e[r][1],r++;break;case 0:u+a>1?(0!==u&&0!==a&&(0!==(n=o(c,s))&&(r-u-a>0&&0==e[r-u-a-1][0]?e[r-u-a-1][1]+=c.substring(0,n):(e.splice(0,0,[0,c.substring(0,n)]),r++),c=c.substring(n),s=s.substring(n)),0!==(n=i(c,s))&&(e[r][1]=c.substring(c.length-n)+e[r][1],c=c.substring(0,c.length-n),s=s.substring(0,s.length-n))),0===u?e.splice(r-a,u+a,[1,c]):0===a?e.splice(r-u,u+a,[-1,s]):e.splice(r-u-a,u+a,[-1,s],[1,c]),r=r-u-a+(u?1:0)+(a?1:0)+1):0!==r&&0==e[r-1][0]?(e[r-1][1]+=e[r][1],e.splice(r,1)):r++,a=0,u=0,s="",c=""}""===e[e.length-1][1]&&e.pop();var l=!1;r=1;for(;r<e.length-1;)0==e[r-1][0]&&0==e[r+1][0]&&(e[r][1].substring(e[r][1].length-e[r-1][1].length)==e[r-1][1]?(e[r][1]=e[r-1][1]+e[r][1].substring(0,e[r][1].length-e[r-1][1].length),e[r+1][1]=e[r-1][1]+e[r+1][1],e.splice(r-1,1),l=!0):e[r][1].substring(0,e[r+1][1].length)==e[r+1][1]&&(e[r-1][1]+=e[r+1][1],e[r][1]=e[r][1].substring(e[r+1][1].length)+e[r+1][1],e.splice(r+1,1),l=!0)),r++;l&&t(e)}(f),null!=u&&(f=function(t,e){var n=function(t,e){if(0===e)return[0,t];for(var n=0,r=0;r<t.length;r++){var o=t[r];if(-1===o[0]||0===o[0]){var i=n+o[1].length;if(e===i)return[r+1,t];if(e<i){t=t.slice();var u=e-n,a=[o[0],o[1].slice(0,u)],s=[o[0],o[1].slice(u)];return t.splice(r,1,a,s),[r+1,t]}n=i}}throw new Error("cursor_pos is out of bounds!")}(t,e),r=n[1],o=n[0],i=r[o],u=r[o+1];if(null==i)return t;if(0!==i[0])return t;if(null!=u&&i[1]+u[1]===u[1]+i[1])return r.splice(o,2,u,i),a(r,o,2);if(null!=u&&0===u[1].indexOf(i[1])){r.splice(o,2,[u[0],i[1]],[0,i[1]]);var s=u[1].slice(i[1].length);return s.length>0&&r.splice(o+2,0,[u[0],s]),a(r,o,3)}return t}(f,u)),f=function(t){for(var e=!1,n=function(t){return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343},r=2;r<t.length;r+=1)0===t[r-2][0]&&((o=t[r-2][1]).charCodeAt(o.length-1)>=55296&&o.charCodeAt(o.length-1)<=56319)&&-1===t[r-1][0]&&n(t[r-1][1])&&1===t[r][0]&&n(t[r][1])&&(e=!0,t[r-1][1]=t[r-2][1].slice(-1)+t[r-1][1],t[r][1]=t[r-2][1].slice(-1)+t[r][1],t[r-2][1]=t[r-2][1].slice(0,-1));var o;if(!e)return t;var i=[];for(r=0;r<t.length;r+=1)t[r][1].length>0&&i.push(t[r]);return i}(f)}function r(t,e,r,o){var i=t.substring(0,r),u=e.substring(0,o),a=t.substring(r),s=e.substring(o),c=n(i,u),l=n(a,s);return c.concat(l)}function o(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(i,o)==e.substring(i,o)?i=n=o:r=o,o=Math.floor((r-n)/2+n);return o}function i(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?i=n=o:r=o,o=Math.floor((r-n)/2+n);return o}var u=n;function a(t,e,n){for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var o=t[r],i=t[r+1];o[0]===i[1]&&t.splice(r,2,[o[0],o[1]+i[1]])}return t}u.INSERT=1,u.DELETE=-1,u.EQUAL=0,t.exports=u},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;if(!Object.keys){var i=Object.prototype.hasOwnProperty,u=Object.prototype.toString,a=n(17),s=Object.prototype.propertyIsEnumerable,c=!s.call({toString:null},"toString"),l=s.call((function(){}),"prototype"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],p=function(t){var e=t.constructor;return e&&e.prototype===t},h={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},y=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!h["$"+t]&&i.call(window,t)&&null!==window[t]&&"object"===r(window[t]))try{p(window[t])}catch(t){return!0}}catch(t){return!0}return!1}();o=function(t){var e=null!==t&&"object"===r(t),n="[object Function]"===u.call(t),o=a(t),s=e&&"[object String]"===u.call(t),h=[];if(!e&&!n&&!o)throw new TypeError("Object.keys called on a non-object");var d=l&&n;if(s&&t.length>0&&!i.call(t,0))for(var b=0;b<t.length;++b)h.push(String(b));if(o&&t.length>0)for(var v=0;v<t.length;++v)h.push(String(v));else for(var m in t)d&&"prototype"===m||!i.call(t,m)||h.push(String(m));if(c)for(var g=function(t){if("undefined"==typeof window||!y)return p(t);try{return p(t)}catch(t){return!1}}(t),w=0;w<f.length;++w)g&&"constructor"===f[w]||!i.call(t,f[w])||h.push(f[w]);return h}}t.exports=o},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="function"==typeof Symbol&&"symbol"===r(Symbol.toStringTag),i=Object.prototype.toString,u=function(t){return!(o&&t&&"object"===r(t)&&Symbol.toStringTag in t)&&"[object Arguments]"===i.call(t)},a=function(t){return!!u(t)||null!==t&&"object"===r(t)&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==i.call(t)&&"[object Function]"===i.call(t.callee)},s=function(){return u(arguments)}();u.isLegacyArguments=a,t.exports=s?u:a},function(t,e,n){"use strict";var r=n(8),o=n(18),i=n(22),u=n(23),a=n(41),s=o(u(),Object);r(s,{getPolyfill:u,implementation:i,shim:a}),t.exports=s},function(t,e,n){"use strict";var r="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==i.call(e))throw new TypeError(r+e);for(var n,u=o.call(arguments,1),a=function(){if(this instanceof n){var r=e.apply(this,u.concat(o.call(arguments)));return Object(r)===r?r:this}return e.apply(t,u.concat(o.call(arguments)))},s=Math.max(0,e.length-u.length),c=[],l=0;l<s;l++)c.push("$"+l);if(n=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(a),e.prototype){var f=function(){};f.prototype=e.prototype,n.prototype=new f,f.prototype=null}return n}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=TypeError,i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch(t){i=null}var u=function(){throw new o},a=i?function(){try{return u}catch(t){try{return i(arguments,"callee").get}catch(t){return u}}}():u,s=n(20)(),c=Object.getPrototypeOf||function(t){return t.__proto__},l=void 0,f="undefined"==typeof Uint8Array?void 0:c(Uint8Array),p={"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayBufferPrototype%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer.prototype,"%ArrayIteratorPrototype%":s?c([][Symbol.iterator]()):void 0,"%ArrayPrototype%":Array.prototype,"%ArrayProto_entries%":Array.prototype.entries,"%ArrayProto_forEach%":Array.prototype.forEach,"%ArrayProto_keys%":Array.prototype.keys,"%ArrayProto_values%":Array.prototype.values,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":void 0,"%AsyncFunctionPrototype%":void 0,"%AsyncGenerator%":void 0,"%AsyncGeneratorFunction%":void 0,"%AsyncGeneratorPrototype%":void 0,"%AsyncIteratorPrototype%":l&&s&&Symbol.asyncIterator?l[Symbol.asyncIterator]():void 0,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%Boolean%":Boolean,"%BooleanPrototype%":Boolean.prototype,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%DataViewPrototype%":"undefined"==typeof DataView?void 0:DataView.prototype,"%Date%":Date,"%DatePrototype%":Date.prototype,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%ErrorPrototype%":Error.prototype,"%eval%":eval,"%EvalError%":EvalError,"%EvalErrorPrototype%":EvalError.prototype,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float32ArrayPrototype%":"undefined"==typeof Float32Array?void 0:Float32Array.prototype,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%Float64ArrayPrototype%":"undefined"==typeof Float64Array?void 0:Float64Array.prototype,"%Function%":Function,"%FunctionPrototype%":Function.prototype,"%Generator%":void 0,"%GeneratorFunction%":void 0,"%GeneratorPrototype%":void 0,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int8ArrayPrototype%":"undefined"==typeof Int8Array?void 0:Int8Array.prototype,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int16ArrayPrototype%":"undefined"==typeof Int16Array?void 0:Int8Array.prototype,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%Int32ArrayPrototype%":"undefined"==typeof Int32Array?void 0:Int32Array.prototype,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":s?c(c([][Symbol.iterator]())):void 0,"%JSON%":"object"===("undefined"==typeof JSON?"undefined":r(JSON))?JSON:void 0,"%JSONParse%":"object"===("undefined"==typeof JSON?"undefined":r(JSON))?JSON.parse:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&s?c((new Map)[Symbol.iterator]()):void 0,"%MapPrototype%":"undefined"==typeof Map?void 0:Map.prototype,"%Math%":Math,"%Number%":Number,"%NumberPrototype%":Number.prototype,"%Object%":Object,"%ObjectPrototype%":Object.prototype,"%ObjProto_toString%":Object.prototype.toString,"%ObjProto_valueOf%":Object.prototype.valueOf,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%PromisePrototype%":"undefined"==typeof Promise?void 0:Promise.prototype,"%PromiseProto_then%":"undefined"==typeof Promise?void 0:Promise.prototype.then,"%Promise_all%":"undefined"==typeof Promise?void 0:Promise.all,"%Promise_reject%":"undefined"==typeof Promise?void 0:Promise.reject,"%Promise_resolve%":"undefined"==typeof Promise?void 0:Promise.resolve,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%RangeErrorPrototype%":RangeError.prototype,"%ReferenceError%":ReferenceError,"%ReferenceErrorPrototype%":ReferenceError.prototype,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%RegExpPrototype%":RegExp.prototype,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&s?c((new Set)[Symbol.iterator]()):void 0,"%SetPrototype%":"undefined"==typeof Set?void 0:Set.prototype,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%SharedArrayBufferPrototype%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer.prototype,"%String%":String,"%StringIteratorPrototype%":s?c(""[Symbol.iterator]()):void 0,"%StringPrototype%":String.prototype,"%Symbol%":s?Symbol:void 0,"%SymbolPrototype%":s?Symbol.prototype:void 0,"%SyntaxError%":SyntaxError,"%SyntaxErrorPrototype%":SyntaxError.prototype,"%ThrowTypeError%":a,"%TypedArray%":f,"%TypedArrayPrototype%":f?f.prototype:void 0,"%TypeError%":o,"%TypeErrorPrototype%":o.prototype,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ArrayPrototype%":"undefined"==typeof Uint8Array?void 0:Uint8Array.prototype,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint8ClampedArrayPrototype%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray.prototype,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint16ArrayPrototype%":"undefined"==typeof Uint16Array?void 0:Uint16Array.prototype,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%Uint32ArrayPrototype%":"undefined"==typeof Uint32Array?void 0:Uint32Array.prototype,"%URIError%":URIError,"%URIErrorPrototype%":URIError.prototype,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakMapPrototype%":"undefined"==typeof WeakMap?void 0:WeakMap.prototype,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet,"%WeakSetPrototype%":"undefined"==typeof WeakSet?void 0:WeakSet.prototype},h=n(19).call(Function.call,String.prototype.replace),y=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,d=/\\(\\)?/g,b=function(t){var e=[];return h(t,y,(function(t,n,r,o){e[e.length]=r?h(o,d,"$1"):n||t})),e},v=function(t,e){if(!(t in p))throw new SyntaxError("intrinsic "+t+" does not exist!");if(void 0===p[t]&&!e)throw new o("intrinsic "+t+" exists, but is not available. Please file an issue!");return p[t]};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new TypeError("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new TypeError('"allowMissing" argument must be a boolean');for(var n=b(t),r=v("%"+(n.length>0?n[0]:"")+"%",e),u=1;u<n.length;u+=1)if(null!=r)if(i&&u+1>=n.length){var a=i(r,n[u]);if(!e&&!(n[u]in r))throw new o("base intrinsic for "+t+" exists, but the property is not available.");r=a?a.get||a.value:r[n[u]]}else r=r[n[u]];return r}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"===r(Symbol.iterator))return!0;var t={},e=Symbol("test"),n=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(n))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,e);if(42!==i.value||!0!==i.enumerable)return!1}return!0}},function(t,e,n){"use strict";var r=n(23),o=n(8);t.exports=function(){var t=r();return o(Object,{is:t},{is:function(){return Object.is!==t}}),t}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o,i,u,a=n(20)()&&"symbol"===r(Symbol.toStringTag);if(a){o=Function.call.bind(RegExp.prototype.exec),i={};var s=function(){throw i};u={toString:s,valueOf:s},"symbol"===r(Symbol.toPrimitive)&&(u[Symbol.toPrimitive]=s)}var c=Object.prototype.toString;t.exports=a?function(t){if(!t||"object"!==r(t))return!1;try{o(t,u)}catch(t){return t===i}}:function(t){return!(!t||"object"!==r(t)&&"function"!=typeof t)&&"[object RegExp]"===c.call(t)}},function(t,e,n){"use strict";var r=n(8),o=n(18),i=n(24),u=n(25),a=n(44),s=o(i);r(s,{getPolyfill:u,implementation:i,shim:a}),t.exports=s},function(t,e,n){"use strict";var r=n(8).supportsDescriptors,o=n(25),i=Object.getOwnPropertyDescriptor,u=Object.defineProperty,a=TypeError,s=Object.getPrototypeOf,c=/a/;t.exports=function(){if(!r||!s)throw new a("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var t=o(),e=s(c),n=i(e,"flags");return n&&n.get===t||u(e,"flags",{configurable:!0,enumerable:!1,get:t}),t}},function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=Date.prototype.getDay,i=Object.prototype.toString,u="function"==typeof Symbol&&"symbol"===r(Symbol.toStringTag);t.exports=function(t){return"object"===r(t)&&null!==t&&(u?function(t){try{return o.call(t),!0}catch(t){return!1}}(t):"[object Date]"===i.call(t))}},function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r=n(47),o=n(48),i=n(49);function u(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(u()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=s.prototype:(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,n){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return c(this,t,e,n)}function c(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);s.TYPED_ARRAY_SUPPORT?(t=e).__proto__=s.prototype:t=p(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!s.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|y(e,n),o=(t=a(t,r)).write(e,n);o!==r&&(t=t.slice(0,o));return t}(t,e,n):function(t,e){if(s.isBuffer(e)){var n=0|h(e.length);return 0===(t=a(t,n)).length||e.copy(t,0,0,n),t}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?a(t,0):p(t,e);if("Buffer"===e.type&&i(e.data))return p(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,e){if(l(e),t=a(t,e<0?0:0|h(e)),!s.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function p(t,e){var n=e.length<0?0:0|h(e.length);t=a(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function h(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function y(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return F(t).length;default:if(r)return q(t).length;e=(""+e).toLowerCase(),r=!0}}function d(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return T(this,e,n);case"utf8":case"utf-8":return N(this,e,n);case"ascii":return x(this,e,n);case"latin1":case"binary":return k(this,e,n);case"base64":return _(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return j(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function b(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function v(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=s.from(e,r)),s.isBuffer(e))return 0===e.length?-1:m(t,e,n,r,o);if("number"==typeof e)return e&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):m(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function m(t,e,n,r,o){var i,u=1,a=t.length,s=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;u=2,a/=2,s/=2,n/=2}function c(t,e){return 1===u?t[e]:t.readUInt16BE(e*u)}if(o){var l=-1;for(i=n;i<a;i++)if(c(t,i)===c(e,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===s)return l*u}else-1!==l&&(i-=i-l),l=-1}else for(n+s>a&&(n=a-s),i=n;i>=0;i--){for(var f=!0,p=0;p<s;p++)if(c(t,i+p)!==c(e,p)){f=!1;break}if(f)return i}return-1}function g(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var u=0;u<r;++u){var a=parseInt(e.substr(2*u,2),16);if(isNaN(a))return u;t[n+u]=a}return u}function w(t,e,n,r){return K(q(e,t.length-n),t,n,r)}function O(t,e,n,r){return K(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function S(t,e,n,r){return O(t,e,n,r)}function E(t,e,n,r){return K(F(e),t,n,r)}function A(t,e,n,r){return K(function(t,e){for(var n,r,o,i=[],u=0;u<t.length&&!((e-=2)<0);++u)n=t.charCodeAt(u),r=n>>8,o=n%256,i.push(o),i.push(r);return i}(e,t.length-n),t,n,r)}function _(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function N(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i,u,a,s,c=t[o],l=null,f=c>239?4:c>223?3:c>191?2:1;if(o+f<=n)switch(f){case 1:c<128&&(l=c);break;case 2:128==(192&(i=t[o+1]))&&(s=(31&c)<<6|63&i)>127&&(l=s);break;case 3:i=t[o+1],u=t[o+2],128==(192&i)&&128==(192&u)&&(s=(15&c)<<12|(63&i)<<6|63&u)>2047&&(s<55296||s>57343)&&(l=s);break;case 4:i=t[o+1],u=t[o+2],a=t[o+3],128==(192&i)&&128==(192&u)&&128==(192&a)&&(s=(15&c)<<18|(63&i)<<12|(63&u)<<6|63&a)>65535&&s<1114112&&(l=s)}null===l?(l=65533,f=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),o+=f}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return n}(r)}e.Buffer=s,e.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},e.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=u(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,n){return c(null,t,e,n)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,n){return function(t,e,n,r){return l(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},s.allocUnsafe=function(t){return f(null,t)},s.allocUnsafeSlow=function(t){return f(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!i(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=s.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var u=t[n];if(!s.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(r,o),o+=u.length}return r},s.byteLength=y,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)b(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)b(this,e,e+3),b(this,e+1,e+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)b(this,e,e+7),b(this,e+1,e+6),b(this,e+2,e+5),b(this,e+3,e+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?N(this,0,t):d.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,n,r,o){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(this===t)return 0;for(var i=(o>>>=0)-(r>>>=0),u=(n>>>=0)-(e>>>=0),a=Math.min(i,u),c=this.slice(r,o),l=t.slice(e,n),f=0;f<a;++f)if(c[f]!==l[f]){i=c[f],u=l[f];break}return i<u?-1:u<i?1:0},s.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},s.prototype.indexOf=function(t,e,n){return v(this,t,e,n,!0)},s.prototype.lastIndexOf=function(t,e,n){return v(this,t,e,n,!1)},s.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return g(this,t,e,n);case"utf8":case"utf-8":return w(this,t,e,n);case"ascii":return O(this,t,e,n);case"latin1":case"binary":return S(this,t,e,n);case"base64":return E(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function x(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function k(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function T(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=M(t[i]);return o}function j(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function P(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function R(t,e,n,r,o,i){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function C(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function L(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function I(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function B(t,e,n,r,i){return i||I(t,0,n,4),o.write(t,e,n,r,23,4),n+4}function D(t,e,n,r,i){return i||I(t,0,n,8),o.write(t,e,n,r,52,8),n+8}s.prototype.slice=function(t,e){var n,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(e=void 0===e?r:~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),s.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=s.prototype;else{var o=e-t;n=new s(o,void 0);for(var i=0;i<o;++i)n[i]=this[i+t]}return n},s.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},s.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},s.prototype.readUInt8=function(t,e){return e||P(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||P(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||P(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||P(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||P(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*e)),r},s.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||P(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},s.prototype.readInt8=function(t,e){return e||P(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||P(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){e||P(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return e||P(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||P(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||P(t,4,this.length),o.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||P(t,4,this.length),o.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||P(t,8,this.length),o.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||P(t,8,this.length),o.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||R(this,t,e,n,Math.pow(2,8*n)-1,0);var o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||R(this,t,e,n,Math.pow(2,8*n)-1,0);var o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):L(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);R(this,t,e,n,o-1,-o)}var i=0,u=1,a=0;for(this[e]=255&t;++i<n&&(u*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+n},s.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);R(this,t,e,n,o-1,-o)}var i=n-1,u=1,a=0;for(this[e+i]=255&t;--i>=0&&(u*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/u>>0)-a&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):C(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):C(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):L(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||R(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,n){return B(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return B(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return D(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return D(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,i=r-n;if(this===t&&n<e&&e<r)for(o=i-1;o>=0;--o)t[o+e]=this[o+n];else if(i<1e3||!s.TYPED_ARRAY_SUPPORT)for(o=0;o<i;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+i),e);return i},s.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{var u=s.isBuffer(t)?t:q(new s(t,r).toString()),a=u.length;for(i=0;i<n-e;++i)this[i+e]=u[i%a]}return this};var U=/[^+\/0-9A-Za-z-_]/g;function M(t){return t<16?"0"+t.toString(16):t.toString(16)}function q(t,e){var n;e=e||1/0;for(var r=t.length,o=null,i=[],u=0;u<r;++u){if((n=t.charCodeAt(u))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(u+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function F(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(U,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function K(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}}).call(this,n(21))},function(t,e,n){"use strict";e.byteLength=function(t){var e=c(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){var e,n,r=c(t),u=r[0],a=r[1],s=new i(function(t,e,n){return 3*(e+n)/4-n}(0,u,a)),l=0,f=a>0?u-4:u;for(n=0;n<f;n+=4)e=o[t.charCodeAt(n)]<<18|o[t.charCodeAt(n+1)]<<12|o[t.charCodeAt(n+2)]<<6|o[t.charCodeAt(n+3)],s[l++]=e>>16&255,s[l++]=e>>8&255,s[l++]=255&e;2===a&&(e=o[t.charCodeAt(n)]<<2|o[t.charCodeAt(n+1)]>>4,s[l++]=255&e);1===a&&(e=o[t.charCodeAt(n)]<<10|o[t.charCodeAt(n+1)]<<4|o[t.charCodeAt(n+2)]>>2,s[l++]=e>>8&255,s[l++]=255&e);return s},e.fromByteArray=function(t){for(var e,n=t.length,o=n%3,i=[],u=0,a=n-o;u<a;u+=16383)i.push(l(t,u,u+16383>a?a:u+16383));1===o?(e=t[n-1],i.push(r[e>>2]+r[e<<4&63]+"==")):2===o&&(e=(t[n-2]<<8)+t[n-1],i.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return i.join("")};for(var r=[],o=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=u.length;a<s;++a)r[a]=u[a],o[u.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function l(t,e,n){for(var o,i,u=[],a=e;a<n;a+=3)o=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),u.push(r[(i=o)>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return u.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},function(t,e){e.read=function(t,e,n,r,o){var i,u,a=8*o-r-1,s=(1<<a)-1,c=s>>1,l=-7,f=n?o-1:0,p=n?-1:1,h=t[e+f];for(f+=p,i=h&(1<<-l)-1,h>>=-l,l+=a;l>0;i=256*i+t[e+f],f+=p,l-=8);for(u=i&(1<<-l)-1,i>>=-l,l+=r;l>0;u=256*u+t[e+f],f+=p,l-=8);if(0===i)i=1-c;else{if(i===s)return u?NaN:1/0*(h?-1:1);u+=Math.pow(2,r),i-=c}return(h?-1:1)*u*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var u,a,s,c=8*i-o-1,l=(1<<c)-1,f=l>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,h=r?0:i-1,y=r?1:-1,d=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,u=l):(u=Math.floor(Math.log(e)/Math.LN2),e*(s=Math.pow(2,-u))<1&&(u--,s*=2),(e+=u+f>=1?p/s:p*Math.pow(2,1-f))*s>=2&&(u++,s/=2),u+f>=l?(a=0,u=l):u+f>=1?(a=(e*s-1)*Math.pow(2,o),u+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),u=0));o>=8;t[n+h]=255&a,h+=y,a/=256,o-=8);for(u=u<<o|a,c+=o;c>0;t[n+h]=255&u,h+=y,u/=256,c-=8);t[n+h-y]|=128*d}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=(n(33),n(1)),u=n.n(i),a=n(6),s=n.n(a),c=n(2),l=n.n(c);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(i,t);var e,n,r,o=b(i);function i(){return p(this,i),o.apply(this,arguments)}return e=i,r=[{key:"value",value:function(){}}],(n=[{key:"insertInto",value:function(t,e){0===t.children.length?y(m(i.prototype),"insertInto",this).call(this,t,e):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}])&&h(e.prototype,n),r&&h(e,r),i}(o.a.Embed);g.blotName="break",g.tagName="BR";var w=g;function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(n,t);var e=A(n);function n(){return S(this,n),e.apply(this,arguments)}return n}(o.a.Text);function k(t){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e,n){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=I(t);if(e){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return L(this,n)}}function L(t,e){return!e||"object"!==k(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(u,t);var e,n,r,i=C(u);function u(){return T(this,u),i.apply(this,arguments)}return e=u,r=[{key:"compare",value:function(t,e){var n=u.order.indexOf(t),r=u.order.indexOf(e);return n>=0||r>=0?n-r:t===e?0:t<e?-1:1}}],(n=[{key:"formatAt",value:function(t,e,n,r){if(u.compare(this.statics.blotName,n)<0&&o.a.query(n,o.a.Scope.BLOT)){var i=this.isolate(t,e);r&&i.wrap(n,r)}else P(I(u.prototype),"formatAt",this).call(this,t,e,n,r)}},{key:"optimize",value:function(t){if(P(I(u.prototype),"optimize",this).call(this,t),this.parent instanceof u&&u.compare(this.statics.blotName,this.parent.statics.blotName)>0){var e=this.parent.isolate(this.offset(),this.length());this.moveChildren(e),e.wrap(this)}}}])&&j(e.prototype,n),r&&j(e,r),u}(o.a.Inline);B.allowedChildren=[B,o.a.Embed,x],B.order=["cursor","inline","underline","strike","italic","bold","script","link","code"];var D=B;function U(t){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F(t,e,n){return e&&q(t.prototype,e),n&&q(t,n),t}function K(t,e,n){return(K="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function Y(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&z(t,e)}function z(t,e){return(z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=V(t);if(e){var o=V(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $(this,n)}}function $(t,e){return!e||"object"!==U(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var G=function(t){Y(n,t);var e=W(n);function n(){return M(this,n),e.apply(this,arguments)}return F(n,[{key:"attach",value:function(){K(V(n.prototype),"attach",this).call(this),this.attributes=new o.a.Attributor.Store(this.domNode)}},{key:"delta",value:function(){return(new u.a).insert(this.value(),l()(this.formats(),this.attributes.values()))}},{key:"format",value:function(t,e){var n=o.a.query(t,o.a.Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}},{key:"formatAt",value:function(t,e,n,r){this.format(n,r)}},{key:"insertAt",value:function(t,e,r){if("string"==typeof e&&e.endsWith("\n")){var i=o.a.create(H.blotName);this.parent.insertBefore(i,0===t?this:this.next),i.insertAt(0,e.slice(0,-1))}else K(V(n.prototype),"insertAt",this).call(this,t,e,r)}}]),n}(o.a.Embed);G.scope=o.a.Scope.BLOCK_BLOT;var H=function(t){Y(n,t);var e=W(n);function n(t){var r;return M(this,n),(r=e.call(this,t)).cache={},r}return F(n,[{key:"delta",value:function(){return null==this.cache.delta&&(this.cache.delta=this.descendants(o.a.Leaf).reduce((function(t,e){return 0===e.length()?t:t.insert(e.value(),X(e))}),new u.a).insert("\n",X(this))),this.cache.delta}},{key:"deleteAt",value:function(t,e){K(V(n.prototype),"deleteAt",this).call(this,t,e),this.cache={}}},{key:"formatAt",value:function(t,e,r,i){e<=0||(o.a.query(r,o.a.Scope.BLOCK)?t+e===this.length()&&this.format(r,i):K(V(n.prototype),"formatAt",this).call(this,t,Math.min(e,this.length()-t-1),r,i),this.cache={})}},{key:"insertAt",value:function(t,e,r){if(null!=r)return K(V(n.prototype),"insertAt",this).call(this,t,e,r);if(0!==e.length){var o=e.split("\n"),i=o.shift();i.length>0&&(t<this.length()-1||null==this.children.tail?K(V(n.prototype),"insertAt",this).call(this,Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});var u=this;o.reduce((function(t,e){return(u=u.split(t,!0)).insertAt(0,e),e.length}),t+i.length)}}},{key:"insertBefore",value:function(t,e){var r=this.children.head;K(V(n.prototype),"insertBefore",this).call(this,t,e),r instanceof w&&r.remove(),this.cache={}}},{key:"length",value:function(){return null==this.cache.length&&(this.cache.length=K(V(n.prototype),"length",this).call(this)+1),this.cache.length}},{key:"moveChildren",value:function(t,e){K(V(n.prototype),"moveChildren",this).call(this,t,e),this.cache={}}},{key:"optimize",value:function(t){K(V(n.prototype),"optimize",this).call(this,t),this.cache={}}},{key:"path",value:function(t){return K(V(n.prototype),"path",this).call(this,t,!0)}},{key:"removeChild",value:function(t){K(V(n.prototype),"removeChild",this).call(this,t),this.cache={}}},{key:"split",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e&&(0===t||t>=this.length()-1)){var r=this.clone();return 0===t?(this.parent.insertBefore(r,this),this):(this.parent.insertBefore(r,this.next),r)}var o=K(V(n.prototype),"split",this).call(this,t,e);return this.cache={},o}}]),n}(o.a.Block);function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return null==t?e:("function"==typeof t.formats&&(e=l()(e,t.formats())),null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:X(t.parent,e))}function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function tt(t,e,n){return(tt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=at(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e)}function ot(t,e){return(ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function it(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=at(t);if(e){var o=at(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ut(this,n)}}function ut(t,e){return!e||"object"!==et(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function at(t){return(at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}H.blotName="block",H.tagName="P",H.defaultChild="break",H.allowedChildren=[D,o.a.Embed,x];var st=function(t){rt(n,t);var e=it(n);function n(){return nt(this,n),e.apply(this,arguments)}return n}(D);st.blotName="code",st.tagName="CODE";var ct=function(t){rt(a,t);var e,n,r,i=it(a);function a(){return nt(this,a),i.apply(this,arguments)}return e=a,r=[{key:"create",value:function(t){var e=tt(at(a),"create",this).call(this,t);return e.setAttribute("spellcheck",!1),e}},{key:"formats",value:function(){return!0}}],(n=[{key:"delta",value:function(){var t=this,e=this.domNode.textContent;return e.endsWith("\n")&&(e=e.slice(0,-1)),e.split("\n").reduce((function(e,n){return e.insert(n).insert("\n",t.formats())}),new u.a)}},{key:"format",value:function(t,e){if(t!==this.statics.blotName||!e){var n=J(this.descendant(x,this.length()-1),1)[0];null!=n&&n.deleteAt(n.length()-1,1),tt(at(a.prototype),"format",this).call(this,t,e)}}},{key:"formatAt",value:function(t,e,n,r){if(0!==e&&null!=o.a.query(n,o.a.Scope.BLOCK)&&(n!==this.statics.blotName||r!==this.statics.formats(this.domNode))){var i=this.newlineIndex(t);if(!(i<0||i>=t+e)){var u=this.newlineIndex(t,!0)+1,s=i-u+1,c=this.isolate(u,s),l=c.next;c.format(n,r),l instanceof a&&l.formatAt(0,t-u+e-s,n,r)}}}},{key:"insertAt",value:function(t,e,n){if(null==n){var r=J(this.descendant(x,t),2),o=r[0],i=r[1];o.insertAt(i,e)}}},{key:"length",value:function(){var t=this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n")?t:t+1}},{key:"newlineIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)return this.domNode.textContent.slice(0,t).lastIndexOf("\n");var n=this.domNode.textContent.slice(t).indexOf("\n");return n>-1?t+n:-1}},{key:"optimize",value:function(t){this.domNode.textContent.endsWith("\n")||this.appendChild(o.a.create("text","\n")),tt(at(a.prototype),"optimize",this).call(this,t);var e=this.next;null!=e&&e.prev===this&&e.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===e.statics.formats(e.domNode)&&(e.optimize(t),e.moveChildren(this),e.remove())}},{key:"replace",value:function(t){tt(at(a.prototype),"replace",this).call(this,t),[].slice.call(this.domNode.querySelectorAll("*")).forEach((function(t){var e=o.a.find(t);null==e?t.parentNode.removeChild(t):e instanceof o.a.Embed?e.remove():e.unwrap()}))}}])&&Q(e.prototype,n),r&&Q(e,r),a}(H);function lt(t){return(lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return pt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ht(t,e,n){return(ht="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=gt(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function yt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dt(t,e,n){return e&&yt(t.prototype,e),n&&yt(t,n),t}function bt(t,e){return(bt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=gt(t);if(e){var o=gt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return mt(this,n)}}function mt(t,e){return!e||"object"!==lt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function gt(t){return(gt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}ct.blotName="code-block",ct.tagName="PRE",ct.TAB="  ";var wt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&bt(t,e)}(n,t);var e=vt(n);function n(t,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,t)).selection=r,o.textNode=document.createTextNode(n.CONTENTS),o.domNode.appendChild(o.textNode),o._length=0,o}return dt(n,null,[{key:"value",value:function(){}}]),dt(n,[{key:"detach",value:function(){null!=this.parent&&this.parent.removeChild(this)}},{key:"format",value:function(t,e){if(0!==this._length)return ht(gt(n.prototype),"format",this).call(this,t,e);for(var r=this,i=0;null!=r&&r.statics.scope!==o.a.Scope.BLOCK_BLOT;)i+=r.offset(r.parent),r=r.parent;null!=r&&(this._length=n.CONTENTS.length,r.optimize(),r.formatAt(i,n.CONTENTS.length,t,e),this._length=0)}},{key:"index",value:function(t,e){return t===this.textNode?0:ht(gt(n.prototype),"index",this).call(this,t,e)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){ht(gt(n.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){if(!this.selection.composing&&null!=this.parent){var t,e,r,i=this.textNode,u=this.selection.getNativeRange();if(null!=u&&u.start.node===i&&u.end.node===i){var a=[i,u.start.offset,u.end.offset];t=a[0],e=a[1],r=a[2]}for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==n.CONTENTS){var s=this.textNode.data.split(n.CONTENTS).join("");this.next instanceof x?(t=this.next.domNode,this.next.insertAt(0,s),this.textNode.data=n.CONTENTS):(this.textNode.data=s,this.parent.insertBefore(o.a.create(this.textNode),this),this.textNode=document.createTextNode(n.CONTENTS),this.domNode.appendChild(this.textNode))}if(this.remove(),null!=e){var c=ft([e,r].map((function(e){return Math.max(0,Math.min(t.data.length,e-1))})),2);return e=c[0],r=c[1],{startNode:t,startOffset:e,endNode:t,endOffset:r}}}}},{key:"update",value:function(t,e){var n=this;if(t.some((function(t){return"characterData"===t.type&&t.target===n.textNode}))){var r=this.restore();r&&(e.range=r)}}},{key:"value",value:function(){return""}}]),n}(o.a.Embed);wt.blotName="cursor",wt.className="ql-cursor",wt.tagName="span",wt.CONTENTS="\ufeff";var Ot=wt,St=n(4),Et=n.n(St),At=n(5),_t=n.n(At);function Nt(t){return(Nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function xt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return kt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Tt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var jt=/^[ -~]*$/;function Pt(t,e){return Object.keys(e).reduce((function(n,r){return null==t[r]||(e[r]===t[r]?n[r]=e[r]:Array.isArray(e[r])?e[r].indexOf(t[r])<0&&(n[r]=e[r].concat([t[r]])):n[r]=[e[r],t[r]]),n}),{})}var Rt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scroll=e,this.delta=this.getDelta()}var e,n,r;return e=t,(n=[{key:"applyDelta",value:function(t){var e=this,n=!1;this.scroll.update();var r=this.scroll.length();return this.scroll.batchStart(),(t=function(t){return t.reduce((function(t,e){if(1===e.insert){var n=Et()(e.attributes);return delete n.image,t.insert({image:e.attributes.image},n)}if(null==e.attributes||!0!==e.attributes.list&&!0!==e.attributes.bullet||((e=Et()(e)).attributes.list?e.attributes.list="ordered":(e.attributes.list="bullet",delete e.attributes.bullet)),"string"==typeof e.insert){var r=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(r,e.attributes)}return t.push(e)}),new u.a)}(t)).reduce((function(t,i){var u=i.retain||i.delete||i.insert.length||1,a=i.attributes||{};if(null!=i.insert){if("string"==typeof i.insert){var c=i.insert;c.endsWith("\n")&&n&&(n=!1,c=c.slice(0,-1)),t>=r&&!c.endsWith("\n")&&(n=!0),e.scroll.insertAt(t,c);var f=xt(e.scroll.line(t),2),p=f[0],h=f[1],y=l()({},X(p));if(p instanceof H){var d=xt(p.descendant(o.a.Leaf,h),1)[0];y=l()(y,X(d))}a=s.a.attributes.diff(y,a)||{}}else if("object"===Nt(i.insert)){var b=Object.keys(i.insert)[0];if(null==b)return t;e.scroll.insertAt(t,b,i.insert[b])}r+=u}return Object.keys(a).forEach((function(n){e.scroll.formatAt(t,u,n,a[n])})),t+u}),0),t.reduce((function(t,n){return"number"==typeof n.delete?(e.scroll.deleteAt(t,n.delete),t):t+(n.retain||n.insert.length||1)}),0),this.scroll.batchEnd(),this.update(t)}},{key:"deleteText",value:function(t,e){return this.scroll.deleteAt(t,e),this.update((new u.a).retain(t).delete(e))}},{key:"formatLine",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.scroll.update(),Object.keys(r).forEach((function(o){if(null==n.scroll.whitelist||n.scroll.whitelist[o]){var i=n.scroll.lines(t,Math.max(e,1)),u=e;i.forEach((function(e){var i=e.length();if(e instanceof ct){var a=t-e.offset(n.scroll),s=e.newlineIndex(a+u)-a+1;e.formatAt(a,s,o,r[o])}else e.format(o,r[o]);u-=i}))}})),this.scroll.optimize(),this.update((new u.a).retain(t).retain(e,Et()(r)))}},{key:"formatText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.keys(r).forEach((function(o){n.scroll.formatAt(t,e,o,r[o])})),this.update((new u.a).retain(t).retain(e,Et()(r)))}},{key:"getContents",value:function(t,e){return this.delta.slice(t,t+e)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce((function(t,e){return t.concat(e.delta())}),new u.a)}},{key:"getFormat",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=[];0===e?this.scroll.path(t).forEach((function(t){var e=xt(t,1)[0];e instanceof H?n.push(e):e instanceof o.a.Leaf&&r.push(e)})):(n=this.scroll.lines(t,e),r=this.scroll.descendants(o.a.Leaf,t,e));var i=[n,r].map((function(t){if(0===t.length)return{};for(var e=X(t.shift());Object.keys(e).length>0;){var n=t.shift();if(null==n)return e;e=Pt(X(n),e)}return e}));return l.a.apply(l.a,i)}},{key:"getText",value:function(t,e){return this.getContents(t,e).filter((function(t){return"string"==typeof t.insert})).map((function(t){return t.insert})).join("")}},{key:"insertEmbed",value:function(t,e,n){return this.scroll.insertAt(t,e,n),this.update((new u.a).retain(t).insert(function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},e,n)))}},{key:"insertText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),Object.keys(r).forEach((function(o){n.scroll.formatAt(t,e.length,o,r[o])})),this.update((new u.a).retain(t).insert(e,Et()(r)))}},{key:"isBlank",value:function(){if(0==this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;var t=this.scroll.children.head;return t.statics.blotName===H.blotName&&!(t.children.length>1)&&t.children.head instanceof w}},{key:"removeFormat",value:function(t,e){var n=this.getText(t,e),r=xt(this.scroll.line(t+e),2),o=r[0],i=r[1],a=0,s=new u.a;null!=o&&(a=o instanceof ct?o.newlineIndex(i)-i+1:o.length()-i,s=o.delta().slice(i,i+a-1).insert("\n"));var c=this.getContents(t,e+a).diff((new u.a).insert(n).concat(s)),l=(new u.a).retain(t).concat(c);return this.applyDelta(l)}},{key:"update",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=this.delta;if(1===e.length&&"characterData"===e[0].type&&e[0].target.data.match(jt)&&o.a.find(e[0].target)){var i=o.a.find(e[0].target),a=X(i),s=i.offset(this.scroll),c=e[0].oldValue.replace(Ot.CONTENTS,""),l=(new u.a).insert(c),f=(new u.a).insert(i.value()),p=(new u.a).retain(s).concat(l.diff(f,n));t=p.reduce((function(t,e){return e.insert?t.insert(e.insert,a):t.push(e)}),new u.a),this.delta=r.compose(t)}else this.delta=this.getDelta(),t&&_t()(r.compose(t),this.delta)||(t=r.diff(this.delta,n));return t}}])&&Tt(e.prototype,n),r&&Tt(e,r),t}(),Ct=n(26),Lt=n.n(Ct),It=["error","warn","log","info"],Bt="warn";function Dt(t){if(It.indexOf(t)<=It.indexOf(Bt)){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=console)[t].apply(e,r)}}function Ut(t){return It.reduce((function(e,n){return e[n]=Dt.bind(console,n,t),e}),{})}Dt.level=Ut.level=function(t){Bt=t};var Mt=Ut;function qt(t){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ft(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Kt(t,e,n){return(Kt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$t(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function Yt(t,e){return(Yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function zt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=$t(t);if(e){var o=$t(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Wt(this,n)}}function Wt(t,e){return!e||"object"!==qt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $t(t){return($t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Vt=Mt("quill:events");["selectionchange","mousedown","mouseup","click"].forEach((function(t){document.addEventListener(t,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];[].slice.call(document.querySelectorAll(".ql-container")).forEach((function(t){var n;t.__quill&&t.__quill.emitter&&(n=t.__quill.emitter).handleDOM.apply(n,e)}))}))}));var Gt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Yt(t,e)}(i,t);var e,n,r,o=zt(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this)).listeners={},t.on("error",Vt.error),t}return e=i,(n=[{key:"emit",value:function(){Vt.log.apply(Vt,arguments),Kt($t(i.prototype),"emit",this).apply(this,arguments)}},{key:"handleDOM",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(this.listeners[t.type]||[]).forEach((function(e){var r=e.node,o=e.handler;(t.target===r||r.contains(t.target))&&o.apply(void 0,[t].concat(n))}))}},{key:"listenDOM",value:function(t,e,n){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({node:e,handler:n})}}])&&Ft(e.prototype,n),r&&Ft(e,r),i}(Lt.a);Gt.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},Gt.sources={API:"api",SILENT:"silent",USER:"user"};var Ht=Gt;function Xt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Jt=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Xt(this,t),this.quill=e,this.options=n};Jt.DEFAULTS={};var Zt=Jt;function Qt(t){return function(t){if(Array.isArray(t))return ne(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||ee(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||ee(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(t,e){if(t){if("string"==typeof t)return ne(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(t,e):void 0}}function ne(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function re(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function oe(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var ie=Mt("quill:selection"),ue=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;oe(this,t),this.index=e,this.length=n},ae=function(){function t(e,n){var r=this;oe(this,t),this.emitter=n,this.scroll=e,this.composing=!1,this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=o.a.create("cursor",this),this.lastRange=this.savedRange=new ue(0,0),this.handleComposition(),this.handleDragging(),this.emitter.listenDOM("selectionchange",document,(function(){r.mouseDown||setTimeout(r.update.bind(r,Ht.sources.USER),1)})),this.emitter.on(Ht.events.EDITOR_CHANGE,(function(t,e){t===Ht.events.TEXT_CHANGE&&e.length()>0&&r.update(Ht.sources.SILENT)})),this.emitter.on(Ht.events.SCROLL_BEFORE_UPDATE,(function(){if(r.hasFocus()){var t=r.getNativeRange();null!=t&&t.start.node!==r.cursor.textNode&&r.emitter.once(Ht.events.SCROLL_UPDATE,(function(){try{r.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset)}catch(t){}}))}})),this.emitter.on(Ht.events.SCROLL_OPTIMIZE,(function(t,e){if(e.range){var n=e.range,o=n.startNode,i=n.startOffset,u=n.endNode,a=n.endOffset;r.setNativeRange(o,i,u,a)}})),this.update(Ht.sources.SILENT)}var e,n,r;return e=t,(n=[{key:"handleComposition",value:function(){var t=this;this.root.addEventListener("compositionstart",(function(){t.composing=!0})),this.root.addEventListener("compositionend",(function(){if(t.composing=!1,t.cursor.parent){var e=t.cursor.restore();if(!e)return;setTimeout((function(){t.setNativeRange(e.startNode,e.startOffset,e.endNode,e.endOffset)}),1)}}))}},{key:"handleDragging",value:function(){var t=this;this.emitter.listenDOM("mousedown",document.body,(function(){t.mouseDown=!0})),this.emitter.listenDOM("mouseup",document.body,(function(){t.mouseDown=!1,t.update(Ht.sources.USER)}))}},{key:"focus",value:function(){this.hasFocus()||(this.root.focus(),this.setRange(this.savedRange))}},{key:"format",value:function(t,e){if(null==this.scroll.whitelist||this.scroll.whitelist[t]){this.scroll.update();var n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!o.a.query(t,o.a.Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){var r=o.a.find(n.start.node,!1);if(null==r)return;if(r instanceof o.a.Leaf){var i=r.split(n.start.offset);r.parent.insertBefore(this.cursor,i)}else r.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;var r,o=this.scroll.leaf(t),i=te(o,2),u=i[0],a=i[1];if(null==u)return null;var s=u.position(a,!0),c=te(s,2);r=c[0],a=c[1];var l=document.createRange();if(e>0){l.setStart(r,a);var f=this.scroll.leaf(t+e),p=te(f,2);if(u=p[0],a=p[1],null==u)return null;var h=u.position(a,!0),y=te(h,2);return r=y[0],a=y[1],l.setEnd(r,a),l.getBoundingClientRect()}var d,b="left";return r instanceof Text?(a<r.data.length?(l.setStart(r,a),l.setEnd(r,a+1)):(l.setStart(r,a-1),l.setEnd(r,a),b="right"),d=l.getBoundingClientRect()):(d=u.domNode.getBoundingClientRect(),a>0&&(b="right")),{bottom:d.top+d.height,height:d.height,left:d[b],right:d[b],top:d.top,width:0}}},{key:"getNativeRange",value:function(){var t=document.getSelection();if(null==t||t.rangeCount<=0)return null;var e=t.getRangeAt(0);if(null==e)return null;var n=this.normalizeNative(e);return ie.info("getNativeRange",n),n}},{key:"getRange",value:function(){var t=this.getNativeRange();return null==t?[null,null]:[this.normalizedToRange(t),t]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"normalizedToRange",value:function(t){var e=this,n=[[t.start.node,t.start.offset]];t.native.collapsed||n.push([t.end.node,t.end.offset]);var r=n.map((function(t){var n=te(t,2),r=n[0],i=n[1],u=o.a.find(r,!0),a=u.offset(e.scroll);return 0===i?a:u instanceof o.a.Container?a+u.length():a+u.index(r,i)})),i=Math.min(Math.max.apply(Math,Qt(r)),this.scroll.length()-1),u=Math.min.apply(Math,[i].concat(Qt(r)));return new ue(u,i-u)}},{key:"normalizeNative",value:function(t){if(!se(this.root,t.startContainer)||!t.collapsed&&!se(this.root,t.endContainer))return null;var e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,offset:t.endOffset},native:t};return[e.start,e.end].forEach((function(t){for(var e=t.node,n=t.offset;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],n=0;else{if(e.childNodes.length!==n)break;n=(e=e.lastChild)instanceof Text?e.data.length:e.childNodes.length+1}t.node=e,t.offset=n})),e}},{key:"rangeToNative",value:function(t){var e=this,n=t.collapsed?[t.index]:[t.index,t.index+t.length],r=[],o=this.scroll.length();return n.forEach((function(t,n){t=Math.min(o-1,t);var i,u=te(e.scroll.leaf(t),2),a=u[0],s=u[1],c=te(a.position(s,0!==n),2);i=c[0],s=c[1],r.push(i,s)})),r.length<2&&(r=r.concat(r)),r}},{key:"scrollIntoView",value:function(t){var e=this.lastRange;if(null!=e){var n=this.getBounds(e.index,e.length);if(null!=n){var r=this.scroll.length()-1,o=te(this.scroll.line(Math.min(e.index,r)),1)[0],i=o;if(e.length>0&&(i=te(this.scroll.line(Math.min(e.index+e.length,r)),1)[0]),null!=o&&null!=i){var u=t.getBoundingClientRect();n.top<u.top?t.scrollTop-=u.top-n.top:n.bottom>u.bottom&&(t.scrollTop+=n.bottom-u.bottom)}}}}},{key:"setNativeRange",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(ie.info("setNativeRange",t,e,n,r),null==t||null!=this.root.parentNode&&null!=t.parentNode&&null!=n.parentNode){var i=document.getSelection();if(null!=i)if(null!=t){this.hasFocus()||this.root.focus();var u=(this.getNativeRange()||{}).native;if(null==u||o||t!==u.startContainer||e!==u.startOffset||n!==u.endContainer||r!==u.endOffset){"BR"==t.tagName&&(e=[].indexOf.call(t.parentNode.childNodes,t),t=t.parentNode),"BR"==n.tagName&&(r=[].indexOf.call(n.parentNode.childNodes,n),n=n.parentNode);var a=document.createRange();a.setStart(t,e),a.setEnd(n,r),i.removeAllRanges(),i.addRange(a)}}else i.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ht.sources.API;if("string"==typeof e&&(n=e,e=!1),ie.info("setRange",t),null!=t){var r=this.rangeToNative(t);this.setNativeRange.apply(this,Qt(r).concat([e]))}else this.setNativeRange(null);this.update(n)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht.sources.USER,e=this.lastRange,n=this.getRange(),r=te(n,2),o=r[0],i=r[1];if(this.lastRange=o,null!=this.lastRange&&(this.savedRange=this.lastRange),!_t()(e,this.lastRange)){var u;!this.composing&&null!=i&&i.native.collapsed&&i.start.node!==this.cursor.textNode&&this.cursor.restore();var a,s=[Ht.events.SELECTION_CHANGE,Et()(this.lastRange),Et()(e),t];(u=this.emitter).emit.apply(u,[Ht.events.EDITOR_CHANGE].concat(s)),t!==Ht.sources.SILENT&&(a=this.emitter).emit.apply(a,s)}}}])&&re(e.prototype,n),r&&re(e,r),t}();function se(t,e){try{e.parentNode}catch(t){return!1}return e instanceof Text&&(e=e.parentNode),t.contains(e)}function ce(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var le=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.quill=e,this.options=n,this.modules={}}var e,n,r;return e=t,(n=[{key:"init",value:function(){var t=this;Object.keys(this.options.modules).forEach((function(e){null==t.modules[e]&&t.addModule(e)}))}},{key:"addModule",value:function(t){var e=this.quill.constructor.import("modules/".concat(t));return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}])&&ce(e.prototype,n),r&&ce(e,r),t}();le.DEFAULTS={modules:{}},le.themes={default:le};var fe=le;function pe(t){return(pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function he(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ye(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return de(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return de(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function be(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ve(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function me(t,e,n){return e&&ve(t.prototype,e),n&&ve(t,n),t}var ge=Mt("quill"),we=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(be(this,t),this.options=Oe(e,r),this.container=this.options.container,null==this.container)return ge.error("Invalid Quill container",e);this.options.debug&&t.debug(this.options.debug);var i=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,this.emitter=new Ht,this.scroll=o.a.create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new Rt(this.scroll),this.selection=new ae(this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(Ht.events.EDITOR_CHANGE,(function(t){t===Ht.events.TEXT_CHANGE&&n.root.classList.toggle("ql-blank",n.editor.isBlank())})),this.emitter.on(Ht.events.SCROLL_UPDATE,(function(t,e){var r=n.selection.lastRange,o=r&&0===r.length?r.index:void 0;Se.call(n,(function(){return n.editor.update(null,e,o)}),t)}));var u=this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">".concat(i,"<p><br></p></div>"));this.setContents(u),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return me(t,null,[{key:"debug",value:function(t){!0===t&&(t="log"),Mt.level(t)}},{key:"find",value:function(t){return t.__quill||o.a.find(t)}},{key:"import",value:function(t){return null==this.imports[t]&&ge.error("Cannot import ".concat(t,". Are you sure it was registered?")),this.imports[t]}},{key:"register",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof t){var i=t.attrName||t.blotName;"string"==typeof i?this.register("formats/"+i,t,e):Object.keys(t).forEach((function(r){n.register(r,t[r],e)}))}else null==this.imports[t]||r||ge.warn("Overwriting ".concat(t," with"),e),this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&"abstract"!==e.blotName?o.a.register(e):t.startsWith("modules")&&"function"==typeof e.register&&e.register()}}]),me(t,[{key:"addContainer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof t){var n=t;(t=document.createElement("div")).classList.add(n)}return this.container.insertBefore(t,e),t}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(t,e,n){var r=this,o=ye(Ee(t,e,n),4);return t=o[0],e=o[1],n=o[3],Se.call(this,(function(){return r.editor.deleteText(t,e)}),n,t,-1*e)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}},{key:"focus",value:function(){var t=this.scrollingContainer.scrollTop;this.selection.focus(),this.scrollingContainer.scrollTop=t,this.scrollIntoView()}},{key:"format",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ht.sources.API;return Se.call(this,(function(){var r=n.getSelection(!0),i=new u.a;if(null==r)return i;if(o.a.query(t,o.a.Scope.BLOCK))i=n.editor.formatLine(r.index,r.length,he({},t,e));else{if(0===r.length)return n.selection.format(t,e),i;i=n.editor.formatText(r.index,r.length,he({},t,e))}return n.setSelection(r,Ht.sources.SILENT),i}),r)}},{key:"formatLine",value:function(t,e,n,r,o){var i,u=this,a=ye(Ee(t,e,n,r,o),4);return t=a[0],e=a[1],i=a[2],o=a[3],Se.call(this,(function(){return u.editor.formatLine(t,e,i)}),o,t,0)}},{key:"formatText",value:function(t,e,n,r,o){var i,u=this,a=ye(Ee(t,e,n,r,o),4);return t=a[0],e=a[1],i=a[2],o=a[3],Se.call(this,(function(){return u.editor.formatText(t,e,i)}),o,t,0)}},{key:"getBounds",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e="number"==typeof t?this.selection.getBounds(t,n):this.selection.getBounds(t.index,t.length);var r=this.container.getBoundingClientRect();return{bottom:e.bottom-r.top,height:e.height,left:e.left-r.left,right:e.right-r.left,top:e.top-r.top,width:e.width}}},{key:"getContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=Ee(t,e),r=ye(n,2);return t=r[0],e=r[1],this.editor.getContents(t,e)}},{key:"getFormat",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(!0),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}},{key:"getIndex",value:function(t){return t.offset(this.scroll)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getLeaf",value:function(t){return this.scroll.leaf(t)}},{key:"getLine",value:function(t){return this.scroll.line(t)}},{key:"getLines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE;return"number"!=typeof t?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}},{key:"getModule",value:function(t){return this.theme.modules[t]}},{key:"getSelection",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=Ee(t,e),r=ye(n,2);return t=r[0],e=r[1],this.editor.getText(t,e)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(e,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.sources.API;return Se.call(this,(function(){return o.editor.insertEmbed(e,n,r)}),i,e)}},{key:"insertText",value:function(t,e,n,r,o){var i,u=this,a=ye(Ee(t,0,n,r,o),4);return t=a[0],i=a[2],o=a[3],Se.call(this,(function(){return u.editor.insertText(t,e,i)}),o,t,e.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(t,e,n){this.clipboard.dangerouslyPasteHTML(t,e,n)}},{key:"removeFormat",value:function(t,e,n){var r=this,o=ye(Ee(t,e,n),4);return t=o[0],e=o[1],n=o[3],Se.call(this,(function(){return r.editor.removeFormat(t,e)}),n,t)}},{key:"scrollIntoView",value:function(){this.selection.scrollIntoView(this.scrollingContainer)}},{key:"setContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ht.sources.API;return Se.call(this,(function(){t=new u.a(t);var n=e.getLength(),r=e.editor.deleteText(0,n),o=e.editor.applyDelta(t),i=o.ops[o.ops.length-1];return null!=i&&"string"==typeof i.insert&&"\n"===i.insert[i.insert.length-1]&&(e.editor.deleteText(e.getLength()-1,1),o.delete(1)),r.compose(o)}),n)}},{key:"setSelection",value:function(e,n,r){if(null==e)this.selection.setRange(null,n||t.sources.API);else{var o=ye(Ee(e,n,r),4);e=o[0],n=o[1],r=o[3],this.selection.setRange(new ue(e,n),r),r!==Ht.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer)}}},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ht.sources.API,n=(new u.a).insert(t);return this.setContents(n,e)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht.sources.USER,e=this.scroll.update(t);return this.selection.update(t),e}},{key:"updateContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ht.sources.API;return Se.call(this,(function(){return t=new u.a(t),e.editor.applyDelta(t,n)}),n,!0)}}]),t}();function Oe(t,e){if((e=l()(!0,{container:t,modules:{clipboard:!0,keyboard:!0,history:!0}},e)).theme&&e.theme!==we.DEFAULTS.theme){if(e.theme=we.import("themes/".concat(e.theme)),null==e.theme)throw new Error("Invalid theme ".concat(e.theme,". Did you register it?"))}else e.theme=fe;var n=l()(!0,{},e.theme.DEFAULTS);[n,e].forEach((function(t){t.modules=t.modules||{},Object.keys(t.modules).forEach((function(e){!0===t.modules[e]&&(t.modules[e]={})}))}));var r=Object.keys(n.modules).concat(Object.keys(e.modules)).reduce((function(t,e){var n=we.import("modules/".concat(e));return null==n?ge.error("Cannot load ".concat(e," module. Are you sure you registered it?")):t[e]=n.DEFAULTS||{},t}),{});return null!=e.modules&&e.modules.toolbar&&e.modules.toolbar.constructor!==Object&&(e.modules.toolbar={container:e.modules.toolbar}),e=l()(!0,{},we.DEFAULTS,{modules:r},n,e),["bounds","container","scrollingContainer"].forEach((function(t){"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))})),e.modules=Object.keys(e.modules).reduce((function(t,n){return e.modules[n]&&(t[n]=e.modules[n]),t}),{}),e}function Se(t,e,n,r){if(this.options.strict&&!this.isEnabled()&&e===Ht.sources.USER)return new u.a;var o=null==n?null:this.getSelection(),i=this.editor.delta,a=t();if(null!=o&&(!0===n&&(n=o.index),null==r?o=Ae(o,a,e):0!==r&&(o=Ae(o,n,r,e)),this.setSelection(o,Ht.sources.SILENT)),a.length()>0){var s,c,l=[Ht.events.TEXT_CHANGE,a,i,e];if((s=this.emitter).emit.apply(s,[Ht.events.EDITOR_CHANGE].concat(l)),e!==Ht.sources.SILENT)(c=this.emitter).emit.apply(c,l)}return a}function Ee(t,e,n,r,o){var i={};return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(o=r,r=n,n=e,e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(o=r,r=n,n=e,e=0),"object"===pe(n)?(i=n,o=r):"string"==typeof n&&(null!=r?i[n]=r:o=n),[t,e,i,o=o||Ht.sources.API]}function Ae(t,e,n,r){if(null==t)return null;var o,i;if(e instanceof u.a){var a=ye([t.index,t.index+t.length].map((function(t){return e.transformPosition(t,r!==Ht.sources.USER)})),2);o=a[0],i=a[1]}else{var s=ye([t.index,t.index+t.length].map((function(t){return t<e||t===e&&r===Ht.sources.USER?t:n>=0?t+n:Math.max(e,t+n)})),2);o=s[0],i=s[1]}return new ue(o,i-o)}function _e(t){return(_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ne(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function xe(t,e){return(xe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function ke(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=je(t);if(e){var o=je(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Te(this,n)}}function Te(t,e){return!e||"object"!==_e(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function je(t){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}we.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,scrollingContainer:null,strict:!0,theme:"default"},we.events=Ht.events,we.sources=Ht.sources,we.version="undefined"==typeof QUILL_VERSION?"dev":QUILL_VERSION,we.imports={delta:u.a,parchment:o.a,"core/module":Zt,"core/theme":fe};var Pe=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&xe(t,e)}(n,t);var e=ke(n);function n(){return Ne(this,n),e.apply(this,arguments)}return n}(o.a.Container);Pe.allowedChildren=[H,G,Pe];var Re=Pe;function Ce(t){return(Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Le(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ie(t,e,n){return(Ie="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=Me(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function Be(t,e){return(Be=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function De(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Me(t);if(e){var o=Me(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ue(this,n)}}function Ue(t,e){return!e||"object"!==Ce(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Me(t){return(Me=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var qe=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Be(t,e)}(u,t);var e,n,r,i=De(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t)).contentNode=document.createElement("span"),e.contentNode.setAttribute("contenteditable",!1),[].slice.call(e.domNode.childNodes).forEach((function(t){e.contentNode.appendChild(t)})),e.leftGuard=document.createTextNode("\ufeff"),e.rightGuard=document.createTextNode("\ufeff"),e.domNode.appendChild(e.leftGuard),e.domNode.appendChild(e.contentNode),e.domNode.appendChild(e.rightGuard),e}return e=u,(n=[{key:"index",value:function(t,e){return t===this.leftGuard?0:t===this.rightGuard?1:Ie(Me(u.prototype),"index",this).call(this,t,e)}},{key:"restore",value:function(t){var e,n,r=t.data.split("\ufeff").join("");if(t===this.leftGuard)if(this.prev instanceof x){var i=this.prev.length();this.prev.insertAt(i,r),e={startNode:this.prev.domNode,startOffset:i+r.length}}else n=document.createTextNode(r),this.parent.insertBefore(o.a.create(n),this),e={startNode:n,startOffset:r.length};else t===this.rightGuard&&(this.next instanceof x?(this.next.insertAt(0,r),e={startNode:this.next.domNode,startOffset:r.length}):(n=document.createTextNode(r),this.parent.insertBefore(o.a.create(n),this.next),e={startNode:n,startOffset:r.length}));return t.data="\ufeff",e}},{key:"update",value:function(t,e){var n=this;t.forEach((function(t){if("characterData"===t.type&&(t.target===n.leftGuard||t.target===n.rightGuard)){var r=n.restore(t.target);r&&(e.range=r)}}))}}])&&Le(e.prototype,n),r&&Le(e,r),u}(o.a.Embed);function Fe(t){return(Fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ke(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Ye(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ye(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ye(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ze(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function We(t,e,n){return(We="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=He(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function $e(t,e){return($e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ve(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=He(t);if(e){var o=He(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Ge(this,n)}}function Ge(t,e){return!e||"object"!==Fe(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function He(t){return(He=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Xe(t){return t instanceof H||t instanceof G}var Je=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$e(t,e)}(u,t);var e,n,r,i=Ve(u);function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t)).emitter=e.emitter,Array.isArray(e.whitelist)&&(n.whitelist=e.whitelist.reduce((function(t,e){return t[e]=!0,t}),{})),n.domNode.addEventListener("DOMNodeInserted",(function(){})),n.optimize(),n.enable(),n}return e=u,(n=[{key:"batchStart",value:function(){this.batch=!0}},{key:"batchEnd",value:function(){this.batch=!1,this.optimize()}},{key:"deleteAt",value:function(t,e){var n=Ke(this.line(t),2),r=n[0],o=n[1],i=Ke(this.line(t+e),1)[0];if(We(He(u.prototype),"deleteAt",this).call(this,t,e),null!=i&&r!==i&&o>0){if(r instanceof G||i instanceof G)return void this.optimize();if(r instanceof ct){var a=r.newlineIndex(r.length(),!0);if(a>-1&&(r=r.split(a+1))===i)return void this.optimize()}else if(i instanceof ct){var s=i.newlineIndex(0);s>-1&&i.split(s+1)}var c=i.children.head instanceof w?null:i.children.head;r.moveChildren(i,c),r.remove()}this.optimize()}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",t)}},{key:"formatAt",value:function(t,e,n,r){(null==this.whitelist||this.whitelist[n])&&(We(He(u.prototype),"formatAt",this).call(this,t,e,n,r),this.optimize())}},{key:"insertAt",value:function(t,e,n){if(null==n||null==this.whitelist||this.whitelist[e]){if(t>=this.length())if(null==n||null==o.a.query(e,o.a.Scope.BLOCK)){var r=o.a.create(this.statics.defaultChild);this.appendChild(r),null==n&&e.endsWith("\n")&&(e=e.slice(0,-1)),r.insertAt(0,e,n)}else{var i=o.a.create(e,n);this.appendChild(i)}else We(He(u.prototype),"insertAt",this).call(this,t,e,n);this.optimize()}}},{key:"insertBefore",value:function(t,e){if(t.statics.scope===o.a.Scope.INLINE_BLOT){var n=o.a.create(this.statics.defaultChild);n.appendChild(t),t=n}We(He(u.prototype),"insertBefore",this).call(this,t,e)}},{key:"leaf",value:function(t){return this.path(t).pop()||[null,-1]}},{key:"line",value:function(t){return t===this.length()?this.line(t-1):this.descendant(Xe,t)}},{key:"lines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,n=function t(e,n,r){var i=[],u=r;return e.children.forEachAt(n,r,(function(e,n,r){Xe(e)?i.push(e):e instanceof o.a.Container&&(i=i.concat(t(e,n,u))),u-=r})),i};return n(this,t,e)}},{key:"optimize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!0!==this.batch&&(We(He(u.prototype),"optimize",this).call(this,t,e),t.length>0&&this.emitter.emit(Ht.events.SCROLL_OPTIMIZE,t,e))}},{key:"path",value:function(t){return We(He(u.prototype),"path",this).call(this,t).slice(1)}},{key:"update",value:function(t){if(!0!==this.batch){var e=Ht.sources.USER;"string"==typeof t&&(e=t),Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit(Ht.events.SCROLL_BEFORE_UPDATE,e,t),We(He(u.prototype),"update",this).call(this,t.concat([])),t.length>0&&this.emitter.emit(Ht.events.SCROLL_UPDATE,e,t)}}}])&&ze(e.prototype,n),r&&ze(e,r),u}(o.a.Scroll);Je.blotName="scroll",Je.className="ql-editor",Je.tagName="DIV",Je.defaultChild="block",Je.allowedChildren=[H,G,Re];var Ze=Je;function Qe(t){return(Qe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function tn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function en(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function nn(t,e,n){return(nn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=an(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function rn(t,e){return(rn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function on(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=an(t);if(e){var o=an(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return un(this,n)}}function un(t,e){return!e||"object"!==Qe(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function an(t){return(an=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var sn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rn(t,e)}(i,t);var e,n,r,o=on(i);function i(){return tn(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"value",value:function(t){var e=nn(an(i.prototype),"value",this).call(this,t);return e.startsWith("rgb(")?(e=e.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+e.split(",").map((function(t){return("00"+parseInt(t).toString(16)).slice(-2)})).join("")):e}}])&&en(e.prototype,n),r&&en(e,r),i}(o.a.Attributor.Style),cn=(new o.a.Attributor.Class("color","ql-color",{scope:o.a.Scope.INLINE}),new sn("color","color",{scope:o.a.Scope.INLINE})),ln=(new o.a.Attributor.Class("background","ql-bg",{scope:o.a.Scope.INLINE}),new sn("background","background-color",{scope:o.a.Scope.INLINE}));function fn(t){return(fn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function pn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yn(t,e,n){return(yn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=mn(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function dn(t,e){return(dn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function bn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=mn(t);if(e){var o=mn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return vn(this,n)}}function vn(t,e){return!e||"object"!==fn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function mn(t){return(mn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var gn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&dn(t,e)}(i,t);var e,n,r,o=bn(i);function i(){return pn(this,i),o.apply(this,arguments)}return e=i,r=[{key:"create",value:function(){return yn(mn(i),"create",this).call(this)}},{key:"formats",value:function(){return!0}}],(n=[{key:"optimize",value:function(t){yn(mn(i.prototype),"optimize",this).call(this,t),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}])&&hn(e.prototype,n),r&&hn(e,r),i}(D);gn.blotName="bold",gn.tagName=["STRONG","B"];var wn=gn;function On(t){return(On="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Sn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function En(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function An(t,e,n){return(An="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=kn(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _n(t,e){return(_n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Nn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=kn(t);if(e){var o=kn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return xn(this,n)}}function xn(t,e){return!e||"object"!==On(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function kn(t){return(kn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Tn={scope:o.a.Scope.INLINE,whitelist:["serif","monospace"]},jn=(new o.a.Attributor.Class("font","ql-font",Tn),new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_n(t,e)}(i,t);var e,n,r,o=Nn(i);function i(){return Sn(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"value",value:function(t){return An(kn(i.prototype),"value",this).call(this,t).replace(/["']/g,"")}}])&&En(e.prototype,n),r&&En(e,r),i}(o.a.Attributor.Style))("font","font-family",Tn));function Pn(t){return(Pn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Rn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Cn(t,e){return(Cn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Ln(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Bn(t);if(e){var o=Bn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return In(this,n)}}function In(t,e){return!e||"object"!==Pn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Bn(t){return(Bn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Dn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Cn(t,e)}(n,t);var e=Ln(n);function n(){return Rn(this,n),e.apply(this,arguments)}return n}(wn);Dn.blotName="italic",Dn.tagName=["EM","I"];var Un=Dn;function Mn(t){return(Mn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function qn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Kn(t,e,n){return(Kn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=$n(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function Yn(t,e){return(Yn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function zn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=$n(t);if(e){var o=$n(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Wn(this,n)}}function Wn(t,e){return!e||"object"!==Mn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function $n(t){return($n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Vn=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Yn(t,e)}(i,t);var e,n,r,o=zn(i);function i(){return qn(this,i),o.apply(this,arguments)}return e=i,r=[{key:"create",value:function(t){var e=Kn($n(i),"create",this).call(this,t);return t=this.sanitize(t),e.setAttribute("href",t),e.setAttribute("rel","noopener noreferrer"),e.setAttribute("target","_blank"),e}},{key:"formats",value:function(t){return t.getAttribute("href")}},{key:"sanitize",value:function(t){return function(t,e){var n=document.createElement("a");n.href=t;var r=n.href.slice(0,n.href.indexOf(":"));return e.indexOf(r)>-1}(t,this.PROTOCOL_WHITELIST)?t:this.SANITIZED_URL}}],(n=[{key:"format",value:function(t,e){if(t!==this.statics.blotName||!e)return Kn($n(i.prototype),"format",this).call(this,t,e);e=this.constructor.sanitize(e),this.domNode.setAttribute("href",e)}}])&&Fn(e.prototype,n),r&&Fn(e,r),i}(D);function Gn(t){return(Gn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Hn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Jn(t,e,n){return(Jn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=er(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function Zn(t,e){return(Zn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Qn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=er(t);if(e){var o=er(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return tr(this,n)}}function tr(t,e){return!e||"object"!==Gn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function er(t){return(er=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Vn.blotName="link",Vn.tagName="A",Vn.SANITIZED_URL="about:blank",Vn.PROTOCOL_WHITELIST=["http","https","mailto","tel"];var nr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Zn(t,e)}(i,t);var e,n,r,o=Qn(i);function i(){return Hn(this,i),o.apply(this,arguments)}return e=i,r=[{key:"create",value:function(t){return"super"===t?document.createElement("sup"):"sub"===t?document.createElement("sub"):Jn(er(i),"create",this).call(this,t)}},{key:"formats",value:function(t){return"SUB"===t.tagName?"sub":"SUP"===t.tagName?"super":void 0}}],(n=null)&&Xn(e.prototype,n),r&&Xn(e,r),i}(D);nr.blotName="script",nr.tagName=["SUB","SUP"];var rr=nr,or=(new o.a.Attributor.Class("size","ql-size",{scope:o.a.Scope.INLINE,whitelist:["small","large","huge"]}),new o.a.Attributor.Style("size","font-size",{scope:o.a.Scope.INLINE,whitelist:["10px","18px","32px"]}));function ir(t){return(ir="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ur(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ar(t,e){return(ar=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function sr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=lr(t);if(e){var o=lr(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return cr(this,n)}}function cr(t,e){return!e||"object"!==ir(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function lr(t){return(lr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var fr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ar(t,e)}(n,t);var e=sr(n);function n(){return ur(this,n),e.apply(this,arguments)}return n}(D);fr.blotName="strike",fr.tagName="S";var pr=fr;function hr(t){return(hr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function yr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function dr(t,e){return(dr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function br(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=mr(t);if(e){var o=mr(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return vr(this,n)}}function vr(t,e){return!e||"object"!==hr(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function mr(t){return(mr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var gr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&dr(t,e)}(n,t);var e=br(n);function n(){return yr(this,n),e.apply(this,arguments)}return n}(D);gr.blotName="underline",gr.tagName="U";var wr=gr,Or={scope:o.a.Scope.BLOCK,whitelist:["right","center","justify"]},Sr=new o.a.Attributor.Attribute("align","align",Or),Er=(new o.a.Attributor.Class("align","ql-align",Or),new o.a.Attributor.Style("align","text-align",Or)),Ar={scope:o.a.Scope.BLOCK,whitelist:["rtl"]},_r=new o.a.Attributor.Attribute("direction","dir",Ar),Nr=(new o.a.Attributor.Class("direction","ql-direction",Ar),new o.a.Attributor.Style("direction","direction",Ar));function xr(t){return(xr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function kr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return jr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function jr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Pr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Rr(t,e){return(Rr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Cr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Br(t);if(e){var o=Br(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Lr(this,n)}}function Lr(t,e){return!e||"object"!==xr(e)&&"function"!=typeof e?Ir(t):e}function Ir(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Br(t){return(Br=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var Dr=Mt("quill:clipboard"),Ur="__ql-matcher",Mr=[[Node.TEXT_NODE,function(t,e){var n=t.data;if("O:P"===t.parentNode.tagName)return e.insert(n.trim());if(0===n.trim().length&&t.parentNode.classList.contains("ql-clipboard"))return e;if(!zr(t.parentNode).whiteSpace.startsWith("pre")){var r=function(t,e){return(e=e.replace(/[^\u00a0]/g,"")).length<1&&t?" ":e};n=(n=n.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,r.bind(r,!0)),(null==t.previousSibling&&$r(t.parentNode)||null!=t.previousSibling&&$r(t.previousSibling))&&(n=n.replace(/^\s+/,r.bind(r,!1))),(null==t.nextSibling&&$r(t.parentNode)||null!=t.nextSibling&&$r(t.nextSibling))&&(n=n.replace(/\s+$/,r.bind(r,!1)))}return e.insert(n)}],[Node.TEXT_NODE,Gr],["br",function(t,e){Wr(e,"\n")||e.insert("\n");return e}],[Node.ELEMENT_NODE,Gr],[Node.ELEMENT_NODE,function(t,e){var n=o.a.query(t);if(null==n)return e;if(n.prototype instanceof o.a.Embed){var r={},i=n.value(t);null!=i&&(r[n.blotName]=i,e=(new u.a).insert(r,n.formats(t)))}else"function"==typeof n.formats&&(e=Yr(e,n.blotName,n.formats(t)));return e}],[Node.ELEMENT_NODE,Hr],[Node.ELEMENT_NODE,function(t,e){var n=o.a.Attributor.Attribute.keys(t),r=o.a.Attributor.Class.keys(t),i=o.a.Attributor.Style.keys(t),u={};n.concat(r).concat(i).forEach((function(e){var n=o.a.query(e,o.a.Scope.ATTRIBUTE);null!=n&&(u[n.attrName]=n.value(t),u[n.attrName])||(null==(n=qr[e])||n.attrName!==e&&n.keyName!==e||(u[n.attrName]=n.value(t)||void 0),null==(n=Fr[e])||n.attrName!==e&&n.keyName!==e||(n=Fr[e],u[n.attrName]=n.value(t)||void 0))})),Object.keys(u).length>0&&(e=Yr(e,u));return e}],[Node.ELEMENT_NODE,function(t,e){var n={},r=t.style||{};r.fontStyle&&"italic"===zr(t).fontStyle&&(n.italic=!0);r.fontWeight&&(zr(t).fontWeight.startsWith("bold")||parseInt(zr(t).fontWeight)>=700)&&(n.bold=!0);Object.keys(n).length>0&&(e=Yr(e,n));parseFloat(r.textIndent||0)>0&&(e=(new u.a).insert("\t").concat(e));return e}],["li",function(t,e){var n=o.a.query(t);if(null==n||"list-item"!==n.blotName||!Wr(e,"\n"))return e;var r=-1,i=t.parentNode;for(;!i.classList.contains("ql-clipboard");)"list"===(o.a.query(i)||{}).blotName&&(r+=1),i=i.parentNode;return r<=0?e:e.compose((new u.a).retain(e.length()-1).retain(1,{indent:r}))}],["b",Vr.bind(Vr,"bold")],["i",Vr.bind(Vr,"italic")],["style",function(){return new u.a}]],qr=[Sr,_r].reduce((function(t,e){return t[e.keyName]=e,t}),{}),Fr=[Er,ln,cn,Nr,jn,or].reduce((function(t,e){return t[e.keyName]=e,t}),{}),Kr=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Rr(t,e)}(i,t);var e,n,r,o=Cr(i);function i(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,t,e)).quill.root.addEventListener("paste",n.onPaste.bind(Ir(n))),n.container=n.quill.addContainer("ql-clipboard"),n.container.setAttribute("contenteditable",!0),n.container.setAttribute("tabindex",-1),n.matchers=[],Mr.concat(n.options.matchers).forEach((function(t){var r=Tr(t,2),o=r[0],i=r[1];(e.matchVisual||i!==Hr)&&n.addMatcher(o,i)})),n}return e=i,(n=[{key:"addMatcher",value:function(t,e){this.matchers.push([t,e])}},{key:"convert",value:function(t){if("string"==typeof t)return this.container.innerHTML=t.replace(/\>\r?\n +\</g,"><"),this.convert();var e=this.quill.getFormat(this.quill.selection.savedRange.index);if(e[ct.blotName]){var n=this.container.innerText;return this.container.innerHTML="",(new u.a).insert(n,kr({},ct.blotName,e[ct.blotName]))}var r=Tr(this.prepareMatching(),2),o=r[0],i=r[1],a=function t(e,n,r){return e.nodeType===e.TEXT_NODE?r.reduce((function(t,n){return n(e,t)}),new u.a):e.nodeType===e.ELEMENT_NODE?[].reduce.call(e.childNodes||[],(function(o,i){var u=t(i,n,r);return i.nodeType===e.ELEMENT_NODE&&(u=n.reduce((function(t,e){return e(i,t)}),u),u=(i[Ur]||[]).reduce((function(t,e){return e(i,t)}),u)),o.concat(u)}),new u.a):new u.a}(this.container,o,i);return Wr(a,"\n")&&null==a.ops[a.ops.length-1].attributes&&(a=a.compose((new u.a).retain(a.length()-1).delete(1))),Dr.log("convert",this.container.innerHTML,a),this.container.innerHTML="",a}},{key:"dangerouslyPasteHTML",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:we.sources.API;if("string"==typeof t)this.quill.setContents(this.convert(t),e),this.quill.setSelection(0,we.sources.SILENT);else{var r=this.convert(e);this.quill.updateContents((new u.a).retain(t).concat(r),n),this.quill.setSelection(t+r.length(),we.sources.SILENT)}}},{key:"onPaste",value:function(t){var e=this;if(!t.defaultPrevented&&this.quill.isEnabled()){var n=this.quill.getSelection(),r=(new u.a).retain(n.index),o=this.quill.scrollingContainer.scrollTop;this.container.focus(),this.quill.selection.update(we.sources.SILENT),setTimeout((function(){r=r.concat(e.convert()).delete(n.length),e.quill.updateContents(r,we.sources.USER),e.quill.setSelection(r.length()-n.length,we.sources.SILENT),e.quill.scrollingContainer.scrollTop=o,e.quill.focus()}),1)}}},{key:"prepareMatching",value:function(){var t=this,e=[],n=[];return this.matchers.forEach((function(r){var o=Tr(r,2),i=o[0],u=o[1];switch(i){case Node.TEXT_NODE:n.push(u);break;case Node.ELEMENT_NODE:e.push(u);break;default:[].forEach.call(t.container.querySelectorAll(i),(function(t){t[Ur]=t[Ur]||[],t[Ur].push(u)}))}})),[e,n]}}])&&Pr(e.prototype,n),r&&Pr(e,r),i}(Zt);function Yr(t,e,n){return"object"===xr(e)?Object.keys(e).reduce((function(t,n){return Yr(t,n,e[n])}),t):t.reduce((function(t,r){return r.attributes&&r.attributes[e]?t.push(r):t.insert(r.insert,l()({},kr({},e,n),r.attributes))}),new u.a)}function zr(t){if(t.nodeType!==Node.ELEMENT_NODE)return{};return t["__ql-computed-style"]||(t["__ql-computed-style"]=window.getComputedStyle(t))}function Wr(t,e){for(var n="",r=t.ops.length-1;r>=0&&n.length<e.length;--r){var o=t.ops[r];if("string"!=typeof o.insert)break;n=o.insert+n}return n.slice(-1*e.length)===e}function $r(t){if(0===t.childNodes.length)return!1;var e=zr(t);return["block","list-item"].indexOf(e.display)>-1}function Vr(t,e,n){return Yr(n,t,!0)}function Gr(t,e){return Wr(e,"\n")||($r(t)||e.length()>0&&t.nextSibling&&$r(t.nextSibling))&&e.insert("\n"),e}function Hr(t,e){if($r(t)&&null!=t.nextElementSibling&&!Wr(e,"\n\n")){var n=t.offsetHeight+parseFloat(zr(t).marginTop)+parseFloat(zr(t).marginBottom);t.nextElementSibling.offsetTop>t.offsetTop+1.5*n&&e.insert("\n")}return e}function Xr(t){return(Xr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Jr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Zr(t,e){return(Zr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Qr(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=no(t);if(e){var o=no(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return to(this,n)}}function to(t,e){return!e||"object"!==Xr(e)&&"function"!=typeof e?eo(t):e}function eo(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function no(t){return(no=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Kr.DEFAULTS={matchers:[],matchVisual:!0};var ro=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Zr(t,e)}(u,t);var e,n,r,i=Qr(u);function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e)).lastRecorded=0,n.ignoreChange=!1,n.clear(),n.quill.on(we.events.EDITOR_CHANGE,(function(t,e,r,o){t!==we.events.TEXT_CHANGE||n.ignoreChange||(n.options.userOnly&&o!==we.sources.USER?n.transform(e):n.record(e,r))})),n.quill.keyboard.addBinding({key:"Z",shortKey:!0},n.undo.bind(eo(n))),n.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},n.redo.bind(eo(n))),/Win/i.test(navigator.platform)&&n.quill.keyboard.addBinding({key:"Y",shortKey:!0},n.redo.bind(eo(n))),n}return e=u,(n=[{key:"change",value:function(t,e){if(0!==this.stack[t].length){var n=this.stack[t].pop();this.stack[e].push(n),this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n[t],we.sources.USER),this.ignoreChange=!1;var r=function(t){var e=t.reduce((function(t,e){return t+=e.delete||0}),0),n=t.length()-e;return function(t){var e=t.ops[t.ops.length-1];return null!=e&&(null!=e.insert?"string"==typeof e.insert&&e.insert.endsWith("\n"):null!=e.attributes&&Object.keys(e.attributes).some((function(t){return null!=o.a.query(t,o.a.Scope.BLOCK)})))}(t)&&(n-=1),n}(n[t]);this.quill.setSelection(r)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"cutoff",value:function(){this.lastRecorded=0}},{key:"record",value:function(t,e){if(0!==t.ops.length){this.stack.redo=[];var n=this.quill.getContents().diff(e),r=Date.now();if(this.lastRecorded+this.options.delay>r&&this.stack.undo.length>0){var o=this.stack.undo.pop();n=n.compose(o.undo),t=o.redo.compose(t)}else this.lastRecorded=r;this.stack.undo.push({redo:t,undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(t){this.stack.undo.forEach((function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})),this.stack.redo.forEach((function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}))}},{key:"undo",value:function(){this.change("undo","redo")}}])&&Jr(e.prototype,n),r&&Jr(e,r),u}(Zt);function oo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function io(t){return(io="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function uo(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return ao(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ao(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ao(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function so(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function co(t,e,n){return e&&so(t.prototype,e),n&&so(t,n),t}function lo(t,e){return(lo=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function fo(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ho(t);if(e){var o=ho(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return po(this,n)}}function po(t,e){return!e||"object"!==io(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ho(t){return(ho=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}ro.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};var yo=Mt("quill:keyboard"),bo=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",vo=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&lo(t,e)}(n,t);var e=fo(n);function n(t,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(o=e.call(this,t,r)).bindings={},Object.keys(o.options.bindings).forEach((function(e){("list autofill"!==e||null==t.scroll.whitelist||t.scroll.whitelist.list)&&o.options.bindings[e]&&o.addBinding(o.options.bindings[e])})),o.addBinding({key:n.keys.ENTER,shiftKey:null},So),o.addBinding({key:n.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},(function(){})),/Firefox/i.test(navigator.userAgent)?(o.addBinding({key:n.keys.BACKSPACE},{collapsed:!0},go),o.addBinding({key:n.keys.DELETE},{collapsed:!0},wo)):(o.addBinding({key:n.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},go),o.addBinding({key:n.keys.DELETE},{collapsed:!0,suffix:/^.?$/},wo)),o.addBinding({key:n.keys.BACKSPACE},{collapsed:!1},Oo),o.addBinding({key:n.keys.DELETE},{collapsed:!1},Oo),o.addBinding({key:n.keys.BACKSPACE,altKey:null,ctrlKey:null,metaKey:null,shiftKey:null},{collapsed:!0,offset:0},go),o.listen(),o}return co(n,null,[{key:"match",value:function(t,e){return e=_o(e),!["altKey","ctrlKey","metaKey","shiftKey"].some((function(n){return!!e[n]!==t[n]&&null!==e[n]}))&&e.key===(t.which||t.keyCode)}}]),co(n,[{key:"addBinding",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=_o(t);if(null==r||null==r.key)return yo.warn("Attempted to add invalid keyboard binding",r);"function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),r=l()(r,e,n),this.bindings[r.key]=this.bindings[r.key]||[],this.bindings[r.key].push(r)}},{key:"listen",value:function(){var t=this;this.quill.root.addEventListener("keydown",(function(e){if(!e.defaultPrevented){var r=e.which||e.keyCode,i=(t.bindings[r]||[]).filter((function(t){return n.match(e,t)}));if(0!==i.length){var u=t.quill.getSelection();if(null!=u&&t.quill.hasFocus()){var a=uo(t.quill.getLine(u.index),2),s=a[0],c=a[1],l=uo(t.quill.getLeaf(u.index),2),f=l[0],p=l[1],h=uo(0===u.length?[f,p]:t.quill.getLeaf(u.index+u.length),2),y=h[0],d=h[1],b=f instanceof o.a.Text?f.value().slice(0,p):"",v=y instanceof o.a.Text?y.value().slice(d):"",m={collapsed:0===u.length,empty:0===u.length&&s.length()<=1,format:t.quill.getFormat(u),offset:c,prefix:b,suffix:v};i.some((function(e){if(null!=e.collapsed&&e.collapsed!==m.collapsed)return!1;if(null!=e.empty&&e.empty!==m.empty)return!1;if(null!=e.offset&&e.offset!==m.offset)return!1;if(Array.isArray(e.format)){if(e.format.every((function(t){return null==m.format[t]})))return!1}else if("object"===io(e.format)&&!Object.keys(e.format).every((function(t){return!0===e.format[t]?null!=m.format[t]:!1===e.format[t]?null==m.format[t]:_t()(e.format[t],m.format[t])})))return!1;return!(null!=e.prefix&&!e.prefix.test(m.prefix))&&(!(null!=e.suffix&&!e.suffix.test(m.suffix))&&!0!==e.handler.call(t,u,m))}))&&e.preventDefault()}}}}))}}]),n}(Zt);function mo(t,e){var n,r=t===vo.keys.LEFT?"prefix":"suffix";return oo(n={key:t,shiftKey:e,altKey:null},r,/^$/),oo(n,"handler",(function(n){var r=n.index;return t===vo.keys.RIGHT&&(r+=n.length+1),!(uo(this.quill.getLeaf(r),1)[0]instanceof o.a.Embed)||(t===vo.keys.LEFT?e?this.quill.setSelection(n.index-1,n.length+1,we.sources.USER):this.quill.setSelection(n.index-1,we.sources.USER):e?this.quill.setSelection(n.index,n.length+1,we.sources.USER):this.quill.setSelection(n.index+n.length+1,we.sources.USER),!1)})),n}function go(t,e){if(!(0===t.index||this.quill.getLength()<=1)){var n=uo(this.quill.getLine(t.index),1)[0],r={};if(0===e.offset){var o=uo(this.quill.getLine(t.index-1),1)[0];if(null!=o&&o.length()>1){var i=n.formats(),u=this.quill.getFormat(t.index-1,1);r=s.a.attributes.diff(i,u)||{}}}var a=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1;this.quill.deleteText(t.index-a,a,we.sources.USER),Object.keys(r).length>0&&this.quill.formatLine(t.index-a,a,r,we.sources.USER),this.quill.focus()}}function wo(t,e){var n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1;if(!(t.index>=this.quill.getLength()-n)){var r={},o=0,i=uo(this.quill.getLine(t.index),1)[0];if(e.offset>=i.length()-1){var u=uo(this.quill.getLine(t.index+1),1)[0];if(u){var a=i.formats(),c=this.quill.getFormat(t.index,1);r=s.a.attributes.diff(a,c)||{},o=u.length()}}this.quill.deleteText(t.index,n,we.sources.USER),Object.keys(r).length>0&&this.quill.formatLine(t.index+o-1,n,r,we.sources.USER)}}function Oo(t){var e=this.quill.getLines(t),n={};if(e.length>1){var r=e[0].formats(),o=e[e.length-1].formats();n=s.a.attributes.diff(o,r)||{}}this.quill.deleteText(t,we.sources.USER),Object.keys(n).length>0&&this.quill.formatLine(t.index,1,n,we.sources.USER),this.quill.setSelection(t.index,we.sources.SILENT),this.quill.focus()}function So(t,e){var n=this;t.length>0&&this.quill.scroll.deleteAt(t.index,t.length);var r=Object.keys(e.format).reduce((function(t,n){return o.a.query(n,o.a.Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t}),{});this.quill.insertText(t.index,"\n",r,we.sources.USER),this.quill.setSelection(t.index+1,we.sources.SILENT),this.quill.focus(),Object.keys(e.format).forEach((function(t){null==r[t]&&(Array.isArray(e.format[t])||"link"!==t&&n.quill.format(t,e.format[t],we.sources.USER))}))}function Eo(t){return{key:vo.keys.TAB,shiftKey:!t,format:{"code-block":!0},handler:function(e){var n=o.a.query("code-block"),r=e.index,i=e.length,u=uo(this.quill.scroll.descendant(n,r),2),a=u[0],s=u[1];if(null!=a){var c=this.quill.getIndex(a),l=a.newlineIndex(s,!0)+1,f=a.newlineIndex(c+s+i),p=a.domNode.textContent.slice(l,f).split("\n");s=0,p.forEach((function(e,o){t?(a.insertAt(l+s,n.TAB),s+=n.TAB.length,0===o?r+=n.TAB.length:i+=n.TAB.length):e.startsWith(n.TAB)&&(a.deleteAt(l+s,n.TAB.length),s-=n.TAB.length,0===o?r-=n.TAB.length:i-=n.TAB.length),s+=e.length+1})),this.quill.update(we.sources.USER),this.quill.setSelection(r,i,we.sources.SILENT)}}}}function Ao(t){return{key:t[0].toUpperCase(),shortKey:!0,handler:function(e,n){this.quill.format(t,!n.format[t],we.sources.USER)}}}function _o(t){if("string"==typeof t||"number"==typeof t)return _o({key:t});if("object"===io(t)&&(t=Et()(t,!1)),"string"==typeof t.key)if(null!=vo.keys[t.key.toUpperCase()])t.key=vo.keys[t.key.toUpperCase()];else{if(1!==t.key.length)return null;t.key=t.key.toUpperCase().charCodeAt(0)}return t.shortKey&&(t[bo]=t.shortKey,delete t.shortKey),t}vo.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},vo.DEFAULTS={bindings:{bold:Ao("bold"),italic:Ao("italic"),underline:Ao("underline"),indent:{key:vo.keys.TAB,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","+1",we.sources.USER)}},outdent:{key:vo.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","-1",we.sources.USER)}},"outdent backspace":{key:vo.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,altKey:null,format:["indent","list"],offset:0,handler:function(t,e){null!=e.format.indent?this.quill.format("indent","-1",we.sources.USER):null!=e.format.list&&this.quill.format("list",!1,we.sources.USER)}},"indent code-block":Eo(!0),"outdent code-block":Eo(!1),"remove tab":{key:vo.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(t){this.quill.deleteText(t.index-1,1,we.sources.USER)}},tab:{key:vo.keys.TAB,handler:function(t){this.quill.history.cutoff();var e=(new u.a).retain(t.index).delete(t.length).insert("\t");this.quill.updateContents(e,we.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index+1,we.sources.SILENT)}},"list empty enter":{key:vo.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(t,e){this.quill.format("list",!1,we.sources.USER),e.format.indent&&this.quill.format("indent",!1,we.sources.USER)}},"checklist enter":{key:vo.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(t){var e=uo(this.quill.getLine(t.index),2),n=e[0],r=e[1],o=l()({},n.formats(),{list:"checked"}),i=(new u.a).retain(t.index).insert("\n",o).retain(n.length()-r-1).retain(1,{list:"unchecked"});this.quill.updateContents(i,we.sources.USER),this.quill.setSelection(t.index+1,we.sources.SILENT),this.quill.scrollIntoView()}},"header enter":{key:vo.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(t,e){var n=uo(this.quill.getLine(t.index),2),r=n[0],o=n[1],i=(new u.a).retain(t.index).insert("\n",e.format).retain(r.length()-o-1).retain(1,{header:null});this.quill.updateContents(i,we.sources.USER),this.quill.setSelection(t.index+1,we.sources.SILENT),this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(t,e){var n,r=e.prefix.length,o=uo(this.quill.getLine(t.index),2),i=o[0],a=o[1];if(a>r)return!0;switch(e.prefix.trim()){case"[]":case"[ ]":n="unchecked";break;case"[x]":n="checked";break;case"-":case"*":n="bullet";break;default:n="ordered"}this.quill.insertText(t.index," ",we.sources.USER),this.quill.history.cutoff();var s=(new u.a).retain(t.index-a).delete(r+1).retain(i.length()-2-a).retain(1,{list:n});this.quill.updateContents(s,we.sources.USER),this.quill.history.cutoff(),this.quill.setSelection(t.index-r,we.sources.SILENT)}},"code exit":{key:vo.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,handler:function(t){var e=uo(this.quill.getLine(t.index),2),n=e[0],r=e[1],o=(new u.a).retain(t.index+n.length()-r-2).retain(1,{"code-block":null}).delete(1);this.quill.updateContents(o,we.sources.USER)}},"embed left":mo(vo.keys.LEFT,!1),"embed left shift":mo(vo.keys.LEFT,!0),"embed right":mo(vo.keys.RIGHT,!1),"embed right shift":mo(vo.keys.RIGHT,!0)}},we.register({"blots/block":H,"blots/block/embed":G,"blots/break":w,"blots/container":Re,"blots/cursor":Ot,"blots/embed":qe,"blots/inline":D,"blots/scroll":Ze,"blots/text":x,"formats/link":Vn,"formats/color":cn,"formats/font":jn,"formats/size":or,"formats/background":ln,"formats/bold":wn,"formats/italic":Un,"formats/underline":wr,"formats/strike":pr,"formats/script":rr,"modules/clipboard":Kr,"modules/history":ro,"modules/keyboard":vo}),o.a.register(H,w,Ot,D,Ze,x);e.default=we}])}));

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/_work/4/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js":
/*!**********************************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-models/lib/src/dto/gridBlockModelDto.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// DTO type definitions
// Type used for grid block rendering
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Data field aggregation (Summarize Value By) types. These types match to iiftabSx* with the exception of None.
 */
var PivotTableDataFieldAggregationType;
(function (PivotTableDataFieldAggregationType) {
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["None"] = -1] = "None";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["Sum"] = 0] = "Sum";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["Count"] = 1] = "Count";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["Average"] = 2] = "Average";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["Max"] = 3] = "Max";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["Min"] = 4] = "Min";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["Product"] = 5] = "Product";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["CountNumbers"] = 6] = "CountNumbers";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["StdDeviation"] = 7] = "StdDeviation";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["StdDeviationPercent"] = 8] = "StdDeviationPercent";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["Variant"] = 9] = "Variant";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["VariantPercent"] = 10] = "VariantPercent";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["DistinctCountPPM"] = 11] = "DistinctCountPPM";
    PivotTableDataFieldAggregationType[PivotTableDataFieldAggregationType["AggregationTypeMax"] = 11] = "AggregationTypeMax"; // should be equal to DistinctCountPPM
})(PivotTableDataFieldAggregationType = exports.PivotTableDataFieldAggregationType || (exports.PivotTableDataFieldAggregationType = {}));
/**
 * Data field format type for Show Values As.
 */
var PivotTableDataFieldFormatType;
(function (PivotTableDataFieldFormatType) {
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["None"] = -1] = "None";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["NoCalculation"] = 0] = "NoCalculation";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["DifferenceFrom"] = 1] = "DifferenceFrom";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentOf"] = 2] = "PercentOf";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentDifferenceFrom"] = 3] = "PercentDifferenceFrom";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["RunningTotalIn"] = 4] = "RunningTotalIn";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentOfRowTotal"] = 5] = "PercentOfRowTotal";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentOfColumnTotal"] = 6] = "PercentOfColumnTotal";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentOfGrandTotal"] = 7] = "PercentOfGrandTotal";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["Index"] = 8] = "Index";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentOfParentRowTotal"] = 9] = "PercentOfParentRowTotal";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentOfParentColumnTotal"] = 10] = "PercentOfParentColumnTotal";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentOfParentTotal"] = 11] = "PercentOfParentTotal";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["PercentRunningTotalIn"] = 12] = "PercentRunningTotalIn";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["RankSmallestToLargest"] = 13] = "RankSmallestToLargest";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["RankLargestToSmallest"] = 14] = "RankLargestToSmallest";
    PivotTableDataFieldFormatType[PivotTableDataFieldFormatType["DataFormatMax"] = 14] = "DataFormatMax"; // should be equal to RankLargestToSmallest
})(PivotTableDataFieldFormatType = exports.PivotTableDataFieldFormatType || (exports.PivotTableDataFieldFormatType = {}));
/**
 * Enumerates the different types of ranges.
 */
var RangeType;
(function (RangeType) {
    RangeType[RangeType["Unknown"] = 0] = "Unknown";
    RangeType[RangeType["UsedRange"] = 1] = "UsedRange";
    RangeType[RangeType["PivotTable"] = 2] = "PivotTable";
    RangeType[RangeType["Hyperlink"] = 3] = "Hyperlink";
    RangeType[RangeType["Autofilter"] = 4] = "Autofilter";
    RangeType[RangeType["DataValidation"] = 5] = "DataValidation";
    RangeType[RangeType["Sparkline"] = 6] = "Sparkline";
    RangeType[RangeType["FloatingObjectAnchor"] = 7] = "FloatingObjectAnchor";
    RangeType[RangeType["DynamicArray"] = 8] = "DynamicArray";
    RangeType[RangeType["AutoDetect"] = 9] = "AutoDetect";
})(RangeType = exports.RangeType || (exports.RangeType = {}));
/**
 * Indicates the shading style and direction
 */
var GradientShadingStyle;
(function (GradientShadingStyle) {
    // Linear gradient without any angle
    GradientShadingStyle[GradientShadingStyle["Vertical"] = 0] = "Vertical";
    // Linear gradient with 90 degree angle
    GradientShadingStyle[GradientShadingStyle["Horizontal"] = 1] = "Horizontal";
    // Linear gradient with 180 degree angle
    GradientShadingStyle[GradientShadingStyle["ReversedVertical"] = 2] = "ReversedVertical";
    // Linear gradient with 270 degree angle
    GradientShadingStyle[GradientShadingStyle["ReversedHorizontal"] = 3] = "ReversedHorizontal";
    // Linear gradient with angle between (0,90)
    GradientShadingStyle[GradientShadingStyle["DiagonalUp"] = 4] = "DiagonalUp";
    // Linear gradient with angle between (90,180)
    GradientShadingStyle[GradientShadingStyle["DiagonalDown"] = 5] = "DiagonalDown";
    // Linear gradient with angle between (180,270)
    GradientShadingStyle[GradientShadingStyle["ReversedDiagonalUp"] = 6] = "ReversedDiagonalUp";
    // Linear gradient with angle between (270,360)
    GradientShadingStyle[GradientShadingStyle["ReversedDiagonalDown"] = 7] = "ReversedDiagonalDown";
    // Path gradient
    // The bottom right corner will be colored with the first stop color.
    // The top and left edges of the cell will be colored with the second stop color.
    GradientShadingStyle[GradientShadingStyle["TopLeftCorner"] = 8] = "TopLeftCorner";
    // Path gradient
    // The bottom left corner will be colored with the first stop color.
    // The top and right edges of the cell will be colored with the second stop color.
    GradientShadingStyle[GradientShadingStyle["TopRightCorner"] = 9] = "TopRightCorner";
    // Path gradient
    // The top right corner will be colored with the first stop color.
    // The bottom and left edges of the cell will be colored with the second stop color.
    GradientShadingStyle[GradientShadingStyle["BottomLeftCorner"] = 10] = "BottomLeftCorner";
    // Path gradient
    // The top left corner will be colored with the first stop color.
    // The bottom and right edges of the cell will be colored with the second stop color.
    GradientShadingStyle[GradientShadingStyle["BottomRightCorner"] = 11] = "BottomRightCorner";
    // Path gradient
    // First stop will be located in the middle of the cell.
    // All the edges of the cell will be colored with the second stop color.
    GradientShadingStyle[GradientShadingStyle["Center"] = 12] = "Center";
})(GradientShadingStyle = exports.GradientShadingStyle || (exports.GradientShadingStyle = {}));
/**
 * Indicates the type of the background fill
 */
var BackgroundFillType;
(function (BackgroundFillType) {
    BackgroundFillType[BackgroundFillType["Solid"] = 0] = "Solid";
    BackgroundFillType[BackgroundFillType["Gradient"] = 1] = "Gradient";
})(BackgroundFillType = exports.BackgroundFillType || (exports.BackgroundFillType = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_enmReadOrder defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the text reading order
 */
var ReadingOrderType;
(function (ReadingOrderType) {
    ReadingOrderType[ReadingOrderType["Context"] = 0] = "Context";
    ReadingOrderType[ReadingOrderType["LeftToRight"] = 1] = "LeftToRight";
    ReadingOrderType[ReadingOrderType["RightToLeft"] = 2] = "RightToLeft";
})(ReadingOrderType = exports.ReadingOrderType || (exports.ReadingOrderType = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_enmHorizontalAlignment defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the text horizontal alignment
 */
var HorizontalAlignment;
(function (HorizontalAlignment) {
    HorizontalAlignment[HorizontalAlignment["Automatic"] = 0] = "Automatic";
    HorizontalAlignment[HorizontalAlignment["Left"] = 1] = "Left";
    HorizontalAlignment[HorizontalAlignment["Center"] = 2] = "Center";
    HorizontalAlignment[HorizontalAlignment["Right"] = 3] = "Right";
    HorizontalAlignment[HorizontalAlignment["Fill"] = 4] = "Fill";
    HorizontalAlignment[HorizontalAlignment["Justify"] = 5] = "Justify";
    HorizontalAlignment[HorizontalAlignment["CenterAcrossSelection"] = 6] = "CenterAcrossSelection";
    HorizontalAlignment[HorizontalAlignment["Distributed"] = 7] = "Distributed";
    HorizontalAlignment[HorizontalAlignment["JustifyDistributed"] = 8] = "JustifyDistributed";
})(HorizontalAlignment = exports.HorizontalAlignment || (exports.HorizontalAlignment = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_enmVerticalAlignment defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * and enum XFALCV defined in \xlshared\xlslib\Core\public\Core\XlAlignment.h
 * Defines the text vertical alignment
 */
var VerticalAlignment;
(function (VerticalAlignment) {
    VerticalAlignment[VerticalAlignment["Top"] = 0] = "Top";
    VerticalAlignment[VerticalAlignment["Center"] = 1] = "Center";
    VerticalAlignment[VerticalAlignment["Bottom"] = 2] = "Bottom";
    VerticalAlignment[VerticalAlignment["Justify"] = 3] = "Justify";
    VerticalAlignment[VerticalAlignment["Distributed"] = 4] = "Distributed";
})(VerticalAlignment = exports.VerticalAlignment || (exports.VerticalAlignment = {}));
/**
 * ST_cellStyleID valid values are "sD"|"hD"|0|[1-9][0-9]*
 * ST_BorderStyleID valid values are "bD"|\-[1-9][0-9]*
 * We'd like to use numeric IDs over string IDs, so this enum defines const numeric value to "sD" & "hD" values
 */
var UniqueStyleID;
(function (UniqueStyleID) {
    UniqueStyleID[UniqueStyleID["DefaultBorder"] = 0] = "DefaultBorder";
    UniqueStyleID[UniqueStyleID["Default"] = -1] = "Default";
    UniqueStyleID[UniqueStyleID["Hyperlink"] = -2] = "Hyperlink";
    UniqueStyleID[UniqueStyleID["FormulaError"] = -3] = "FormulaError";
})(UniqueStyleID = exports.UniqueStyleID || (exports.UniqueStyleID = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_ValueType defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the evaluated data type of the cell.
 */
var CellValueType;
(function (CellValueType) {
    CellValueType[CellValueType["None"] = 0] = "None";
    CellValueType[CellValueType["Number"] = 1] = "Number";
    CellValueType[CellValueType["String"] = 2] = "String";
    CellValueType[CellValueType["Boolean"] = 3] = "Boolean";
    CellValueType[CellValueType["Error"] = 4] = "Error";
})(CellValueType = exports.CellValueType || (exports.CellValueType = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_FormulaType defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the formula type.
 */
var CellFormulaType;
(function (CellFormulaType) {
    CellFormulaType[CellFormulaType["Value"] = 0] = "Value";
    CellFormulaType[CellFormulaType["Formula"] = 1] = "Formula";
    CellFormulaType[CellFormulaType["ArrayFormula"] = 2] = "ArrayFormula";
})(CellFormulaType = exports.CellFormulaType || (exports.CellFormulaType = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_enmFilterItemType defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the evaluated data type of the cell.
 */
var AutoFilterType;
(function (AutoFilterType) {
    AutoFilterType[AutoFilterType["None"] = 0] = "None";
    AutoFilterType[AutoFilterType["Filtered"] = 1] = "Filtered";
    AutoFilterType[AutoFilterType["SortedAsc"] = 2] = "SortedAsc";
    AutoFilterType[AutoFilterType["SortedDesc"] = 3] = "SortedDesc";
    AutoFilterType[AutoFilterType["SortedTop"] = 4] = "SortedTop";
    AutoFilterType[AutoFilterType["SortedBottom"] = 5] = "SortedBottom";
    AutoFilterType[AutoFilterType["BothAsc"] = 6] = "BothAsc";
    AutoFilterType[AutoFilterType["BothDesc"] = 7] = "BothDesc";
    AutoFilterType[AutoFilterType["BothTop"] = 8] = "BothTop";
    AutoFilterType[AutoFilterType["BothBottom"] = 9] = "BothBottom";
    AutoFilterType[AutoFilterType["Sorted"] = 10] = "Sorted";
    AutoFilterType[AutoFilterType["Both"] = 11] = "Both";
})(AutoFilterType = exports.AutoFilterType || (exports.AutoFilterType = {}));
/**
 * Encoding method that is used to encode the cell data.
 */
var CellsEncoding;
(function (CellsEncoding) {
    CellsEncoding[CellsEncoding["None"] = 0] = "None";
    // Replace CData markers
    CellsEncoding[CellsEncoding["CData"] = 1] = "CData";
})(CellsEncoding = exports.CellsEncoding || (exports.CellsEncoding = {}));
/**
 * Defines bitwise rendering flags
 */
var RenderFlags;
(function (RenderFlags) {
    RenderFlags[RenderFlags["None"] = 0] = "None";
    RenderFlags[RenderFlags["HasErrorRefactoring"] = 1] = "HasErrorRefactoring";
    RenderFlags[RenderFlags["BorderOnEdgeOfRenderingRegion"] = 2] = "BorderOnEdgeOfRenderingRegion";
    // Bit 2 is free to use starting from September2020
    RenderFlags[RenderFlags["EmptyPivotTable"] = 8] = "EmptyPivotTable";
    // Bit 4 is free to use starting from September2020
    // Bit 5 is free to use starting from July2020
    RenderFlags[RenderFlags["GradientFill"] = 64] = "GradientFill";
    RenderFlags[RenderFlags["Hyperlink"] = 128] = "Hyperlink";
    // Bit 8 is free to use starting from July2020
    // Bit 9 is free to use starting from July2020
    RenderFlags[RenderFlags["RichTextFormat"] = 1024] = "RichTextFormat";
    RenderFlags[RenderFlags["MeasureTextRefactor"] = 2048] = "MeasureTextRefactor";
    // Bit 12 is free to use starting from June2020
    RenderFlags[RenderFlags["AdvancedTextMetrics"] = 8192] = "AdvancedTextMetrics";
    // Bit 14 is free to use starting from July2020
    // Bit 15 is free to use starting from June2020
    // Bit 16 is free to use starting from September2020
    // Bit 17 is free to use starting from June2020
    RenderFlags[RenderFlags["NumFmtAccountingAndCustom"] = 262144] = "NumFmtAccountingAndCustom";
    RenderFlags[RenderFlags["NumFmtAndWrapText"] = 524288] = "NumFmtAndWrapText";
    // Bit 20 is free to use starting from July2020
    RenderFlags[RenderFlags["ThaiLineBreaking"] = 2097152] = "ThaiLineBreaking";
    RenderFlags[RenderFlags["CFIcons"] = 4194304] = "CFIcons";
    RenderFlags[RenderFlags["GridLineColor"] = 8388608] = "GridLineColor";
    RenderFlags[RenderFlags["WorkbookBackgroundColor"] = 16777216] = "WorkbookBackgroundColor";
    RenderFlags[RenderFlags["AdvHorizontalAlignmentFillAndCAS"] = 33554432] = "AdvHorizontalAlignmentFillAndCAS";
    RenderFlags[RenderFlags["AdvHorizontalAlignmentJustifyAndDistributed"] = 67108864] = "AdvHorizontalAlignmentJustifyAndDistributed";
    RenderFlags[RenderFlags["PageBreaks"] = 134217728] = "PageBreaks";
    RenderFlags[RenderFlags["TextBaselineRefactor"] = 268435456] = "TextBaselineRefactor";
    RenderFlags[RenderFlags["PrintArea"] = 536870912] = "PrintArea";
    RenderFlags[RenderFlags["CFIconsHighContrast"] = 1073741824] = "CFIconsHighContrast";
})(RenderFlags = exports.RenderFlags || (exports.RenderFlags = {}));
/**
 * Defines the control type of button in the auto-filter context menu.
 */
var MenuItemType;
(function (MenuItemType) {
    MenuItemType[MenuItemType["None"] = 0] = "None";
    MenuItemType[MenuItemType["Flyout"] = 1] = "Flyout";
    MenuItemType[MenuItemType["Toggle"] = 2] = "Toggle";
    MenuItemType[MenuItemType["Button"] = 3] = "Button";
})(MenuItemType = exports.MenuItemType || (exports.MenuItemType = {}));
/**
 * !!!Important!!! - this must be kept in sync with line types in \xlshared\xlslib\Core\public\Core\FormatEnums.h.
 *  Defines the Enum BorderStyle.
 */
var BorderLineType;
(function (BorderLineType) {
    BorderLineType[BorderLineType["None"] = 0] = "None";
    BorderLineType[BorderLineType["Thin"] = 1] = "Thin";
    BorderLineType[BorderLineType["Medium"] = 2] = "Medium";
    BorderLineType[BorderLineType["Dashed"] = 3] = "Dashed";
    BorderLineType[BorderLineType["Dotted"] = 4] = "Dotted";
    BorderLineType[BorderLineType["Thick"] = 5] = "Thick";
    BorderLineType[BorderLineType["Double"] = 6] = "Double";
    BorderLineType[BorderLineType["Hair"] = 7] = "Hair";
    BorderLineType[BorderLineType["MediumDashed"] = 8] = "MediumDashed";
    BorderLineType[BorderLineType["DashDot"] = 9] = "DashDot";
    BorderLineType[BorderLineType["MediumDashDot"] = 10] = "MediumDashDot";
    BorderLineType[BorderLineType["DashDotDot"] = 11] = "DashDotDot";
    BorderLineType[BorderLineType["MediumDashDotDot"] = 12] = "MediumDashDotDot";
    BorderLineType[BorderLineType["SlantDashDot"] = 13] = "SlantDashDot";
})(BorderLineType = exports.BorderLineType || (exports.BorderLineType = {}));
/**
 * !!!Important!!! - this must be kept in sync with xlshared\inc\format\tablestyleenums.h
 *  Defines the Enum BorderLinePosition.
 */
var BorderPositionType;
(function (BorderPositionType) {
    BorderPositionType[BorderPositionType["Top"] = 0] = "Top";
    BorderPositionType[BorderPositionType["Bottom"] = 1] = "Bottom";
    BorderPositionType[BorderPositionType["Left"] = 2] = "Left";
    BorderPositionType[BorderPositionType["Right"] = 3] = "Right";
    BorderPositionType[BorderPositionType["Diagonal"] = 4] = "Diagonal";
    BorderPositionType[BorderPositionType["Vertical"] = 5] = "Vertical";
    BorderPositionType[BorderPositionType["Horizontal"] = 6] = "Horizontal";
    BorderPositionType[BorderPositionType["BorderMax"] = 7] = "BorderMax";
})(BorderPositionType = exports.BorderPositionType || (exports.BorderPositionType = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_enmFontUnderline defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the underline style for cell text
 */
var FontUnderline;
(function (FontUnderline) {
    FontUnderline[FontUnderline["None"] = 0] = "None";
    FontUnderline[FontUnderline["Single"] = 1] = "Single";
    FontUnderline[FontUnderline["Double"] = 2] = "Double";
    FontUnderline[FontUnderline["SingleAccounting"] = 3] = "SingleAccounting";
    FontUnderline[FontUnderline["DoubleAccounting"] = 4] = "DoubleAccounting";
})(FontUnderline = exports.FontUnderline || (exports.FontUnderline = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_enmFontVerticalAlignment defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the vertical position of text compared to the baseline
 */
var FontVerticalAlignment;
(function (FontVerticalAlignment) {
    FontVerticalAlignment[FontVerticalAlignment["None"] = 0] = "None";
    FontVerticalAlignment[FontVerticalAlignment["Subscript"] = 1] = "Subscript";
    FontVerticalAlignment[FontVerticalAlignment["Superscript"] = 2] = "Superscript";
})(FontVerticalAlignment = exports.FontVerticalAlignment || (exports.FontVerticalAlignment = {}));
/* Outline states for RowOutlines and ColumnOutlines fields */
var OutlineState;
(function (OutlineState) {
    OutlineState[OutlineState["None"] = 0] = "None";
    OutlineState[OutlineState["Expanded"] = 1] = "Expanded";
    OutlineState[OutlineState["Collapsed"] = 2] = "Collapsed";
})(OutlineState = exports.OutlineState || (exports.OutlineState = {}));
/* Used to identify a menu entry in the client in order to map the button to icon, label etc. */
var MenuEntryIdentifier;
(function (MenuEntryIdentifier) {
    MenuEntryIdentifier[MenuEntryIdentifier["None"] = 0] = "None";
    MenuEntryIdentifier[MenuEntryIdentifier["CustomSort"] = 1] = "CustomSort";
    MenuEntryIdentifier[MenuEntryIdentifier["Filter"] = 2] = "Filter";
    MenuEntryIdentifier[MenuEntryIdentifier["SheetViewDefault"] = 3] = "SheetViewDefault";
    MenuEntryIdentifier[MenuEntryIdentifier["SheetViewTemp"] = 4] = "SheetViewTemp";
    MenuEntryIdentifier[MenuEntryIdentifier["SheetViewSwitch"] = 5] = "SheetViewSwitch";
    MenuEntryIdentifier[MenuEntryIdentifier["SheetViewMoreViews"] = 6] = "SheetViewMoreViews";
    MenuEntryIdentifier[MenuEntryIdentifier["SheetViewCreate"] = 7] = "SheetViewCreate";
    MenuEntryIdentifier[MenuEntryIdentifier["SheetViewOptions"] = 8] = "SheetViewOptions";
    MenuEntryIdentifier[MenuEntryIdentifier["GenericScript"] = 9] = "GenericScript";
    MenuEntryIdentifier[MenuEntryIdentifier["ClearFilter"] = 10] = "ClearFilter";
    MenuEntryIdentifier[MenuEntryIdentifier["ShowRichFieldsList"] = 11] = "ShowRichFieldsList";
    MenuEntryIdentifier[MenuEntryIdentifier["ShowPivotFilter"] = 12] = "ShowPivotFilter";
    MenuEntryIdentifier[MenuEntryIdentifier["SortByValue"] = 13] = "SortByValue";
    MenuEntryIdentifier[MenuEntryIdentifier["SortAscending"] = 14] = "SortAscending";
    MenuEntryIdentifier[MenuEntryIdentifier["SortDescending"] = 15] = "SortDescending";
    MenuEntryIdentifier[MenuEntryIdentifier["FieldListToReportFilter"] = 16] = "FieldListToReportFilter";
    MenuEntryIdentifier[MenuEntryIdentifier["FieldListToRowLabels"] = 17] = "FieldListToRowLabels";
    MenuEntryIdentifier[MenuEntryIdentifier["FieldListToColumnLabels"] = 18] = "FieldListToColumnLabels";
    MenuEntryIdentifier[MenuEntryIdentifier["FieldListToValues"] = 19] = "FieldListToValues";
    MenuEntryIdentifier[MenuEntryIdentifier["FieldListAddAsSlicer"] = 20] = "FieldListAddAsSlicer";
    MenuEntryIdentifier[MenuEntryIdentifier["RemoveFilter"] = 21] = "RemoveFilter";
    MenuEntryIdentifier[MenuEntryIdentifier["FilterType"] = 22] = "FilterType";
    MenuEntryIdentifier[MenuEntryIdentifier["FilterPivot"] = 23] = "FilterPivot";
    MenuEntryIdentifier[MenuEntryIdentifier["FilterSubMenu"] = 24] = "FilterSubMenu";
    MenuEntryIdentifier[MenuEntryIdentifier["FieldSubMenu"] = 25] = "FieldSubMenu";
    MenuEntryIdentifier[MenuEntryIdentifier["SheetViewSubMenu"] = 26] = "SheetViewSubMenu";
    MenuEntryIdentifier[MenuEntryIdentifier["GenericSortAscending"] = 27] = "GenericSortAscending";
    MenuEntryIdentifier[MenuEntryIdentifier["GenericSortDescending"] = 28] = "GenericSortDescending";
    MenuEntryIdentifier[MenuEntryIdentifier["RemovePivotFilter"] = 29] = "RemovePivotFilter";
})(MenuEntryIdentifier = exports.MenuEntryIdentifier || (exports.MenuEntryIdentifier = {}));
var RichValueCellType;
(function (RichValueCellType) {
    RichValueCellType[RichValueCellType["None"] = 0] = "None";
    RichValueCellType[RichValueCellType["AmbiguousLinkedEntity"] = 1] = "AmbiguousLinkedEntity";
    RichValueCellType[RichValueCellType["ConnectedLinkedEntityBlocked"] = 2] = "ConnectedLinkedEntityBlocked";
    RichValueCellType[RichValueCellType["ConnectedLinkedEntityNotBlocked"] = 3] = "ConnectedLinkedEntityNotBlocked";
    RichValueCellType[RichValueCellType["DisconnectedLinkedEntity"] = 4] = "DisconnectedLinkedEntity";
    RichValueCellType[RichValueCellType["RichError"] = 5] = "RichError";
    RichValueCellType[RichValueCellType["ImageUrl"] = 6] = "ImageUrl";
    RichValueCellType[RichValueCellType["OtherRichValue"] = 7] = "OtherRichValue";
})(RichValueCellType = exports.RichValueCellType || (exports.RichValueCellType = {}));
/**
 * !!!Important!!! - this must be kept in sync with ST_KpiSet defined in \biserver\EWR\Serialization\EcsEwaXml.xsd
 * Defines the conditional formatting icon set of the cell
 */
var CFIconSet;
(function (CFIconSet) {
    CFIconSet[CFIconSet["ThreeArrowsColored"] = 0] = "ThreeArrowsColored";
    CFIconSet[CFIconSet["ThreeArrowsGray"] = 1] = "ThreeArrowsGray";
    CFIconSet[CFIconSet["ThreeFlags"] = 2] = "ThreeFlags";
    CFIconSet[CFIconSet["ThreeTrafficLightsUnrimmed"] = 3] = "ThreeTrafficLightsUnrimmed";
    CFIconSet[CFIconSet["ThreeTrafficLightsRimmed"] = 4] = "ThreeTrafficLightsRimmed";
    CFIconSet[CFIconSet["ThreeSigns"] = 5] = "ThreeSigns";
    CFIconSet[CFIconSet["ThreeSymbolsCircled"] = 6] = "ThreeSymbolsCircled";
    CFIconSet[CFIconSet["ThreeSymbolsUncircled"] = 7] = "ThreeSymbolsUncircled";
    CFIconSet[CFIconSet["FourArrowsColored"] = 8] = "FourArrowsColored";
    CFIconSet[CFIconSet["FourArrowsGray"] = 9] = "FourArrowsGray";
    CFIconSet[CFIconSet["RedToBlack"] = 10] = "RedToBlack";
    CFIconSet[CFIconSet["FourRatings"] = 11] = "FourRatings";
    CFIconSet[CFIconSet["FourTrafficLights"] = 12] = "FourTrafficLights";
    CFIconSet[CFIconSet["FiveArrowsColored"] = 13] = "FiveArrowsColored";
    CFIconSet[CFIconSet["FiveArrowsGray"] = 14] = "FiveArrowsGray";
    CFIconSet[CFIconSet["FiveRatings"] = 15] = "FiveRatings";
    CFIconSet[CFIconSet["FiveQuarters"] = 16] = "FiveQuarters";
    CFIconSet[CFIconSet["ThreeStarts"] = 17] = "ThreeStarts";
    CFIconSet[CFIconSet["ThreeTriangles"] = 18] = "ThreeTriangles";
    CFIconSet[CFIconSet["FiveBoxes"] = 19] = "FiveBoxes";
})(CFIconSet = exports.CFIconSet || (exports.CFIconSet = {}));
//# sourceMappingURL=gridBlockModelDto.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/classedBlock.js":
/*!******************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/classedBlock.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./richTextEditorInterfaces */ "../../packages/excel-online-rte/lib/richTextEditorInterfaces.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quill */ "../../packages/excel-online-rte/lib/quill.js");



var ClassedBlock = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassedBlock, _super);
    function ClassedBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassedBlock.create = function (value) {
        var node = _super.create.call(this, value);
        node.setAttribute('class', _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_1__["RichTextEditorConstants"].editorLineClass);
        return node;
    };
    ClassedBlock.formats = function (domNode) {
        return {
            class: domNode.getAttribute('class')
        };
    };
    return ClassedBlock;
}(_quill__WEBPACK_IMPORTED_MODULE_2__["Block"]));
/* harmony default export */ __webpack_exports__["default"] = (ClassedBlock);
//# sourceMappingURL=classedBlock.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/formats/blockFormats.js":
/*!**************************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/formats/blockFormats.js ***!
  \**************************************************************************/
/*! exports provided: sizeBlock, fontNameBlock, colorBlock, boldBlock, italicBlock, strikeBlock, scriptBlock, underlineBlock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeBlock", function() { return sizeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontNameBlock", function() { return fontNameBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorBlock", function() { return colorBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boldBlock", function() { return boldBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "italicBlock", function() { return italicBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strikeBlock", function() { return strikeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scriptBlock", function() { return scriptBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "underlineBlock", function() { return underlineBlock; });
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../quill */ "../../packages/excel-online-rte/lib/quill.js");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "../../packages/excel-online-rte/lib/formats/color.js");


var sizeBlock = new _quill__WEBPACK_IMPORTED_MODULE_0__["StyleAttributor"]('sizeBlock', 'font-size', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
var fontNameBlock = new _quill__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('fontBlock', 'font-block', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
var colorBlock = new _color__WEBPACK_IMPORTED_MODULE_1__["ColorStyleAttributor"]('colorBlock', 'color', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
var boldBlock = new _quill__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('boldBlock', 'bold-block', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
var italicBlock = new _quill__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('italicBlock', 'italic-block', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
var strikeBlock = new _quill__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('strikeBlock', 'strike-block', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
// VSO#4190006 : Implement in a way that will reflect in the caret size and position
var scriptBlock = new _quill__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('scriptBlock', 'script-block', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
var underlineBlock = new _quill__WEBPACK_IMPORTED_MODULE_0__["Attributor"]('underlineBlock', 'underline-block', {
    scope: _quill__WEBPACK_IMPORTED_MODULE_0__["Scope"].BLOCK
});
/* harmony default export */ __webpack_exports__["default"] = ([sizeBlock, fontNameBlock, colorBlock, boldBlock, italicBlock, strikeBlock, scriptBlock, underlineBlock]);
//# sourceMappingURL=blockFormats.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/formats/color.js":
/*!*******************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/formats/color.js ***!
  \*******************************************************************/
/*! exports provided: ColorStyleAttributor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorStyleAttributor", function() { return ColorStyleAttributor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quill */ "../../packages/excel-online-rte/lib/quill.js");


// TODO VSO#4150588: Import to compact-quill and reuse here instead of redefining
var ColorStyleAttributor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ColorStyleAttributor, _super);
    function ColorStyleAttributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, attrName, keyName, options) || this;
    }
    ColorStyleAttributor.prototype.value = function (node) {
        var value = _super.prototype.value.call(this, node);
        var matches = value.match(/rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/);
        if (!matches)
            return value;
        var hex = matches
            .slice(1)
            .map(function (component) { return ("00" + parseInt(component, 10).toString(16)).slice(-2); })
            .join('');
        return "#" + hex;
    };
    return ColorStyleAttributor;
}(_quill__WEBPACK_IMPORTED_MODULE_1__["StyleAttributor"]));

//# sourceMappingURL=color.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/formats/font.js":
/*!******************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/formats/font.js ***!
  \******************************************************************/
/*! exports provided: FontStyleAttributor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontStyleAttributor", function() { return FontStyleAttributor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quill */ "../../packages/excel-online-rte/lib/quill.js");


var FontStyleAttributor = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FontStyleAttributor, _super);
    function FontStyleAttributor(attrName, keyName, options) {
        if (options === void 0) { options = {}; }
        return _super.call(this, attrName, keyName, options) || this;
    }
    FontStyleAttributor.prototype.value = function (node) {
        return _super.prototype.value.call(this, node).replace(/["']/g, '');
    };
    return FontStyleAttributor;
}(_quill__WEBPACK_IMPORTED_MODULE_1__["StyleAttributor"]));

//# sourceMappingURL=font.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/helpers.js":
/*!*************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/helpers.js ***!
  \*************************************************************/
/*! exports provided: fontToQuillStringMap, quillStringMapToFont, formattedTextToQuillDelta, extractInlineFormat, extractBlockFormat, filterFormats, textToQuillInsertDelta, LineSelectionLocation, KeyCode, fallbackDefaultFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontToQuillStringMap", function() { return fontToQuillStringMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quillStringMapToFont", function() { return quillStringMapToFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattedTextToQuillDelta", function() { return formattedTextToQuillDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractInlineFormat", function() { return extractInlineFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractBlockFormat", function() { return extractBlockFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterFormats", function() { return filterFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textToQuillInsertDelta", function() { return textToQuillInsertDelta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineSelectionLocation", function() { return LineSelectionLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCode", function() { return KeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackDefaultFont", function() { return fallbackDefaultFont; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
/* harmony import */ var _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/office-online-telemetry */ "../../packages/office-online-telemetry/lib/index.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quill */ "../../packages/excel-online-rte/lib/quill.js");




/**
 * Turns a font object to quill attributes;
 * If the font is undefined, we return empty attributes
 *
 * @export
 * @param {Font} [font] The font to transform
 * @param {boolean} [useBlockAttributes=false] Determines whether to return block attributes
 * @returns {Quill.StringMap}
 */
function fontToQuillStringMap(font, useBlockAttributes) {
    if (useBlockAttributes === void 0) { useBlockAttributes = false; }
    var attributes = font ? getQuillStringMapFromFont(font) : emptyQuillAttributes;
    return useBlockAttributes ? inlineToBlock(attributes) : attributes;
}
/**
 * Turns quill attributes into a Font object
 *
 * @export
 * @param {Quill.StringMap } attributes The attributes to transform
 * @param {number} fontID The font ID
 * @returns {Font | undefined}
 */
function quillStringMapToFont(attributes, fontID) {
    return getFontFromQuillStringMap(extractInlineFormat(attributes), fontID);
}
/**
 * Turns formatted text into a quill delta
 *
 * @export
 * @param {string} callerName Used for logging purposes
 * @param {FormattedText} formattedText The given formatted text
 * @param {Font} defaultFont Font to fallback to
 * @returns {Quill.DeltaStatic}
 */
function formattedTextToQuillDelta(callerName, formattedText, defaultFont) {
    var delta = new _quill__WEBPACK_IMPORTED_MODULE_3__["Delta"]();
    if (!formattedText) {
        _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["ULS"].shipAssertTag(0x235de3c8 /* tag_9x4pi */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["LogCategory"].msoulscat_ES_EWAJSGrid, false, callerName + ": formattedText is null or undefined");
        return delta;
    }
    var text = formattedText.Text, textRuns = formattedText.TextRuns, fonts = formattedText.Fonts;
    text = text.replace(/\r\n/g, '\n');
    if (!textRuns || !fonts) {
        _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["ULS"].shipAssertTag(0x235de3c9 /* tag_9x4pj */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["LogCategory"].msoulscat_ES_EWAJSGrid, false, callerName + ": Missing parameters: textRuns = " + !textRuns + ", fonts = " + !fonts);
        // Fallback to default font
        return delta.insert(text, getQuillStringMapFromFont(defaultFont));
    }
    // Translate all relevant fonts to quill attributes
    var quillAttributes = [];
    fonts.forEach(function (font, index) {
        quillAttributes[index] = getQuillStringMapFromFont(font);
    });
    var isAfterText = false;
    textRuns.forEach(function (textRun, index, textRuns) {
        var endIndex = index < textRuns.length - 1 ? textRuns[index + 1].StartIndex : text.length;
        var runText = text.substring(textRun.StartIndex, endIndex);
        delta = delta.concat(textToQuillInsertDelta(runText, quillAttributes[textRun.FontID], isAfterText));
        isAfterText = !runText.endsWith('\n');
    });
    return delta;
}
/**
 * Transforms a given format to inline style formats
 * All inline formats will be kept, and block formats will be appended as inline formats
 *
 * @export
 * @param {Quill.StringMap} format Given format
 * @returns {Quill.StringMap} All style formats as inline formats
 */
function extractInlineFormat(format) {
    // For block formats, we only want to try and translate attributors
    var blockFormats = filterFormats(format, _quill__WEBPACK_IMPORTED_MODULE_3__["Scope"].BLOCK_ATTRIBUTE);
    var inlineFormats = filterFormats(format, _quill__WEBPACK_IMPORTED_MODULE_3__["Scope"].INLINE);
    // TODO VSO#4224440: For now, we are not expected to have both inline and block formats.
    // Coming Slice 3, when formatted on a collapsed selection, this will be possible and dealt with.
    _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["ULS"].shipAssertTag(0x233d7083 /* tag_9pxcd */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["LogCategory"].msoulscat_ES_EWAJSGrid, Object.keys(blockFormats).length <= 1 || Object.keys(inlineFormats).length === 0, "richTextEditor.extractInlineFormat: unexpected to have both block:" + Object.keys(blockFormats) + " and inline:" + Object.keys(inlineFormats) + " formats");
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, blockToInline(blockFormats)), inlineFormats);
}
/**
 * Transforms a given format to block style formats
 * All block formats will be kept, and inline formats will be appended as block formats
 *
 * @export
 * @param {Quill.StringMap} format Given format
 * @returns {Quill.StringMap} All style formats as block formats
 */
function extractBlockFormat(format) {
    var blockFormats = filterFormats(format, _quill__WEBPACK_IMPORTED_MODULE_3__["Scope"].BLOCK);
    var inlineFormats = filterFormats(format, _quill__WEBPACK_IMPORTED_MODULE_3__["Scope"].INLINE);
    // TODO VSO#4224440: For now, we are not expected to have both inline and block formats.
    // Coming Slice 3, when formatted on a collapsed selection, this will be possible and dealt with.
    _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["ULS"].shipAssertTag(0x233d7084 /* tag_9pxce */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["LogCategory"].msoulscat_ES_EWAJSGrid, Object.keys(blockFormats).length <= 1 || Object.keys(inlineFormats).length === 0, "richTextEditor.extractBlockFormat: unexpected to have both block:" + Object.keys(blockFormats) + " and inline:" + Object.keys(inlineFormats) + " formats");
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, inlineToBlock(inlineFormats)), blockFormats);
}
/**
 * Filters the formats according to a given scope
 *
 * @export
 * @param {Quill.StringMap} formats
 * @param {typeof Scope} scope
 * @returns {Quill.StringMap}
 */
function filterFormats(formats, scope) {
    return Object.keys(formats)
        .filter(function (format) { return _quill__WEBPACK_IMPORTED_MODULE_3__["Parchment"].query(format, scope); })
        .reduce(function (resultFormats, format) {
        resultFormats[format] = formats[format];
        return resultFormats;
    }, {});
}
/**
 * Turns given text to a quill insert delta, with the given format
 * Empty lines are formatted with block version of the given format
 *
 * @export
 * @param {string} text
 * @param {Quill.StringMap} format
 * @param {boolean} isAfterTextParam Used to decide whether to format a leading \n
 * @returns {Quill.DeltaStatic}
 */
function textToQuillInsertDelta(text, format, isAfterTextParam) {
    if (!text) {
        return new _quill__WEBPACK_IMPORTED_MODULE_3__["Delta"]();
    }
    var inlineFormat = extractInlineFormat(format);
    var blockFormat = extractBlockFormat(format);
    var isAfterText = isAfterTextParam;
    var delta = new _quill__WEBPACK_IMPORTED_MODULE_3__["Delta"]();
    var lines = text.match(/([^\n]+)|(\n)/g);
    lines.forEach(function (line) {
        if (line === '\n') {
            if (isAfterText) {
                isAfterText = false;
                delta.insert(line);
            }
            else {
                delta.insert(line, blockFormat);
            }
        }
        else {
            isAfterText = true;
            delta.insert(line, inlineFormat);
        }
    });
    return delta;
}
/**
 * Defines a possible selection location within a line
 *
 * @export
 * @enum {number}
 */
var LineSelectionLocation;
(function (LineSelectionLocation) {
    LineSelectionLocation[LineSelectionLocation["Undefined"] = 0] = "Undefined";
    LineSelectionLocation[LineSelectionLocation["Empty"] = 1] = "Empty";
    LineSelectionLocation[LineSelectionLocation["Start"] = 2] = "Start";
    LineSelectionLocation[LineSelectionLocation["Middle"] = 3] = "Middle";
    LineSelectionLocation[LineSelectionLocation["End"] = 4] = "End";
})(LineSelectionLocation || (LineSelectionLocation = {}));
/**
 * Keyboard KeyCodes
 *
 * @export
 * @enum {number}
 */
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
    KeyCode[KeyCode["Tab"] = 9] = "Tab";
    KeyCode[KeyCode["Space"] = 32] = "Space";
    KeyCode[KeyCode["Delete"] = 46] = "Delete";
})(KeyCode || (KeyCode = {}));
var fallbackDefaultFont = {
    FontName: 'Calibri',
    ID: 0,
    RefCount: 0,
    Size: 11,
    Bold: false,
    Color: '#000000',
    Italic: false,
    StrikeThrough: false,
    Underline: _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].None,
    VerticalAlign: _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontVerticalAlignment"].None
};
function inlineToBlock(format) {
    var blockFormat = {};
    if (format) {
        for (var _i = 0, _a = Object.keys(format); _i < _a.length; _i++) {
            var key = _a[_i];
            blockFormat[key + 'Block'] = format[key];
        }
    }
    return blockFormat;
}
function blockToInline(format) {
    var inlineFormat = {};
    if (format) {
        for (var _i = 0, _a = Object.keys(format); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.endsWith('Block')) {
                inlineFormat[key.slice(0, -5)] = format[key];
            }
        }
    }
    return inlineFormat;
}
function getQuillStringMapFromFont(font) {
    var verticalAlignment;
    switch (font.VerticalAlign) {
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontVerticalAlignment"].Subscript: {
            verticalAlignment = QuillVerticalAlignment.Subscript;
            break;
        }
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontVerticalAlignment"].Superscript: {
            verticalAlignment = QuillVerticalAlignment.Superscript;
            break;
        }
        default: {
            verticalAlignment = QuillVerticalAlignment.None;
        }
    }
    var underlineFormat;
    switch (font.Underline) {
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].Single:
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].Double:
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].None: {
            underlineFormat = font.Underline;
            break;
        }
        default: {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["ULS"].debugAssertTag(0x236205cd /* tag_9y6xn */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["LogCategory"].msoulscat_ES_EWAJSGrid, font.Underline === undefined, "helpers.getQuillStringMapFromFont: Unexpected value for parameter font.Underline: " + font.Underline);
            underlineFormat = _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].None;
        }
    }
    return {
        bold: font.Bold,
        color: font.Color,
        font: font.FontName,
        italic: font.Italic,
        script: verticalAlignment,
        size: font.Size + 'pt',
        strike: font.StrikeThrough,
        underline: underlineFormat
    };
}
function getFontFromQuillStringMap(attributes, fontID) {
    // These attributes are required to be able to translate to a font
    if (!attributes.font || !attributes.size || !attributes.color) {
        return undefined;
    }
    var verticalAlignment;
    switch (attributes.script) {
        case QuillVerticalAlignment.Subscript: {
            verticalAlignment = _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontVerticalAlignment"].Subscript;
            break;
        }
        case QuillVerticalAlignment.Superscript: {
            verticalAlignment = _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontVerticalAlignment"].Superscript;
            break;
        }
        default: {
            verticalAlignment = _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontVerticalAlignment"].None;
        }
    }
    var underlineFormat;
    var underline = Number(attributes.underline);
    switch (underline) {
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].Single:
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].Double:
        case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].None: {
            underlineFormat = underline;
            break;
        }
        default: {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["ULS"].debugAssertTag(0x236205ce /* tag_9y6xo */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_2__["LogCategory"].msoulscat_ES_EWAJSGrid, attributes.underline === undefined, "helpers.getFontFromQuillStringMap: Unexpected value for parameter font.Underline: " + attributes.underline);
            underlineFormat = _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_1__["FontUnderline"].None;
        }
    }
    return {
        Bold: !!attributes.bold,
        Color: attributes.color,
        FontName: attributes.font,
        ID: fontID,
        Italic: !!attributes.italic,
        RefCount: 1,
        Size: Number(attributes.size.replace(/\D+/g, '')),
        StrikeThrough: !!attributes.strike,
        Underline: underlineFormat,
        VerticalAlign: verticalAlignment
    };
}
var emptyQuillAttributes = {
    bold: null,
    color: null,
    font: null,
    italic: null,
    script: null,
    size: null,
    strike: null,
    underline: null
};
var QuillVerticalAlignment;
(function (QuillVerticalAlignment) {
    QuillVerticalAlignment["None"] = "";
    QuillVerticalAlignment["Subscript"] = "sub";
    QuillVerticalAlignment["Superscript"] = "super";
})(QuillVerticalAlignment || (QuillVerticalAlignment = {}));
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/index.js":
/*!***********************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/index.js ***!
  \***********************************************************/
/*! exports provided: TextPart, RichTextEditorConstants, RichTextEditorFactoryGlobal, isChangeGateEnabled, RichTextEditor, RichTextEditorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richTextEditorInterfaces */ "../../packages/excel-online-rte/lib/richTextEditorInterfaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextPart", function() { return _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_0__["TextPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorConstants", function() { return _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_0__["RichTextEditorConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorFactoryGlobal", function() { return _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_0__["RichTextEditorFactoryGlobal"]; });

/* harmony import */ var _richTextEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./richTextEditor */ "../../packages/excel-online-rte/lib/richTextEditor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isChangeGateEnabled", function() { return _richTextEditor__WEBPACK_IMPORTED_MODULE_1__["isChangeGateEnabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditor", function() { return _richTextEditor__WEBPACK_IMPORTED_MODULE_1__["RichTextEditor"]; });

/* harmony import */ var _richTextEditorFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./richTextEditorFactory */ "../../packages/excel-online-rte/lib/richTextEditorFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorFactory", function() { return _richTextEditorFactory__WEBPACK_IMPORTED_MODULE_2__["RichTextEditorFactory"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/modules/richTextClipboard.js":
/*!*******************************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/modules/richTextClipboard.js ***!
  \*******************************************************************************/
/*! exports provided: RichTextClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextClipboard", function() { return RichTextClipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/office-online-telemetry */ "../../packages/office-online-telemetry/lib/index.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quill */ "../../packages/excel-online-rte/lib/quill.js");



var RichTextClipboard = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RichTextClipboard, _super);
    function RichTextClipboard(quill, options) {
        var _this = _super.call(this, quill, options) || this;
        _this.enabled = false;
        _this.richTextEditor = options.richTextEditor;
        return _this;
    }
    RichTextClipboard.prototype.onPaste = function (e) {
        try {
            if (e.defaultPrevented || !this.enabled || !this.quill.isEnabled()) {
                e.preventDefault();
                return false;
            }
            e.stopPropagation();
            e.preventDefault();
            if (e && e.clipboardData && e.clipboardData.getData) {
                var text = e.clipboardData.getData('text/plain');
                return this.pasteText(text);
            }
            var ieWindow = window;
            if (ieWindow && ieWindow.clipboardData && ieWindow.clipboardData.getData) {
                var text = ieWindow.clipboardData.getData('text');
                return this.pasteText(text);
            }
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__["ULS"].shipAssertTag(0x2339d10d /* tag_9o3en */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__["LogCategory"].msoulscat_ES_EWAJSGrid, false, 'PlainTextClipboard.onPaste: no clipboardData');
        }
        catch (e) {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__["ULS"].sendTraceTag(0x2339d10e /* tag_9o3eo */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__["TraceLevel"].Warning, "PlainTextClipboard.onPaste: Failed, error: " + e);
        }
        return false;
    };
    RichTextClipboard.prototype.pasteText = function (text) {
        if (text) {
            var textToPaste = text.replace(/\r\n/g, '\n');
            this.richTextEditor.insertText(textToPaste);
        }
        return true;
    };
    return RichTextClipboard;
}(_quill__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]));

//# sourceMappingURL=richTextClipboard.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/quill.js":
/*!***********************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/quill.js ***!
  \***********************************************************/
/*! exports provided: Block, Clipboard, Delta, Parchment, Scope, Attributor, StyleAttributor, Sources, Quill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delta", function() { return Delta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parchment", function() { return Parchment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attributor", function() { return Attributor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleAttributor", function() { return StyleAttributor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sources", function() { return Sources; });
/* harmony import */ var _ms_compact_quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/compact-quill */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/@ms/compact-quill/1.3.25/node_modules/@ms/compact-quill/dist/quill.custom.js");
/* harmony import */ var _ms_compact_quill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_compact_quill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Quill", function() { return _ms_compact_quill__WEBPACK_IMPORTED_MODULE_0___default.a; });
// tslint:disable-next-line: import-name

var Block = _ms_compact_quill__WEBPACK_IMPORTED_MODULE_0___default.a.import('blots/block');
var Clipboard = _ms_compact_quill__WEBPACK_IMPORTED_MODULE_0___default.a.import('modules/clipboard');
var Delta = _ms_compact_quill__WEBPACK_IMPORTED_MODULE_0___default.a.import('delta');
var Parchment = _ms_compact_quill__WEBPACK_IMPORTED_MODULE_0___default.a.import('parchment');
var Scope = Parchment.Scope;
var Attributor = Parchment.Attributor.Attribute;
var StyleAttributor = Parchment.Attributor.Style;
var Sources;
(function (Sources) {
    Sources["USER"] = "user";
    Sources["API"] = "api";
    Sources["SILENT"] = "silent";
})(Sources || (Sources = {}));

//# sourceMappingURL=quill.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/richTextEditor.js":
/*!********************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/richTextEditor.js ***!
  \********************************************************************/
/*! exports provided: isChangeGateEnabled, RichTextEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChangeGateEnabled", function() { return isChangeGateEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextEditor", function() { return RichTextEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modules_richTextClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/richTextClipboard */ "../../packages/excel-online-rte/lib/modules/richTextClipboard.js");
/* harmony import */ var _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./richTextEditorInterfaces */ "../../packages/excel-online-rte/lib/richTextEditorInterfaces.js");
/* harmony import */ var _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/office-online-telemetry */ "../../packages/office-online-telemetry/lib/index.js");
/* harmony import */ var _classedBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classedBlock */ "../../packages/excel-online-rte/lib/classedBlock.js");
/* harmony import */ var _underlineBlot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./underlineBlot */ "../../packages/excel-online-rte/lib/underlineBlot.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quill */ "../../packages/excel-online-rte/lib/quill.js");
/* harmony import */ var _formats_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./formats/font */ "../../packages/excel-online-rte/lib/formats/font.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-rte/lib/helpers.js");
/* harmony import */ var _formats_blockFormats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./formats/blockFormats */ "../../packages/excel-online-rte/lib/formats/blockFormats.js");
/* harmony import */ var _formats_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./formats/color */ "../../packages/excel-online-rte/lib/formats/color.js");











var isChangeGateEnabled = function (_) { return false; };
var RichTextEditor = /** @class */ (function () {
    function RichTextEditor(editorContainer, textElementId, isChangeGateEnabledDelegate, formattedTextEnabled, defaultFont) {
        var _this = this;
        this.defaultFontAssertFired = false;
        this.disabled = undefined;
        this.getTextLogLastCharEnabled = false;
        this.prepareQuillOnce = false;
        this.cacheReadonlyEnabled = false;
        this.checkIsEmptyEnabled = false;
        this.removeSpaceHandlerEnabled = false;
        this.setTextOptimizationEnabled = false;
        this.setTextOptimizationV2Enabled = false;
        this.defaultBottomVerticalAlignmentEnabled = false;
        this.logMismatchSetTextFromTextPartsEnabled = false;
        this.disableNoAttributesAsserts = false;
        this.formattedTextEnabled = false;
        this.lastSelectionLocation = {
            start: _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Undefined,
            end: _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Undefined
        };
        this.insertText = function (text) {
            var range = _this.quill.getSelection() || { index: _this.quill.getText().length - 1, length: 0 };
            _this.insertTextAtRange(text, range);
            _this.quill.setSelection(range.index + text.length, 0, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].API);
        };
        this.appendText = function (text) {
            if (!text) {
                return;
            }
            var range = { index: _this.quill.getLength() - 1, length: 0 };
            _this.insertTextAtRange(text, range);
        };
        this.insertTextAtRange = function (text, range) {
            var updateDelta = new _quill__WEBPACK_IMPORTED_MODULE_6__["Delta"]();
            if (_this.formattedTextEnabled) {
                var selectionLocation = _this.getSelectionLocation(range);
                var isAfterText = selectionLocation.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Middle ||
                    selectionLocation.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].End;
                var format = _this.quill.getFormat(range.index);
                var insertDelta = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["textToQuillInsertDelta"])(text, format, isAfterText);
                updateDelta = updateDelta
                    .retain(range.index)
                    .delete(range.length)
                    .concat(insertDelta);
                // The empty line's \n becomes a part of a non-empty line - remove formats
                if (selectionLocation.end === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Empty && !text.endsWith('\n')) {
                    updateDelta = updateDelta.retain(1, Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["fontToQuillStringMap"])(undefined, /* useBlockAttributes */ true));
                }
                // The non-empty line's \n becomes an empty line - apply formats
                if (selectionLocation.end === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].End && text.endsWith('\n')) {
                    updateDelta = updateDelta.retain(1, Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["extractBlockFormat"])(format));
                }
            }
            else {
                updateDelta
                    .retain(range.index)
                    .delete(range.length)
                    .insert(text);
            }
            _this.quill.updateContents(updateDelta, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
        };
        this.enterHandler = function (range) {
            var index = range.index, length = range.length;
            var format = _this.quill.getFormat(index);
            var location = _this.getSelectionLocation(range);
            if (length > 0) {
                _this.removeRange(range);
            }
            var combinedFormats = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["extractBlockFormat"])(format);
            if (location.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Empty || location.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Start) {
                // At the start of a line, add a formatted line
                _this.quill.insertText(index, '\n', combinedFormats, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
            }
            else if (location.end === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Empty || location.end === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].End) {
                // At the end of a line, add a formatted line after the current line
                _this.quill.insertText(index + 1, '\n', combinedFormats, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
            }
            else {
                // Otherwise, not adding an empty line, so no format is needed
                _this.quill.insertText(index, '\n', {}, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
            }
            _this.quill.setSelection(index + 1, 0, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].API);
        };
        this.backspaceHandler = function (range, context) {
            var index = range.index;
            var prefix = context.prefix;
            var textLength = _this.quill.getLength();
            // Do nothing if at the start of the text, or editor is empty (only \n)
            if (index === 0 || textLength <= 1) {
                return;
            }
            // Astral symbols - special case when two chars merge
            // Checking to see if the text behind the caret ends with an astral symbol.
            var deleteLength = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(prefix) ? 2 : 1;
            _this.removeRange({
                index: index - deleteLength,
                length: deleteLength
            });
        };
        this.deleteHandler = function (range, context) {
            var index = range.index;
            var suffix = context.suffix;
            var textLength = _this.quill.getLength();
            // Do nothing if at the end of the text, or editor is empty (only \n)
            if (index === textLength - 1 || textLength <= 1) {
                return;
            }
            // Astral symbols - special case when two chars merge
            // Checking to see if the text in front of the caret starts with an astral symbol.
            var deleteLength = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(suffix) ? 2 : 1;
            _this.removeRange({ index: index, length: deleteLength });
        };
        this.removeRange = function (range) {
            var index = range.index, length = range.length;
            var location = _this.getSelectionLocation(range);
            var format = _this.quill.getFormat(index);
            _this.quill.deleteText(index, length, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
            if ((location.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Empty || location.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Start) &&
                location.end === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].End) {
                // Keep the format of the beginning of the text
                _this.quill.formatLine(index, 0, Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["extractBlockFormat"])(format), _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].API);
            }
            else if ((location.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Middle || location.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].End) &&
                location.end === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Empty) {
                // The selection ends with an empty line, who's \n now
                // moved to a non-empty line - remove it's format
                _this.quill.removeFormat(index, 0, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].API);
            }
        };
        this.textChangeHandler = function (delta, _oldContent, source) {
            var range = _this.quill.getSelection();
            var previousSelectionLocation = _this.lastSelectionLocation;
            _this.lastSelectionLocation = _this.getSelectionLocation(range);
            if (!range || !_this.quill.hasFocus() || source !== _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER || !delta.ops) {
                return;
            }
            // Handle a text change that started from an empty line;
            // We need to apply the line format to the inserted text
            if (previousSelectionLocation.start === _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Empty) {
                var retain = delta.ops[0].retain || 0;
                var insertText = void 0;
                var insertFormat = void 0;
                if (delta.ops[0].insert) {
                    insertText = delta.ops[0].insert;
                    insertFormat = delta.ops[0].attributes;
                }
                else if (delta.ops[1].insert) {
                    insertText = delta.ops[1].insert;
                    insertFormat = delta.ops[1].attributes;
                }
                // a. Only handle an insert (key stroke), which was not a new line
                // b. If the insert already has a format, it was not a key stroke
                if (insertText && insertText !== '\n' && !insertFormat) {
                    var format = _this.quill.getFormat(range.index);
                    var blockFormats_1 = Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["filterFormats"])(format, _quill__WEBPACK_IMPORTED_MODULE_6__["Scope"].BLOCK_ATTRIBUTE);
                    if (!_this.disableNoAttributesAsserts) {
                        _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].shipAssertTag(0x233d7082 /* tag_9pxcc */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, Object.keys(blockFormats_1).length > 0, "richTextEditor.textChangeHandler: expected to have block formats on an empty line");
                    }
                    // Format the inserted text
                    _this.quill.formatText(retain, insertText.length, Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["extractInlineFormat"])(format), _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].API);
                    // Remove the line format
                    _this.quill.removeFormat(range.index, 0, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].API);
                }
            }
        };
        this.selectionChangeHandler = function (range, _oldRange, _source) {
            _this.lastSelectionLocation = _this.getSelectionLocation(range);
        };
        this.getSelectionLocation = function (range) {
            if (!range) {
                return { start: _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Undefined, end: _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Undefined };
            }
            var index = range.index, length = range.length;
            var start = _this.getLocationForIndex(index);
            var end = length > 0 ? _this.getLocationForIndex(index + length) : start;
            return { start: start, end: end };
        };
        this.getLocationForIndex = function (index) {
            // TODO VSO#4217486: define getLine in compact-quill types
            if (!_this.quill.getLine) {
                _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].shipAssertTag(0x2342240c /* tag_9q8qm */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, false, "richTextEditor.getLocationForIndex: getLine is undefined");
                return _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Undefined;
            }
            var _a = _this.quill.getLine(index), line = _a[0], offset = _a[1];
            var location;
            if (line.cache.length === 1) {
                location = _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Empty;
            }
            else if (offset === 0) {
                location = _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Start;
            }
            else if (offset === line.cache.length - 1) {
                location = _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].End;
            }
            else {
                location = _helpers__WEBPACK_IMPORTED_MODULE_8__["LineSelectionLocation"].Middle;
            }
            return location;
        };
        isChangeGateEnabled = isChangeGateEnabledDelegate;
        this.getTextLogLastCharEnabled = isChangeGateEnabled('OfficeVSO:3952366_RteLogLastChar');
        this.prepareQuillOnce = isChangeGateEnabled('OfficeVSO:4051762_RtePrepareQuillOnce');
        this.cacheReadonlyEnabled = isChangeGateEnabled('OfficeVSO:4064177_RTECacheReadonly');
        this.checkIsEmptyEnabled = isChangeGateEnabled('OfficeVSO:4089632_RTECheckIsEmpty');
        this.removeSpaceHandlerEnabled = isChangeGateEnabled('OfficeVSO:4092323_RemoveSpaceHandler');
        this.setTextOptimizationEnabled = isChangeGateEnabled('OfficeVSO:4115022_RteSetTextOptimization');
        this.setTextOptimizationV2Enabled = isChangeGateEnabled('OfficeVSO:4115022_RteSetTextOptimization_V2');
        this.defaultBottomVerticalAlignmentEnabled = isChangeGateEnabled('OfficeVSO:4109099_DefaultBottomVerticalAlignmentInEditor');
        this.logMismatchSetTextFromTextPartsEnabled = isChangeGateEnabled('OfficeVSO:4234444_LogMismatchSetTextFromTextParts');
        this.disableNoAttributesAsserts = isChangeGateEnabled('OfficeVSO:4255897_RteDisableAttributesAsserts');
        this.formattedTextEnabled = formattedTextEnabled;
        this.name = 'RichTextEditor';
        this.lastTextParts = [];
        this.defaultFont = defaultFont;
        this.containerElement = editorContainer;
        this.quill = this.getQuillEditor(editorContainer.id);
        this.clipboard = this.quill.getModule('clipboard');
        this.textElement = this.containerElement
            .getElementsByClassName(RichTextEditor.quillEditorClassName)
            .item(0);
        if (!this.textElement || !(this.textElement instanceof HTMLElement)) {
            throw new Error("Couldn't find initialized Quill editor");
        }
        this.initHtml(textElementId);
    }
    RichTextEditor.prototype.get_text = function () {
        var text = this.quill.getText();
        // We added a trailing '\n' in set_text, so remove it (or assert if not found)
        var lastChar = text[text.length - 1];
        if (lastChar === '\n') {
            text = text.slice(0 /*start*/, -1 /*end*/);
        }
        else {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x236d2349 /* tag_91snj */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Warning, "richTextEditor.get_text: unexpected char: " + (this.getTextLogLastCharEnabled ? lastChar.charCodeAt(0) : 'REDACTED'));
        }
        return text;
    };
    // TODO: as part of slice2, this should be calculated from Quill model
    RichTextEditor.prototype.get_textRunsCount = function () {
        return this.lastTextParts.length;
    };
    RichTextEditor.prototype.set_text = function (value) {
        try {
            if (this.setTextOptimizationV2Enabled && document.activeElement !== this.textElement) {
                var textElementContent_1 = document.createDocumentFragment();
                value
                    .replace(/\r\n/g, '\n')
                    .split('\n')
                    .forEach(function (lineText) {
                    var lineElement = document.createElement('div');
                    lineElement.className = _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_2__["RichTextEditorConstants"].editorLineClass;
                    if (lineText) {
                        lineElement.textContent = lineText;
                    }
                    else {
                        lineElement.appendChild(document.createElement('br'));
                    }
                    textElementContent_1.appendChild(lineElement);
                });
                // tslint:disable-next-line:no-inner-html - clearing content
                this.textElement.innerHTML = '';
                this.textElement.appendChild(textElementContent_1);
            }
            else if (this.setTextOptimizationEnabled) {
                var delta = new _quill__WEBPACK_IMPORTED_MODULE_6__["Delta"]();
                var oldTextLength = this.quill.getLength();
                // Keep the last '\n' (and remove it's format), to avoid needing to re-add it
                this.quill.updateContents(delta
                    .delete(oldTextLength - 1)
                    .insert(value)
                    .retain(1, Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["fontToQuillStringMap"])(undefined, /* useBlockAttributes */ true)));
            }
            else {
                // for presentation purposes, Quill requires '\n' at the end of string and adds one if it's missing.
                // To dismiss this behavior on API level, we add a dummy trailing '\n' to value and then remove it on get_text,
                var text = value + '\n';
                this.quill.setText(text);
            }
            this.lastTextParts = value !== '' ? [{ text: value }] : [];
        }
        catch (e) {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x2359c743 /* tag_9w23d */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Warning, "richTextEditor.set_text: failed, text length: " + value.length + ", Exception: " + e);
            throw e;
        }
    };
    RichTextEditor.prototype.get_defaultFont = function () {
        if (!this.defaultFont) {
            if (!this.defaultFontAssertFired) {
                _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].shipAssertTag(0x2334e357 /* tag_9nonx */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, false, "richTextEditor.get_DefaultFont: defaultFont was undefined");
                this.defaultFontAssertFired = true;
            }
            this.defaultFont = _helpers__WEBPACK_IMPORTED_MODULE_8__["fallbackDefaultFont"];
        }
        return this.defaultFont;
    };
    RichTextEditor.prototype.set_defaultFont = function (font) {
        this.defaultFont = font;
    };
    RichTextEditor.prototype.setFormattedText = function (formattedText) {
        var updateDelta = new _quill__WEBPACK_IMPORTED_MODULE_6__["Delta"]();
        var defaultFont = this.get_defaultFont();
        // Delete all but the last \n
        updateDelta.delete(this.quill.getLength() - 1);
        updateDelta = updateDelta.concat(Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["formattedTextToQuillDelta"])('richTextEditor.set_formattedText', formattedText, defaultFont));
        // If the text ends with an empty line, apply the default font to it
        // Otherwise, we want to clear the font from the last '\n'
        updateDelta.retain(1, Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["fontToQuillStringMap"])(formattedText.Text.endsWith('\n') || formattedText.Text === '' ? defaultFont : undefined, 
        /* useBlockAttributes */ true));
        this.quill.updateContents(updateDelta);
    };
    RichTextEditor.prototype.getFormattedText = function () {
        var ops = this.quill.getContents().ops;
        var defaultFont = this.get_defaultFont();
        if (!ops) {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].shipAssertTag(0x23752609 /* tag_93syj */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, false, "richTextEditor.get_formattedText: ops is null or undefined");
            return { Text: this.get_text(), TextRuns: [{ FontID: 0, StartIndex: 0 }], Fonts: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaultFont), { ID: 0 })] };
        }
        var text = '';
        var startIndex = 0;
        var textRuns = [];
        var fonts = [];
        var cachedFonts = new Map();
        var isAfterText = false;
        for (var i = 0; i < ops.length; i += 1) {
            var op = ops[i];
            // Remove the trailing \n
            if (i === ops.length - 1) {
                // Special case: If the text is not empty, and the last op is \n,
                // avoid trying to create a (or concat to an existing) run
                if (i !== 0 && op.insert === '\n') {
                    break;
                }
                else {
                    var lastChar = op.insert[op.insert.length - 1];
                    if (lastChar === '\n') {
                        op.insert = op.insert.slice(0, -1);
                    }
                    else {
                        _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x2349654f /* tag_9swvp */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Warning, "richTextEditor.getFormattedText: unexpected char: " + (this.getTextLogLastCharEnabled ? lastChar.charCodeAt(0) : 'REDACTED'));
                    }
                }
            }
            // If the op is a \n that ends a non-empty line,
            // we do not need to do anything - We just implicitly add it to
            // the previous text run
            if (!(isAfterText && op.insert === '\n')) {
                var fontFromAttributes = op.attributes ? Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["quillStringMapToFont"])(op.attributes, -1 /* fontID */) : undefined;
                if (!this.disableNoAttributesAsserts) {
                    _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].shipAssertTag(0x23496550 /* tag_9swvq */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, !!fontFromAttributes, "richTextEditor.get_formattedText: empty/invalid attributes");
                }
                var font = fontFromAttributes || defaultFont;
                var fontString = JSON.stringify(font);
                if (cachedFonts.has(fontString)) {
                    font.ID = cachedFonts.get(fontString);
                }
                else {
                    font.ID = fonts.length;
                    fonts.push(font);
                    cachedFonts.set(fontString, font.ID);
                }
                // Only create a new run if:
                // a. It's the first run
                // b. Font changed from the previous run
                if (textRuns.length === 0 || textRuns[textRuns.length - 1].FontID !== font.ID) {
                    var textRun = {
                        FontID: font.ID,
                        StartIndex: startIndex
                    };
                    textRuns.push(textRun);
                }
            }
            isAfterText = !op.insert.endsWith('\n');
            text = text.concat(op.insert);
            startIndex = text.length;
        }
        return {
            Text: text,
            TextRuns: textRuns,
            Fonts: fonts
        };
    };
    RichTextEditor.prototype.get_selectedText = function () {
        var selection = this.quill.getSelection();
        if (selection) {
            return this.quill.getText(selection.index, selection.length);
        }
        _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x2384a80e /* tag_97k6o */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Info, 'richTextEditor.get_selectedText: No selection');
        return '';
    };
    RichTextEditor.prototype.get_readOnly = function () {
        return this.get_disabled();
    };
    RichTextEditor.prototype.set_readOnly = function (value) {
        this.set_disabled(value);
    };
    RichTextEditor.prototype.get_disabled = function () {
        if (this.cacheReadonlyEnabled && this.disabled !== undefined) {
            return this.disabled;
        }
        return this.textElement.getAttribute('contentEditable') === 'false';
    };
    RichTextEditor.prototype.set_disabled = function (value) {
        if (this.cacheReadonlyEnabled) {
            if (this.disabled !== undefined && this.disabled === value) {
                return;
            }
            this.disabled = value;
        }
        this.quill.enable(!value);
        this.textElement.setAttribute('contentEditable', value ? 'false' : 'true');
    };
    RichTextEditor.prototype.get_wrapMode = function () {
        // WrapMode is not used in this editor
        return 0 /* Off */;
    };
    RichTextEditor.prototype.set_wrapMode = function (_value) { };
    RichTextEditor.prototype.get_selectionStartIndex = function () {
        var selection = this.quill.getSelection();
        if (selection) {
            return selection.index;
        }
        _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x2384a80f /* tag_97k6p */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Info, 'richTextEditor.get_selectionStartIndex: No selection');
        return 0;
    };
    // The DOM element where text typing takes place
    // Note: while in ContentEditableTextBoxBridge/InputElementTextBoxBridge this is the same element as the TextBox's DomElement,
    // this is not the case here since Quill creates an inner element within it that uses for text typing.
    RichTextEditor.prototype.get_textElement = function () {
        return this.textElement;
    };
    RichTextEditor.prototype.get_name = function () {
        return this.name;
    };
    RichTextEditor.prototype.selectRange = function (absoluteStartIndex, absoluteEndIndex) {
        var textLength = this.get_text().length;
        if (absoluteStartIndex < 0 || absoluteEndIndex > textLength || absoluteStartIndex > absoluteEndIndex) {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x2384a5e2 /* tag_97kx8 */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Warning, "richTextEditor.selectRange: Invalid args. start:" + absoluteStartIndex + ", end:" + absoluteEndIndex + ", length:" + textLength);
        }
        // quill.setSelection handles gracefully index>=0 so we only force that
        if (absoluteStartIndex >= 0) {
            this.quill.setSelection(absoluteStartIndex, absoluteEndIndex - absoluteStartIndex);
        }
    };
    RichTextEditor.prototype.setCaretPositionToEnd = function () {
        this.quill.setSelection(this.quill.getText().length - 1, 0);
    };
    RichTextEditor.prototype.removeSelection = function () {
        this.quill.setSelection(0, 0);
    };
    RichTextEditor.prototype.setTextFromTextParts = function (textParts) {
        if (this.logMismatchSetTextFromTextPartsEnabled) {
            var currentText = this.quill.getText();
            var textToSet = textParts.reduce(function (prevText, textPart) {
                return prevText + textPart.text;
            }, '');
            if (textToSet + '\n' !== currentText) {
                this.logMismatchSetTextFromTextPartsEnabled = false;
                _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x233c531c /* tag_9pfm2 */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Info, "richTextEditor.setTextFromTextParts: new text (length: " + textToSet.length + ") is different than current text (length: " + currentText.length + ")");
            }
        }
        var length = textParts.length;
        var ops = [];
        for (var i = 0; i < length; i = i + 1) {
            ops.push({
                insert: textParts[i].text,
                attributes: {
                    color: textParts[i].color ? textParts[i].color : '',
                    background: textParts[i].backgroundColor ? textParts[i].backgroundColor : ''
                }
            });
        }
        // adding a trailing '\n' as in set_Text method
        ops.push({ insert: '\n' });
        this.quill.setContents(new _quill__WEBPACK_IMPORTED_MODULE_6__["Delta"](ops), _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
        this.lastTextParts = textParts;
    };
    RichTextEditor.prototype.changeTextInExistingTextPart = function (textPartIndex, oldText, newText) {
        var editedTextPart = this.lastTextParts[textPartIndex];
        if (editedTextPart.text.toUpperCase() !== oldText.toUpperCase()) {
            return false;
        }
        var startIndex = 0;
        for (var i = 0; i < textPartIndex; i = i + 1) {
            startIndex += this.lastTextParts[i].text.length;
        }
        var ops = [
            { retain: startIndex },
            { delete: editedTextPart.text.length },
            { insert: newText, attributes: { color: editedTextPart.color } }
        ];
        this.quill.updateContents(new _quill__WEBPACK_IMPORTED_MODULE_6__["Delta"](ops), _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
        editedTextPart.text = newText;
        return true;
    };
    RichTextEditor.prototype.formatText = function (index, length, formats) {
        this.quill.formatText(index, length, formats, _quill__WEBPACK_IMPORTED_MODULE_6__["Sources"].USER);
    };
    RichTextEditor.prototype.focus = function () {
        this.textElement.focus();
    };
    RichTextEditor.prototype.blur = function () {
        this.textElement.blur();
    };
    RichTextEditor.prototype.startEdit = function () {
        this.clipboard.enabled = true;
    };
    RichTextEditor.prototype.endEdit = function () {
        this.clipboard.enabled = false;
    };
    RichTextEditor.prototype.addBreakLine = function (caretPositionIndex) {
        var selection = this.quill.getSelection();
        if (this.formattedTextEnabled) {
            this.enterHandler(selection || { index: caretPositionIndex, length: 0 });
        }
        else {
            if (selection) {
                this.quill.deleteText(selection.index, selection.length);
                this.quill.insertText(selection.index, '\n');
            }
            else {
                this.quill.insertText(caretPositionIndex, '\n');
            }
        }
    };
    RichTextEditor.prototype.getCaretPosition = function () {
        // If the editor is empty, we don't need to poll quill for the selection
        if (this.checkIsEmptyEnabled && this.isEmpty()) {
            return 0;
        }
        try {
            var selection = this.quill.getSelection();
            if (selection) {
                return selection.index;
            }
        }
        catch (e) {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x2359c744 /* tag_9w23e */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Warning, "richTextEditor.getCaretPosition: failed to perform quill.getSelection, text length: " + this.quill.getLength() + ", Exception: " + e);
        }
        return null;
    };
    RichTextEditor.prototype.setCaretPosition = function (caretPosition) {
        var textLength = this.get_text().length;
        if (caretPosition < 0 || caretPosition > textLength) {
            _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].sendTraceTag(0x2384a5e3 /* tag_97kx9 */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["TraceLevel"].Warning, "richTextEditor.setCaretPosition: Invalid arg. position:" + caretPosition);
        }
        // quill.setSelection handles gracefully index>=0 so we only force that
        if (caretPosition >= 0) {
            this.quill.setSelection(caretPosition, 0);
        }
    };
    RichTextEditor.prototype.setVirtualKeyboardPolicy = function (policy) {
        this.textElement.setAttribute('virtualkeyboardpolicy', policy);
    };
    RichTextEditor.prototype.setInputMode = function (mode) {
        this.textElement.setAttribute('inputmode', mode);
    };
    RichTextEditor.prototype.onKeyUp = function (_rawEvent) { };
    // The minimum length is 1, due to always having a \n
    RichTextEditor.prototype.isEmpty = function () {
        return this.quill.getLength() === 1;
    };
    RichTextEditor.prototype.initHtml = function (textElementId) {
        this.textElement.setAttribute('contentEditable', 'true');
        this.textElement.setAttribute('spellcheck', 'false');
        this.textElement.setAttribute('autoComplete', 'false');
        this.textElement.setAttribute('autoCorrect', 'off');
        this.textElement.setAttribute('role', 'textbox');
        this.textElement.classList.add(_richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_2__["RichTextEditorConstants"].editorClass);
        // Set default vertical alignment in editor to bottom
        // When removing CG OfficeVSO:4109099_DefaultBottomVerticalAlignmentInEditor, remove if statement as a whole
        if (this.defaultBottomVerticalAlignmentEnabled) {
            this.textElement.classList.add(_richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_2__["RichTextEditorConstants"].defaultBottomVerticalAlignmentEditorClass);
        }
        this.textElement.tabIndex = 0;
        if (textElementId) {
            this.textElement.id = textElementId;
        }
    };
    RichTextEditor.prototype.getQuillEditor = function (editorId) {
        var keyboardBindings = {
            backspace: {
                key: _helpers__WEBPACK_IMPORTED_MODULE_8__["KeyCode"].Backspace,
                collapsed: true,
                handler: this.backspaceHandler
            },
            delete: {
                key: _helpers__WEBPACK_IMPORTED_MODULE_8__["KeyCode"].Delete,
                collapsed: true,
                handler: this.deleteHandler
            },
            backspaceRange: {
                key: _helpers__WEBPACK_IMPORTED_MODULE_8__["KeyCode"].Backspace,
                collapsed: false,
                handler: this.removeRange
            },
            deleteRange: {
                key: _helpers__WEBPACK_IMPORTED_MODULE_8__["KeyCode"].Delete,
                collapsed: false,
                handler: this.removeRange
            }
        };
        RichTextEditor.prepareQuillEditor(this.prepareQuillOnce, this.formattedTextEnabled);
        var quill = new _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"]("#" + editorId, {
            modules: {
                keyboard: {
                    bindings: this.formattedTextEnabled ? keyboardBindings : {}
                },
                clipboard: {
                    richTextEditor: this
                }
            }
        });
        if (this.formattedTextEnabled) {
            quill.on('text-change', this.textChangeHandler);
            quill.on('selection-change', this.selectionChangeHandler);
        }
        // Quill handles tab by adding '\t' to the text - unexpected for Excel text box
        var keyboard = quill.getModule('keyboard');
        delete keyboard.bindings[_helpers__WEBPACK_IMPORTED_MODULE_8__["KeyCode"].Tab];
        if (this.removeSpaceHandlerEnabled) {
            delete keyboard.bindings[_helpers__WEBPACK_IMPORTED_MODULE_8__["KeyCode"].Space];
        }
        return quill;
    };
    RichTextEditor.prepareQuillEditor = function (prepareQuillOnce, formattedTextEnabled) {
        if (prepareQuillOnce && RichTextEditor.quillEditorPrepared) {
            return;
        }
        RichTextEditor.quillEditorPrepared = true;
        // Replace block with classedBlock
        _classedBlock__WEBPACK_IMPORTED_MODULE_4__["default"].tagName = _richTextEditorInterfaces__WEBPACK_IMPORTED_MODULE_2__["RichTextEditorConstants"].editorLineTag;
        _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"].register(_classedBlock__WEBPACK_IMPORTED_MODULE_4__["default"], true /* suppressWarning */);
        // Replace clipboard module with our own RichTextClipboard
        _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"].register('modules/clipboard', _modules_richTextClipboard__WEBPACK_IMPORTED_MODULE_1__["RichTextClipboard"], true /*suppressWarning*/);
        // Add support for DoubleUnderline, therefore changing Underline's implementation as well.
        _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"].register(_underlineBlot__WEBPACK_IMPORTED_MODULE_5__["default"], true /* suppressWarning */);
        if (formattedTextEnabled) {
            // Register all block formats
            _formats_blockFormats__WEBPACK_IMPORTED_MODULE_9__["default"].forEach(function (format) {
                _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"].register(format, true /* suppressWarning */);
            });
        }
        // Default font and size attributors contain allow list
        // Register new instances to override
        // NOTE: Color and Size must come after the blockFormats, to override Parchment's style attributors mapping
        var fontAttributor = new _formats_font__WEBPACK_IMPORTED_MODULE_7__["FontStyleAttributor"]('font', 'font-family', { scope: _quill__WEBPACK_IMPORTED_MODULE_6__["Scope"].INLINE });
        _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"].register(fontAttributor, true /* suppressWarning */);
        var sizeAttributor = new _quill__WEBPACK_IMPORTED_MODULE_6__["StyleAttributor"]('size', 'font-size', { scope: _quill__WEBPACK_IMPORTED_MODULE_6__["Scope"].INLINE });
        _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"].register(sizeAttributor, true /* suppressWarning */);
        var colorAttributor = new _formats_color__WEBPACK_IMPORTED_MODULE_10__["ColorStyleAttributor"]('color', 'color', { scope: _quill__WEBPACK_IMPORTED_MODULE_6__["Scope"].INLINE });
        _quill__WEBPACK_IMPORTED_MODULE_6__["Quill"].register(colorAttributor, true /* suppressWarning */);
    };
    RichTextEditor.quillEditorClassName = 'ql-editor';
    RichTextEditor.attributeColor = 'color';
    RichTextEditor.quillEditorPrepared = false;
    return RichTextEditor;
}());

//# sourceMappingURL=richTextEditor.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/richTextEditorFactory.js":
/*!***************************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/richTextEditorFactory.js ***!
  \***************************************************************************/
/*! exports provided: RichTextEditorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorFactory", function() { return RichTextEditorFactory; });
/* harmony import */ var _richTextEditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richTextEditor */ "../../packages/excel-online-rte/lib/richTextEditor.js");
/* harmony import */ var _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/office-online-telemetry */ "../../packages/office-online-telemetry/lib/index.js");


var RichTextEditorFactory = /** @class */ (function () {
    function RichTextEditorFactory() {
    }
    RichTextEditorFactory.prototype.getRichTextEditor = function (editorElement, editorClassName, isChangeGateEnabledDelegate, formattedTextEnabled, defaultFont) {
        return new _richTextEditor__WEBPACK_IMPORTED_MODULE_0__["RichTextEditor"](editorElement, editorClassName, isChangeGateEnabledDelegate, formattedTextEnabled, defaultFont);
    };
    RichTextEditorFactory.prototype.initializeLogger = function (logger) {
        if (logger)
            Object(_ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_1__["initializeLogger"])(logger);
    };
    return RichTextEditorFactory;
}());

//# sourceMappingURL=richTextEditorFactory.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/richTextEditorInterfaces.js":
/*!******************************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/richTextEditorInterfaces.js ***!
  \******************************************************************************/
/*! exports provided: TextPart, RichTextEditorConstants, RichTextEditorFactoryGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPart", function() { return TextPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorConstants", function() { return RichTextEditorConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorFactoryGlobal", function() { return RichTextEditorFactoryGlobal; });
/* harmony import */ var _richTextEditorFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richTextEditorFactory */ "../../packages/excel-online-rte/lib/richTextEditorFactory.js");
var TextPart = /** @class */ (function () {
    function TextPart() {
    }
    return TextPart;
}());

var RichTextEditorConstants = {
    editorLineTag: 'div',
    editorLineClass: 'ewa-rteLine',
    editorClass: 'ewa-rteTextElement',
    defaultBottomVerticalAlignmentEditorClass: 'ewa-rteTextElementDefaultBottomAlignment'
};

var RichTextEditorFactoryGlobal = new _richTextEditorFactory__WEBPACK_IMPORTED_MODULE_0__["RichTextEditorFactory"]();
//# sourceMappingURL=richTextEditorInterfaces.js.map

/***/ }),

/***/ "../../packages/excel-online-rte/lib/underlineBlot.js":
/*!*******************************************************************!*\
  !*** C:/_work/4/s/packages/excel-online-rte/lib/underlineBlot.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quill */ "../../packages/excel-online-rte/lib/quill.js");
/* harmony import */ var _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
/* harmony import */ var _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ms/office-online-telemetry */ "../../packages/office-online-telemetry/lib/index.js");




var QuillInline = _quill__WEBPACK_IMPORTED_MODULE_1__["Quill"].import('blots/inline');
var Underline = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Underline, _super);
    function Underline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Underline.create = function (value) {
        var node = _super.create.call(this);
        if (value === _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].Double) {
            node.style.textDecoration = 'underline double';
        }
        else if (value === _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].Single) {
            node.style.textDecoration = 'underline';
        }
        return node;
    };
    // Returns format values represented by domNode if it is this Blot's type
    // No checking that domNode is this Blot's type is required.
    Underline.formats = function (domNode) {
        if (domNode.style.textDecoration.includes('underline')) {
            if (domNode.style.textDecoration.includes('double')) {
                return _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].Double;
            }
            return _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].Single;
        }
        return _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].None;
    };
    // Apply format to blot. Should not pass onto child or other blot.
    Underline.prototype.format = function (name, value) {
        if (name === 'underline') {
            Underline.removeUnderlineFormatting(this.domNode);
            switch (value) {
                case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].Double: {
                    this.domNode.style.textDecoration += 'underline double';
                    break;
                }
                case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].Single: {
                    this.domNode.style.textDecoration += 'underline';
                    break;
                }
                case _ms_excel_online_models_lib_src_dto_gridBlockModelDto__WEBPACK_IMPORTED_MODULE_2__["FontUnderline"].None: {
                    _super.prototype.format.call(this, name, false);
                    break;
                }
                default: {
                    _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["ULS"].debugAssertTag(0x2361d5d5 /* tag_9y3xv */, _ms_office_online_telemetry__WEBPACK_IMPORTED_MODULE_3__["LogCategory"].msoulscat_ES_EWAJSGrid, false, "underlineBlot.format: Unexpected value for name \"underline\": " + value);
                    _super.prototype.format.call(this, name, false);
                    break;
                }
            }
        }
        else {
            _super.prototype.format.call(this, name, value);
        }
    };
    Underline.removeUnderlineFormatting = function (domNode) {
        domNode.style.textDecoration = domNode.style.textDecoration.replace('underline', '');
        domNode.style.textDecoration = domNode.style.textDecoration.replace('double', '');
    };
    Underline.blotName = 'underline';
    Underline.tagName = 'U';
    return Underline;
}(QuillInline));
/* harmony default export */ __webpack_exports__["default"] = (Underline);
//# sourceMappingURL=underlineBlot.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/ConsoleLogger.js":
/*!**************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/ConsoleLogger.js ***!
  \**************************************************************************/
/*! exports provided: ConsoleLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return ConsoleLogger; });
/* harmony import */ var _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buls/TraceLevel */ "../../packages/office-online-telemetry/lib/buls/TraceLevel.js");
/* harmony import */ var _buls_LogCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buls/LogCategory */ "../../packages/office-online-telemetry/lib/buls/LogCategory.js");


/**
 * A logger that prints to browser's console
 */
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.tagIntToString = function (tag) {
        // Implementation based on %SRCROOT%\toolsrc\DTUtil\DTUtil\TagUtils.cs
        if (tag <= ConsoleLogger.maxNumericTag) {
            return tag.toString();
        }
        if (tag >> 24 >= this.minOldSchemeHighByteValue) {
            // Old format
            return String.fromCharCode((tag >> 24) & 0xff, (tag >> 16) & 0xff, (tag >> 8) & 0xff, tag & 0xff);
        }
        // New format
        return (ConsoleLogger.map.charAt((tag >> 24) & 0x3f) +
            ConsoleLogger.map.charAt((tag >> 18) & 0x3f) +
            ConsoleLogger.map.charAt((tag >> 12) & 0x3f) +
            ConsoleLogger.map.charAt((tag >> 6) & 0x3f) +
            ConsoleLogger.map.charAt(tag & 0x3f));
    };
    ConsoleLogger.getLogMessage = function (tag, category, message) {
        // LogCategory[category] gets us the name instead of the value
        return "tag_" + ConsoleLogger.tagIntToString(tag) + " [" + _buls_LogCategory__WEBPACK_IMPORTED_MODULE_1__["LogCategory"][category] + "] " + message;
    };
    ConsoleLogger.prototype.sendTraceTag = function (tag, category, level, message) {
        var logFunc = console.log;
        switch (level) {
            case _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_0__["TraceLevel"].Error:
                logFunc = console.error;
                break;
            case _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_0__["TraceLevel"].Warning:
                logFunc = console.warn;
                break;
            case _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_0__["TraceLevel"].Info:
                logFunc = console.info;
                break;
            case _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_0__["TraceLevel"].Verbose:
                logFunc = console.debug;
                break;
            case _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_0__["TraceLevel"].Spam:
            default:
                logFunc = console.log;
                break;
        }
        try {
            logFunc(ConsoleLogger.getLogMessage(tag, category, message));
        }
        catch (e) {
            var nav = typeof navigator !== 'undefined' ? navigator : undefined;
            // If we get here and are not IE, this is unexpected, throw.
            // IE11 has some issues with console, just catch it and continue
            if (nav && !/rv:11.0/i.test(nav.userAgent)) {
                throw e;
            }
        }
    };
    ConsoleLogger.prototype.shipAssertTag = function (tag, category, condition, message) {
        console.assert(condition, ConsoleLogger.getLogMessage(tag, category, message));
    };
    ConsoleLogger.prototype.debugAssertTag = function (tag, category, condition, message) {
        // Check if we're in debug mode
        this.shipAssertTag(tag, category, condition, message);
    };
    ConsoleLogger.maxNumericTag = 0x0000ffff;
    ConsoleLogger.minOldSchemeHighByteValue = 36;
    ConsoleLogger.map = 'abcdefghijklmnopqrstuvwxyz0123456789';
    return ConsoleLogger;
}());

//# sourceMappingURL=ConsoleLogger.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/NoopLogger.js":
/*!***********************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/NoopLogger.js ***!
  \***********************************************************************/
/*! exports provided: NoopLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopLogger", function() { return NoopLogger; });
/**
 * A no-op logger
 */
var NoopLogger = /** @class */ (function () {
    function NoopLogger() {
    }
    NoopLogger.prototype.sendTraceTag = function () { };
    NoopLogger.prototype.shipAssertTag = function () { };
    NoopLogger.prototype.debugAssertTag = function () { };
    return NoopLogger;
}());

//# sourceMappingURL=NoopLogger.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/UnitTestLogger.js":
/*!***************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/UnitTestLogger.js ***!
  \***************************************************************************/
/*! exports provided: UnitTestLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitTestLogger", function() { return UnitTestLogger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _NoopLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoopLogger */ "../../packages/office-online-telemetry/lib/NoopLogger.js");


/**
 * A unit-test logger
 */
var UnitTestLogger = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UnitTestLogger, _super);
    function UnitTestLogger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UnitTestLogger;
}(_NoopLogger__WEBPACK_IMPORTED_MODULE_1__["NoopLogger"]));

//# sourceMappingURL=UnitTestLogger.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/buls/LogCategory.js":
/*!*****************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/buls/LogCategory.js ***!
  \*****************************************************************************/
/*! exports provided: LogCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogCategory", function() { return LogCategory; });
/**
 * This enum is a replica of the UlsCat defined in //depot/devmain/browsertelemetry/Diagnostics/API/Categories.cs
 * Do not add new categories here, only copy the needed categories from the above file
 */
var LogCategory;
(function (LogCategory) {
    LogCategory[LogCategory["msoulscat_ES_EWAJS"] = 0] = "msoulscat_ES_EWAJS";
    LogCategory[LogCategory["msoulscat_ES_EWAJSGrid"] = 1] = "msoulscat_ES_EWAJSGrid";
    LogCategory[LogCategory["msoulscat_ES_EWAJSChart"] = 6] = "msoulscat_ES_EWAJSChart";
    LogCategory[LogCategory["msoulscat_Wac_WordViewer"] = 301] = "msoulscat_Wac_WordViewer";
    LogCategory[LogCategory["msoulscat_Wac_BrowserGeneral"] = 306] = "msoulscat_Wac_BrowserGeneral";
    LogCategory[LogCategory["msoulscat_Wac_TaskPane"] = 320] = "msoulscat_Wac_TaskPane";
    LogCategory[LogCategory["msoulscat_Wac_OneNoteGeneral"] = 339] = "msoulscat_Wac_OneNoteGeneral";
    LogCategory[LogCategory["msoulscat_Wac_Ribbon"] = 340] = "msoulscat_Wac_Ribbon";
    LogCategory[LogCategory["msoulscat_Wac_WopiPendingApplication"] = 379] = "msoulscat_Wac_WopiPendingApplication";
    LogCategory[LogCategory["msoulscat_Wac_Telemetry"] = 383] = "msoulscat_Wac_Telemetry";
    LogCategory[LogCategory["msoulscat_Wac_WacCatchUpActivities"] = 391] = "msoulscat_Wac_WacCatchUpActivities";
    LogCategory[LogCategory["msoulscat_Wac_Dictation"] = 394] = "msoulscat_Wac_Dictation";
    LogCategory[LogCategory["msoulscat_Wac_OneNoteSync"] = 395] = "msoulscat_Wac_OneNoteSync";
    LogCategory[LogCategory["msoulscat_Wac_VisioApp"] = 700] = "msoulscat_Wac_VisioApp";
    LogCategory[LogCategory["msoulscat_OneNoteOnline_EditableCache"] = 1601] = "msoulscat_OneNoteOnline_EditableCache";
    LogCategory[LogCategory["msoulscat_Wac_PptAnimation"] = 800] = "msoulscat_Wac_PptAnimation";
    LogCategory[LogCategory["msoulscat_Wac_PptLive"] = 833] = "msoulscat_Wac_PptLive";
    LogCategory[LogCategory["msoulscat_Wac_PptMWeb"] = 834] = "msoulscat_Wac_PptMWeb";
    LogCategory[LogCategory["msoulscat_Wac_PptShape"] = 815] = "msoulscat_Wac_PptShape";
    LogCategory[LogCategory["msoulscat_Wac_PptSession"] = 817] = "msoulscat_Wac_PptSession";
    LogCategory[LogCategory["msoulscat_Wac_PptSlideshow"] = 830] = "msoulscat_Wac_PptSlideshow";
    LogCategory[LogCategory["msoulscat_Wac_VersionHistory"] = 2300] = "msoulscat_Wac_VersionHistory";
    LogCategory[LogCategory["msoulscat_Wac_WordPresence"] = 302] = "msoulscat_Wac_WordPresence";
    LogCategory[LogCategory["msoulscat_Wac_WordVersionHistory"] = 3005] = "msoulscat_Wac_WordVersionHistory";
    LogCategory[LogCategory["msoulscat_Wac_LivePersonaCard"] = 3006] = "msoulscat_Wac_LivePersonaCard";
    LogCategory[LogCategory["msoulscat_Wac_CatchUpFlyout"] = 3012] = "msoulscat_Wac_CatchUpFlyout";
})(LogCategory || (LogCategory = {}));
//# sourceMappingURL=LogCategory.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/buls/LogType.js":
/*!*************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/buls/LogType.js ***!
  \*************************************************************************/
/*! exports provided: LogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogType", function() { return LogType; });
var LogType;
(function (LogType) {
    LogType[LogType["Trace"] = 0] = "Trace";
    LogType[LogType["Assert"] = 1] = "Assert";
})(LogType || (LogType = {}));
//# sourceMappingURL=LogType.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/buls/TraceLevel.js":
/*!****************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/buls/TraceLevel.js ***!
  \****************************************************************************/
/*! exports provided: TraceLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraceLevel", function() { return TraceLevel; });
/**
 * Replicated from //depot/devmain/browsertelemetry/Diagnostics/API
 * Log/Trace level to be written
 *
 * @export
 * @enum {number}
 */
var TraceLevel;
(function (TraceLevel) {
    /**
     * Error handling code paths, almost always unexpected, generally unrecoverable.
     * aka Unexpected
     */
    TraceLevel[TraceLevel["Error"] = 10] = "Error";
    /**
     * Generally used for error-handling code paths that are occasionally expected
     * and/or usually handled appropriately.
     * aka Monitorable
     */
    TraceLevel[TraceLevel["Warning"] = 15] = "Warning";
    /**
     * Normal/expected code paths, used to indicate the "big" things that
     * are happening (e.g. activation, status updates).
     * aka Medium
     */
    TraceLevel[TraceLevel["Info"] = 50] = "Info";
    /**
     * Intended only for developers/testers for the purposes of debugging issues.
     */
    TraceLevel[TraceLevel["Verbose"] = 100] = "Verbose";
    /**
     * Generally not used, but expected to cause significant slow down (when on) and
     * significantly increase log size. Used only for debugging issues that are very
     * difficult to track down.
     * aka VerboseEx
     */
    TraceLevel[TraceLevel["Spam"] = 200] = "Spam";
})(TraceLevel || (TraceLevel = {}));
//# sourceMappingURL=TraceLevel.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/buls/bUls.js":
/*!**********************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/buls/bUls.js ***!
  \**********************************************************************/
/*! exports provided: getUlsLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUlsLogger", function() { return getUlsLogger; });
/* harmony import */ var _LogType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogType */ "../../packages/office-online-telemetry/lib/buls/LogType.js");
/* harmony import */ var _bUlsCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bUlsCache */ "../../packages/office-online-telemetry/lib/buls/bUlsCache.js");
/* harmony import */ var _TraceLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TraceLevel */ "../../packages/office-online-telemetry/lib/buls/TraceLevel.js");



function getUlsLogger(userSessionId, remoteUlsEndpoint) {
    var cache = new _bUlsCache__WEBPACK_IMPORTED_MODULE_1__["bUlsCache"](userSessionId, remoteUlsEndpoint);
    return {
        sendTraceTag: function (tag, category, level, message) {
            return traceTagImpl(cache, tag, category, level, message);
        },
        shipAssertTag: function (tag, category, condition, message) {
            if (condition) {
                traceTagImpl(cache, tag, category, _TraceLevel__WEBPACK_IMPORTED_MODULE_2__["TraceLevel"].Error, message);
            }
        },
        debugAssertTag: function () {
            // We don't yet have support for debug asserts. To do this properly, we want to write a TypeScript or Babel
            // plugin that does this transformation debugAssertTag(args) into node.env.production !== "production" && debugAssertTag(args)
            // to ensure that expensive conditionals are not evaluated in ship code.
            throw new Error('Debug Asserts not Implemented in the TypeScript bULS module');
        },
        flush: cache.flush,
        flushOnClose: cache.flushOnClose
    };
}
/** log Verbose and above in debug, Info and above in Ship */
var currentLevel =  true ? _TraceLevel__WEBPACK_IMPORTED_MODULE_2__["TraceLevel"].Verbose : undefined;
function traceTagImpl(cache, tag, category, level, message) {
    // check if the log statement is important enough to be logged
    if (level > currentLevel)
        return;
    var args = {
        timestamp: Date.now(),
        category: category,
        tag: tag,
        level: level,
        type: _LogType__WEBPACK_IMPORTED_MODULE_0__["LogType"].Trace,
        message: message
    };
    cache.handleTrace(args);
}
//# sourceMappingURL=bUls.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/buls/bUlsCache.js":
/*!***************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/buls/bUlsCache.js ***!
  \***************************************************************************/
/*! exports provided: bUlsCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bUlsCache", function() { return bUlsCache; });
/* harmony import */ var _bUlsUploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bUlsUploader */ "../../packages/office-online-telemetry/lib/buls/bUlsUploader.js");
/* harmony import */ var _bUlsFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bUlsFormatter */ "../../packages/office-online-telemetry/lib/buls/bUlsFormatter.js");
/* harmony import */ var _TraceLevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TraceLevel */ "../../packages/office-online-telemetry/lib/buls/TraceLevel.js");



var bUlsCache = /** @class */ (function () {
    function bUlsCache(userSessionId, remoteUlsEndpoint) {
        var _this = this;
        /** Rolling counter used to identify set of logs being uploaded to the server. */
        this.uploadId = 0;
        /** Actually cache collection */
        this.logCache = [];
        /** Base timestamp for all the logs in current batch */
        this.timestampBase = Date.now();
        this.userSessionId = '00000000-0000-0000-0000-000000000000';
        this.flushOnClose = function () {
            _this.triggerUpload(false, false);
        };
        this.flush = function () {
            _this.triggerUploadAsync();
        };
        this.triggerUploadAsync = function () {
            window.setTimeout(function () { return _this.triggerUpload(true, true); }, 0);
        };
        this.triggerUpload = function (scheduleNextUpload, async) {
            window.clearTimeout(_this.timeoutId);
            if (_this.logCache.length > 0) {
                // increment upload Id
                _this.uploadId += 1;
                // and upload it after serializing into wire format
                var logsPayload = Object(_bUlsFormatter__WEBPACK_IMPORTED_MODULE_1__["formatForUpload"])(_this.logCache, _this.userSessionId, _this.uploadId, _this.timestampBase);
                Object(_bUlsUploader__WEBPACK_IMPORTED_MODULE_0__["uploadLogs"])(logsPayload, _this.remoteUrlEndpoint, async);
                // reset cache
                _this.logCache = [];
                _this.timestampBase = Date.now();
            }
            // set the next execution if requested
            if (scheduleNextUpload) {
                _this.timeoutId = window.setTimeout(_this.triggerUploadAsync, bUlsCache.uploadCadenceInMsSec);
            }
        };
        this.userSessionId = userSessionId;
        this.remoteUrlEndpoint = remoteUlsEndpoint + '?usid=' + userSessionId;
        // kick off the Uls uploads with scheduleNextUplaod and async set to true
        window.setTimeout(function () { return _this.triggerUpload(true, true); }, 0);
    }
    bUlsCache.prototype.handleTrace = function (loggingArgs) {
        // trim the message if it's super long.
        if (loggingArgs.message.length > bUlsCache.messageMaxChars) {
            loggingArgs.message =
                loggingArgs.message.substr(0, bUlsCache.messageMaxChars - bUlsCache.trimmedMessage.length) +
                    bUlsCache.trimmedMessage;
        }
        // push to cache.
        this.logCache.push(loggingArgs);
        // upload if cache is full or the log is an Error-level statement.
        if (this.logCache.length > bUlsCache.uploadTriggerSize || loggingArgs.level === _TraceLevel__WEBPACK_IMPORTED_MODULE_2__["TraceLevel"].Error) {
            this.triggerUploadAsync();
        }
    };
    bUlsCache.messageMaxChars = 3072; // 3KB
    bUlsCache.uploadCadenceInMsSec = 30 * 1000;
    bUlsCache.uploadTriggerSize = 30; // number of logs in cache which will trigger immediate upload.
    bUlsCache.trimmedMessage = '... [Trimmed]';
    return bUlsCache;
}());

//# sourceMappingURL=bUlsCache.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/buls/bUlsFormatter.js":
/*!*******************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/buls/bUlsFormatter.js ***!
  \*******************************************************************************/
/*! exports provided: formatForUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatForUpload", function() { return formatForUpload; });
function formatForUpload(loggingArgs, userSessionId, uploadId, timestampBase) {
    var entries = loggingArgs.map(function (element) { return getLogEntryInWireFormat(element, timestampBase); });
    var batch = getLogBatchInWireFormat(timestampBase, entries, userSessionId, uploadId);
    return JSON.stringify(batch);
}
/** Use this to shift up another int before adding the Level when concatenating for serialization. */
var shiftFactory = 1000;
/** Serialize a single bULS entry into over-the-wire format */
function getLogEntryInWireFormat(loggingArgs, timestampBase) {
    var entry = {};
    entry['G'] = loggingArgs.tag;
    entry['T'] = loggingArgs.timestamp - timestampBase;
    entry['M'] = loggingArgs.message;
    entry['C'] = loggingArgs.category;
    // level and logType are combined into a single property called metadata
    var metadata = loggingArgs.type * shiftFactory + loggingArgs.level;
    entry['D'] = metadata;
    return entry;
}
function getLogBatchInWireFormat(timestampBase, logs, userSessionId, uploadId) {
    var batch = {};
    batch['T'] = timestampBase;
    batch['L'] = logs;
    batch['S'] = userSessionId;
    batch['I'] = uploadId;
    // schema version
    batch['V'] = 1;
    return batch;
}
//# sourceMappingURL=bUlsFormatter.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/buls/bUlsUploader.js":
/*!******************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/buls/bUlsUploader.js ***!
  \******************************************************************************/
/*! exports provided: uploadLogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadLogs", function() { return uploadLogs; });
// TODO: right now it's exactly what diagnostics.js is doing. However, I don't think it's actually 100% right.
// We should register an onreadystatechange callback and see the actual response from the server (should be 200 OK).
function uploadLogs(logs, remoteUlsEndpoint, async) {
    if (remoteUlsEndpoint === '')
        return;
    var request = new XMLHttpRequest();
    if (request.readyState === XMLHttpRequest.UNSENT || request.readyState === XMLHttpRequest.DONE) {
        request.open('POST', remoteUlsEndpoint, async);
        // Keep this a simple request by not adding any custom headers. This avoids the preflight OPTIONS request.
        // Only start sending custom headers if absolutely necessary for the server to handle to request.
        // CORS Simple Requests:https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Simple_requests
        request.send(logs);
    }
}
//# sourceMappingURL=bUlsUploader.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/externalLogger.js":
/*!***************************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/externalLogger.js ***!
  \***************************************************************************/
/*! exports provided: UlsLoggerWrapper, ULS, initializeLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UlsLoggerWrapper", function() { return UlsLoggerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ULS", function() { return ULS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeLogger", function() { return initializeLogger; });
/* harmony import */ var _NoopLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoopLogger */ "../../packages/office-online-telemetry/lib/NoopLogger.js");
/* harmony import */ var _ConsoleLogger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogger */ "../../packages/office-online-telemetry/lib/ConsoleLogger.js");


/**
 * Class that wraps the external ULS logger
 */
var UlsLoggerWrapper = /** @class */ (function () {
    function UlsLoggerWrapper() {
        this.externalLogger =  true ? new _ConsoleLogger__WEBPACK_IMPORTED_MODULE_1__["ConsoleLogger"]() : undefined;
    }
    UlsLoggerWrapper.prototype.setLogger = function (logger) {
        this.externalLogger = logger;
    };
    UlsLoggerWrapper.prototype.sendTraceTag = function (tag, category, level, message) {
        this.externalLogger.sendTraceTag(tag, category, level, message);
    };
    UlsLoggerWrapper.prototype.debugAssertTag = function (tag, category, condition, message) {
        this.externalLogger.debugAssertTag(tag, category, condition, message);
    };
    UlsLoggerWrapper.prototype.shipAssertTag = function (tag, category, condition, message) {
        this.externalLogger.shipAssertTag(tag, category, condition, message);
    };
    return UlsLoggerWrapper;
}());

/**
 * Instance of UlsLogger that can be set by the consumer
 */
var ULS = new UlsLoggerWrapper();
/**
 * Sets the logger instance.
 *
 * @export
 * @param {Logger} logger
 */
function initializeLogger(logger) {
    if (!logger) {
        throw new Error("The 'logger' argument is missing");
    }
    ULS.setLogger(logger);
}
//# sourceMappingURL=externalLogger.js.map

/***/ }),

/***/ "../../packages/office-online-telemetry/lib/index.js":
/*!******************************************************************!*\
  !*** C:/_work/4/s/packages/office-online-telemetry/lib/index.js ***!
  \******************************************************************/
/*! exports provided: UlsLoggerWrapper, ULS, initializeLogger, getUlsLogger, formatForUpload, uploadLogs, LogCategory, LogType, TraceLevel, UnitTestLogger, ConsoleLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _externalLogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./externalLogger */ "../../packages/office-online-telemetry/lib/externalLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UlsLoggerWrapper", function() { return _externalLogger__WEBPACK_IMPORTED_MODULE_0__["UlsLoggerWrapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ULS", function() { return _externalLogger__WEBPACK_IMPORTED_MODULE_0__["ULS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeLogger", function() { return _externalLogger__WEBPACK_IMPORTED_MODULE_0__["initializeLogger"]; });

/* harmony import */ var _buls_bUls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buls/bUls */ "../../packages/office-online-telemetry/lib/buls/bUls.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUlsLogger", function() { return _buls_bUls__WEBPACK_IMPORTED_MODULE_1__["getUlsLogger"]; });

/* harmony import */ var _buls_bUlsFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buls/bUlsFormatter */ "../../packages/office-online-telemetry/lib/buls/bUlsFormatter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatForUpload", function() { return _buls_bUlsFormatter__WEBPACK_IMPORTED_MODULE_2__["formatForUpload"]; });

/* harmony import */ var _buls_bUlsUploader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buls/bUlsUploader */ "../../packages/office-online-telemetry/lib/buls/bUlsUploader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadLogs", function() { return _buls_bUlsUploader__WEBPACK_IMPORTED_MODULE_3__["uploadLogs"]; });

/* harmony import */ var _buls_LogCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buls/LogCategory */ "../../packages/office-online-telemetry/lib/buls/LogCategory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogCategory", function() { return _buls_LogCategory__WEBPACK_IMPORTED_MODULE_4__["LogCategory"]; });

/* harmony import */ var _buls_LogType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buls/LogType */ "../../packages/office-online-telemetry/lib/buls/LogType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogType", function() { return _buls_LogType__WEBPACK_IMPORTED_MODULE_5__["LogType"]; });

/* harmony import */ var _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buls/TraceLevel */ "../../packages/office-online-telemetry/lib/buls/TraceLevel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TraceLevel", function() { return _buls_TraceLevel__WEBPACK_IMPORTED_MODULE_6__["TraceLevel"]; });

/* harmony import */ var _UnitTestLogger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UnitTestLogger */ "../../packages/office-online-telemetry/lib/UnitTestLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnitTestLogger", function() { return _UnitTestLogger__WEBPACK_IMPORTED_MODULE_7__["UnitTestLogger"]; });

/* harmony import */ var _ConsoleLogger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ConsoleLogger */ "../../packages/office-online-telemetry/lib/ConsoleLogger.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogger", function() { return _ConsoleLogger__WEBPACK_IMPORTED_MODULE_8__["ConsoleLogger"]; });










//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./lib/richTextEditor/index.js":
/*!*************************************!*\
  !*** ./lib/richTextEditor/index.js ***!
  \*************************************/
/*! exports provided: TextPart, RichTextEditorConstants, RichTextEditorFactoryGlobal, isChangeGateEnabled, RichTextEditor, RichTextEditorFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_excel_online_rte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/excel-online-rte */ "../../packages/excel-online-rte/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextPart", function() { return _ms_excel_online_rte__WEBPACK_IMPORTED_MODULE_0__["TextPart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorConstants", function() { return _ms_excel_online_rte__WEBPACK_IMPORTED_MODULE_0__["RichTextEditorConstants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorFactoryGlobal", function() { return _ms_excel_online_rte__WEBPACK_IMPORTED_MODULE_0__["RichTextEditorFactoryGlobal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isChangeGateEnabled", function() { return _ms_excel_online_rte__WEBPACK_IMPORTED_MODULE_0__["isChangeGateEnabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditor", function() { return _ms_excel_online_rte__WEBPACK_IMPORTED_MODULE_0__["RichTextEditor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RichTextEditorFactory", function() { return _ms_excel_online_rte__WEBPACK_IMPORTED_MODULE_0__["RichTextEditorFactory"]; });


//# sourceMappingURL=index.js.map

/***/ })

/******/ });
if (window && window.performance && window.performance.mark) {window.performance.mark("richTextEditor--ExecutionEnd");}
//# sourceMappingURL=richTextEditor.js.map