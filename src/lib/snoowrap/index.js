'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return _arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$2.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$2.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = _basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f';
var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange = '\\u20d0-\\u20ff';
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f';
var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsDingbatRange = '\\u2700-\\u27bf';
var rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
var rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
var rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
var rsPunctuationRange = '\\u2000-\\u206f';
var rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
var rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
var rsVarRange = '\\ufe0e\\ufe0f';
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos$1 = "['\u2019]";
var rsBreak = '[' + rsBreakRange + ']';
var rsCombo$1 = '[' + rsComboRange$1 + ']';
var rsDigits = '\\d+';
var rsDingbat = '[' + rsDingbatRange + ']';
var rsLower = '[' + rsLowerRange + ']';
var rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsUpper = '[' + rsUpperRange + ']';
var rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')';
var rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')';
var rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?';
var rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?';
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange + ']?';
var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)';
var rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }
  return string.match(pattern) || [];
}

var words_1 = words;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;

/**
 * Converts `string` to
 * [snake case](https://en.wikipedia.org/wiki/Snake_case).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Foo Bar');
 * // => 'foo_bar'
 *
 * _.snakeCase('fooBar');
 * // => 'foo_bar'
 *
 * _.snakeCase('--FOO-BAR--');
 * // => 'foo_bar'
 */
var snakeCase = _createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

var snakeCase_1 = snakeCase;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto$6 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$4).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$5.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$6.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array$1 = _root.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$11.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$8.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set$1 = _getNative(_root, 'Set');

var _Set = Set$1;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]';
var objectTag$2 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var objectTag$1 = '[object Object]';

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$1 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$1 : othTag;

  var objIsObj = objTag == objectTag$1,
      othIsObj = othTag == objectTag$1,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$1)) {
    var objIsWrapped = objIsObj && hasOwnProperty$7.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$7.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

var negate_1 = negate;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$12.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$9.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$10.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn$1;

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap(_getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee(predicate);
  return _basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

var pickBy_1 = pickBy;

/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */
function omitBy(object, predicate) {
  return pickBy_1(object, negate_1(_baseIteratee(predicate)));
}

var omitBy_1 = omitBy;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, keysIn_1(source), object);
}

var _baseAssignIn = baseAssignIn;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

var _copySymbolsIn = copySymbolsIn;

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$11.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

var _addMapEntry = addMapEntry;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$2 = 1;

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_mapToArray(map), CLONE_DEEP_FLAG$2) : _mapToArray(map);
  return _arrayReduce(array, _addMapEntry, new map.constructor);
}

var _cloneMap = cloneMap;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

var _addSetEntry = addSetEntry;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$3 = 1;

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_setToArray(set), CLONE_DEEP_FLAG$3) : _setToArray(set);
  return _arrayReduce(array, _addSetEntry, new set.constructor);
}

var _cloneSet = cloneSet;

/** Used to convert symbols to primitives and strings. */
var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/** `Object#toString` result references. */
var boolTag$3 = '[object Boolean]';
var dateTag$3 = '[object Date]';
var mapTag$4 = '[object Map]';
var numberTag$3 = '[object Number]';
var regexpTag$3 = '[object RegExp]';
var setTag$4 = '[object Set]';
var stringTag$3 = '[object String]';
var symbolTag$3 = '[object Symbol]';

var arrayBufferTag$3 = '[object ArrayBuffer]';
var dataViewTag$4 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return _cloneArrayBuffer(object);

    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);

    case dataViewTag$4:
      return _cloneDataView(object, isDeep);

    case float32Tag$2: case float64Tag$2:
    case int8Tag$2: case int16Tag$2: case int32Tag$2:
    case uint8Tag$2: case uint8ClampedTag$2: case uint16Tag$2: case uint32Tag$2:
      return _cloneTypedArray(object, isDeep);

    case mapTag$4:
      return _cloneMap(object, isDeep, cloneFunc);

    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);

    case regexpTag$3:
      return _cloneRegExp(object);

    case setTag$4:
      return _cloneSet(object, isDeep, cloneFunc);

    case symbolTag$3:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1;
var CLONE_FLAT_FLAG$1 = 2;
var CLONE_SYMBOLS_FLAG$1 = 4;

/** `Object#toString` result references. */
var argsTag$3 = '[object Arguments]';
var arrayTag$2 = '[object Array]';
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var errorTag$2 = '[object Error]';
var funcTag$2 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var objectTag$3 = '[object Object]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$2 = '[object Symbol]';
var weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] =
cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] =
cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$3] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] =
cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] =
cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG$1,
      isFlat = bitmask & CLONE_FLAT_FLAG$1,
      isFull = bitmask & CLONE_SYMBOLS_FLAG$1;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$3 || tag == argsTag$3 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? keysIn : keys_1);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}

var _baseUnset = baseUnset;

/** `Object#toString` result references. */
var objectTag$4 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;
var objectProto$15 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$15.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$4) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$12.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject_1(value) ? undefined : value;
}

var _customOmitClone = customOmitClone;

/** Built-in value references. */
var spreadableSymbol = _Symbol ? _Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray_1(value) || isArguments_1(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

var _isFlattenable = isFlattenable;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

var _baseFlatten = baseFlatten;

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? _baseFlatten(array, 1) : [];
}

var flatten_1 = flatten;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return _setToString(_overRest(func, undefined, flatten_1), func + '');
}

var _flatRest = flatRest;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = _flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = _arrayMap(paths, function(path) {
    path = _castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  _copyObject(object, _getAllKeysIn(object), result);
  if (isDeep) {
    result = _baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, _customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    _baseUnset(result, paths[length]);
  }
  return result;
});

var omit_1 = omit;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee, 3);

  _baseForOwn(object, function(value, key, object) {
    _baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

var mapValues_1 = mapValues;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee, 3));
}

var map_1 = map;

/** `Object#toString` result references. */
var mapTag$5 = '[object Map]';
var setTag$5 = '[object Set]';

/** Used for built-in method references. */
var objectProto$16 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$13 = objectProto$16.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag$5 || tag == setTag$5) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty$13.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

/** `Object#toString` result references. */
var stringTag$4 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$4);
}

var isString_1 = isString;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Used as references for various `Number` constants. */
var INFINITY$2 = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_1(collection) ? collection : values_1(collection);
  fromIndex = (fromIndex && !guard) ? toInteger_1(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax$1(length + fromIndex, 0);
  }
  return isString_1(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && _baseIndexOf(collection, value, fromIndex) > -1);
}

var includes_1 = includes;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && _baseForOwn(object, _castFunction(iteratee));
}

var forOwn_1 = forOwn;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = _createAssigner(function(object, source, srcIndex, customizer) {
  _copyObject(source, keysIn_1(source), object, customizer);
});

var assignInWith_1 = assignInWith;

/** Used for built-in method references. */
var objectProto$17 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$14 = objectProto$17.hasOwnProperty;

/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsAssignIn(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq_1(objValue, objectProto$17[key]) && !hasOwnProperty$14.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

var _customDefaultsAssignIn = customDefaultsAssignIn;

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = _baseRest(function(args) {
  args.push(undefined, _customDefaultsAssignIn);
  return _apply(assignInWith_1, undefined, args);
});

var defaults_1 = defaults;

var bluebird = createCommonjsModule(function (module, exports) {
/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2017 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.5.0
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){module.exports=e();}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r);}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");
var util = _dereq_("./util");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.enableTrampoline = function() {
    this._trampolineEnabled = true;
};

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise._isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent._isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            promise._setWillBeCancelled();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this._isCancellable()) return;
    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype._isCancellable = function() {
    return this.isPending() && !this._isCancelled();
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this._isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context) {
var getDomain = Promise._getDomain;
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ?
                                            fn : util.domainBind(domain, fn))
                                 : undefined;
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Context.deactivateLongStackTraces();
            async.enableTrampoline();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Context.activateLongStackTraces();
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};

var fireDomEvent = (function() {
    try {
        if (typeof CustomEvent === "function") {
            var event = new CustomEvent("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new CustomEvent(name.toLowerCase(), {
                    detail: event,
                    cancelable: true
                });
                return !util.global.dispatchEvent(domEvent);
            };
        } else if (typeof Event === "function") {
            var event = new Event("CustomEvent");
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = new Event(name.toLowerCase(), {
                    cancelable: true
                });
                domEvent.detail = event;
                return !util.global.dispatchEvent(domEvent);
            };
        } else {
            var event = document.createEvent("CustomEvent");
            event.initCustomEvent("testingtheevent", false, true, {});
            util.global.dispatchEvent(event);
            return function(name, event) {
                var domEvent = document.createEvent("CustomEvent");
                domEvent.initCustomEvent(name.toLowerCase(), false, true,
                    event);
                return !util.global.dispatchEvent(domEvent);
            };
        }
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
    return Promise;
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) {  };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    
    
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this._isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var handlerLine = "";
        var creatorLine = "";
        if (promiseCreated._trace) {
            var traceLines = promiseCreated._trace.stack.split("\n");
            var stack = cleanStack(traceLines);
            for (var i = stack.length - 1; i >= 0; --i) {
                var line = stack[i];
                if (!nodeFramePattern.test(line)) {
                    var lineMatches = line.match(parseLinePattern);
                    if (lineMatches) {
                        handlerLine  = "at " + lineMatches[1] +
                            ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
                    }
                    break;
                }
            }

            if (stack.length > 0) {
                var firstUserLine = stack[0];
                for (var i = 0; i < traceLines.length; ++i) {

                    if (traceLines[i] === firstUserLine) {
                        if (i > 0) {
                            creatorLine = "\n" + traceLines[i - 1];
                        }
                        break;
                    }
                }

            }
        }
        var msg = "a promise was created in a " + name +
            "handler " + handlerLine + "but was not returned from it, " +
            "see http://goo.gl/rRqMUw" +
            creatorLine;
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0 && error.name != "SyntaxError") {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: error.name == "SyntaxError" ? stack : cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, 0)
              ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};


},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise, NEXT_FILTER) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret === NEXT_FILTER) {
            return ret;
        } else if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise._isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};


Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

Promise.prototype.tapCatch = function (handlerOrPredicate) {
    var len = arguments.length;
    if(len === 1) {
        return this._passThrough(handlerOrPredicate,
                                 1,
                                 undefined,
                                 finallyHandler);
    } else {
         var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return Promise.reject(new TypeError(
                    "tapCatch statement predicate: "
                    + "expecting an object but got " + util.classString(item)
                ));
            }
        }
        catchInstances.length = j;
        var handler = arguments[i];
        return this._passThrough(catchFilter(catchInstances, handler, this),
                                 1,
                                 undefined,
                                 finallyHandler);
    }

};

return PassThroughHandlerContext;
};

},{"./catch_filter":7,"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", String(value)) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            Promise._async.invoke(
                this._promiseFulfilled, this, maybePromise._value()
            );
        } else if (((bitField & 16777216) !== 0)) {
            Promise._async.invoke(
                this._promiseRejected, this, maybePromise._reason()
            );
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async,
         getDomain) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        var ret;


    }
    var args = [].slice.call(arguments);
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var domain = getDomain();
    this._callback = domain === null ? fn : util.domainBind(domain, fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = [];
    async.invoke(this._asyncInit, this, undefined);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._asyncInit = function() {
    this._init$(undefined, -2);
};

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;
var debug = _dereq_("./debuggability")(Promise, Context);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise, NEXT_FILTER);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (self == null || self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }

}

function Promise(executor) {
    if (executor !== INTERNAL) {
        check(this, executor);
    }
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._resolveFromExecutor(executor);
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("Catch statement predicate: " +
                    "expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var domain = getDomain();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: domain === null ? handler
                : (typeof handler === "function" &&
                    util.domainBind(domain, handler)),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setWillBeCancelled = function() {
    this._bitField = this._bitField | 8388608;
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : util.domainBind(domain, fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : util.domainBind(domain, reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);

    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    if (executor === INTERNAL) return;
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
Promise.Promise = Promise;
Promise.version = "3.5.0";
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./call_get.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./filter.js')(Promise, INTERNAL);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    case -6: return new Map();
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise._isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, isMap ? -6 : -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var domain = getDomain();
    this._fn = domain === null ? fn : util.domainBind(domain, fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    if(_each === INTERNAL) {
        this._eachValues = Array(this._length);
    } else if (_each === 0) {
        this._eachValues = null;
    } else {
        this._eachValues = undefined;
    }
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined && 
        this._eachValues !== null && 
        accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    if (this._eachValues !== null) {
        this._eachValues.push(value);
    }
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };
            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = commonjsGlobal.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(commonjsGlobal, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function" &&
           typeof NativePromise.resolve === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            (window.navigator.standalone || window.cordova))) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
            toggleScheduled = true;
            div2.classList.toggle("foo");
        };

        return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled = function() {
    return (this._bitField & 8454144) !== 0;
};

Promise.prototype.__isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype._isCancelled = function() {
    return this._target().__isCancelled();
};

Promise.prototype.isCancelled = function() {
    return (this._target()._bitField & 8454144) !== 0;
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
        ret._captureStackTrace();
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof commonjsGlobal !== "undefined" ? commonjsGlobal :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var l = 8;
    while (l--) new FakeConstructor();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string";
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

var hasEnvVariables = typeof process !== "undefined" &&
    typeof process.env !== "undefined";

function env(key) {
    return hasEnvVariables ? process.env[key] : undefined;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if ({}.toString.call(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

function domainBind(self, cb) {
    return self.bind(cb);
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: isNode,
    hasEnvVariables: hasEnvVariables,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise,
    domainBind: domainBind
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13}]},{},[4])(4)
});                    if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
});

var _Promise$2 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _bluebird2 = _interopRequireDefault(bluebird);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var PromiseCopy = _bluebird2.default.getNewLibraryCopy();
  PromiseCopy.config({ cancellation: true, warnings: false });
  exports.default = PromiseCopy;
});

var empty = {};


var empty$1 = Object.freeze({
	default: empty
});

var require$$0 = ( empty$1 && empty ) || empty$1;

var handlers;

var wrap = function (target) {
  if (typeof target === 'object' && target && typeof target.then === 'function' && typeof Proxy !== 'undefined') {
    // The target needs to be stored internally as a function, so that it can use the `apply` and `construct` handlers.
    var targetFunc = function () {
      return target;
    };
    targetFunc._promise_chain_cache = Object.create(null);
    return new Proxy(targetFunc, handlers);
  }
  return target;
};

if (typeof Proxy !== 'undefined') {
  if (typeof Reflect === 'undefined') {
    
  }
  handlers = {
    get: function (target, property) {
      if (property === 'inspect') {
        return function () {
          return '[chainable Promise]';
        };
      }
      if (property === '_raw') {
        return target();
      }
      if (typeof property === 'symbol') {
        return target()[property];
      }
      // If the Promise itself has the property ('then', 'catch', etc.), return the property itself, bound to the target.
      // However, wrap the result of calling this function. This allows wrappedPromise.then(something) to also be wrapped.
      if (property in target()) {
        if (property !== 'constructor' && !property.startsWith('_') && typeof target()[property] === 'function') {
          return function () {
            return wrap(target()[property].apply(target(), arguments));
          };
        }
        return target()[property];
      }
      // If the property has a value in the cache, use that value.
      if (Object.prototype.hasOwnProperty.call(target._promise_chain_cache, property)) {
        return target._promise_chain_cache[property];
      }
      // If the Promise library allows synchronous inspection (bluebird, etc.), ensure that properties of resolved
      // Promises are also resolved immediately.
      if (target().isFulfilled && target().isFulfilled() && typeof target().value === 'function') {
        return wrap(target().constructor.resolve(target().value()[property]));
      }
      // Otherwise, return a promise for that property.
      // Store it in the cache so that subsequent references to that property will return the same promise.
      target._promise_chain_cache[property] = wrap(target().then(function (result) {
        if (result && (typeof result === 'object' || typeof result === 'function')) {
          return wrap(result[property]);
        }
        throw new TypeError("Promise chain rejection: Cannot read property '" + property + "' of " + result + '.');
      }));
      return target._promise_chain_cache[property];
    },
    apply: function (target, thisArg, args) {
      // If the wrapped Promise is called, return a Promise that calls the result
      return wrap(target().constructor.all([target(), thisArg]).then(function (results) {
        if (typeof results[0] === 'function') {
          return wrap(Reflect.apply(results[0], results[1], args));
        }
        throw new TypeError('Promise chain rejection: Attempted to call ' + results[0] + ' which is not a function.');
      }));
    },
    construct: function (target, args) {
      return wrap(target().then(function (result) {
        return wrap(Reflect.construct(result, args));
      }));
    }
  };

  // Make sure all other references to the proxied object refer to the promise itself, not the function wrapping it
  Object.getOwnPropertyNames(Reflect).forEach(function (handler) {
    handlers[handler] = handlers[handler] || function (target, arg1, arg2, arg3) {
      return Reflect[handler](target(), arg1, arg2, arg3);
    };
  });
}

var index = wrap;

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

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
function nextTick(fun) {
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
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process$1 = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var inherits;
if (typeof Object.create === 'function'){
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
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
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}
var inherits$1 = inherits;

// Copyright Joyent, Inc. and other Node contributors.
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
var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString$2(f)) {
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
    if (isNull(x) || !isObject$2(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
}


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process$1.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process$1.throwDeprecation) {
        throw new Error(msg);
      } else if (process$1.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}


var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process$1.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;
      debugs[set] = function() {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
}


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
    _extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}

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
      isFunction$2(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString$2(ret)) {
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
    if (isFunction$2(value)) {
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
  if (isArray$2(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction$2(value)) {
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
  if (isString$2(value)) {
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
    if (hasOwnProperty$15(value, String(i))) {
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
  if (!hasOwnProperty$15(visibleKeys, key)) {
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
function isArray$2(ar) {
  return Array.isArray(ar);
}

function isBoolean(arg) {
  return typeof arg === 'boolean';
}

function isNull(arg) {
  return arg === null;
}

function isNullOrUndefined(arg) {
  return arg == null;
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isString$2(arg) {
  return typeof arg === 'string';
}

function isSymbol$2(arg) {
  return typeof arg === 'symbol';
}

function isUndefined(arg) {
  return arg === void 0;
}

function isRegExp(re) {
  return isObject$2(re) && objectToString$2(re) === '[object RegExp]';
}

function isObject$2(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
  return isObject$2(d) && objectToString$2(d) === '[object Date]';
}

function isError(e) {
  return isObject$2(e) &&
      (objectToString$2(e) === '[object Error]' || e instanceof Error);
}

function isFunction$2(arg) {
  return typeof arg === 'function';
}

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}

function isBuffer$1(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}

function objectToString$2(o) {
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
function log() {
  console.log('%s - %s', timestamp(), format.apply(null, arguments));
}


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
function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject$2(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
}

function hasOwnProperty$15(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var util = {
  inherits: inherits$1,
  _extend: _extend,
  log: log,
  isBuffer: isBuffer$1,
  isPrimitive: isPrimitive,
  isFunction: isFunction$2,
  isError: isError,
  isDate: isDate,
  isObject: isObject$2,
  isRegExp: isRegExp,
  isUndefined: isUndefined,
  isSymbol: isSymbol$2,
  isString: isString$2,
  isNumber: isNumber,
  isNullOrUndefined: isNullOrUndefined,
  isNull: isNull,
  isBoolean: isBoolean,
  isArray: isArray$2,
  inspect: inspect,
  deprecate: deprecate,
  format: format,
  debuglog: debuglog
};


var util$1 = Object.freeze({
	format: format,
	deprecate: deprecate,
	debuglog: debuglog,
	inspect: inspect,
	isArray: isArray$2,
	isBoolean: isBoolean,
	isNull: isNull,
	isNullOrUndefined: isNullOrUndefined,
	isNumber: isNumber,
	isString: isString$2,
	isSymbol: isSymbol$2,
	isUndefined: isUndefined,
	isRegExp: isRegExp,
	isObject: isObject$2,
	isDate: isDate,
	isError: isError,
	isFunction: isFunction$2,
	isPrimitive: isPrimitive,
	isBuffer: isBuffer$1,
	log: log,
	inherits: inherits$1,
	_extend: _extend,
	default: util
});

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = object[key],
      srcValue = source[key],
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || (srcIndex && isFunction_1(objValue))) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    if (isObject_1(srcValue)) {
      stack || (stack = new _Stack);
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

var constants = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var MODULE_NAME = exports.MODULE_NAME = 'snoowrap';
  var VERSION = exports.VERSION = '1.14.1';
  var DOCS_LINK = exports.DOCS_LINK = 'https://not-an-aardvark.github.io/snoowrap/';
  var API_RULES_LINK = exports.API_RULES_LINK = 'https://github.com/reddit/reddit/wiki/API';
  /* USER_KEYS and SUBREDDIT_KEYS are keys that are replaced by RedditUser and Subreddit objects when encountered in
  `snoowrap#_populate`. `author`, `approved_by`, `banned_by`, and `subreddit` all appear in fetched Submissions, among other
  places. `user` appears in responses from the api/flairlist endpoint, and `sr` appears in responses from the `api/v1/me/karma`
  endpoint. */
  var USER_KEYS = exports.USER_KEYS = new Set(['author', 'approved_by', 'banned_by', 'user']);
  var SUBREDDIT_KEYS = exports.SUBREDDIT_KEYS = new Set(['subreddit', 'sr']);
  var KINDS = exports.KINDS = {
    t1: 'Comment',
    t2: 'RedditUser',
    t3: 'Submission',
    t4: 'PrivateMessage',
    t5: 'Subreddit',
    t6: 'Trophy',
    t8: 'PromoCampaign',
    Listing: 'Listing',
    more: 'More',
    UserList: 'UserList',
    KarmaList: 'KarmaList',
    TrophyList: 'TrophyList',
    subreddit_settings: 'SubredditSettings',
    modaction: 'ModAction',
    wikipage: 'WikiPage',
    wikipagesettings: 'WikiPageSettings',
    wikipagelisting: 'WikiPageListing',
    LiveUpdateEvent: 'LiveThread',
    LiveUpdate: 'LiveUpdate',
    LabeledMulti: 'MultiReddit'
  };
  var USERNAME_REGEX = exports.USERNAME_REGEX = /^[\w-]{1,20}$/;
  var MODERATOR_PERMISSIONS = exports.MODERATOR_PERMISSIONS = ['wiki', 'posts', 'access', 'mail', 'config', 'flair'];
  var LIVETHREAD_PERMISSIONS = exports.LIVETHREAD_PERMISSIONS = ['update', 'edit', 'manage'];
  var HTTP_VERBS = exports.HTTP_VERBS = ['delete', 'get', 'head', 'patch', 'post', 'put'];
  var IDEMPOTENT_HTTP_VERBS = exports.IDEMPOTENT_HTTP_VERBS = ['delete', 'get', 'head', 'put'];
  var MAX_TOKEN_LATENCY = exports.MAX_TOKEN_LATENCY = 10000;
  var MAX_API_INFO_AMOUNT = exports.MAX_API_INFO_AMOUNT = 100;
  var MAX_API_MORECHILDREN_AMOUNT = exports.MAX_API_MORECHILDREN_AMOUNT = 20;
  var MAX_LISTING_ITEMS = exports.MAX_LISTING_ITEMS = 100;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var errors = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StatusCodeError = exports.RequestError = exports.InvalidMethodCallError = exports.NoCredentialsError = exports.InvalidUserError = exports.RateLimitError = undefined;
  exports.rateLimitWarning = rateLimitWarning;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  } /* eslint-disable max-len */

  var RateLimitError = exports.RateLimitError = function (_Error) {
    _inherits(RateLimitError, _Error);

    function RateLimitError() {
      _classCallCheck(this, RateLimitError);

      return _possibleConstructorReturn(this, (RateLimitError.__proto__ || Object.getPrototypeOf(RateLimitError)).call(this, constants.MODULE_NAME + ' refused to continue because reddit\'s ratelimit was exceeded. For more information about reddit\'s ratelimit, please consult reddit\'s API rules at ' + constants.API_RULES_LINK + '.'));
    }

    return RateLimitError;
  }(Error);

  var InvalidUserError = exports.InvalidUserError = function (_Error2) {
    _inherits(InvalidUserError, _Error2);

    function InvalidUserError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cannot fetch information on the given user. Please be sure you have the right username.';

      _classCallCheck(this, InvalidUserError);

      return _possibleConstructorReturn(this, (InvalidUserError.__proto__ || Object.getPrototypeOf(InvalidUserError)).call(this, message));
    }

    return InvalidUserError;
  }(Error);

  var NoCredentialsError = exports.NoCredentialsError = function (_Error3) {
    _inherits(NoCredentialsError, _Error3);

    function NoCredentialsError() {
      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Missing credentials passed to ' + constants.MODULE_NAME + ' constructor. You must pass an object containing either (a) userAgent, clientId, clientSecret, and refreshToken properties, (b) userAgent and accessToken properties, or (c) userAgent, clientId, clientSecret, username, and password properties. For information, please read the docs at ' + constants.DOCS_LINK + '.';

      _classCallCheck(this, NoCredentialsError);

      return _possibleConstructorReturn(this, (NoCredentialsError.__proto__ || Object.getPrototypeOf(NoCredentialsError)).call(this, message));
    }

    return NoCredentialsError;
  }(Error);

  var InvalidMethodCallError = exports.InvalidMethodCallError = function (_Error4) {
    _inherits(InvalidMethodCallError, _Error4);

    function InvalidMethodCallError() {
      _classCallCheck(this, InvalidMethodCallError);

      return _possibleConstructorReturn(this, (InvalidMethodCallError.__proto__ || Object.getPrototypeOf(InvalidMethodCallError)).apply(this, arguments));
    }

    return InvalidMethodCallError;
  }(Error);

  var RequestError = exports.RequestError = function (_Error5) {
    _inherits(RequestError, _Error5);

    function RequestError() {
      _classCallCheck(this, RequestError);

      return _possibleConstructorReturn(this, (RequestError.__proto__ || Object.getPrototypeOf(RequestError)).apply(this, arguments));
    }

    return RequestError;
  }(Error);

  var StatusCodeError = exports.StatusCodeError = function (_Error6) {
    _inherits(StatusCodeError, _Error6);

    function StatusCodeError() {
      _classCallCheck(this, StatusCodeError);

      return _possibleConstructorReturn(this, (StatusCodeError.__proto__ || Object.getPrototypeOf(StatusCodeError)).apply(this, arguments));
    }

    return StatusCodeError;
  }(Error);

  function rateLimitWarning(millisecondsUntilReset) {
    return 'Warning: ' + constants.MODULE_NAME + ' temporarily stopped sending requests because reddit\'s ratelimit was exceeded. The request you attempted to send was queued, and will be sent to reddit when the current ratelimit period expires in ' + millisecondsUntilReset / 1000 + ' seconds.';
  }
});

/*! https://mths.be/punycode v1.4.1 by @mathias */


/** Highest positive signed 32-bit float value */
var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'

var regexNonASCII = /[^\x20-\x7E]/; // unprintable ASCII chars + non-ASCII chars
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
var errors$2 = {
  'overflow': 'Overflow: input needs wider integers to process',
  'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error(type) {
  throw new RangeError(errors$2[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map$1(array, fn) {
  var length = array.length;
  var result = [];
  while (length--) {
    result[length] = fn(array[length]);
  }
  return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */
function mapDomain(string, fn) {
  var parts = string.split('@');
  var result = '';
  if (parts.length > 1) {
    // In email addresses, only the domain name should be punycoded. Leave
    // the local part (i.e. everything up to `@`) intact.
    result = parts[0] + '@';
    string = parts[1];
  }
  // Avoid `split(regex)` for IE8 compatibility. See #17.
  string = string.replace(regexSeparators, '\x2E');
  var labels = string.split('.');
  var encoded = map$1(labels, fn).join('.');
  return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
  var output = [],
    counter = 0,
    length = string.length,
    value,
    extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);
      if ((extra & 0xFC00) == 0xDC00) { // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
function ucs2encode(array) {
  return map$1(array, function(value) {
    var output = '';
    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }
    output += stringFromCharCode(value);
    return output;
  }).join('');
}

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
function basicToDigit(codePoint) {
  if (codePoint - 48 < 10) {
    return codePoint - 22;
  }
  if (codePoint - 65 < 26) {
    return codePoint - 65;
  }
  if (codePoint - 97 < 26) {
    return codePoint - 97;
  }
  return base;
}

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
function digitToBasic(digit, flag) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
}

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
function adapt(delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor(delta / damp) : delta >> 1;
  delta += floor(delta / numPoints);
  for ( /* no initialization */ ; delta > baseMinusTMin * tMax >> 1; k += base) {
    delta = floor(delta / baseMinusTMin);
  }
  return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
}

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */


/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
function encode(input) {
  var n,
    delta,
    handledCPCount,
    basicLength,
    bias,
    j,
    m,
    q,
    k,
    t,
    currentValue,
    output = [],
    /** `inputLength` will hold the number of code points in `input`. */
    inputLength,
    /** Cached calculation results */
    handledCPCountPlusOne,
    baseMinusT,
    qMinusT;

  // Convert the input in UCS-2 to Unicode
  input = ucs2decode(input);

  // Cache the length
  inputLength = input.length;

  // Initialize the state
  n = initialN;
  delta = 0;
  bias = initialBias;

  // Handle the basic code points
  for (j = 0; j < inputLength; ++j) {
    currentValue = input[j];
    if (currentValue < 0x80) {
      output.push(stringFromCharCode(currentValue));
    }
  }

  handledCPCount = basicLength = output.length;

  // `handledCPCount` is the number of code points that have been handled;
  // `basicLength` is the number of basic code points.

  // Finish the basic string - if it is not empty - with a delimiter
  if (basicLength) {
    output.push(delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {

    // All non-basic code points < n have been handled already. Find the next
    // larger one:
    for (m = maxInt, j = 0; j < inputLength; ++j) {
      currentValue = input[j];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
    // but guard against overflow
    handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
      error('overflow');
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (j = 0; j < inputLength; ++j) {
      currentValue = input[j];

      if (currentValue < n && ++delta > maxInt) {
        error('overflow');
      }

      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer
        for (q = delta, k = base; /* no condition */ ; k += base) {
          t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) {
            break;
          }
          qMinusT = q - t;
          baseMinusT = base - t;
          output.push(
            stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
          );
          q = floor(qMinusT / baseMinusT);
        }

        output.push(stringFromCharCode(digitToBasic(q, 0)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        ++handledCPCount;
      }
    }

    ++delta;
    ++n;

  }
  return output.join('');
}

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */


/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
function toASCII(input) {
  return mapDomain(input, function(string) {
    return regexNonASCII.test(string) ?
      'xn--' + encode(string) :
      string;
  });
}

/**
 * An object of methods to convert from JavaScript's internal character
 * representation (UCS-2) to Unicode code points, and back.
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode
 * @type Object
 */

// Copyright Joyent, Inc. and other Node contributors.
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


// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty$16(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var isArray$3 = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};
function stringifyPrimitive(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
}

function stringify (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map$2(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray$3(obj[k])) {
        return map$2(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
}

function map$2 (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

function parse$1(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty$16(obj, k)) {
      obj[k] = v;
    } else if (isArray$3(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
}
var qs = {
  encode: stringify,
  stringify: stringify,
  decode: parse$1,
  parse: parse$1
};



var qs$1 = Object.freeze({
	stringify: stringify,
	parse: parse$1,
	default: qs,
	encode: stringify,
	decode: parse$1
});

// Copyright Joyent, Inc. and other Node contributors.
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


var url = {
  parse: urlParse,
  resolve: urlResolve,
  resolveObject: urlResolveObject,
  format: urlFormat,
  Url: Url
};
function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i;
var portPattern = /:[0-9]*$/;
var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
var delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'];
var unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims);
var autoEscape = ['\''].concat(unwise);
var nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape);
var hostEndingChars = ['/', '?', '#'];
var hostnameMaxLen = 255;
var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
var unsafeProtocol = {
    'javascript': true,
    'javascript:': true
  };
var hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  };
var slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  };

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && isObject$2(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}
Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  return parse(this, url, parseQueryString, slashesDenoteHost);
};

function parse(self, url, parseQueryString, slashesDenoteHost) {
  if (!isString$2(url)) {
    throw new TypeError('Parameter \'url\' must be a string, not ' + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
    splitter =
    (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
    uSplit = url.split(splitter),
    slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      self.path = rest;
      self.href = rest;
      self.pathname = simplePath[1];
      if (simplePath[2]) {
        self.search = simplePath[2];
        if (parseQueryString) {
          self.query = parse$1(self.search.substr(1));
        } else {
          self.query = self.search.substr(1);
        }
      } else if (parseQueryString) {
        self.search = '';
        self.query = {};
      }
      return self;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    self.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      self.slashes = true;
    }
  }
  var i, hec, l, p;
  if (!hostlessProtocol[proto] &&
    (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (i = 0; i < hostEndingChars.length; i++) {
      hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      self.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (i = 0; i < nonHostChars.length; i++) {
      hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    self.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    parseHost(self);

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    self.hostname = self.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = self.hostname[0] === '[' &&
      self.hostname[self.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = self.hostname.split(/\./);
      for (i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            self.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (self.hostname.length > hostnameMaxLen) {
      self.hostname = '';
    } else {
      // hostnames are always lower case.
      self.hostname = self.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      self.hostname = toASCII(self.hostname);
    }

    p = self.port ? ':' + self.port : '';
    var h = self.hostname || '';
    self.host = h + p;
    self.href += self.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      self.hostname = self.hostname.substr(1, self.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    self.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    self.search = rest.substr(qm);
    self.query = rest.substr(qm + 1);
    if (parseQueryString) {
      self.query = parse$1(self.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    self.search = '';
    self.query = {};
  }
  if (rest) self.pathname = rest;
  if (slashedProtocol[lowerProto] &&
    self.hostname && !self.pathname) {
    self.pathname = '/';
  }

  //to support http.request
  if (self.pathname || self.search) {
    p = self.pathname || '';
    var s = self.search || '';
    self.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  self.href = format$1(self);
  return self;
}

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (isString$2(obj)) obj = parse({}, obj);
  return format$1(obj);
}

function format$1(self) {
  var auth = self.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = self.protocol || '',
    pathname = self.pathname || '',
    hash = self.hash || '',
    host = false,
    query = '';

  if (self.host) {
    host = auth + self.host;
  } else if (self.hostname) {
    host = auth + (self.hostname.indexOf(':') === -1 ?
      self.hostname :
      '[' + this.hostname + ']');
    if (self.port) {
      host += ':' + self.port;
    }
  }

  if (self.query &&
    isObject$2(self.query) &&
    Object.keys(self.query).length) {
    query = stringify(self.query);
  }

  var search = self.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (self.slashes ||
    (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
}

Url.prototype.format = function() {
  return format$1(this);
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (isString$2(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
      result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }
  var relPath;
  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
    isRelAbs = (
      relative.host ||
      relative.pathname && relative.pathname.charAt(0) === '/'
    ),
    mustEndAbs = (isRelAbs || isSourceAbs ||
      (result.host && relative.pathname)),
    removeAllDots = mustEndAbs,
    srcPath = result.pathname && result.pathname.split('/') || [],
    psychotic = result.protocol && !slashedProtocol[result.protocol];
  relPath = relative.pathname && relative.pathname.split('/') || [];
  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }
  var authInHost;
  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
      relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      authInHost = result.host && result.host.indexOf('@') > 0 ?
        result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
        (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
    (result.host || relative.host || srcPath.length > 1) &&
    (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
    (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
    (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
      srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    authInHost = result.host && result.host.indexOf('@') > 0 ?
      result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!isNull(result.pathname) || !isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
      (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  return parseHost(this);
};

function parseHost(self) {
  var host = self.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      self.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) self.hostname = host;
}


var url$1 = Object.freeze({
	parse: urlParse,
	resolve: urlResolve,
	resolveObject: urlResolveObject,
	format: urlFormat,
	default: url,
	Url: Url
});

var _url = ( url$1 && url ) || url$1;

var _querystring = ( qs$1 && qs ) || qs$1;

var xhr = createCommonjsModule(function (module) {
  'use strict';

  var _Promise2 = _interopRequireDefault(_Promise$2);

  var _url2 = _interopRequireDefault(_url);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  // Provide a shim for some of the functionality of the `request-promise` npm package in browsers.
  // Previously, snoowrap depended on browserify to package `request-promise` for the browser bundle, and while this worked
  // properly, it caused the snoowrap bundle to be very large since `request-promise` contains many dependencies that snoowrap
  // doesn't actually need.

  /* eslint-env browser */
  function noop() {}

  function tryParseJson(maybeJson) {
    try {
      return JSON.parse(maybeJson);
    } catch (e) {
      return maybeJson;
    }
  }

  function parseHeaders(headerString) {
    return headerString.split('\r\n').filter(function (line) {
      return line;
    }).reduce(function (accumulator, line) {
      var index = line.indexOf(': ');
      accumulator[line.slice(0, index)] = line.slice(index + 2);
      return accumulator;
    }, {});
  }

  module.exports = function rawRequest(options) {
    // It would be nice to be able to use the `URL` API in browsers, but Safari 9 doesn't support `URLSearchParams`.
    var parsedUrl = _url2.default.parse(options.url || _url2.default.resolve(options.baseUrl, options.uri), true);
    parsedUrl.search = (0, _querystring.stringify)(Object.assign({}, parsedUrl.query, options.qs));
    // create a new url object with the new qs params, to ensure that the `href` value changes (to use later for parsing response)
    var finalUrl = _url2.default.parse(parsedUrl.format());
    var xhr = new XMLHttpRequest();
    var method = options.method ? options.method.toUpperCase() : 'GET';
    xhr.open(method, finalUrl.href);
    Object.keys(options.headers).filter(function (header) {
      return header.toLowerCase() !== 'user-agent';
    }).forEach(function (key) {
      return xhr.setRequestHeader(key, options.headers[key]);
    });
    if (options.auth) {
      xhr.setRequestHeader('Authorization', options.auth.bearer ? 'bearer ' + options.auth.bearer : 'basic ' + btoa(options.auth.user + ':' + options.auth.pass));
    }

    var requestBody = void 0;
    if (options.formData) {
      requestBody = new FormData();
      Object.keys(options.formData).forEach(function (key) {
        return requestBody.append(key, options.formData[key]);
      });
      if (options.form) {
        Object.keys(options.form).forEach(function (key) {
          return requestBody.append(key, options.form[key]);
        });
      }
      xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    } else if (options.form) {
      requestBody = (0, _querystring.stringify)(options.form);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    } else if (options.json) {
      requestBody = JSON.stringify(options.body);
      xhr.setRequestHeader('Content-Type', 'application/json');
    } else {
      requestBody = options.body;
    }

    return new _Promise2.default(function (resolve, reject, onCancel) {
      onCancel(function () {
        return xhr.abort();
      });
      xhr.onload = function () {
        var _this = this;

        var success = this.status >= 200 && this.status < 300;
        var settleFunc = success ? resolve : function (err) {
          return reject(Object.assign(new errors.StatusCodeError(_this.status + ''), err));
        };
        var response = {
          statusCode: this.status,
          body: (options.json ? tryParseJson : noop)(xhr.response),
          headers: parseHeaders(xhr.getAllResponseHeaders()),
          request: { method: method, uri: finalUrl }
        };
        if (typeof options.transform === 'function') {
          settleFunc(options.transform(response.body, response));
        } else if (!success || options.resolveWithFullResponse) {
          settleFunc(response);
        } else {
          settleFunc(response.body);
        }
      };
      xhr.onerror = function (err) {
        return reject(Object.assign(new errors.RequestError(), err));
      };
      xhr.send(requestBody);
    }).timeout(options.timeout || Math.pow(2, 31) - 1, 'Error: ETIMEDOUT').catch(_Promise2.default.TimeoutError, function (err) {
      xhr.abort();
      throw err;
    });
  };
});

var request_handler = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.rawRequest = undefined;

  var _merge3 = _interopRequireDefault(merge_1);

  var _includes3 = _interopRequireDefault(includes_1);

  exports.oauthRequest = oauthRequest;
  exports._awaitExponentialBackoff = _awaitExponentialBackoff;
  exports._awaitRatelimit = _awaitRatelimit;
  exports._awaitRequestDelay = _awaitRequestDelay;
  exports.credentialedClientRequest = credentialedClientRequest;
  exports.unauthenticatedRequest = unauthenticatedRequest;
  exports.updateAccessToken = updateAccessToken;

  var _Promise2 = _interopRequireDefault(_Promise$2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  }

  /**
  * @summary Sends an oauth-authenticated request to the reddit server, and returns the server's response.
  * @desc **Note**: While this function primarily exists for internal use, it is exposed and considered a stable feature.
  However, keep in mind that there are usually better alternatives to using this function. For instance, this
  function can be used to send a POST request to the 'api/vote' endpoint in order to upvote a comment, but it's generally
  easier to just use snoowrap's [upvote function]{@link VoteableContent#upvote}.
  *
  * If you're using this function to access an API feature/endpoint that is unsupported by snoowrap, please consider [creating an
  issue for it](https://github.com/not-an-aardvark/snoowrap/issues) so that the functionality can be added to snoowrap more
  directly.
  * @param {object} options Options for the request. For documentation on these options, see the
  [Request API](https://www.npmjs.com/package/request). Supported options include `uri`, `qs`, `form`, `headers`, `method`,
  `auth`, and `body`. A default `baseUrl` parameter of `this.config().endpoint_domain` is internally included by default, so it
  is recommended that a `uri` parameter be used, rather than a `url` parameter with a
  domain name.
  * @returns {Promise} A Promise that fulfills with reddit's response.
  * @memberof snoowrap
  * @instance
  * @example
  *
  * r.oauthRequest({uri: '/user/spez/about', method: 'get'}).then(console.log)
  * // => RedditUser { name: 'spez', link_karma: 9567, ... }
  *
  * // Note that this is equivalent to:
  * r.getUser('spez').fetch().then(console.log)
  *
  * // ######
  *
  * r.oauthRequest({uri: '/api/vote', method: 'post', form: {dir: 1, id: 't3_4fzg2k'}})
  * // equivalent to:
  * r.getSubmission('4fzg2k').upvote()
  *
  * // ######
  *
  * r.oauthRequest({uri: '/top', method: 'get', qs: {t: 'all'}})
  * // equivalent to:
  * r.getTop({time: 'all'})
  */
  function oauthRequest(options) {
    var _Promise$resolve$then,
        _this = this;

    var attempts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return (_Promise$resolve$then = _Promise2.default.resolve().then(function () {
      return _this._awaitRatelimit();
    }).then(function () {
      return _this._awaitRequestDelay();
    }).then(function () {
      return _awaitExponentialBackoff(attempts);
    }).then(function () {
      return _this.updateAccessToken();
    }).then(function (token) {
      return _this.rawRequest((0, _merge3.default)({
        json: true,
        headers: { 'user-agent': _this.userAgent },
        baseUrl: 'https://oauth.' + _this._config.endpointDomain,
        qs: { raw_json: 1 },
        auth: { bearer: token },
        resolveWithFullResponse: true,
        timeout: _this._config.requestTimeout,
        transform: function transform(body, response) {
          if (Object.prototype.hasOwnProperty.call(response.headers, 'x-ratelimit-remaining')) {
            _this.ratelimitRemaining = +response.headers['x-ratelimit-remaining'];
            _this.ratelimitExpiration = Date.now() + response.headers['x-ratelimit-reset'] * 1000;
          }
          _this._debug('Received a ' + response.statusCode + ' status code from a `' + response.request.method + '` request', 'sent to ' + response.request.uri.href + '. ratelimitRemaining: ' + _this.ratelimitRemaining);
          return response;
        }
      }, options));
    }).then(function (response) {
      var populated = _this._populate(response.body);
      if (populated && populated.constructor._name === 'Listing') {
        populated._setUri(response.request.uri.href);
      }
      return populated;
    })).catch.apply(_Promise$resolve$then, _toConsumableArray(this._config.retryErrorCodes.map(function (retryCode) {
      return { statusCode: retryCode };
    })).concat([function (e) {
      if (!(0, _includes3.default)(constants.IDEMPOTENT_HTTP_VERBS, e.response.request.method) || attempts >= _this._config.maxRetryAttempts) {
        throw e;
      }
      /* If the error's status code is in the user's configured `retryStatusCodes` and this request still has attempts
      remaining, retry this request and increment the `attempts` counter. */
      _this._warn('Received status code ' + e.statusCode + ' from reddit.', 'Retrying request (attempt ' + (attempts + 1) + '/' + _this._config.maxRetryAttempts + ')...');
      return _this.oauthRequest(options, attempts + 1);
    }])).catch({ statusCode: 401 }, function (e) {
      /* If the server returns a 401 error, it's possible that the access token expired during the latency period as this
      request was being sent. In this scenario, snoowrap thought that the access token was valid for a few more seconds, so it
      didn't refresh the token, but the token had expired by the time the request reached the server. To handle this issue,
      invalidate the access token and call oauth_request again, automatically causing the token to be refreshed. */
      if (_this.accessToken && _this.tokenExpiration - Date.now() < constants.MAX_TOKEN_LATENCY) {
        _this.accessToken = null;
        _this.tokenExpiration = null;
        return _this.oauthRequest(options, attempts);
      }
      throw e;
    });
  }

  function _awaitExponentialBackoff(attempts) {
    if (attempts === 1) {
      return _Promise2.default.resolve();
    }

    return _Promise2.default.delay((Math.pow(2, attempts - 1) + (Math.random() - 0.3)) * 1000);
  }

  function _awaitRatelimit() {
    if (this.ratelimitRemaining < 1 && Date.now() < this.ratelimitExpiration) {
      // If the ratelimit has been exceeded, delay or abort the request depending on the user's config.
      var timeUntilExpiry = this.ratelimitExpiration - Date.now();
      if (this._config.continueAfterRatelimitError) {
        /* If the `continue_after_ratelimit_error` setting is enabled, queue the request, wait until the next ratelimit
        period, and then send it. */
        this._warn((0, errors.rateLimitWarning)(timeUntilExpiry));
        return _Promise2.default.delay(timeUntilExpiry);
      }
      // Otherwise, throw an error.
      throw new errors.RateLimitError(timeUntilExpiry);
    }
    // If the ratelimit hasn't been exceeded, no delay is necessary.
    return _Promise2.default.resolve();
  }

  function _awaitRequestDelay() {
    var now = Date.now();
    var waitTime = this._nextRequestTimestamp - now;
    this._nextRequestTimestamp = Math.max(now, this._nextRequestTimestamp) + this._config.requestDelay;
    return _Promise2.default.delay(waitTime);
  }

  /**
  * @summary Sends a request to the reddit server, authenticated with the user's client ID and client secret.
  * @desc **Note**: This is used internally as part of the authentication process, but it cannot be used to actually fetch
  content from reddit. To do that, use {@link snoowrap#oauthRequest} or another of snoowrap's helper functions.
  *
  * This function can work with alternate `this`-bindings, provided that the binding has the `clientId`, `clientSecret`, and
  `userAgent` properties. This allows it be used if no snoowrap requester has been created yet.
  * @param {object|string} options Options for the request; these are passed directly to the
  [Request API](https://www.npmjs.com/package/request).
  * @returns {Promise} The response from the reddit server
  * @example
  *
  * // example: this function could be used to exchange a one-time authentication code for a refresh token.
  snoowrap.prototype.credentialedClientRequest.call({
    clientId: 'client id goes here',
    clientSecret: 'client secret goes here',
    userAgent: 'user agent goes here'
  }, {
    method: 'post',
    baseUrl: 'https://www.reddit.com',
    uri: 'api/v1/access_token',
    form: {grant_type: 'authorization_code', code: 'code goes here', redirect_uri: 'redirect uri goes here'}
  }).then(response => {
    //handle response here
  })
  * @memberof snoowrap
  * @instance
  */
  function credentialedClientRequest(options) {
    var requestFunc = this.rawRequest || rawRequest;
    return _Promise2.default.resolve(requestFunc.call(this, (0, _merge3.default)({
      json: true,
      auth: { user: this.clientId || this.client_id || '', pass: this.clientSecret || this.client_secret || '' },
      headers: { 'user-agent': this.userAgent },
      baseUrl: this._config ? 'https://www.' + this._config.endpointDomain : undefined
    }, options)));
  }

  /**
  * @summary Sends a request to the reddit server without authentication.
  * @param {object|string} options Options for the request; these are passed directly to the
  [Request API](https://www.npmjs.com/package/request).
  * @returns {Promise} The response from the reddit server
  * @memberof snoowrap
  * @instance
  */
  function unauthenticatedRequest(options) {
    return _Promise2.default.resolve(this.rawRequest((0, _merge3.default)({
      json: true,
      headers: { 'user-agent': this.userAgent },
      baseUrl: 'https://www.' + this._config.endpointDomain
    }, options)));
  }

  /**
  * @summary Updates this requester's access token if the current one is absent or expired.
  * @desc **Note**: This function is automatically called internally when making a request. While the function is exposed as
  a stable feature, using it is rarely necessary unless an access token is needed for some external purpose.
  * @returns {Promise} A Promise that fulfills with the access token when this request is complete
  * @memberof snoowrap
  * @instance
  * @example r.updateAccessToken()
  */
  function updateAccessToken() {
    var _this2 = this;

    // If the current access token is missing or expired, and it is possible to get a new one, do so.
    if ((!this.accessToken || Date.now() > this.tokenExpiration) && (this.refreshToken || this.username && this.password)) {
      return this.credentialedClientRequest({
        method: 'post',
        uri: 'api/v1/access_token',
        form: this.refreshToken ? { grant_type: 'refresh_token', refresh_token: this.refreshToken } : { grant_type: 'password', username: this.username, password: this.password }
      }).then(function (tokenInfo) {
        _this2.accessToken = tokenInfo.access_token;
        _this2.tokenExpiration = Date.now() + tokenInfo.expires_in * 1000;
        if (tokenInfo.error === 'invalid_grant') {
          throw new Error('"Invalid grant" error returned from reddit. (You might have incorrect credentials.)');
        }
        _this2.scope = tokenInfo.scope.split(' ');
        return _this2.accessToken;
      });
    }
    // Otherwise, just return the existing token.
    return _Promise2.default.resolve(this.accessToken);
  }

  /**
  * @function
  * @name rawRequest
  * @summary Sends an HTTP request
  * @desc **Note**: This function is called internally whenever snoowrap makes a request. You generally should not call this
  * function directly; use {@link snoowrap#oauthRequest} or another snoowrap function instead.
  *
  * This method allows snoowrap's request behavior to be customized via subclassing. If you create a snoowrap subclass and shadow
  * this method, all requests from snoowrap will pass through it.
  *
  * To ensure that all other snoowrap methods work correctly, the API for a shadowed version of this method must match the API for
  * the original `makeRequest` method. This method is based on the API of the
  * [request-promise](https://www.npmjs.com/package/request-promise) library, so if you do create a subclass, it might be helpful
  * to use `request-promise` internally. This will ensure that the API works correctly, so that you don't have to reimplement this
  * function's API from scratch.
  *
  * @param {object} options Options for the request
  * @param {boolean} options.json If `true`, the `Content-Type: application/json` header is added, and the response body will be
  * parsed as JSON automatically.
  * @param {string} options.baseUrl The base URL that a request should be sent to
  * @param {string} options.uri The uri that a request should be sent to, using the provided `baseUrl`.
  * @param {string} options.method='GET' Method for the request
  * @param {object} options.headers Headers for the request
  * @param {object} [options.qs] Querystring parameters for the request
  * @param {object} [options.form] Form data for the request. If provided, the `Content-Type: application/x-www-form-urlencoded`
  * header is set, and the provided object is serialized into URL-encoded form data in the request body.
  * @param {object} [options.formData] Multipart form data for the request. If provided, the `Content-Type: multipart/form-data`
  * header is set, and the provided object is serialized as multipart form data.
  * @param {object} [options.body] The body of the request. Should be converted to a string with JSON.stringify(). This is ignored
  * for GET requests, or of `options.form` or `options.formData` are provided.
  * @param {Function} [options.transform] A function that is called before the response Promise fulfills. Accepts two parameters:
  * `response.body` and `response`. This function should be called regardless of the status code of the response, and the returned
  * Promise from `makeRequest` should fulfill with its return value.
  * @param {boolean} [options.resolveWithFullResponse=false] If `true`, a Promise for the entire response is returned. If `false`,
  * a Promise for only the response body is returned. This is ignored if an `options.transform` function is provided.
  * @returns {Promise} A Promise for a response object. Depending on `options.transform` and `options.resolveWithFullResponse`,
  * the Promise should settle with either the response object itself, the body of the response, or the value returned by
  * `options.transform`. The Promise should be fulfilled if the status code is between 200 and 299, inclusive, and reject
  * otherwise. (If a redirect is returned from the server, the function should follow the redirect if possible, otherwise reject
  * with an error.) A response object has 4 properties: `statusCode` (number) the status code of the response, `body` (object)
  * the body of the response, `headers` (object) the parsed response headers, and `request` (object) an object of the form
  * `{method: 'GET', uri: {href: 'https://oauth.reddit.com/full/url'}}` representing information about the original request.
  * @memberof snoowrap
  * @instance
  * @example
  *
  * const snoowrap = require('snoowrap');
  *
  * class SnoowrapSubclass extends snoowrap {
  *   rawRequest(options) {
  *     // do custom behavior with `options` if you want, then call the regular rawRequest function
  *     console.log(`made a request with options:`);
  *     console.log(options);
  *     return super.rawRequest(options)
  *   }
  * }
  *
  * const request = require('request-promise');
  *
  * class AnotherSnoowrapSubclass extends snoowrap {
  *   rawRequest(options) {
  *     // send all requests through a proxy
  *     return request(Object.assign(options, {proxy: 'https://example.com'}))
  *   }
  * }
  */
  var rawRequest = exports.rawRequest = typeof XMLHttpRequest !== 'undefined' ? xhr : require$$0.defaults({ gzip: true });
});

/** Used for built-in method references. */
var arrayProto$1 = Array.prototype;

/** Built-in value references. */
var splice$1 = arrayProto$1.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (_isIndex(index)) {
        splice$1.call(array, index, 1);
      } else {
        _baseUnset(array, index);
      }
    }
  }
  return array;
}

var _basePullAt = basePullAt;

/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */
function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = _baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  _basePullAt(array, indexes);
  return result;
}

var remove_1 = remove;

/** Used to store function metadata. */
var metaMap = _WeakMap && new _WeakMap;

var _metaMap = metaMap;

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !_metaMap ? identity_1 : function(func, data) {
  _metaMap.set(func, data);
  return func;
};

var _baseSetData = baseSetData;

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = _baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject_1(result) ? result : thisBinding;
  };
}

var _createCtor = createCtor;

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$1 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG$1,
      Ctor = _createCtor(func);

  function wrapper() {
    var fn = (this && this !== _root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

var _createBind = createBind;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$3(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

var _composeArgs = composeArgs;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$4 = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$4(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

var _composeArgsRight = composeArgsRight;

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

var _countHolders = countHolders;

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

var _baseLodash = baseLodash;

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

var _LazyWrapper = LazyWrapper;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop$1() {
  // No operation performed.
}

var noop_1 = noop$1;

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !_metaMap ? noop_1 : function(func) {
  return _metaMap.get(func);
};

var _getData = getData;

/** Used to lookup unminified function names. */
var realNames = {};

var _realNames = realNames;

/** Used for built-in method references. */
var objectProto$18 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$17 = objectProto$18.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = _realNames[result],
      length = hasOwnProperty$17.call(_realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

var _getFuncName = getFuncName;

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

var _LodashWrapper = LodashWrapper;

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }
  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone;

/** Used for built-in method references. */
var objectProto$19 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$18 = objectProto$19.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$18.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }
  return new _LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;

var wrapperLodash = lodash;

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = _getFuncName(func),
      other = wrapperLodash[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = _getData(other);
  return !!data && func === data[0];
}

var _isLaziable = isLaziable;

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = _shortOut(_baseSetData);

var _setData = setData;

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

var _getWrapDetails = getWrapDetails;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

var _insertWrapDetails = insertWrapDetails;

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$4 = 1;
var WRAP_BIND_KEY_FLAG$3 = 2;
var WRAP_CURRY_FLAG$3 = 8;
var WRAP_CURRY_RIGHT_FLAG$2 = 16;
var WRAP_PARTIAL_FLAG$3 = 32;
var WRAP_PARTIAL_RIGHT_FLAG$2 = 64;
var WRAP_ARY_FLAG$1 = 128;
var WRAP_REARG_FLAG = 256;
var WRAP_FLIP_FLAG$1 = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG$1],
  ['bind', WRAP_BIND_FLAG$4],
  ['bindKey', WRAP_BIND_KEY_FLAG$3],
  ['curry', WRAP_CURRY_FLAG$3],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG$2],
  ['flip', WRAP_FLIP_FLAG$1],
  ['partial', WRAP_PARTIAL_FLAG$3],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG$2],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  _arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !_arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

var _updateWrapDetails = updateWrapDetails;

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return _setToString(wrapper, _insertWrapDetails(source, _updateWrapDetails(_getWrapDetails(source), bitmask)));
}

var _setWrapToString = setWrapToString;

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$3 = 1;
var WRAP_BIND_KEY_FLAG$2 = 2;
var WRAP_CURRY_BOUND_FLAG = 4;
var WRAP_CURRY_FLAG$2 = 8;
var WRAP_PARTIAL_FLAG$2 = 32;
var WRAP_PARTIAL_RIGHT_FLAG$1 = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$2,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG$2 : WRAP_PARTIAL_RIGHT_FLAG$1);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$2);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG$3 | WRAP_BIND_KEY_FLAG$2);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (_isLaziable(func)) {
    _setData(result, newData);
  }
  result.placeholder = placeholder;
  return _setWrapToString(result, func, bitmask);
}

var _createRecurry = createRecurry;

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

var _getHolder = getHolder;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = _copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = _isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

var _reorder = reorder;

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

var _replaceHolders = replaceHolders;

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$2 = 1;
var WRAP_BIND_KEY_FLAG$1 = 2;
var WRAP_CURRY_FLAG$1 = 8;
var WRAP_CURRY_RIGHT_FLAG$1 = 16;
var WRAP_ARY_FLAG = 128;
var WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG$2,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG$1,
      isCurried = bitmask & (WRAP_CURRY_FLAG$1 | WRAP_CURRY_RIGHT_FLAG$1),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = _getHolder(wrapper),
          holdersCount = _countHolders(args, placeholder);
    }
    if (partials) {
      args = _composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = _composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = _replaceHolders(args, placeholder);
      return _createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = _reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== _root && this instanceof wrapper) {
      fn = Ctor || _createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

var _createHybrid = createHybrid;

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = _getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : _replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return _createRecurry(
        func, bitmask, _createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== _root && this instanceof wrapper) ? Ctor : func;
    return _apply(fn, this, args);
  }
  return wrapper;
}

var _createCurry = createCurry;

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$5 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$5,
      Ctor = _createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== _root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return _apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

var _createPartial = createPartial;

/** Used as the internal argument placeholder. */
var PLACEHOLDER$1 = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$6 = 1;
var WRAP_BIND_KEY_FLAG$4 = 2;
var WRAP_CURRY_BOUND_FLAG$1 = 4;
var WRAP_CURRY_FLAG$4 = 8;
var WRAP_ARY_FLAG$2 = 128;
var WRAP_REARG_FLAG$1 = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$1 = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG$6 | WRAP_BIND_KEY_FLAG$4 | WRAP_ARY_FLAG$2);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_CURRY_FLAG$4)) ||
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_REARG_FLAG$1) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG$4));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG$6) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG$6 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? _composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? _replaceHolders(data[3], PLACEHOLDER$1) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? _composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? _replaceHolders(data[5], PLACEHOLDER$1) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG$2) {
    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

var _mergeData = mergeData;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;
var WRAP_BIND_KEY_FLAG = 2;
var WRAP_CURRY_FLAG = 8;
var WRAP_CURRY_RIGHT_FLAG = 16;
var WRAP_PARTIAL_FLAG$1 = 32;
var WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG$1 | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax$2(toInteger_1(ary), 0);
  arity = arity === undefined ? arity : toInteger_1(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : _getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    _mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax$2(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = _createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = _createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$1 || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG$1)) && !holders.length) {
    result = _createPartial(func, bitmask, thisArg, partials);
  } else {
    result = _createHybrid.apply(undefined, newData);
  }
  var setter = data ? _baseSetData : _setData;
  return _setWrapToString(setter(result, newData), func, bitmask);
}

var _createWrap = createWrap;

/** Used to compose bitmasks for function metadata. */
var WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */
var partial = _baseRest(function(func, partials) {
  var holders = _replaceHolders(partials, _getHolder(partial));
  return _createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});

// Assign default placeholders.
partial.placeholder = {};

var partial_1 = partial;

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

var _arrayAggregator = arrayAggregator;

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

var _baseAggregator = baseAggregator;

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, _baseIteratee(iteratee, 2), accumulator);
  };
}

var _createAggregator = createAggregator;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the last element responsible for generating the key. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * var array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ];
 *
 * _.keyBy(array, function(o) {
 *   return String.fromCharCode(o.code);
 * });
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 *
 * _.keyBy(array, 'dir');
 * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
 */
var keyBy = _createAggregator(function(result, value, key) {
  _baseAssignValue(result, key, value);
});

var keyBy_1 = keyBy;

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_1(collection)) {
      var iteratee = _baseIteratee(predicate, 3);
      collection = keys_1(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

var _createFind = createFind;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$5 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
  if (index < 0) {
    index = nativeMax$5(length + index, 0);
  }
  return _baseFindIndex(array, _baseIteratee(predicate, 3), index);
}

var findIndex_1 = findIndex;

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = _createFind(findIndex_1);

var find_1 = find;

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return _basePickBy(object, paths, function(value, path) {
    return hasIn_1(object, path);
  });
}

var _basePick = basePick;

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = _flatRest(function(object, paths) {
  return object == null ? {} : _basePick(object, paths);
});

var pick_1 = pick;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach;

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return _arrayPush(isArray_1(array) ? _copyArray(array) : [array], _baseFlatten(args, 1));
}

var concat_1 = concat;

var More_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.emptyChildren = undefined;

  var _remove3 = _interopRequireDefault(remove_1);

  var _pick3 = _interopRequireDefault(pick_1);

  var _forEach3 = _interopRequireDefault(forEach_1);

  var _flatten3 = _interopRequireDefault(flatten_1);

  var _concat3 = _interopRequireDefault(concat_1);

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _Promise2 = _interopRequireDefault(_Promise$2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var api_type = 'json';

  /**
  * The `More` class is a helper representing reddit's exposed `more` type in comment threads, used to fetch additional comments
  on a thread.
  * No instances of the `More` class are exposed externally by snoowrap; instead, comment lists are exposed as Listings.
  Additional replies on an item can be fetched by calling `fetchMore` on a Listing, in the same manner as what would be done
  with a Listing of posts. snoowrap should handle the differences internally, and expose a nearly-identical interface for the
  two use-cases.
  
  Combining reddit's `Listing` and `more` objects has the advantage of having a more consistent exposed interface; for example,
  if a consumer iterates over the comments on a Submission, all of the iterated items will actually be Comment objects, so the
  consumer won't encounter an unexpected `more` object at the end. However, there are a few disadvantages, namely that (a) this
  leads to an increase in internal complexity, and (b) there are a few cases where reddit's `more` objects have different amounts
  of available information (e.g. all the child IDs of a `more` object are known on creation), which leads to different optimal
  behavior.
  */

  var More = function () {
    function More(options, _r) {
      _classCallCheck(this, More);

      Object.assign(this, options);
      this._r = _r;
    }
    /* Requests to /api/morechildren are capped at 20 comments at a time, but requests to /api/info are capped at 100, so
    it's easier to send to the latter. The disadvantage is that comment replies are not automatically sent from requests
    to /api/info. */

    _createClass(More, [{
      key: 'fetchMore',
      value: function fetchMore(options) {
        var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (options.amount <= 0 || startIndex >= this.children.length) {
          return _Promise2.default.resolve([]);
        }
        if (!options.skipReplies) {
          return this.fetchTree(options, startIndex);
        }
        var ids = getNextIdSlice(this.children, startIndex, options.amount, constants.MAX_API_INFO_AMOUNT).map(function (id) {
          return 't1_' + id;
        });
        // Requests are capped at 100 comments. Send lots of requests recursively to get the comments, then concatenate them.
        // (This speed-requesting is only possible with comment Listings since the entire list of ids is present initially.)
        var promiseForThisBatch = this._r._getListing({ uri: 'api/info', qs: { id: ids.join(',') } });
        var nextRequestOptions = _extends({}, options, { amount: options.amount - ids.length });
        var promiseForRemainingItems = this.fetchMore(nextRequestOptions, startIndex + ids.length);
        return _Promise2.default.all([promiseForThisBatch, promiseForRemainingItems]).then(_flatten3.default);
      }
    }, {
      key: 'fetchTree',
      value: function fetchTree(options, startIndex) {
        var _this = this;

        if (options.amount <= 0 || startIndex >= this.children.length) {
          return _Promise2.default.resolve([]);
        }
        var ids = getNextIdSlice(this.children, startIndex, options.amount, constants.MAX_API_MORECHILDREN_AMOUNT);
        return this._r._get({
          uri: 'api/morechildren',
          qs: { api_type: api_type, children: ids.join(','), link_id: this.link_id || this.parent_id }
        }).tap(helpers.handleJsonErrors).then(function (res) {
          return res.json.data.things;
        }).map(helpers.addEmptyRepliesListing).then(helpers.buildRepliesTree).then(function (resultTrees) {
          /* Sometimes, when sending a request to reddit to get multiple comments from a `more` object, reddit decides to only
          send some of the requested comments, and then stub out the remaining ones in a smaller `more` object. ( ¯\_(ツ)_/¯ )
          In these cases, recursively fetch the smaller `more` objects as well. */
          var childMores = (0, _remove3.default)(resultTrees, function (c) {
            return c instanceof More;
          });
          (0, _forEach3.default)(childMores, function (c) {
            c.link_id = _this.link_id || _this.parent_id;
          });
          return _Promise2.default.mapSeries(childMores, function (c) {
            return c.fetchTree(_extends({}, options, { amount: Infinity }), 0);
          }).then(function (expandedTrees) {
            return _this.fetchMore(_extends({}, options, { amount: options.amount - ids.length }), startIndex + ids.length).then(function (nexts) {
              return (0, _concat3.default)(resultTrees, (0, _flatten3.default)(expandedTrees), nexts);
            });
          });
        });
      }
    }, {
      key: '_clone',
      value: function _clone() {
        return new More((0, _pick3.default)(this, Object.getOwnPropertyNames(this)), this._r);
      }
    }]);

    return More;
  }();

  function getNextIdSlice(children, startIndex, desiredAmount, limit) {
    return children.slice(startIndex, startIndex + Math.min(desiredAmount, limit));
  }

  var emptyChildren = exports.emptyChildren = new More({ children: [] });
  exports.default = More;
});

var _util = ( util$1 && util ) || util$1;

var helpers = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isBrowser = exports.formatLivethreadPermissions = exports.formatModPermissions = undefined;

  var _snakeCase3 = _interopRequireDefault(snakeCase_1);

  var _remove3 = _interopRequireDefault(remove_1);

  var _property3 = _interopRequireDefault(property_1);

  var _partial3 = _interopRequireDefault(partial_1);

  var _omit3 = _interopRequireDefault(omit_1);

  var _keyBy3 = _interopRequireDefault(keyBy_1);

  var _isEmpty3 = _interopRequireDefault(isEmpty_1);

  var _includes3 = _interopRequireDefault(includes_1);

  var _find3 = _interopRequireDefault(find_1);

  var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  };

  var _extends$$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  exports.getEmptyRepliesListing = getEmptyRepliesListing;
  exports.addEmptyRepliesListing = addEmptyRepliesListing;
  exports.handleJsonErrors = handleJsonErrors;
  exports.findMessageInTree = findMessageInTree;
  exports.formatPermissions = formatPermissions;
  exports.renameKey = renameKey;
  exports.buildRepliesTree = buildRepliesTree;
  exports.addFullnamePrefix = addFullnamePrefix;
  exports.hasFullnamePrefix = hasFullnamePrefix;
  exports.addSnakeCaseShadowProps = addSnakeCaseShadowProps;
  exports.defineInspectFunc = defineInspectFunc;
  exports.requiredArg = requiredArg;

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }

  /**
  * @summary Returns an unfetched empty replies Listing for an item.
  * @param {Comment|Submission|PrivateMessage} item An item without a replies Listing
  * @returns {Listing} The empty replies Listing
  * @api private
  */
  function getEmptyRepliesListing(item) {
    if (item.constructor._name === 'Comment') {
      return item._r._newObject('Listing', {
        _uri: 'comments/' + (item.link_id || item.parent_id).slice(3),
        _query: { comment: item.name.slice(3) },
        _transform: (0, _property3.default)('comments[0].replies'),
        _link_id: item.link_id,
        _isCommentList: true
      });
    }
    if (item.constructor._name === 'Submission') {
      return item._r._newObject('Listing', {
        _uri: 'comments/' + item.id,
        _transform: (0, _property3.default)('comments'),
        _isCommentList: true
      });
    }
    return item._r._newObject('Listing');
  }

  /**
  * @summary Adds an empty replies Listing to an item.
  * @param {Comment|PrivateMessage} item
  * @returns {Comment|PrivateMessage} The item with the new replies Listing
  * @api private
  */
  function addEmptyRepliesListing(item) {
    item.replies = getEmptyRepliesListing(item);
    return item;
  }

  function handleJsonErrors(returnValue) {
    return function (response) {
      if ((0, _isEmpty3.default)(response) || (0, _isEmpty3.default)(response.json.errors)) {
        return returnValue;
      }
      throw new Error(response.json.errors[0]);
    };
  }

  /**
  * @summary Performs a depth-first search of a tree of private messages, in order to find a message with a given name.
  * @param {String} desiredName The fullname of the desired message
  * @param {PrivateMessage} rootNode The root message of the tree
  * @returns {PrivateMessage} The PrivateMessage with the given fullname, or undefined if it was not found in the tree.
  * @api private
  */
  function findMessageInTree(desiredName, rootNode) {
    return rootNode.name === desiredName ? rootNode : (0, _find3.default)(rootNode.replies.map((0, _partial3.default)(findMessageInTree, desiredName)));
  }

  /**
  * @summary Formats permissions into a '+'/'-' string
  * @param {String[]} allPermissionNames All possible permissions in this category
  * @param {String[]} permsArray The permissions that should be enabled
  * @returns {String} The permissions formatted into a '+'/'-' string
  * @api private
  */
  function formatPermissions(allPermissionNames, permsArray) {
    return permsArray ? allPermissionNames.map(function (type) {
      return ((0, _includes3.default)(permsArray, type) ? '+' : '-') + type;
    }).join(',') : '+all';
  }

  var formatModPermissions = exports.formatModPermissions = (0, _partial3.default)(formatPermissions, constants.MODERATOR_PERMISSIONS);
  var formatLivethreadPermissions = exports.formatLivethreadPermissions = (0, _partial3.default)(formatPermissions, constants.LIVETHREAD_PERMISSIONS);

  /**
  * @summary Renames a key on an object, omitting the old key
  * @param {Object} obj
  * @param oldKey {String}
  * @param newKey {String}
  * @returns {Object} A version of the object with the key renamed
  * @api private
  */
  function renameKey(obj, oldKey, newKey) {
    return obj && (0, _omit3.default)(_extends$$1({}, obj, _defineProperty({}, newKey, obj[oldKey])), oldKey);
  }

  /**
  * @summary Builds a replies tree from a list of child comments or messages
  * @desc When reddit returns private messages (or comments from the /api/morechildren endpoint), it arranges their in a very
  nonintuitive way (see https://github.com/not-an-aardvark/snoowrap/issues/15 for details). This function rearranges the message
  tree so that replies are threaded properly.
  * @param {Array} childList The list of child comments
  * @returns {Array} The resulting list of child comments, arranged into a tree.
  * @api private
  */
  function buildRepliesTree(childList) {
    var childMap = (0, _keyBy3.default)(childList, 'name');
    childList.forEach(addEmptyRepliesListing);
    childList.filter(function (child) {
      return child.constructor._name === 'Comment';
    }).forEach(function (child) {
      return child.replies._more = More_1.emptyChildren;
    });
    (0, _remove3.default)(childList, function (child) {
      return childMap[child.parent_id];
    }).forEach(function (child) {
      if (child.constructor._name === 'More') {
        childMap[child.parent_id].replies._setMore(child);
        child.link_id = childMap[child.parent_id].link_id;
      } else {
        childMap[child.parent_id].replies.push(child);
      }
    });
    return childList;
  }

  /**
  * @summary Adds a fullname prefix to an item, if it doesn't have a prefix already. If the item is a RedditContent object, gets
  the item's fullname.
  * @param {String|RedditContent} item
  * @returns {String}
  * @api private
  */
  function addFullnamePrefix(item, prefix) {
    if (typeof item === 'string') {
      return hasFullnamePrefix(item) ? item : prefix + item;
    }
    return item.name;
  }

  /**
  * @summary Determines whether a string is a "fullname". A "fullname" starts with "t1_", "t2_", ... "t8_", or "LiveUpdateEvent_".
  * @param {String} item
  * @returns {boolean}
  * @api private
  */
  function hasFullnamePrefix(item) {
    return (/^(t\d|LiveUpdateEvent)_/.test(item)
    );
  }

  /**
  * @summary Adds snake_case getters and setters to an object
  * @desc All of snoowrap's functions and object options used to be defined in snake_case. For backwards compatibility,
  snake_case property names (e.g. for the snoowrap constructor) are still supported. This function adds snake_case getters and
  setters to a camelCase object, such that accessing and setting the snake_case property also correctly set the camelCase version
  of the property.
  * @param {object} obj The object that should have getters/setters attached
  * @returns The updated version of `obj`
  * @api private
  */
  function addSnakeCaseShadowProps(obj) {
    Object.keys(obj).filter(function (key) {
      return !key.startsWith('_') && key !== (0, _snakeCase3.default)(key);
    }).forEach(function (key) {
      Object.defineProperty(obj, (0, _snakeCase3.default)(key), { get: function get() {
          return obj[key];
        }, set: function set$$1(value) {
          return obj[key] = value;
        } });
    });
    return obj;
  }

  var isBrowser = exports.isBrowser = (typeof self === 'undefined' ? 'undefined' : _typeof$$1(self)) === 'object';

  function defineInspectFunc(obj, inspectFunc) {
    if (isBrowser) {
      return;
    }
    // Use the util.inspect.custom symbol if available (Node 6.6.0+)
    var inspectKey = _util2.default.inspect && _typeof$$1(_util2.default.inspect.custom) === 'symbol' ? _util2.default.inspect.custom : 'inspect';
    Object.defineProperty(obj, inspectKey, { writable: true, enumerable: false, value: inspectFunc });
  }

  function requiredArg(argName) {
    throw new TypeError('Missing required argument ' + argName);
  }
});

var create_config = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    var config = Object.create(null);
    config.endpointDomain = 'reddit.com';
    config.requestDelay = 0;
    config.requestTimeout = 30000;
    config.continueAfterRatelimitError = false;
    config.retryErrorCodes = [502, 503, 504, 522];
    config.maxRetryAttempts = 3;
    config.warnings = true;
    config.debug = false;
    config.proxies = true;

    return (0, helpers.addSnakeCaseShadowProps)(config);
  };
});

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$4 = 1;
var CLONE_SYMBOLS_FLAG$2 = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, CLONE_DEEP_FLAG$4 | CLONE_SYMBOLS_FLAG$2);
}

var cloneDeep_1 = cloneDeep;

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject_1(objValue) && isObject_1(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    _baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

var _customDefaultsMerge = customDefaultsMerge;

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = _createAssigner(function(object, source, srcIndex, customizer) {
  _baseMerge(object, source, srcIndex, customizer);
});

var mergeWith_1 = mergeWith;

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = _baseRest(function(args) {
  args.push(undefined, _customDefaultsMerge);
  return _apply(mergeWith_1, undefined, args);
});

var defaultsDeep_1 = defaultsDeep;

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG$3 = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return _baseClone(value, CLONE_SYMBOLS_FLAG$3);
}

var clone_1 = clone;

var Listing_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _pick3 = _interopRequireDefault(pick_1);

  var _omitBy3 = _interopRequireDefault(omitBy_1);

  var _isEmpty3 = _interopRequireDefault(isEmpty_1);

  var _defaultsDeep3 = _interopRequireDefault(defaultsDeep_1);

  var _defaults3 = _interopRequireDefault(defaults_1);

  var _clone3 = _interopRequireDefault(clone_1);

  var _extends$$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _Promise2 = _interopRequireDefault(_Promise$2);

  var _util2 = _interopRequireDefault(_util);

  var _More2 = _interopRequireDefault(More_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var INTERNAL_DEFAULTS = {
    _query: {},
    _transform: function _transform(value) {
      return value;
    },
    _method: 'get',
    _isCommentList: false,
    _link_id: null,
    _uri: null,
    _more: null,
    _cachedLookahead: null
  };

  /**
  * A class representing a list of content. This is a subclass of the native Array object, so it has all the properties of
  an Array (length, forEach, etc.) in addition to some added methods. The Listing can be extended by using the
  [#fetchMore()]{@link Listing#fetchMore} and
  [#fetchAll()]{@link Listing#fetchAll} functions. Note that these methods return new Listings, rather than mutating the
  original Listing.
  *
  * Most methods that return Listings will also accept `limit`, `after`, `before`, `show`, and `count` properties.
  *
  * If you've used the reddit API before (or used other API wrappers like [PRAW](https://praw.readthedocs.org/en/stable/)), you
  might know that reddit uses a `MoreComments` object in its raw JSON responses, representing comments that have been stubbed
  out of Listings. In snoowrap, there are no exposed `MoreComments` objects; the objects returned by the reddit API are
  stripped from Listings and are used internally as sources for the `fetchMore` functions. This means that in snoowrap, Listings
  that contain Comments can be used/expanded in the same manner as Listings that don't contain Comments, and for the most part
  you don't have to worry about the distinction.
  
  (Incidentally, if you encounter a Listing that *does* contain a `MoreComments` object then it's a bug, so please report it.)
  
  * <style> #Listing {display: none} </style>
  * @extends Array
  */
  var Listing = function (_Array) {
    _inherits(Listing, _Array);

    function Listing() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _r = arguments[1];

      _classCallCheck(this, Listing);

      var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this));

      if (!(_this instanceof Listing)) {
        // Safari 9 has an incorrect implementation of classes that extend Arrays. As a workaround,
        // manually set the constructor and prototype.
        _this.constructor = Listing;
        Object.setPrototypeOf(_this, Listing.prototype);
      }
      _this.push.apply(_this, _toConsumableArray(options.children || []));
      _this._r = _r;
      _this._cachedLookahead = options._cachedLookahead;
      (0, _defaultsDeep3.default)(_this, (0, _pick3.default)(options, Object.keys(INTERNAL_DEFAULTS)), INTERNAL_DEFAULTS);
      Object.assign(_this._query, (0, _pick3.default)(options, ['before', 'after']));
      if (options.children && options.children[options.children.length - 1] instanceof _More2.default) {
        _this._setMore(_this.pop());
      }
      return _this;
    }

    _createClass(Listing, [{
      key: '_setUri',
      value: function _setUri(value) {
        var parsedUri = (0, _url.parse)(value, true);
        this._uri = parsedUri.pathname;
        (0, _defaultsDeep3.default)(this._query, parsedUri.query);
        if (parsedUri.query.before) {
          this._query.after = null;
        } else {
          this._query.before = null;
        }
      }
      /**
      * @summary A getter that indicates whether this Listing has any more items to fetch.
      * @type {boolean}
      */

    }, {
      key: 'fetchMore',

      /**
      * @summary Fetches some more items
      * @param {object} options
      * @param {number} options.amount The number of items to fetch.
      * @param {boolean} [options.skipReplies=false] For a Listing that contains comment objects on a Submission, this option can
      be used to save a few API calls, provided that only top-level comments are being examined. If this is set to `true`, snoowrap
      is able to fetch 100 Comments per API call rather than 20, but all returned Comments will have no fetched replies by default.
      *
      * Internal details: When `skipReplies` is set to `true`, snoowrap uses reddit's `api/info` endpoint to fetch Comments. When
      `skipReplies` is set to `false`, snoowrap uses reddit's `api/morechildren` endpoint. It's worth noting that reddit does
      not allow concurrent requests to the `api/morechildren` endpoint by the same account.
      * @param {boolean} [options.append=true] If `true`, the resulting Listing will contain the existing elements in addition to
      the newly-fetched elements. If `false`, the resulting Listing will only contain the newly-fetched elements.
      * @returns {Promise} A new Listing containing the newly-fetched elements. If `options.append` is `true`, the new Listing will
      also contain all elements that were in the original Listing. Under most circumstances, the newly-fetched elements will appear
      at the end of the new Listing. However, if reverse pagination is enabled (i.e. if this Listing was created with a `before`
      query parameter), then the newly-fetched elements will appear at the beginning. In any case, continuity is maintained, i.e.
      the order of items in the Listing will be the same as the order in which they appear on reddit.
      * @example
      * r.getHot({limit: 25}).then(myListing => {
      *   console.log(myListing.length); // => 25
      *   myListing.fetchMore({amount: 10}).then(extendedListing => {
      *     console.log(extendedListing.length); // => 35
      *   })
      * });
      */
      value: function fetchMore(options) {
        var parsedOptions = (0, _defaults3.default)(typeof options === 'number' ? { amount: options } : (0, _clone3.default)(options),
        // Accept either `skip_replies` or `skipReplies` for backwards compatibility.
        { append: true, skipReplies: options.skip_replies });
        if (typeof parsedOptions.amount !== 'number' || Number.isNaN(parsedOptions.amount)) {
          throw new errors.InvalidMethodCallError('Failed to fetch Listing. (`amount` parameter was missing or invalid)');
        }
        if (parsedOptions.amount <= 0 || this.isFinished) {
          return this._r._promiseWrap(_Promise2.default.resolve(parsedOptions.append ? this._clone() : this._clone()._empty()));
        }
        if (this._cachedLookahead) {
          var cloned = this._clone();
          cloned.push.apply(cloned, _toConsumableArray(cloned._cachedLookahead.splice(0, parsedOptions.amount)));
          return cloned.fetchMore(parsedOptions.amount - cloned.length + this.length);
        }
        return this._r._promiseWrap(this._more ? this._fetchMoreComments(parsedOptions) : this._fetchMoreRegular(parsedOptions));
      }
    }, {
      key: '_fetchMoreRegular',
      value: function _fetchMoreRegular(options) {
        var _this2 = this;

        var query = (0, _omitBy3.default)((0, _clone3.default)(this._query), function (value) {
          return value === null || value === undefined;
        });
        if (!this._isCommentList) {
          /* Reddit returns a different number of items per request depending on the `limit` querystring property specified in the
          request. If no `limit` property is specified, reddit returns some number of items depending on the user's preferences
          (currently 25 items with default preferences). If a `limit` property is specified, then reddit returns `limit` items per
          batch. However, this is capped at 100, so if a `limit` larger than 100 items is specified, reddit will only return 100
          items in the batch. (The cap of 100 could plausibly change to a different amount in the future.)
           However, one caveat is that reddit's parser doesn't understand the javascript `Infinity` global. If `limit=Infinity` is
          provided in the querystring, reddit won't understand the parameter so it'll just act as if no parameter was provided, and
          will return 25 items in the batch. This is suboptimal behavior as far as snoowrap is concerned, because it means that 4
          times as many requests are needed to fetch the entire listing.
           To get around the issue, snoowrap caps the `limit` property at Number.MAX_SAFE_INTEGER when sending requests. This ensures
          that `Infinity` will never be sent as part of the querystring, so reddit will always return the maximal 100 items per
          request if the desired amount of items is large. */
          query.limit = Math.min(options.amount, Number.MAX_SAFE_INTEGER);
        }
        return this._r.oauthRequest({
          uri: this._uri,
          qs: query,
          method: this._method
        }).then(this._transform).then(function (response) {
          var cloned = _this2._clone();
          if (!options.append) {
            cloned._empty();
          }
          if (cloned._query.before) {
            cloned.unshift.apply(cloned, _toConsumableArray(response));
            cloned._query.before = response._query.before;
            cloned._query.after = null;
          } else {
            cloned.push.apply(cloned, _toConsumableArray(response));
            cloned._query.before = null;
            cloned._query.after = response._query.after;
          }
          if (_this2._isCommentList) {
            cloned._more = cloned._more || response._more || More_1.emptyChildren;
            if (response.length > options.amount) {
              cloned._cachedLookahead = Array.from(cloned.splice(options.amount));
            }
          }
          return cloned.fetchMore(_extends$$1({}, options, { append: true, amount: options.amount - response.length }));
        });
      }
      /* Pagination for comments works differently than it does for most other things; rather than sending a link to the next page
      within a Listing, reddit sends the last comment in the list as as a `more` object, with links to all the remaining comments
      in the thread. */

    }, {
      key: '_fetchMoreComments',
      value: function _fetchMoreComments(options) {
        var _this3 = this;

        return this._more.fetchMore(options).then(function (moreComments) {
          var cloned = _this3._clone();
          if (!options.append) {
            cloned._empty();
          }
          cloned.push.apply(cloned, _toConsumableArray(moreComments));
          cloned._more.children = cloned._more.children.slice(options.amount);
          return cloned;
        });
      }
      /**
      * @summary Fetches all of the items in this Listing, only stopping when there are none left.
      * @param {object} [options] Fetching options -- see {@link Listing#fetchMore}
      * @returns {Promise} A new fully-fetched Listing. Keep in mind that this method has the potential to exhaust your
      ratelimit quickly if the Listing doesn't have a clear end (e.g. with posts on the front page), so use it with discretion.
      * @example
      *
      * r.getMe().getUpvotedContent().fetchAll().then(console.log)
      * // => Listing [ Submission { ... }, Submission { ... }, ... ]
      */

    }, {
      key: 'fetchAll',
      value: function fetchAll(options) {
        return this.fetchMore(_extends$$1({}, options, { amount: Infinity }));
      }
    }, {
      key: 'fetchUntil',
      value: function fetchUntil(options) {
        this._r._warn('Listing#fetchUntil is deprecated -- use Listing#fetchMore instead.');
        return this.fetchMore(_extends$$1({}, options, { append: true, amount: options.length - this.length }));
      }
    }, {
      key: '_clone',
      value: function _clone() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$deep = _ref.deep,
            deep = _ref$deep === undefined ? false : _ref$deep;

        var properties = (0, _pick3.default)(this, Object.keys(INTERNAL_DEFAULTS));
        properties._query = (0, _clone3.default)(properties._query);
        properties._cachedLookahead = (0, _clone3.default)(properties._cachedLookahead);
        properties._more = this._more && this._more._clone();
        var shallowChildren = Array.from(this);
        properties.children = deep ? shallowChildren.map(function (item) {
          return '_clone' in item && typeof item._clone === 'function' ? item._clone({ deep: deep }) : item;
        }) : shallowChildren;
        return new Listing(properties, this._r);
      }
    }, {
      key: '_setMore',
      value: function _setMore(moreObj) {
        this._more = moreObj;
        this._isCommentList = true;
      }
    }, {
      key: '_empty',
      value: function _empty() {
        this.splice(0, this.length);
        return this;
      }
    }, {
      key: 'toJSON',
      value: function toJSON() {
        return Array.from(this).map(function (item) {
          return item && item.toJSON ? item.toJSON() : item;
        });
      }
    }, {
      key: 'isFinished',
      get: function get() {
        // The process of checking whether a Listing is 'finished' varies depending on what kind of Listing it is.
        return this._isCommentList
        /* For comment Listings (i.e. Listings containing comments and comment replies, sourced by `more` objects): A Listing is
        *never* finished if it has a cached lookahead (i.e. extra items that were fetched from a previous request). If there is
        no cached lookahead, a Listing is finished iff it has an empty `more` object. */
        ? (0, _isEmpty3.default)(this._cachedLookahead) && !!this._more && (0, _isEmpty3.default)(this._more.children)
        /* For non-comment Listings: A Listing is always finished if it has no URI (since there would be nowhere to fetch items
        from). If it has a URI, a Listing is finished iff its `before` and `after` query are both `null`. This is because reddit
        returns a value of `null` as the `after` and `before` parameters to signify that a Listing is complete.
         It is important to check for `null` here rather than any falsey value, because when an empty Listing is initialized, its
        `after` and `before` properties are both `undefined`, but calling these empty Listings `finished` would be incorrect. */
        : !this._uri || this._query.after === null && this._query.before === null;
      }
    }, {
      key: 'is_finished',
      get: function get() {
        // camel-case alias for backwards-compatibility.
        // As a getter, the `isFinished` property doesn't have an alias like everything else.
        return this.isFinished;
      }
    }]);

    return Listing;
  }(Array);

  (0, helpers.defineInspectFunc)(Listing.prototype, function () {
    return 'Listing ' + _util2.default.inspect(Array.from(this));
  });

  exports.default = Listing;
});

var RedditContent_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _pick3 = _interopRequireDefault(pick_1);

  var _mapValues3 = _interopRequireDefault(mapValues_1);

  var _cloneDeep3 = _interopRequireDefault(cloneDeep_1);

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _Promise2 = _interopRequireDefault(_Promise$2);

  var _util2 = _interopRequireDefault(_util);

  var _Listing2 = _interopRequireDefault(Listing_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  /**
  * A base class for content from reddit. With the expection of Listings, all content types extend this class.
  * This class should be considered 'abstract', to the extend that JavaScript classes can be -- it should not be necessary to
  * instantiate it directly.
  * <style> #RedditContent {display: none} </style>
  */
  var RedditContent = function () {
    function RedditContent(options, _r, _hasFetched) {
      _classCallCheck(this, RedditContent);

      // _r refers to the snoowrap requester that is used to fetch this content.
      this._r = _r;
      this._fetch = null;
      this._hasFetched = !!_hasFetched;
      Object.assign(this, options);
      if (typeof Proxy !== 'undefined' && !this._hasFetched && _r._config.proxies) {
        return new Proxy(this, {
          get: function get(target, key) {
            return key in target || key === 'length' || key in _Promise2.default.prototype ? target[key] : target.fetch()[key];
          }
        });
      }
    }
    /**
    * @summary Fetches this content from reddit.
    * @desc This will not mutate the original content object; all Promise properties will remain as Promises after the content has
    * been fetched. However, the information on this object will be cached, so it may become out-of-date with the content on
    * reddit. To clear the cache and fetch this object from reddit again, use `refresh()`.
    *
    * If snoowrap is running in an environment that supports ES2015 Proxies (e.g. Chrome 49+), then `fetch()` will get
    * automatically called when an unknown property is accessed on an unfetched content object.
    * @returns {Promise} A version of this object with all of its fetched properties from reddit. This will not mutate the
    object. Once an object has been fetched once, its properties will be cached, so they might end up out-of-date if this
    function is called again. To refresh an object, use refresh().
    * @example
    *
    * r.getUser('not_an_aardvark').fetch().then(userInfo => {
    *   console.log(userInfo.name); // 'not_an_aardvark'
    *   console.log(userInfo.created_utc); // 1419104352
    * });
    *
    * r.getComment('d1xchqn').fetch().then(comment => comment.body).then(console.log)
    * // => 'This is a little too interesting for my liking'
    *
    * // In environments that support ES2015 Proxies, the above line is equivalent to:
    * r.getComment('d1xchqn').body.then(console.log);
    * // => 'This is a little too interesting for my liking'
    */

    _createClass(RedditContent, [{
      key: 'fetch',
      value: function fetch() {
        var _this = this;

        if (!this._fetch) {
          this._fetch = this._r._promiseWrap(this._r._get({ uri: this._uri }).then(function (res) {
            return _this._transformApiResponse(res);
          }));
        }
        return this._fetch;
      }
      /**
      * @summary Refreshes this content.
      * @returns {Promise} A newly-fetched version of this content
      * @example
      *
      * var someComment = r.getComment('cmfkyus');
      * var initialCommentBody = some_comment.fetch().then(comment => comment.body);
      *
      * setTimeout(() => {
      *   someComment.refresh().then(refreshedComment => {
      *     if (initialCommentBody.value() !== refreshedComment.body) {
      *       console.log('This comment has changed since 10 seconds ago.');
      *     }
      *   });
      * }, 10000);
      */

    }, {
      key: 'refresh',
      value: function refresh() {
        this._fetch = null;
        return this.fetch();
      }
      /**
      * @summary Returns a stringifyable version of this object.
      * @desc It is usually not necessary to call this method directly; simply running JSON.stringify(some_object) will strip the
      private properties anyway.
      * @returns {object} A version of this object with all the private properties stripped
      * @example
      *
      * var user = r.getUser('not_an_aardvark');
      * JSON.stringify(user) // => '{"name":"not_an_aardvark"}'
      */

    }, {
      key: 'toJSON',
      value: function toJSON() {
        return (0, _mapValues3.default)(this._stripPrivateProps(), function (value, key) {
          if (value instanceof RedditContent && !value._hasFetched) {
            if (value.constructor._name === 'RedditUser' && constants.USER_KEYS.has(key)) {
              return value.name;
            }
            if (value.constructor._name === 'Subreddit' && constants.SUBREDDIT_KEYS.has(key)) {
              return value.display_name;
            }
          }
          return value && value.toJSON ? value.toJSON() : value;
        });
      }
    }, {
      key: '_stripPrivateProps',
      value: function _stripPrivateProps() {
        return (0, _pick3.default)(this, Object.keys(this).filter(function (key) {
          return !key.startsWith('_');
        }));
      }
    }, {
      key: '_transformApiResponse',
      value: function _transformApiResponse(response) {
        return response;
      }
    }, {
      key: '_clone',
      value: function _clone() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$deep = _ref.deep,
            deep = _ref$deep === undefined ? false : _ref$deep;

        var clonedProps = (0, _mapValues3.default)(this, function (value) {
          if (deep) {
            return value instanceof RedditContent || value instanceof _Listing2.default ? value._clone({ deep: deep }) : (0, _cloneDeep3.default)(value);
          }
          return value;
        });
        return this._r._newObject(this.constructor._name, clonedProps, this._hasFetched);
      }
    }, {
      key: '_getListing',
      value: function _getListing() {
        var _r2;

        return (_r2 = this._r)._getListing.apply(_r2, arguments);
      }
    }]);

    return RedditContent;
  }();

  (0, helpers.defineInspectFunc)(RedditContent.prototype, function () {
    return this.constructor._name + ' ' + _util2.default.inspect(this._stripPrivateProps());
  });

  constants.HTTP_VERBS.forEach(function (method) {
    Object.defineProperty(RedditContent.prototype, '_' + method, {
      value: function value() {
        var _r3;

        return (_r3 = this._r)['_' + method].apply(_r3, arguments);
      },
      configurable: true, writable: true });
  });

  exports.default = RedditContent;
});

var ReplyableContent_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _RedditContent3 = _interopRequireDefault(RedditContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var api_type = 'json';

  /**
  * A set of mixin functions that apply to Submissions, Comments, and PrivateMessages
  * <style> #ReplyableContent {display: none} </style>
  * @extends RedditContent
  */
  var ReplyableContent = function (_RedditContent) {
    _inherits(ReplyableContent, _RedditContent);

    function ReplyableContent() {
      _classCallCheck(this, ReplyableContent);

      return _possibleConstructorReturn(this, (ReplyableContent.__proto__ || Object.getPrototypeOf(ReplyableContent)).apply(this, arguments));
    }

    _createClass(ReplyableContent, [{
      key: 'remove',

      /**
      * @summary Removes this Comment, Submission or PrivateMessage from public listings.
      * @desc This requires the authenticated user to be a moderator of the subreddit with the `posts` permission.
      * @param {object} options
      * @param {boolean} [options.spam=false] Determines whether this should be marked as spam
      * @returns {Promise} A Promise that fulfills with this content when the request is complete
      * @example r.getComment('c08pp5z').remove({spam: true})
      */
      value: function remove() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$spam = _ref.spam,
            spam = _ref$spam === undefined ? false : _ref$spam;

        return this._post({ uri: 'api/remove', form: { spam: spam, id: this.name } }).return(this);
      }
      /**
      * @summary Approves this Comment, Submission, or PrivateMessage, re-adding it to public listings if it had been removed
      * @returns {Promise} A Promise that fulfills with this content when the request is complete
      * @example r.getComment('c08pp5z').remove()
      */

    }, {
      key: 'approve',
      value: function approve() {
        return this._post({ uri: 'api/approve', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Reports this content anonymously to subreddit moderators (for Comments and Submissions)
      or to the reddit admins (for PrivateMessages)
      * @param {object} [options]
      * @param {string} [options.reason] The reason for the report
      * @returns {Promise} A Promise that fulfills with this content when the request is complete
      * @example r.getComment('c08pp5z').report({reason: 'Breaking the subreddit rules'})
      */

    }, {
      key: 'report',
      value: function report() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            reason = _ref2.reason;

        return this._post({ uri: 'api/report', form: {
            api_type: api_type, reason: 'other', other_reason: reason, thing_id: this.name
          } }).return(this);
      }
      /**
      * @summary Ignores reports on this Comment, Submission, or PrivateMessage
      * @returns {Promise} A Promise that fulfills with this content when the request is complete
      * @example r.getComment('c08pp5z').ignoreReports()
      */

    }, {
      key: 'ignoreReports',
      value: function ignoreReports() {
        return this._post({ uri: 'api/ignore_reports', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Unignores reports on this Comment, Submission, or PrivateMessages
      * @returns {Promise} A Promise that fulfills with this content when the request is complete
      * @example r.getComment('c08pp5z').unignoreReports()
      */

    }, {
      key: 'unignoreReports',
      value: function unignoreReports() {
        return this._post({ uri: 'api/unignore_reports', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Submits a new reply to this object. (This takes the form of a new Comment if this object is a Submission/Comment,
      or a new PrivateMessage if this object is a PrivateMessage.)
      * @param {string} text The content of the reply, in raw markdown text
      * @returns {Promise} A Promise that fulfills with the newly-created reply
      * @example r.getSubmission('4e60m3').reply('This was an interesting post. Thanks.');
      */

    }, {
      key: 'reply',
      value: function reply(text) {
        return this._post({
          uri: 'api/comment',
          form: { api_type: api_type, text: text, thing_id: this.name }
        }).tap((0, helpers.handleJsonErrors)(this)).then(function (res) {
          return res.json.data.things[0];
        });
      }
      /**
      * @summary Blocks the author of this content.
      * @desc **Note:** In order for this function to have an effect, this item **must** be in the authenticated account's inbox or
      modmail somewhere. The reddit API gives no outward indication of whether this condition is satisfied, so the returned Promise
      will fulfill even if this is not the case.
      * @returns {Promise} A Promise that fulfills with this message after the request is complete
      * @example
      *
      * r.getInbox({limit: 1}).then(messages =>
      *   messages[0].blockAuthor();
      * );
      */

    }, {
      key: 'blockAuthor',
      value: function blockAuthor() {
        return this._post({ uri: 'api/block', form: { id: this.name } }).return(this);
      }
    }]);

    return ReplyableContent;
  }(_RedditContent3.default);

  exports.default = ReplyableContent;
});

var VoteableContent_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _Promise2 = _interopRequireDefault(_Promise$2);

  var _ReplyableContent3 = _interopRequireDefault(ReplyableContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var api_type = 'json';

  /**
  * A set of mixin functions that apply to Submissions and Comments.
  * <style> #VoteableContent {display: none} </style>
  * @extends ReplyableContent
  */
  var VoteableContent = function (_ReplyableContent) {
    _inherits(VoteableContent, _ReplyableContent);

    function VoteableContent() {
      _classCallCheck(this, VoteableContent);

      return _possibleConstructorReturn(this, (VoteableContent.__proto__ || Object.getPrototypeOf(VoteableContent)).apply(this, arguments));
    }

    _createClass(VoteableContent, [{
      key: '_vote',

      /**
      * @summary Casts a vote on this Comment or Submission.
      * @private
      * @param {number} direction The direction of the vote. (1 for an upvote, -1 for a downvote, 0 to remove a vote)
      * @returns {Promise} A Promise that fulfills when the request is complete.
      */
      value: function _vote(direction) {
        return this._post({ uri: 'api/vote', form: { dir: direction, id: this.name } }).return(this);
      }
      /**
      * @summary Upvotes this Comment or Submission.
      * @returns {Promise} A Promise that fulfills with this Comment/Submission when the request is complete
      * @desc **Note: votes must be cast by humans.** That is, API clients proxying a human's action one-for-one are OK,
      but bots deciding how to vote on content or amplifying a human's vote are not. See the
      [reddit rules](https://reddit.com/rules) for more details on what constitutes vote cheating. (This guideline is quoted from
      [the official reddit API documentation page](https://www.reddit.com/dev/api#POST_api_vote).)
      * @example r.getSubmission('4e62ml').upvote()
      */

    }, {
      key: 'upvote',
      value: function upvote() {
        return this._vote(1);
      }
      /**
      * @summary Downvotes this Comment or Submission.
      * @returns {Promise} A Promise that fulfills with this Comment/Submission when the request is complete.
      * @desc **Note: votes must be cast by humans.** That is, API clients proxying a human's action one-for-one are OK, but
      bots deciding how to vote on content or amplifying a human's vote are not. See the [reddit rules](https://reddit.com/rules)
      for more details on what constitutes vote cheating. (This guideline is quoted from
      [the official reddit API documentation page](https://www.reddit.com/dev/api#POST_api_vote).)
      * @example r.getSubmission('4e62ml').downvote()
      */

    }, {
      key: 'downvote',
      value: function downvote() {
        return this._vote(-1);
      }
      /**
      * @summary Removes any existing vote on this Comment or Submission.
      * @returns {Promise} A Promise that fulfills with this Comment/Submission when the request is complete.
      * @desc **Note: votes must be cast by humans.** That is, API clients proxying a human's action one-for-one are OK, but
      bots deciding how to vote on content or amplifying a human's vote are not. See the [reddit rules](https://reddit.com/rules)
      for more details on what constitutes vote cheating. (This guideline is quoted from
      [the official reddit API documentation page](https://www.reddit.com/dev/api#POST_api_vote).)
      * @example r.getSubmission('4e62ml').unvote()
      */

    }, {
      key: 'unvote',
      value: function unvote() {
        return this._vote(0);
      }
      /**
      * @summary Saves this Comment or Submission (i.e. adds it to the list at reddit.com/saved)
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example r.getSubmission('4e62ml').save()
      */

    }, {
      key: 'save',
      value: function save() {
        return this._post({ uri: 'api/save', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Unsaves this item
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example r.getSubmission('4e62ml').unsave()
      */

    }, {
      key: 'unsave',
      value: function unsave() {
        return this._post({ uri: 'api/unsave', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Distinguishes this Comment or Submission with a sigil.
      * @desc **Note:** This function will only work if the requester is the author of this Comment/Submission.
      * @param {object} options
      * @param {boolean|string} [options.status=true] Determines how the item should be distinguished.
      `true` (default) signifies that the item should be moderator-distinguished, and
      `false` signifies that the item should not be distinguished. Passing a string (e.g.
      `admin`) will cause the item to get distinguished with that string, if possible.
      * @param {boolean} [options.sticky=false] Determines whether this item should be stickied in addition to being
      distinguished. (This only applies to comments; to sticky a submission, use {@link Submission#sticky} instead.)
      * @returns {Promise} A Promise that fulfills when the request is complete.
      * @example r.getComment('d1xclfo').distinguish({status: true, sticky: true})
      */

    }, {
      key: 'distinguish',
      value: function distinguish() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$status = _ref.status,
            status = _ref$status === undefined ? true : _ref$status,
            _ref$sticky = _ref.sticky,
            sticky = _ref$sticky === undefined ? false : _ref$sticky;

        return this._post({ uri: 'api/distinguish', form: {
            api_type: api_type,
            how: status === true ? 'yes' : status === false ? 'no' : status,
            sticky: sticky,
            id: this.name
          } }).return(this);
      }
      /**
      * @summary Undistinguishes this Comment or Submission. Alias for distinguish({status: false})
      * @returns {Promise} A Promise that fulfills when the request is complete.
      * @example r.getSubmission('4e62ml').undistinguish()
      */

    }, {
      key: 'undistinguish',
      value: function undistinguish() {
        return this.distinguish({ status: false, sticky: false }).return(this);
      }
      /**
      * @summary Edits this Comment or Submission.
      * @param {string} updatedText The updated markdown text to use
      * @returns {Promise} A Promise that fulfills when this request is complete.
      * @example r.getComment('coip909').edit('Blah blah blah this is new updated text')
      */

    }, {
      key: 'edit',
      value: function edit(updatedText) {
        return this._post({
          uri: 'api/editusertext',
          form: { api_type: api_type, text: updatedText, thing_id: this.name }
        }).tap((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Gives reddit gold to the author of this Comment or Submission.
      * @returns {Promise} A Promise that fullfills with this Comment/Submission when this request is complete
      * @example r.getComment('coip909').gild()
      */

    }, {
      key: 'gild',
      value: function gild() {
        return this._post({ uri: 'api/v1/gold/gild/' + this.name }).return(this);
      }
    }, {
      key: '_setInboxRepliesEnabled',
      value: function _setInboxRepliesEnabled(state) {
        return this._post({ uri: 'api/sendreplies', form: { state: state, id: this.name } });
      }
      /**
      * @summary Enables inbox replies on this Comment or Submission
      * @returns {Promise} A Promise that fulfills with this content when the request is complete
      * @example r.getComment('coip909').enableInboxReplies()
      */

    }, {
      key: 'enableInboxReplies',
      value: function enableInboxReplies() {
        return this._setInboxRepliesEnabled(true).return(this);
      }
      /**
      * @summary Disables inbox replies on this Comment or Submission
      * @returns {Promise} A Promise that fulfills with this content when the request is complete
      * @example r.getComment('coip909').disableInboxReplies()
      */

    }, {
      key: 'disableInboxReplies',
      value: function disableInboxReplies() {
        return this._setInboxRepliesEnabled(false).return(this);
      }
    }, {
      key: '_mutateAndExpandReplies',
      value: function _mutateAndExpandReplies(_ref2) {
        var _this2 = this;

        var limit = _ref2.limit,
            depth = _ref2.depth;

        if (depth <= 0) {
          return _Promise2.default.resolve(this);
        }
        var repliesKey = this.constructor._name === 'Submission' ? 'comments' : 'replies';
        return this[repliesKey].fetchMore({ amount: limit - this[repliesKey].length }).tap(function (replies) {
          _this2[repliesKey] = replies;
        }).then(function (replies) {
          return replies.slice(0, limit);
        }).map(function (reply) {
          return reply._mutateAndExpandReplies({ limit: limit, depth: depth - 1 });
        }).return(this);
      }
      /**
      * @summary Expands the reply Listings on this Comment/Submission.
      * @desc This is useful in cases where one wants to enumerate all comments on a
      thread, even the ones that are initially hidden when viewing it (e.g. long comment chains).
      *
      * This function accepts two optional parameters `options.limit` and `options.depth`. `options.limit` sets an upper bound
      for the branching factor of the resulting replies tree, i.e. the number of comments that are fetched in reply to any given
      item. `options.depth` sets an upper bound for the depth of the resulting replies tree (where a depth of 0 signifies that no
      replies should be fetched at all).
      *
      * Note that regardless of the `limit` and `depth` parameters used, any reply that appeared in the original reply tree will
      appear in the expanded reply tree. In certain cases, the depth of the resulting tree may also be larger than `options.depth`,
      if the reddit API returns more of a comment tree than needed.
      *
      * These parameters should primarily be used to keep the request count low; if a precise limit and depth are needed, it is
      recommended to manually verify the comments in the tree afterwards.
      *
      * Both parameters default to `Infinity` if omitted, i.e. the resulting tree contains every single comment available. It should
      be noted that depending on the size and depth of the thread, fetching every single comment can use up a significant number
      of ratelimited requests. (To give an intuitive estimate, consider how many clicks would be needed to view all the
      comments on the thread using the HTML site.)
      * @param {object} [options={}]
      * @param {number} [options.limit=Infinity] An upper-bound for the branching factor of the resulting tree of replies
      * @param {number} [options.depth=Infinity] An upper-bound for the depth of the resulting tree of replies
      * @returns {Promise} A Promise that fulfills with a new version of this object that has an expanded reply tree. The original
      object is not modified
      * @example r.getSubmission('4fuq26').expandReplies().then(console.log)
      * // => (a very large comment tree containing every viewable comment on this thread)
      */

    }, {
      key: 'expandReplies',
      value: function expandReplies() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref3$limit = _ref3.limit,
            limit = _ref3$limit === undefined ? Infinity : _ref3$limit,
            _ref3$depth = _ref3.depth,
            depth = _ref3$depth === undefined ? Infinity : _ref3$depth;

        return this._r._promiseWrap(this.fetch().then(function (result) {
          return result._clone({ deep: true })._mutateAndExpandReplies({ limit: limit, depth: depth });
        }));
      }
    }]);

    return VoteableContent;
  }(_ReplyableContent3.default);

  // VoteableContent#delete is not in the class body since Safari 9 can't parse the `delete` function name in class bodies.
  /**
  * @function
  * @name delete
  * @summary Deletes this Comment or Submission
  * @returns {Promise} A Promise that fulfills with this Comment/Submission when this request is complete
  * @example r.getComment('coip909').delete()
  * @memberof VoteableContent
  * @instance
  */
  Object.defineProperty(VoteableContent.prototype, 'delete', {
    value: function value() {
      return this._post({ uri: 'api/del', form: { id: this.name } }).return(this);
    },
    configurable: true, writable: true });

  exports.default = VoteableContent;
});

var Comment_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _Listing2 = _interopRequireDefault(Listing_1);

  var _VoteableContent3 = _interopRequireDefault(VoteableContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
  * A class representing a reddit comment
  * <style> #Comment {display: none} </style>
  * @example
  *
  * // Get a comment with the given ID
  * r.getComment('c0hkuyq')
  *
  * @extends VoteableContent
  */
  var Comment = function (_VoteableContent) {
    _inherits(Comment, _VoteableContent);

    function Comment(options, _r, _hasFetched) {
      _classCallCheck(this, Comment);

      var _this = _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).call(this, options, _r, _hasFetched));

      if (_hasFetched) {
        /* If a comment is in a deep comment chain, reddit will send a single `more` object with name `t1__` in place of the
        comment's replies. This is the equivalent of seeing a 'Continue this thread' link on the HTML site, and it indicates that
        replies should be fetched by sending another request to view the deep comment alone, and parsing the replies from that. */
        if (_this.replies instanceof _Listing2.default && !_this.replies.length && _this.replies._more && _this.replies._more.name === 't1__') {
          _this.replies = (0, helpers.getEmptyRepliesListing)(_this);
        } else if (_this.replies === '') {
          /* If a comment has no replies, reddit returns an empty string as its `replies` property rather than an empty Listing.
          This behavior is unexpected, so replace the empty string with an empty Listing. */
          _this.replies = _this._r._newObject('Listing', { children: [], _more: More_1.emptyChildren, _isCommentList: true });
        } else if (_this.replies._more && !_this.replies._more.link_id) {
          _this.replies._more.link_id = _this.link_id;
        }
      }
      return _this;
    }

    _createClass(Comment, [{
      key: '_transformApiResponse',
      value: function _transformApiResponse(response) {
        return (0, helpers.addEmptyRepliesListing)(response[0]);
      }
    }, {
      key: '_uri',
      get: function get() {
        return 'api/info?id=' + this.name;
      }
    }]);

    return Comment;
  }(_VoteableContent3.default);

  exports.default = Comment;
});

var RedditUser_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends$$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _RedditContent3 = _interopRequireDefault(RedditContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
  * A class representing a reddit user
  * <style> #RedditUser {display: none} </style>
  * @extends ReplyableContent
  * @example
  *
  * // Get a user with the given username
  * r.getUser('spez')
  */
  var RedditUser = function (_RedditContent) {
    _inherits(RedditUser, _RedditContent);

    function RedditUser() {
      _classCallCheck(this, RedditUser);

      return _possibleConstructorReturn(this, (RedditUser.__proto__ || Object.getPrototypeOf(RedditUser)).apply(this, arguments));
    }

    _createClass(RedditUser, [{
      key: 'giveGold',

      /**
      * @summary Gives reddit gold to a user
      * @param {number} months The number of months of gold to give. This must be a number between 1 and 36.
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example r.getUser('not_an_aardvark').giveGold(12)
      */
      value: function giveGold(months) {
        /* Ideally this would allow for more than 36 months by sending multiple requests, but I don't have the resources to test
        that code, and it's probably better that such a big investment be deliberate anyway. */
        if (typeof months !== 'number' || months < 1 || months > 36) {
          throw new errors.InvalidMethodCallError('Invalid argument to RedditUser#giveGold; `months` must be between 1 and 36.');
        }
        return this._post({ uri: 'api/v1/gold/give/' + this.name, form: { months: months } });
      }
      /**
      * Assigns flair to this user on a given subreddit (as a moderator).
      * @param {object} options
      * @param {string} options.subredditName The subreddit that flair should be assigned on
      * @param {string} [options.text=''] The text that the user's flair should have
      * @param {string} [options.cssClass=''] The CSS class that the user's flair should have
      * @returns {Promise} A Promise that fulfills with the current user after the request is complete
      * @example r.getUser('not_an_aardvark').assignFlair({subredditName: 'snoowrap', text: "Isn't an aardvark"})
      */

    }, {
      key: 'assignFlair',
      value: function assignFlair(options) {
        return this._r._assignFlair(_extends$$1({}, options, { name: this.name })).return(this);
      }
      /**
      * @summary Adds this user as a friend, or modifies their friend note.
      * @desc **Note:** reddit.com only permits "notes" to be added on friends if the authenticated account has a subscription to
      reddit gold.
      * @param {object} options
      * @param {string} [options.note] An optional note to add on the user (300 characters max)
      * @returns {Promise} A Promise that fulfills when this request is complete
      * @example r.getUser('actually_an_aardvark').friend({note: 'Is an aardvark'})
      */

    }, {
      key: 'friend',
      value: function friend() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            note = _ref.note;

        return this._put({ uri: 'api/v1/me/friends/' + this.name, body: { user: this.name, note: note } }).return(this);
      }
      /**
      * @summary Removes this user from the requester's friend list.
      * @returns {Promise} A Promise that fulfills with this user when the request is complete
      * @example r.getUser('actually_an_aardvark').unfriend()
      */

    }, {
      key: 'unfriend',
      value: function unfriend() {
        return this._delete({ uri: 'api/v1/me/friends/' + this.name });
      }
      /**
      * @summary Gets information on this user related to their presence on the friend list.
      * @returns {Promise} A Promise that fulfills with an object containing friend information
      * @example
      *
      * r.getUser('not_an_aardvark').getFriendInformation().then(console.log)
      * // => { date: 1460318190, note: 'Is an aardvark', name: 'actually_an_aardvark', id: 't2_q3519' }
      */

    }, {
      key: 'getFriendInformation',
      value: function getFriendInformation() {
        return this._get({ uri: 'api/v1/me/friends/' + this.name });
      }
      /**
      * @summary Gets a list of this user's trophies.
      * @returns {Promise} A TrophyList containing this user's trophies
      * @example
      *
      * r.getUser('not_an_aardvark').getTrophies().then(console.log)
      * // => TrophyList { trophies: [
      * //  Trophy { ... },
      * //  Trophy { ... },
      * //  ...
      * // ] }
      */

    }, {
      key: 'getTrophies',
      value: function getTrophies() {
        return this._get({ uri: 'api/v1/user/' + this.name + '/trophies' });
      }
      /**
      * @summary Gets a Listing of the content this user has submitted.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions and Comments
      * @example
      *
      * r.getUser('spez').getOverview().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getOverview',
      value: function getOverview(options) {
        return this._getListing({ uri: 'user/' + this.name + '/overview', qs: options });
      }
      /**
      * @summary Gets a Listing of this user's submissions.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions
      * @example
      *
      * r.getUser('spez').getSubmissions().then(console.log)
      * // => Listing [
      * //  Submission { ... },
      * //  Submission { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getSubmissions',
      value: function getSubmissions(options) {
        return this._getListing({ uri: 'user/' + this.name + '/submitted', qs: options });
      }
      /**
      * @summary Gets a Listing of this user's comments.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Comments
      * @example
      *
      * r.getUser('spez').getComments().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Comment { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getComments',
      value: function getComments(options) {
        return this._getListing({ uri: 'user/' + this.name + '/comments', qs: options });
      }
      /**
      * @summary Gets a Listing of the content that this user has upvoted.
      * @desc **Note**: This can only be used to view one's own upvoted content, unless the user in question has chosen to
      make this information public in their preferences.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions and Comments
      * @example
      *
      * r.getMe().getUpvotedContent().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getUpvotedContent',
      value: function getUpvotedContent(options) {
        return this._getListing({ uri: 'user/' + this.name + '/upvoted', qs: options });
      }
      /**
      * @summary Gets a Listing of the content that this user has downvoted.
      * @desc **Note**: This can only be used to view one's own downvoted content, unless the user in question has chosen to
      make this information public in their preferences.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions and Comments
      * @example
      *
      * r.getMe().getDownvotedContent().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getDownvotedContent',
      value: function getDownvotedContent(options) {
        return this._getListing({ uri: 'user/' + this.name + '/downvoted', qs: options });
      }
      /**
      * @summary Gets a Listing of the submissions that this user has hidden.
      * @desc **Note**: This can only be used to view one's own set of hidden posts, as reddit will return a 403 error when
      attempting to view another users' hidden posts.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions
      * @example
      *
      * r.getMe().getHiddenContent().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getHiddenContent',
      value: function getHiddenContent(options) {
        return this._getListing({ uri: 'user/' + this.name + '/hidden', qs: options });
      }
      /**
      * @summary Gets a Listing of the content that this user has saved.
      * @desc **Note**: This can only be used to view one's own set of saved content, as reddit will return a 403 error when
      attempting to view other users' saved content.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions and Comments.
      * @example
      *
      * r.getMe().getSavedContent().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getSavedContent',
      value: function getSavedContent(options) {
        return this._getListing({ uri: 'user/' + this.name + '/saved', qs: options });
      }
      /**
      * @summary Gets a Listing of this user's content which has been gilded.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions and Comments
      * @example
      *
      * r.getMe().getGildedContent().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getGildedContent',
      value: function getGildedContent(options) {
        return this._getListing({ uri: 'user/' + this.name + '/gilded', qs: options });
      }
      /**
      * @summary Gets a multireddit belonging to this user.
      * @param {string} name The name of the multireddit
      * @returns {MultiReddit} An unfetched MultiReddit object
      * @example
      *
      * r.getUser('multi-mod').getMultireddit('coding_languages')
      * // => MultiReddit {
      * //  name: 'coding_languages',
      * //  curator: RedditUser { name: 'multi-mod' },
      * //  path: '/user/multi-mod/m/coding_languages'
      * // }
      */

    }, {
      key: 'getMultireddit',
      value: function getMultireddit(name) {
        return this._r._newObject('MultiReddit', { name: name, curator: this });
      }
      /**
      * @summary Gets an Array of all of this user's MultiReddits.
      * @returns {Promise} A Promise that fulfills with an Array containing MultiReddits.
      * @example
      *
      * r.getUser('multi-mod').getMultireddits().then(console.log)
      *
      * // => [
      *   MultiReddit { ... },
      *   MultiReddit { ... },
      *   MultiReddit { ... },
      *   ...
      * ]
      */

    }, {
      key: 'getMultireddits',
      value: function getMultireddits() {
        return this._get({ uri: 'api/multi/user/' + this.name, qs: { expand_srs: true } });
      }
    }, {
      key: '_uri',
      get: function get() {
        if (typeof this.name !== 'string' || !constants.USERNAME_REGEX.test(this.name)) {
          throw new errors.InvalidUserError(this.name);
        }
        return 'user/' + this.name + '/about';
      }
    }]);

    return RedditUser;
  }(_RedditContent3.default);

  exports.default = RedditUser;
});

var Submission_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends$$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _VoteableContent3 = _interopRequireDefault(VoteableContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var api_type = 'json';

  /**
  * A class representing a reddit submission
  * <style> #Submission {display: none} </style>
  * @extends VoteableContent
  * @example
  *
  * // Get a submission by ID
  * r.getSubmission('2np694')
  */
  var Submission = function (_VoteableContent) {
    _inherits(Submission, _VoteableContent);

    function Submission(data, _r, _hasFetched) {
      _classCallCheck(this, Submission);

      var _this = _possibleConstructorReturn(this, (Submission.__proto__ || Object.getPrototypeOf(Submission)).call(this, data, _r, _hasFetched));

      if (_hasFetched) {
        _this.comments = _this.comments || (0, helpers.getEmptyRepliesListing)(_this);
      }
      return _this;
    }

    _createClass(Submission, [{
      key: 'hide',

      /**
      * @summary Hides this Submission, preventing it from appearing on most Listings.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').hide()
      */
      value: function hide() {
        return this._post({ uri: 'api/hide', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Unhides this Submission, allowing it to reappear on most Listings.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').unhide()
      */

    }, {
      key: 'unhide',
      value: function unhide() {
        return this._post({ uri: 'api/unhide', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Locks this Submission, preventing new comments from being posted on it.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').lock()
      */

    }, {
      key: 'lock',
      value: function lock() {
        return this._post({ uri: 'api/lock', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Unlocks this Submission, allowing comments to be posted on it again.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').unlock()
      */

    }, {
      key: 'unlock',
      value: function unlock() {
        return this._post({ uri: 'api/unlock', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Marks this Submission as NSFW (Not Safe For Work).
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').markNsfw()
      */

    }, {
      key: 'markNsfw',
      value: function markNsfw() {
        return this._post({ uri: 'api/marknsfw', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Unmarks this Submission as NSFW (Not Safe For Work).
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').unmarkNsfw()
      */

    }, {
      key: 'unmarkNsfw',
      value: function unmarkNsfw() {
        return this._post({ uri: 'api/unmarknsfw', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Mark a submission as a spoiler
      * @desc **Note:** This will silently fail if the subreddit has disabled spoilers.
      * @returns {Promise} A Promise that fulfills with this Submission when the request is complete
      * @example r.getSubmission('2np694').markSpoiler()
      */

    }, {
      key: 'markSpoiler',
      value: function markSpoiler() {
        return this._post({ uri: 'api/spoiler', form: { id: this.name } }).return(this);
      }

      /**
      * @summary Unmark a submission as a spoiler
      * @returns {Promise} A Promise that fulfills with this Submission when the request is complete
      * @example r.getSubmission('2np694').unmarkSpoiler()
      */

    }, {
      key: 'unmarkSpoiler',
      value: function unmarkSpoiler() {
        return this._post({ uri: 'api/unspoiler', form: { id: this.name } }).return(this);
      }

      /**
      * @summary Sets the contest mode status of this submission.
      * @private
      * @param {boolean} state The desired contest mode status
      * @returns {Promise} The updated version of this Submission
      */

    }, {
      key: '_setContestModeEnabled',
      value: function _setContestModeEnabled(state) {
        return this._post({ uri: 'api/set_contest_mode', form: { api_type: api_type, state: state, id: this.name } }).return(this);
      }
      /**
      * @summary Enables contest mode for this Submission.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').enableContestMode()
      */

    }, {
      key: 'enableContestMode',
      value: function enableContestMode() {
        return this._setContestModeEnabled(true);
      }
      /**
      * @summary Disables contest mode for this Submission.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').disableContestMode()
      */

    }, {
      key: 'disableContestMode',
      value: function disableContestMode() {
        return this._setContestModeEnabled(false);
      }
    }, {
      key: '_setStickied',
      value: function _setStickied(_ref) {
        var state = _ref.state,
            num = _ref.num;

        return this._post({ uri: 'api/set_subreddit_sticky', form: { api_type: api_type, state: state, num: num, id: this.name } }).return(this);
      }
      /**
      * @summary Stickies this Submission.
      * @param {object} [options]
      * @param {number} [options.num=1] The sticky slot to put this submission in; this should be either 1 or 2.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').sticky({num: 2})
      */

    }, {
      key: 'sticky',
      value: function sticky() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$num = _ref2.num,
            num = _ref2$num === undefined ? 1 : _ref2$num;

        return this._setStickied({ state: true, num: num });
      }
      /**
      * @summary Unstickies this Submission.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').unsticky()
      */

    }, {
      key: 'unsticky',
      value: function unsticky() {
        return this._setStickied({ state: false });
      }
      /**
      * @summary Sets the suggested comment sort method on this Submission
      * @desc **Note**: To enable contest mode, use {@link Submission#enableContestMode} instead.
      * @param {string} sort The suggested sort method. This should be one of
      `confidence, top, new, controversial, old, random, qa, blank`
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').setSuggestedSort('new')
      */

    }, {
      key: 'setSuggestedSort',
      value: function setSuggestedSort(sort) {
        return this._post({ uri: 'api/set_suggested_sort', form: { api_type: api_type, id: this.name, sort: sort } }).return(this);
      }
      /**
      * @summary Marks this submission as 'visited'.
      * @desc **Note**: This function only works if the authenticated account has a subscription to reddit gold.
      * @returns {Promise} The updated version of this Submission
      * @example r.getSubmission('2np694').markAsRead()
      */

    }, {
      key: 'markAsRead',
      value: function markAsRead() {
        return this._post({ uri: 'api/store_visits', form: { links: this.name } }).return(this);
      }
      /**
      * @summary Gets a Listing of other submissions on reddit that had the same link as this one.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing of other Submission objects
      * @example r.getSubmission('2np694').getDuplicates()
      */

    }, {
      key: 'getDuplicates',
      value: function getDuplicates() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'duplicates/' + this.name.slice(3), qs: options });
      }
      /**
      * @summary Gets a Listing of Submissions that are related to this one.
      * @deprecated This function uses the <code>/related/submission_id</code> endpoint, which was recently changed on reddit.com;
      instead of returning a Listing containing related posts, the reddit API now simply returns the post itself. As such, this
      function only exists for backwards compatability and should not be used in practice.
      * @param {object} [options={}] ~~Options for the resulting Listing~~
      * @returns {Promise} ~~A Listing of other Submission objects~~ The submission in question.
      * @example r.getSubmission('2np694').getRelated()
      */

    }, {
      key: 'getRelated',
      value: function getRelated() {
        var _this2 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'related/' + this.name.slice(3), qs: options }).tap(function (result) {
          if (result.constructor._name === 'Submission') {
            _this2._r._warn('Submission#getRelated has been deprecated upstream, and will not work as expected.');
          }
        });
      }
      /**
      * @summary Gets a list of flair template options for this post.
      * @returns {Promise} An Array of flair templates
      * @example
      *
      * r.getSubmission('2np694').getLinkFlairTemplates().then(console.log)
      *
      * // => [
      * //   { flair_text: 'Text 1', flair_css_class: '', flair_text_editable: false, flair_template_id: '(UUID not shown)' ... },
      * //   { flair_text: 'Text 2', flair_css_class: 'aa', flair_text_editable: false, flair_template_id: '(UUID not shown)' ... },
      * //   ...
      * // ]
      */

    }, {
      key: 'getLinkFlairTemplates',
      value: function getLinkFlairTemplates() {
        var _this3 = this;

        return this.fetch().get('subreddit').then(function (sub) {
          return sub.getLinkFlairTemplates(_this3.name);
        });
      }
      /**
      * @summary Assigns flair on this Submission (as a moderator; also see [selectFlair]{@link Submission#selectFlair})
      * @param {object} options
      * @param {string} options.text The text that this link's flair should have
      * @param {string} options.cssClass The CSS class that the link's flair should have
      * @returns {Promise} A Promise that fulfills with an updated version of this Submission
      * @example r.getSubmission('2np694').assignFlair({text: 'this is a flair text', cssClass: 'these are css classes'})
      */

    }, {
      key: 'assignFlair',
      value: function assignFlair(options) {
        return this._r._assignFlair(_extends$$1({}, options, { link: this.name, subredditName: this.subreddit.display_name })).return(this);
      }

      /**
      * @summary Selects a flair for this Submission (as the OP; also see [assignFlair]{@link Submission#assignFlair})
      * @param {object} options
      * @param {string} options.flair_template_id A flair template ID to use for this Submission. (This should be obtained
      beforehand using {@link getLinkFlairTemplates}.)
      * @param {string} [options.text] The flair text to use for the submission. (This is only necessary/useful if the given flair
      template has the `text_editable` property set to `true`.)
      * @returns {Promise} A Promise that fulfills with this objects after the request is complete
      * @example r.getSubmission('2np694').selectFlair({flair_template_id: 'e3340d80-8152-11e4-a76a-22000bc1096c'})
      */

    }, {
      key: 'selectFlair',
      value: function selectFlair(options) {
        return this._r._selectFlair(_extends$$1({}, options, { link: this.name, subredditName: this.subreddit.display_name })).return(this);
      }
    }, {
      key: '_uri',
      get: function get() {
        return 'comments/' + this.name.slice(3);
      }
    }]);

    return Submission;
  }(_VoteableContent3.default);

  exports.default = Submission;
});

var domain;

// This constructor is used to store event handlers. Instantiating this is
// faster than explicitly calling `Object.create(null)` to get a "clean" empty
// object (tested with v8 v4.9).
function EventHandlers() {}
EventHandlers.prototype = Object.create(null);

function EventEmitter() {
  EventEmitter.init.call(this);
}
// nodejs oddity
// require('events') === require('events').EventEmitter
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.usingDomains = false;

EventEmitter.prototype.domain = undefined;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

EventEmitter.init = function() {
  this.domain = null;
  if (EventEmitter.usingDomains) {
    // if there is an active domain, then attach to it.
    if (domain.active && !(this instanceof domain.Domain)) {
      this.domain = domain.active;
    }
  }

  if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
    this._events = new EventHandlers();
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events, domain;
  var needDomainExit = false;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  domain = this.domain;

  // If there is no 'error' event listener then throw.
  if (doError) {
    er = arguments[1];
    if (domain) {
      if (!er)
        er = new Error('Uncaught, unspecified "error" event');
      er.domainEmitter = this;
      er.domain = domain;
      er.domainThrown = false;
      domain.emit('error', er);
    } else if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
    // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
    // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  if (needDomainExit)
    domain.exit();

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = new EventHandlers();
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] :
                                          [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
                            existing.length + ' ' + type + ' listeners added. ' +
                            'Use emitter.setMaxListeners() to increase limit');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        emitWarning(w);
      }
    }
  }

  return target;
}
function emitWarning(e) {
  typeof console.warn === 'function' ? console.warn(e) : console.log(e);
}
EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function _onceWrap(target, type, listener) {
  var fired = false;
  function g() {
    target.removeListener(type, g);
    if (!fired) {
      fired = true;
      listener.apply(target, arguments);
    }
  }
  g.listener = listener;
  return g;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || (list.listener && list.listener === listener)) {
        if (--this._eventsCount === 0)
          this._events = new EventHandlers();
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length; i-- > 0;) {
          if (list[i] === listener ||
              (list[i].listener && list[i].listener === listener)) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (list.length === 1) {
          list[0] = undefined;
          if (--this._eventsCount === 0) {
            this._events = new EventHandlers();
            return this;
          } else {
            delete events[type];
          }
        } else {
          spliceOne(list, position);
        }

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = new EventHandlers();
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = new EventHandlers();
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        for (var i = 0, key; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = new EventHandlers();
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        do {
          this.removeListener(type, listeners[listeners.length - 1]);
        } while (listeners[0]);
      }

      return this;
    };

EventEmitter.prototype.listeners = function listeners(type) {
  var evlistener;
  var ret;
  var events = this._events;

  if (!events)
    ret = [];
  else {
    evlistener = events[type];
    if (!evlistener)
      ret = [];
    else if (typeof evlistener === 'function')
      ret = [evlistener.listener || evlistener];
    else
      ret = unwrapListeners(evlistener);
  }

  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, i) {
  var copy = new Array(i);
  while (i--)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


var events = Object.freeze({
	default: EventEmitter,
	EventEmitter: EventEmitter
});

var _events = ( events && EventEmitter ) || events;

var LiveThread_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _RedditContent3 = _interopRequireDefault(RedditContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var WebSocket = helpers.isBrowser ? commonjsGlobal.WebSocket : require$$0;

  var api_type = 'json';

  /**
  * A class representing a live reddit thread
  * <style> #LiveThread {display: none} </style>
  * @example
  *
  * // Get a livethread with the given ID
  * r.getLivethread('whrdxo8dg9n0')
  * @desc For the most part, reddit distributes the content of live threads via websocket, rather than through the REST API.
  As such, snoowrap assigns each fetched LiveThread object a `stream` property, which takes the form of an
  [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter). To listen for new thread updates, simply
  add listeners to that emitter.
  
  The following events can be emitted:
  - `update`: Occurs when a new update has been posted in this thread. Emits a `LiveUpdate` object containing information
  about the new update.
  - `activity`: Occurs periodically when the viewer count for this thread changes.
  - `settings`: Occurs when the thread's settings change. Emits an object containing the new settings.
  - `delete`: Occurs when an update has been deleted. Emits the ID of the deleted update.
  - `strike`: Occurs when an update has been striken (marked incorrect and crossed out). Emits the ID of the striken update.
  - `embeds_ready`: Occurs when embedded media is now available for a previously-posted update.
  - `complete`: Occurs when this LiveThread has been marked as complete, and no more updates will be sent.
  
  (Note: These event types are mapped directly from reddit's categorization of the updates. The descriptions above are
  paraphrased from reddit's descriptions [here](https://www.reddit.com/dev/api#section_live).)
  
  As an example, this would log all new livethread updates to the console:
  
  ```javascript
  someLivethread.stream.on('update', data => {
    console.log(data.body);
  });
  ```
  
  * @extends RedditContent
  */
  var LiveThread = function (_RedditContent) {
    _inherits(LiveThread, _RedditContent);

    function LiveThread(options, _r, _hasFetched) {
      _classCallCheck(this, LiveThread);

      var _this = _possibleConstructorReturn(this, (LiveThread.__proto__ || Object.getPrototypeOf(LiveThread)).call(this, options, _r, _hasFetched));

      _this._rawStream = null;
      _this._populatedStream = null;
      if (_hasFetched) {
        Object.defineProperty(_this, 'stream', { get: function get() {
            if (!_this._populatedStream && _this.websocket_url) {
              _this._setupWebSocket();
            }
            return _this._populatedStream;
          } });
      }
      return _this;
    }

    _createClass(LiveThread, [{
      key: '_setupWebSocket',
      value: function _setupWebSocket() {
        var _this2 = this;

        this._rawStream = new WebSocket(this.websocket_url);
        this._populatedStream = new _events.EventEmitter();
        var handler = function handler(data) {
          var parsed = _this2._r._populate(JSON.parse(data));
          _this2._populatedStream.emit(parsed.type, parsed.payload);
        };
        if (typeof this._rawStream.on === 'function') {
          this._rawStream.on('message', handler);
        } else {
          this._rawStream.onmessage = function (messageEvent) {
            return handler(messageEvent.data);
          };
        }
      }
      /**
      * @summary Adds a new update to this thread.
      * @param {string} body The body of the new update
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').addUpdate('Breaking: Someone is reading the snoowrap documentation \\o/')
      */

    }, {
      key: 'addUpdate',
      value: function addUpdate(body) {
        return this._post({ uri: 'api/live/' + this.id + '/update', form: { api_type: api_type, body: body } }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Strikes (marks incorrect and crosses out) the given update.
      * @param {object} options
      * @param {string} options.id The ID of the update that should be striked.
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').strikeUpdate({id: 'LiveUpdate_edc34446-faf0-11e5-a1b4-0e858bca33cd'})
      */

    }, {
      key: 'strikeUpdate',
      value: function strikeUpdate(_ref) {
        var id = _ref.id;

        return this._post({
          uri: 'api/live/' + this.id + '/strike_update',
          form: { api_type: api_type, id: '' + (id.startsWith('LiveUpdate_') ? '' : 'LiveUpdate_') + id }
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Deletes an update from this LiveThread.
      * @param {object} options
      * @param {string} options.id The ID of the LiveUpdate that should be deleted
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').deleteUpdate({id: 'LiveUpdate_edc34446-faf0-11e5-a1b4-0e858bca33cd'})
      */

    }, {
      key: 'deleteUpdate',
      value: function deleteUpdate(_ref2) {
        var id = _ref2.id;

        return this._post({
          uri: 'api/live/' + this.id + '/delete_update',
          form: { api_type: api_type, id: '' + (id.startsWith('LiveUpdate_') ? '' : 'LiveUpdate_') + id }
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Gets a list of this LiveThread's contributors
      * @returns {Promise} An Array containing RedditUsers
      * @example
      *
      * r.getLivethread('whrdxo8dg9n0').getContributors().then(console.log)
      * // => [
      * //  RedditUser { permissions: ['edit'], name: 'not_an_aardvark', id: 't2_k83md' },
      * //  RedditUser { permissions: ['all'], id: 't2_u3l80', name: 'snoowrap_testing' }
      * // ]
      */

    }, {
      key: 'getContributors',
      value: function getContributors() {
        return this._get({ uri: 'live/' + this.id + '/contributors' }).then(function (contributors) {
          return Array.isArray(contributors[0]) ? contributors[0] : contributors;
        });
      }
      /**
      * @summary Invites a contributor to this LiveThread.
      * @param {object} options
      * @param {string} options.name The name of the user who should be invited
      * @param {Array} options.permissions The permissions that the invited user should receive. This should be an Array containing
      some combination of `'update', 'edit', 'manage'`. To invite a contributor with full permissions, omit this property.
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').inviteContributor({name: 'actually_an_aardvark', permissions: ['update']})
      */

    }, {
      key: 'inviteContributor',
      value: function inviteContributor(_ref3) {
        var name = _ref3.name,
            permissions = _ref3.permissions;

        return this._post({ uri: 'api/live/' + this.id + '/invite_contributor', form: {
            api_type: api_type,
            name: name,
            permissions: (0, helpers.formatLivethreadPermissions)(permissions),
            type: 'liveupdate_contributor_invite'
          } }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Revokes an invitation for the given user to become a contributor on this LiveThread.
      * @param {object} options
      * @param {string} options.name The username of the account whose invitation should be revoked
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').revokeContributorInvite({name: 'actually_an_aardvark'});
      */

    }, {
      key: 'revokeContributorInvite',
      value: function revokeContributorInvite(_ref4) {
        var _this3 = this;

        var name = _ref4.name;

        return this._r.getUser(name).fetch().get('id').then(function (userId) {
          return _this3._post({ uri: 'api/live/' + _this3.id + '/rm_contributor_invite', form: { api_type: api_type, id: 't2_' + userId } });
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Accepts a pending contributor invitation on this LiveThread.
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').acceptContributorInvite()
      */

    }, {
      key: 'acceptContributorInvite',
      value: function acceptContributorInvite() {
        return this._post({ uri: 'api/live/' + this.id + '/accept_contributor_invite', form: { api_type: api_type } }).return(this);
      }
      /**
      * @summary Abdicates contributor status on this LiveThread.
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').leaveContributor()
      */

    }, {
      key: 'leaveContributor',
      value: function leaveContributor() {
        return this._post({ uri: 'api/live/' + this.id + '/leave_contributor', form: { api_type: api_type } }).return(this);
      }
      /**
      * @summary Removes the given user from contributor status on this LiveThread.
      * @param {object} options
      * @param {string} options.name The username of the account who should be removed
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').removeContributor({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'removeContributor',
      value: function removeContributor(_ref5) {
        var _this4 = this;

        var name = _ref5.name;

        return this._r.getUser(name).fetch().get('id').then(function (userId) {
          return _this4._post({ uri: 'api/live/' + _this4.id + '/rm_contributor', form: { api_type: api_type, id: 't2_' + userId } });
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Sets the permissions of the given contributor.
      * @param {object} options
      * @param {string} options.name The name of the user whose permissions should be changed
      * @param {Array} options.permissions The updated permissions that the user should have. This should be an Array containing
      some combination of `'update', 'edit', 'manage'`. To give the contributor with full permissions, omit this property.
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').setContributorPermissions({name: 'actually_an_aardvark', permissions: ['edit']})
      */

    }, {
      key: 'setContributorPermissions',
      value: function setContributorPermissions(_ref6) {
        var name = _ref6.name,
            permissions = _ref6.permissions;

        return this._post({
          uri: 'api/live/' + this.id + '/set_contributor_permissions',
          form: { api_type: api_type, name: name, permissions: (0, helpers.formatLivethreadPermissions)(permissions), type: 'liveupdate_contributor' }
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Edits the settings on this LiveThread.
      * @param {object} options
      * @param {string} options.title The title of the thread
      * @param {string} [options.description] A descriptions of the thread. 120 characters max
      * @param {string} [options.resources] Information and useful links related to the thread. 120 characters max
      * @param {boolean} options.nsfw Determines whether the thread is Not Safe For Work
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').editSettings({title: 'My livethread', description: 'an updated description'})
      */

    }, {
      key: 'editSettings',
      value: function editSettings(_ref7) {
        var title = _ref7.title,
            description = _ref7.description,
            resources = _ref7.resources,
            nsfw = _ref7.nsfw;

        return this._post({
          uri: 'api/live/' + this.id + '/edit',
          form: { api_type: api_type, description: description, nsfw: nsfw, resources: resources, title: title }
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Permanently closes this thread, preventing any more updates from being added.
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').closeThread()
      */

    }, {
      key: 'closeThread',
      value: function closeThread() {
        return this._post({ uri: 'api/live/' + this.id + '/close_thread', form: { api_type: api_type } }).return(this);
      }
      /**
      * @summary Reports this LiveThread for breaking reddit's rules.
      * @param {object} options
      * @param {string} options.reason The reason for the report. One of `spam`, `vote-manipulation`, `personal-information`,
      `sexualizing-minors`, `site-breaking`
      * @returns {Promise} A Promise that fulfills with this LiveThread when the request is complete
      * @example r.getLivethread('whrdxo8dg9n0').report({reason: 'Breaking a rule blah blah blah'})
      */

    }, {
      key: 'report',
      value: function report(_ref8) {
        var reason = _ref8.reason;

        return this._post({ uri: 'api/live/' + this.id + '/report', form: { api_type: api_type, type: reason } }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Gets a Listing containing past updates to this LiveThread.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing LiveUpdates
      * @example
      *
      * r.getLivethread('whrdxo8dg9n0').getRecentUpdates().then(console.log)
      * // => Listing [
      * //  LiveUpdate { ... },
      * //  LiveUpdate { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getRecentUpdates',
      value: function getRecentUpdates(options) {
        return this._getListing({ uri: 'live/' + this.id, qs: options });
      }
      /**
      * @summary Gets a list of reddit submissions linking to this LiveThread.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Submissions
      * @example
      *
      * r.getLivethread('whrdxo8dg9n0').getDiscussions().then(console.log)
      * // => Listing [
      * //  Submission { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getDiscussions',
      value: function getDiscussions(options) {
        return this._getListing({ uri: 'live/' + this.id + '/discussions', qs: options });
      }
      /**
      * @summary Stops listening for new updates on this LiveThread.
      * @desc To avoid memory leaks that can result from open sockets, it's recommended that you call this method when you're
      finished listening for updates on this LiveThread.
      *
      * This should not be confused with {@link LiveThread#closeThread}, which marks the thread as "closed" on reddit.
      * @returns undefined
      * @example
      *
      * var myThread = r.getLivethread('whrdxo8dg9n0');
      * myThread.stream.on('update', content => {
      *   console.log(content);
      *   myThread.closeStream();
      * })
      *
      */

    }, {
      key: 'closeStream',
      value: function closeStream() {
        if (this._rawStream) {
          this._rawStream.close();
        }
      }
    }, {
      key: '_uri',
      get: function get() {
        return 'live/' + this.id + '/about';
      }
    }]);

    return LiveThread;
  }(_RedditContent3.default);

  exports.default = LiveThread;
});

var PrivateMessage_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _ReplyableContent3 = _interopRequireDefault(ReplyableContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
  * A class representing a private message or a modmail.
  * <style> #PrivateMessage {display: none} </style>
  * @example
  *
  * // Get a Private Message with a given ID
  * r.getMessage('51shnw')
  * @extends ReplyableContent
  */
  var PrivateMessage = function (_ReplyableContent) {
    _inherits(PrivateMessage, _ReplyableContent);

    function PrivateMessage() {
      _classCallCheck(this, PrivateMessage);

      return _possibleConstructorReturn(this, (PrivateMessage.__proto__ || Object.getPrototypeOf(PrivateMessage)).apply(this, arguments));
    }

    _createClass(PrivateMessage, [{
      key: '_transformApiResponse',
      value: function _transformApiResponse(response) {
        response[0].replies = (0, helpers.buildRepliesTree)(response[0].replies || []);
        return (0, helpers.findMessageInTree)(this.name, response[0]);
      }
      // TODO: Get rid of the repeated code here, most of these methods are exactly the same with the exception of the URIs
      /**
      * @summary Marks this message as read.
      * @returns {Promise} A Promise that fulfills with this message after the request is complete
      * @example r.getMessage('51shxv').markAsRead()
      */

    }, {
      key: 'markAsRead',
      value: function markAsRead() {
        return this._r.markMessagesAsRead([this]).return(this);
      }
      /**
      * @summary Marks this message as unread.
      * @returns {Promise} A Promise that fulfills with this message after the request is complete
      * @example r.getMessage('51shxv').markAsUnread()
      */

    }, {
      key: 'markAsUnread',
      value: function markAsUnread() {
        return this._r.markMessagesAsUnread([this]).return(this);
      }
      /**
      * @summary Mutes the author of this message for 72 hours. This can only be used on moderator mail.
      * @returns {Promise} A Promise that fulfills with this message after the request is complete
      * @example r.getMessage('51shxv').muteAuthor()
      */

    }, {
      key: 'muteAuthor',
      value: function muteAuthor() {
        return this._post({ uri: 'api/mute_message_author', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Unmutes the author of this message.
      * @returns {Promise} A Promise that fulfills with this message after the request is complete
      * @example r.getMessage('51shxv').unmuteAuthor()
      */

    }, {
      key: 'unmuteAuthor',
      value: function unmuteAuthor() {
        return this._post({ uri: 'api/unmute_message_author', form: { id: this.name } }).return(this);
      }
      /**
      * @summary Deletes this message from the authenticated user's inbox.
      * @desc This only removes the item from the authenticated user's inbox. It has no effect on how the item looks to the sender.
      * @returns {Promise} A Promise that fulfills with this message when the request is complete.
      * @example
      *
      * const firstMessage = r.getInbox().get(0);
      * firstMessage.deleteFromInbox();
      */

    }, {
      key: 'deleteFromInbox',
      value: function deleteFromInbox() {
        return this._post({ uri: 'api/del_msg', form: { id: this.name } }).return(this);
      }
    }, {
      key: '_uri',
      get: function get() {
        return 'message/messages/' + this.name.slice(3);
      }
    }]);

    return PrivateMessage;
  }(_ReplyableContent3.default);

  exports.default = PrivateMessage;
});

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;
var nativeMax$6 = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
function chunk(array, size, guard) {
  if ((guard ? _isIterateeCall(array, size, guard) : size === undefined)) {
    size = 1;
  } else {
    size = nativeMax$6(toInteger_1(size), 0);
  }
  var length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  var index = 0,
      resIndex = 0,
      result = Array(nativeCeil(length / size));

  while (index < length) {
    result[resIndex++] = _baseSlice(array, index, (index += size));
  }
  return result;
}

var chunk_1 = chunk;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init () {
  inited = true;
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }

  revLookup['-'.charCodeAt(0)] = 62;
  revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray (b64) {
  if (!inited) {
    init();
  }
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = (tmp >> 16) & 0xFF;
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[L++] = (tmp >> 8) & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  if (!inited) {
    init();
  }
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[(tmp << 4) & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
    output += lookup[tmp >> 10];
    output += lookup[(tmp >> 4) & 0x3F];
    output += lookup[(tmp << 2) & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('')
}

function read (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? (nBytes - 1) : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

function write (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
  var i = isLE ? 0 : (nBytes - 1);
  var d = isLE ? 1 : -1;
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
}

var toString$2 = {}.toString;

var isArray$4 = Array.isArray || function (arr) {
  return toString$2.call(arr) == '[object Array]';
};

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */


var INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer$1.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : true;

function kMaxLength () {
  return Buffer$1.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer$1(length);
    }
    that.length = length;
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer$1 (arg, encodingOrOffset, length) {
  if (!Buffer$1.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer$1)) {
    return new Buffer$1(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer$1.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer$1._augment = function (arr) {
  arr.__proto__ = Buffer$1.prototype;
  return arr
};

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer$1.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
};

if (Buffer$1.TYPED_ARRAY_SUPPORT) {
  Buffer$1.prototype.__proto__ = Uint8Array.prototype;
  Buffer$1.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer$1[Symbol.species] === Buffer$1) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    // Object.defineProperty(Buffer, Symbol.species, {
    //   value: null,
    //   configurable: true
    // })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer$1.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
};

function allocUnsafe (that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer$1.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer$1.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
};

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer$1.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer$1.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that
}

function fromObject (that, obj) {
  if (internalIsBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len);
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray$4(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}


Buffer$1.isBuffer = isBuffer$2;
function internalIsBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer$1.compare = function compare (a, b) {
  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

Buffer$1.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
};

Buffer$1.concat = function concat (list, length) {
  if (!isArray$4(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer$1.alloc(0)
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer$1.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!internalIsBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer
};

function byteLength (string, encoding) {
  if (internalIsBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer$1.byteLength = byteLength;

function slowToString (encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer$1.prototype._isBuffer = true;

function swap (b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer$1.prototype.swap16 = function swap16 () {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this
};

Buffer$1.prototype.swap32 = function swap32 () {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this
};

Buffer$1.prototype.swap64 = function swap64 () {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this
};

Buffer$1.prototype.toString = function toString () {
  var length = this.length | 0;
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
};

Buffer$1.prototype.equals = function equals (b) {
  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer$1.compare(this, b) === 0
};

Buffer$1.prototype.inspect = function inspect () {
  var str = '';
  var max = INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>'
};

Buffer$1.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!internalIsBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset;  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1);
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer$1.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (internalIsBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer$1.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read$$1 (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read$$1(arr, i) === read$$1(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read$$1(arr, i + j) !== read$$1(val, j)) {
          found = false;
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer$1.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
};

Buffer$1.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
};

Buffer$1.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
};

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed;
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer$1.prototype.write = function write$$1 (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer$1.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
};

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return fromByteArray(buf)
  } else {
    return fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res
}

Buffer$1.prototype.slice = function slice (start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer$1.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer$1(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer$1.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val
};

Buffer$1.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val
};

Buffer$1.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset]
};

Buffer$1.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | (this[offset + 1] << 8)
};

Buffer$1.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return (this[offset] << 8) | this[offset + 1]
};

Buffer$1.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
};

Buffer$1.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
};

Buffer$1.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer$1.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val
};

Buffer$1.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
};

Buffer$1.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | (this[offset + 1] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer$1.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | (this[offset] << 8);
  return (val & 0x8000) ? val | 0xFFFF0000 : val
};

Buffer$1.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
};

Buffer$1.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
};

Buffer$1.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, true, 23, 4)
};

Buffer$1.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return read(this, offset, false, 23, 4)
};

Buffer$1.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, true, 52, 8)
};

Buffer$1.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return read(this, offset, false, 52, 8)
};

function checkInt (buf, value, offset, ext, max, min) {
  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer$1.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = (value & 0xff);
  return offset + 1
};

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer$1.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer$1.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
  }
}

Buffer$1.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24);
    this[offset + 2] = (value >>> 16);
    this[offset + 1] = (value >>> 8);
    this[offset] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer$1.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

Buffer$1.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
  }

  return offset + byteLength
};

Buffer$1.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer$1.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = (value & 0xff);
  return offset + 1
};

Buffer$1.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2
};

Buffer$1.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8);
    this[offset + 1] = (value & 0xff);
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2
};

Buffer$1.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff);
    this[offset + 1] = (value >>> 8);
    this[offset + 2] = (value >>> 16);
    this[offset + 3] = (value >>> 24);
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4
};

Buffer$1.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer$1.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24);
    this[offset + 1] = (value >>> 16);
    this[offset + 2] = (value >>> 8);
    this[offset + 3] = (value & 0xff);
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4
};

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4
}

Buffer$1.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
};

Buffer$1.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
};

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8
}

Buffer$1.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
};

Buffer$1.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer$1.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer$1.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    );
  }

  return len
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer$1.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer$1.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = internalIsBuffer(val)
      ? val
      : utf8ToBytes(new Buffer$1(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue
        }

        // valid lead
        leadSurrogate = codePoint;

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      );
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray
}


function base64ToBytes (str) {
  return toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i];
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
function isBuffer$2(obj) {
  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
}

function isFastBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
}

function BufferList$1() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList$1.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList$1.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList$1.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList$1.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList$1.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList$1.prototype.concat = function (n) {
  if (this.length === 0) return Buffer$1.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = Buffer$1.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};

// Copyright Joyent, Inc. and other Node contributors.
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

var isBufferEncoding = Buffer$1.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     };


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
function StringDecoder(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer$1(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
}


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

Readable$1.ReadableState = ReadableState;
var debug = debuglog('stream');
inherits$1(Readable$1, EventEmitter);

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
}
function listenerCount$1 (emitter, type) {
  return emitter.listeners(type).length;
}
function ReadableState(options, stream) {

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex$1) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList$1();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}
function Readable$1(options) {

  if (!(this instanceof Readable$1)) return new Readable$1(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  EventEmitter.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable$1.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = Buffer.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable$1.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable$1.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable$1.prototype.setEncoding = function (enc) {
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable$1.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable$1.prototype._read = function (n) {
  this.emit('error', new Error('not implemented'));
};

Readable$1.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false);

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (listenerCount$1(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && src.listeners('data').length) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable$1.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var _i = 0; _i < len; _i++) {
      dests[_i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var i = indexOf(state.pipes, dest);
  if (i === -1) return this;

  state.pipes.splice(i, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable$1.prototype.on = function (ev, fn) {
  var res = EventEmitter.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable$1.prototype.addListener = Readable$1.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable$1.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable$1.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable$1.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach$1(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable$1._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach$1(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


Writable$1.WritableState = WritableState;
inherits$1(Writable$1, EventEmitter);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Object.defineProperty(this, 'buffer', {
    get: deprecate(function () {
      return this.getBuffer();
    }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
  });
  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex$1) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~ ~this.highWaterMark;

  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function writableStateGetBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

function Writable$1(options) {

  // Writable ctor is applied to Duplexes, though they're not
  // instanceof Writable, they're instanceof Readable.
  if (!(this instanceof Writable$1) && !(this instanceof Duplex$1)) return new Writable$1(options);

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  EventEmitter.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable$1.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  nextTick(cb, er);
}

// If we get something that is not a buffer, string, null, or undefined,
// and we're not in objectMode, then that's an error.
// Otherwise stream chunks are all considered to be of length=1, and the
// watermarks determine how many objects to keep in the buffer, rather than
// how many bytes or characters.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;
  // Always throw error if a null is written
  // if we are not in object mode then throw
  // if it is not a buffer, string, or undefined.
  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (!Buffer$1.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable$1.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, chunk, encoding, cb);
  }

  return ret;
};

Writable$1.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable$1.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable$1.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer$1.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, chunk, encoding, cb) {
  chunk = decodeChunk(state, chunk, encoding);

  if (Buffer$1.isBuffer(chunk)) encoding = 'buffer';
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) nextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
        nextTick(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
        afterWrite(stream, state, finished, cb);
      }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable$1.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('not implemented'));
};

Writable$1.prototype._writev = null;

Writable$1.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}

inherits$1(Duplex$1, Readable$1);

var keys$2 = Object.keys(Writable$1.prototype);
for (var v = 0; v < keys$2.length; v++) {
  var method = keys$2[v];
  if (!Duplex$1.prototype[method]) Duplex$1.prototype[method] = Writable$1.prototype[method];
}
function Duplex$1(options) {
  if (!(this instanceof Duplex$1)) return new Duplex$1(options);

  Readable$1.call(this, options);
  Writable$1.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


inherits$1(Transform$1, Duplex$1);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}
function Transform$1(options) {
  if (!(this instanceof Transform$1)) return new Transform$1(options);

  Duplex$1.call(this, options);

  this._transformState = new TransformState(this);

  // when the writable side finishes, then flush out anything remaining.
  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er) {
      done(stream, er);
    });else done(stream);
  });
}

Transform$1.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex$1.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform$1.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('Not implemented');
};

Transform$1.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform$1.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er) {
  if (er) return stream.emit('error', er);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

inherits$1(PassThrough$1, Transform$1);
function PassThrough$1(options) {
  if (!(this instanceof PassThrough$1)) return new PassThrough$1(options);

  Transform$1.call(this, options);
}

PassThrough$1.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

inherits$1(Stream$1, EventEmitter);
Stream$1.Readable = Readable$1;
Stream$1.Writable = Writable$1;
Stream$1.Duplex = Duplex$1;
Stream$1.Transform = Transform$1;
Stream$1.PassThrough = PassThrough$1;

// Backwards-compat with node 0.4.x
Stream$1.Stream = Stream$1;

// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream$1() {
  EventEmitter.call(this);
}

Stream$1.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EventEmitter.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


var stream = Object.freeze({
	default: Stream$1,
	Readable: Readable$1,
	Writable: Writable$1,
	Duplex: Duplex$1,
	Transform: Transform$1,
	PassThrough: PassThrough$1,
	Stream: Stream$1
});

var empty$2 = {};


var empty$3 = Object.freeze({
	default: empty$2
});

var _stream = ( stream && Stream$1 ) || stream;

var _fs = ( empty$3 && empty$2 ) || empty$3;

var Subreddit_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _omit3 = _interopRequireDefault(omit_1);

  var _map3 = _interopRequireDefault(map_1);

  var _flatten3 = _interopRequireDefault(flatten_1);

  var _chunk3 = _interopRequireDefault(chunk_1);

  var _extends$$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _Promise2 = _interopRequireDefault(_Promise$2);

  var _RedditContent3 = _interopRequireDefault(RedditContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var api_type = 'json';

  /**
  * A class representing a subreddit
  * <style> #Subreddit {display: none} </style>
  * @extends RedditContent
  * @example
  *
  * // Get a subreddit by name
  * r.getSubreddit('AskReddit')
  */
  var Subreddit = function (_RedditContent) {
    _inherits(Subreddit, _RedditContent);

    function Subreddit() {
      _classCallCheck(this, Subreddit);

      return _possibleConstructorReturn(this, (Subreddit.__proto__ || Object.getPrototypeOf(Subreddit)).apply(this, arguments));
    }

    _createClass(Subreddit, [{
      key: '_transformApiResponse',
      value: function _transformApiResponse(response) {
        if (!(response instanceof Subreddit)) {
          throw new TypeError('The subreddit /r/' + this.display_name + ' does not exist.');
        }
        return response;
      }
    }, {
      key: '_deleteFlairTemplates',
      value: function _deleteFlairTemplates(_ref) {
        var flair_type = _ref.flair_type;

        return this._post({ uri: 'r/' + this.display_name + '/api/clearflairtemplates', form: { api_type: api_type, flair_type: flair_type } }).return(this);
      }
      /**
      * @summary Deletes all of this subreddit's user flair templates
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteAllUserFlairTemplates()
      */

    }, {
      key: 'deleteAllUserFlairTemplates',
      value: function deleteAllUserFlairTemplates() {
        return this._deleteFlairTemplates({ flair_type: 'USER_FLAIR' });
      }
      /**
      * @summary Deletes all of this subreddit's link flair templates
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteAllLinkFlairTemplates()
      */

    }, {
      key: 'deleteAllLinkFlairTemplates',
      value: function deleteAllLinkFlairTemplates() {
        return this._deleteFlairTemplates({ flair_type: 'LINK_FLAIR' });
      }
      /**
      * @summary Deletes one of this subreddit's flair templates
      * @param {object} options
      * @param {string} options.flair_template_id The ID of the template that should be deleted
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteFlairTemplate({flair_template_id: 'fdfd8532-c91e-11e5-b4d4-0e082084d721'})
      */

    }, {
      key: 'deleteFlairTemplate',
      value: function deleteFlairTemplate(_ref2) {
        var flair_template_id = _ref2.flair_template_id;

        return this._post({
          uri: 'r/' + this.display_name + '/api/deleteflairtemplate',
          form: { api_type: api_type, flair_template_id: flair_template_id }
        }).return(this);
      }
    }, {
      key: '_createFlairTemplate',
      value: function _createFlairTemplate(_ref3) {
        var text = _ref3.text,
            css_class = _ref3.css_class,
            _ref3$cssClass = _ref3.cssClass,
            cssClass = _ref3$cssClass === undefined ? css_class : _ref3$cssClass,
            flair_type = _ref3.flair_type,
            _ref3$text_editable = _ref3.text_editable,
            text_editable = _ref3$text_editable === undefined ? false : _ref3$text_editable,
            _ref3$textEditable = _ref3.textEditable,
            textEditable = _ref3$textEditable === undefined ? text_editable : _ref3$textEditable;

        return this._post({
          uri: 'r/' + this.display_name + '/api/flairtemplate',
          form: { api_type: api_type, text: text, css_class: cssClass, flair_type: flair_type, text_editable: textEditable }
        }).return(this);
      }
      /**
      * @summary Creates a new user flair template for this subreddit
      * @param {object} options
      * @param {string} options.text The flair text for this template
      * @param {string} [options.cssClass=''] The CSS class for this template
      * @param {boolean} [options.textEditable=false] Determines whether users should be able to edit their flair text
      when it has this template
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').createUserFlairTemplate({text: 'Some Flair Text', cssClass: 'some-css-class'})
      */

    }, {
      key: 'createUserFlairTemplate',
      value: function createUserFlairTemplate(options) {
        return this._createFlairTemplate(_extends$$1({}, options, { flair_type: 'USER_FLAIR' }));
      }
      /**
      * @summary Creates a new link flair template for this subreddit
      * @param {object} options
      * @param {string} options.text The flair text for this template
      * @param {string} [options.cssClass=''] The CSS class for this template
      * @param {boolean} [options.textEditable=false] Determines whether users should be able to edit the flair text of their
      links when it has this template
      * @returns {Promise} A Promise that fulfills with this Subredit when the request is complete.
      * @example r.getSubreddit('snoowrap').createLinkFlairTemplate({text: 'Some Flair Text', cssClass: 'some-css-class'})
      */

    }, {
      key: 'createLinkFlairTemplate',
      value: function createLinkFlairTemplate(options) {
        return this._createFlairTemplate(_extends$$1({}, options, { flair_type: 'LINK_FLAIR' }));
      }
    }, {
      key: '_getFlairOptions',
      value: function _getFlairOptions() {
        var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            name = _ref4.name,
            link = _ref4.link;

        // TODO: Add shortcuts for this on RedditUser and Submission
        return this._post({ uri: 'r/' + this.display_name + '/api/flairselector', form: { name: name, link: link } });
      }
      /**
      * @summary Gets the flair templates for a given link.
      * @param {string} linkId The link's base36 ID
      * @returns {Promise} An Array of flair template options
      * @example
      *
      * r.getSubreddit('snoowrap').getLinkFlairTemplates('4fp36y').then(console.log)
      // => [ { flair_css_class: '',
      //  flair_template_id: 'fdfd8532-c91e-11e5-b4d4-0e082084d721',
      //  flair_text_editable: true,
      //  flair_position: 'right',
      //  flair_text: '' },
      //  { flair_css_class: '',
      //  flair_template_id: '03821f62-c920-11e5-b608-0e309fbcf863',
      //  flair_text_editable: true,
      //  flair_position: 'right',
      //  flair_text: '' },
      //  ...
      // ]
      */

    }, {
      key: 'getLinkFlairTemplates',
      value: function getLinkFlairTemplates(linkId) {
        return this._getFlairOptions({ link: linkId }).get('choices');
      }
      /**
      * @summary Gets the list of user flair templates on this subreddit.
      * @returns {Promise} An Array of user flair templates
      * @example
      *
      * r.getSubreddit('snoowrap').getUserFlairTemplates().then(console.log)
      // => [ { flair_css_class: '',
      //  flair_template_id: 'fdfd8532-c91e-11e5-b4d4-0e082084d721',
      //  flair_text_editable: true,
      //  flair_position: 'right',
      //  flair_text: '' },
      //  { flair_css_class: '',
      //  flair_template_id: '03821f62-c920-11e5-b608-0e309fbcf863',
      //  flair_text_editable: true,
      //  flair_position: 'right',
      //  flair_text: '' },
      //  ...
      // ]
      */

    }, {
      key: 'getUserFlairTemplates',
      value: function getUserFlairTemplates() {
        return this._getFlairOptions().get('choices');
      }
      /**
      * @summary Clears a user's flair on this subreddit.
      * @param {string} name The user's name
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteUserFlair('actually_an_aardvark')
      */

    }, {
      key: 'deleteUserFlair',
      value: function deleteUserFlair(name) {
        return this._post({ uri: 'r/' + this.display_name + '/api/deleteflair', form: { api_type: api_type, name: name } }).return(this);
      }
      /**
      * @summary Gets a user's flair on this subreddit.
      * @param {string} name The user's name
      * @returns {Promise} An object representing the user's flair
      * @example
      *
      * r.getSubreddit('snoowrap').getUserFlair('actually_an_aardvark').then(console.log)
      // => { flair_css_class: '',
      //  flair_template_id: 'fdfd8532-c91e-11e5-b4d4-0e082084d721',
      //  flair_text: '',
      //  flair_position: 'right'
      // }
      */

    }, {
      key: 'getUserFlair',
      value: function getUserFlair(name) {
        return this._getFlairOptions({ name: name }).get('current');
      }
      /**
      * @summary Sets multiple user flairs at the same time
      * @desc Due to the behavior of the reddit API endpoint that this function uses, if any of the provided user flairs are
      invalid, reddit will make note of this in its response, but it will still attempt to set the remaining user flairs. If this
      occurs, the Promise returned by snoowrap will be rejected, and the rejection reason will be an array containing the 'error'
      responses from reddit.
      * @param {object[]} flairArray
      * @param {string} flairArray[].name A user's name
      * @param {string} flairArray[].text The flair text to assign to this user
      * @param {string} flairArray[].cssClass The flair CSS class to assign to this user
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example
      * r.getSubreddit('snoowrap').setMultipleUserFlairs([
      *   {name: 'actually_an_aardvark', text: "this is /u/actually_an_aardvark's flair text", cssClass: 'some-css-class'},
      *   {name: 'snoowrap_testing', text: "this is /u/snoowrap_testing's flair text", cssClass: 'some-css-class'}
      * ]);
      * // the above request gets completed successfully
      *
      * r.getSubreddit('snoowrap').setMultipleUserFlairs([
      *   {name: 'actually_an_aardvark', text: 'foo', cssClass: 'valid-css-class'},
      *   {name: 'snoowrap_testing', text: 'bar', cssClass: "this isn't a valid css class"},
      *   {name: 'not_an_aardvark', text: 'baz', cssClass: "this also isn't a valid css class"}
      * ])
      * // the Promise from the above request gets rejected, with the following rejection reason:
      * [
      *   {
      *     status: 'skipped',
      *     errors: { css: 'invalid css class `this isn\'t a valid css class\', ignoring' },
      *     ok: false,
      *     warnings: {}
      *   },
      *   {
      *     status: 'skipped',
      *     errors: { css: 'invalid css class `this also isn\'t a valid css class\', ignoring' },
      *     ok: false,
      *     warnings: {}
      *   }
      * ]
      * // note that /u/actually_an_aardvark's flair still got set by the request, even though the other two flairs caused errors.
      */

    }, {
      key: 'setMultipleUserFlairs',
      value: function setMultipleUserFlairs(flairArray) {
        var _this2 = this;

        var csvLines = flairArray.map(function (item) {
          // reddit expects to receive valid CSV data, which each line having the form `username,flair_text,css_class`.
          return [item.name, item.text || item.flairText || item.flair_text || '', item.cssClass || item.css_class || item.flairCssClass || item.flair_css_class || ''].map(function (str) {
            /* To escape special characters in the lines (e.g. if the flair text itself contains a comma), surround each
            part of the line with double quotes before joining the parts together with commas (in accordance with how special
            characters are usually escaped in CSV). If double quotes are themselves part of the flair text, replace them with a
            pair of consecutive double quotes. */
            return '"' + str.replace(/"/g, '""') + '"';
          }).join(',');
        });
        /* Due to an API limitation, this endpoint can only set the flair of 100 users at a time.
        Send multiple requests if necessary to ensure that all users in the array are accounted for. */
        return _Promise2.default.map((0, _chunk3.default)(csvLines, 100), function (flairChunk) {
          return _this2._post({ uri: 'r/' + _this2.display_name + '/api/flaircsv', form: { flair_csv: flairChunk.join('\n') } });
        }).then(_flatten3.default).tap(function (results) {
          var errorRows = results.filter(function (row) {
            return !row.ok;
          });
          if (errorRows.length) {
            throw errorRows;
          }
        }).return(this);
      }
      /**
      * @summary Gets a list of all user flairs on this subreddit.
      * @param {object} options
      * @param {string} [options.name] A specific username to jump to
      * @returns {Promise} A Listing containing user flairs
      * @example
      *
      * r.getSubreddit('snoowrap').getUserFlairList().then(console.log)
      // => Listing [
      //  { flair_css_class: null,
      //  user: 'not_an_aardvark',
      //  flair_text: 'Isn\'t an aardvark' },
      //  { flair_css_class: 'some-css-class',
      //    user: 'actually_an_aardvark',
      //    flair_text: 'this is /u/actually_an_aardvark\'s flair text' },
      //  { flair_css_class: 'some-css-class',
      //    user: 'snoowrap_testing',
      //    flair_text: 'this is /u/snoowrap_testing\'s flair text' }
      // ]
      */

    }, {
      key: 'getUserFlairList',
      value: function getUserFlairList() {
        var _this3 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'r/' + this.display_name + '/api/flairlist', qs: options, _transform: function _transform(response) {
            /* For unknown reasons, responses from the api/flairlist endpoint are formatted differently than responses from all other
            Listing endpoints. Most Listing endpoints return an object with a `children` property containing the Listing's children,
            and `after` and `before` properties corresponding to the `after` and `before` querystring parameters that a client should
            use in the next request. However, the api/flairlist endpoint returns an objecti with a `users` property containing the
            Listing's children, and `next` and `prev` properties corresponding to the `after` and `before` querystring parameters. As
            far as I can tell, there's no actual reason for this difference. >_> */
            response.after = response.next || null;
            response.before = response.prev || null;
            response.children = response.users;
            return _this3._r._newObject('Listing', response);
          } });
      }
      /**
      * @summary Configures the flair settings for this subreddit.
      * @param {object} options
      * @param {boolean} options.userFlairEnabled Determines whether user flair should be enabled
      * @param {string} options.userFlairPosition Determines the orientation of user flair relative to a given username. This
      should be either the string 'left' or the string 'right'.
      * @param {boolean} options.userFlairSelfAssignEnabled Determines whether users should be able to edit their own flair
      * @param {string} options.linkFlairPosition Determines the orientation of link flair relative to a link title. This should
      be either 'left' or 'right'.
      * @param {boolean} options.linkFlairSelfAssignEnabled Determines whether users should be able to edit the flair of their
      submissions.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').configure_flair({
        userFlairEnabled: true,
        userFlairPosition: 'left',
        userFlairSelfAssignEnabled: false,
        linkFlairPosition: 'right',
        linkFlairSelfAssignEnabled: false
      * })
      */

    }, {
      key: 'configureFlair',
      value: function configureFlair(_ref5) {
        var user_flair_enabled = _ref5.user_flair_enabled,
            _ref5$userFlairEnable = _ref5.userFlairEnabled,
            userFlairEnabled = _ref5$userFlairEnable === undefined ? user_flair_enabled : _ref5$userFlairEnable,
            user_flair_position = _ref5.user_flair_position,
            _ref5$userFlairPositi = _ref5.userFlairPosition,
            userFlairPosition = _ref5$userFlairPositi === undefined ? user_flair_position : _ref5$userFlairPositi,
            user_flair_self_assign_enabled = _ref5.user_flair_self_assign_enabled,
            _ref5$userFlairSelfAs = _ref5.userFlairSelfAssignEnabled,
            userFlairSelfAssignEnabled = _ref5$userFlairSelfAs === undefined ? user_flair_self_assign_enabled : _ref5$userFlairSelfAs,
            link_flair_position = _ref5.link_flair_position,
            _ref5$linkFlairPositi = _ref5.linkFlairPosition,
            linkFlairPosition = _ref5$linkFlairPositi === undefined ? link_flair_position : _ref5$linkFlairPositi,
            link_flair_self_assign_enabled = _ref5.link_flair_self_assign_enabled,
            _ref5$linkFlairSelfAs = _ref5.linkFlairSelfAssignEnabled,
            linkFlairSelfAssignEnabled = _ref5$linkFlairSelfAs === undefined ? link_flair_self_assign_enabled : _ref5$linkFlairSelfAs;

        return this._post({ uri: 'r/' + this.display_name + '/api/flairconfig', form: {
            api_type: api_type,
            flair_enabled: userFlairEnabled,
            flair_position: userFlairPosition,
            flair_self_assign_enabled: userFlairSelfAssignEnabled,
            link_flair_position: linkFlairPosition,
            link_flair_self_assign_enabled: linkFlairSelfAssignEnabled
          } }).return(this);
      }
      /**
      * @summary Gets the requester's flair on this subreddit.
      * @returns {Promise} An object representing the requester's current flair
      * @example
      *
      * r.getSubreddit('snoowrap').getMyFlair().then(console.log)
      // => { flair_css_class: 'some-css-class',
      //  flair_template_id: null,
      //  flair_text: 'this is /u/snoowrap_testing\'s flair text',
      //  flair_position: 'right'
      // }
      */

    }, {
      key: 'getMyFlair',
      value: function getMyFlair() {
        return this._getFlairOptions().get('current');
      }
      /**
      * @summary Sets the requester's flair on this subreddit.
      * @param {object} options
      * @param {string} options.flair_template_id A flair template ID to use. (This should be obtained beforehand using
      {@link getUserFlairTemplates}.)
      * @param {string} [options.text] The flair text to use. (This is only necessary/useful if the given flair
      template has the `text_editable` property set to `true`.)
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').selectMyFlair({flair_template_id: 'fdfd8532-c91e-11e5-b4d4-0e082084d721'})
      */

    }, {
      key: 'selectMyFlair',
      value: function selectMyFlair(options) {
        var _this4 = this;

        /* NOTE: This requires `identity` scope in addition to `flair` scope, since the reddit api needs to be passed a username.
        I'm not sure if there's a way to do this without requiring additional scope. */
        return this._r._getMyName().then(function (name) {
          return _this4._r._selectFlair(_extends$$1({}, options, { subredditName: _this4.display_name, name: name }));
        }).return(this);
      }
    }, {
      key: '_setMyFlairVisibility',
      value: function _setMyFlairVisibility(flair_enabled) {
        return this._post({ uri: 'r/' + this.display_name + '/api/setflairenabled', form: { api_type: api_type, flair_enabled: flair_enabled } }).return(this);
      }
      /**
      * @summary Makes the requester's flair visible on this subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').showMyFlair()
      */

    }, {
      key: 'showMyFlair',
      value: function showMyFlair() {
        return this._setMyFlairVisibility(true);
      }
      /**
      * @summary Makes the requester's flair invisible on this subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').hideMyFlair()
      */

    }, {
      key: 'hideMyFlair',
      value: function hideMyFlair() {
        return this._setMyFlairVisibility(false);
      }
      /**
      * @summary Creates a new selfpost on this subreddit.
      * @param {object} options An object containing details about the submission
      * @param {string} options.title The title of the submission
      * @param {string} [options.text] The selftext of the submission
      * @param {boolean} [options.sendReplies=true] Determines whether inbox replies should be enabled for this submission
      * @param {string} [options.captchaIden] A captcha identifier. This is only necessary if the authenticated account
      requires a captcha to submit posts and comments.
      * @param {string} [options.captchaResponse] The response to the captcha with the given identifier
      * @returns {Promise} The newly-created Submission object
      * @example
      *
      * r.getSubreddit('snoowrap').submitSelfpost({title: 'this is a selfpost', text: "hi, how's it going?"}).then(console.log)
      * // => Submission { name: 't3_4abmsz' }
      */

    }, {
      key: 'submitSelfpost',
      value: function submitSelfpost(options) {
        return this._r.submitSelfpost(_extends$$1({}, options, { subredditName: this.display_name }));
      }
      /**
      * @summary Creates a new link submission on this subreddit.
      * @param {object} options An object containing details about the submission
      * @param {string} options.title The title of the submission
      * @param {string} options.url The url that the link submission should point to
      * @param {boolean} [options.sendReplies=true] Determines whether inbox replies should be enabled for this submission
      * @param {boolean} [options.resubmit=true] If this is false and same link has already been submitted to this subreddit in
      the past, reddit will return an error. This could be used to avoid accidental reposts.
      * @param {string} [options.captchaIden] A captcha identifier. This is only necessary if the authenticated account
      requires a captcha to submit posts and comments.
      * @param {string} [options.captchaResponse] The response to the captcha with the given identifier
      * @returns {Promise} The newly-created Submission object
      * @example
      *
      * r.getSubreddit('snoowrap').submitLink({title: 'I found a cool website', url: 'https://google.com'}).then(console.log)
      * // => Submission { name: 't3_4abmsz' }
      */

    }, {
      key: 'submitLink',
      value: function submitLink(options) {
        return this._r.submitLink(_extends$$1({}, options, { subredditName: this.display_name }));
      }
      /**
      * @summary Gets a Listing of hot posts on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getSubreddit('snoowrap').getHot().then(console.log)
      * // => Listing [
      * //  Submission { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getHot',
      value: function getHot(options) {
        return this._r.getHot(this.display_name, options);
      }
      /**
      * @summary Gets a Listing of new posts on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getSubreddit('snoowrap').getNew().then(console.log)
      * // => Listing [
      * //  Submission { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      *
      */

    }, {
      key: 'getNew',
      value: function getNew(options) {
        return this._r.getNew(this.display_name, options);
      }
      /**
      * @summary Gets a Listing of new comments on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved comments
      * @example
      *
      * r.getSubreddit('snoowrap').getNewComments().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getNewComments',
      value: function getNewComments(options) {
        return this._r.getNewComments(this.display_name, options);
      }
      /**
      * @summary Gets a single random Submission from this subreddit.
      * @desc **Note**: This function will not work when snoowrap is running in a browser, because the reddit server sends a
      redirect which cannot be followed by a CORS request.
      * @returns {Promise} The retrieved Submission object
      * @example
      *
      * r.getSubreddit('snoowrap').getRandomSubmission.then(console.log)
      * // => Submission { ... }
      */

    }, {
      key: 'getRandomSubmission',
      value: function getRandomSubmission() {
        return this._r.getRandomSubmission(this.display_name);
      }
      /**
      * @summary Gets a Listing of top posts on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.time] Describes the timespan that posts should be retrieved from. Should be one of
      `hour, day, week, month, year, all`
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getSubreddit('snoowrap').getTop({time: 'all'}).then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getTop',
      value: function getTop(options) {
        return this._r.getTop(this.display_name, options);
      }
      /**
      * @summary Gets a Listing of controversial posts on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.time] Describes the timespan that posts should be retrieved from. Should be one of
      `hour, day, week, month, year, all`
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getSubreddit('snoowrap').getControversial({time: 'week'}).then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getControversial',
      value: function getControversial(options) {
        return this._r.getControversial(this.display_name, options);
      }
      /**
      * @summary Gets a Listing of top posts on this subreddit.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getSubreddit('snoowrap').getRising().then(console.log)
      * // => Listing [
      * //  Submission { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getRising',
      value: function getRising(options) {
        return this._r.getRising(this.display_name, options);
      }
      /**
      * @summary Gets the moderator mail for this subreddit.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing PrivateMessage objects
      * @example r.getSubreddit('snoowrap').getModmail().then(console.log)
      */

    }, {
      key: 'getModmail',
      value: function getModmail(options) {
        return this._getListing({ uri: 'r/' + this.display_name + '/about/message/moderator', qs: options });
      }
      /**
      * @summary Gets the moderation log for this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string[]} [options.mods] An array of moderator names that the results should be restricted to
      * @param {string} [options.type] Restricts the results to the specified type. This should be one of `banuser, unbanuser,
      removelink, approvelink, removecomment, approvecomment, addmoderator, invitemoderator, uninvitemoderator,
      acceptmoderatorinvite, removemoderator, addcontributor, removecontributor, editsettings, editflair, distinguish, marknsfw,
      wikibanned, wikicontributor, wikiunbanned, wikipagelisted, removewikicontributor, wikirevise, wikipermlevel,
      ignorereports, unignorereports, setpermissions, setsuggestedsort, sticky, unsticky, setcontestmode, unsetcontestmode,
      lock, unlock, muteuser, unmuteuser, createrule, editrule, deleterule, spoiler, unspoiler`
      * @returns {Promise} A Listing containing moderation actions
      * @example
      *
      * r.getSubreddit('snoowrap').getModerationLog().then(console.log)
      *
      * // => Listing [
      * //  ModAction { description: null, mod: 'snoowrap_testing', action: 'editflair', ... }
      * //  ModAction { description: null, mod: 'snoowrap_testing', action: 'approvecomment', ... }
      * //  ModAction { description: null, mod: 'snoowrap_testing', action: 'createrule', ... }
      * // ]
      */

    }, {
      key: 'getModerationLog',
      value: function getModerationLog() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var parsedOptions = (0, _omit3.default)(_extends$$1({}, options, { mod: options.mods && options.mods.join(',') }), 'mods');
        return this._getListing({ uri: 'r/' + this.display_name + '/about/log', qs: parsedOptions });
      }
      /**
      * @summary Gets a list of reported items on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.only] Restricts the Listing to the specified type of item. One of `links, comments`
      * @returns {Promise} A Listing containing reported items
      * @example
      *
      * r.getSubreddit('snoowrap').getReports().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getReports',
      value: function getReports() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'r/' + this.display_name + '/about/reports', qs: options });
      }
      /**
      * @summary Gets a list of removed items on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.only] Restricts the Listing to the specified type of item. One of `links, comments`
      * @returns {Promise} A Listing containing removed items
      * @example
      *
      * r.getSubreddit('snoowrap').getSpam().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getSpam',
      value: function getSpam() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'r/' + this.display_name + '/about/spam', qs: options });
      }
      /**
      * @summary Gets a list of items on the modqueue on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.only] Restricts the Listing to the specified type of item. One of `links, comments`
      * @returns {Promise} A Listing containing items on the modqueue
      * @example
      *
      * r.getSubreddit('snoowrap').getModqueue().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getModqueue',
      value: function getModqueue() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'r/' + this.display_name + '/about/modqueue', qs: options });
      }
      /**
      * @summary Gets a list of unmoderated items on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.only] Restricts the Listing to the specified type of item. One of `links, comments`
      * @returns {Promise} A Listing containing unmoderated items
      * @example
      *
      * r.getSubreddit('snoowrap').getUnmoderated().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getUnmoderated',
      value: function getUnmoderated() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'r/' + this.display_name + '/about/unmoderated', qs: options });
      }
      /**
      * @summary Gets a list of edited items on this subreddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.only] Restricts the Listing to the specified type of item. One of `links, comments`
      * @returns {Promise} A Listing containing edited items
      * @example
      *
      * r.getSubreddit('snoowrap').getEdited().then(console.log)
      * // => Listing [
      * //  Comment { ... },
      * //  Comment { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getEdited',
      value: function getEdited() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'r/' + this.display_name + '/about/edited', qs: options });
      }
      /**
      * @summary Accepts an invite to become a moderator of this subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').acceptModeratorInvite()
      */

    }, {
      key: 'acceptModeratorInvite',
      value: function acceptModeratorInvite() {
        return this._post({
          uri: 'r/' + this.display_name + '/api/accept_moderator_invite',
          form: { api_type: api_type }
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Abdicates moderator status on this subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').leaveModerator()
      */

    }, {
      key: 'leaveModerator',
      value: function leaveModerator() {
        var _this5 = this;

        return this.fetch().get('name').then(function (name) {
          return _this5._post({ uri: 'api/leavemoderator', form: { id: name } }).then((0, helpers.handleJsonErrors)(_this5));
        });
      }
      /**
      * @summary Abdicates approved submitter status on this subreddit.
      * @returns {Promise} A Promise that resolves with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').leaveContributor()
      */

    }, {
      key: 'leaveContributor',
      value: function leaveContributor() {
        var _this6 = this;

        return this.fetch().get('name').then(function (name) {
          return _this6._post({ uri: 'api/leavecontributor', form: { id: name } }).return(_this6);
        });
      }
      /**
      * @summary Gets a subreddit's CSS stylesheet.
      * @desc **Note**: This function will not work when snoowrap is running in a browser, because the reddit server sends a
      redirect which cannot be followed by a CORS request.
      * @desc **Note**: This method will return a 404 error if the subreddit in question does not have a custom stylesheet.
      * @returns {Promise} A Promise for a string containing the subreddit's CSS.
      * @example
      *
      * r.getSubreddit('snoowrap').getStylesheet().then(console.log)
      * // => '.md blockquote,.md del,body{color:#121212}.usertext-body ... '
      */

    }, {
      key: 'getStylesheet',
      value: function getStylesheet() {
        return this._get({ uri: 'r/' + this.display_name + '/stylesheet', json: false });
      }
      /**
      * @summary Conducts a search of reddit submissions, restricted to this subreddit.
      * @param {object} options Search options. Can also contain options for the resulting Listing.
      * @param {string} options.query The search query
      * @param {string} [options.time] Describes the timespan that posts should be retrieved frome. One of
      `hour, day, week, month, year, all`
      * @param {string} [options.sort] Determines how the results should be sorted. One of `relevance, hot, top, new, comments`
      * @param {string} [options.syntax='plain'] Specifies a syntax for the search. One of `cloudsearch, lucene, plain`
      * @returns {Promise} A Listing containing the search results.
      * @example
      *
      * r.getSubreddit('snoowrap').search({query: 'blah', sort: 'year'}).then(console.log)
      * // => Listing [
      * //  Submission { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'search',
      value: function search(options) {
        return this._r.search(_extends$$1({}, options, { subreddit: this, restrictSr: true }));
      }
      /**
      * @summary Gets the list of banned users on this subreddit.
      * @param {object} options Filtering options. Can also contain options for the resulting Listing.
      * @param {string} options.name A username on the list to jump to.
      * @returns {Promise} A Listing of users
      * @example
      *
      * r.getSubreddit('snoowrap').getBannedUsers().then(console.log)
      * // => Listing [
      * //  { date: 1461720936, note: '', name: 'actually_an_aardvark', id: 't2_q3519' }
      * //  ...
      * // ]
      *
      */

    }, {
      key: 'getBannedUsers',
      value: function getBannedUsers(options) {
        return this._getListing({ uri: 'r/' + this.display_name + '/about/banned', qs: (0, helpers.renameKey)(options, 'name', 'user') });
      }
      /**
      * @summary Gets the list of muted users on this subreddit.
      * @param {object} options Filtering options. Can also contain options for the resulting Listing.
      * @param {string} options.name A username on the list to jump to.
      * @returns {Promise} A Listing of users
      * @example
      *
      * r.getSubreddit('snoowrap').getBannedUsers().then(console.log)
      * // => Listing [
      * //  { date: 1461720936, name: 'actually_an_aardvark', id: 't2_q3519' }
      * //  ...
      * // ]
      */

    }, {
      key: 'getMutedUsers',
      value: function getMutedUsers(options) {
        return this._getListing({ uri: 'r/' + this.display_name + '/about/muted', qs: (0, helpers.renameKey)(options, 'name', 'user') });
      }
      /**
      * @summary Gets the list of users banned from this subreddit's wiki.
      * @param {object} options Filtering options. Can also contain options for the resulting Listing.
      * @param {string} options.name A username on the list to jump to.
      * @returns {Promise} A Listing of users
      * @example
      *
      * r.getSubreddit('snoowrap').getWikibannedUsers().then(console.log)
      * // => Listing [
      * //  { date: 1461720936, note: '', name: 'actually_an_aardvark', id: 't2_q3519' }
      * //  ...
      * // ]
      */

    }, {
      key: 'getWikibannedUsers',
      value: function getWikibannedUsers(options) {
        return this._getListing({ uri: 'r/' + this.display_name + '/about/wikibanned', qs: (0, helpers.renameKey)(options, 'name', 'user') });
      }
      /**
      * @summary Gets the list of approved submitters on this subreddit.
      * @param {object} options Filtering options. Can also contain options for the resulting Listing.
      * @param {string} options.name A username on the list to jump to.
      * @returns {Promise} A Listing of users
      * @example
      *
      * r.getSubreddit('snoowrap').getContributors().then(console.log)
      * // => Listing [
      * //  { date: 1461720936, name: 'actually_an_aardvark', id: 't2_q3519' }
      * //  ...
      * // ]
      */

    }, {
      key: 'getContributors',
      value: function getContributors(options) {
        return this._getListing({ uri: 'r/' + this.display_name + '/about/contributors', qs: (0, helpers.renameKey)(options, 'name', 'user') });
      }
      /**
      * @summary Gets the list of approved wiki submitters on this subreddit .
      * @param {object} options Filtering options. Can also contain options for the resulting Listing.
      * @param {string} options.name A username on the list to jump to.
      * @returns {Promise} A Listing of users
      * @example
      *
      * r.getSubreddit('snoowrap').getWikiContributors().then(console.log)
      * // => Listing [
      * //  { date: 1461720936, name: 'actually_an_aardvark', id: 't2_q3519' }
      * //  ...
      * // ]
      */

    }, {
      key: 'getWikiContributors',
      value: function getWikiContributors(options) {
        return this._getListing({ uri: 'r/' + this.display_name + '/about/wikicontributors', qs: (0, helpers.renameKey)(options, 'name', 'user') });
      }
      /**
      * @summary Gets the list of moderators on this subreddit.
      * @param {object} options
      * @param {string} [options.name] The name of a user to find in the list
      * @returns {Promise} An Array of RedditUsers representing the moderators of this subreddit
      * @example
      *
      * r.getSubreddit('AskReddit').getModerators().then(console.log)
      * // => [
      * //  RedditUser { date: 1453862639, mod_permissions: [ 'all' ], name: 'not_an_aardvark', id: 't2_k83md' },
      * //  ...
      * // ]
      *
      */

    }, {
      key: 'getModerators',
      value: function getModerators() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            name = _ref6.name;

        return this._get({ uri: 'r/' + this.display_name + '/about/moderators', qs: { user: name } });
      }
      /**
      * @summary Deletes the banner for this Subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteBanner()
      */

    }, {
      key: 'deleteBanner',
      value: function deleteBanner() {
        return this._post({ uri: 'r/' + this.display_name + '/api/delete_sr_banner', form: { api_type: api_type } }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Deletes the header image for this Subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteHeader()
      */

    }, {
      key: 'deleteHeader',
      value: function deleteHeader() {
        return this._post({ uri: 'r/' + this.display_name + '/api/delete_sr_header', form: { api_type: api_type } }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Deletes this subreddit's icon.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteIcon()
      */

    }, {
      key: 'deleteIcon',
      value: function deleteIcon() {
        return this._post({ uri: 'r/' + this.display_name + '/api/delete_sr_icon', form: { api_type: api_type } }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Deletes an image from this subreddit.
      * @param {object} options
      * @param {string} options.imageName The name of the image.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').deleteImage()
      */

    }, {
      key: 'deleteImage',
      value: function deleteImage(_ref7) {
        var image_name = _ref7.image_name,
            _ref7$imageName = _ref7.imageName,
            imageName = _ref7$imageName === undefined ? image_name : _ref7$imageName;

        return this._post({
          uri: 'r/' + this.display_name + '/api/delete_sr_image',
          form: { api_type: api_type, img_name: imageName }
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Gets this subreddit's current settings.
      * @returns {Promise} An Object containing this subreddit's current settings.
      * @example
      *
      * r.getSubreddit('snoowrap').getSettings().then(console.log)
      * // => SubredditSettings { default_set: true, submit_text: '', subreddit_type: 'private', ... }
      */

    }, {
      key: 'getSettings',
      value: function getSettings() {
        return this._get({ uri: 'r/' + this.display_name + '/about/edit' });
      }
      /**
      * @summary Edits this subreddit's settings.
      * @param {object} options An Object containing {[option name]: new value} mappings of the options that should be modified.
      Any omitted option names will simply retain their previous values.
      * @param {string} options.title The text that should appear in the header of the subreddit
      * @param {string} options.public_description The text that appears with this Subreddit on the search page, or on the
      blocked-access page if this subreddit is private. (500 characters max)
      * @param {string} options.description The sidebar text for the subreddit. (5120 characters max)
      * @param {string} [options.submit_text=''] The text to show below the submission page (1024 characters max)
      * @param {boolean} [options.hide_ads=false] Determines whether ads should be hidden on this subreddit. (This is only
      allowed for gold-only subreddits.)
      * @param {string} [options.lang='en'] The language of the subreddit (represented as an IETF language tag)
      * @param {string} [options.type='public'] Determines who should be able to access the subreddit. This should be one of
      `public, private, restricted, gold_restricted, gold_only, archived, employees_only`.
      * @param {string} [options.link_type='any'] Determines what types of submissions are allowed on the subreddit. This should
      be one of `any, link, self`.
      * @param {string} [options.submit_link_label=undefined] Custom text to display on the button that submits a link. If
      this is omitted, the default text will be displayed.
      * @param {string} [options.submit_text_label=undefined] Custom text to display on the button that submits a selfpost. If
      this is omitted, the default text will be displayed.
      * @param {string} [options.wikimode='modonly'] Determines who can edit wiki pages on the subreddit. This should be one of
      `modonly, anyone, disabled`.
      * @param {number} [options.wiki_edit_karma=0] The minimum amount of subreddit karma needed for someone to edit this
      subreddit's wiki. (This is only relevant if `options.wikimode` is set to `anyone`.)
      * @param {number} [options.wiki_edit_age=0] The minimum account age (in days) needed for someone to edit this subreddit's
      wiki. (This is only relevant if `options.wikimode` is set to `anyone`.)
      * @param {string} [options.spam_links='high'] The spam filter strength for links on this subreddit. This should be one of
      `low, high, all`.
      * @param {string} [options.spam_selfposts='high'] The spam filter strength for selfposts on this subreddit. This should be
      one of `low, high, all`.
      * @param {string} [options.spam_comments='high'] The spam filter strength for comments on this subreddit. This should be one
      of `low, high, all`.
      * @param {boolean} [options.over_18=false] Determines whether this subreddit should be classified as NSFW
      * @param {boolean} [options.allow_top=true] Determines whether the new subreddit should be able to appear in /r/all and
      trending subreddits
      * @param {boolean} [options.show_media=false] Determines whether image thumbnails should be enabled on this subreddit
      * @param {boolean} [options.show_media_preview=true] Determines whether media previews should be expanded by default on this
      subreddit
      * @param {boolean} [options.allow_images=true] Determines whether image uploads and links to image hosting sites should be
      enabled on this subreddit
      * @param {boolean} [options.exclude_banned_modqueue=false] Determines whether posts by site-wide banned users should be
      excluded from the modqueue.
      * @param {boolean} [options.public_traffic=false] Determines whether the /about/traffic page for this subreddit should be
      viewable by anyone.
      * @param {boolean} [options.collapse_deleted_comments=false] Determines whether deleted and removed comments should be
      collapsed by default
      * @param {string} [options.suggested_comment_sort=undefined] The suggested comment sort for the subreddit. This should be
      one of `confidence, top, new, controversial, old, random, qa`.If left blank, there will be no suggested sort,
      which means that users will see the sort method that is set in their own preferences (usually `confidence`.)
      * @param {boolean} [options.spoilers_enabled=false] Determines whether users can mark their posts as spoilers
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').editSettings({submit_text: 'Welcome! Please be sure to read the rules.'})
      */

    }, {
      key: 'editSettings',
      value: function editSettings(options) {
        var _this7 = this;

        return _Promise2.default.join(this.getSettings(), this.fetch().get('name'), function (currentValues, name) {
          return _this7._r._createOrEditSubreddit(_extends$$1({}, currentValues, options, { sr: name }));
        }).return(this);
      }
      /**
      * @summary Gets a list of recommended other subreddits given this one.
      * @param {object} [options]
      * @param {Array} [options.omit=[]] An Array of subreddit names that should be excluded from the listing.
      * @returns {Promise} An Array of subreddit names
      * @example
      *
      * r.getSubreddit('AskReddit').getRecommendedSubreddits().then(console.log);
      * // [ 'TheChurchOfRogers', 'Sleepycabin', ... ]
      */

    }, {
      key: 'getRecommendedSubreddits',
      value: function getRecommendedSubreddits(options) {
        var toOmit = options.omit && options.omit.join(',');
        return this._get({ uri: 'api/recommend/sr/' + this.display_name, qs: { omit: toOmit } }).then(function (names) {
          return (0, _map3.default)(names, 'sr_name');
        });
      }
      /**
      * @summary Gets the submit text (which displays on the submission form) for this subreddit.
      * @returns {Promise} The submit text, represented as a string.
      * @example
      *
      * r.getSubreddit('snoowrap').getSubmitText().then(console.log)
      * // => 'Welcome! Please be sure to read the rules.'
      */

    }, {
      key: 'getSubmitText',
      value: function getSubmitText() {
        return this._get({ uri: 'r/' + this.display_name + '/api/submit_text' }).get('submit_text');
      }
      /**
      * @summary Updates this subreddit's stylesheet.
      * @param {object} options
      * @param {string} options.css The new contents of the stylesheet
      * @param {string} [options.reason] The reason for the change (256 characters max)
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').updateStylesheet({css: 'body {color:#00ff00;}', reason: 'yay green'})
      */

    }, {
      key: 'updateStylesheet',
      value: function updateStylesheet(_ref8) {
        var css = _ref8.css,
            reason = _ref8.reason;

        return this._post({
          uri: 'r/' + this.display_name + '/api/subreddit_stylesheet',
          form: { api_type: api_type, op: 'save', reason: reason, stylesheet_contents: css }
        }).then((0, helpers.handleJsonErrors)(this));
      }
    }, {
      key: '_setSubscribed',
      value: function _setSubscribed(status) {
        return this._post({
          uri: 'api/subscribe',
          form: { action: status ? 'sub' : 'unsub', sr_name: this.display_name }
        }).return(this);
      }
      /**
      * @summary Subscribes to this subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').subscribe()
      */

    }, {
      key: 'subscribe',
      value: function subscribe() {
        return this._setSubscribed(true);
      }
      /**
      * @summary Unsubscribes from this subreddit.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').unsubscribe()
      */

    }, {
      key: 'unsubscribe',
      value: function unsubscribe() {
        var _this8 = this;

        /* Reddit returns a 404 error if the user attempts to unsubscribe to a subreddit that they weren't subscribed to in the
        first place. It also (as one would expect) returns a 404 error if the subreddit in question does not exist. snoowrap
        should swallow the first type of error internally, but it should raise the second type of error. Unfortunately, the errors
        themselves are indistinguishable. So if a 404 error gets thrown, fetch the current subreddit to check if it exists. If it
        does exist, then the 404 error was of the first type, so swallow it and return the current Subreddit object as usual. If
        the subreddit doesn't exist, then the original error was of the second type, so throw it. */
        return this._setSubscribed(false).catch({ statusCode: 404 }, function (err) {
          return _this8.fetch().return(_this8).catchThrow(err);
        });
      }
    }, {
      key: '_uploadSrImg',
      value: function _uploadSrImg(_ref9) {
        var _this9 = this;

        var name = _ref9.name,
            file = _ref9.file,
            uploadType = _ref9.uploadType,
            imageType = _ref9.imageType;

        if (typeof file !== 'string' && !(file instanceof _stream.Readable)) {
          throw new errors.InvalidMethodCallError('Uploaded image filepath must be a string or a ReadableStream.');
        }
        var parsedFile = typeof file === 'string' ? (0, _fs.createReadStream)(file) : file;
        return this._post({
          uri: 'r/' + this.display_name + '/api/upload_sr_img',
          formData: { name: name, upload_type: uploadType, img_type: imageType, file: parsedFile }
        }).then(function (result) {
          if (result.errors.length) {
            throw result.errors[0];
          }
          return _this9;
        });
      }
      /**
      * @summary Uploads an image for use in this subreddit's stylesheet.
      * @param {object} options
      * @param {string} options.name The name that the new image should have in the stylesheet
      * @param {string|stream.Readable} options.file The image file that should get uploaded. This should either be the path to an
      image file, or a [ReadableStream](https://nodejs.org/api/stream.html#stream_class_stream_readable) in environments (e.g.
      browsers) where the filesystem is unavailable.
      * @param {string} [options.imageType='png'] Determines how the uploaded image should be stored. One of `png, jpg`
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').uploadSubredditImage({name: 'the cookie monster', file: './cookie_monster.png'})
      */

    }, {
      key: 'uploadStylesheetImage',
      value: function uploadStylesheetImage(_ref10) {
        var name = _ref10.name,
            file = _ref10.file,
            _ref10$image_type = _ref10.image_type,
            image_type = _ref10$image_type === undefined ? 'png' : _ref10$image_type,
            _ref10$imageType = _ref10.imageType,
            imageType = _ref10$imageType === undefined ? image_type : _ref10$imageType;

        return this._uploadSrImg({ name: name, file: file, imageType: imageType, uploadType: 'img' });
      }
      /**
      * @summary Uploads an image to use as this subreddit's header.
      * @param {object} options
      * @param {string|stream.Readable} options.file The image file that should get uploaded. This should either be the path to an
      image file, or a [ReadableStream](https://nodejs.org/api/stream.html#stream_class_stream_readable) for environments (e.g.
      browsers) where the filesystem is unavailable.
      * @param {string} [options.imageType='png'] Determines how the uploaded image should be stored. One of `png, jpg`
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').uploadHeaderImage({name: 'the cookie monster', file: './cookie_monster.png'})
      */

    }, {
      key: 'uploadHeaderImage',
      value: function uploadHeaderImage(_ref11) {
        var file = _ref11.file,
            _ref11$image_type = _ref11.image_type,
            image_type = _ref11$image_type === undefined ? 'png' : _ref11$image_type,
            _ref11$imageType = _ref11.imageType,
            imageType = _ref11$imageType === undefined ? image_type : _ref11$imageType;

        return this._uploadSrImg({ file: file, imageType: imageType, uploadType: 'header' });
      }
      /**
      * @summary Uploads an image to use as this subreddit's mobile icon.
      * @param {object} options
      * @param {string|stream.Readable} options.file The image file that should get uploaded. This should either be the path to an
      image file, or a [ReadableStream](https://nodejs.org/api/stream.html#stream_class_stream_readable) for environments (e.g.
      browsers) where the filesystem is unavailable.
      * @param {string} [options.imageType='png'] Determines how the uploaded image should be stored. One of `png, jpg`
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').uploadIcon({name: 'the cookie monster', file: './cookie_monster.png'})
      */

    }, {
      key: 'uploadIcon',
      value: function uploadIcon(_ref12) {
        var file = _ref12.file,
            _ref12$image_type = _ref12.image_type,
            image_type = _ref12$image_type === undefined ? 'png' : _ref12$image_type,
            _ref12$imageType = _ref12.imageType,
            imageType = _ref12$imageType === undefined ? image_type : _ref12$imageType;

        return this._uploadSrImg({ file: file, imageType: imageType, uploadType: 'icon' });
      }
      /**
      * @summary Uploads an image to use as this subreddit's mobile banner.
      * @param {object} options
      * @param {string|stream.Readable} options.file The image file that should get uploaded. This should either be the path to an
      image file, or a [ReadableStream](https://nodejs.org/api/stream.html#stream_class_stream_readable) for environments (e.g.
      browsers) where the filesystem is unavailable.
      * @param {string} [options.imageType='png'] Determines how the uploaded image should be stored. One of `png, jpg`
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete.
      * @example r.getSubreddit('snoowrap').uploadBannerImage({name: 'the cookie monster', file: './cookie_monster.png'})
      */

    }, {
      key: 'uploadBannerImage',
      value: function uploadBannerImage(_ref13) {
        var file = _ref13.file,
            _ref13$image_type = _ref13.image_type,
            image_type = _ref13$image_type === undefined ? 'png' : _ref13$image_type,
            _ref13$imageType = _ref13.imageType,
            imageType = _ref13$imageType === undefined ? image_type : _ref13$imageType;

        return this._uploadSrImg({ file: file, imageType: imageType, upload_type: 'banner' });
      }
      /**
      * @summary Gets information on this subreddit's rules.
      * @returns {Promise} A Promise that fulfills with information on this subreddit's rules.
      * @example
      *
      * r.getSubreddit('snoowrap').getRules().then(console.log)
      *
      * // => {
      *   rules: [
      *     {
      *       kind: 'all',
      *       short_name: 'Rule 1: No violating rule 1',
      *       description: 'Breaking this rule is not allowed.',
      *       ...
      *     },
      *     ...
      *   ],
      *   site_rules: [
      *     'Spam',
      *     'Personal and confidential information'',
      *     'Threatening, harassing, or inciting violence'
      *   ]
      * }
      */

    }, {
      key: 'getRules',
      value: function getRules() {
        return this._get({ uri: 'r/' + this.display_name + '/about/rules' });
      }
      /**
      * @summary Gets the stickied post on this subreddit, or throws a 404 error if none exists.
      * @param {object} [options]
      * @param {number} [options.num=1] The number of the sticky to get. Should be either `1` (first sticky) or `2` (second sticky).
      * @returns {Promise} A Submission object representing this subreddit's stickied submission
      * @example
      * r.getSubreddit('snoowrap').getSticky({num: 2})
      * // => Submission { ... }
      */

    }, {
      key: 'getSticky',
      value: function getSticky() {
        var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref14$num = _ref14.num,
            num = _ref14$num === undefined ? 1 : _ref14$num;

        return this._get({ uri: 'r/' + this.display_name + '/about/sticky', qs: { num: num } });
      }
    }, {
      key: '_friend',
      value: function _friend(options) {
        return this._post({
          uri: 'r/' + this.display_name + '/api/friend',
          form: _extends$$1({}, options, { api_type: api_type })
        }).then((0, helpers.handleJsonErrors)(this));
      }
    }, {
      key: '_unfriend',
      value: function _unfriend(options) {
        return this._post({
          uri: 'r/' + this.display_name + '/api/unfriend',
          form: _extends$$1({}, options, { api_type: api_type })
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Invites the given user to be a moderator of this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the account that should be invited
      * @param {Array} [options.permissions] The moderator permissions that this user should have. This should be an array
      containing some combination of `"wiki", "posts", "access", "mail", "config", "flair"`. To add a moderator with full
      permissions, omit this property entirely.
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').inviteModerator({name: 'actually_an_aardvark', permissions: ['posts', 'wiki']})
      */

    }, {
      key: 'inviteModerator',
      value: function inviteModerator(_ref15) {
        var name = _ref15.name,
            permissions = _ref15.permissions;

        return this._friend({ name: name, permissions: (0, helpers.formatModPermissions)(permissions), type: 'moderator_invite' });
      }
      /**
      * @summary Revokes an invitation for the given user to be a moderator.
      * @param {object} options
      * @param {string} options.name The username of the account whose invitation should be revoked
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').revokeModeratorInvite({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'revokeModeratorInvite',
      value: function revokeModeratorInvite(_ref16) {
        var name = _ref16.name;

        return this._unfriend({ name: name, type: 'moderator_invite' });
      }
      /**
      * @summary Removes the given user's moderator status on this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the account whose moderator status should be removed
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').removeModerator({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'removeModerator',
      value: function removeModerator(_ref17) {
        var name = _ref17.name;

        return this._unfriend({ name: name, type: 'moderator' });
      }
      /**
      * @summary Makes the given user an approved submitter of this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the account that should be given this status
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').addContributor({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'addContributor',
      value: function addContributor(_ref18) {
        var name = _ref18.name;

        return this._friend({ name: name, type: 'contributor' });
      }
      /**
      * @summary Revokes this user's approved submitter status on this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the account whose status should be revoked
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').removeContributor({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'removeContributor',
      value: function removeContributor(_ref19) {
        var name = _ref19.name;

        return this._unfriend({ name: name, type: 'contributor' });
      }
      /**
      * @summary Bans the given user from this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the account that should be banned
      * @param {string} [options.banMessage] The ban message. This will get sent to the user in a private message, alerting them
      that they have been banned.
      * @param {string} [options.banReason] A string indicating which rule the banned user broke (100 characters max)
      * @param {number} [options.duration] The duration of the ban, in days. For a permanent ban, omit this parameter.
      * @param {string} [options.banNote] A note that appears on the moderation log, usually used to indicate the reason for the
      ban. This is not visible to the banned user. (300 characters max)
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').banUser({name: 'actually_an_aardvark', banMessage: 'You are now banned LOL'})
      */

    }, {
      key: 'banUser',
      value: function banUser(_ref20) {
        var name = _ref20.name,
            ban_message = _ref20.ban_message,
            _ref20$banMessage = _ref20.banMessage,
            banMessage = _ref20$banMessage === undefined ? ban_message : _ref20$banMessage,
            ban_reason = _ref20.ban_reason,
            _ref20$banReason = _ref20.banReason,
            banReason = _ref20$banReason === undefined ? ban_reason : _ref20$banReason,
            duration = _ref20.duration,
            ban_note = _ref20.ban_note,
            _ref20$banNote = _ref20.banNote,
            banNote = _ref20$banNote === undefined ? ban_note : _ref20$banNote;

        return this._friend({
          name: name, ban_message: banMessage,
          ban_reason: banReason,
          duration: duration,
          note: banNote,
          type: 'banned'
        });
      }
      /**
      * @summary Unbans the given user from this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the account that should be unbanned
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example r.getSubreddit('snoowrap').unbanUser({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'unbanUser',
      value: function unbanUser(_ref21) {
        var name = _ref21.name;

        return this._unfriend({ name: name, type: 'banned' });
      }
      /**
      * @summary Mutes the given user from messaging this subreddit for 72 hours.
      * @param {object} options
      * @param {string} options.name The username of the account that should be muted
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').muteUser({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'muteUser',
      value: function muteUser(_ref22) {
        var name = _ref22.name;

        return this._friend({ name: name, type: 'muted' });
      }
      /**
      * @summary Unmutes the given user from messaging this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the account that should be muted
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').unmuteUser({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'unmuteUser',
      value: function unmuteUser(_ref23) {
        var name = _ref23.name;

        return this._unfriend({ name: name, type: 'muted' });
      }
      /**
      * @summary Bans the given user from editing this subreddit's wiki.
      * @param {object} options
      * @param {string} options.name The username of the account that should be wikibanned
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').wikibanUser({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'wikibanUser',
      value: function wikibanUser(_ref24) {
        var name = _ref24.name;

        return this._friend({ name: name, type: 'wikibanned' });
      }
      /**
      * @summary Unbans the given user from editing this subreddit's wiki.
      * @param {object} options
      * @param {string} options.name The username of the account that should be unwikibanned
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').unwikibanUser({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'unwikibanUser',
      value: function unwikibanUser(_ref25) {
        var name = _ref25.name;

        return this._unfriend({ name: name, type: 'wikibanned' });
      }
      /**
      * @summary Adds the given user to this subreddit's list of approved wiki editors.
      * @param {object} options
      * @param {string} options.name The username of the account that should be given approved editor status
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').addWikiContributor({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'addWikiContributor',
      value: function addWikiContributor(_ref26) {
        var name = _ref26.name;

        return this._friend({ name: name, type: 'wikicontributor' });
      }
      /**
      * @summary Removes the given user from this subreddit's list of approved wiki editors.
      * @param {object} options
      * @param {string} options.name The username of the account whose approved editor status should be revoked
      * @returns {Promise} A Promise that fulfills with this Subreddit when the request is complete
      * @example r.getSubreddit('snoowrap').removeWikiContributor({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'removeWikiContributor',
      value: function removeWikiContributor(_ref27) {
        var name = _ref27.name;

        return this._unfriend({ name: name, type: 'wikicontributor' });
      }
      /**
      * @summary Sets the permissions for a given moderator on this subreddit.
      * @param {object} options
      * @param {string} options.name The username of the moderator whose permissions are being changed
      * @param {Array} [options.permissions] The new moderator permissions that this user should have. This should be an array
      containing some combination of `"wiki", "posts", "access", "mail", "config", "flair"`. To add a moderator with full
      permissions, omit this property entirely.
      * @returns {Promise} A Promise that fulfills with this Subreddit when this request is complete
      * @example r.getSubreddit('snoowrap').setModeratorPermissions({name: 'actually_an_aardvark', permissions: ['mail']})
      */

    }, {
      key: 'setModeratorPermissions',
      value: function setModeratorPermissions(_ref28) {
        var name = _ref28.name,
            permissions = _ref28.permissions;

        return this._post({
          uri: 'r/' + this.display_name + '/api/setpermissions',
          form: { api_type: api_type, name: name, permissions: (0, helpers.formatModPermissions)(permissions), type: 'moderator' }
        }).then((0, helpers.handleJsonErrors)(this));
      }
      /**
      * @summary Gets a given wiki page on this subreddit.
      * @param {string} title The title of the desired wiki page.
      * @returns {WikiPage} An unfetched WikiPage object corresponding to the desired wiki page
      * @example
      *
      * r.getSubreddit('snoowrap').getWikiPage('index')
      * // => WikiPage { title: 'index', subreddit: Subreddit { display_name: 'snoowrap' } }
      */

    }, {
      key: 'getWikiPage',
      value: function getWikiPage(title) {
        return this._r._newObject('WikiPage', { subreddit: this, title: title });
      }
      /**
      * @summary Gets the list of wiki pages on this subreddit.
      * @returns {Promise} An Array containing WikiPage objects
      * @example
      *
      * r.getSubreddit('snoowrap').getWikiPages().then(console.log)
      * // => [
      * //   WikiPage { title: 'index', subreddit: Subreddit { display_name: 'snoowrap'} }
      * //   WikiPage { title: 'config/sidebar', subreddit: Subreddit { display_name: 'snoowrap'} }
      * //   WikiPage { title: 'secret_things', subreddit: Subreddit { display_name: 'snoowrap'} }
      * //   WikiPage { title: 'config/submit_text', subreddit: Subreddit { display_name: 'snoowrap'} }
      * // ]
      */

    }, {
      key: 'getWikiPages',
      value: function getWikiPages() {
        var _this10 = this;

        return this._get({ uri: 'r/' + this.display_name + '/wiki/pages' }).map(function (title) {
          return _this10.getWikiPage(title);
        });
      }
      /**
      * @summary Gets a list of revisions on this subreddit's wiki.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing wiki revisions
      * @example
      *
      * r.getSubreddit('snoowrap').getWikiRevisions().then(console.log)
      * // => Listing [
      * //  { page: 'index', reason: 'added cookies', ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getWikiRevisions',
      value: function getWikiRevisions(options) {
        return this._getListing({ uri: 'r/' + this.display_name + '/wiki/revisions', qs: options });
      }
    }, {
      key: '_uri',
      get: function get() {
        return 'r/' + this.display_name + '/about';
      }
    }]);

    return Subreddit;
  }(_RedditContent3.default);

  exports.default = Subreddit;
});

var MultiReddit_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _RedditContent3 = _interopRequireDefault(RedditContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
  * @summary A class representing a multireddit.
  * <style> #MultiReddit {display: none} </style>
  * @example
  *
  * // Get a multireddit belonging to a specific user
  * r.getUser('multi-mod').getMultireddit('coding_languages')
  */
  var MultiReddit = function (_RedditContent) {
    _inherits(MultiReddit, _RedditContent);

    function MultiReddit(options, _r, _hasFetched) {
      _classCallCheck(this, MultiReddit);

      var _this = _possibleConstructorReturn(this, (MultiReddit.__proto__ || Object.getPrototypeOf(MultiReddit)).call(this, options, _r, _hasFetched));

      if (_hasFetched) {
        _this.curator = _r.getUser(_this.path.split('/')[2]);
        _this.subreddits = _this.subreddits.map(function (item) {
          return _this._r._newObject('Subreddit', item.data || { display_name: item.name });
        });
      }
      return _this;
    }

    _createClass(MultiReddit, [{
      key: 'copy',

      /**
      * @summary Copies this multireddit to the requester's own account.
      * @param {object} options
      * @param {string} options.newName The new name for the copied multireddit
      * @returns {Promise} A Promise for the newly-copied multireddit
      * @example r.getUser('multi-mod').getMultireddit('coding_languages').copy({newName: 'my_coding_languages_copy'})
      */
      value: function copy(_ref) {
        var _this2 = this;

        var new_name = _ref.new_name,
            _ref$newName = _ref.newName,
            newName = _ref$newName === undefined ? new_name : _ref$newName;

        return this._r._getMyName().then(function (name) {
          return _this2._post({ uri: 'api/multi/copy', form: {
              from: _this2._path,
              to: '/user/' + name + '/m/' + newName,
              display_name: newName
            } });
        });
      }
      /**
      * @summary Renames this multireddit.
      * @desc **Note**: This method mutates this MultiReddit.
      * @param {object} options
      * @param {string} options.newName The new name for this multireddit.
      * @returns {Promise} A Promise that fulfills with this multireddit
      * @example r.getUser('multi-mod').getMultireddit('coding_languages').copy({newName: 'cookie_languages '})
      */

    }, {
      key: 'rename',
      value: function rename(_ref2) {
        var _this3 = this;

        var new_name = _ref2.new_name,
            _ref2$newName = _ref2.newName,
            newName = _ref2$newName === undefined ? new_name : _ref2$newName;

        return this._r._getMyName().then(function (name) {
          return _this3._post({
            uri: 'api/multi/rename',
            form: { from: _this3._path, to: '/user/' + name + '/m/' + newName, display_name: newName }
          });
        }).then(function (res) {
          _this3.name = res.name;
        }).return(this);
      }
      /**
      * @summary Edits the properties of this multireddit.
      * @desc **Note**: Any omitted properties here will simply retain their previous values.
      * @param {object} options
      * @param {string} [options.name] The name of the new multireddit. 50 characters max
      * @param {string} [options.description] A description for the new multireddit, in markdown.
      * @param {string} [options.visibility] The multireddit's visibility setting. One of `private`, `public`, `hidden`.
      * @param {string} [options.icon_name] One of `art and design`, `ask`, `books`, `business`, `cars`, `comics`, `cute animals`,
      `diy`, `entertainment`, `food and drink`, `funny`, `games`, `grooming`, `health`, `life advice`, `military`, `models pinup`,
      `music`, `news`, `philosophy`, `pictures and gifs`, `science`, `shopping`, `sports`, `style`, `tech`, `travel`,
      `unusual stories`, `video`, `None`
      * @param {string} [options.key_color] A six-digit RGB hex color, preceded by '#'
      * @param {string} [options.weighting_scheme] One of 'classic', 'fresh'
      * @returns {Promise} The updated version of this multireddit
      * @example r.getUser('not_an_aardvark').getMultireddit('cookie_languages').edit({visibility: 'hidden'})
      */

    }, {
      key: 'edit',
      value: function edit(_ref3) {
        var description = _ref3.description,
            icon_name = _ref3.icon_name,
            key_color = _ref3.key_color,
            visibility = _ref3.visibility,
            weighting_scheme = _ref3.weighting_scheme;

        return this._put({ uri: 'api/multi' + this._path, form: { model: JSON.stringify({
              description_md: description,
              display_name: this.name,
              icon_name: icon_name,
              key_color: key_color,
              visibility: visibility,
              weighting_scheme: weighting_scheme
            }) } });
      }
      /**
      * @summary Adds a subreddit to this multireddit.
      * @param {Subreddit} sub The Subreddit object to add (or a string representing a subreddit name)
      * @returns {Promise} A Promise that fulfills with this multireddit when the reuqest is complete
      * @example r.getUser('not_an_aardvark').getMultireddit('cookie_languages').addSubreddit('cookies')
      */

    }, {
      key: 'addSubreddit',
      value: function addSubreddit(sub) {
        sub = typeof sub === 'string' ? sub : sub.display_name;
        return this._put({ uri: 'api/multi' + this._path + '/r/' + sub, form: { model: JSON.stringify({ name: sub }) } }).return(this);
      }
      /**
      * @summary Removes a subreddit from this multireddit.
      * @param {Subreddit} sub The Subreddit object to remove (or a string representing a subreddit name)
      * @returns {Promise} A Promise that fulfills with this multireddit when the request is complete
      * @example r.getUser('not_an_aardvark').getMultireddit('cookie_languages').removeSubreddit('cookies')
      */

    }, {
      key: 'removeSubreddit',
      value: function removeSubreddit(sub) {
        return this._delete({ uri: 'api/multi' + this._path + '/r/' + (typeof sub === 'string' ? sub : sub.display_name) }).return(this);
      }
      /* Note: The endpoints GET/PUT /api/multi/multipath/description and GET /api/multi/multipath/r/srname are intentionally not
      included, because they're redundant and the same thing can be achieved by simply using fetch() and edit(). */

    }, {
      key: '_uri',
      get: function get() {
        return 'api/multi' + this._path + '?expand_srs=true';
      }
    }, {
      key: '_path',
      get: function get() {
        return '/user/' + this.curator.name + '/m/' + this.name;
      }
    }]);

    return MultiReddit;
  }(_RedditContent3.default);

  // MultiReddit#delete is not in the class body since Safari 9 can't parse the `delete` function name in class bodies.
  /**
  * @function
  * @name delete
  * @summary Deletes this multireddit.
  * @returns {Promise} A Promise that fulfills when this request is complete
  * @example r.getUser('not_an_aardvark').getMultireddit('cookie_languages').delete()
  * @memberof MultiReddit
  * @instance
  */
  Object.defineProperty(MultiReddit.prototype, 'delete', {
    value: function value() {
      return this._delete({ uri: 'api/multi' + this._path });
    },
    configurable: true, writable: true });

  exports.default = MultiReddit;
});

var WikiPage_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _RedditContent3 = _interopRequireDefault(RedditContent_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  /**
  * A class representing a wiki page on a subreddit.
  *
  * **Note:** Due to a bug in reddit's CORS settings, it is not possible to fetch the contents of a wiki page on a private
  subreddit while running snoowrap in a browser. (This issue does not apply when running snoowrap in Node.js.)
  *
  * <style> #WikiPage {display: none} </style>
  * @extends RedditContent
  * @example
  *
  * // Get a wiki page on a given subreddit by name
  * r.getSubreddit('AskReddit').getWikiPage('rules')
  */
  var WikiPage = function (_RedditContent) {
    _inherits(WikiPage, _RedditContent);

    function WikiPage() {
      _classCallCheck(this, WikiPage);

      return _possibleConstructorReturn(this, (WikiPage.__proto__ || Object.getPrototypeOf(WikiPage)).apply(this, arguments));
    }

    _createClass(WikiPage, [{
      key: 'getSettings',

      /**
      * @summary Gets the current settings for this wiki page.
      * @returns {Promise} An Object representing the settings for this page
      * @example
      *
      * r.getSubreddit('snoowrap').getWikiPage('index').getSettings().then(console.log)
      * // => WikiPageSettings { permlevel: 0, editors: [], listed: true }
      */
      value: function getSettings() {
        return this._get({ uri: 'r/' + this.subreddit.display_name + '/wiki/settings/' + this.title });
      }
      /**
      * @summary Edits the settings for this wiki page.
      * @param {object} options
      * @param {boolean} options.listed Determines whether this wiki page should appear on the public list of pages for this
      subreddit.
      * @param {number} options.permissionLevel Determines who should be allowed to access and edit this page `0` indicates that
      this subreddit's default wiki settings should get used, `1` indicates that only approved wiki contributors on this subreddit
      should be able to edit this page, and `2` indicates that only mods should be able to view and edit this page.
      * @returns {Promise} A Promise that fulfills with this WikiPage when the request is complete
      * @example r.getSubreddit('snoowrap').getWikiPage('index').editSettings({listed: false, permission_level: 1})
      */

    }, {
      key: 'editSettings',
      value: function editSettings(_ref) {
        var listed = _ref.listed,
            permission_level = _ref.permission_level,
            _ref$permissionLevel = _ref.permissionLevel,
            permissionLevel = _ref$permissionLevel === undefined ? permission_level : _ref$permissionLevel;

        return this._post({
          uri: 'r/' + this.subreddit.display_name + '/wiki/settings/' + this.title,
          form: { listed: listed, permlevel: permissionLevel }
        }).return(this);
      }
    }, {
      key: '_modifyEditor',
      value: function _modifyEditor(_ref2) {
        var name = _ref2.name,
            action = _ref2.action;

        return this._post({
          uri: 'r/' + this.subreddit.display_name + '/api/wiki/alloweditor/' + action,
          form: { page: this.title, username: name }
        });
      }
      /**
      * @summary Makes the given user an approved editor of this wiki page.
      * @param {object} options
      * @param {string} options.name The name of the user to be added
      * @returns {Promise} A Promise that fulfills with this WikiPage when the request is complete
      * @example r.getSubreddit('snoowrap').getWikiPage('index').addEditor({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'addEditor',
      value: function addEditor(_ref3) {
        var name = _ref3.name;

        return this._modifyEditor({ name: name, action: 'add' }).return(this);
      }
      /**
      * @summary Revokes this user's approved editor status for this wiki page
      * @param {object} options
      * @param {string} options.name The name of the user to be removed
      * @returns {Promise} A Promise that fulfills with this WikiPage when the request is complete
      * @example r.getSubreddit('snoowrap').getWikiPage('index').removeEditor({name: 'actually_an_aardvark'})
      */

    }, {
      key: 'removeEditor',
      value: function removeEditor(_ref4) {
        var name = _ref4.name;

        return this._modifyEditor({ name: name, action: 'del' }).return(this);
      }
      /**
      * @summary Edits this wiki page, or creates it if it does not exist yet.
      * @param {object} options
      * @param {string} options.text The new content of the page, in markdown.
      * @param {string} [options.reason] The edit reason that will appear in this page's revision history. 256 characters max
      * @param {string} [options.previousRevision] Determines which revision this edit should be added to. If this parameter is
      omitted, this edit is simply added to the most recent revision.
      * @returns {Promise} A Promise that fulfills with this WikiPage when the request is complete
      * @example r.getSubreddit('snoowrap').getWikiPage('index').edit({text: 'Welcome', reason: 'Added a welcome message'})
      */

    }, {
      key: 'edit',
      value: function edit(_ref5) {
        var text = _ref5.text,
            reason = _ref5.reason,
            previous_revision = _ref5.previous_revision,
            _ref5$previousRevisio = _ref5.previousRevision,
            previousRevision = _ref5$previousRevisio === undefined ? previous_revision : _ref5$previousRevisio;

        return this._post({
          uri: 'r/' + this.subreddit.display_name + '/api/wiki/edit',
          form: { content: text, page: this.title, previous: previousRevision, reason: reason }
        }).return(this);
      }
      /**
      * @summary Gets a list of revisions for this wiki page.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing revisions of this page
      * @example
      *
      * r.getSubreddit('snoowrap').getRevisions({limit: 1}).then(console.log)
      * // => Listing [
      * //  {
      * //    timestamp: 1460973194,
      * //    reason: 'Added a welcome message',
      * //    author: RedditUser { name: 'not_an_aardvark', id: 'k83md', ... },
      * //    page: 'index',
      * //    id: '506370b4-0508-11e6-b550-0e69f29e0c4d'
      * //  }
      * // ]
      */

    }, {
      key: 'getRevisions',
      value: function getRevisions(options) {
        return this._getListing({ uri: 'r/' + this.subreddit.display_name + '/wiki/revisions/' + this.title, qs: options });
      }
      /**
      * @summary Hides the given revision from this page's public revision history.
      * @param {object} options
      * @param {string} options.id The revision's id
      * @returns {Promise} A Promise that fulfills with this WikiPage when the request is complete
      * @example r.getSubreddit('snoowrap').getWikiPage('index').hideRevision({id: '506370b4-0508-11e6-b550-0e69f29e0c4d'})
      */

    }, {
      key: 'hideRevision',
      value: function hideRevision(_ref6) {
        var id = _ref6.id;

        return this._post({
          uri: 'r/' + this.subreddit.display_name + '/api/wiki/hide',
          qs: { page: this.title, revision: id }
        }).return(this);
      }
      /**
      * @summary Reverts this wiki page to the given point.
      * @param {object} options
      * @param {string} options.id The id of the revision that this page should be reverted to
      * @returns {Promise} A Promise that fulfills with this WikiPage when the request is complete
      * @example r.getSubreddit('snoowrap').getWikiPage('index').revert({id: '506370b4-0508-11e6-b550-0e69f29e0c4d'})
      */

    }, {
      key: 'revert',
      value: function revert(_ref7) {
        var id = _ref7.id;

        return this._post({
          uri: 'r/' + this.subreddit.display_name + '/api/wiki/revert',
          qs: { page: this.title, revision: id }
        }).return(this);
      }
      /**
      * @summary Gets a list of discussions about this wiki page.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing discussions about this page
      * @example
      *
      * r.getSubreddit('snoowrap').getWikiPage('index').getDiscussions().then(console.log)
      * // => Listing [
      * //  Submission { ... },
      * //  Submission { ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getDiscussions',
      value: function getDiscussions(options) {
        return this._getListing({ uri: 'r/' + this.subreddit.display_name + '/wiki/discussions/' + this.title, qs: options });
      }
    }, {
      key: '_uri',
      get: function get() {
        return 'r/' + this.subreddit.display_name + '/wiki/' + this.title;
      }
    }]);

    return WikiPage;
  }(_RedditContent3.default);

  exports.default = WikiPage;
});

var UserList_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var UserList = function UserList(options, _r) {
    _classCallCheck(this, UserList);

    return options.children.map(function (user) {
      return _r._newObject('RedditUser', user);
    });
  };

  exports.default = UserList;
});

var index$2 = createCommonjsModule(function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  Object.defineProperty(exports, 'RedditContent', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(RedditContent_1).default;
    }
  });

  Object.defineProperty(exports, 'ReplyableContent', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(ReplyableContent_1).default;
    }
  });

  Object.defineProperty(exports, 'VoteableContent', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(VoteableContent_1).default;
    }
  });

  Object.defineProperty(exports, 'Comment', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(Comment_1).default;
    }
  });

  Object.defineProperty(exports, 'RedditUser', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(RedditUser_1).default;
    }
  });

  Object.defineProperty(exports, 'Submission', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(Submission_1).default;
    }
  });

  Object.defineProperty(exports, 'LiveThread', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(LiveThread_1).default;
    }
  });

  Object.defineProperty(exports, 'PrivateMessage', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(PrivateMessage_1).default;
    }
  });

  Object.defineProperty(exports, 'Subreddit', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(Subreddit_1).default;
    }
  });

  Object.defineProperty(exports, 'MultiReddit', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(MultiReddit_1).default;
    }
  });

  Object.defineProperty(exports, 'WikiPage', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(WikiPage_1).default;
    }
  });

  Object.defineProperty(exports, 'Listing', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(Listing_1).default;
    }
  });

  Object.defineProperty(exports, 'More', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(More_1).default;
    }
  });

  Object.defineProperty(exports, 'UserList', {
    enumerable: true,
    get: function get() {
      return _interopRequireDefault(UserList_1).default;
    }
  });

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
});

var snoowrap_1 = createCommonjsModule(function (module) {
  'use strict';

  var _values3 = _interopRequireDefault(values_1);

  var _snakeCase3 = _interopRequireDefault(snakeCase_1);

  var _omitBy3 = _interopRequireDefault(omitBy_1);

  var _omit3 = _interopRequireDefault(omit_1);

  var _mapValues3 = _interopRequireDefault(mapValues_1);

  var _map3 = _interopRequireDefault(map_1);

  var _isEmpty3 = _interopRequireDefault(isEmpty_1);

  var _includes3 = _interopRequireDefault(includes_1);

  var _forOwn3 = _interopRequireDefault(forOwn_1);

  var _defaults3 = _interopRequireDefault(defaults_1);

  var _typeof$$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  };

  var _extends$$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _Promise2 = _interopRequireDefault(_Promise$2);

  var _promiseChains2 = _interopRequireDefault(index);

  var _util2 = _interopRequireDefault(_util);

  var requestHandler = _interopRequireWildcard(request_handler);

  var errors$$1 = _interopRequireWildcard(errors);

  var _create_config2 = _interopRequireDefault(create_config);

  var objects = _interopRequireWildcard(index$2);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var api_type = 'json';

  /** The class for a snoowrap requester.
  * A requester is the base object that is used to fetch content from reddit. Each requester contains a single set of OAuth
  tokens.
  
  If constructed with a refresh token, a requester will be able to repeatedly generate access tokens as necessary, without any
  further user intervention. After making at least one request, a requester will have the `access_token` property, which specifies
  the access token currently in use. It will also have a few additional properties such as `scope` (an array of scope strings)
  and `ratelimitRemaining` (the number of requests remaining for the current 10-minute interval, in compliance with reddit's
  [API rules](https://github.com/reddit/reddit/wiki/API).) These properties primarily exist for internal use, but they are
  exposed since they are useful externally as well.
  */
  var snoowrap = function () {
    /**
    * @summary Constructs a new requester.
    * @desc You should use the snoowrap constructor if you are able to authorize a reddit account in advance (e.g. for a Node.js
    script that always uses the same account). If you aren't able to authorize in advance (e.g. acting through an arbitrary user's
    account while running snoowrap in a browser), then you should use {@link snoowrap.getAuthUrl} and
    {@link snoowrap.fromAuthCode} instead.
    *
    * snoowrap supports several different options for pre-existing authentication:
    * 1. *Refresh token*: To authenticate with a refresh token, pass an object with the properties `userAgent`, `clientId`,
    `clientSecret`, and `refreshToken` to the snoowrap constructor. You will need to get the refresh token from reddit
    beforehand. A script to automatically generate refresh tokens for you can be found
    [here](https://github.com/not-an-aardvark/reddit-oauth-helper).
    * 1. *Username/password*: To authenticate with a username and password, pass an object with the properties `userAgent`,
    `clientId`, `clientSecret`, `username`, and `password` to the snoowrap constructor. Note that username/password
    authentication is only possible for `script`-type apps.
    * 1. *Access token*: To authenticate with an access token, pass an object with the properties `userAgent` and `accessToken`
    to the snoowrap constructor. Note that all access tokens expire one hour after being generated, so this method is
    not recommended for long-term use.
    * @param {object} options An object containing authentication options. This should always have the property `userAgent`. It
    must also contain some combination of credentials (see above)
    * @param {string} options.userAgent A unique description of what your app does. This argument is not necessary when snoowrap
    is running in a browser.
    * @param {string} [options.clientId] The client ID of your app (assigned by reddit)
    * @param {string} [options.clientSecret] The client secret of your app (assigned by reddit). If you are using a refresh token
    with an installed app (which does not have a client secret), pass an empty string as your `clientSecret`.
    * @param {string} [options.username] The username of the account to access
    * @param {string} [options.password] The password of the account to access
    * @param {string} [options.refreshToken] A refresh token for your app
    * @param {string} [options.accessToken] An access token for your app
    */
    function snoowrap() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          user_agent = _ref.user_agent,
          _ref$userAgent = _ref.userAgent,
          userAgent = _ref$userAgent === undefined ? user_agent : _ref$userAgent,
          client_id = _ref.client_id,
          _ref$clientId = _ref.clientId,
          clientId = _ref$clientId === undefined ? client_id : _ref$clientId,
          client_secret = _ref.client_secret,
          _ref$clientSecret = _ref.clientSecret,
          clientSecret = _ref$clientSecret === undefined ? client_secret : _ref$clientSecret,
          refresh_token = _ref.refresh_token,
          _ref$refreshToken = _ref.refreshToken,
          refreshToken = _ref$refreshToken === undefined ? refresh_token : _ref$refreshToken,
          access_token = _ref.access_token,
          _ref$accessToken = _ref.accessToken,
          accessToken = _ref$accessToken === undefined ? access_token : _ref$accessToken,
          username = _ref.username,
          password = _ref.password;

      _classCallCheck(this, snoowrap);

      if (!userAgent && !helpers.isBrowser) {
        return (0, helpers.requiredArg)('userAgent');
      }
      if (!accessToken && (clientId === undefined || clientSecret === undefined || refreshToken === undefined) && (clientId === undefined || clientSecret === undefined || username === undefined || password === undefined)) {
        throw new errors$$1.NoCredentialsError();
      }
      if (helpers.isBrowser) {
        this.userAgent = commonjsGlobal.navigator.userAgent;
      }
      (0, _defaults3.default)(this, { userAgent: userAgent, clientId: clientId, clientSecret: clientSecret, refreshToken: refreshToken, accessToken: accessToken, username: username, password: password }, {
        clientId: null,
        clientSecret: null,
        refreshToken: null,
        accessToken: null,
        username: null,
        password: null,
        ratelimitRemaining: null,
        ratelimitExpiration: null,
        tokenExpiration: null,
        scope: null,
        _config: (0, _create_config2.default)(),
        _nextRequestTimestamp: -Infinity
      });
      (0, helpers.addSnakeCaseShadowProps)(this);
    }
    /**
    * @summary Gets an authorization URL, which allows a user to authorize access to their account
    * @desc This create a URL where a user can authorize an app to act through their account. If the user visits the returned URL
    in a web browser, they will see a page that looks like [this](https://i.gyazo.com/0325534f38b78c1dbd4c84d690dda6c2.png). If
    the user clicks "Allow", they will be redirected to your `redirectUri`, with a `code` querystring parameter containing an
    * *authorization code*. If this code is passed to {@link snoowrap.fromAuthCode}, you can create a requester to make
    requests on behalf of the user.
    *
    * The main use-case here is for running snoowrap in a browser. You can generate a URL, send the user there, and then continue
    after the user authenticates on reddit and is redirected back.
    *
    * @param {object} options
    * @param {string} options.clientId The client ID of your app (assigned by reddit). If your code is running clientside in a
    browser, using an "Installed" app type is recommended.
    * @param {string[]} options.scope An array of scopes (permissions on the user's account) to request on the authentication
    page. A list of possible scopes can be found [here](https://www.reddit.com/api/v1/scopes). You can also get them on-the-fly
    with {@link snoowrap#getOauthScopeList}.
    * @param {string} options.redirectUri The URL where the user should be redirected after authenticating. This **must** be the
    same as the redirect URI that is configured for the reddit app. (If there is a mismatch, the returned URL will display an
    error page instead of an authentication form.)
    * @param {boolean} options.permanent=true If `true`, the app will have indefinite access to the user's account. If `false`,
    access to the user's account will expire after 1 hour.
    * @param {string} [options.state] A string that can be used to verify a user after they are redirected back to the site. When
    the user is redirected from reddit, to the redirect URI after authenticating, the resulting URI will have this same `state`
    value in the querystring. (See [here](http://www.twobotechnologies.com/blog/2014/02/importance-of-state-in-oauth2.html) for
    more information on how to use the `state` value.)
    * @param {string} [options.endpointDomain='reddit.com'] The endpoint domain for the URL. If the user is authenticating on
    reddit.com (as opposed to some other site with a reddit-like API), you can omit this value.
    * @returns {string} A URL where the user can authenticate with the given options
    * @example
    *
    * var authenticationUrl = snoowrap.getAuthUrl({
    *   clientId: 'foobarbazquuux',
    *   scope: ['identity', 'wikiread', 'wikiedit'],
    *   redirectUri: 'https://example.com/reddit_callback',
    *   permanent: false,
    *   state: 'fe211bebc52eb3da9bef8db6e63104d3' // a random string, this could be validated when the user is redirected back
    * });
    * // --> 'https://www.reddit.com/api/v1/authorize?client_id=foobarbaz&response_type=code&state= ...'
    *
    * window.location = authenticationUrl; // send the user to the authentication url
    */

    _createClass(snoowrap, [{
      key: '_newObject',
      value: function _newObject(objectType, content) {
        var _hasFetched = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        return Array.isArray(content) ? content : new snoowrap.objects[objectType](content, this, _hasFetched);
      }
      /**
      * @summary Retrieves or modifies the configuration options for this requester.
      * @param {object} [options] A map of `{[config property name]: value}`. Note that any omitted config properties will simply
      retain whatever value they had previously. (In other words, if you only want to change one property, you only need to put
      that one property in this parameter. To get the current configuration without modifying anything, simply omit this
      parameter.)
      * @param {string} [options.endpointDomain='reddit.com'] The endpoint where requests should be sent
      * @param {Number} [options.requestDelay=0] A minimum delay, in milliseconds, to enforce between API calls. If multiple
      api calls are requested during this timespan, they will be queued and sent one at a time. Setting this to more than 1000 will
      ensure that reddit's ratelimit is never reached, but it will make things run slower than necessary if only a few requests
      are being sent. If this is set to zero, snoowrap will not enforce any delay between individual requests. However, it will
      still refuse to continue if reddit's enforced ratelimit (600 requests per 10 minutes) is exceeded.
      * @param {Number} [options.requestTimeout=30000] A timeout for all OAuth requests, in milliseconds. If the reddit server
      fails to return a response within this amount of time, the Promise will be rejected with a timeout error.
      * @param {boolean} [options.continueAfterRatelimitError=false] Determines whether snoowrap should queue API calls if
      reddit's ratelimit is exceeded. If set to `true` when the ratelimit is exceeded, snoowrap will queue all further requests,
      and will attempt to send them again after the current ratelimit period expires (which happens every 10 minutes). If set
      to `false`, snoowrap will simply throw an error when reddit's ratelimit is exceeded.
      * @param {Number[]} [options.retryErrorCodes=[502, 503, 504, 522]] If reddit responds to an idempotent request with one of
      these error codes, snoowrap will retry the request, up to a maximum of `max_retry_attempts` requests in total. (These
       errors usually indicate that there was an temporary issue on reddit's end, and retrying the request has a decent chance of
      success.) This behavior can be disabled by simply setting this property to an empty array.
      * @param {Number} [options.maxRetryAttempts=3] See `retryErrorCodes`.
      * @param {boolean} [options.warnings=true] snoowrap may occasionally log warnings, such as deprecation notices, to the
      console. These can be disabled by setting this to `false`.
      * @param {boolean} [options.debug=false] If set to true, snoowrap will print out potentially-useful information for debugging
      purposes as it runs.
      * @param {boolean} [options.proxies=true] Setting this to `false` disables snoowrap's method-chaining feature. This causes
      the syntax for using snoowrap to become a bit heavier, but allows for consistency between environments that support the ES6
      `Proxy` object and environments that don't. This option is a no-op in environments that don't support the `Proxy` object,
      since method chaining is always disabled in those environments.
      * @returns {object} An updated Object containing all of the configuration values
      * @example
      *
      * r.config({requestDelay: 1000, warnings: false});
      * // sets the request delay to 1000 milliseconds, and suppresses warnings.
      */

    }, {
      key: 'config',
      value: function config() {
        var _this = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var invalidKey = Object.keys(options).find(function (key) {
          return !(key in _this._config);
        });
        if (invalidKey) {
          throw new TypeError('Invalid config option \'' + invalidKey + '\'');
        }
        return Object.assign(this._config, options);
      }
    }, {
      key: '_warn',
      value: function _warn() {
        if (this._config.warnings) {
          var _console;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_console = console).warn.apply(_console, ['[warning]'].concat(args)); // eslint-disable-line no-console
        }
      }
    }, {
      key: '_debug',
      value: function _debug() {
        if (this._config.debug) {
          var _console2;

          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          (_console2 = console).log.apply(_console2, ['[debug]'].concat(args)); // eslint-disable-line no-console
        }
      }
    }, {
      key: 'getUser',

      /**
      * @summary Gets information on a reddit user with a given name.
      * @param {string} name - The user's username
      * @returns {RedditUser} An unfetched RedditUser object for the requested user
      * @example
      *
      * r.getUser('not_an_aardvark')
      * // => RedditUser { name: 'not_an_aardvark' }
      * r.getUser('not_an_aardvark').link_karma.then(console.log)
      * // => 6
      */
      value: function getUser(name) {
        return this._newObject('RedditUser', { name: (name + '').replace(/^\/?u\//, '') });
      }
      /**
      * @summary Gets information on a comment with a given id.
      * @param {string} commentId - The base36 id of the comment
      * @returns {Comment} An unfetched Comment object for the requested comment
      * @example
      *
      * r.getComment('c0b6xx0')
      * // => Comment { name: 't1_c0b6xx0' }
      * r.getComment('c0b6xx0').author.name.then(console.log)
      * // => 'Kharos'
      */

    }, {
      key: 'getComment',
      value: function getComment(commentId) {
        return this._newObject('Comment', { name: (0, helpers.addFullnamePrefix)(commentId, 't1_') });
      }
      /**
      * @summary Gets information on a given subreddit.
      * @param {string} displayName - The name of the subreddit (e.g. 'AskReddit')
      * @returns {Subreddit} An unfetched Subreddit object for the requested subreddit
      * @example
      *
      * r.getSubreddit('AskReddit')
      * // => Subreddit { display_name: 'AskReddit' }
      * r.getSubreddit('AskReddit').created_utc.then(console.log)
      * // => 1201233135
      */

    }, {
      key: 'getSubreddit',
      value: function getSubreddit(displayName) {
        return this._newObject('Subreddit', { display_name: displayName.replace(/^\/?r\//, '') });
      }
      /**
      * @summary Gets information on a given submission.
      * @param {string} submissionId - The base36 id of the submission
      * @returns {Submission} An unfetched Submission object for the requested submission
      * @example
      *
      * r.getSubmission('2np694')
      * // => Submission { name: 't3_2np694' }
      * r.getSubmission('2np694').title.then(console.log)
      * // => 'What tasty food would be distusting if eaten over rice?'
      */

    }, {
      key: 'getSubmission',
      value: function getSubmission(submissionId) {
        return this._newObject('Submission', { name: (0, helpers.addFullnamePrefix)(submissionId, 't3_') });
      }
      /**
      * @summary Gets a private message by ID.
      * @param {string} messageId The base36 ID of the message
      * @returns {PrivateMessage} An unfetched PrivateMessage object for the requested message
      * @example
      *
      * r.getMessage('51shnw')
      * // => PrivateMessage { name: 't4_51shnw' }
      * r.getMessage('51shnw').subject.then(console.log)
      * // => 'Example'
      * // See here for a screenshot of the PM in question https://i.gyazo.com/24f3b97e55b6ff8e3a74cb026a58b167.png
      */

    }, {
      key: 'getMessage',
      value: function getMessage(messageId) {
        return this._newObject('PrivateMessage', { name: (0, helpers.addFullnamePrefix)(messageId, 't4_') });
      }
      /**
      * Gets a livethread by ID.
      * @param {string} threadId The base36 ID of the livethread
      * @returns {LiveThread} An unfetched LiveThread object
      * @example
      *
      * r.getLivethread('whrdxo8dg9n0')
      * // => LiveThread { id: 'whrdxo8dg9n0' }
      * r.getLivethread('whrdxo8dg9n0').nsfw.then(console.log)
      * // => false
      */

    }, {
      key: 'getLivethread',
      value: function getLivethread(threadId) {
        return this._newObject('LiveThread', { id: (0, helpers.addFullnamePrefix)(threadId, 'LiveUpdateEvent_').slice(16) });
      }
      /**
      * @summary Gets information on the requester's own user profile.
      * @returns {RedditUser} A RedditUser object corresponding to the requester's profile
      * @example
      *
      * r.getMe().then(console.log);
      * // => RedditUser { is_employee: false, has_mail: false, name: 'snoowrap_testing', ... }
      */

    }, {
      key: 'getMe',
      value: function getMe() {
        var _this2 = this;

        return this._get({ uri: 'api/v1/me' }).then(function (result) {
          _this2._ownUserInfo = _this2._newObject('RedditUser', result, true);
          return _this2._ownUserInfo;
        });
      }
    }, {
      key: '_getMyName',
      value: function _getMyName() {
        return _Promise2.default.resolve(this._ownUserInfo ? this._ownUserInfo.name : this.getMe().get('name'));
      }
      /**
      * @summary Gets a distribution of the requester's own karma distribution by subreddit.
      * @returns {Promise} A Promise for an object with karma information
      * @example
      *
      * r.getKarma().then(console.log)
      * // => [
      * //  { sr: Subreddit { display_name: 'redditdev' }, comment_karma: 16, link_karma: 1 },
      * //  { sr: Subreddit { display_name: 'programming' }, comment_karma: 2, link_karma: 1 },
      * //  ...
      * // ]
      */

    }, {
      key: 'getKarma',
      value: function getKarma() {
        return this._get({ uri: 'api/v1/me/karma' });
      }
      /**
      * @summary Gets information on the user's current preferences.
      * @returns {Promise} A promise for an object containing the user's current preferences
      * @example
      *
      * r.getPreferences().then(console.log)
      * // => { default_theme_sr: null, threaded_messages: true, hide_downs: false, ... }
      */

    }, {
      key: 'getPreferences',
      value: function getPreferences() {
        return this._get({ uri: 'api/v1/me/prefs' });
      }
      /**
      * @summary Updates the user's current preferences.
      * @param {object} updatedPreferences An object of the form {[some preference name]: 'some value', ...}. Any preference
      * not included in this object will simply retain its current value.
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example
      *
      * r.updatePreferences({threaded_messages: false, hide_downs: true})
      * // => { default_theme_sr: null, threaded_messages: false,hide_downs: true, ... }
      * // (preferences updated on reddit)
      */

    }, {
      key: 'updatePreferences',
      value: function updatePreferences(updatedPreferences) {
        return this._patch({ uri: 'api/v1/me/prefs', body: updatedPreferences });
      }
      /**
      * @summary Gets the currently-authenticated user's trophies.
      * @returns {Promise} A TrophyList containing the user's trophies
      * @example
      *
      * r.getMyTrophies().then(console.log)
      * // => TrophyList { trophies: [
      * //   Trophy { icon_70: 'https://s3.amazonaws.com/redditstatic/award/verified_email-70.png',
      * //     description: null,
      * //     url: null,
      * //     icon_40: 'https://s3.amazonaws.com/redditstatic/award/verified_email-40.png',
      * //     award_id: 'o',
      * //     id: '16fn29',
      * //     name: 'Verified Email'
      * //   }
      * // ] }
      */

    }, {
      key: 'getMyTrophies',
      value: function getMyTrophies() {
        return this._get({ uri: 'api/v1/me/trophies' });
      }
      /**
      * @summary Gets the list of the currently-authenticated user's friends.
      * @returns {Promise} A Promise that resolves with a list of friends
      * @example
      *
      * r.getFriends().then(console.log)
      * // => [ [ RedditUser { date: 1457927963, name: 'not_an_aardvark', id: 't2_k83md' } ], [] ]
      */

    }, {
      key: 'getFriends',
      value: function getFriends() {
        return this._get({ uri: 'prefs/friends' });
      }
      /**
      * @summary Gets the list of people that the currently-authenticated user has blocked.
      * @returns {Promise} A Promise that resolves with a list of blocked users
      * @example
      *
      * r.getBlockedUsers().then(console.log)
      * // => [ RedditUser { date: 1457928120, name: 'actually_an_aardvark', id: 't2_q3519' } ]
      */

    }, {
      key: 'getBlockedUsers',
      value: function getBlockedUsers() {
        return this._get({ uri: 'prefs/blocked' });
      }
      /**
      * @summary Determines whether the currently-authenticated user needs to fill out a captcha in order to submit content.
      * @returns {Promise} A Promise that resolves with a boolean value
      * @example
      *
      * r.checkCaptchaRequirement().then(console.log)
      * // => false
      */

    }, {
      key: 'checkCaptchaRequirement',
      value: function checkCaptchaRequirement() {
        return this._get({ uri: 'api/needs_captcha' });
      }
      /**
      * @summary Gets the identifier (a hex string) for a new captcha image.
      * @returns {Promise} A Promise that resolves with a string
      * @example
      *
      * r.getNewCaptchaIdentifier().then(console.log)
      * // => 'o5M18uy4mk0IW4hs0fu2GNPdXb1Dxe9d'
      */

    }, {
      key: 'getNewCaptchaIdentifier',
      value: function getNewCaptchaIdentifier() {
        return this._post({ uri: 'api/new_captcha', form: { api_type: api_type } }).then(function (res) {
          return res.json.data.iden;
        });
      }
      /**
      * @summary Gets an image for a given captcha identifier.
      * @param {string} identifier The captcha identifier.
      * @returns {Promise} A string containing raw image data in PNG format
      * @example
      *
      * r.getCaptchaImage('o5M18uy4mk0IW4hs0fu2GNPdXb1Dxe9d').then(console.log)
      // => (A long, incoherent string representing the image in PNG format)
      */

    }, {
      key: 'getCaptchaImage',
      value: function getCaptchaImage(identifier) {
        return this._get({ uri: 'captcha/' + identifier });
      }
      /**
      * @summary Gets an array of categories that items can be saved in. (Requires reddit gold)
      * @returns {Promise} An array of categories
      * @example
      *
      * r.getSavedCategories().then(console.log)
      * // => [ { category: 'cute cat pictures' }, { category: 'interesting articles' } ]
      */

    }, {
      key: 'getSavedCategories',
      value: function getSavedCategories() {
        return this._get({ uri: 'api/saved_categories' }).get('categories');
      }
      /**
      * @summary Marks a list of submissions as 'visited'.
      * @desc **Note**: This endpoint only works if the authenticated user is subscribed to reddit gold.
      * @param {Submission[]} links A list of Submission objects to mark
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example
      *
      * var submissions = [r.getSubmission('4a9u54'), r.getSubmission('4a95nb')]
      * r.markAsVisited(submissions)
      * // (the links will now appear purple on reddit)
      */

    }, {
      key: 'markAsVisited',
      value: function markAsVisited(links) {
        return this._post({ uri: 'api/store_visits', links: (0, _map3.default)(links, 'name').join(',') });
      }
    }, {
      key: '_submit',
      value: function _submit(_ref2) {
        var _this3 = this;

        var captcha_response = _ref2.captcha_response,
            _ref2$captchaResponse = _ref2.captchaResponse,
            captchaResponse = _ref2$captchaResponse === undefined ? captcha_response : _ref2$captchaResponse,
            captcha_iden = _ref2.captcha_iden,
            _ref2$captchaIden = _ref2.captchaIden,
            captchaIden = _ref2$captchaIden === undefined ? captcha_iden : _ref2$captchaIden,
            kind = _ref2.kind,
            _ref2$resubmit = _ref2.resubmit,
            resubmit = _ref2$resubmit === undefined ? true : _ref2$resubmit,
            _ref2$send_replies = _ref2.send_replies,
            send_replies = _ref2$send_replies === undefined ? true : _ref2$send_replies,
            _ref2$sendReplies = _ref2.sendReplies,
            sendReplies = _ref2$sendReplies === undefined ? send_replies : _ref2$sendReplies,
            text = _ref2.text,
            title = _ref2.title,
            url = _ref2.url,
            subreddit_name = _ref2.subreddit_name,
            _ref2$subredditName = _ref2.subredditName,
            subredditName = _ref2$subredditName === undefined ? subreddit_name : _ref2$subredditName;

        return this._post({ uri: 'api/submit', form: {
            api_type: api_type, captcha: captchaResponse, iden: captchaIden, sendreplies: sendReplies, sr: subredditName, kind: kind, resubmit: resubmit,
            text: text, title: title, url: url
          } }).tap((0, helpers.handleJsonErrors)(this)).then(function (result) {
          return _this3.getSubmission(result.json.data.id);
        });
      }
      /**
      * @summary Creates a new selfpost on the given subreddit.
      * @param {object} options An object containing details about the submission
      * @param {string} options.subredditName The name of the subreddit that the post should be submitted to
      * @param {string} options.title The title of the submission
      * @param {string} [options.text] The selftext of the submission
      * @param {boolean} [options.sendReplies=true] Determines whether inbox replies should be enabled for this submission
      * @param {string} [options.captchaIden] A captcha identifier. This is only necessary if the authenticated account
      requires a captcha to submit posts and comments.
      * @param {string} [options.captchaResponse] The response to the captcha with the given identifier
      * @returns {Promise} The newly-created Submission object
      * @example
      *
      * r.submitSelfpost({
      *   subredditName: 'snoowrap_testing',
      *   title: 'This is a selfpost',
      *   body: 'This is the body of the selfpost'
      * }).then(console.log)
      * // => Submission { name: 't3_4abmsz' }
      * // (new selfpost created on reddit)
      */

    }, {
      key: 'submitSelfpost',
      value: function submitSelfpost(options) {
        return this._submit(_extends$$1({}, options, { kind: 'self' }));
      }
      /**
      * @summary Creates a new link submission on the given subreddit.
      * @param {object} options An object containing details about the submission
      * @param {string} options.subredditName The name of the subreddit that the post should be submitted to
      * @param {string} options.title The title of the submission
      * @param {string} options.url The url that the link submission should point to
      * @param {boolean} [options.sendReplies=true] Determines whether inbox replies should be enabled for this submission
      * @param {boolean} [options.resubmit=true] If this is false and same link has already been submitted to this subreddit in
      the past, reddit will return an error. This could be used to avoid accidental reposts.
      * @param {string} [options.captchaIden] A captcha identifier. This is only necessary if the authenticated account
      requires a captcha to submit posts and comments.
      * @param {string} [options.captchaResponse] The response to the captcha with the given identifier
      * @returns {Promise} The newly-created Submission object
      * @example
      *
      * r.submitLink({
      *   subredditName: 'snoowrap_testing',
      *   title: 'I found a cool website!',
      *   url: 'https://google.com'
      * }).then(console.log)
      * // => Submission { name: 't3_4abnfe' }
      * // (new linkpost created on reddit)
      */

    }, {
      key: 'submitLink',
      value: function submitLink(options) {
        return this._submit(_extends$$1({}, options, { kind: 'link' }));
      }
    }, {
      key: '_getSortedFrontpage',
      value: function _getSortedFrontpage(sortType, subredditName) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        // Handle things properly if only a time parameter is provided but not the subreddit name
        var opts = options;
        var subName = subredditName;
        if ((typeof subredditName === 'undefined' ? 'undefined' : _typeof$$1(subredditName)) === 'object' && (0, _isEmpty3.default)((0, _omitBy3.default)(opts, function (option) {
          return option === undefined;
        }))) {
          /* In this case, "subredditName" ends up referring to the second argument, which is not actually a name since the user
          decided to omit that parameter. */
          opts = subredditName;
          subName = undefined;
        }
        var parsedOptions = (0, _omit3.default)(_extends$$1({}, opts, { t: opts.time || opts.t }), 'time');
        return this._getListing({ uri: (subName ? 'r/' + subName + '/' : '') + sortType, qs: parsedOptions });
      }
      /**
      * @summary Gets a Listing of hot posts.
      * @param {string} [subredditName] The subreddit to get posts from. If not provided, posts are fetched from
      the front page of reddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getHot().then(console.log)
      * // => Listing [
      * //  Submission { domain: 'imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'pics' }, ... },
      * //  Submission { domain: 'i.imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'funny' }, ... },
      * //  ...
      * // ]
      *
      * r.getHot('gifs').then(console.log)
      * // => Listing [
      * //  Submission { domain: 'i.imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'gifs' }, ... },
      * //  Submission { domain: 'i.imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'gifs' }, ... },
      * //  ...
      * // ]
      *
      * r.getHot('redditdev', {limit: 1}).then(console.log)
      * // => Listing [
        //   Submission { domain: 'self.redditdev', banned_by: null, subreddit: Subreddit { display_name: 'redditdev' }, ...}
      * // ]
      */

    }, {
      key: 'getHot',
      value: function getHot(subredditName, options) {
        return this._getSortedFrontpage('hot', subredditName, options);
      }
      /**
      * @summary Gets a Listing of new posts.
      * @param {string} [subredditName] The subreddit to get posts from. If not provided, posts are fetched from
      the front page of reddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getNew().then(console.log)
      * // => Listing [
      * //  Submission { domain: 'self.Jokes', banned_by: null, subreddit: Subreddit { display_name: 'Jokes' }, ... },
      * //  Submission { domain: 'self.AskReddit', banned_by: null, subreddit: Subreddit { display_name: 'AskReddit' }, ... },
      * //  ...
      * // ]
      *
      */

    }, {
      key: 'getNew',
      value: function getNew(subredditName, options) {
        return this._getSortedFrontpage('new', subredditName, options);
      }
      /**
      * @summary Gets a Listing of new comments.
      * @param {string} [subredditName] The subreddit to get comments from. If not provided, posts are fetched from
      the front page of reddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved comments
      * @example
      *
      * r.getNewComments().then(console.log)
      * // => Listing [
      * //  Comment { link_title: 'What amazing book should be made into a movie, but hasn\'t been yet?', ... }
      * //  Comment { link_title: 'How far back in time could you go and still understand English?', ... }
      * // ]
      */

    }, {
      key: 'getNewComments',
      value: function getNewComments(subredditName, options) {
        return this._getSortedFrontpage('comments', subredditName, options);
      }
      /**
      * @summary Gets a single random Submission.
      * @desc **Note**: This function will not work when snoowrap is running in a browser, because the reddit server sends a
      redirect which cannot be followed by a CORS request.
      * @param {string} [subredditName] The subreddit to get the random submission. If not provided, the post is fetched from
      the front page of reddit.
      * @returns {Promise} The retrieved Submission object
      * @example
      *
      * r.getRandomSubmission('aww').then(console.log)
      * // => Submission { domain: 'i.imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'aww' }, ... }
      */

    }, {
      key: 'getRandomSubmission',
      value: function getRandomSubmission(subredditName) {
        return this._get({ uri: (subredditName ? 'r/' + subredditName + '/' : '') + 'random' });
      }
      /**
      * @summary Gets a Listing of top posts.
      * @param {string} [subredditName] The subreddit to get posts from. If not provided, posts are fetched from
      the front page of reddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.time] Describes the timespan that posts should be retrieved from. Should be one of
      `hour, day, week, month, year, all`
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getTop({time: 'all', limit: 2}).then(console.log)
      * // => Listing [
      * //  Submission { domain: 'self.AskReddit', banned_by: null, subreddit: Subreddit { display_name: 'AskReddit' }, ... },
      * //  Submission { domain: 'imgur.com', banned_by: null, subreddit: Subreddit { display_name: 'funny' }, ... }
      * // ]
      *
      * r.getTop('AskReddit').then(console.log)
      * // => Listing [
      * //  Submission { domain: 'self.AskReddit', banned_by: null, subreddit: Subreddit { display_name: 'AskReddit' }, ... },
      * //  Submission { domain: 'self.AskReddit', banned_by: null, subreddit: Subreddit { display_name: 'AskReddit' }, ... },
      * //  Submission { domain: 'self.AskReddit', banned_by: null, subreddit: Subreddit { display_name: 'AskReddit' }, ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'getTop',
      value: function getTop(subredditName, options) {
        return this._getSortedFrontpage('top', subredditName, options);
      }
      /**
      * @summary Gets a Listing of controversial posts.
      * @param {string} [subredditName] The subreddit to get posts from. If not provided, posts are fetched from
      the front page of reddit.
      * @param {object} [options={}] Options for the resulting Listing
      * @param {string} [options.time] Describes the timespan that posts should be retrieved from. Should be one of
      `hour, day, week, month, year, all`
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getControversial('technology').then(console.log)
      * // => Listing [
      * //  Submission { domain: 'thenextweb.com', banned_by: null, subreddit: Subreddit { display_name: 'technology' }, ... },
      * //  Submission { domain: 'pcmag.com', banned_by: null, subreddit: Subreddit { display_name: 'technology' }, ... }
      * // ]
      */

    }, {
      key: 'getControversial',
      value: function getControversial(subredditName, options) {
        return this._getSortedFrontpage('controversial', subredditName, options);
      }
      /**
      * @summary Gets a Listing of controversial posts.
      * @param {string} [subredditName] The subreddit to get posts from. If not provided, posts are fetched from
      the front page of reddit.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing the retrieved submissions
      * @example
      *
      * r.getRising('technology').then(console.log)
      * // => Listing [
      * //  Submission { domain: 'thenextweb.com', banned_by: null, subreddit: Subreddit { display_name: 'technology' }, ... },
      * //  Submission { domain: 'pcmag.com', banned_by: null, subreddit: Subreddit { display_name: 'technology' }, ... }
      * // ]
      */

    }, {
      key: 'getRising',
      value: function getRising(subredditName, options) {
        return this._getSortedFrontpage('rising', subredditName, options);
      }
      /**
      * @summary Gets the authenticated user's unread messages.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing containing unread items in the user's inbox
      * @example
      *
      * r.getUnreadMessages().then(console.log)
      * // => Listing [
      * //  PrivateMessage { body: 'hi!', was_comment: false, first_message: null, ... },
      * //  Comment { body: 'this is a reply', link_title: 'Yay, a selfpost!', was_comment: true, ... }
      * // ]
      */

    }, {
      key: 'getUnreadMessages',
      value: function getUnreadMessages() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'message/unread', qs: options });
      }
      /**
      * @summary Gets the items in the authenticated user's inbox.
      * @param {object} [options={}] Filter options. Can also contain options for the resulting Listing.
      * @param {string} [options.filter] A filter for the inbox items. If provided, it should be one of `unread`, (unread
      items), `messages` (i.e. PMs), `comments` (comment replies), `selfreply` (selfpost replies), or `mentions` (username
      mentions).
      * @returns {Promise} A Listing containing items in the user's inbox
      * @example
      *
      * r.getInbox().then(console.log)
      * // => Listing [
      * //  PrivateMessage { body: 'hi!', was_comment: false, first_message: null, ... },
      * //  Comment { body: 'this is a reply', link_title: 'Yay, a selfpost!', was_comment: true, ... }
      * // ]
      */

    }, {
      key: 'getInbox',
      value: function getInbox() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            filter = _ref3.filter,
            options = _objectWithoutProperties(_ref3, ['filter']);

        return this._getListing({ uri: 'message/' + (filter || 'inbox'), qs: options });
      }
      /**
      * @summary Gets the authenticated user's modmail.
      * @param {object} [options={}] Options for the resulting Listing
      * @returns {Promise} A Listing of the user's modmail
      * @example
      *
      * r.getModmail({limit: 2}).then(console.log)
      * // => Listing [
      * //  PrivateMessage { body: '/u/not_an_aardvark has accepted an invitation to become moderator ... ', ... },
      * //  PrivateMessage { body: '/u/not_an_aardvark has been invited by /u/actually_an_aardvark to ...', ... }
      * // ]
      */

    }, {
      key: 'getModmail',
      value: function getModmail() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'message/moderator', qs: options });
      }
      /**
      * @summary Gets the user's sent messages.
      * @param {object} [options={}] options for the resulting Listing
      * @returns {Promise} A Listing of the user's sent messages
      * @example
      *
      * r.getSentMessages().then(console.log)
      * // => Listing [
      * //  PrivateMessage { body: 'you have been added as an approved submitter to ...', ... },
      * //  PrivateMessage { body: 'you have been banned from posting to ...' ... }
      * // ]
      */

    }, {
      key: 'getSentMessages',
      value: function getSentMessages() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return this._getListing({ uri: 'message/sent', qs: options });
      }
      /**
      * @summary Marks all of the given messages as read.
      * @param {PrivateMessage[]|String[]} messages An Array of PrivateMessage or Comment objects. Can also contain strings
      representing message or comment IDs. If strings are provided, they are assumed to represent PrivateMessages unless a fullname
      prefix such as `t1_` is specified.
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example
      *
      * r.markMessagesAsRead(['51shsd', '51shxv'])
      *
      * // To reference a comment by ID, be sure to use the `t1_` prefix, otherwise snoowrap will be unable to distinguish the
      * // comment ID from a PrivateMessage ID.
      * r.markMessagesAsRead(['t5_51shsd', 't1_d3zhb5k'])
      *
      * // Alternatively, just pass in a comment object directly.
      * r.markMessagesAsRead([r.getMessage('51shsd'), r.getComment('d3zhb5k')])
      */

    }, {
      key: 'markMessagesAsRead',
      value: function markMessagesAsRead(messages) {
        var messageIds = messages.map(function (message) {
          return (0, helpers.addFullnamePrefix)(message, 't4_');
        });
        return this._post({ uri: 'api/read_message', form: { id: messageIds.join(',') } });
      }
      /**
      * @summary Marks all of the given messages as unread.
      * @param {PrivateMessage[]|String[]} messages An Array of PrivateMessage or Comment objects. Can also contain strings
      representing message IDs. If strings are provided, they are assumed to represent PrivateMessages unless a fullname prefix such
      as `t1_` is included.
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example
      *
      * r.markMessagesAsUnread(['51shsd', '51shxv'])
      *
      * // To reference a comment by ID, be sure to use the `t1_` prefix, otherwise snoowrap will be unable to distinguish the
      * // comment ID from a PrivateMessage ID.
      * r.markMessagesAsUnread(['t5_51shsd', 't1_d3zhb5k'])
      *
      * // Alternatively, just pass in a comment object directly.
      * r.markMessagesAsRead([r.getMessage('51shsd'), r.getComment('d3zhb5k')])
      */

    }, {
      key: 'markMessagesAsUnread',
      value: function markMessagesAsUnread(messages) {
        var messageIds = messages.map(function (message) {
          return (0, helpers.addFullnamePrefix)(message, 't4_');
        });
        return this._post({ uri: 'api/unread_message', form: { id: messageIds.join(',') } });
      }
      /**
      * @summary Marks all of the user's messages as read.
      * @desc **Note:** The reddit.com site imposes a ratelimit of approximately 1 request every 10 minutes on this endpoint.
      Further requests will cause the API to return a 429 error.
      * @returns {Promise} A Promise that resolves when the request is complete
      * @example
      *
      * r.readAllMessages().then(function () {
      *   r.getUnreadMessages().then(console.log)
      * })
      * // => Listing []
      * // (messages marked as 'read' on reddit)
      */

    }, {
      key: 'readAllMessages',
      value: function readAllMessages() {
        return this._post({ uri: 'api/read_all_messages' });
      }
      /**
      * @summary Composes a new private message.
      * @param {object} options
      * @param {RedditUser|Subreddit|string} options.to The recipient of the message.
      * @param {string} options.subject The message subject (100 characters max)
      * @param {string} options.text The body of the message, in raw markdown text
      * @param {Subreddit|string} [options.fromSubreddit] If provided, the message is sent as a modmail from the specified
      subreddit.
      * @param {string} [options.captchaIden] A captcha identifier. This is only necessary if the authenticated account
      requires a captcha to submit posts and comments.
      * @param {string} [options.captchaResponse] The response to the captcha with the given identifier
      * @returns {Promise} A Promise that fulfills when the request is complete
      * @example
      *
      * r.composeMessage({
      *   to: 'actually_an_aardvark',
      *   subject: "Hi, how's it going?",
      *   text: 'Long time no see'
      * })
      * // (message created on reddit)
      */

    }, {
      key: 'composeMessage',
      value: function composeMessage(_ref4) {
        var captcha = _ref4.captcha,
            from_subreddit = _ref4.from_subreddit,
            _ref4$fromSubreddit = _ref4.fromSubreddit,
            fromSubreddit = _ref4$fromSubreddit === undefined ? from_subreddit : _ref4$fromSubreddit,
            captcha_iden = _ref4.captcha_iden,
            _ref4$captchaIden = _ref4.captchaIden,
            captchaIden = _ref4$captchaIden === undefined ? captcha_iden : _ref4$captchaIden,
            subject = _ref4.subject,
            text = _ref4.text,
            to = _ref4.to;

        var parsedTo = to;
        var parsedFromSr = fromSubreddit;
        if (to instanceof snoowrap.objects.RedditUser) {
          parsedTo = to.name;
        } else if (to instanceof snoowrap.objects.Subreddit) {
          parsedTo = '/r/' + to.display_name;
        }
        if (fromSubreddit instanceof snoowrap.objects.Subreddit) {
          parsedFromSr = fromSubreddit.display_name;
        } else if (typeof fromSubreddit === 'string') {
          parsedFromSr = fromSubreddit.replace(/^\/?r\//, ''); // Convert '/r/subreddit_name' to 'subreddit_name'
        }
        return this._post({ uri: 'api/compose', form: {
            api_type: api_type, captcha: captcha, iden: captchaIden, from_sr: parsedFromSr, subject: subject, text: text, to: parsedTo
          } }).tap((0, helpers.handleJsonErrors)(this)).return({});
      }
      /**
      * @summary Gets a list of all oauth scopes supported by the reddit API.
      * @desc **Note**: This lists every single oauth scope. To get the scope of this requester, use the `scope` property instead.
      * @returns {Promise} An object containing oauth scopes.
      * @example
      *
      * r.getOauthScopeList().then(console.log)
      * // => {
      * //  creddits: {
      * //    description: 'Spend my reddit gold creddits on giving gold to other users.',
      * //    id: 'creddits',
      * //    name: 'Spend reddit gold creddits'
      * //  },
      * //  modcontributors: {
      * //    description: 'Add/remove users to approved submitter lists and ban/unban or mute/unmute users from ...',
      * //    id: 'modcontributors',
      * //    name: 'Approve submitters and ban users'
      * //  },
      * //  ...
      * // }
      */

    }, {
      key: 'getOauthScopeList',
      value: function getOauthScopeList() {
        return this._get({ uri: 'api/v1/scopes' });
      }
      /**
      * @summary Conducts a search of reddit submissions.
      * @param {object} options Search options. Can also contain options for the resulting Listing.
      * @param {string} options.query The search query
      * @param {string} [options.time] Describes the timespan that posts should be retrieved from. One of
      `hour, day, week, month, year, all`
      * @param {Subreddit|string} [options.subreddit] The subreddit to conduct the search on.
      * @param {boolean} [options.restrictSr=true] Restricts search results to the given subreddit
      * @param {string} [options.sort] Determines how the results should be sorted. One of `relevance, hot, top, new, comments`
      * @param {string} [options.syntax='plain'] Specifies a syntax for the search. One of `cloudsearch, lucene, plain`
      * @returns {Promise} A Listing containing the search results.
      * @example
      *
      * r.search({
      *   query: 'Cute kittens',
      *   subreddit: 'aww',
      *   sort: 'top'
      * }).then(console.log)
      * // => Listing [
      * //  Submission { domain: 'i.imgur.com', banned_by: null, ... },
      * //  Submission { domain: 'imgur.com', banned_by: null, ... },
      * //  ...
      * // ]
      */

    }, {
      key: 'search',
      value: function search(options) {
        if (options.subreddit instanceof snoowrap.objects.Subreddit) {
          options.subreddit = options.subreddit.display_name;
        }
        (0, _defaults3.default)(options, { restrictSr: true, syntax: 'plain' });
        var parsedQuery = (0, _omit3.default)(_extends$$1({}, options, { t: options.time, q: options.query, restrict_sr: options.restrictSr }), ['time', 'query']);
        return this._getListing({ uri: (options.subreddit ? 'r/' + options.subreddit + '/' : '') + 'search', qs: parsedQuery });
      }
      /**
      * @summary Searches for subreddits given a query.
      * @param {object} options
      * @param {string} options.query A search query (50 characters max)
      * @param {boolean} [options.exact=false] Determines whether the results shouldbe limited to exact matches.
      * @param {boolean} [options.includeNsfw=true] Determines whether the results should include NSFW subreddits.
      * @returns {Promise} An Array containing subreddit names
      * @example
      *
      * r.searchSubredditNames({query: 'programming'}).then(console.log)
      * // => [
      * //  'programming',
      * //  'programmingcirclejerk',
      * //  'programminghorror',
      * //  ...
      * // ]
      */

    }, {
      key: 'searchSubredditNames',
      value: function searchSubredditNames(_ref5) {
        var _ref5$exact = _ref5.exact,
            exact = _ref5$exact === undefined ? false : _ref5$exact,
            _ref5$include_nsfw = _ref5.include_nsfw,
            include_nsfw = _ref5$include_nsfw === undefined ? true : _ref5$include_nsfw,
            _ref5$includeNsfw = _ref5.includeNsfw,
            includeNsfw = _ref5$includeNsfw === undefined ? include_nsfw : _ref5$includeNsfw,
            query = _ref5.query;

        return this._post({ uri: 'api/search_reddit_names', qs: { exact: exact, include_over_18: includeNsfw, query: query } }).get('names');
      }
    }, {
      key: '_createOrEditSubreddit',
      value: function _createOrEditSubreddit(_ref6) {
        var _ref6$allow_images = _ref6.allow_images,
            allow_images = _ref6$allow_images === undefined ? true : _ref6$allow_images,
            _ref6$allow_top = _ref6.allow_top,
            allow_top = _ref6$allow_top === undefined ? true : _ref6$allow_top,
            captcha = _ref6.captcha,
            captcha_iden = _ref6.captcha_iden,
            _ref6$collapse_delete = _ref6.collapse_deleted_comments,
            collapse_deleted_comments = _ref6$collapse_delete === undefined ? false : _ref6$collapse_delete,
            _ref6$comment_score_h = _ref6.comment_score_hide_mins,
            comment_score_hide_mins = _ref6$comment_score_h === undefined ? 0 : _ref6$comment_score_h,
            description = _ref6.description,
            _ref6$exclude_banned_ = _ref6.exclude_banned_modqueue,
            exclude_banned_modqueue = _ref6$exclude_banned_ === undefined ? false : _ref6$exclude_banned_,
            header_title = _ref6['header-title'],
            _ref6$hide_ads = _ref6.hide_ads,
            hide_ads = _ref6$hide_ads === undefined ? false : _ref6$hide_ads,
            _ref6$lang = _ref6.lang,
            lang = _ref6$lang === undefined ? 'en' : _ref6$lang,
            _ref6$link_type = _ref6.link_type,
            link_type = _ref6$link_type === undefined ? 'any' : _ref6$link_type,
            name = _ref6.name,
            _ref6$over_ = _ref6.over_18,
            over_18 = _ref6$over_ === undefined ? false : _ref6$over_,
            public_description = _ref6.public_description,
            _ref6$public_traffic = _ref6.public_traffic,
            public_traffic = _ref6$public_traffic === undefined ? false : _ref6$public_traffic,
            _ref6$show_media = _ref6.show_media,
            show_media = _ref6$show_media === undefined ? false : _ref6$show_media,
            _ref6$show_media_prev = _ref6.show_media_preview,
            show_media_preview = _ref6$show_media_prev === undefined ? true : _ref6$show_media_prev,
            _ref6$spam_comments = _ref6.spam_comments,
            spam_comments = _ref6$spam_comments === undefined ? 'high' : _ref6$spam_comments,
            _ref6$spam_links = _ref6.spam_links,
            spam_links = _ref6$spam_links === undefined ? 'high' : _ref6$spam_links,
            _ref6$spam_selfposts = _ref6.spam_selfposts,
            spam_selfposts = _ref6$spam_selfposts === undefined ? 'high' : _ref6$spam_selfposts,
            _ref6$spoilers_enable = _ref6.spoilers_enabled,
            spoilers_enabled = _ref6$spoilers_enable === undefined ? false : _ref6$spoilers_enable,
            sr = _ref6.sr,
            _ref6$submit_link_lab = _ref6.submit_link_label,
            submit_link_label = _ref6$submit_link_lab === undefined ? '' : _ref6$submit_link_lab,
            _ref6$submit_text_lab = _ref6.submit_text_label,
            submit_text_label = _ref6$submit_text_lab === undefined ? '' : _ref6$submit_text_lab,
            _ref6$submit_text = _ref6.submit_text,
            submit_text = _ref6$submit_text === undefined ? '' : _ref6$submit_text,
            _ref6$suggested_comme = _ref6.suggested_comment_sort,
            suggested_comment_sort = _ref6$suggested_comme === undefined ? 'confidence' : _ref6$suggested_comme,
            title = _ref6.title,
            _ref6$type = _ref6.type,
            type = _ref6$type === undefined ? 'public' : _ref6$type,
            subreddit_type = _ref6.subreddit_type,
            wiki_edit_age = _ref6.wiki_edit_age,
            wiki_edit_karma = _ref6.wiki_edit_karma,
            _ref6$wikimode = _ref6.wikimode,
            wikimode = _ref6$wikimode === undefined ? 'modonly' : _ref6$wikimode;

        return this._post({ uri: 'api/site_admin', form: {
            allow_images: allow_images, allow_top: allow_top, api_type: api_type, captcha: captcha, collapse_deleted_comments: collapse_deleted_comments, comment_score_hide_mins: comment_score_hide_mins, description: description,
            exclude_banned_modqueue: exclude_banned_modqueue, 'header-title': header_title, hide_ads: hide_ads, iden: captcha_iden, lang: lang, link_type: link_type, name: name,
            over_18: over_18, public_description: public_description, public_traffic: public_traffic, show_media: show_media, show_media_preview: show_media_preview, spam_comments: spam_comments, spam_links: spam_links,
            spam_selfposts: spam_selfposts, spoilers_enabled: spoilers_enabled, sr: sr, submit_link_label: submit_link_label, submit_text: submit_text, submit_text_label: submit_text_label, suggested_comment_sort: suggested_comment_sort,
            title: title, type: subreddit_type || type, wiki_edit_age: wiki_edit_age, wiki_edit_karma: wiki_edit_karma, wikimode: wikimode
          } }).then((0, helpers.handleJsonErrors)(this.getSubreddit(name || sr)));
      }
      /**
      * @summary Creates a new subreddit.
      * @param {object} options
      * @param {string} options.name The name of the new subreddit
      * @param {string} options.title The text that should appear in the header of the subreddit
      * @param {string} options.public_description The text that appears with this subreddit on the search page, or on the
      blocked-access page if this subreddit is private. (500 characters max)
      * @param {string} options.description The sidebar text for the subreddit. (5120 characters max)
      * @param {string} [options.submit_text=''] The text to show below the submission page (1024 characters max)
      * @param {boolean} [options.hide_ads=false] Determines whether ads should be hidden on this subreddit. (This is only
      allowed for gold-only subreddits.)
      * @param {string} [options.lang='en'] The language of the subreddit (represented as an IETF language tag)
      * @param {string} [options.type='public'] Determines who should be able to access the subreddit. This should be one of
      `public, private, restricted, gold_restricted, gold_only, archived, employees_only`.
      * @param {string} [options.link_type='any'] Determines what types of submissions are allowed on the subreddit. This should
      be one of `any, link, self`.
      * @param {string} [options.submit_link_label=undefined] Custom text to display on the button that submits a link. If
      this is omitted, the default text will be displayed.
      * @param {string} [options.submit_text_label=undefined] Custom text to display on the button that submits a selfpost. If
      this is omitted, the default text will be displayed.
      * @param {string} [options.wikimode='modonly'] Determines who can edit wiki pages on the subreddit. This should be one of
      `modonly, anyone, disabled`.
      * @param {number} [options.wiki_edit_karma=0] The minimum amount of subreddit karma needed for someone to edit this
      subreddit's wiki. (This is only relevant if `options.wikimode` is set to `anyone`.)
      * @param {number} [options.wiki_edit_age=0] The minimum account age (in days) needed for someone to edit this subreddit's
      wiki. (This is only relevant if `options.wikimode` is set to `anyone`.)
      * @param {string} [options.spam_links='high'] The spam filter strength for links on this subreddit. This should be one of
      `low, high, all`.
      * @param {string} [options.spam_selfposts='high'] The spam filter strength for selfposts on this subreddit. This should be
      one of `low, high, all`.
      * @param {string} [options.spam_comments='high'] The spam filter strength for comments on this subreddit. This should be one
      of `low, high, all`.
      * @param {boolean} [options.over_18=false] Determines whether this subreddit should be classified as NSFW
      * @param {boolean} [options.allow_top=true] Determines whether the new subreddit should be able to appear in /r/all and
      trending subreddits
      * @param {boolean} [options.show_media=false] Determines whether image thumbnails should be enabled on this subreddit
      * @param {boolean} [options.show_media_preview=true] Determines whether media previews should be expanded by default on this
      subreddit
      * @param {boolean} [options.allow_images=true] Determines whether image uploads and links to image hosting sites should be
      enabled on this subreddit
      * @param {boolean} [options.exclude_banned_modqueue=false] Determines whether posts by site-wide banned users should be
      excluded from the modqueue.
      * @param {boolean} [options.public_traffic=false] Determines whether the /about/traffic page for this subreddit should be
      viewable by anyone.
      * @param {boolean} [options.collapse_deleted_comments=false] Determines whether deleted and removed comments should be
      collapsed by default
      * @param {string} [options.suggested_comment_sort=undefined] The suggested comment sort for the subreddit. This should be
      one of `confidence, top, new, controversial, old, random, qa`.If left blank, there will be no suggested sort,
      which means that users will see the sort method that is set in their own preferences (usually `confidence`.)
      * @param {boolean} [options.spoilers_enabled=false] Determines whether users can mark their posts as spoilers
      * @returns {Promise} A Promise for the newly-created subreddit object.
      * @example
      *
      * r.createSubreddit({
      *   name: 'snoowrap_testing2',
      *   title: 'snoowrap testing: the sequel',
      *   public_description: 'thanks for reading the snoowrap docs!',
      *   description: 'This text will go on the sidebar',
      *   type: 'private'
      * }).then(console.log)
      * // => Subreddit { display_name: 'snoowrap_testing2' }
      * // (/r/snoowrap_testing2 created on reddit)
      */

    }, {
      key: 'createSubreddit',
      value: function createSubreddit(options) {
        return this._createOrEditSubreddit(options);
      }
      /**
      * @summary Searches subreddits by topic.
      * @param {object} options
      * @param {string} options.query The search query. (50 characters max)
      * @returns {Promise} An Array of subreddit objects corresponding to the search results
      * @example
      *
      * r.searchSubredditTopics({query: 'movies'}).then(console.log)
      * // => [
      * //  Subreddit { display_name: 'tipofmytongue' },
      * //  Subreddit { display_name: 'remove' },
      * //  Subreddit { display_name: 'horror' },
      * //  ...
      * // ]
      */

    }, {
      key: 'searchSubredditTopics',
      value: function searchSubredditTopics(_ref7) {
        var _this4 = this;

        var query = _ref7.query;

        return this._get({ uri: 'api/subreddits_by_topic', qs: { query: query } }).map(function (result) {
          return _this4.getSubreddit(result.name);
        });
      }
      /**
      * @summary Gets a list of subreddits that the currently-authenticated user is subscribed to.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.getSubscriptions({limit: 2}).then(console.log)
      * // => Listing [
      * //  Subreddit {
      * //    display_name: 'gadgets',
      * //    title: 'reddit gadget guide',
      * //    ...
      * //  },
      * //  Subreddit {
      * //    display_name: 'sports',
      * //    title: 'the sportspage of the Internet',
      * //    ...
      * //  }
      * // ]
      */

    }, {
      key: 'getSubscriptions',
      value: function getSubscriptions(options) {
        return this._getListing({ uri: 'subreddits/mine/subscriber', qs: options });
      }
      /**
      * @summary Gets a list of subreddits in which the currently-authenticated user is an approved submitter.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.getContributorSubreddits().then(console.log)
      * // => Listing [
      * //  Subreddit {
      * //    display_name: 'snoowrap_testing',
      * //    title: 'snoowrap',
      * //    ...
      * //  }
      * // ]
      *
      */

    }, {
      key: 'getContributorSubreddits',
      value: function getContributorSubreddits(options) {
        return this._getListing({ uri: 'subreddits/mine/contributor', qs: options });
      }
      /**
      * @summary Gets a list of subreddits in which the currently-authenticated user is a moderator.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.getModeratedSubreddits().then(console.log)
      * // => Listing [
      * //  Subreddit {
      * //    display_name: 'snoowrap_testing',
      * //    title: 'snoowrap',
      * //    ...
      * //  }
      * // ]
      */

    }, {
      key: 'getModeratedSubreddits',
      value: function getModeratedSubreddits(options) {
        return this._getListing({ uri: 'subreddits/mine/moderator', qs: options });
      }
      /**
      * @summary Searches subreddits by title and description.
      * @param {object} options Options for the search. May also contain Listing parameters.
      * @param {string} options.query The search query
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.searchSubreddits({query: 'cookies'}).then(console.log)
      * // => Listing [ Subreddit { ... }, Subreddit { ... }, ...]
      */

    }, {
      key: 'searchSubreddits',
      value: function searchSubreddits(options) {
        options.q = options.query;
        return this._getListing({ uri: 'subreddits/search', qs: (0, _omit3.default)(options, 'query') });
      }
      /**
      * @summary Gets a list of subreddits, arranged by popularity.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.getPopularSubreddits().then(console.log)
      * // => Listing [ Subreddit { ... }, Subreddit { ... }, ...]
      */

    }, {
      key: 'getPopularSubreddits',
      value: function getPopularSubreddits(options) {
        return this._getListing({ uri: 'subreddits/popular', qs: options });
      }
      /**
      * @summary Gets a list of subreddits, arranged by age.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.getNewSubreddits().then(console.log)
      * // => Listing [ Subreddit { ... }, Subreddit { ... }, ...]
      */

    }, {
      key: 'getNewSubreddits',
      value: function getNewSubreddits(options) {
        return this._getListing({ uri: 'subreddits/new', qs: options });
      }
      /**
      * @summary Gets a list of gold-exclusive subreddits.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.getGoldSubreddits().then(console.log)
      * // => Listing [ Subreddit { ... }, Subreddit { ... }, ...]
      */

    }, {
      key: 'getGoldSubreddits',
      value: function getGoldSubreddits(options) {
        return this._getListing({ uri: 'subreddits/gold', qs: options });
      }
      /**
      * @summary Gets a list of default subreddits.
      * @param {object} [options] Options for the resulting Listing
      * @returns {Promise} A Listing containing Subreddits
      * @example
      *
      * r.getDefaultSubreddits().then(console.log)
      * // => Listing [ Subreddit { ... }, Subreddit { ... }, ...]
      */

    }, {
      key: 'getDefaultSubreddits',
      value: function getDefaultSubreddits(options) {
        return this._getListing({ uri: 'subreddits/default', qs: options });
      }
      /**
      * @summary Checks whether a given username is available for registration
      * @desc **Note:** This function will not work when snoowrap is running in a browser, due to an issue with reddit's CORS
      settings.
      * @param {string} name The username in question
      * @returns {Promise} A Promise that fulfills with a Boolean (`true` or `false`)
      * @example
      *
      * r.checkUsernameAvailability('not_an_aardvark').then(console.log)
      * // => false
      * r.checkUsernameAvailability('eqwZAr9qunx7IHqzWVeF').then(console.log)
      * // => true
      */

    }, {
      key: 'checkUsernameAvailability',
      value: function checkUsernameAvailability(name) {
        // The oauth endpoint listed in reddit's documentation doesn't actually work, so just send an unauthenticated request.
        return this.unauthenticatedRequest({ uri: 'api/username_available.json', qs: { user: name } });
      }
      /**
      * @summary Creates a new LiveThread.
      * @param {object} options
      * @param {string} options.title The title of the livethread (100 characters max)
      * @param {string} [options.description] A descriptions of the thread. 120 characters max
      * @param {string} [options.resources] Information and useful links related to the thread. 120 characters max
      * @param {boolean} [options.nsfw=false] Determines whether the thread is Not Safe For Work
      * @returns {Promise} A Promise that fulfills with the new LiveThread when the request is complete
      * @example
      *
      * r.createLivethread({title: 'My livethread'}).then(console.log)
      * // => LiveThread { id: 'wpimncm1f01j' }
      */

    }, {
      key: 'createLivethread',
      value: function createLivethread(_ref8) {
        var _this5 = this;

        var title = _ref8.title,
            description = _ref8.description,
            resources = _ref8.resources,
            _ref8$nsfw = _ref8.nsfw,
            nsfw = _ref8$nsfw === undefined ? false : _ref8$nsfw;

        return this._post({
          uri: 'api/live/create',
          form: { api_type: api_type, description: description, nsfw: nsfw, resources: resources, title: title }
        }).tap((0, helpers.handleJsonErrors)(this)).then(function (result) {
          return _this5.getLivethread(result.json.data.id);
        });
      }
      /**
      * @summary Gets the "happening now" LiveThread, if it exists
      * @desc This is the LiveThread that is occasionally linked at the top of reddit.com, relating to current events.
      * @returns {Promise} A Promise that fulfills with the "happening now" LiveThread if it exists, or rejects with a 404 error
      otherwise.
      * @example r.getCurrentEventsLivethread().then(thread => thread.stream.on('update', console.log))
      */

    }, {
      key: 'getStickiedLivethread',
      value: function getStickiedLivethread() {
        return this._get({ uri: 'api/live/happening_now' });
      }
      /**
      * @summary Gets the user's own multireddits.
      * @returns {Promise} A Promise for an Array containing the requester's MultiReddits.
      * @example
      *
      * r.getMyMultireddits().then(console.log)
      * => [ MultiReddit { ... }, MultiReddit { ... }, ... ]
      */

    }, {
      key: 'getMyMultireddits',
      value: function getMyMultireddits() {
        return this._get({ uri: 'api/multi/mine', qs: { expand_srs: true } });
      }
      /**
      * @summary Creates a new multireddit.
      * @param {object} options
      * @param {string} options.name The name of the new multireddit. 50 characters max
      * @param {string} options.description A description for the new multireddit, in markdown.
      * @param {Array} options.subreddits An Array of Subreddit objects (or subreddit names) that this multireddit should compose of
      * @param {string} [options.visibility='private'] The multireddit's visibility setting. One of `private`, `public`, `hidden`.
      * @param {string} [options.icon_name=''] One of `art and design`, `ask`, `books`, `business`, `cars`, `comics`,
      `cute animals`, `diy`, `entertainment`, `food and drink`, `funny`, `games`, `grooming`, `health`, `life advice`, `military`,
      `models pinup`, `music`, `news`, `philosophy`, `pictures and gifs`, `science`, `shopping`, `sports`, `style`, `tech`,
      `travel`, `unusual stories`, `video`, `None`
      * @param {string} [options.key_color='#000000'] A six-digit RGB hex color, preceded by '#'
      * @param {string} [options.weighting_scheme='classic'] One of `classic`, `fresh`
      * @returns {Promise} A Promise for the newly-created MultiReddit object
      * @example
      *
      * r.createMultireddit({
      *   name: 'myMulti',
      *   description: 'An example multireddit',
      *   subreddits: ['snoowrap', 'snoowrap_testing']
      * }).then(console.log)
      * => MultiReddit { display_name: 'myMulti', ... }
      */

    }, {
      key: 'createMultireddit',
      value: function createMultireddit(_ref9) {
        var name = _ref9.name,
            description = _ref9.description,
            subreddits = _ref9.subreddits,
            _ref9$visibility = _ref9.visibility,
            visibility = _ref9$visibility === undefined ? 'private' : _ref9$visibility,
            _ref9$icon_name = _ref9.icon_name,
            icon_name = _ref9$icon_name === undefined ? '' : _ref9$icon_name,
            _ref9$key_color = _ref9.key_color,
            key_color = _ref9$key_color === undefined ? '#000000' : _ref9$key_color,
            _ref9$weighting_schem = _ref9.weighting_scheme,
            weighting_scheme = _ref9$weighting_schem === undefined ? 'classic' : _ref9$weighting_schem;

        return this._post({ uri: 'api/multi', form: { model: JSON.stringify({
              display_name: name,
              description_md: description,
              icon_name: icon_name,
              key_color: key_color,
              subreddits: subreddits.map(function (sub) {
                return { name: typeof sub === 'string' ? sub : sub.display_name };
              }),
              visibility: visibility,
              weighting_scheme: weighting_scheme
            }) } });
      }
    }, {
      key: '_revokeToken',
      value: function _revokeToken(token) {
        return this.credentialedClientRequest({ uri: 'api/v1/revoke_token', form: { token: token }, method: 'post' });
      }
      /**
      * @summary Invalidates the current access token.
      * @returns {Promise} A Promise that fulfills when this request is complete
      * @desc **Note**: This can only be used if the current requester was supplied with a `client_id` and `client_secret`. If the
      current requester was supplied with a refresh token, it will automatically create a new access token if any more requests
      are made after this one.
      * @example r.revokeAccessToken();
      */

    }, {
      key: 'revokeAccessToken',
      value: function revokeAccessToken() {
        var _this6 = this;

        return this._revokeToken(this.accessToken).then(function () {
          _this6.accessToken = null;
          _this6.tokenExpiration = null;
        });
      }
      /**
      * @summary Invalidates the current refresh token.
      * @returns {Promise} A Promise that fulfills when this request is complete
      * @desc **Note**: This can only be used if the current requester was supplied with a `client_id` and `client_secret`. All
      access tokens generated by this refresh token will also be invalidated. This effectively de-authenticates the requester and
      prevents it from making any more valid requests. This should only be used in a few cases, e.g. if this token has
      been accidentally leaked to a third party.
      * @example r.revokeRefreshToken();
      */

    }, {
      key: 'revokeRefreshToken',
      value: function revokeRefreshToken() {
        var _this7 = this;

        return this._revokeToken(this.refreshToken).then(function () {
          _this7.refreshToken = null;
          _this7.accessToken = null; // Revoking a refresh token also revokes any associated access tokens.
          _this7.tokenExpiration = null;
        });
      }
    }, {
      key: '_selectFlair',
      value: function _selectFlair(_ref10) {
        var _this8 = this;

        var flair_template_id = _ref10.flair_template_id,
            link = _ref10.link,
            name = _ref10.name,
            text = _ref10.text,
            subredditName = _ref10.subredditName;

        if (!flair_template_id) {
          throw new errors$$1.InvalidMethodCallError('No flair template ID provided');
        }
        return _Promise2.default.resolve(subredditName).then(function (subName) {
          return _this8._post({ uri: 'r/' + subName + '/api/selectflair', form: { api_type: api_type, flair_template_id: flair_template_id, link: link, name: name, text: text } });
        });
      }
    }, {
      key: '_assignFlair',
      value: function _assignFlair(_ref11) {
        var _this9 = this;

        var css_class = _ref11.css_class,
            _ref11$cssClass = _ref11.cssClass,
            cssClass = _ref11$cssClass === undefined ? css_class : _ref11$cssClass,
            link = _ref11.link,
            name = _ref11.name,
            text = _ref11.text,
            subreddit_name = _ref11.subreddit_name,
            _ref11$subredditName = _ref11.subredditName,
            subredditName = _ref11$subredditName === undefined ? subreddit_name : _ref11$subredditName;

        return this._promiseWrap(_Promise2.default.resolve(subredditName).then(function (displayName) {
          return _this9._post({ uri: 'r/' + displayName + '/api/flair', form: { api_type: api_type, name: name, text: text, link: link, css_class: cssClass } });
        }));
      }
    }, {
      key: '_populate',
      value: function _populate(responseTree) {
        var _this10 = this;

        if ((typeof responseTree === 'undefined' ? 'undefined' : _typeof$$1(responseTree)) === 'object' && responseTree !== null) {
          // Map {kind: 't2', data: {name: 'some_username', ... }} to a RedditUser (e.g.) with the same properties
          if (Object.keys(responseTree).length === 2 && responseTree.kind && responseTree.data) {
            return this._newObject(constants.KINDS[responseTree.kind] || 'RedditContent', this._populate(responseTree.data), true);
          }
          var result = (Array.isArray(responseTree) ? _map3.default : _mapValues3.default)(responseTree, function (value, key) {
            // Maps {author: 'some_username'} to {author: RedditUser { name: 'some_username' } }
            if (value !== null && constants.USER_KEYS.has(key)) {
              return _this10._newObject('RedditUser', { name: value });
            }
            if (value !== null && constants.SUBREDDIT_KEYS.has(key)) {
              return _this10._newObject('Subreddit', { display_name: value });
            }
            return _this10._populate(value);
          });
          if (result.length === 2 && result[0] instanceof snoowrap.objects.Listing && result[0][0] instanceof snoowrap.objects.Submission && result[1] instanceof snoowrap.objects.Listing) {
            if (result[1]._more && !result[1]._more.link_id) {
              result[1]._more.link_id = result[0][0].name;
            }
            result[0][0].comments = result[1];
            return result[0][0];
          }
          return result;
        }
        return responseTree;
      }
    }, {
      key: '_getListing',
      value: function _getListing(_ref12) {
        var uri = _ref12.uri,
            _ref12$qs = _ref12.qs,
            qs = _ref12$qs === undefined ? {} : _ref12$qs,
            options = _objectWithoutProperties(_ref12, ['uri', 'qs']);

        /* When the response type is expected to be a Listing, add a `count` parameter with a very high number.
        This ensures that reddit returns a `before` property in the resulting Listing to enable pagination.
        (Aside from the additional parameter, this function is equivalent to snoowrap.prototype._get) */
        var mergedQuery = _extends$$1({ count: 9999 }, qs);
        return qs.limit || !(0, _isEmpty3.default)(options) ? this._newObject('Listing', _extends$$1({ _query: mergedQuery, _uri: uri }, options)).fetchMore(qs.limit || constants.MAX_LISTING_ITEMS)
        /* This second case is used as a fallback in case the endpoint unexpectedly ends up returning something other than a
        Listing (e.g. Submission#getRelated, which used to return a Listing but no longer does due to upstream reddit API
        changes), in which case using fetch_more() as above will throw an error.
         This fallback only works if there are no other meta-properties provided for the Listing, such as _transform. If there are
        other meta-properties,  the function will still end up throwing an error, but there's not really any good way to handle it
        (predicting upstream changes can only go so far). More importantly, in the limited cases where it's used, the fallback
        should have no effect on the returned results */
        : this._get({ uri: uri, qs: mergedQuery }).then(function (listing) {
          if (Array.isArray(listing)) {
            listing.filter(function (item) {
              return item.constructor._name === 'Comment';
            }).forEach(helpers.addEmptyRepliesListing);
          }
          return listing;
        });
      }
      /**
      * @summary In browsers, restores the `window.snoowrap` property to whatever it was before this instance of snoowrap was
      loaded. This is a no-op in Node.
      * @returns This instance of the snoowrap constructor
      * @example var snoowrap = window.snoowrap.noConflict();
      */

    }, {
      key: '_promiseWrap',
      get: function get() {
        return this._config.proxies ? _promiseChains2.default : identity;
      }
    }], [{
      key: 'getAuthUrl',
      value: function getAuthUrl(_ref13) {
        var _ref13$clientId = _ref13.clientId,
            clientId = _ref13$clientId === undefined ? (0, helpers.requiredArg)('clientId') : _ref13$clientId,
            _ref13$scope = _ref13.scope,
            scope = _ref13$scope === undefined ? (0, helpers.requiredArg)('scope') : _ref13$scope,
            _ref13$redirectUri = _ref13.redirectUri,
            redirectUri = _ref13$redirectUri === undefined ? (0, helpers.requiredArg)('redirectUri') : _ref13$redirectUri,
            _ref13$permanent = _ref13.permanent,
            permanent = _ref13$permanent === undefined ? true : _ref13$permanent,
            _ref13$state = _ref13.state,
            state = _ref13$state === undefined ? '_' : _ref13$state,
            _ref13$endpointDomain = _ref13.endpointDomain,
            endpointDomain = _ref13$endpointDomain === undefined ? 'reddit.com' : _ref13$endpointDomain;

        if (!(Array.isArray(scope) && scope.length && scope.every(function (scopeValue) {
          return scopeValue && typeof scopeValue === 'string';
        }))) {
          throw new TypeError('Missing `scope` argument; a non-empty list of OAuth scopes must be provided');
        }
        return ('\n      https://www.' + endpointDomain + '/api/v1/authorize?\n      client_id=' + encodeURIComponent(clientId) + '\n      &response_type=code\n      &state=' + encodeURIComponent(state) + '\n      &redirect_uri=' + encodeURIComponent(redirectUri) + '\n      &duration=' + (permanent ? 'permanent' : 'temporary') + '\n      &scope=' + encodeURIComponent(scope.join(' ')) + '\n    ').replace(/\s/g, '');
      }
      /**
      * @summary Creates a snoowrap requester from an authorization code.
      * @desc An authorization code is the `code` value that appears in the querystring after a user authenticates with reddit and
      is redirected. For more information, see {@link snoowrap.getAuthUrl}.
      *
      * The main use-case for this function is for running snoowrap in a browser. You can generate a URL with
      {@link snoowrap.getAuthUrl} and send the user to that URL, and then use this function to create a requester when
      the user is redirected back with an authorization code.
      * @param {object} options
      * @param {string} options.code The authorization code
      * @param {string} options.userAgent A unique description of what your app does. This argument is not necessary when snoowrap
      is running in a browser.
      * @param {string} options.clientId The client ID of your app (assigned by reddit). If your code is running clientside in a
      browser, using an "Installed" app type is recommended.
      * @param {string} [options.clientSecret] The client secret of your app. If your app has the "Installed" app type, omit
      this parameter.
      * @param {string} options.redirectUri The redirect URI that is configured for the reddit app.
      * @param {string} [options.endpointDomain='reddit.com'] The endpoint domain that the returned requester should be configured
      to use. If the user is authenticating on reddit.com (as opposed to some other site with a reddit-like API), you can omit this
      value.
      * @returns {Promise} A Promise that fulfills with a `snoowrap` instance
      * @example
      *
      * // Get the `code` querystring param (assuming the user was redirected from reddit)
      * var code = new URL(window.location.href).searchParams.get('code');
      *
      * snoowrap.fromAuthCode({
      *   code: code,
      *   userAgent: 'My app',
      *   clientId: 'foobarbazquuux',
      *   redirectUri: 'example.com'
      * }).then(r => {
      *   // Now we have a requester that can access reddit through the user's account
      *   return r.getHot().then(posts => {
      *     // do something with posts from the front page
      *   });
      * })
      */

    }, {
      key: 'fromAuthCode',
      value: function fromAuthCode(_ref14) {
        var _this11 = this;

        var _ref14$code = _ref14.code,
            code = _ref14$code === undefined ? (0, helpers.requiredArg)('code') : _ref14$code,
            _ref14$userAgent = _ref14.userAgent,
            userAgent = _ref14$userAgent === undefined ? helpers.isBrowser ? commonjsGlobal.navigator.userAgent : (0, helpers.requiredArg)('userAgent') : _ref14$userAgent,
            _ref14$clientId = _ref14.clientId,
            clientId = _ref14$clientId === undefined ? (0, helpers.requiredArg)('clientId') : _ref14$clientId,
            clientSecret = _ref14.clientSecret,
            _ref14$redirectUri = _ref14.redirectUri,
            redirectUri = _ref14$redirectUri === undefined ? (0, helpers.requiredArg)('redirectUri') : _ref14$redirectUri,
            _ref14$endpointDomain = _ref14.endpointDomain,
            endpointDomain = _ref14$endpointDomain === undefined ? 'reddit.com' : _ref14$endpointDomain;

        return this.prototype.credentialedClientRequest.call({
          userAgent: userAgent,
          clientId: clientId,
          clientSecret: clientSecret,
          // Use `this.prototype.rawRequest` function to allow for custom `rawRequest` method usage in subclasses.
          rawRequest: this.prototype.rawRequest
        }, {
          method: 'post',
          baseUrl: 'https://www.' + endpointDomain + '/',
          uri: 'api/v1/access_token',
          form: { grant_type: 'authorization_code', code: code, redirect_uri: redirectUri }
        }).then(function (response) {
          if (response.error) {
            throw new Error('API Error: ' + response.error);
          }
          // Use `new this` instead of `new snoowrap` to ensure that subclass instances can be returned
          var requester = new _this11(_extends$$1({ userAgent: userAgent, clientId: clientId, clientSecret: clientSecret }, response));
          requester.config({ endpointDomain: endpointDomain });
          return requester;
        });
      }
    }, {
      key: 'noConflict',
      value: function noConflict() {
        if (helpers.isBrowser) {
          commonjsGlobal[constants.MODULE_NAME] = this._previousSnoowrap;
        }
        return this;
      }
    }]);

    return snoowrap;
  }();

  function identity(value) {
    return value;
  }

  (0, helpers.defineInspectFunc)(snoowrap.prototype, function () {
    // Hide confidential information (tokens, client IDs, etc.), as well as private properties, from the console.log output.
    var keysForHiddenValues = ['clientSecret', 'refreshToken', 'accessToken', 'password'];
    var formatted = (0, _mapValues3.default)((0, _omitBy3.default)(this, function (value, key) {
      return typeof key === 'string' && key.startsWith('_');
    }), function (value, key) {
      return (0, _includes3.default)(keysForHiddenValues, key) ? value && '(redacted)' : value;
    });
    return constants.MODULE_NAME + ' ' + _util2.default.inspect(formatted);
  });

  var classFuncDescriptors = { configurable: true, writable: true };

  /* Add the request_handler functions (oauth_request, credentialed_client_request, etc.) to the snoowrap prototype. Use
  Object.defineProperties to ensure that the properties are non-enumerable. */
  Object.defineProperties(snoowrap.prototype, (0, _mapValues3.default)(requestHandler, function (func) {
    return _extends$$1({ value: func }, classFuncDescriptors);
  }));

  constants.HTTP_VERBS.forEach(function (method) {
    /* Define method shortcuts for each of the HTTP verbs. i.e. `snoowrap.prototype._post` is the same as `oauth_request` except
    that the HTTP method defaults to `post`, and the result is promise-wrapped. Use Object.defineProperty to ensure that the
    properties are non-enumerable. */
    Object.defineProperty(snoowrap.prototype, '_' + method, _extends$$1({
      value: function value(options) {
        return this._promiseWrap(this.oauthRequest(_extends$$1({}, options, { method: method })));
      }
    }, classFuncDescriptors));
  });

  /* `objects` will be an object containing getters for each content type, due to the way objects are exported from
  objects/index.js. To unwrap these getters into direct properties, use lodash.mapValues with an identity function. */
  snoowrap.objects = (0, _mapValues3.default)(objects, function (value) {
    return value;
  });

  (0, _forOwn3.default)(constants.KINDS, function (value) {
    snoowrap.objects[value] = snoowrap.objects[value] || function (_objects$RedditConten) {
      _inherits(_class, _objects$RedditConten);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      return _class;
    }(objects.RedditContent);
    Object.defineProperty(snoowrap.objects[value], '_name', { value: value, configurable: true });
  });

  // Alias all functions on snoowrap's prototype and snoowrap's object prototypes in snake_case.
  (0, _values3.default)(snoowrap.objects).concat(snoowrap).map(function (func) {
    return func.prototype;
  }).forEach(function (funcProto) {
    Object.getOwnPropertyNames(funcProto).filter(function (name) {
      return !name.startsWith('_') && name !== (0, _snakeCase3.default)(name) && typeof funcProto[name] === 'function';
    }).forEach(function (name) {
      return Object.defineProperty(funcProto, (0, _snakeCase3.default)(name), _extends$$1({ value: funcProto[name] }, classFuncDescriptors));
    });
  });

  snoowrap.errors = errors$$1;
  snoowrap.version = constants.VERSION;

  if (!module.parent && helpers.isBrowser) {
    // check if the code is being run in a browser through browserify, etc.
    snoowrap._previousSnoowrap = commonjsGlobal[constants.MODULE_NAME];
    commonjsGlobal[constants.MODULE_NAME] = snoowrap;
  }

  module.exports = snoowrap;
});

var snoowrap = unwrapExports(snoowrap_1);

module.exports = snoowrap;
