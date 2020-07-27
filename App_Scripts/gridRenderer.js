var gridRenderer =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/inherits/2.0.3/node_modules/inherits/inherits_browser.js":
/*!*****************************************************************************************************************************************!*\
  !*** C:/_work/5/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/inherits/2.0.3/node_modules/inherits/inherits_browser.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/process/0.11.10/node_modules/process/browser.js":
/*!********************************************************************************************************************************!*\
  !*** C:/_work/5/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/process/0.11.10/node_modules/process/browser.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js":
/*!*****************************************************************************************************************************!*\
  !*** C:/_work/5/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js ***!
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

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/support/isBufferBrowser.js":
/*!*****************************************************************************************************************************************!*\
  !*** C:/_work/5/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/support/isBufferBrowser.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js":
/*!**********************************************************************************************************************!*\
  !*** C:/_work/5/s/common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = Object({"NODE_ENV":"development"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/inherits/2.0.3/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/0.11.10/node_modules/process/browser.js */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/process/0.11.10/node_modules/process/browser.js")))

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/index.js":
/*!*********************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./src/generated/gridBlockRenderer.gen */ "../../packages/excel-online-grid-renderer/lib/src/generated/gridBlockRenderer.gen.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./src/gridBlockRenderer */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRenderer.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./src/gridBlockRendererFactory */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRendererFactory.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./src/gridBlockRendererGlobals */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRendererGlobals.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/backgroundFill/backgroundFill.js":
/*!*********************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/backgroundFill/backgroundFill.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var cellLayout_1 = __webpack_require__(/*! ../../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var helpers_3 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var gradientFill_1 = __webpack_require__(/*! ./gradientFill */ "../../packages/excel-online-grid-renderer/lib/src/drawing/backgroundFill/gradientFill.js");
/**
 * Draw background colors.
 */
function drawBackgroundFill(ctx, model, context) {
    helpers_3.verifyArgumentNotNull(model.RowOffsets, 'model.RowOffsets', 'drawBackgroundFill');
    helpers_3.verifyArgumentNotNull(model.ColumnOffsets, 'model.ColumnOffsets', 'drawBackgroundFill');
    helpers_3.verifyArgumentNotNull(model.RowHeights, 'model.RowHeights', 'drawBackgroundFill');
    helpers_3.verifyArgumentNotNull(model.ColumnWidths, 'model.ColumnWidths', 'drawBackgroundFill');
    helpers_3.verifyArgumentNotNull(model.Cells, 'model.Cells', 'drawBackgroundFill');
    helpers_3.verifyArgumentNotNull(model.Styles, 'model.Styles', 'drawBackgroundFill');
    if (context.highContrastScheme) {
        return;
    }
    if (!helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.GradientFill, model)) {
        drawBackgroundFillInternalOld(ctx, model, context);
    }
    else {
        var cells = model.Cells;
        // Empty fill style
        var previousFillStyle = void 0;
        var mergeAcrossRowsCells = [];
        // Iterating over all cell and draw backgrounds
        for (var i = 0; i < cells.length; i++) {
            var currentCell = cells[i];
            var backgroundFillType = getBackgroundFillType(model, currentCell);
            // If the cell does not have fill skip it
            if (backgroundFillType === BackgroundFillType.None) {
                continue;
            }
            // If the cell isn't in the current rendering region skip it
            if (!helpers_1.cellIntersectsRenderingRegion(currentCell, context.renderingRegion)) {
                continue;
            }
            // If the current cell spans more than one row draw the background fill at the end to verify the cell background fill would be aligned properly
            if (cellLayout_1.isCellSpansMultipleRowsOrBlocks(currentCell)) {
                mergeAcrossRowsCells.push([currentCell, backgroundFillType]);
            }
            else {
                previousFillStyle = fillCell(ctx, model, currentCell, backgroundFillType, previousFillStyle);
            }
        }
        // Iterate over all the merge cells and draw backgrounds
        for (var i = 0; i < mergeAcrossRowsCells.length; i++) {
            var _a = mergeAcrossRowsCells[i], currentCell = _a[0], backgroundFillType = _a[1];
            previousFillStyle = fillCell(ctx, model, currentCell, backgroundFillType, previousFillStyle);
        }
    }
}
exports.drawBackgroundFill = drawBackgroundFill;
/**
 * Creates the fill style for the cell.
 * Sets it to the canvas context if it's not been already set.
 * Fills the cell with the created style and returns the used fill style
 *
 * @param ctx Canvas context
 * @param model The grid view block model
 * @param cell The cell to be filled
 * @param backgroundFillType The cell background fill type
 * @param previousFillStyle  The cached fill style
 * @returns The used fill style
 */
function fillCell(ctx, model, cell, backgroundFillType, previousFillStyle) {
    var cellDimensions = getCellDimensionsAdjustedForDrawing(model, cell);
    if (backgroundFillType === BackgroundFillType.Gradient) {
        return gradientFill_1.fillCellWithGradientBackground(ctx, cell.CachedStyle.Gradient, cellDimensions, previousFillStyle);
    }
    var fillStyle = getSolidFillStyle(cell, backgroundFillType);
    // Switch fill style only when needed
    if (previousFillStyle !== fillStyle) {
        ctx.fillStyle = fillStyle;
    }
    ctx.fillRect(cellDimensions.x, cellDimensions.y, cellDimensions.width, cellDimensions.height);
    return fillStyle;
}
function drawBackgroundFillInternalOld(ctx, model, context) {
    var cells = model.Cells;
    var previousFillStyle;
    var mergeAcrossRowsCells = [];
    // Iterating over all cell and draw backgrounds
    for (var i = 0; i < cells.length; i++) {
        var currentCell = cells[i];
        var fillStyle = getFillStyleOld(currentCell, model);
        // If there is no fill style at all, we move to the next cell
        if (!fillStyle) {
            continue;
        }
        // If the cell isn't in the current rendering region skip it
        if (!helpers_1.cellIntersectsRenderingRegion(currentCell, context.renderingRegion)) {
            continue;
        }
        // If the current cell spans more than one row draw the background fill at the end to verify the cell background fill would be aligned properly
        if (cellLayout_1.isCellSpansMultipleRowsOrBlocks(currentCell) && fillStyle) {
            mergeAcrossRowsCells.push(currentCell);
        }
        else {
            // Switch fill style only when needed
            if (previousFillStyle !== fillStyle) {
                ctx.fillStyle = fillStyle;
                previousFillStyle = fillStyle;
            }
            fillCellOld(ctx, model, currentCell);
        }
    }
    // Iterate over all the merge cells and draw backgrounds
    for (var i = 0; i < mergeAcrossRowsCells.length; i++) {
        var currentCell = mergeAcrossRowsCells[i];
        var fillStyle = getFillStyleOld(currentCell, model);
        // Switch fill style only when needed
        if (previousFillStyle !== fillStyle) {
            ctx.fillStyle = fillStyle;
            previousFillStyle = fillStyle;
        }
        fillCellOld(ctx, model, currentCell);
    }
}
/**
 *  Fill cell with fill style.
 *  We adjust the pixels in such a way that we draw the background on the grid lines of the cell as well.
 *  We also take into account the device pixel ratio to handle zoom changes
 *
 * @param ctx canvas context - fill style is already set
 * @param model the grid view block model
 * @param cell the cell to be filled
 */
function fillCellOld(ctx, model, cell) {
    var x = cellLayout_1.getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false) - drawingConstants_1.GridLineWidthPx;
    var y = cellLayout_1.getCellTopAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx;
    var width = cellLayout_1.getCellWidthAdjustedForDrawing(model, cell) + drawingConstants_1.GridLineWidthPx;
    var height = cellLayout_1.getCellHeightAdjustedForDrawing(model, cell) + drawingConstants_1.GridLineWidthPx;
    ctx.fillRect(x, y, width, height);
}
/**
 * Returns the fill style. If the cell has formula error we override the fill style to white.
 *
 * @param cell The cell
 */
function getFillStyleOld(cell, model) {
    var _a;
    if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.HasErrorRefactoring, model)) {
        if (cell.HasError) {
            return drawingConstants_1.FormulaErrorBackgroundColor;
        }
    }
    else if ((_a = cell.FormulaInfo) === null || _a === void 0 ? void 0 : _a.HasError) {
        return drawingConstants_1.FormulaErrorBackgroundColor;
    }
    return cell.CachedStyle.BackgroundColor;
}
/**
 * Returns the background fill type
 *
 * @param model The model
 * @param cell The cell to be filled
 */
function getBackgroundFillType(model, cell) {
    var _a;
    if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.HasErrorRefactoring, model)) {
        if (cell.HasError) {
            return BackgroundFillType.FormulaParseError;
        }
    }
    else if ((_a = cell.FormulaInfo) === null || _a === void 0 ? void 0 : _a.HasError) {
        return BackgroundFillType.FormulaParseError;
    }
    if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.GradientFill, model) && !util_1.isNullOrUndefined(cell.CachedStyle.Gradient)) {
        return BackgroundFillType.Gradient;
    }
    return util_1.isNullOrUndefined(cell.CachedStyle.BackgroundColor) ? BackgroundFillType.None : BackgroundFillType.Solid;
}
/**
 * Returns the fill style.
 * If the cell has formula error we override the fill style to white.
 *
 * @param cell The cell to be filled
 * @param backgroundFillType The cell background fill type
 */
function getSolidFillStyle(cell, backgroundFillType) {
    if (backgroundFillType === BackgroundFillType.FormulaParseError) {
        return drawingConstants_1.FormulaErrorBackgroundColor;
    }
    return cell.CachedStyle.BackgroundColor;
}
/**
 * Returns the adjusted top, left, width and height of the cell taking into accound the grid line width, merged cells and DPR
 *
 * @param model the grid view block model
 * @param cell the cell to be filled
 */
function getCellDimensionsAdjustedForDrawing(model, cell) {
    var x = cellLayout_1.getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false) - drawingConstants_1.GridLineWidthPx;
    var y = cellLayout_1.getCellTopAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx;
    var width = cellLayout_1.getCellWidthAdjustedForDrawing(model, cell) + drawingConstants_1.GridLineWidthPx;
    var height = cellLayout_1.getCellHeightAdjustedForDrawing(model, cell) + drawingConstants_1.GridLineWidthPx;
    return { x: x, y: y, width: width, height: height };
}
/**
 * Indicates the type of the background fill
 */
var BackgroundFillType;
(function (BackgroundFillType) {
    BackgroundFillType[BackgroundFillType["None"] = 0] = "None";
    BackgroundFillType[BackgroundFillType["Solid"] = 1] = "Solid";
    BackgroundFillType[BackgroundFillType["FormulaParseError"] = 2] = "FormulaParseError";
    BackgroundFillType[BackgroundFillType["Gradient"] = 3] = "Gradient";
})(BackgroundFillType || (BackgroundFillType = {}));
//# sourceMappingURL=backgroundFill.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/backgroundFill/gradientFill.js":
/*!*******************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/backgroundFill/gradientFill.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
/**
 * Fills the cell in a gradient background by creating the gradient fill style for the cell and setting to the canvas context if it has not been set already.
 * It returns the last used linear gradient fill style. For path gradient, it will return the fill style of the second pass.
 *
 * For more details on how to the gradient is drawn using the Canvas2D API, refer to src/drawing/backgroundFill/readme.md file.
 *
 * @param ctx The canvas context
 * @param gradient The cell gradient information
 * @param cellDimensions The cell dimensions
 * @param previousFillStyle  The cached fill style
 * @returns The last used fill style
 */
function fillCellWithGradientBackground(ctx, gradient, cellDimensions, previousFillStyle) {
    var fill = createGradientFill(ctx, gradient.ShadingStyle, gradient.Stops, cellDimensions);
    if (fill !== previousFillStyle) {
        ctx.fillStyle = fill;
    }
    ctx.fillRect(cellDimensions.x, cellDimensions.y, cellDimensions.width, cellDimensions.height);
    // Draw second pass for path gradient
    if (hasSecondPass(gradient.ShadingStyle)) {
        fill = ctx.fillStyle = createGradientFill(ctx, getSecondPassShadingStyle(gradient.ShadingStyle), gradient.Stops, cellDimensions);
        setSecondPassStencil(ctx, gradient.ShadingStyle, cellDimensions);
        ctx.fill();
    }
    return fill;
}
exports.fillCellWithGradientBackground = fillCellWithGradientBackground;
/**
 * Returns a linear gradient fill style.
 * It creates the gradient line based on the gradient shading style and the cell dimensions. Each point on the gradient line has a distinct color according to the color stops and position
 * The fill style is composed of a series of colored lines perpendicular to the gradient line, each one matching the color of the point where it intersects the gradient line.
 * For path gradient, it will return the linear gradient for the fitst pass
 *
 * @param ctx The canvas context
 * @param shadingStyle The cell gradient shading style
 * @param stops The gradient color stops
 * @param cellDimensions The cell dimensions
 */
function createGradientFill(ctx, shadingStyle, stops, cellDimensions) {
    helpers_1.verifyArgumentNotNull(stops, 'cell.CachedStyle.Gradient.Stops', 'createGradientFill');
    var gradientLine = getGradientLine(shadingStyle, cellDimensions);
    var canvasGradient = ctx.createLinearGradient(gradientLine.x0, gradientLine.y0, gradientLine.x1, gradientLine.y1);
    for (var i = 0; i < stops.length; i++) {
        canvasGradient.addColorStop(stops[i].Position, stops[i].Color);
    }
    return canvasGradient;
}
/**
 * Returns the starting point and ending point of the gradient line according to the shading style of the gradient.
 *
 * @param gradientShadingStyle The shading style of the gradient
 * @param cellDimensions The dimension of the cell to be filled
 */
function getGradientLine(gradientShadingStyle, cellDimensions) {
    var x = cellDimensions.x, y = cellDimensions.y, width = cellDimensions.width, height = cellDimensions.height;
    switch (gradientShadingStyle) {
        case gridBlockModelDto_1.GradientShadingStyle.Vertical:
        case gridBlockModelDto_1.GradientShadingStyle.Center:
        case gridBlockModelDto_1.GradientShadingStyle.TopRightCorner:
            return { x0: x, y0: 0, x1: x + width, y1: 0 };
        case gridBlockModelDto_1.GradientShadingStyle.ReversedVertical:
        case gridBlockModelDto_1.GradientShadingStyle.TopLeftCorner:
            return { x0: x + width, y0: 0, x1: x, y1: 0 };
        case gridBlockModelDto_1.GradientShadingStyle.Horizontal:
        case gridBlockModelDto_1.GradientShadingStyle.BottomRightCorner:
        case gridBlockModelDto_1.GradientShadingStyle.BottomLeftCorner:
            return { x0: 0, y0: y, x1: 0, y1: y + height };
        case gridBlockModelDto_1.GradientShadingStyle.ReversedHorizontal:
            return { x0: 0, y0: y + height, x1: 0, y1: y };
        case gridBlockModelDto_1.GradientShadingStyle.DiagonalUp:
        case gridBlockModelDto_1.GradientShadingStyle.DiagonalDown:
        case gridBlockModelDto_1.GradientShadingStyle.ReversedDiagonalUp:
        case gridBlockModelDto_1.GradientShadingStyle.ReversedDiagonalDown:
            return getDiagonalGradientLine(gradientShadingStyle, cellDimensions);
        default:
            throw Error("getGradientLine:: Gradient not supported");
    }
}
/**
 * Calculates the starting point and the ending point of the diagonal gradient line
 * For more details on calculating the diagonal gradient line refer to the src/drawing/backgroundFill/readme.md file
 *
 * @param gradientShadingStyle
 * @param cellDimensions
 */
function getDiagonalGradientLine(gradientShadingStyle, cellDimensions) {
    // The cell width squared
    var w2 = cellDimensions.width * cellDimensions.width;
    // The cell height squared
    var h2 = cellDimensions.height * cellDimensions.height;
    // The cell diagonal squared (Pythagoras theorem)
    var d2 = w2 + h2;
    // The x coordinate of the center
    var xCenter = cellDimensions.x + cellDimensions.width / 2;
    // The y coordinate of the center
    var yCenter = cellDimensions.y + cellDimensions.height / 2;
    // The displacemnt of the gradient ending point from the cell center
    var xDisplacement = (cellDimensions.width * h2) / d2;
    var yDisplacement = (w2 * cellDimensions.height) / d2;
    switch (gradientShadingStyle) {
        case gridBlockModelDto_1.GradientShadingStyle.DiagonalUp:
            break;
        case gridBlockModelDto_1.GradientShadingStyle.DiagonalDown:
            xDisplacement = -xDisplacement;
            break;
        case gridBlockModelDto_1.GradientShadingStyle.ReversedDiagonalUp:
            yDisplacement = -yDisplacement;
            break;
        case gridBlockModelDto_1.GradientShadingStyle.ReversedDiagonalDown:
            xDisplacement = -xDisplacement;
            yDisplacement = -yDisplacement;
            break;
        default:
            throw Error("getDiagonalGradientLine:: Gradient shading style is not diagonal.");
    }
    return {
        x0: xCenter - xDisplacement,
        y0: yCenter - yDisplacement,
        x1: xCenter + xDisplacement,
        y1: yCenter + yDisplacement
    };
}
/**
 * Return true if the gradient shading style has a second pass
 *
 * @param gradientShadingStyle The gradient shading style
 */
function hasSecondPass(gradientShadingStyle) {
    switch (gradientShadingStyle) {
        case gridBlockModelDto_1.GradientShadingStyle.TopLeftCorner:
        case gridBlockModelDto_1.GradientShadingStyle.TopRightCorner:
        case gridBlockModelDto_1.GradientShadingStyle.BottomLeftCorner:
        case gridBlockModelDto_1.GradientShadingStyle.BottomRightCorner:
        case gridBlockModelDto_1.GradientShadingStyle.Center:
            return true;
        default:
            return false;
    }
}
/**
 * Sets the the stencil for the second pass for the path gradient
 * For corner gradients the outline is a right triangle. The base if the triangle is on the top edge of the cell.
 * For top left corner and bottom right corner gradient the hypotenuse of the triangle goes from the top left corner of the cell to the bottom right corner of the cell
 * For top right corner and bottom left corner gradient the hypotenuse of the triangle goes from the top right corner of the cell to the bottom left corner of the cell
 * For center gradient the outline is a sand clock shape.
 *
 * @param ctx The canvas context
 * @param gradient The cell gradient information
 * @param cellDimensions The cell dimensions
 */
function setSecondPassStencil(ctx, gradientShadingStyle, cellDimensions) {
    var x = cellDimensions.x, y = cellDimensions.y, width = cellDimensions.width, height = cellDimensions.height;
    ctx.beginPath();
    ctx.moveTo(x, y);
    // Draw a line on the upper edge of the cell
    ctx.lineTo(x + width, y);
    switch (gradientShadingStyle) {
        case gridBlockModelDto_1.GradientShadingStyle.TopLeftCorner:
        case gridBlockModelDto_1.GradientShadingStyle.BottomRightCorner:
            // Draw a line on the right edge of the cell
            ctx.lineTo(x + width, y + height);
            break;
        case gridBlockModelDto_1.GradientShadingStyle.TopRightCorner:
        case gridBlockModelDto_1.GradientShadingStyle.BottomLeftCorner:
            // Draw a line on the diagonal of the cell that connects the top right to the bottom left
            ctx.lineTo(x, y + height);
            break;
        case gridBlockModelDto_1.GradientShadingStyle.Center:
            // Draw a line on the diagonal of the cell that connects the top right to the bottom left
            ctx.lineTo(x, y + height);
            // Draw a line on the bottom edge of the cell
            ctx.lineTo(x + width, y + height);
            break;
        default:
            throw Error("setSecondPassStencil:: Gradient shading style does not have a second pass.");
    }
    // connect the path back to the top left corner of the cell
    ctx.lineTo(x, y);
}
/**
 * Decides the orientation of the second pass for path gradients
 *
 * @param shadingStyle The shading style of the gradient
 */
function getSecondPassShadingStyle(shadingStyle) {
    switch (shadingStyle) {
        case gridBlockModelDto_1.GradientShadingStyle.TopLeftCorner:
            return gridBlockModelDto_1.GradientShadingStyle.ReversedHorizontal;
        case gridBlockModelDto_1.GradientShadingStyle.TopRightCorner:
            return gridBlockModelDto_1.GradientShadingStyle.ReversedHorizontal;
        case gridBlockModelDto_1.GradientShadingStyle.BottomLeftCorner:
            return gridBlockModelDto_1.GradientShadingStyle.ReversedVertical;
        case gridBlockModelDto_1.GradientShadingStyle.BottomRightCorner:
            return gridBlockModelDto_1.GradientShadingStyle.Vertical;
        case gridBlockModelDto_1.GradientShadingStyle.Center:
            return gridBlockModelDto_1.GradientShadingStyle.Horizontal;
        default:
            throw Error("getSecondPassShadingStyle:: Gradient shading style does not have a second pass.");
    }
}
//# sourceMappingURL=gradientFill.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/borders.js":
/*!***********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/borders.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var gridBlockModelComparer_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelComparer */ "../../packages/excel-online-models/lib/src/gridBlockModelComparer.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var clearGridLines_1 = __webpack_require__(/*! ./clearGridLines */ "../../packages/excel-online-grid-renderer/lib/src/drawing/clearGridLines.js");
var cellLayout_1 = __webpack_require__(/*! ../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var RgbColorMapping = {};
var LineDashArrayMapping = {};
/**
 * Clears gridlines for borders that are dotted or dashed.
 * When drawing dashed and dotted borders, there are regions where line is not drawn and are left blank.
 * Example a dashed border will be drawn => - - - - - -
 * We want the color of the regions in between the dashes to be either background color or default sheet color.
 * Hence we clear gridlines only for dotted or dashed borders and for those cells where the background color is not defined.
 *
 * @param ctx canvasContext
 * @param model GridBlockModel
 * @param context Rendering Context
 */
function clearGridLinesForBorder(ctx, model, context) {
    // Return if gridlines are not shown to the user.
    if (!model.ShowGridLines) {
        return;
    }
    // if we didn't render gridlines - no need to clear them
    if (!helpers_1.shouldRenderGridLines(helpers_2.isHighContrastMode(context), helpers_2.hasWorkbookBackgroundColor(model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model)))) {
        return;
    }
    validateModel(model);
    clearGridLines_1.setContextForClearingGridLine(ctx, context, model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model));
    var Cells = model.Cells;
    ctx.beginPath();
    for (var i = 0; i < Cells.length; i++) {
        var currentCell = Cells[i];
        var borderStyles = getBorderStyleForRendering(currentCell, model);
        // If the cell isn't in the current rendering region skip it
        if (!helpers_1.cellIntersectsRenderingRegion(currentCell, context.renderingRegion)) {
            continue;
        }
        if (!borderStyles) {
            continue;
        }
        // Background color is drawn above gridlines, and for dotted and dashed border the empty space should have the background color, if present.
        if (!borderStyles.Borders || borderStyles.Borders.length === 0 || currentCell.CachedStyle.BackgroundColor) {
            continue;
        }
        var borders = borderStyles.Borders;
        // For each border, check if border is dashed or dotted, and clear the gridLine if it is.
        for (var index = 0; index < borders.length; index++) {
            var currentBorder = borders[index];
            // If the border line type is None, it shouldn't be considered. This is only to validate border visual regression tests only.
            if (currentBorder.BorderLineStyle === gridBlockModelDto_1.BorderLineType.None) {
                continue;
            }
            // If the borderline is solid, the border will overwrite the gridLine so not removing it explicitly.
            if (isBorderSolidLine(currentBorder.BorderLineStyle)) {
                continue;
            }
            if (!shouldDrawBorder(currentBorder.BorderPosition, model, currentCell)) {
                continue;
            }
            // Draw the border line in order to clear gridLine.
            drawBorderLine(ctx, drawingConstants_1.ThinBorderWeight, createLineToDraw(model, currentCell, currentBorder.BorderPosition, drawingConstants_1.GridLineWidthPx), drawingConstants_1.GridLineWidthPx);
        }
    }
    // Stroke all lines together.
    ctx.stroke();
}
exports.clearGridLinesForBorder = clearGridLinesForBorder;
/**
 * Draws borders for the current block.
 *
 * @param ctx canvasContext
 * @param model GridBlockModel
 * @param context RenderingContext
 */
function drawBorders(ctx, model, context) {
    validateModel(model);
    var defaultBorderWidth = helpers_1.getDefaultBorderLineWidth(context.devicePixelRatio);
    // Prepare model before drawing,
    //    constructs an array of distinct border borders that have to be drawn in the block (distinctBorderTypes)
    //    also constructs the  border type to line mapping (borderTypeToLinesMap)
    var backgroundColor = helpers_2.getWorkbookBackgroundColor(context.highContrastScheme, model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model));
    var sheetBackgroundColor = helpers_1.hexToRgb(backgroundColor);
    var dictionaryOfBorders = prepareModel(model, defaultBorderWidth, sheetBackgroundColor, context);
    var highContrastBackgroundColor;
    var highContrastBorderColor;
    // In high contrast mode, border color is text color of high contrast scheme and
    // clearing border color is background color of high contrast scheme
    if (context.highContrastScheme) {
        highContrastBorderColor = helpers_1.rgbToColorHex(context.highContrastScheme.TextColor);
        highContrastBackgroundColor = helpers_1.rgbToColorHex(context.highContrastScheme.BackgroundColor);
        // Draw borders in high contrast mode
        drawBorderLines(ctx, dictionaryOfBorders.distinctBorderTypes, dictionaryOfBorders.borderTypeToLineMap, defaultBorderWidth, highContrastBorderColor);
        // Clear Grid lines of double borders in high contrast mode
        drawBorderLines(ctx, dictionaryOfBorders.distinctClearingDoubleBorderTypes, dictionaryOfBorders.clearingDoubleBordersToLineMap, defaultBorderWidth, highContrastBackgroundColor);
    }
    else {
        // Draw borders in non high contrast mode
        drawBorderLines(ctx, dictionaryOfBorders.distinctBorderTypes, dictionaryOfBorders.borderTypeToLineMap, defaultBorderWidth, 
        /* highContrastColor */ undefined);
        // Clear Grid lines of double borders in non high contrast mode
        drawBorderLines(ctx, dictionaryOfBorders.distinctClearingDoubleBorderTypes, dictionaryOfBorders.clearingDoubleBordersToLineMap, defaultBorderWidth, 
        /* highContrastColor */ undefined);
    }
}
exports.drawBorders = drawBorders;
/**
 * Validate the model.
 */
function validateModel(model) {
    helpers_2.verifyArgumentNotNull(model, 'model', 'validateModel');
    helpers_2.verifyArgumentNotNull(model.Cells, 'model.Cells', 'validateModel');
    helpers_2.verifyArgumentNotNull(model.RowOffsets, 'model.RowOffsets', 'validateModel');
    helpers_2.verifyArgumentNotNull(model.ColumnOffsets, 'model.ColumnOffsets', 'validateModel');
    helpers_2.verifyArgumentNotNull(model.RowHeights, 'model.RowHeights', 'validateModel');
    helpers_2.verifyArgumentNotNull(model.ColumnWidths, 'model.ColumnWidths', 'validateModel');
}
/**
 * Creates a border with default color and thin weight. border position is specified by the client.
 */
function createThinBorder(borderPosition, sheetBackgroundColor) {
    return {
        BorderLineStyle: gridBlockModelDto_1.BorderLineType.Thin,
        Color: sheetBackgroundColor,
        Weight: drawingConstants_1.ThinBorderWeight,
        BorderPosition: borderPosition
    };
}
/**
 * Prepare the model before drawing the borders.
 * The method returns distinct border types to draw and mapping of border types to lines to draw.
 * Map of borders to be rendered and map of grid lines to be cleared in case of double borders.
 */
function prepareModel(model, defaultBorderWidth, sheetBackgroundColor, context) {
    var borderTypeToLinesMap = {};
    var distinctBorderTypes = [];
    var distinctClearingDoubleBorderTypes = [];
    var clearingDoubleBordersToLineMap = {};
    var cells = model.Cells;
    // Go over cells to prepare borders structure for drawing
    for (var i = 0; i < cells.length; i++) {
        var currentCell = cells[i];
        var borderStyles = getBorderStyleForRendering(currentCell, model);
        if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.BorderOnEdgeOfRenderingRegion, model)) {
            // If the cell isn't in the current rendering region and if it isn't on the edge of the
            // rendering region, skip it.
            if (!helpers_1.cellIntersectsRenderingRegion(currentCell, context.renderingRegion) &&
                !cellOnEdgeOfRenderingRegion(currentCell, context.renderingRegion)) {
                continue;
            }
        }
        else {
            // If the cell isn't in the current rendering region skip it
            if (!helpers_1.cellIntersectsRenderingRegion(currentCell, context.renderingRegion)) {
                continue;
            }
        }
        if (!borderStyles) {
            continue;
        }
        if (!borderStyles.Borders || borderStyles.Borders.length === 0) {
            continue;
        }
        var borders = borderStyles.Borders;
        for (var index = 0; index < borders.length; index++) {
            var currentBorder = borders[index];
            // If the border line type is None, it shouldn't be considered. This is only to validate border visual regression tests only.
            if (currentBorder.BorderLineStyle === gridBlockModelDto_1.BorderLineType.None) {
                continue;
            }
            if (!shouldDrawBorder(currentBorder.BorderPosition, model, currentCell)) {
                continue;
            }
            // If the border line type is double, a thick border is drawn covering grid line.
            // At the end of drawing all borders gridlines of double borders are cleared using sheet background color to get two lines as in double borders.
            // If the cell has background color same will be used to draw grid line.
            if (currentBorder.BorderLineStyle === gridBlockModelDto_1.BorderLineType.Double) {
                var borderColor = currentCell.CachedStyle.BackgroundColor
                    ? helpers_1.hexToRgb(currentCell.CachedStyle.BackgroundColor)
                    : sheetBackgroundColor;
                var clearingBorder = createThinBorder(currentBorder.BorderPosition, borderColor);
                mapBordersToDistinctTypes(model, currentCell, clearingBorder, defaultBorderWidth, distinctClearingDoubleBorderTypes, clearingDoubleBordersToLineMap);
            }
            mapBordersToDistinctTypes(model, currentCell, currentBorder, defaultBorderWidth, distinctBorderTypes, borderTypeToLinesMap);
        }
    }
    // Return distinct border types and borderTypeToLine mapping
    return {
        distinctBorderTypes: distinctBorderTypes,
        borderTypeToLineMap: borderTypeToLinesMap,
        distinctClearingDoubleBorderTypes: distinctClearingDoubleBorderTypes,
        clearingDoubleBordersToLineMap: clearingDoubleBordersToLineMap
    };
}
/**
 * This method maps the border to distinct border types
 *
 * @param model GridBlockModel
 * @param cell Cell in Model
 * @param border Border of cell
 * @param borderWidth Width of grid line adjusted for DPR
 * @param distinctBorderTypes List of distinct border types considering line style, color and weight of border
 * @param borderTypeToLinesMap Dictionary of borders where border type is key and list of borders having same key as value
 */
function mapBordersToDistinctTypes(model, cell, border, borderWidth, distinctBorderTypes, borderTypeToLinesMap) {
    var line = createLineToDraw(model, cell, border.BorderPosition, borderWidth);
    var key = getBorderKey(border);
    // If the border type is not encountered before, add it to distinct border types.
    if (!(key in borderTypeToLinesMap)) {
        distinctBorderTypes.push(border);
        borderTypeToLinesMap[key] = [];
    }
    // For the current border type, add the current line to list of lines which have the same border type.
    borderTypeToLinesMap[key].push(line);
}
/**
 * Given distinct border type and border type to line mapping draw all border lines.
 * For each distinct border style, draw all corresponding lines in one go to reduce context switches.
 * Reducing context switches yields better performance.
 */
function drawBorderLines(ctx, borderTypesToDraw, borderTypeToLineMapping, defaultBorderWidth, highContrastColor) {
    var currentBorderLineStyle = [];
    var currentStrokeStyle = '';
    var currentLineWidth = drawingConstants_1.ThinBorderWeight;
    setDefaultCanvasRenderingContext(ctx);
    ctx.beginPath();
    for (var i = 0; i < borderTypesToDraw.length; i++) {
        var currentBorderToDraw = borderTypesToDraw[i];
        var color = highContrastColor ? highContrastColor : rgbColorToString(currentBorderToDraw.Color);
        var lineDashArray = getLineDash(currentBorderToDraw.BorderLineStyle);
        var widthChanged = currentLineWidth !== currentBorderToDraw.Weight * defaultBorderWidth;
        var colorChanged = currentStrokeStyle !== color;
        var dashingChanged = !gridBlockModelComparer_1.areArraysEqual(currentBorderLineStyle, lineDashArray, []).isEqual;
        if (widthChanged || colorChanged || dashingChanged) {
            ctx.stroke();
            ctx.beginPath();
            // Update context, if the lineWidth has changed.
            if (widthChanged) {
                currentLineWidth = currentBorderToDraw.Weight * defaultBorderWidth;
                ctx.lineWidth = currentLineWidth;
            }
            // Update context, if the line color has changed.
            if (colorChanged) {
                currentStrokeStyle = color;
                ctx.strokeStyle = color;
            }
            // Update context, if it references to a different array dash array.
            if (dashingChanged) {
                ctx.setLineDash(lineDashArray);
                currentBorderLineStyle = lineDashArray;
            }
        }
        var key = getBorderKey(currentBorderToDraw);
        var lines = borderTypeToLineMapping[key];
        // For each line type, draw all lines together.
        for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
            var line = lines[lineIndex];
            drawBorderLine(ctx, currentBorderToDraw.Weight, line, defaultBorderWidth);
        }
    }
    // Stroke all similar lines together.
    ctx.stroke();
}
/**
 * Draw a border line represented by @param Line.
 * CurrentLineWidth refers to the weight of the border to be drawn
 *
 * Checks if the line is a horizontal line or not, performs specific adjustments to them.
 *    If a horizontal line is drawn, we adjust Y coordinates for drawing sharp lines.
 *    If a vertical line is drawn, we adjust X coordinates for drawing sharp lines.
 */
function drawBorderLine(ctx, currentLineWidth, line, borderWidth) {
    if (isHorizontalLine(line)) {
        helpers_1.drawLine(ctx, line.X1 - borderWidth, // Cover the gridLine
        getDrawingOffset(line.Y1, currentLineWidth, borderWidth), line.X2, getDrawingOffset(line.Y2, currentLineWidth, borderWidth));
    }
    else {
        helpers_1.drawLine(ctx, getDrawingOffset(line.X1, currentLineWidth, borderWidth), line.Y1 - borderWidth, // Cover the gridLine.
        getDrawingOffset(line.X2, currentLineWidth, borderWidth), line.Y2);
    }
}
/**
 * Get the line (start and end coordinates) to draw for the currentBorder.
 */
function createLineToDraw(model, currentCell, currentBorderPosition, borderWidth) {
    if (!model.IsRtl) {
        var topLeft = {
            X: cellLayout_1.getCellLeftAdjustedForDrawing(model, currentCell, /* isMirrored */ false),
            Y: cellLayout_1.getCellTopAdjustedForDrawing(model, currentCell)
        };
        var bottomRight = {
            X: cellLayout_1.getCellRightAdjustedForDrawing(model, currentCell) + borderWidth,
            Y: cellLayout_1.getCellBottomAdjustedForDrawing(model, currentCell)
        };
        return getLineCoordinates(currentBorderPosition, topLeft, bottomRight);
    }
    var topRight = {
        X: cellLayout_1.getCellRightAdjustedForDrawing(model, currentCell) + borderWidth,
        Y: cellLayout_1.getCellTopAdjustedForDrawing(model, currentCell)
    };
    var bottomLeft = {
        X: cellLayout_1.getCellLeftAdjustedForDrawing(model, currentCell, /* isMirrored */ false),
        Y: cellLayout_1.getCellBottomAdjustedForDrawing(model, currentCell)
    };
    var rtlLine = getLineCoordinates(currentBorderPosition, topRight, bottomLeft);
    // Canvas API of drawing lines is missing pixels while drawing in negative X direction.
    // X coordinates of RTL top and bottom border is in negative X direction.Swapping X coordinates to draw line in positive X direction.
    if (currentBorderPosition === gridBlockModelDto_1.BorderPositionType.Top || currentBorderPosition === gridBlockModelDto_1.BorderPositionType.Bottom) {
        var X = rtlLine.X2;
        rtlLine.X2 = rtlLine.X1;
        rtlLine.X1 = X;
    }
    return rtlLine;
}
/**
 * Get the line coordinates for border given startPoint and endPoint
 */
function getLineCoordinates(currentBorderPosition, startPoint, endPoint) {
    switch (currentBorderPosition) {
        case gridBlockModelDto_1.BorderPositionType.Top:
            return {
                X1: startPoint.X,
                Y1: startPoint.Y,
                X2: endPoint.X,
                Y2: startPoint.Y
            };
        case gridBlockModelDto_1.BorderPositionType.Bottom:
            return {
                X1: startPoint.X,
                Y1: endPoint.Y,
                X2: endPoint.X,
                Y2: endPoint.Y
            };
        case gridBlockModelDto_1.BorderPositionType.Right:
            return {
                X1: endPoint.X,
                Y1: startPoint.Y,
                X2: endPoint.X,
                Y2: endPoint.Y
            };
        case gridBlockModelDto_1.BorderPositionType.Left:
            return {
                X1: startPoint.X,
                Y1: startPoint.Y,
                X2: startPoint.X,
                Y2: endPoint.Y
            };
        default:
            throw Error('borders::getLineCoordinates Encountered non default BorderPositionType value=' + currentBorderPosition);
    }
}
/**
 * Determines if the borderStyle is a solid line.
 *
 * @param borderStyle current border line style
 */
function isBorderSolidLine(borderStyle) {
    switch (borderStyle) {
        case gridBlockModelDto_1.BorderLineType.Thin:
        case gridBlockModelDto_1.BorderLineType.Medium:
        case gridBlockModelDto_1.BorderLineType.Hair:
        case gridBlockModelDto_1.BorderLineType.Thick:
            return true;
        default:
            return false;
    }
}
/**
 * Determine if the border should be drawn, we should draw only top and left borders.
 * If the cell is at any of the block corners, then we draw all borders for the cell.
 */
function shouldDrawBorder(borderPosition, model, currentCell) {
    var _a;
    // If we are at the end of the canvas - we should draw all borders
    if (currentCell.Row === model.RowNumbers.length - 1 || currentCell.Col === model.ColumnNumbers.length - 1) {
        return true;
    }
    // If the cell is a merged cell or if it's adjacent to a merge cell we want to draw all the borders
    if (currentCell.Merge || helpers_2.isCellAdjacentToMergedCell(currentCell.Row, currentCell.Col, model)) {
        return isBorderOnCellBounds(borderPosition);
    }
    // If the cell has formula error we'd like to draw all the borders
    if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.HasErrorRefactoring, model)) {
        if (currentCell.HasError) {
            return isBorderOnCellBounds(borderPosition);
        }
    }
    else if ((_a = currentCell.FormulaInfo) === null || _a === void 0 ? void 0 : _a.HasError) {
        return isBorderOnCellBounds(borderPosition);
    }
    return borderPosition === gridBlockModelDto_1.BorderPositionType.Top || borderPosition === gridBlockModelDto_1.BorderPositionType.Left;
}
/**
 * Get drawing offset for drawing sharp lines.
 */
function getDrawingOffset(offset, width, GridLineWidthPx) {
    var pixelTranslation = helpers_2.getLinePixelTranslation(GridLineWidthPx);
    // For medium borders, we don't need to adjust for pixel translation if GridLineWidthPx is odd.
    if (width === drawingConstants_1.MediumBorderWeight && GridLineWidthPx % 2 === 1) {
        return offset;
    }
    // When rendering lines on canvas, the browser starts rendering at point (x,y) and adds half the width to each direction.
    // When we need to render odd width, we manipulate the drawing so that the drawing position would start in the middle of a pixel since we can't draw sub-pixel.
    // This way the line width would be exact.
    return offset - pixelTranslation;
}
/**
 * Gives the rgb string representation of RGBColor
 *
 * @param color RGBColor.
 */
function rgbColorToString(color) {
    var key = color.Red + '_' + color.Green + '_' + color.Blue;
    var value = RgbColorMapping[key];
    if (!util_1.isNullOrUndefined(value)) {
        return value;
    }
    value = "rgb(" + color.Red + "," + color.Green + "," + color.Blue + ")";
    RgbColorMapping[key] = value;
    return value;
}
/**
 * Returns the border priority based on BorderLineType.
 * !!! Important !!! - Keep in sync with XBorder.h
 *
 * @param borderLineStyle border line style of the border
 */
function getBorderPriorityByLineStyle(borderLineStyle) {
    switch (borderLineStyle) {
        case gridBlockModelDto_1.BorderLineType.Thick:
            return 1;
        case gridBlockModelDto_1.BorderLineType.Medium:
            return 2;
        case gridBlockModelDto_1.BorderLineType.MediumDashed:
            return 3;
        case gridBlockModelDto_1.BorderLineType.MediumDashDot:
            return 4;
        case gridBlockModelDto_1.BorderLineType.Thin:
            return 5;
        case gridBlockModelDto_1.BorderLineType.Dashed:
            return 6;
        case gridBlockModelDto_1.BorderLineType.Dotted:
            return 7;
        case gridBlockModelDto_1.BorderLineType.DashDot:
            return 9;
        case gridBlockModelDto_1.BorderLineType.DashDotDot:
            return 10;
        case gridBlockModelDto_1.BorderLineType.Hair:
            return 11;
        case gridBlockModelDto_1.BorderLineType.Double:
        default:
            return 12;
    }
}
exports.getBorderPriorityByLineStyle = getBorderPriorityByLineStyle;
/**
 * Returns true if the cell has a 'bottom' double border, false otherwise.
 * Since each cell 'holds' the top and left BorderPositionType, we need to query the
 * cell in the following row
 *
 * @param cell - the cell we are checking
 * @param model - grid block model we use to get the cell below 'cell'
 */
function cellHasBottomDoubleBorder(cell, model) {
    helpers_2.verifyArgumentNotNull(cell, 'cell', 'cellHasBottomDoubleBorder');
    var nextRowCell = helpers_2.getCell(cell.Row + 1, cell.Col, model);
    if (util_1.isNullOrUndefined(nextRowCell) ||
        util_1.isNullOrUndefined(nextRowCell.CachedBorderStyle) ||
        util_1.isNullOrUndefined(nextRowCell.CachedBorderStyle.Borders)) {
        /**
         * The cell in the following row may not exist in the model -
         * if the cell that is passed has no bottom border and the cell below was never created
         * or if the cell below belongs to the next block - in this case we will not fix padding when we should.
         */
        return false;
    }
    var borders = nextRowCell.CachedBorderStyle.Borders;
    for (var i = 0; i < borders.length; i++) {
        var border = borders[i];
        if (border.BorderPosition === gridBlockModelDto_1.BorderPositionType.Top && border.BorderLineStyle === gridBlockModelDto_1.BorderLineType.Double) {
            return true;
        }
    }
    return false;
}
exports.cellHasBottomDoubleBorder = cellHasBottomDoubleBorder;
function isHorizontalLine(line) {
    return line.Y1 === line.Y2;
}
/**
 * Get border key to be used as a key of a map between BorderStyle to Line array.
 *
 * @param border Border to generate Key.
 */
function getBorderKey(border) {
    return rgbColorToString(border.Color) + "-" + border.Weight + "-" + border.BorderLineStyle;
}
/**
 * Get the segment array for SetLineDash from BorderStyle.
 *
 * @param lineStyle BorderStyle
 */
function getLineDash(lineStyle) {
    var lineDashArray = LineDashArrayMapping[lineStyle];
    if (!util_1.isNullOrUndefined(lineDashArray)) {
        return lineDashArray;
    }
    switch (lineStyle) {
        case gridBlockModelDto_1.BorderLineType.Dotted:
            lineDashArray = drawingConstants_1.DottedLineDash;
            break;
        case gridBlockModelDto_1.BorderLineType.DashDot:
        case gridBlockModelDto_1.BorderLineType.MediumDashDot:
            lineDashArray = drawingConstants_1.DashedDotLineDash;
            break;
        case gridBlockModelDto_1.BorderLineType.DashDotDot:
        case gridBlockModelDto_1.BorderLineType.MediumDashDotDot:
            lineDashArray = drawingConstants_1.DashedDotDotLineDash;
            break;
        case gridBlockModelDto_1.BorderLineType.MediumDashed:
            lineDashArray = drawingConstants_1.MediumDashedLineDash;
            break;
        // defaulting SlantDashDot to DashedLine as in XLO HTML,
        // will take this improvement in Canvas Phase 2.
        case gridBlockModelDto_1.BorderLineType.SlantDashDot:
        case gridBlockModelDto_1.BorderLineType.Dashed:
            lineDashArray = drawingConstants_1.DashedLineDash;
            break;
        default:
            lineDashArray = [];
    }
    LineDashArrayMapping[lineStyle] = lineDashArray;
    return lineDashArray;
}
/**
 * This method sets the default values of canvas 2D rendering context
 */
function setDefaultCanvasRenderingContext(ctx) {
    ctx.strokeStyle = '#000000';
    ctx.setLineDash([]);
    ctx.lineWidth = drawingConstants_1.ThinBorderWeight;
}
/**
 * Returns the borders rendered on the cell. If the cell has formula error, we always display red dashed borders
 *
 * @param cell the cell
 */
function getBorderStyleForRendering(cell, model) {
    var _a;
    if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.HasErrorRefactoring, model)) {
        if (cell.HasError) {
            return drawingConstants_1.FormulaErrorBorderStyle;
        }
    }
    else if ((_a = cell.FormulaInfo) === null || _a === void 0 ? void 0 : _a.HasError) {
        return drawingConstants_1.FormulaErrorBorderStyle;
    }
    return cell.CachedBorderStyle;
}
/**
 * Returns true if the given border is left/right/top/bottom
 *
 * @param borderPosition The position of the border
 */
function isBorderOnCellBounds(borderPosition) {
    // According to BorderPositionType enum definition - Top = 0, Bottom = 1, Left = 2, Right = 3 so it's sufficient to check <= Right
    return borderPosition <= gridBlockModelDto_1.BorderPositionType.Right;
}
function cellOnEdgeOfRenderingRegion(cell, renderingRegion) {
    var isCellInLastCol = cell.Col === renderingRegion.endColumn + 1 &&
        cell.Row >= renderingRegion.startRow &&
        cell.Row <= renderingRegion.endRow;
    var isCellInLastRow = cell.Row === renderingRegion.endRow + 1 &&
        cell.Col >= renderingRegion.startColumn &&
        cell.Col <= renderingRegion.endColumn;
    return isCellInLastCol || isCellInLastRow;
}
//# sourceMappingURL=borders.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/breakTextToLines.js":
/*!*********************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/breakTextToLines.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
var helpers_1 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var textTokenizer_1 = __webpack_require__(/*! ./textTokenizer */ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/textTokenizer.js");
var wideWordBreak_1 = __webpack_require__(/*! ./wideWordBreak */ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/wideWordBreak.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var richTextFormat_1 = __webpack_require__(/*! ../richTextFormat */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormat.js");
var serializer_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/serializer */ "../../packages/excel-online-models/lib/src/serializer.js");
var interfaces_1 = __webpack_require__(/*! ./interfaces */ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/interfaces.js");
/**
 * Wraps text - breaks input text to multiple lines based on maximum allowed width.
 *
 * @param canvas2dCtx Canvas2d context used when rendering the text.
 *            The context should be set with correct font properties that will be used when drawing the text lines
 *            since it is used for measuring text width as part of the logic.
 * @param text The text to break
 * @param maxWidth The maximum width which will be used for determining line breaking
 * @param cellBreakType The breakType of the cell.
 * @param formattedText (optional) formatted text to break (if exists)
 *
 * @returns text lines wrapped inside the max width
 */
function breakTextToLines(canvas2dCtx, text, maxWidth, cellBreakType, singleSpaceWidth, formattedText, wrapInfo) {
    helpers_1.verifyArgumentNotNull(canvas2dCtx, 'canvas2dCtx', 'breakTextToLines');
    /**
     * General algorithm outline:
     * 1. Break the text to tokens of either spaces or non-spaces runs while measuring each token pixel width
     * 2. For each token:
     *    2.1. For hard break runs - save breaks as empty lines and repeat (step 2)
     *    2.2. If token width fits in maxWidth try to add its width to a current line width
     *        2.2.1 If its spaces token:
     *              - If the next token fits max width: add to current line the spaces
     *              - Else (next token exceeds the maxWidth): save current line (without the spaces) and start a new line and repeat (step 2)
     *        2.2.2 Else (its a word token):
     *              - If the current line width exceeds the maxWidth: save current line (without the recently added token)
     *              - Set the current line with the recent token and repeat (step 2)
     *    2.3. Else (this is a wide token):
     *        2.3.1 If its spaces token:
     *             2.3.1.1 If its prefix spaces token: add an empty line and repeat (step 2)
     *             2.3.1.2 Else (wide spaces token is not prefix): update curLineWidth with the spaces token width (till you get to maxWidth) and repeat (step 2)
     *        2.3.2 Else  (this is a wide word):
     *             - Break the token to multiple lines and save them (except last line)
     *             - Set the current line with the last line token and repeat (step 2)
     */
    if (text === '') {
        // nothing to do if there is no text content
        return { textLines: [], tokensPerLine: [], requireClipping: false };
    }
    var tokens = textTokenizer_1.tokenizeTextToWrap(canvas2dCtx, text, singleSpaceWidth, formattedText, wrapInfo);
    var lineBreakCtx = {
        text: text,
        tokens: tokens,
        maxWidth: maxWidth,
        unprocessedTokens: [],
        isSingleCharTooWide: false,
        textLines: [],
        tokensPerLine: [],
        curLineStart: 0,
        curLineWidth: 0,
        lastFittingToken: undefined,
        isBreakTypeJustifyOrDistributed: isBreakTypeJustifyOrDistributed(cellBreakType)
    };
    // Go over all tokens to process text wrap logic
    for (var tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
        var token = tokens[tokenIndex];
        validateToken(tokens, tokenIndex);
        if (isHardBreakToken(token)) {
            handleHardBreakToken(lineBreakCtx, token, tokenIndex);
            continue;
        }
        if (tokenFitsInWidth(token, maxWidth)) {
            if (token.type === textTokenizer_1.BreakOpTokenType.Space && !isPrefixSpacesToken(tokens, tokenIndex)) {
                handleSpacesToken(lineBreakCtx, token, tokenIndex);
                continue;
            }
            // If token is word token or prefix spaces token that fits in width
            handleFittingToken(lineBreakCtx, token);
        }
        else {
            // This is token is a wide word (its width is over the maxWidth)
            handleWideToken(lineBreakCtx, token, tokenIndex, canvas2dCtx, formattedText);
        }
    }
    // Add last remaining token tail as last line
    if (lineBreakCtx.lastFittingToken !== undefined) {
        handleLastRemainingToken(lineBreakCtx);
    }
    if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
        if (lineBreakCtx.textLines.length !== lineBreakCtx.tokensPerLine.length) {
            throw new Error("breakTextToLines::breakTextToLines Mismatch in textLines and textTokenLines.\n      textTokenLines = " + lineBreakCtx.tokensPerLine.length + ", textLineLength = " + lineBreakCtx.textLines.length + ", MaxWidth = " + maxWidth + ", Text = " + serializer_1.annonymize(lineBreakCtx.text));
        }
    }
    return {
        textLines: lineBreakCtx.textLines,
        tokensPerLine: lineBreakCtx.tokensPerLine,
        requireClipping: lineBreakCtx.isSingleCharTooWide
    };
}
exports.breakTextToLines = breakTextToLines;
/**
 * In the end of breakTextToLines iteration, a tail can be left unhandled,
 * so in case of a tail, we add last remaining token tail as last line.
 *
 * @param lineBreakCtx the cell's line break variables
 */
function handleLastRemainingToken(lineBreakCtx) {
    processCurrentFittingLine(lineBreakCtx);
    lineBreakCtx.isSingleCharTooWide = checkSingleCharLine(lineBreakCtx.lastFittingToken.width, lineBreakCtx.lastFittingToken.len, lineBreakCtx.maxWidth, lineBreakCtx.isSingleCharTooWide);
}
/**
 * In case the token fits to the cell's width, we check:
 * - If we can add the token to the current line without exceeding maxWidth,
 *      we add it.
 * - Else
 *      we create new line and initialize it with the token.
 *
 * @param lineBreakCtx the cell's line break variables
 * @param token the fitting token
 */
function handleFittingToken(lineBreakCtx, token) {
    // Update the current line width with token width.
    lineBreakCtx.curLineWidth += token.width;
    // Does the current line width exceed the maximum width after adding the token?
    if (lineBreakCtx.curLineWidth > lineBreakCtx.maxWidth) {
        // Current token does not fit in the allowed maximum,
        // so add current line to results list and initialize next line with current token
        var breakingLineTokenWidth = token.width;
        processCurrentFittingLine(lineBreakCtx, breakingLineTokenWidth);
        lineBreakCtx.curLineStart = token.start;
        lineBreakCtx.curLineWidth = token.width;
    }
    if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
        lineBreakCtx.unprocessedTokens.push(token);
    }
    // Keep the current token since it fitted in the maxWidth. It will be used to breaking the line.
    lineBreakCtx.lastFittingToken = token;
}
/**
 * In case that the token width is larger then maxWidth,
 * we need to break the word so it will fit the cells width.
 *
 * @param lineBreakCtx the cell's line break variables
 * @param token the wide word token
 * @param tokenIndex the token's index in the tokens Array
 * @param canvas2dCtx canvas rendering context
 * @param formattedText (optional) formatted cell content if exists
 */
function handleWideToken(lineBreakCtx, token, tokenIndex, canvas2dCtx, formattedText) {
    if (token.type === textTokenizer_1.BreakOpTokenType.Space) {
        // fill the line with all the spaces we can
        handleSpacesTokenExceedingMaxWidth(lineBreakCtx, token, tokenIndex);
        return;
    }
    // If there is a lastFittingToken from earlier line break - need to save it before breaking the wide word
    if (lineBreakCtx.lastFittingToken !== undefined) {
        if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
            lineBreakCtx.unprocessedTokens.push(lineBreakCtx.lastFittingToken);
        }
        processCurrentFittingLine(lineBreakCtx);
    }
    var formattedWideWord = formattedText
        ? richTextFormat_1.substringFormattedText(formattedText, token.start, token.start + token.len)
        : undefined;
    var lines = wideWordBreak_1.breakWideWord(canvas2dCtx, token.value, lineBreakCtx.maxWidth, formattedWideWord);
    // Save all lines except the last one - more text may still fit after it
    var wideWordLineStartIndex = token.start;
    for (var j = 0; j < lines.length - 1; j++) {
        var brokenWordLine = lines[j];
        var line = {
            text: brokenWordLine.value,
            width: brokenWordLine.width,
            underlineWidth: brokenWordLine.width,
            startIndex: wideWordLineStartIndex,
            endIndex: wideWordLineStartIndex + brokenWordLine.value.length
        };
        wideWordLineStartIndex += brokenWordLine.value.length;
        lineBreakCtx.textLines.push(line);
        if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
            lineBreakCtx.tokensPerLine.push({
                tokens: [
                    {
                        text: brokenWordLine.value,
                        width: brokenWordLine.width,
                        start: wideWordLineStartIndex
                    }
                ]
            });
        }
        lineBreakCtx.isSingleCharTooWide = checkSingleCharLine(line.width, line.text.length, lineBreakCtx.maxWidth, lineBreakCtx.isSingleCharTooWide);
    }
    // The last line from the wide word break needs to be kept as last fitting token
    // since that additional words may fit after it
    var wideWordToken = wideWordLineLastToken(lines, token);
    lineBreakCtx.lastFittingToken = wideWordToken;
    if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
        lineBreakCtx.unprocessedTokens.push(wideWordToken);
    }
    // Adjust current width and start index
    lineBreakCtx.curLineWidth = lineBreakCtx.lastFittingToken.width;
    lineBreakCtx.curLineStart = lineBreakCtx.lastFittingToken.start;
}
/**
 * In case of hard breaks token, we need to add an empty line for each hard break.
 * each '/n' will create a new line in the textLines array.
 * For example: 'a\n\n\n' ==> ['a', '', '', ''];
 *
 * @param lineBreakCtx the cell's line break variables
 * @param token the hard breaks token
 * @param tokenIndex the index or the hard breaks token in the tokens array.
 */
function handleHardBreakToken(lineBreakCtx, token, tokenIndex) {
    if (lineBreakCtx.lastFittingToken !== undefined) {
        // Save previous token before adding hard breaks
        processCurrentFittingLine(lineBreakCtx);
    }
    // Need to insert empty lines corresponding to the token length which is the number of hard breaks
    var emptyLines = getLineBreaksCount(token);
    // In cases like '\n \n \n', when we handle hardBreak token, We need to start a new line.
    if (tokenIndex !== 0 && tokenIndex !== lineBreakCtx.tokens.length - 1) {
        // For non-prefix or suffix breaks runs there is already a line before the break so need to take 1 off
        emptyLines--;
    }
    // For each hard break save an empty line
    for (var j = 0; j < emptyLines; j++) {
        if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
            lineBreakCtx.tokensPerLine.push(drawingConstants_1.EmptyLineTextToken);
        }
        lineBreakCtx.textLines.push(createEmptyLine(/* currentLineBreakIndex */ j, token));
    }
    // After all hard breaks inserted - adjust the state tracking
    lineBreakCtx.curLineStart = token.start + token.len; // adjust line start forward after all the hard line breaks
    lineBreakCtx.curLineWidth = 0; // after the hard break this is a new line so width is 0
    lineBreakCtx.lastFittingToken = undefined; // this is a new line so no last fitting token
}
/**
 * Creates an empty line object
 *
 * @param currentLineBreakIndex If we have a sequence of line breaks, we need to know each index in order to determine the start index and end index of the line
 * @param token The hard break token
 */
function createEmptyLine(currentLineBreakIndex, token) {
    var startIndex = token.start + currentLineBreakIndex;
    var endIndex = startIndex + getHardBreakLengthFromToken(token);
    return { text: '', width: 0, underlineWidth: 0, startIndex: startIndex, endIndex: endIndex };
}
/**
 * Returns the length of the hard break token
 *
 * @param token The hard break token
 */
function getHardBreakLengthFromToken(token) {
    return token.type === textTokenizer_1.BreakOpTokenType.HardBreakCRLF ? drawingConstants_1.HardBreakCRLF.length : drawingConstants_1.HardBreak.length;
}
/**
 * Returns the number of line breaks from a line hard break token:
 * In case of hardBreak token, the length of the token is the number of empty lines ('\n\n\n' => 3 empty lines).
 * In case of hardBreakCRLF token, the length of the token / 2,  is the number of empty lines ('\r\n\r\n\r\n' => 3 empty lines)
 *
 * @param token the hardBreak or hardBreakCRLF token
 */
function getLineBreaksCount(token) {
    switch (token.type) {
        case textTokenizer_1.BreakOpTokenType.HardBreak:
            return token.len;
        case textTokenizer_1.BreakOpTokenType.HardBreakCRLF:
            return token.len / 2;
        default:
            throw 'breakToLines - this token should be hardBreak token';
    }
}
/**
 * Multi spaces tokens, are not supported in wrap text break to lines logic currently
 * Spaces token has some cased:
 * max width: '     '
 * 1. text:   'a   b'            => result: |a   b|
 *
 * 2. text:   'a              b' => result: |a    |
 *                                          |b    | (we don't draw the rest of the spaces)
 *
 * 3. text:   '               a' => result: |     |
 *                                          |a    | (we don't draw the rest of the spaces)
 *
 * 4. text:   '                ' => result  |     | (we don't draw the rest of the spaces)

 *
 * @param lineBreakCtx the cell's line break variables
 * @param token the spaces token
 * @param tokenIndex the token's index in tokens array
 */
function handleSpacesToken(lineBreakCtx, token, tokenIndex) {
    // This is a spaces run - no reason to keep going since spaces do not break in the middle.
    // The decision to break a line happens later after the non-space run is added.
    // When long spaces run will be supported the spaces width will have to be taken into account as well.
    // Next token will be a non-spaces run.
    // In case of single space token, we do not handle this token.
    validateSpacesToken(token);
    if (token.len === 1) {
        lineBreakCtx.curLineWidth += token.width;
        lineBreakCtx.lastFittingToken = token;
        return;
    }
    if (isSingleSpacesTokenInLineAfterHardBreak(lineBreakCtx, token, tokenIndex)) {
        addEmptyLineToTextLines(lineBreakCtx, token);
        return;
    }
    // This spaces token is not the first token in the line (not spaces prefix).
    // We need to add to the line as much spaces as we can (from the spaces token) to get to maxWidth.
    if (lineBreakCtx.curLineWidth + token.width > lineBreakCtx.maxWidth ||
        isNextWordAfterSpacesExceedsMaxWidth(lineBreakCtx, token, tokenIndex)) {
        handleSpacesTokenExceedingMaxWidth(lineBreakCtx, token, tokenIndex);
    }
    else {
        // If adding the spaces token to the line is not getting line width to MaxWidth - we'll just add it to line.
        lineBreakCtx.curLineWidth += token.width;
        lineBreakCtx.lastFittingToken = token;
    }
}
/**
 *  Current token does not fit in the allowed maximum,
 *  so we fill the current line with as much spaces we can.
 *
 * @param lineBreakCtx the cell's line break variables
 * @param token the spaces token
 * @param tokenIndex the token's index in tokens array
 */
function handleSpacesTokenExceedingMaxWidth(lineBreakCtx, token, tokenIndex) {
    validateSpacesToken(token);
    var singleSpaceWidth = token.width / token.len; // if its not richText, all spaces have the same width.
    var lineWidthRemaining = lineBreakCtx.maxWidth - lineBreakCtx.curLineWidth; // how much space left in line.
    // lineWidthRemaining can be negative if last fitting token is exceeding maxWidth
    if (lineWidthRemaining < 0) {
        return;
    }
    var amountOfSpacesToFillTheLine = Math.floor(lineWidthRemaining / singleSpaceWidth); // how many spaces we need to add to fill the line
    // update spaces token width to get to tne end of the line
    token.width = singleSpaceWidth * amountOfSpacesToFillTheLine;
    // update curLineWidth with the new width.
    lineBreakCtx.curLineWidth += token.width;
    lineBreakCtx.lastFittingToken = token;
    // In case of a long prefix spaces token, we need to start a new line (behaves like hard break)
    if (isPrefixSpacesToken(lineBreakCtx.tokens, tokenIndex) || isSpacesTokenAfterHardBreak(lineBreakCtx, tokenIndex)) {
        addEmptyLineToTextLines(lineBreakCtx, token);
    }
}
/**
 * Validates passed token to ensure the token is not undefined
 *
 * @param tokens BreakOpTokens array, need to validate tokens at index
 * @param index Current tokens iteration index
 */
function validateToken(tokens, index) {
    validateTokenIndex(tokens, index);
    if (!tokens[index]) {
        throw 'breakTextToLines - validateToken - tokens[index] is undefined';
    }
}
/**
 * Check if the token is prefix spaces token.
 *
 * @param tokens BreakOpTokens array, need to validate tokens at index
 * @param tokenIndex Current tokens iteration index
 */
function isPrefixSpacesToken(tokens, tokenIndex) {
    validateTokenIndex(tokens, tokenIndex);
    validateToken(tokens, tokenIndex);
    return tokenIndex === 0 && tokens[tokenIndex].type === textTokenizer_1.BreakOpTokenType.Space;
}
/**
 * Check if the token is prefix spaces token after a hard break.
 *
 * @param tokens BreakOpTokens array, need to validate tokens at index
 * @param tokenIndex Current tokens iteration index
 */
function isSpacesTokenAfterHardBreak(lineBreakCtx, tokenIndex) {
    var tokens = lineBreakCtx.tokens;
    validateTokenIndex(tokens, tokenIndex);
    return (tokenIndex > 0 &&
        tokens[tokenIndex].type === textTokenizer_1.BreakOpTokenType.Space &&
        isHardBreakToken(tokens[tokenIndex - 1]) &&
        lineBreakCtx.lastFittingToken === undefined);
}
/**
 * In case of spaces token after hardBreak (for example: '       \n     aa')
 * the function checks if the spaces token is the only token that fits to the line.
 * example:
 * max width: |     |
 * text:      '       \n     aa'
 *                      ^^^^^ token
 * result:    |     |
 *            |     | <-- the token in the only token in the line, so the function will return TRUE.
 *            |aa   |
 *
 * @param lineBreakCtx the cell's line break variables
 * @param token current tokens
 * @param tokenIndex current tokens iteration index
 */
function isSingleSpacesTokenInLineAfterHardBreak(lineBreakCtx, token, tokenIndex) {
    var tokens = lineBreakCtx.tokens;
    validateTokenIndex(tokens, tokenIndex);
    if (!isSpacesTokenAfterHardBreak(lineBreakCtx, tokenIndex)) {
        return false;
    }
    return (tokenIndex === lineBreakCtx.tokens.length - 1 ||
        lineBreakCtx.curLineWidth + token.width > lineBreakCtx.maxWidth ||
        isNextWordAfterSpacesExceedsMaxWidth(lineBreakCtx, token, tokenIndex));
}
/**
 * The function pushes an empty line to textLines array.
 *
 * @param lineBreakCtx the cell's line break variables
 * @param spacesToken current token
 */
function addEmptyLineToTextLines(lineBreakCtx, spacesToken) {
    if (spacesToken.type !== textTokenizer_1.BreakOpTokenType.Space) {
        throw 'breakTextToLines - addEmptyLineToTextLines - wrong token type, this function should get only spaces token';
    }
    var newEmptyLine = tslib_1.__assign({}, drawingConstants_1.EmptyLine);
    var endIndex = spacesToken.start + spacesToken.len;
    newEmptyLine.underlineWidth = spacesToken.width;
    newEmptyLine.startIndex = spacesToken.start;
    newEmptyLine.endIndex = endIndex;
    lineBreakCtx.textLines.push(newEmptyLine);
    if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
        lineBreakCtx.tokensPerLine.push(drawingConstants_1.EmptyLineTextToken);
    }
    lineBreakCtx.curLineStart = endIndex; // adjust line start forward, this case is similar to hard break.
    lineBreakCtx.curLineWidth = 0; // after the spaces line, this is a new line so width is 0
    lineBreakCtx.lastFittingToken = undefined; // this is a new line so no last fitting token
}
/**
 * In case like:
 * max width: |     |
 * text:      ' a  bcde'
 * result:    |   a |
 *            |bcde |
 * We want to get this result: [' a','bcde'], so we need to ignore spaces tokens that the text after them, should be in a new line
 *
 * @param lineBreakCtx the cell's line break variables
 * @param token Current token
 * @param tokenIndex Current tokens iteration index
 */
function isNextWordAfterSpacesExceedsMaxWidth(lineBreakCtx, token, tokenIndex) {
    validateSpacesToken(token);
    var lastTokenIndex = lineBreakCtx.tokens.length - 1;
    if (tokenIndex >= lastTokenIndex) {
        return false;
    }
    // If the current spaces tokens is not the last token
    var nextToken = lineBreakCtx.tokens[tokenIndex + 1];
    var lineWidthWithNextToken = lineBreakCtx.curLineWidth + token.width + nextToken.width;
    return lineWidthWithNextToken > lineBreakCtx.maxWidth;
}
/**
 * Validates the index of the token is in the right range
 *
 * @param tokens BreakOpTokens array, need to validate tokens at index
 * @param index Current tokens iteration index
 */
function validateTokenIndex(tokens, index) {
    if (index < 0 || index >= tokens.length) {
        throw 'breakTextToLines - invalid token index';
    }
}
/**
 * Get a line substring from a text into the passed textLines array based on current line start and last fitting token
 *
 * @param lineBreakCtx the cell's line break variables
 */
function getFittingTextLine(lineBreakCtx) {
    if (lineBreakCtx.lastFittingToken === undefined) {
        throw 'breakTextToLines -invalid lastFittingToken - no token was set';
    }
    var lineEnd = lineBreakCtx.lastFittingToken.start + lineBreakCtx.lastFittingToken.len;
    return {
        text: lineBreakCtx.text.substring(lineBreakCtx.curLineStart, lineEnd).trimRight(),
        start: lineBreakCtx.curLineStart,
        end: lineEnd
    };
}
/**
 * Checks a special case where a a line contains a single character and that character is wider than the maximum width.
 * In that case this method will return true, otherwise it will return the current value of the flag tracking.
 *
 * @param width Width in pixels of current token/line
 * @param length current token/line length
 * @param maxWidth max allowed width
 * @param isSingleCharTooWide current value of isSingleCharTooWide tracking flag
 */
function checkSingleCharLine(width, length, maxWidth, isSingleCharTooWide) {
    if (isSingleCharTooWide) {
        return true;
    }
    if (width > maxWidth) {
        if (length !== 1) {
            throw 'breakTextToLines - non single char line is too wide!';
        }
        return true;
    }
    return isSingleCharTooWide;
}
/**
 * Prepares a BreakOpToken from the last line of a wide word break
 *
 * @param wideWordLines Lines of the wide word break
 * @param curToken The current token
 * @param lastFittingToken The last token which had fit in the max width
 */
function wideWordLineLastToken(wideWordLines, curToken) {
    var lastLine = wideWordLines[wideWordLines.length - 1];
    var startIndex = curToken.start + curToken.len - lastLine.value.length;
    var lastLineWidth = lastLine.width;
    return {
        start: startIndex,
        len: lastLine.value.length,
        value: lastLine.value,
        type: textTokenizer_1.BreakOpTokenType.Word,
        width: lastLineWidth
    };
}
function tokenFitsInWidth(token, maxWidth) {
    return token.width < maxWidth;
}
function validateSpacesToken(token) {
    if (token.type !== textTokenizer_1.BreakOpTokenType.Space) {
        throw 'breakTextToLines - wrong token type, expected spaces token!';
    }
}
function isHardBreakToken(token) {
    return token.type === textTokenizer_1.BreakOpTokenType.HardBreak || token.type === textTokenizer_1.BreakOpTokenType.HardBreakCRLF;
}
/**
 * Processes the currentFittingLine, updates the TextLines and WordLines in the lineBreakCtx
 * Calculates the textWidth and underlineWidth
 *
 * @param lineBreakCtx Line break context
 * @param lineBreakingTokenWidth The width of the token that caused the line breaking. We need to subtract this width from the curLineWidth.
 */
function processCurrentFittingLine(lineBreakCtx, lineBreakingTokenWidth) {
    if (lineBreakingTokenWidth === void 0) { lineBreakingTokenWidth = 0; }
    helpers_1.verifyArgumentNotNull(lineBreakCtx.lastFittingToken, 'lineBreakCtx.lastFittingToken', 'createCurrentFittingLine');
    var underlineWidth = lineBreakCtx.curLineWidth - lineBreakingTokenWidth;
    var fittingLineWidth = underlineWidth;
    if (lineBreakCtx.lastFittingToken.type === textTokenizer_1.BreakOpTokenType.Space) {
        fittingLineWidth = fittingLineWidth - lineBreakCtx.lastFittingToken.width;
    }
    if (lineBreakCtx.isBreakTypeJustifyOrDistributed) {
        lineBreakCtx.tokensPerLine.push(getTextTokens(lineBreakCtx.unprocessedTokens));
        lineBreakCtx.unprocessedTokens = [];
    }
    var _a = getFittingTextLine(lineBreakCtx), text = _a.text, start = _a.start, end = _a.end;
    lineBreakCtx.textLines.push({
        text: text,
        underlineWidth: underlineWidth,
        width: fittingLineWidth,
        startIndex: start,
        endIndex: end
    });
}
function isBreakTypeJustifyOrDistributed(breakType) {
    return breakType === interfaces_1.BreakType.Justify || breakType === interfaces_1.BreakType.Distributed;
}
/**
 * Convert the BreakOpTokens to TextTokens.
 */
function getTextTokens(breakOpTokens) {
    var textTokens = [];
    for (var i = 0; i < breakOpTokens.length; i++) {
        var breakOpToken = breakOpTokens[i];
        textTokens.push({
            text: breakOpToken.value,
            width: breakOpToken.width,
            start: breakOpToken.start
        });
    }
    return { tokens: textTokens };
}
//# sourceMappingURL=breakTextToLines.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/interfaces.js":
/*!***************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/interfaces.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BreakType indicates the type of Break on the cell.
 */
var BreakType;
(function (BreakType) {
    BreakType[BreakType["Wrap"] = 0] = "Wrap";
    BreakType[BreakType["Justify"] = 1] = "Justify";
    BreakType[BreakType["Distributed"] = 2] = "Distributed";
})(BreakType = exports.BreakType || (exports.BreakType = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/textTokenizer.js":
/*!******************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/textTokenizer.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var richTextFormat_1 = __webpack_require__(/*! ../richTextFormat */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormat.js");
/**
 * Type of run token
 */
var BreakOpTokenType;
(function (BreakOpTokenType) {
    /**
     * Consecutive sequence of space characters
     */
    BreakOpTokenType[BreakOpTokenType["Space"] = 0] = "Space";
    /**
     * Consecutive sequence of word characters
     */
    BreakOpTokenType[BreakOpTokenType["Word"] = 1] = "Word";
    /**
     * Consecutive sequence of hard breaks \n
     */
    BreakOpTokenType[BreakOpTokenType["HardBreak"] = 2] = "HardBreak";
    /**
     * Consecutive sequence of hard breaks \r\n
     */
    BreakOpTokenType[BreakOpTokenType["HardBreakCRLF"] = 3] = "HardBreakCRLF";
})(BreakOpTokenType = exports.BreakOpTokenType || (exports.BreakOpTokenType = {}));
/**
 * In wrapText, if we have BreakOp string, this const will mark the beginning of a word (when we don't have spaces to identify the words).
 * '1' - Marks the beginning of a word.
 */
var BreakOpMarker = '1'.charCodeAt(0);
/**
 * Creates array of `BreakOpToken`s from a text.
 * `BreakOpToken` represents a consecutive non-space characters or consecutive space characters with
 * meta data about the run such as position, size, content and width.
 *
 * E.g.:
 *
 * 'aaa\n\n\n\r\n      a'
 * {t1}{t2   }{t3}{t4}{t5}
 * t1: { start: 0, len: 31, value: 'aaa', type: BreakOpTokenType.Word, width: 21 },
 * t2: { start: 3, len: 3, value: '\n\n\n', type: BreakOpTokenType.HardBreak, width: 0 },
 * t3: { start: 4, len: 2, value: '\r\n', type: BreakOpTokenType.HardBreakCRLF, width: 0 },
 * t4: { start: 6, len: 6, value: '      ', type: BreakOpTokenType.Space, width: 18 },
 * t5: { start: 14, len: 1, value: 'a', type: BreakOpTokenType.Word, width: 7 }
 *
 * The are few reasons for using run tokens:
 * 1. Simplify logic for complex corner cases
 * 2. Minimize string allocations
 * 3. Minimize calls to ctx.measureText since they are expensive
 *
 * @param ctx Canvas2d context used when rendering the text.
 * @param text text to tokenize
 * @param spaceWidth The width of single space character
 * @param formattedText (optional) formatted text to render if exists
 * @param WrapInfo Wrap text information from the server, provides hints for tokenization.
 */
function tokenizeTextToWrap(ctx, text, spaceWidth, formattedText, wrapInfo) {
    var _a;
    var tokens = [];
    // Algorithm:
    // 1. Iterate over the text characters to find consecutive runs of the same type (spaces or non-spaces or hard breaks).
    // 2. If a run was found - create a new token and continue till reach end of text
    //
    // E.g.: "aaaaaaaa       bbbbbbb"
    //        | run0  | run1 | run2 |
    //
    var runStartIndex = 0;
    var singleSpaceWidth = spaceWidth;
    var lineBreakOpportunities = (_a = wrapInfo) === null || _a === void 0 ? void 0 : _a.BreakOp;
    while (runStartIndex < text.length) {
        var chars = getCurrentChar(text, runStartIndex);
        var currentRunType = mapBreakOpTokenType(chars);
        // find current run end - where the first different run type is found
        var runEndIndex = nextRunEndIndex(runStartIndex, currentRunType);
        var nextRun = getCurrentChar(text, runEndIndex);
        var nextRunType = mapBreakOpTokenType(nextRun);
        while (runEndIndex < text.length &&
            currentRunType === nextRunType &&
            !isBreakOpportunity(runEndIndex, lineBreakOpportunities, currentRunType)) {
            runEndIndex = nextRunEndIndex(runEndIndex, currentRunType);
            nextRun = getCurrentChar(text, runEndIndex);
            nextRunType = mapBreakOpTokenType(nextRun);
        }
        // reached end of run - measure the run width and save the new token
        var runLength = runEndIndex - runStartIndex;
        var runStr = text.substring(runStartIndex, runEndIndex);
        var runFormattedText = formattedText
            ? richTextFormat_1.substringFormattedText(formattedText, runStartIndex, runEndIndex)
            : undefined;
        var runWidth = 0;
        // update run token width
        switch (currentRunType) {
            case BreakOpTokenType.Space: {
                if (runFormattedText) {
                    runWidth = richTextFormat_1.measureFormattedTextWidth(ctx, runFormattedText);
                }
                else {
                    runWidth = singleSpaceWidth * runStr.length;
                }
                break;
            }
            case BreakOpTokenType.Word: {
                // In case of word token, we need to measure the text.
                runWidth = runFormattedText ? richTextFormat_1.measureFormattedTextWidth(ctx, runFormattedText) : ctx.measureText(runStr).width;
                break;
            }
            case BreakOpTokenType.HardBreak:
            case BreakOpTokenType.HardBreakCRLF: {
                // In case of hard break or hard breakCRLF token the width will be 0.
                break;
            }
            default: {
                throw 'breakToTextLines - textTokenizer - unexpected run type';
            }
        }
        tokens.push({ start: runStartIndex, len: runLength, value: runStr, type: currentRunType, width: runWidth });
        runStartIndex = runEndIndex; // start next iteration from where the run ends
    }
    return tokens;
}
exports.tokenizeTextToWrap = tokenizeTextToWrap;
function mapBreakOpTokenType(chars) {
    switch (chars) {
        case drawingConstants_1.Whitespace:
            return BreakOpTokenType.Space;
        case drawingConstants_1.HardBreak:
            return BreakOpTokenType.HardBreak;
        case drawingConstants_1.HardBreakCRLF:
            return BreakOpTokenType.HardBreakCRLF;
    }
    return BreakOpTokenType.Word;
}
function getCurrentChar(text, runStartIndex) {
    if (text[runStartIndex] === '\r' && runStartIndex < text.length - 1 && text[runStartIndex + 1] === '\n') {
        return drawingConstants_1.HardBreakCRLF;
    }
    return text[runStartIndex];
}
function nextRunEndIndex(runIndex, currentRunType) {
    // In case of HardBreakCRLF token, we need to update runEndIndex because '\r\n' length is 2
    if (currentRunType === BreakOpTokenType.HardBreakCRLF) {
        return runIndex + 2;
    }
    return runIndex + 1;
}
/**
 * In case of Thai wrap text, we don't have spaces between words,
 * so we are getting from the server the break opportunities string.
 * For example:
 *  "และตัวอย่างการเขียนภาษาไทย" (this string contains 6 words)
 *  BreakOp: "22212222222122122221222122"
 *  1 marks the first letter of the next word, a break opportunity.
 *  In the example:
 *   และ ("222")
 *   ตัวอย่าง ("12222222")
 *   การ ("122")
 *   เขียน ("12222")
 *   ภาษา ("1222")
 *   ไทย ("122")
 * In all the other langs we support, we don't need this string because we identify words using spaces and hard breaks.
 */
function isBreakOpportunity(runEndIndex, lineBreakOpportunities, currentRunType) {
    if (!lineBreakOpportunities ||
        currentRunType !== BreakOpTokenType.Word ||
        runEndIndex > lineBreakOpportunities.length - 1) {
        return false;
    }
    return lineBreakOpportunities.charCodeAt(runEndIndex) === BreakOpMarker;
}
//# sourceMappingURL=textTokenizer.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/wideWordBreak.js":
/*!******************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/wideWordBreak.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var richTextFormat_1 = __webpack_require__(/*! ../richTextFormat */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormat.js");
/**
 * Represents a word prefix with a certain length.
 * The string value and pixel width of the prefix is lazily evaluated only when getters are accessed.
 */
var LazyMeasuredPrefix = /** @class */ (function () {
    function LazyMeasuredPrefix(ctx, word, prefixLength, formattedText) {
        this.cachedWidth = -1;
        this.ctx = ctx;
        this.word = word;
        this.prefixLength = prefixLength;
        this.wordFormattedText = formattedText;
    }
    Object.defineProperty(LazyMeasuredPrefix.prototype, "width", {
        get: function () {
            if (this.cachedWidth === -1) {
                if (this.wordFormattedText) {
                    if (!this.formattedValue) {
                        throw Error('expected formattedValue to be set');
                    }
                    this.cachedWidth = richTextFormat_1.measureFormattedTextWidth(this.ctx, this.formattedValue);
                }
                else {
                    this.cachedWidth = this.ctx.measureText(this.value).width;
                }
            }
            return this.cachedWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyMeasuredPrefix.prototype, "value", {
        get: function () {
            if (!this.cachedValue) {
                this.cachedValue = this.word.substring(0, this.prefixLength);
            }
            return this.cachedValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyMeasuredPrefix.prototype, "formattedValue", {
        get: function () {
            if (this.wordFormattedText) {
                this.cachedFormattedValue = richTextFormat_1.substringFormattedText(this.wordFormattedText, 0, this.prefixLength);
            }
            return this.cachedFormattedValue;
        },
        enumerable: true,
        configurable: true
    });
    return LazyMeasuredPrefix;
}());
/**
 * Lazy initialized prefix arrays with prefix width measurements.
 * Behaves like an array of items __sorted__ by prefix length.
 */
var LazyMeasuredPrefixCollection = /** @class */ (function () {
    function LazyMeasuredPrefixCollection(ctx, word, formattedText) {
        this.cachedItems = [];
        this.ctx = ctx;
        this.word = word;
        this.formattedText = formattedText;
    }
    /**
     * Creates prefix item if does not exists or return existing one
     *
     * @param index Prefix index
     * @returns `LazyMeasuredPrefix` item at passed index
     */
    LazyMeasuredPrefixCollection.prototype.item = function (index) {
        var item = this.cachedItems[index];
        if (!item) {
            item = new LazyMeasuredPrefix(this.ctx, this.word, index + 1, this.formattedText);
            this.cachedItems[index] = item;
        }
        return item;
    };
    return LazyMeasuredPrefixCollection;
}());
/**
 * Classes/Interface relations of classes above
 *
 * ```
 *                                      +--------------------------+
 *                                      | IndexedCollection<Item>  |
 *                                      +-------------+------------+
 *                                                    ^
 *                                                    | implements
 *                                                    |
 *     +---------+                    +---------------+--------------+
 *     |  Item   | *                1 |                              |
 *     |         +--------------------+ LazyMeasuredPrefixCollection |
 *     +---+-----+                    |                              |
 *         ^                          |        item():Item           |
 *         | implements               +-------------+----------------+
 *         |                                        |
 * +-------+-------------+         returns          |
 * | LazyMeasuredPrefix  +<-------------------------+
 * +---------------------+
 * ```
 */
/**
 * Breaks passed word to multiple lines based on maximum allowed width.
 *
 * E.g.:
 *  "abcdefgehijklmnopqrstuvwxyz" => ["abcdefghij", "klmnopqrstu", "vwxyz" ]
 *   | maxWidth | maxWidth |
 *
 * @param ctx Canvas2d context used when rendering the text
 * @param word The word to break
 * @param maxWidth The maximum width allowed before breaking the word to new line
 * @param formattedWord (optional) The formatted text needs to be broken down
 * @returns an array of WideWordLine representing the break of the word based on the width
 */
function breakWideWord(ctx, word, maxWidth, formattedWord) {
    var lines = [];
    // Iterate over all the word prefixes which fit in the allow max width
    var current = wideWordBreakBinarySearch(ctx, word, maxWidth, formattedWord);
    while (current) {
        // save found word prefix since it is a line break
        lines.push({ value: current.value, width: current.width });
        // The remaining word text is the next wide word since it needs to be on its own line
        current = wideWordBreakBinarySearch(ctx, current.remaining, maxWidth, current.formattedRemaining);
    }
    return lines;
}
exports.breakWideWord = breakWideWord;
/**
 * Finds the first prefix in a word which fits in the passed maxWidth.
 * Uses a binary search decreasing/increasing word sizes
 * while comparing measured width in pixels to the passed max width.
 *
 * E.g.:
 *  "abcdefgehijklmnop" => "abcdefghij"
 *   | maxWidth |
 *
 * @param ctx Canvas2d context used when rendering the text
 * @param word A word to be broken based on maxWidth
 * @param maxWidth The max width in pixels to break the passed word
 * @param formattedText (optional) The formatted text needs to be broken down
 * @returns The word break prefix which fits in the max width with the with and remaining word text
 */
function wideWordBreakBinarySearch(ctx, word, maxWidth, formattedText) {
    if (word.length === 0) {
        // This is the last call after all lines were broken - no word text remaining to break
        return undefined;
    }
    var sortedPrefixes = new LazyMeasuredPrefixCollection(ctx, word, formattedText);
    var widthComparer = function (a, b) { return a.width - b.width; };
    var maxWidthItem = { width: maxWidth, value: 'IGNORED' }; // the value searched for in the sorted collection
    var index = helpers_1.binarySearch(sortedPrefixes, 0, word.length, maxWidthItem, widthComparer);
    if (index < 0) {
        // negative means no exact match - binary complement is the nearest
        index = ~index;
        if (index !== 0) {
            // adjust the inverted offset following binary search definition
            index -= 1;
        }
    }
    var found = sortedPrefixes.item(index);
    return {
        width: found.width,
        value: found.value,
        remaining: word.substring(found.value.length),
        formattedRemaining: formattedText ? richTextFormat_1.substringFormattedText(formattedText, found.value.length) : undefined
    };
}
//# sourceMappingURL=wideWordBreak.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/clearGridLines.js":
/*!******************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/clearGridLines.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var gridlines_1 = __webpack_require__(/*! ./gridlines */ "../../packages/excel-online-grid-renderer/lib/src/drawing/gridlines.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var cellLayout_1 = __webpack_require__(/*! ../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_4 = __webpack_require__(/*! ./pivotTable/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/helpers.js");
/**
 * Clears the grid lines of cells that span across multiple cells (spill/merge).
 * The clear is done by drawing multiple white (sheet background color) lines exactly on the spanned cells grid lines.
 *
 * @param  {CanvasRenderingContext2D} ctx the canvas we draw/clear the lines on
 * @param  {GridBlockModel} model the information needed about the cells and the columns & rows positions
 * @param  {RenderingContext} context the rendering flags including high contrast indication, device pixel ration, etc'
 */
function clearGridLinesForSpannedCells(ctx, model, context) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'clearGridLinesForText');
    helpers_1.verifyArgumentNotNull(model.Cells, 'model.Cells', 'clearGridLinesForText');
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'clearGridLinesForText');
    helpers_1.verifyArgumentNotNull(context, 'context', 'clearGridLinesForText');
    // if gridLines are hidden - no need to clear gridLines
    if (!model.ShowGridLines) {
        return;
    }
    // if we didn't render gridlines - no need to clear them
    if (!helpers_2.shouldRenderGridLines(helpers_1.isHighContrastMode(context), helpers_1.hasWorkbookBackgroundColor(model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model)))) {
        return;
    }
    var cells = model.Cells;
    var pixelTranslation = helpers_1.getLinePixelTranslation(drawingConstants_1.GridLineWidthPx);
    var maxColumnOffset = gridlines_1.getMaxLineOffset(model.BlockWidth, context.devicePixelRatio, /* isRow */ false);
    var maxRowOffset = gridlines_1.getMaxLineOffset(model.BlockHeight, context.devicePixelRatio, /* isRow */ true);
    setContextForClearingGridLine(ctx, context, model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model));
    ctx.beginPath();
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var shouldClearSpillCellLines = !util_1.isNullOrUndefined(cell) && !util_1.isNullOrUndefined(cell.Spill);
        var shouldClearMergeCellLines = !util_1.isNullOrUndefined(cell) &&
            !util_1.isNullOrUndefined(cell.Merge) &&
            (util_1.isNullOrUndefined(cell.CachedStyle.BackgroundColor) || !util_1.isNullOrUndefined(context.highContrastScheme)); // if we have background color and we are not in high contrast mode the background color would override the lines
        // If the cell isn't in the current rendering region skip it
        if (!helpers_2.cellIntersectsRenderingRegion(cell, context.renderingRegion)) {
            continue;
        }
        if (!shouldClearSpillCellLines && !shouldClearMergeCellLines) {
            continue;
        }
        clearCellVerticalLines(cell, ctx, model, pixelTranslation, maxColumnOffset);
        if (shouldClearMergeCellLines && cellLayout_1.isCellSpansMultipleRowsOrBlocks(cell)) {
            clearCellHorizontalLines(cell, ctx, model, pixelTranslation, maxRowOffset);
        }
    }
    ctx.stroke();
}
exports.clearGridLinesForSpannedCells = clearGridLinesForSpannedCells;
/**
 * Sets the canvas context for clearing gridLines.
 * The strokeStyle is set to sheet background color and GridLineWidthPx is set the gridGridLineWidthPx.
 */
function setContextForClearingGridLine(ctx, context, WorkbookBackgroundColor, isWorkbookBackgroundColorRederFlagEnabled) {
    var backgroundColor = helpers_1.getWorkbookBackgroundColor(context.highContrastScheme, WorkbookBackgroundColor, isWorkbookBackgroundColorRederFlagEnabled);
    ctx.strokeStyle = backgroundColor;
    ctx.lineWidth = drawingConstants_1.GridLineWidthPx;
    ctx.setLineDash(drawingConstants_1.DefaultDash);
}
exports.setContextForClearingGridLine = setContextForClearingGridLine;
/**
 * Clears the grid lines behind empty pivot tables areas.
 * The clear is done by drawing sheet background color rectangle in the pivot table area.
 *
 * @param ctx the canvas context
 * @param model the model
 * @param context the rendering context, including high contrast and dpr information
 */
function clearGridLinesForEmptyPivotTables(ctx, model, context) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'clearGridLinesForEmptyPivotTables');
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'clearGridLinesForEmptyPivotTables');
    helpers_1.verifyArgumentNotNull(context, 'context', 'clearGridLinesForEmptyPivotTables');
    // If grid lines are hidden - no need to clear gridLines
    if (!model.ShowGridLines) {
        return;
    }
    // If we didn't render grid lines - no need to clear them
    if (!helpers_2.shouldRenderGridLines(helpers_1.isHighContrastMode(context), helpers_1.hasWorkbookBackgroundColor(model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model)))) {
        return;
    }
    // If there are no pivot tables - nothing to clear
    if (!model.PivotTables || model.PivotTables.length === 0) {
        return;
    }
    var pathStarted = false;
    for (var i = 0; i < model.PivotTables.length; i++) {
        var pivotTable = model.PivotTables[i];
        // Skip non empty pivot tables and tables that shouldn't hide the grid lines
        if (!pivotTable.IsEmptyPivot || !pivotTable.HideGridLines) {
            continue;
        }
        // Skip tables that don't intersect the current rendering region
        if (!helpers_4.isPivotIntersectsRenderingRegion(pivotTable, context.renderingRegion)) {
            continue;
        }
        // If this is the first table we clear initialize the ctx style and start path
        if (!pathStarted) {
            ctx.fillStyle = helpers_1.getWorkbookBackgroundColor(context.highContrastScheme, model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model));
            ctx.beginPath();
            pathStarted = true;
        }
        ctx.rect(helpers_4.getPivotTableLeftAdjustedForDrawing(model, pivotTable, /* isMirrored */ model.IsRtl), helpers_4.getPivotTableTopAdjustedForDrawing(model, pivotTable), pivotTable.OriginPTWidthAdjustedForDrawing, pivotTable.OriginPTHeightAdjustedForDrawing);
    }
    if (pathStarted) {
        ctx.fill();
    }
}
exports.clearGridLinesForEmptyPivotTables = clearGridLinesForEmptyPivotTables;
/**
 * Clears the vertical lines of a single cell across all of its spanned cells.
 * The drawing is done by drawing over the vertical lines of the cells it is spans across
 *
 * @param {Cell} cell the cell for which we clear the grid lines
 * @param  {CanvasRenderingContext2D} ctx the canvas 2d rendering ctx
 * @param  {GridBlockModel} model the grid block model including the columns and rows offsets information
 * @param  {number} pixelTranslation the pixel adjustment for line drawing
 * @param  {number} maxColumnOffset the maximal column offset in the block
 */
function clearCellVerticalLines(cell, ctx, model, pixelTranslation, maxColumnOffset) {
    var startColumn = cell.Col;
    var endColumn = cell.Col;
    var columnOffsets = model.ColOffsetsAdjustedForDrawing;
    if (cell.Merge) {
        endColumn += cell.Merge.Columns;
        // if we're spanning to the next block we need to clear the last grid line as well
        if (cell.Merge.SpansNextBlockHorizontally) {
            endColumn = columnOffsets.length - 1;
        }
    }
    else if (cell.Spill) {
        startColumn -= cell.Spill.SpanToStart;
        endColumn += cell.Spill.SpanToEnd;
    }
    // verify the columns are bounded to the block dimensions
    startColumn = Math.max(0, startColumn);
    endColumn = Math.min(model.ColumnNumbers.length, endColumn);
    var cellHeight = cellLayout_1.getCellHeightAdjustedForDrawing(model, cell);
    var cellTop = cellLayout_1.getCellTopAdjustedForDrawing(model, cell);
    // we don't want to clear the row horizontal line
    var cellInnerHeight = cellHeight - drawingConstants_1.GridLineWidthPx;
    // go over all the columns the cell spans on and remove the vertical grid lines
    for (var column = startColumn; column < endColumn; column++) {
        var columnOffset = gridlines_1.getAdjustedDrawingOffset(columnOffsets[column], helpers_2.getColWidthFromOffsets(column, columnOffsets), pixelTranslation, maxColumnOffset);
        helpers_2.drawLine(ctx, columnOffset, cellTop, columnOffset, cellTop + cellInnerHeight);
    }
}
/**
 * Clears the horizontal lines of a single cell across all of its spanned cells.
 * The drawing is done by drawing over the horizontal lines of the cells it is spans across
 *
 * @param {Cell} cell the cell for which we clear the grid lines
 * @param  {CanvasRenderingContext2D} ctx the canvas 2d rendering ctx
 * @param  {GridBlockModel} model the grid block model including the columns and rows offsets information
 * @param  {number} pixelTranslation the pixel adjustment for line drawing
 * @param  {number} maxRowOffset the maximal column offset in the block
 */
function clearCellHorizontalLines(cell, ctx, model, pixelTranslation, maxRowOffset) {
    var startRow = cell.Row;
    var endRow = cell.Row + cell.Merge.Rows;
    var rowOffsets = model.RowOffsetsAdjustedForDrawing;
    // verify the rows are bounded to the block dimensions
    startRow = Math.max(0, startRow);
    endRow = Math.min(model.RowNumbers.length, endRow);
    // if we're spanning to the next block we need to clear the last grid line as well
    if (cell.Merge.SpansNextBlockVertically) {
        endRow = rowOffsets.length - 1;
    }
    var cellLeft = cellLayout_1.getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ model.IsRtl);
    var cellWidth = cellLayout_1.getCellWidthAdjustedForDrawing(model, cell);
    // we don't want to clear the column vertical line
    var cellInnerWidth = cellWidth - drawingConstants_1.GridLineWidthPx;
    // go over all the rows the cell spans on and remove the horizontal grid lines
    for (var row = startRow; row < endRow; row++) {
        var rowOffset = gridlines_1.getAdjustedDrawingOffset(rowOffsets[row], helpers_2.getRowHeightFromOffsets(row, rowOffsets), pixelTranslation, maxRowOffset);
        helpers_2.drawLine(ctx, cellLeft, rowOffset, cellLeft + cellInnerWidth, rowOffset);
    }
}
//# sourceMappingURL=clearGridLines.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/arrows.js":
/*!**************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/arrows.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/helpers.js");
/**
 * Draws an arrow icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the arrow
 */
function drawArrows(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawArrows');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawArrows');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawArrows');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawArrows');
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    var outerColor = getArroweOuterColor(image);
    var innerColor = getArroweInnerColor(image);
    var iconPoints = [];
    switch (image) {
        // Arrow down
        case constants_1.CFIconImage.GrayArrowDown:
        case constants_1.CFIconImage.ColoredArrowDown:
            iconPoints = createArrowDownCoordinatesPath(left, bottom, size);
            break;
        // Arrow up
        case constants_1.CFIconImage.GrayArrowUp:
        case constants_1.CFIconImage.ColoredArrowUp:
            iconPoints = createArrowUpCoordinatesPath(left, bottom, size);
            break;
        // Arrow right
        case constants_1.CFIconImage.GrayArrowRight:
        case constants_1.CFIconImage.ColoredArrowRight:
            iconPoints = createArrowRightCoordinatesPath(left, bottom, size);
            break;
        // Arrow down right
        case constants_1.CFIconImage.GrayArrowDownRight:
        case constants_1.CFIconImage.ColoredArrowDownRight:
        // TODO: VSO 4159941: CFIcons: Draw Icons - non horizontal vertical arrows
        // break;
        // Arrow down right
        case constants_1.CFIconImage.GrayArrowUpRight:
        case constants_1.CFIconImage.ColoredArrowUpRight:
        // TODO: VSO 4159941: CFIcons: Draw Icons - non horizontal vertical arrows
        // break;
        default:
            throw Error("drawTriangleSet: unsupported image type = " + image);
    }
    helpers_2.drawIconFromPoints(ctx, innerColor, outerColor, iconPoints);
}
exports.drawArrows = drawArrows;
/**
 * Creats and return array of points, which represtnts the path of points that creates the arrow down icon
 * The calculations and explanations for offsets are in the readme.md
 *
 * @param left icon's left
 * @param bottomIcon icon's right
 * @param size icon's size
 */
function createArrowDownCoordinatesPath(left, bottomIcon, size) {
    var iconTop = bottomIcon - size;
    // The arrow's shaft left and right calculations
    var centerX = left + size / 2;
    var shaftWidth = constants_1.ArrowShaftWidthRatio * size;
    var shaftLeft = Math.floor(centerX - shaftWidth / 2) + constants_1.IconLinesAdjustment;
    var shaftRight = Math.floor(centerX + shaftWidth / 2) + constants_1.IconLinesAdjustment;
    // The arrow's head vertex calculations
    var arrowHeadVertex = Math.floor(constants_1.ArrowHeadVertexRatio * size);
    // The arrow's base calculation
    var arrowBaseY = Math.floor(iconTop);
    // The arrow's shaft height calculations
    var shaftHeight = Math.floor(constants_1.ArrowShaftHeightRatio * size + arrowBaseY);
    // The arrow's barb calculations
    var centerY = iconTop + size / 2;
    var arrowBarbDistanceToHeadVertex = Math.floor(constants_1.ArrowBarbDistanceRatio * size);
    var arrowBarbY = Math.floor(centerY - arrowBarbDistanceToHeadVertex);
    // The arrow's points
    var baseLeft = { x: shaftLeft, y: arrowBaseY };
    var left1 = { x: shaftLeft, y: shaftHeight };
    var left2 = { x: arrowBarbDistanceToHeadVertex + left, y: arrowBarbY };
    var left3 = { x: left, y: arrowHeadVertex + iconTop };
    var tip = { x: arrowHeadVertex + left, y: size + iconTop };
    var right1 = { x: size + left, y: arrowHeadVertex + iconTop };
    var right2 = { x: size - arrowBarbDistanceToHeadVertex + left, y: arrowBarbY };
    var right3 = { x: shaftRight, y: shaftHeight };
    var baseRight = { x: shaftRight, y: arrowBaseY };
    return [baseLeft, left1, left2, left3, tip, right1, right2, right3, baseRight, baseLeft];
}
/**
 * Creats and return array of points, which represtnts the path of points that creates the arrow up icon
 * The calculations and explanations for offsets are in the readme.md
 *
 * @param left icon's left
 * @param bottomIcon icon's right
 * @param size icon's size
 */
function createArrowUpCoordinatesPath(left, bottomIcon, size) {
    var iconTop = bottomIcon - size;
    // The arrow's shaft left and right calculations
    var centerX = left + size / 2;
    var shaftWidth = constants_1.ArrowShaftWidthRatio * size;
    var shaftLeft = Math.floor(centerX - shaftWidth / 2) + constants_1.IconLinesAdjustment;
    var shaftRight = Math.floor(centerX + shaftWidth / 2) + constants_1.IconLinesAdjustment;
    // The arrow's head vertex calculations
    var arrowHeadVertex = Math.floor(constants_1.ArrowHeadVertexRatio * size);
    // The arrow's barb calculations
    var centerY = iconTop + size / 2;
    var arrowBarbDistanceToHeadVertex = Math.floor(constants_1.ArrowBarbDistanceRatio * size);
    var arrowBarbY = Math.floor(arrowBarbDistanceToHeadVertex + centerY);
    // The arrow's base height calculations
    var arrowBaseY = Math.floor(size + iconTop);
    // The arrow's shaft height top position calculation
    var shaftTopPositionY = Math.floor(arrowBaseY - constants_1.ArrowShaftHeightRatio * size);
    // The arrow's points
    var tip = { x: arrowHeadVertex + left, y: iconTop };
    var left1 = { x: left, y: arrowHeadVertex + iconTop };
    var left2 = { x: constants_1.ArrowBarbDistanceRatio * size + left, y: arrowBarbY };
    var left3 = { x: shaftLeft, y: shaftTopPositionY };
    var baseLeft = { x: shaftLeft, y: arrowBaseY };
    var baseRight = { x: shaftRight, y: arrowBaseY };
    var right1 = { x: shaftRight, y: shaftTopPositionY };
    var right2 = { x: size - arrowBarbDistanceToHeadVertex + left, y: arrowBarbY };
    var right3 = { x: size + left, y: arrowHeadVertex + iconTop };
    return [tip, left1, left2, left3, baseLeft, baseRight, right1, right2, right3, tip];
}
/**
 * Creats and return array of points, which represtnts the path of points that creates the arrow right icon
 * The calculations and explanations for offsets are in the readme.md
 *
 * @param left icon's left
 * @param bottomIcon icon's right
 * @param size icon's sizeg
 */
function createArrowRightCoordinatesPath(left, bottomIcon, size) {
    var centerY = bottomIcon - size / 2;
    // The arrow's shaft up and down calculations
    var shaftWidth = constants_1.ArrowShaftWidthRatio * size;
    var iconTop = bottomIcon - size;
    var shaftUp = Math.floor(centerY - shaftWidth / 2) - constants_1.IconLinesAdjustment;
    var shaftDown = Math.floor(centerY + shaftWidth / 2) - constants_1.IconLinesAdjustment;
    // The arrow's head vertex calculations
    var arrowHeadVertex = Math.floor(constants_1.ArrowHeadVertexRatio * size);
    // The arrow's barb calculations
    var centerX = left + size / 2;
    var arrowBarbDistanceToHeadVertex = Math.floor(constants_1.ArrowBarbDistanceRatio * size);
    var arrowBarbX = Math.floor(centerX - arrowBarbDistanceToHeadVertex);
    // The arrow's base height calculations
    var arrowBaseX = Math.floor(left);
    // The arrow's shaft top position calculation
    var shaftTopPositionX = Math.floor(constants_1.ArrowShaftHeightRatio * size) + arrowBaseX;
    // The arrow's points
    var tip = { x: size + left, y: arrowHeadVertex + iconTop };
    var up1 = { x: arrowHeadVertex + left, y: iconTop };
    var up2 = { x: arrowBarbX, y: constants_1.ArrowBarbDistanceRatio * size + iconTop };
    var up3 = { x: shaftTopPositionX, y: shaftUp };
    var baseUp = { x: arrowBaseX, y: shaftUp };
    var baseDown = { x: arrowBaseX, y: shaftDown };
    var down1 = { x: shaftTopPositionX, y: shaftDown };
    var down2 = { x: arrowBarbX, y: size - arrowBarbDistanceToHeadVertex + iconTop };
    var down3 = { x: arrowHeadVertex + left, y: size + iconTop };
    return [tip, up1, up2, up3, baseUp, baseDown, down1, down2, down3, tip];
}
/**
 * Returns the arrow outer color
 *
 * @param image the icon's image
 */
function getArroweOuterColor(image) {
    switch (image) {
        case constants_1.CFIconImage.GrayArrowDown:
        case constants_1.CFIconImage.GrayArrowDownRight:
        case constants_1.CFIconImage.GrayArrowRight:
        case constants_1.CFIconImage.GrayArrowUp:
        case constants_1.CFIconImage.GrayArrowUpRight:
            return colors.ArrowGrayOuterColor;
        case constants_1.CFIconImage.ColoredArrowUp:
            return colors.ArrowUpOuterColor;
        case constants_1.CFIconImage.ColoredArrowDown:
            return colors.ArrowDownOuterColor;
        case constants_1.CFIconImage.ColoredArrowUpRight:
        case constants_1.CFIconImage.ColoredArrowRight:
        case constants_1.CFIconImage.ColoredArrowDownRight:
            return colors.ArrowRightOuterColor;
        default:
            throw Error("getArroweOuterColor: unsupported image type = " + image);
    }
}
/**
 * Returns the arrow inner color
 *
 * @param image the icon's image
 */
function getArroweInnerColor(image) {
    switch (image) {
        case constants_1.CFIconImage.GrayArrowDown:
        case constants_1.CFIconImage.GrayArrowDownRight:
        case constants_1.CFIconImage.GrayArrowRight:
        case constants_1.CFIconImage.GrayArrowUp:
        case constants_1.CFIconImage.GrayArrowUpRight:
            return colors.ArrowGrayInnerColor;
        case constants_1.CFIconImage.ColoredArrowUp:
            return colors.ArrowUpInnerColor;
        case constants_1.CFIconImage.ColoredArrowDown:
            return colors.ArrowDownInnerColor;
        case constants_1.CFIconImage.ColoredArrowUpRight:
        case constants_1.CFIconImage.ColoredArrowRight:
        case constants_1.CFIconImage.ColoredArrowDownRight:
            return colors.ArrowRightInnerColor;
        default:
            throw Error("getArroweInnerColor: unsupported image type = " + image);
    }
}
//# sourceMappingURL=arrows.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/circle.js":
/*!**************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/circle.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
/**
 * Draws a circle icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the circle
 */
function drawCircleIcon(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawCircleIcon');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawCircleIcon');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawCircleIcon');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawCircleIcon');
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    var outerColor = getCircleOuterColor(image);
    var outerRadius = size / 2;
    if (outerRadius <= 0) {
        return;
    }
    var centerX = Math.round(left + outerRadius);
    var centerY = Math.round(bottom - outerRadius);
    fillCircle(ctx, centerX, centerY, outerRadius, constants_1.Circle0Deg, constants_1.Circle360Deg, outerColor);
    var innerColor = getCircleInnerColor(image);
    if (innerColor) {
        var innerRadius = outerRadius - constants_1.IconOutlineWidthPx;
        if (innerRadius <= 0) {
            return;
        }
        fillInnerCircle(ctx, centerX, centerY, innerRadius, innerColor, image);
    }
}
exports.drawCircleIcon = drawCircleIcon;
/**
 * Draws a circle according to the given params filled with the given color
 *
 * @param ctx the context
 * @param centerX circle's center x
 * @param centerY circle's center y
 * @param radius circle's radius
 * @param startAngle the start angle of the circle
 * @param endAngle the end angle of the circle
 * @param color circle's color
 */
function fillCircle(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.fill();
}
function fillInnerCircle(ctx, centerX, centerY, innerRadius, innerColor, image) {
    switch (image) {
        case constants_1.CFIconImage.Circle25:
        case constants_1.CFIconImage.CircleHalf:
        case constants_1.CFIconImage.Circle75:
            var FillAngle = getFillAngle(image);
            // Fill the filled part of the circle from top until the fillAngle
            fillCircle(ctx, centerX, centerY, innerRadius, constants_1.Circle270Deg, FillAngle, colors.CircleFilledInnerColor);
            // Fill the empty part of the circle from fillAngle until the top
            fillCircle(ctx, centerX, centerY, innerRadius, FillAngle, constants_1.Circle270Deg, colors.CircleEmptyInnerColor);
            break;
        default:
            fillCircle(ctx, centerX, centerY, innerRadius, constants_1.Circle0Deg, constants_1.Circle360Deg, innerColor);
    }
}
function getCircleInnerColor(image) {
    switch (image) {
        case constants_1.CFIconImage.CircleHigh:
        case constants_1.CFIconImage.TrafficHigh:
            return colors.CircleHighInnerColor;
        case constants_1.CFIconImage.CircleMedium:
        case constants_1.CFIconImage.TrafficMedium:
            return colors.CircleMediumInnerColor;
        case constants_1.CFIconImage.CircleLow:
        case constants_1.CFIconImage.TrafficLow:
            return colors.CircleLowInnerColor;
        case constants_1.CFIconImage.CircleEmpty:
            return colors.CircleEmptyInnerColor;
        case constants_1.CFIconImage.CircleFilled:
            return colors.CircleFilledInnerColor;
        case constants_1.CFIconImage.FourCircleHigh:
            return colors.FourCircleHighInnerColor;
        case constants_1.CFIconImage.FourCircleLow:
            return undefined;
        case constants_1.CFIconImage.FourCircleMedium1:
            return colors.FourCircleMedium1InnerColor;
        case constants_1.CFIconImage.FourCircleMedium2:
            return colors.FourCircleMedium2InnerColor;
        case constants_1.CFIconImage.Circle25:
        case constants_1.CFIconImage.CircleHalf:
        case constants_1.CFIconImage.Circle75:
            return constants_1.UnusedColor;
        default:
            throw Error("getCircleInnerColor: unsupported image type = " + image);
    }
}
function getCircleOuterColor(image) {
    switch (image) {
        case constants_1.CFIconImage.CircleHigh:
        case constants_1.CFIconImage.TrafficHigh:
            return colors.CircleHighOuterColor;
        case constants_1.CFIconImage.CircleMedium:
        case constants_1.CFIconImage.TrafficMedium:
            return colors.CircleMediumOuterColor;
        case constants_1.CFIconImage.CircleLow:
        case constants_1.CFIconImage.TrafficLow:
            return colors.CircleLowOuterColor;
        case constants_1.CFIconImage.CircleEmpty:
            return colors.CircleEmptyOuterColor;
        case constants_1.CFIconImage.CircleFilled:
        case constants_1.CFIconImage.Circle25:
        case constants_1.CFIconImage.CircleHalf:
        case constants_1.CFIconImage.Circle75:
            return colors.CircleFilledOuterColor;
        case constants_1.CFIconImage.FourCircleHigh:
            return colors.FourCircleHighOuterColor;
        case constants_1.CFIconImage.FourCircleLow:
            return colors.FourCircleLowOuterColor;
        case constants_1.CFIconImage.FourCircleMedium1:
            return colors.FourCircleMedium1OuterColor;
        case constants_1.CFIconImage.FourCircleMedium2:
            return colors.FourCircleMedium2OuterColor;
        default:
            throw Error("getCircleOuterColor: unsupported image type = " + image);
    }
}
function getFillAngle(image) {
    switch (image) {
        case constants_1.CFIconImage.Circle25:
            return constants_1.Circle0Deg;
        case constants_1.CFIconImage.CircleHalf:
            return constants_1.Circle90Deg;
        case constants_1.CFIconImage.Circle75:
            return constants_1.Circle180Deg;
        default: {
            throw Error("getEndFilledAngle: image: " + image + " not supported");
        }
    }
}
//# sourceMappingURL=circle.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js":
/*!**************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Keep in sync with offui icons:
 * Directional
 * 	1. 3 Arrows (colored)
 * 		a. ConditionalFormatColoredArrowUp - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowUp
 * 		b. ConditionalFormatColoredArrowRight - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowRight
 * 		c. ConditionalFormatColoredArrowDown - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowDown
 * 	2. 3 Triangles
 * 		a. ConditionalFormatTriangleHigh - http://offui/Icon.aspx?name=ConditionalFormatTriangleHigh
 * 		b. ConditionalFormatTriangleMedium - http://offui/Icon.aspx?name=ConditionalFormatTriangleMedium
 * 		c. ConditionalFormatTriangleLow - http://offui/Icon.aspx?name=ConditionalFormatTriangleLow
 * 	3. 4 Arrows (colored)
 * 		a. ConditionalFormatColoredArrowUp - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowUp
 * 		b. ConditionalFormatColoredArrowDownRight - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowDownRight
 * 		c. ConditionalFormatColoredArrowUpRight - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowUpRight
 * 		d. ConditionalFormatColoredArrowDown - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowDown
 * 	4. 5 Arrows (colored)
 * 		a. ConditionalFormatColoredArrowUp - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowUp
 * 		b. ConditionalFormatColoredArrowDownRight - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowDownRight
 * 		c. ConditionalFormatColoredArrowRight - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowRight
 * 		d. ConditionalFormatColoredArrowUpRight - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowUpRight
 * 		e. ConditionalFormatColoredArrowDown - http://offui/Icon.aspx?name=ConditionalFormatColoredArrowDown
 * 	5. 3 Arrows (gray)
 * 		a. ConditionalFormatGreyArrowUp- http://offui/Icon.aspx?name=ConditionalFormatGreyArrowUp
 * 		b. ConditionalFormatGreyArrowRight - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowRight
 * 		c. ConditionalFormatGreyArrowDown - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowDown
 * 	6. 4 Arrows (gray)
 * 		a. ConditionalFormatGreyArrowUp - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowUp
 * 		b. ConditionalFormatGreyArrowUpRight - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowUpRight
 * 		c. ConditionalFormatGreyArrowDownRight - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowDownRight
 * 		d. ConditionalFormatGreyArrowDown - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowDown
 * 	7. 5 Arrows (gray)
 * 		a. ConditionalFormatGreyArrowUp- http://offui/Icon.aspx?name=ConditionalFormatGreyArrowUp
 * 		b. ConditionalFormatGreyArrowUpRight - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowUpRight
 * 		c. ConditionalFormatGreyArrowRight - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowRight
 * 		d. ConditionalFormatGreyArrowDownRight - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowDownRight
 * 		e. ConditionalFormatGreyArrowDown - http://offui/Icon.aspx?name=ConditionalFormatGreyArrowDown
 *
 * Shapes
 * 	1. 3 Traffic lights (Unrimmed)
 * 		a. ConditionalFormatCircleHigh - http://offui/Icon.aspx?name=ConditionalFormatCircleHigh
 * 		b. ConditionalFormatCircleMedium - http://offui/Icon.aspx?name=ConditionalFormatCircleMedium
 * 		c. ConditionalFormatCircleLow - http://offui/Icon.aspx?name=ConditionalFormatCircleLow
 * 	2. 3 signs
 * 		a. ConditionalFormatCircleHigh - http://offui/Icon.aspx?name=ConditionalFormatCircleHigh
 * 		b. ConditionalFormatSignMedium - http://offui/Icon.aspx?name=ConditionalFormatSignMedium
 * 		c. ConditionalFormatSignLow - http://offui/Icon.aspx?name=ConditionalFormatSignLow
 * 	3. Red to black
 * 		a. ConditionalFormat4CircleHigh - http://offui/Icon.aspx?name=ConditionalFormat4CircleHigh
 * 		b. ConditionalFormat4CircleMedium2 - http://offui/Icon.aspx?name=ConditionalFormat4CircleMedium2
 * 		c. ConditionalFormat4CircleMedium1 - http://offui/Icon.aspx?name=ConditionalFormat4CircleMedium1
 * 		d. ConditionalFormat4CircleLow - http://offui/Icon.aspx?name=ConditionalFormat4CircleLow
 * 	4. 3 Traffic lights (Rimmed)
 * 		a. ConditionalFormatTrafficHigh - http://offui/Icon.aspx?name=ConditionalFormatTrafficHigh
 * 		b. ConditionalFormatTrafficMedium - http://offui/Icon.aspx?name=ConditionalFormatTrafficMedium
 * 		c. ConditionalFormatTrafficLow - http://offui/Icon.aspx?name=ConditionalFormatTrafficLow
 * 	5. 4 Traffic lights
 * 		a. ConditionalFormatCircleHigh - http://offui/Icon.aspx?name=ConditionalFormatCircleHigh
 * 		b. ConditionalFormatCircleMedium - http://offui/Icon.aspx?name=ConditionalFormatCircleMedium
 * 		c. ConditionalFormatCircleLow - http://offui/Icon.aspx?name=ConditionalFormatCircleLow
 * 		d. ConditionalFormat4CircleLow - http://offui/Icon.aspx?name=ConditionalFormat4CircleLow
 *
 * Indicators
 * 	1. 3 Symbols (circled)
 * 		a. ConditionalFormatCircleSymbolHigh - http://offui/Icon.aspx?name=ConditionalFormatCircleSymbolHigh
 * 		b. ConditionalFormatCircleSymbolMedium - http://offui/Icon.aspx?name=ConditionalFormatCircleSymbolMedium
 * 		c. ConditionalFormatCircleSymbolLow - http://offui/Icon.aspx?name=ConditionalFormatCircleSymbolLow
 * 	2. 3 Flags (colored)
 * 		a. ConditionalFormatFlagHigh - http://offui/Icon.aspx?name=ConditionalFormatFlagHigh
 * 		b. ConditionalFormatFlagMedium - http://offui/Icon.aspx?name=ConditionalFormatFlagMedium
 * 		c. ConditionalFormatFlagLow - http://offui/Icon.aspx?name=ConditionalFormatFlagLow
 * 	3. 3 Symbols (encircled)
 * 		a. ConditionalFormatSymbolHigh - http://offui/Icon.aspx?name=ConditionalFormatSymbolHigh
 * 		b. ConditionalFormatSymbolMedium - http://offui/Icon.aspx?name=ConditionalFormatSymbolMedium
 * 		c. ConditionalFormatSymbolLow - http://offui/Icon.aspx?name=ConditionalFormatSymbolLow
 *
 * Ratings
 * 	1. 3 Stars
 * 		a. ConditionalFormatStarHigh - http://offui/Icon.aspx?name=ConditionalFormatStarHigh
 * 		b. ConditionalFormatStarMedium - http://offui/Icon.aspx?name=ConditionalFormatStarMedium
 * 		c. ConditionalFormatStarLow  - http://offui/Icon.aspx?name=ConditionalFormatStarLow
 * 	2. 5 Quarters
 * 		a. ConditionalFormatCircleFilled - http://offui/Icon.aspx?name=ConditionalFormatCircleFilled
 * 		b. ConditionalFormatCircle75 - http://offui/Icon.aspx?name=ConditionalFormatCircle75
 * 		c. ConditionalFormatCircleHalf - http://offui/Icon.aspx?name=ConditionalFormatCircleHalf
 * 		d. ConditionalFormatCircle25 - http://offui/Icon.aspx?name=ConditionalFormatCircle25
 * 		e. ConditionalFormatCircleEmpty - http://offui/Icon.aspx?name=ConditionalFormatCircleEmpty
 * 	3. 5 Boxes
 * 		a. ConditionalFormatQuadrantFull - http://offui/Icon.aspx?name=ConditionalFormatQuadrantFull
 * 		b. ConditionalFormatQuadrant75 - http://offui/Icon.aspx?name=ConditionalFormatQuadrant75
 * 		c. ConditionalFormatQuadrant50 - http://offui/Icon.aspx?name=ConditionalFormatQuadrant50
 * 		d. ConditionalFormatQuadrant25 - http://offui/Icon.aspx?name=ConditionalFormatQuadrant25
 * 		e. ConditionalFormatQuadrantEmpty - http://offui/Icon.aspx?name=ConditionalFormatQuadrantEmpty
 * 	4. 4 Ratings
 * 		a. ConditionalFormatSignalBarLow - http://offui/Icon.aspx?name=ConditionalFormatSignalBarLow
 * 		b. ConditionalFormatSignalBarMedium1 - http://offui/Icon.aspx?name=ConditionalFormatSignalBarMedium1
 * 		c. ConditionalFormatSignalBarMedium2 - http://offui/Icon.aspx?name=ConditionalFormatSignalBarMedium2
 * 		d. ConditionalFormatSignalBarHigh - http://offui/Icon.aspx?name=ConditionalFormatSignalBarHigh
 * 	5. 5 Ratings
 * 		a. ConditionalFormatSignalBarEmpty - http://offui/Icon.aspx?name=ConditionalFormatSignalBarEmpty
 * 		b. ConditionalFormatSignalBarLow - http://offui/Icon.aspx?name=ConditionalFormatSignalBarLow
 * 		c. ConditionalFormatSignalBarMedium1 - http://offui/Icon.aspx?name=ConditionalFormatSignalBarMedium1
 * 		d. ConditionalFormatSignalBarMedium2 - http://offui/Icon.aspx?name=ConditionalFormatSignalBarMedium2
 *    e. ConditionalFormatSignalBarHigh - http://offui/Icon.aspx?name=ConditionalFormatSignalBarHigh
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Circles
exports.CircleLowInnerColor = '#FF9198';
exports.CircleLowOuterColor = '#D42314';
exports.CircleMediumInnerColor = '#F8DB8F';
exports.CircleMediumOuterColor = '#DE6C00';
exports.CircleHighInnerColor = '#A1DDAA';
exports.CircleHighOuterColor = '#309048';
exports.CircleFilledInnerColor = '#797774';
exports.CircleFilledOuterColor = '#3A3A38';
exports.CircleEmptyInnerColor = '#FAFAFA';
exports.CircleEmptyOuterColor = '#3A3A38';
exports.FourCircleMedium2InnerColor = '#D492D8';
exports.FourCircleMedium2OuterColor = '#922E9B';
exports.FourCircleMedium1InnerColor = '#C8C6C4';
exports.FourCircleMedium1OuterColor = '#3A3A38';
exports.FourCircleLowOuterColor = '#3A3A38';
exports.FourCircleHighInnerColor = '#FF9198';
exports.FourCircleHighOuterColor = '#D42314';
// Traffic lights (Rimmed)
exports.TrafficHighRimmedRectColor = '#3A3A38';
// Signal bar
exports.SignalBarEmptyColor = '#FAFAFA';
exports.SignalBarFilledColor = '#83BEEC';
exports.SignalBarOutlineColor = '#3A3A38';
// Quadrant boxes
exports.QuadrantBoxesEmptyColor = '#FAFAFA';
exports.QuadrantBoxesFilledColor = '#83BEEC';
exports.QuadrantBoxesOutlineColor = '#3A3A38';
// Flags
exports.FlagStickColor = '#3A3A38';
exports.FlagLowOuterColor = '#D42314';
exports.FlagLowInnerColor = '#FF9198';
exports.FlagMediumOuterColor = '#DE6C00';
exports.FlagMediumInnerColor = '#F8DB8F';
exports.FlagHighOuterColor = '#309048';
exports.FlagHighInnerColor = '#A1DDAA';
// Triangles
exports.TriangleLowOuterColor = '#D42314';
exports.TriangleLowInnerColor = '#FF9198';
exports.TriangleMediumOuterColor = '#DE6C00';
exports.TriangleMediumInnerColor = '#F8DB8F';
exports.TriangleHighOuterColor = '#309048';
exports.TriangleHighInnerColor = '#A1DDAA';
// Stars
exports.StarFilledOuterColor = '#DE6C00';
exports.StarFilledInnerColor = '#F8DB8F';
exports.StarEmptyOuterColor = '#3A3A38';
exports.StarEmptyInnerColor = '#FAFAFA';
// Signs
exports.SignMediumOuterColor = '#DE6C00';
exports.SignMediumInnerColor = '#F8DB8F';
exports.SignLowOuterColor = '#D42314';
exports.SignLowInnerColor = '#FF9198';
// Symbols
exports.SymbolLowOuterColor = '#D42314';
exports.SymbolLowInnerColor = '#FF9198';
exports.SymbolMediumOuterColor = '#DE6C00';
exports.SymbolMediumInnerColor = '#F8DB8F';
exports.SymbolHighOuterColor = '#309048';
exports.SymbolHighInnerColor = '#A1DDAA';
// Arrows
exports.ArrowGrayOuterColor = '#797774';
exports.ArrowGrayInnerColor = '#C8C6C4';
exports.ArrowUpInnerColor = '#A1DDAA';
exports.ArrowDownInnerColor = '#FF9198';
exports.ArrowRightInnerColor = '#F8DB8F';
exports.ArrowUpOuterColor = '#309048';
exports.ArrowDownOuterColor = '#D42314';
exports.ArrowRightOuterColor = '#DE6C00';
//# sourceMappingURL=colors.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js":
/*!*****************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var CFIconImage;
(function (CFIconImage) {
    CFIconImage[CFIconImage["ColoredArrowUp"] = 0] = "ColoredArrowUp";
    CFIconImage[CFIconImage["ColoredArrowUpRight"] = 1] = "ColoredArrowUpRight";
    CFIconImage[CFIconImage["ColoredArrowRight"] = 2] = "ColoredArrowRight";
    CFIconImage[CFIconImage["ColoredArrowDownRight"] = 3] = "ColoredArrowDownRight";
    CFIconImage[CFIconImage["ColoredArrowDown"] = 4] = "ColoredArrowDown";
    CFIconImage[CFIconImage["TriangleHigh"] = 5] = "TriangleHigh";
    CFIconImage[CFIconImage["TriangleMedium"] = 6] = "TriangleMedium";
    CFIconImage[CFIconImage["TriangleLow"] = 7] = "TriangleLow";
    CFIconImage[CFIconImage["GrayArrowUp"] = 8] = "GrayArrowUp";
    CFIconImage[CFIconImage["GrayArrowUpRight"] = 9] = "GrayArrowUpRight";
    CFIconImage[CFIconImage["GrayArrowRight"] = 10] = "GrayArrowRight";
    CFIconImage[CFIconImage["GrayArrowDownRight"] = 11] = "GrayArrowDownRight";
    CFIconImage[CFIconImage["GrayArrowDown"] = 12] = "GrayArrowDown";
    CFIconImage[CFIconImage["CircleHigh"] = 13] = "CircleHigh";
    CFIconImage[CFIconImage["CircleMedium"] = 14] = "CircleMedium";
    CFIconImage[CFIconImage["CircleLow"] = 15] = "CircleLow";
    CFIconImage[CFIconImage["SignMedium"] = 16] = "SignMedium";
    CFIconImage[CFIconImage["SignLow"] = 17] = "SignLow";
    CFIconImage[CFIconImage["FourCircleHigh"] = 18] = "FourCircleHigh";
    CFIconImage[CFIconImage["FourCircleMedium1"] = 19] = "FourCircleMedium1";
    CFIconImage[CFIconImage["FourCircleMedium2"] = 20] = "FourCircleMedium2";
    CFIconImage[CFIconImage["FourCircleLow"] = 21] = "FourCircleLow";
    CFIconImage[CFIconImage["TrafficHigh"] = 22] = "TrafficHigh";
    CFIconImage[CFIconImage["TrafficMedium"] = 23] = "TrafficMedium";
    CFIconImage[CFIconImage["TrafficLow"] = 24] = "TrafficLow";
    CFIconImage[CFIconImage["CircleSymbolHigh"] = 25] = "CircleSymbolHigh";
    CFIconImage[CFIconImage["CircleSymbolMedium"] = 26] = "CircleSymbolMedium";
    CFIconImage[CFIconImage["CircleSymbolLow"] = 27] = "CircleSymbolLow";
    CFIconImage[CFIconImage["FlagHigh"] = 28] = "FlagHigh";
    CFIconImage[CFIconImage["FlagMedium"] = 29] = "FlagMedium";
    CFIconImage[CFIconImage["FlagLow"] = 30] = "FlagLow";
    CFIconImage[CFIconImage["SymbolHigh"] = 31] = "SymbolHigh";
    CFIconImage[CFIconImage["SymbolMedium"] = 32] = "SymbolMedium";
    CFIconImage[CFIconImage["SymbolLow"] = 33] = "SymbolLow";
    CFIconImage[CFIconImage["StarHigh"] = 34] = "StarHigh";
    CFIconImage[CFIconImage["StarMedium"] = 35] = "StarMedium";
    CFIconImage[CFIconImage["StarLow"] = 36] = "StarLow";
    CFIconImage[CFIconImage["CircleFilled"] = 37] = "CircleFilled";
    CFIconImage[CFIconImage["Circle75"] = 38] = "Circle75";
    CFIconImage[CFIconImage["CircleHalf"] = 39] = "CircleHalf";
    CFIconImage[CFIconImage["Circle25"] = 40] = "Circle25";
    CFIconImage[CFIconImage["CircleEmpty"] = 41] = "CircleEmpty";
    CFIconImage[CFIconImage["QuadrantFull"] = 42] = "QuadrantFull";
    CFIconImage[CFIconImage["Quadrant75"] = 43] = "Quadrant75";
    CFIconImage[CFIconImage["QuadrantHalf"] = 44] = "QuadrantHalf";
    CFIconImage[CFIconImage["Quadrant25"] = 45] = "Quadrant25";
    CFIconImage[CFIconImage["QuadrantEmpty"] = 46] = "QuadrantEmpty";
    CFIconImage[CFIconImage["SignalBarEmpty"] = 47] = "SignalBarEmpty";
    CFIconImage[CFIconImage["SignalBarLow"] = 48] = "SignalBarLow";
    CFIconImage[CFIconImage["SignalBarMedium1"] = 49] = "SignalBarMedium1";
    CFIconImage[CFIconImage["SignalBarMedium2"] = 50] = "SignalBarMedium2";
    CFIconImage[CFIconImage["SignalBarHigh"] = 51] = "SignalBarHigh";
})(CFIconImage = exports.CFIconImage || (exports.CFIconImage = {}));
// Lookup table to convert from icon set & index to CFIconType
// prettier-ignore
exports.IconImageLookup = [
    [CFIconImage.ColoredArrowDown, CFIconImage.ColoredArrowRight, CFIconImage.ColoredArrowUp],
    [CFIconImage.GrayArrowDown, CFIconImage.GrayArrowRight, CFIconImage.GrayArrowUp],
    [CFIconImage.FlagLow, CFIconImage.FlagMedium, CFIconImage.FlagHigh],
    [CFIconImage.CircleLow, CFIconImage.CircleMedium, CFIconImage.CircleHigh],
    [CFIconImage.TrafficLow, CFIconImage.TrafficMedium, CFIconImage.TrafficHigh],
    [CFIconImage.SignLow, CFIconImage.SignMedium, CFIconImage.CircleHigh],
    [CFIconImage.CircleSymbolLow, CFIconImage.CircleSymbolMedium, CFIconImage.CircleSymbolHigh],
    [CFIconImage.SymbolLow, CFIconImage.SymbolMedium, CFIconImage.SymbolHigh],
    [CFIconImage.ColoredArrowDown, CFIconImage.ColoredArrowDownRight, CFIconImage.ColoredArrowUpRight, CFIconImage.ColoredArrowUp],
    [CFIconImage.GrayArrowDown, CFIconImage.GrayArrowDownRight, CFIconImage.GrayArrowUpRight, CFIconImage.GrayArrowUp],
    [CFIconImage.FourCircleLow, CFIconImage.FourCircleMedium1, CFIconImage.FourCircleMedium2, CFIconImage.FourCircleHigh],
    [CFIconImage.SignalBarLow, CFIconImage.SignalBarMedium1, CFIconImage.SignalBarMedium2, CFIconImage.SignalBarHigh],
    [CFIconImage.FourCircleLow, CFIconImage.CircleLow, CFIconImage.CircleMedium, CFIconImage.CircleHigh],
    [CFIconImage.ColoredArrowDown, CFIconImage.ColoredArrowDownRight, CFIconImage.ColoredArrowRight, CFIconImage.ColoredArrowUpRight, CFIconImage.ColoredArrowUp],
    [CFIconImage.GrayArrowDown, CFIconImage.GrayArrowDownRight, CFIconImage.GrayArrowRight, CFIconImage.GrayArrowUpRight, CFIconImage.GrayArrowUp],
    [CFIconImage.SignalBarEmpty, CFIconImage.SignalBarLow, CFIconImage.SignalBarMedium1, CFIconImage.SignalBarMedium2, CFIconImage.SignalBarHigh],
    [CFIconImage.CircleEmpty, CFIconImage.Circle25, CFIconImage.CircleHalf, CFIconImage.Circle75, CFIconImage.CircleFilled],
    [CFIconImage.StarLow, CFIconImage.StarMedium, CFIconImage.StarHigh],
    [CFIconImage.TriangleLow, CFIconImage.TriangleMedium, CFIconImage.TriangleHigh],
    [CFIconImage.QuadrantEmpty, CFIconImage.Quadrant25, CFIconImage.QuadrantHalf, CFIconImage.Quadrant75, CFIconImage.QuadrantFull] // FiveBoxes
];
exports.IconOutlineWidthPx = 1;
// In case of traffic light rectangle icon, this will be the padding of the circle from the rectangle.
exports.CirclePaddingFromBoundariesPx = 2;
// The flag's pole width
exports.FlagPoleWidth = 1;
// The minimal icon padding from cell bottom or top.
exports.MinimalIconPadding = 3;
// Number of spikes in the star icon.
var StarSpikes = 5;
// Star's rotation angle
var StarRotation = Math.PI / StarSpikes;
// Stars rotation angle's sin
exports.StarRotationSin = Math.sin(StarRotation);
// Stars rotation angle * 2 sin
exports.StarRotation2Sin = Math.sin(2 * StarRotation);
// Stars rotation angle's cos
exports.StarRotationCos = Math.cos(StarRotation);
// Stars rotation angle * 2 cos
exports.StarRotation2Cos = Math.cos(2 * StarRotation);
// Star outer radius * starInset = star inner radius.
exports.StarInset = 0.4;
// Circle's top angle - 270deg - The top point of the circle
exports.Circle270Deg = 1.5 * Math.PI;
// Circle's right angle - 0deg - The right point of the circle
exports.Circle0Deg = 0;
// Circle's bottom angle - 90deg - The bottom point of the circle
exports.Circle90Deg = 0.5 * Math.PI;
// Circle's left angle - 180deg - The left point of the circle
exports.Circle180Deg = Math.PI;
// Full Circle's angle - 360deg - The right point of the circle
exports.Circle360Deg = 2 * Math.PI;
// String indicates an unused color
exports.UnusedColor = 'unused';
// Check mark (symbol high) middle points horizontal ratio
exports.CheckMarkMiddleXRatio = 0.375;
// Check mark (symbol high) middle points vertical ratio
exports.CheckMarkMiddleYRatio = 0.6875;
// Check mark (symbol high) bottom points vertical ratio
exports.CheckMarkBottomYRatio = 0.9375;
// Check mark (symbol high) top right vertical ratio
exports.CheckMarkTopRightYRatio = 0.1875;
// Check mark (symbol high) top right horizontal ratio
exports.CheckMarkTopRightXRatio = 0.875;
// Check mark (symbol high) top right vertical ratio
exports.CheckMarkMiddleRightYRatio = 0.3125;
// Check mark (symbol high) top left vertical ratio
exports.CheckMarkTopLeftYRatio = 0.5;
// Check mark (symbol high) top left hoizontal ratio
exports.CheckMarkTopLeftXRatio = 0.15625;
// Check mark (symbol high) middle left vertical ratio
exports.CheckMarkTopMiddleYRatio = 0.625;
// Check mark (symbol high) middle left hoizontal ratio
exports.CheckMarkTopMiddleXRatio = 0.03125;
// Cross mark (symbol high) outer ratio
exports.CrossMarkOuterBigPaddingRatio = 0.8125;
// Cross mark (symbol high) outer ratio
exports.CrossMarkOuterSmallPaddingRatio = 0.1875;
// Cross mark (symbol high) outer ratio
exports.CrossMarkInnerCenterRatio = 0.5;
// Cross mark (symbol high) inner vertical ratio
exports.CrossMarkInnerBigPaddingRatio = 0.6875;
// Cross mark (symbol high) inner vertical ratio
exports.CrossMarkInnerSmallPaddingRatio = 0.3125;
// Exclamation mark (symbol meduim) bottom rectangle size ratio
exports.MediumSymbolBottomRectHeightSizeRatio = 0.25;
// Exclamation mark (symbol meduim) width rectangle size ratio
exports.MediumSymbolWidthRectSizeRatio = 0.25;
// Exclamation mark (symbol meduim) padding ratio
exports.LeftSymbolMediumRectanglePaddingRatio = 0.375;
// Exclamation mark (symbol meduim) space between rectangles ratio
exports.SpaceBetweenRectanglesRatio = 0.125;
// Exclamation mark (symbol meduim) top rectangle size ratio
exports.MediumSymbolTopRectHeightSizeRatio = 0.6875;
// The minimum gap between the 2 rectangles of the exclamation mark (symbol medium)
exports.ExclamationMarkMinSpaceBetweenRectangels = 2;
// The arrow's shaft width
exports.ArrowShaftWidthRatio = 0.2;
// The arrow's head vertices
exports.ArrowHeadVertexRatio = 0.5;
// The arrow's shaft height
exports.ArrowShaftHeightRatio = 0.9 - 2 / Math.sqrt(50);
// The barb arrow distance (horizontacly and vertically) from the close head vertex
exports.ArrowBarbDistanceRatio = 1 / Math.sqrt(50);
// The CF Icon outline width
exports.CFIconOutlineWidth = 1;
// The icons's adjustments for sharp lines
exports.IconLinesAdjustment = helpers_1.getLinePixelTranslation(exports.CFIconOutlineWidth);
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/flags.js":
/*!*************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/flags.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var helpers_2 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var drawingConstants_1 = __webpack_require__(/*! ../../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
/**
 * Draws a flag icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawFlag(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawFlags');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawFlags');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawFlags');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawFlags');
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    var flagRectangleHeight = Math.floor(size / 2);
    var flagRectangleWidth = Math.floor(size / 3);
    var flagInnerColor = getFlagInnerColor(image);
    var flagOuterColor = getFlagOuterColor(image);
    // Draws the top flag
    drawFlagTopRect(ctx, model, cell, left, bottom, flagRectangleHeight, flagRectangleWidth, flagInnerColor, flagOuterColor);
    // Draws the bottom flag
    drawFlagBottomRect(ctx, model, cell, size, left, bottom, flagRectangleHeight, flagRectangleWidth, flagInnerColor, flagOuterColor);
    // Draws the flag's pole
    drawFlagPole(ctx, left, flagRectangleHeight * 2, bottom);
}
exports.drawFlag = drawFlag;
function drawFlagTopRect(ctx, model, cell, left, bottom, flagRectangleHeight, flagRectangleWidth, flagInnerColor, flagOuterColor) {
    var drawingFlagBottomRectangleContext = {
        left: left,
        bottom: bottom - flagRectangleHeight,
        outerColor: flagOuterColor,
        height: flagRectangleHeight,
        width: flagRectangleWidth,
        innerColor: flagInnerColor
    };
    // Draws the top rectangle flag.
    rectangle_1.drawRectangleIcon(ctx, model, cell, drawingFlagBottomRectangleContext);
}
function drawFlagBottomRect(ctx, model, cell, size, left, bottom, flagRectangleHeight, flagRectangleWidth, flagInnerColor, flagOuterColor) {
    var bottomFlagRectanglePadding = Math.floor(size / 8);
    var drawingFlagBottomRectangleContext = {
        left: left + flagRectangleWidth,
        bottom: bottom - flagRectangleHeight + bottomFlagRectanglePadding,
        outerColor: flagOuterColor,
        height: flagRectangleHeight,
        width: flagRectangleWidth,
        innerColor: flagInnerColor
    };
    // Draws the second rectangle flag.
    rectangle_1.drawRectangleIcon(ctx, model, cell, drawingFlagBottomRectangleContext);
}
/**
 * Draws 1px line - the flag stick.
 *
 * @param ctx the canvas context
 * @param left icon's left
 * @param size icon's size
 * @param bottom icon's bottom
 */
function drawFlagPole(ctx, left, size, bottom) {
    var y1 = bottom - constants_1.IconLinesAdjustment;
    var y2 = y1 - size;
    var x = left + constants_1.IconLinesAdjustment;
    ctx.lineWidth = constants_1.FlagPoleWidth;
    ctx.setLineDash(drawingConstants_1.DefaultDash);
    ctx.strokeStyle = colors.FlagStickColor;
    ctx.beginPath();
    helpers_2.drawLine(ctx, x, y1, x, y2);
    ctx.stroke();
}
/**
 * Returns the flag rectangle outer color
 *
 * @param image the icon's image
 */
function getFlagOuterColor(image) {
    switch (image) {
        case constants_1.CFIconImage.FlagHigh:
            return colors.FlagHighOuterColor;
        case constants_1.CFIconImage.FlagMedium:
            return colors.FlagMediumOuterColor;
        case constants_1.CFIconImage.FlagLow:
            return colors.FlagLowOuterColor;
        default:
            throw Error("getFlagOuterColor: unsupported image type = " + image);
    }
}
/**
 * Returns the flag rectangle inner color
 *
 * @param image the icon's image
 */
function getFlagInnerColor(image) {
    switch (image) {
        case constants_1.CFIconImage.FlagHigh:
            return colors.FlagHighInnerColor;
        case constants_1.CFIconImage.FlagMedium:
            return colors.FlagMediumInnerColor;
        case constants_1.CFIconImage.FlagLow:
            return colors.FlagLowInnerColor;
        default:
            throw Error("getFlagInnerColor: unsupported image type = " + image);
    }
}
//# sourceMappingURL=flags.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/helpers.js":
/*!***************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/helpers.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fills a path and stroke it.
 *
 * @param ctx the context
 * @param innerColor path inner color
 * @param outerColor path outer color
 */
function fillAndStroke(ctx, innerColor, outerColor) {
    // Fill
    ctx.fillStyle = innerColor;
    ctx.fill();
    // Stroke
    ctx.strokeStyle = outerColor;
    ctx.stroke();
}
exports.fillAndStroke = fillAndStroke;
/**
 * Draw the icon according to path of points.
 *
 * @param ctx the context
 * @param innerColor path inner color
 * @param outerColor path outer color
 * @param points array of points, which represents the coordinate's path of a shape
 */
function drawIconFromPoints(ctx, innerColor, outerColor, points) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
    }
    fillAndStroke(ctx, innerColor, outerColor);
}
exports.drawIconFromPoints = drawIconFromPoints;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/icons.js":
/*!*************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/icons.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var helpers_3 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var cellLayout_1 = __webpack_require__(/*! ../../../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var circle_1 = __webpack_require__(/*! ./circle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/circle.js");
var drawingConstants_1 = __webpack_require__(/*! ../../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var trafficLightRimmed_1 = __webpack_require__(/*! ./trafficLightRimmed */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/trafficLightRimmed.js");
var iconsLayout_1 = __webpack_require__(/*! ../../../layout/iconsLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/iconsLayout.js");
var helpers_4 = __webpack_require__(/*! ../../../layout/helpers */ "../../packages/excel-online-grid-renderer/lib/src/layout/helpers.js");
var signalBar_1 = __webpack_require__(/*! ./signalBar */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/signalBar.js");
var quadrantBoxes_1 = __webpack_require__(/*! ./quadrantBoxes */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/quadrantBoxes.js");
var flags_1 = __webpack_require__(/*! ./flags */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/flags.js");
var triangleSet_1 = __webpack_require__(/*! ./triangleSet */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/triangleSet.js");
var stars_1 = __webpack_require__(/*! ./stars */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/stars.js");
var signs_1 = __webpack_require__(/*! ./signs */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/signs.js");
var symbols_1 = __webpack_require__(/*! ./symbols */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/symbols.js");
var arrows_1 = __webpack_require__(/*! ./arrows */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/arrows.js");
/**
 * Draws all the icons on the cells
 *
 * @param ctx The context
 * @param model The model
 * @param context The rendering context
 */
function drawConditionalFormattingIcons(ctx, model, context) {
    var _a, _b;
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawConditionalFormattingIcons');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawConditionalFormattingIcons');
    helpers_1.verifyArgumentNotNull(context, 'context', 'drawConditionalFormattingIcons');
    var cells = model.Cells;
    if (cells.length > 0) {
        // Set stroke width and dash for all icons
        ctx.lineWidth = constants_1.IconOutlineWidthPx;
        ctx.setLineDash(drawingConstants_1.DefaultDash);
    }
    // Get the high contrast mode & scheme
    var highContrastScheme = helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.CFIconsHighContrast, model) && context.highContrastScheme
        ? context.highContrastScheme
        : undefined;
    // Iterating over all cell and draw icons
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        // If there is no icon on the cell, we move to the next cell
        if (!((_b = (_a = cell) === null || _a === void 0 ? void 0 : _a.CondFormat) === null || _b === void 0 ? void 0 : _b.Icon)) {
            continue;
        }
        // If the cell isn't in the current rendering region skip it
        if (!helpers_3.cellIntersectsRenderingRegion(cell, context.renderingRegion)) {
            continue;
        }
        drawConditionalFormattingIcon(ctx, model, cell, context.devicePixelRatio, highContrastScheme);
    }
}
exports.drawConditionalFormattingIcons = drawConditionalFormattingIcons;
function drawConditionalFormattingIcon(ctx, model, cell, devicePixelRatio, highContrastScheme) {
    var drawingContext = getIconDrawingContext(model, cell, devicePixelRatio, highContrastScheme);
    var clipRect = getClipRect(model, cell, drawingContext);
    helpers_3.applyClipping(ctx, clipRect);
    switch (drawingContext.image) {
        case constants_1.CFIconImage.CircleLow:
        case constants_1.CFIconImage.CircleMedium:
        case constants_1.CFIconImage.CircleHigh:
        case constants_1.CFIconImage.CircleEmpty:
        case constants_1.CFIconImage.CircleFilled:
        case constants_1.CFIconImage.FourCircleHigh:
        case constants_1.CFIconImage.FourCircleLow:
        case constants_1.CFIconImage.FourCircleMedium1:
        case constants_1.CFIconImage.FourCircleMedium2:
        case constants_1.CFIconImage.Circle25:
        case constants_1.CFIconImage.CircleHalf:
        case constants_1.CFIconImage.Circle75: {
            circle_1.drawCircleIcon(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.TrafficHigh:
        case constants_1.CFIconImage.TrafficMedium:
        case constants_1.CFIconImage.TrafficLow: {
            trafficLightRimmed_1.drawTrafficLightRimmed(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.SignalBarEmpty:
        case constants_1.CFIconImage.SignalBarLow:
        case constants_1.CFIconImage.SignalBarMedium1:
        case constants_1.CFIconImage.SignalBarMedium2:
        case constants_1.CFIconImage.SignalBarHigh: {
            signalBar_1.drawSignalBar(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.QuadrantEmpty:
        case constants_1.CFIconImage.Quadrant25:
        case constants_1.CFIconImage.QuadrantHalf:
        case constants_1.CFIconImage.Quadrant75:
        case constants_1.CFIconImage.QuadrantFull: {
            quadrantBoxes_1.drawQuadrantBoxes(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.FlagHigh:
        case constants_1.CFIconImage.FlagMedium:
        case constants_1.CFIconImage.FlagLow: {
            flags_1.drawFlag(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.TriangleHigh:
        case constants_1.CFIconImage.TriangleMedium:
        case constants_1.CFIconImage.TriangleLow: {
            triangleSet_1.drawTriangleSet(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.StarHigh:
        case constants_1.CFIconImage.StarMedium:
        case constants_1.CFIconImage.StarLow: {
            stars_1.drawStarIcon(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.SignLow:
        case constants_1.CFIconImage.SignMedium: {
            signs_1.drawSigns(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.SymbolHigh:
        case constants_1.CFIconImage.SymbolMedium:
        case constants_1.CFIconImage.SymbolLow: {
            symbols_1.drawSymbols(ctx, model, cell, drawingContext);
            break;
        }
        case constants_1.CFIconImage.ColoredArrowDown:
        case constants_1.CFIconImage.ColoredArrowDownRight:
        case constants_1.CFIconImage.ColoredArrowRight:
        case constants_1.CFIconImage.ColoredArrowUp:
        case constants_1.CFIconImage.ColoredArrowUpRight:
        case constants_1.CFIconImage.GrayArrowDown:
        case constants_1.CFIconImage.GrayArrowDownRight:
        case constants_1.CFIconImage.GrayArrowRight:
        case constants_1.CFIconImage.GrayArrowUp:
        case constants_1.CFIconImage.GrayArrowUpRight: {
            arrows_1.drawArrows(ctx, model, cell, drawingContext);
            break;
        }
        default: {
            throw Error("drawConditionalFormattingIcon: imageType: " + drawingContext.image + " not supported");
        }
    }
    helpers_3.restoreClipping(ctx, clipRect);
}
/**
 * Returns all the metadata required in order to draw the icon
 */
function getIconDrawingContext(model, cell, devicePixelRatio, highContrastScheme) {
    var fontSize = helpers_1.getActualFontSize(cell);
    var iconSize = helpers_4.getIconSize(fontSize, devicePixelRatio);
    var icon = cell.CondFormat.Icon;
    var image = constants_1.IconImageLookup[icon.Set][icon.Index];
    var left = iconsLayout_1.getIconLeftPosition(model, cell, iconSize, fontSize, devicePixelRatio);
    var bottom = iconsLayout_1.getIconVerticalPosition(model, cell, devicePixelRatio, iconSize);
    return { size: iconSize, image: image, left: left, bottom: bottom, highContrastScheme: highContrastScheme };
}
/**
 * Checks if the icon exceeds the cell dimensions and needs to be clipped
 */
function shouldClipIcon(model, cell, drawingContext) {
    // Check if icon bottom exceeds cell boundries
    var cellBottom = cellLayout_1.getCellBottomAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx;
    if (drawingContext.bottom >= cellBottom) {
        return true;
    }
    // Check if icon top exceeds cell boundries
    var cellTop = cellLayout_1.getCellTopAdjustedForDrawing(model, cell);
    if (drawingContext.bottom - drawingContext.size <= cellTop) {
        return true;
    }
    // Check if icon left exceeds cell boundries
    var cellLeft = cellLayout_1.getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false);
    if (drawingContext.left <= cellLeft) {
        return true;
    }
    // Check if icon left exceeds cell boundries
    var cellRight = cellLayout_1.getCellRightAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx;
    if (drawingContext.left + drawingContext.size >= cellRight) {
        return true;
    }
    return false;
}
/**
 * Checks if the icon needs to be clipped and returns the cell's clipping mask.
 * Returns null if no clipping is needed.
 */
function getClipRect(model, cell, drawingContext) {
    var shouldClip = shouldClipIcon(model, cell, drawingContext);
    if (shouldClip) {
        return {
            x: cellLayout_1.getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false),
            y: cellLayout_1.getCellTopAdjustedForDrawing(model, cell),
            width: cellLayout_1.getCellWidthAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx,
            height: cellLayout_1.getCellHeightAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx
        };
    }
    return undefined;
}
//# sourceMappingURL=icons.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/quadrantBoxes.js":
/*!*********************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/quadrantBoxes.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var helpers_2 = __webpack_require__(/*! ../../../drawing/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
/**
 * Draws a quadrant boxes icons on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawQuadrantBoxes(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawQuadrantBoxes');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawQuadrantBoxes');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawQuadrantBoxes');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawQuadrantBoxes');
    var image = drawingContext.image, size = drawingContext.size, highContrastScheme = drawingContext.highContrastScheme;
    var boxSize = Math.floor(size / 2);
    var boxesColors = getBoxesColors(image, highContrastScheme);
    // Draw signal box according to boxes colors array.
    for (var row = 0; row < boxesColors.length; row++) {
        for (var col = 0; col < boxesColors.length; col++) {
            var boxDrawingContext = getBoxDrawingContext(row, col, boxesColors[row][col], boxSize, drawingContext);
            rectangle_1.drawRectangleIcon(ctx, model, cell, boxDrawingContext);
        }
    }
    if (highContrastScheme) {
        drawSeperators(ctx, drawingContext, boxSize, image);
    }
}
exports.drawQuadrantBoxes = drawQuadrantBoxes;
/**
 * Returns the CFIcon's array of boxes colors
 * [BottomLeft, BottomRight]
 * [TopLeft, TopRight]
 *
 * @param image CFIcon's image
 * @param highContrastScheme the high-contrast colorScheme (undefined if not in high-contrast mode)
 */
function getBoxesColors(image, highContrastScheme) {
    var fullColor = getBoxesFilledColor(highContrastScheme);
    var emptyColor = getBoxesEmptyColor(highContrastScheme);
    switch (image) {
        case constants_1.CFIconImage.QuadrantEmpty:
            return [
                [emptyColor, emptyColor],
                [emptyColor, emptyColor]
            ];
        case constants_1.CFIconImage.Quadrant25:
            return [
                [fullColor, emptyColor],
                [emptyColor, emptyColor]
            ];
        case constants_1.CFIconImage.QuadrantHalf:
            return [
                [fullColor, fullColor],
                [emptyColor, emptyColor]
            ];
        case constants_1.CFIconImage.Quadrant75:
            return [
                [fullColor, fullColor],
                [fullColor, emptyColor]
            ];
        case constants_1.CFIconImage.QuadrantFull:
            return [
                [fullColor, fullColor],
                [fullColor, fullColor]
            ];
        default: {
            throw Error("getBoxesColors: image: " + image + " not supported");
        }
    }
}
/**
 * For a single box, returns the box drawing context.
 *
 * @param col the box's col index
 * @param row the box's row index
 * @param innerColor box's inner color
 * @param boxSize box's size
 * @param drawingContext CFIcon's drawing context
 */
function getBoxDrawingContext(row, col, innerColor, boxSize, drawingContext) {
    var left = drawingContext.left, bottom = drawingContext.bottom, highContrastScheme = drawingContext.highContrastScheme;
    var outerColor = getBoxesOutlineColor(highContrastScheme);
    return {
        innerColor: innerColor,
        outerColor: outerColor,
        bottom: bottom - row * boxSize,
        left: left + col * boxSize,
        height: boxSize,
        width: boxSize
    };
}
/**
 * retruns the required color for the outline of the shapes, depending on the mode(high contrast\regular)
 *
 * @param highContrastScheme the high-contrast colorScheme (undefined if not in high-contrast mode)
 */
function getBoxesOutlineColor(highContrastScheme) {
    if (highContrastScheme) {
        return helpers_2.rgbToColorHex(highContrastScheme.TextColor);
    }
    return colors.SignalBarOutlineColor;
}
/**
 * retruns the required color for the filling of the filled boxes, depending on the mode(high contrast\regular)
 *
 * @param highContrastScheme the high-contrast colorScheme (undefined if not in high-contrast mode)
 */
function getBoxesFilledColor(highContrastScheme) {
    if (highContrastScheme) {
        return helpers_2.rgbToColorHex(highContrastScheme.TextColor);
    }
    return colors.SignalBarFilledColor;
}
/**
 * retruns the required color for the filling of the empty boxes, depending on the mode(high contrast\regular)
 *
 * @param highContrastScheme the high-contrast colorScheme (undefined if not in high-contrast mode)
 */
function getBoxesEmptyColor(highContrastScheme) {
    if (highContrastScheme) {
        return helpers_2.rgbToColorHex(highContrastScheme.BackgroundColor);
    }
    return colors.SignalBarEmptyColor;
}
/**
 * Draws the needed seperators (called only in high-contrast mode) according to the image.
 * Each needed seperator is drawn from the icon's center to it's given end-point from getSeperatorsEndPoints().
 *
 * @param ctx canvas's drawing context
 * @param drawingContext CFIcon's drawing context
 * @param boxSize length of a single box
 * @param image CFIcon's image
 */
function drawSeperators(ctx, drawingContext, boxSize, image) {
    var left = drawingContext.left, bottom = drawingContext.bottom, highContrastScheme = drawingContext.highContrastScheme;
    var centerX = left + boxSize + constants_1.IconLinesAdjustment;
    var centerY = bottom - boxSize - constants_1.IconLinesAdjustment;
    var seperators = getSeperatorsEndPoints(image, centerX, centerY, boxSize);
    ctx.strokeStyle = helpers_2.rgbToColorHex(highContrastScheme.BackgroundColor);
    ctx.beginPath();
    for (var i = 0; i < seperators.length; i++) {
        helpers_2.drawLine(ctx, centerX, centerY, seperators[i].x, seperators[i].y);
    }
    ctx.stroke();
}
/**
 * returns an array of seperators' end points.
 * (each seperator is drawn from the icon's center to a single end-point listed in the output array)
 * Seperators are only required around and between filled boxes, so there aren't always 4 of them.(depends on the image)
 *
 * @param image CFIcon's image
 * @param x X coordinate of the icon's center
 * @param y Y coordinate of the icon's center
 * @param boxSize length of a single box
 */
function getSeperatorsEndPoints(image, x, y, boxSize) {
    switch (image) {
        case constants_1.CFIconImage.QuadrantEmpty:
            return [];
        case constants_1.CFIconImage.Quadrant25:
            return [
                { x: x, y: y + boxSize - constants_1.IconLinesAdjustment },
                { x: x - boxSize + constants_1.IconLinesAdjustment, y: y }
            ];
        case constants_1.CFIconImage.QuadrantHalf:
            return [
                { x: x + boxSize, y: y },
                { x: x, y: y + boxSize - constants_1.IconLinesAdjustment },
                { x: x - boxSize + constants_1.IconLinesAdjustment, y: y }
            ];
        case constants_1.CFIconImage.Quadrant75:
        case constants_1.CFIconImage.QuadrantFull:
            return [
                { x: x, y: y - boxSize + constants_1.IconLinesAdjustment },
                { x: x + boxSize - constants_1.IconLinesAdjustment, y: y },
                { x: x, y: y + boxSize - constants_1.IconLinesAdjustment },
                { x: x - boxSize + constants_1.IconLinesAdjustment, y: y }
            ];
        default: {
            throw Error("getSeperatorsCoordinates: image: " + image + " not supported");
        }
    }
}
//# sourceMappingURL=quadrantBoxes.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js":
/*!*****************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
/**
 * Draws a Rectangle icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the circle
 */
function drawRectangleIcon(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawRectangleIcon');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawRectangleIcon');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawRectangleIcon');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawRectangleIcon');
    var innerColor = drawingContext.innerColor, outerColor = drawingContext.outerColor, left = drawingContext.left, bottom = drawingContext.bottom, height = drawingContext.height, width = drawingContext.width;
    var outlineX = left + constants_1.IconLinesAdjustment;
    var outlineY = bottom - height - constants_1.IconLinesAdjustment;
    strokeRect(ctx, outlineX, outlineY, width, height, outerColor);
    if (innerColor) {
        var innerX = left + constants_1.IconOutlineWidthPx;
        var innerY = bottom - height;
        var innerWidth_1 = width - constants_1.IconOutlineWidthPx;
        var innerHight = height - constants_1.IconOutlineWidthPx;
        fillRect(ctx, innerX, innerY, innerWidth_1, innerHight, innerColor);
    }
}
exports.drawRectangleIcon = drawRectangleIcon;
/**
 * Draws a filled rectangle according to the given params filled with the given color
 */
function fillRect(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(x, y, width, height);
    ctx.fill();
}
/**
 * Stroke a rectangle according to the given params filled with the given color
 */
function strokeRect(ctx, x, y, width, height, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
}
//# sourceMappingURL=rectangle.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/signalBar.js":
/*!*****************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/signalBar.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var helpers_2 = __webpack_require__(/*! ../../../drawing/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
/**
 * Draws a signal bar icons on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawSignalBar(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawSignalBar');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawSignalBar');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawSignalBar');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawSignalBar');
    var image = drawingContext.image, size = drawingContext.size, highContrastScheme = drawingContext.highContrastScheme;
    var barWidth = Math.floor(size / 5);
    var barsColors = getBarsColors(image, highContrastScheme);
    // Draw signal bars according to bars array.
    for (var i = 0; i < barsColors.length; i++) {
        var barDrawingContext = getBarDrawingContext(i, barsColors[i], barWidth, drawingContext);
        rectangle_1.drawRectangleIcon(ctx, model, cell, barDrawingContext);
    }
    if (highContrastScheme) {
        drawSeperators(image, ctx, drawingContext, barWidth);
    }
}
exports.drawSignalBar = drawSignalBar;
/**
 * Returns the CFIcon's array of bars colors
 *
 * @param image CFIcon's image
 * @param HCScheme high contrast color scheme
 */
function getBarsColors(image, highContrastScheme) {
    var emptyColor = getBarEmptyColor(highContrastScheme);
    var fullColor = getBarFilledColor(highContrastScheme);
    switch (image) {
        case constants_1.CFIconImage.SignalBarEmpty:
            return [emptyColor, emptyColor, emptyColor, emptyColor];
        case constants_1.CFIconImage.SignalBarLow:
            return [fullColor, emptyColor, emptyColor, emptyColor];
        case constants_1.CFIconImage.SignalBarMedium1:
            return [fullColor, fullColor, emptyColor, emptyColor];
        case constants_1.CFIconImage.SignalBarMedium2:
            return [fullColor, fullColor, fullColor, emptyColor];
        case constants_1.CFIconImage.SignalBarHigh:
            return [fullColor, fullColor, fullColor, fullColor];
        default: {
            throw Error("getBarsColors: image: " + image + " not supported");
        }
    }
}
/**
 * For a single signal bar, returns the bar's drawing context.
 *
 * @param barIndex the index of the bar (the smallest bar is 0)
 * @param innerColor bar's inner color
 * @param barWidth bar's width
 * @param drawingContext CFIcon's drawing context
 */
function getBarDrawingContext(barIndex, innerColor, barWidth, drawingContext) {
    var left = drawingContext.left, bottom = drawingContext.bottom, highContrastScheme = drawingContext.highContrastScheme;
    var outerColor = getBarOutlineColor(highContrastScheme);
    return {
        innerColor: innerColor,
        outerColor: outerColor,
        bottom: bottom,
        left: left + barWidth * (barIndex + 1),
        height: barWidth * (barIndex + 2),
        width: barWidth
    };
}
/**
 * returns required color for the filling of filled bars, whether High contrast is active or not.
 *
 * @param highContrastScheme the high-contrast colorScheme (undefined if not in high-contrast mode)
 */
function getBarFilledColor(highContrastScheme) {
    if (highContrastScheme) {
        return helpers_2.rgbToColorHex(highContrastScheme.TextColor);
    }
    return colors.SignalBarFilledColor;
}
/**
 * returns required color for the filling of empty bars, whether High contrast is active or not.
 *
 * @param highContrastScheme the high-contrast colorScheme (undefined if not in high-contrast mode)
 */
function getBarEmptyColor(highContrastScheme) {
    if (highContrastScheme) {
        return helpers_2.rgbToColorHex(highContrastScheme.BackgroundColor);
    }
    return colors.SignalBarEmptyColor;
}
/**
 * returns required color for the outline, whether High contrast is active or not.
 *
 * @param highContrastScheme the high-contrast colorScheme (undefined if not in high-contrast mode)
 */
function getBarOutlineColor(highContrastScheme) {
    if (highContrastScheme) {
        return helpers_2.rgbToColorHex(highContrastScheme.TextColor);
    }
    return colors.SignalBarOutlineColor;
}
/**
 * Draws the seperating lines between filled bars in high-contrast mode.
 *
 * @param image CFIcon's image
 * @param ctx the canvas context
 * @param drawingContext the metadata required for drawing the icon
 * @param barWidth the width of a single bar
 */
function drawSeperators(image, ctx, drawingContext, barWidth) {
    var left = drawingContext.left, bottom = drawingContext.bottom, highContrastScheme = drawingContext.highContrastScheme;
    var seperators = getSeperators(image, left, bottom, barWidth);
    ctx.strokeStyle = helpers_2.rgbToColorHex(highContrastScheme.BackgroundColor);
    ctx.beginPath();
    for (var i = 0; i < seperators.length; i++) {
        helpers_2.drawLine(ctx, seperators[i].X, seperators[i].startY, seperators[i].X, seperators[i].endY);
    }
    ctx.stroke();
}
/**
 * Creates an array of vertical-lines according to the specific image.
 * seperators are created only between 2 filled bars.
 *
 * @param image CFIcon's image
 * @param left left edge of the icon's area
 * @param bottom bottom edge of the icon's area
 * @param barWidth width of a single bar
 */
function getSeperators(image, left, bottom, barWidth) {
    var numOfSeperators = getNumberOfSeperators(image);
    var seperators = [];
    var top = bottom - 2 * barWidth + constants_1.IconLinesAdjustment;
    var x = left + barWidth * 2 + constants_1.IconLinesAdjustment;
    for (var i = 0; i < numOfSeperators; i++) {
        seperators.push({
            X: x,
            startY: top,
            endY: bottom - 1.5
        });
        top -= barWidth;
        x += barWidth;
    }
    return seperators;
}
/**
 * returns the number of seperators needed to be drawn according to the image
 * (a seperator for each 2 sequential filled bars)
 *
 * @param image CFIcon's image
 */
function getNumberOfSeperators(image) {
    switch (image) {
        case constants_1.CFIconImage.SignalBarEmpty:
        case constants_1.CFIconImage.SignalBarLow:
            return 0;
        case constants_1.CFIconImage.SignalBarMedium1:
            return 1;
        case constants_1.CFIconImage.SignalBarMedium2:
            return 2;
        case constants_1.CFIconImage.SignalBarHigh:
            return 3;
        default:
            throw Error("getSeperators: image: " + image + " not supported");
    }
}
//# sourceMappingURL=signalBar.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/signs.js":
/*!*************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/signs.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var triangle_1 = __webpack_require__(/*! ./triangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/triangle.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/helpers.js");
/**
 * Draws a triangle / diamond icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawSigns(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawSigns');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawSigns');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawSigns');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawSigns');
    var image = drawingContext.image;
    switch (image) {
        case constants_1.CFIconImage.SignLow:
            drawDiamond(ctx, drawingContext);
            break;
        case constants_1.CFIconImage.SignMedium: {
            var triangleDrawingContext = getTriangleSignDrawingContext(drawingContext);
            triangle_1.drawTriangle(ctx, model, cell, triangleDrawingContext, /*isTriangleReversed*/ false);
            break;
        }
        default:
            throw Error("drawSigns: unsupported image type = " + image);
    }
}
exports.drawSigns = drawSigns;
function getTriangleSignDrawingContext(drawingContext) {
    var left = drawingContext.left, bottom = drawingContext.bottom, size = drawingContext.size;
    var triangleLeft = left + constants_1.IconLinesAdjustment;
    var triangleBottom = bottom - constants_1.IconLinesAdjustment;
    return {
        outerColor: colors.SignMediumOuterColor,
        innerColor: colors.SignMediumInnerColor,
        left: triangleLeft,
        bottom: triangleBottom,
        height: size,
        width: size
    };
}
function drawDiamond(ctx, drawingContext) {
    var diamondCoordinates = getDiamondCoordinates(drawingContext);
    ctx.beginPath();
    ctx.moveTo(diamondCoordinates.top.x, diamondCoordinates.top.y);
    ctx.lineTo(diamondCoordinates.right.x, diamondCoordinates.right.y);
    ctx.lineTo(diamondCoordinates.bottom.x, diamondCoordinates.bottom.y);
    ctx.lineTo(diamondCoordinates.left.x, diamondCoordinates.left.y);
    ctx.lineTo(diamondCoordinates.top.x, diamondCoordinates.top.y);
    helpers_2.fillAndStroke(ctx, colors.SignLowInnerColor, colors.SignLowOuterColor);
}
function getDiamondCoordinates(drawingContext) {
    var size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    var distanceFromCenterToCorner = Math.floor(size / 2);
    // 0.5 pixel adjustment is needed to create sharp corners to diamond.
    var centerX = left + distanceFromCenterToCorner + constants_1.IconLinesAdjustment;
    var centerY = bottom - distanceFromCenterToCorner - constants_1.IconLinesAdjustment;
    var diamondTop = { x: centerX, y: centerY - distanceFromCenterToCorner };
    var diamondRight = { x: centerX + distanceFromCenterToCorner, y: centerY };
    var diamondBottom = { x: centerX, y: centerY + distanceFromCenterToCorner };
    var diamondLeft = { x: centerX - distanceFromCenterToCorner, y: centerY };
    return {
        top: diamondTop,
        right: diamondRight,
        bottom: diamondBottom,
        left: diamondLeft
    };
}
//# sourceMappingURL=signs.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/stars.js":
/*!*************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/stars.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/helpers.js");
/**
 * Draws a star icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the circle
 */
function drawStarIcon(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawCircleIcon');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawCircleIcon');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawCircleIcon');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawCircleIcon');
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    var outerRadius = Math.floor(size / 2);
    if (outerRadius <= 1) {
        return;
    }
    var starCoordinates = createStarCoordinates(left, bottom, outerRadius);
    var leftInnerColor = getStarLeftInnerColor(image);
    var leftOuterColor = getStarLeftOuterColor(image);
    var rightInnerColor = getStarRightInnerColor(image);
    var rightOuterColor = getStarRightOuterColor(image);
    var isMedium = image === constants_1.CFIconImage.StarMedium;
    ctx.beginPath();
    drawRightHalfStarPath(ctx, starCoordinates);
    if (isMedium) {
        helpers_2.fillAndStroke(ctx, rightInnerColor, rightOuterColor);
        ctx.beginPath();
    }
    drawLeftHalfStarPath(ctx, starCoordinates);
    helpers_2.fillAndStroke(ctx, leftInnerColor, leftOuterColor);
}
exports.drawStarIcon = drawStarIcon;
/**
 * Returns Star's left outer color
 *
 * @param image icon's image
 */
function getStarLeftOuterColor(image) {
    switch (image) {
        case constants_1.CFIconImage.StarHigh:
        case constants_1.CFIconImage.StarMedium:
            return colors.StarFilledOuterColor;
        case constants_1.CFIconImage.StarLow:
            return colors.StarEmptyOuterColor;
        default:
            throw Error("getStarLeftOuterColor: unsupported image type = " + image);
    }
}
/**
 * Returns Star's left inner color
 *
 * @param image icon's image
 */
function getStarLeftInnerColor(image) {
    switch (image) {
        case constants_1.CFIconImage.StarHigh:
        case constants_1.CFIconImage.StarMedium:
            return colors.StarFilledInnerColor;
        case constants_1.CFIconImage.StarLow:
            return colors.StarEmptyInnerColor;
        default:
            throw Error("getStarLeftInnerColor: unsupported image type = " + image);
    }
}
/**
 * Returns Star's right outer color
 *
 * @param image icon's image
 */
function getStarRightOuterColor(image) {
    switch (image) {
        case constants_1.CFIconImage.StarHigh:
            return colors.StarFilledOuterColor;
        case constants_1.CFIconImage.StarMedium:
        case constants_1.CFIconImage.StarLow:
            return colors.StarEmptyOuterColor;
        default:
            throw Error("getStarRightOuterColor: unsupported image type = " + image);
    }
}
/**
 * Returns Star's right inner color
 *
 * @param image icon's image
 */
function getStarRightInnerColor(image) {
    switch (image) {
        case constants_1.CFIconImage.StarHigh:
            return colors.StarFilledInnerColor;
        case constants_1.CFIconImage.StarMedium:
        case constants_1.CFIconImage.StarLow:
            return colors.StarEmptyInnerColor;
        default:
            throw Error("getStarRightInnerColor: unsupported image type = " + image);
    }
}
function drawRightHalfStarPath(ctx, starCoordinates) {
    ctx.moveTo(starCoordinates.topOuter.x, starCoordinates.topOuter.y);
    ctx.lineTo(starCoordinates.topRightInner.x, starCoordinates.topRightInner.y);
    ctx.lineTo(starCoordinates.topRightOuter.x, starCoordinates.topRightOuter.y);
    ctx.lineTo(starCoordinates.middleRightInner.x, starCoordinates.middleRightInner.y);
    ctx.lineTo(starCoordinates.bottomRightOuter.x, starCoordinates.bottomRightOuter.y);
    ctx.lineTo(starCoordinates.bottomInner.x, starCoordinates.bottomInner.y);
}
function drawLeftHalfStarPath(ctx, starCoordinates) {
    ctx.moveTo(starCoordinates.bottomInner.x, starCoordinates.bottomInner.y);
    ctx.lineTo(starCoordinates.bottomLeftOuter.x, starCoordinates.bottomLeftOuter.y);
    ctx.lineTo(starCoordinates.middleLeftInner.x, starCoordinates.middleLeftInner.y);
    ctx.lineTo(starCoordinates.topLeftOuter.x, starCoordinates.topLeftOuter.y);
    ctx.lineTo(starCoordinates.topLeftInner.x, starCoordinates.topLeftInner.y);
    ctx.lineTo(starCoordinates.topOuter.x, starCoordinates.topOuter.y);
}
/**
 * Creates StarCoordinates data structure with the position of each point of the star.
 *
 * @param left icon's left
 * @param bottom icon's right
 * @param outerRadius star's outer radius
 */
function createStarCoordinates(left, bottom, outerRadius) {
    var innerRadius = outerRadius * constants_1.StarInset;
    var centerX = left + outerRadius + 0.5;
    var centerY = bottom - outerRadius;
    // Calculations and explanations for offsets are in the readme.md
    var x1Offset = innerRadius * constants_1.StarRotationSin;
    var y1Offset = innerRadius * constants_1.StarRotationCos;
    var x2Offset = outerRadius * constants_1.StarRotation2Sin;
    var x3Offset = innerRadius * constants_1.StarRotation2Sin;
    var y3Offset = innerRadius * constants_1.StarRotation2Cos;
    var x4Offset = outerRadius * constants_1.StarRotationSin;
    var y4Offset = outerRadius * constants_1.StarRotationCos;
    // We want the horizontal lines of the stars to be in 0.5 pixel.
    // To do that, we will find the delta of y1Offset, the numbers after decimal point,
    // and adjust centerY to be in the right position, so the horizontal lines of the stars, will be places in 0.5 pixel.
    var y1OffsetAdjusted = Math.floor(y1Offset) + constants_1.IconLinesAdjustment;
    var starAdjustmentY = y1Offset - y1OffsetAdjusted;
    var centerYAdjusted = centerY + starAdjustmentY;
    var topOuter = { x: centerX, y: centerYAdjusted - outerRadius };
    var topInnerY = centerYAdjusted - y1Offset;
    var topRightInner = { x: centerX + x1Offset, y: topInnerY };
    var topRightOuter = { x: centerX + x2Offset, y: topInnerY };
    var middleInnerY = centerYAdjusted + y3Offset;
    var middleRightInner = { x: centerX + x3Offset, y: middleInnerY };
    var bottomOuterY = centerYAdjusted + y4Offset;
    var bottomRightOuter = { x: centerX + x4Offset, y: bottomOuterY };
    var bottomInner = { x: centerX, y: centerYAdjusted + innerRadius };
    var bottomLeftOuter = { x: centerX - x4Offset, y: bottomOuterY };
    var middleLeftInner = { x: centerX - x3Offset, y: middleInnerY };
    var topLeftOuter = { x: centerX - x2Offset, y: topInnerY };
    var topLeftInner = { x: centerX - x1Offset, y: topInnerY };
    return {
        topOuter: topOuter,
        topRightInner: topRightInner,
        topRightOuter: topRightOuter,
        middleRightInner: middleRightInner,
        bottomRightOuter: bottomRightOuter,
        bottomInner: bottomInner,
        bottomLeftOuter: bottomLeftOuter,
        middleLeftInner: middleLeftInner,
        topLeftOuter: topLeftOuter,
        topLeftInner: topLeftInner
    };
}
//# sourceMappingURL=stars.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/symbols.js":
/*!***************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/symbols.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/helpers.js");
/**
 * Draws symbols icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawSymbols(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawSymbols');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawSymbols');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawSymbols');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawSymbols');
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    switch (image) {
        // Check mark
        case constants_1.CFIconImage.SymbolHigh:
            drawCheckMark(ctx, size, left, bottom);
            break;
        // Exclamation mark
        case constants_1.CFIconImage.SymbolMedium:
            drawExclamationMark(ctx, model, cell, drawingContext);
            break;
        // Cross mark
        case constants_1.CFIconImage.SymbolLow:
            drawCrossMark(ctx, size, left, bottom);
            break;
        default:
            throw Error("drawTriangleSet: unsupported image type = " + image);
    }
}
exports.drawSymbols = drawSymbols;
/**
 * Draws a symbol icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawExclamationMark(ctx, model, cell, drawingContext) {
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    // rectangles sizes
    var topRectHeight = Math.floor(size * constants_1.MediumSymbolTopRectHeightSizeRatio);
    var bottomRectHeight = Math.floor(size * constants_1.MediumSymbolBottomRectHeightSizeRatio);
    var rectWidth = Math.floor(size * constants_1.MediumSymbolWidthRectSizeRatio);
    var bottomPadding = topRectHeight + Math.max(constants_1.ExclamationMarkMinSpaceBetweenRectangels, Math.floor(constants_1.SpaceBetweenRectanglesRatio * size));
    var leftPadding = Math.floor(constants_1.LeftSymbolMediumRectanglePaddingRatio * size);
    // symbol's colors
    var innerColor = getSymbolInnerColor(image);
    var outerColor = getSymbolOuterColor(image);
    // The left position of the icon in pixels
    var leftPosition = left + leftPadding;
    // Draws the upper rectangle
    drawExclamationMarkTopRect(ctx, model, cell, leftPosition, bottom, size, topRectHeight, rectWidth, innerColor, outerColor);
    // Draws the bottom rectangle
    drawExclamationMarkBottomRect(ctx, model, cell, leftPosition, bottom, size, bottomRectHeight, rectWidth, innerColor, outerColor, bottomPadding);
}
/**
 * Draws the upper rectangle of the symbol meduim icon (exclamation mark) on the given cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param left the left position of the icon in pixels
 * @param bottom the bottom position of the icon in pixels
 * @param size icon's size
 * @param rectangleHeight the rectangle's height
 * @param rectangleWidth the rectangle's width
 * @param symbolMediumInnerColor the rectangle's inner color
 * @param symbolMediumOuterColor the rectangle's outer color
 * @param leftPadding the rectangle's horizontal padding
 */
function drawExclamationMarkTopRect(ctx, model, cell, left, bottom, size, rectangleHeight, rectangleWidth, symbolMediumInnerColor, symbolMediumOuterColor) {
    var drawingSymbolMediumRectangleContext = {
        left: left,
        bottom: bottom - (size - rectangleHeight),
        outerColor: symbolMediumOuterColor,
        height: rectangleHeight,
        width: rectangleWidth,
        innerColor: symbolMediumInnerColor
    };
    // Draws the upper rectangle
    rectangle_1.drawRectangleIcon(ctx, model, cell, drawingSymbolMediumRectangleContext);
}
/**
 * Draws the bottom rectangle of the symbol meduim icon (exclamation mark) on the given cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param left the left position of the icon in pixels
 * @param bottom the bottom position of the icon in pixels
 * @param size icon's size
 * @param rectangleHeight the rectangle's height
 * @param rectangleWidth the rectangle's width
 * @param symbolMediumInnerColor the rectangle's inner color
 * @param symbolMediumOuterColor the rectangle's outer color
 * @param bottomPadding the rectangle's vertical padding
 * @param leftPadding the rectangle's horizontal padding
 */
function drawExclamationMarkBottomRect(ctx, model, cell, left, bottom, size, rectangleHeight, rectangleWidth, symbolMediumInnerColor, symbolMediumOuterColor, bottomPadding) {
    var drawingSymbolBottomRectangleContext = {
        left: left,
        bottom: bottom - (size - bottomPadding - rectangleHeight),
        outerColor: symbolMediumOuterColor,
        height: rectangleHeight,
        width: rectangleWidth,
        innerColor: symbolMediumInnerColor
    };
    // Draws the bottom rectangle
    rectangle_1.drawRectangleIcon(ctx, model, cell, drawingSymbolBottomRectangleContext);
}
/**
 * Draws a symbol low icon (cross mark) on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param size icon's size
 * @param left icon's left
 * @param bottomIcon icon's right
 */
function drawCrossMark(ctx, size, left, bottom) {
    var crossMarkPoints = createCrossMarkCoordinatesPath(left, bottom, size);
    helpers_2.drawIconFromPoints(ctx, colors.SymbolLowInnerColor, colors.SymbolLowOuterColor, crossMarkPoints);
}
/**
 * Draws a symbol high icon (check mark) on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param size icon's size
 * @param left icon's left
 * @param bottomIcon icon's right
 */
function drawCheckMark(ctx, size, left, bottom) {
    var checkMarkPoints = createCheckMarkCoordinatesPath(left, bottom, size);
    helpers_2.drawIconFromPoints(ctx, colors.SymbolHighInnerColor, colors.SymbolHighOuterColor, checkMarkPoints);
}
/**
 * Returns the symbol outer color
 *
 * @param image the icon's image
 */
function getSymbolOuterColor(image) {
    switch (image) {
        case constants_1.CFIconImage.SymbolHigh:
            return colors.SymbolHighOuterColor;
        case constants_1.CFIconImage.SymbolMedium:
            return colors.SymbolMediumOuterColor;
        case constants_1.CFIconImage.SymbolLow:
            return colors.SymbolLowOuterColor;
        default:
            throw Error("getSymbolOuterColor: unsupported image type = " + image);
    }
}
/**
 * Returns the symbol inner color
 *
 * @param image the icon's image
 */
function getSymbolInnerColor(image) {
    switch (image) {
        case constants_1.CFIconImage.SymbolHigh:
            return colors.SymbolHighInnerColor;
        case constants_1.CFIconImage.SymbolMedium:
            return colors.SymbolMediumInnerColor;
        case constants_1.CFIconImage.SymbolLow:
            return colors.SymbolLowInnerColor;
        default:
            throw Error("getSymbolInnerColor: unsupported image type = " + image);
    }
}
/**
 * Creats and return array of points, which represtnts the path of points that creates the icon (Symbol high Coordinates path)
 * The calculations and explanations for offsets are in the readme.md
 *
 * @param left icon's left
 * @param bottomIcon icon's right
 * @param size icon's size
 */
function createCheckMarkCoordinatesPath(left, bottomIcon, size) {
    var iconTop = bottomIcon - size;
    var checkMarkMiddleX = left + constants_1.CheckMarkMiddleXRatio * size;
    var topLeft = { x: left + constants_1.CheckMarkTopLeftXRatio * size, y: constants_1.CheckMarkTopLeftYRatio * size + iconTop };
    var middleLeft = { x: left + constants_1.CheckMarkTopMiddleXRatio * size, y: constants_1.CheckMarkTopMiddleYRatio * size + iconTop };
    var bottom = { x: checkMarkMiddleX, y: constants_1.CheckMarkBottomYRatio * size + iconTop };
    var middleRight = { x: left + size, y: constants_1.CheckMarkMiddleRightYRatio * size + iconTop };
    var topRight = { x: left + constants_1.CheckMarkTopRightXRatio * size, y: constants_1.CheckMarkTopRightYRatio * size + iconTop };
    var middle = { x: checkMarkMiddleX, y: constants_1.CheckMarkMiddleYRatio * size + iconTop };
    return [topLeft, middleLeft, bottom, middleRight, topRight, middle, topLeft];
}
/**
 * Creats and return array of points, which represtnts the path of points that creates the icon (Symbol low Coordinates path)
 * The calculations and explanations for offsets are in the readme.md
 *
 * @param left icon's left
 * @param bottomIcon icon's right
 * @param size icon's size
 */
function createCrossMarkCoordinatesPath(left, bottomIcon, size) {
    var iconTop = bottomIcon - size;
    var crossMarkOuterSmallPadding = constants_1.CrossMarkOuterSmallPaddingRatio * size;
    var crossMarkOuterSmallX = crossMarkOuterSmallPadding + left;
    var crossMarkOuterSmallY = crossMarkOuterSmallPadding + iconTop;
    var crossMarkOuterBigPadding = constants_1.CrossMarkOuterBigPaddingRatio * size;
    var crossMarkOuterBigX = crossMarkOuterBigPadding + left;
    var crossMarkOuterBigY = crossMarkOuterBigPadding + iconTop;
    var crossMarkInnerSmallPadding = constants_1.CrossMarkInnerSmallPaddingRatio * size;
    var crossMarkInnerSmallX = crossMarkInnerSmallPadding + left;
    var crossMarkInnerSmallY = crossMarkInnerSmallPadding + iconTop;
    var crossMarkInnerCenter = constants_1.CrossMarkInnerCenterRatio * size;
    var crossMarkInnerCenterX = crossMarkInnerCenter + left;
    var crossMarkInnerCenterY = crossMarkInnerCenter + iconTop;
    var crossMarkInnerBigPadding = constants_1.CrossMarkInnerBigPaddingRatio * size;
    var topOuterLeft1 = { x: crossMarkOuterSmallX, y: iconTop };
    var topOuterLeft2 = { x: left, y: crossMarkOuterSmallY };
    var leftInner = { x: crossMarkInnerSmallX, y: crossMarkInnerCenterY };
    var bottomOuterLeft1 = { x: left, y: crossMarkOuterBigY };
    var bottomOuterLeft2 = { x: crossMarkOuterSmallX, y: size + iconTop };
    var bottomInner = { x: crossMarkInnerCenterX, y: crossMarkInnerBigPadding + iconTop };
    var bottomOuterRight1 = { x: crossMarkOuterBigX, y: size + iconTop };
    var bottomOuterRight2 = { x: left + size, y: crossMarkOuterBigY };
    var rightInner = { x: left + crossMarkInnerBigPadding, y: crossMarkInnerCenterY };
    var topOuterRight1 = { x: left + size, y: crossMarkOuterSmallY };
    var topOuterRight2 = { x: crossMarkOuterBigX, y: iconTop };
    var topInner = { x: crossMarkInnerCenterX, y: crossMarkInnerSmallY };
    return [
        topOuterLeft1,
        topOuterLeft2,
        leftInner,
        bottomOuterLeft1,
        bottomOuterLeft2,
        bottomInner,
        bottomOuterRight1,
        bottomOuterRight2,
        rightInner,
        topOuterRight1,
        topOuterRight2,
        topInner,
        topOuterLeft1
    ];
}
//# sourceMappingURL=symbols.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/trafficLightRimmed.js":
/*!**************************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/trafficLightRimmed.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js");
var circle_1 = __webpack_require__(/*! ./circle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/circle.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
/**
 * Draws a rectangle traffic light icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawTrafficLightRimmed(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawTrafficLightRimmed');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawTrafficLightRimmed');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawTrafficLightRimmed');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawTrafficLightRimmed');
    var size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    var drawingOuterRectContext = {
        left: left,
        bottom: bottom,
        outerColor: colors.TrafficHighRimmedRectColor,
        height: size,
        width: size,
        innerColor: undefined
    };
    // Draws the rectangle container.
    rectangle_1.drawRectangleIcon(ctx, model, cell, drawingOuterRectContext);
    var drawingCircleContext = getInnerCircleDrawingContext(drawingContext);
    // Draws the inner circle in constant offset from rectangle edges.
    circle_1.drawCircleIcon(ctx, model, cell, drawingCircleContext);
}
exports.drawTrafficLightRimmed = drawTrafficLightRimmed;
/**
 * Returns the inner circle's context in the traffic light rimmed icon.
 *
 * @param drawingContext - traffic light rimmed drawing context.
 */
function getInnerCircleDrawingContext(drawingContext) {
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom, highContrastScheme = drawingContext.highContrastScheme;
    var circleSize = size - 2 * constants_1.CirclePaddingFromBoundariesPx;
    var circleLeft = left + constants_1.CirclePaddingFromBoundariesPx + 0.5;
    var circleBottom = bottom - constants_1.CirclePaddingFromBoundariesPx - 0.5;
    return {
        size: circleSize,
        left: circleLeft,
        bottom: circleBottom,
        image: image,
        highContrastScheme: highContrastScheme
    };
}
//# sourceMappingURL=trafficLightRimmed.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/triangle.js":
/*!****************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/triangle.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
/**
 * Draws a triangle icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the circle
 * @param isTriangleReversed indicates if the triangle is reversed
 */
function drawTriangle(ctx, model, cell, drawingContext, isTriangleReversed) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawTriangle');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawTriangle');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawTriangle');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawTriangle');
    var innerColor = drawingContext.innerColor, outerColor = drawingContext.outerColor, left = drawingContext.left, bottom = drawingContext.bottom, height = drawingContext.height, width = drawingContext.width;
    var triangleTopX = left + width / 2;
    var triangleTopY = isTriangleReversed ? bottom + height : bottom - height;
    ctx.strokeStyle = outerColor;
    ctx.beginPath();
    ctx.moveTo(left, bottom);
    // Draws triangle's base line
    ctx.lineTo(left + width, bottom);
    // Draws line from base to triangle's top
    ctx.lineTo(triangleTopX, triangleTopY);
    // Draws line from top to triangle's base
    ctx.closePath();
    if (innerColor) {
        ctx.fillStyle = innerColor;
        ctx.fill();
    }
    if (outerColor) {
        ctx.strokeStyle = outerColor;
        ctx.stroke();
    }
}
exports.drawTriangle = drawTriangle;
//# sourceMappingURL=triangle.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/triangleSet.js":
/*!*******************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/triangleSet.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/rectangle.js");
var colors = __webpack_require__(/*! ./colors */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/colors.js");
var triangle_1 = __webpack_require__(/*! ./triangle */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/triangle.js");
/**
 * Draws a triangle/ rectangle icon on the given cell according to the image applied on that cell
 *
 * @param ctx the canvas context
 * @param model the model
 * @param cell the cell
 * @param drawingContext the metadata required to draw the icon
 */
function drawTriangleSet(ctx, model, cell, drawingContext) {
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawTriangleSet');
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawTriangleSet');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'drawTriangleSet');
    helpers_1.verifyArgumentNotNull(drawingContext, 'drawingContext', 'drawTriangleSet');
    var image = drawingContext.image, size = drawingContext.size, left = drawingContext.left, bottom = drawingContext.bottom;
    switch (image) {
        case constants_1.CFIconImage.TriangleHigh:
        case constants_1.CFIconImage.TriangleLow:
            var triangleDrawingContext = getTriangleDrawingContext(drawingContext);
            triangle_1.drawTriangle(ctx, model, cell, triangleDrawingContext, /*isTriangleReversed*/ image === constants_1.CFIconImage.TriangleLow);
            break;
        case constants_1.CFIconImage.TriangleMedium: {
            var rectangleHeight = Math.floor(size / 3);
            var rectangleDrawingContext = {
                left: left,
                outerColor: colors.TriangleMediumOuterColor,
                innerColor: colors.TriangleMediumInnerColor,
                bottom: bottom - rectangleHeight,
                height: rectangleHeight,
                width: size
            };
            rectangle_1.drawRectangleIcon(ctx, model, cell, rectangleDrawingContext);
            break;
        }
        default:
            throw Error("drawTriangleSet: unsupported image type = " + image);
    }
}
exports.drawTriangleSet = drawTriangleSet;
function getTriangleDrawingContext(drawingContext) {
    var image = drawingContext.image, left = drawingContext.left, bottom = drawingContext.bottom, size = drawingContext.size;
    var triangleHeight = Math.floor(size / 2);
    var trianglePadding = Math.floor(size / 4);
    var triangleBaseY0 = bottom - trianglePadding - constants_1.IconLinesAdjustment;
    var triangleBaseX0 = left + constants_1.IconLinesAdjustment;
    switch (image) {
        case constants_1.CFIconImage.TriangleHigh:
            return {
                outerColor: colors.TriangleHighOuterColor,
                innerColor: colors.TriangleHighInnerColor,
                left: triangleBaseX0,
                bottom: triangleBaseY0,
                height: triangleHeight,
                width: size
            };
        case constants_1.CFIconImage.TriangleLow: {
            return {
                outerColor: colors.TriangleLowOuterColor,
                innerColor: colors.TriangleLowInnerColor,
                left: left + constants_1.IconLinesAdjustment,
                bottom: bottom - trianglePadding - triangleHeight - constants_1.IconLinesAdjustment,
                height: triangleHeight,
                width: size
            };
        }
        default:
            throw Error("getTriangleDrawingContext: unsupported image type = " + image);
    }
}
//# sourceMappingURL=triangleSet.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/debugWatermark.js":
/*!******************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/debugWatermark.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Draw Debug watermark.
 */
function addWatermark(ctx, context) {
    ctx.beginPath();
    ctx.strokeStyle = context.modelFromCache ? 'blue' : 'red';
    ctx.lineWidth = 1;
    ctx.setLineDash([]);
    var position = 1 * context.devicePixelRatio;
    var size = 5 * context.devicePixelRatio;
    ctx.rect(position, position, size, size);
    ctx.stroke();
}
exports.addWatermark = addWatermark;
//# sourceMappingURL=debugWatermark.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js":
/*!********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
exports.DefaultGridlineColor = '#d4d4d4';
exports.PageLayoutLineColor = '#9e9e9e';
exports.MinimalDprForGridlinesRendering = 0.4;
// The default cell content padding values - sets the distance between the cell boundaries and the cell content
// Horizontal padding is calculated from the left or right of the cell, depends on the horizontal alignment
// Vertical  padding is calculated from the bottom or top of the cell, depends on the vertical alignment
exports.InCellHorizontalPaddingPx = 2;
exports.InCellEndOfTextHorizontalPaddingPx = 2;
exports.InCellBottomAndCenterVerticalPaddingPx = 1;
exports.InCellIndentPaddingPx = 9;
/**
 * The amount of pixels that should be added to the vertical alignment
 * because of double border of the cell
 */
exports.InCellDoubleBorderVerticalPaddingPx = -1;
// Pixel offset between wrapped text lines inside the cell (from baseline to baseline)
// TODO: VSO 3756875: Fonts - calc text line height in px.
// TODO: VSO 3756878: Font size - calc text line height in px
exports.TextLineHeightPx = 20;
exports.GridLineWidthPx = 1; // line width
exports.DefaultBackgroundColor = '#ffffff'; // white background
exports.DefaultCellFontColor = '#000000'; // black font color
exports.EmptyLine = { text: '', width: 0, underlineWidth: 0 }; // empty line object
exports.EmptyFormattedText = { Text: '', Fonts: [], TextRuns: [] };
exports.EmptyLineTextToken = { tokens: [{ text: '', width: 0, start: 0 }] };
/**
 * Right aligned cell text requires extra padding when font is italic to ensure it is far enough from the right grid line
 */
// TODO: VSO 3586230: calc text padding like excel desktop considering font-size and italic
exports.RightHorizontalAlignmentItalicExtraPadding = 3;
/**
 * Space character (in case of WrapText - used for line breaking when wrapping text)
 */
exports.Whitespace = ' ';
/**
 * Hard break character - UNIX (in case of WrapText - text line is broken after this character)
 */
exports.HardBreak = '\n';
/**
 * Hard break character - UNIX (in case of WrapText - text line is broken after this character)
 */
exports.HardBreakCR = '\r';
/**
 * Hard break CR character - Windows (in case of WrapText - text line is broken after this character)
 */
exports.HardBreakCRLF = '\r\n';
/**
 * Weight of the line when drawing thin borders.
 */
exports.ThinBorderWeight = 1;
/**
 * Weight of the line when drawing medium borders.
 */
exports.MediumBorderWeight = 2;
/**
 * Dotted line dash array indicating to the canvas to draw continious line. Used for drawing default grid line.
 */
exports.DefaultDash = [];
/**
 * Dotted line dash array indicating to the canvas to draw a dash of 1 pixel, followed by 1 pixel blank value. Used for drawing colored grid line.
 */
exports.ColoredGridLineDash = [1, 1];
/**
 * Dotted line dash array indicating to the canvas to draw a dash of 2 pixel, followed by 2 pixel blank value.
 */
exports.DottedLineDash = [2, 2];
/**
 * Dashed line dash array indicating to the canvas to draw a dash of 6 pixel, followed by 2 pixel blank value.
 */
exports.DashedLineDash = [6, 2];
/**
 * Dashed Dot line dash array indicating to the canvas to draw a dash of 9 pixel, followed by 3 pixel blank value, followed by  a dash of 3 pixel and 3 pixel blank value.
 */
exports.DashedDotLineDash = [9, 3, 3, 3];
/**
 * Dashed Dot Dot line dash array indicating to the canvas to draw a dash of 9 pixel, 3 pixel blank value, 3 pixel dash, 3 pixel blank value, 3 pixel dash and 3 pixel blank value.
 */
exports.DashedDotDotLineDash = [9, 3, 3, 3, 3, 3];
/**
 * Dashed line dash array indicating to the canvas to draw a dash of 9 pixel, followed by 3 pixel blank value.
 */
exports.MediumDashedLineDash = [9, 3];
/**
 * Dot Dashed line dash array indicating to the canvas to draw a dash of 9 pixel, followed by 3 pixel blank value, followed by a 3 pixel dash and 3 pixel blank value.
 */
exports.MediumDotDashedLineDash = [9, 3, 3, 3];
/**
 * Underline width  in pixels - Only for calibri 11
 */
exports.UnderlineLineWidth = 1;
/**
 * Underline margin from text baseline in pixels - Only for calibri 11
 */
exports.UnderlineMarginFromTextBaseline = 1;
/**
 * Skeleton place holder color
 */
exports.SkeletonColor = '#E4E4E4';
/**
 * The approximated ratio between the font height and the text baseline gap
 */
exports.FontHeightToBaselineGapRatio = 0.22;
/**
 * Cell with formula errors always has dashed red border, white background color and black text
 */
var FormulaErrorBorderColor = { Red: 0xff, Green: 0x0, Blue: 0x0 };
exports.FormulaErrorBackgroundColor = '#FFFFFF';
exports.FormulaErrorFontColor = '#000000';
exports.FormulaErrorBorderStyle = {
    Borders: [
        {
            BorderLineStyle: gridBlockModelDto_1.BorderLineType.Dashed,
            BorderPosition: gridBlockModelDto_1.BorderPositionType.Top,
            Color: FormulaErrorBorderColor,
            Weight: 2
        },
        {
            BorderLineStyle: gridBlockModelDto_1.BorderLineType.Dashed,
            BorderPosition: gridBlockModelDto_1.BorderPositionType.Bottom,
            Color: FormulaErrorBorderColor,
            Weight: 2
        },
        {
            BorderLineStyle: gridBlockModelDto_1.BorderLineType.Dashed,
            BorderPosition: gridBlockModelDto_1.BorderPositionType.Left,
            Color: FormulaErrorBorderColor,
            Weight: 2
        },
        {
            BorderLineStyle: gridBlockModelDto_1.BorderLineType.Dashed,
            BorderPosition: gridBlockModelDto_1.BorderPositionType.Right,
            Color: FormulaErrorBorderColor,
            Weight: 2
        }
    ],
    ID: gridBlockModelDto_1.UniqueStyleID.FormulaError,
    RefCount: 0
};
//# sourceMappingURL=drawingConstants.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/fillText.js":
/*!************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/fillText.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var richTextFormat_1 = __webpack_require__(/*! ./richTextFormat */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormat.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var textDecoration_1 = __webpack_require__(/*! ./textDecoration */ "../../packages/excel-online-grid-renderer/lib/src/drawing/textDecoration.js");
/**
 * Fill text on canvas using the ctx param, in the given X-offset, and Y-offset.
 * This method does not clip the text, it will shrink it horizontally to fit the given cell maxWidth.
 *
 * @param  {CanvasRenderingContext2D} ctx the context to access the canvas with
 * @param  {string} text the text to fill
 * @param  {number} textOffsetX the x positioning of the beginning of the text
 * @param  {number} textOffsetY the y positioning of the beginning of the text
 * @param  {number} maxTextWidth the width of the entire cell (even in case of a cell spanning across multiple cells, it would be included in the implementation below).
 * @param  {Cell} cell the cell
 * @param  {GridBlockModel} model the grid block model
 * @param  {number} dpr the device pixel ratio
 */
function fillTextUnclipped(ctx, text, textOffsetX, textOffsetY, maxTextWidth, cell, model, dpr) {
    ctx.fillText(text, textOffsetX, textOffsetY, maxTextWidth);
    textDecoration_1.measureAndCacheTextDecorationLayout(ctx, model, cell, {
        dpr: dpr,
        textPositionX: textOffsetX,
        textPositionY: textOffsetY
    });
}
exports.fillTextUnclipped = fillTextUnclipped;
/**
 * Saves the context, sets a clipping mask and draws the text without max offset.
 * After drawing the text restores the context
 *
 * @param ctx the context
 * @param context the rendering context
 * @param text the text to fill
 * @param textOffsetX the x position of the text
 * @param textOffsetY the y position of the text
 * @param clipRect the clipRect clipping mask
 * @param cell the cell
 * @param model the grid block model
 * @param dpr the device pixel ratio
 * @param isHorizontalAlignmentFill if HorizontalAlignment of the cell is fill
 * @param formattedText the rich text formatting of the cell
 */
function fillTextClipped(ctx, context, text, textOffsetX, textOffsetY, clipRect, cell, model, isHorizontalAlignmentFill, formattedText) {
    helpers_1.applyClipping(ctx, clipRect);
    // If horizontalAlignment is fill, Do not render RichText.
    if (!formattedText || isHorizontalAlignmentFill) {
        ctx.fillText(text, textOffsetX, textOffsetY);
        textDecoration_1.measureAndCacheTextDecorationLayout(ctx, model, cell, {
            dpr: context.devicePixelRatio,
            textPositionX: textOffsetX,
            textPositionY: textOffsetY,
            clipRect: clipRect
        });
    }
    else {
        richTextFormat_1.fillRichTextFormat(ctx, context, model, cell, formattedText, textOffsetX, textOffsetY, clipRect);
    }
    helpers_1.restoreClipping(ctx, clipRect);
}
exports.fillTextClipped = fillTextClipped;
//# sourceMappingURL=fillText.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/gridlines.js":
/*!*************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/gridlines.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
/**
 * Draw gridlines.
 */
function drawGridLines(ctx, model, context) {
    if (!model.RowOffsets || !model.ColumnOffsets || !model.RowHeights || !model.ColumnWidths) {
        throw "drawGridLines:: one or more elements is null: RowOffset: " + !model.RowOffsets + ", ColumnOffsets: " + !model.ColumnOffsets + ", RowHeights: " + !model.RowHeights + ", ColumnWidths: " + !model.ColumnWidths;
    }
    if (model.RowOffsets.length !== model.RowHeights.length) {
        throw 'drawGridLines:: RowOffsets.length !== RowHeights.length';
    }
    if (model.ColumnOffsets.length !== model.ColumnWidths.length) {
        throw 'drawGridLines:: ColumnOffsets.length !== ColumnWidths.length';
    }
    if (!model.ShowGridLines) {
        return;
    }
    if (context.devicePixelRatio < drawingConstants_1.MinimalDprForGridlinesRendering) {
        // we don't want to render the grid lines if the zoom level is smaller than 40%
        // this aligns win xl win32 behavior, in addition grid lines look bad in small zoom levels
        return;
    }
    if (!helpers_1.shouldRenderGridLines(helpers_2.isHighContrastMode(context), helpers_2.hasWorkbookBackgroundColor(model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model)))) {
        // we shouldn't render the gridlines when there is colored workbook background and the high contrast mode is off
        return;
    }
    ctx.lineWidth = drawingConstants_1.GridLineWidthPx;
    ctx.setLineDash(getGridLineDash(model));
    ctx.strokeStyle = getGridLineColor(model, context);
    var pixelTranslation = helpers_2.getLinePixelTranslation(drawingConstants_1.GridLineWidthPx);
    var maxColumnOffset = getMaxLineOffset(model.BlockWidth, context.devicePixelRatio, /* isRow */ false);
    var maxRowOffset = getMaxLineOffset(model.BlockHeight, context.devicePixelRatio, /* isRow */ true);
    // local tests shown that rendering all grid lines with a single stroke is 4 times faster than calling stroke() for each line.
    ctx.beginPath();
    drawAdjustedHorizontalGridLines(ctx, model.RowOffsetsAdjustedForDrawing, model.BlockWidth * context.devicePixelRatio, pixelTranslation, maxRowOffset, context.renderingRegion);
    drawAdjustedVerticalGridLines(ctx, model.ColOffsetsAdjustedForDrawing, model.BlockHeight * context.devicePixelRatio, pixelTranslation, maxColumnOffset, context.renderingRegion);
    ctx.stroke();
}
exports.drawGridLines = drawGridLines;
/**
 * Get the maximum allowed paint offset of a line according to the line width
 * and the block size in order to see the resulted painted line inside the canvas.
 *
 * @param  {number} blockSize the block/canvas size we use
 * @param  {number} devicePixelRatio the ratio between physical pixels and logical pixels.
 * @param  {boolean} isRow are we checking for a horizontal line
 * @returns the maximum allowed paint offset of a line
 */
function getMaxLineOffset(blockSize, devicePixelRatio, isRow) {
    var result = Math.round(blockSize * devicePixelRatio) - drawingConstants_1.GridLineWidthPx / 2;
    if (isRow && helpers_1.isSafari()) {
        var windowDPR = window ? window.devicePixelRatio : -1; // safari window.devicePixelRatio returns the screen DPR (i.e. 2 for retina, 1 for others)
        var isRetinaDisplay = windowDPR === 2;
        var isZoom50 = devicePixelRatio === windowDPR / 2;
        if (isRetinaDisplay && isZoom50) {
            // In Safari browser retina display when the zoom level is 50% there's a bug when drawing at the edge of the block and the grid line is not displayed
            // This bug also occurs in HTML but less significant since in HTML the grid lines width in that case is 2px and the last line is displayed as 1px instead.
            // To workaround the issue we limit the line drawing 1 pixel higher than we normally do
            result -= 1;
        }
    }
    return result;
}
exports.getMaxLineOffset = getMaxLineOffset;
function drawAdjustedHorizontalGridLines(ctx, rowOffsets, blockWidth, pixelTranslation, maxDrawOffset, renderingRegion) {
    var startIndex = renderingRegion.startRow;
    var endIndex = renderingRegion.endRow;
    for (var rowIndex = startIndex; rowIndex <= endIndex; rowIndex++) {
        var y = getAdjustedDrawingOffset(rowOffsets[rowIndex], helpers_1.getRowHeightFromOffsets(rowIndex, rowOffsets), pixelTranslation, maxDrawOffset);
        helpers_1.drawLine(ctx, 0, y, blockWidth, y);
    }
}
function drawAdjustedVerticalGridLines(ctx, columnOffsets, blockHeight, pixelTranslation, maxDrawOffset, renderingRegion) {
    var startIndex = renderingRegion.startColumn;
    var endIndex = renderingRegion.endColumn;
    for (var colIndex = startIndex; colIndex <= endIndex; colIndex++) {
        var x = getAdjustedDrawingOffset(columnOffsets[colIndex], helpers_1.getColWidthFromOffsets(colIndex, columnOffsets), pixelTranslation, maxDrawOffset);
        helpers_1.drawLine(ctx, x, 0, x, blockHeight);
    }
}
function getGridLineColor(model, context) {
    if (!util_1.isNullOrUndefined(context.highContrastScheme)) {
        return "" + helpers_1.rgbToColorHex(context.highContrastScheme.TextColor);
    }
    if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.GridLineColor, model) && !util_1.isNullOrUndefined(model.GridLineColor)) {
        return model.GridLineColor;
    }
    return drawingConstants_1.DefaultGridlineColor;
}
function getGridLineDash(model) {
    if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.GridLineColor, model) && !util_1.isNullOrUndefined(model.GridLineColor)) {
        return drawingConstants_1.ColoredGridLineDash;
    }
    return drawingConstants_1.DefaultDash;
}
/**
 * The offset to paint a 1px line in order to keep it sharp (not 2px blurry),
 * according to the requested parameters.
 * This method already takes into account the DPR, and the accumulated pixel error, if exists.
 *
 * @param adjustedOffset     the cell start adjusted offset
 * @param adjustedSize       the cell adjusted size
 * @param pixelTranslation   used to determine how to translate the line drawing in order to keep the sharpness of the line by positioning the line correctly.
 *                           should be 1/2 for odd line width and 0 for even line width
 * @param maxOffset          the maximal allowed drawing offset, in some browsers the canvas size attributes must be integers, so we need to make sure the
 *                           drawing offset is kept inside the drawing area otherwise the last row/column may be drawn outside and not be visible to the user
 * @returns the offset of the cell end position considering zoom level and pixel shift
 */
function getAdjustedDrawingOffset(adjustedOffset, adjustedSize, pixelTranslation, maxOffset) {
    var result = adjustedOffset + adjustedSize - pixelTranslation;
    result = Math.min(result, maxOffset);
    return result;
}
exports.getAdjustedDrawingOffset = getAdjustedDrawingOffset;
//# sourceMappingURL=gridlines.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js":
/*!***********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/helpers.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var borderLineWidthToDprMapping = {};
/**
 * Get border line width if cached, and if not, initializes the cached value.
 */
function getDefaultBorderLineWidth(devicePixelRatio) {
    if (!util_1.isNullOrUndefined(borderLineWidthToDprMapping[devicePixelRatio])) {
        return borderLineWidthToDprMapping[devicePixelRatio];
    }
    borderLineWidthToDprMapping[devicePixelRatio] = Math.max(Math.round(devicePixelRatio), 1);
    return borderLineWidthToDprMapping[devicePixelRatio];
}
exports.getDefaultBorderLineWidth = getDefaultBorderLineWidth;
/**
 * Converts a number representing rgb color to an HTML accepted hex color format
 * @param rgb rgb color number as a combined 24 bit numeric value
 * @returns   string in hex color representation format (e.g.: 255 -> '0000FF')
 */
function rgbToColorHex(rgb) {
    var hex = Number(rgb).toString(16);
    while (hex.length < 6) {
        hex = '0' + hex;
    }
    return '#' + hex;
}
exports.rgbToColorHex = rgbToColorHex;
/**
 * Return the column width by calculating the offsets differences
 *
 * @param colIndex The index of the column
 * @param colOffsetsForDrawingOnly Array of the columns offsets. This has to be the offsets for drawing because if not, we will not know the last offset and therefor the last col width.
 * Further more, a null pointer exception will probably be thrown.
 */
function getColWidthFromOffsets(colIndex, colAdjustedOffsetsForDrawingOnly) {
    if (colIndex < 0 || colIndex > colAdjustedOffsetsForDrawingOnly.length - 1) {
        throw "getColWidthFromOffsets:: invalid colIndex " + colIndex;
    }
    return colAdjustedOffsetsForDrawingOnly[colIndex + 1] - colAdjustedOffsetsForDrawingOnly[colIndex];
}
exports.getColWidthFromOffsets = getColWidthFromOffsets;
/**
 * Return the column width by calculating the offsets differences
 *
 * @param rowIndex The index of the column
 * @param rowOffsetsForDrawingOnly Array of the rows offsets. This has to be the offsets for drawing because if not, we will not know the last offset and therefor the last row width.
 * Further more, a null pointer exception will probably be thrown.
 */
function getRowHeightFromOffsets(rowIndex, rowOffsetsForDrawingOnly) {
    if (rowIndex < 0 || rowIndex > rowOffsetsForDrawingOnly.length - 1) {
        throw "getRowHeightFromOffsets:: invalid colIndex " + rowIndex;
    }
    return rowOffsetsForDrawingOnly[rowIndex + 1] - rowOffsetsForDrawingOnly[rowIndex];
}
exports.getRowHeightFromOffsets = getRowHeightFromOffsets;
/**
 * Returns the block height in px, calculated with the DPR
 *
 * @param dimension the model height/width dimensions.
 * @param devicePixelRatio current device pixel ratio.
 */
function getBlockDimensionsAdjustedForDrawing(dimensions, devicePixelRatio) {
    return Math.round(dimensions * devicePixelRatio);
}
exports.getBlockDimensionsAdjustedForDrawing = getBlockDimensionsAdjustedForDrawing;
/**
 * Returns true if the current browser is Safari
 */
function isSafari() {
    if (window && window.navigator) {
        var userAgent = window.navigator.userAgent.toLowerCase();
        // Chrome and Edge also has safari listed in the UserAgent field, so checking only if safari is not sufficient
        return userAgent.indexOf('safari') >= 0 && userAgent.indexOf('chrome') < 0 && userAgent.indexOf('edge') < 0;
    }
    return false;
}
exports.isSafari = isSafari;
/**
 * Returns the text maximum drawing width taking into account the cell's padding and the grid line width.
 * It is possible, when cell's width is less than the padding (+ indentation), that the text width is zero, which
 * is why we will take the max between zero text drawing width and the subtraction result.
 *
 * @param containerWidth the width of the cell or group of cells (e.g. spill cell or merge cell) containing text to draw.
 * @param paddingIncludingIndentation number of padding used in a cell
 * @param iconPadding in case of text with CFIcone or rich value icon, the iconPadding is icon width + icon padding
 */
function getTextDrawingMaxWidth(containerWidth, paddingIncludingIndentation, iconPadding) {
    return Math.max(0, containerWidth - drawingConstants_1.GridLineWidthPx - paddingIncludingIndentation - iconPadding);
}
exports.getTextDrawingMaxWidth = getTextDrawingMaxWidth;
/**
 * Returns the cell/cells clip mask width taking into account the grid line width
 *
 * @param containerWidth the width of the cell or group of cells (e.g. spill cell or merge cell) containing text to draw.
 */
function getContainerClipMaskWidth(containerWidth) {
    return containerWidth - drawingConstants_1.GridLineWidthPx;
}
exports.getContainerClipMaskWidth = getContainerClipMaskWidth;
/**
 * Clips a rectangular area
 *
 * @param  {CanvasRenderingContext2D} ctx
 * @param  {number} x the x-offset of starting point of the rectangle to clip
 * @param  {number} y the y-offset of starting point of the rectangle to clip
 * @param  {number} width the width of the rectangle to clip
 * @param  {number} height the height of the rectangle to clip
 * @returns void
 */
function drawClipRect(ctx, x, y, width, height) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
    ctx.clip();
}
exports.drawClipRect = drawClipRect;
/**
 * Applies the given clip rect on the context. Does nothing if the clip mask in undefined
 *
 * @param ctx the canvas 2D context
 * @param clipRect the clipping mask to apply
 */
function applyClipping(ctx, clipRect) {
    if (clipRect) {
        ctx.save();
        ctx.strokeStyle = 'transparent';
        drawClipRect(ctx, clipRect.x, clipRect.y, clipRect.width, clipRect.height);
    }
}
exports.applyClipping = applyClipping;
/**
 * Restores the canvas context. Does nothing if the clip mask in undefined
 *
 * @param ctx the canvas 2D context
 * @param clipRect the clipping mask to apply
 */
function restoreClipping(ctx, clipRect) {
    if (clipRect) {
        ctx.restore();
    }
}
exports.restoreClipping = restoreClipping;
/**
 * Draws a line on the given canvas with the given coordinates
 *
 * @param  {CanvasRenderingContext2D} ctx the canvas drawing context to draw a line on
 * @param  {number} x1 starting point x value
 * @param  {number} y1 starting point y value
 * @param  {number} x2 ending point x value
 * @param  {number} y2 ending point y value
 */
function drawLine(ctx, x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
}
exports.drawLine = drawLine;
/**
 * Converts the hex color string to rgb.
 *
 * @param hex hex code of the color.
 */
function hexToRgb(hex) {
    var parsedHex = hex[0] === '#' ? hex.substr(1) : hex;
    var value = parseInt(parsedHex, 16);
    var red = (value >> 16) & 255;
    var green = (value >> 8) & 255;
    var blue = value & 255;
    return {
        Red: red,
        Green: green,
        Blue: blue
    };
}
exports.hexToRgb = hexToRgb;
/**
 * Returns true if the cell or any of the cells the cell spans on intersects the rendering region
 *
 * @param cell the cell
 * @param region the rendering region
 */
function cellIntersectsRenderingRegion(cell, region) {
    // First get the actual range of cells that are affected by this cell
    var startRow = cell.Row;
    var endRow = cell.Row;
    var startColumn = cell.Col;
    var endColumn = cell.Col;
    if (cell.Merge) {
        endRow += cell.Merge.Rows;
        endColumn += cell.Merge.Columns;
        if (cell.Merge.SpansBlocks) {
            // If the merge cell starts before the current block start - set to the block start
            if (cell.Merge.OriginDeltaX) {
                startColumn = 0;
            }
            if (cell.Merge.OriginDeltaY) {
                startRow = 0;
            }
        }
    }
    else if (cell.Spill) {
        startColumn -= cell.Spill.SpanToStart;
        endColumn += cell.Spill.SpanToEnd;
    }
    var colIntersects = intersects1D(startColumn, endColumn, region.startColumn, region.endColumn);
    var rowsIntersects = intersects1D(startRow, endRow, region.startRow, region.endRow);
    return colIntersects && rowsIntersects;
}
exports.cellIntersectsRenderingRegion = cellIntersectsRenderingRegion;
/**
 * we shouldn't render the gridlines when there is colored workbook background and the high contrast mode is off
 *
 * @param context the model context
 * @param hasWorkbookBackgroundColor if the work book background color is not default
 */
function shouldRenderGridLines(isHighContrastMode, hasWorkbookBackgroundColor) {
    return isHighContrastMode || !hasWorkbookBackgroundColor;
}
exports.shouldRenderGridLines = shouldRenderGridLines;
/**
 * Returns the passed column offset adjusted for drawing (the left x position of the column).
 * @param col the column that we are trying to get the left of
 * @param colAdjustedOffsetsForDrawingOnly the array of column offset adjusted
 */
function getColOffsetsAdjustedForDrawing(col, model) {
    // find the right most grid line x position, to use in the case of rtl where we are "reversing" the x axis.
    var lastGridLineOffsetRtl = model.ColOffsetsAdjustedForDrawing[model.ColOffsetsAdjustedForDrawing.length - 1];
    // In rtl, we want to place objects as if the x axis was starting from the right edge of the screen.
    // 'lastGridLineOffsetRtl' gives us the right edge of the block, and we reduce the column offset (adjusted to DPR)
    // in order to get the 'left edge' of the column. if not in rtl, just use the list as is.
    var xPosition = model.IsRtl
        ? lastGridLineOffsetRtl - model.ColOffsetsAdjustedForDrawing[col + 1]
        : model.ColOffsetsAdjustedForDrawing[col];
    return xPosition;
}
exports.getColOffsetsAdjustedForDrawing = getColOffsetsAdjustedForDrawing;
/**
 * Returns true if two single dimensional segment intersects
 * Segments do not intersect if the one finishes before the other one starts
 *
 * @param start1 line 1 start
 * @param end1 line 1 end
 * @param start2 line 2 start
 * @param end2 line 2 end
 */
function intersects1D(start1, end1, start2, end2) {
    return !(end1 < start2 || end2 < start1);
}
/**
 * Check if the char is RTL or not.
 */
function isRtlChar(char) {
    var charCode = char.charCodeAt(0);
    // RTL scripts character check
    // Ranges from unicode names list http://www.unicode.org/charts/nameslist/
    return ((charCode >= 0x0590 && charCode <= 0x05ff) || // Hebrew
        (charCode >= 0x0600 && charCode <= 0x06ff) || // Arabic
        (charCode >= 0x0750 && charCode <= 0x077f) || // Arabic Supplement
        (charCode >= 0xfb50 && charCode <= 0xfdff) || // Arabic Presentation Forms-A
        (charCode >= 0xfe70 && charCode <= 0xfeff) || // Arabic Presentation Forms-B
        (charCode >= 0x07c0 && charCode <= 0x0700) || // Nko
        (charCode >= 0x0700 && charCode <= 0x074f) || // Syriac
        (charCode >= 0x0780 && charCode <= 0x07bf) || // Thaana
        (charCode >= 0x2d30 && charCode <= 0x2d7f) // Tifinagh
    );
}
exports.isRtlChar = isRtlChar;
/**
 * Determines if the line RTL or not.
 *
 * @param lineText The line to determine.
 */
function isStartLineRtl(lineText) {
    if (!util_1.isNullOrUndefined(lineText) && lineText !== '') {
        return isRtlChar(lineText[0]);
    }
    return false;
}
exports.isStartLineRtl = isStartLineRtl;
/**
 * Gets HighContrast TextColor.
 * Returns the `LinkColor` if the cell has hyperlink.
 *
 * @param model The gridBlockModel
 * @param cell The cell to render
 * @param highContrastScheme the highContrastScheme
 */
function getHighContrastTextColor(model, cell, highContrastScheme) {
    if (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.Hyperlink, model)) {
        if (!util_1.isNullOrUndefined(cell.Hyperlink)) {
            return rgbToColorHex(highContrastScheme.LinkColor);
        }
        return rgbToColorHex(highContrastScheme.TextColor);
    }
    return rgbToColorHex(highContrastScheme.TextColor);
}
exports.getHighContrastTextColor = getHighContrastTextColor;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/fill.js":
/*!****************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/fill.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var helpers_3 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var textLayout_1 = __webpack_require__(/*! ../../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var cellLayout_1 = __webpack_require__(/*! ../../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var richTextFormatBidi_1 = __webpack_require__(/*! ../richTextFormatBidi */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormatBidi.js");
/**
 * Does the cell have Fill HorizontalAlignment.
 * @param model The model
 * @param cell The cell
 */
function isHorizontalAlignmentFillInCell(model, cell) {
    var _a;
    return (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentFillAndCAS, model) &&
        ((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.HorizontalAlignment) === gridBlockModelDto_1.HorizontalAlignment.Fill);
}
exports.isHorizontalAlignmentFillInCell = isHorizontalAlignmentFillInCell;
/**
 * Update the CachedDisplayText for Fill.
 * Repeat the Cell.Text to fill the cell completely or atleast once.
 */
function updateCachedDisplayTextForFill(ctx, model, cell) {
    var _a, _b;
    var text = cell.Text;
    // If there is no text, no need for updating.
    if (text) {
        var initialCanvasDirection = undefined;
        // Update the canvas direction based on the cell Text.
        // To calculate the width correctly of RTL text, the direction of the text needs to specified.
        if (!util_1.isNullOrUndefined(cell.Text) && util_1.isNullOrUndefined((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.ReadingOrder)) {
            var bidiContext = richTextFormatBidi_1.analyzeBidiText(cell.Text, (_b = cell.CachedStyle) === null || _b === void 0 ? void 0 : _b.ReadingOrder);
            if (bidiContext.HasRtl) {
                initialCanvasDirection = ctx.direction;
                ctx.direction = 'rtl';
            }
        }
        var maxTextWidth = getMaxTextWidth(model, cell);
        // Use the Legacy API, it provides more accurate results in this case
        var textWidth = textLayout_1.measureTextWidth(ctx, text, /*shouldUseAdvancedMetrics */ false);
        var repeatCount = Math.floor(maxTextWidth / textWidth);
        // repeat at least once. We dont want empty content.
        if (repeatCount < 1) {
            repeatCount = 1;
        }
        var newText = text.repeat(repeatCount);
        helpers_3.setCellCachedDisplayText(cell, newText);
        // Restore canvas direction, if changed.
        if (initialCanvasDirection) {
            ctx.direction = initialCanvasDirection;
        }
    }
}
exports.updateCachedDisplayTextForFill = updateCachedDisplayTextForFill;
/**
 * Get maxTextWidth for the cell. Takes into account if the cell is spilled or not.
 */
function getMaxTextWidth(model, cell) {
    // There are cases when the cell can be fill and spill. If spill then the text is repeated untill the spillEnd.
    var cellWidth = cell.Spill
        ? cellLayout_1.getSpillCellWidth(cell, model)
        : cellLayout_1.getCellWidth(model, cell, /* limitToBlockDimensions */ false);
    var maxTextWidth = helpers_1.getTextDrawingMaxWidth(cellWidth, textLayout_1.getCellTextHorizontalPadding(cell, model), textLayout_1.getTextIconPadding(model, cell));
    return maxTextWidth;
}
//# sourceMappingURL=fill.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/helpers.js":
/*!*******************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/helpers.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
/**
 * Checks if the cell contains CenteredAcrossSelection HorizontalAlignment
 *
 * @param model The gridBlockModel
 * @param cell The cell
 */
function isHorizontalAlignmentCenteredAcrossSelection(model, cell) {
    var _a;
    return (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentFillAndCAS, model) &&
        ((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.HorizontalAlignment) === gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection);
}
exports.isHorizontalAlignmentCenteredAcrossSelection = isHorizontalAlignmentCenteredAcrossSelection;
/**
 * Checks if the cell contains Justified or Distributed HorizontalAlignment
 *
 * @param model The gridBlockModel
 * @param cell The cell
 */
function isHorizontalAlignmentJustifiedAndDistributed(model, cell) {
    var _a;
    if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentJustifyAndDistributed, model)) {
        switch ((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.HorizontalAlignment) {
            case gridBlockModelDto_1.HorizontalAlignment.Justify:
            case gridBlockModelDto_1.HorizontalAlignment.JustifyDistributed:
            case gridBlockModelDto_1.HorizontalAlignment.Distributed:
                return true;
        }
    }
    return false;
}
exports.isHorizontalAlignmentJustifiedAndDistributed = isHorizontalAlignmentJustifiedAndDistributed;
/**
 * Returns the canvas textAlign value according to the given horizontal alignment
 */
function getTextAlignment(model, cell) {
    var horizontalAlignment = getEffectiveHorizontalAlignment(model, cell);
    switch (horizontalAlignment) {
        case gridBlockModelDto_1.HorizontalAlignment.Right:
            return 'right';
        case gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection:
        case gridBlockModelDto_1.HorizontalAlignment.Center:
            return 'center';
        case gridBlockModelDto_1.HorizontalAlignment.Left:
            return 'left';
        default:
            throw Error("getTextAlignment: unsupported horizontalAlignment: " + horizontalAlignment);
    }
}
exports.getTextAlignment = getTextAlignment;
/**
 * Get the effective horizontal alignment.
 * For advanced horizontal alignment like fill, justify, justifyDistributed, distributed; we derive the
 * horizontalAlignment from the reading order.
 */
function getEffectiveHorizontalAlignment(model, cell) {
    var _a;
    var horizontalAlignment = (_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.HorizontalAlignment;
    switch (horizontalAlignment) {
        case gridBlockModelDto_1.HorizontalAlignment.JustifyDistributed:
        case gridBlockModelDto_1.HorizontalAlignment.Justify:
        case gridBlockModelDto_1.HorizontalAlignment.Distributed:
        case gridBlockModelDto_1.HorizontalAlignment.Fill:
        // cells with text shouldn't have automatic horizontal alignment since horizontalAlignment represents
        // the displayed horizontalAlignment and should always be set.
        case gridBlockModelDto_1.HorizontalAlignment.Automatic:
            if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentFillAndCAS, model)) {
                // derive horizontalAlignment based on the text.
                return getHorizontalAlignmentFromCell(cell);
            }
            // if the cell contains horizontal alignment as Automatic - we should default to Left.
            return gridBlockModelDto_1.HorizontalAlignment.Left;
    }
    // If the horizontalAlignment is not advanced or automatic, it doesn't need to be mapped.
    return horizontalAlignment;
}
exports.getEffectiveHorizontalAlignment = getEffectiveHorizontalAlignment;
/**
 * Get the horizontal alignment based on readingOrder of the cell.
 */
function getHorizontalAlignmentFromCell(cell) {
    var _a;
    var readingOrder = (_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.ReadingOrder;
    switch (readingOrder) {
        case gridBlockModelDto_1.ReadingOrderType.LeftToRight:
            return gridBlockModelDto_1.HorizontalAlignment.Left;
        case gridBlockModelDto_1.ReadingOrderType.RightToLeft:
            return gridBlockModelDto_1.HorizontalAlignment.Right;
        case gridBlockModelDto_1.ReadingOrderType.Context:
            // If ReadingOrder is context, then we look at the text to decice the HorizontalAlignment
            var text = cell.Text;
            if (!util_1.isNullOrUndefined(text) && text !== '') {
                return helpers_1.isRtlChar(text[0]) ? gridBlockModelDto_1.HorizontalAlignment.Right : gridBlockModelDto_1.HorizontalAlignment.Left;
            }
    }
    return gridBlockModelDto_1.HorizontalAlignment.Left;
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/justifyDisributedText.js":
/*!*********************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/justifyDisributedText.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var interfaces_1 = __webpack_require__(/*! ../breakToLines/interfaces */ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/interfaces.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var textLayout_1 = __webpack_require__(/*! ../../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var richTextFormatBidi_1 = __webpack_require__(/*! ../richTextFormatBidi */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormatBidi.js");
/**
 * Get a justifyDistributedLine based on the textTokens.
 *
 * @param context the context for preparing the line
 * @param tokens the text toknes
 * @param spaceWidthBetweenTokens the spaceWidth between Tokens
 * @param TokensPerLine Tokens per line, will be different from tokens in case of RTL.
 * Example -
 * For TextTokens= [Token1, Token2, Token3, Token4, Token5]
 *      The JustifyDistributedLine be
 *            JustifyDistributedLine = {
 *                  start : { text: "Token1", offsetX: 0}
 *                  middle : { text: "Token2 Token3 Token4", offsetX: 20}
 *                  end : { text: "Token5", offsetX: 80}
 *                  }
 */
function getJustifyDistributedLine(context, tokens, spaceWidthBetweenTokens, TokensPerLine) {
    if (context.isProcessingLastLine && context.breakType === interfaces_1.BreakType.Justify) {
        // last line when doesn't have any special formatting.
        return getNormalLine(tokens, context.singleSpaceWidth);
    }
    if (context.isProcessingLastLine &&
        context.breakType === interfaces_1.BreakType.Distributed &&
        TokensPerLine === 1 &&
        context.isCompleteTextVisible) {
        // For distributed text with a single token, the token is always middle aligned.
        return getSingleTokenDistributedLine(context, tokens, spaceWidthBetweenTokens);
    }
    if (tokens.length > 0) {
        // Calculate the start TextPortion.
        var currentOffsetX = 0;
        var currentIndex = 0;
        var currentToken = tokens[currentIndex];
        var line = {
            Start: { OffsetX: currentOffsetX, Text: currentToken.text, Width: currentToken.width },
            SpaceWidthBetweenWords: spaceWidthBetweenTokens
        };
        // the next offset will be width of currentTokenWidth + spaceWidth
        currentOffsetX += currentToken.width + spaceWidthBetweenTokens;
        currentIndex++;
        var numberOfSpaces = Math.floor(spaceWidthBetweenTokens / context.singleSpaceWidth);
        if (numberOfSpaces < 1) {
            numberOfSpaces = 1;
        }
        // Calculate the Middle TextPortion
        var middleText = '';
        var middleOffsetX = currentOffsetX;
        var middleTextWidth = 0;
        for (; currentIndex < tokens.length - 1; currentIndex++) {
            currentToken = tokens[currentIndex];
            middleText += currentToken.text;
            middleTextWidth += currentToken.width;
            // Do not add space in the last token that we fit in middleText.
            if (currentIndex !== tokens.length - 2) {
                middleText += drawingConstants_1.Whitespace.repeat(numberOfSpaces);
                middleTextWidth += context.singleSpaceWidth * numberOfSpaces;
            }
        }
        if (middleText !== '') {
            line.Middle = { OffsetX: middleOffsetX, Text: middleText, Width: middleTextWidth };
        }
        // Calculate the End TextPortion
        if (tokens.length > 1) {
            var finalToken = tokens[tokens.length - 1];
            var endOffsetX = util_1.isNullOrUndefined(line.Middle)
                ? currentOffsetX
                : middleOffsetX + middleTextWidth + spaceWidthBetweenTokens;
            line.End = { OffsetX: endOffsetX, Text: finalToken.text, Width: finalToken.width };
        }
        return line;
    }
    return undefined;
}
exports.getJustifyDistributedLine = getJustifyDistributedLine;
/**
 * Get normal line in which each token is separated by space.
 * We do not apply any special formatting.
 * This is used to generate the last line of justified text.
 */
function getNormalLine(tokens, singleSpaceWidth, offsetX) {
    if (offsetX === void 0) { offsetX = 0; }
    var startText = '';
    var textWidth = 0;
    for (var index = 0; index < tokens.length; index++) {
        startText += tokens[index].text;
        textWidth += tokens[index].width;
        if (index !== tokens.length - 1) {
            startText += drawingConstants_1.Whitespace;
            textWidth += singleSpaceWidth;
        }
    }
    return { Start: { OffsetX: offsetX, Text: startText, Width: textWidth }, SpaceWidthBetweenWords: singleSpaceWidth };
}
/**
 * Get in width in between words so that words are aligned as justified and distributed
 * returns the width in pixels.
 * Example
 *    Words - [Token1, Token2]
 *    Assuming each character is 1px wide
 *    MaxWidth - 20
 *    DesiredText - "Token1      Token2"
 *    Output - spaceWidthBetweenWords = 6
 */
function getSpaceWidthBetweenWords(textTokens, context) {
    var tokens = textTokens;
    if (tokens.length <= 1) {
        return 0;
    }
    if (context.breakType === interfaces_1.BreakType.Justify && context.isProcessingLastLine) {
        return context.singleSpaceWidth;
    }
    var usedWidth = 0;
    for (var index = 0; index < tokens.length; index++) {
        var token = tokens[index];
        usedWidth += token.width;
    }
    var calculatedSingleSpaceWidth = (context.maxWidth - usedWidth) / (tokens.length - 1);
    if (calculatedSingleSpaceWidth < context.singleSpaceWidth) {
        return context.singleSpaceWidth;
    }
    return calculatedSingleSpaceWidth;
}
exports.getSpaceWidthBetweenWords = getSpaceWidthBetweenWords;
/**
 * Updates each TextRuns in the line to have 3 TextPortions - Start, Middle and End.
 * If there is only one textRuns, we just generate Start, Middle and End for that textRun.
 * If there are multiple textRuns, then for each textRun we add the TextPortions.
 *
 * When drawing the TextRuns, we draw the TextPortions of each TextRuns.
 * See RichTextFormat::drawTextRunsForJustifyDistributed.
 */
function prepareTextRunsForJustifyAndDistributed(ctx, context, tokens, textRuns) {
    if (textRuns.length === 0) {
        throw Error('prepareTextRunsForJustifyAndDistributed: At least one textRun expected');
    }
    // Only one TextRun is present.
    if (textRuns.length === 1) {
        var textRun = textRuns[0];
        var justifiedLine = getJustifyDistributedLine(context, tokens, getSpaceWidthBetweenWords(tokens, context), tokens.length);
        // reverse the line for RTL.
        if (isTextRtl(textRun.Text) && !util_1.isNullOrUndefined(justifiedLine)) {
            justifiedLine = reverseLine(justifiedLine);
        }
        textRun.JustifyDistributedLine = justifiedLine;
        textRun.WidthPx = getUnderlineWidth(context, justifiedLine);
    }
    else {
        processMultipleTextRuns(ctx, tokens, context, textRuns);
    }
}
exports.prepareTextRunsForJustifyAndDistributed = prepareTextRunsForJustifyAndDistributed;
/**
 * This method is called if the current line contains multiple textRuns and multiple TextTokens.
 * This maps multiple TextTokens to TextRuns based on TextRun.Start and TextToken.Start.
 * After correctly mapping TextTokens, it computes and updates the TextRun.JustifyDistributedLine
 *
 * TextRun Indices correspond to the same line, but the token's start index
 * are according to the compelete text
 * Example a text - "Token1 Token2 Token3 Token4"
 *            Lines = ["Token1 Token2", "Token3 Token4"]
 *            Runs = [{text: "Token1 Token2", start: 0 }, {text: "Token3 Token4", start: 0 }]
 *            Tokens = [{text: "token1", start 0}, {text: "token2", start 6}, {text: "token3", start 12}, {text: "token4", start 18}]
 *
 * Hence we need to align the start Index of Run and Text Tokens on the line.
 */
function processMultipleTextRuns(ctx, tokens, context, textRuns) {
    var spaceWidthBetweenWords = getSpaceWidthBetweenWords(tokens, context);
    var minimumIndex = getMinimumStartIndex(tokens);
    for (var i = 0; i < textRuns.length; i++) {
        var currentTextRun = textRuns[i];
        // We add the minimum index to adjust the difference between the start of runs and textTokens.
        var startIndex = currentTextRun.StartIndex + minimumIndex;
        var endIndex = startIndex + (currentTextRun.Text !== undefined ? currentTextRun.Text.length : 0);
        // Get the tokens corresponding to the textRun.
        var _a = getTextTokensBasedOnStart(ctx, tokens, startIndex, endIndex), currentTextTokens = _a.currentTextTokens, currentTokenWidthPx = _a.currentTokenWidthPx, hasPartialToken = _a.hasPartialToken;
        // Some textRuns just have spaces, and we dont have tokens corresponding to spaces.
        if (currentTextTokens.length !== 0) {
            var justifiedLine = getJustifyDistributedLine(context, currentTextTokens, spaceWidthBetweenWords, tokens.length);
            if (!util_1.isNullOrUndefined(justifiedLine)) {
                justifiedLine.HasPartialText = hasPartialToken;
                // reverse the line for RTL.
                if (isTextRtl(currentTextRun.Text)) {
                    justifiedLine = reverseLine(justifiedLine);
                }
            }
            currentTextRun.JustifyDistributedLine = justifiedLine;
            currentTextRun.WidthPx = currentTokenWidthPx + spaceWidthBetweenWords * (currentTextTokens.length - 1);
        }
    }
}
function getTextTokensBasedOnStart(ctx, textTokens, start, end) {
    var currentTextTokens = [];
    var currentTokenWidthPx = 0;
    var hasPartialToken = false;
    for (var i = 0; i < textTokens.length; i++) {
        var currentToken = textTokens[i];
        if (doesTextTokenOverlapWithTextRun(currentToken, start, end)) {
            if (isTextTokenCompletelyInsideTextRun(currentToken, start, end)) {
                currentTextTokens.push(currentToken);
                currentTokenWidthPx += currentToken.width;
            }
            else {
                var partialToken = getPartialToken(ctx, currentToken, start, end);
                hasPartialToken = true;
                currentTextTokens.push(partialToken);
                currentTokenWidthPx += partialToken.width;
            }
        }
    }
    return { currentTextTokens: currentTextTokens, currentTokenWidthPx: currentTokenWidthPx, hasPartialToken: hasPartialToken };
}
function getMinimumStartIndex(textTokens) {
    var minStart = textTokens[0].start;
    for (var i = 1; i < textTokens.length; i++) {
        if (textTokens[i].start < minStart) {
            minStart = textTokens[i].start;
        }
    }
    return minStart;
}
/**
 * For distributed text, if the last line has a single token, that tokens needs to be center aligned.
 * This methods constructs the justifiedDistributedLine corresponding to that single token.
 *
 * @param context The context for justifiedDistributed text.
 * @param tokens The textToken
 * @param spaceWidthBetweenTokens spaceWidth between tokens
 */
function getSingleTokenDistributedLine(context, tokens, spaceWidthBetweenTokens) {
    var firstToken = tokens[0];
    var offsetX = (context.maxWidth - firstToken.width) / 2;
    return {
        Start: { OffsetX: offsetX, Text: firstToken.text, Width: firstToken.width },
        SpaceWidthBetweenWords: spaceWidthBetweenTokens
    };
}
/**
 * When drawing RTL cases in RTF, we need to render change the order of rendering, instead of Start->Middle->End, we want to render End->Middle->Start
 * This method interchanges the Start and End portions and updates the corresponding offsetXs
 *
 * @param line the line to reverse
 */
function reverseLine(line) {
    if (line.Start && line.End) {
        var newLine = {
            Start: { OffsetX: line.Start.OffsetX, Text: line.End.Text, Width: line.End.Width },
            SpaceWidthBetweenWords: line.SpaceWidthBetweenWords,
            HasPartialText: line.HasPartialText
        };
        var currentOffsetX = newLine.Start.OffsetX;
        if (line.Middle) {
            newLine.Middle = line.Middle;
            currentOffsetX = newLine.Start.OffsetX + newLine.Start.Width + newLine.SpaceWidthBetweenWords;
            newLine.Middle.OffsetX = currentOffsetX;
            newLine.Middle.Text = reverseText(line.Middle.Text);
            currentOffsetX = newLine.Middle.OffsetX + newLine.Middle.Width;
        }
        newLine.End = {
            Text: line.Start.Text,
            Width: line.Start.Width,
            OffsetX: currentOffsetX + newLine.SpaceWidthBetweenWords
        };
        return newLine;
    }
    return line;
}
/**
 * Reverses Text for RTL, only the word positioning is reversed.
 * Example - input: "W1 W2 W3", output: "W3 W2 W1"
 *
 * @param text
 */
function reverseText(text) {
    return text
        .split(' ')
        .reverse()
        .join(' ');
}
/**
 * Get the underline width for JustifyDistributedLine.
 *
 * @param context the JustifyDistributed Context
 * @param justifiedLine the JustifyDistributedLine
 */
function getUnderlineWidth(context, justifiedLine) {
    var _a, _b, _c, _d, _e;
    var underlineWidth = 0;
    if (justifiedLine && context.breakType === interfaces_1.BreakType.Justify) {
        underlineWidth += (_a = justifiedLine) === null || _a === void 0 ? void 0 : _a.Start.Width;
        if ((_b = justifiedLine) === null || _b === void 0 ? void 0 : _b.Middle) {
            underlineWidth += (_c = justifiedLine) === null || _c === void 0 ? void 0 : _c.Middle.Width;
        }
        if ((_d = justifiedLine) === null || _d === void 0 ? void 0 : _d.End) {
            underlineWidth += (_e = justifiedLine) === null || _e === void 0 ? void 0 : _e.End.Width;
        }
        return underlineWidth;
    }
    return context.maxWidth;
}
/**
 * Checks if the textToken overlaps with the textRun.
 *
 * @param token TextToken to check
 * @param start StartIndex of the TextRun
 * @param end EndIndex of the TextRun
 */
function doesTextTokenOverlapWithTextRun(token, start, end) {
    return token.start < end && token.start + token.text.length > start;
}
/**
 * Checks if the token is completely inside the textRun
 *
 * @param token TextToken to check
 * @param start StartIndex of the TextRun
 * @param end EndIndex of the TextRun
 */
function isTextTokenCompletelyInsideTextRun(token, start, end) {
    return start <= token.start && token.start + token.text.length <= end;
}
/**
 * Splits the given token based on Start and End Indices.
 *
 * @param ctx The CanvasRenderingContext
 * @param token
 * @param start
 * @param end
 */
function getPartialToken(ctx, token, start, end) {
    var startIndex = token.start < start ? start - token.start : 0;
    // endIndex is startIndex + length of the string.
    var endIndex = startIndex + (end - token.start);
    var newText = token.text.substring(startIndex, endIndex);
    return {
        text: newText,
        start: token.start > start ? token.start : start,
        width: textLayout_1.measureTextWidth(ctx, newText, true)
    };
}
/**
 * Checks if the complete line contains a RTL character or not.
 *
 * @param text the text to check.
 */
function isTextRtl(text) {
    if (text) {
        // We pass the default reading Order, since we are only concerned with Rtl only.
        return richTextFormatBidi_1.analyzeBidiText(text, gridBlockModelDto_1.ReadingOrderType.LeftToRight).HasRtl;
    }
    return false;
}
//# sourceMappingURL=justifyDisributedText.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/numberFormatting.js":
/*!********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/numberFormatting.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var serializer_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/serializer */ "../../packages/excel-online-models/lib/src/serializer.js");
var textLayout_1 = __webpack_require__(/*! ../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var richTextFormatBidi_1 = __webpack_require__(/*! ./richTextFormatBidi */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormatBidi.js");
var helpers_3 = __webpack_require__(/*! .././helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
/**
 * Calculates and sets the Cell::CachedDisplayText based on number of textWidth.
 * Cell.CachedDisplayText = Start + (Separator * SeparatorCount) + End, where the separatorCount is calculated based on text width and cell width.
 * If the text width exceeds the cellWidth, Text = '#' * hashCount, where the HashCount is based on cellWidth.
 * Currently these client side optimizations are applicable for cells with CellValueType as Number.
 *
 * @param ctx The canvas rendering context
 * @param model The model
 * @param cell The Cell
 * @param maxTextWidth The maximum area where text can be drawn.
 */
function updateNumberFormattingInformation(ctx, model, cell, maxTextWidth) {
    var _a, _b, _c, _d;
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'updateNumberFormattingInformation');
    helpers_1.verifyArgumentNotNull(cell.CachedFont, 'cell.CachedFont', 'updateNumberFormattingInformation');
    helpers_1.verifyArgumentNotNull(model, 'model', 'updateNumberFormattingInformation');
    var advancedMetricEnabled = helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvancedTextMetrics, model);
    // Construct the text based on NumberFormatInformation.
    if (!util_1.isNullOrUndefined(cell.NumFmt) && !util_1.isNullOrUndefined(cell.NumFmt.Separator) && cell.NumFmt.Separator !== '') {
        var initialCanvasDirection = undefined;
        // Update the canvas direction based on the cell Text.
        // To calculate the width correctly of RTL text, the direction of the text needs to specified.
        if (!util_1.isNullOrUndefined(cell.Text) && util_1.isNullOrUndefined((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.ReadingOrder)) {
            var bidiContext = richTextFormatBidi_1.analyzeBidiText(cell.Text, (_b = cell.CachedStyle) === null || _b === void 0 ? void 0 : _b.ReadingOrder);
            if (bidiContext.HasRtl) {
                initialCanvasDirection = ctx.direction;
                ctx.direction = 'rtl';
            }
        }
        var startWidth = textLayout_1.measureTextWidth(ctx, (_c = cell.NumFmt) === null || _c === void 0 ? void 0 : _c.Start, advancedMetricEnabled);
        var endWidth = textLayout_1.measureTextWidth(ctx, (_d = cell.NumFmt) === null || _d === void 0 ? void 0 : _d.End, advancedMetricEnabled);
        // If the text is still greater than maxTextWidth, display hashes.
        if (startWidth + endWidth > maxTextWidth && !helpers_3.cellHasShrinkToFit(cell)) {
            var newText = buildNumFmtHashesString(ctx, cell, maxTextWidth);
            helpers_1.setCellCachedDisplayText(cell, newText);
        }
        else {
            var separatorWidth = textLayout_1.getNumFmtSeparatorWidth(ctx, cell);
            var separatorCount = Math.floor((maxTextWidth - startWidth - endWidth) / separatorWidth);
            if (separatorCount === Infinity) {
                throw Error('updateNumberFormattingInformation:: Invalid SeparatorWidth.' +
                    ' SeparatorValue: ' +
                    serializer_1.annonymize(cell.NumFmt.Separator) +
                    ' CachedWidth: ' +
                    separatorWidth +
                    ' MeasuredWidth: ' +
                    ctx.measureText(cell.NumFmt.Separator).width +
                    ', IsSpace: ' +
                    (cell.NumFmt.Separator === ' ') +
                    ' ' +
                    +', Length: ' +
                    cell.NumFmt.Separator.length);
            }
            var newText = buildNumFmtText(cell.NumFmt, separatorCount);
            helpers_1.setCellCachedDisplayText(cell, newText);
        }
        // Restore canvas direction, if changed.
        if (initialCanvasDirection) {
            ctx.direction = initialCanvasDirection;
        }
        return;
    }
    // If the TextWidth is greater than CellWidth, update the value with hashes.
    var textWidth = textLayout_1.getTextWidth(ctx, model, cell);
    if (textWidth > maxTextWidth && !helpers_3.cellHasShrinkToFit(cell)) {
        var newText = buildNumFmtHashesString(ctx, cell, maxTextWidth);
        if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentJustifyAndDistributed, model)) {
            cell.CachedIsTextWidthExceedsCellWidth = true;
        }
        helpers_1.setCellCachedDisplayText(cell, newText);
    }
}
exports.updateNumberFormattingInformation = updateNumberFormattingInformation;
/**
 * Builds a string that contains only #'s, where the number of hashes is determined by the cellWidth.
 */
function buildNumFmtHashesString(ctx, cell, cellWidth) {
    // handle cases where the text width is greater than the cell width.
    var hashWidth = textLayout_1.getNumFmtHashesWidth(ctx, cell);
    var hashCount = Math.floor(cellWidth / hashWidth);
    var value = '';
    value += '#'.repeat(hashCount);
    return value;
}
/**
 * Builds a string based on NumberFormatInformation and separatorCount.
 * value = NumFmt.Start + (NumFmt.Separator * SeparatorCount) + NumFmt.End,
 */
function buildNumFmtText(numFmt, separatorCount) {
    // Separator count cannot be negetive.
    var count = separatorCount > 0 ? separatorCount : 0;
    var value = numFmt.Start || '';
    value += numFmt.Separator.repeat(count);
    value += numFmt.End || '';
    return value;
}
//# sourceMappingURL=numberFormatting.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/helpers.js":
/*!**********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/helpers.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var drawingConstants_1 = __webpack_require__(/*! ./../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
/**
 * Set line properties for Page Layout
 *
 * @param ctx
 * @param context
 */
function setPageLayoutLine(ctx, context) {
    ctx.lineWidth = drawingConstants_1.GridLineWidthPx;
    ctx.setLineDash(drawingConstants_1.DefaultDash);
    ctx.strokeStyle = !util_1.isNullOrUndefined(context.highContrastScheme)
        ? "" + helpers_1.rgbToColorHex(context.highContrastScheme.TextColor)
        : drawingConstants_1.PageLayoutLineColor;
}
exports.setPageLayoutLine = setPageLayoutLine;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/pageBreaks.js":
/*!*************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/pageBreaks.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var gridlines_1 = __webpack_require__(/*! ../gridlines */ "../../packages/excel-online-grid-renderer/lib/src/drawing/gridlines.js");
var helpers_2 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_3 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/helpers.js");
/**
 * Draw pageBreaks.
 */
function drawPageBreaks(ctx, model, context) {
    if (model.PageBreaks == null) {
        return;
    }
    helpers_3.setPageLayoutLine(ctx, context);
    var pixelTranslation = helpers_2.getLinePixelTranslation(drawingConstants_1.GridLineWidthPx);
    var maxColumnOffset = gridlines_1.getMaxLineOffset(model.BlockWidth, context.devicePixelRatio, /* isRow */ false);
    var maxRowOffset = gridlines_1.getMaxLineOffset(model.BlockHeight, context.devicePixelRatio, /* isRow */ true);
    ctx.beginPath();
    drawHorizontalPageBreaks(ctx, model, context, pixelTranslation, maxColumnOffset, maxRowOffset);
    drawVerticalPageBreaks(ctx, model, context, pixelTranslation, maxColumnOffset, maxRowOffset);
    ctx.stroke();
}
exports.drawPageBreaks = drawPageBreaks;
function drawHorizontalPageBreaks(ctx, model, context, pixelTranslation, maxColumnOffset, maxRowOffset) {
    var _a;
    var rowBreaks = (_a = model.PageBreaks) === null || _a === void 0 ? void 0 : _a.Row;
    if (rowBreaks == null) {
        return;
    }
    for (var index = 0; index < rowBreaks.length; ++index) {
        drawPageBreakRow(ctx, model, context, rowBreaks[index], pixelTranslation, maxColumnOffset, maxRowOffset);
    }
}
function drawVerticalPageBreaks(ctx, model, context, pixelTranslation, maxColumnOffset, maxRowOffset) {
    var _a;
    var colBreaks = (_a = model.PageBreaks) === null || _a === void 0 ? void 0 : _a.Col;
    if (colBreaks == null) {
        return;
    }
    for (var index = 0; index < colBreaks.length; ++index) {
        drawPageBreakCol(ctx, model, context, colBreaks[index], pixelTranslation, maxColumnOffset, maxRowOffset);
    }
}
function drawPageBreakRow(ctx, model, context, pageBreak, pixelTranslation, maxColumnOffset, maxRowOffset) {
    var rowIndex = pageBreak.Index;
    var startColIndex = pageBreak.Min;
    var endColIndex = pageBreak.Max;
    if (!shouldDrawPageBreak(rowIndex, startColIndex, endColIndex, context.renderingRegion, /* isRow */ true)) {
        return;
    }
    // Calculate the offsets and draw.
    var y = getAdjustedRowDrawingOffset(model.RowOffsetsAdjustedForDrawing, rowIndex, pixelTranslation, maxRowOffset);
    var startX = pageBreak.Min === -1
        ? 0
        : getAdjustedColumnDrawingOffset(model.ColOffsetsAdjustedForDrawing, startColIndex, pixelTranslation, maxColumnOffset);
    var endX = pageBreak.Max === -1
        ? model.BlockWidth * context.devicePixelRatio
        : getAdjustedColumnDrawingOffset(model.ColOffsetsAdjustedForDrawing, endColIndex, pixelTranslation, maxColumnOffset);
    helpers_1.drawLine(ctx, startX, y, endX, y);
}
function drawPageBreakCol(ctx, model, context, pageBreak, pixelTranslation, maxColumnOffset, maxRowOffset) {
    var colIndex = pageBreak.Index;
    var startRowIndex = pageBreak.Min;
    var endRowIndex = pageBreak.Max;
    if (!shouldDrawPageBreak(colIndex, startRowIndex, endRowIndex, context.renderingRegion, /* isRow */ false)) {
        return;
    }
    // Calculate the offsets and draw.
    var x = getAdjustedColumnDrawingOffset(model.ColOffsetsAdjustedForDrawing, colIndex, pixelTranslation, maxColumnOffset);
    var startY = pageBreak.Min === -1
        ? 0
        : getAdjustedRowDrawingOffset(model.RowOffsetsAdjustedForDrawing, startRowIndex, pixelTranslation, maxRowOffset);
    var endY = pageBreak.Max === -1
        ? model.BlockHeight * context.devicePixelRatio
        : getAdjustedRowDrawingOffset(model.RowOffsetsAdjustedForDrawing, endRowIndex, pixelTranslation, maxRowOffset);
    helpers_1.drawLine(ctx, x, startY, x, endY);
}
function shouldDrawPageBreak(rowColIndex, startIndex, endIndex, renderingRegion, isRow) {
    // If the horizontal line we wish to draw lies above or below the rendering region, skip drawing.
    // If the vertical line we wish to draw lies to the left or right of the rendering region, skip drawing.
    var rangeStart = isRow ? renderingRegion.startRow : renderingRegion.startColumn;
    var rangeEnd = isRow ? renderingRegion.endRow : renderingRegion.endColumn;
    if (!isInRange(rowColIndex, rangeStart, rangeEnd)) {
        return false;
    }
    // If the horizontal line we wish to draw lies to the right of the rendering region, skip drawing.
    // If the vertical line we wish to draw lies below the rendering region, skip drawing.
    rangeEnd = isRow ? renderingRegion.endColumn : renderingRegion.endRow;
    if (startIndex !== -1 && startIndex > rangeEnd) {
        return false;
    }
    // If the horizontal line we wish to draw lies to the left of the rendering region, skip drawing.
    // If the vertical line we wish to draw lies above the rendering region, skip drawing.
    rangeStart = isRow ? renderingRegion.startColumn : renderingRegion.startRow;
    if (endIndex !== -1 && endIndex < rangeStart) {
        return false;
    }
    return true;
}
function getAdjustedColumnDrawingOffset(colOffsets, colIndex, pixelTranslation, maxOffset) {
    return colIndex >= 0
        ? gridlines_1.getAdjustedDrawingOffset(colOffsets[colIndex], helpers_1.getColWidthFromOffsets(colIndex, colOffsets), pixelTranslation, maxOffset)
        : 0;
}
function getAdjustedRowDrawingOffset(rowOffsets, rowIndex, pixelTranslation, maxOffset) {
    return rowIndex >= 0
        ? gridlines_1.getAdjustedDrawingOffset(rowOffsets[rowIndex], helpers_1.getRowHeightFromOffsets(rowIndex, rowOffsets), pixelTranslation, maxOffset)
        : 0;
}
function isInRange(numberToTest, start, end) {
    return start <= numberToTest && numberToTest <= end;
}
//# sourceMappingURL=pageBreaks.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/printAreas.js":
/*!*************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/printAreas.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridlines_1 = __webpack_require__(/*! ../gridlines */ "../../packages/excel-online-grid-renderer/lib/src/drawing/gridlines.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_1 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/helpers.js");
var helpers_3 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
/**
 * Render print area - this method expects print area's index, within a block in model.
 */
function drawPrintAreas(ctx, model, context) {
    var _a;
    validateModel(model);
    if (!model.PrintAreas) {
        return;
    }
    helpers_2.setPageLayoutLine(ctx, context);
    var pixelTranslation = helpers_1.getLinePixelTranslation(drawingConstants_1.GridLineWidthPx);
    var maxColumnOffset = gridlines_1.getMaxLineOffset(model.BlockWidth, context.devicePixelRatio, /* isRow */ false);
    var maxRowOffset = gridlines_1.getMaxLineOffset(model.BlockHeight, context.devicePixelRatio, /* isRow */ true);
    ctx.beginPath();
    for (var index = 0; index < ((_a = model.PrintAreas) === null || _a === void 0 ? void 0 : _a.length); index++) {
        if (!doesPrintAreaIntersectsRenderingRegion(context.renderingRegion, model.PrintAreas[index])) {
            // No rendering required in this region for this print area
            continue;
        }
        drawPrintArea(ctx, model, context, pixelTranslation, maxRowOffset, maxColumnOffset, model.PrintAreas[index]);
    }
    ctx.stroke();
}
exports.drawPrintAreas = drawPrintAreas;
function validateModel(model) {
    helpers_1.verifyArgumentNotNull(model.BlockWidth, 'model.BlockWidth', 'drawPrintAreas');
    helpers_1.verifyArgumentNotNull(model.BlockHeight, 'model.BlockHeight', 'drawPrintAreas');
    helpers_1.verifyArgumentNotNull(model.RowNumbers, 'model.RowNumbers', 'drawPrintAreas');
    helpers_1.verifyArgumentNotNull(model.ColumnNumbers, 'model.ColumnNumbers', 'drawPrintAreas');
    helpers_1.verifyArgumentNotNull(model.RowOffsetsAdjustedForDrawing, 'model.RowOffsetsAdjustedForDrawing', 'drawPrintAreas');
    helpers_1.verifyArgumentNotNull(model.ColOffsetsAdjustedForDrawing, 'model.ColOffsetsAdjustedForDrawing', 'drawPrintAreas');
}
/**
 * This function returns false if :
 * a) Print area doesn't intersects with rendering region
 * b) When rendering region is completely inside print area
 */
function doesPrintAreaIntersectsRenderingRegion(renderingRegion, printArea) {
    // check if print area is on top of rendering region
    if (renderingRegion.startRow > printArea.LastRow) {
        return false;
    }
    // check if print area is on left of the rendering region
    if (renderingRegion.startColumn > printArea.LastColumn) {
        return false;
    }
    // check if print area is next to bottom of rendering region
    // because we want to render top line of print area which is just at bottom
    if (renderingRegion.endRow + 1 < printArea.FirstRow) {
        return false;
    }
    // check if print area is next to right of the rendering region
    // because we want to render left line of print area which is just at right
    if (renderingRegion.endColumn + 1 < printArea.FirstColumn) {
        return false;
    }
    // check if rendering region is completely inside print area
    if (renderingRegion.startRow > printArea.FirstRow &&
        renderingRegion.startColumn > printArea.FirstColumn &&
        renderingRegion.endRow < printArea.LastRow &&
        renderingRegion.endColumn < printArea.LastColumn) {
        return false;
    }
    return true;
}
function drawPrintArea(ctx, model, context, pixelTranslation, maxRowOffset, maxColumnOffset, printArea) {
    // FirstColumn < 0 indicates, left line of print area lies outside this block.
    // FirstColumn = 0 indicates, print area started from first column of this block. But its left line should be rendered from block left to it.
    // So in both the cases we are drawing rect started from -1, to hide the left line of print area.
    var x1 = printArea.FirstColumn <= 0
        ? -1
        : gridlines_1.getAdjustedDrawingOffset(model.ColOffsetsAdjustedForDrawing[printArea.FirstColumn], 0, pixelTranslation, maxColumnOffset);
    // FirstRow < 0 indicates, top line of print area lies outside this block.
    // FirstRow = 0 indicates, print area started from first row of this block. But its top line should be rendered from block top to it.
    // So in both the cases we are drawing rect started from -1, to hide the top line of print area.
    var y1 = printArea.FirstRow <= 0
        ? -1
        : gridlines_1.getAdjustedDrawingOffset(model.RowOffsetsAdjustedForDrawing[printArea.FirstRow], 0, pixelTranslation, maxRowOffset);
    // LastColumn == ColumnNumbers!.length indicates, right line of print area lies outside this block.
    // So drawing rect till outside the block to hide the right line of print area.
    var x2 = printArea.LastColumn >= model.ColumnNumbers.length
        ? model.BlockWidth * context.devicePixelRatio + 1
        : gridlines_1.getAdjustedDrawingOffset(model.ColOffsetsAdjustedForDrawing[printArea.LastColumn], helpers_3.getColWidthFromOffsets(printArea.LastColumn, model.ColOffsetsAdjustedForDrawing), pixelTranslation, maxColumnOffset);
    // LastRow == RowNumbers!.length indicates, bottom line of print area lies outside this block.
    // So drawing rect till outside the block to hide the bottom line of print area.
    var y2 = printArea.LastRow >= model.RowNumbers.length
        ? model.BlockHeight * context.devicePixelRatio + 1
        : gridlines_1.getAdjustedDrawingOffset(model.RowOffsetsAdjustedForDrawing[printArea.LastRow], helpers_3.getRowHeightFromOffsets(printArea.LastRow, model.RowOffsetsAdjustedForDrawing), pixelTranslation, maxRowOffset);
    ctx.rect(x1, y1, /* width */ x2 - x1, /* height */ y2 - y1);
}
//# sourceMappingURL=printAreas.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/constants.js":
/*!************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/constants.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyPivotTableTitleContainerBorderColor = '#969696';
exports.EmptyPivotTableTitleTextColor = '#969696';
exports.EmptyPivotTableTitleContainerBorderThicknessPx = 2;
exports.EmptyPivotTableImagePlaceholderThicknessPx = 1;
exports.EmptyPivotTableTitleContainerTopPaddingPx = 32;
exports.EmptyPivotTableTitleContainerHeightPx = 19;
exports.EmptyPivotTableMinimalHeightForDrawingTitle = exports.EmptyPivotTableTitleContainerTopPaddingPx + exports.EmptyPivotTableTitleContainerHeightPx;
exports.EmptyPivotTableTitleContainerWidthRatio = 0.75;
exports.EmptyPivotTableImageMinimalPaddingYPx = 24;
exports.EmptyPivotTableMinimalHeightForDrawingImage = exports.EmptyPivotTableMinimalHeightForDrawingTitle +
    exports.EmptyPivotTableTitleContainerHeightPx +
    exports.EmptyPivotTableImageMinimalPaddingYPx;
exports.EmptyPivotTableMinimalImageWidthPx = 80;
exports.EmptyPivotTableImageWidthHeightRatio = 184 / 164; // width / height ratio
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/emptyPivotTable.js":
/*!******************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/emptyPivotTable.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/constants.js");
var helpers_3 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/helpers.js");
var helpers_4 = __webpack_require__(/*! ../../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var imageLoader_1 = __webpack_require__(/*! ../../resourceLoading/imageLoader */ "../../packages/excel-online-grid-renderer/lib/src/resourceLoading/imageLoader.js");
var gridBlockModelHelpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelHelpers */ "../../packages/excel-online-models/lib/src/gridBlockModelHelpers.js");
var textLayout_1 = __webpack_require__(/*! ../../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
/**
 * Draws the empty pivot table title container rectangle according to the DPR
 *
 * @param ctx The canvas context
 * @param model The model
 * @param context The rendering context
 */
function drawEmptyPivotTableTitleContainers(ctx, model, context) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawEmptyPivotTableTitleContainers');
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawEmptyPivotTableTitleContainers');
    helpers_1.verifyArgumentNotNull(context, 'context', 'drawEmptyPivotTableTitleContainers');
    // If there are no pivot tables - nothing to draw
    if (!model.PivotTables || model.PivotTables.length === 0) {
        return;
    }
    var lineWidth = Math.max(Math.round(constants_1.EmptyPivotTableTitleContainerBorderThicknessPx * context.devicePixelRatio), 1);
    var rectPixelTranslation = helpers_4.getLinePixelTranslation(lineWidth);
    var pathStarted = false;
    for (var i = 0; i < model.PivotTables.length; i++) {
        var pivotTable = model.PivotTables[i];
        // Skip non empty pivot tables
        if (!pivotTable.IsEmptyPivot) {
            continue;
        }
        // If the pivot table height isn't sufficient skip drawing the title
        if (pivotTable.OriginPTHeight < constants_1.EmptyPivotTableMinimalHeightForDrawingTitle) {
            continue;
        }
        // Skip tables that are not in the rendering regions
        if (!helpers_3.isPivotIntersectsRenderingRegion(pivotTable, context.renderingRegion)) {
            continue;
        }
        // Set the drawing context and start path
        if (!pathStarted) {
            ctx.strokeStyle = context.highContrastScheme
                ? helpers_2.rgbToColorHex(context.highContrastScheme.TextColor)
                : constants_1.EmptyPivotTableTitleContainerBorderColor;
            ctx.lineWidth = lineWidth;
            ctx.setLineDash(drawingConstants_1.DefaultDash);
            ctx.beginPath();
            pathStarted = true;
        }
        // Draw the title container rect
        var containerRect = getTitleContainerRectAdjustedForDrawing(model, pivotTable, context.devicePixelRatio);
        ctx.rect(rectPixelTranslation + containerRect.x, rectPixelTranslation + containerRect.y, containerRect.width, containerRect.height);
    }
    if (pathStarted) {
        ctx.stroke();
    }
}
exports.drawEmptyPivotTableTitleContainers = drawEmptyPivotTableTitleContainers;
/**
 * Draws the empty pivot table images or image placeholders according to the DPR
 *
 * @param ctx The canvas context
 * @param model The model
 * @param context The rendering context
 */
function drawEmptyPivotTableImages(ctx, model, context) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawEmptyPivotTableImages');
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawEmptyPivotTableImages');
    helpers_1.verifyArgumentNotNull(context, 'context', 'drawEmptyPivotTableImages');
    // If there are no pivot tables - nothing to draw
    if (!model.PivotTables || model.PivotTables.length === 0) {
        return;
    }
    for (var i = 0; i < model.PivotTables.length; i++) {
        var pivotTable = model.PivotTables[i];
        // Skip non empty pivot tables
        if (!pivotTable.IsEmptyPivot) {
            continue;
        }
        // If the pivot table height isn't sufficient skip drawing the image
        if (pivotTable.OriginPTHeight < constants_1.EmptyPivotTableMinimalHeightForDrawingImage) {
            continue;
        }
        // Skip tables that are not in the rendering regions
        if (!helpers_3.isPivotIntersectsRenderingRegion(pivotTable, context.renderingRegion)) {
            continue;
        }
        var imageDimensions = getEmptyPivotImageDimensions(model, pivotTable, context.devicePixelRatio);
        if (imageDimensions.width < constants_1.EmptyPivotTableMinimalImageWidthPx) {
            // Image is too small
            continue;
        }
        var image = imageLoader_1.getOrLoadStaticImage(0 /* EmptyPivotTable */, context.blockIdentifier);
        if (!image) {
            // Image isn't loaded
            drawImagePlaceholder(ctx, imageDimensions, context.highContrastScheme);
        }
        else {
            ctx.drawImage(image, imageDimensions.x, imageDimensions.y, imageDimensions.width, imageDimensions.height);
        }
    }
}
exports.drawEmptyPivotTableImages = drawEmptyPivotTableImages;
/**
 * Draws the empty pivot table title text according to the DPR
 *
 * @param ctx The canvas context
 * @param model The model
 * @param context The rendering context
 */
function drawEmptyPivotTableTitleText(ctx, model, context) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'drawEmptyPivotTableTitleText');
    helpers_1.verifyArgumentNotNull(ctx, 'ctx', 'drawEmptyPivotTableTitleText');
    helpers_1.verifyArgumentNotNull(context, 'context', 'drawEmptyPivotTableTitleText');
    // If there are no pivot tables - nothing to draw
    if (!model.PivotTables || model.PivotTables.length === 0) {
        return;
    }
    var isFontSet = false;
    var pivotFont = undefined;
    var textBaselineRefactorEnabled = helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.TextBaselineRefactor, model);
    for (var i = 0; i < model.PivotTables.length; i++) {
        var pivotTable = model.PivotTables[i];
        // Skip non empty pivot tables
        if (!pivotTable.IsEmptyPivot) {
            continue;
        }
        // If the pivot table height isn't sufficient skip drawing the title
        if (pivotTable.OriginPTHeight < constants_1.EmptyPivotTableMinimalHeightForDrawingTitle) {
            continue;
        }
        // Skip tables that are not in the rendering regions
        if (!helpers_3.isPivotIntersectsRenderingRegion(pivotTable, context.renderingRegion)) {
            continue;
        }
        // No title text
        if (!pivotTable.PivotTableName) {
            continue;
        }
        // Set the drawing context for text drawing
        if (!isFontSet) {
            var defaultStyle = gridBlockModelHelpers_1.getReferencedObjectById(gridBlockModelDto_1.UniqueStyleID.Default, model.Styles);
            pivotFont = gridBlockModelHelpers_1.getReferencedObjectById(defaultStyle.FontID, model.Fonts);
            setEmptyPivotFontOnContext(ctx, pivotFont, context.highContrastScheme, textBaselineRefactorEnabled);
            isFontSet = true;
        }
        // Draw the title text - text should always be clipped
        var clipRect = getTitleContainerRect(model, pivotTable);
        var centerX = clipRect.x + clipRect.width / 2;
        var centerY = textLayout_1.getTextOffsetYAlphabeticBaseline(clipRect.y + clipRect.height, clipRect.height, pivotFont.Size, pivotFont.FontName, gridBlockModelDto_1.VerticalAlignment.Center, textBaselineRefactorEnabled);
        helpers_2.applyClipping(ctx, clipRect);
        ctx.fillText(pivotTable.PivotTableName, centerX, centerY);
        helpers_2.restoreClipping(ctx, clipRect);
    }
}
exports.drawEmptyPivotTableTitleText = drawEmptyPivotTableTitleText;
/**
 * Draws a placeholder in the image rect position.
 * Can be used for cases where we don't have the image and want to provide some UI indication to the user.
 */
function drawImagePlaceholder(ctx, rect, highContrastScheme) {
    var lineWidth = constants_1.EmptyPivotTableImagePlaceholderThicknessPx;
    var rectPixelTranslation = helpers_4.getLinePixelTranslation(lineWidth);
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = ctx.strokeStyle = highContrastScheme
        ? helpers_2.rgbToColorHex(highContrastScheme.TextColor)
        : constants_1.EmptyPivotTableTitleContainerBorderColor;
    ctx.strokeRect(rect.x + rectPixelTranslation, rect.y + rectPixelTranslation, rect.width, rect.height);
}
function setEmptyPivotFontOnContext(ctx, pivotFont, highContrastScheme, textBaselineRefactorEnabled) {
    var color = highContrastScheme ? helpers_2.rgbToColorHex(highContrastScheme.TextColor) : constants_1.EmptyPivotTableTitleTextColor;
    ctx.font = helpers_4.getFontCssStringFromFont(pivotFont, /* shrunkFontSize */ undefined);
    ctx.fillStyle = color;
    ctx.textBaseline = textLayout_1.getTextBaseline(gridBlockModelDto_1.VerticalAlignment.Center, textBaselineRefactorEnabled);
    ctx.textAlign = 'center';
}
function getEmptyPivotImageDimensions(model, pivotTable, devicePixelRatio) {
    var titleContainerRect = getTitleContainerRectAdjustedForDrawing(model, pivotTable, devicePixelRatio);
    var pivotTableRect = {
        x: helpers_3.getPivotTableLeftAdjustedForDrawing(model, pivotTable, /* isMirrored */ false),
        y: helpers_3.getPivotTableTopAdjustedForDrawing(model, pivotTable),
        width: pivotTable.OriginPTWidthAdjustedForDrawing,
        height: pivotTable.OriginPTHeightAdjustedForDrawing
    };
    var titleBottom = titleContainerRect.y + titleContainerRect.height;
    var pivotBottom = pivotTableRect.y + pivotTableRect.height;
    // Calculate the maximal possible width & height given the padding & position constraints
    var maxWidth = titleContainerRect.width;
    var maxHeight = pivotBottom - titleBottom - 2 * constants_1.EmptyPivotTableImageMinimalPaddingYPx * devicePixelRatio;
    // Determine the actual image dimensions keeping the width/height ratio
    var width = Math.min(maxWidth, constants_1.EmptyPivotTableImageWidthHeightRatio * maxHeight);
    var height = Math.min(maxHeight, maxWidth / constants_1.EmptyPivotTableImageWidthHeightRatio);
    var centerY = (titleBottom + pivotBottom) / 2;
    var xPadding = Math.round((pivotTableRect.width - width) / 2);
    return {
        x: pivotTableRect.x + xPadding,
        y: Math.round(centerY - height / 2),
        width: width,
        height: height
    };
}
function getTitleContainerRectAdjustedForDrawing(model, pivotTable, devicePixelRatio) {
    var width = Math.round(pivotTable.OriginPTWidthAdjustedForDrawing * constants_1.EmptyPivotTableTitleContainerWidthRatio);
    return {
        x: getTitleContainerLeftAdjustedForDrawing(model, pivotTable, width),
        y: getTitleContainerTopAdjustedForDrawing(model, pivotTable, devicePixelRatio),
        width: width,
        height: Math.round(constants_1.EmptyPivotTableTitleContainerHeightPx * devicePixelRatio)
    };
}
function getTitleContainerRect(model, pivotTable) {
    var width = Math.round(pivotTable.OriginPTWidth * constants_1.EmptyPivotTableTitleContainerWidthRatio);
    return {
        x: getTitleContainerLeft(model, pivotTable, width),
        y: getTitleContainerTop(model, pivotTable),
        width: width - constants_1.EmptyPivotTableTitleContainerBorderThicknessPx,
        height: constants_1.EmptyPivotTableTitleContainerHeightPx - constants_1.EmptyPivotTableTitleContainerBorderThicknessPx
    };
}
function getPivotTableLeft(model, pivotTable) {
    var offsets = model.ColumnOffsets;
    if (!model.IsRtl) {
        return offsets[pivotTable.FirstColIndex] + pivotTable.DeltaXFromOriginPT;
    }
    var pivotTableRight = model.BlockWidth - pivotTable.DeltaXFromOriginPT - offsets[pivotTable.FirstColIndex];
    return pivotTableRight - pivotTable.OriginPTWidth;
}
function getTitleContainerTopAdjustedForDrawing(model, pivotTable, devicePixelRatio) {
    return (helpers_3.getPivotTableTopAdjustedForDrawing(model, pivotTable) +
        Math.round(constants_1.EmptyPivotTableTitleContainerTopPaddingPx * devicePixelRatio));
}
function getTitleContainerTop(model, pivotTable) {
    var pivotTableTop = model.RowOffsets[pivotTable.FirstRowIndex] + pivotTable.DeltaYFromOriginPT;
    return pivotTableTop + constants_1.EmptyPivotTableTitleContainerTopPaddingPx + constants_1.EmptyPivotTableTitleContainerBorderThicknessPx;
}
function getTitleContainerLeftAdjustedForDrawing(model, pivotTable, containerWidth) {
    var padding = Math.floor((pivotTable.OriginPTWidthAdjustedForDrawing - containerWidth) / 2);
    return helpers_3.getPivotTableLeftAdjustedForDrawing(model, pivotTable, /* isMirrored */ false) + padding;
}
function getTitleContainerLeft(model, pivotTable, containerWidth) {
    var padding = (pivotTable.OriginPTWidth - containerWidth) / 2 + constants_1.EmptyPivotTableTitleContainerBorderThicknessPx;
    return getPivotTableLeft(model, pivotTable) + padding;
}
//# sourceMappingURL=emptyPivotTable.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/helpers.js":
/*!**********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/helpers.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
/**
 * Returns the pivot table top adjusted for drawing
 *
 * @param model the model
 * @param pivotTable the pivot table
 */
function getPivotTableTopAdjustedForDrawing(model, pivotTable) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'getPivotTableTopAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(model.RowOffsetsAdjustedForDrawing, 'RowOffsetsAdjustedForDrawing', 'getPivotTableTopAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(pivotTable, 'pivotTable', 'getPivotTableTopAdjustedForDrawing');
    return (model.RowOffsetsAdjustedForDrawing[pivotTable.FirstRowIndex] + pivotTable.DeltaYFromOriginPTAdjustedForDrawing);
}
exports.getPivotTableTopAdjustedForDrawing = getPivotTableTopAdjustedForDrawing;
/**
 * Returns the pivot table bottom adjusted for drawing
 *
 * @param model the model
 * @param pivotTable the pivot table
 * @param isMirrored should be true when drawing on mirrored canvas
 */
function getPivotTableLeftAdjustedForDrawing(model, pivotTable, isMirrored) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'getPivotTableLeftAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(model.ColOffsetsAdjustedForDrawing, 'ColOffsetsAdjustedForDrawing', 'getPivotTableLeftAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(pivotTable, 'pivotTable', 'getPivotTableLeftAdjustedForDrawing');
    var offsets = model.ColOffsetsAdjustedForDrawing;
    if (isMirrored || !model.IsRtl) {
        return offsets[pivotTable.FirstColIndex] + pivotTable.DeltaXFromOriginPTAdjustedForDrawing;
    }
    var pivotTableRight = offsets[offsets.length - 1] - pivotTable.DeltaXFromOriginPTAdjustedForDrawing - offsets[pivotTable.FirstColIndex];
    return pivotTableRight - pivotTable.OriginPTWidthAdjustedForDrawing;
}
exports.getPivotTableLeftAdjustedForDrawing = getPivotTableLeftAdjustedForDrawing;
/**
 * Returns true if the pivot table intersects with the rendering region
 *
 * @param pivotTable the pivot table
 * @param renderingRegion the rendering region
 */
function isPivotIntersectsRenderingRegion(pivotTable, renderingRegion) {
    helpers_1.verifyArgumentNotNull(pivotTable, 'pivotTable', 'isPivotIntersectsRenderingRegion');
    helpers_1.verifyArgumentNotNull(renderingRegion, 'renderingRegion', 'isPivotIntersectsRenderingRegion');
    if (pivotTable.LastRowIndex < renderingRegion.startRow) {
        return false;
    }
    if (pivotTable.FirstRowIndex > renderingRegion.endRow) {
        return false;
    }
    if (pivotTable.FirstColIndex < renderingRegion.startColumn) {
        return false;
    }
    if (pivotTable.LastColIndex > renderingRegion.endColumn) {
        return false;
    }
    return true;
}
exports.isPivotIntersectsRenderingRegion = isPivotIntersectsRenderingRegion;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormat.js":
/*!******************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/richTextFormat.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var textLayout_1 = __webpack_require__(/*! ../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var richTextFormatBidi_1 = __webpack_require__(/*! ./richTextFormatBidi */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormatBidi.js");
var textDecoration_1 = __webpack_require__(/*! ./textDecoration */ "../../packages/excel-online-grid-renderer/lib/src/drawing/textDecoration.js");
var helpers_3 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var cellLayout_1 = __webpack_require__(/*! ../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var textLayoutCache_1 = __webpack_require__(/*! ../layout/textLayoutCache */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayoutCache.js");
var telemetry_1 = __webpack_require__(/*! ../telemetry */ "../../packages/excel-online-grid-renderer/lib/src/telemetry.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_4 = __webpack_require__(/*! ./horizontalAlignment/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var justifyDisributedText_1 = __webpack_require__(/*! ./horizontalAlignment/justifyDisributedText */ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/justifyDisributedText.js");
/**
 * Draws rich text format content at required position
 *
 * @param ctx CanvasRenderingContext2D used for drawing
 * @param context the RenderingContext.
 * @param model the block model
 * @param cell Cell to render
 * @param formattedText `RtfContext` for drawing rich text
 * @param x X position to drawing text
 * @param y Y position to drawing text
 * @param textTokens Tokens used for rendering RichTextFormat with Justified and Distributed horizontalAlignment.
 * @param justifyDistributedContext The context used to construct the TextPortions from textTokens.
 */
function fillRichTextFormat(ctx, context, model, cell, formattedText, x, y, clipRect, textTokens, justifyDistributedContext) {
    var _a;
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'fillRichTextFormat');
    helpers_1.verifyArgumentNotNull(model, 'model', 'fillRichTextFormat');
    helpers_1.verifyArgumentNotNull(formattedText, 'formattedText', 'fillRichTextFormat');
    helpers_1.verifyArgumentNotNull(formattedText.TextRuns[0].CachedFont, 'formattedText.CachedFont', 'fillRichTextFormat');
    if (formattedText.Text.length === 0) {
        return;
    }
    var runs = formattedText.TextRuns;
    helpers_1.verifyArgumentNotNull(runs[0].CachedFont, 'formattedText.CachedFont', 'fillRichTextFormat');
    var _b = prepareTextRunDataForDrawing(ctx, model, cell, runs, formattedText.Text, textTokens, justifyDistributedContext), totalTextRunWidth = _b.totalTextRunWidth, largestFont = _b.largestFont, preparedRuns = _b.preparedRuns;
    var cellStyle = helpers_1.getCellStyle(cell, model);
    helpers_1.verifyArgumentNotNull(cellStyle, 'cellStyle', 'fillRichTextFormat');
    var maxWidth = (_a = justifyDistributedContext) === null || _a === void 0 ? void 0 : _a.maxWidth;
    drawTextRuns(ctx, context, model, cell, totalTextRunWidth, largestFont, x, y, preparedRuns, clipRect, maxWidth);
}
exports.fillRichTextFormat = fillRichTextFormat;
/**
 * Creates substring formatted text object from a passed formatted text object based on start/end offsets.
 * The functionality is very similar to JS `string.substring(start, end)` but in the context of formatted text which has text runs and fonts.
 *
 * E.g.:
 * formattedText: 'the quick brown fox jumps over the lazy dog'
 *                 r0        r1        r2    r4   r5  r6        (text runs)
 *                     |<----- substring -->|
 *              start: 4                    end: 26
 *
 *
 * returns: { Text: 'quick brown fox jumps', TextRuns: [r0, r1, r2], Fonts: ... }
 *                   r0    r1        r2
 *
 * @param formattedText formatted text to create substring from
 * @param startIndex The index of the first character to include in the returned substring.
 * @param endIndex The index of the first character to exclude from the returned substring (optional). If not defined - the end is considered the end of the text.
 *
 * @returns `FormattedText` object of the requested substring. The returned formatted text will have the same `Font[]` of the original
 *          formatted text. The `TextRuns` property will contain new text runs which are relevant to the substring.
 *          The new text runs `StartIndex` property will start at index 0 of the substring text.
 */
function substringFormattedText(formattedText, startIndex, endIndex) {
    helpers_1.verifyArgumentNotNull(formattedText.Text, 'formattedText.Text', 'substringFormattedText');
    // For wrap text hard break - empty formatted text line
    if (formattedText.Text.length === 0) {
        return drawingConstants_1.EmptyFormattedText;
    }
    var substringText = formattedText.Text.substring(startIndex, endIndex);
    // If text is empty return empty formatted text immediately
    if (substringText.length === 0) {
        return { Text: substringText, Fonts: formattedText.Fonts, TextRuns: [] };
    }
    var runs = formattedText.TextRuns;
    helpers_1.verifyArgumentNotNull(runs, 'formattedText.runs', 'substringFormattedText');
    if (runs.length === 0) {
        throw Error('Invalid param: formattedText runs.length === 0');
    }
    // Add EndIndex for all runs to simplify later logic
    prepareTextRunRanges(runs, formattedText);
    // Find the first and last index of runs which covers the requested substring.
    // It is useful when aggregating the runs for the returned substring
    //
    // E.g.:
    //      |<---- substring --->|
    // "the quick brown fox jumps over"
    //  r0  r1    r2    r3  r4    r5
    //      ^               ^
    //      firstRun        lastRun
    //
    var firstRunIndex = getTextRunIndexAtOffset(startIndex, runs);
    var lastRunIndex = endIndex && endIndex < formattedText.Text.length ? getTextRunIndexAtOffset(endIndex - 1, runs) : runs.length - 1;
    var substringRuns = [];
    // Save the first run which always starts at index 0 for the resulting substring
    var firstR = runs[firstRunIndex];
    substringRuns.push({ StartIndex: 0, FontID: firstR.FontID, CachedFont: firstR.CachedFont });
    // Save the rest of the runs till the last run while adjusting the StartIndex based on substring start offset param
    for (var i = firstRunIndex + 1; i <= lastRunIndex; i++) {
        var run = runs[i];
        var runRelativeStartIndex = run.StartIndex - startIndex;
        substringRuns.push({ StartIndex: runRelativeStartIndex, FontID: run.FontID, CachedFont: run.CachedFont });
    }
    return { Text: substringText, Fonts: formattedText.Fonts, TextRuns: substringRuns };
}
exports.substringFormattedText = substringFormattedText;
function prepareTextRunRanges(runs, formattedText) {
    var _a;
    // We check the first run, and return if end index is already defined
    if (((_a = runs[0]) === null || _a === void 0 ? void 0 : _a.EndIndex) !== undefined) {
        return;
    }
    for (var i = 0; i < runs.length; i++) {
        var run = runs[i];
        var runEndIndex = i < runs.length - 1
            ? runs[i + 1].StartIndex // if not last - then the end index is next run start
            : formattedText.Text.length; // this is the last - then end index is the total length
        run.EndIndex = runEndIndex;
    }
}
function indexInTextRunRange(index, run) {
    return index >= run.StartIndex && index < run.EndIndex;
}
/**
 * Returns the index of a text run which covers a text offset or throws if cannot find any.
 *
 * @param textOffsetIndex The offset index in the text to search
 * @param runs TextRuns[] of the formatted text
 */
function getTextRunIndexAtOffset(textOffsetIndex, runs) {
    for (var i = 0; i < runs.length; i++) {
        var run = runs[i];
        // If the requested start offset is within current run range it must be the first
        if (indexInTextRunRange(textOffsetIndex, run)) {
            return i;
        }
    }
    // reached the end and didn't find any text run => there is none.
    throw Error("Failed to find text run index for textOffsetIndex: " + textOffsetIndex);
}
/**
 * Prepares the text runs and prepares them for drawing.
 * Preparation includes the following:
 * - extract the sub-text of each text run
 * - measuring each text run sub-text width with the correct font properties
 * - sum the total measured width of all text runs
 *
 * @param ctx CanvasRenderingContext2D used for drawing
 * @param model The model
 * @param cell The cell
 * @param runs array of TextRuns to draw
 * @param cellText text content of the cell
 * @param textTokens Tokens used for rendering RichTextFormat with Justified and Distributed horizontalAlignment.
 * @param justifyDistributedContext The context used to construct the TextPortions from textTokens.
 *
 * @returns total width in pixels of all text runs when layout one after another
 */
function prepareTextRunDataForDrawing(ctx, model, cell, runs, cellText, textTokens, justifyDistributedContext) {
    var bidiContext = textLayout_1.getBidiContext(cell);
    var result = measureTextRuns(ctx, model, cell, runs, cellText);
    var totalTextRunWidth = result.totalTextRunWidth;
    var largestFont = result.largestFont;
    var preparedRuns = result.preparedRuns;
    if (bidiContext.HasRtl) {
        // Need to reorder prepared text runs based on Bidi context of the text content (even if only RTL text)
        telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.ReorderBidiTextRuns, function () {
            richTextFormatBidi_1.reorderTextRunsForBidiDrawing(preparedRuns, cellText, bidiContext);
        }, 
        /* shouldAggregate */ true);
    }
    // Shrink to fit
    if (cell.CachedStyle.ShrinkToFit) {
        totalTextRunWidth = prepareTextRunsShrinkToFit(model, cell, preparedRuns, totalTextRunWidth);
    }
    // Underline sequence
    prepareTextRunsUnderlineWidth(preparedRuns);
    var isJustifyDistributedText = helpers_4.isHorizontalAlignmentJustifiedAndDistributed(model, cell);
    if (isJustifyDistributedText && !util_1.isNullOrUndefined(textTokens) && !util_1.isNullOrUndefined(justifyDistributedContext)) {
        // We need to adjust the Text inside the text runs to accommodate rendering
        // in accordance to either justify or distributed
        justifyDisributedText_1.prepareTextRunsForJustifyAndDistributed(ctx, justifyDistributedContext, textTokens, preparedRuns);
    }
    return { totalTextRunWidth: totalTextRunWidth, largestFont: largestFont, preparedRuns: preparedRuns };
}
/**
 * Recalculates the text runs indexes to match the wrap text indexes.
 * The server calculates "/r/n" (CRLF hard break) as one character, where we calculate it as 2 characters in wrap text logic.
 * This creates a mismatch between both indexes which creates incorrect formatting on the cell's text.
 *
 * @param model The grid block model
 * @param cell The cell
 */
function fixFormattedTextHardBreaksIndices(model, cell) {
    var displayText = helpers_1.getDisplayText(cell, model);
    var formattedText = helpers_1.getFormattedText(displayText, cell, model);
    helpers_1.verifyArgumentNotNull(formattedText, 'formattedText', 'fixFormattedTextHardBreaksIndices');
    // We do not need to adjust the indexes if there are no CRLF breaks
    if (formattedText.Text.indexOf(drawingConstants_1.HardBreakCRLF) === -1) {
        return formattedText;
    }
    // We clone the formatted text because we want to avoid mutating the runs on the model and cause a mismatch with the new model content or with CSE.
    var clonedFormattedText = cloneFormattedText(formattedText);
    var runs = clonedFormattedText.TextRuns;
    var text = clonedFormattedText.Text;
    prepareTextRunRanges(runs, clonedFormattedText);
    var nextStartIndex = 0;
    for (var i = 0; i < runs.length; i++) {
        var run = runs[i];
        helpers_1.verifyArgumentNotNull(run.EndIndex, 'EndIndex', 'fixFormattedTextHardBreaksIndices');
        helpers_1.verifyArgumentNotNull(run.StartIndex, 'StartIndex ', 'fixFormattedTextHardBreaksIndices');
        var startIndex = run.StartIndex;
        var endIndex = run.EndIndex;
        // We need to shift current run's indexes if the indexes before it have changed
        if (nextStartIndex !== startIndex) {
            endIndex += nextStartIndex - startIndex;
            startIndex = nextStartIndex;
        }
        // Iterating over the run's text, checks for CRLF breaks and changes the indexes accordingly
        for (var j = startIndex; j < endIndex; j++) {
            if (text.charAt(j) === drawingConstants_1.HardBreakCR && text.charAt(j + 1) === drawingConstants_1.HardBreak) {
                endIndex++;
            }
        }
        // Updating the indexes
        run.EndIndex = endIndex;
        run.StartIndex = startIndex;
        nextStartIndex = endIndex;
    }
    return clonedFormattedText;
}
exports.fixFormattedTextHardBreaksIndices = fixFormattedTextHardBreaksIndices;
/**
 * Clones formatted text object
 *
 * @param formattedText The formatted text to be cloned
 */
function cloneFormattedText(formattedText) {
    var textRuns = formattedText.TextRuns;
    var clonedTextRuns = [];
    for (var i = 0; i < textRuns.length; i++) {
        var run = textRuns[i];
        clonedTextRuns.push({
            StartIndex: run.StartIndex,
            FontID: run.FontID,
            EndIndex: run.EndIndex,
            CachedFont: run.CachedFont
        });
    }
    return { Fonts: formattedText.Fonts, Text: formattedText.Text, TextRuns: clonedTextRuns };
}
/**
 * Shrinks every run to fit inside the cell width, if shrinking is actually necessary.
 *
 * @param ctx Canvas context
 * @param model The model
 * @param cell The cell
 * @param runs Array of all text runs
 * @param totalWidth Total width of text (sum of all the runs)
 * @returns The new shrunk total width of the text
 */
function prepareTextRunsShrinkToFit(model, cell, runs, totalWidth) {
    var cellWidth = cellLayout_1.getCellWidth(model, cell, /* limitToBlockDimensions */ false);
    var cellIndentation = cell.CachedStyle.Indentation || 0;
    // We calculate the padding from the left relying on the first run size, as it is the only one that matters for this calculation.
    var font = runs[0].CachedFont;
    var padding = textLayout_1.getHorizontalPadding(font.Size, cell.CachedStyle.HorizontalAlignment, cell.CachedFont.Italic, cellIndentation, 
    /* shouldPadCenterAlignment */ true, 
    /* iconPadding */ 0);
    var maxTextWidthAllowed = helpers_3.getTextDrawingMaxWidth(cellWidth, padding, textLayout_1.getTextIconPadding(model, cell));
    if (totalWidth < maxTextWidthAllowed) {
        // No need for shrinking, as the text is narrower than the cell width
        return totalWidth;
    }
    var ratio = maxTextWidthAllowed / (totalWidth + padding);
    // Updating every run to it's new size & width
    var shrunkTotalWidth = 0;
    for (var i = 0; i < runs.length; i++) {
        var run = runs[i];
        updateRunShrunkSize(run, ratio);
        shrunkTotalWidth += run.WidthPx;
    }
    return shrunkTotalWidth;
}
function updateRunShrunkSize(run, ratio) {
    var font = run.CachedFont;
    run.ShrunkSize = font.Size * ratio;
    run.FontCss = helpers_1.getFontCssStringFromFont(font, run.ShrunkSize);
    run.WidthPx = run.WidthPx * ratio;
}
/**
 * Sequence of runs with underline and different font sizes, results in underline in different sizes and inconsistent position.
 * To avoid this, we take the maximum line width of the sequence and sets it across all the sequence runs in order to have a consistent and straight line.
 * In this function we check for those sequences and sets the underline width for them.
 *
 * @param runs The text runs of the cell
 */
function prepareTextRunsUnderlineWidth(runs) {
    var runIndex = 0;
    // Iterating over the runs
    while (runIndex < runs.length) {
        var run = runs[runIndex];
        if (run.Underline === gridBlockModelDto_1.FontUnderline.None) {
            runIndex++;
        }
        else {
            // If we detect a run with underline, we start iterating on sequential runs with underline and extract the max font size of the sequence
            var _a = findUnderlineRichTextMaxFontSize(runs, runIndex), maxFontSize = _a.maxFontSize, sequenceEndRunIndex = _a.sequenceEndRunIndex;
            // We reached the end of the underline sequence, now we need to set the max size to all runs in the sequence
            var lineWidth = textLayout_1.getTextDecorationLineWidth(maxFontSize);
            for (; runIndex <= sequenceEndRunIndex; runIndex++) {
                runs[runIndex].UnderlineWidth = lineWidth;
            }
        }
    }
}
/**
 * Iterates over a sequence of text runs with underline and returns the maximum font size and the new run index (after the sequence)
 *
 * @param runs Text runs to iterate
 * @param runIndex Index of the first run
 */
function findUnderlineRichTextMaxFontSize(runs, runIndex) {
    var maxFontSize = 0;
    var sequenceEndRunIndex = runIndex;
    for (var i = runIndex; i < runs.length; i++) {
        var run = runs[i];
        // We reached the end of the sequence
        if (run.Underline === gridBlockModelDto_1.FontUnderline.None) {
            break;
        }
        var font = run.CachedFont;
        maxFontSize = Math.max(maxFontSize, run.ShrunkSize || font.Size);
        sequenceEndRunIndex = i;
    }
    return { maxFontSize: maxFontSize, sequenceEndRunIndex: sequenceEndRunIndex };
}
/**
 * Measures the width in pixels of formatted text based on the text runs width
 *
 * @param ctx CanvasRenderingContext2D used for drawing
 * @param formattedText formatted text to measure
 */
function measureFormattedTextWidth(ctx, formattedText) {
    var totalWidth = textLayout_1.measureTextRunsWidth(ctx, formattedText.TextRuns, formattedText.Text).totalWidth;
    return totalWidth;
}
exports.measureFormattedTextWidth = measureFormattedTextWidth;
function measureTextRuns(ctx, model, cell, runs, formattedText) {
    var fonts = model.Fonts;
    var preparedRuns;
    var totalTextRunWidth;
    // Wrap text requires calculation of every line for itself, and we cannot use the cached text runs.
    if (cell.WrapText) {
        var measurementResult = textLayout_1.measureTextRunsWidth(ctx, runs, formattedText, textLayout_1.getBidiContext(cell));
        totalTextRunWidth = measurementResult.totalWidth;
        preparedRuns = measurementResult.textRunsDrawingInformation;
    }
    else {
        totalTextRunWidth = textLayout_1.getTextWidth(ctx, model, cell);
        preparedRuns = cell.CachedDrawingLayout.TextRunDrawingInformation;
    }
    if (!preparedRuns || !runs) {
        throw 'Unexpected: cachedCellRuns and runs are supposed to be defined';
    }
    var maxFontSize = 0;
    var largestFont = fonts[0];
    for (var i = 0; i < preparedRuns.length; i++) {
        var run = preparedRuns[i];
        var font = run.CachedFont;
        maxFontSize = Math.max(maxFontSize, font.Size);
        if (largestFont.Size < maxFontSize) {
            largestFont = font;
        }
    }
    return { totalTextRunWidth: totalTextRunWidth, largestFont: largestFont, preparedRuns: preparedRuns };
}
/**
 * Draws the text runs at correct offset while considering Canvas2DContext horizontal text alignment
 *
 * @param ctx CanvasRenderingContext2D used for drawing
 * @param context the rendering context
 * @param model the block model
 * @param cell Cell to render
 * @param totalTextRunWidth the total width of the text Run
 * @param x X position to start drawing
 * @param y Y position to start drawing
 * @param runs TextRuns array to draw
 * @param clipRect clippingRect
 * @param maxWidth The max width of drawing area
 */
function drawTextRuns(ctx, context, model, cell, totalTextRunWidth, largestFont, x, y, runs, clipRect, maxWidth) {
    // Save original context
    var ctxAlignment = ctx.textAlign;
    var ctxTextBaseline = ctx.textBaseline;
    var ctxFont = ctx.font;
    var ctxFillStyle = ctx.fillStyle;
    var isBaselineRefactorEnabled = helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.TextBaselineRefactor, model);
    var isJustifyDistributed = helpers_4.isHorizontalAlignmentJustifiedAndDistributed(model, cell);
    var offsetY = isBaselineRefactorEnabled ? y : adjustYForVerticalAlignment(largestFont, cell, y);
    var offsetX = getAdjustedOffsetXforHorizontalAlignment(model, cell, x, isJustifyDistributed, totalTextRunWidth, maxWidth);
    ctx.textAlign = 'left'; // For simplified logic - always assume left horizontal alignment
    ctx.textBaseline = 'alphabetic'; // Ensure all glyphs are on the same baseline regardless of font size
    var dpr = context.devicePixelRatio;
    var previousTextRun = undefined;
    if (context.highContrastScheme) {
        ctx.fillStyle = helpers_3.getHighContrastTextColor(model, cell, context.highContrastScheme);
    }
    for (var i = 0; i < runs.length; i++) {
        var run = runs[i];
        helpers_1.verifyArgumentNotNull(run.CachedFont, 'run.CachedFont', 'drawTextRuns');
        // Set context new values
        // ! Important ! need to save restore these to original values so that the lastContextState will be correct
        ctx.font = run.FontCss;
        if (!context.highContrastScheme) {
            ctx.fillStyle = run.CachedFont.Color;
        }
        if (isJustifyDistributed) {
            if (i > 0) {
                previousTextRun = runs[i - 1];
            }
            offsetX = drawTextRunsForJustifyDistributedAndGetNextOffsetX(ctx, offsetX, run, offsetY, model, cell, dpr, run.CachedFont, previousTextRun, clipRect);
        }
        else {
            // Draw normal TextRuns
            // TODO - adjust y offset based on max font size baseline (VSO:3854327)
            ctx.fillText(run.Text, offsetX, offsetY);
            if (run.Underline !== gridBlockModelDto_1.FontUnderline.None || run.Strikethrough) {
                var textDecorationContext = {
                    dpr: dpr,
                    clipRect: clipRect,
                    textPositionX: offsetX,
                    textPositionY: offsetY,
                    textWidth: run.WidthPx
                };
                textDecoration_1.cacheTextDecorationLayout(model, cell, textDecorationContext, run.CachedFont, run.UnderlineWidth);
            }
            offsetX += run.WidthPx;
        }
    }
    // Restore context to original values
    ctx.textAlign = ctxAlignment;
    ctx.textBaseline = ctxTextBaseline;
    ctx.font = ctxFont;
    ctx.fillStyle = ctxFillStyle;
}
/**
 * Adjust of drawing X position based on horizontal alignment (assuming drawing is left aligned).
 *
 * @param model the GridBlockModel
 * @param cell the cell
 * @param x X position to start drawing
 * @param totalWidth the total width allowed for drawing the text
 */
function adjustXForHorizontalAlignment(model, cell, x, totalWidth) {
    var adjustedX = 0;
    var horizontalAlignment = helpers_4.getEffectiveHorizontalAlignment(model, cell);
    switch (horizontalAlignment) {
        case gridBlockModelDto_1.HorizontalAlignment.Left:
            /**
             * | ABCDEFGH              |
             *   ^x
             *   ^offsetX
             *
             * For left alignment the drawing offset matches the x value
             */
            adjustedX = x;
            break;
        case gridBlockModelDto_1.HorizontalAlignment.Right:
            /**
             * |              ABCDEFGH |
             *                       ^x
             *                [width ]
             *                ^offsetX
             *
             * For right alignment the drawing offset adjusted to the content width
             */
            adjustedX = x - totalWidth;
            break;
        case gridBlockModelDto_1.HorizontalAlignment.Center:
        case gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection:
            /**
             * |        ABCDEFGH       |
             *             ^x
             *          [width ]
             *          ^offsetX
             *
             * For center alignment the drawing offset to the middle of the content width
             */
            adjustedX = x - totalWidth / 2;
            break;
        default:
            throw Error("unexpected context alignment " + horizontalAlignment);
    }
    return adjustedX;
}
/**
 * Returns the Y adjusted offset for text based on max font size in any of the runs
 *
 * @param largestFont The font with the largest size of any of the text runs
 * @param cell Cell to render
 * @param y The Y offset to draw the text
 */
function adjustYForVerticalAlignment(largestFont, cell, y) {
    var verticalAlignment = cell.CachedStyle.VerticalAlignment;
    // Since text y is assuming non-alphabetic textBaseline it will need to adjust the vertical offset to consider
    // the max font height.
    var textFontLineHeight = textLayout_1.getFontLineHeight(largestFont.Size, largestFont.FontName);
    var textBaselineAdjustY = textLayoutCache_1.getCachedFontMetrics(largestFont.FontName, largestFont.Size).baseline;
    helpers_1.verifyArgumentNotNull(textBaselineAdjustY, 'textBaselineAdjustY', 'adjustYForVerticalAlignment');
    var adjustedY = y - textBaselineAdjustY;
    if (verticalAlignment === gridBlockModelDto_1.VerticalAlignment.Center) {
        // The canvas Y position of the text is at the center of the line. We need to adjust this offset to draw on the "alphabetic" baseline.
        return adjustedY + (textFontLineHeight - textBaselineAdjustY) / 2;
    }
    return adjustedY;
}
function getAdjustedOffsetXforHorizontalAlignment(model, cell, x, isJustifyDistributed, totalTextRunWidth, maxWidth) {
    // Consider the maximum text drawing width of the cell.
    var width = isJustifyDistributed && !util_1.isNullOrUndefined(maxWidth) ? maxWidth : totalTextRunWidth;
    return adjustXForHorizontalAlignment(model, cell, x, width);
}
/**
 * Draw TextRuns for Justify and Distributed Runs
 * We draw the TextPortions - Start, Middle and End for each TextRun
 *
 * Note - OffsetX is also incremented based on the width of the TextPortions.
 */
function drawTextRunsForJustifyDistributedAndGetNextOffsetX(ctx, offsetX, run, offsetY, model, cell, dpr, font, previousRun, clipRect) {
    var _a, _b;
    // If the textRun is Empty or has only space - we dont need to draw it.
    if (!run.JustifyDistributedLine) {
        return offsetX;
    }
    var spaceWidthBetweenWords = run.JustifyDistributedLine.SpaceWidthBetweenWords;
    var currentOffsetX = offsetX + run.JustifyDistributedLine.Start.OffsetX;
    // If textRuns are joined, correct the offset to avoid adding space in between.
    if (areJoinedTextRunsForJustifyDistributedText(run, previousRun)) {
        currentOffsetX -= spaceWidthBetweenWords;
    }
    var startOffsetX = currentOffsetX;
    drawTextPortion(ctx, run.JustifyDistributedLine.Start, currentOffsetX, offsetY);
    currentOffsetX = calculateNextOffsetX(currentOffsetX, run.JustifyDistributedLine.Start.Width, spaceWidthBetweenWords);
    if ((_a = run.JustifyDistributedLine) === null || _a === void 0 ? void 0 : _a.Middle) {
        drawTextPortion(ctx, run.JustifyDistributedLine.Middle, currentOffsetX, offsetY);
        currentOffsetX = calculateNextOffsetX(currentOffsetX, run.JustifyDistributedLine.Middle.Width, spaceWidthBetweenWords);
    }
    if ((_b = run.JustifyDistributedLine) === null || _b === void 0 ? void 0 : _b.End) {
        drawTextPortion(ctx, run.JustifyDistributedLine.End, currentOffsetX, offsetY);
        currentOffsetX = calculateNextOffsetX(currentOffsetX, run.JustifyDistributedLine.End.Width, spaceWidthBetweenWords);
    }
    if (run.Underline !== gridBlockModelDto_1.FontUnderline.None || run.Strikethrough) {
        var textDecorationContext = {
            dpr: dpr,
            clipRect: clipRect,
            textPositionX: startOffsetX,
            textPositionY: offsetY,
            textWidth: currentOffsetX - startOffsetX
        };
        textDecoration_1.cacheTextDecorationLayout(model, cell, textDecorationContext, font, run.UnderlineWidth);
    }
    return currentOffsetX;
}
/**
 * Are TextRuns joined, i.e. no spaces exist between the 2 textRuns.
 *
 * @param currentRun The current TextRun
 * @param previousRun The previousTextRun
 */
function areJoinedTextRunsForJustifyDistributedText(currentRun, previousRun) {
    return (currentRun.JustifyDistributedLine.HasPartialText &&
        previousRun &&
        previousRun.JustifyDistributedLine &&
        previousRun.JustifyDistributedLine.HasPartialText);
}
/**
 * Draw TextPortions and returns OffsetX based on the width of the text portion.
 */
function drawTextPortion(ctx, textPortion, offsetX, offsetY) {
    ctx.fillText(textPortion.Text, offsetX, offsetY);
}
function calculateNextOffsetX(currentOffsetX, textPortionWidth, spaceWidthBetweenWords) {
    return currentOffsetX + textPortionWidth + spaceWidthBetweenWords;
}
//# sourceMappingURL=richTextFormat.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormatBidi.js":
/*!**********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/richTextFormatBidi.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var RunIdAttribute = 'rid';
/**
 * Analyze the text Bidi properties:
 *  1. Determine if passed text has bidirectional content.
 *     That means it has character with base direction of RTL mixed with characters with base direction of LTR.
 *     E.g.: The string "Hello שלום עולם World" has Bidi content since it contains chars in both English (LTR) and Hebrew (RTL) languages
 *  2. If it has any RTL or LTR characters
 *  3. Determine the general directionality of the text (base direction).
 *
 * @param text Text evaluate
 * @returns BidiContext object with the bidi properties
 */
function analyzeBidiText(text, readingOrder) {
    var hasRtl = false;
    var hasLtr = false;
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (helpers_2.isRtlChar(char)) {
            hasRtl = true;
        }
        else {
            hasLtr = true;
        }
        if (hasLtr && hasRtl) {
            break;
        }
    }
    var baseDir = getBaseDir(text, readingOrder);
    var hasBidi = hasLtr && hasRtl;
    return { HasLtr: hasLtr, HasRtl: hasRtl, HasBidi: hasBidi, BaseDir: baseDir };
}
exports.analyzeBidiText = analyzeBidiText;
/**
 * Prepares text runs for Bidi layout by splitting all text runs which contain special characters (like space, colon, period etc.)
 * which impact text ordering into multiple runs .
 *
 * E.g.: The single text run array ["hello world"] will split to ==> ["hello", " ", "world"]
 *
 * @param textRuns Text runs to prepare
 * @param cellText Text use referred to by the text runs
 * @returns Array of text runs ready for bidi layout re-ordering
 */
function prepareTextRunsForBidiLayout(textRuns, cellText) {
    var preparedTextRuns = [];
    for (var runIndex = 0; runIndex < textRuns.length; runIndex++) {
        var run = textRuns[runIndex];
        var runText = helpers_1.getTextRunText(runIndex, textRuns, cellText);
        var newRuns = splitRunBySpecialChars(run, runText);
        preparedTextRuns.push.apply(preparedTextRuns, newRuns);
    }
    return preparedTextRuns;
}
exports.prepareTextRunsForBidiLayout = prepareTextRunsForBidiLayout;
function getBaseDir(text, readingOrder) {
    switch (readingOrder) {
        case gridBlockModelDto_1.ReadingOrderType.LeftToRight:
            return 'ltr';
        case gridBlockModelDto_1.ReadingOrderType.RightToLeft:
            return 'rtl';
        case gridBlockModelDto_1.ReadingOrderType.Context:
            // TODO - VSO 4029257 - bidi text base direction is incorrect
            return helpers_2.isRtlChar(text[0]) ? 'rtl' : 'ltr'; // first char indicate the text direction
    }
}
/**
 * Split a text run by special chars to multiple text runs.
 * Each special char should be in its own text run.
 *
 * E.g.: A text run which contains 2 words separated by a space and 2 special chars at the end ('!' and '.').
 *          'hello world!.'
 *  index:   0123456789012
 *
 * Will create 5 new runs: [
 *  { StartIndx: 0 }, // 'hello'
 *  { StartIndex: 5 }, // ' '
 *  { StartIndex: 6  }, // 'world'
 *  { StartIndex: 11  }, // '!'
 *  { StartIndex: 12  } // '.'
 * ]
 */
function splitRunBySpecialChars(textRun, runText) {
    var newRuns = [createSubTextRun(textRun, 0)]; // always start with the passed text run
    if (runText.length === 1) {
        // No need to split a single char - return existing newRuns which contains the original run
        return newRuns;
    }
    // Iterate over each char and decide if needs to insert new text runs if it reaches a special char
    var lastSpecialCharIndex = undefined;
    for (var charIndex = 0; charIndex < runText.length; charIndex++) {
        var char = runText[charIndex];
        if (isSpecialBidiChar(char)) {
            // For special bidi chars we typically need to insert a 2 new text runs so that the each special char will be in its own text run of size 1
            // and the next text run will start immediately after it.
            // However, for some corner cases (first/last/previous special) we need to skip insert one of the text runs so we check each time whether to insert or not.
            if (insertRunAtCurrentChar(charIndex, lastSpecialCharIndex)) {
                newRuns.push(createSubTextRun(textRun, charIndex));
            }
            var nextCharIndex = charIndex + 1;
            if (insertRunAtNextChar(nextCharIndex, runText.length)) {
                newRuns.push(createSubTextRun(textRun, nextCharIndex));
            }
            lastSpecialCharIndex = charIndex;
        }
    }
    return newRuns;
}
function insertRunAtCurrentChar(charIndex, lastSpecialCharIndex) {
    var notFirst = charIndex > 0;
    var previousCharSpecial = charIndex - 1 === lastSpecialCharIndex;
    // Need to insert new text run in the following cases:
    // 1. This is not the first char: the fist char has index 0 which matches the original text run StartIndex (all text runs starts at 0)
    // 2. The previous char was not a special char: if it was then the text run for this char index already inserted in previous iteration
    return notFirst && !previousCharSpecial;
}
function insertRunAtNextChar(nextCharIndex, textLength) {
    var isCharIndexInRange = nextCharIndex < textLength;
    // We should not insert a text run for next char next char index if it is not in range of the text length
    // This could happen if the last char is a special char.
    return isCharIndexInRange;
}
/**
 * Helper to create a new text run based on exiting text run starting at passed offset.
 *
 * E.g.: createSubTextRun({ StartIndex: 5, FontID 3 }, 2) ==> { StartIndex: 7, FontID 3 }
 *        (creates a new text run with StartIndex added 2 to the start index 5)
 *
 * @param textRun Original text run used to create the sub text run
 * @param indexInTextRun Index of character in the passed text run
 * @returns A new text run which contains the same font and StartIndex adjusted to passed index
 */
function createSubTextRun(textRun, indexInTextRun) {
    return { FontID: textRun.FontID, StartIndex: textRun.StartIndex + indexInTextRun, CachedFont: textRun.CachedFont };
}
/**
 * Returns true is a char is special Bidi char - which means it may impact re-ordering of Bidi text, false otherwise.
 *
 * @param char Char to check
 */
function isSpecialBidiChar(char) {
    return (char === ' ' ||
        char === '"' ||
        char === "'" ||
        char === '.' ||
        char === '?' ||
        char === ':' ||
        char === ';' ||
        char === '-' ||
        char === ',' ||
        char === '!' ||
        char === '(' ||
        char === ')');
}
/**
 * Reorder the passed text runs array according to the required drawing order (left to right).
 * The ordering will accommodate Bidi layout rules according the the text content and directional sequences.
 *
 * @param textRuns Text runs to re-order
 * @param cellText Cell text content which the text runs point to
 * @param bidiContext Context with text Bidi information
 */
function reorderTextRunsForBidiDrawing(textRuns, cellText, bidiContext) {
    if (bidiContext.HasRtl && !bidiContext.HasLtr) {
        // If the text has only RTL content - only need to reverse the runs instead of using DOM layout (much faster)
        textRuns.reverse();
        return;
    }
    // Prepare DOM structure for layout of the text runs
    var reorderDiv = document.createElement('div');
    reorderDiv.style.visibility = 'hidden';
    reorderDiv.style.direction = bidiContext.BaseDir;
    reorderDiv.style.position = 'absolute';
    for (var runIndex = 0; runIndex < textRuns.length; runIndex++) {
        var runText = helpers_1.getTextRunText(runIndex, textRuns, cellText);
        var runSpan = document.createElement('span');
        runSpan.innerText = runText;
        runSpan.setAttribute(RunIdAttribute, runIndex.toString());
        reorderDiv.appendChild(runSpan);
    }
    document.body.appendChild(reorderDiv);
    for (var i = 0; i < reorderDiv.children.length; i++) {
        var runDom = reorderDiv.children[i];
        var runIndexAttr = runDom.getAttribute(RunIdAttribute);
        if (!runIndexAttr) {
            throw Error('reorderTextRunsForBidiDrawing: runIndexAttr is undefined');
        }
        // First read will cause a re-layout of the DOM in the correct Bidi order so that we can get the sub element offsets
        var runOffsetX = runDom.getBoundingClientRect().left;
        var runIndex = parseInt(runIndexAttr, /* base: */ 10);
        var textRun = textRuns[runIndex];
        textRun.OffsetX = runOffsetX;
    }
    // Sort runs by their offset X so that drawing will happen in correct Bidi order
    textRuns.sort(function (a, b) { return a.OffsetX - b.OffsetX; });
    // Cleanup
    document.body.removeChild(reorderDiv);
}
exports.reorderTextRunsForBidiDrawing = reorderTextRunsForBidiDrawing;
//# sourceMappingURL=richTextFormatBidi.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/shrinkToFit.js":
/*!***************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/shrinkToFit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockRendererGlobals_1 = __webpack_require__(/*! ../gridBlockRendererGlobals */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRendererGlobals.js");
var textLayout_1 = __webpack_require__(/*! ../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var cellLayout_1 = __webpack_require__(/*! ../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var telemetry_1 = __webpack_require__(/*! ../telemetry */ "../../packages/excel-online-grid-renderer/lib/src/telemetry.js");
var helpers_4 = __webpack_require__(/*! ../layout/helpers */ "../../packages/excel-online-grid-renderer/lib/src/layout/helpers.js");
/**
 * Update the cell shrunk font size property with the shrunk font size it calculates
 *
 * @param cell The cell with shrink to fit for which we need to update the shrunk font size
 * @param model the grid view block model
 */
function updateCellShrinkToFit(ctx, model, cell) {
    var _a, _b, _c;
    // Calculate font String without considering ShrinkToFit.
    var fontCssString = helpers_2.getFontCssStringFromFont(cell.CachedFont, /* ShrunkFontSize */ undefined);
    if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.MeasureTextRefactor, model)) {
        ctx.font = fontCssString;
    }
    // We want to avoid caching the not-shrunk width
    var textWidth = helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.MeasureTextRefactor, model)
        ? textLayout_1.getTextWidthNoCaching(ctx, model, cell)
        : gridBlockRendererGlobals_1.GridBlockRendererGlobals.measureTextWidth(cell.Text, fontCssString, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvancedTextMetrics, model));
    var cellWidth = cellLayout_1.getCellWidth(model, cell, /* limitToBlockDimensions */ false);
    var cellIndentation = cell.CachedStyle.Indentation || 0;
    var originalFontSize = cell.CachedFont.Size;
    var padding = 0;
    // 'shouldPadCenterAlignment' is set true since shrinkToFit does not allow spill on center alignment
    padding = textLayout_1.getHorizontalPadding(originalFontSize, cell.CachedStyle.HorizontalAlignment, cell.CachedFont.Italic, cellIndentation, 
    /* shouldPadCenterAlignment */ true, 
    /* iconPadding */ 0);
    // TODO - VSO 4214455: CFIcons: Shrink to fit with CF icons
    var cellHasCFIcon = cell.CondFormat && ((_a = cell.CondFormat) === null || _a === void 0 ? void 0 : _a.Icon) && ((_c = (_b = cell.CondFormat) === null || _b === void 0 ? void 0 : _b.Icon) === null || _c === void 0 ? void 0 : _c.IconOnly);
    var iconSize = cellHasCFIcon ? helpers_4.getIconSize(originalFontSize, 1 /*devicePixelRatio*/) : 0;
    var iconPadding = cellHasCFIcon ? helpers_4.getIconHorizontalPadding(originalFontSize, 1 /*devicePixelRatio*/) : 0;
    var maxTextWidth = helpers_1.getTextDrawingMaxWidth(cellWidth, padding, /*iconPadding*/ 0);
    cell.ShrunkSize = calculateCellShrunkFontSize(textWidth + iconPadding + iconSize, maxTextWidth, originalFontSize, padding);
    if (cell.ShrunkSize < 0) {
        telemetry_1.setActualFontSizeWarning("\n    ShrinkSize was calculated to be negative: " + cell.ShrunkSize + ",\n    textWidth: " + textWidth + ",\n    cellWidth: " + cellWidth + ",\n    cellIndentation " + cellIndentation + ",\n    maxTextWidth: " + maxTextWidth + ",\n    originalFontSize: " + originalFontSize + ",\n    padding: " + padding + "\n    ");
    }
}
exports.updateCellShrinkToFit = updateCellShrinkToFit;
/**
 * Calculates and returns the font size that the cell should have for the text to fit into the cell allowed width
 *
 * @param contentWidth The content (can be text or text with icon) width
 * @param maxTextWidth the width of the entire cell (or merge cell in case of merge cell).
 * @param originalFontSize the font size of the cell
 * @param padding the cell's text padding
 */
function calculateCellShrunkFontSize(contentWidth, maxTextWidth, originalFontSize, padding) {
    if (contentWidth < maxTextWidth) {
        // If the textWidth is smaller than maxTextWidth, the font size shouldn't be shrunk and the originalFontSize is returned
        return originalFontSize;
    }
    // Calculating the shrunk font size by using the ratio between maxTextWidth and the whole text width, including the padding.
    // This ratio will be used to calculate the shrunk font size
    var ratio = maxTextWidth / (contentWidth + padding);
    return originalFontSize * ratio;
}
//# sourceMappingURL=shrinkToFit.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/skeleton.js":
/*!************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/skeleton.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
// Keeping the skeleton small even if the cell is bigger than normal
var MaxSkeletonWidth = 16;
var MaxSkeletonHeight = 8;
/**
 * This method will create a skeleton gray blocks inside the grid.
 * It will be used when user is scrolling and the data of the new block
 * is not cached in the client and did not arrive from the server yet.
 * By creating this skeleton, we prevent the user from thinking his/her data is lost
 * since the grid match the right column width but the data is not there.
 *
 * @param {CanvasRenderingContext2D} ctx the canvas we draw skeleton on
 * @param {GridBlockModel} model the information needed about the cells and the columns & rows positions
 * @param {RenderingContext} context the rendering flags including device pixel ration, etc'
 */
function drawSkeleton(ctx, model, context) {
    helpers_2.verifyArgumentNotNull(ctx, 'ctx', 'drawSkeleton');
    helpers_2.verifyArgumentNotNull(model, 'model', 'drawSkeleton');
    helpers_2.verifyArgumentNotNull(context, 'context', 'drawSkeleton');
    helpers_2.verifyArgumentNotNull(model.RowOffsetsAdjustedForDrawing, 'RowOffsetsAdjustedForDrawing', 'drawSkeleton');
    helpers_2.verifyArgumentNotNull(model.ColOffsetsAdjustedForDrawing, 'ColOffsetsAdjustedForDrawing', 'drawSkeleton');
    helpers_2.verifyArgumentNotNull(model.RowHeights, 'RowHeights', 'drawSkeleton');
    helpers_2.verifyArgumentNotNull(model.ColumnWidths, 'ColumnWidths', 'drawSkeleton');
    if (context.devicePixelRatio < drawingConstants_1.MinimalDprForGridlinesRendering || !model.ShowGridLines) {
        // Not drawing skeleton if no grid lines
        return;
    }
    ctx.fillStyle = drawingConstants_1.SkeletonColor;
    // Find every cell's top left position and draw a skeleton
    for (var row = 0; row < model.RowOffsetsAdjustedForDrawing.length - 1; row++) {
        var yPosition = model.RowOffsetsAdjustedForDrawing[row];
        var rowHeight = helpers_1.getRowHeightFromOffsets(row, model.RowOffsetsAdjustedForDrawing);
        for (var col = 0; col < model.ColOffsetsAdjustedForDrawing.length - 1; col++) {
            var xPosition = helpers_1.getColOffsetsAdjustedForDrawing(col, model);
            var columnWidth = helpers_1.getColWidthFromOffsets(col, model.ColOffsetsAdjustedForDrawing);
            drawSkeletonRect(ctx, xPosition, yPosition, columnWidth, rowHeight);
        }
    }
}
exports.drawSkeleton = drawSkeleton;
/**
 * This function draws the skeleton rect.
 * The x and y position passed to the fillRect are calculated as follows:
 * The xPosition/yPosition is the column / row edge. to that, we add half the width/height
 * which gets us to the middle of the column/cell. now we "back off" half the size
 * of the rect in order to draw it so the rect center and the cell center are aligned.
 *
 * @param {CanvasRenderingContext2D} ctx - used for fillRect call
 * @param xPosition - The edge of the cell on the horizontal axis
 * @param yPosition - The edge of the cell on the vertical axis
 * @param columnWidth - Adjusted width of the column
 * @param cellHeight - Adjusted height of the cell
 */
function drawSkeletonRect(ctx, xPosition, yPosition, columnWidth, rowHeight) {
    var rectWidth = Math.min(columnWidth / 4, MaxSkeletonWidth);
    var rectHeight = Math.min(rowHeight / 4, MaxSkeletonHeight);
    // from xPosiontion/yPosition of cell edge, move half the cell width/height, then back half a rect width/height.
    // This will place the fillRect at the top left corner of the rect we are drawing
    var RectXPosition = xPosition + columnWidth / 2 - rectWidth / 2;
    var RectYPosition = yPosition + rowHeight / 2 - rectHeight / 2;
    ctx.fillRect(RectXPosition, RectYPosition, rectWidth, rectHeight);
}
//# sourceMappingURL=skeleton.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/spillCells.js":
/*!**************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/spillCells.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var fillText_1 = __webpack_require__(/*! ./fillText */ "../../packages/excel-online-grid-renderer/lib/src/drawing/fillText.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var textLayout_1 = __webpack_require__(/*! ../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var cellLayout_1 = __webpack_require__(/*! ../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
/**
 * Draws the spill cell text and clip to cell width & height according to alignment and spill cell information.
 *
 * @param  {CanvasRenderingContext2D} ctx
 * @param  {RenderingContext} context the rendering context.
 * @param  {GridBlockModel} model
 * @param  {Cell} cell
 * @param  {string} text the display text of the cell
 * @param  {number} textOffsetX the start x-offset of the text according to horizontal alignment and indentation
 * @param  {number} textOffsetY the start y-offset of the text according to vertical alignment
 * @param  {number} clipOffsetY the row start y-offset for clipping the text
 * @param  {number} clipHeight the row height for clipping the text
 * @param  {number} dpr The device pixel ratio
 * @param isHorizontalAlignmentFill if HorizontalAlignment of the cell is fill
 * @param  {number} formattedText Formatted text
 * @returns void
 */
function drawSpillCellText(ctx, context, model, cell, text, textOffsetX, textOffsetY, clipOffsetY, clipHeight, isHorizontalAlignmentFill, formattedText) {
    var _a;
    helpers_2.verifyArgumentNotNull(cell.Spill, 'cell.Spill', 'spillCells.drawSpillCellText');
    var cellWidth = cellLayout_1.getSpillCellWidth(cell, model);
    var isCenterAcrossSelection = helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentFillAndCAS, model) &&
        ((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.HorizontalAlignment) === gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection;
    var shouldClip = cell.Spill.IsSpillBlocked || formattedText || isCenterAcrossSelection;
    if (shouldClip) {
        // clip the text according to maxWidth parameter instead of horizontal shrink the text with maxWidth size
        // when we clip we do not pass the maxWidth parameter to fillText to avoid wrong horizontal shrink of the text
        var clipMaskWidth = helpers_1.getContainerClipMaskWidth(cellWidth);
        var clipOffsetX = cellLayout_1.getSpillCellStartOffset(cell, model);
        var clipRectInfo = {
            x: clipOffsetX,
            y: clipOffsetY,
            width: clipMaskWidth,
            height: clipHeight
        };
        fillText_1.fillTextClipped(ctx, context, text, textOffsetX, textOffsetY, clipRectInfo, cell, model, isHorizontalAlignmentFill, formattedText);
    }
    else {
        // when there is no clipping we set a max width to avoid spilling unintentionally
        var maxTextWidth = helpers_1.getTextDrawingMaxWidth(cellWidth, textLayout_1.getCellTextHorizontalPadding(cell, model), textLayout_1.getTextIconPadding(model, cell));
        fillText_1.fillTextUnclipped(ctx, text, textOffsetX, textOffsetY, maxTextWidth, cell, model, context.devicePixelRatio);
    }
}
exports.drawSpillCellText = drawSpillCellText;
//# sourceMappingURL=spillCells.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/text.js":
/*!********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/text.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var fillText_1 = __webpack_require__(/*! ./fillText */ "../../packages/excel-online-grid-renderer/lib/src/drawing/fillText.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var spillCells_1 = __webpack_require__(/*! ./spillCells */ "../../packages/excel-online-grid-renderer/lib/src/drawing/spillCells.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var wrapText_1 = __webpack_require__(/*! ./wrapText/wrapText */ "../../packages/excel-online-grid-renderer/lib/src/drawing/wrapText/wrapText.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var textLayout_1 = __webpack_require__(/*! ../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var cellLayout_1 = __webpack_require__(/*! ../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var numberFormatting_1 = __webpack_require__(/*! ./numberFormatting */ "../../packages/excel-online-grid-renderer/lib/src/drawing/numberFormatting.js");
var helpers_4 = __webpack_require__(/*! ./horizontalAlignment/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/helpers.js");
var fill_1 = __webpack_require__(/*! ./horizontalAlignment/fill */ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/fill.js");
/**
 * Draw all the text cells
 *
 * @param ctx CanvasRenderingContext2D the context to access the canvas with
 * @param model the grid block model
 * @param context the rendering flags including high contrast indication, device pixel ration, etc'
 */
function drawCellsText(ctx, model, context) {
    var _a, _b, _c;
    helpers_2.verifyArgumentNotNull(ctx, 'ctx', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(model, 'model', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(context, 'context', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(model.RowOffsets, 'model.RowOffsets', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(model.ColumnOffsets, 'model.ColumnOffsets', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(model.RowHeights, 'model.RowHeights', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(model.ColumnWidths, 'model.ColumnWidths', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(model.Cells, 'model.Cells', 'drawCellsText');
    helpers_2.verifyArgumentNotNull(model.Styles, 'model.Styles', 'drawCellsText');
    var cells = model.Cells;
    var blockWidth = model.BlockWidth;
    var mergeAcrossRowsCells = [];
    var lastContextState = initializeContext(ctx, context.highContrastScheme, model);
    var clipRect = undefined;
    //#region draw cells that span single row
    var currentRow = -1;
    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        if (!cell || !cell.Text) {
            continue;
        }
        // If the cell isn't in the current rendering region skip it
        if (!helpers_1.cellIntersectsRenderingRegion(cell, context.renderingRegion)) {
            continue;
        }
        // If the cell has conditional formatting icon only don't render the cell's text
        if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.CFIcons, model) &&
            cell.CondFormat && ((_a = cell.CondFormat) === null || _a === void 0 ? void 0 : _a.Icon) && ((_c = (_b = cell.CondFormat) === null || _b === void 0 ? void 0 : _b.Icon) === null || _c === void 0 ? void 0 : _c.IconOnly)) {
            continue;
        }
        var rowHeight = model.RowHeights[cell.Row] - drawingConstants_1.GridLineWidthPx;
        var rowTopOffset = model.RowOffsets[cell.Row];
        // Handle row clipping in case this is a new row relative to previous cell
        // (clipping is necessary to prevent vertical text spilling if text is too tall or row is too short)
        if (cell.Row !== currentRow) {
            if (currentRow !== -1) {
                // If this is not the first row it means the previous state was saved before clipping.
                // It should be restored to allow clipping of next row.
                lastContextState = restoreContext(context.highContrastScheme, model.IsRtl, ctx, clipRect);
            }
            clipRect = { x: 0, y: rowTopOffset, width: blockWidth, height: rowHeight };
            helpers_1.applyClipping(ctx, clipRect);
            currentRow = cell.Row;
        }
        // If a cell spans multiple rows or multiple blocks we want to draw it in a separate pass to since row clipping would trim it incorrectly
        if (cellLayout_1.isCellSpansMultipleRowsOrBlocks(cell)) {
            // We need to draw merge cells that spans multiple lines in a different pass due to the clipping mask
            mergeAcrossRowsCells.push(cell);
        }
        else {
            drawSingleCellText(ctx, context, model, cell, lastContextState, rowTopOffset, rowHeight);
        }
    }
    // Restore the state back to where it was before clipping rows
    helpers_1.restoreClipping(ctx, clipRect);
    lastContextState = getDefaultContextState(context.highContrastScheme, model.IsRtl);
    //#endregion
    //#region draw cells that span multiple rows
    for (var i = 0; i < mergeAcrossRowsCells.length; i++) {
        var cell = mergeAcrossRowsCells[i];
        var cellHeight = cellLayout_1.getCellHeight(model, cell, /* limitToBlockDimensions */ false) - drawingConstants_1.GridLineWidthPx;
        var cellTopOffset = cellLayout_1.getCellTop(model, cell);
        drawSingleCellText(ctx, context, model, cell, lastContextState, cellTopOffset, cellHeight);
    }
    //#endregion
}
exports.drawCellsText = drawCellsText;
/**
 * Draws the cell text at passed offset
 *
 * @param  {CanvasRenderingContext2D} ctx the canvas context
 * @param  {RenderingContext} context the rendering context
 * @param  {GridBlockModel} model the model
 * @param  {Cell} cell the cell
 * @param  {CanvasContextState} lastContextState the latest canvas context properties
 * @param  {ColorScheme} highContrastScheme the high contrast color scheme
 * @param  {number} dpr the device pixel ratio
 * @param  {number} cellTopOffset the y-offset of the top of the cell
 * @param  {number} cellHeight to height of the row containing this cell
 * @returns void
 */
function drawSingleCellText(ctx, context, model, cell, lastContextState, cellTopOffset, cellHeight) {
    var offsetX = getTextHorizontalPosition(model, cell);
    var offsetY = textLayout_1.getTextVerticalPosition(cell, model, textLayout_1.getTextLineHeight(cell, model), cellHeight, undefined /* textAlphabeticalBaseline */);
    updateContextForCurrentCell(ctx, lastContextState, cell, model, context.highContrastScheme);
    var cellWidth = cellLayout_1.getCellWidth(model, cell, /* limitToBlockDimensions */ false);
    var CFIconPadding = textLayout_1.getTextIconPadding(model, cell);
    var maxTextWidth = helpers_1.getTextDrawingMaxWidth(cellWidth, textLayout_1.getCellTextHorizontalPaddingWithoutIcons(model, cell), CFIconPadding);
    //#region Update CachedDisplayText
    // We update the CachedDisplayText from text for number formatting and
    // horizontal alignment fill. The calculation depends on measureText which inturn
    // depends on setting the correct font in canvas context.
    // It is done here to avoid setting the canvas.font multiple times.
    if (helpers_3.doesNumFmtOverrideText(cell, model)) {
        var numberFormattingMaxWidth = maxTextWidth;
        numberFormatting_1.updateNumberFormattingInformation(ctx, model, cell, numberFormattingMaxWidth);
    }
    var isHorizontalAlignmentFillPresent = fill_1.isHorizontalAlignmentFillInCell(model, cell);
    if (fill_1.isHorizontalAlignmentFillInCell(model, cell)) {
        fill_1.updateCachedDisplayTextForFill(ctx, model, cell);
    }
    //#endregion
    var displayText = helpers_2.getDisplayText(cell, model);
    var formattedText = helpers_2.getFormattedText(displayText, cell, model);
    if (cell.WrapText && shouldRenderNumericCellAsWrap(model, cell) && !isHorizontalAlignmentFillPresent) {
        // if the text is expected to be wrapped we need to wrap it across the maximum allowed cell width
        var cellLeft = cellLayout_1.getCellLeft(model, cell, model.BlockWidth);
        var cellClipWidth = helpers_1.getContainerClipMaskWidth(cellWidth);
        // If merge cell spans multiple rows or blocks we should clip since we have no other clipping mask
        var forceClipping = cellLayout_1.isCellSpansMultipleRowsOrBlocks(cell);
        wrapText_1.drawWrapText(ctx, context, model, cell, displayText, offsetX, maxTextWidth, cellLeft, cellClipWidth, cellTopOffset, cellHeight, forceClipping, textLayout_1.getTextLineHeight(cell, model), formattedText);
    }
    else if (cell.Merge) {
        fillMergeCellText(ctx, context, model, cell, formattedText, displayText, cellWidth, offsetX, offsetY, maxTextWidth);
    }
    else if (cell.Spill) {
        // Spill cells require special treatment when drawing the text
        // if the spill cell is spanned across a non empty cell we need
        // to fill text without a max width and clip the text to the cell
        // size to prevent unintended spill over non empty cell.
        spillCells_1.drawSpillCellText(ctx, context, model, cell, displayText, offsetX, offsetY, cellTopOffset, cellHeight, isHorizontalAlignmentFillPresent, formattedText);
    }
    else if (formattedText ||
        isHorizontalAlignmentFillPresent ||
        helpers_4.isHorizontalAlignmentCenteredAcrossSelection(model, cell)) {
        // This cell has Rich Text Format content or needs to be clipped because of the Horizontal Alignment.
        var clipRect = {
            x: cellLayout_1.getCellLeft(model, cell, model.BlockWidth),
            y: cellLayout_1.getCellTop(model, cell),
            width: helpers_1.getContainerClipMaskWidth(cellWidth),
            height: cellHeight
        };
        fillText_1.fillTextClipped(ctx, context, displayText, offsetX, offsetY, clipRect, cell, model, isHorizontalAlignmentFillPresent, formattedText);
    }
    else {
        // maxWidth prevents incorrect spill text go beyond cell column width boundaries.
        // This can happen due to the letter spacing used by Canvas2D.fillText which is inconsistent with the letter spacing used to calculate spill text flag in ECS.
        // On some edge cases the accumulated letter spacing may be bigger than the expected text length so passing maxWidth adjust the letter spacing
        // to ensure the cell content will fit in a non-spilled cell width.
        // The assumption is that this adjustment is minimal so only letter spacing will be affected. If it is too much - the letters width will be reduced and produce distorted text.
        fillText_1.fillTextUnclipped(ctx, displayText, offsetX, offsetY, maxTextWidth, cell, model, context.devicePixelRatio);
    }
}
/**
 * For merge cells that are we need to set a clipping mask if the text is wider than the cell
 */
function fillMergeCellText(ctx, context, model, cell, formattedText, displayText, cellWidth, offsetX, offsetY, maxTextWidth) {
    // We should clip the cell in the following cases:
    // 1. Cell spans more than one row - in that case we don't have clip per row when drawing the cell and we need to clip for the height
    // 2. Cell has RTF - for RTF we always clip
    // 3. Text is wider than the cell width
    var shouldClip = cell.Merge.Rows > 0 || formattedText || textLayout_1.getTextWidth(ctx, model, cell) >= maxTextWidth;
    if (shouldClip) {
        var clipRectInfo = {
            x: cellLayout_1.getCellLeft(model, cell, model.BlockWidth),
            y: cellLayout_1.getCellTop(model, cell),
            width: helpers_1.getContainerClipMaskWidth(cellWidth),
            height: cellLayout_1.getCellHeight(model, cell, /* limitToBlockDimensions */ false)
        };
        fillText_1.fillTextClipped(ctx, context, displayText, offsetX, offsetY, clipRectInfo, cell, model, fill_1.isHorizontalAlignmentFillInCell(model, cell), formattedText);
    }
    else {
        fillText_1.fillTextUnclipped(ctx, displayText, offsetX, offsetY, maxTextWidth, cell, model, context.devicePixelRatio);
    }
}
/**
 * Returns the text horizontal positioning
 */
function getTextHorizontalPosition(model, cell) {
    var alignment = helpers_4.getEffectiveHorizontalAlignment(model, cell);
    var padding = textLayout_1.getCellTextHorizontalPadding(cell, model);
    switch (alignment) {
        case gridBlockModelDto_1.HorizontalAlignment.Right:
            return cellLayout_1.getCellRight(model, cell, model.BlockWidth) - padding;
        case gridBlockModelDto_1.HorizontalAlignment.Center:
            return textLayout_1.getCellTextCenterX(model, cell);
        case gridBlockModelDto_1.HorizontalAlignment.Automatic:
        // cells with text shouldn't have automatic horizontal alignment since horizontalAlignment represents the displayed horizontalAlignment and should always be set.
        // if the cell contains horizontal alignment as Automatic - we should default to Left.
        case gridBlockModelDto_1.HorizontalAlignment.Left:
            return cellLayout_1.getCellLeft(model, cell, model.BlockWidth) + padding;
        case gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection:
            if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentFillAndCAS, model)) {
                return textLayout_1.getTextCenterForCenterAcrossSelection(model, cell);
            }
            // default to normal center.
            return textLayout_1.getCellTextCenterX(model, cell);
        default:
            throw Error("getTextHorizontalPosition: unsupported horizontalAlignment: " + alignment);
    }
}
/**
 * Returns the direction of the canvas
 *
 * @param isRtl true if the direction is RTL, false otherwise
 */
function getCanvasDirection(isRtl) {
    return isRtl ? 'rtl' : 'ltr';
}
/**
 * Returns true if the cell is RTL based on the grid direction and the cell direction.
 *
 * @param readingOrder the cell's reading order
 * @param modelIsRtl true if the entire grid is RTL
 */
function getCellDirection(readingOrder, modelIsRtl) {
    switch (readingOrder) {
        case gridBlockModelDto_1.ReadingOrderType.RightToLeft:
            return 'rtl';
        case gridBlockModelDto_1.ReadingOrderType.LeftToRight:
            return 'ltr';
        case gridBlockModelDto_1.ReadingOrderType.Context:
            return getCanvasDirection(modelIsRtl);
        default:
            throw Error("getCanvasDirection: unsupported readingOrder: " + readingOrder);
    }
}
/**
 * Sets the passed Canvas2D context passed and update `lastContextState` accordingly
 *
 * @param ctx CanvasRenderingContext2D the context to access the canvas with
 * @param lastContextState contains properties that are used to edit the ctx
 * @param cell Cell to render
 * @param model the grid block model
 * @param highContrastScheme Contains color properties for high contrast state: background color, link color and text color
 */
function updateContextForCurrentCell(ctx, lastContextState, cell, model, highContrastScheme) {
    // #region update textAlign
    var textAlign = helpers_4.getTextAlignment(model, cell);
    if (lastContextState.textAlign !== textAlign) {
        lastContextState.textAlign = textAlign;
        ctx.textAlign = textAlign;
    }
    // #endregion
    // #region update textBaseline
    var verticalAlignment = cell.CachedStyle.VerticalAlignment;
    var cellTextBaseline = textLayout_1.getTextBaseline(verticalAlignment, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.TextBaselineRefactor, model));
    if (cellTextBaseline !== lastContextState.textBaseline) {
        ctx.textBaseline = cellTextBaseline;
        lastContextState.textBaseline = cellTextBaseline;
    }
    // #endregion
    // #region update fontProperties
    // Check cell font style and update ctx.font only if its different then current ctx.font.
    // In case of new row: ctx.font needs to be redefine.
    // Because ctx.restore() changes the context back to where it was before drawing cells text started.
    // Above lastCellFontProperties sets to empty string in every new row - so it will be updated here.
    var cellFontProperties = helpers_2.getFontCssStringFromCell(cell);
    if (lastContextState.fontProperties !== cellFontProperties) {
        lastContextState.fontProperties = cellFontProperties;
        ctx.font = cellFontProperties;
    }
    // #endregion
    // #region update fontColor
    // Check cell font color and update ctx.fillStyle only if its different then current ctx.fillStyle.
    // Above lastCellFontColor sets to empty str`ing in every new row - so it will be updated here.
    var cellFontColor = getCellFontColor(model, cell, highContrastScheme);
    if (lastContextState.fontColor !== cellFontColor) {
        lastContextState.fontColor = cellFontColor;
        ctx.fillStyle = cellFontColor;
    }
    // #endregion
    // #region update direction
    var textDirection = getCellDirection(cell.CachedStyle.ReadingOrder, model.IsRtl);
    if (textDirection !== lastContextState.direction) {
        lastContextState.direction = textDirection;
        ctx.direction = textDirection;
    }
    // #endregion
}
/**
 * Initialize the context before drawing any text cells
 *
 * @param ctx CanvasRenderingContext2D the context to access the canvas with
 * @param highContrastScheme Contains color properties for high contrast state: background color, link color and text color
 * @param model The grid block model
 * @returns - The default context state
 */
function initializeContext(ctx, highContrastScheme, model) {
    var defaultContextState = getDefaultContextState(highContrastScheme, model.IsRtl);
    ctx.direction = defaultContextState.direction;
    ctx.fillStyle = defaultContextState.fontColor;
    ctx.textBaseline = 'bottom';
    // stroke style is used for row clipping of text.
    // it needs to be transparent so that the clipping rect wouldn't be visible
    ctx.strokeStyle = 'transparent';
    // Underline - Setting the line to be solid
    setSolidLine(ctx);
    return defaultContextState;
}
/**
 * Sets the line of the canvas to be solid
 *
 * @param ctx The canvas context instance
 */
function setSolidLine(ctx) {
    if (ctx.getLineDash() !== []) {
        ctx.setLineDash([]);
    }
}
/**
 * Restore canvas context to a single cell in a row
 *
 * @param highContrastScheme Contains color properties for high contrast state: background color, link color and text color
 * @param isRtl true if the direction is RTL, false otherwise
 * @param ctx CanvasRenderingContext2D the context to access the canvas with
 * @param clipRect the clipping rect applied on the canvas context
 * @returns - The default context state
 */
function restoreContext(highContrastScheme, isRtl, ctx, clipRect) {
    // If this is not the first row it means the previous state was saved before clipping.
    // It should be restored to allow clipping of next row.
    helpers_1.restoreClipping(ctx, clipRect);
    // In case of new row, after ctx.restore() we need to redefine ctx.fillstyle, ctx.textBaseline, ctx.font
    var defaultContextState = getDefaultContextState(highContrastScheme, isRtl);
    return defaultContextState;
}
/**
 * Creates and returns a default CanvasContextState.
 *
 * @param highContrastScheme Contains color properties for high contrast state: background color, link color and text color
 * @param isRtl true if the direction is RTL, false otherwise
 * @returns - The default context state
 */
function getDefaultContextState(highContrastScheme, isRtl) {
    return {
        fontColor: highContrastScheme ? helpers_1.rgbToColorHex(highContrastScheme.TextColor) : drawingConstants_1.DefaultCellFontColor,
        fontProperties: '',
        direction: getCanvasDirection(isRtl),
        textBaseline: 'bottom',
        textAlign: 'start'
    };
}
/**
 * Returns the font color of the cell, if the cell has formula error we always render text as black
 *
 * @param model the gridBlockModel
 * @param cell the cell
 * @param highContrastScheme The highContrastScheme.
 */
function getCellFontColor(model, cell, highContrastScheme) {
    var _a;
    // #region HighContrast fontColor
    if (highContrastScheme) {
        return helpers_1.getHighContrastTextColor(model, cell, highContrastScheme);
    }
    // #endregion
    if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.HasErrorRefactoring, model)) {
        if (cell.HasError) {
            return drawingConstants_1.FormulaErrorFontColor;
        }
    }
    else if ((_a = cell.FormulaInfo) === null || _a === void 0 ? void 0 : _a.HasError) {
        return drawingConstants_1.FormulaErrorFontColor;
    }
    return cell.CachedFont.Color;
}
function shouldRenderNumericCellAsWrap(model, cell) {
    if (helpers_4.isHorizontalAlignmentJustifiedAndDistributed(model, cell)) {
        return !(cell.CachedIsTextWidthExceedsCellWidth && cell.ValueType === gridBlockModelDto_1.CellValueType.Number);
    }
    return !(helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAndWrapText, model) && cell.ValueType === gridBlockModelDto_1.CellValueType.Number);
}
//# sourceMappingURL=text.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/textDecoration.js":
/*!******************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/textDecoration.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Text Decoration (Underline & Strikethrough)
 * This module contains all the methods and utilities for drawing text decoration
 */
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var textLayout_1 = __webpack_require__(/*! ../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var cellLayout_1 = __webpack_require__(/*! ../layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var helpers_4 = __webpack_require__(/*! ../layout/helpers */ "../../packages/excel-online-grid-renderer/lib/src/layout/helpers.js");
var helpers_5 = __webpack_require__(/*! ./horizontalAlignment/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/helpers.js");
/**
 * Measuring text width and caching text decoration layout
 *
 * @param ctx Canvas 2d context
 * @param model The grid block model
 * @param cell  The cell
 * @param textDecorationContext The text decoration context
 */
function measureAndCacheTextDecorationLayout(ctx, model, cell, textDecorationContext) {
    var isUnderlineExists = cell.CachedFont.Underline;
    var isStrikethroughExists = cell.CachedFont.StrikeThrough;
    if ((isUnderlineExists || isStrikethroughExists) && cell.CachedDisplayText !== '') {
        textDecorationContext.textWidth = textLayout_1.getTextWidth(ctx, model, cell);
        cacheTextDecorationLayout(model, cell, textDecorationContext, cell.CachedFont);
    }
}
exports.measureAndCacheTextDecorationLayout = measureAndCacheTextDecorationLayout;
/**
 * Calculates the line positions and caches it, for later drawing of the underline.
 * In order to draw text decoration, we need to be at a scale of 1.
 * While rendering text, we are at the scale of the device pixel ratio.
 * In this method we cache all the information that is calculated while we draw the text in order to use it
 * and render the text decoration afterwards.
 *
 * @param model The grid block model
 * @param cell  The cell
 * @param textDecorationContext The text decoration context
 * @param font - The font size
 * @param richTextLineWidth (optional) - For a sequence of rich text runs with underline, we override the line width to be consistent with all the other runs
 */
function cacheTextDecorationLayout(model, cell, textDecorationContext, font, richTextLineWidth) {
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'CacheUnderlineLayout');
    helpers_1.verifyArgumentNotNull(cell.CachedFont, 'cell.CachedFont', 'CacheUnderlineLayout');
    helpers_1.verifyArgumentNotNull(cell.CachedStyle, 'cell.CachedStyle', 'CacheUnderlineLayout');
    helpers_1.verifyArgumentNotNull(cell.CachedDrawingLayout, 'cell.CachedDrawingLayout', 'CacheUnderlineLayout');
    // Underline - We first calculate and cache the main underline. (For double underline - The lower one)
    // Afterwards, we check if this is a double underline, and we calculate and cache the second one. (The upper one - that is closer to the text)
    if (font.Underline !== gridBlockModelDto_1.FontUnderline.None) {
        var textDecorationType = { underline: font.Underline };
        var underlineLayout = calculateTextDecorationLineLayout(model, cell, textDecorationContext, textDecorationType, font, false /* isSecondLine */, richTextLineWidth);
        var underlineLayoutArray = cell.CachedDrawingLayout.UnderlineRuns;
        // Caching main line
        if (underlineLayout) {
            underlineLayoutArray.push(underlineLayout);
        }
        // Caching the double underline if exists
        if (isDoubleUnderline(textDecorationType)) {
            // We treat the second (The one that is closer to the text) line as a single (accounting/non-accounting respectively) underline
            var doubleUnderlineType = {
                underline: textDecorationType.underline === gridBlockModelDto_1.FontUnderline.DoubleAccounting
                    ? gridBlockModelDto_1.FontUnderline.SingleAccounting
                    : gridBlockModelDto_1.FontUnderline.Single
            };
            var doubleUnderline = calculateTextDecorationLineLayout(model, cell, textDecorationContext, doubleUnderlineType, font, true /* isSecondLine */, richTextLineWidth);
            if (doubleUnderline) {
                underlineLayoutArray.push(doubleUnderline);
            }
        }
    }
    // Strikethrough (not valid in rich text formatting)
    if (font.StrikeThrough) {
        var strikethroughType = { strikethrough: true };
        var strikethroughLayout = calculateTextDecorationLineLayout(model, cell, textDecorationContext, strikethroughType, font, false /* isSecondLine */, undefined /* richTextLineWidth */);
        if (strikethroughLayout) {
            // Caching the layout
            var strikethroughLayoutArray = cell.CachedDrawingLayout.StrikethroughRuns;
            strikethroughLayoutArray.push(strikethroughLayout);
        }
    }
}
exports.cacheTextDecorationLayout = cacheTextDecorationLayout;
/**
 * Iterate over the cells and draw text decoration. (Underline & strikethrough)
 *
 * @param model The grid block model
 * @param ctx The canvas context
 * @param context The rendering context
 */
function drawTextDecoration(ctx, model, context) {
    var _a, _b, _c;
    helpers_1.verifyArgumentNotNull(model.Cells, 'model.cells', 'drawTextDecoration');
    // We start the path here, and we buffer the lines until we notice a style change, then we stroke all buffered lines
    ctx.beginPath();
    var lastUsedColor;
    var lastLineWidth;
    for (var i = 0; i < model.Cells.length; i++) {
        var cell = model.Cells[i];
        var highContrastTextColor = context.highContrastScheme
            ? helpers_2.getHighContrastTextColor(model, cell, context.highContrastScheme)
            : undefined;
        // If the cell isn't in the current rendering region skip it
        if (!helpers_2.cellIntersectsRenderingRegion(cell, context.renderingRegion)) {
            continue;
        }
        // We want to avoid drawing for cells with no text decoration
        helpers_1.verifyArgumentNotNull(cell.CachedFont, 'cell.CachedFont', 'drawTextDecoration');
        if (!cell.CachedFont.StrikeThrough && !cell.CachedFont.Underline && !cell.TextRuns) {
            continue;
        }
        // If the cell has conditional formatting icon only don't render the text decoration
        if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.CFIcons, model) &&
            cell.CondFormat && ((_a = cell.CondFormat) === null || _a === void 0 ? void 0 : _a.Icon) && ((_c = (_b = cell.CondFormat) === null || _b === void 0 ? void 0 : _b.Icon) === null || _c === void 0 ? void 0 : _c.IconOnly)) {
            continue;
        }
        helpers_1.verifyArgumentNotNull(cell.CachedDrawingLayout, 'cell.CachedDrawingLayout', 'drawTextDecoration');
        var cachedUnderlineRuns = cell.CachedDrawingLayout.UnderlineRuns;
        var cachedStrikethroughRuns = cell.CachedDrawingLayout.StrikethroughRuns;
        // Iterating over both arrays and drawing the lines
        for (var _i = 0, _d = [cachedUnderlineRuns, cachedStrikethroughRuns]; _i < _d.length; _i++) {
            var runs = _d[_i];
            if (runs && runs.length > 0) {
                // Defining the style for the first run
                if (!lastUsedColor || !lastLineWidth) {
                    var firstRun = runs[0];
                    var color = (highContrastTextColor !== null && highContrastTextColor !== void 0 ? highContrastTextColor : firstRun.Color);
                    lastUsedColor = color;
                    lastLineWidth = firstRun.LineWidth;
                    ctx.strokeStyle = color;
                    ctx.lineWidth = firstRun.LineWidth;
                }
                // Iterating over all the runs and drawing the line.
                for (var j = 0; j < runs.length; j++) {
                    var runLayout = runs[j];
                    var color = (highContrastTextColor !== null && highContrastTextColor !== void 0 ? highContrastTextColor : runLayout.Color);
                    var colorHasChanged = lastUsedColor !== color;
                    var lineWidthHasChanged = lastLineWidth !== runLayout.LineWidth;
                    if (colorHasChanged || lineWidthHasChanged) {
                        // If color or line width are changed, we stroke the buffered lines before changing the style/width.
                        lastUsedColor = color;
                        lastLineWidth = runLayout.LineWidth;
                        ctx.stroke();
                        ctx.strokeStyle = color;
                        ctx.lineWidth = runLayout.LineWidth;
                        ctx.beginPath();
                    }
                    drawLine(ctx, runLayout);
                }
            }
        }
    }
    // Stroking all lines that were buffered in the iterations above
    ctx.stroke();
}
exports.drawTextDecoration = drawTextDecoration;
/**
 * Calculates the positions of underline/strikethrough, and caches it for future drawing
 * @param model The grid block model
 * @param cell  The cell
 * @param textDecorationContext The text decoration context
 * @param textDecorationType Type of the text decoration instance
 * @param font The font of the cell
 * @param isSecondLine Is this the second line of the double underline
 * @param richTextLineWidth (optional) - For a sequence of rich text runs with underline, we override the line width to be consistent with all the other runs
 *
 * @returns {TextDecorationLineLayout | undefined} The layout to be cached, or undefined if the line is outside of the clipping rect.
 */
function calculateTextDecorationLineLayout(model, cell, textDecorationContext, textDecorationType, font, isSecondLine, richTextLineWidth) {
    var dpr = textDecorationContext.dpr, clipRect = textDecorationContext.clipRect;
    // TODO: 3884013  RTF - support shrink to fit
    var fontSize = cell.TextRuns ? font.Size : helpers_1.getActualFontSize(cell);
    var linePosition = calculateLinePosition(model, cell, textDecorationContext, textDecorationType, fontSize, font, richTextLineWidth);
    var lineStartX = linePosition.startX;
    var lineEndX = linePosition.endX;
    var lineY = linePosition.Y;
    var lineWidth = getLineWidth(dpr, fontSize, richTextLineWidth);
    var doubleUnderlineMarginFromBaseline = Math.round(drawingConstants_1.UnderlineMarginFromTextBaseline * lineWidth);
    if (isDoubleUnderline(textDecorationType)) {
        // Positioning the current line
        lineY += doubleUnderlineMarginFromBaseline;
    }
    // Positioning the second line (Double underline)
    // We first position the line as same as the first line by adding doubleUnderlineMarginFromBaseline,
    // and then subtracting marginBetweenLines to position it on top with the correct margin.
    if (isSecondLine) {
        var marginBetweenLines = 2 * lineWidth;
        lineY = lineY - marginBetweenLines + doubleUnderlineMarginFromBaseline;
    }
    // If the whole line is out of the cell boundaries, we don't need to cache or draw it!
    // If this is a double underline, the second line might still be visible so we return an empty line object with the second line
    if (isLineOutOfCellBoundaries(model, cell, textDecorationContext, lineWidth, lineY, lineStartX, lineEndX)) {
        return undefined;
    }
    // Horizontal Line clipping
    if (clipRect) {
        var boundaryA = Math.round(clipRect.x * dpr);
        var boundaryB = Math.round(clipRect.width * dpr) + boundaryA;
        var horizontalClippedLine = clipLine(lineStartX, lineEndX, boundaryA, boundaryB);
        lineStartX = horizontalClippedLine.start;
        lineEndX = horizontalClippedLine.end;
    }
    // Vertical Line clipping
    if (isVerticalClippingNeeded(model, cell, lineWidth, lineY)) {
        var boundaryA = cellLayout_1.getCellTopAdjustedForDrawing(model, cell);
        var boundaryB = cellLayout_1.getCellBottomAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx; // We don't want to override the bottom grid line
        var lineEndY = lineY + lineWidth;
        var verticalClippedLine = clipLine(lineY, lineEndY, boundaryA, boundaryB);
        lineY = verticalClippedLine.start;
        lineWidth = verticalClippedLine.end - lineY;
    }
    // Returning the result as a TextDecorationLayout object
    return {
        StartX: lineStartX,
        EndX: lineEndX,
        Y: lineY,
        LineWidth: lineWidth,
        Color: font.Color
    };
}
function getLineWidth(dpr, fontSize, richTextLineWidth) {
    var translatedLineWidthUnrounded = ((richTextLineWidth !== null && richTextLineWidth !== void 0 ? richTextLineWidth : textLayout_1.getTextDecorationLineWidth(fontSize))) * dpr;
    return Math.max(Math.floor(translatedLineWidthUnrounded), 1);
}
function isDoubleUnderline(textDecorationType) {
    return (textDecorationType.underline === gridBlockModelDto_1.FontUnderline.Double ||
        textDecorationType.underline === gridBlockModelDto_1.FontUnderline.DoubleAccounting);
}
/**
 * Returns true if the whole line is outside of the cell vertical/horizontal boundaries
 *
 * @param model The grid block model
 * @param cell  The cell
 * @param textDecorationContext The text decoration context
 * @param lineWidth The width (thickness) of the line
 * @param lineStartY Y coordinate where the line should start
 * @param lineStartX X coordinate where the line should start
 * @param lineEndX X coordinate where the line should end
 */
function isLineOutOfCellBoundaries(model, cell, textDecorationContext, lineWidth, lineStartY, lineStartX, lineEndX) {
    var dpr = textDecorationContext.dpr, clipRect = textDecorationContext.clipRect;
    var lineEndY = lineStartY + lineWidth;
    var cellTop = cellLayout_1.getCellTopAdjustedForDrawing(model, cell);
    var cellBottom = cellLayout_1.getCellBottomAdjustedForDrawing(model, cell);
    var cellRight = clipRect ? (clipRect.x + clipRect.width) * dpr : 0;
    var cellLeft = clipRect ? clipRect.x * dpr : 0;
    var isLineAfterRight = false;
    var isLineBeforeLeft = false;
    lineStartY <= cellTop && lineEndY <= cellTop;
    var isLineOverTop = lineStartY <= cellTop && lineEndY <= cellTop;
    var isLineBeneathBottom = lineStartY >= cellBottom && lineEndY >= cellBottom;
    if (clipRect) {
        isLineBeforeLeft = lineStartX <= cellLeft && lineEndX <= cellLeft;
        isLineAfterRight = lineStartX >= cellRight && lineEndX >= cellRight;
    }
    return isLineOverTop || isLineBeneathBottom || isLineAfterRight || isLineBeforeLeft;
}
/**
 * Returns true if the one of the line Y positions is out of the cell boundaries, which means, that vertical
 * clipping is needed.
 *
 * @param model The grid block model
 * @param cell  The cell
 * @param lineWidth The width (thickness) of the line
 * @param lineStartY Y coordinate where the line should start
 */
function isVerticalClippingNeeded(model, cell, lineWidth, lineStartY) {
    var lineEndY = lineStartY + lineWidth;
    // We need to take into account the grid line width, that half of it, is inside the cell boundaries.
    // This is done in order to avoid text decoration that overrides the grid lines (for lines thicker than 1px)
    var topYBoundaryWithGridLine = cellLayout_1.getCellTopAdjustedForDrawing(model, cell) + drawingConstants_1.GridLineWidthPx;
    var bottomYBoundaryWithGridLine = cellLayout_1.getCellBottomAdjustedForDrawing(model, cell) - drawingConstants_1.GridLineWidthPx;
    return lineStartY <= topYBoundaryWithGridLine || lineEndY >= bottomYBoundaryWithGridLine;
}
/**
 * Given the start & end coordinates of an horizontal/vertical line and 2 boundaries coordinates,
 * returns new start & coordinates inside the boundaries.
 *
 * @param lineStart Where the line should start
 * @param lineEnd Where the line should end
 * @param boundaryA Boundary
 * @param boundaryB Boundary
 */
function clipLine(lineStart, lineEnd, boundaryA, boundaryB) {
    var minLine = Math.min(lineStart, lineEnd);
    var maxLine = Math.max(lineStart, lineEnd);
    var minBoundary = Math.min(boundaryA, boundaryB);
    var maxBoundary = Math.max(boundaryA, boundaryB);
    return {
        start: Math.max(minLine, minBoundary),
        end: Math.min(maxLine, maxBoundary)
    };
}
/**
 * Returns the positions of the text decoration line.
 * As a convention, we draw the line form left to right
 */
function calculateLinePosition(model, cell, textDecorationContext, textDecorationType, actualFontSize, font, richTextLineWidth) {
    var _a;
    var dpr = textDecorationContext.dpr, textPositionX = textDecorationContext.textPositionX, textWidth = textDecorationContext.textWidth;
    var startX;
    var endX;
    var y;
    if (textDecorationType.underline === gridBlockModelDto_1.FontUnderline.SingleAccounting ||
        textDecorationType.underline === gridBlockModelDto_1.FontUnderline.DoubleAccounting) {
        // For accounting, the underline is drawn on the full width of the cell, regardless of the text
        var cellPadding = textLayout_1.getCellTextHorizontalPadding(cell, model);
        startX = cellLayout_1.getCellLeft(model, cell, model.BlockWidth) + cellPadding;
        endX = cellLayout_1.getCellRight(model, cell, model.BlockWidth) - cellPadding;
    }
    else {
        // Calculating X start & end position - same implementation for underline/strikethrough
        var isRichText = !!cell.TextRuns;
        (_a = calculateLinePositionX(model, cell, textPositionX, textWidth, isRichText), startX = _a.startX, endX = _a.endX);
    }
    // Calculating Y position
    var isBaselineRefactorEnabled = helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.TextBaselineRefactor, model);
    if (textDecorationType.strikethrough) {
        y = calculateStrikethroughY(cell, textDecorationContext, actualFontSize, font, isBaselineRefactorEnabled);
    }
    else {
        y = calculateUnderlineY(cell, textDecorationContext, actualFontSize, isBaselineRefactorEnabled, richTextLineWidth);
    }
    // Applying the devicePixelRatio
    startX = Math.round(startX * dpr);
    endX = Math.round(endX * dpr);
    y = Math.round(y * dpr);
    var linePosition = { startX: startX, endX: endX, Y: y };
    return linePosition;
}
/**
 * Calculated the X position of the line.
 * The text X position is dependent on the horizontal alignment.
 * Right - The x coordinate is located at the right side of the text. We need to draw the line left to right, and therefore we deduct the text width from the starting position.
 * Left - Draw the line from left to right
 * Center - The x coordinate is located at the center of the text. Instead of drawing two lines, one to the right and one to the left, we draw one line, from left to right. Returning the left x coordinate of the text.
 * For rich text, we always draw the text as it was left aligned (rich text drawing convention) and therefore we treat it as left horizontal alignment.
 *
 * @param model The GridBlockModel
 * @param cell The cell
 * @param textPositionX X coordinate where the text starts
 * @param textWidth width of the text
 * @param isRichText Rich text indicator
 */
function calculateLinePositionX(model, cell, textPositionX, textWidth, isRichText) {
    var startX;
    var endX;
    var alignment = isRichText ? gridBlockModelDto_1.HorizontalAlignment.Left : helpers_5.getEffectiveHorizontalAlignment(model, cell);
    switch (alignment) {
        case gridBlockModelDto_1.HorizontalAlignment.Automatic:
        case gridBlockModelDto_1.HorizontalAlignment.Left:
            startX = textPositionX;
            endX = textPositionX + textWidth;
            break;
        case gridBlockModelDto_1.HorizontalAlignment.Right:
            startX = textPositionX - textWidth;
            endX = textPositionX;
            break;
        case gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection:
        case gridBlockModelDto_1.HorizontalAlignment.Center:
            startX = textPositionX - textWidth / 2;
            endX = textPositionX + textWidth / 2;
            break;
        default:
            startX = textPositionX;
            endX = textPositionX + textWidth;
    }
    return { startX: startX, endX: endX };
}
/**
 * Calculated the Y position of the underline.
 * The text Y position is dependent on the vertical alignment.
 * Top - We use baseline: "bottom" at top alignment - see bottom
 * Bottom - The Y position is at the bottom of the text- return it
 * Center - The Y position is at the center of the text - we need to add half of the text height
 *
 * @param cell  The cell
 * @param textDecorationContext The text decoration context
 * @param fontSize The cell font size
 * @param isBaselineRefactorEnabled Indicates if baseline CG is enabled
 * @param richTextLineWidth Rich text run width. Overrides original width because of sequence of underline runs
 */
function calculateUnderlineY(cell, textDecorationContext, fontSize, isBaselineRefactorEnabled, richTextLineWidth) {
    var _a;
    var textPositionY = textDecorationContext.textPositionY;
    helpers_1.verifyArgumentNotNull(cell.CachedFont, 'cell.CachedFont', 'calculateUnderlineY');
    var verticalAlignment = (_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.VerticalAlignment;
    // The Y coordinate is the top of the line. Drawing a line at the text baseline will result in the line positioned on top of the cell bottom border.
    // In order for the line to be positioned well, we need to reduce this margin from the actual text baseline.
    var lineWidth = (richTextLineWidth !== null && richTextLineWidth !== void 0 ? richTextLineWidth : textLayout_1.getTextDecorationLineWidth(fontSize));
    var marginFromTextBaseline = 2 * lineWidth;
    if (isBaselineRefactorEnabled) {
        return textPositionY + marginFromTextBaseline;
    }
    // After changing the baseline, this code can be removed and we will return the same calculation for all VAs, since in alphabetical marginFromTextBaseline is always lineWidth,
    // so the calculation will be textPositionY - lineWidth.
    if (cell.TextRuns && verticalAlignment !== gridBlockModelDto_1.VerticalAlignment.Center) {
        // since rich text is alphabetic we need to go down instead of up in bottom baseline case
        marginFromTextBaseline = -marginFromTextBaseline;
    }
    switch (verticalAlignment) {
        case gridBlockModelDto_1.VerticalAlignment.Bottom:
        case gridBlockModelDto_1.VerticalAlignment.Top:
            return textPositionY - marginFromTextBaseline;
        case gridBlockModelDto_1.VerticalAlignment.Center:
            return textPositionY + helpers_4.pointsToPixels(fontSize) / 2 - marginFromTextBaseline;
        default:
            throw Error('calculateUnderlinePosition: Vertical alignment type not supported!');
    }
}
/**
 * Calculated the Y position of the strikethrough.
 * The text Y position is dependent on the vertical alignment, after the baseline refactor is completed
 * all of the cell's vertical alignments will use alphabetical textBaseline.
 *
 * At this point:
 * Top/Bottom - The Y position is either at the bottom of the text (legacy) or on the alphabetical baseline - we need to add/reduce middle baseline
 * Center - The Y position is either on the middle of the text (legacy) or on the middle baseline
 *
 * @param cell  The cell
 * @param textDecorationContext The text decoration context
 * @param fontSize The cell font size - May be the shrunk font size
 * @param font the font object
 * @param isBaselineRefactorEnabled Indicates if baseline CG is enabled
 */
function calculateStrikethroughY(cell, textDecorationContext, actualFontSize, font, isBaselineRefactorEnabled) {
    var _a;
    var textPositionY = textDecorationContext.textPositionY;
    helpers_1.verifyArgumentNotNull(cell.CachedFont, 'cell.CachedFont', 'calculateStrikethroughY');
    var verticalAlignment = (_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.VerticalAlignment;
    if (!isBaselineRefactorEnabled) {
        // Legacy strikethrough estimation - remove when baseline refactor is done
        return estimateStrikethroughY(cell, textDecorationContext, actualFontSize, verticalAlignment);
    }
    // Then we can return the same calculation for all VAs
    switch (verticalAlignment) {
        case gridBlockModelDto_1.VerticalAlignment.Bottom:
        case gridBlockModelDto_1.VerticalAlignment.Top:
        case gridBlockModelDto_1.VerticalAlignment.Center:
            var lineWidth = textLayout_1.getTextDecorationLineWidth(font.Size);
            var middleBaselinePosition = textLayout_1.getMiddleBaseline(textPositionY, font, actualFontSize);
            // Need to add the half line width to be exactly on the middle
            return middleBaselinePosition - lineWidth / 2;
        default:
            throw Error('calculateUnderlinePosition: Vertical alignment type not supported!');
    }
}
/**
 * Legacy Estimation of the Y position of the strikethrough.
 * The text Y position is dependent on the vertical alignment.
 * Top - We use baseline: "bottom" at top alignment - see bottom
 * Bottom - The Y position is at the bottom of the text - we need to reduce half of the text height
 * Center - The Y position is at the center of the text - return it
 *
 * @param cell  The cell
 * @param textDecorationContext The text decoration context
 * @param actualFontSize The cell font size - May be the shrunk font size
 * @param verticalAlignment The cell vertical alignment
 */
function estimateStrikethroughY(cell, textDecorationContext, actualFontSize, verticalAlignment) {
    var textPositionY = textDecorationContext.textPositionY;
    // If we are in rich text, the baseline is "alphabetical" and we need to divide the Em height by 4 to reach to the middle of the glyph
    // If we are not in rich text, the base line is either (bottom/center) and then we divide by 2 (half) of the Em height to reach the middle of the glyph
    var marginFromTextBaseline = helpers_4.pointsToPixels(actualFontSize) / (cell.TextRuns ? 4 : 2);
    switch (verticalAlignment) {
        case gridBlockModelDto_1.VerticalAlignment.Center:
            return textPositionY;
        case gridBlockModelDto_1.VerticalAlignment.Bottom:
        case gridBlockModelDto_1.VerticalAlignment.Top:
            return textPositionY - marginFromTextBaseline;
        default:
            throw Error('calculateUnderlinePosition: Vertical alignment type not supported!');
    }
}
/**
 * Drawing the actual line on the canvas
 * This method is used by underline & strikethrough
 *
 * @param ctx The canvas context
 * @param lineLayout The layout of the drawn underline
 */
function drawLine(ctx, lineLayout) {
    if (lineLayout.LineWidth === 0)
        return;
    var translatedY = lineLayout.Y + helpers_1.getLinePixelTranslation(lineLayout.LineWidth); // For sharp lines
    drawHorizontalLine(ctx, lineLayout.StartX, lineLayout.EndX, translatedY);
}
/**
 * Draws an horizontal line on the canvas
 *
 * @param ctx Canvas context
 * @param startX Start X coordinate
 * @param endX End X coordinate
 * @param y Y coordinate
 */
function drawHorizontalLine(ctx, startX, endX, y) {
    ctx.moveTo(startX, y);
    ctx.lineTo(endX, y);
}
//# sourceMappingURL=textDecoration.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/drawing/wrapText/wrapText.js":
/*!*********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/drawing/wrapText/wrapText.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var interfaces_1 = __webpack_require__(/*! ../breakToLines/interfaces */ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/interfaces.js");
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var textLayout_1 = __webpack_require__(/*! ../../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var textDecoration_1 = __webpack_require__(/*! ../textDecoration */ "../../packages/excel-online-grid-renderer/lib/src/drawing/textDecoration.js");
var richTextFormat_1 = __webpack_require__(/*! ../richTextFormat */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormat.js");
var breakTextToLines_1 = __webpack_require__(/*! ../breakToLines/breakTextToLines */ "../../packages/excel-online-grid-renderer/lib/src/drawing/breakToLines/breakTextToLines.js");
var justifyDisributedText_1 = __webpack_require__(/*! ../horizontalAlignment/justifyDisributedText */ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/justifyDisributedText.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
/**
 * Draws cell text over multiple lines wrapped inside the cell max width
 *
 * @param ctx Canvas2d context used for rendering the text
 * @param context the rendering context.
 * @param cell the cell we are working on
 * @param cellBottom the cell's bottom Y index
 * @param displayText Text line to display in the cell
 * @param offsetX the x-offset starting point to draw text
 * @param offsetY the y-offset starting point to draw text
 * @param maxWidth maximum width used for calculating line breaks of display text
 * @param cellOffset offset of cell column
 * @param cellWidth width of cell column
 * @param cellTopOffset offset of cell row
 * @param cellHeight height of cell row
 * @param forceClipping true if need to clip before starting to draw the cell
 * @param textLineHeightPx the height of one line of text according to the font
 * @param formattedText (optional) formatted text to render if it exists
 */
function drawWrapText(ctx, context, model, cell, displayText, offsetX, maxWidth, cellOffset, cellWidth, cellTopOffset, cellHeight, forceClipping, textLineHeightPx, formattedText) {
    if (maxWidth <= 0) {
        return;
    }
    var adjustedFormattedText = formattedText;
    if (formattedText) {
        adjustedFormattedText = richTextFormat_1.fixFormattedTextHardBreaksIndices(model, cell);
    }
    var singleSpaceWidth = ctx.measureText(drawingConstants_1.Whitespace).width;
    var isThaiWrapTextEnabled = helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.ThaiLineBreaking, model);
    var wrapTextInfo = isThaiWrapTextEnabled ? cell.WrapText : {}; /* defaultWrapTextInfo */
    var breakType = getBreakType(model, cell);
    // Wrap text has padding also at the end of the text.
    // MaxWidth has already accounted for Indentation, we are reducing the maxWidth additional padding for wrap text.
    var wrappedTextMaxWidth = maxWidth - textLayout_1.getWrapTextAdditionalPadding(model, cell);
    if (breakType === interfaces_1.BreakType.Distributed) {
        // For distributed text we add indents at both ends of the text.
        wrappedTextMaxWidth -= textLayout_1.getIndentationPaddingPx(cell.CachedStyle.Indentation || 0);
    }
    var wrappedLines = breakTextToLines_1.breakTextToLines(ctx, displayText, wrappedTextMaxWidth, breakType, singleSpaceWidth, adjustedFormattedText, wrapTextInfo);
    var lines = wrappedLines.textLines;
    var _a = getTextHeightAndBaselines(model, lines, adjustedFormattedText, textLineHeightPx), rowsBottomY = _a.rowsBottomY, rowsAlphabeticY = _a.rowsAlphabeticY, textHeight = _a.textHeight, formattedLines = _a.formattedLines;
    // We should clip the cell in the following cases:
    // 1. requireClipping flag is enabled (column is not wide enough for a single char)
    // 2. cell is merge cell that spans more than one row - in that case we don't have a clipping on the cell and we should make sure the height doesn't "spill" to adjacent cells
    var requireClipping = wrappedLines.requireClipping || forceClipping;
    var clipRectValue = { x: cellOffset, y: cellTopOffset, width: cellWidth, height: cellHeight };
    var clipRect = undefined;
    if (requireClipping) {
        clipRect = clipRectValue;
    }
    beforeDraw(ctx, clipRect);
    var lastRowAlphabeticBaseline = rowsAlphabeticY[0];
    var lastRowAbsoluteY = textLayout_1.getTextVerticalPosition(cell, model, textHeight, cellHeight, lastRowAlphabeticBaseline);
    var dpr = context.devicePixelRatio;
    for (var index = 0; index < lines.length; index++) {
        // For simplified logic we draw lines in reverse order starting with the last wrapped text line
        var indexFromLast = lines.length - 1 - index;
        var line = lines[indexFromLast];
        var lineText = line.text;
        // Starting from lastRowAbsoluteY which is alphabetical we go down to the current row bottom,
        // And then we need to go up to the alphabetic baseline of this row since this is textBaseline we use to fill text
        var currentRowAbsoluteBottom = lastRowAbsoluteY + lastRowAlphabeticBaseline - rowsBottomY[index];
        var offsetY = formattedText
            ? currentRowAbsoluteBottom - rowsAlphabeticY[index]
            : lastRowAbsoluteY - rowsBottomY[index];
        if (breakType === interfaces_1.BreakType.Wrap) {
            drawTextLine(ctx, context, model, cell, requireClipping, lineText, offsetX, offsetY, maxWidth, formattedLines[index], clipRectValue);
            if (!adjustedFormattedText) {
                textDecoration_1.cacheTextDecorationLayout(model, cell, {
                    textPositionX: offsetX,
                    textPositionY: offsetY,
                    dpr: dpr,
                    textWidth: line.underlineWidth,
                    clipRect: clipRectValue
                }, cell.CachedFont);
            }
        }
        else {
            var justifyDistributedContext = {
                breakType: breakType,
                singleSpaceWidth: singleSpaceWidth,
                maxWidth: wrappedTextMaxWidth,
                isProcessingLastLine: indexFromLast === lines.length - 1,
                isCompleteTextVisible: textHeight < cellHeight
            };
            drawJustifyOrDistributedTextLine(ctx, context, model, cell, wrappedLines, indexFromLast, offsetX, justifyDistributedContext, requireClipping, 
            /*lineOffsetY*/ offsetY, maxWidth, formattedLines[index], clipRectValue, lineText, offsetY, !util_1.isNullOrUndefined(adjustedFormattedText));
        }
    }
    afterDraw(ctx, clipRect);
}
exports.drawWrapText = drawWrapText;
/**
 * Draw each TextLine for cell with Justify and Distributed Horizontal Alignment.
 */
function drawJustifyOrDistributedTextLine(ctx, context, model, cell, wrappedLines, indexFromLast, offsetX, justifyDistributedContext, requireClipping, lineOffsetY, maxWidth, formattedLine, clipRect, lineText, offsetY, isFormattedTextAdjusted) {
    var tokens = wrappedLines.tokensPerLine[indexFromLast].tokens;
    // If the cell has RichTextFormat.
    if (formattedLine) {
        drawTextLine(ctx, context, model, cell, requireClipping, lineText, offsetX, lineOffsetY, maxWidth, formattedLine, clipRect, tokens, justifyDistributedContext);
        return;
    }
    var line = justifyDisributedText_1.getJustifyDistributedLine(justifyDistributedContext, tokens, justifyDisributedText_1.getSpaceWidthBetweenWords(tokens, justifyDistributedContext), tokens.length);
    if (!line) {
        return;
    }
    var isRTL = helpers_1.isStartLineRtl(lineText);
    // Draw the start token
    var startOffset = isRTL ? offsetX - line.Start.OffsetX : offsetX + line.Start.OffsetX;
    drawTextLine(ctx, context, model, cell, requireClipping, line.Start.Text, startOffset, lineOffsetY, maxWidth, formattedLine, clipRect);
    // Draw the middle token
    if (line.Middle) {
        var middleOffsetX = isRTL ? offsetX - line.Middle.OffsetX : offsetX + line.Middle.OffsetX;
        drawTextLine(ctx, context, model, cell, requireClipping, line.Middle.Text, middleOffsetX, lineOffsetY, maxWidth, formattedLine, clipRect);
    }
    // Draw the end token
    if (line.End) {
        var endOffsetX = isRTL ? offsetX - line.End.OffsetX : offsetX + line.End.OffsetX;
        drawTextLine(ctx, context, model, cell, requireClipping, line.End.Text, endOffsetX, lineOffsetY, maxWidth, formattedLine, clipRect);
    }
    if (!isFormattedTextAdjusted) {
        var textLine = wrappedLines.textLines[indexFromLast];
        var width = getWidthForTextDecoration(justifyDistributedContext.breakType, textLine, justifyDistributedContext.maxWidth, justifyDistributedContext.isProcessingLastLine, tokens.length);
        textDecoration_1.cacheTextDecorationLayout(model, cell, {
            textPositionX: startOffset,
            textPositionY: offsetY,
            dpr: context.devicePixelRatio,
            textWidth: width,
            clipRect: clipRect
        }, cell.CachedFont);
    }
}
/**
 * Calculates needed information to draw wrap text (text height and each row text baseline)
 * In case of rich text also returns the formatted text lines
 *
 * @param  {GridBlockModel} model the block model
 * @param  {TextLine[]} lines the wrap text lines
 * @param  {FormattedText|undefined} formattedText
 * @param  {number} textLineHeightPx
 * @returns textHeight: number  - the height of the entire text including all rows
 *          rowsBottomY: number[] - and the text baseline offset for each line
 *          formattedLines: FormattedText[] - the formatted text lines in case of rich text or undefined otherwise
 */
function getTextHeightAndBaselines(model, lines, formattedText, textLineHeightPx) {
    var formattedLines = [];
    var rowsBottomY = [];
    var rowsAlphabeticY = [];
    rowsBottomY = [0];
    rowsAlphabeticY = [0];
    var textHeight = 0;
    if (formattedText) {
        // update rows baselines
        for (var i = 0; i < lines.length; i++) {
            // for simplified logic we iterate lines in reverse order starting with the last wrapped text line
            var indexFromLast = lines.length - 1 - i;
            var line = lines[indexFromLast];
            var formattedTextLine = richTextFormat_1.substringFormattedText(formattedText, line.startIndex, line.endIndex);
            formattedLines[i] = formattedTextLine;
            // get the alphabetic baseline for this row
            var lineFontMetrics = textLayout_1.getFormattedTextLineFontMetrics(model, formattedTextLine);
            rowsAlphabeticY[i] = lineFontMetrics.baseline;
            // update the next row y offset baseline according to this row height
            var lineHeight = textLayout_1.getFormattedTextLineHeight(model, formattedTextLine);
            rowsBottomY[i + 1] = rowsBottomY[i] + lineHeight;
            textHeight += lineHeight;
        }
    }
    else {
        // regular text (not rich text) has the same line height for all lines
        rowsBottomY = getRowsBaselineOffsetY(lines.length, textLineHeightPx);
        textHeight = textLineHeightPx * lines.length;
    }
    return { rowsBottomY: rowsBottomY, rowsAlphabeticY: rowsAlphabeticY, textHeight: textHeight, formattedLines: formattedLines };
}
function beforeDraw(ctx, clipRect) {
    if (clipRect) {
        helpers_1.applyClipping(ctx, clipRect);
    }
}
function afterDraw(ctx, clipRect) {
    helpers_1.restoreClipping(ctx, clipRect);
}
function drawTextLine(ctx, context, model, cell, requireClipping, lineText, offsetX, lineOffsetY, maxWidth, formattedText, clipRect, textTokens, justifyDistributedContext) {
    if (formattedText) {
        richTextFormat_1.fillRichTextFormat(ctx, context, model, cell, formattedText, offsetX, lineOffsetY, clipRect, textTokens, justifyDistributedContext);
    }
    else {
        if (requireClipping) {
            // no width adjustment if clipping since we want to text to spill to the clipped area
            ctx.fillText(lineText, offsetX, lineOffsetY);
        }
        else {
            ctx.fillText(lineText, offsetX, lineOffsetY, maxWidth);
        }
    }
}
/**
 * Returns array with lines offsets for wrap text
 */
function getRowsBaselineOffsetY(numberOfLines, textLineHeightPx) {
    var linesOffsetsY = [];
    for (var i = 0; i < numberOfLines; i++) {
        // adjust text line vertical offset based on line index starting at offsetY (bottom line of the text)
        linesOffsetsY.push(i * textLineHeightPx);
    }
    return linesOffsetsY;
}
function getBreakType(model, cell) {
    var _a;
    if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentJustifyAndDistributed, model)) {
        switch ((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.HorizontalAlignment) {
            case gridBlockModelDto_1.HorizontalAlignment.Justify:
            case gridBlockModelDto_1.HorizontalAlignment.JustifyDistributed:
                return interfaces_1.BreakType.Justify;
            case gridBlockModelDto_1.HorizontalAlignment.Distributed:
                return interfaces_1.BreakType.Distributed;
            default:
                return interfaces_1.BreakType.Wrap;
        }
    }
    return interfaces_1.BreakType.Wrap;
}
/**
 * Get the text width for textDecoration.
 *
 * @param breakType The breakType.
 * @param line Textline that is being drawn.
 * @param wrappedTextMaxWidth maximum drawing width for cell with wrapped text.
 * @param isProcessingLastLine if we are processing the last line in cell text.
 * @param tokenCount number of tokens.
 */
function getWidthForTextDecoration(breakType, line, wrappedTextMaxWidth, isProcessingLastLine, tokenCount) {
    switch (breakType) {
        case interfaces_1.BreakType.Justify:
            return isProcessingLastLine ? line.underlineWidth : wrappedTextMaxWidth;
        case interfaces_1.BreakType.Distributed:
            if (isProcessingLastLine && tokenCount === 1) {
                return line.underlineWidth;
            }
            return wrappedTextMaxWidth;
        case interfaces_1.BreakType.Wrap:
        default:
            return line.underlineWidth;
    }
}
//# sourceMappingURL=wrapText.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/fontsConstants.js":
/*!**********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/fontsConstants.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// In Excel font size must be between 1 - 409
exports.MinAllowedFontSize = 1;
exports.MaxAllowedFontSize = 409;
exports.DefaultFontSizePt = 11;
exports.DefaultFontName = 'Calibri';
// Point to pixel conversion
// A pt is 1/72 of an inch, and a px is 1/96 of an inch. (for 96dpi screens)
// Therefore, 1pt = 3 / 4 of a px, and 1px = 4 / 3 of a pt.
exports.PointToPixelRatio = 4 / 3;
// This is Excel Desktop line height font factor. The font height(em) is multiplied by this number to receive the line height.
exports.LineHeightFontFactor = 1.28;
exports.LineLeading = 0.06; // This factor was calculated on Calibri div element height to match the desktop heights on Calibri
exports.LineHeightUsingDivFontFactor = 1 + exports.LineLeading; // This is just the line leading + 100% to be used as an increasing factor
exports.LineHeightBottomConstantPx = 1; // This is a constant added to the bottom of the text line - based on desktop implementation
// VSO:4088431 - Fonts - tag_c0k8f: fontMetricsDivHeight == 0
// locally writing the included list of font names I can log
exports.knownFontNamesLowerCase = [
    'angsananew',
    'arial',
    'arialblack',
    'batang',
    'bookantiqua',
    'browallianew',
    'calibri',
    'cambria',
    'candara',
    'century',
    'comicsansms',
    'consolas',
    'constantia',
    'corbel',
    'cordianew',
    'dilleniaupc',
    'courier',
    'couriernew',
    'dotum',
    'fangsong',
    'garamond',
    'georgia',
    'gulim',
    'gungsuh',
    'kaiti',
    'jasmineupc',
    'malgungothic',
    'mangal',
    'meiryo',
    'microsoftjhengHei',
    'microsoftyahei',
    'mingliu',
    'mingliuhkscs',
    'msgothic',
    'msmincho',
    'mspgothic',
    'mspmincho',
    'pmingliu',
    'pmingliuextb',
    'simhei',
    'simsun',
    'simsunextb',
    'sourcesanspro',
    'tahoma',
    'thsarabunpsk',
    'times',
    'timesnewroman',
    'trebuchetms',
    'verdana',
    'yugothic',
    'yumincho'
];
//# sourceMappingURL=fontsConstants.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/generated/gridBlockRenderer.gen.js":
/*!***************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/generated/gridBlockRenderer.gen.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ------------------------------------------------------------------------------
// <auto-generated>
// This code was generated by the office-online-interface-gen tool.
// Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
// </auto-generated>
// ------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockRendererFactory_1 = __webpack_require__(/*! ../gridBlockRendererFactory */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRendererFactory.js");
exports.GridBlockRendererFactoryGlobal = new gridBlockRendererFactory_1.GridBlockRendererFactory();
//# sourceMappingURL=gridBlockRenderer.gen.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/gridBlockModelAccessor.js":
/*!******************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/gridBlockModelAccessor.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var gridBlockModelHelpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelHelpers */ "../../packages/excel-online-models/lib/src/gridBlockModelHelpers.js");
var spillCell_1 = __webpack_require__(/*! ./modelUpdate/spillCell */ "../../packages/excel-online-grid-renderer/lib/src/modelUpdate/spillCell.js");
var helpers_2 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var calcBlockModel_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/calcModel/calcBlockModel */ "../../packages/excel-online-models/lib/src/calcModel/calcBlockModel.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var serializer_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/serializer */ "../../packages/excel-online-models/lib/src/serializer.js");
var gridBlockModelComparer_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelComparer */ "../../packages/excel-online-models/lib/src/gridBlockModelComparer.js");
var cellLayout_1 = __webpack_require__(/*! ./layout/cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var numberFormatting_1 = __webpack_require__(/*! ./modelUpdate/numberFormatting */ "../../packages/excel-online-grid-renderer/lib/src/modelUpdate/numberFormatting.js");
// The number of entries in UniqueStyleID enum
var NumberOfUniqueStyleIDs = 2;
/**
 * Responsible for providing access to the GridBlockModel for retrieving and setting model content
 */
var GridBlockModelAccessor = /** @class */ (function () {
    function GridBlockModelAccessor(model) {
        this.canvasInstance = null;
        GridBlockModelAccessor.verifyArgumentNotNull(model, 'model', 'constructor');
        this.model = model;
    }
    GridBlockModelAccessor.prototype.getOrCreateCanvasContext = function () {
        if (!this.canvasInstance) {
            this.canvasInstance = document.createElement('canvas');
        }
        var ctx = this.canvasInstance.getContext('2d');
        if (!ctx) {
            throw Error("GetOrCreateCanvasContext: ctx is undefined");
        }
        return ctx;
    };
    /**
     * Returns the Cell corresponding to the given row/column from the model
     * Returns null if the cell doesn't exist
     * @param rowIndex The absolute row position in the grid (e.g. 50) - 0 based
     * @param colIndex The absolute column index position in the grid (e.g. 27 for 'AA') - 0 based
     */
    GridBlockModelAccessor.prototype.getCell = function (rowIndex, colIndex) {
        return helpers_1.getCell(rowIndex, colIndex, this.model);
    };
    /**
     * Returns the Cell corresponding to the given row/column from the model
     * If the cell does not exist in the model, creates it but doesn't add it to the model
     * @param rowIndex The absolute row position in the grid (e.g. 50) - 0 based
     * @param colIndex The absolute column index position in the grid (e.g. 27 for 'AA') - 0 based
     */
    GridBlockModelAccessor.prototype.getOrCreateCell = function (rowIndex, colIndex) {
        var cell = this.getCell(rowIndex, colIndex);
        if (!cell) {
            // if cell doesn't exist in the model - create a new empty one
            GridBlockModelAccessor.verifyArgumentNotNull(this.model.RowNumbers, 'RowNumbers', 'getOrCreateCell');
            GridBlockModelAccessor.verifyArgumentNotNull(this.model.ColumnNumbers, 'ColumnNumbers', 'getOrCreateCell');
            GridBlockModelAccessor.verifyArgumentNotNull(this.model.Styles, 'Styles', 'getOrCreateCell');
            // validate cell requested is in the range of the model
            if (rowIndex < 0 ||
                colIndex < 0 ||
                rowIndex >= this.model.RowNumbers.length ||
                colIndex >= this.model.ColumnNumbers.length) {
                this.throwErrorWrapper("cell requested for a cell which is not in range of the model. rowIndex:  " + rowIndex + ", RowNumbers.length: " + this.model.RowNumbers.length + ",  colIndex:  " + colIndex + ", ColumnNumbers.length: " + this.model.ColumnNumbers.length, 'getOrCreateCell');
            }
            return helpers_1.getDefaultCell(rowIndex, colIndex, this.model.Styles, this.model.Fonts);
        }
        return cell;
    };
    GridBlockModelAccessor.prototype.getColumnWidth = function (colIndex) {
        return helpers_1.getColumnWidth(colIndex, this.model);
    };
    GridBlockModelAccessor.prototype.getRowHeight = function (rowIndex) {
        GridBlockModelAccessor.verifyArgumentNotNull(this.model, 'model', 'getRowHeight');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.RowHeights, 'RowHeights', 'getRowHeight');
        if (rowIndex > this.model.RowHeights.length - 1 || rowIndex < 0) {
            this.throwErrorWrapper('row height requested for a cell which is not in range of the model', 'getRowHeight');
        }
        return this.model.RowHeights[rowIndex];
    };
    GridBlockModelAccessor.prototype.getColumnOffset = function (colIndex) {
        GridBlockModelAccessor.verifyArgumentNotNull(this.model, 'model', 'getColumnOffset');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.ColumnOffsets, 'ColumnOffsets', 'getColumnOffset');
        if (colIndex > this.model.ColumnOffsets.length - 1 || colIndex < 0) {
            this.throwErrorWrapper('column offset requested for a cell which is not in range of the model', 'getColumnOffset');
        }
        return this.model.ColumnOffsets[colIndex];
    };
    GridBlockModelAccessor.prototype.getRowOffset = function (rowIndex) {
        GridBlockModelAccessor.verifyArgumentNotNull(this.model, 'model', 'getRowOffset');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.RowOffsets, 'RowOffsets', 'getRowOffset');
        if (rowIndex > this.model.RowOffsets.length - 1 || rowIndex < 0) {
            this.throwErrorWrapper('row offset requested for a cell which is not in range of the model', 'getRowOffset');
        }
        return this.model.RowOffsets[rowIndex];
    };
    GridBlockModelAccessor.prototype.getRowNumber = function (rowIndex) {
        GridBlockModelAccessor.verifyArgumentNotNull(this.model, 'model', 'getRowNumber');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.RowNumbers, 'RowNumbers', 'getRowNumber');
        return this.model.RowNumbers[rowIndex];
    };
    GridBlockModelAccessor.prototype.getColumnNumber = function (colIndex) {
        GridBlockModelAccessor.verifyArgumentNotNull(this.model, 'model', 'getColumnNumber');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.ColumnNumbers, 'ColumnNumbers', 'getColumnNumber');
        return this.model.ColumnNumbers[colIndex];
    };
    GridBlockModelAccessor.prototype.getCellStyle = function (cell) {
        return helpers_1.getCellStyle(cell, this.model);
    };
    GridBlockModelAccessor.prototype.getCellFont = function (cell) {
        return helpers_1.getCellFont(cell, this.model);
    };
    GridBlockModelAccessor.prototype.hasRichText = function (cell) {
        var _a;
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'hasRichText');
        return !util_1.isNullOrUndefined((_a = cell) === null || _a === void 0 ? void 0 : _a.TextRuns);
    };
    GridBlockModelAccessor.prototype.cloneCellFont = function (cell) {
        var font = helpers_1.getCellFont(cell, this.model);
        return font ? this.duplicateFont(font, font.ID, font.RefCount) : font;
    };
    /**
     * Return the borderStyle for a cell.
     */
    GridBlockModelAccessor.prototype.getBorderStyle = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'getBorderStyle');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.BorderStyles, 'this.model.BorderStyles', 'getBorderStyle');
        if (util_1.isNullOrUndefined(cell.CachedBorderStyle)) {
            cell.CachedBorderStyle = gridBlockModelHelpers_1.getReferencedObjectById(cell.BorderStyleID, this.model.BorderStyles);
        }
        return cell.CachedBorderStyle;
    };
    /**
     * Resets the borderStyle of the cell to the default borders.
     */
    GridBlockModelAccessor.prototype.removeBorder = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'removeBorder');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.BorderStyles, 'this.model.BorderStyles', 'removeBorder');
        cell.BorderStyleID = gridBlockModelDto_1.UniqueStyleID.DefaultBorder;
        cell.CachedBorderStyle = gridBlockModelHelpers_1.getReferencedObjectById(cell.BorderStyleID, this.model.BorderStyles);
    };
    /**
     * Returns a the number of columns in this block
     */
    GridBlockModelAccessor.prototype.getNumberOfBlockColumns = function () {
        return this.model.ColumnNumbers.length;
    };
    /**
     * Is the mode right to left
     */
    GridBlockModelAccessor.prototype.isRtl = function () {
        return this.model.IsRtl;
    };
    /**
     * Replaces the cell in the model with the given cell
     * If no cell exists in the model, adds a new cell
     *
     * @param cell The cell to attach to the model
     * @param model The partial model of the cell to attach
     */
    GridBlockModelAccessor.prototype.replaceCellInModel = function (cell, immediateModel) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'replaceCellInModel');
        GridBlockModelAccessor.verifyArgumentNotNull(immediateModel, 'immediateModel', 'replaceCellInModel');
        GridBlockModelAccessor.verifyArgumentNotNull(immediateModel.Styles, 'immediateModel!.Styles', 'replaceCellInModel');
        var style = immediateModel.Styles[0];
        GridBlockModelAccessor.verifyArgumentNotNull(style, 'style', 'replaceCellInModel');
        GridBlockModelAccessor.verifyArgumentNotNull(immediateModel.Fonts, 'immediateModel!.Fonts', 'replaceCellInModel');
        var font = immediateModel.Fonts[0];
        GridBlockModelAccessor.verifyArgumentNotNull(font, 'font', 'replaceCellInModel');
        //#region Attach CellStyles, BorderStyle, Fonts to the Model
        //#region Cache Fonts
        var newFontId = this.getLastFontID() + 1;
        font.ID = newFontId;
        this.model.Fonts.splice(newFontId, /* deleteCount */ 0, font);
        style.FontID = newFontId;
        cell.CachedFont = font;
        font.RefCount = 1;
        //#endregion
        //#region Cache CellStyle
        var newStyleId = this.getLastNonUniqueStyleID() + 1;
        style.ID = newStyleId;
        this.model.Styles.splice(newStyleId, /* deleteCount */ 0, style);
        cell.StyleID = newStyleId;
        cell.CachedStyle = style;
        //#endregion
        //#region Cache BorderStyle
        if (!util_1.isNullOrUndefined(immediateModel.BorderStyles)) {
            var borderStyle = immediateModel.BorderStyles[0];
            // If the borderStyle is not default, add it to the model
            if (!util_1.isNullOrUndefined(borderStyle) &&
                !util_1.isNullOrUndefined(borderStyle.Borders) &&
                borderStyle.Borders.length > 0) {
                borderStyle.RefCount = 1;
                this.setBorders(cell, borderStyle);
            }
        }
        //#endregion
        //#region Attach cell to model
        // If there's already a cell in the model, replace the existing cell, otherwise add it to the model
        if (this.getCell(cell.Row, cell.Col)) {
            // attach cell to model
            var position = helpers_1.getCellPositionInArray(cell, this.model.Cells);
            this.model.Cells[position] = cell;
            this.model.CellLookup[helpers_2.cellLookupKey(cell.Row, cell.Col)] = cell;
        }
        else {
            this.attachCellToModel(cell);
        }
        //#endregion
        style.RefCount = 1;
    };
    /**
     * Attaches a given cell to the model.
     * Does nothing if there's already a cell in the given cell's row & column.
     *
     * @param cell The cell to attach to the model
     */
    GridBlockModelAccessor.prototype.attachCellToModel = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'attachCellToModel');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.Cells, 'this.model.Cells', 'attachCellToModel');
        if (this.getCell(cell.Row, cell.Col)) {
            return;
        }
        var position = helpers_1.getCellPositionInArray(cell, this.model.Cells);
        this.model.Cells.splice(position, /* deleteCount */ 0, cell);
        this.model.CellLookup[helpers_2.cellLookupKey(cell.Row, cell.Col)] = cell;
        // Since we're adding another cell to the model, we need to ensure the cell's style refCount is updated
        // The refCount should indicate that another cell refers to that style object.
        var style = this.getCellStyle(cell);
        GridBlockModelAccessor.verifyArgumentNotNull(style, 'style', 'attachCellToModel');
        style.RefCount++;
        // Since we're adding another cell to the model, we need to ensure the cell's style refCount is updated
        // The refCount should indicate that another cell refers to that style object.
        var borderStyle = this.getBorderStyle(cell);
        GridBlockModelAccessor.verifyArgumentNotNull(borderStyle, 'borderStyle', 'attachCellToModel');
        borderStyle.RefCount++;
        cell.CachedBorderStyle = borderStyle;
    };
    /**
     * Verifies the cell style can be edited.
     * Style cannot be edited directly if either:
     *    1. The style has a unique id (e.g. style default)
     *    2. The style is referenced by more than one cell
     * If the style cannot be edited directly, we should duplicate it and set the new editable style on the cell.
     *
     * @param cell The cell we intend to edit
     * @returns true if style is editable and false otherwise.
     */
    GridBlockModelAccessor.prototype.prepareCellStyleForEdit = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'prepareCellStyleForEdit');
        var currentStyle = this.getCellStyle(cell);
        // Check if the style is editable
        if (!this.isStyleUnique(currentStyle.ID) && currentStyle.RefCount <= 1) {
            return true;
        }
        // The new style index should be higher by 1 than the last non-unique style
        var newStyleId = this.getLastNonUniqueStyleID() + 1;
        var newStyle = this.duplicateStyle(currentStyle, newStyleId, /* refCount */ 1);
        // Update the old style refCount
        currentStyle.RefCount = Math.max(0, currentStyle.RefCount - 1);
        // Add the new style to the model and attach to the cell
        this.model.Styles.splice(newStyleId, /* deleteCount */ 0, newStyle);
        cell.CachedStyle = newStyle;
        cell.StyleID = newStyleId;
        return false;
    };
    /**
     * Updates the CellStyle of the current Cell, with that of the default hyperlink.
     * If the default hyperlink CellStyle is not present, it does nothing.
     *
     * @param cell The cell we intend to mark as hyperlink
     */
    GridBlockModelAccessor.prototype.setDefaultHyperlinkStyleOnCell = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'setDefaultHyperlinkStyleOnCell');
        var defaultHyperlinkStyle = gridBlockModelHelpers_1.getReferencedObjectById(gridBlockModelDto_1.UniqueStyleID.Hyperlink, this.model.Styles);
        if (!defaultHyperlinkStyle) {
            // If default style is not present, throw error.
            this.throwErrorWrapper('default hyperlink style is not present in the model.', 'setDefaultHyperlinkStyleOnCell');
        }
        // Update the cell with the default hyperlink style.
        cell.StyleID = gridBlockModelDto_1.UniqueStyleID.Hyperlink;
        cell.CachedStyle = defaultHyperlinkStyle;
        defaultHyperlinkStyle.RefCount += 1;
    };
    /**
     * Applies the given edit font action on the font.
     * Taking into consideration also rich text where all the text runs fonts will be updated,
     * Also updates the main cell font.
     *
     * @param cell The cell to apply the font edit action on
     * @param editFontAction The set edit font action to apply on the cell's fonts
     */
    GridBlockModelAccessor.prototype.editCellFontAttributes = function (cell, editFontAction) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'editFont');
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'editFontAction', 'editFont');
        // Prepares the model for font editing:
        //   - Prepares the cell for editing
        //   - Duplicates the cell style and font if necessary
        this.attachCellToModel(cell);
        this.prepareFontForEdit(cell);
        // Rich text - applies the styling on all the text runs
        if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, this.model) && cell.TextRuns) {
            for (var i = 0; i < cell.TextRuns.length; i++) {
                var textRun = cell.TextRuns[i];
                if (util_1.isNullOrUndefined(textRun.CachedFont)) {
                    textRun.CachedFont = gridBlockModelHelpers_1.getReferencedObjectById(textRun.FontID, this.model.Fonts);
                }
                editFontAction(textRun.CachedFont);
            }
        }
        // Update the main cell's font
        editFontAction(cell.CachedFont);
    };
    /**
     * Verifies the cell font can be edited.
     * Font cannot be edited directly if either:
     *    1. The style has a unique id (e.g. style default)
     *    2. The style is referenced by more than one cell
     *    3. The font is referenced by more than one cell
     * If the font cannot be edited directly, we should duplicate it and set the new editable font on the cell.
     * If this is a rich text cell than apply the above for all of the cell's text runs
     *
     * @param cell The cell we intend to edit
     */
    GridBlockModelAccessor.prototype.prepareFontForEdit = function (cell) {
        var _a;
        // Rich text - need to prepare all the fonts of all the text runs
        var isRichTextFormatEnabled = helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, this.model);
        if (isRichTextFormatEnabled && ((_a = cell) === null || _a === void 0 ? void 0 : _a.TextRuns)) {
            for (var i = 0; i < cell.TextRuns.length; i++) {
                var textRun = cell.TextRuns[i];
                var font = util_1.isNullOrUndefined(textRun.CachedFont)
                    ? gridBlockModelHelpers_1.getReferencedObjectById(textRun.FontID, this.model.Fonts)
                    : textRun.CachedFont;
                this.prepareTextRunFontForEdit(font, textRun);
            }
        }
        // For rich text we still need to update the cell's font
        this.prepareCellFontForEdit(cell);
    };
    GridBlockModelAccessor.prototype.prepareTextRunFontForEdit = function (font, textRun) {
        // TODO: VSO 4256712: RTF CSE - TS side - make sure we are not changing unique fonts like default font or hyperlink font
        var canEditFont = font.RefCount <= 1;
        if (canEditFont) {
            // If font can be edited, we should do nothing
            return;
        }
        // Font cannot be edited, we should duplicate it and set the new font on the text run
        this.duplicateAndSetNewFontOnTextRun(font, textRun);
    };
    GridBlockModelAccessor.prototype.prepareCellFontForEdit = function (cell) {
        var currentFont = this.getCellFont(cell);
        var styleWasEditable = this.prepareCellStyleForEdit(cell);
        var canEditFont = styleWasEditable && currentFont.RefCount <= 1;
        if (canEditFont) {
            // If font can be edited, we should do nothing
            return;
        }
        // Font cannot be edited, we should duplicate it and set the new font on the cell
        this.duplicateAndSetNewFontOnCell(currentFont, cell);
    };
    /**
     * Verifies the BorderStyle can be edited.
     * Style cannot be edited directly if either:
     *    1. The BorderStyle has a unique id (e.g. style default)
     *    2. The BorderStyle is referenced by more than one cell
     * If the style cannot be edited directly, we should duplicate it and set the new editable style on the cell.
     *
     * @param cell The cell we intend to edit
     */
    GridBlockModelAccessor.prototype.prepareBorderStyleForEdit = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'prepareBorderStyleForEdit');
        var currentBorderStyle = this.getBorderStyle(cell);
        var isEditable = currentBorderStyle.ID !== gridBlockModelDto_1.UniqueStyleID.DefaultBorder && currentBorderStyle.RefCount <= 1;
        if (isEditable) {
            // If style can be edited, we should do nothing
            return;
        }
        var newStyle = this.duplicateBorderStyle(currentBorderStyle, /*style ID*/ 0, /* refCount */ 1);
        this.setBorders(cell, newStyle);
    };
    /**
     * duplicate BorderStyle object of cell, (return it with refcount = 1 and same id)
     *
     * @param cell the cell we want to duplicate BorderStyle from
     */
    GridBlockModelAccessor.prototype.cloneBorderStyle = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'cloneBorderStyle');
        var currentBorderStyle = this.getBorderStyle(cell);
        return this.duplicateBorderStyle(currentBorderStyle, currentBorderStyle.ID, /* refCount*/ 1);
    };
    /**
     * adding borderStyle object to the model of cell and attach cell to it
     *
     * @param cell the cell we adding borderStyle to
     * @param borderStyle the bordeStyle object we add to cell (and model)
     */
    GridBlockModelAccessor.prototype.setBorders = function (cell, newBorderStyle) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'setBorders');
        GridBlockModelAccessor.verifyArgumentNotNull(newBorderStyle, 'BorderStyle', 'setBorders');
        var currentBorderStyle = this.getBorderStyle(cell);
        var newBorderStyleId = this.getLastBorderStyleID() + 1;
        newBorderStyle.ID = newBorderStyleId;
        // Update the new & old styles refCount
        currentBorderStyle.RefCount = Math.max(0, currentBorderStyle.RefCount - 1);
        // Add the new style to the model and attach to the cell
        this.model.BorderStyles.splice(newBorderStyleId, /* deleteCount */ 0, newBorderStyle);
        cell.BorderStyleID = newBorderStyleId;
        cell.CachedBorderStyle = newBorderStyle;
    };
    /**
     * Returns a string containing the given cell CSS font representation
     *
     * @param cell the cell for which we need the font
     */
    GridBlockModelAccessor.prototype.getCellCssFont = function (cell) {
        this.verifyCellStyleAndFont(cell, 'getCellCssFont');
        return helpers_1.getFontCssStringFromCell(cell);
    };
    /**
     * Returns whether the model content was changed and not rendered
     */
    GridBlockModelAccessor.prototype.isDirty = function () {
        // If isDirty flag is undefined we can assume the model is not dirty
        return this.model.IsDirty ? this.model.IsDirty : false;
    };
    /**
     * Sets the model dirty flag to true to indicate content was changed
     */
    GridBlockModelAccessor.prototype.setDirty = function () {
        // If the model wasn't previously dirty we should set the timestamp as well
        if (!this.model.IsDirty) {
            this.model.DirtyTimestamp = Date.now();
        }
        this.model.IsDirty = true;
    };
    /**
     * Create and return a model for calc.
     * Calc model does not point to any data in the original model, but uses it's own copy of the data
     */
    GridBlockModelAccessor.prototype.getCalcBlockModel = function () {
        var calcBlockModel = new calcBlockModel_1.CalcBlockModel();
        var rowNumbers = this.model.RowNumbers.slice();
        var columnNumbers = this.model.ColumnNumbers.slice();
        calcBlockModel.addHeaders(rowNumbers, columnNumbers);
        for (var i = 0; i < this.model.Cells.length; i++) {
            var cell = this.model.Cells[i];
            var calcCell = calcBlockModel.createCell(cell);
            calcBlockModel.addCell(calcCell);
        }
        return calcBlockModel;
    };
    /**
     * Returns the model dirty timestamp.
     * Returns -1 if the timestamp is not defined
     */
    GridBlockModelAccessor.prototype.getDirtyTimestamp = function () {
        return this.model.DirtyTimestamp ? this.model.DirtyTimestamp : -1;
    };
    /**
     * Updates the cell SpillInformation according to its text, alignment and blocking non empty adjacent cells.
     *
     * @param  {Cell|nullable} cell the cell that was updated by a set cell operation or a calc result
     */
    GridBlockModelAccessor.prototype.updateCellSpillInformation = function (cell) {
        var _a, _b, _c, _d;
        this.verifyCellStyleAndFont(cell, 'updateCellSpillInformation');
        // invalidate cache drawing layout as the font might have change in size, style, name etc.
        if (!util_1.isNullOrUndefined((_b = (_a = cell) === null || _a === void 0 ? void 0 : _a.CachedDrawingLayout) === null || _b === void 0 ? void 0 : _b.CellTextLayout)) {
            cell.CachedDrawingLayout.CellTextLayout = {};
        }
        // For merge cells there's no spill cell, no need to do anything
        if (cell.Merge) {
            return;
        }
        // For cells with HorizontalAlignment as CenterAcrossSelection, no need to do anything.
        // Since The spillInformation is determined by the cells that were selected when setting
        // the horizontal alignment. Currently, excel online doesnt support authoring of CenterAcrossSelection.
        if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvHorizontalAlignmentFillAndCAS, this.model) &&
            ((_d = (_c = cell) === null || _c === void 0 ? void 0 : _c.CachedStyle) === null || _d === void 0 ? void 0 : _d.HorizontalAlignment) === gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection) {
            return;
        }
        // reset spill information
        cell.Spill = undefined;
        var ctx = null;
        if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.MeasureTextRefactor, this.model)) {
            ctx = this.getOrCreateCanvasContext();
            this.setContextCellFont(ctx, cell);
        }
        // Update current cell spill information
        spillCell_1.updateCellSpill(ctx, this.model, cell);
    };
    /**
     * Update the two adjacent cells spill information which could be blocked/non-blocked now as a result of this cell changes.
     *
     * @param  {Cell|nullable} cell the cell that was updated by a set cell operation or a calc result
     */
    GridBlockModelAccessor.prototype.updateClosestNonEmptyCellsSpillInformation = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'updateClosestNonEmptyCellsSpillInformation');
        var ctx = null;
        if (helpers_2.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.MeasureTextRefactor, this.model)) {
            ctx = this.getOrCreateCanvasContext();
            this.setContextCellFont(ctx, cell);
        }
        // Update the two closets adjacent cells spill information which could be blocked/non-blocked now
        spillCell_1.updateClosestNonEmptyCellsSpill(ctx, cell, this.model);
    };
    /**
     * returns the user input - the text before formatting.
     */
    GridBlockModelAccessor.prototype.getUserInput = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'getUserInput');
        return cell.UserInput;
    };
    /**
     * sets the user input - the text before formatting.
     */
    GridBlockModelAccessor.prototype.setUserInput = function (cell, userInput) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'setUserInput');
        GridBlockModelAccessor.verifyArgumentNotNull(userInput, 'userInput', 'setUserInput');
        cell.UserInput = userInput;
    };
    /**
     * Clear the format of the cell
     * All the cell format (Style, font and border) are set to default and the cached field are also set to default
     *
     * @param cell The cell to be cleared format
     */
    GridBlockModelAccessor.prototype.clearCellFormat = function (cell) {
        var defaultStyle = gridBlockModelHelpers_1.getReferencedObjectById(gridBlockModelDto_1.UniqueStyleID.Default, this.model.Styles);
        cell.StyleID = gridBlockModelDto_1.UniqueStyleID.Default;
        cell.CachedStyle = defaultStyle;
        cell.CachedFont = gridBlockModelHelpers_1.getReferencedObjectById(defaultStyle.FontID, this.model.Fonts);
        cell.BorderStyleID = gridBlockModelDto_1.UniqueStyleID.DefaultBorder;
        cell.CachedBorderStyle = gridBlockModelHelpers_1.getReferencedObjectById(gridBlockModelDto_1.UniqueStyleID.DefaultBorder, this.model.BorderStyles);
    };
    /**
     * Returns the row index of the cell in the block according to the row number
     */
    GridBlockModelAccessor.prototype.getRowIndex = function (rowNumber) {
        helpers_1.verifyArgumentNotNull(this.model, 'model', 'getRowIndex');
        helpers_1.verifyArgumentNotNull(this.model.RowNumbers, 'RowNumbers', 'getRowIndex');
        return helpers_1.binarySearch(this.model.RowNumbers, 0, this.model.RowNumbers.length, rowNumber, helpers_1.numbersComparer);
    };
    /**
     * Returns the column index of the cell in the block according to the column number
     */
    GridBlockModelAccessor.prototype.getColumnIndex = function (colNumber) {
        helpers_1.verifyArgumentNotNull(this.model, 'model', 'getColumnIndex');
        helpers_1.verifyArgumentNotNull(this.model.ColumnNumbers, 'ColumnNumbers', 'getColumnIndex');
        return helpers_1.binarySearch(this.model.ColumnNumbers, 0, this.model.ColumnNumbers.length, colNumber, helpers_1.numbersComparer);
    };
    /**
     * Returns the width of the given cell in pixels within the current block considering merge information
     *
     * @param cell The cell
     */
    GridBlockModelAccessor.prototype.getCellWidth = function (cell) {
        helpers_1.verifyArgumentNotNull(this.model, 'model', 'getCellWidth');
        helpers_1.verifyArgumentNotNull(cell, 'cell', 'getCellWidth');
        return cellLayout_1.getCellWidth(this.model, cell, /* limitToBlockDimensions */ true);
    };
    /**
     * Returns the height of the given cell in pixels within the current block considering merge information
     *
     * @param cell The cell
     */
    GridBlockModelAccessor.prototype.getCellHeight = function (cell) {
        helpers_1.verifyArgumentNotNull(this.model, 'model', 'getCellHeight');
        helpers_1.verifyArgumentNotNull(cell, 'cell', 'getCellHeight');
        return cellLayout_1.getCellHeight(this.model, cell, /* limitToBlockDimensions */ true);
    };
    /**
     * Returns the data representing the cell text format
     */
    GridBlockModelAccessor.prototype.getFormattedText = function (cell) {
        var _this = this;
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'getFormattedText');
        GridBlockModelAccessor.verifyArgumentNotNull(this.model.Fonts, 'this.model.Fonts', 'getFormattedText');
        // Generate a set of font id's that are used by the cell.
        var fontIds = new Set();
        var textRuns = [];
        // If the cell contains rich text (multiple text runs), we return all the text runs and the fonts that are used by them
        // Otherwise (single format text), the cell has no text runs and fully relies on the cell style,
        // thus, we create a single text run which references the cell style font.
        if (cell.TextRuns) {
            cell.TextRuns.forEach(function (textRun) {
                fontIds.add(textRun.FontID);
                textRuns.push(_this.duplicateTextRun(textRun));
            });
        }
        else {
            var currentStyle = cell.CachedStyle ? cell.CachedStyle : this.getCellStyle(cell);
            var textRun = { FontID: currentStyle.FontID, StartIndex: 0 };
            fontIds.add(currentStyle.FontID);
            textRuns.push(textRun);
        }
        // Create a font array that contains duplicates of all the used fonts
        var cellFonts = [];
        fontIds.forEach(function (id) {
            if (id < _this.model.Fonts.length) {
                var font = _this.model.Fonts[id];
                cellFonts[id] = _this.duplicateFont(font, font.ID, font.RefCount);
            }
            else {
                _this.throwErrorWrapper("Font " + id + " does not exist", 'getFormattedText');
            }
        });
        return {
            Text: cell.Text || '',
            TextRuns: textRuns,
            Fonts: cellFonts
        };
    };
    /**
     * Sets the given formattedText on the given cell.
     *
     * @param cell The cell to set the formatted text on
     * @param formattedText The formatted text to set on the cell
     */
    GridBlockModelAccessor.prototype.setFormattedText = function (cell, formattedText) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'setFormattedText');
        GridBlockModelAccessor.verifyArgumentNotNull(formattedText, 'formattedText', 'setFormattedText');
        GridBlockModelAccessor.verifyArgumentNotNull(formattedText.TextRuns, 'formattedText.TextRuns', 'setFormattedText');
        // Attach given cell to the model if needed
        this.attachCellToModel(cell);
        // Clear old text runs information
        cell.TextRuns = [];
        for (var i = 0; i < formattedText.TextRuns.length; i++) {
            // Duplicate the given text run and attach them to the given cell model
            var textRun = formattedText.TextRuns[i];
            cell.TextRuns[i] = this.duplicateTextRun(textRun);
            // Duplicate the given text run font and update the the model fonts and text run to point to this fonts
            var sourceFont = gridBlockModelHelpers_1.getReferencedObjectById(textRun.FontID, formattedText.Fonts);
            this.duplicateAndSetNewFontOnTextRun(sourceFont, cell.TextRuns[i]);
        }
    };
    /**
     * Serializes a cell content after removing private user content
     *
     * @param cell that needs to be serialized
     */
    GridBlockModelAccessor.prototype.serializeCell = function (cell) {
        return serializer_1.serializeCell(cell, this.model);
    };
    /** Get the outline state of a specific row / column  */
    GridBlockModelAccessor.prototype.getOutlineState = function (isRow, index) {
        var outlines = isRow ? this.model.RowOutlines : this.model.ColumnOutlines;
        // outlines may be null in case there is no outline in block
        return outlines ? outlines[index] : gridBlockModelDto_1.OutlineState.None;
    };
    /**
     * Compare a new cell and it's partial model with an existing cell that's already a part of the previous gridBlockModel.
     */
    GridBlockModelAccessor.prototype.compareCells = function (newCell, existingCell, newModel) {
        return gridBlockModelComparer_1.areCellsEqual(newCell, existingCell, newModel, this.model);
    };
    GridBlockModelAccessor.prototype.updateNumFmt = function (cell) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'updateNumFmt');
        if (helpers_2.isAccAndCustomNumFmtApplicable(cell, this.model)) {
            numberFormatting_1.updateNumFmtFromCell(cell);
            return;
        }
        cell.NumFmt = undefined;
    };
    GridBlockModelAccessor.prototype.updateCellText = function (cell, text) {
        GridBlockModelAccessor.verifyArgumentNotNull(cell, 'cell', 'updateCellText');
        GridBlockModelAccessor.verifyArgumentNotNull(text, 'text', 'updateCellText');
        helpers_1.updateCellText(this.model, cell, text);
    };
    /**
     * Returns true if the model has page layout - print areas or page breaks, false otherwise.
     */
    GridBlockModelAccessor.prototype.hasPageLayout = function () {
        return this.model.PageBreaks != null || this.model.PrintAreas != null;
    };
    /**
     * Returns a pointer to pivot table ranges of the current model
     */
    GridBlockModelAccessor.prototype.getPivotTableRanges = function () {
        return this.duplicatePivotTableRangeInformations(this.model.PivotTables);
    };
    /**
     * Returns true if the given ID matches a unique style id
     *
     * @param styleId The styleID to check
     */
    GridBlockModelAccessor.prototype.isStyleUnique = function (styleId) {
        return styleId === gridBlockModelDto_1.UniqueStyleID.Default || styleId === gridBlockModelDto_1.UniqueStyleID.Hyperlink;
    };
    /**
     * Returns the number of non-unique styles in the styles array
     */
    GridBlockModelAccessor.prototype.getLastNonUniqueStyleID = function () {
        var numberOfStyles = this.model.Styles.length;
        // Decreasing one from the styles count since style IDs are zero based
        return numberOfStyles - NumberOfUniqueStyleIDs - 1;
    };
    /**
     * Returns the number of fonts in the fonts array
     */
    GridBlockModelAccessor.prototype.getLastFontID = function () {
        var numberOfFonts = this.model.Fonts.length;
        return numberOfFonts - 1;
    };
    /**
     * Returns the number of Borders styles in the styles array
     */
    GridBlockModelAccessor.prototype.getLastBorderStyleID = function () {
        var numberOfBorderStyles = this.model.BorderStyles.length;
        return numberOfBorderStyles - 1;
    };
    /**
     * Returns a duplication of the given style object.
     * Note: the duplicated style is not attached to any model.
     */
    GridBlockModelAccessor.prototype.duplicateStyle = function (style, newId, newRefCount) {
        // Since the CellStyle structure is known, the best perf way clone it is by manually constructing the new object
        var newStyle = {
            BackgroundColor: style.BackgroundColor,
            HorizontalAlignment: style.HorizontalAlignment,
            ID: newId,
            NamedStyleId: style.NamedStyleId,
            RefCount: newRefCount,
            VerticalAlignment: style.VerticalAlignment,
            Indentation: style.Indentation,
            IsUnlocked: style.IsUnlocked,
            IsHidden: style.IsHidden,
            ReadingOrder: style.ReadingOrder,
            FontID: style.FontID,
            ShrinkToFit: style.ShrinkToFit,
            Gradient: style.Gradient
        };
        // Update the font refcount
        if (this.model.Fonts) {
            var font = gridBlockModelHelpers_1.getReferencedObjectById(style.FontID, this.model.Fonts);
            font.RefCount++;
        }
        return newStyle;
    };
    /**
     * Returns a duplication of the given borderStyle object.
     * Note: the duplicated borderStyle is not attached to any model.
     */
    GridBlockModelAccessor.prototype.duplicateBorderStyle = function (borderStyle, newId, newRefCount) {
        // Since the Border structure is known, the best perf way clone it is by manually constructing the new object
        var borders = [];
        for (var i = 0; i < borderStyle.Borders.length; i++) {
            var currentBorder = borderStyle.Borders[i];
            var newBorder = {
                BorderLineStyle: currentBorder.BorderLineStyle,
                BorderPosition: currentBorder.BorderPosition,
                Weight: currentBorder.Weight,
                Color: {
                    Red: currentBorder.Color.Red,
                    Blue: currentBorder.Color.Blue,
                    Green: currentBorder.Color.Green
                }
            };
            borders.push(newBorder);
        }
        return {
            Borders: borders,
            ID: newId,
            RefCount: newRefCount
        };
    };
    /*
     * Returns a duplication of the given Font object.
     * Note: the duplicated font is not attached to any model.
     */
    GridBlockModelAccessor.prototype.duplicateFont = function (font, newId, newRefCount) {
        // Since the Font structure is known, the best perf way clone it is by manually constructing the new object
        return {
            Bold: font.Bold,
            Color: font.Color,
            FontName: font.FontName,
            ID: newId,
            Italic: font.Italic,
            RefCount: newRefCount,
            Size: font.Size,
            StrikeThrough: font.StrikeThrough,
            Underline: font.Underline,
            VerticalAlign: font.VerticalAlign
        };
    };
    /**
     * Returns a duplication of the given TextRun object.
     * Note: the duplicated textRun is not attached to any model.
     */
    GridBlockModelAccessor.prototype.duplicateTextRun = function (textRun) {
        // Since the TextRun structure is known, the best perf way clone it is by manually constructing the new object
        return {
            FontID: textRun.FontID,
            StartIndex: textRun.StartIndex,
            CachedFont: textRun.CachedFont
        };
    };
    /**
     * Set a new editable font on a text run and cache it.
     *
     * @param currentFont The current font of the text run intend to edit
     * @param textRun The text run we intend to edit
     */
    GridBlockModelAccessor.prototype.duplicateAndSetNewFontOnTextRun = function (currentFont, textRun) {
        var newFont = this.duplicateAndSetNewFontInModel(currentFont);
        textRun.FontID = newFont.newFontId;
        textRun.CachedFont = newFont.newFont;
    };
    /**
     * Set a new editable font on the cell.
     *
     * @param currentFont The current font of the cell intend to edit
     * @param cell The cell we intend to edit
     */
    GridBlockModelAccessor.prototype.duplicateAndSetNewFontOnCell = function (currentFont, cell) {
        var _a = this.duplicateAndSetNewFontInModel(currentFont), newFontId = _a.newFontId, newFont = _a.newFont;
        cell.CachedFont = newFont;
        cell.CachedStyle.FontID = newFontId;
    };
    GridBlockModelAccessor.prototype.duplicatePivotTableRangeInformations = function (pivotTables) {
        if (!pivotTables) {
            return undefined;
        }
        var result = [];
        for (var i = 0; i < pivotTables.length; i++) {
            result.push(this.duplicatePivotTableRangeInformation(pivotTables[i]));
        }
        return result;
    };
    GridBlockModelAccessor.prototype.duplicatePivotTableRangeInformation = function (pivotTable) {
        return {
            AltText: pivotTable.AltText,
            AltTextSummary: pivotTable.AltTextSummary,
            AutoFormatOnUpdate: pivotTable.AutoFormatOnUpdate,
            ColGrandTotalOn: pivotTable.ColGrandTotalOn,
            ColumnAreaFields: this.duplicatePivotTableFieldInfos(pivotTable.ColumnAreaFields),
            ColumnHeaderRange: this.duplicateRangeInformation(pivotTable.ColumnHeaderRange),
            ColumnMemberPropIndexes: pivotTable.ColumnMemberPropIndexes,
            ColumnTotalIndexes: pivotTable.ColumnTotalIndexes,
            ConfirmationRequiredForDataOps: pivotTable.ConfirmationRequiredForDataOps,
            ConnectionName: pivotTable.ConnectionName,
            CurrentStyleName: pivotTable.CurrentStyleName,
            DataPivotFieldCaption: pivotTable.DataPivotFieldCaption,
            DataPivotFieldIndex: pivotTable.DataPivotFieldIndex,
            DataSource: pivotTable.DataSource,
            DeltaXFromOriginPT: pivotTable.DeltaXFromOriginPT,
            DeltaXFromOriginPTAdjustedForDrawing: pivotTable.DeltaYFromOriginPTAdjustedForDrawing,
            DeltaYFromOriginPT: pivotTable.DeltaYFromOriginPT,
            DeltaYFromOriginPTAdjustedForDrawing: pivotTable.DeltaYFromOriginPTAdjustedForDrawing,
            DisplayErrorString: pivotTable.DisplayErrorString,
            DisplayNullString: pivotTable.DisplayNullString,
            ErrorString: pivotTable.ErrorString,
            ExternalSourceIndex: pivotTable.ExternalSourceIndex,
            FieldListVersion: pivotTable.FieldListVersion,
            FieldWellVersion: pivotTable.FieldWellVersion,
            FirstColIndex: pivotTable.FirstColIndex,
            FirstColumn: pivotTable.FirstColumn,
            FirstRow: pivotTable.FirstRow,
            FirstRowIndex: pivotTable.FirstRowIndex,
            HasActiveFilter: pivotTable.HasActiveFilter,
            HideGridLines: pivotTable.HideGridLines,
            IndentIncrement: pivotTable.IndentIncrement,
            IsActionable: pivotTable.IsActionable,
            IsEmptyPivot: pivotTable.IsEmptyPivot,
            IsOlap: pivotTable.IsOlap,
            IsPageArea: pivotTable.IsPageArea,
            LastColIndex: pivotTable.LastRowIndex,
            LastColumn: pivotTable.LastColumn,
            LastRow: pivotTable.LastRow,
            LastRowIndex: pivotTable.LastRowIndex,
            NullString: pivotTable.NullString,
            OriginPTHeight: pivotTable.OriginPTHeight,
            OriginPTHeightAdjustedForDrawing: pivotTable.OriginPTHeightAdjustedForDrawing,
            OriginPTWidth: pivotTable.OriginPTWidth,
            OriginPTWidthAdjustedForDrawing: pivotTable.OriginPTWidthAdjustedForDrawing,
            PageAreaFields: this.duplicatePivotTableFieldInfos(pivotTable.PageAreaFields),
            PivotTableName: pivotTable.PivotTableName,
            RangeType: pivotTable.RangeType,
            RefreshOnLoad: pivotTable.RefreshOnLoad,
            RowAreaCaptions: pivotTable.RowAreaCaptions,
            RowAreaFields: this.duplicatePivotTableFieldInfos(pivotTable.RowAreaFields),
            RowHeaderRange: this.duplicateRangeInformation(pivotTable.RowHeaderRange),
            RowLocation: pivotTable.RowLocation,
            RowMemberPropIndexes: pivotTable.RowMemberPropIndexes,
            RowTotalIndexes: pivotTable.RowTotalIndexes,
            RwGrandTotalOn: pivotTable.RwGrandTotalOn,
            SaveSourceDataWithFile: pivotTable.SaveSourceDataWithFile,
            ShowColumnHeaders: pivotTable.ShowColumnHeaders,
            ShowColumnStripes: pivotTable.ShowColumnStripes,
            ShowDrillIndicators: pivotTable.ShowDrillIndicators,
            ShowItemsWithNoDataOnCol: pivotTable.ShowItemsWithNoDataOnCol,
            ShowItemsWithNoDataOnRw: pivotTable.ShowItemsWithNoDataOnRw,
            ShowRowHeaders: pivotTable.ShowRowHeaders,
            ShowRowStripes: pivotTable.ShowRowStripes,
            SupportsBIExplore: pivotTable.SupportsBIExplore,
            ValueAreaFields: this.duplicatePivotTableFieldInfos(pivotTable.ValueAreaFields),
            Xluid: pivotTable.Xluid
        };
    };
    GridBlockModelAccessor.prototype.duplicateRangeInformation = function (rangeInfo) {
        if (!rangeInfo) {
            return undefined;
        }
        return {
            FirstColumn: rangeInfo.FirstColumn,
            FirstRow: rangeInfo.FirstRow,
            LastColumn: rangeInfo.LastColumn,
            LastRow: rangeInfo.LastRow,
            RangeType: rangeInfo.RangeType
        };
    };
    GridBlockModelAccessor.prototype.duplicatePivotTableFieldInfos = function (fieldInfos) {
        if (!fieldInfos) {
            return undefined;
        }
        var result = [];
        for (var i = 0; i < fieldInfos.length; i++) {
            result.push(this.duplicatePivotTableFieldInfo(fieldInfos[i]));
        }
        return result;
    };
    GridBlockModelAccessor.prototype.duplicatePivotTableFieldInfo = function (fieldInfo) {
        return {
            BaseFieldIndex: fieldInfo.BaseFieldIndex,
            Caption: fieldInfo.Caption,
            DataFieldAggregationType: fieldInfo.DataFieldAggregationType,
            DataFieldFormatType: fieldInfo.DataFieldFormatType,
            Index: fieldInfo.Index,
            IsCompactLayout: fieldInfo.IsCompactLayout,
            RepeatItemLabels: fieldInfo.RepeatItemLabels,
            ShowBlankLineAfterEachItem: fieldInfo.ShowBlankLineAfterEachItem,
            ShowItemsWithNoData: fieldInfo.ShowItemsWithNoData,
            ShowSubtotal: fieldInfo.ShowSubtotal,
            ShowSubtotalAtTop: fieldInfo.ShowSubtotalAtTop
        };
    };
    GridBlockModelAccessor.prototype.duplicateAndSetNewFontInModel = function (currentFont) {
        // The new font index should be higher by 1 than the last non-unique style
        var newFontId = this.model.Fonts.length;
        var newFont = this.duplicateFont(currentFont, newFontId, /* refCount */ 1);
        // Update the old font refCount
        currentFont.RefCount = Math.max(0, currentFont.RefCount - 1);
        // Add the new font to the model and attach to the cell
        this.model.Fonts.splice(newFontId, /* deleteCount */ 0, newFont);
        return { newFontId: newFontId, newFont: newFont };
    };
    GridBlockModelAccessor.prototype.throwErrorWrapper = function (message, callerString) {
        helpers_1.throwError(message, "GridBlockModelAccessor." + callerString);
    };
    GridBlockModelAccessor.verifyArgumentNotNull = function (argument, argumentName, callerString) {
        helpers_1.verifyArgumentNotNull(argument, argumentName, "GridBlockModelAccessor." + callerString);
    };
    /**
     * Verify that the cell is not null, and cache cell style and font if they are undefined.
     *
     * @param cell The cell for which we need the font
     * @param model The model
     * @param functionName The name of the function that called verifyAndCacheCellStyleAndFont
     */
    GridBlockModelAccessor.prototype.verifyCellStyleAndFont = function (cell, functionName) {
        helpers_1.verifyArgumentNotNull(cell, 'cell', functionName);
        if (!cell.CachedStyle) {
            helpers_1.getCellStyle(cell, this.model);
        }
        var font = cell.CachedFont;
        if (!font) {
            helpers_1.getCellFont(cell, this.model);
        }
    };
    GridBlockModelAccessor.prototype.setContextCellFont = function (ctx, cell) {
        ctx.font = helpers_1.getFontCssStringFromCell(cell);
    };
    return GridBlockModelAccessor;
}());
exports.GridBlockModelAccessor = GridBlockModelAccessor;
//# sourceMappingURL=gridBlockModelAccessor.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRenderer.js":
/*!*************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/gridBlockRenderer.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var gridlines_1 = __webpack_require__(/*! ./drawing/gridlines */ "../../packages/excel-online-grid-renderer/lib/src/drawing/gridlines.js");
var skeleton_1 = __webpack_require__(/*! ./drawing/skeleton */ "../../packages/excel-online-grid-renderer/lib/src/drawing/skeleton.js");
var debugWatermark_1 = __webpack_require__(/*! ./drawing/debugWatermark */ "../../packages/excel-online-grid-renderer/lib/src/drawing/debugWatermark.js");
var telemetry_1 = __webpack_require__(/*! ./telemetry */ "../../packages/excel-online-grid-renderer/lib/src/telemetry.js");
var testableHelpers_1 = __webpack_require__(/*! ./testableHelpers */ "../../packages/excel-online-grid-renderer/lib/src/testableHelpers.js");
var text_1 = __webpack_require__(/*! ./drawing/text */ "../../packages/excel-online-grid-renderer/lib/src/drawing/text.js");
var gridBlockModelHelpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelHelpers */ "../../packages/excel-online-models/lib/src/gridBlockModelHelpers.js");
var helpers_1 = __webpack_require__(/*! ./drawing/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var backgroundFill_1 = __webpack_require__(/*! ./drawing/backgroundFill/backgroundFill */ "../../packages/excel-online-grid-renderer/lib/src/drawing/backgroundFill/backgroundFill.js");
var helpers_2 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var helpers_3 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var borders_1 = __webpack_require__(/*! ./drawing/borders */ "../../packages/excel-online-grid-renderer/lib/src/drawing/borders.js");
var clearGridLines_1 = __webpack_require__(/*! ./drawing/clearGridLines */ "../../packages/excel-online-grid-renderer/lib/src/drawing/clearGridLines.js");
var spillCell_1 = __webpack_require__(/*! ./modelUpdate/spillCell */ "../../packages/excel-online-grid-renderer/lib/src/modelUpdate/spillCell.js");
var textDecoration_1 = __webpack_require__(/*! ./drawing/textDecoration */ "../../packages/excel-online-grid-renderer/lib/src/drawing/textDecoration.js");
var shrinkToFit_1 = __webpack_require__(/*! ./drawing/shrinkToFit */ "../../packages/excel-online-grid-renderer/lib/src/drawing/shrinkToFit.js");
var fontsConstants_1 = __webpack_require__(/*! ./fontsConstants */ "../../packages/excel-online-grid-renderer/lib/src/fontsConstants.js");
var icons_1 = __webpack_require__(/*! ./drawing/conditionalFormatting/Icons/icons */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/icons.js");
var polyfills_1 = __webpack_require__(/*! ./polyfills */ "../../packages/excel-online-grid-renderer/lib/src/polyfills/index.js");
var pageBreaks_1 = __webpack_require__(/*! ./drawing/pageLayout/pageBreaks */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/pageBreaks.js");
var printAreas_1 = __webpack_require__(/*! ./drawing/pageLayout/printAreas */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pageLayout/printAreas.js");
var emptyPivotTable_1 = __webpack_require__(/*! ./drawing/pivotTable/emptyPivotTable */ "../../packages/excel-online-grid-renderer/lib/src/drawing/pivotTable/emptyPivotTable.js");
var GridBlockRenderer = /** @class */ (function () {
    function GridBlockRenderer() {
    }
    GridBlockRenderer.prototype.renderBlock = function (canvas, model, context) {
        var _this = this;
        telemetry_1.clearPerformanceMetrics();
        polyfills_1.loadPolyFills();
        // input validations:
        if (!canvas) {
            return telemetry_1.createRenderResult(/* success */ false, 'renderBlock:: canvas is undefined');
        }
        if (!model) {
            return telemetry_1.createRenderResult(/* success */ false, 'renderBlock:: model is undefined');
        }
        if (!context) {
            return telemetry_1.createRenderResult(/* success */ false, 'renderBlock:: context is undefined');
        }
        if (!testableHelpers_1.isCanvasElement(canvas)) {
            return telemetry_1.createRenderResult(/* success */ false, 'renderBlock:: canvas is not HTMLCanvasElement');
        }
        var ctx = null;
        telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.GetContextDurationMs, function () {
            // when Canvas2D alpha channel is set to false on the context - it activates sub-pixel font rendering (except for IE)
            ctx = canvas.getContext('2d', { alpha: !context.subPixelRenderingEnabled });
        });
        if (!ctx) {
            return telemetry_1.createRenderResult(/* success */ false, 'renderBlock:: ctx is undefined');
        }
        // model preparations
        telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.ModelPreparationsMs, function () {
            _this.initializeCachedObjects(model);
            _this.createOffsetsForDrawing(model, context.devicePixelRatio);
            _this.updateCellsBeforeDrawing(ctx, model, context.devicePixelRatio);
            if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.EmptyPivotTable, model)) {
                _this.updatePivotTablesInformationBeforeDrawing(model.PivotTables, context.devicePixelRatio);
            }
        });
        var result;
        // actual rendering work:
        telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.RenderBlockInternalDurationMs, function () {
            result = _this.renderBlockInternal(canvas, ctx, model, context);
        });
        // Clear the dirty flag when the model finished rendering successfully
        model.IsDirty = false;
        if (util_1.isNullOrUndefined(result)) {
            result = telemetry_1.createRenderResult(true, '');
        }
        // Add any messages added on success
        if (result.succeeded) {
            result.message = util_1.isNullOrUndefined(result.message)
                ? telemetry_1.getRenderingMessage()
                : result.message + '; ' + telemetry_1.getRenderingMessage();
        }
        return result;
    };
    GridBlockRenderer.prototype.renderBlockInternal = function (canvas, ctx, model, context) {
        try {
            var devicePixelRatio_1 = context.devicePixelRatio;
            // Get the drawing offset of the block on the canvas element according to the current renderingRegion
            // When we're rendering block on multiple canvas elements we need to make sure the drawing is shifted correctly according to the
            // renderingRegion offset within the current block
            var scaledDrawingOffsetX = 0;
            var scaledDrawingOffsetY = 0;
            var scaledBlockWidth = ctx.canvas.width;
            this.validateRenderingRegion(context.renderingRegion, model);
            scaledBlockWidth = Math.round(model.BlockWidth * devicePixelRatio_1);
            var renderingRegion = context.renderingRegion;
            scaledDrawingOffsetY = -1 * renderingRegion.startOffsetY * devicePixelRatio_1;
            scaledDrawingOffsetX = this.getDrawingOffsetXForRenderingRegion(model, renderingRegion) * devicePixelRatio_1;
            // *********************************************************************************************************************************************************
            //#region  Scale = 1, mirrorCanvas = isRtl
            // ensure canvas is cleared before rendering since the canvas element can possibly be reused
            GridBlockRenderer.clearCanvas(ctx, model, canvas.width, canvas.height, context);
            // For grid lines we use manual scale on zoom since according to investigation it looks better than browser zoom
            // and enables us to render sharp grid lines in all zoom levels.
            GridBlockRenderer.setTransform(ctx, 
            /* scale */ 1, model.IsRtl, scaledDrawingOffsetX, scaledDrawingOffsetY, scaledBlockWidth);
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawGridlinesDurationMs, function () { return gridlines_1.drawGridLines(ctx, model, context); });
            // it is important to keep the the same transform (scale) as used to draw the grid lines in order to clear the vertical grid lines correctly
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.ClearGridlinesMs, function () {
                telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.ClearGridLinesForSpannedCellsMs, function () {
                    clearGridLines_1.clearGridLinesForSpannedCells(ctx, model, context);
                });
                if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.EmptyPivotTable, model)) {
                    telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.ClearGridLinesForEmptyPivot, function () {
                        clearGridLines_1.clearGridLinesForEmptyPivotTables(ctx, model, context);
                    });
                }
            });
            //#endregion
            // *********************************************************************************************************************************************************
            // *********************************************************************************************************************************************************
            //#region  Scale = 1, mirrorCanvas = false
            GridBlockRenderer.setTransform(ctx, 
            /* scale */ 1, 
            /* mirrorCanvas */ false, scaledDrawingOffsetX, scaledDrawingOffsetY, scaledBlockWidth);
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawBackgroundFillMs, function () { return backgroundFill_1.drawBackgroundFill(ctx, model, context); });
            if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.EmptyPivotTable, model)) {
                telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawEmptyPivotTableTitleContainers, function () {
                    return emptyPivotTable_1.drawEmptyPivotTableTitleContainers(ctx, model, context);
                });
            }
            if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.EmptyPivotTable, model)) {
                telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawEmptyPivotTableImages, function () {
                    return emptyPivotTable_1.drawEmptyPivotTableImages(ctx, model, context);
                });
            }
            if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.CFIcons, model)) {
                telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawCFIconsMs, function () { return icons_1.drawConditionalFormattingIcons(ctx, model, context); });
            }
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.ClearGridlinesForBorderMs, function () {
                borders_1.clearGridLinesForBorder(ctx, model, context);
            });
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawBordersMs, function () { return borders_1.drawBorders(ctx, model, context); });
            if (context.debugMode) {
                debugWatermark_1.addWatermark(ctx, context);
            }
            //#endregion
            // *********************************************************************************************************************************************************
            // *********************************************************************************************************************************************************
            //#region  Scale = DPR, mirrorCanvas = false
            // For text rendering we use browser zoom by setting the scale level according to the DPR
            GridBlockRenderer.setTransform(ctx, 
            /* scale */ devicePixelRatio_1, 
            /* mirror */ false, scaledDrawingOffsetX, scaledDrawingOffsetY, scaledBlockWidth);
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawTextDurationMs, function () { return text_1.drawCellsText(ctx, model, context); });
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawEmptyPivotTableTitleText, function () {
                return emptyPivotTable_1.drawEmptyPivotTableTitleText(ctx, model, context);
            });
            //#endregion
            // *********************************************************************************************************************************************************
            // *********************************************************************************************************************************************************
            //#region  Scale = 1, mirrorCanvas = false
            GridBlockRenderer.setTransform(ctx, 
            /* scale */ 1, 
            /* mirror */ false, scaledDrawingOffsetX, scaledDrawingOffsetY, scaledBlockWidth);
            // Create skeleton place holder
            if (context.skeletonMode) {
                // For rendering for rectangles we use manual scale on zoom since according to investigation it looks better than browser zoom
                // and enables us to render sharp rectangles in all zoom levels.
                telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawSkeletonMs, function () { return skeleton_1.drawSkeleton(ctx, model, context); });
            }
            // For text decoration, we need to draw in scale of 1, in order to make sure the lines are sharp
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawTextDecoration, function () { return textDecoration_1.drawTextDecoration(ctx, model, context); });
            //#endregion
            // *********************************************************************************************************************************************************
            // *********************************************************************************************************************************************************
            //#region  Scale = 1, mirrorCanvas = isRtl
            GridBlockRenderer.setTransform(ctx, 
            /* scale */ 1, model.IsRtl, scaledDrawingOffsetX, scaledDrawingOffsetY, scaledBlockWidth);
            if (context.renderPageLayout) {
                if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.PrintArea, model)) {
                    telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawPrintAreasDurationMs, function () { return printAreas_1.drawPrintAreas(ctx, model, context); });
                }
                if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.PageBreaks, model)) {
                    telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.DrawPageBreaksDurationMs, function () { return pageBreaks_1.drawPageBreaks(ctx, model, context); });
                }
            }
            //#endregion
            // *********************************************************************************************************************************************************
            return telemetry_1.createRenderResult(/* success */ true, 'finished rendering.');
        }
        catch (e) {
            return telemetry_1.createRenderResult(
            /* success */ false, "exception caught in renderBlockInternal: message: " + e.message + " name: " + e.name + " stack: " + e.stack + " error: " + e);
        }
    };
    GridBlockRenderer.clearCanvas = function (ctx, model, width, height, context) {
        if (context.subPixelRenderingEnabled ||
            helpers_2.hasWorkbookBackgroundColor(model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model))) {
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.FillRectDurationMs, function () {
                // sub-pixel rendering on Canvas happens when the alpha option is set to "false".
                // This means that the canvas will not be transparent anymore and may appear as a default black.
                // To make sure the canvas background is correct before starting to draw it needs to be filled with the expected color.
                ctx.fillStyle = helpers_2.getWorkbookBackgroundColor(context.highContrastScheme, model.BackgroundColor, helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.WorkbookBackgroundColor, model));
                ctx.fillRect(0, 0, width, height);
            });
        }
        else {
            telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.ClearRectDurationMs, function () {
                ctx.clearRect(0, 0, width, height);
            });
        }
    };
    /**
     * Set the scaling and translation of the context.
     *
     * @param   {CanvasRenderingContext2D} ctx  canvas context
     * @param   {number} scale                  scaling factor
     * @param   {boolean} mirrorCanvas          mirror horizontally for RTL
     * @param   {number} offsetX                X axis translation
     * @param   {number} offsetY                Y axis translation
     * @param   {number} scaledBlockWidth       The scaled width of the entire block
     */
    GridBlockRenderer.setTransform = function (ctx, scale, mirrorCanvas, offsetX, offsetY, scaledBlockWidth) {
        if (mirrorCanvas) {
            /**
             * The setTransform() method resets the current transform to the identity matrix, and then runs transform() with the given arguments.
             * Usage: `ctx.setTransform( Horizontal scaling, Horizontal skewing, Vertical skewing, Vertical scaling, Horizontal moving, Vertical moving);`
             * Mirroring for RTL is achieved by setting the horizontal scale factor to be negative,
             * and changing the context reference point to be the canvas top-right (instead of top-left).
             */
            ctx.setTransform(-scale, 0, 0, scale, scaledBlockWidth + offsetX, offsetY);
        }
        else {
            ctx.setTransform(scale, 0, 0, scale, offsetX, offsetY);
        }
    };
    /**
     * Initializes cached object and caches all the RefObjects (CellStyle, BorderStyle and Font) on the cells for faster access.
     */
    GridBlockRenderer.prototype.initializeCachedObjects = function (model) {
        helpers_2.verifyArgumentNotNull(model.Cells, 'cells', 'GridBlockRenderer.cacheRefObjects');
        helpers_2.verifyArgumentNotNull(model.Styles, 'styles', 'GridBlockRenderer.cacheRefObjects');
        helpers_2.verifyArgumentNotNull(model.Fonts, 'fonts', 'GridBlockRenderer.cacheRefObjects');
        var shouldRenderBorder = !util_1.isNullOrUndefined(model.BorderStyles);
        for (var i = 0; i < model.Cells.length; i++) {
            var cell = model.Cells[i];
            cell.CachedStyle = gridBlockModelHelpers_1.getReferencedObjectById(cell.StyleID, model.Styles);
            if (shouldRenderBorder && !util_1.isNullOrUndefined(cell.BorderStyleID)) {
                cell.CachedBorderStyle = gridBlockModelHelpers_1.getReferencedObjectById(cell.BorderStyleID, model.BorderStyles);
            }
            cell.CachedFont = gridBlockModelHelpers_1.getReferencedObjectById(cell.CachedStyle.FontID, model.Fonts);
            cell.CachedDrawingLayout = { UnderlineRuns: [], StrikethroughRuns: [], CellTextLayout: {} };
            // If rich text exists, cache each text run's font
            if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, model) && !util_1.isNullOrUndefined(cell.TextRuns)) {
                for (var j = 0; j < cell.TextRuns.length; j++) {
                    var textRun = cell.TextRuns[j];
                    textRun.CachedFont = gridBlockModelHelpers_1.getReferencedObjectById(textRun.FontID, model.Fonts);
                }
            }
        }
    };
    /**
     * Updates cells information:
     * 1. spill information for italic cells since italic might cause text to spill outside of cell boundaries
     *    and for non default fonts since their spill could be very different then whats calculated on the server
     * 2. shrunk size for cells that have shrink to fit
     * 3. sets the cachedDisplayText from cell.Text
     *
     * @param model The GridBlockModel instance
     */
    GridBlockRenderer.prototype.updateCellsBeforeDrawing = function (ctx, model, devicePixelRatio) {
        var cells = model.Cells;
        helpers_2.verifyArgumentNotNull(cells, 'cells', 'GridBlockRenderer.updateCellsBeforeDrawing');
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            var isItalic = cell.CachedFont.Italic;
            var isNonDefaultFont = cell.CachedFont.FontName !== fontsConstants_1.DefaultFontName;
            var isRichText = cell.TextRuns && helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, model);
            var isTextDecoration = cell.CachedFont.Underline !== gridBlockModelDto_1.FontUnderline.None || cell.CachedFont.StrikeThrough;
            if (cell.Text && helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAccountingAndCustom, model)) {
                cell.CachedDisplayText = cell.Text;
            }
            if (helpers_3.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.MeasureTextRefactor, model)) {
                if (cell.Text && helpers_2.cellHasShrinkToFit(cell)) {
                    shrinkToFit_1.updateCellShrinkToFit(ctx, model, cell);
                }
                if (isItalic || isNonDefaultFont || isTextDecoration || isRichText) {
                    spillCell_1.updateCellSpill(ctx, model, cell);
                }
            }
            else {
                if (isItalic || isNonDefaultFont || isTextDecoration || isRichText) {
                    spillCell_1.updateCellSpill(ctx, model, cell);
                }
                if (cell.Text && helpers_2.cellHasShrinkToFit(cell)) {
                    shrinkToFit_1.updateCellShrinkToFit(ctx, model, cell);
                }
            }
            if (cell.Merge) {
                this.updateCellMergeInformation(model, cell, devicePixelRatio);
            }
        }
    };
    /**
     * This method takes the original offsets and calculates the new offsets in relation to the device pixel ratio, adds the last offset,
     * and caches the array in the model row/colOffsetsForDrawingOnly field.
     * It then determines if there is an accumulated pixel error as result of our rounding, and if there is, adds 1 pixel to the last offset.
     *
     * @param model The GridBlockModel instance
     * @param devicePixelRatio Window device pixel ratio
     */
    GridBlockRenderer.prototype.createOffsetsForDrawing = function (model, devicePixelRatio) {
        var rowHeights = model.RowHeights;
        var colWidths = model.ColumnWidths;
        var rowOffsets = model.RowOffsets;
        var colOffsets = model.ColumnOffsets;
        helpers_2.verifyArgumentNotNull(rowHeights, 'rowHeights', 'GridBlockRenderer.createOffsetsForDrawing');
        helpers_2.verifyArgumentNotNull(colWidths, 'colWidths', 'GridBlockRenderer.createOffsetsForDrawing');
        helpers_2.verifyArgumentNotNull(rowOffsets, 'rowOffsets', 'GridBlockRenderer.createOffsetsForDrawing');
        helpers_2.verifyArgumentNotNull(colOffsets, 'colOffsets', 'GridBlockRenderer.createOffsetsForDrawing');
        // Deep copy and calculating the new offsets with the DPR
        model.RowOffsetsAdjustedForDrawing = [];
        for (var i = 0; i < rowOffsets.length; i++) {
            var val = rowOffsets[i];
            model.RowOffsetsAdjustedForDrawing.push(Math.round(val * devicePixelRatio));
        }
        model.ColOffsetsAdjustedForDrawing = [];
        for (var i = 0; i < colOffsets.length; i++) {
            var val = colOffsets[i];
            model.ColOffsetsAdjustedForDrawing.push(Math.round(val * devicePixelRatio));
        }
        // We add the last offset to the array in order to be able to calculate the last row/col width/height
        model.RowOffsetsAdjustedForDrawing.push(helpers_1.getBlockDimensionsAdjustedForDrawing(model.BlockHeight, devicePixelRatio));
        model.ColOffsetsAdjustedForDrawing.push(helpers_1.getBlockDimensionsAdjustedForDrawing(model.BlockWidth, devicePixelRatio));
    };
    /**
     * Updates the given cell mergeInformation client only fields
     *
     * @param model The model
     * @param cell The cell
     * @param devicePixelRatio The device pixel ratio
     */
    GridBlockRenderer.prototype.updateCellMergeInformation = function (model, cell, devicePixelRatio) {
        var mergeInfo = cell.Merge;
        if (mergeInfo.SpansBlocks) {
            // update the adjustedForDrawing fields according to the DPR
            mergeInfo.HeightAdjustedForDrawing = Math.round(mergeInfo.Height * devicePixelRatio);
            mergeInfo.WidthAdjustedForDrawing = Math.round(mergeInfo.Width * devicePixelRatio);
            mergeInfo.OriginDeltaXAdjustedForDrawing = Math.round(mergeInfo.OriginDeltaX * devicePixelRatio);
            mergeInfo.OriginDeltaYAdjustedForDrawing = Math.round(mergeInfo.OriginDeltaY * devicePixelRatio);
            // update whether the cell spans the next blocks
            // cell spans to the next block if the cellOrigin + size > blockSize
            var cellOriginY = model.RowOffsets[cell.Row] - mergeInfo.OriginDeltaY;
            mergeInfo.SpansNextBlockVertically = cellOriginY + mergeInfo.Height > model.BlockHeight;
            var cellOriginX = model.ColumnOffsets[cell.Col] - mergeInfo.OriginDeltaX;
            mergeInfo.SpansNextBlockHorizontally = cellOriginX + mergeInfo.Width > model.BlockWidth;
        }
    };
    GridBlockRenderer.prototype.updatePivotTablesInformationBeforeDrawing = function (pivotTables, devicePixelRatio) {
        if (!pivotTables || pivotTables.length === 0) {
            return;
        }
        for (var i = 0; i < pivotTables.length; i++) {
            var pivotTable = pivotTables[i];
            pivotTable.DeltaXFromOriginPTAdjustedForDrawing = Math.round(pivotTable.DeltaXFromOriginPT * devicePixelRatio);
            pivotTable.DeltaYFromOriginPTAdjustedForDrawing = Math.round(pivotTable.DeltaYFromOriginPT * devicePixelRatio);
            pivotTable.OriginPTHeightAdjustedForDrawing = Math.round(pivotTable.OriginPTHeight * devicePixelRatio);
            pivotTable.OriginPTWidthAdjustedForDrawing = Math.round(pivotTable.OriginPTWidth * devicePixelRatio);
        }
    };
    /**
     * Calculate the rendering offsetX of the model relative to the current canvas element according to the renderingRegion.
     * When drawing large blocks we use multiple canvas elements to draw a single model. The model is split into multiple renderingRegions and drawn on the canvases.
     * For each canvas we draw, we need to shift the drawing properly according to the startOffset of that region so that for each canvas different part of the model will be drawn.
     *
     * @param model the model
     * @param renderingRegion the renderingRegion of the current canvas element
     */
    GridBlockRenderer.prototype.getDrawingOffsetXForRenderingRegion = function (model, renderingRegion) {
        if (!model.IsRtl) {
            // For LTR we need to the drawing according to the renderingRegion startOffset:
            // 0<-------------renderingRegionStartOffset--->------------------------------------------------- <- model offsets
            // ____________________________________________0_________________________________________________ <- canvas2 X axis
            // |                 canvas1                   |                                                |
            // |<-------canvas 2 regionStartOffsetX------->|                 canvas2                        |
            // *___________________________________________|________________________________________________|
            // ^                                           ^
            // block start                               canvas2 start
            // This way for canvas2 we'll start drawing from the block start and can continue using the original drawing offset calculation as if there are no regions.
            return -1 * renderingRegion.startOffsetX;
        }
        // For RTL the column offsets that we get in the model are calculated as if the block right is the start offset (x=0), however in the canvas coordinate system the start is actually the canvas left.
        // Due to this, when calculating the cell offsets we're always converting between the two coordinate systems by using: actualOffset = blockWidth - modelOffset
        // See packages\excel-online-grid-renderer\src\layout\cellLayoutReadme.md for more details on the cell layout calculations.
        //
        // --------------------------------------------<--------renderingRegionEndOffset--------------->0 <- model offsets
        // ____________________________________________0_________________________________________________ <- canvas2 X axis
        // |                   canvas1                 |                                                |
        // |<-------canvas 2 regionStartOffsetX------->|                 canvas2                        |
        // *___________________________________________|________________________________________________|
        // ^                                           ^
        // block start                               canvas2 start
        // In order to convert from the model coordinate system in which the offsets are given to the canvas coordinate system we need to reduce the blockWidth and than add the renderingRegionEndOffset
        return renderingRegion.endOffsetX - model.BlockWidth;
    };
    GridBlockRenderer.prototype.validateRenderingRegion = function (renderingRegion, model) {
        helpers_2.verifyArgumentNotNull(renderingRegion, 'renderingRegion', 'validateRenderingRegion');
        var firstRowStartOffset = model.RowOffsets[renderingRegion.startRow];
        var lastRowEndOffset = model.RowOffsets[renderingRegion.endRow] + model.RowHeights[renderingRegion.endRow];
        var firstColumnStartOffset = model.ColumnOffsets[renderingRegion.startColumn];
        var lastColumnEndOffset = model.ColumnOffsets[renderingRegion.endColumn] + model.ColumnWidths[renderingRegion.endColumn];
        if (firstRowStartOffset > renderingRegion.startOffsetY || lastRowEndOffset < renderingRegion.endOffsetY) {
            throw Error("validateRenderingRegion: Invalid renderingRegion. startOffsetY= " + renderingRegion.startOffsetY + ", endOffsetY = " + renderingRegion.endOffsetY + ", firstRowStartOffset= " + firstRowStartOffset + ", lastRowEndOffset= " + lastRowEndOffset);
        }
        if (firstColumnStartOffset > renderingRegion.startOffsetX || lastColumnEndOffset < renderingRegion.endOffsetX) {
            throw Error("validateRenderingRegion: Invalid renderingRegion. startOffsetX= " + renderingRegion.startOffsetX + ", endOffsetX = " + renderingRegion.endOffsetX + ", firstColumnStartOffset= " + firstColumnStartOffset + ", lastColumnEndOffset= " + lastColumnEndOffset);
        }
    };
    return GridBlockRenderer;
}());
exports.GridBlockRenderer = GridBlockRenderer;
//# sourceMappingURL=gridBlockRenderer.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRendererFactory.js":
/*!********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/gridBlockRendererFactory.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockRenderer_1 = __webpack_require__(/*! ./gridBlockRenderer */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRenderer.js");
var gridBlockModelAccessor_1 = __webpack_require__(/*! ./gridBlockModelAccessor */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockModelAccessor.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var GridBlockRendererFactory = /** @class */ (function () {
    function GridBlockRendererFactory() {
    }
    GridBlockRendererFactory.prototype.getModelAccessor = function (model) {
        helpers_1.verifyArgumentNotNull(model, 'model', 'GridBlockRendererFactory.getModelAccessor');
        return new gridBlockModelAccessor_1.GridBlockModelAccessor(model);
    };
    GridBlockRendererFactory.prototype.getGridBlockRenderer = function () {
        return new gridBlockRenderer_1.GridBlockRenderer();
    };
    return GridBlockRendererFactory;
}());
exports.GridBlockRendererFactory = GridBlockRendererFactory;
//# sourceMappingURL=gridBlockRendererFactory.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRendererGlobals.js":
/*!********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/gridBlockRendererGlobals.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var telemetry_1 = __webpack_require__(/*! ./telemetry */ "../../packages/excel-online-grid-renderer/lib/src/telemetry.js");
var gridBlockModelComparer_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelComparer */ "../../packages/excel-online-models/lib/src/gridBlockModelComparer.js");
var serializer_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/serializer */ "../../packages/excel-online-models/lib/src/serializer.js");
var textLayout_1 = __webpack_require__(/*! ./layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var serialization_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/serialization */ "../../packages/excel-online-models/lib/src/serialization.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var fontLoader_1 = __webpack_require__(/*! ./resourceLoading/fontLoader */ "../../packages/excel-online-grid-renderer/lib/src/resourceLoading/fontLoader.js");
var imageLoader_1 = __webpack_require__(/*! ./resourceLoading/imageLoader */ "../../packages/excel-online-grid-renderer/lib/src/resourceLoading/imageLoader.js");
var GridBlockRendererGlobals = /** @class */ (function () {
    function GridBlockRendererGlobals() {
    }
    /**
     * Returns the name of the performance metrics enum as a string
     *
     * @param index The index of the RenderPerformanceMetric enum
     */
    GridBlockRendererGlobals.lookupPerfMetricName = function (index) {
        return telemetry_1.RenderPerformanceMetric[index];
    };
    /**
     * Returns the text width in pixels according to the text css font by using the measure text canvas2d API
     *
     * @param text the text to measure its width
     * @param font the font in which we want to measure this text width
     */
    GridBlockRendererGlobals.measureTextWidth = function (text, font, shouldUseAdvancedTextMetrics) {
        var canvas = GridBlockRendererGlobals.canvasInstance();
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            throw Error("calculateTextWidth: ctx is undefined");
        }
        ctx.font = font;
        return textLayout_1.measureTextWidth(ctx, text, shouldUseAdvancedTextMetrics);
    };
    /**
     * Compares two model objects and returns the result
     * The comparison ignores fields that don't impact rendering.
     * See more information: packages/excel-online-dto-generator/README.md
     *
     * @param model1 first model to compare
     * @param model2 second model to compare
     */
    GridBlockRendererGlobals.compareGridBlockModels = function (model1, model2) {
        return gridBlockModelComparer_1.areGridBlockModelsEqual(model1, model2);
    };
    /**
     * Serializer API
     * Serializes a cell content after removing private user content
     *
     * @param cell that needs to be serialized
     */
    GridBlockRendererGlobals.serializeCell = function (cell, model) {
        return serializer_1.serializeCell(cell, model);
    };
    /**
     * Register actions to performed if the model has fonts which are not loaded
     *
     * @param model model for which need to check if font loading required
     * @param onFontLoadStateChanged Callback to be called depending upon different stages of font loading
     * @param onFontLoadFailure method to be called if the font loading gets failed.
     */
    GridBlockRendererGlobals.registerActionOnFontLoad = function (model, onFontLoadStateChanged, onFontLoadFailure) {
        fontLoader_1.registerActionOnFontLoadIfRequired(model, onFontLoadStateChanged, onFontLoadFailure);
    };
    /**
     * Clean model from content which is not required during boot (or can be recreated) in order to reduce its size.
     *
     * @param model Model to clean
     */
    GridBlockRendererGlobals.cleanModelBeforeSerialization = function (model) {
        helpers_1.verifyArgumentNotNull(model, 'model', 'cleanModelBeforeSerialization');
        serialization_1.cleanModelBeforeSerialization(model);
    };
    /**
     * Restore model state after serialization complete
     *
     * @param model The model to restore
     */
    GridBlockRendererGlobals.restoreModelAfterSerialization = function (model) {
        helpers_1.verifyArgumentNotNull(model, 'model', 'restoreModelAfterSerialization');
        serialization_1.restoreModelAfterSerialization(model);
    };
    /**
     * Initializes the gridRenderer image loading module
     *
     * @param successCallback success callback to trigger when image successfully loaded
     * @param failureCallback failure callback to trigger when image failed to load
     */
    GridBlockRendererGlobals.initializeGridRendererImageLoader = function (successCallback, failureCallback) {
        imageLoader_1.initializeGridRendererImageLoader(successCallback, failureCallback);
    };
    /**
     * Sets static image url to be used for future loading
     * If there are models waiting for that resource, load it immediately, otherwise load on demand
     *
     * @param staticImage the static image type
     * @param url the image url
     */
    GridBlockRendererGlobals.setStaticImageUrl = function (staticImage, url) {
        imageLoader_1.setStaticImageUrl(staticImage, url);
    };
    GridBlockRendererGlobals.canvasInstance = function () {
        if (!GridBlockRendererGlobals.canvas) {
            GridBlockRendererGlobals.canvas = document.createElement('canvas');
        }
        return GridBlockRendererGlobals.canvas;
    };
    return GridBlockRendererGlobals;
}());
exports.GridBlockRendererGlobals = GridBlockRendererGlobals;
//# sourceMappingURL=gridBlockRendererGlobals.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/helpers.js":
/*!***************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/helpers.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelHelpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelHelpers */ "../../packages/excel-online-models/lib/src/gridBlockModelHelpers.js");
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var fontsConstants_1 = __webpack_require__(/*! ./fontsConstants */ "../../packages/excel-online-grid-renderer/lib/src/fontsConstants.js");
var helpers_2 = __webpack_require__(/*! ./drawing/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var drawingConstants_1 = __webpack_require__(/*! ./drawing/drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var telemetry_1 = __webpack_require__(/*! ./telemetry */ "../../packages/excel-online-grid-renderer/lib/src/telemetry.js");
var numberFormatting_1 = __webpack_require__(/*! ./modelUpdate/numberFormatting */ "../../packages/excel-online-grid-renderer/lib/src/modelUpdate/numberFormatting.js");
/**
 * Verifies that a given argument is not null or undefined
 *
 * @param argument The given argument
 * @param argumentName Name of the given argument
 * @param callerString Name of the caller method
 */
function verifyArgumentNotNull(argument, argumentName, callerString) {
    if (argument === null || argument === undefined) {
        throw Error(callerString + ".verifyArgumentNotNull: " + argumentName + " cannot be null or undefined");
    }
}
exports.verifyArgumentNotNull = verifyArgumentNotNull;
/**
 * numbers comparer
 * https://docs.microsoft.com/en-us/dotnet/api/system.collections.icomparer.compare?view=netframework-4.8
 * @param n1 first number to compare
 * @param n2 second number to compare
 */
function numbersComparer(n1, n2) {
    return n1 - n2;
}
exports.numbersComparer = numbersComparer;
/**
 * From CLR 2.0 Array Implementation
 * http://msdn.microsoft.com/en-us/library/523d096t.aspx
 *
 * @param array The sorted one-dimensional Array to search.
 * @param index The starting index of the range to search.
 * @param length The length of the range to search.
 * @param value The object to search for.
 * @param comparer The comparer to compare the values in the array against value
 * @returns The index of the specified value in the specified array, if value is found.
 *          If value is not found and value is less than one or more elements in array,
 *          a negative number which is the bitwise complement of the index of the first element that is larger than value.
 *          If value is not found and value is greater than any of the elements in array,
 *          a negative number which is the bitwise complement of (the index of the last element plus 1).
 */
function binarySearch(array, index, length, value, comparer) {
    var low = index;
    var high = index + length - 1;
    while (low <= high) {
        var mid = low + ((high - low) >> 1);
        var item = array instanceof Array ? array[mid] : array.item(mid);
        var compareResult = comparer(item, value);
        if (compareResult === 0) {
            return mid;
        }
        if (compareResult < 0) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return ~low;
}
exports.binarySearch = binarySearch;
/**
 * Cell position compare function to determine the cell index within the cells array
 *
 * @param c1 first cell to compare
 * @param c2 second cell to compare
 * @returns 0 if cell position equal. 1 if c2 should be after c1, -1 otherwise.
 */
function cellsPositionComparer(c1, c2) {
    // both cells are in the same row & column
    if (c1.Row === c2.Row && c1.Col === c2.Col) {
        // both cells positions are equal
        return 0;
    }
    // c2 row is after c1 or they're in the same row and c2 column is after c1
    if (c1.Row > c2.Row || (c1.Row === c2.Row && c1.Col > c2.Col)) {
        // c1 is positioned after c2
        return 1;
    }
    // c1 is positioned before c2
    return -1;
}
exports.cellsPositionComparer = cellsPositionComparer;
/**
 * Returns a new instance of a default cell (i.e. empty cell with default formatting)
 * If styles are provided, links the cell to the default style object in the table
 *
 * @param rowIndex the cell's row index
 * @param colIndex the cell's column index
 * @param styles the styles table from the model
 * @param fonts the fonts table from the model
 */
function getDefaultCell(rowIndex, colIndex, styles, fonts) {
    if (styles === void 0) { styles = undefined; }
    if (fonts === void 0) { fonts = undefined; }
    var cachedStyle = styles ? gridBlockModelHelpers_1.getReferencedObjectById(gridBlockModelDto_1.UniqueStyleID.Default, styles) : undefined;
    var cachedFont = fonts && cachedStyle ? gridBlockModelHelpers_1.getReferencedObjectById(cachedStyle.FontID, fonts) : undefined;
    var newCell = {
        Col: colIndex,
        CachedStyle: cachedStyle,
        CachedFont: cachedFont,
        HorizontalAlignmentSet: false,
        Ifmt: 0,
        IfmtStamped: 0,
        Row: rowIndex,
        StyleID: gridBlockModelDto_1.UniqueStyleID.Default,
        BorderStyleID: gridBlockModelDto_1.UniqueStyleID.DefaultBorder,
        Text: '',
        ValueType: gridBlockModelDto_1.CellValueType.None,
        CachedDrawingLayout: { UnderlineRuns: [], StrikethroughRuns: [], CellTextLayout: {} }
    };
    return newCell;
}
exports.getDefaultCell = getDefaultCell;
/**
 * Returns a string representing the text style.
 * It takes ShrunkFontSize and FontName into account.
 *
 * @param cell The cell
 */
function getFontCssStringFromCell(cell) {
    return getFontCssStringFromFont(cell.CachedFont, getShrunkFontSize(cell));
}
exports.getFontCssStringFromCell = getFontCssStringFromCell;
/**
 * Returns a string representing the text style from Font.
 *
 * @param font The font
 * @param shrunkFontSize The shrunk font size in case the cell has shrink to fit.
 */
function getFontCssStringFromFont(font, shrunkFontSize) {
    var _a;
    var fontWeightStyle = getCellFontWeightStyle(font.Bold || false, font.Italic || false);
    var fontSize = (_a = (shrunkFontSize !== null && shrunkFontSize !== void 0 ? shrunkFontSize : font.Size), (_a !== null && _a !== void 0 ? _a : fontsConstants_1.DefaultFontSizePt));
    var adaptedFontName = canonizeFontName(font.FontName);
    // Notice the ordering of the properties is important (otherwise canvas would ignore some of them)
    return fontWeightStyle + " " + fontSize + "pt " + adaptedFontName;
}
exports.getFontCssStringFromFont = getFontCssStringFromFont;
/**
 * Returns a string representing font weight style
 * @param isBold is the font style contains "bold" property
 * @param isItalic is the font style contains "bold" property
 */
function getCellFontWeightStyle(isBold, isItalic) {
    var fontWeightStyle = '';
    if (isBold && isItalic) {
        fontWeightStyle = 'bold italic';
    }
    else if (isBold) {
        fontWeightStyle = 'bold';
    }
    else if (isItalic) {
        fontWeightStyle = 'italic';
    }
    else {
        fontWeightStyle = 'normal';
    }
    return fontWeightStyle;
}
exports.getCellFontWeightStyle = getCellFontWeightStyle;
/**
 * Throw error with caller name in the message
 *
 * @param message the message of the error
 * @param caller the caller who threw the error
 */
function throwError(message, callerString) {
    throw Error(callerString + ": " + message);
}
exports.throwError = throwError;
/**
 * when rendering lines on canvas, the browser starts rendering at point (x,y) and adds half the width to each direction.
 * when we need to render odd width, we manipulate the drawing so that the drawing position would start in the middle of a pixel since we can't draw sub-pixel.
 * this way the line width would be exact.
 */
function getLinePixelTranslation(lineWidth) {
    return lineWidth / 2;
}
exports.getLinePixelTranslation = getLinePixelTranslation;
/**
 * Returns true if the cell is adjacent to a merge cell
 *
 * @param rowIndex the column index of the cell
 * @param columnIndex the row index of the cell
 * @param model the model
 */
function isCellAdjacentToMergedCell(rowIndex, columnIndex, model) {
    verifyArgumentNotNull(model, 'model', 'isCellAdjacentToMergedCell');
    var adjacentCells = getAdjacentCells(rowIndex, columnIndex, model);
    // Check if any of the adjacent cells is merged cell
    for (var i = 0; i < adjacentCells.length; i++) {
        if (adjacentCells[i] && adjacentCells[i].Merge) {
            return true;
        }
    }
    return false;
}
exports.isCellAdjacentToMergedCell = isCellAdjacentToMergedCell;
/**
 * Returns a cell lookup table object based on model.Cells
 */
function initCellLookup(model) {
    verifyArgumentNotNull(model, 'model', 'initCellLookup');
    verifyArgumentNotNull(model.Cells, 'model.Cells', 'initCellLookup');
    var lookup = {};
    for (var i = 0; i < model.Cells.length; i++) {
        var cell = model.Cells[i];
        if (cell) {
            // Only add a cell to the lookup table if it exist
            lookup[helpers_1.cellLookupKey(cell.Row, cell.Col)] = cell;
            // For merge cell we want all the merged cells to point to the original one in the lookup table
            if (cell.Merge) {
                for (var r = 0; r <= cell.Merge.Rows; r++) {
                    for (var c = 0; c <= cell.Merge.Columns; c++) {
                        lookup[helpers_1.cellLookupKey(cell.Row + r, cell.Col + c)] = cell;
                    }
                }
            }
            else {
                lookup[helpers_1.cellLookupKey(cell.Row, cell.Col)] = cell;
            }
        }
    }
    return lookup;
}
exports.initCellLookup = initCellLookup;
/**
 * Returns the Cell corresponding to the given row/column from the model
 * Returns null if the cell doesn't exist
 *
 * @param rowIndex The absolute row position in the grid (e.g. 50) - 0 based
 * @param colIndex The absolute column index position in the grid (e.g. 27 for 'AA') - 0 based
 * @param model The model
 */
function getCell(rowIndex, colIndex, model) {
    verifyArgumentNotNull(model, 'model', 'initCellLookup');
    if (!model.CellLookup) {
        model.CellLookup = initCellLookup(model);
    }
    return model.CellLookup[helpers_1.cellLookupKey(rowIndex, colIndex)];
}
exports.getCell = getCell;
/**
 * Returns the width of a column in pixels
 *
 * @param colIndex the requested column to get its width
 * @param model The model
 */
function getColumnWidth(colIndex, model) {
    verifyArgumentNotNull(model, 'model', 'getColumnWidth');
    verifyArgumentNotNull(model.ColumnWidths, 'ColumnWidths', 'getColumnWidth');
    if (colIndex > model.ColumnWidths.length - 1 || colIndex < 0) {
        throw Error('getColumnWidth: column width requested for a cell which is not in range of the model');
    }
    return model.ColumnWidths[colIndex];
}
exports.getColumnWidth = getColumnWidth;
/**
 * Returns the cell style object and caches it on cell!.CachedStyle field if its not cached yet
 *
 * @param cell the cell for which we request the style
 * @param model The model
 */
function getCellStyle(cell, model) {
    verifyArgumentNotNull(cell, 'cell', 'getCellStyle');
    verifyArgumentNotNull(model.Styles, 'Styles', 'getCellStyle');
    if (!cell.CachedStyle) {
        cell.CachedStyle = gridBlockModelHelpers_1.getReferencedObjectById(cell.StyleID, model.Styles);
    }
    return cell.CachedStyle;
}
exports.getCellStyle = getCellStyle;
/**
 * Get the cell's Font.
 */
function getCellFont(cell, model) {
    verifyArgumentNotNull(cell, 'cell', 'getCellFont');
    verifyArgumentNotNull(model.Styles, 'Styles', 'getCellFont');
    verifyArgumentNotNull(model.Fonts, 'Fonts', 'getCellFont');
    if (!cell.CachedFont) {
        var cellStyle = getCellStyle(cell, model);
        cell.CachedFont = gridBlockModelHelpers_1.getReferencedObjectById(cellStyle.FontID, model.Fonts);
    }
    return cell.CachedFont;
}
exports.getCellFont = getCellFont;
/**
 * Returns the index where the given cell should be in the given array
 *
 * @param cell the cell
 * @param cellsArray the array of the cells
 */
function getCellPositionInArray(cell, cellsArray) {
    var position = binarySearch(cellsArray, 
    /* index */ 0, 
    /* length */ cellsArray.length, cell, cellsPositionComparer);
    if (position < 0) {
        position = ~position;
    }
    return position;
}
exports.getCellPositionInArray = getCellPositionInArray;
/**
 * Returns a list of the adjacent cells of the given cell.
 * Cell in the list may be null if it doesn't exist
 *
 * @param rowIndex the row index of the cell
 * @param columnIndex the column index of the cell
 * @param model the model
 */
function getAdjacentCells(rowIndex, columnIndex, model) {
    return [
        getCell(rowIndex - 1, columnIndex, model),
        getCell(rowIndex + 1, columnIndex, model),
        getCell(rowIndex, columnIndex - 1, model),
        getCell(rowIndex, columnIndex + 1, model)
    ];
}
/**
 * Returns true if the cell has shrink to fit
 *
 * @param cell the cell
 * @param model the model
 */
function cellHasShrinkToFit(cell) {
    return cell.CachedStyle.ShrinkToFit && !cell.WrapText;
}
exports.cellHasShrinkToFit = cellHasShrinkToFit;
/**
 * Get the shrunk font size in case the cell has shrink to fit
 *
 * @param cell The cell for which we need the font
 * @param model The model
 *
 * @return The font size if the cell has shrink to fit, else return undefined
 */
function getShrunkFontSize(cell) {
    if (cellHasShrinkToFit(cell)) {
        return cell.ShrunkSize;
    }
    return undefined;
}
exports.getShrunkFontSize = getShrunkFontSize;
/**
 * Returns the sub text from the cell text indicated by the passed text run item
 *
 * @param run TextRun to render
 * @param runIndex run character index of the text run inside the runs array param
 * @param runs all text runs in the cell formatted text
 * @param cellText the cell text content
 */
function getTextRunText(runIndex, runs, cellText) {
    var run = runs[runIndex];
    var textStartIndex = run.StartIndex;
    var textEndIndex = cellText.length;
    if (runIndex < runs.length - 1) {
        // If this is not the last run - the end index is the beginning of the next one
        textEndIndex = runs[runIndex + 1].StartIndex;
    }
    return cellText.substring(textStartIndex, textEndIndex);
}
exports.getTextRunText = getTextRunText;
/**
 * Returns the actual font size: if the cell is shrink to fit the actual font size is the shrunk font size, otherwise it returns the original font size
 *
 * @param cell the cell we check its font
 */
function getActualFontSize(cell) {
    var _a, _b;
    var doesCellHaveShrinkToFit = cellHasShrinkToFit(cell);
    var actualFontSize = doesCellHaveShrinkToFit ? cell.ShrunkSize : cell.CachedFont.Size;
    if (actualFontSize < 0) {
        telemetry_1.setActualFontSizeWarning("\n      actual font size < 0.\n      doesCellHaveShrinkToFit: " + doesCellHaveShrinkToFit + ",\n      cell.ShrunkSize: " + cell.ShrunkSize + ",\n      cell.CachedFont:\n        size: " + cell.CachedFont.Size + ";\n        fontName: " + getFontNameForLogging(cell.CachedFont.FontName) + ";\n        refCount: " + cell.CachedFont.RefCount + ";\n      cell.CachedStyle:\n        isHidden: " + ((_a = cell.CachedStyle) === null || _a === void 0 ? void 0 : _a.IsHidden) + ";\n        shrinkToFit: " + ((_b = cell.CachedStyle) === null || _b === void 0 ? void 0 : _b.ShrinkToFit) + ";\n      cell.Ifmt: " + cell.Ifmt + ";\n      cell.WrapText: " + cell.WrapText + ";\n    ");
    }
    return actualFontSize;
}
exports.getActualFontSize = getActualFontSize;
/**
 * Setter for the CachedDisplayText property in the cell. We need to reset the cached width every time we change the displayed text
 *
 * @param cell The cell
 * @param newText The text to be displayed
 */
function setCellCachedDisplayText(cell, newText) {
    cell.CachedDisplayText = newText;
    cell.CachedDrawingLayout.CellTextLayout.Width = undefined;
}
exports.setCellCachedDisplayText = setCellCachedDisplayText;
/**
 * get the workbook background color that should be rendered
 *
 * @param context the model context
 * @param workbookBackgroundColor the workbook background color (null means default)
 * @param isWorkbookBackgroundColorEnabled is workbook background render flag enabled
 */
function getWorkbookBackgroundColor(highContrastScheme, workbookBackgroundColor, isWorkbookBackgroundColorEnabled) {
    if (!util_1.isNullOrUndefined(highContrastScheme)) {
        return helpers_2.rgbToColorHex(highContrastScheme.BackgroundColor);
    }
    if (hasWorkbookBackgroundColor(workbookBackgroundColor, isWorkbookBackgroundColorEnabled)) {
        return workbookBackgroundColor;
    }
    return drawingConstants_1.DefaultBackgroundColor;
}
exports.getWorkbookBackgroundColor = getWorkbookBackgroundColor;
/**
 * Returns true if the workbook background color is not-default and the related render flag is enabled
 *
 * @param workbookBackgroundColor the workbook background color (null means default)
 * @param isRenderFlagEnabled is workbook background render flag enabled
 */
function hasWorkbookBackgroundColor(workbookBackgroundColor, isRenderFlagEnabled) {
    return isRenderFlagEnabled && !util_1.isNullOrUndefined(workbookBackgroundColor);
}
exports.hasWorkbookBackgroundColor = hasWorkbookBackgroundColor;
/**
 * Returnes true if we are on high contrast mode
 *
 * @param context the model context
 */
function isHighContrastMode(context) {
    return !util_1.isNullOrUndefined(context.highContrastScheme);
}
exports.isHighContrastMode = isHighContrastMode;
/**
 * Creates `FormattedText` or `undefined` if no RTF content exists
 *
 * @param cell Cell to render
 * @param model GridBlockModel
 */
function getFormattedText(text, cell, model) {
    if (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, model) && cell.TextRuns && model.Fonts) {
        return {
            Text: text,
            TextRuns: cell.TextRuns,
            Fonts: model.Fonts
        };
    }
    return undefined;
}
exports.getFormattedText = getFormattedText;
/**
 * Returns the text that needs to be displayed.
 * Removes all hardBreaks from text, because we don't need to draw these chars.
 *
 * @param cell the Cell with text that is being drawn
 * @param model The model
 */
function getDisplayText(cell, model) {
    var text = helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAccountingAndCustom, model) ? cell.CachedDisplayText : cell.Text;
    // Removes all hardBreaks from text, because we don't need to draw these chars.
    if (!cell.WrapText && (text.indexOf(drawingConstants_1.HardBreakCRLF) !== -1 || text.indexOf(drawingConstants_1.HardBreak) !== -1)) {
        return text.replace(/\r\n|\n/g, '');
    }
    return text;
}
exports.getDisplayText = getDisplayText;
/**
 * Get the font name for logging.
 */
function getFontNameForLogging(fontName) {
    var fontNameForLog = 'Custom Font';
    // check if the lower case, no white space version of the font name is a known one
    if (fontsConstants_1.knownFontNamesLowerCase.indexOf(fontName.replace(/\s/g, '').toLowerCase()) > -1) {
        fontNameForLog = fontName;
    }
    return fontNameForLog;
}
exports.getFontNameForLogging = getFontNameForLogging;
/**
 * Updates the cell text, updates CachedDisplayText and NumFmtMetadata (if applicable)
 */
function updateCellText(model, cell, text) {
    var _a;
    cell.Text = text;
    // Update CachedText before model update.
    if (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAccountingAndCustom, model)) {
        cell.CachedDisplayText = (_a = cell) === null || _a === void 0 ? void 0 : _a.Text;
    }
    if (helpers_1.isAccAndCustomNumFmtApplicable(cell, model)) {
        numberFormatting_1.updateNumFmtFromCell(cell);
    }
    else {
        cell.NumFmt = undefined;
    }
}
exports.updateCellText = updateCellText;
/**
 * Returns canonic font name string
 * example 1: "Calibri" => "Calibri"
 * example 2: "Calibri (Body)" => "Calibri"
 *
 * @param fontName the original font name
 */
function canonizeFontName(fontName) {
    // Remove '(Body)' part of the font name string, if it exists, as this prevents us from updating ctx.font
    var bodyIndex = fontName.indexOf('(Body)');
    if (bodyIndex > 0) {
        return fontName.substring(0, bodyIndex).trim();
    }
    return fontName;
}
exports.canonizeFontName = canonizeFontName;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js":
/*!*************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module is responsible for getting the layout information of a cell (e.g. cell position & dimensions)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var helpers_2 = __webpack_require__(/*! ../drawing/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/helpers.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawing/drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
/**
 * Returns the width of the cell considering merge information
 *
 * @param model The model
 * @param cell The cell
 * @param limitToBlockDimensions Set to true in order to get the width within the current block,
 *                               otherwise returns the total width across all blocks (in case of merge cells).
 *                               For drawing this should always be false.
 */
function getCellWidth(model, cell, limitToBlockDimensions) {
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'getCellWidth');
    helpers_1.verifyArgumentNotNull(model, 'model', 'getCellWidth');
    helpers_1.verifyArgumentNotNull(model.ColumnWidths, 'model.ColumnWidths', 'getCellWidth');
    if (cell.Merge) {
        if (cell.Merge.SpansBlocks && !limitToBlockDimensions) {
            return cell.Merge.Width;
        }
        helpers_1.verifyArgumentNotNull(model.ColumnOffsets, 'model.ColumnOffsets', 'getCellWidth');
        var mergeLastCol = cell.Col + cell.Merge.Columns;
        var startOffset = model.ColumnOffsets[cell.Col];
        var endOffset = model.ColumnOffsets[mergeLastCol] + model.ColumnWidths[mergeLastCol];
        return endOffset - startOffset;
    }
    return model.ColumnWidths[cell.Col];
}
exports.getCellWidth = getCellWidth;
/**
 * Returns the height of the cell considering merge information
 *
 * @param model The model
 * @param cell The cell
 * @param limitToBlockDimensions Set to true in order to get the width within the current block,
 *                               otherwise returns the total width across all blocks (in case of merge cells).
 *                               For drawing this should always be false.
 */
function getCellHeight(model, cell, limitToBlockDimensions) {
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'getCellHeight');
    helpers_1.verifyArgumentNotNull(model, 'model', 'getCellHeight');
    helpers_1.verifyArgumentNotNull(model.RowHeights, 'model.RowHeights', 'getCellHeight');
    if (cell.Merge) {
        if (cell.Merge.SpansBlocks && !limitToBlockDimensions) {
            return cell.Merge.Height;
        }
        helpers_1.verifyArgumentNotNull(model.RowOffsets, 'model.RowOffsets', 'getCellHeight');
        var mergeLastRow = cell.Row + cell.Merge.Rows;
        var startOffset = model.RowOffsets[cell.Row];
        var endOffset = model.RowOffsets[mergeLastRow] + model.RowHeights[mergeLastRow];
        return endOffset - startOffset;
    }
    return model.RowHeights[cell.Row];
}
exports.getCellHeight = getCellHeight;
/**
 * Returns the left position of the cell in px
 *
 * @param model grid block model
 * @param cell relevant cell
 * @param canvasWidth canvas width
 */
function getCellLeft(model, cell, canvasWidth) {
    var cellOffsetX = model.ColumnOffsets[cell.Col];
    if (cell.Merge && cell.Merge.SpansBlocks) {
        cellOffsetX -= cell.Merge.OriginDeltaX;
    }
    return !model.IsRtl
        ? cellOffsetX
        : canvasWidth - cellOffsetX - getCellWidth(model, cell, /* limitToBlockDimensions */ false) + drawingConstants_1.GridLineWidthPx;
}
exports.getCellLeft = getCellLeft;
/**
 * Returns the right position of the cell in px
 *
 * @param model grid block model
 * @param cell relevant cell
 * @param canvasWidth canvas width
 */
function getCellRight(model, cell, canvasWidth) {
    var cellOffsetX = model.ColumnOffsets[cell.Col];
    if (cell.Merge && cell.Merge.SpansBlocks) {
        cellOffsetX -= cell.Merge.OriginDeltaX;
    }
    return !model.IsRtl
        ? cellOffsetX + getCellWidth(model, cell, /* limitToBlockDimensions */ false) - drawingConstants_1.GridLineWidthPx
        : canvasWidth - cellOffsetX;
}
exports.getCellRight = getCellRight;
/**
 * Returns the bottom position of the cell in px
 *
 * @param model the grid model.
 * @param cell the cell to render.
 */
function getCellBottom(model, cell) {
    return getCellTop(model, cell) + getCellHeight(model, cell, /* limitToBlockDimensions */ false);
}
exports.getCellBottom = getCellBottom;
/**
 * Returns the Top position of the cell in px.
 *
 * @param model the grid model.
 * @param cell the cell to render.
 */
function getCellTop(model, cell) {
    var cellOffsetY = model.RowOffsets[cell.Row];
    if (cell.Merge && cell.Merge.SpansBlocks) {
        cellOffsetY -= cell.Merge.OriginDeltaY;
    }
    return cellOffsetY;
}
exports.getCellTop = getCellTop;
/**
 * Returns the Vertical Center position of the cell in px
 *
 * @param model the grid model.
 * @param cell the cell to render.
 */
function getCellCenterY(model, cell) {
    var offSetY = getCellTop(model, cell) + getCellHeight(model, cell, /* limitToBlockDimensions */ false) / 2;
    // when rendering lines on canvas, the browser starts rendering at point (x,y) and adds half the width to each direction.
    // when we need to render odd width, we manipulate the drawing so that the drawing position would start in the middle of a pixel since we can't draw sub-pixel.
    // this way the line width would be exact.
    return offSetY - drawingConstants_1.GridLineWidthPx / 2;
}
exports.getCellCenterY = getCellCenterY;
/**
 * Returns the width of the cell considering merged cell information
 *
 * @param model The model
 * @param cell The cell
 */
function getCellWidthAdjustedForDrawing(model, cell) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'getCellWidthAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(model.ColOffsetsAdjustedForDrawing, 'model.ColOffsetsAdjustedForDrawing', 'getCellWidthAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'getCellWidthAdjustedForDrawing');
    if (cell.Merge) {
        if (cell.Merge.SpansBlocks) {
            return cell.Merge.WidthAdjustedForDrawing;
        }
        var mergeLastColumn = cell.Col + cell.Merge.Columns;
        var startOffset = model.ColOffsetsAdjustedForDrawing[cell.Col];
        var endOffset = model.ColOffsetsAdjustedForDrawing[mergeLastColumn + 1];
        return endOffset - startOffset;
    }
    return helpers_2.getColWidthFromOffsets(cell.Col, model.ColOffsetsAdjustedForDrawing);
}
exports.getCellWidthAdjustedForDrawing = getCellWidthAdjustedForDrawing;
/**
 * Returns the height of the cell considering merge cell information
 *
 * @param model The model
 * @param cell The cell
 */
function getCellHeightAdjustedForDrawing(model, cell) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'getCellHeightAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(model.RowOffsetsAdjustedForDrawing, 'model.RowOffsetsAdjustedForDrawing', 'getCellHeightAdjustedForDrawing');
    helpers_1.verifyArgumentNotNull(cell, 'cell', 'getCellHeightAdjustedForDrawing');
    if (cell.Merge) {
        if (cell.Merge.SpansBlocks) {
            return cell.Merge.HeightAdjustedForDrawing;
        }
        var mergeLastRow = cell.Row + cell.Merge.Rows;
        var startOffset = model.RowOffsetsAdjustedForDrawing[cell.Row];
        var endOffset = model.RowOffsetsAdjustedForDrawing[mergeLastRow + 1];
        return endOffset - startOffset;
    }
    return helpers_2.getRowHeightFromOffsets(cell.Row, model.RowOffsetsAdjustedForDrawing);
}
exports.getCellHeightAdjustedForDrawing = getCellHeightAdjustedForDrawing;
/**
 * Returns the actual drawing left position of the cell in px, calculated with the DPR
 *
 * @param model grid block model
 * @param cell relevant cell
 * @param isMirrored should be true if called when drawing on a mirror canvas (RTL sheet), false otherwise.
 */
function getCellLeftAdjustedForDrawing(model, cell, isMirrored) {
    var cellLeftColIndex = cell.Col;
    var originDeltaX = 0;
    if (cell.Merge) {
        // for merge cells we need to look at the left most column in case of RTL
        if (model.IsRtl && !isMirrored) {
            cellLeftColIndex += cell.Merge.Columns;
        }
        // if we're merge across multiple blocks we need to take into account the cell origin offset outside the block
        if (cell.Merge.SpansBlocks) {
            originDeltaX = cell.Merge.OriginDeltaXAdjustedForDrawing;
        }
    }
    // LTR worksheet or RTL worksheet while drawing on mirrored canvas
    if (!model.IsRtl || isMirrored) {
        return model.ColOffsetsAdjustedForDrawing[cellLeftColIndex] - originDeltaX;
    }
    // RTL worksheet
    return getCellRightAdjustedForDrawing(model, cell) - getCellWidthAdjustedForDrawing(model, cell) + drawingConstants_1.GridLineWidthPx;
}
exports.getCellLeftAdjustedForDrawing = getCellLeftAdjustedForDrawing;
/**
 * Returns the actual drawing right position of the cell in px, calculated with the DPR
 *
 * @param model grid block model
 * @param cell relevant cell
 */
function getCellRightAdjustedForDrawing(model, cell) {
    var offsets = model.ColOffsetsAdjustedForDrawing;
    var lastColOffsetIndex = offsets.length - 1;
    var cellRightColIndex = cell.Col;
    if (!model.IsRtl) {
        return (getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false) +
            getCellWidthAdjustedForDrawing(model, cell) -
            drawingConstants_1.GridLineWidthPx);
    }
    var originDeltaX = cell.Merge && cell.Merge.SpansBlocks ? cell.Merge.OriginDeltaXAdjustedForDrawing : 0;
    return offsets[lastColOffsetIndex] + originDeltaX - offsets[cellRightColIndex];
}
exports.getCellRightAdjustedForDrawing = getCellRightAdjustedForDrawing;
/**
 * Returns the actual drawing bottom position of the cell in px, calculated with the DPR
 *
 * @param model grid block model
 * @param cell relevant cell
 */
function getCellBottomAdjustedForDrawing(model, cell) {
    return getCellTopAdjustedForDrawing(model, cell) + getCellHeightAdjustedForDrawing(model, cell);
}
exports.getCellBottomAdjustedForDrawing = getCellBottomAdjustedForDrawing;
/**
 * Returns the actual drawing vertical center position of the cell in px, calculated with the DPR
 *
 * @param model grid block model
 * @param cell relevant cell
 */
function getCellCenterYAdjustedForDrawing(model, cell) {
    return getCellTopAdjustedForDrawing(model, cell) + getCellHeightAdjustedForDrawing(model, cell) / 2;
}
exports.getCellCenterYAdjustedForDrawing = getCellCenterYAdjustedForDrawing;
/**
 * Returns the actual drawing horizontal center position of the cell in px, calculated with the DPR
 *
 * @param model grid block model
 * @param cell relevant cell
 */
function getCellCenterXAdjustedForDrawing(model, cell) {
    return ((getCellRightAdjustedForDrawing(model, cell) + getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false)) /
        2);
}
exports.getCellCenterXAdjustedForDrawing = getCellCenterXAdjustedForDrawing;
/**
 * Returns the actual drawing top position of the cell in px, calculated with the DPR
 *
 * @param model the grid model.
 * @param cell the cell to render.
 */
function getCellTopAdjustedForDrawing(model, cell) {
    var OriginDeltaY = 0;
    if (cell.Merge && cell.Merge.SpansBlocks) {
        OriginDeltaY = cell.Merge.OriginDeltaYAdjustedForDrawing;
    }
    return model.RowOffsetsAdjustedForDrawing[cell.Row] - OriginDeltaY;
}
exports.getCellTopAdjustedForDrawing = getCellTopAdjustedForDrawing;
/**
 * Returns true if the cell spans more than one row or more than one block
 *
 * @param model The model
 * @param cell The cell
 */
function isCellSpansMultipleRowsOrBlocks(cell) {
    return !util_1.isNullOrUndefined(cell.Merge) && (cell.Merge.Rows > 0 || cell.Merge.SpansBlocks === true);
}
exports.isCellSpansMultipleRowsOrBlocks = isCellSpansMultipleRowsOrBlocks;
/**
 * Returns the width of the entire spill cell including all of the cells it is spanned across
 *
 * @param  {Cell} cell the spill cell
 * @param  {GridBlockModel} model
 * @returns number - the spill cell width
 */
function getSpillCellWidth(cell, model) {
    var startColOffset = model.ColumnOffsets[getSpillCellStartCol(cell)];
    var endColumn = getSpillCellEndCol(cell, model);
    var endColOffset = model.ColumnOffsets[endColumn];
    var endColWidth = model.ColumnWidths[endColumn];
    // [--------------------------------[--endColWidth--]
    // ^                                ^               ^
    // startColOffset                   endColOffset    cellWidth
    return endColWidth + Math.abs(endColOffset - startColOffset);
}
exports.getSpillCellWidth = getSpillCellWidth;
/**
 * Returns the spill cell start x-offset taking into account
 * the entire spill cell including all of the cells it is spanned across,
 * And the sheet rtl mode.
 *
 * @param  {Cell} cell the spill cell
 * @param  {GridBlockModel} model
 * @returns number - the spill cell start x-offset
 */
function getSpillCellStartOffset(cell, model) {
    var spillStartOffset = model.ColumnOffsets[getSpillCellStartCol(cell)];
    if (model.IsRtl) {
        return model.BlockWidth - getSpillCellWidth(cell, model) - spillStartOffset + 1;
    }
    return spillStartOffset;
}
exports.getSpillCellStartOffset = getSpillCellStartOffset;
/**
 * Returns the spill cell start column taking into account the entire spill cell including all of the cells it is spanned across
 *
 * @param  {Cell} cell the spill cell
 * @returns number - the spill cell start column
 */
function getSpillCellStartCol(cell) {
    return Math.max(0, cell.Col - cell.Spill.SpanToStart);
}
/**
 * Returns the spill cell end column taking into account the entire spill cell including all of the cells it is spanned across
 *
 * @param  {Cell} cell the spill cell
 * @param  {GridBlockModel} model the block model of the given cell
 * @returns number - the spill cell end column
 */
function getSpillCellEndCol(cell, model) {
    helpers_1.verifyArgumentNotNull(model.ColumnNumbers, 'model.ColumnNumbers', 'spillCell.getSpillCellEndCol');
    return Math.min(model.ColumnNumbers.length - 1, cell.Col + cell.Spill.SpanToEnd);
}
//# sourceMappingURL=cellLayout.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataMapper.js":
/*!*************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataMapper.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fontsConstants_1 = __webpack_require__(/*! ../fontsConstants */ "../../packages/excel-online-grid-renderer/lib/src/fontsConstants.js");
/**
 *  Gets a value from a given dictionary by fontSize key
 *  If the fontSize does not exists in the given dictionary
 *  we will do a linear approximation of the value by
 *  Finding the two closest font sizes which do exists
 *  (lower and higher from the requested font size) and use
 *  its values to get an approximation of the requested value.
 *
 *  The found value will also be cached for the requested font
 *  size in the given dictionary for future requests.
 *
 * @param fontSize the key to the dictionary - the requested font size in pt (not px) to find the value for
 * @param dictionary the dictionary from font size to value, to search to fontSize value in
 * */
function approximateValue(fontSize, dictionary // key:[fontSize : number], value : number
) {
    var roundedFontSize = Math.round(fontSize);
    // Font sizes between MinAllowedFontSize and 0 can be a result of shrink to fit cells
    if (roundedFontSize < fontsConstants_1.MinAllowedFontSize && roundedFontSize > 0) {
        roundedFontSize = fontsConstants_1.MinAllowedFontSize;
    }
    if (roundedFontSize > fontsConstants_1.MaxAllowedFontSize) {
        roundedFontSize = fontsConstants_1.MaxAllowedFontSize;
    }
    if (roundedFontSize < 0) {
        throw Error("TextLayout.approximateValue: " + roundedFontSize + " in Excel must be between 1pt and 409pt");
    }
    var valueInPx = dictionary[roundedFontSize];
    if (valueInPx) {
        // if we have found the value for the requested font size return it
        return valueInPx;
    }
    /**
     * If we did not find a value in the dictionary for this font size,
     * calculate its value by its relative distance from closest font sizes
     * that do exists in the dictionary
     */
    var lowerBoundFontSize = roundedFontSize;
    while (lowerBoundFontSize > fontsConstants_1.MinAllowedFontSize && !dictionary[lowerBoundFontSize]) {
        lowerBoundFontSize--;
    }
    var upperBoundFontSize = roundedFontSize;
    while (upperBoundFontSize < fontsConstants_1.MaxAllowedFontSize && !dictionary[upperBoundFontSize]) {
        upperBoundFontSize++;
    }
    valueInPx = approximateValueBetweenFontSizes(dictionary[upperBoundFontSize], dictionary[lowerBoundFontSize], roundedFontSize, lowerBoundFontSize, upperBoundFontSize);
    // Cache this result in the dictionary
    dictionary[roundedFontSize] = valueInPx;
    return valueInPx;
}
exports.approximateValue = approximateValue;
/**
 * Approximate a value for a given font size which is between two given font sizes and their values.
 * The returned value is the linear approximation of the two given values by their given font sizes.
 *
 * For the given two keys in the dictionary (lower from the requested font size, and higher from it)
 * and their values, we want to calculate the value of the given fontSize between them
 * [lowerBoundFontSize] = lowerBoundValue
 * [fontSize] = ?
 * [upperBoundFontSize] = upperBoundValue
 *
 * We use the keys (font sizes) to get the proportional distances which is then used to find the value with the same proportion
 *           <---------lowerDelta-------> <-------upperDelta-------->
 *          |----------------------------|---------------------------|
 *  lowerBoundFontSize                fontSize             upperBoundFontSize
 *
 * @param upperBoundValue the value of the higher font size
 * @param lowerBoundValue the value of the lower font size
 * @param fontSize the font size to find the return value for
 * @param lowerBoundFontSize the lower font size (the lower key)
 * @param upperBoundFontSize the higher font size (the higher key)
 */
function approximateValueBetweenFontSizes(upperBoundValue, lowerBoundValue, fontSize, lowerBoundFontSize, upperBoundFontSize) {
    var valueDelta = upperBoundValue - lowerBoundValue;
    var deltaToLowFontSize = fontSize - lowerBoundFontSize;
    var wholeRangeFromLowerToUpperFontSize = upperBoundFontSize - lowerBoundFontSize;
    var weightedDistanceFromLowerBound = (deltaToLowFontSize / wholeRangeFromLowerToUpperFontSize) * valueDelta;
    return Math.round(lowerBoundValue + weightedDistanceFromLowerBound);
}
//# sourceMappingURL=fontSizeMetadataMapper.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataTables.js":
/*!*************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataTables.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// These paddings were measured to have pixel perfect fidelity with Excel desktop
// The values are specific to Calibri font.
// <key: font size in pt, value: padding in pixels from right (right horizontal alignment) on italic>
exports.CalibriItalicPadding = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 2,
    6: 3,
    7: 3,
    8: 4,
    9: 4,
    10: 5,
    11: 5,
    12: 6,
    13: 5,
    14: 7,
    16: 8,
    18: 9,
    20: 11,
    22: 11,
    24: 11,
    26: 13,
    28: 13,
    36: 17,
    48: 23,
    72: 35,
    100: 49,
    150: 74,
    200: 97,
    300: 145,
    409: 194
};
// <key:  Font size in pt, value: padding in pixels from right or left (when there is no italic style)>
exports.CalibriRegularPadding = {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 2,
    7: 2,
    8: 2,
    9: 2,
    10: 2,
    11: 2,
    12: 2,
    13: 3,
    14: 3,
    15: 3,
    16: 3,
    17: 3,
    18: 3,
    19: 4,
    20: 4,
    21: 4,
    22: 4,
    23: 4,
    24: 4,
    25: 5,
    26: 5,
    27: 5,
    28: 5,
    29: 5,
    30: 5,
    31: 6,
    32: 6,
    33: 6,
    34: 6,
    35: 6,
    36: 6,
    37: 7,
    38: 7,
    39: 7,
    40: 7,
    41: 7,
    42: 7,
    43: 8,
    44: 8,
    45: 8,
    46: 8,
    47: 8,
    48: 8,
    49: 9,
    50: 9,
    51: 9,
    52: 9,
    53: 9,
    54: 10,
    55: 10,
    56: 10,
    57: 10,
    58: 10,
    59: 10,
    60: 11,
    61: 11,
    62: 11,
    63: 11,
    64: 11,
    65: 11,
    66: 12,
    67: 12,
    68: 12,
    69: 12,
    70: 12,
    71: 12,
    72: 13,
    73: 13,
    74: 13,
    75: 13,
    76: 13,
    77: 13,
    78: 13,
    79: 14,
    80: 14,
    81: 14,
    82: 14,
    83: 14,
    84: 15,
    85: 15,
    86: 15,
    87: 15,
    88: 15,
    89: 15,
    90: 16,
    91: 16,
    92: 16,
    93: 16,
    94: 16,
    95: 16,
    96: 17,
    97: 17,
    98: 17,
    99: 17,
    100: 17,
    101: 17,
    102: 17,
    103: 17,
    104: 17,
    105: 17,
    106: 17,
    107: 17,
    108: 18,
    150: 25,
    200: 33,
    300: 85,
    409: 115
};
// Line with of text decoration (underline/strikethrough), measured in Excel Desktop
// The values are specific to Calibri font.
// <key: font size in pt, value: width in pixels of the text decoration line>
exports.CalibriTextDecorationLineWidth = {
    5: 0,
    6: 1,
    11: 1,
    17: 1,
    18: 2,
    35: 2,
    36: 3,
    47: 3,
    48: 4,
    64: 5,
    72: 6,
    100: 8,
    200: 17,
    300: 26,
    409: 37
};
// Conversion table from font size to icon size
exports.FontSizeToIconSize = {
    1: 3,
    3: 5,
    4: 6,
    5: 8,
    8: 12,
    10: 12,
    11: 16,
    12: 16,
    14: 20,
    16: 22,
    18: 22,
    20: 26,
    22: 26,
    24: 28,
    26: 32,
    28: 34,
    36: 42,
    48: 57,
    72: 85,
    100: 118,
    200: 234,
    300: 351,
    400: 468,
    409: 478
};
// <key: Font size in pt, value: padding in pixels from left, measured in Excel Desktop.
exports.IconHorizontalPadding = {
    1: 0,
    3: 0,
    4: 0,
    5: 0,
    8: 1,
    10: 1,
    11: 1,
    12: 1,
    14: 2,
    16: 2,
    18: 2,
    20: 3,
    22: 3,
    24: 4,
    26: 5,
    28: 5,
    36: 7,
    48: 10,
    72: 16,
    100: 22,
    200: 44,
    300: 67,
    400: 89,
    409: 90
};
//# sourceMappingURL=fontSizeMetadataTables.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/layout/helpers.js":
/*!**********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/layout/helpers.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var fontSizeMetadataMapper_1 = __webpack_require__(/*! ./fontSizeMetadataMapper */ "../../packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataMapper.js");
var fontSizeMetadataTables_1 = __webpack_require__(/*! ./fontSizeMetadataTables */ "../../packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataTables.js");
var fontsConstants_1 = __webpack_require__(/*! ../fontsConstants */ "../../packages/excel-online-grid-renderer/lib/src/fontsConstants.js");
/**
 * Returns the size (width & height) of the icon, depending on the font size.
 * This function is not in iconLayout.ts due to circular dependency with textLayout.ts
 *
 * @param fontSize The size of the font
 * @param devicePixelRatio The dpr in which the icon should be rendered
 */
function getIconSize(fontSize, devicePixelRatio) {
    return Math.floor(fontSizeMetadataMapper_1.approximateValue(fontSize, fontSizeMetadataTables_1.FontSizeToIconSize) * devicePixelRatio);
}
exports.getIconSize = getIconSize;
/**
 * Returns the icon's horizontal padding in px, depending on the font size.
 * This function is not in iconLayout.ts due to circular dependency with textLayout.ts
 *
 * @param fontSize The size of the font
 * @param devicePixelRatio The dpr in which the icon should be rendered
 */
function getIconHorizontalPadding(fontSize, devicePixelRatio) {
    return Math.floor(fontSizeMetadataMapper_1.approximateValue(fontSize, fontSizeMetadataTables_1.IconHorizontalPadding) * devicePixelRatio);
}
exports.getIconHorizontalPadding = getIconHorizontalPadding;
/**
 * Converts size in points to pixels.
 *
 * @param size the size in points
 */
function pointsToPixels(size) {
    return Math.round(size * fontsConstants_1.PointToPixelRatio);
}
exports.pointsToPixels = pointsToPixels;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/layout/iconsLayout.js":
/*!**************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/layout/iconsLayout.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var textLayout_1 = __webpack_require__(/*! ./textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
var cellLayout_1 = __webpack_require__(/*! ./cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/layout/helpers.js");
var constants_1 = __webpack_require__(/*! ../drawing/conditionalFormatting/Icons/constants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/conditionalFormatting/Icons/constants.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
/**
 * Returns the icons bottom in px.
 *
 * @param model the model
 * @param cell the cell
 * @param devicePixelRatio the dpr
 * @param iconSize icon size after dpr adjustment
 */
function getIconVerticalPosition(model, cell, devicePixelRatio, iconSize) {
    var verticalAlignment = cell.CachedStyle.VerticalAlignment;
    var iconVerticalPositionAlignWithMiddleBaseline = getIconBottomWhenAlignedWithMiddleBaseline(model, cell, devicePixelRatio, iconSize);
    switch (verticalAlignment) {
        case gridBlockModelDto_1.VerticalAlignment.Bottom:
            var cellBottom = cellLayout_1.getCellBottomAdjustedForDrawing(model, cell);
            return Math.min(iconVerticalPositionAlignWithMiddleBaseline, cellBottom - constants_1.MinimalIconPadding);
        case gridBlockModelDto_1.VerticalAlignment.Top:
            var cellTop = cellLayout_1.getCellTopAdjustedForDrawing(model, cell);
            return Math.max(iconVerticalPositionAlignWithMiddleBaseline, cellTop + constants_1.MinimalIconPadding + iconSize);
        case gridBlockModelDto_1.VerticalAlignment.Center:
        case gridBlockModelDto_1.VerticalAlignment.Justify:
        case gridBlockModelDto_1.VerticalAlignment.Distributed:
            if (isIconOutOfCellVerticalBoundaries(model, cell, iconVerticalPositionAlignWithMiddleBaseline, iconSize)) {
                return Math.floor(cellLayout_1.getCellCenterYAdjustedForDrawing(model, cell) + iconSize / 2);
            }
            return iconVerticalPositionAlignWithMiddleBaseline;
        default:
            throw Error('getIconVerticalPosition: Vertical alignment type not supported!');
    }
}
exports.getIconVerticalPosition = getIconVerticalPosition;
/**
 * Returns the left position of the icon in pixels.
 * Icon is aligned with the top of the text or according to the horizontal alignment when the cell is show icon only
 *
 * @param model the model
 * @param cell the cell
 * @param iconSize icon size after dpr adjustment
 * @param fontSize the cell's font size
 * @param devicePixelRatio the dpr
 */
function getIconLeftPosition(model, cell, iconSize, fontSize, devicePixelRatio) {
    var _a, _b;
    if (!((_b = (_a = cell.CondFormat) === null || _a === void 0 ? void 0 : _a.Icon) === null || _b === void 0 ? void 0 : _b.IconOnly)) {
        return (cellLayout_1.getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false) +
            helpers_1.getIconHorizontalPadding(fontSize, devicePixelRatio));
    }
    // If the cell has show icon only
    return getIconOnlyLeftPosition(model, cell, iconSize, fontSize, devicePixelRatio);
}
exports.getIconLeftPosition = getIconLeftPosition;
/**
 * Returns the left position of the icon in pixels when the cell has show icon only
 * The icon has is aligned according to the horizontal alignment when the cell has show icon only, i.e. iconOnly attribute is true
 *
 * @param model the model
 * @param cell the cell
 * @param iconSize icon size after dpr adjustment
 * @param fontSize the cell's font size
 * @param devicePixelRatio the dpr
 */
function getIconOnlyLeftPosition(model, cell, iconSize, fontSize, devicePixelRatio) {
    var horizontalAlignment = cell.CondFormat.Icon.CFIconHorizontalAlignment;
    switch (horizontalAlignment) {
        case gridBlockModelDto_1.HorizontalAlignment.Right:
            return (cellLayout_1.getCellRightAdjustedForDrawing(model, cell) - helpers_1.getIconHorizontalPadding(fontSize, devicePixelRatio) - iconSize);
        case gridBlockModelDto_1.HorizontalAlignment.Fill:
        case gridBlockModelDto_1.HorizontalAlignment.Justify:
        case gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection:
        case gridBlockModelDto_1.HorizontalAlignment.Distributed:
        case gridBlockModelDto_1.HorizontalAlignment.JustifyDistributed:
        // For those alignments (Fill, Justify, CenterAcrossSelection, Distributed, JustifyDistributed) the icon's left position is as in left alingment
        case gridBlockModelDto_1.HorizontalAlignment.Automatic:
        // If the cell contains horizontal alignment as Automatic - we should default to Left.
        case gridBlockModelDto_1.HorizontalAlignment.Left:
            return (cellLayout_1.getCellLeftAdjustedForDrawing(model, cell, /* isMirrored */ false) +
                helpers_1.getIconHorizontalPadding(fontSize, devicePixelRatio));
        case gridBlockModelDto_1.HorizontalAlignment.Center:
            return Math.floor(cellLayout_1.getCellCenterXAdjustedForDrawing(model, cell) - iconSize / 2);
        default:
            throw Error("getIconLeftOnlyPosition: unsupported horizontalAlignment: " + horizontalAlignment);
    }
}
/**
 * Returns true if a part of the icon is outside of the cell vertical boundaries
 *
 * @param model the model
 * @param cell the cell
 * @param iconBottomPosition the bottom position of the icon
 * @param iconSize icon size after dpr adjustment
 */
function isIconOutOfCellVerticalBoundaries(model, cell, iconBottomPosition, iconSize) {
    // check if the icon is out of the bottom cell's boundry
    var cellBottom = cellLayout_1.getCellBottomAdjustedForDrawing(model, cell);
    if (cellBottom - constants_1.MinimalIconPadding < iconBottomPosition) {
        return true;
    }
    // check if the icon is out of the top cell's boundry
    var cellTop = cellLayout_1.getCellTopAdjustedForDrawing(model, cell);
    if (cellTop + constants_1.MinimalIconPadding > iconBottomPosition + iconSize) {
        return true;
    }
    return false;
}
/**
 * Returns the bottom vertical position of the icon according to the middlebaseline
 *
 * @param model the model
 * @param cell the cell
 * @param devicePixelRatio the dpr
 * @param iconSize icon size after dpr adjustment
 */
function getIconBottomWhenAlignedWithMiddleBaseline(model, cell, devicePixelRatio, iconSize) {
    var textVerticalPosition = textLayout_1.getTextVerticalPosition(cell, model, textLayout_1.getTextLineHeight(cell, model), cellLayout_1.getCellHeight(model, cell, false), undefined /* textAlphabeticalBaseline */);
    var verticalAlignmentMiddleBaseline = textLayout_1.getMiddleBaseline(textVerticalPosition, cell.CachedFont, helpers_2.getActualFontSize(cell)) * devicePixelRatio;
    // add half of the icon size to the middleBasline in order to get the bottom position of the icon
    var verticalAlignmentBottom = verticalAlignmentMiddleBaseline + iconSize * 0.5;
    return Math.round(verticalAlignmentBottom);
}
//# sourceMappingURL=iconsLayout.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js":
/*!*************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/layout/textLayout.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This module is responsible for getting the layout information of a text within a cell (e.g. text position and dimensions)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/tslib/1.13.0/node_modules/tslib/tslib.es6.js");
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var drawingConstants_1 = __webpack_require__(/*! ../drawing/drawingConstants */ "../../packages/excel-online-grid-renderer/lib/src/drawing/drawingConstants.js");
var fontsConstants_1 = __webpack_require__(/*! ../fontsConstants */ "../../packages/excel-online-grid-renderer/lib/src/fontsConstants.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var textLayoutCache_1 = __webpack_require__(/*! ./textLayoutCache */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayoutCache.js");
var fontSizeMetadataMapper_1 = __webpack_require__(/*! ./fontSizeMetadataMapper */ "../../packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataMapper.js");
var fontSizeMetadataTables_1 = __webpack_require__(/*! ./fontSizeMetadataTables */ "../../packages/excel-online-grid-renderer/lib/src/layout/fontSizeMetadataTables.js");
var gridBlockModelHelpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/gridBlockModelHelpers */ "../../packages/excel-online-models/lib/src/gridBlockModelHelpers.js");
var richTextFormatBidi_1 = __webpack_require__(/*! ../drawing/richTextFormatBidi */ "../../packages/excel-online-grid-renderer/lib/src/drawing/richTextFormatBidi.js");
var helpers_3 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-grid-renderer/lib/src/layout/helpers.js");
var helpers_4 = __webpack_require__(/*! ../drawing/horizontalAlignment/helpers */ "../../packages/excel-online-grid-renderer/lib/src/drawing/horizontalAlignment/helpers.js");
var cellLayout_1 = __webpack_require__(/*! ./cellLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/cellLayout.js");
var borders_1 = __webpack_require__(/*! ../drawing/borders */ "../../packages/excel-online-grid-renderer/lib/src/drawing/borders.js");
var advancedTextMetricsSupported = true;
var NumFmtSeparatorWidthMapping = {};
var NumFmtHashWidthMapping = {};
/**
 * Returns the text width in pixels according to the canvas context passed using the measure text Canvas2d API
 *
 * @param ctx CanvasRenderingContext2D used for measuring
 * @param text the text to measure its width
 */
function measureTextWidth(ctx, text, shouldUseAdvancedTextMetrics) {
    if (!text) {
        return 0;
    }
    if (shouldUseAdvancedTextMetrics && advancedTextMetricsSupported) {
        var trimmedText = text.trim();
        var textMetrics = ctx.measureText(trimmedText);
        if (!util_1.isNullOrUndefined(textMetrics.actualBoundingBoxLeft) &&
            !util_1.isNullOrUndefined(textMetrics.actualBoundingBoxRight)) {
            // Advanced text metrics API supported on chromium 77 and Safari (https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics)
            var textWidth = Math.abs(textMetrics.actualBoundingBoxRight) + Math.abs(textMetrics.actualBoundingBoxLeft);
            // Chromium Issue 1055141: Canvas TextMetrics actualBoundingBox with spaces is incorrect
            // https://bugs.chromium.org/p/chromium/issues/detail?id=1055141
            // TextMetrics.width measures white spaces correctly in all browsers, but does not measure italic correctly
            // so we trim the text and measure it with actualBoundingBox which works correctly if there are no leading and trailing whitespaces
            // then we add the spaces width using the old TextMetrics.width method
            var trimmedCharCount = text.length - trimmedText.length;
            var spacesWidth = 0;
            if (trimmedCharCount > 0) {
                // TODO: Task 3974602: [Performance Optimization] cache space width by context (font size & font name)
                var spaceWidth = ctx.measureText(' ').width;
                spacesWidth = trimmedCharCount * spaceWidth;
            }
            return textWidth + spacesWidth;
        }
        // if the browser does not support advanced text metrics remember it for next time - fallback to using TextMetrics.width legacy API
        advancedTextMetricsSupported = false;
    }
    // when shouldUseAdvancedTextMetrics CG is off or when AdvancedTextMetrics is not supported - fallback to using TextMetrics.width legacy API
    return measureTextWidthLegacyAPI(ctx, text);
}
exports.measureTextWidth = measureTextWidth;
/**
 * Returns the horizontal center position of the text in px
 *
 * @param model grid block model
 * @param cell relevant cell
 * @param canvasWidth canvas width
 */
function getCellTextCenterX(model, cell) {
    var iconPadding = getTextIconPadding(model, cell);
    var gridLineOffset = model.IsRtl ? drawingConstants_1.GridLineWidthPx : 0;
    var textLeft = cellLayout_1.getCellLeft(model, cell, model.BlockWidth) + iconPadding;
    var maxTextWidth = cellLayout_1.getCellWidth(model, cell, /* limitToBlockDimensions */ false) - iconPadding;
    return textLeft + maxTextWidth / 2 - gridLineOffset;
}
exports.getCellTextCenterX = getCellTextCenterX;
/**
 * Returns the horizontal center position of the text in px
 *
 * @param model grid block model
 * @param cell relevant cell
 * @param canvasWidth canvas width
 */
function getTextCenterForCenterAcrossSelection(model, cell) {
    // If the cell spills, calculate the center across all spilled cells.
    if (cell.Spill) {
        var iconPadding = getTextIconPadding(model, cell);
        var gridLineOffset = model.IsRtl ? drawingConstants_1.GridLineWidthPx : 0;
        var maxCellWidth = cellLayout_1.getSpillCellWidth(cell, model) - iconPadding;
        var startOffSet = cellLayout_1.getSpillCellStartOffset(cell, model) + iconPadding;
        return startOffSet + maxCellWidth / 2 - gridLineOffset;
    }
    return getCellTextCenterX(model, cell);
}
exports.getTextCenterForCenterAcrossSelection = getTextCenterForCenterAcrossSelection;
// measure text width using old API TextMetrics.width
function measureTextWidthLegacyAPI(ctx, text) {
    var textMetrics = ctx.measureText(text);
    return textMetrics.width;
}
/**
 * Returns in px the amount of padding applied on a cell because of cell indentation
 *
 * @param cellIndentation number of indentation in a cell
 */
function getIndentationPaddingPx(cellIndentation) {
    return cellIndentation * drawingConstants_1.InCellIndentPaddingPx;
}
exports.getIndentationPaddingPx = getIndentationPaddingPx;
/**
 * Returns the internal padding of the cell in px with icon padding
 *
 * @param cell the cell that we calculate padding on
 * @param model that holds rendering flags
 */
function getCellTextHorizontalPadding(cell, model) {
    var iconPadding = getTextIconPadding(model, cell);
    return getCellTextHorizontalPaddingInternal(model, cell, iconPadding);
}
exports.getCellTextHorizontalPadding = getCellTextHorizontalPadding;
/**
 * Returns the internal padding of the cell in px without the icon padding.
 *
 * @param cell the cell that we calculate padding on
 * @param model that holds rendering flags
 */
function getCellTextHorizontalPaddingWithoutIcons(model, cell) {
    return getCellTextHorizontalPaddingInternal(model, cell, /*iconPadding*/ 0);
}
exports.getCellTextHorizontalPaddingWithoutIcons = getCellTextHorizontalPaddingWithoutIcons;
/**
 * Returns the internal padding of the cell in px without the icon and Indent padding.
 * It is currently used in WrapText as WrapText has additional padding at the end too.
 *
 * @param cell the cell that we calculate padding on
 * @param model that holds rendering flags
 */
function getWrapTextAdditionalPadding(model, cell) {
    var fontSize = helpers_2.getActualFontSize(cell);
    var shouldPadCenterAlignment = !util_1.isNullOrUndefined(cell.WrapText) || helpers_2.cellHasShrinkToFit(cell);
    var horizontalAlignment = helpers_4.getEffectiveHorizontalAlignment(model, cell);
    return getHorizontalPadding(fontSize, horizontalAlignment, cell.CachedFont.Italic, 
    /*cellIndentation*/ 0, shouldPadCenterAlignment, 
    /*iconPadding*/ 0);
}
exports.getWrapTextAdditionalPadding = getWrapTextAdditionalPadding;
/**
 * Returns the internal horizontal padding of the cell in px according to font size, horizontal alignment, font style (italic) and wrap text.
 * This inner function is temporary and will be removed once "isSpillText" call from 'gridBlockRendererGlobals'
 * is removed (will be removed with the spill cell BRS) - tracked by:
 * VSO:3901871 - Font Size - refactor textLayout::getCellPaddingByFont once 'isSpillText' is removed
 *
 * @param fontSize the size in px of the cell font
 * @param alignment the effective horizontal alignment of the cell text
 * @param isItalic is the cell text in italic style
 * @param cellIndentation the amount of indentation the user has added to the cell text
 * @param shouldPadCenterAlignment If padding is needed for center vertical alignment
 * @param iconPadding In case of CFIcon and left horizontal alignment, we need to add the icon size and padding to text padding.
 */
function getHorizontalPadding(fontSize, alignment, isItalic, cellIndentation, shouldPadCenterAlignment, iconPadding) {
    var cellIndentationPaddingPx = getIndentationPaddingPx(cellIndentation);
    var paddingTable = fontSizeMetadataTables_1.CalibriRegularPadding;
    switch (alignment) {
        case gridBlockModelDto_1.HorizontalAlignment.Automatic:
        case gridBlockModelDto_1.HorizontalAlignment.Left:
            return cellIndentationPaddingPx + fontSizeMetadataMapper_1.approximateValue(fontSize, paddingTable) + iconPadding;
        case gridBlockModelDto_1.HorizontalAlignment.Right:
            if (isItalic) {
                // Right alignment with italic have larger padding than regular so we use a different predefined padding for italic right aligned
                paddingTable = fontSizeMetadataTables_1.CalibriItalicPadding;
            }
            return cellIndentationPaddingPx + fontSizeMetadataMapper_1.approximateValue(fontSize, paddingTable);
        case gridBlockModelDto_1.HorizontalAlignment.Center:
        case gridBlockModelDto_1.HorizontalAlignment.CenterAcrossSelection:
            return shouldPadCenterAlignment ? fontSizeMetadataMapper_1.approximateValue(fontSize, paddingTable) : 0;
        default:
            throw Error("getTextHorizontalPosition: unsupported horizontalAlignment: " + alignment);
    }
}
exports.getHorizontalPadding = getHorizontalPadding;
/**
 * Text height in pixels with ascending chars and with descending chars including line leading according to font size and font name
 *
 * @param fontSize the font size to check its height according to
 * @param fontName the font name to check its height according to
 * @returns the height of the text in pixels from baseline to upper ascending char
 */
function getFontHeight(fontSize, fontName) {
    return textLayoutCache_1.getCachedFontMetrics(fontName, fontSize).height;
}
/**
 * Height of a line of text in pixels
 *
 * @param fontSize the font size to check its height according to
 * @param fontName the font name to check its height according to
 * @returns the height of line of text in pixels
 */
function getFontLineHeight(fontSize, fontName) {
    var fontHeight = getFontHeight(fontSize, fontName);
    return Math.ceil(fontHeight * fontsConstants_1.LineHeightUsingDivFontFactor);
}
exports.getFontLineHeight = getFontLineHeight;
/**
 * Returns the vertical positioning of the text baseline. In case of wrap text returns the last row vertical positioning.
 *
 * @param cell the cell containing the text
 * @param model the model
 * @param textHeight the entire text height (including all lines in case of wrap text)
 * @param cellHeight the height of the cell in px.
 * @param textAlphabeticalBaseline last row alphabetic baseline (if its not passed it will be measured)
 * @returns The absolute vertical position from where we should start drawing the text.
 */
function getTextVerticalPosition(cell, model, textHeight, cellHeight, textAlphabeticBaseline) {
    var verticalAlignment = cell.CachedStyle.VerticalAlignment;
    var textLineHeightPx = getTextLineHeight(cell, model);
    var isBaselineRefactorEnabled = helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.TextBaselineRefactor, model);
    var isRichText = cell.TextRuns;
    var font = isRichText ? getLargestFont(model, cell.TextRuns) : cell.CachedFont;
    var fontActualSize = isRichText ? font.Size : helpers_2.getActualFontSize(cell);
    var verticalPaddingPerFont = getVerticalPaddingForFontName(font.FontName, font.Size, verticalAlignment);
    var cellTop = cellLayout_1.getCellTop(model, cell);
    var cellBottom = cellLayout_1.getCellBottom(model, cell);
    var cellBottomBorderPadding = borders_1.cellHasBottomDoubleBorder(cell, model)
        ? drawingConstants_1.InCellDoubleBorderVerticalPaddingPx
        : 0;
    var lastTextLineAlphabeticBaseline = textAlphabeticBaseline
        ? textAlphabeticBaseline
        : textLayoutCache_1.getCachedFontMetrics(font.FontName, fontActualSize).baseline;
    switch (verticalAlignment) {
        case gridBlockModelDto_1.VerticalAlignment.Bottom:
            return (cellBottomBorderPadding +
                getLastRowBaselineOffsetYBottom(cellBottom, textLineHeightPx, verticalPaddingPerFont, isBaselineRefactorEnabled, lastTextLineAlphabeticBaseline));
        case gridBlockModelDto_1.VerticalAlignment.Top:
            return getLastRowBaselineOffsetYTop(cellTop, textLineHeightPx, textHeight, verticalPaddingPerFont, isBaselineRefactorEnabled, lastTextLineAlphabeticBaseline);
        case gridBlockModelDto_1.VerticalAlignment.Center:
        case gridBlockModelDto_1.VerticalAlignment.Justify:
        case gridBlockModelDto_1.VerticalAlignment.Distributed:
            return getLastRowBaselineOffsetYCenter(cellBottom, cellHeight, textLineHeightPx, textHeight, verticalPaddingPerFont, isBaselineRefactorEnabled, lastTextLineAlphabeticBaseline);
        default:
            throw Error("getTextVerticalPosition: unsupported verticalAlignment: " + verticalAlignment);
    }
}
exports.getTextVerticalPosition = getTextVerticalPosition;
/**
 * Returns the Y offset we should draw the text in when using alphabetic baseline according to the given position & font properties
 *
 * @param bottom The bottom position of the rect to center in
 * @param height The height of the rect to center in
 * @param fontSize The text font size (in case of RTF should be the largest font size)
 * @param fontName The font name
 * @param textBaselineRefactorEnabled textBaselineRefactor render flag enabled
 */
function getTextOffsetYAlphabeticBaseline(bottom, height, fontSize, fontName, verticalAlignment, textBaselineRefactorEnabled) {
    var fontLineHeight = getFontLineHeight(fontSize, fontName);
    var verticalPadding = getVerticalPaddingForFontName(fontName, fontSize, verticalAlignment);
    var textAlphabeticBaseline = textLayoutCache_1.getCachedFontMetrics(fontName, fontSize).baseline;
    switch (verticalAlignment) {
        case gridBlockModelDto_1.VerticalAlignment.Center:
        case gridBlockModelDto_1.VerticalAlignment.Justify:
        case gridBlockModelDto_1.VerticalAlignment.Distributed:
            return getLastRowBaselineOffsetYCenter(bottom, height, fontLineHeight, fontLineHeight, verticalPadding, textBaselineRefactorEnabled, textAlphabeticBaseline);
        case gridBlockModelDto_1.VerticalAlignment.Bottom:
            return getLastRowBaselineOffsetYBottom(bottom, fontLineHeight, verticalPadding, textBaselineRefactorEnabled, textAlphabeticBaseline);
        case gridBlockModelDto_1.VerticalAlignment.Top:
            return getLastRowBaselineOffsetYTop(bottom - height, fontLineHeight, fontLineHeight, verticalPadding, textBaselineRefactorEnabled, textAlphabeticBaseline);
    }
}
exports.getTextOffsetYAlphabeticBaseline = getTextOffsetYAlphabeticBaseline;
/**
 * Returns the canvas textBaseline value according to the given vertical alignment and the given rowHeight
 *
 * @param verticalAlignment vertical Alignment of the cell
 */
function getTextBaseline(verticalAlignment, isBaselineRefactorEnabled) {
    switch (verticalAlignment) {
        case gridBlockModelDto_1.VerticalAlignment.Bottom:
        case gridBlockModelDto_1.VerticalAlignment.Top:
            return isBaselineRefactorEnabled ? 'alphabetic' : 'bottom';
        case gridBlockModelDto_1.VerticalAlignment.Center:
        case gridBlockModelDto_1.VerticalAlignment.Justify:
        case gridBlockModelDto_1.VerticalAlignment.Distributed:
            return isBaselineRefactorEnabled ? 'alphabetic' : 'middle';
        default:
            throw Error("getTextBaseline: unsupported verticalAlignment: " + verticalAlignment);
    }
}
exports.getTextBaseline = getTextBaseline;
/**
 * Get the cell's text alphabetic baseline
 *
 * @param model the block model
 * @param cell the cell with the text to get the baseline for
 */
function getTextAlphabeticBaseline(model, cell) {
    var font = cell.CachedFont;
    var isRichText = cell.TextRuns;
    if (isRichText) {
        font = getLargestFont(model, cell.TextRuns);
    }
    var fontSize = isRichText ? font.Size : helpers_2.getActualFontSize(cell);
    var fontMetrics = textLayoutCache_1.getCachedFontMetrics(font.FontName, fontSize);
    return fontMetrics.baseline;
}
exports.getTextAlphabeticBaseline = getTextAlphabeticBaseline;
/**
 * In case of top vertical alignment,
 * returns the offset Y of 'bottom' textBaseline of the last line in wrapText.
 *
 * Calculation:
 *
 *  ---------- <------cellTop
 * |   text   | ____ First Row top most line of text baseline ('bottom' textBaseline)
 * |          |
 * |   text   |
 * |          |
 * |   text   | ____ Last row baseline ('bottom' textBaseline)
 * |          |
 * |          |
 * |          |
 * |          |
 *  ----------  <-- cellBottom
 *
 * Example:
 *  cellTop = 60
 *  TextHeight = 100
 *  TextLineSpacingHeightPx = 20
 *  lines = 3
 *
 *  => lastRowBaselineOffsetY = 20 * 3 = 60
 *  The Baseline of the last row will be drawn in Y = 60 + 60 = 120
 *
 * @param cellTop offsetY to cell's top
 * @param textLineSpacingHeightPx the distance between the baselines of 2 subsequent vertical lines of texts
 * @param textHeight the entire text height (including all lines in case of wrap text)
 * @param fontSpecificPadding extra padding for some problematic low fonts, should be 0 in most cases.
 */
function getLastRowYTopAlignmentBottomBaseline(cellTop, textLineSpacingHeightPx, textHeight, fontSpecificPadding) {
    var lastRowBaselineOffsetY = textHeight;
    return cellTop + lastRowBaselineOffsetY - Math.round(textLineSpacingHeightPx * fontsConstants_1.LineLeading) + fontSpecificPadding;
}
exports.getLastRowYTopAlignmentBottomBaseline = getLastRowYTopAlignmentBottomBaseline;
/**
 * Get the lastRow's offSetY for bottom aligned text.
 * The baseline is also Bottom.
 */
function getLastRowYBottomAlignmentBottomBaseline(cellBottom, textLineSpacingHeightPx, fontSpecificPadding) {
    /**
     * Parameters that "lift" the text base line should be with a positive sign before them.
     * note that 'fontSpecificPadding' has minus sign because the value itself is negative when
     * we look to lift the text.
     */
    var verticalBaselineOffsetShiftUp = Math.round(textLineSpacingHeightPx * fontsConstants_1.LineLeading * 1.5) -
        drawingConstants_1.InCellBottomAndCenterVerticalPaddingPx -
        fontSpecificPadding;
    return (
    /**
     * We want to ensure small fonts have at least 1px of vertical padding above the cell base
     * '-' sign indicates the Y position is shifting up (as the Y axis is pointing down)
     */
    cellBottom - Math.max(verticalBaselineOffsetShiftUp, 1));
}
exports.getLastRowYBottomAlignmentBottomBaseline = getLastRowYBottomAlignmentBottomBaseline;
/**
 * Get lastRow's offsetY.
 */
function getLastRowBaselineOffsetYTop(cellTop, textLineSpacingHeightPx, textHeight, verticalPaddingPerFont, isBaselineRefactorEnabled, textAlphabeticBaseline) {
    return isBaselineRefactorEnabled
        ? getLastRowYTopAlignmentAlphabeticBaseline(cellTop, textHeight, textAlphabeticBaseline)
        : getLastRowYTopAlignmentBottomBaseline(cellTop, textLineSpacingHeightPx, textHeight, verticalPaddingPerFont);
}
exports.getLastRowBaselineOffsetYTop = getLastRowBaselineOffsetYTop;
/**
 * Get lastRow offsetY when the text is bottom aligned.
 */
function getLastRowBaselineOffsetYBottom(cellBottom, textLineSpacingHeightPx, fontSpecificPadding, isBaselineRefactorEnabled, textAlphabeticBaseline) {
    return isBaselineRefactorEnabled
        ? getLastRowYBottomAlignmentAlphabeticBaseline(cellBottom, textAlphabeticBaseline)
        : getLastRowYBottomAlignmentBottomBaseline(cellBottom, textLineSpacingHeightPx, fontSpecificPadding);
}
exports.getLastRowBaselineOffsetYBottom = getLastRowBaselineOffsetYBottom;
/**
 * Returns the text middle baseline position.
 *
 * See packages\excel-online-grid-renderer\src\layout\textLayoutReadme.md for more details on the cell layout calculations.
 *
 * @param textAlphabeticalBaselineY The Y position of the alphabetical baseline
 * @param font the font object
 * @param actualFontSize The cell font size - May be the shrunk font size
 */
function getMiddleBaseline(textAlphabeticalBaselineY, font, actualFontSize) {
    var fontMetrics = textLayoutCache_1.getCachedFontMetrics(font.FontName, actualFontSize);
    // The offset of the middle basline from the bottom in pixels
    var offsetMiddleFromBottom = fontMetrics.middle;
    // The offset of the alphabetic baseline from the bottom in pixels
    var offsetAlphabeticFromBottom = fontMetrics.baseline;
    // The offset of the middle baseline from the alphabetic baseline in pixels
    var offsetMiddleFromAlphabetic = offsetMiddleFromBottom - offsetAlphabeticFromBottom;
    return textAlphabeticalBaselineY - offsetMiddleFromAlphabetic;
}
exports.getMiddleBaseline = getMiddleBaseline;
/**
 * Get lastRow offsetY when the text is center aligned.
 */
function getLastRowBaselineOffsetYCenter(cellBottom, rowHeight, textLineSpacingHeightPx, textHeight, fontSpecificPadding, isBaselineRefactorEnabled, textAlphabeticBaseline) {
    return isBaselineRefactorEnabled
        ? getLastRowBaselineOffsetYCenterAlphabeticBaseline(cellBottom, rowHeight, textHeight, textAlphabeticBaseline)
        : getLastRowBaselineOffsetYCenterMiddleBaseline(cellBottom, rowHeight, textLineSpacingHeightPx, textHeight, fontSpecificPadding);
}
/**
 * In case of center vertical alignment center,
 * returns the offset Y of textBaseline of the last line in wrapText.
 *
 * Calculation:
 *
 *     text
 *     text
 *     text
 *  ----------
 * |   text   |
 * |   text   |
 * |   text   |
 * |   text   |
 *  ----------  <-- cellBottom
 *     text         |
 *     text         |  <-- distanceFromTextBottomToCellBottom
 * ----text-------  | ---------------------- <-- lastRowBaselineOffsetYCenter (locate textBaseline in the center of the last row)
 *
 * Example:
 *  cellBottom = 60
 *  rowHeight = 60
 *  TextHeight = 100
 *  textLineSpacingHeightPx = 20
 *  => distanceFromTextBottomToCellBottom = (60 - 100) / 2 = -20
 *  => lastRowBaselineOffsetYCenter = 60 + 20 - (20 / 2) = 70 (cellBottom - distanceFromTextBottomToCellBottom + InCellVerticalPaddingPx - textLineSpacingHeightPx/2)
 *  The Baseline of the last row will be drawn in Y = 70
 *
 * @param cellBottom offsetY to cell's bottom
 * @param rowHeight the height of the row
 * @param textLineSpacingHeightPx the distance between the baselines of 2 subsequent vertical lines of texts
 * @param textHeight the entire text height (including all lines in case of wrap text)
 * @param fontSpecificPadding extra padding for some problematic low fonts, should be 0 in most cases.
 */
function getLastRowBaselineOffsetYCenterMiddleBaseline(cellBottom, rowHeight, textLineSpacingHeightPx, textHeight, fontSpecificPadding) {
    var cellHeight = rowHeight + drawingConstants_1.GridLineWidthPx;
    // Absolute distance between the bottom of last text line to the bottom of the cell
    // Add half of textLineSpacingHeightPx because the textBaseline is center.
    var leading = Math.round(textLineSpacingHeightPx * (fontsConstants_1.LineLeading / 2));
    var distanceFromTextBottomToCellBottom = (cellHeight - textHeight - leading) / 2;
    return (cellBottom -
        distanceFromTextBottomToCellBottom -
        textLineSpacingHeightPx / 2 +
        fontSpecificPadding +
        drawingConstants_1.InCellBottomAndCenterVerticalPaddingPx);
}
/**
 * In case of center vertical alignment center,
 * returns the offset Y of textBaseline of the last line in wrapText.
 *
 * Calculation:
 *
 *     text
 *     text
 *     text
 *  ----------
 * |   text   |
 * |   text   |
 * |   text   |
 * |   text   |
 *  ----------  <-- cellBottom
 *     text         |
 *     text         |  <-- distanceFromTextBottomToCellBottom
 * ----text-------  | ---------------------- <-- lastRowBaselineOffsetYCenter (locate textBaseline in the center of the last row)
 *
 * Example:
 *  cellBottom = 60
 *  rowHeight = 60
 *  TextHeight = 100
 *  textAlphabeticBaseline = 5
 *  => distanceFromTextBottomToCellBottom = (60 - 100) / 2 = -20
 *  => lastRowBaselineOffsetYCenter = 60 + 20 - 1 - 5 = 74 (cellBottom - distanceFromTextBottomToCellBottom - LineHeightBottomConstantPx - textAlphabeticBaseline)
 *  The Baseline of the last row will be drawn in Y = 74
 *
 * @param cellBottom offsetY to cell's bottom
 * @param rowHeight the height of the row
 * @param textHeight the entire text height (including all lines in case of wrap text)
 * @param textAlphabeticalBaseline last row alphabetic baseline
 */
function getLastRowBaselineOffsetYCenterAlphabeticBaseline(cellBottom, rowHeight, textHeight, textAlphabeticBaseline) {
    var cellHeight = rowHeight + drawingConstants_1.GridLineWidthPx;
    var distanceFromTextBottomToCellBottom = (cellHeight - textHeight) / 2;
    var lastRowBaselineOffsetY = cellBottom - distanceFromTextBottomToCellBottom;
    return getAlphabeticBaselineOffset(lastRowBaselineOffsetY, textAlphabeticBaseline);
}
function getLastRowYBottomAlignmentAlphabeticBaseline(cellBottom, textAlphabeticBaseline) {
    return getAlphabeticBaselineOffset(cellBottom, textAlphabeticBaseline);
}
function getLastRowYTopAlignmentAlphabeticBaseline(cellTop, textHeight, textAlphabeticBaseline) {
    var lastRowBaselineOffsetY = cellTop + textHeight;
    return getAlphabeticBaselineOffset(lastRowBaselineOffsetY, textAlphabeticBaseline);
}
function getAlphabeticBaselineOffset(lastRowYBottom, textAlphabeticBaseline) {
    return lastRowYBottom - fontsConstants_1.LineHeightBottomConstantPx - textAlphabeticBaseline;
}
/**
 * Returns the width (thickness) of the line, depending on the font size
 * This number is also the margin between the text baseline to the line itself
 *
 * @param fontSize The size of the font
 */
function getTextDecorationLineWidth(fontSize) {
    return fontSizeMetadataMapper_1.approximateValue(fontSize, fontSizeMetadataTables_1.CalibriTextDecorationLineWidth);
}
exports.getTextDecorationLineWidth = getTextDecorationLineWidth;
/**
 * Returns the cell's text height.
 * Text height is the whole height of the drawing area (em/glyph)
 * May return the cell's cached value
 *
 * @param cell The cell which padding to be calculated
 * @param fontSize the font size to check its height according to
 * @param fontName the font name to check its height according to
 */
function getTextHeight(cell, fontSize, fontName) {
    helpers_2.verifyArgumentNotNull(cell.CachedDrawingLayout, 'CachedDrawingLayout', 'getOrMeasureCellPaddingPx');
    helpers_2.verifyArgumentNotNull(cell.CachedDrawingLayout.CellTextLayout, 'CellTextLayout', 'getOrMeasureCellPaddingPx');
    // If cache exists, no need to calculate
    if (cell.CachedDrawingLayout.CellTextLayout.Height !== undefined) {
        return cell.CachedDrawingLayout.CellTextLayout.Height;
    }
    var height = getFontHeight(fontSize, fontName);
    cell.CachedDrawingLayout.CellTextLayout.Height = height;
    return height;
}
exports.getTextHeight = getTextHeight;
/**
 * Returns the cell's text width. Calculates it if not cached, and stores it in the cell's CachedDrawingLayout.
 * May return the cell's cached value.
 * IMPORTANT - The canvas context font needs to be set accordingly before calling this function
 *
 * @param ctx Canvas context
 * @param model The model
 * @param cell The cell which width to be calculated
 */
function getTextWidth(ctx, model, cell) {
    var _a = getTextWidthInternal(ctx, model, cell), width = _a.width, textRunsDrawingInformation = _a.textRunsDrawingInformation;
    cell.CachedDrawingLayout.CellTextLayout.Width = width;
    if (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, model)) {
        cell.CachedDrawingLayout.TextRunDrawingInformation = textRunsDrawingInformation;
    }
    return width;
}
exports.getTextWidth = getTextWidth;
/**
 * Returns the cell's text width. Calculates it if not cached, but does not cache it.
 * May return the cell's cached value.
 * IMPORTANT - The canvas context font needs to be set accordingly before calling this function
 *
 * @param ctx Canvas context
 * @param model The model
 * @param cell The cell which width to be calculated
 */
function getTextWidthNoCaching(ctx, model, cell) {
    return getTextWidthInternal(ctx, model, cell).width;
}
exports.getTextWidthNoCaching = getTextWidthNoCaching;
/**
 * Returns the cell's text width. Calculates it if not cached.
 * May return the cell's cached value.
 * IMPORTANT - The canvas context font needs to be set accordingly before calling this function
 *
 * @param ctx Canvas context
 * @param model The model
 * @param cell The cell which width to be calculated
 */
function getTextWidthInternal(ctx, model, cell) {
    // We might get here from EWA, before we initialized the cached objects.
    if (!cell.CachedDrawingLayout) {
        cell.CachedDrawingLayout = { CellTextLayout: {} };
    }
    // There are cases where the CachedDisplayText is not populated,
    // rather the cell itself is replaced. We need to update the CachedDisplayText.
    if (!cell.CachedDisplayText) {
        helpers_2.updateCellText(model, cell, cell.Text);
    }
    var isRichText = cell.TextRuns && helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, model);
    // If cache exists, no need to calculate
    if (cell.CachedDrawingLayout.CellTextLayout.Width) {
        if (isRichText && !cell.CachedDrawingLayout.TextRunDrawingInformation) {
            throw 'getTextWidthInternal: TextRunsDrawingData is supposed to be defined';
        }
        return {
            width: cell.CachedDrawingLayout.CellTextLayout.Width,
            textRunsDrawingInformation: cell.CachedDrawingLayout.TextRunDrawingInformation
        };
    }
    var shouldUseAdvancedTextMetrics = helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvancedTextMetrics, model);
    var text = helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAccountingAndCustom, model) ? cell.CachedDisplayText : cell.Text;
    if (isRichText) {
        var bidiContext = getBidiContext(cell);
        var _a = measureTextRunsWidth(ctx, cell.TextRuns, cell.Text, bidiContext), totalWidth = _a.totalWidth, textRunsDrawingInformation = _a.textRunsDrawingInformation;
        return { width: totalWidth, textRunsDrawingInformation: textRunsDrawingInformation };
    }
    var width = measureTextWidth(ctx, text, shouldUseAdvancedTextMetrics);
    return { width: width };
}
/**
 * Measure formatted text total text runs width in pixels while caching relevant drawing information for later use
 * Returns total width of all the runs, and an array of the text run drawing data for later use.
 *
 * @param ctx Canvas context
 * @param runs Array of text runs
 * @param formattedText The cell's formatted text
 */
function measureTextRunsWidth(ctx, runs, formattedText, bidiContext) {
    var ctxAlignment = ctx.textAlign;
    ctx.textAlign = 'left';
    var totalWidth = 0;
    var textRunsDrawingInformation = [];
    var preparedRuns = runs;
    if (bidiContext !== undefined) {
        if (bidiContext.HasBidi) {
            // Prepare the text runs for Bidi layout before preparing them for drawing since it may change them
            preparedRuns = richTextFormatBidi_1.prepareTextRunsForBidiLayout(runs, formattedText);
        }
    }
    // Iterating over all rich text runs and measuring their width.
    for (var i = 0; i < preparedRuns.length; i++) {
        var run = preparedRuns[i];
        var runData = { FontID: run.FontID, StartIndex: run.StartIndex };
        var text = helpers_2.getTextRunText(i, preparedRuns, formattedText);
        var font = run.CachedFont;
        var fontCss = helpers_2.getFontCssStringFromFont(font, /*shrunkFontSize*/ undefined);
        ctx.font = fontCss;
        var textWidth = measureTextWidth(ctx, text, /* shouldUseAdvancedTextMetrics */ true);
        runData.WidthPx = textWidth;
        runData.Text = text;
        runData.FontCss = fontCss;
        runData.Strikethrough = font.StrikeThrough;
        runData.Underline = font.Underline;
        textRunsDrawingInformation[i] = tslib_1.__assign(tslib_1.__assign({}, runData), run);
        totalWidth += textWidth;
    }
    ctx.textAlign = ctxAlignment;
    return { totalWidth: totalWidth, textRunsDrawingInformation: textRunsDrawingInformation };
}
exports.measureTextRunsWidth = measureTextRunsWidth;
/**
 * Analyzes the text and return the rich text bidi context.
 * Caches the context after analyzing.
 * May return cached value if available.
 *
 * @param cell The cell
 * @param formattedText The text
 * @param readingOrder Reading order of the text
 */
function getBidiContext(cell) {
    helpers_2.verifyArgumentNotNull(cell.CachedDrawingLayout, 'CachedDrawingLayout', 'getBidiContext');
    var cachedContext = cell.CachedDrawingLayout.BidiContext;
    if (cachedContext) {
        return cachedContext;
    }
    var bidiContext = richTextFormatBidi_1.analyzeBidiText(cell.Text, cell.CachedStyle.ReadingOrder);
    cell.CachedDrawingLayout.BidiContext = bidiContext;
    return bidiContext;
}
exports.getBidiContext = getBidiContext;
/**
 * Returns the cell's line height.
 * May return the cell's cached value
 *
 * @param cell The cell which padding to be calculated
 * @param model the grid model
 */
function getTextLineHeight(cell, model) {
    helpers_2.verifyArgumentNotNull(cell.CachedDrawingLayout, 'CachedDrawingLayout', 'getTextLineHeight');
    helpers_2.verifyArgumentNotNull(cell.CachedDrawingLayout.CellTextLayout, 'CellTextLayout', 'getTextLineHeight');
    helpers_2.verifyArgumentNotNull(cell.CachedFont, 'CachedFont', 'getTextLineHeight');
    var isRichText = cell.TextRuns && helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, model);
    // If cache exists, no need to calculate
    if (cell.CachedDrawingLayout.CellTextLayout.LineHeight !== undefined) {
        return cell.CachedDrawingLayout.CellTextLayout.LineHeight;
    }
    var largestFont;
    if (isRichText) {
        largestFont = getLargestFont(model, cell.TextRuns);
    }
    var fontSize = isRichText ? largestFont.Size : helpers_2.getActualFontSize(cell);
    var fontName = isRichText ? largestFont.FontName : cell.CachedFont.FontName;
    var lineHeight = getFontLineHeight(fontSize, fontName);
    cell.CachedDrawingLayout.CellTextLayout.LineHeight = lineHeight;
    return lineHeight;
}
exports.getTextLineHeight = getTextLineHeight;
function getLargestFont(model, textRuns) {
    var largestFont;
    for (var i = 0; i < textRuns.length; i++) {
        var run = textRuns[i];
        var runFont = gridBlockModelHelpers_1.getReferencedObjectById(run.FontID, model.Fonts);
        if (!largestFont || largestFont.Size < runFont.Size) {
            largestFont = runFont;
        }
    }
    if (!largestFont) {
        throw 'getLargestFont: Largest fonts is supposed to be defined';
    }
    return largestFont;
}
/**
 * Returns the height of line of formatted text (rich text).
 * Line height is 106% the measured height of the largest font in line.
 *
 * @param model the model
 * @param formattedText rich text
 */
function getFormattedTextLineHeight(model, formattedText) {
    var largestFont = getLargestFont(model, formattedText.TextRuns);
    return getFontLineHeight(largestFont.Size, largestFont.FontName);
}
exports.getFormattedTextLineHeight = getFormattedTextLineHeight;
/**
 * Returns the cached font metrics (height, baseline, middle baselines) of the largest font in line.
 * Measure the font metrics if no cache is available.
 *
 * @param model the model
 * @param formattedText rich text
 */
function getFormattedTextLineFontMetrics(model, formattedText) {
    var largestFont = getLargestFont(model, formattedText.TextRuns);
    return textLayoutCache_1.getCachedFontMetrics(largestFont.FontName, largestFont.Size);
}
exports.getFormattedTextLineFontMetrics = getFormattedTextLineFontMetrics;
/**
 * Return's the width of NumFmt.Separator.
 * May return a cached value.
 *
 * @param ctx The canvas rendering context
 * @param cell The cell
 * @param separator The separator used in number format
 */
function getNumFmtSeparatorWidth(ctx, cell) {
    var _a, _b;
    helpers_2.verifyArgumentNotNull((_a = cell.NumFmt) === null || _a === void 0 ? void 0 : _a.Separator, 'separator', 'getNumFmtSeparatorWidth');
    var separator = (_b = cell.NumFmt) === null || _b === void 0 ? void 0 : _b.Separator;
    var fontCssString = helpers_2.getFontCssStringFromCell(cell);
    var fontKey = fontCssString + separator;
    var cachedValue = NumFmtSeparatorWidthMapping[fontKey];
    if (util_1.isNullOrUndefined(cachedValue) || cachedValue === 0) {
        // In our case measure text with measureTextWidthLegacyAPI, leads to more accurate results.
        var width = measureTextWidthLegacyAPI(ctx, separator);
        NumFmtSeparatorWidthMapping[fontKey] = width;
        return width;
    }
    return NumFmtSeparatorWidthMapping[fontKey];
}
exports.getNumFmtSeparatorWidth = getNumFmtSeparatorWidth;
/**
 * Returns the width of '#' character.
 * May return cached value.
 *
 * @param ctx The canvas rendering context
 * @param cell The cell
 */
function getNumFmtHashesWidth(ctx, cell) {
    helpers_2.verifyArgumentNotNull(cell, 'cell', 'getNumFmtSeparatorWidth');
    var fontKey = helpers_2.getFontCssStringFromCell(cell);
    var cachedValue = NumFmtHashWidthMapping[fontKey];
    if (util_1.isNullOrUndefined(cachedValue) || cachedValue === 0) {
        // In our case measure text with measureTextWidthLegacyAPI, leads to more accurate results.
        var width = measureTextWidthLegacyAPI(ctx, '#');
        NumFmtHashWidthMapping[fontKey] = width;
        return width;
    }
    return NumFmtHashWidthMapping[fontKey];
}
exports.getNumFmtHashesWidth = getNumFmtHashesWidth;
/**
 * Returns icon size + icon padding
 *
 * @param model the block's model
 * @param cell the cell with the icon
 */
function getTextIconPadding(model, cell) {
    var _a;
    if (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.CFIcons, model) && ((_a = cell.CondFormat) === null || _a === void 0 ? void 0 : _a.Icon)) {
        var fontSize = helpers_2.getActualFontSize(cell);
        var iconSize = helpers_3.getIconSize(fontSize, 1 /*devicePixelRatio*/);
        var iconPadding = helpers_3.getIconHorizontalPadding(fontSize, 1 /*devicePixelRatio*/);
        return iconSize + iconPadding;
    }
    return 0;
}
exports.getTextIconPadding = getTextIconPadding;
/**
 * Returns the internal padding of the cell in px.
 *
 * @param model that holds rendering flags
 * @param cell the cell that we calculate padding on
 * @param iconPadding icon size + icon width
 */
function getCellTextHorizontalPaddingInternal(model, cell, iconPadding) {
    var cellIndentation = cell.CachedStyle.Indentation || 0;
    var fontSize = helpers_2.getActualFontSize(cell);
    var shouldPadCenterAlignment = !util_1.isNullOrUndefined(cell.WrapText) || helpers_2.cellHasShrinkToFit(cell);
    var horizontalAlignment = helpers_4.getEffectiveHorizontalAlignment(model, cell);
    return getHorizontalPadding(fontSize, horizontalAlignment, cell.CachedFont.Italic, cellIndentation, shouldPadCenterAlignment, iconPadding);
}
/**
 * This function calculates and returns the amount of pixels we need to add
 * to the vertical positioning of the text due to specific fonts alignments.
 * In bottom vertical alignment this is used to verify we have at least 1 "free"
 * pixel above the bottom of the cell grid line and below the text.
 *
 * @param fontName - the name of the font we are rendering
 * @param fontSize - the size of the font we are rendering
 * @param verticalAlignment - the selected text vertical alignment
 * @param isWarpText - is the text wrapped or not
 *
 * @returns the amount of pixels that need to be added to the vertical
 * alignment of the text. the return value may be a negative number if
 * the text needs padding from the bottom, meaning the y position of the text
 * (Y axis is point down) is decreasing when we want to may the text look higher
 */
function getVerticalPaddingForFontName(fontName, fontSize, verticalAlignment) {
    if (verticalAlignment !== gridBlockModelDto_1.VerticalAlignment.Bottom) {
        return 0;
    }
    switch (fontName) {
        case 'Book Antiqua':
            if (fontSize < 10) {
                return -2;
            }
            if (fontSize < 20) {
                return -1;
            }
            return 0;
        case 'Cambria':
            if (fontSize < 12) {
                return -2;
            }
            if (fontSize < 17) {
                return -1;
            }
            return 0;
        case 'Century':
            if (fontSize < 10) {
                return -2;
            }
            if (fontSize < 16) {
                return -1;
            }
            return 0;
        case 'Comic Sans MS':
            if (fontSize < 9) {
                return -3;
            }
            if (fontSize < 14) {
                return -2;
            }
            if (fontSize < 20) {
                return -1;
            }
            return 0;
        case 'Constantia':
            if (fontSize < 10) {
                return -2;
            }
            if (fontSize < 22) {
                return -1;
            }
            return 0;
        case 'Georgia':
            if (fontSize < 11) {
                return -2;
            }
            if (fontSize <= 16) {
                return -1;
            }
            return 0;
        case 'Trebuchet MS':
            if (fontSize < 11) {
                return -3;
            }
            if (fontSize < 17) {
                return -1;
            }
            return 0;
        default:
            return 0;
    }
}
//# sourceMappingURL=textLayout.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayoutCache.js":
/*!******************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/layout/textLayoutCache.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************
 * All methods and constantans in this file are mocked in tests
 *******************************************************************/
var telemetry_1 = __webpack_require__(/*! ../telemetry */ "../../packages/excel-online-grid-renderer/lib/src/telemetry.js");
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
// Div element used to get font metrics from the browser by setting the font name and font size
var fontMetricsDiv = document.createElement('div');
var fontMetricsAlphabeticImg = document.createElement('img');
var fontMetricsMiddleImg = document.createElement('img');
// Must have text in the element, since the browser will avoid the layout for empty element (or only spaces) and we will not get the height.
fontMetricsDiv.innerText = '.';
fontMetricsDiv.style.visibility = 'hidden';
// Important to set the img height to 0 since otherwise it might impact the font height measurement to be larger then actual height
fontMetricsAlphabeticImg.style.height = '0px';
fontMetricsMiddleImg.style.height = '0px';
fontMetricsDiv.appendChild(fontMetricsAlphabeticImg);
fontMetricsDiv.appendChild(fontMetricsMiddleImg);
document.body.appendChild(fontMetricsDiv);
// Dictionary to cache font heights (key: font css string `${fontSize}pt ${fontName}`, value: height of the font in Px)
var fontMetrics = {
    '8pt Arial': { height: 12, baseline: 2.666666030883789, middle: 4.765625 },
    '9pt Arial': { height: 14, baseline: 3.33333, middle: 6.109375 },
    '10pt Arial': { height: 15, baseline: 3.6666666, middle: 6.453125 },
    '11pt Arial': { height: 16, baseline: 4, middle: 6.796875 },
    '12pt Arial': { height: 19, baseline: 4.33333333, middle: 8.15625 },
    '14pt Arial': { height: 22, baseline: 4.666666030883789, middle: 9.84375 },
    '16pt Arial': { height: 25, baseline: 5.33333333, middle: 11.53125 },
    '18pt Arial': { height: 28, baseline: 5.66666666, middle: 12.21875 },
    '22pt Arial': { height: 34, baseline: 6.666667938232422, middle: 14.609375 },
    '26pt Arial': { height: 40, baseline: 8, middle: 16.984375 },
    '28pt Arial': { height: 43, baseline: 8.6666666, middle: 18.3437 },
    '36pt Arial': { height: 55, baseline: 10.666667938232422, middle: 23.453125 },
    '8pt Calibri': { height: 13, baseline: 2.6666669845581055, middle: 5.46875 },
    '9pt Calibri': { height: 15, baseline: 3.3333330154418945, middle: 5.78125 },
    '10pt Calibri': { height: 17, baseline: 3.3333330154418945, middle: 7.09375 },
    '11pt Calibri': { height: 18, baseline: 4, middle: 7.40625 },
    '12pt Calibri': { height: 19, baseline: 4, middle: 7.71875 },
    '14pt Calibri': { height: 21, baseline: 5.33333396911621, middle: 9.328125 },
    '15pt Calibri': { height: 23, baseline: 5.6666666667, middle: 9.640625 },
    '16pt Calibri': { height: 26, baseline: 6, middle: 10.953125 },
    '18pt Calibri': { height: 29, baseline: 6.666666030883789, middle: 11.578125 },
    '20pt Calibri': { height: 32, baseline: 7.333333969116211, middle: 13.1875 },
    '24pt Calibri': { height: 39, baseline: 8.666666793, middle: 16.09375 },
    '28pt Calibri': { height: 45, baseline: 10, middle: 18.666666 },
    '36pt Calibri': { height: 59, baseline: 12.666666679, middle: 24.140625 },
    '48pt Calibri': { height: 72, baseline: 17.333332061767578, middle: 31.859375 },
    '14pt Comic Sans MS': { height: 26, baseline: 5.3333332061, middle: 10.03125 },
    '8pt Times New Roman': { height: 11, baseline: 2.666666030883789, middle: 4.390625 },
    '8.5pt Times New Roman': { height: 12, baseline: 2.8888888888884, middle: 4.53125 },
    '9pt Times New Roman': { height: 14, baseline: 3, middle: 6.6875 },
    '10pt Times New Roman': { height: 15, baseline: 3.3333333, middle: 6.984375 },
    '11pt Times New Roman': { height: 17, baseline: 4, middle: 7.28125 },
    '12pt Times New Roman': { height: 18, baseline: 4.3333333, middle: 7.578125 },
    '13pt Times New Roman': { height: 19, baseline: 4.5, middle: 8.875 },
    '14pt Times New Roman': { height: 22, baseline: 4.666666030883789, middle: 9.171875 },
    '16pt Times New Roman': { height: 25, baseline: 5.333333, middle: 10.765625 },
    '18pt Times New Roman': { height: 28, baseline: 6, middle: 11.375 },
    '14pt Trebuchet MS': { height: 22, baseline: 4, middle: 8.875 },
    '8pt Verdana': { height: 13, baseline: 2, middle: 4.90625 }
};
/**
 * Returns the cached font metrics if exists,
 * Otherwise measure the font metrics using a div element + img element, caches it and return it.
 */
function getCachedFontMetrics(fontName, fontSize) {
    var fontLookupKey = getFontLookupKey(fontName, fontSize);
    var cachedFontMetrics = fontMetrics[fontLookupKey];
    if (cachedFontMetrics) {
        // Found a cached height for the requested font name and size
        return cachedFontMetrics;
    }
    // When font size is between 0 and 1 - the measure might return '0' when it should return 1
    if (fontSize >= 0 && fontSize < 1) {
        fontMetrics[fontLookupKey] = { baseline: 0, height: 1, middle: 0 };
        return fontMetrics[fontLookupKey];
    }
    // New combination of font name and font size - need to measure the height
    var newFontMetrics = getFontMetrics(fontLookupKey);
    if (newFontMetrics.height === 0 && fontSize >= 1) {
        // To make sure fontMetricsDiv was actually attached to the DOM need to make sure the parent element is defined
        var fontMetricsDivParentStr = fontMetricsDiv.parentNode !== null ? 'Has Parent' : 'Parent is null';
        // To make sure the fontMetricsDiv is not display=='none'
        var displayMode = window.getComputedStyle(fontMetricsDiv).getPropertyValue('display');
        // Make another attempt to append 'fontMetricsDiv' to the body,
        fontMetricsDiv.style.display = 'block';
        document.body.appendChild(fontMetricsDiv);
        var fontMetricsAfterAppend = getFontMetrics(fontLookupKey);
        var fontMetricsComputedStyle = window.getComputedStyle(fontMetricsDiv);
        var displayMode2 = fontMetricsComputedStyle.getPropertyValue('display');
        var computedHeight = fontMetricsComputedStyle.getPropertyValue('height');
        var fontBoundingClientRect = fontMetricsDiv.getBoundingClientRect();
        if (fontMetricsAfterAppend.height !== 0) {
            fontMetrics[fontLookupKey] = fontMetricsAfterAppend;
            return fontMetricsAfterAppend;
        }
        // Make another attempt - setting overflow hidden to avoid floating elements issues
        fontMetricsDiv.style.overflow = 'hidden';
        var fontMetricsAfterOverflowChange = getFontMetrics(fontLookupKey);
        if (fontMetricsAfterOverflowChange.height !== 0) {
            fontMetrics[fontLookupKey] = fontMetricsAfterOverflowChange;
            return fontMetricsAfterOverflowChange;
        }
        var errorMessage = "\n       fontMetricsDivHeight == 0.\n       Font name: " + helpers_1.getFontNameForLogging(fontName) + ", font size: " + fontSize + ".\n       fontMetricsDiv " + fontMetricsDivParentStr + ". fontMetricsDivDisplayMode: " + displayMode + ".\n       After another appendChild:\n       FontMetricsDivHeight2: " + fontMetricsAfterAppend.height + " (getFontMetricsDivHeight), fontMetricsDivDisplayMode: " + displayMode2 + " (getComputedStyle),\n       fontBoundingClientRect.height: " + fontBoundingClientRect.height + ", top:" + fontBoundingClientRect.top + ", bottom:" + fontBoundingClientRect.bottom + ".\n       css.height: " + fontMetricsComputedStyle.height + ", css.line-height: " + fontMetricsComputedStyle.lineHeight + ", computedHeight: " + computedHeight + ".\n       FontMetricsDiv.scrollWidth: " + fontMetricsDiv.scrollWidth + ", fontMetricsDiv.scrollHeight: " + fontMetricsDiv.scrollHeight;
        telemetry_1.setDivMetricWarning(errorMessage);
        /**
         * For Custom fonts, we are trying to use another font name (Calibri) with the same font size,
         * to prevent fallback to HTML.
         * No caching is done since we are not sure this custom font measure fails every time
         */
        if (fontName !== helpers_1.getFontNameForLogging(fontName)) {
            var approximateFontCssString = fontSize + "pt Calibri";
            if (fontMetrics[approximateFontCssString]) {
                return fontMetrics[approximateFontCssString];
            }
        }
        // throw will be removed once we can return a cached value that is good enough
        // VSO:4160535 - Font - tag_cok8f: fontMetricsDivHeight == 0 - mitigation: return cache value
        throw Error(errorMessage);
    }
    fontMetrics[fontLookupKey] = newFontMetrics;
    return fontMetrics[fontLookupKey];
}
exports.getCachedFontMetrics = getCachedFontMetrics;
/**
 * Reset the FontMetrics for the font using the browser layout engine through setting the font css to a div element
 *
 * @param fontName the font whose FontMetrics needs to calculated
 */
function recalculateFontHeights(fontName) {
    var fontLookupKeys = Object.getOwnPropertyNames(fontMetrics);
    for (var i = 0; i < fontLookupKeys.length; i++) {
        var lookupKey = fontLookupKeys[i];
        if (lookupKey.indexOf(fontName) >= 0) {
            fontMetrics[lookupKey] = getFontMetrics(lookupKey);
        }
    }
}
exports.recalculateFontHeights = recalculateFontHeights;
/**
 * Returns a string representing the font name and size, without style / weight.
 * This function cannot be used to set `ctx.font`, see `getFontCssStringFromFont` for that.
 *
 * @param fontName The font name
 * @param fontSize The font size
 */
function getFontLookupKey(fontName, fontSize) {
    // removing attributes that are not supported in canvas (like `(Body)` in font name)
    var adaptedFontName = helpers_1.canonizeFontName(fontName);
    // Since this function ignores font weight, `11pt Calibri` and `Bold 11pt Calibri` will result
    // in the same output which makes it more efficient to store as key for fontMetricsDivHeight.
    return fontSize + "pt " + adaptedFontName;
}
/**
 * Returns the font metrics using the browser layout engine through setting the font css to a div element
 *
 * @param fontLookupKey the requested css font
 */
function getFontMetrics(fontLookupKey) {
    var fontMetricsDivHeight = -1;
    var fontMetricsBaselineHeight = -1;
    var fontMetricsMiddleBaselineHeight = -1;
    var alphabeticBaselineLocator = fontMetricsAlphabeticImg;
    var middleBaselineLocator = fontMetricsMiddleImg;
    // We set here all the elements needed for the measurement
    fontMetricsDiv.style.font = fontLookupKey;
    alphabeticBaselineLocator.style.verticalAlign = 'baseline'; // aligns baselineLocator to alphabetic baseline of fontMetricsDiv
    middleBaselineLocator.style.verticalAlign = 'middle'; // aligns baselineLocator with middle baseline of fontMetricsDiv
    // Tell the browser to do the measuring
    telemetry_1.trackDuration(telemetry_1.RenderPerformanceMetric.GetFontMetrics, function () {
        fontMetricsDivHeight = fontMetricsDiv.clientHeight;
        fontMetricsBaselineHeight = getFontBaselineHeight(alphabeticBaselineLocator);
        fontMetricsMiddleBaselineHeight = getFontBaselineHeight(middleBaselineLocator);
    }, 
    /* shouldAggregate */ true);
    return { height: fontMetricsDivHeight, baseline: fontMetricsBaselineHeight, middle: fontMetricsMiddleBaselineHeight };
}
/**
 * Returns the height of the actual font baseline in respect to the font bottom position
 *
 * @param fontCssString the requested css font
 */
function getFontBaselineHeight(baselineLocator) {
    var bottomY = fontMetricsDiv.getBoundingClientRect().bottom; // bottom of fontMetricsDiv
    var baseLineY = baselineLocator.getBoundingClientRect().bottom; // viewport position of baseline\
    return bottomY - baseLineY;
}
//# sourceMappingURL=textLayoutCache.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/modelUpdate/numberFormatting.js":
/*!************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/modelUpdate/numberFormatting.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
/**
 * Updates NumFmt according cell text after it has been updated during client-side estimation.
 * Updates only NumFmt.End, all other NumFmt fields are kept as-is.
 * Example -
 *    Old NumFmt = {Start: '$ ', Separator: ' ', End: ' 1.00 '} and new cellText = '$   2.00 '
 *    New NumFmt = {Start: '$ ', Separator: ' ', End: ' 2.00'}
 *    Notice that NumFmt.End is updated from ' 1.00 ' -> ' 2.00 '
 * @param cell The cell for which NumFmt has to be updated.
 */
function updateNumFmtFromCell(cell) {
    var _a, _b, _c, _d, _e, _f;
    helpers_1.verifyArgumentNotNull(cell.Text, 'cell.Text', 'updateNumFmt');
    helpers_1.verifyArgumentNotNull(cell.NumFmt, 'cell.NumFmt', 'updateNumFmt');
    if (!util_1.isNullOrUndefined(cell.NumFmt.End) && !util_1.isNullOrUndefined(cell.NumFmt.Separator)) {
        // Calculate the number of times the separator character is at the start and end of NumFmt.Start.
        // Example - If NumFmt.End = ' 1.00 ' and NumFmt.Separator = ' ',
        //           Then separatorCountAtStart = separatorCountAtEnd = 1
        var separatorCountAtStart = getSeparatorCountFromStart(cell.NumFmt.End, cell.NumFmt.Separator);
        var separatorCountAtEnd = getSeparatorCountFromEnd(cell.NumFmt.End, cell.NumFmt.Separator);
        // Trim separators at start and end.
        var trimmedEnd = getTrimmedText(cell.Text, separatorCountAtEnd, cell.NumFmt.Separator);
        // Build new NumFmt.End
        cell.NumFmt.End = buildNumFmtEndText(trimmedEnd, cell.NumFmt.Separator, separatorCountAtStart, separatorCountAtEnd);
        // Validate if the estimate was valid, if not clear numFmt.
        // Whenever the start or separator changes, we are not able to calculate the NumFm.End correctly
        // Instead of showing something invalid, we clear the NumFmt structure
        // Example-1
        //         Old NumFmt = {Start: '$ ', Separator: ' ', End: ' 2.00 '} and old cellText = '$   2.00 '
        //         The new cellText = '$ XXXXX 2.00 ', where the separator is now 'X'
        //         our calculated NumFmt = {Start: '$ ', Separator: ' ', End: ' 2.00'}, which is incorrect.
        // Example-2
        //         Old NumFmt = {Start: '$ ', Separator: ' ', End: ' 2.00 '} and old cellText = '$   2.00 '
        //         The new cellText = 'Loss     2.00 ', where the start is now 'Loss '
        //         our calculated NumFmt = {Start: '$ ', Separator: ' ', End: ' 2.00'}, which is incorrect.
        if (!((_b = (_a = cell) === null || _a === void 0 ? void 0 : _a.Text) === null || _b === void 0 ? void 0 : _b.endsWith(((_c = cell.NumFmt) === null || _c === void 0 ? void 0 : _c.Separator) + cell.NumFmt.End)) ||
            !((_e = (_d = cell) === null || _d === void 0 ? void 0 : _d.Text) === null || _e === void 0 ? void 0 : _e.startsWith(((_f = cell.NumFmt) === null || _f === void 0 ? void 0 : _f.Start) || ''))) {
            cell.NumFmt = undefined;
        }
    }
}
exports.updateNumFmtFromCell = updateNumFmtFromCell;
/**
 * Get the separator at the start of the text.
 */
function getSeparatorCountFromStart(text, separator) {
    var count = 0;
    for (var index = 0; index < text.length; index++) {
        if (text[index] === separator) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}
/**
 * Get the separator at the end of the text.
 */
function getSeparatorCountFromEnd(text, separator) {
    var count = 0;
    for (var index = text.length - 1; index > 0; index++) {
        if (text[index] === separator) {
            count++;
        }
        else {
            break;
        }
    }
    return count;
}
/**
 * Get trimmed text, it doesn't contain the separator character at the start or end.
 */
function getTrimmedText(text, separatorCountAtEnd, separator) {
    // Ignore separators at end.
    var newLength = text.length - separatorCountAtEnd;
    var trimmedText = text.substring(0, newLength);
    var endIndexOfSeparator = trimmedText.lastIndexOf(separator);
    // no separator was found.
    if (endIndexOfSeparator === -1) {
        return trimmedText;
    }
    return trimmedText.substr(endIndexOfSeparator + 1);
}
/**
 * Builds the new NumFmt.End text.
 */
function buildNumFmtEndText(text, separator, separatorCountAtStart, separatorCountAtEnd) {
    return separator.repeat(separatorCountAtStart) + text + separator.repeat(separatorCountAtEnd);
}
//# sourceMappingURL=numberFormatting.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/modelUpdate/spillCell.js":
/*!*****************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/modelUpdate/spillCell.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var gridBlockRendererGlobals_1 = __webpack_require__(/*! ../gridBlockRendererGlobals */ "../../packages/excel-online-grid-renderer/lib/src/gridBlockRendererGlobals.js");
var helpers_2 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-grid-renderer/lib/src/helpers.js");
var textLayout_1 = __webpack_require__(/*! ../layout/textLayout */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayout.js");
/**
 * Client side calculation of the required model update in order to show spill cell correctly.
 * Update the given cell SpillInformation which will be used later by the renderer.
 * It will also update the two adjacent cells to the left and to the right,
 * since they are also affected by the change of this cell.
 * Even if the cell does not spill it can effect the adjacent cells:
 * Example: *new cell* was set in column C blocking adjacent cell to the left on column B
 * |  A  |   B   |    C     |    D    |    E    |   F  |   G   | H |    I   |
 * --------------------------------------------------------------------------
 * |     |start c|*new cell*|         |     end cell right aligned and spill|
 * --------------------------------------------------------------------------
 *
 * @param  {Cell|nullable} cell the cell that was updated by a set cell operation or a calc result
 */
function updateCellSpill(ctx, model, cell) {
    helpers_2.verifyArgumentNotNull(cell, 'cell', 'spillCell.updateCellSpill');
    helpers_2.verifyArgumentNotNull(model, 'model', 'spillCell.updateCellSpill');
    if (!cell.Text ||
        cell.WrapText ||
        cell.Merge ||
        helpers_2.cellHasShrinkToFit(cell) ||
        (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAccountingAndCustom, model) && cell.ValueType === gridBlockModelDto_1.CellValueType.Number)) {
        return;
    }
    if (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.MeasureTextRefactor, model)) {
        ctx.font = helpers_2.getFontCssStringFromCell(cell);
    }
    var textWidth = helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.MeasureTextRefactor, model)
        ? textLayout_1.getTextWidth(ctx, model, cell)
        : gridBlockRendererGlobals_1.GridBlockRendererGlobals.measureTextWidth(cell.Text, helpers_2.getFontCssStringFromCell(cell), helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.AdvancedTextMetrics, model));
    // How many cells this cell spills in each direction without limitations of blocking cells
    var _a = getNumberOfSpilledOverCells(cell, model, textWidth, Direction.End), numberOfSpilledOverCellsToEnd = _a.spilledOverCellsCount, isSpillingOutsideOfBlockEnd = _a.isSpillingOutsideOfBlock;
    var _b = getNumberOfSpilledOverCells(cell, model, textWidth, Direction.Start), numberOfSpilledOverCellsToStart = _b.spilledOverCellsCount, isSpillingOutsideOfBlockStart = _b.isSpillingOutsideOfBlock;
    var isSpillingOutsideOfBlock = isSpillingOutsideOfBlockEnd || isSpillingOutsideOfBlockStart;
    if (numberOfSpilledOverCellsToEnd === 0 && numberOfSpilledOverCellsToStart === 0) {
        if (isSpillingOutsideOfBlock) {
            cell.Spill = {
                SpanToStart: 0,
                SpanToEnd: 0,
                IsSpillBlocked: true // spilling between blocks is marked as blocked to clip the text instead of crunching it with maxWidth
            };
        }
        // Return if the cell is not spilling (or spilling outside of block)
        return;
    }
    // Get the blocking cells from each direction
    var startBlockingCell = getFirstBlockingCell(cell, model, Direction.Start);
    var endBlockingCell = getFirstBlockingCell(cell, model, Direction.End);
    // How many cells can this cell actually spill over to until it is blocked by a non empty cell
    var cellsGapToStartCell = getCellsGap(startBlockingCell, cell, model, Direction.Start);
    var cellsGapToEndCell = getCellsGap(endBlockingCell, cell, model, Direction.End);
    // Update the current cell spill information
    cell.Spill = {
        SpanToStart: Math.min(numberOfSpilledOverCellsToStart, cellsGapToStartCell),
        SpanToEnd: Math.min(numberOfSpilledOverCellsToEnd, cellsGapToEndCell),
        // a cell spill is blocked if it spill text require more cells then there are available between this cell and blocking cells or if its spilling outside of block
        IsSpillBlocked: isSpillingOutsideOfBlock ||
            numberOfSpilledOverCellsToStart > cellsGapToStartCell ||
            numberOfSpilledOverCellsToEnd > cellsGapToEndCell
    };
}
exports.updateCellSpill = updateCellSpill;
/**
 * Returns the number of columns the given cell spills over to in the requested
 * spill direction and according to its text width and column.
 *
 * For example: for a given cell in column 'F' which is center aligned
 * |  A  |  B  |  C  |  D  |   E   |   F  |       G        |  H  |  I  |
 * ---------------------------------------------------------------------
 * |     |     |  center aligned cell spills in both directions  |     |
 * ---------------------------------------------------------------------
 *             <----SpillToStart---|      |---SpillToEnd--------->
 * For LTR mode:
 * - for requested SpillDirection.Start it will return 3 cells.
 * - for requested SpillDirection.End it will return 2 cells.
 * For RTL the reverse will apply
 *
 * @param cell the origin cell that starts the spill and contains the text
 * @param model the model
 * @param textWidth the cell text width
 * @param spillDirection the requested direction to return the amount of spilled over cells
 * @returns the number of columns the given cell spills over to in the requested spill direction, and a boolean indicates if it spills outside of the block boundaries.
 */
function getNumberOfSpilledOverCells(cell, model, textWidth, spillDirection) {
    var col = cell.Col;
    var spilledPixels = getNumberOfSpilledPixels(model, cell, textWidth, spillDirection);
    var spilledOverCellsCount = 0;
    var isSpillingOutsideOfBlock = false;
    if (spilledPixels === 0) {
        return { spilledOverCellsCount: spilledOverCellsCount, isSpillingOutsideOfBlock: isSpillingOutsideOfBlock };
    }
    var columnCount = model.ColumnNumbers.length;
    col += spillDirection;
    while (isInsideBlockColumnBoundaries(col, columnCount) && spilledPixels > 0) {
        // Convert spill pixels to spill over cell count by iterating over the cells of the row until no more spill pixels left
        spilledOverCellsCount++;
        spilledPixels -= helpers_2.getColumnWidth(col, model);
        col += spillDirection;
    }
    isSpillingOutsideOfBlock = !isInsideBlockColumnBoundaries(col, columnCount) && spilledPixels > 0;
    return { spilledOverCellsCount: spilledOverCellsCount, isSpillingOutsideOfBlock: isSpillingOutsideOfBlock };
}
/**
 * Returns the number of spilled pixels in the requested direction according to the cell width, the text width, and the alignment of the cell
 *
 * @param model the model accessor
 * @param cell the origin cell that starts the spill and contains the text
 * @param textWidth the updated text width of the cell
 * @param requestedSpillDirection the direction (to start/to end) of spilled pixels to return
 */
function getNumberOfSpilledPixels(model, cell, textWidth, requestedSpillDirection) {
    var cellStyle = helpers_2.getCellStyle(cell, model);
    helpers_2.verifyArgumentNotNull(cellStyle, 'cell.CachedStyle', 'spillCell.getNumberOfSpilledPixels');
    var cellAlignment = cellStyle.HorizontalAlignment;
    var cellWidth = helpers_2.getColumnWidth(cell.Col, model);
    var spilledPixels = textLayout_1.getCellTextHorizontalPadding(cell, model) + textWidth - cellWidth;
    if (spilledPixels <= 0) {
        return 0;
    }
    if (cellAlignment === gridBlockModelDto_1.HorizontalAlignment.Center) {
        return spilledPixels / 2;
    }
    // We only want the spilled pixels in the requested direction (to start/end)
    var isRtl = model.IsRtl;
    if (!isSpillingInDirection(cellAlignment, requestedSpillDirection, isRtl)) {
        return 0;
    }
    return spilledPixels;
}
/**
 * Returns true if the given column is inside the block (between 0 and given maxColumns)
 * @param column the column to check
 * @param maxColumns the number of columns in this block
 */
function isInsideBlockColumnBoundaries(column, maxColumns) {
    return column >= 0 && column < maxColumns;
}
/**
 * Get the closest adjacent non empty cell in the requested direction.
 *
 * @param cell the currently updated cell
 * @param model
 * @param direction the requested direction from the cell to either start/end of the block
 */
function getFirstBlockingCell(cell, model, direction) {
    var row = cell.Row;
    var col = cell.Col + direction;
    while (isInsideBlockColumnBoundaries(col, model.ColumnNumbers.length)) {
        var adjacentCell = helpers_2.getCell(row, col, model);
        if (adjacentCell && isNonEmptyCell(adjacentCell)) {
            return adjacentCell;
        }
        col += direction;
    }
    return null;
}
/**
 * Returns the number of cells between the given cell and the given blocking cell.
 * Or distance to end of block in the requested direction if there is no blocking cell.
 *
 * @param blockingCell the adjacent non empty cell or null if no blocking cell exists
 * @param cell the currently updated cell
 * @param model the access to the model
 * @param direction the requested direction in which we want to cells gap
 */
function getCellsGap(blockingCell, cell, model, direction) {
    if (blockingCell) {
        // The gap is always the absolute column distance between the blocking cell and the updated cell without the cell itself (-1)
        return Math.abs(blockingCell.Col - cell.Col) - 1;
    }
    // If there is no blocking cell return the distance to end of block in the requested direction
    return direction === Direction.End ? model.ColumnNumbers.length - cell.Col : cell.Col;
}
function isNonEmptyCell(cell) {
    var _a;
    if (cell) {
        if (cell.Text || ((_a = cell.FormulaInfo) === null || _a === void 0 ? void 0 : _a.Formula)) {
            return true;
        }
    }
    return false;
}
/**
 * Updates the two closets adjacent cells spill information which could be blocked/non-blocked now
 *
 * @param cell the cell that was updated
 * @param model the model accessor
 */
function updateClosestNonEmptyCellsSpill(ctx, cell, model) {
    // Get adjacent cells from the left and from the right
    var startBlockingCell = getFirstBlockingCell(cell, model, Direction.Start);
    var endBlockingCell = getFirstBlockingCell(cell, model, Direction.End);
    // Get the allowed cells to span into from both sides
    // While updating the adjacent start & end cells spill according to this cell updated text
    /**
     * |  A  |   B   |  C  |   D   |   E  |  F  |  G  |  H  |   I   |
     * --------------------------------------------------------------
     * |     | start |     |       | cell |     |     |     |  end  |
     * --------------------------------------------------------------
     *              <--gapToStart--|      |--gapToEnd---->
     *
     * In this example the gap to left is 2, and the gap to right is 3
     *
     * When start/left blocking cell is also a spill cell: (since we allow spill text rendering one over the other)
     * - start cell should update its spill information since it might be blocked by current cell position
     * - end cell can not be effected by current cell changes
     */
    updateClosestNonEmptyCell(ctx, startBlockingCell, cell, model, Direction.Start);
    updateClosestNonEmptyCell(ctx, endBlockingCell, cell, model, Direction.End);
}
exports.updateClosestNonEmptyCellsSpill = updateClosestNonEmptyCellsSpill;
function updateClosestNonEmptyCell(ctx, blockingCell, cell, model, direction) {
    var cellsGap = getCellsGap(blockingCell, cell, model, direction);
    if (blockingCell && blockingCell.Spill) {
        var blockingCellStyle = helpers_2.getCellStyle(blockingCell, model);
        helpers_2.verifyArgumentNotNull(blockingCellStyle, 'blockingCellStyle', 'spillCell.updateClosestNonEmptyCell');
        var blockingCellAlignment = blockingCellStyle.HorizontalAlignment;
        var blockingCellSpillDirection = -direction;
        if (isSpillingInDirection(blockingCellAlignment, blockingCellSpillDirection, model.IsRtl)) {
            if (!cell || !cell.Text) {
                // If this cell blocked the closest non empty cell - we need to allow the adjacent cell to spill again
                updateCellSpill(ctx, model, cell);
            }
            else {
                // If it spills we need to make sure adjacent cell is not blocked now by this cell
                var allowedSpanCells = direction === Direction.End ? blockingCell.Spill.SpanToStart : blockingCell.Spill.SpanToEnd;
                blockingCell.Spill.IsSpillBlocked = cellsGap <= allowedSpanCells;
                if (direction === Direction.End) {
                    blockingCell.Spill.SpanToStart = Math.min(allowedSpanCells, cellsGap);
                }
                else {
                    blockingCell.Spill.SpanToEnd = Math.min(allowedSpanCells, cellsGap);
                }
            }
        }
    }
    return cellsGap;
}
/**
 * Returns true if the cell is spilling in the requested direction
 *
 * @param cellAlignment the cell alignment
 * @param requestedDirection the direction in which we check if the cell spills to
 * @param isRtl is the sheet mode is right to left
 * @returns true if the cell is spilling in the requested direction
 */
function isSpillingInDirection(cellAlignment, requestedDirection, isRtl) {
    if (cellAlignment === gridBlockModelDto_1.HorizontalAlignment.Center) {
        // Center alignment spills both ways
        return true;
    }
    // LTR: (vice versa on RTL)
    // - if the requested direction is to start, then we check if the cell is aligned to the right (which means it spills left to the start)
    // - if the requested direction is to end, then we check if the cell is aligned to the left (which means it spills right to the end)
    if (requestedDirection === Direction.Start) {
        if (isRtl) {
            return cellAlignment === gridBlockModelDto_1.HorizontalAlignment.Left;
        }
        return cellAlignment === gridBlockModelDto_1.HorizontalAlignment.Right;
    }
    if (requestedDirection === Direction.End) {
        if (cellAlignment === gridBlockModelDto_1.HorizontalAlignment.Automatic) {
            // Allow spill on automatic horizontal alignment until server block arrive
            return true;
        }
        if (isRtl) {
            return cellAlignment === gridBlockModelDto_1.HorizontalAlignment.Right;
        }
        return cellAlignment === gridBlockModelDto_1.HorizontalAlignment.Left;
    }
    return false;
}
var Direction;
(function (Direction) {
    Direction[Direction["Start"] = -1] = "Start";
    Direction[Direction["End"] = 1] = "End";
})(Direction || (Direction = {}));
//# sourceMappingURL=spillCell.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/polyfills/index.js":
/*!***********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/polyfills/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var string_repeat_1 = __webpack_require__(/*! ./string.repeat */ "../../packages/excel-online-grid-renderer/lib/src/polyfills/string.repeat.js");
var string_trimRight_1 = __webpack_require__(/*! ./string.trimRight */ "../../packages/excel-online-grid-renderer/lib/src/polyfills/string.trimRight.js");
var polyfillLoaded = false;
/**
 * Loads multiple polyfills if not loaded.
 */
function loadPolyFills() {
    // Load polyfills if not not loaded.
    if (!polyfillLoaded) {
        string_repeat_1.loadStringRepeat();
        string_trimRight_1.loadStringTrimRight();
        polyfillLoaded = true;
    }
}
exports.loadPolyFills = loadPolyFills;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/polyfills/string.repeat.js":
/*!*******************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/polyfills/string.repeat.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
/**
 * Polyfill for string.repeat(count) which is not supported by IE11 and required by this module.
 * Based on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat#Polyfill
 */
function loadStringRepeat() {
    if (!String.prototype.repeat) {
        String.prototype.repeat = function (repeatCount) {
            if (this == null)
                throw new TypeError("can't convert " + this + ' to object');
            var str = '' + this;
            var count = 0;
            // Check NaN
            if (util_1.isNullOrUndefined(repeatCount)) {
                count = 0;
            }
            if (repeatCount < 0) {
                throw new RangeError('repeat count must be non-negative');
            }
            if (repeatCount === Infinity) {
                throw new RangeError('repeat count must be less than infinity');
            }
            count = Math.floor(repeatCount);
            if (str.length === 0 || count === 0) {
                return '';
            }
            // Ensuring count is a 31-bit integer allows us to heavily optimize the
            // main part. But anyway, most current (August 2014) browsers can't handle
            // strings 1 << 28 chars or longer, so:
            if (str.length * count >= 1 << 28) {
                throw new RangeError('repeat count must not overflow maximum string size');
            }
            var maxCount = str.length * count;
            count = Math.floor(Math.log(count) / Math.log(2));
            while (count) {
                str += str;
                count--;
            }
            str += str.substring(0, maxCount - str.length);
            return str;
        };
    }
}
exports.loadStringRepeat = loadStringRepeat;
//# sourceMappingURL=string.repeat.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/polyfills/string.trimRight.js":
/*!**********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/polyfills/string.trimRight.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Polyfill for string.trimRight() which is not supported by IE11 and required by this module.
 * Based on: https://github.com/es-shims/String.prototype.trimRight
 */
function loadStringTrimRight() {
    var RightWhitespaceRegEx = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]*$/;
    if (!String.prototype.trimRight) {
        String.prototype.trimRight = function () {
            return this.replace(RightWhitespaceRegEx, '');
        };
    }
}
exports.loadStringTrimRight = loadStringTrimRight;
//# sourceMappingURL=string.trimRight.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/resourceLoading/fontLoader.js":
/*!**********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/resourceLoading/fontLoader.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var textLayoutCache_1 = __webpack_require__(/*! ../layout/textLayoutCache */ "../../packages/excel-online-grid-renderer/lib/src/layout/textLayoutCache.js");
var fontLoaderHelpers_1 = __webpack_require__(/*! ./fontLoaderHelpers */ "../../packages/excel-online-grid-renderer/lib/src/resourceLoading/fontLoaderHelpers.js");
// enum to track the status of font in the dictionary
var FontLoadStatus;
(function (FontLoadStatus) {
    FontLoadStatus[FontLoadStatus["Pending"] = 0] = "Pending";
    FontLoadStatus[FontLoadStatus["Loaded"] = 1] = "Loaded";
    FontLoadStatus[FontLoadStatus["Failed"] = 2] = "Failed";
})(FontLoadStatus || (FontLoadStatus = {}));
// Dictionary to cache the list of font  (key: font name, value: true if already downloaded)
var fontList = {};
// Div element used to trigger font loading by  the browser by setting the font name and font size
var fontLoadDiv = document.createElement('div');
fontLoadDiv.innerText = '.';
fontLoadDiv.style.visibility = 'hidden';
document.body.appendChild(fontLoadDiv);
/**
 * Checks if font loading is required for the model, if yes then register for font load events.
 *
 * @param model model for which need to check if font loading required
 * @param onFontLoadStateChanged Callback to be called depending upon different stages of font loading
 * @param onFontLoadFailure method to be called if the font loading gets failed.
 */
function registerActionOnFontLoadIfRequired(model, onFontLoadStateChanged, onFontLoadFailure) {
    if (!fontLoaderHelpers_1.fontFaceSetSupported()) {
        return;
    }
    if (fontLoadingRequired(model)) {
        onFontLoadStateChanged(0 /* Start */);
        triggerFontLoading(model);
        registerFontLoadEvent(model, onFontLoadStateChanged, onFontLoadFailure);
    }
}
exports.registerActionOnFontLoadIfRequired = registerActionOnFontLoadIfRequired;
/**
 * Register event handlers for font loading using document.fonts interface
 *
 * @param model model for which need to handle font loading
 * @param onFontLoadStateChanged Callback to be called depending upon different stages of font loading
 * @param onFontLoadFailure method to be called if the font loading gets failed.
 */
function registerFontLoadEvent(model, onFontLoadStateChanged, onFontLoadFailure) {
    // Listen to the promise which will resolve after all the fonts in the view-port are loaded
    fontLoaderHelpers_1.getFontFaceSetReady().then(function () {
        var fontsLoaded = checkAndUpdateLoadedFonts(model, onFontLoadFailure);
        if (fontsLoaded) {
            setModelDirty(model);
            // invoke successCallback
            onFontLoadStateChanged(1 /* Loaded */);
        }
        onFontLoadStateChanged(2 /* Completed */);
    }, function () {
        onFontLoadFailure('API_Failure');
        onFontLoadStateChanged(2 /* Completed */);
    });
}
/**
 * Checks if the pending font is loaded successfully and updates the font-dictionary accordingly.
 * Returns true if at least one of the pending fonts gets loaded, else return false.
 *
 * @param model model for which need to check and update font's status.
 * @param onFontLoadFailure method to be called if the font loading gets failed.
 */
function checkAndUpdateLoadedFonts(model, onFontLoadFailure) {
    if (!model.Fonts) {
        return false;
    }
    var fontsLoaded = false;
    for (var index = 0; index < model.Fonts.length; index++) {
        var fontName = model.Fonts[index].FontName;
        if (isFontDownloaded(fontName)) {
            if (fontList[fontName] !== FontLoadStatus.Loaded) {
                textLayoutCache_1.recalculateFontHeights(fontName);
                fontList[fontName] = FontLoadStatus.Loaded;
            }
            fontsLoaded = true;
        }
        else {
            // Ideally the loading of font should not fail if the correct URL is provided to load the font.
            // Setting it to failed to avoid re-trying recursively.
            fontList[fontName] = FontLoadStatus.Failed;
            onFontLoadFailure(fontName);
        }
    }
    return fontsLoaded;
}
/**
 * Returns true if fonts gets downloaded, else return false.
 */
function isFontDownloaded(fontName) {
    return fontLoaderHelpers_1.checkFontStatusInFontFaceSet(fontName);
}
/**
 * Returns true if encounters any new font which not in dictionary or fonts that is waiting for download.
 *
 * @param model method to be called after the font is loaded
 */
function fontLoadingRequired(model) {
    if (!model.Fonts || model.Fonts.length === 0) {
        return false;
    }
    for (var index = 0; index < model.Fonts.length; index++) {
        var fontName = model.Fonts[index].FontName;
        // if font is not in the font list, or not yet downloaded font loading is required
        if (!fontList[fontName] || fontList[fontName] === FontLoadStatus.Pending) {
            return true;
        }
    }
    return false;
}
/**
 * Sets the fontLoadDiv style to the fonts that were not cached before,
 * causing the browser to load the font represented by the fontCssString if this
 * font is missing.
 *
 * @param model the grid block model
 */
function triggerFontLoading(model) {
    for (var index = 0; index < model.Fonts.length; index++) {
        var fontName = model.Fonts[index].FontName;
        if (!fontList[fontName]) {
            // trigger the browser font load logic without layout
            fontLoaderHelpers_1.setFontLoadDivWithFontFamily(fontLoadDiv, fontName);
            fontList[fontName] = FontLoadStatus.Pending;
        }
    }
}
function setModelDirty(model) {
    model.IsDirty = true;
}
/**
 * This is a test hook, and although it is public it should be kept last.
 * When testing fontLoading, we want to start every test with possibly
 * a clean fontList, although we want to keep the same list in some tests
 * and in production code.
 */
function resetFontList() {
    fontList = {};
}
exports.resetFontList = resetFontList;
//# sourceMappingURL=fontLoader.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/resourceLoading/fontLoaderHelpers.js":
/*!*****************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/resourceLoading/fontLoaderHelpers.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*******************************************************************
 * These functions are production code.
 * All functions in this file are using mock implementation for tests.
 *******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checking if FontFaceSet api exists for the current browser.
 * "document.fonts" (FontFaceSet) api is not supported by all browsers.
 * https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet
 */
function fontFaceSetSupported() {
    return document.fonts !== undefined;
}
exports.fontFaceSetSupported = fontFaceSetSupported;
/**
 * The ready readonly property of the FontFaceSet interface
 * returns a Promise that resolves to the given FontFaceSet.
 * https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready
 */
function getFontFaceSetReady() {
    return document.fonts.ready;
}
exports.getFontFaceSetReady = getFontFaceSetReady;
/**
 * Check the status of font - loaded/unloaded from the FontFaceSetList
 * Returns true if the given font is loaded loaded else return false.
 *
 * @param fontName The font we want to check
 */
function checkFontStatusInFontFaceSet(fontName) {
    // Using document.fonts.check() to check if the font load was successful or not is not reliable.
    // document.fonts.check() iterates for the fontface list and returns the status of the first font whose family matches with the given fontName.
    // Need to iterate the whole FontFaceSet to verify if the font is loaded instead of returning the status of the first match.
    var fontFaceIterator = document.fonts.values();
    var fontFace = fontFaceIterator.next();
    while (!fontFace.done) {
        if (fontFace.value && fontFace.value.family === fontName && fontFace.value.status === 'loaded') {
            return true;
        }
        fontFace = fontFaceIterator.next();
    }
    return false;
}
exports.checkFontStatusInFontFaceSet = checkFontStatusInFontFaceSet;
/**
 * Setting font family style to trigger the browser font download mechanism
 *
 * @param fontLoadDiv - the div which we use for download triggers
 * @param fontName - the font name we want to get downloaded.
 */
function setFontLoadDivWithFontFamily(fontLoadDiv, fontName) {
    fontLoadDiv.style.fontFamily = fontName;
}
exports.setFontLoadDivWithFontFamily = setFontLoadDivWithFontFamily;
//# sourceMappingURL=fontLoaderHelpers.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/resourceLoading/imageLoader.js":
/*!***********************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/resourceLoading/imageLoader.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! @ms/excel-online-models/lib/src/helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var ImageLoadStatus;
(function (ImageLoadStatus) {
    ImageLoadStatus[ImageLoadStatus["Initialized"] = 0] = "Initialized";
    ImageLoadStatus[ImageLoadStatus["Loading"] = 1] = "Loading";
    ImageLoadStatus[ImageLoadStatus["Loaded"] = 2] = "Loaded";
    ImageLoadStatus[ImageLoadStatus["LoadFailed"] = 3] = "LoadFailed"; // Loading failed
})(ImageLoadStatus || (ImageLoadStatus = {}));
var onImageLoadSuccessCallback;
var onImageLoadFailureCallback;
var StaticImagePrefix = 'STATIC';
/**
 * Dictionary holding the images for reuse.
 */
var ImageCache = {};
/**
 * Initializes the gridRenderer image loading module
 *
 * @param successCallback success callback to trigger when image successfully loaded
 * @param failureCallback failure callback to trigger when image failed to load
 */
function initializeGridRendererImageLoader(successCallback, failureCallback) {
    onImageLoadSuccessCallback = successCallback;
    onImageLoadFailureCallback = failureCallback;
}
exports.initializeGridRendererImageLoader = initializeGridRendererImageLoader;
/**
 * Sets static resource url to be used for future loading
 * If there are blocks waiting for that resource, load it immediately, otherwise load on demand
 *
 * @param staticImage the static image type
 * @param url the image url
 */
function setStaticImageUrl(staticImage, url) {
    helpers_1.verifyArgumentNotNull(url, 'url', 'setStaticImageUrl');
    var key = getImageKey(staticImage);
    var imageItem = ImageCache[key];
    if (imageItem && !imageItem.url) {
        // There are blocks that are registered for that image
        imageItem.url = url;
        triggerImageLoading(ImageCache[key]);
    }
    else {
        // No blocks registers, only store the url for future loading
        ImageCache[key] = { blockIdentifiers: [], status: ImageLoadStatus.Initialized, url: url };
    }
}
exports.setStaticImageUrl = setStaticImageUrl;
/**
 * Returns the requested image if already loaded, otherwise triggers loading of the image and registers the model
 *
 * @param staticImage the static image type
 * @param blockIdentifier identifier for the block responsible for re-rendering when the resource becomes available
 */
function getOrLoadStaticImage(staticImage, blockIdentifier) {
    var key = getImageKey(staticImage);
    var imageCacheItem = ImageCache[key];
    // Image doesn't exist yet - only register the model for when we'll have the image url
    if (!imageCacheItem) {
        ImageCache[key] = { blockIdentifiers: [blockIdentifier], status: ImageLoadStatus.Initialized };
        return undefined;
    }
    switch (imageCacheItem.status) {
        case ImageLoadStatus.Loaded:
            return imageCacheItem.image;
        case ImageLoadStatus.LoadFailed:
            return undefined;
        case ImageLoadStatus.Loading:
            registerIdentifierForImageLoad(blockIdentifier, imageCacheItem);
            return undefined;
        case ImageLoadStatus.Initialized:
            registerIdentifierForImageLoad(blockIdentifier, imageCacheItem);
            // If the url was already set, trigger the image loading
            if (imageCacheItem.url) {
                triggerImageLoading(imageCacheItem);
            }
            return undefined;
        default:
            throw Error("getOrLoadImageByKey: unexpected image statue: " + imageCacheItem.status);
    }
}
exports.getOrLoadStaticImage = getOrLoadStaticImage;
function getImageKey(staticKey) {
    return StaticImagePrefix + staticKey;
}
function registerIdentifierForImageLoad(blockIdentifier, imageProps) {
    // Only adds the identifier if it's not already registered
    if (imageProps.blockIdentifiers.indexOf(blockIdentifier) === -1) {
        imageProps.blockIdentifiers.push(blockIdentifier);
    }
}
/**
 * Triggers image load and handles event registration
 *
 * @param imageProps The properties of the image to load
 */
function triggerImageLoading(imageProps) {
    if (!imageProps.url) {
        throw Error('image url is not set, unexpected call');
    }
    var image = new Image();
    // When image is loaded update the image status and set registered models as dirty so they would re-render
    image.onload = function () {
        imageProps.status = ImageLoadStatus.Loaded;
        helpers_1.verifyArgumentNotNull(onImageLoadSuccessCallback, 'onImageLoadSuccessCallback', 'imageLoader::onload');
        onImageLoadSuccessCallback(imageProps.blockIdentifiers);
        imageProps.blockIdentifiers = [];
    };
    // When image failed to load update the status
    image.onerror = function () {
        imageProps.status = ImageLoadStatus.LoadFailed;
        helpers_1.verifyArgumentNotNull(onImageLoadFailureCallback, 'onImageLoadFailureCallback', 'imageLoader::onerror');
        onImageLoadFailureCallback("image failed to load, URL: " + imageProps.url + ", registeredModelsCount: " + imageProps.blockIdentifiers.length + ", registeredModelsCount: " + imageProps.blockIdentifiers);
        imageProps.blockIdentifiers = [];
    };
    image.src = imageProps.url;
    imageProps.image = image;
    imageProps.status = ImageLoadStatus.Loading;
}
//# sourceMappingURL=imageLoader.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/telemetry.js":
/*!*****************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/telemetry.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var renderingMessage = '';
var MaxRenderingMessageStringLength = 2500;
// global static array for performance metrics which will be returned to the S# as RenderResult.performance
var performanceMetrics = [];
var perf = verifyPerformanceNowSupported() ? window.performance : undefined;
/**
 * Verify that the browser supports the performance.now() method.
 *
 * @returns true if performance.now() supported and false otherwise.
 */
var isPerformanceNowSupported = undefined;
/**
 * Verify if window.performance.now() is supported.
 */
function verifyPerformanceNowSupported() {
    // If the result is already cached, no need to check again
    if (isPerformanceNowSupported) {
        return isPerformanceNowSupported;
    }
    // Check if the function exists
    isPerformanceNowSupported = false;
    if (window.performance) {
        if (typeof window.performance.now === 'function') {
            isPerformanceNowSupported = true;
        }
    }
    // Make sure the function is safe to use, in order to avoid JS crashes.
    try {
        window.performance.now();
    }
    catch (error) {
        isPerformanceNowSupported = false;
    }
    return isPerformanceNowSupported;
}
exports.verifyPerformanceNowSupported = verifyPerformanceNowSupported;
/**
 * Creates a RenderResult with indication that the render has failed/succeeded according to the given succeeded param.
 * This RenderResult will be returned to the S# code and will be logged with the given msg and with the collected performanceMetrics.
 * @param msg This is the custom failure message we would like to return to S# and log.
 */
function createRenderResult(success, msg) {
    return { succeeded: success, message: msg, performance: performanceMetrics };
}
exports.createRenderResult = createRenderResult;
/**
 * Clears the performance metrics array to make sure we will only log new data relevant for this block render request
 */
function clearPerformanceMetrics() {
    // this is the fastest way to clear an array (create a new one)
    // next best method is to set array length=0
    // benchmark link: http://jsben.ch/orxvb
    performanceMetrics = [];
}
exports.clearPerformanceMetrics = clearPerformanceMetrics;
/**
 * Wrapper function to execute a given callback with performance measurements.
 * Executes the given function, measure duration, sets in the given performance metric place in the performanceMetrics array the callback execution duration.
 * Note it will override the previous value of the given performanceMetric.
 * @param performanceMetric This is the enum definition of the requested metric to trace - it will be used as the index in the performanceMetrics array
 * @param callback This is the callback that will be executed and measured
 * @param shouldAggregate Indicates whether to aggregate this metric or to override it
 */
function trackDuration(performanceMetric, callback, shouldAggregate) {
    var functionStart = perf ? perf.now() : -1;
    callback();
    // some browsers don't have window.performance - we do not want to crash by accessing window.performance, we will simply not trace
    if (perf) {
        var totalDuration = perf.now() - functionStart;
        if (shouldAggregate) {
            performanceMetrics[performanceMetric] += totalDuration;
        }
        else {
            performanceMetrics[performanceMetric] = totalDuration;
        }
    }
}
exports.trackDuration = trackDuration;
/**
 * Performance metrics enum used to measure performance in different parts of the rendering process.
 */
var RenderPerformanceMetric;
(function (RenderPerformanceMetric) {
    RenderPerformanceMetric[RenderPerformanceMetric["DrawGridlinesDurationMs"] = 0] = "DrawGridlinesDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawTextDurationMs"] = 1] = "DrawTextDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ClearDurationMs"] = 2] = "ClearDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["RenderBlockInternalDurationMs"] = 3] = "RenderBlockInternalDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ModelPreparationsMs"] = 4] = "ModelPreparationsMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ClearRectDurationMs"] = 5] = "ClearRectDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["FillRectDurationMs"] = 6] = "FillRectDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["GetContextDurationMs"] = 7] = "GetContextDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawSpillCellsDurationMs"] = 8] = "DrawSpillCellsDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawBackgroundFillMs"] = 9] = "DrawBackgroundFillMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ClearGridlinesMs"] = 10] = "ClearGridlinesMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ClearGridlinesForBorderMs"] = 11] = "ClearGridlinesForBorderMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ClearGridLinesForSpannedCellsMs"] = 12] = "ClearGridLinesForSpannedCellsMs";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawBordersMs"] = 13] = "DrawBordersMs";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawTextDecoration"] = 14] = "DrawTextDecoration";
    RenderPerformanceMetric[RenderPerformanceMetric["GetFontMetrics"] = 15] = "GetFontMetrics";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawCFIconsMs"] = 16] = "DrawCFIconsMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ReorderBidiTextRuns"] = 17] = "ReorderBidiTextRuns";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawPageBreaksDurationMs"] = 18] = "DrawPageBreaksDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawSkeletonMs"] = 19] = "DrawSkeletonMs";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawPrintAreasDurationMs"] = 20] = "DrawPrintAreasDurationMs";
    RenderPerformanceMetric[RenderPerformanceMetric["ClearGridLinesForEmptyPivot"] = 21] = "ClearGridLinesForEmptyPivot";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawEmptyPivotTableTitleContainers"] = 22] = "DrawEmptyPivotTableTitleContainers";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawEmptyPivotTableImages"] = 23] = "DrawEmptyPivotTableImages";
    RenderPerformanceMetric[RenderPerformanceMetric["DrawEmptyPivotTableTitleText"] = 24] = "DrawEmptyPivotTableTitleText";
})(RenderPerformanceMetric = exports.RenderPerformanceMetric || (exports.RenderPerformanceMetric = {}));
/**
 * Returns the stored information from each render operation and resets
 * the stored string.
 */
function getRenderingMessage() {
    var result = renderingMessage;
    renderingMessage = '';
    return result;
}
exports.getRenderingMessage = getRenderingMessage;
/**
 * Saves a rendering message coming from the divMetricMeasure div.
 * The passed message will be added to previously saved messages.
 *
 * @param message - the details of the message we will like to log later
 */
function setDivMetricWarning(message) {
    if (util_1.isNullOrUndefined(message) || message === '') {
        return;
    }
    // Prevent message from being too long by saving only defined size of it.
    renderingMessage = (renderingMessage + '; ' + message).substring(0, MaxRenderingMessageStringLength);
}
exports.setDivMetricWarning = setDivMetricWarning;
/**
 * Saves a rendering message coming from the actual font size function.
 * The passed message will be added to previously saved messages.
 *
 *  @param message - the details of the message we will like to log later
 */
function setActualFontSizeWarning(message) {
    if (util_1.isNullOrUndefined(message) || message === '') {
        return;
    }
    // Prevent message from being too long by saving only defined size of it.
    renderingMessage = (renderingMessage + '; ' + message).substring(0, MaxRenderingMessageStringLength);
}
exports.setActualFontSizeWarning = setActualFontSizeWarning;
//# sourceMappingURL=telemetry.js.map

/***/ }),

/***/ "../../packages/excel-online-grid-renderer/lib/src/testableHelpers.js":
/*!***********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-grid-renderer/lib/src/testableHelpers.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*******************************************************************
 * All methods in this file are mocked in tests
 *******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Validates the given canvas is HTMLCanvasElement
 *
 * @param canvas the canvas element to validate
 */
function isCanvasElement(canvas) {
    return canvas instanceof HTMLCanvasElement;
}
exports.isCanvasElement = isCanvasElement;
//# sourceMappingURL=testableHelpers.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/SerializerConsts.js":
/*!*****************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/SerializerConsts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// Currency characters as defined in http://character-code.com/currency-html-codes.php and http://www.w3schools.com/charsets/ref_utf_currency.asp
exports.CurrencySymbols = '\u0024\u0080\u00a2\u00a3\u00a4\u00a5\u20a0\u20a1\u20a2\u20a3\u20a4\u20a5\u20a6\u20a7\u20a8\u20a9\u20aa\u20ab\u20ac\u20ad\u20ae\u20af\u20b0\u20b1\u20b2\u20b3\u20b4\u20b5\u20b6\u20b7\u20b8\u20b9';
/// Characters that will not be offuscated in the set cell immidiate value pattern telemetry
exports.SetCellOfInterestSymbols = '=\\[\\]\\./%#\\-\\+,;\\(\\):?""&<>\'!{}~\\^\\*' + exports.CurrencySymbols;
/// Characters that will not be offuscated in the set cell immidiate value pattern telemetry
exports.AllowedCharactersToLog = exports.SetCellOfInterestSymbols + '\\s\ua0c2'; // not using HtmlNonBreakingSpace to avoid OACR warning
exports.DigitReplaceValue = 'd';
exports.DigitPattern = '[0-9]';
exports.CharacterReplaceValue = 'w';
exports.ValueAnnonymizerRegex = new RegExp('[^' + exports.AllowedCharactersToLog + exports.DigitReplaceValue + ']', 'gm');
exports.Digit = new RegExp(exports.DigitPattern, 'gm');
//# sourceMappingURL=SerializerConsts.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/calcModel/calcBlockModel.js":
/*!*************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/calcModel/calcBlockModel.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Types used for calc.ts
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var gridBlockModelDto_1 = __webpack_require__(/*! ../dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
/**
 * Model which contains all information needed for calc
 */
var CalcBlockModel = /** @class */ (function () {
    function CalcBlockModel() {
        this.RowNumbers = [];
        this.ColumnNumbers = [];
        this.Cells = {};
        /**
         * Index used for iteration over cells
         */
        this.index = -1;
        /**
         * Array of keys in Cells dictionary (needed because there is no length property for dictionaries in JS)
         */
        this.keys = null;
    }
    /**
     * Add a cell to the dictionary of all cells
     */
    CalcBlockModel.prototype.createCell = function (cell) {
        var _a;
        var calcCell = {
            col: cell.Col,
            row: cell.Row,
            text: cell.Text,
            formula: (_a = cell.FormulaInfo) === null || _a === void 0 ? void 0 : _a.Formula,
            value: cell.Value,
            ifmt: cell.Ifmt,
            formulaType: cell.FormulaInfo ? cell.FormulaInfo.FormulaType : gridBlockModelDto_1.CellFormulaType.Value
        };
        // ValueType property is assigned separately because Cell.ValueType is not nullable while CalcModelCell.ValueType is nullable.
        // When setting is above it causes VSCode to issue a syntax error.
        calcCell.valueType = cell.ValueType;
        return calcCell;
    };
    /**
     * Add a cell to the dictionary or all cells
     */
    CalcBlockModel.prototype.addCell = function (cell) {
        if (this.index !== -1) {
            throw 'cannot add cell after iterating cells';
        }
        this.Cells[helpers_1.cellLookupKey(cell.row, cell.col)] = cell;
        // Invalidate keys just in case...
        this.keys = null;
    };
    /**
     * Add the row and column headers
     */
    CalcBlockModel.prototype.addHeaders = function (rowNumbers, columnNumbers) {
        this.RowNumbers = rowNumbers;
        this.ColumnNumbers = columnNumbers;
    };
    /**
     * Return the row headers
     */
    CalcBlockModel.prototype.getRowNumbers = function () {
        return this.RowNumbers;
    };
    /**
     * Return the column headers
     */
    CalcBlockModel.prototype.getColumnNumbers = function () {
        return this.ColumnNumbers;
    };
    /**
     * Returns the CalcModelCell corresponding to the given row/column from the model
     * Returns null if the cell doesn't exist
     *
     * @param rowIndex The absolute row position in the grid (e.g. 50) - 0 based
     * @param colIndex The absolute column index position in the grid (e.g. 27 for "AA") - 0 based
     */
    CalcBlockModel.prototype.getCell = function (rowIndex, colIndex) {
        if (util_1.isNullOrUndefined(this.Cells)) {
            return null;
        }
        return this.Cells[helpers_1.cellLookupKey(rowIndex, colIndex)];
    };
    /**
     * Reset iteration through model and create keys if necessary
     */
    CalcBlockModel.prototype.reset = function () {
        this.index = 0;
        if (util_1.isNullOrUndefined(this.keys)) {
            this.keys = Object.keys(this.Cells);
        }
    };
    /**
     * Returns the next CalcModelCell in the model
     */
    CalcBlockModel.prototype.getNextCell = function () {
        if (util_1.isNullOrUndefined(this.Cells) || util_1.isNullOrUndefined(this.keys)) {
            return null;
        }
        if (this.index === -1) {
            return null;
        }
        if (this.index >= this.keys.length) {
            return null;
        }
        var cell = this.Cells[this.keys[this.index]];
        this.index++;
        return cell;
    };
    return CalcBlockModel;
}());
exports.CalcBlockModel = CalcBlockModel;
//# sourceMappingURL=calcBlockModel.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/constants.js":
/*!**********************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/constants.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The Number Format Index value from which Accounting NumberFormats start.
 * If the NumberFormatIndex >= 32, then the number format is either accounting or custom.
 * !!! Important !!! - Keep in Sync with xlshared\xlslib\Core\public\Core\FormatEnums.h
 */
exports.NumFmtAccountingStartIndex = 32;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js":
/*!**********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/dto/gridBlockModelDto.js ***!
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
    RenderFlags[RenderFlags["DataBars"] = 32] = "DataBars";
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

/***/ "../../packages/excel-online-models/lib/src/generated/gridBlockRendererIgnoreLists.gen.js":
/*!*******************************************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/generated/gridBlockRendererIgnoreLists.gen.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**************************************************************************************************
 * <auto-generated>
 * This code was generated by excel-online-dto-generator: generateDTO tool
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * </auto-generated>
 *************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Contains map keyed by the class name and the values are a list of property names to ignore
 */
exports.comparisonIgnoreLists = {};
exports.comparisonIgnoreLists['GridBlockModel'] = ["RowOutlines", "ColumnOutlines", "Styles", "Fonts", "BorderStyles", "CellsEncoding", "RenderFlags", "IsDirty", "CellLookup", "DirtyTimestamp", "RowOffsetsAdjustedForDrawing", "ColOffsetsAdjustedForDrawing"];
exports.comparisonIgnoreLists['Cell'] = ["Formula", "StyleID", "Ifmt", "IfmtStamped", "BorderStyleID", "HorizontalAlignmentSet", "ShrunkSize", "AutoFilter", "PivotFilter", "TextRuns", "CommentID", "RichValueType", "ValueType", "CachedDrawingLayout", "CachedDisplayText", "CachedIsTextWidthExceedsCellWidth", "Value", "UserInput", "PhoneticInfo", "OriginalText", "ErrorTooltip"];
exports.comparisonIgnoreLists['ReferencedObject'] = ["ID", "RefCount"];
exports.comparisonIgnoreLists['CellStyle'] = ["NamedStyleId", "FontID", "IsUnlocked", "IsHidden"];
exports.comparisonIgnoreLists['FormulaInformation'] = ["Formula", "FormulaType"];
exports.comparisonIgnoreLists['MergeInformation'] = ["WidthAdjustedForDrawing", "HeightAdjustedForDrawing", "OriginDeltaXAdjustedForDrawing", "OriginDeltaYAdjustedForDrawing", "SpansNextBlockVertically", "SpansNextBlockHorizontally"];
exports.comparisonIgnoreLists['TextRun'] = ["FontID"];
exports.comparisonIgnoreLists['RangeInformation'] = ["RangeType"];
exports.comparisonIgnoreLists['PivotTableRangeInformation'] = ["ConnectionName", "ConfirmationRequiredForDataOps", "FieldListVersion", "FieldWellVersion", "ColumnTotalIndexes", "RowTotalIndexes", "ColumnMemberPropIndexes", "RowMemberPropIndexes", "ColumnHeaderRange", "RowHeaderRange", "RowAreaCaptions", "ExternalSourceIndex", "IsActionable", "IsOlap", "SupportsBIExplore", "Xluid", "ShowDrillIndicators", "ShowColumnStripes", "ShowRowStripes", "ShowRowHeaders", "ShowColumnHeaders", "DataSource", "RowLocation", "ColGrandTotalOn", "RwGrandTotalOn", "IndentIncrement", "AutoFormatOnUpdate", "ShowItemsWithNoDataOnRw", "ShowItemsWithNoDataOnCol", "SaveSourceDataWithFile", "RefreshOnLoad", "AltText", "AltTextSummary", "ErrorString", "NullString", "DataPivotFieldCaption", "DataPivotFieldIndex", "DisplayErrorString", "DisplayNullString", "HasActiveFilter", "IsPageArea", "RowAreaFields", "ColumnAreaFields", "ValueAreaFields", "PageAreaFields", "CurrentStyleName", "OriginPTWidthAdjustedForDrawing", "OriginPTHeightAdjustedForDrawing", "DeltaXFromOriginPTAdjustedForDrawing", "DeltaYFromOriginPTAdjustedForDrawing"];
exports.comparisonIgnoreLists['Hyperlink'] = ["IsHyperlinkChecked"];
/**
 * Contains map keyed by the property name and the values are a list of the property class and all base classes
 */
exports.propertyToClassMap = {};
exports.propertyToClassMap['Cells'] = ["Cell"];
exports.propertyToClassMap['Styles'] = ["CellStyle", "ReferencedObject"];
exports.propertyToClassMap['Fonts'] = ["Font", "ReferencedObject"];
exports.propertyToClassMap['BorderStyles'] = ["BorderStyle", "ReferencedObject"];
exports.propertyToClassMap['PageBreaks'] = ["PageBreaksInformation"];
exports.propertyToClassMap['PrintAreas'] = ["SharedRange"];
exports.propertyToClassMap['PivotTables'] = ["PivotTableRangeInformation", "RangeInformation", "SharedRange"];
exports.propertyToClassMap['Spill'] = ["SpillInformation"];
exports.propertyToClassMap['Merge'] = ["MergeInformation"];
exports.propertyToClassMap['NumFmt'] = ["NumberFormatInformation"];
exports.propertyToClassMap['WrapText'] = ["WrapTextInformation"];
exports.propertyToClassMap['AutoFilter'] = ["AutoFilter"];
exports.propertyToClassMap['PivotFilter'] = ["PivotFilter"];
exports.propertyToClassMap['TextRuns'] = ["TextRun"];
exports.propertyToClassMap['CondFormat'] = ["ConditionalFormattingInformation"];
exports.propertyToClassMap['FormulaInfo'] = ["FormulaInformation"];
exports.propertyToClassMap['Hyperlink'] = ["Hyperlink"];
exports.propertyToClassMap['CachedStyle'] = ["CellStyle", "ReferencedObject"];
exports.propertyToClassMap['CachedFont'] = ["Font", "ReferencedObject"];
exports.propertyToClassMap['CachedBorderStyle'] = ["BorderStyle", "ReferencedObject"];
exports.propertyToClassMap['Menu'] = ["AutoFilterMenu"];
exports.propertyToClassMap['Icon'] = ["ConditionalFormattingIcon"];
exports.propertyToClassMap['DataBar'] = ["DataBarInformation"];
exports.propertyToClassMap['Sections'] = ["MenuSection"];
exports.propertyToClassMap['MenuItems'] = ["MenuItem"];
exports.propertyToClassMap['SubMenu'] = ["AutoFilterMenu"];
exports.propertyToClassMap['Gradient'] = ["GradientFill"];
exports.propertyToClassMap['Borders'] = ["Border"];
exports.propertyToClassMap['Color'] = ["RGBColor"];
exports.propertyToClassMap['Stops'] = ["ColorStop"];
exports.propertyToClassMap['Row'] = ["RowColBreak"];
exports.propertyToClassMap['Col'] = ["RowColBreak"];
exports.propertyToClassMap['ColumnHeaderRange'] = ["RangeInformation", "SharedRange"];
exports.propertyToClassMap['RowHeaderRange'] = ["RangeInformation", "SharedRange"];
exports.propertyToClassMap['RowAreaFields'] = ["PivotTableFieldInfo"];
exports.propertyToClassMap['ColumnAreaFields'] = ["PivotTableFieldInfo"];
exports.propertyToClassMap['ValueAreaFields'] = ["PivotTableFieldInfo"];
exports.propertyToClassMap['PageAreaFields'] = ["PivotTableFieldInfo"];
/**
 * Contains a map of property names containing user content keyed by the class name
 */
exports.UserContentList = {};
exports.UserContentList['Cell'] = ["Text", "Formula", "CachedDisplayText", "Value", "UserInput", "OriginalText"];
exports.UserContentList['AutoFilter'] = ["CommandData"];
exports.UserContentList['PivotFilter'] = ["CommandData"];
exports.UserContentList['MenuItem'] = ["CommandData", "Label"];
exports.UserContentList['FormulaInformation'] = ["Formula"];
exports.UserContentList['NumberFormatInformation'] = ["Start", "End", "Separator"];
exports.UserContentList['Font'] = ["FontName"];
/**
 * Contains a map of property names which are checked if they can be cleaned during serialization.
 * The information helps to determine if and how to clean the property and the restore it after it has been serialized.
 */
exports.SerializationProperties = {};
/**
 * Template for key used for lookup in SerializationProperties map
 */
exports.SerializationPropertyKey = '{className}.{propertyName}';
exports.SerializationProperties['GridBlockModel.BlockWidth'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.BlockHeight'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.RowOffsets'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.ColumnOffsets'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.RowHeights'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.ColumnWidths'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.RowNumbers'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.ColumnNumbers'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.RowOutlines'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.ColumnOutlines'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.ShowGridLines'] = { type: 'boolean', tsOnly: false };
exports.SerializationProperties['GridBlockModel.IsRtl'] = { type: 'boolean', tsOnly: false };
exports.SerializationProperties['GridBlockModel.GridLineColor'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.BackgroundColor'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.Cells'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.Styles'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.Fonts'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.BorderStyles'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.CellsEncoding'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.RenderFlags'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['GridBlockModel.IsDirty'] = { type: 'boolean', tsOnly: true };
exports.SerializationProperties['GridBlockModel.CellLookup'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['GridBlockModel.DirtyTimestamp'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['GridBlockModel.RowOffsetsAdjustedForDrawing'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['GridBlockModel.ColOffsetsAdjustedForDrawing'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['GridBlockModel.PageBreaks'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.PrintAreas'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['GridBlockModel.PivotTables'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.Col'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['Cell.Row'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['Cell.Text'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.Formula'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.StyleID'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['Cell.Ifmt'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['Cell.IfmtStamped'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['Cell.BorderStyleID'] = { type: 'number', tsOnly: false };
exports.SerializationProperties['Cell.HorizontalAlignmentSet'] = { type: 'boolean', tsOnly: false };
exports.SerializationProperties['Cell.Spill'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.Merge'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.NumFmt'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.WrapText'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.ShrunkSize'] = { type: 'number', tsOnly: true };
exports.SerializationProperties['Cell.AutoFilter'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.PivotFilter'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.TextRuns'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.CondFormat'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.CommentID'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.RichValueType'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.FormulaInfo'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.ValueType'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.HasError'] = { type: 'boolean', tsOnly: false };
exports.SerializationProperties['Cell.Hyperlink'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.CachedStyle'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['Cell.CachedFont'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['Cell.CachedBorderStyle'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['Cell.CachedDrawingLayout'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['Cell.CachedDisplayText'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['Cell.CachedIsTextWidthExceedsCellWidth'] = { type: 'boolean', tsOnly: true };
exports.SerializationProperties['Cell.Value'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.UserInput'] = { type: 'object', tsOnly: true };
exports.SerializationProperties['Cell.PhoneticInfo'] = { type: 'boolean', tsOnly: false };
exports.SerializationProperties['Cell.OriginalText'] = { type: 'object', tsOnly: false };
exports.SerializationProperties['Cell.ErrorTooltip'] = { type: 'boolean', tsOnly: false };
//# sourceMappingURL=gridBlockRendererIgnoreLists.gen.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/gridBlockModelComparer.js":
/*!***********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/gridBlockModelComparer.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! ./dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var gridBlockRendererIgnoreLists_gen_1 = __webpack_require__(/*! ./generated/gridBlockRendererIgnoreLists.gen */ "../../packages/excel-online-models/lib/src/generated/gridBlockRendererIgnoreLists.gen.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
// When comparing the model we first compare the model object and than iterate the cells and compare them, therefore ignoring the cells in the first comparison
var GridBlockModelComparisonIgnoreList = gridBlockRendererIgnoreLists_gen_1.comparisonIgnoreLists['GridBlockModel'].concat(['Cells']);
var CellComparisonIgnoreList = gridBlockRendererIgnoreLists_gen_1.comparisonIgnoreLists['Cell'];
var CellComparisonIgnoreListWithText = CellComparisonIgnoreList.concat(['Text']);
var CellStyleComparisonIgnoreList = gridBlockRendererIgnoreLists_gen_1.comparisonIgnoreLists['CellStyle'].concat(gridBlockRendererIgnoreLists_gen_1.comparisonIgnoreLists['ReferencedObject']);
var EmptyString = '';
/**
 * Compares two model objects and returns the result
 * The comparison ignores fields that don't impact rendering.
 * See more information: packages/excel-online-dto-generator/README.md
 *
 * @param model1 first model to compare
 * @param model2 second model to compare
 */
function areGridBlockModelsEqual(model1, model2) {
    // First compare the model fields without the cells
    var result = areObjectsEqual(model1, model2, GridBlockModelComparisonIgnoreList);
    // If the model is equal, we need to compare all the cells in the model with the corresponding styles
    if (result.isEqual) {
        result = areModelCellsEqual(model1.Cells, model2.Cells, model1, model2);
    }
    return result;
}
exports.areGridBlockModelsEqual = areGridBlockModelsEqual;
/**
 * Compares two cell objects and returns the result
 * The comparison ignores fields that don't impact rendering,
 * This method should be called after CellStyles, BorderStyles etc has been cached at the Cell.
 * See more information: packages/excel-online-dto-generator/README.md
 *
 * @param cell1 first cell object to compare
 * @param cell2 second cell object to compare
 * @param model1 first model object to compare
 * @param model2 second model object to compare
 */
function areCellsEqual(cell1, cell2, model1, model2) {
    var _a, _b, _c, _d;
    // Cache CellStyles at Cell
    cell1.CachedStyle = helpers_1.getReferencedObjectToCache(cell1.StyleID, model1.Styles);
    cell2.CachedStyle = helpers_1.getReferencedObjectToCache(cell2.StyleID, model2.Styles);
    // Cache BorderStyles at Cell
    cell1.CachedBorderStyle = helpers_1.getReferencedObjectToCache(cell1.BorderStyleID, model1.BorderStyles);
    cell2.CachedBorderStyle = helpers_1.getReferencedObjectToCache(cell2.BorderStyleID, model2.BorderStyles);
    // Cache Fonts at Cell
    cell1.CachedFont = helpers_1.getReferencedObjectToCache(cell1.CachedStyle.FontID, model1.Fonts);
    cell2.CachedFont = helpers_1.getReferencedObjectToCache(cell2.CachedStyle.FontID, model2.Fonts);
    var isNumFmtApplicable = helpers_1.isAccAndCustomNumFmtApplicable(cell1, model1) && helpers_1.isAccAndCustomNumFmtApplicable(cell2, model2);
    // If text runs are found (rich text) - cache the fonts for each text run
    var cell1HasTextRuns = !isNullOrEmptyOrFalse(cell1.TextRuns);
    var cell2HasTextRuns = !isNullOrEmptyOrFalse(cell2.TextRuns);
    if (helpers_1.isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.RichTextFormat, model1) && (cell1HasTextRuns || cell2HasTextRuns)) {
        if (((_a = cell1.TextRuns) === null || _a === void 0 ? void 0 : _a.length) !== ((_b = cell2.TextRuns) === null || _b === void 0 ? void 0 : _b.length)) {
            return {
                isEqual: false,
                message: "cell1.TextRuns.length: " + (cell1HasTextRuns ? (_c = cell1.TextRuns) === null || _c === void 0 ? void 0 : _c.length : "0") + " but cell2.TextRuns.length: " + (cell2HasTextRuns ? (_d = cell2.TextRuns) === null || _d === void 0 ? void 0 : _d.length : "0")
            };
        }
        for (var i = 0; i < cell1.TextRuns.length; i++) {
            cell1.TextRuns[i].CachedFont = helpers_1.getReferencedObjectToCache(cell1.TextRuns[i].FontID, model1.Fonts);
            cell2.TextRuns[i].CachedFont = helpers_1.getReferencedObjectToCache(cell2.TextRuns[i].FontID, model2.Fonts);
        }
    }
    var ignoreList = getCellIgnoreList(isNumFmtApplicable);
    // Compare Cell Extensions
    var result = areObjectsEqual(cell1, cell2, ignoreList);
    if (!result.isEqual) {
        result.message += "\nareCellsEqual: cell1.Row = " + cell1.Row + ", cell1.Col = " + cell1.Col + ", cell2.Row = " + cell2.Row + ", cell2.Col = " + cell2.Col;
    }
    return result;
}
exports.areCellsEqual = areCellsEqual;
/**
 * Compares two cellStyle objects and returns the result
 * The comparison ignores fields that don't impact rendering
 * See more information: packages/excel-online-dto-generator/README.md
 *
 * @param style1 first style object to compare
 * @param style2 second style object to compare
 */
function areStylesEqual(style1, style2) {
    return areObjectsEqual(style1, style2, CellStyleComparisonIgnoreList);
}
exports.areStylesEqual = areStylesEqual;
/**
 * Compares 2 arrays and returns if they are equal.
 */
function areArraysEqual(arr1, arr2, ignoreList) {
    if (arr1 === arr2) {
        return { isEqual: true };
    }
    if (arr1 === undefined && arr2 === undefined) {
        return { isEqual: true };
    }
    if (arr1 === undefined || arr2 === undefined) {
        if (arr1 === undefined) {
            return {
                isEqual: false,
                message: "areArraysEqual: the first array is undefined."
            };
        }
        return {
            isEqual: false,
            message: "areArraysEqual: the second array is undefined."
        };
    }
    // if arrays has different length they're not equal
    if (arr1.length !== arr2.length) {
        return {
            isEqual: false,
            message: "areArraysEqual: arrays length are different. length1: " + arr1.length + ", length2: " + arr2.length
        };
    }
    // iterate over array and compare objects
    for (var i = 0; i < arr1.length; i++) {
        var result = areObjectsEqual(arr1[i], arr2[i], ignoreList);
        if (!result.isEqual) {
            result.message += "\nareArraysEqual: array objects are different. index: " + i;
            return result;
        }
    }
    return { isEqual: true };
}
exports.areArraysEqual = areArraysEqual;
function areObjectsEqual(o1, o2, ignoreList) {
    // If both inputs are the same object return true
    if (o1 === o2) {
        return { isEqual: true };
    }
    // If both objects are NullOrUndefined return true
    if (util_1.isNullOrUndefined(o1) && util_1.isNullOrUndefined(o2)) {
        return { isEqual: true };
    }
    // If one of the objects is null return false
    if (o1 == null || o2 == null) {
        return { isEqual: false, message: "areObjectsEqual: one object is null, o1 = " + !o1 + ", o2 = " + !o2 };
    }
    // Special check for NaN cases since in js NaN !== NaN
    if (o1 !== o1) {
        return { isEqual: o2 !== o2, message: 'areObjectsEqual: NaN comparison' };
    }
    // Get list of the property names that are not in the ignore list
    var o1Props = getNonIgnoredPropertyNames(o1, ignoreList);
    var o2Props = getNonIgnoredPropertyNames(o2, ignoreList);
    var allProps = getUniqueArrayConcat(o1Props, o2Props);
    // if this is a simple object (i.e. object with no properties such as string, number ), return the comparison result
    if (allProps.length === 0) {
        return { isEqual: o1 === o2, message: 'areObjectsEqual: simple object comparison' };
    }
    // Run over all the properties and compare them
    for (var i = 0; i < allProps.length; i++) {
        var propName = allProps[i];
        var prop1 = o1[propName];
        var prop2 = o2[propName];
        var type1 = typeof prop1;
        var type2 = typeof prop2;
        if (util_1.isNullOrUndefined(prop1) && util_1.isNullOrUndefined(prop2)) {
            // If both properties are NullOrUndefined they are equal
            continue;
        }
        // Verify properties has the same type
        if (type1 !== type2) {
            if (isNullOrEmptyOrFalse(prop1) && isNullOrEmptyOrFalse(prop2)) {
                continue;
            }
            return {
                isEqual: false,
                message: "areObjectsEqual: object types are different. propName = " + propName + " type1 = " + type1 + ", type2 = " + type2
            };
        }
        switch (type1) {
            case 'undefined':
            case 'boolean':
            case 'string':
            case 'number': {
                // If object is basic type (string, boolean, number) we can compare it directly
                if (prop1 !== prop2) {
                    return { isEqual: false, message: "areObjectsEqual: simple types comparison, propertyName = " + propName };
                }
                break;
            }
            case 'object': {
                // If object is an array - need to iterate array
                if (prop1 instanceof Array) {
                    if (!(prop2 instanceof Array)) {
                        return { isEqual: false, message: "areObjectsEqual: array 2 is not an array, propertyName = " + propName };
                    }
                    var newIgnoreList = getIgnoreListFromPropName(propName);
                    var result = areArraysEqual(prop1, prop2, newIgnoreList);
                    if (!result.isEqual) {
                        result.message += "\nareObjectsEqual: arrays mismatch, propertyName = " + propName;
                        return result;
                    }
                }
                else {
                    // If objects are not equal return
                    var newIgnoreList = getIgnoreListFromPropName(propName);
                    var result = areObjectsEqual(prop1, prop2, newIgnoreList);
                    if (!result.isEqual) {
                        result.message += "\nareObjectsEqual: objects mismatch, propertyName = " + propName;
                        return result;
                    }
                }
                break;
            }
            default:
                // Unexpected type, cannot compare properly so assuming not equal
                return { isEqual: false, message: "areObjectsEqual: unexpected type: " + type1 + ", propertyName = " + propName };
        }
    }
    return { isEqual: true };
}
function areModelCellsEqual(cells1, cells2, model1, model2) {
    // If cells refer to the same object return true
    if (cells1 === cells2) {
        return { isEqual: true };
    }
    // If the number of cells is different return false
    if (cells1.length !== cells2.length) {
        return {
            isEqual: false,
            message: "areModelCellsEqual: Cells arrays length are different. length1: " + cells1.length + ", length2: " + cells2.length
        };
    }
    // Verify the models are valid
    if (!model1 || !model2) {
        return {
            isEqual: false,
            message: "areModelCellsEqual: one or more model is null: model1: " + !model1 + ", model2: " + !model2
        };
    }
    // Iterate over all the cells in the model and compare them
    for (var i = 0; i < cells1.length; i++) {
        var cell1 = cells1[i];
        var cell2 = cells2[i];
        var result = areCellsEqual(cell1, cell2, model1, model2);
        if (!result.isEqual) {
            return result;
        }
    }
    return { isEqual: true };
}
function getNonIgnoredPropertyNames(o, ignoreList) {
    // IE throws exception if we call getOwnPropertyNames on number/strings while other browsers return empty list
    if (typeof o !== 'object') {
        return [];
    }
    var props = Object.getOwnPropertyNames(o);
    if (ignoreList) {
        return props.filter(function (prop) { return ignoreList.indexOf(prop) === -1; });
    }
    return props;
}
function getUniqueArrayConcat(arr1, arr2) {
    // If one of the arrays is not defined, return the other one
    if (!arr1 || !arr2) {
        return arr1 || arr2;
    }
    // filter arr2 to contain only keys that don't exist in arr1
    var filteredArr2 = arr2.filter(function (key) { return arr1.indexOf(key) === -1; });
    return arr1.concat(filteredArr2);
}
function isNullOrEmptyOrFalse(obj) {
    // If obj is null, undefined, empty string or false
    return obj === null || obj === undefined || obj === EmptyString || obj === false;
}
function getIgnoreListFromPropName(propName) {
    // Find the class names that matches that object
    var propertyClasses = gridBlockRendererIgnoreLists_gen_1.propertyToClassMap[propName];
    if (!propertyClasses) {
        // No mapping for this property, nothing to ignore
        return undefined;
    }
    // Iterate all the class dependency of the property and get the ignore list matching these classes
    var ignoreList = [];
    for (var i = 0; i < propertyClasses.length; i++) {
        ignoreList = ignoreList.concat(gridBlockRendererIgnoreLists_gen_1.comparisonIgnoreLists[propertyClasses[i]]);
    }
    return ignoreList;
}
function getCellIgnoreList(isNumFmtApplicable) {
    // If numFmt is populated we want to ignore cell text and compare NumFmts.
    return isNumFmtApplicable ? CellComparisonIgnoreListWithText : CellComparisonIgnoreList;
}
//# sourceMappingURL=gridBlockModelComparer.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/gridBlockModelHelpers.js":
/*!**********************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/gridBlockModelHelpers.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelDto_1 = __webpack_require__(/*! ./dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
/**
 * Returns the ReferencedObject according to the input ID from the ReferencedObjectTable
 *
 * @param ID the id of the object we need
 * @param RefObjectTable the RefObjectTable table to get the style from
 */
function getReferencedObjectById(ID, RefObjectTable) {
    var refObject;
    switch (ID) {
        case gridBlockModelDto_1.UniqueStyleID.Default:
        case gridBlockModelDto_1.UniqueStyleID.Hyperlink:
            refObject = RefObjectTable[RefObjectTable.length + ID];
            break;
        default:
            refObject = RefObjectTable[ID];
            break;
    }
    if (refObject === null) {
        throw Error('RefObject is null');
    }
    if (refObject.ID !== ID) {
        throw Error('RefIDs are not sorted as expected');
    }
    return refObject;
}
exports.getReferencedObjectById = getReferencedObjectById;
//# sourceMappingURL=gridBlockModelHelpers.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/helpers.js":
/*!********************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/helpers.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockModelHelpers_1 = __webpack_require__(/*! ./gridBlockModelHelpers */ "../../packages/excel-online-models/lib/src/gridBlockModelHelpers.js");
var gridBlockModelDto_1 = __webpack_require__(/*! ./dto/gridBlockModelDto */ "../../packages/excel-online-models/lib/src/dto/gridBlockModelDto.js");
var util_1 = __webpack_require__(/*! util */ "../../common/temp/node_modules/.pnpm/office.pkgs.visualstudio.com/util/0.11.1/node_modules/util/util.js");
var constants_1 = __webpack_require__(/*! ./constants */ "../../packages/excel-online-models/lib/src/constants.js");
/**
 * Returns a string representing the cell key in the CellLookup dictionary
 *
 * @param row the cell row index
 * @param col the cell column index
 */
function cellLookupKey(row, col) {
    return col + '_' + row;
}
exports.cellLookupKey = cellLookupKey;
/**
 * Get ReferencedObject by Id
 * @param Id Id of RefObject
 * @param Refs Array of RefObjects
 */
function getReferencedObjectToCache(Id, Refs) {
    if (!util_1.isNullOrUndefined(Id) && !util_1.isNullOrUndefined(Refs)) {
        return gridBlockModelHelpers_1.getReferencedObjectById(Id, Refs);
    }
    return undefined;
}
exports.getReferencedObjectToCache = getReferencedObjectToCache;
/**
 * Returns the answer whether a flag is enbaled or not
 * @param flag The rendering flag to be checked if enabled
 * @param model The Model which contains all information needed to render a block
 */
function isRenderFlagEnabled(flag, model) {
    return (flag & model.RenderFlags) !== 0;
}
exports.isRenderFlagEnabled = isRenderFlagEnabled;
/**
 * Is the NumberFormat override applicable.
 *
 * @param cell The Cell
 * @param model The model
 */
function doesNumFmtOverrideText(cell, model) {
    if (!isCellValueNumeric(cell)) {
        return false;
    }
    // Does the cell contain wrapText.
    var isWrapTextApplicable = isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAndWrapText, model) && cell.WrapText !== '' && cell.Text !== '';
    return isWrapTextApplicable || isAccAndCustomNumFmtApplicable(cell, model);
}
exports.doesNumFmtOverrideText = doesNumFmtOverrideText;
/**
 * Is Accounting and Custom NumFmt Applicable on the cell.
 *
 * @param cell The Cell
 * @param model The model
 */
function isAccAndCustomNumFmtApplicable(cell, model) {
    if (!isCellValueNumeric(cell)) {
        return false;
    }
    return (isRenderFlagEnabled(gridBlockModelDto_1.RenderFlags.NumFmtAccountingAndCustom, model) &&
        cell.Ifmt >= constants_1.NumFmtAccountingStartIndex &&
        !util_1.isNullOrUndefined(cell.NumFmt) &&
        cell.Text !== '');
}
exports.isAccAndCustomNumFmtApplicable = isAccAndCustomNumFmtApplicable;
function isCellValueNumeric(cell) {
    return cell.ValueType === gridBlockModelDto_1.CellValueType.Number;
}
/**
 * Verifies that a given argument is not null or undefined
 *
 * @param argument The given argument
 * @param argumentName Name of the given argument
 * @param callerString Name of the caller method
 */
function verifyArgumentNotNull(argument, argumentName, callerString) {
    if (argument === null || argument === undefined) {
        throw Error(callerString + ".verifyArgumentNotNull: " + argumentName + " cannot be null or undefined");
    }
}
exports.verifyArgumentNotNull = verifyArgumentNotNull;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/serialization.js":
/*!**************************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/serialization.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockRendererIgnoreLists_gen_1 = __webpack_require__(/*! ./generated/gridBlockRendererIgnoreLists.gen */ "../../packages/excel-online-models/lib/src/generated/gridBlockRendererIgnoreLists.gen.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
/**
 * Clean model from content which is not required during boot (or can be recreated) in order to reduce its size.
 *
 * @param model Model to clean
 */
function cleanModelBeforeSerialization(model) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'cleanModelBeforeSerialization');
    cleanObject(model, 'GridBlockModel');
    cleanAllCells(model);
}
exports.cleanModelBeforeSerialization = cleanModelBeforeSerialization;
/**
 * Restore cleaned model state after serialization completed.
 *
 * @param model The model to restore
 */
function restoreModelAfterSerialization(model) {
    helpers_1.verifyArgumentNotNull(model, 'model', 'cleanModelBeforeSerialization');
    restoreObject(model, 'GridBlockModel');
    restoreAllCells(model);
}
exports.restoreModelAfterSerialization = restoreModelAfterSerialization;
function cleanAllCells(model) {
    var cells = model.Cells;
    if (cells) {
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            cleanObject(cell, 'Cell');
        }
    }
}
/**
 * Cleans object properties not required to be serialized when saved into cache by setting them to 'undefined'.
 * By setting such properties to 'undefined' they will be excluded from serialization done be JSON.stringify API and not consume storage.
 *
 * @param o Object to clean
 * @param className The object type name
 */
function cleanObject(o, className) {
    var props = Object.getOwnPropertyNames(o);
    for (var j = 0; j < props.length; j++) {
        var propName = props[j];
        var propInfo = gridBlockRendererIgnoreLists_gen_1.SerializationProperties[getSerializationPropertyKey(className, propName)];
        var canClean = canCleanProperty(o, propInfo, propName);
        if (canClean) {
            cleanProperty(o, propName);
        }
    }
}
function cleanProperty(o, propName) {
    // clean the property by setting to undefined - this will ensure it is not serialized
    setProperty(o, propName, undefined);
}
/**
 * Returns true if it is valid to clean a certain property
 */
function canCleanProperty(o, propInfo, propName) {
    if (propInfo.tsOnly) {
        // TypeScript only properties can be cleaned since they are computed during rendering
        return true;
    }
    switch (propInfo.type) {
        case 'number':
            // number properties with default value 0 can be cleaned
            return propertyValue(o, propName) === 0;
        case 'boolean':
            // boolean properties with default value `false` can be cleaned
            return propertyValue(o, propName) === false;
        case 'object':
            // object type properties with null value can be cleaned
            return propertyValue(o, propName) === null;
    }
    return false;
}
function restoreAllCells(model) {
    if (model.Cells) {
        var cells = model.Cells;
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i];
            restoreObject(cell, 'Cell');
        }
    }
}
/**
 * Cache map from class name to serialization properties array - for faster restore
 */
var CachedSerializationProperties = {};
/**
 * Restore object state by setting default values to properties
 *
 * @param o Object to restore
 * @param className The class name of the object to restore
 */
function restoreObject(o, className) {
    var propKeys = getSerializationProperties(className);
    for (var i = 0; i < propKeys.length; i++) {
        var propKey = propKeys[i]; // propKey format is "ClassName.PropertyName"
        var propName = propKey.substring(propKey.indexOf('.') + 1);
        var propInfo = gridBlockRendererIgnoreLists_gen_1.SerializationProperties[getSerializationPropertyKey(className, propName)];
        if (canRestoreProperty(o, propInfo, propName)) {
            restoreProperty(o, propInfo, propName);
        }
    }
}
function getSerializationProperties(className) {
    // perf optimization - use cached list of properties information based on class name to avoid iterating on all properties of all classes each restore
    var propKeys = CachedSerializationProperties[className];
    if (!propKeys) {
        propKeys = Object.keys(gridBlockRendererIgnoreLists_gen_1.SerializationProperties).filter(function (propKey) { return propKey.startsWith(className); });
        CachedSerializationProperties[className] = propKeys;
    }
    return propKeys;
}
function canRestoreProperty(o, propInfo, propName) {
    // if the property is TypeScript only we don't need to restore it since its value will be recalculated on render time
    // otherwise, we can potentially restore properties which are not defined on the object instance
    return propInfo && !propInfo.tsOnly && propertyValue(o, propName) === undefined;
}
function restoreProperty(o, propInfo, propName) {
    switch (propInfo.type) {
        case 'number':
            // number properties are set to 0 since that is their default value
            setProperty(o, propName, 0);
            break;
        case 'boolean':
            // boolean properties are set to false since that is their default value
            setProperty(o, propName, false);
            break;
    }
}
function propertyValue(o, propName) {
    return o[propName];
}
function setProperty(o, propName, value) {
    o[propName] = value;
}
function getSerializationPropertyKey(className, propName) {
    return gridBlockRendererIgnoreLists_gen_1.SerializationPropertyKey.replace('{className}', className).replace('{propertyName}', propName);
}
//# sourceMappingURL=serialization.js.map

/***/ }),

/***/ "../../packages/excel-online-models/lib/src/serializer.js":
/*!***********************************************************************!*\
  !*** C:/_work/5/s/packages/excel-online-models/lib/src/serializer.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var gridBlockRendererIgnoreLists_gen_1 = __webpack_require__(/*! ./generated/gridBlockRendererIgnoreLists.gen */ "../../packages/excel-online-models/lib/src/generated/gridBlockRendererIgnoreLists.gen.js");
var SerializerConsts_1 = __webpack_require__(/*! ./SerializerConsts */ "../../packages/excel-online-models/lib/src/SerializerConsts.js");
var helpers_1 = __webpack_require__(/*! ./helpers */ "../../packages/excel-online-models/lib/src/helpers.js");
var ModelUserContentList = gridBlockRendererIgnoreLists_gen_1.UserContentList['Cell']
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['GridBlockModel'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['CellStyle'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['Font'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['BorderStyle'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['AutoFilter'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['PivotFilter'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['MenuItem'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['FormulaInformation'])
    .concat(gridBlockRendererIgnoreLists_gen_1.UserContentList['NumberFormatInformation']);
/**
 * Returns a string representation of the cell passed.
 *
 * @param cell that is being serialized
 * @param model that is used to get need information about the cell
 */
function serializeCell(cell, model) {
    if (!cell || !model) {
        return '';
    }
    // Update cell cache before serialize
    cell.CachedStyle = helpers_1.getReferencedObjectToCache(cell.StyleID, model.Styles);
    cell.CachedBorderStyle = helpers_1.getReferencedObjectToCache(cell.BorderStyleID, model.BorderStyles);
    cell.CachedFont = helpers_1.getReferencedObjectToCache(cell.CachedStyle.FontID, model.Fonts);
    return !ModelUserContentList
        ? JSON.stringify(cell)
        : JSON.stringify(cell, getReplacerWithIgnoreList(ModelUserContentList));
}
exports.serializeCell = serializeCell;
/**
 * Returns a string representation of the model passed.
 *
 * @param model that is being serialized
 */
function serializeModel(model) {
    if (!model) {
        return '';
    }
    return !ModelUserContentList
        ? JSON.stringify(model)
        : JSON.stringify(model, getReplacerWithIgnoreList(ModelUserContentList));
}
exports.serializeModel = serializeModel;
/**
 * Annonymize string value.
 *
 * @param value string to annonymize
 */
function annonymize(value) {
    // 1. Replace 'd' to char before replacing digits to 'd'
    // 2. Replace all digits with 'd'
    // 3. Replace all letters with 'w'
    return value
        .toLowerCase()
        .replace(SerializerConsts_1.DigitReplaceValue, SerializerConsts_1.CharacterReplaceValue)
        .replace(SerializerConsts_1.Digit, SerializerConsts_1.DigitReplaceValue)
        .replace(SerializerConsts_1.ValueAnnonymizerRegex, SerializerConsts_1.CharacterReplaceValue);
}
exports.annonymize = annonymize;
/**
 * Return a JSON replacer that turns any value to anonymize if the key is in the ignore list passed.
 * JSON replacer is an optional function that is passed to the JSON.stringify function,
 * which accepts key:string and value:string and returns string)
 * (read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
 *
 * @param ignoreListForReplacer is the list that contains key with need their value to be anonymized
 */
function getReplacerWithIgnoreList(ignoreListForReplacer) {
    return function (key, value) {
        if (value && ignoreListForReplacer && ignoreListForReplacer.indexOf(key) > -1) {
            return annonymize(value);
        }
        return value;
    };
}
//# sourceMappingURL=serializer.js.map

/***/ }),

/***/ "../../packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/index.js":
/*!******************************************************************************************!*\
  !*** C:/_work/5/s/packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/index.js ***!
  \******************************************************************************************/
/*! exports provided: UnavailabilityToast, UnavailabilityToastFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unavailabilityToast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unavailabilityToast */ "../../packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/unavailabilityToast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnavailabilityToast", function() { return _unavailabilityToast__WEBPACK_IMPORTED_MODULE_0__["UnavailabilityToast"]; });

/* harmony import */ var _unavailabilityToastFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unavailabilityToastFactory */ "../../packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/unavailabilityToastFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnavailabilityToastFactory", function() { return _unavailabilityToastFactory__WEBPACK_IMPORTED_MODULE_1__["UnavailabilityToastFactory"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/unavailabilityToast.js":
/*!********************************************************************************************************!*\
  !*** C:/_work/5/s/packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/unavailabilityToast.js ***!
  \********************************************************************************************************/
/*! exports provided: UnavailabilityToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailabilityToast", function() { return UnavailabilityToast; });
var UnavailabilityToast = /** @class */ (function () {
    function UnavailabilityToast(parent, toastTitle, toastMessage, isRtl) {
        this.elementsMargin = isRtl ? 'margin-left: 8px;' : 'margin-right: 8px;';
        this.toastElement = this.createToastContainer(toastTitle, toastMessage);
        parent.appendChild(this.toastElement);
    }
    UnavailabilityToast.prototype.setVisibility = function (visible) {
        this.toastElement.style.visibility = visible ? 'visible' : 'hidden';
    };
    UnavailabilityToast.prototype.dispose = function () {
        var _a;
        (_a = this.toastElement.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.toastElement);
    };
    UnavailabilityToast.prototype.createToastContainer = function (toastTitle, toastMessage) {
        var toastElement = document.createElement('div');
        toastElement.id = 'UnavailabilityToast';
        toastElement.setAttribute('role', 'alert');
        toastElement.setAttribute('style', "display: flex;\n      visibility: hidden;\n      padding: 12px 16px;\n      background-color: #FFF4CE;\n      color: #484644;\n      font-size: 14px;\n      line-height: 20px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\n      border-radius: 4px;\n      font-family: \"Segoe UI\", \"Segoe UI Web (West European)\", \"Segoe UI\", -apple-system, BlinkMacSystemFont, Roboto, \"Helvetica Neue\", sans-serif;\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;");
        toastElement.appendChild(this.createToastIcon());
        toastElement.appendChild(this.createToastTitle(toastTitle));
        toastElement.appendChild(this.createToastText(toastMessage));
        return toastElement;
    };
    UnavailabilityToast.prototype.createToastIcon = function () {
        var unavailabilityToastIcon = document.createElement('span');
        unavailabilityToastIcon.id = 'UnavailabilityToastIcon';
        var processingIconEncodedSvgRepresentation = '%3Csvg%20width%3D%2220%22%20height%3D%2218%22%20viewBox%3D%220%200%2020%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0D%0A%3Cpath%20d%3D%22M8.17383%207.24219C8.02409%207.48307%207.84831%207.70443%207.64648%207.90625C7.45117%208.10156%207.23307%208.27409%206.99219%208.42383L7.49023%209.63477L6.33789%2010.1035L5.83984%208.90234C5.57943%208.96745%205.29948%209%205%209C4.70052%209%204.42057%208.96745%204.16016%208.90234L3.66211%2010.1035L2.50977%209.63477L3.00781%208.42383C2.76693%208.27409%202.54557%208.10156%202.34375%207.90625C2.14844%207.70443%201.97591%207.48307%201.82617%207.24219L0.615234%207.74023L0.146484%206.58789L1.34766%206.08984C1.28255%205.82943%201.25%205.54948%201.25%205.25C1.25%204.95052%201.28255%204.67057%201.34766%204.41016L0.146484%203.91211L0.615234%202.75977L1.82617%203.25781C2.12565%202.76953%202.51953%202.37565%203.00781%202.07617L2.50977%200.865234L3.66211%200.396484L4.16016%201.59766C4.42057%201.53255%204.70052%201.5%205%201.5C5.29948%201.5%205.57943%201.53255%205.83984%201.59766L6.33789%200.396484L7.49023%200.865234L6.99219%202.07617C7.48047%202.37565%207.87435%202.76953%208.17383%203.25781L9.38477%202.75977L9.85352%203.91211L8.65234%204.41016C8.71745%204.67057%208.75%204.95052%208.75%205.25C8.75%205.54948%208.71745%205.82943%208.65234%206.08984L9.85352%206.58789L9.38477%207.74023L8.17383%207.24219ZM5%207.75C5.34505%207.75%205.66732%207.6849%205.9668%207.55469C6.27279%207.42448%206.53971%207.24544%206.76758%207.01758C6.99544%206.78971%207.17448%206.52604%207.30469%206.22656C7.4349%205.92057%207.5%205.59505%207.5%205.25C7.5%204.90495%207.4349%204.58268%207.30469%204.2832C7.17448%203.97721%206.99544%203.71029%206.76758%203.48242C6.53971%203.25456%206.27279%203.07552%205.9668%202.94531C5.66732%202.8151%205.34505%202.75%205%202.75C4.65495%202.75%204.32943%202.8151%204.02344%202.94531C3.72396%203.07552%203.46029%203.25456%203.23242%203.48242C3.00456%203.71029%202.82552%203.97721%202.69531%204.2832C2.5651%204.58268%202.5%204.90495%202.5%205.25C2.5%205.59505%202.5651%205.92057%202.69531%206.22656C2.82552%206.52604%203.00456%206.78971%203.23242%207.01758C3.46029%207.24544%203.72396%207.42448%204.02344%207.55469C4.32943%207.6849%204.65495%207.75%205%207.75ZM18.75%2012.125C18.75%2012.4831%2018.7044%2012.8444%2018.6133%2013.209L19.9512%2013.7559L19.4824%2014.918L18.1348%2014.3613C17.7507%2014.9993%2017.2428%2015.5072%2016.6113%2015.8848L17.168%2017.2227L16.0059%2017.7012L15.459%2016.3633C15.0944%2016.4544%2014.7331%2016.5%2014.375%2016.5C14.0169%2016.5%2013.6556%2016.4544%2013.291%2016.3633L12.7441%2017.7012L11.582%2017.2227L12.1387%2015.8848C11.5007%2015.5072%2010.9928%2014.9993%2010.6152%2014.3613L9.26758%2014.918L8.79883%2013.7559L10.1367%2013.209C10.0456%2012.8444%2010%2012.4831%2010%2012.125C10%2011.7669%2010.0456%2011.4056%2010.1367%2011.041L8.79883%2010.4941L9.26758%209.33203L10.6152%209.88867C10.9928%209.25716%2011.5007%208.74935%2012.1387%208.36523L11.582%207.01758L12.7441%206.54883L13.291%207.88672C13.6556%207.79557%2014.0169%207.75%2014.375%207.75C14.7331%207.75%2015.0944%207.79557%2015.459%207.88672L16.0059%206.54883L17.168%207.01758L16.6113%208.36523C17.2428%208.74935%2017.7507%209.25716%2018.1348%209.88867L19.4824%209.33203L19.9512%2010.4941L18.6133%2011.041C18.7044%2011.4056%2018.75%2011.7669%2018.75%2012.125ZM14.375%2015.25C14.8047%2015.25%2015.2083%2015.1686%2015.5859%2015.0059C15.9635%2014.8431%2016.2923%2014.6217%2016.5723%2014.3418C16.8587%2014.0553%2017.0833%2013.7233%2017.2461%2013.3457C17.4154%2012.9616%2017.5%2012.5547%2017.5%2012.125C17.5%2011.6953%2017.4154%2011.2917%2017.2461%2010.9141C17.0833%2010.5365%2016.8587%2010.2077%2016.5723%209.92773C16.2923%209.64128%2015.9635%209.41667%2015.5859%209.25391C15.2083%209.08464%2014.8047%209%2014.375%209C13.9453%209%2013.5384%209.08464%2013.1543%209.25391C12.7767%209.41667%2012.4447%209.64128%2012.1582%209.92773C11.8783%2010.2077%2011.6569%2010.5365%2011.4941%2010.9141C11.3314%2011.2917%2011.25%2011.6953%2011.25%2012.125C11.25%2012.5547%2011.3314%2012.9616%2011.4941%2013.3457C11.6569%2013.7233%2011.8783%2014.0553%2012.1582%2014.3418C12.4447%2014.6217%2012.7767%2014.8431%2013.1543%2015.0059C13.5384%2015.1686%2013.9453%2015.25%2014.375%2015.25Z%22%20fill%3D%22%23797775%22%2F%3E%0D%0A%3C%2Fsvg%3E';
        unavailabilityToastIcon.setAttribute('style', "display: inline-block;\n      height: 20px;\n      width: 20px;\n      background-repeat: no-repeat;\n      background-image: url(\"data:image/svg+xml;charset=utf8," + processingIconEncodedSvgRepresentation + "\");" +
            this.elementsMargin);
        return unavailabilityToastIcon;
    };
    UnavailabilityToast.prototype.createToastTitle = function (toastTitle) {
        var unavailabilityToastTitle = document.createElement('span');
        unavailabilityToastTitle.id = 'UnavailabilityToastTitle';
        unavailabilityToastTitle.innerText = toastTitle;
        unavailabilityToastTitle.setAttribute('style', 'font-weight: 600;' + this.elementsMargin);
        return unavailabilityToastTitle;
    };
    UnavailabilityToast.prototype.createToastText = function (toastMessage) {
        var unavailabilityToastText = document.createElement('span');
        unavailabilityToastText.id = 'UnavailabilityToastText';
        unavailabilityToastText.innerText = toastMessage;
        return unavailabilityToastText;
    };
    return UnavailabilityToast;
}());

//# sourceMappingURL=unavailabilityToast.js.map

/***/ }),

/***/ "../../packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/unavailabilityToastFactory.js":
/*!***************************************************************************************************************!*\
  !*** C:/_work/5/s/packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/unavailabilityToastFactory.js ***!
  \***************************************************************************************************************/
/*! exports provided: UnavailabilityToastFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnavailabilityToastFactory", function() { return UnavailabilityToastFactory; });
/* harmony import */ var _unavailabilityToast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unavailabilityToast */ "../../packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/unavailabilityToast.js");

var UnavailabilityToastFactory = /** @class */ (function () {
    function UnavailabilityToastFactory() {
    }
    UnavailabilityToastFactory.createInstance = function (parent, toastTitle, toastMessage, isRtl) {
        return new _unavailabilityToast__WEBPACK_IMPORTED_MODULE_0__["UnavailabilityToast"](parent, toastTitle, toastMessage, isRtl);
    };
    return UnavailabilityToastFactory;
}());

//# sourceMappingURL=unavailabilityToastFactory.js.map

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ms_excel_online_grid_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ms/excel-online-grid-renderer */ "../../packages/excel-online-grid-renderer/lib/index.js");
/* harmony import */ var _ms_excel_online_grid_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ms_excel_online_grid_renderer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ms_excel_online_grid_renderer__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ms_excel_online_grid_renderer__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ms_office_online_ux_lib_UISurfaces_UnavailabilityToast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ms/office-online-ux/lib/UISurfaces/UnavailabilityToast */ "../../packages/office-online-ux/lib/UISurfaces/UnavailabilityToast/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnavailabilityToast", function() { return _ms_office_online_ux_lib_UISurfaces_UnavailabilityToast__WEBPACK_IMPORTED_MODULE_1__["UnavailabilityToast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnavailabilityToastFactory", function() { return _ms_office_online_ux_lib_UISurfaces_UnavailabilityToast__WEBPACK_IMPORTED_MODULE_1__["UnavailabilityToastFactory"]; });



//# sourceMappingURL=index.js.map

/***/ })

/******/ });
//# sourceMappingURL=gridRenderer.js.map