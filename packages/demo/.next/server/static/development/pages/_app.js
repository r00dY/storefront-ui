module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "../node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "../node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "../node_modules/core-js/library/fn/object/define-property.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "../node_modules/core-js/library/fn/object/get-own-property-descriptor.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "../node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "../node_modules/core-js/library/fn/object/keys.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/core-js/library/fn/array/is-array.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/fn/array/is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "../node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/assign.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/assign.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "../node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/define-property.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/define-property.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-property */ "../node_modules/core-js/library/modules/es6.object.define-property.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
/*!********************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ "../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "../node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/library/fn/object/keys.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.keys */ "../node_modules/core-js/library/modules/es6.object.keys.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/core-js/library/modules/_core.js").Object.keys;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_a-function.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_an-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_array-includes.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "../node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "../node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_cof.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_core.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_core.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ctx.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_defined.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_descriptors.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_dom-create.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "../node_modules/core-js/library/modules/_enum-keys.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_export.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_fails.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_global.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/core-js/library/modules/_has.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_hide.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_html.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_html.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_iobject.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-array.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_is-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_library.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_meta.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_meta.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-assign.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-create.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-create.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "../node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "../node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "../node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dp.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-dps.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dps.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopd.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopd.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gopn.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-gops.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys-internal.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "../node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "../node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-keys.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "../node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "../node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-pie.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/library/modules/_object-sap.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-sap.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_property-desc.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_redefine.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "../node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared-key.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_shared.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-absolute-index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-integer.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-iobject.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "../node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-length.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "../node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-object.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "../node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_to-primitive.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_uid.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks-define.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks-ext.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-ext.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "../node_modules/core-js/library/modules/_wks.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.array.is-array.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "../node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.assign.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "../node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.define-property.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.define-property.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperty: __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js").f });


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var $getOwnPropertyDescriptor = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/library/modules/_object-gopd.js").f;

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.object.keys.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");

__webpack_require__(/*! ./_object-sap */ "../node_modules/core-js/library/modules/_object-sap.js")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "../node_modules/core-js/library/modules/es6.symbol.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "../node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "../node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "../node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "../node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "../node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "../node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "../node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "../node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "../node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "../node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "../node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "../node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "../node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "../node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "../node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "../node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "../node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "../node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "../node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "../node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "../node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "../node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "../node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "../node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "../node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "../node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./actions/createEmptyCheckout.js":
/*!****************************************!*\
  !*** ./actions/createEmptyCheckout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createEmptyCheckout; });
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphql/mutations */ "./graphql/mutations.js");

async function createEmptyCheckout(client) {
  return await client.mutate({
    mutation: _graphql_mutations__WEBPACK_IMPORTED_MODULE_0__["createCheckoutMutation"],
    variables: {
      input: {}
    }
  });
}

/***/ }),

/***/ "./actions/fetchCheckout.js":
/*!**********************************!*\
  !*** ./actions/fetchCheckout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fetchCheckout; });
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../graphql/queries */ "./graphql/queries.js");

async function fetchCheckout(client, checkoutId) {
  return await client.query({
    query: _graphql_queries__WEBPACK_IMPORTED_MODULE_0__["getCheckoutQuery"],
    variables: {
      id: checkoutId
    }
  });
}

/***/ }),

/***/ "./components/Banner/Banner/index.js":
/*!*******************************************!*\
  !*** ./components/Banner/Banner/index.js ***!
  \*******************************************/
/*! exports provided: Banner, BannerInner, BannerButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerInner", function() { return BannerInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerButton", function() { return BannerButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! responsive-helpers */ "responsive-helpers");
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(responsive_helpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../theme.js */ "./theme.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Image */ "./components/Image/index.js");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Button */ "./components/Button/index.js");
/* harmony import */ var _helpers_routerPush__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../helpers/routerPush */ "./helpers/routerPush.js");
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Banner/Banner/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/** @jsx jsx */









const BannerButton = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    href: props.href,
    kind: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, props.label));
};

const BannerInner = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
          margin-bottom: ${theme.spacings.s40}px;
        `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, props.label && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
              ${theme.fonts.body1.css}
              color: white;
            `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, props.label), props.title && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
              ${theme.fonts.h2.css}
              color: white;
              margin-top: ${theme.spacings.s20}px;
            `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, props.title), props.text && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
              ${theme.fonts.body1.css}
              color: white;
              ${props.hideTextOnMobile ? _theme_js__WEBPACK_IMPORTED_MODULE_4__["R"].to("sm").css("display: none;") : ""}
            `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, props.text)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(BannerButton, {
    label: "Shop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }));
};

BannerInner.defaultProps = {
  hideTextOnMobile: false
};
BannerInner.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  hideTextOnMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

const Banner = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();

  function setParams(param) {
    if (typeof param === "string") {
      return {
        xs: param
      };
    } else {
      return param;
    }
  }

  const imageElem = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Image__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    image: props.image,
    backgroundColor: props.imageBackground,
    video: props.video,
    sizes: "100vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  });
  const imageWithMobileElem = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Image__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
          ${_theme_js__WEBPACK_IMPORTED_MODULE_4__["R"].to("xs_plus").css("display: none;")}
        `,
    image: props.image,
    video: props.video,
    backgroundColor: props.imageBackground,
    sizes: "100vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Image__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
          ${_theme_js__WEBPACK_IMPORTED_MODULE_4__["R"].from("sm").css("display: none;")}
        `,
    image: props.imageMobile,
    video: props.videoMobile,
    backgroundColor: props.imageBackground,
    sizes: "320px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }));
  const sectionElem = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
        position: relative;
        cursor: pointer;
      `,
    onClick: () => Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_8__["default"])(props.href),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, props.imageMobile || props.videoMobile ? imageWithMobileElem : imageElem, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "ImageOverlay",
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
            background: black;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0;
            transition: 100ms;
          `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  })), props.element && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_3__["rm"])(setParams(props.elementFlexAlign)).css(val => `align-items: ${val};`)}
                    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_3__["rm"])(setParams(props.elementFlexJustify)).css(val => `justify-content: ${val};`)}
                    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_3__["rslin"])(theme.spacings.s80, theme.spacings.s120).css("padding")}
                `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
              ${props.elementFullWidth ? "width: 100%;" : Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_3__["rs"])({
      xs: "100%",
      sm: "60%",
      md: "50%",
      lg: "40%"
    }).css("width")}
            `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, props.element)));
  return sectionElem;
};

Banner.defaultProps = {
  imageBackground: "transparent",
  elementFlexAlign: "flex-start",
  elementFlexJustify: "flex-start",
  elementFullWidth: false
};
Banner.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  imageMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  videoMobile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  element: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
  elementFlexAlign: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  elementFlexJustify: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  elementFullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  imageBackground: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};


/***/ }),

/***/ "./components/Banner/index.js":
/*!************************************!*\
  !*** ./components/Banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner */ "./components/Banner/Banner/index.js");
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Banner/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Banner_ = props => __jsx(_Banner__WEBPACK_IMPORTED_MODULE_1__["Banner"], {
  image: props.image,
  imageMobile: props.imageMobile,
  href: props.href,
  element: __jsx(_Banner__WEBPACK_IMPORTED_MODULE_1__["BannerInner"], {
    label: props.label,
    title: props.title,
    hideTextOnMobile: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }),
  elementFlexAlign: "flex-end",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (Banner_);

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Button */ "@commerce-ui/core/Button");
/* harmony import */ var _commerce_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Button/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const overrides = {
  BaseButton: {
    style: ({
      $theme,
      $kind
    }) => `
            border-radius: 4px;
            -webkit-tap-highlight-color: transparent;
            ${$kind === "white" ? `
                background: white;
                color: black;
                &:hover {
                    background: ${$theme.colors.mono100.css};
                }
            ` : ""}
            ${$kind === "facebook" ? `
                background:  #0084ff;
                border: 1px solid #0084ff;
                color: white;
                
              ` : ""}
        }
            ${$kind === "secondary" ? `
                background: white;
                border: 1px solid ${$theme.colors.primary.css};
                &:hover, &:focus {
                  background: white;
                  border: 1px solid ${$theme.colors.primary600.css};
                  color: ${$theme.colors.primary600.css};
                }
              ` : ""}
            ${$kind === "primary" ? `
                  border: 1px solid ${$theme.colors.primary.css};
              ` : ""}
            ${$kind === "minimal" ? `
                  padding: 6px 0;
                  &:hover, &:focus {
                    background: none;
                    color: ${$theme.colors.primary600.css};
                  }
                ` : ""}
            
        `
  }
};
const Button = props => __jsx(_commerce_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["Button$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  overrides: overrides
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}));

/***/ }),

/***/ "./components/ButtonRaw/index.js":
/*!***************************************!*\
  !*** ./components/ButtonRaw/index.js ***!
  \***************************************/
/*! exports provided: ButtonRaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRaw", function() { return ButtonRaw; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/ButtonRaw */ "@commerce-ui/core/ButtonRaw");
/* harmony import */ var _commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/ButtonRaw/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const ButtonRaw = props => __jsx(_commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_2__["ButtonRaw$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}));

/***/ }),

/***/ "./components/CheckoutLineItemRow/index.js":
/*!*************************************************!*\
  !*** ./components/CheckoutLineItemRow/index.js ***!
  \*************************************************/
/*! exports provided: CheckoutLineItemRow, CheckoutLineItemRowTheme1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutLineItemRow", function() { return CheckoutLineItemRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutLineItemRowTheme1", function() { return CheckoutLineItemRowTheme1; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_CheckoutLineItemRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/CheckoutLineItemRow */ "@commerce-ui/core/CheckoutLineItemRow");
/* harmony import */ var _commerce_ui_core_CheckoutLineItemRow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_CheckoutLineItemRow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Price */ "./components/Price/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commerce-ui/core/ButtonRaw */ "@commerce-ui/core/ButtonRaw");
/* harmony import */ var _commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg_bin_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../svg/bin.svg */ "./svg/bin.svg");
/* harmony import */ var _svg_plus_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../svg/plus.svg */ "./svg/plus.svg");
/* harmony import */ var _svg_minus_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../svg/minus.svg */ "./svg/minus.svg");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Image */ "./components/Image/index.js");
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! responsive-helpers */ "responsive-helpers");
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(responsive_helpers__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/CheckoutLineItemRow/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/** @jsx jsx */










const overrides = {
  Image: _Image__WEBPACK_IMPORTED_MODULE_11__["Image"],
  Price: ({
    price,
    priceDiscount
  }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Price__WEBPACK_IMPORTED_MODULE_3__["default"], {
    price: price,
    priceDiscount: priceDiscount,
    alignRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  })
};

const Quantity = ({
  quantity,
  mode,
  isWishlistItem
}) => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"]`
        display: flex;
        width: 100%;
        align-items: center;
        ${theme.fonts.body1.css}
        svg {
          width: 18px;
          height: 18px;
        }
      `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, mode === "basket" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_5__["ButtonRaw$"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_svg_minus_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  })), (mode === "basket" || mode === "default") && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"]`
            width: 36px;
            ${mode === "basket" ? "text-align: center;" : ""}
          `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, quantity), mode === "basket" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_5__["ButtonRaw$"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_svg_plus_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), mode === "wishlist" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Add to basket"));
};

const overridesTheme1 = {
  Image: _Image__WEBPACK_IMPORTED_MODULE_11__["Image"],
  Price: ({
    price,
    priceDiscount
  }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_Price__WEBPACK_IMPORTED_MODULE_3__["default"], {
    price: price,
    priceDiscount: priceDiscount,
    alignRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }),
  Title: {
    style: ({
      $theme,
      mode
    }) => `
        margin-bottom: 0.5em;
        ${$theme.fonts.body1.css}
        margin-right: 8px;
      `
  },
  ImageContainer: {
    style: ({
      $theme,
      mode
    }) => `
      ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_12__["rslin"])(80, 80).css("width")}
    `
  },
  Remove: ({
    mode,
    onBinClick
  }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, (mode === "basket" || mode === "wishlist") && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_ButtonRaw__WEBPACK_IMPORTED_MODULE_5__["ButtonRaw$"], {
    onClick: onBinClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_svg_bin_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"]`
              width: 18px;
              height: 18px;
            `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }))),
  Content: {
    style: ({
      $theme,
      gutter
    }) => `padding: 0 ${gutter}px; background: red;`
  },
  Quantity: Quantity
};

const CheckoutLineItemRow = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_CheckoutLineItemRow__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  overrides: overrides,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}));

const CheckoutLineItemRowTheme1 = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_CheckoutLineItemRow__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  overrides: overridesTheme1,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}));



/***/ }),

/***/ "./components/Divider/index.js":
/*!*************************************!*\
  !*** ./components/Divider/index.js ***!
  \*************************************/
/*! exports provided: Divider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Divider */ "@commerce-ui/core/Divider");
/* harmony import */ var _commerce_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Divider/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Divider = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return __jsx(_commerce_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__["Divider$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overrides: {
      Label: {
        style: () => `
                ${theme.fonts.caption1.css}
                color: ${theme.colors.mono500.css};
                `
      },
      Root: {
        style: () => `
                padding: 24px 0;
            `
      }
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commerce_ui_core_MenuDesktop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @commerce-ui/core/MenuDesktop */ "@commerce-ui/core/MenuDesktop");
/* harmony import */ var _commerce_ui_core_MenuDesktop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_MenuDesktop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commerce-ui/core/Grid */ "@commerce-ui/core/Grid");
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commerce-ui/core/Container */ "@commerce-ui/core/Container");
/* harmony import */ var _commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! responsive-helpers */ "responsive-helpers");
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(responsive_helpers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme.js */ "./theme.js");
/* harmony import */ var _ButtonRaw__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ButtonRaw */ "./components/ButtonRaw/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _instagram_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./instagram.svg */ "./components/Footer/instagram.svg");
/* harmony import */ var _pinterest_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pinterest.svg */ "./components/Footer/pinterest.svg");
/* harmony import */ var _twitter_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./twitter.svg */ "./components/Footer/twitter.svg");
/* harmony import */ var _ThemeLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ThemeLink */ "./components/ThemeLink/index.js");
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









/** @jsx jsx */


const _columns = [[{
  label: "About",
  href: "/shipping"
}, {
  label: "Customer Service",
  href: "/shipping"
}, {
  label: "Delivery Information",
  href: "/shipping"
}, {
  label: "Returns & Refunds",
  href: "/shipping"
}, {
  label: "Product Care",
  href: "/shipping"
}], [{
  label: "Store Locator",
  href: "/shipping"
}, {
  label: "Careers",
  href: "/shipping"
}, {
  label: "Press",
  href: "/shipping"
}, {
  label: "Contact Us",
  href: "/shipping"
}]];





const Footer = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"]`
          border-top: 1px solid ${theme.colors.mono200.css};

          ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_5__["rslin"])(theme.spacings.s100, theme.spacings.s120).css("padding-top")}
          ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_5__["rslin"])(theme.spacings.s120, theme.spacings.s160).css("margin-top")}
        `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, _columns.map((column, index) => {
    let _cols = {
      xs: [12],
      sm: 8,
      lg: [6]
    };
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
      params: _cols,
      key: index,
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"]`
                    ${_theme_js__WEBPACK_IMPORTED_MODULE_6__["R"].to("md").css`
                      margin-bottom: 2em;
                    `}
                  `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, column.map((link, index2) => {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
        key: index2,
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"]`
                          ${theme.fonts.caption.css}
                          line-height: 2.4;
                        `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: link.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_ThemeLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        href: link.href,
        kind: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: undefined
      }, link.label)));
    }));
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["GridItem"], {
    params: {
      xs: [24],
      sm: 8,
      lg: [12]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"]`
                  display: flex;
                  ${_theme_js__WEBPACK_IMPORTED_MODULE_6__["R"].to("sm").css("justify-content: center;")} ${_theme_js__WEBPACK_IMPORTED_MODULE_6__["R"].from("sm").css("justify-content: flex-end; ")} svg {
                    width: 20px;
                    fill: ${theme.colors.mono700.css};
                  }
                  & > button:not(:last-of-type) {
                    margin-right: ${theme.spacings.s100}px;
                  }
                `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_ButtonRaw__WEBPACK_IMPORTED_MODULE_7__["ButtonRaw"], {
    kind: "minimal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_instagram_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_ButtonRaw__WEBPACK_IMPORTED_MODULE_7__["ButtonRaw"], {
    kind: "minimal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_pinterest_svg__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_ButtonRaw__WEBPACK_IMPORTED_MODULE_7__["ButtonRaw"], {
    kind: "minimal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_twitter_svg__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  })))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"]`
            margin-top: 40px;
            // background: ${theme.colors.mono100.css};
            padding: 20px 0;
          `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"]`
                ${theme.fonts.caption.css} line-height: 2;
                color: ${theme.colors.mono500.css};
                display: flex;
                align-items: center;
                flex-wrap: wrap;
              `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, "\xA9 2019 All Rights Reserved"), ["Privacy Policy", "Terms of Service", "CA Supply Chain Transparency", "Vendor Code of Conduct", "Sitemap Pages", "Sitemap Products"].map((link, index3) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("div", {
    key: index3,
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_9__["css"]`
                       {
                        margin: 0 ${theme.spacings.s60}px;
                      }
                    `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, index3 > 0 && "|"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(_ThemeLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
    href: "/privacy",
    kind: "hoverUnderline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, link)))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/product",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/collection",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/search",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/menu",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/wishlist",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/cart",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/profile",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/form1",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/form2",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/form3",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/summary",
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  })))))));
}; // Footer.propTypes = {
// };


/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/instagram.svg":
/*!*****************************************!*\
  !*** ./components/Footer/instagram.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12.5 1.5c-3 0-3.36 0-4.54.07a8.07 8.07 0 00-2.67.51 5.62 5.62 0 00-3.21 3.21A8.07 8.07 0 001.57 8c-.06 1.14-.07 1.51-.07 4.5s0 3.36.07 4.54a8.07 8.07 0 00.51 2.67 5.62 5.62 0 003.22 3.22 8.07 8.07 0 002.7.5c1.17.05 1.55.07 4.54.07s3.36 0 4.54-.07a8.07 8.07 0 002.67-.51 5.62 5.62 0 003.22-3.22 8.07 8.07 0 00.46-2.7c.05-1.17.07-1.55.07-4.54s0-3.36-.07-4.54a8.07 8.07 0 00-.51-2.67 5.62 5.62 0 00-3.22-3.22 8.07 8.07 0 00-2.7-.46c-1.17-.05-1.55-.07-4.54-.07m0 2c2.94 0 3.29 0 4.44.06a6.09 6.09 0 012 .38A3.64 3.64 0 0121.08 6a6.09 6.09 0 01.38 2c.05 1.16.06 1.51.06 4.44s0 3.29-.06 4.44a6.09 6.09 0 01-.38 2 3.64 3.64 0 01-2.08 2.2 6.09 6.09 0 01-2 .38c-1.16.05-1.51.06-4.44.06s-3.29 0-4.44-.06a6.09 6.09 0 01-2-.38A3.64 3.64 0 013.92 19a6.09 6.09 0 01-.38-2c-.05-1.16-.06-1.51-.06-4.44s0-3.29.06-4.44a6.09 6.09 0 01.38-2A3.64 3.64 0 016 3.92a6.09 6.09 0 012-.38c1.16-.05 1.51-.06 4.44-.06M12.5 16a3.48 3.48 0 113.5-3.5 3.48 3.48 0 01-3.5 3.5zm0-8.83a5.35 5.35 0 105.35 5.35 5.35 5.35 0 00-5.35-5.37zm6.82-.21a1.25 1.25 0 11-1.25-1.25 1.25 1.25 0 011.25 1.25"
});

var SvgInstagram = function SvgInstagram(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    className: "instagram_svg__nav-block__social-icon",
    viewBox: "0 0 25 25"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgInstagram);

/***/ }),

/***/ "./components/Footer/pinterest.svg":
/*!*****************************************!*\
  !*** ./components/Footer/pinterest.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M14.15 19A4.1 4.1 0 0111 17.62l-1.52 4.83-.15.3A1.58 1.58 0 018 23.5a1.67 1.67 0 01-1.66-1.66v-.15l.15-.3L9.18 13a7.83 7.83 0 01-.3-2.26c0-2.56 1.36-3.32 2.56-3.32a1.85 1.85 0 012.11 2c0 2-1.36 3-1.36 4.52a2 2 0 002 2c3.47 0 4.82-2.71 4.82-5.12a6.21 6.21 0 00-6.33-6 6.21 6.21 0 00-6.33 6 6.23 6.23 0 00.75 2.86 1.36 1.36 0 01.15.75 1.42 1.42 0 01-1.51 1.51 1.58 1.58 0 01-1.36-.75 9.21 9.21 0 01-1.21-4.52 9.23 9.23 0 019.34-9 9.23 9.23 0 019.34 9C22 14.76 19.58 19 14.15 19z"
});

var SvgPinterest = function SvgPinterest(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    className: "pinterest_svg__nav-block__social-icon",
    viewBox: "0 0 25 25"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgPinterest);

/***/ }),

/***/ "./components/Footer/twitter.svg":
/*!***************************************!*\
  !*** ./components/Footer/twitter.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M22.44 7.47c-.19 8.63-5.62 14.63-13.87 15A13.65 13.65 0 01.5 20.22a10 10 0 007.31-2.06 5.07 5.07 0 01-4.68-3.56 7.56 7.56 0 002.06 0 5.11 5.11 0 01-3.94-5.06 3.78 3.78 0 002.06.56C1.63 9.16.5 5.6 1.81 3.35A14.86 14.86 0 0012.13 8.6c-1.32-5.25 5.81-8.06 8.62-4.5A12.63 12.63 0 0023.94 3a5.3 5.3 0 01-2.06 2.81A10.75 10.75 0 0024.5 5c-.19 1-1.12 1.72-2.06 2.47z"
});

var SvgTwitter = function SvgTwitter(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    className: "twitter_svg__nav-block__social-icon",
    viewBox: "0 0 25 25"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgTwitter);

/***/ }),

/***/ "./components/FormControl/index.js":
/*!*****************************************!*\
  !*** ./components/FormControl/index.js ***!
  \*****************************************/
/*! exports provided: FormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commerce_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commerce-ui/core/FormControl */ "@commerce-ui/core/FormControl");
/* harmony import */ var _commerce_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return _commerce_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_0__["FormControl$"]; });



/***/ }),

/***/ "./components/Image/index.js":
/*!***********************************!*\
  !*** ./components/Image/index.js ***!
  \***********************************/
/*! exports provided: Image, ImageZoomable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageZoomable", function() { return ImageZoomable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Image */ "@commerce-ui/core/Image");
/* harmony import */ var _commerce_ui_core_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Image__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Image/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Image = _commerce_ui_core_Image__WEBPACK_IMPORTED_MODULE_2__["Image$"];
const ImageZoomable = props => __jsx(_commerce_ui_core_Image__WEBPACK_IMPORTED_MODULE_2__["ImageZoomable$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  overrides: {
    Image: Image
  }
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}));

/***/ }),

/***/ "./components/Input/index.js":
/*!***********************************!*\
  !*** ./components/Input/index.js ***!
  \***********************************/
/*! exports provided: StatefulInput, Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulInput", function() { return StatefulInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Input */ "@commerce-ui/core/Input");
/* harmony import */ var _commerce_ui_core_Input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../svg/search.svg */ "./svg/search.svg");

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Input/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/** @jsx jsx */




const overrides = (props, theme) => {
  let After;
  let Before;

  if (props.unit) {
    After = () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"]`
          align-self: center;
          color: grey;
          margin-right: 6px;
        `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, props.unit);
  } else if (props.search) {
    Before = () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"]`
          align-self: center;
          margin-left: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.mono500.css};
        `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_svg_search_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }));
  }

  return {
    After,
    Before
  };
};

const StatefulInput = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__["StatefulInput$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overrides: overrides(props, theme)
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }));
};
const Input = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_Input__WEBPACK_IMPORTED_MODULE_2__["Input$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overrides: overrides(props, theme)
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./components/Ledger/index.js":
/*!************************************!*\
  !*** ./components/Ledger/index.js ***!
  \************************************/
/*! exports provided: Ledger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ledger", function() { return Ledger; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Ledger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Ledger */ "@commerce-ui/core/Ledger");
/* harmony import */ var _commerce_ui_core_Ledger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Ledger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Ledger/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/** @jsx jsx */



const Ledger = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_commerce_ui_core_Ledger__WEBPACK_IMPORTED_MODULE_2__["Ledger$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));



/***/ }),

/***/ "./components/MainTabBar/index.js":
/*!****************************************!*\
  !*** ./components/MainTabBar/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @commerce-ui/core/TabBar */ "@commerce-ui/core/TabBar");
/* harmony import */ var _commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_home_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../svg/home.svg */ "./svg/home.svg");
/* harmony import */ var _svg_menu_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../svg/menu.svg */ "./svg/menu.svg");
/* harmony import */ var _svg_heart_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../svg/heart.svg */ "./svg/heart.svg");
/* harmony import */ var _svg_cart_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../svg/cart.svg */ "./svg/cart.svg");
/* harmony import */ var _svg_account_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../svg/account.svg */ "./svg/account.svg");

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/MainTabBar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/** @jsx jsx */








/* harmony default export */ __webpack_exports__["default"] = (props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    console.log("mount MainTabBar");
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_1__["TabBar$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overrides: {
      Root: {
        style: `
                background: white;
                border-top: 1px solid ${theme.colors.mono200.css};
            `
      },
      Tab: ({
        tabData,
        active
      }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"]`
              height: 50px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: ${active ? theme.colors.primary.css : theme.colors.mono600.css};
            `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: undefined
      }, tabData.icon === "home" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_svg_home_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: undefined
      }), tabData.icon === "menu" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_svg_menu_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: undefined
      }), tabData.icon === "favs" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_svg_heart_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: undefined
      }), tabData.icon === "basket" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_svg_cart_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: undefined
      }), tabData.icon === "profile" && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_svg_account_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"]`
                ${theme.fonts.caption2.css}
              `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: undefined
      }, tabData.label)),
      Line: {
        style: `height: 2px; background: ${theme.colors.primary.css};`
      }
    },
    gutter: 5
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }));
});

/***/ }),

/***/ "./components/MenuDesktop/index.js":
/*!*****************************************!*\
  !*** ./components/MenuDesktop/index.js ***!
  \*****************************************/
/*! exports provided: MenuDesktopContent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDesktopContent", function() { return MenuDesktopContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.js");
/* harmony import */ var _commerce_ui_core_MenuDesktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commerce-ui/core/MenuDesktop */ "@commerce-ui/core/MenuDesktop");
/* harmony import */ var _commerce_ui_core_MenuDesktop__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_MenuDesktop__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commerce-ui/core/LayoutLeftCenterRight */ "@commerce-ui/core/LayoutLeftCenterRight");
/* harmony import */ var _commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commerce_ui_core_LayoutRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commerce-ui/core/LayoutRow */ "@commerce-ui/core/LayoutRow");
/* harmony import */ var _commerce_ui_core_LayoutRow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_LayoutRow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _commerce_ui_core_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @commerce-ui/core/useScrollDirection */ "@commerce-ui/core/useScrollDirection");
/* harmony import */ var _commerce_ui_core_useScrollDirection__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_useScrollDirection__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _commerce_ui_core_useScrollSegment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @commerce-ui/core/useScrollSegment */ "@commerce-ui/core/useScrollSegment");
/* harmony import */ var _commerce_ui_core_useScrollSegment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_useScrollSegment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @commerce-ui/core/Container */ "@commerce-ui/core/Container");
/* harmony import */ var _commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _ButtonRaw__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ButtonRaw */ "./components/ButtonRaw/index.js");
/* harmony import */ var _MiniBasketContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MiniBasketContent */ "./components/MiniBasketContent/index.js");
/* harmony import */ var _svg_search_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../svg/search.svg */ "./svg/search.svg");
/* harmony import */ var _svg_cart_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../svg/cart.svg */ "./svg/cart.svg");
/* harmony import */ var _svg_account_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../svg/account.svg */ "./svg/account.svg");
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Banner */ "./components/Banner/index.js");
/* harmony import */ var _Ledger__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Ledger */ "./components/Ledger/index.js");
/* harmony import */ var _ProfileLogInContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../ProfileLogInContent */ "./components/ProfileLogInContent/index.js");
/* harmony import */ var _ThemeLink__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../ThemeLink */ "./components/ThemeLink/index.js");
/* harmony import */ var _helpers_routerPush__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../helpers/routerPush */ "./helpers/routerPush.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../data */ "./data/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _helpers_mapCheckoutItems__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../helpers/mapCheckoutItems */ "./helpers/mapCheckoutItems.js");
/* harmony import */ var _helpers_getCheckoutTotals__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../helpers/getCheckoutTotals */ "./helpers/getCheckoutTotals.js");
/* harmony import */ var _graphql_hooks_useCheckout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../graphql/hooks/useCheckout */ "./graphql/hooks/useCheckout.js");
/* harmony import */ var _lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../lib/CheckoutContext */ "./lib/CheckoutContext.js");

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/MenuDesktop/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






















/** @jsx jsx */






const MenuDesktopContent = props => {
  const {
    category
  } = props;
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
        background: white;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
      `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
            padding: ${theme.spacings.s100}px 0;
          `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
              display: flex;
            `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                display: flex;
                flex-direction: column;
                max-height: 500px;
                flex-wrap: wrap;
                align-content: flex-start;
                justify-content: flex-start;
                width: 75%;
              `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, category.subcats.map((subcat, j) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                    width: 33.33%;
                  `,
    key: j,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                      padding-right: 1em;
                      margin-bottom: ${theme.spacings.s40}px;
                      ${theme.fonts.body1.css}
                    `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/collection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_ThemeLink__WEBPACK_IMPORTED_MODULE_20__["default"], {
    href: "/collection",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, subcat.name))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                      padding-bottom: ${theme.spacings.s80}px;
                    `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, subcat.links && subcat.links.map((link, k) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`${theme.fonts.body2.css} line-height: 2; a:hover {color: ${theme.colors.mono500.css};`,
    key: k,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_ThemeLink__WEBPACK_IMPORTED_MODULE_20__["default"], {
    href: "/category",
    kind: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, link)))))))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                width: 25%;
                padding-left: ${theme.spacings.s40}px;
              `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_Banner__WEBPACK_IMPORTED_MODULE_17__["default"], {
    image: [_data__WEBPACK_IMPORTED_MODULE_22__["default"].images.boxes.half_box_01, _data__WEBPACK_IMPORTED_MODULE_22__["default"].images.boxes.half_box_04, _data__WEBPACK_IMPORTED_MODULE_22__["default"].images.boxes.half_box_03, _data__WEBPACK_IMPORTED_MODULE_22__["default"].images.boxes.half_box_08][props.index],
    href: "/collection",
    label: "The Tonal Trend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }))))));
};

const MenuDesktop = props => {
  const {
    0: opened,
    1: setOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: profileOpened,
    1: setProfileOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [checkout] = Object(_graphql_hooks_useCheckout__WEBPACK_IMPORTED_MODULE_26__["default"])(_lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_27__["CheckoutContext"]);
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_9__["useTheme"])();
  const segment = _commerce_ui_core_useScrollSegment__WEBPACK_IMPORTED_MODULE_7___default()({
    1: "not-top",
    1000: "hideable"
  });

  const IconButton = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_ButtonRaw__WEBPACK_IMPORTED_MODULE_12__["ButtonRaw"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
        position: relative;

        color: ${theme.colors.mono800.css};
        span {
          ${theme.fonts.caption.css}
        }
        svg {
          width: 24px;
          fill: currentColor;
        }

        &:hover {
          opacity: 0.66;
        }
      `
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          background: white;
          opacity: 0;
          border-radius: 50%;
        `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
          position: relative;
        `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, props.children));

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_commerce_ui_core_MenuDesktop__WEBPACK_IMPORTED_MODULE_3__["MenuDesktop$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overrides: {
      MenuButton: ({
        index,
        menu,
        isActive,
        setActive,
        buttonProps
      }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_ButtonRaw__WEBPACK_IMPORTED_MODULE_12__["ButtonRaw"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: index,
        onClick: () => {
          Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_21__["default"])("/collection");
        }
      }, buttonProps, {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
              position: relative;
              box-sizing: content-box;
              height: 70px;
              padding: 0 24px;
              ${theme.fonts.body1.css}

              &:after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background: black;
                opacity: ${isActive ? "1" : "0"};
              }
            `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: undefined
      }), menu.label),
      MenuBar: ({
        buttons,
        activeMenu
      }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
              position: relative;
            `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                background-color: white;

                border-bottom: ${segment === "hideable" || segment === "not-top" || activeMenu ? `1px solid ${theme.colors.mono200.css};` : "none"};
              `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_commerce_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_4___default.a, {
        height: 70,
        left: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_commerce_ui_core_LayoutRow__WEBPACK_IMPORTED_MODULE_5___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
          css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                          ${theme.fonts.h6.css} a {
                            text-decoration: none;
                            color: ${theme.colors.mono900.css};
                          }
                        `,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          },
          __self: undefined
        }, "Basic Store")))),
        right: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
          css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                        > button {
                          position: relative;
                          margin-left: 16px;
                        }
                      `,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(IconButton, {
          onClick: () => {
            setProfileOpened(true);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_svg_account_svg__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: undefined
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(IconButton, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_svg_search_svg__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 277
          },
          __self: undefined
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(IconButton, {
          onClick: () => {
            setOpened(true);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_svg_cart_svg__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: undefined
        }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          },
          __self: undefined
        }, _data__WEBPACK_IMPORTED_MODULE_22__["default"].checkout.lineItems.length))),
        center: buttons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: undefined
      }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_Modal__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        isOpen: opened,
        onRequestClose: () => setOpened(false),
        config: {
          mode: "right",
          width: {
            xs: "90vw",
            md: "50vw",
            lg: "33vw"
          }
        },
        header: "Your Bag",
        footer: () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
          css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                    padding: ${theme.spacings.s30}px;
                  `,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 308
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
          css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                      padding: ${theme.spacings.s30}px;
                    `,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_Ledger__WEBPACK_IMPORTED_MODULE_18__["Ledger"], {
          rows: Object(_helpers_getCheckoutTotals__WEBPACK_IMPORTED_MODULE_25__["default"])(checkout),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: undefined
        })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
          css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                      display: flex;
                      width: 100%;
                      & > div {
                        flex-basis: 50%;
                        padding: ${theme.spacings.s30}px;
                      }
                    `,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          kind: "secondary",
          fitContainer: true,
          onClick: () => {
            setOpened(false);
            Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_21__["default"])("/cart");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: undefined
        }, "View Bag (", _data__WEBPACK_IMPORTED_MODULE_22__["default"].products.length, ")")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          },
          __self: undefined
        }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_11__["Button"], {
          fitContainer: true,
          onClick: () => {
            setOpened(false);
            Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_21__["default"])("/form1");
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: undefined
        }, "Checkout")))),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_MiniBasketContent__WEBPACK_IMPORTED_MODULE_13__["default"], {
        lineItems: checkout.lineItems,
        dataMapper: _helpers_mapCheckoutItems__WEBPACK_IMPORTED_MODULE_24__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: undefined
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_Modal__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        isOpen: profileOpened,
        onRequestClose: () => setProfileOpened(false),
        config: {
          mode: "center",
          width: {
            xs: "90%",
            lg: "400px"
          }
        },
        header: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])("div", {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_23__["css"]`
                  padding: ${theme.spacings.s80}px;
                `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: undefined
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_23__["jsx"])(_ProfileLogInContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: undefined
      }))))
    },
    renderMenuContent: true,
    mode: "fixed",
    debounce: 50
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuDesktop);

/***/ }),

/***/ "./components/MiniBasketContent/index.js":
/*!***********************************************!*\
  !*** ./components/MiniBasketContent/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CheckoutLineItemRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CheckoutLineItemRow */ "./components/CheckoutLineItemRow/index.js");
/* harmony import */ var _graphql_hooks_useDeleteFromCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphql/hooks/useDeleteFromCart */ "./graphql/hooks/useDeleteFromCart.js");
/* harmony import */ var _graphql_hooks_useCheckout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../graphql/hooks/useCheckout */ "./graphql/hooks/useCheckout.js");
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/MiniBasketContent/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







const MiniBasketContent = props => {
  const {} = props;
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  const [deleteItemFromCart, deletingInProgress] = Object(_graphql_hooks_useDeleteFromCart__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const [checkout] = Object(_graphql_hooks_useCheckout__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const lineItems = props.dataMapper(checkout.lineItems);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
        padding: ${theme.spacings.s50}px;
        * {
          box-sizing: border-box;
        }
        & > div:not(:first-of-type) {
          margin-top: ${theme.spacings.s80}px;
        }
      `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, lineItems.map((lineItem, index) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_CheckoutLineItemRow__WEBPACK_IMPORTED_MODULE_3__["CheckoutLineItemRowTheme1"], {
    checkoutLineItem: lineItem,
    layout: "compact",
    mode: "basket",
    onBinClick: () => alert(3),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))));
};

MiniBasketContent.defaultProps = {
  dataMapper: x => x
};
/* harmony default export */ __webpack_exports__["default"] = (MiniBasketContent);

/***/ }),

/***/ "./components/Modal/index.js":
/*!***********************************!*\
  !*** ./components/Modal/index.js ***!
  \***********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Modal */ "@commerce-ui/core/Modal");
/* harmony import */ var _commerce_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModalHeader */ "./components/ModalHeader/index.js");

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Modal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Modal = props => {
  const {
    header,
    footer
  } = props;
  let headerOverride;

  if (typeof header === "string") {
    headerOverride = ({
      close
    }) => __jsx(_ModalHeader__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], {
      title: header,
      onRequestClose: close,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    });
  } else if (typeof header === "function") {
    headerOverride = header;
  }

  return __jsx(_commerce_ui_core_Modal__WEBPACK_IMPORTED_MODULE_2__["Modal$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overrides: {
      Header: headerOverride,
      Footer: footer
    }
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./components/ModalHeader/index.js":
/*!*****************************************!*\
  !*** ./components/ModalHeader/index.js ***!
  \*****************************************/
/*! exports provided: ModalHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return ModalHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/LayoutLeftCenterRight */ "@commerce-ui/core/LayoutLeftCenterRight");
/* harmony import */ var _commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ButtonRaw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ButtonRaw */ "./components/ButtonRaw/index.js");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_x_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../svg/x.svg */ "./svg/x.svg");
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/ModalHeader/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const ModalHeader = ({
  onRequestClose,
  title
}) => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
        box-sizing: border-box;
        height: 50px;
        padding: ${theme.spacings.s40}px;
        ${theme.fonts.body1.css}
      `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_commerce_ui_core_LayoutLeftCenterRight__WEBPACK_IMPORTED_MODULE_2___default.a, {
    height: "100%",
    right: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_ButtonRaw__WEBPACK_IMPORTED_MODULE_3__["ButtonRaw"], {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
              display: flex;
              justify-content: center;
              align-items: center;
            `,
      onClick: onRequestClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_svg_x_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    })),
    center: title,
    left: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./components/Price/index.js":
/*!***********************************!*\
  !*** ./components/Price/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled-components */ "./components/Price/styled-components.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commerce_ui_core_utils_Money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commerce-ui/core/utils/Money */ "@commerce-ui/core/utils/Money");
/* harmony import */ var _commerce_ui_core_utils_Money__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_utils_Money__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/Price/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/** @jsx jsx */




const Price = props => {
  const {
    price,
    priceDiscount,
    alignRight
  } = props;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_styled_components__WEBPACK_IMPORTED_MODULE_1__["Root"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, priceDiscount && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
            ${alignRight && "margin-left: 0.25em;"}
            ${!alignRight && "margin-right: 0.25em;"}
          `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, _commerce_ui_core_utils_Money__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrencySymbol(priceDiscount), _commerce_ui_core_utils_Money__WEBPACK_IMPORTED_MODULE_3___default.a.getAmountString(priceDiscount)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
          ${priceDiscount && "text-decoration: line-through; opacity: 0.5;"}
          ${alignRight && "order: -1;"}
        `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, _commerce_ui_core_utils_Money__WEBPACK_IMPORTED_MODULE_3___default.a.getCurrencySymbol(price), _commerce_ui_core_utils_Money__WEBPACK_IMPORTED_MODULE_3___default.a.getAmountString(price)));
};

Price.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Price);

/***/ }),

/***/ "./components/Price/styled-components.js":
/*!***********************************************!*\
  !*** ./components/Price/styled-components.js ***!
  \***********************************************/
/*! exports provided: rootStyles, Root */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootStyles", function() { return rootStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Root", function() { return Root; });
/* harmony import */ var _commerce_ui_core_base_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commerce-ui/core/base/styles */ "@commerce-ui/core/base/styles");
/* harmony import */ var _commerce_ui_core_base_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_base_styles__WEBPACK_IMPORTED_MODULE_0__);

const rootStyles = ({
  $theme,
  alignRight
}) => `
    display: flex; flex-wrap: no-wrap; white-space: nowrap; justify-content: flex-start; align-items: center;
    ${alignRight ? "justify-content: flex-end;" : ""}
    ${$theme.fonts.body1.css}
`;
const Root = Object(_commerce_ui_core_base_styles__WEBPACK_IMPORTED_MODULE_0__["styled"])("div", rootStyles);

/***/ }),

/***/ "./components/ProfileLogInContent/facebook_logo.svg":
/*!**********************************************************!*\
  !*** ./components/ProfileLogInContent/facebook_logo.svg ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12 0a12 12 0 00-1.88 23.85v-8.38h-3V12h3V9.36c0-3 1.8-4.67 4.54-4.67a18.71 18.71 0 012.68.23v3h-1.51a1.73 1.73 0 00-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0012 0z"
});

var SvgFacebookLogo = function SvgFacebookLogo(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 23.85,
    viewBox: "0 0 24 23.85"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgFacebookLogo);

/***/ }),

/***/ "./components/ProfileLogInContent/index.js":
/*!*************************************************!*\
  !*** ./components/ProfileLogInContent/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TabBar */ "./components/TabBar/index.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormControl */ "./components/FormControl/index.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./components/Input/index.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "./components/Button/index.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Divider */ "./components/Divider/index.js");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @commerce-ui/core/Grid */ "@commerce-ui/core/Grid");
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _facebook_logo_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./facebook_logo.svg */ "./components/ProfileLogInContent/facebook_logo.svg");
/* harmony import */ var _ThemeLink__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ThemeLink */ "./components/ThemeLink/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/ProfileLogInContent/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/** @jsx jsx */












const ProfileLogInContent = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const Panel = props => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
        ${theme.fonts.body1.css}
        margin-top: ${theme.spacings.s80}px;
      `,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, props.children);

  const tabs = [{
    label: "Log in",
    panel: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Panel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      gutterVertical: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_FormControl__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      label: "Email address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Input__WEBPACK_IMPORTED_MODULE_4__["StatefulInput"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_FormControl__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      label: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Input__WEBPACK_IMPORTED_MODULE_4__["StatefulInput"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      fitContainer: true,
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
              margin-top: ${theme.spacings.s80}px;
            `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, "Log In"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Divider__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
      label: "OR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: undefined
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      startEnhancer: () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
                  fill: currentColor;
                `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: undefined
      }),
      fitContainer: true,
      kind: "facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, "Log in with Facebook"))
  }, {
    label: "Sign up",
    panel: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Panel, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      startEnhancer: () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_facebook_logo_svg__WEBPACK_IMPORTED_MODULE_9__["default"], {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
                  fill: currentColor;
                `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: undefined
      }),
      fitContainer: true,
      kind: "facebook",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, "Register with Facebook"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Divider__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
      label: "OR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
      gutterVertical: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_FormControl__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      label: "Email address",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Input__WEBPACK_IMPORTED_MODULE_4__["StatefulInput"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_FormControl__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      label: "Password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Input__WEBPACK_IMPORTED_MODULE_4__["StatefulInput"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_FormControl__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      label: "Full Name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Input__WEBPACK_IMPORTED_MODULE_4__["StatefulInput"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    })))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`${theme.fonts.caption.css} margin-top: ${theme.spacings.s80}px; color: ${theme.colors.mono500.css};`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: undefined
    }, "By creating an account, you agree to Our", " ", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: "/privacy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_ThemeLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
      href: "/privacy",
      kind: "underline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: undefined
    }, "Privacy Policy")), " ", "and\xA0", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
      href: "/privacy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_ThemeLink__WEBPACK_IMPORTED_MODULE_10__["default"], {
      href: "/privacy",
      kind: "underline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, "Terms of Use")), "."), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      fitContainer: true,
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_2__["css"]`
              margin-top: ${theme.spacings.s80}px;
            `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    }, "Create account"))
  }];
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_TabBar__WEBPACK_IMPORTED_MODULE_1__["TabBar"], {
    data: tabs,
    active: tab,
    onChange: setTab,
    showPanels: true,
    align: "fit",
    scrollable: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileLogInContent);

/***/ }),

/***/ "./components/TabBar/index.js":
/*!************************************!*\
  !*** ./components/TabBar/index.js ***!
  \************************************/
/*! exports provided: TabBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return TabBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/TabBar */ "@commerce-ui/core/TabBar");
/* harmony import */ var _commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/TabBar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/** @jsx jsx */


const TabBar = props => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_commerce_ui_core_TabBar__WEBPACK_IMPORTED_MODULE_2__["TabBar$"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overrides: {
      Tab: ({
        tabData,
        focus,
        active
      }) => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
        css: _emotion_core__WEBPACK_IMPORTED_MODULE_4__["css"]`
              padding: 16px;
              height: ${theme.spacings.s120}px;
              ${theme.fonts.body1.css}
              &:hover {
                color: ${theme.colors.primary.css};
              }
              display: flex;
              align-items: center;
              justify-content: center;
              ${active ? `color: ${theme.colors.primary.css};` : ""}
            `,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: undefined
      }, tabData.label),
      Separator: () => false,
      Line: {
        style: `height: 1px; background: ${theme.colors.primary.css};`
      }
    },
    gutter: 5,
    align: "fit",
    scrollable: "false"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/***/ }),

/***/ "./components/ThemeLink/index.js":
/*!***************************************!*\
  !*** ./components/ThemeLink/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/components/ThemeLink/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


/** @jsx jsx */



const Elem = _emotion_styled__WEBPACK_IMPORTED_MODULE_4___default.a.a`
    transition: color 150ms;
    text-decoration: none;
    
    ${props => props.kind === "primary" || props.kind === undefined ? `
    &,
      &:active,
      &:visited {
        color: ${props.theme.colors.primary.css};
      }
      &:hover {
        color: ${props.theme.colors.primary600.css};
      }
    ` : ""}
    ${props => props.kind === "secondary" ? `
    &,
      &:active,
      &:visited {
        color: ${props.theme.colors.mono700.css};
      }
      &:hover {
        color: ${props.theme.colors.mono500.css};
      }
    ` : ""}
    ${props => props.kind === "underline" ? `
    &,
      &:active,
      &:visited {
        color: ${props.theme.colors.mono500.css};
        text-decoration: underline;
      }
      &:hover {
        color: ${props.theme.colors.mono700.css};
      }
    ` : ""}
    ${props => props.kind === "inherit" ? `
    &,
      &:active,
      &:visited {
        color: inherit;
      }
    ` : ""}
    ${props => props.kind === "hoverUnderline" ? `
    &,
      &:active,
      &:visited {
        color: inherit;
      }
      &:hover {text-decoration: underline;}
    ` : ""}
    ${props => props.kind === "inheritUnderline" ? `
    &,
      &:active,
      &:visited {
        color: inherit;
      }
      text-decoration: underline;
    ` : ""}
  `;
const ThemeLink = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef((props, ref) => {
  const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Elem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    kind: props.kind,
    theme: theme
  }, props, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), props.children);
});
/* harmony default export */ __webpack_exports__["default"] = (ThemeLink);

/***/ }),

/***/ "./data/categories.js":
/*!****************************!*\
  !*** ./data/categories.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const categories = [{
  name: "Food",
  subcats: [{
    name: "Shop All Food"
  }, {
    name: "Snacks",
    links: ["Bars", "Candy", "Chips & Pretzels", "Cookies", "Crackers & Crisps", "Fruit & Vegetable Snacks", "Jerky", "Popcorn & Puffs", "Seeds, Nuts & Trail Mix"]
  }, {
    name: "Granola & Oatmeal",
    links: ["Granola", "Oatmeal"]
  }, {
    name: "Pantry Essentials",
    links: ["Sauces & Dressings", "Honeys & Syrups", "Nut & Seed Butters", "Oils & Vinegars", "Pastas & Grains", "Salsas & Mexican Food", "Spices & Seasonings", "Tuna"]
  }, {
    name: "Baby Food",
    links: ["Pouches", "Dry Food"]
  }, {
    name: "Baking & Mixes",
    links: ["Baking Ingredients", "Mixes"]
  }, {
    name: "Beverages",
    links: ["Coffee", "Tea", "Drink Mixes"]
  }]
}, {
  name: "Home",
  subcats: [{
    name: "Shop All Home"
  }, {
    name: "Cleaning Essentials",
    links: ["Cleaning Concentrates", "Cleaning Supplies", "Dishwashing"]
  }, {
    name: "Tableware",
    links: ["Plates, Bowls & Mugs", "Disposable Tableware"]
  }, {
    name: "Household Essentials",
    links: ["Household Paper", "Hand Soap", "Food & Storage Wraps", "Tote Bags"]
  }, {
    name: "Cooks' Tools",
    links: ["Bakeware", "Kitchen Gadgets", "Kitchen Knives", "Kitchen Utensils", "Bar & Wine Tools", "Coffee Accessories"]
  }, {
    name: "Outdoor",
    links: ["Grill Pans", "Grill Tools"]
  }, {
    name: "Kitchen Linens",
    links: ["Oven Mitts & Pot Holders", "Towels & Cloths"]
  }, {
    name: "Office Supplies",
    links: ["Writing Supplies", "Notebooks & Journals", "Stationery"]
  }, {
    name: "Gift & Party",
    links: ["Gift Bags & Wrap", "Party Supplies"]
  }]
}, {
  name: "Beauty & Personal Care",
  subcats: [{
    name: "Shop All Beauty & Personal Care"
  }, {
    name: "Beauty",
    links: ["Facial Skin Care", "Beauty Tools", "Lip Treatments"]
  }, {
    name: "CBD Collection",
    links: ["Facial Skin Care", "Lotions & Balms"]
  }, {
    name: "Personal Care",
    links: ["Body Wash & Shave", "Hair Care", "Deodorant", "Lotions", "Oral Care", "Hand Soap", "Menstrual Care", "Cotton Balls, Rounds & Swabs", "Nail Care & Grooming Tools", "Bath & Facial Tissue"]
  }, {
    name: "Baby Care",
    links: ["Bath & Care"]
  }]
}, {
  name: "Health & Wellness",
  subcats: [{
    name: "Shop All Health & Wellness"
  }, {
    name: "Vitamins & Supplements",
    links: ["Multivitamins", "Supplements", "Digestive Health"]
  }, {
    name: "Nutrition Powders",
    links: ["Superfoods", "Protein"]
  }, {
    name: "CBD Collection",
    links: ["Tinctures", "Capsules", "Gummies", "Lotions & Balms"]
  }, {
    name: "Aromatherapy",
    links: ["Essential Oils"]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (categories);

/***/ }),

/***/ "./data/checkout.js":
/*!**************************!*\
  !*** ./data/checkout.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products */ "./data/products.js");
/* harmony import */ var _utils_randomInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/randomInt */ "./utils/randomInt.js");


const checkoutLineItems = [_products__WEBPACK_IMPORTED_MODULE_0__["default"][0], _products__WEBPACK_IMPORTED_MODULE_0__["default"][1], _products__WEBPACK_IMPORTED_MODULE_0__["default"][2], _products__WEBPACK_IMPORTED_MODULE_0__["default"][3], _products__WEBPACK_IMPORTED_MODULE_0__["default"][4]].map(product => {
  // select random option
  const sizeValues = product.options.find(x => x.name === "size").values;
  const selectedValue = sizeValues[Object(_utils_randomInt__WEBPACK_IMPORTED_MODULE_1__["default"])(0, sizeValues.length - 1)];
  const productVariant = {
    product: product,
    selectedOptions: [{
      name: "size",
      value: selectedValue
    }],
    price: {
      amount: 99,
      currencyCode: "USD"
    },
    priceDiscount: {
      amount: 79,
      currencyCode: "USD"
    }
  };
  return {
    productVariant: productVariant,
    quantity: Object(_utils_randomInt__WEBPACK_IMPORTED_MODULE_1__["default"])(1, 5),
    price: {
      amount: 299,
      currencyCode: "USD"
    },
    priceDiscount: {
      amount: 199,
      currencyCode: "USD"
    }
  };
});
const checkout = {
  lineItems: checkoutLineItems,
  subtotalPrice: {
    amount: 12900,
    currencyCode: "USD"
  },
  totalTax: {
    amount: 3000,
    currencyCode: "USD"
  },
  totalPrice: {
    amount: 15900,
    currencyCode: "USD"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (checkout);

/***/ }),

/***/ "./data/filters.js":
/*!*************************!*\
  !*** ./data/filters.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filters = [{
  id: "sort",
  name: "Sort",
  type: "select",
  multiple: false,
  items: [{
    id: "price-asc",
    name: "Price (high to low)"
  }, {
    id: "price-desc",
    name: "Price (low to high)"
  }, {
    id: "newest",
    name: "Newest"
  }, {
    id: "most-popular",
    name: "Most popular"
  }],
  forceExpand: true
}, {
  id: "brand",
  name: "Brand",
  type: "select",
  items: [{
    id: "nike",
    name: "Nike",
    amount: 46
  }, {
    id: "adidas",
    name: "Adidas",
    amount: 21
  }, {
    id: "puma",
    name: "Puma",
    amount: 12
  }, {
    id: "under-armour",
    name: "Under Armour",
    amount: 0
  }, {
    id: "asics",
    name: "ASICS",
    amount: 12
  }, {
    id: "new-balance",
    name: "New Balance",
    amount: 54
  }, {
    id: "sketchers",
    name: "Sketchers",
    amount: 32
  }, {
    id: "fila",
    name: "Fila",
    amount: 75
  }, {
    id: "bata",
    name: "Bata",
    amount: 2
  }]
}, {
  id: "color",
  name: "Color",
  type: "select",
  items: [{
    id: "grey",
    name: "Grey",
    amount: 21,
    selected: false,
    data: {
      hex: "#E5E5E7"
    }
  }, {
    id: "black",
    name: "Black",
    amount: 12,
    selected: false,
    data: {
      hex: "#000000"
    }
  }, {
    id: "blue",
    name: "Blue",
    amount: 0,
    selected: false,
    data: {
      hex: "#295F9A"
    }
  }, {
    id: "olive",
    name: "Olive",
    amount: 12,
    selected: false,
    data: {
      hex: "#62664D"
    }
  }, {
    id: "beige",
    name: "Beige",
    amount: 54,
    selected: false,
    data: {
      hex: "#BBB09E"
    }
  }, {
    id: "orange",
    name: "Orange",
    amount: 32,
    selected: false,
    data: {
      hex: "#D8922C"
    }
  }, {
    id: "red",
    name: "Red",
    amount: 75,
    selected: true,
    data: {
      hex: "#C52E35"
    }
  }, {
    id: "pink",
    name: "Pink",
    amount: 2,
    selected: false,
    data: {
      hex: "#F1D4CF"
    }
  }, {
    id: "purple",
    name: "Purple",
    amount: 2,
    selected: false,
    data: {
      hex: "#4F3B75"
    }
  }, {
    id: "brown",
    name: "Brown",
    amount: 2,
    selected: false,
    data: {
      hex: "#9C673B"
    }
  }, {
    id: "honey",
    name: "Honey",
    amount: 2,
    selected: false,
    data: {
      hex: "#ECB91E"
    }
  }]
}, {
  id: "price",
  name: "Price",
  type: "range",
  min: 0,
  max: 1999,
  unit: "zł"
}, {
  id: "radius",
  name: "Radius (cm)",
  type: "range",
  min: 15,
  max: 49,
  unit: "cm"
}, {
  id: "width",
  name: "Width",
  type: "select",
  items: [{
    id: "wide",
    name: "Wide",
    amount: 46
  }, {
    id: "standard",
    name: "Standard",
    amount: 21
  }, {
    id: "narrow",
    name: "Narrow",
    amount: 12
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (filters);

/***/ }),

/***/ "./data/images.js":
/*!************************!*\
  !*** ./data/images.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var imgix_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imgix-core-js */ "imgix-core-js");
/* harmony import */ var imgix_core_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(imgix_core_js__WEBPACK_IMPORTED_MODULE_1__);

const ROOT = "https://ratio-assets.s3.eu-central-1.amazonaws.com/Storefront/basic";
const images = {
  landscape1: {
    src: [{
      url: ROOT + "/landscape1.jpg",
      w: 2844,
      h: 1600
    }],
    alt: "landscape1.jpg"
  },
  landscape2: {
    src: [{
      url: ROOT + "/landscape2.jpg",
      w: 2667,
      h: 1000
    }],
    alt: "landscape1.jpg"
  },
  landscape3: {
    src: [{
      url: ROOT + "/landscape3.jpg",
      w: 2667,
      h: 1000
    }],
    alt: "landscape1.jpg"
  },
  landscape4: {
    src: [{
      url: ROOT + "/landscape4.jpg",
      w: 2667,
      h: 1000
    }],
    alt: "landscape1.jpg"
  },
  landscape5: {
    src: [{
      url: ROOT + "/landscape5.jpg",
      w: 2667,
      h: 1000
    }],
    alt: "landscape1.jpg"
  },
  categories: (() => {
    let photos = {};
    ["baby", "bath", "body", "face", "hair", "oral"].map(name => {
      photos[name] = {
        alt: name,
        src: [{
          url: `${ROOT}/categories/${name}.jpg`,
          w: 2667,
          h: 1000
        }]
      };
    });
    return photos;
  })(),
  boxes: (() => {
    let photos = {};

    for (let i = 1; i <= 10; i++) {
      let name = `full_box_${i < 10 ? "0" : ""}${i}`;
      photos[name] = {
        alt: name,
        src: [{
          url: `${ROOT}/boxes/${name}.jpg`,
          w: 3613,
          h: 1400
        }]
      };
      name = `half_box_${i < 10 ? "0" : ""}${i}`;
      photos[name] = {
        alt: name,
        src: [{
          url: `${ROOT}/boxes/${name}.jpg`,
          w: 1792,
          h: 1400
        }]
      };
      name = `mobile_box_${i < 10 ? "0" : ""}${i}`;
      photos[name] = {
        alt: name,
        src: [{
          url: `${ROOT}/boxes/${name}.jpg`,
          w: 748,
          h: 1000
        }]
      };
    }

    return photos;
  })(),
  products: [{
    src: [{
      url: ROOT + "/Airless_Bottle_Mockup_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Airless_Bottle_Mockup_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Amber_Mist_Bottle_Mockup_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Amber_Mist_Bottle_Mockup_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Amber_Winchester_Bottle_Mockup_150ml_1-1.jpg"
  }, {
    src: [{
      url: ROOT + "/Baby_Oil_Bottle_Mockup_Orange_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Baby_Oil_Bottle_Mockup_Orange_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Baby_Oil_Bottle_Mockup_blue_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Baby_Oil_Bottle_Mockup_blue_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Boston_Bottle_Mockup_50ml_1-1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Boston_Bottle_Mockup_50ml_1-1.jpg"
  }, {
    src: [{
      url: ROOT + "/Bottle_with_Handle_Mockup_Dark_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Bottle_with_Handle_Mockup_Dark_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Bottle_with_Handle_Mockup_Light_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Bottle_with_Handle_Mockup_Light_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Coffee_Bag_Mockup_1-1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Coffee_Bag_Mockup_1-1.jpg"
  }, {
    src: [{
      url: ROOT + "/Coffee_Bag_Mockup_1-2.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Coffee_Bag_Mockup_1-2.jpg"
  }, {
    src: [{
      url: ROOT + "/Coffee_Bag_Mockup_1-3.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Coffee_Bag_Mockup_1-3.jpg"
  }, {
    src: [{
      url: ROOT + "/Cosmetic_Bottle_Mockup_Wooden_Cap_1-1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Cosmetic_Bottle_Mockup_Wooden_Cap_1-1.jpg"
  }, {
    src: [{
      url: ROOT + "/EcoPaper_Sachete_Mockup_1ok.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "EcoPaper_Sachete_Mockup_1ok.jpg"
  }, {
    src: [{
      url: ROOT + "/Foam_Bottle_Mockup_1ok.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Foam_Bottle_Mockup_1ok.jpg"
  }, {
    src: [{
      url: ROOT + "/Frosted_Jar_Wooden_Cap_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Frosted_Jar_Wooden_Cap_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Jar_Mockup_11.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Jar_Mockup_11.jpg"
  }, {
    src: [{
      url: ROOT + "/Mayonnaise_Jar_Mockup_1ok.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Mayonnaise_Jar_Mockup_1ok.jpg"
  }, {
    src: [{
      url: ROOT + "/OldStyle_Mustard_Jar_Mockup_1ok.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "OldStyle_Mustard_Jar_Mockup_1ok.jpg"
  }, {
    src: [{
      url: ROOT + "/Olive_Bottle_Mockup_1ok-1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Olive_Bottle_Mockup_1ok-1.jpg"
  }, {
    src: [{
      url: ROOT + "/Olives_Jar_Mockup_1-2.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Olives_Jar_Mockup_1-2.jpg"
  }, {
    src: [{
      url: ROOT + "/PET_Bottle_100ml_Amber_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "PET_Bottle_100ml_Amber_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Paper_Bag_Eco_Paper_Mockup_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Paper_Bag_Eco_Paper_Mockup_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Peanut_Butter_Mockup_1ok.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Peanut_Butter_Mockup_1ok.jpg"
  }, {
    src: [{
      url: ROOT + "/Round_Pet_Bottle_Color_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Round_Pet_Bottle_Color_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Sachet_Mockup_k_1-6.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Sachet_Mockup_k_1-6.jpg"
  }, {
    src: [{
      url: ROOT + "/Spaghetti_Mockup_1-1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Spaghetti_Mockup_1-1.jpg"
  }, {
    src: [{
      url: ROOT + "/Tomato_Pasta_Jar_Mockup_1.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Tomato_Pasta_Jar_Mockup_1.jpg"
  }, {
    src: [{
      url: ROOT + "/Tomato_Sauce_Bottle_Mockup_1oka.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Tomato_Sauce_Bottle_Mockup_1oka.jpg"
  }, {
    src: [{
      url: ROOT + "/Virgin_Oil_Can_Mockup_1ok.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Virgin_Oil_Can_Mockup_1ok.jpg"
  }, {
    src: [{
      url: ROOT + "/Weck_Jar_Mockup_1_ok.jpg",
      w: 1200,
      h: 1600
    }],
    alt: "Weck_Jar_Mockup_1_ok.jpg"
  }]
};
/**
 * Apply imgix
 */


const IMGIX_DOMAIN_RATIO = "ratio-dev.imgix.net";
const IMGIX_SECRET_RATIO = "T9S4mPu4pDgCetNw";
const RESOLUTIONS = [210, 420, 768, 1024, 1400, 1600, 1920];
const imgix = new imgix_core_js__WEBPACK_IMPORTED_MODULE_1___default.a({
  domain: IMGIX_DOMAIN_RATIO,
  secureURLToken: IMGIX_SECRET_RATIO
});

function transformToImgix(image) {
  let src = [];
  RESOLUTIONS.forEach(res => {
    let w = res;
    let imgixUrl = imgix.buildURL(image.src[0].url, {
      w: w,
      auto: "compress,format"
    });
    src.push({
      url: imgixUrl,
      w: w,
      h: w / image.src[0].w * image.src[0].h
    });
  });
  return {
    alt: image.alt,
    src: src
  };
}

function traverseImages(input) {
  let keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(input);

  keys.forEach(key => {
    if (input[key].src) {
      // is image
      input[key] = transformToImgix(input[key]);
    } else {
      traverseImages(input[key]);
    }
  });
}

traverseImages(images);
/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters */ "./data/filters.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ "./data/products.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./data/images.js");
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories */ "./data/categories.js");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reviews */ "./data/reviews.js");
/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout */ "./data/checkout.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  filters: _filters__WEBPACK_IMPORTED_MODULE_0__["default"],
  products: _products__WEBPACK_IMPORTED_MODULE_1__["default"],
  images: _images__WEBPACK_IMPORTED_MODULE_2__["default"],
  categories: _categories__WEBPACK_IMPORTED_MODULE_3__["default"],
  reviews: _reviews__WEBPACK_IMPORTED_MODULE_4__["default"],
  checkout: _checkout__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./data/products.js":
/*!**************************!*\
  !*** ./data/products.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./data/images.js");
/* harmony import */ var _utils_randomInt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/randomInt */ "./utils/randomInt.js");


let productImages = _images__WEBPACK_IMPORTED_MODULE_0__["default"].products;
const products = [{
  id: 1,
  title: "Transparent Bottle",
  description: "A-line Dresses",
  price: {
    amount: 99,
    currencyCode: "PLN"
  },
  images: [productImages[0], productImages[1], productImages[5], productImages[7]],
  href: "/product",
  badges: [{
    label: "-30%",
    type: "discount"
  }, {
    label: "Sustainability",
    type: "feature"
  }]
}, {
  id: 2,
  title: "Long A-line Jersey Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  images: [productImages[1], productImages[2]],
  href: "/product"
}, {
  id: 3,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[2], productImages[2]],
  href: "/product"
}, {
  id: 4,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[3], productImages[2]],
  href: "/product"
}, {
  id: 5,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[4], productImages[2]],
  href: "/product"
}, {
  id: 6,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[5], productImages[2]],
  href: "/product"
}, {
  id: 7,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[6], productImages[2]],
  href: "/product"
}, {
  id: 8,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[7], productImages[2]],
  href: "/product"
}, {
  id: 9,
  title: "Assymetric Tie Dress",
  price: {
    amount: 99,
    currencyCode: "PLN"
  },
  description: "A-line Dresses",
  badges: [{
    label: "-30%",
    type: "discount"
  }, {
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[8], productImages[1], productImages[5], productImages[7]],
  href: "/product"
}, {
  id: 10,
  title: "Long A-line Jersey Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  images: [productImages[9], productImages[2]],
  href: "/product"
}, {
  id: 11,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[10], productImages[2]],
  href: "/product"
}, {
  id: 12,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[11], productImages[2]],
  href: "/product"
}, {
  id: 13,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[12], productImages[2]],
  href: "/product"
}, {
  id: 14,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[13], productImages[2]],
  href: "/product"
}, {
  id: 15,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[14], productImages[2]],
  href: "/product"
}, {
  id: 16,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[15], productImages[2]],
  href: "/product"
}, {
  id: 17,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[16], productImages[2]],
  href: "/product"
}, {
  id: 18,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[17], productImages[2]],
  href: "/product"
}, {
  id: 19,
  title: "Bubble-shaped Jersey Dress Very Long Product Name",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  description: "Jersey Dresses",
  badges: [{
    label: "Sustainability",
    type: "feature"
  }],
  images: [productImages[18], productImages[2]],
  href: "/product"
}, {
  id: 20,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[19], productImages[2]],
  href: "/product"
}, {
  id: 21,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[20], productImages[2]],
  href: "/product"
}, {
  id: 22,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[21], productImages[2]],
  href: "/product"
}, {
  id: 23,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[22], productImages[2]],
  href: "/product"
}, {
  id: 24,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[23], productImages[2]],
  href: "/product"
}, {
  id: 25,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[24], productImages[2]],
  href: "/product"
}, {
  id: 26,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[25], productImages[2]],
  href: "/product"
}, {
  id: 27,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[26], productImages[2]],
  href: "/product"
}, {
  id: 28,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[27], productImages[2]],
  href: "/product"
}, {
  id: 29,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[28], productImages[2]],
  href: "/product"
}, {
  id: 30,
  title: "Shaped A-line Cotton Dress",
  price: {
    amount: 99,
    currencyCode: "EUR"
  },
  priceDiscount: {
    amount: 79,
    currencyCode: "EUR"
  },
  description: "Evening & Occasion Dresses Very Long Description",
  badges: [{
    label: "-20%",
    type: "discount"
  }],
  images: [productImages[29], productImages[2]],
  href: "/product"
}];
/**
 * Assign random options to products
 */

products.forEach(product => {
  let option = {
    name: "size",
    values: []
  };
  const numOfSizes = Object(_utils_randomInt__WEBPACK_IMPORTED_MODULE_1__["default"])(2, 10);

  for (let i = 1; i <= numOfSizes; i++) {
    option.values.push(i * 100 + "ml");
  }

  product.options = [option];
});
/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./data/reviews.js":
/*!*************************!*\
  !*** ./data/reviews.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reviews = {
  rating: 3.3,
  items: [{
    content: "Bought these shoes because they go with all my shirts. They’re comfortable and fun and Cindy thinks they’re great,",
    rating: "5",
    timestamp: "August 7, 2019",
    name: "stevenk997372503",
    ups: "1",
    downs: "0"
  }, {
    content: "I've wore Air Max and I have supprted Nike gear for more than 30 years now and I have two pair of the Air Max 270s and they are no comparison to the original Air Max shoes that I wear. The heel is too high compared to the rest of the shoe, and almost makes me feel like I'm wearing high heels and pushes my foot forward to make them very uncomfortable. Unfortun Read More",
    rating: "2",
    timestamp: "August 2, 2019",
    name: "989753927",
    ups: "1",
    downs: "5"
  }, {
    content: "Great shoes they are comfortable stylish best shoes ever",
    rating: "5",
    timestamp: "August 2, 2019",
    name: "Natenick",
    ups: "0",
    downs: "0"
  }, {
    content: "Great looking shoe!!!! Quite comfortable too!!! Gets looks all the time!!",
    rating: "5",
    timestamp: "August 2, 2019",
    name: "Big T 3000",
    ups: "0",
    downs: "0"
  }, {
    content: "These out-perform my expectations a hundred times over! When they arrived, they were on time. The box was unscathed, crisp and taped with the “Nike” logo which I thought was a cool feature. Opening that box, the shoe box was in mint condition as if I were to get them in store. My package showed evidence of true care while being handled, and I greatly appreciate that. Upon revealing the shoes,  Read More",
    rating: "5",
    timestamp: "August 1, 2019",
    name: "TaylorC229912675",
    ups: "3",
    downs: "0"
  }, {
    content: "Dope sneaker very comfortable. Bought these to match a shirt to go to Great Adventures a lot of walking in the park and these shoes did the job and looked great. I have flat fat feet and I was able to walk all day in them. They are very light and an overall dope sneaker for the collection. I got a 1/2 size bigger just Incase but seems to run trie to size",
    rating: "5",
    timestamp: "July 31, 2019",
    name: "ManuelN692908106",
    ups: "2",
    downs: "0"
  }, {
    content: "When I saw the Nike Air Max 270 React I thought what an awesome combination. React and 270 combining together is an a great idea. Once I got the shoe I was very disappointed in the comfort and what was made with the shoe. The comfort was stiff, and the transition from the heel to the toe was uncomfortable. A lot of room in the ankle area, and when walking a noticeable heel slippage. Sizing is not true to Read More",
    rating: "1",
    timestamp: "July 30, 2019",
    name: "AntSiciliano2",
    ups: "2",
    downs: "3"
  }, {
    content: "Got the Bauhaus colorway on launch day. They're dope! The materials clean easily and they're a little wider than the React 87. It took a couple of wears before they settled in and got comfortable. My heel-toe transition is just fine and my diddy-bop is still on point. (They don't force me to walk funny.) An easy buy for $150.",
    rating: "5",
    timestamp: "July 25, 2019",
    name: "orells",
    ups: "1",
    downs: "0"
  }, {
    content: "This shoe is clean! Nice shoe to wear for school this year! Price is high, but so is every shoe you have in the store!",
    rating: "5",
    timestamp: "July 24, 2019",
    name: "LisaAnnPen",
    ups: "1",
    downs: "0"
  }, {
    content: "In love .. i",
    rating: "4",
    timestamp: "July 20, 2019",
    name: "JoiaW327647085",
    ups: "0",
    downs: "2"
  }, {
    content: "These are very sweet and comfortable, honestly I wasn't expecting them to be as good as they look, good job and sweet colors! [This review was collected as part of a promotion.]",
    rating: "5",
    timestamp: "July 19, 2019",
    name: "Zypher711",
    ups: "0",
    downs: "0"
  }, {
    content: 'First off....these look amazing. The colors, the shape, Nike killed it.Now, tech wise? It sounds like a great idea to marry these two technologies, but they failed miserably. The main problem here is the heel-to-toe transition is clunky at best, and awful at worst. Because the Air unit is enclosed in React, there is no way to "activate" it, as React is just too soft. So you get this huge bubble on your heel, while that nice sinking feeling on the forefoot from the React. All in all, its not necessarily uncomfortable, they are just....weird.',
    rating: "3",
    timestamp: "July 17, 2019",
    name: "jaeelarr",
    ups: "5",
    downs: "0"
  }, {
    content: "That air in the rear gives you a high heel effect and the react in the front feels mismatched to the rear comfort. Strange upper fabric wrinkles and Bauhaus color way is a bit clownish. Plenty of toe box width and no dead space but modest heel slip going true to size. If I wasn't collecting I'd probably return these.",
    rating: "3",
    timestamp: "July 3, 2019",
    name: "shutitclown",
    ups: "7",
    downs: "1"
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (reviews);

/***/ }),

/***/ "./graphql/hooks/useCheckout.js":
/*!**************************************!*\
  !*** ./graphql/hooks/useCheckout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/CheckoutContext */ "./lib/CheckoutContext.js");



const useCheckout = () => {
  const {
    checkout,
    setCheckout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_1__["CheckoutContext"]);
  return [checkout, setCheckout];
};

/* harmony default export */ __webpack_exports__["default"] = (useCheckout);

/***/ }),

/***/ "./graphql/hooks/useDeleteFromCart.js":
/*!********************************************!*\
  !*** ./graphql/hooks/useDeleteFromCart.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mutations */ "./graphql/mutations.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const useDeleteFromCart = () => {
  const [deleteFromCartMutation, {
    loading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_mutations__WEBPACK_IMPORTED_MODULE_2__["checkoutLineItemsRemove"]);

  const deleteFromCart = async (checkoutId, ids) => {
    return await deleteFromCartMutation({
      variables: {
        checkoutId,
        lineItemIds: _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(ids) ? ids : [ids]
      }
    });
  };

  return [deleteFromCart, loading];
};

/* harmony default export */ __webpack_exports__["default"] = (useDeleteFromCart);

/***/ }),

/***/ "./graphql/mutations.js":
/*!******************************!*\
  !*** ./graphql/mutations.js ***!
  \******************************/
/*! exports provided: createCustomerMutation, CheckoutFragment, checkoutCustomerAssociateMutation, customerAccessTokenCreateMutation, createCheckoutMutation, addVariantToCartMutation, checkoutLineItemsUpdate, checkoutLineItemsRemove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCustomerMutation", function() { return createCustomerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutFragment", function() { return CheckoutFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutCustomerAssociateMutation", function() { return checkoutCustomerAssociateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerAccessTokenCreateMutation", function() { return customerAccessTokenCreateMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCheckoutMutation", function() { return createCheckoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVariantToCartMutation", function() { return addVariantToCartMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsUpdate", function() { return checkoutLineItemsUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutLineItemsRemove", function() { return checkoutLineItemsRemove; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const createCustomerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      userErrors {
        field
        message
      }
      customer {
        id
      }
    }
  }
`;
const CheckoutFragment = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTax
    subtotalPrice
    currencyCode
    totalPriceV2 {
      amount
      currencyCode
    }
    totalTaxV2 {
      amount
      currencyCode
    }
    totalPrice
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            selectedOptions {
              name
              value
            }
            title
            image {
              src
            }
            price
            priceV2 {
              amount
              currencyCode
            }
          }
          quantity
        }
      }
    }
  }
`;
const checkoutCustomerAssociateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation checkoutCustomerAssociate(
    $checkoutId: ID!
    $customerAccessToken: String!
  ) {
    checkoutCustomerAssociate(
      checkoutId: $checkoutId
      customerAccessToken: $customerAccessToken
    ) {
      userErrors {
        field
        message
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;
const customerAccessTokenCreateMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      userErrors {
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;
const createCheckoutMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;
const addVariantToCartMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation checkoutLineItemsAdd(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemInput!]!
  ) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;
const checkoutLineItemsUpdate = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation checkoutLineItemsUpdate(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemUpdateInput!]!
  ) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;
const checkoutLineItemsRemove = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      userErrors {
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

/***/ }),

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/*! exports provided: productFragmentQuery, getProductsQuery, getProductQuery, getCheckoutQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productFragmentQuery", function() { return productFragmentQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsQuery", function() { return getProductsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductQuery", function() { return getProductQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckoutQuery", function() { return getCheckoutQuery; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mutations */ "./graphql/mutations.js");



const productFragmentQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  fragment product on Product {
    id
    title
    options {
      id
      name
      values
    }
    images(first: 250) {
      edges {
        node {
          id
          src
          altText
        }
      }
    }

    variants(first: 250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          selectedOptions {
            name
            value
          }
          image {
            src
            altText
          }
          price
          priceV2 {
            currencyCode
            amount
          }
        }
      }
    }
  }
`;

const getSort = filters => {
  switch (filters.sort[0].id) {
    case "newest":
      return "sortKey: CREATED_AT, reverse: true";

    case "price-asc":
      return "sortKey: PRICE";

    case "price-desc":
      return "sortKey: PRICE, reverse: true";

    case "most-popular":
      return "sortKey: BEST_SELLING, reverse: true";
  }
};

const getFilterQuery = filters => _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(filters).map(filterName => {
  if (!filters[filterName].length) return;

  switch (filterName) {
    case "productTags":
      return `tag:${filters[filterName].map(tag => tag.id).join(" OR ")}`;

    case "productType":
      return `product_type:${filters[filterName].map(tag => tag.id).join(" OR ")}`;

    case "price":
      return `variants.price:${filters[filterName].from ? filters[filterName].to ? ">" + filters[filterName].from + " AND variants.price:<" + filters[filterName].to : ">" + filters[filterName].from : "<" + filters[filterName].to}`;
  }
});

const getProductsQuery = (filters = []) => {
  let filterQuery = `query:"${getFilterQuery(filters)}"`;

  if (filters.sort && filters.sort.length) {
    filterQuery += `, ${getSort(filters)}`;
  }

  return graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
        query query {
          productTypes(first: 20) {
            edges {
              node
            }
          }
          productTags(first: 20) {
            edges {
              node
            }
          }
        shop {
            name
            description
            products(first: 20, ${filterQuery}) {
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                }
                edges {
                    node {
                        ...product
                    }
                }
            }
        }
    }
    
        ${productFragmentQuery}
    `;
};
const getProductQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query Product($id: ID!) {
    node(id: $id) {
      ...product
    }
  }
  ${productFragmentQuery}
`;
const getCheckoutQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query Checkout($id: ID!) {
    node(id: $id) {
      ...CheckoutFragment
    }
  }
  ${_mutations__WEBPACK_IMPORTED_MODULE_2__["CheckoutFragment"]}
`;

/***/ }),

/***/ "./helpers/cookie.js":
/*!***************************!*\
  !*** ./helpers/cookie.js ***!
  \***************************/
/*! exports provided: parseCookies, setCookie, destroyCookie, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookies", function() { return parseCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyCookie", function() { return destroyCookie; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);


function parseCookies(ctx = {}, options = {}) {
  if (ctx.req && ctx.req.headers.cookie) {
    return cookie__WEBPACK_IMPORTED_MODULE_1___default.a.parse(ctx.req.headers.cookie, options);
  }

  if (false) {}

  return {};
}
function setCookie(ctx = {}, name, value, options = {}) {
  if (ctx && ctx.res) {
    let cookies = ctx.res.getHeader("Set-Cookie") || [];

    if (typeof cookies === "string") {
      cookies = [cookies];
    }

    cookies.push(cookie__WEBPACK_IMPORTED_MODULE_1___default.a.serialize(name, value, options));
    ctx.res.setHeader("Set-Cookie", cookies);
  }

  if (false) {}

  return {};
}
function destroyCookie(ctx = {}, name, options = {}) {
  if (ctx && ctx.res) {
    let cookies = ctx.res.getHeader("set-cookie") || [];

    if (typeof cookies === "string") {
      cookies = [cookies];
    }

    cookies.push(cookie__WEBPACK_IMPORTED_MODULE_1___default.a.serialize(name, "", _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, options, {
      maxAge: -1
    })));
    ctx.res.setHeader("Set-Cookie", cookies);
  }

  if (false) {}

  return {};
}
/* harmony default export */ __webpack_exports__["default"] = ({
  set: (ctx, name, value, options = {}) => {
    setCookie(ctx, name, value, options);
  },
  get: (ctx, options) => parseCookies(ctx, options),
  destroy: (ctx, name, options = {}) => destroyCookie(ctx, name, options)
});

/***/ }),

/***/ "./helpers/getCheckoutTotals.js":
/*!**************************************!*\
  !*** ./helpers/getCheckoutTotals.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (checkout => {
  return [{
    label: "Subtotal",
    value: `${checkout.subtotalPrice} ${checkout.currencyCode}`
  }, {
    label: "Tax",
    value: `${checkout.totalTax} ${checkout.currencyCode}`
  }, {
    label: "Total",
    isTotal: true,
    value: `${checkout.totalPrice} ${checkout.currencyCode}`
  }];
});

/***/ }),

/***/ "./helpers/mapCheckoutItem.js":
/*!************************************!*\
  !*** ./helpers/mapCheckoutItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");

/* harmony default export */ __webpack_exports__["default"] = (item => {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.node, {
    price: item.node.variant.priceV2,
    productVariant: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item.node.variant, {
      product: {
        href: "url",
        title: item.node.title,
        images: [{
          src: [{
            w: 300,
            h: 400,
            url: item.node.variant.image.src
          }]
        }]
      }
    })
  });
});

/***/ }),

/***/ "./helpers/mapCheckoutItems.js":
/*!*************************************!*\
  !*** ./helpers/mapCheckoutItems.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapCheckoutItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapCheckoutItem */ "./helpers/mapCheckoutItem.js");

/* harmony default export */ __webpack_exports__["default"] = (lineItems => lineItems.edges.map(_mapCheckoutItem__WEBPACK_IMPORTED_MODULE_0__["default"]));

/***/ }),

/***/ "./helpers/routerPush.js":
/*!*******************************!*\
  !*** ./helpers/routerPush.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((arg1, arg2) => {
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(arg1, arg2).then(() => window.scrollTo(0, 0));
});

/***/ }),

/***/ "./lib/CheckoutContext.js":
/*!********************************!*\
  !*** ./lib/CheckoutContext.js ***!
  \********************************/
/*! exports provided: InjectCheckoutContext, CheckoutContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectCheckoutContext", function() { return InjectCheckoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutContext", function() { return CheckoutContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/lib/CheckoutContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const CheckoutContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

const InjectCheckoutContext = props => {
  const {
    0: checkout,
    1: setCheckout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.checkout);
  return __jsx(CheckoutContext.Provider, {
    value: {
      checkout,
      setCheckout
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.children);
};



/***/ }),

/***/ "./lib/init-apollo.js":
/*!****************************!*\
  !*** ./lib/init-apollo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);


let apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (true) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default.a;
}

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    link: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
      uri: "https://biggest-ecommerce.myshopify.com/api/graphql",
      // Server URL (must be absolute)
      headers: {
        "X-Shopify-Storefront-Access-Token": "7a415603317462ae8c7e4f98be2c5b5e"
      }
    }),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {}),
    clientState: {
      defaults: {},
      resolvers: {}
    }
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/with-apollo-client.js":
/*!***********************************!*\
  !*** ./lib/with-apollo-client.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _init_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init-apollo */ "./lib/init-apollo.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-ssr */ "@apollo/react-ssr");
/* harmony import */ var _apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/lib/with-apollo-client.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (App => {
  return class Apollo extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
    static async getInitialProps(ctx) {
      const {
        Component,
        router
      } = ctx;
      const apollo = Object(_init_apollo__WEBPACK_IMPORTED_MODULE_3__["default"])();
      let appProps = {};

      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx, apollo);
      }

      const url = {
        pathname: ctx.pathname,
        query: ctx.query
      }; // Run all GraphQL queries in the component tree
      // and extract the resulting data

      if (true) {
        try {
          // Run all GraphQL queries
          await Object(_apollo_react_ssr__WEBPACK_IMPORTED_MODULE_5__["getMarkupFromTree"])(__jsx(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, appProps, {
            Component: Component,
            router: router,
            apolloClient: apollo,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          })));
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error("Error while running `getMarkupFromTree`", error);
        } // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually


        next_head__WEBPACK_IMPORTED_MODULE_4___default.a.rewind();
      } // Extract query data from the Apollo store


      const apolloState = apollo.cache.extract();
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, appProps, {
        apolloState,
        url
      });
    }

    constructor(props) {
      super(props);
      this.apolloClient = Object(_init_apollo__WEBPACK_IMPORTED_MODULE_3__["default"])(props.apolloState);
    }

    render() {
      return __jsx(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
        apolloClient: this.apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }));
    }

  };
});

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commerce-ui/core/Grid */ "@commerce-ui/core/Grid");
/* harmony import */ var _commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @commerce-ui/core/Root */ "@commerce-ui/core/Root");
/* harmony import */ var _commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_MainTabBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MainTabBar */ "./components/MainTabBar/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/with-apollo-client */ "./lib/with-apollo-client.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_MenuDesktop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MenuDesktop */ "./components/MenuDesktop/index.js");
/* harmony import */ var _commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @commerce-ui/core/Device */ "@commerce-ui/core/Device");
/* harmony import */ var _commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var _helpers_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../helpers/cookie */ "./helpers/cookie.js");
/* harmony import */ var _actions_fetchCheckout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions/fetchCheckout */ "./actions/fetchCheckout.js");
/* harmony import */ var _actions_createEmptyCheckout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions/createEmptyCheckout */ "./actions/createEmptyCheckout.js");
/* harmony import */ var _lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../lib/CheckoutContext */ "./lib/CheckoutContext.js");
/* harmony import */ var _helpers_routerPush__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../helpers/routerPush */ "./helpers/routerPush.js");


var _jsxFileName = "/Users/andrzej/Projects/storefront-ui/demo/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









/** @jsx jsx */











const tabs = [{
  label: "Home",
  icon: "home"
}, {
  label: "Menu",
  icon: "menu"
}, {
  label: "Favs",
  icon: "favs"
}, {
  label: "Basket",
  icon: "basket"
}, {
  label: "Profile",
  icon: "profile"
}];
const menuData = [{
  label: "Home",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_12__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_15__["default"].categories[0],
    index: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })
}, {
  label: "Beauty",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_12__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_15__["default"].categories[1],
    index: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  })
}, {
  label: "Food",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_12__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_15__["default"].categories[2],
    index: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })
}, {
  label: "Health",
  href: "/category",
  content: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_12__["MenuDesktopContent"], {
    category: _data__WEBPACK_IMPORTED_MODULE_15__["default"].categories[3],
    index: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  })
}];

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static async getInitialProps({
    Component,
    ctx
  }, apollo) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const checkout = await MyApp.createCheckout(apollo, ctx);
    return {
      pageProps,
      noRoot: ctx.query.noRoot !== undefined,
      checkout
    };
  }

  static async createCheckout(client, ctx) {
    if (client.cache.data.data.Checkout) {
      return client.cache.data.data.Checkout;
    }

    if (!client.cache.data.data.Checkout && Object(_helpers_cookie__WEBPACK_IMPORTED_MODULE_16__["parseCookies"])(ctx).checkoutId) {
      const {
        data
      } = await Object(_actions_fetchCheckout__WEBPACK_IMPORTED_MODULE_17__["default"])(client, Object(_helpers_cookie__WEBPACK_IMPORTED_MODULE_16__["parseCookies"])(ctx).checkoutId);
      return data.node;
    }

    const {
      data
    } = await Object(_actions_createEmptyCheckout__WEBPACK_IMPORTED_MODULE_18__["default"])(client);
    Object(_helpers_cookie__WEBPACK_IMPORTED_MODULE_16__["setCookie"])(ctx, "checkoutId", data.checkoutCreate.checkout.id);
    return data.checkoutCreate.checkout;
  }

  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "state", {});
  }

  render() {
    const {
      Component,
      pageProps,
      apolloClient
    } = this.props;
    const content = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }));
    const showTabbar = Component.tabbar !== undefined && !this.props.noRoot;
    const hideDesktopMenu = Component.hideDesktopMenu === true;
    const desktopMenuTransparentAtTop = Component.desktopMenuTransparentAtTop === true;
    const showFooterOnMobile = Component.showFooterOnMobile === true;
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_lib_CheckoutContext__WEBPACK_IMPORTED_MODULE_19__["InjectCheckoutContext"], {
      checkout: this.props.checkout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
      client: apolloClient,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["ApolloProvider"], {
      client: apolloClient,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_commerce_ui_core_Root__WEBPACK_IMPORTED_MODULE_6___default.a, {
      theme: _theme__WEBPACK_IMPORTED_MODULE_5__["theme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_commerce_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["GridDebugger"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_13___default.a, {
      mobile: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, showTabbar && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_11__["css"]`
                        margin-bottom: 50px;
                      `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, content, showFooterOnMobile && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_11__["css"]`
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                      `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_MainTabBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
      data: tabs,
      active: Component.tabbar,
      onChange: index => {
        if (index === 0) {
          Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_20__["default"])("/");
        } else if (index === 1) {
          Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_20__["default"])("/menu");
        } else if (index === 2) {
          Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_20__["default"])("/wishlist");
        } else if (index === 3) {
          Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_20__["default"])("/cart");
        } else if (index === 4) {
          Object(_helpers_routerPush__WEBPACK_IMPORTED_MODULE_20__["default"])("/profile");
        }
      },
      scrollable: false,
      align: "fit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }))), !showTabbar && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, content, showFooterOnMobile && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_commerce_ui_core_Device__WEBPACK_IMPORTED_MODULE_13___default.a, {
      desktop: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, hideDesktopMenu && content, !hideDesktopMenu && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_MenuDesktop__WEBPACK_IMPORTED_MODULE_12__["default"], {
      data: menuData,
      mode: "fixed",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])("div", {
      css: _emotion_core__WEBPACK_IMPORTED_MODULE_11__["css"]`
                        padding-top: 70px;
                      `,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, content, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_components_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_10__["default"])(MyApp));

/***/ }),

/***/ "./svg/account.svg":
/*!*************************!*\
  !*** ./svg/account.svg ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12 10.182a4.097 4.097 0 004.09-4.091A4.097 4.097 0 0012 2a4.096 4.096 0 00-4.09 4.09A4.096 4.096 0 0012 10.183zm0-6.546a2.458 2.458 0 012.455 2.455A2.458 2.458 0 0112 8.545a2.458 2.458 0 01-2.455-2.454A2.458 2.458 0 0112 3.636zm0 8.182c-4.964 0-9 4.037-9 9v.273h1.636v-.273c0-4.063 3.304-7.367 7.364-7.367 4.061 0 7.364 3.304 7.364 7.367v.273H21v-.273c0-4.963-4.036-9-9-9z"
});

var SvgAccount = function SvgAccount(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgAccount);

/***/ }),

/***/ "./svg/bin.svg":
/*!*********************!*\
  !*** ./svg/bin.svg ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"
});

var SvgBin = function SvgBin(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgBin);

/***/ }),

/***/ "./svg/cart.svg":
/*!**********************!*\
  !*** ./svg/cart.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M15.844 8.177v-.29C15.844 4.282 13.856 3 12 3c-1.856 0-3.842 1.283-3.842 4.886v.29H3v12.571h18V8.175l-5.156.002zM12 4.591c1.437 0 2.261 1.2 2.261 3.295v.29H9.74v-.29c0-2.093.826-3.295 2.26-3.295zM4.7 9.722h3.459v1.255H9.74V9.724h4.52v1.253h1.582V9.724h3.46V19.2H4.7V9.722z"
});

var SvgCart = function SvgCart(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgCart);

/***/ }),

/***/ "./svg/heart.svg":
/*!***********************!*\
  !*** ./svg/heart.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M7.776 5.508c2.716 0 4.224 3.47 4.224 3.47s1.508-3.47 4.224-3.47c.307.004.612.055.905.151a3.319 3.319 0 011.81 1.509 5.129 5.129 0 01-.151 4.977A26.548 26.548 0 0112 18.783a26.699 26.699 0 01-6.788-6.638 5.129 5.129 0 01-.15-4.826 3.319 3.319 0 011.81-1.509c.283-.148.589-.25.904-.302zM16.224 4A5.43 5.43 0 0012 6.413 5.43 5.43 0 007.776 4a4.525 4.525 0 00-1.508.302 4.827 4.827 0 00-2.564 2.262 6.637 6.637 0 00.301 6.487C6.268 16.82 12 20.593 12 20.593s5.732-3.771 7.995-7.542a6.637 6.637 0 00.301-6.487 4.827 4.827 0 00-2.715-2.262A4.525 4.525 0 0016.073 4h.15z"
});

var SvgHeart = function SvgHeart(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgHeart);

/***/ }),

/***/ "./svg/home.svg":
/*!**********************!*\
  !*** ./svg/home.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10.415 15.225V21H3V9.429l8.475-6.016a1 1 0 011.163.004L21 9.429V21h-7.506v-5.775a.1.1 0 00-.1-.1h-2.879a.1.1 0 00-.1.1zm-1.5 0a1.6 1.6 0 011.6-1.6h2.879a1.6 1.6 0 011.6 1.6V19.5H19.5v-9.302l-7.448-5.355-7.552 5.36V19.5h4.415v-4.275z"
});

var SvgHome = function SvgHome(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgHome);

/***/ }),

/***/ "./svg/menu.svg":
/*!**********************!*\
  !*** ./svg/menu.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M3 11.545h18v1.637H3v-1.637zM3 5h18v1.636H3V5zm0 13.09h18v1.637H3v-1.636z"
});

var SvgMenu = function SvgMenu(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgMenu);

/***/ }),

/***/ "./svg/minus.svg":
/*!***********************!*\
  !*** ./svg/minus.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19 13H5v-2h14v2z"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var SvgMinus = function SvgMinus(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgMinus);

/***/ }),

/***/ "./svg/plus.svg":
/*!**********************!*\
  !*** ./svg/plus.svg ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var SvgPlus = function SvgPlus(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgPlus);

/***/ }),

/***/ "./svg/search.svg":
/*!************************!*\
  !*** ./svg/search.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M10.86 3c4.334 0 7.86 3.526 7.86 7.86a7.84 7.84 0 01-1.764 4.946L21 19.85l-1.15 1.149-4.043-4.044a7.844 7.844 0 01-4.947 1.765C6.526 18.72 3 15.194 3 10.86 3 6.526 6.526 3 10.86 3zm0 14.094a6.242 6.242 0 006.234-6.234 6.242 6.242 0 00-6.234-6.234 6.242 6.242 0 00-6.234 6.234 6.242 6.242 0 006.234 6.234z"
});

var SvgSearch = function SvgSearch(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgSearch);

/***/ }),

/***/ "./svg/x.svg":
/*!*******************!*\
  !*** ./svg/x.svg ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
});

var _ref3 =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var SvgX = function SvgX(_ref) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, ["title"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, title), _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgX);

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: theme, C, F, S, L, R */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @commerce-ui/core/Theme */ "@commerce-ui/core/Theme");
/* harmony import */ var _commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commerce_ui_core_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @commerce-ui/core/Layout */ "@commerce-ui/core/Layout");
/* harmony import */ var _commerce_ui_core_Layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commerce-ui/core/Font */ "@commerce-ui/core/Font");
/* harmony import */ var _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commerce_ui_core_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commerce-ui/core/Color */ "@commerce-ui/core/Color");
/* harmony import */ var _commerce_ui_core_Color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_commerce_ui_core_Color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! responsive-helpers */ "responsive-helpers");
/* harmony import */ var responsive_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "R", function() { return responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["R"]; });






const layout = new _commerce_ui_core_Layout__WEBPACK_IMPORTED_MODULE_1___default.a({
  container: {
    xs: "90vw",
    1921: 1680
  },
  gutter: 16,
  colNumber: 24
});
const primaryColor = new _commerce_ui_core_Color__WEBPACK_IMPORTED_MODULE_3___default.a("#1aa77d");
const theme = Object(_commerce_ui_core_Theme__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({
  layout: layout,
  borders: {
    useRoundedCorners: false
  },
  fonts: {
    body1: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(16, 16).css("font-size")}
    font-weight: 400;
  `),
    body2: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(14, 14).css("font-size")}
    font-weight: 400;
  `),
    h6: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(20, 20).css("font-size")}
    font-weight: 600;
  `),
    h5: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(20, 24).css("font-size")}
    font-weight: 500;
  `),
    h4: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(22, 34).css("font-size")}
    font-weight: 600;
  `),
    h3: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(24, 48).css("font-size")}
    font-weight: 600;
  `),
    h2: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(28, 60).css("font-size")}
    font-weight: 600;
  `),
    h1: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    font-size: 96px;
    font-weight: 600;
  `),
    caption1: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(12, 12).css("font-size")}
    font-weight: 400;
  `),
    caption2: new _commerce_ui_core_Font__WEBPACK_IMPORTED_MODULE_2___default.a(`
    font-family: sans-serif;
    ${Object(responsive_helpers__WEBPACK_IMPORTED_MODULE_4__["rslin"])(10, 10).css("font-size")}
    font-weight: 400;
  `)
  },
  notifications: {
    topLeft: {
      x: layout.margin,
      y: 70 + 16,
      spacer: 16,
      width: 350
    },
    topRight: {
      x: layout.margin,
      y: 70 + 16,
      spacer: 16,
      width: 350
    }
  },
  forms: {
    inputBorderRadius: "4px",
    inputBoxShadowFocused: "none",
    inputBoxShadowErrorFocused: "none"
  },
  colors: {
    primary: primaryColor
  }
});
const C = theme.colors;
const F = theme.fonts;
const S = theme.spacings;
const L = theme.layout;


/***/ }),

/***/ "./utils/randomInt.js":
/*!****************************!*\
  !*** ./utils/randomInt.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* harmony default export */ __webpack_exports__["default"] = (randomInt);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@apollo/react-ssr":
/*!************************************!*\
  !*** external "@apollo/react-ssr" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "@commerce-ui/core/Button":
/*!*******************************************!*\
  !*** external "@commerce-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Button");

/***/ }),

/***/ "@commerce-ui/core/ButtonRaw":
/*!**********************************************!*\
  !*** external "@commerce-ui/core/ButtonRaw" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/ButtonRaw");

/***/ }),

/***/ "@commerce-ui/core/CheckoutLineItemRow":
/*!********************************************************!*\
  !*** external "@commerce-ui/core/CheckoutLineItemRow" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/CheckoutLineItemRow");

/***/ }),

/***/ "@commerce-ui/core/Color":
/*!******************************************!*\
  !*** external "@commerce-ui/core/Color" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Color");

/***/ }),

/***/ "@commerce-ui/core/Container":
/*!**********************************************!*\
  !*** external "@commerce-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Container");

/***/ }),

/***/ "@commerce-ui/core/Device":
/*!*******************************************!*\
  !*** external "@commerce-ui/core/Device" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Device");

/***/ }),

/***/ "@commerce-ui/core/Divider":
/*!********************************************!*\
  !*** external "@commerce-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Divider");

/***/ }),

/***/ "@commerce-ui/core/Font":
/*!*****************************************!*\
  !*** external "@commerce-ui/core/Font" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Font");

/***/ }),

/***/ "@commerce-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@commerce-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/FormControl");

/***/ }),

/***/ "@commerce-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@commerce-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Grid");

/***/ }),

/***/ "@commerce-ui/core/Image":
/*!******************************************!*\
  !*** external "@commerce-ui/core/Image" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Image");

/***/ }),

/***/ "@commerce-ui/core/Input":
/*!******************************************!*\
  !*** external "@commerce-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Input");

/***/ }),

/***/ "@commerce-ui/core/Layout":
/*!*******************************************!*\
  !*** external "@commerce-ui/core/Layout" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Layout");

/***/ }),

/***/ "@commerce-ui/core/LayoutLeftCenterRight":
/*!**********************************************************!*\
  !*** external "@commerce-ui/core/LayoutLeftCenterRight" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/LayoutLeftCenterRight");

/***/ }),

/***/ "@commerce-ui/core/LayoutRow":
/*!**********************************************!*\
  !*** external "@commerce-ui/core/LayoutRow" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/LayoutRow");

/***/ }),

/***/ "@commerce-ui/core/Ledger":
/*!*******************************************!*\
  !*** external "@commerce-ui/core/Ledger" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Ledger");

/***/ }),

/***/ "@commerce-ui/core/MenuDesktop":
/*!************************************************!*\
  !*** external "@commerce-ui/core/MenuDesktop" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/MenuDesktop");

/***/ }),

/***/ "@commerce-ui/core/Modal":
/*!******************************************!*\
  !*** external "@commerce-ui/core/Modal" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Modal");

/***/ }),

/***/ "@commerce-ui/core/Root":
/*!*****************************************!*\
  !*** external "@commerce-ui/core/Root" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Root");

/***/ }),

/***/ "@commerce-ui/core/TabBar":
/*!*******************************************!*\
  !*** external "@commerce-ui/core/TabBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/TabBar");

/***/ }),

/***/ "@commerce-ui/core/Theme":
/*!******************************************!*\
  !*** external "@commerce-ui/core/Theme" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/Theme");

/***/ }),

/***/ "@commerce-ui/core/base/styles":
/*!************************************************!*\
  !*** external "@commerce-ui/core/base/styles" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/base/styles");

/***/ }),

/***/ "@commerce-ui/core/useScrollDirection":
/*!*******************************************************!*\
  !*** external "@commerce-ui/core/useScrollDirection" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/useScrollDirection");

/***/ }),

/***/ "@commerce-ui/core/useScrollSegment":
/*!*****************************************************!*\
  !*** external "@commerce-ui/core/useScrollSegment" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/useScrollSegment");

/***/ }),

/***/ "@commerce-ui/core/utils/Money":
/*!************************************************!*\
  !*** external "@commerce-ui/core/utils/Money" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@commerce-ui/core/utils/Money");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "imgix-core-js":
/*!********************************!*\
  !*** external "imgix-core-js" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("imgix-core-js");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "responsive-helpers":
/*!*************************************!*\
  !*** external "responsive-helpers" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("responsive-helpers");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map