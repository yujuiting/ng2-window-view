webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(319);
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(311);
	var _1 = __webpack_require__(692);
	if (_1.environment.production) {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.bootstrap(_1.AppComponent, [
	    http_1.HTTP_PROVIDERS
	]);
	

/***/ },

/***/ 26:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	/**
	 * Runtime representation a type that a Component or other object is instances of.
	 *
	 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	 * the `MyCustomComponent` constructor function.
	 *
	 * @stable
	 */
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === 'boolean';
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === 'string';
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf('\n');
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError('Invalid integer literal when parsing ' + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === 'function' || typeof o === 'object');
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	function escapeRegExp(s) {
	    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}
	exports.escapeRegExp = escapeRegExp;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 58:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	/**
	 * Supported http methods.
	 * @experimental
	 */
	(function (RequestMethod) {
	    RequestMethod[RequestMethod["Get"] = 0] = "Get";
	    RequestMethod[RequestMethod["Post"] = 1] = "Post";
	    RequestMethod[RequestMethod["Put"] = 2] = "Put";
	    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
	    RequestMethod[RequestMethod["Options"] = 4] = "Options";
	    RequestMethod[RequestMethod["Head"] = 5] = "Head";
	    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
	})(exports.RequestMethod || (exports.RequestMethod = {}));
	var RequestMethod = exports.RequestMethod;
	/**
	 * All possible states in which a connection can be, based on
	 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
	 * additional "CANCELLED" state.
	 * @experimental
	 */
	(function (ReadyState) {
	    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
	    ReadyState[ReadyState["Open"] = 1] = "Open";
	    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
	    ReadyState[ReadyState["Loading"] = 3] = "Loading";
	    ReadyState[ReadyState["Done"] = 4] = "Done";
	    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
	})(exports.ReadyState || (exports.ReadyState = {}));
	var ReadyState = exports.ReadyState;
	/**
	 * Acceptable response types to be associated with a {@link Response}, based on
	 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
	 * @experimental
	 */
	(function (ResponseType) {
	    ResponseType[ResponseType["Basic"] = 0] = "Basic";
	    ResponseType[ResponseType["Cors"] = 1] = "Cors";
	    ResponseType[ResponseType["Default"] = 2] = "Default";
	    ResponseType[ResponseType["Error"] = 3] = "Error";
	    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
	})(exports.ResponseType || (exports.ResponseType = {}));
	var ResponseType = exports.ResponseType;
	/**
	 * Supported content type to be automatically associated with a {@link Request}.
	 * @experimental
	 */
	(function (ContentType) {
	    ContentType[ContentType["NONE"] = 0] = "NONE";
	    ContentType[ContentType["JSON"] = 1] = "JSON";
	    ContentType[ContentType["FORM"] = 2] = "FORM";
	    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
	    ContentType[ContentType["TEXT"] = 4] = "TEXT";
	    ContentType[ContentType["BLOB"] = 5] = "BLOB";
	    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
	})(exports.ContentType || (exports.ContentType = {}));
	var ContentType = exports.ContentType;
	//# sourceMappingURL=enums.js.map

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(222));
	__export(__webpack_require__(345));
	__export(__webpack_require__(525));
	__export(__webpack_require__(523));
	

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(315);
	var exception_handler_1 = __webpack_require__(316);
	var exception_handler_2 = __webpack_require__(316);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	/**
	 * @stable
	 */
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = '--'; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 * @stable
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException /** TODO #9100 */, _originalStack /** TODO #9100 */, _context /** TODO #9100 */) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(102);
	var lang_1 = __webpack_require__(26);
	var collection_1 = __webpack_require__(202);
	/**
	 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
	 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
	 *
	 * The only known difference between this `Headers` implementation and the spec is the
	 * lack of an `entries` method.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/MTdwT6?p=preview))
	 *
	 * ```
	 * import {Headers} from '@angular/http';
	 *
	 * var firstHeaders = new Headers();
	 * firstHeaders.append('Content-Type', 'image/jpeg');
	 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
	 *
	 * // Create headers from Plain Old JavaScript Object
	 * var secondHeaders = new Headers({
	 *   'X-My-Custom-Header': 'Angular'
	 * });
	 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
	 *
	 * var thirdHeaders = new Headers(secondHeaders);
	 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
	 * ```
	 *
	 * @experimental
	 */
	var Headers = (function () {
	    function Headers(headers) {
	        var _this = this;
	        if (headers instanceof Headers) {
	            this._headersMap = headers._headersMap;
	            return;
	        }
	        this._headersMap = new collection_1.Map();
	        if (lang_1.isBlank(headers)) {
	            return;
	        }
	        // headers instanceof StringMap
	        collection_1.StringMapWrapper.forEach(headers, function (v, k) {
	            _this._headersMap.set(k, collection_1.isListLikeIterable(v) ? v : [v]);
	        });
	    }
	    /**
	     * Returns a new Headers instance from the given DOMString of Response Headers
	     */
	    Headers.fromResponseHeaderString = function (headersString) {
	        return headersString.trim()
	            .split('\n')
	            .map(function (val) { return val.split(':'); })
	            .map(function (_a) {
	            var key = _a[0], parts = _a.slice(1);
	            return ([key.trim(), parts.join(':').trim()]);
	        })
	            .reduce(function (headers, _a) {
	            var key = _a[0], value = _a[1];
	            return !headers.set(key, value) && headers;
	        }, new Headers());
	    };
	    /**
	     * Appends a header to existing list of header values for a given header name.
	     */
	    Headers.prototype.append = function (name, value) {
	        var mapName = this._headersMap.get(name);
	        var list = collection_1.isListLikeIterable(mapName) ? mapName : [];
	        list.push(value);
	        this._headersMap.set(name, list);
	    };
	    /**
	     * Deletes all header values for the given name.
	     */
	    Headers.prototype.delete = function (name) { this._headersMap.delete(name); };
	    Headers.prototype.forEach = function (fn) {
	        this._headersMap.forEach(fn);
	    };
	    /**
	     * Returns first header that matches given name.
	     */
	    Headers.prototype.get = function (header) { return collection_1.ListWrapper.first(this._headersMap.get(header)); };
	    /**
	     * Check for existence of header by given name.
	     */
	    Headers.prototype.has = function (header) { return this._headersMap.has(header); };
	    /**
	     * Provides names of set headers
	     */
	    Headers.prototype.keys = function () { return collection_1.MapWrapper.keys(this._headersMap); };
	    /**
	     * Sets or overrides header value for given name.
	     */
	    Headers.prototype.set = function (header, value) {
	        var list = [];
	        if (collection_1.isListLikeIterable(value)) {
	            var pushValue = value.join(',');
	            list.push(pushValue);
	        }
	        else {
	            list.push(value);
	        }
	        this._headersMap.set(header, list);
	    };
	    /**
	     * Returns values of all headers.
	     */
	    Headers.prototype.values = function () { return collection_1.MapWrapper.values(this._headersMap); };
	    /**
	     * Returns string of all headers.
	     */
	    Headers.prototype.toJSON = function () {
	        var serializableHeaders = {};
	        this._headersMap.forEach(function (values, name) {
	            var list = [];
	            collection_1.iterateListLike(values, function (val /** TODO #9100 */) { return list = collection_1.ListWrapper.concat(list, val.split(',')); });
	            serializableHeaders[name] = list;
	        });
	        return serializableHeaders;
	    };
	    /**
	     * Returns list of header values for a given name.
	     */
	    Headers.prototype.getAll = function (header) {
	        var headers = this._headersMap.get(header);
	        return collection_1.isListLikeIterable(headers) ? headers : [];
	    };
	    /**
	     * This method is not implemented.
	     */
	    Headers.prototype.entries = function () { throw new exceptions_1.BaseException('"entries" method is not implemented on Headers class'); };
	    return Headers;
	}());
	exports.Headers = Headers;
	//# sourceMappingURL=headers.js.map

/***/ },

/***/ 104:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	/**
	 * Abstract class from which real backends are derived.
	 *
	 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
	 * {@link Request}.
	 *
	 * @experimental
	 */
	var ConnectionBackend = (function () {
	    function ConnectionBackend() {
	    }
	    return ConnectionBackend;
	}());
	exports.ConnectionBackend = ConnectionBackend;
	/**
	 * Abstract class from which real connections are derived.
	 *
	 * @experimental
	 */
	var Connection = (function () {
	    function Connection() {
	    }
	    return Connection;
	}());
	exports.Connection = Connection;
	/**
	 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
	 *
	 * @experimental
	 */
	var XSRFStrategy = (function () {
	    function XSRFStrategy() {
	    }
	    return XSRFStrategy;
	}());
	exports.XSRFStrategy = XSRFStrategy;
	//# sourceMappingURL=interfaces.js.map

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(26);
	var enums_1 = __webpack_require__(58);
	var headers_1 = __webpack_require__(103);
	/**
	 * Creates a response options object to be optionally provided when instantiating a
	 * {@link Response}.
	 *
	 * This class is based on the `ResponseInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#responseinit).
	 *
	 * All values are null by default. Typical defaults can be found in the
	 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
	 *
	 * This class may be used in tests to build {@link Response Responses} for
	 * mock responses (see {@link MockBackend}).
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
	 *
	 * ```typescript
	 * import {ResponseOptions, Response} from '@angular/http';
	 *
	 * var options = new ResponseOptions({
	 *   body: '{"name":"Jeff"}'
	 * });
	 * var res = new Response(options);
	 *
	 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	 * ```
	 *
	 * @experimental
	 */
	var ResponseOptions = (function () {
	    function ResponseOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, body = _b.body, status = _b.status, headers = _b.headers, statusText = _b.statusText, type = _b.type, url = _b.url;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.status = lang_1.isPresent(status) ? status : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.statusText = lang_1.isPresent(statusText) ? statusText : null;
	        this.type = lang_1.isPresent(type) ? type : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	    }
	    /**
	     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
	     * override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * This may be useful when sharing a base `ResponseOptions` object inside tests,
	     * where certain properties may change from test to test.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
	     *
	     * ```typescript
	     * import {ResponseOptions, Response} from '@angular/http';
	     *
	     * var options = new ResponseOptions({
	     *   body: {name: 'Jeff'}
	     * });
	     * var res = new Response(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('options.url:', options.url); // null
	     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
	     * console.log('res.url:', res.url); // https://google.com
	     * ```
	     */
	    ResponseOptions.prototype.merge = function (options) {
	        return new ResponseOptions({
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            status: lang_1.isPresent(options) && lang_1.isPresent(options.status) ? options.status : this.status,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            statusText: lang_1.isPresent(options) && lang_1.isPresent(options.statusText) ? options.statusText :
	                this.statusText,
	            type: lang_1.isPresent(options) && lang_1.isPresent(options.type) ? options.type : this.type,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	        });
	    };
	    return ResponseOptions;
	}());
	exports.ResponseOptions = ResponseOptions;
	var BaseResponseOptions = (function (_super) {
	    __extends(BaseResponseOptions, _super);
	    function BaseResponseOptions() {
	        _super.call(this, { status: 200, statusText: 'Ok', type: enums_1.ResponseType.Default, headers: new headers_1.Headers() });
	    }
	    /** @nocollapse */
	    BaseResponseOptions.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    BaseResponseOptions.ctorParameters = [];
	    return BaseResponseOptions;
	}(ResponseOptions));
	exports.BaseResponseOptions = BaseResponseOptions;
	//# sourceMappingURL=base_response_options.js.map

/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(102);
	var lang_1 = __webpack_require__(26);
	var enums_1 = __webpack_require__(58);
	function normalizeMethodName(method) {
	    if (lang_1.isString(method)) {
	        var originalMethod = method;
	        method = method
	            .replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
	        method = enums_1.RequestMethod[method];
	        if (typeof method !== 'number')
	            throw exceptions_1.makeTypeError("Invalid request method. The method \"" + originalMethod + "\" is not supported.");
	    }
	    return method;
	}
	exports.normalizeMethodName = normalizeMethodName;
	exports.isSuccess = function (status) { return (status >= 200 && status < 300); };
	function getResponseURL(xhr) {
	    if ('responseURL' in xhr) {
	        return xhr.responseURL;
	    }
	    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	        return xhr.getResponseHeader('X-Request-URL');
	    }
	    return;
	}
	exports.getResponseURL = getResponseURL;
	var lang_2 = __webpack_require__(26);
	exports.isJsObject = lang_2.isJsObject;
	//# sourceMappingURL=http_utils.js.map

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var BrowserXhr = (function () {
	    function BrowserXhr() {
	    }
	    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
	    /** @nocollapse */
	    BrowserXhr.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    BrowserXhr.ctorParameters = [];
	    return BrowserXhr;
	}());
	exports.BrowserXhr = BrowserXhr;
	//# sourceMappingURL=browser_xhr.js.map

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(26);
	var enums_1 = __webpack_require__(58);
	var headers_1 = __webpack_require__(103);
	var http_utils_1 = __webpack_require__(136);
	var url_search_params_1 = __webpack_require__(204);
	/**
	 * Creates a request options object to be optionally provided when instantiating a
	 * {@link Request}.
	 *
	 * This class is based on the `RequestInit` description in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#requestinit).
	 *
	 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
	 * class, which sub-classes `RequestOptions`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7Wvi3lfLq41aQPKlxB4O?p=preview))
	 *
	 * ```typescript
	 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
	 *
	 * var options = new RequestOptions({
	 *   method: RequestMethod.Post,
	 *   url: 'https://google.com'
	 * });
	 * var req = new Request(options);
	 * console.log('req.method:', RequestMethod[req.method]); // Post
	 * console.log('options.url:', options.url); // https://google.com
	 * ```
	 *
	 * @experimental
	 */
	var RequestOptions = (function () {
	    function RequestOptions(_a) {
	        var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials;
	        this.method = lang_1.isPresent(method) ? http_utils_1.normalizeMethodName(method) : null;
	        this.headers = lang_1.isPresent(headers) ? headers : null;
	        this.body = lang_1.isPresent(body) ? body : null;
	        this.url = lang_1.isPresent(url) ? url : null;
	        this.search = lang_1.isPresent(search) ?
	            (lang_1.isString(search) ? new url_search_params_1.URLSearchParams((search)) : (search)) :
	            null;
	        this.withCredentials = lang_1.isPresent(withCredentials) ? withCredentials : null;
	    }
	    /**
	     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
	     * existing values. This method will not change the values of the instance on which it is being
	     * called.
	     *
	     * Note that `headers` and `search` will override existing values completely if present in
	     * the `options` object. If these values should be merged, it should be done prior to calling
	     * `merge` on the `RequestOptions` instance.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/6w8XA8YTkDRcPYpdB9dk?p=preview))
	     *
	     * ```typescript
	     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
	     *
	     * var options = new RequestOptions({
	     *   method: RequestMethod.Post
	     * });
	     * var req = new Request(options.merge({
	     *   url: 'https://google.com'
	     * }));
	     * console.log('req.method:', RequestMethod[req.method]); // Post
	     * console.log('options.url:', options.url); // null
	     * console.log('req.url:', req.url); // https://google.com
	     * ```
	     */
	    RequestOptions.prototype.merge = function (options) {
	        return new RequestOptions({
	            method: lang_1.isPresent(options) && lang_1.isPresent(options.method) ? options.method : this.method,
	            headers: lang_1.isPresent(options) && lang_1.isPresent(options.headers) ? options.headers : this.headers,
	            body: lang_1.isPresent(options) && lang_1.isPresent(options.body) ? options.body : this.body,
	            url: lang_1.isPresent(options) && lang_1.isPresent(options.url) ? options.url : this.url,
	            search: lang_1.isPresent(options) && lang_1.isPresent(options.search) ?
	                (lang_1.isString(options.search) ? new url_search_params_1.URLSearchParams((options.search)) :
	                    (options.search).clone()) :
	                this.search,
	            withCredentials: lang_1.isPresent(options) && lang_1.isPresent(options.withCredentials) ?
	                options.withCredentials :
	                this.withCredentials
	        });
	    };
	    return RequestOptions;
	}());
	exports.RequestOptions = RequestOptions;
	var BaseRequestOptions = (function (_super) {
	    __extends(BaseRequestOptions, _super);
	    function BaseRequestOptions() {
	        _super.call(this, { method: enums_1.RequestMethod.Get, headers: new headers_1.Headers() });
	    }
	    /** @nocollapse */
	    BaseRequestOptions.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    BaseRequestOptions.ctorParameters = [];
	    return BaseRequestOptions;
	}(RequestOptions));
	exports.BaseRequestOptions = BaseRequestOptions;
	//# sourceMappingURL=base_request_options.js.map

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var lang_1 = __webpack_require__(26);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
	        m.forEach(function (v, k) {
	            res[i] = getValues ? v : k;
	            i++;
	        });
	        return res;
	    };
	})();
	var MapWrapper = (function () {
	    function MapWrapper() {
	    }
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
	    ListWrapper.removeAll = function (list, items) {
	        for (var i = 0; i < items.length; ++i) {
	            var index = list.indexOf(items[i]);
	            list.splice(index, 1);
	        }
	    };
	    ListWrapper.remove = function (list, el) {
	        var index = list.indexOf(el);
	        if (index > -1) {
	            list.splice(index, 1);
	            return true;
	        }
	        return false;
	    };
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
	    };
	    ListWrapper.equals = function (a, b) {
	        if (a.length != b.length)
	            return false;
	        for (var i = 0; i < a.length; ++i) {
	            if (a[i] !== b[i])
	                return false;
	        }
	        return true;
	    };
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
	                continue;
	            }
	            var candidateValue = predicate(candidate);
	            if (candidateValue > maxValue) {
	                solution = candidate;
	                maxValue = candidateValue;
	            }
	        }
	        return solution;
	    };
	    ListWrapper.flatten = function (list) {
	        var target = [];
	        _flattenArray(list, target);
	        return target;
	    };
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(102);
	var lang_1 = __webpack_require__(26);
	var http_utils_1 = __webpack_require__(136);
	/**
	 * Creates `Response` instances from provided values.
	 *
	 * Though this object isn't
	 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
	 * add data to a view.
	 *
	 * ### Example
	 *
	 * ```
	 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
	 * ```
	 *
	 * The Response's interface is inspired by the Response constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
	 * can be accessed many times. There are other differences in the implementation, but this is the
	 * most significant.
	 *
	 * @experimental
	 */
	var Response = (function () {
	    function Response(responseOptions) {
	        this._body = responseOptions.body;
	        this.status = responseOptions.status;
	        this.ok = (this.status >= 200 && this.status <= 299);
	        this.statusText = responseOptions.statusText;
	        this.headers = responseOptions.headers;
	        this.type = responseOptions.type;
	        this.url = responseOptions.url;
	    }
	    /**
	     * Not yet implemented
	     */
	    // TODO: Blob return type
	    Response.prototype.blob = function () { throw new exceptions_1.BaseException('"blob()" method not implemented on Response superclass'); };
	    /**
	     * Attempts to return body as parsed `JSON` object, or raises an exception.
	     */
	    Response.prototype.json = function () {
	        var jsonResponse;
	        if (http_utils_1.isJsObject(this._body)) {
	            jsonResponse = this._body;
	        }
	        else if (lang_1.isString(this._body)) {
	            jsonResponse = lang_1.Json.parse(this._body);
	        }
	        return jsonResponse;
	    };
	    /**
	     * Returns the body as a string, presuming `toString()` can be called on the response body.
	     */
	    Response.prototype.text = function () { return this._body.toString(); };
	    /**
	     * Not yet implemented
	     */
	    // TODO: ArrayBuffer return type
	    Response.prototype.arrayBuffer = function () {
	        throw new exceptions_1.BaseException('"arrayBuffer()" method not implemented on Response superclass');
	    };
	    Response.prototype.toString = function () {
	        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
	    };
	    return Response;
	}());
	exports.Response = Response;
	//# sourceMappingURL=static_response.js.map

/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var collection_1 = __webpack_require__(202);
	var lang_1 = __webpack_require__(26);
	function paramParser(rawParams) {
	    if (rawParams === void 0) { rawParams = ''; }
	    var map = new collection_1.Map();
	    if (rawParams.length > 0) {
	        var params = rawParams.split('&');
	        params.forEach(function (param) {
	            var split = param.split('=', 2);
	            var key = split[0];
	            var val = split[1];
	            var list = lang_1.isPresent(map.get(key)) ? map.get(key) : [];
	            list.push(val);
	            map.set(key, list);
	        });
	    }
	    return map;
	}
	/**
	 * @experimental
	 **/
	var QueryEncoder = (function () {
	    function QueryEncoder() {
	    }
	    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
	    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
	    return QueryEncoder;
	}());
	exports.QueryEncoder = QueryEncoder;
	function standardEncoding(v) {
	    return encodeURIComponent(v)
	        .replace(/%40/gi, '@')
	        .replace(/%3A/gi, ':')
	        .replace(/%24/gi, '$')
	        .replace(/%2C/gi, ',')
	        .replace(/%3B/gi, ';')
	        .replace(/%2B/gi, '+')
	        .replace(/%3D/gi, ';')
	        .replace(/%3F/gi, '?')
	        .replace(/%2F/gi, '/');
	}
	/**
	 * Map-like representation of url search parameters, based on
	 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
	 * with several extensions for merging URLSearchParams objects:
	 *   - setAll()
	 *   - appendAll()
	 *   - replaceAll()
	 *
	 * This class accepts an optional second parameter of ${@link QueryEncoder},
	 * which is used to serialize parameters before making a request. By default,
	 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
	 * and then un-encodes certain characters that are allowed to be part of the query
	 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
	 *
	 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
	 *
	 * If the set of allowed query characters is not acceptable for a particular backend,
	 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
	 *
	 * ```
	 * import {URLSearchParams, QueryEncoder} from '@angular/http';
	 * class MyQueryEncoder extends QueryEncoder {
	 *   encodeKey(k: string): string {
	 *     return myEncodingFunction(k);
	 *   }
	 *
	 *   encodeValue(v: string): string {
	 *     return myEncodingFunction(v);
	 *   }
	 * }
	 *
	 * let params = new URLSearchParams('', new MyQueryEncoder());
	 * ```
	 * @experimental
	 */
	var URLSearchParams = (function () {
	    function URLSearchParams(rawParams, queryEncoder) {
	        if (rawParams === void 0) { rawParams = ''; }
	        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
	        this.rawParams = rawParams;
	        this.queryEncoder = queryEncoder;
	        this.paramsMap = paramParser(rawParams);
	    }
	    URLSearchParams.prototype.clone = function () {
	        var clone = new URLSearchParams();
	        clone.appendAll(this);
	        return clone;
	    };
	    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
	    URLSearchParams.prototype.get = function (param) {
	        var storedParam = this.paramsMap.get(param);
	        if (collection_1.isListLikeIterable(storedParam)) {
	            return collection_1.ListWrapper.first(storedParam);
	        }
	        else {
	            return null;
	        }
	    };
	    URLSearchParams.prototype.getAll = function (param) {
	        var mapParam = this.paramsMap.get(param);
	        return lang_1.isPresent(mapParam) ? mapParam : [];
	    };
	    URLSearchParams.prototype.set = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        collection_1.ListWrapper.clear(list);
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.setAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            list.push(value[0]);
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.append = function (param, val) {
	        var mapParam = this.paramsMap.get(param);
	        var list = lang_1.isPresent(mapParam) ? mapParam : [];
	        list.push(val);
	        this.paramsMap.set(param, list);
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `append(name, value)`
	    // for each value in `values`.
	    //
	    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.appendAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    // A merge operation
	    // For each name-values pair in `searchParams`, perform `delete(name)`,
	    // followed by `set(name, values)`
	    //
	    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
	    //
	    // TODO(@caitp): document this better
	    URLSearchParams.prototype.replaceAll = function (searchParams) {
	        var _this = this;
	        searchParams.paramsMap.forEach(function (value, param) {
	            var mapParam = _this.paramsMap.get(param);
	            var list = lang_1.isPresent(mapParam) ? mapParam : [];
	            collection_1.ListWrapper.clear(list);
	            for (var i = 0; i < value.length; ++i) {
	                list.push(value[i]);
	            }
	            _this.paramsMap.set(param, list);
	        });
	    };
	    URLSearchParams.prototype.toString = function () {
	        var _this = this;
	        var paramsList = [];
	        this.paramsMap.forEach(function (values, k) {
	            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
	        });
	        return paramsList.join('&');
	    };
	    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
	    return URLSearchParams;
	}());
	exports.URLSearchParams = URLSearchParams;
	//# sourceMappingURL=url_search_params.js.map

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Subject_1 = __webpack_require__(24);
	var WindowViewService = (function () {
	    function WindowViewService(dcl) {
	        this.dcl = dcl;
	        this.stack = [];
	        this._length$ = new Subject_1.Subject();
	        this._onOpen$ = new Subject_1.Subject();
	        this._onClose$ = new Subject_1.Subject();
	    }
	    Object.defineProperty(WindowViewService.prototype, "length", {
	        get: function () { return this.stack.length; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WindowViewService.prototype, "length$", {
	        /**
	         * Current window's count.
	         */
	        get: function () { return this._length$.asObservable(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WindowViewService.prototype, "onOpen$", {
	        /**
	         * Emit after window open.
	         */
	        get: function () { return this._onOpen$.asObservable(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WindowViewService.prototype, "onClose$", {
	        /**
	         * Emit before window close.
	         */
	        get: function () { return this._onClose$.asObservable(); },
	        enumerable: true,
	        configurable: true
	    });
	    WindowViewService.prototype.setOutlet = function (outlet) {
	        this.outlet = outlet;
	    };
	    WindowViewService.prototype.getWindowInstanceAt = function (index) {
	        return (this.stack[index]) ? this.stack[index].instance : null;
	    };
	    /**
	     * Add window to top.
	     */
	    WindowViewService.prototype.pushWindow = function (Component, providers) {
	        var _this = this;
	        if (providers === void 0) { providers = []; }
	        if (!this.outlet) {
	            throw new Error('[WindowViewService] pushWindow error. Not found window-view-outlet');
	        }
	        return this.dcl.loadNextToLocation(Component, this.outlet, providers)
	            .then(function (componentRef) {
	            _this.stack.push(componentRef);
	            _this._onOpen$.next(componentRef);
	            _this._length$.next(_this.stack.length);
	            return componentRef;
	        });
	    };
	    /**
	     * Open window and wait for result.
	     */
	    WindowViewService.prototype.pushWindowAndGetResult = function (Component, providers) {
	        var _this = this;
	        if (providers === void 0) { providers = []; }
	        return this.pushWindow(Component, providers).then(function (componentRef) {
	            var component = componentRef.instance;
	            if (!component.preventAutoCloseWindow) {
	                var waitForResult_1 = component.result$.subscribe(null, null, function () {
	                    _this.popWindow();
	                    waitForResult_1.unsubscribe();
	                });
	            }
	            return component.result$;
	        });
	    };
	    /**
	     * Remove latest window.
	     */
	    WindowViewService.prototype.popWindow = function () {
	        if (this.stack.length === 0) {
	            return false;
	        }
	        var componentRef = this.stack[this.stack.length - 1];
	        return this.removeWindow(componentRef);
	    };
	    WindowViewService.prototype.removeWindow = function (componentRef) {
	        if (!this.canCloseWindowView(componentRef)) {
	            return false;
	        }
	        var index = this.stack.indexOf(componentRef);
	        this.stack.splice(index, 1);
	        this._onClose$.next(componentRef);
	        this._length$.next(this.stack.length);
	        componentRef.destroy();
	        return true;
	    };
	    WindowViewService.prototype.removeWindowByInstance = function (instance) {
	        var removedComponentRef = this.stack.find(function (componentRef) {
	            return componentRef.instance === instance;
	        });
	        return this.removeWindow(removedComponentRef);
	    };
	    WindowViewService.prototype.canCloseWindowView = function (componentRef) {
	        if (typeof componentRef.instance.windowViewCanClose !== 'function') {
	            return true;
	        }
	        return componentRef.instance.windowViewCanClose();
	    };
	    WindowViewService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.DynamicComponentLoader])
	    ], WindowViewService);
	    return WindowViewService;
	}());
	exports.WindowViewService = WindowViewService;
	

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(445));
	//# sourceMappingURL=index.js.map

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var lang_1 = __webpack_require__(26);
	var _nextRequestId = 0;
	exports.JSONP_HOME = '__ng_jsonp__';
	var _jsonpConnections = null;
	function _getJsonpConnections() {
	    if (_jsonpConnections === null) {
	        _jsonpConnections = lang_1.global[exports.JSONP_HOME] = {};
	    }
	    return _jsonpConnections;
	}
	var BrowserJsonp = (function () {
	    function BrowserJsonp() {
	    }
	    // Construct a <script> element with the specified URL
	    BrowserJsonp.prototype.build = function (url) {
	        var node = document.createElement('script');
	        node.src = url;
	        return node;
	    };
	    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
	    BrowserJsonp.prototype.requestCallback = function (id) { return exports.JSONP_HOME + "." + id + ".finished"; };
	    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
	        var connections = _getJsonpConnections();
	        connections[id] = connection;
	    };
	    BrowserJsonp.prototype.removeConnection = function (id) {
	        var connections = _getJsonpConnections();
	        connections[id] = null;
	    };
	    // Attach the <script> element to the DOM
	    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
	    // Remove <script> element from the DOM
	    BrowserJsonp.prototype.cleanup = function (node) {
	        if (node.parentNode) {
	            node.parentNode.removeChild((node));
	        }
	    };
	    /** @nocollapse */
	    BrowserJsonp.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return BrowserJsonp;
	}());
	exports.BrowserJsonp = BrowserJsonp;
	//# sourceMappingURL=browser_jsonp.js.map

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var Observable_1 = __webpack_require__(8);
	var base_response_options_1 = __webpack_require__(135);
	var enums_1 = __webpack_require__(58);
	var exceptions_1 = __webpack_require__(102);
	var lang_1 = __webpack_require__(26);
	var interfaces_1 = __webpack_require__(104);
	var static_response_1 = __webpack_require__(203);
	var browser_jsonp_1 = __webpack_require__(312);
	var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
	var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
	/**
	 * Abstract base class for an in-flight JSONP request.
	 *
	 * @experimental
	 */
	var JSONPConnection = (function () {
	    function JSONPConnection() {
	    }
	    return JSONPConnection;
	}());
	exports.JSONPConnection = JSONPConnection;
	var JSONPConnection_ = (function (_super) {
	    __extends(JSONPConnection_, _super);
	    function JSONPConnection_(req, _dom, baseResponseOptions) {
	        var _this = this;
	        _super.call(this);
	        this._dom = _dom;
	        this.baseResponseOptions = baseResponseOptions;
	        this._finished = false;
	        if (req.method !== enums_1.RequestMethod.Get) {
	            throw exceptions_1.makeTypeError(JSONP_ERR_WRONG_METHOD);
	        }
	        this.request = req;
	        this.response = new Observable_1.Observable(function (responseObserver) {
	            _this.readyState = enums_1.ReadyState.Loading;
	            var id = _this._id = _dom.nextRequestID();
	            _dom.exposeConnection(id, _this);
	            // Workaround Dart
	            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
	            var callback = _dom.requestCallback(_this._id);
	            var url = req.url;
	            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
	                url = lang_1.StringWrapper.replace(url, '=JSONP_CALLBACK&', "=" + callback + "&");
	            }
	            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
	                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
	            }
	            var script = _this._script = _dom.build(url);
	            var onLoad = function (event) {
	                if (_this.readyState === enums_1.ReadyState.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyState.Done;
	                _dom.cleanup(script);
	                if (!_this._finished) {
	                    var responseOptions_1 = new base_response_options_1.ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: enums_1.ResponseType.Error, url: url });
	                    if (lang_1.isPresent(baseResponseOptions)) {
	                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
	                    }
	                    responseObserver.error(new static_response_1.Response(responseOptions_1));
	                    return;
	                }
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: _this._responseData, url: url });
	                if (lang_1.isPresent(_this.baseResponseOptions)) {
	                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.next(new static_response_1.Response(responseOptions));
	                responseObserver.complete();
	            };
	            var onError = function (error) {
	                if (_this.readyState === enums_1.ReadyState.Cancelled)
	                    return;
	                _this.readyState = enums_1.ReadyState.Done;
	                _dom.cleanup(script);
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: error.message, type: enums_1.ResponseType.Error });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            script.addEventListener('load', onLoad);
	            script.addEventListener('error', onError);
	            _dom.send(script);
	            return function () {
	                _this.readyState = enums_1.ReadyState.Cancelled;
	                script.removeEventListener('load', onLoad);
	                script.removeEventListener('error', onError);
	                if (lang_1.isPresent(script)) {
	                    _this._dom.cleanup(script);
	                }
	            };
	        });
	    }
	    JSONPConnection_.prototype.finished = function (data) {
	        // Don't leak connections
	        this._finished = true;
	        this._dom.removeConnection(this._id);
	        if (this.readyState === enums_1.ReadyState.Cancelled)
	            return;
	        this._responseData = data;
	    };
	    return JSONPConnection_;
	}(JSONPConnection));
	exports.JSONPConnection_ = JSONPConnection_;
	/**
	 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
	 *
	 * @experimental
	 */
	var JSONPBackend = (function (_super) {
	    __extends(JSONPBackend, _super);
	    function JSONPBackend() {
	        _super.apply(this, arguments);
	    }
	    return JSONPBackend;
	}(interfaces_1.ConnectionBackend));
	exports.JSONPBackend = JSONPBackend;
	var JSONPBackend_ = (function (_super) {
	    __extends(JSONPBackend_, _super);
	    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
	        _super.call(this);
	        this._browserJSONP = _browserJSONP;
	        this._baseResponseOptions = _baseResponseOptions;
	    }
	    JSONPBackend_.prototype.createConnection = function (request) {
	        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
	    };
	    /** @nocollapse */
	    JSONPBackend_.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    JSONPBackend_.ctorParameters = [
	        { type: browser_jsonp_1.BrowserJsonp, },
	        { type: base_response_options_1.ResponseOptions, },
	    ];
	    return JSONPBackend_;
	}(JSONPBackend));
	exports.JSONPBackend_ = JSONPBackend_;
	//# sourceMappingURL=jsonp_backend.js.map

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(137);
	var Observable_1 = __webpack_require__(8);
	var base_response_options_1 = __webpack_require__(135);
	var enums_1 = __webpack_require__(58);
	var lang_1 = __webpack_require__(26);
	var headers_1 = __webpack_require__(103);
	var http_utils_1 = __webpack_require__(136);
	var interfaces_1 = __webpack_require__(104);
	var static_response_1 = __webpack_require__(203);
	var browser_xhr_1 = __webpack_require__(200);
	var XSSI_PREFIX = /^\)\]\}',?\n/;
	/**
	 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
	 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
	 * request.
	 *
	 * This class would typically not be created or interacted with directly inside applications, though
	 * the {@link MockConnection} may be interacted with in tests.
	 *
	 * @experimental
	 */
	var XHRConnection = (function () {
	    function XHRConnection(req, browserXHR, baseResponseOptions) {
	        var _this = this;
	        this.request = req;
	        this.response = new Observable_1.Observable(function (responseObserver) {
	            var _xhr = browserXHR.build();
	            _xhr.open(enums_1.RequestMethod[req.method].toUpperCase(), req.url);
	            if (lang_1.isPresent(req.withCredentials)) {
	                _xhr.withCredentials = req.withCredentials;
	            }
	            // load event handler
	            var onLoad = function () {
	                // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	                // response/responseType properties were introduced in XHR Level2 spec (supported by
	                // IE10)
	                var body = lang_1.isPresent(_xhr.response) ? _xhr.response : _xhr.responseText;
	                // Implicitly strip a potential XSSI prefix.
	                if (lang_1.isString(body))
	                    body = body.replace(XSSI_PREFIX, '');
	                var headers = headers_1.Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
	                var url = http_utils_1.getResponseURL(_xhr);
	                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                var status = _xhr.status === 1223 ? 204 : _xhr.status;
	                // fix status code when it is 0 (0 status is undocumented).
	                // Occurs when accessing file resources or on Android 4.1 stock browser
	                // while retrieving files from application cache.
	                if (status === 0) {
	                    status = body ? 200 : 0;
	                }
	                var statusText = _xhr.statusText || 'OK';
	                var responseOptions = new base_response_options_1.ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                var response = new static_response_1.Response(responseOptions);
	                response.ok = http_utils_1.isSuccess(status);
	                if (response.ok) {
	                    responseObserver.next(response);
	                    // TODO(gdi2290): defer complete if array buffer until done
	                    responseObserver.complete();
	                    return;
	                }
	                responseObserver.error(response);
	            };
	            // error event handler
	            var onError = function (err) {
	                var responseOptions = new base_response_options_1.ResponseOptions({
	                    body: err,
	                    type: enums_1.ResponseType.Error,
	                    status: _xhr.status,
	                    statusText: _xhr.statusText,
	                });
	                if (lang_1.isPresent(baseResponseOptions)) {
	                    responseOptions = baseResponseOptions.merge(responseOptions);
	                }
	                responseObserver.error(new static_response_1.Response(responseOptions));
	            };
	            _this.setDetectedContentType(req, _xhr);
	            if (lang_1.isPresent(req.headers)) {
	                req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
	            }
	            _xhr.addEventListener('load', onLoad);
	            _xhr.addEventListener('error', onError);
	            _xhr.send(_this.request.getBody());
	            return function () {
	                _xhr.removeEventListener('load', onLoad);
	                _xhr.removeEventListener('error', onError);
	                _xhr.abort();
	            };
	        });
	    }
	    XHRConnection.prototype.setDetectedContentType = function (req /** TODO #9100 */, _xhr /** TODO #9100 */) {
	        // Skip if a custom Content-Type header is provided
	        if (lang_1.isPresent(req.headers) && lang_1.isPresent(req.headers.get('Content-Type'))) {
	            return;
	        }
	        // Set the detected content type
	        switch (req.contentType) {
	            case enums_1.ContentType.NONE:
	                break;
	            case enums_1.ContentType.JSON:
	                _xhr.setRequestHeader('Content-Type', 'application/json');
	                break;
	            case enums_1.ContentType.FORM:
	                _xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
	                break;
	            case enums_1.ContentType.TEXT:
	                _xhr.setRequestHeader('Content-Type', 'text/plain');
	                break;
	            case enums_1.ContentType.BLOB:
	                var blob = req.blob();
	                if (blob.type) {
	                    _xhr.setRequestHeader('Content-Type', blob.type);
	                }
	                break;
	        }
	    };
	    return XHRConnection;
	}());
	exports.XHRConnection = XHRConnection;
	/**
	 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
	 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF) for more
	 * information on XSRF.
	 *
	 * Applications can configure custom cookie and header names by binding an instance of this class
	 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
	 * details.
	 *
	 * @experimental
	 */
	var CookieXSRFStrategy = (function () {
	    function CookieXSRFStrategy(_cookieName, _headerName) {
	        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
	        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
	        this._cookieName = _cookieName;
	        this._headerName = _headerName;
	    }
	    CookieXSRFStrategy.prototype.configureRequest = function (req) {
	        var xsrfToken = platform_browser_1.__platform_browser_private__.getDOM().getCookie(this._cookieName);
	        if (xsrfToken && !req.headers.has(this._headerName)) {
	            req.headers.set(this._headerName, xsrfToken);
	        }
	    };
	    return CookieXSRFStrategy;
	}());
	exports.CookieXSRFStrategy = CookieXSRFStrategy;
	var XHRBackend = (function () {
	    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
	        this._browserXHR = _browserXHR;
	        this._baseResponseOptions = _baseResponseOptions;
	        this._xsrfStrategy = _xsrfStrategy;
	    }
	    XHRBackend.prototype.createConnection = function (request) {
	        this._xsrfStrategy.configureRequest(request);
	        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
	    };
	    /** @nocollapse */
	    XHRBackend.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    XHRBackend.ctorParameters = [
	        { type: browser_xhr_1.BrowserXhr, },
	        { type: base_response_options_1.ResponseOptions, },
	        { type: interfaces_1.XSRFStrategy, },
	    ];
	    return XHRBackend;
	}());
	exports.XHRBackend = XHRBackend;
	//# sourceMappingURL=xhr_backend.js.map

/***/ },

/***/ 315:
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A base class for the WrappedException that can be used to identify
	 * a WrappedException from ExceptionHandler without adding circular
	 * dependency.
	 */
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var base_wrapped_exception_1 = __webpack_require__(315);
	var collection_1 = __webpack_require__(202);
	var lang_1 = __webpack_require__(26);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, {provide: ExceptionHandler, useClass: MyExceptionHandler}])
	 *
	 * ```
	 * @stable
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join('\n');
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError('STACKTRACE:');
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError('ORIGINAL STACKTRACE:');
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError('ERROR CONTEXT:');
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join('\n\n-----async gap-----\n') :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(1);
	var exceptions_1 = __webpack_require__(102);
	var lang_1 = __webpack_require__(26);
	var base_request_options_1 = __webpack_require__(201);
	var enums_1 = __webpack_require__(58);
	var interfaces_1 = __webpack_require__(104);
	var static_request_1 = __webpack_require__(318);
	function httpRequest(backend, request) {
	    return backend.createConnection(request).response;
	}
	function mergeOptions(defaultOpts, providedOpts, method, url) {
	    var newOptions = defaultOpts;
	    if (lang_1.isPresent(providedOpts)) {
	        // Hack so Dart can used named parameters
	        return newOptions.merge(new base_request_options_1.RequestOptions({
	            method: providedOpts.method || method,
	            url: providedOpts.url || url,
	            search: providedOpts.search,
	            headers: providedOpts.headers,
	            body: providedOpts.body,
	            withCredentials: providedOpts.withCredentials
	        }));
	    }
	    if (lang_1.isPresent(method)) {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ method: method, url: url }));
	    }
	    else {
	        return newOptions.merge(new base_request_options_1.RequestOptions({ url: url }));
	    }
	}
	var Http = (function () {
	    function Http(_backend, _defaultOptions) {
	        this._backend = _backend;
	        this._defaultOptions = _defaultOptions;
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     */
	    Http.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            responseObservable = httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url)));
	        }
	        else if (url instanceof static_request_1.Request) {
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    /**
	     * Performs a request with `get` http method.
	     */
	    Http.prototype.get = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url)));
	    };
	    /**
	     * Performs a request with `post` http method.
	     */
	    Http.prototype.post = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Post, url)));
	    };
	    /**
	     * Performs a request with `put` http method.
	     */
	    Http.prototype.put = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Put, url)));
	    };
	    /**
	     * Performs a request with `delete` http method.
	     */
	    Http.prototype.delete = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Delete, url)));
	    };
	    /**
	     * Performs a request with `patch` http method.
	     */
	    Http.prototype.patch = function (url, body, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions.merge(new base_request_options_1.RequestOptions({ body: body })), options, enums_1.RequestMethod.Patch, url)));
	    };
	    /**
	     * Performs a request with `head` http method.
	     */
	    Http.prototype.head = function (url, options) {
	        return httpRequest(this._backend, new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Head, url)));
	    };
	    /** @nocollapse */
	    Http.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    Http.ctorParameters = [
	        { type: interfaces_1.ConnectionBackend, },
	        { type: base_request_options_1.RequestOptions, },
	    ];
	    return Http;
	}());
	exports.Http = Http;
	var Jsonp = (function (_super) {
	    __extends(Jsonp, _super);
	    function Jsonp(backend, defaultOptions) {
	        _super.call(this, backend, defaultOptions);
	    }
	    /**
	     * Performs any type of http request. First argument is required, and can either be a url or
	     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
	     * object can be provided as the 2nd argument. The options object will be merged with the values
	     * of {@link BaseRequestOptions} before performing the request.
	     *
	     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
	     * supported by all current browsers. Because JSONP creates a `<script>` element with
	     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
	     * source could expose your application to XSS risks. Data exposed by JSONP may also be
	     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
	     * future security issues (e.g. content sniffing).  For more detail, see the
	     * [Security Guide](http://g.co/ng/security).
	     */
	    Jsonp.prototype.request = function (url, options) {
	        var responseObservable;
	        if (lang_1.isString(url)) {
	            url =
	                new static_request_1.Request(mergeOptions(this._defaultOptions, options, enums_1.RequestMethod.Get, url));
	        }
	        if (url instanceof static_request_1.Request) {
	            if (url.method !== enums_1.RequestMethod.Get) {
	                exceptions_1.makeTypeError('JSONP requests must use GET request method.');
	            }
	            responseObservable = httpRequest(this._backend, url);
	        }
	        else {
	            throw exceptions_1.makeTypeError('First argument must be a url string or Request instance.');
	        }
	        return responseObservable;
	    };
	    /** @nocollapse */
	    Jsonp.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    Jsonp.ctorParameters = [
	        { type: interfaces_1.ConnectionBackend, },
	        { type: base_request_options_1.RequestOptions, },
	    ];
	    return Jsonp;
	}(Http));
	exports.Jsonp = Jsonp;
	//# sourceMappingURL=http.js.map

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var lang_1 = __webpack_require__(26);
	var enums_1 = __webpack_require__(58);
	var headers_1 = __webpack_require__(103);
	var http_utils_1 = __webpack_require__(136);
	var url_search_params_1 = __webpack_require__(204);
	// TODO(jeffbcross): properly implement body accessors
	/**
	 * Creates `Request` instances from provided values.
	 *
	 * The Request's interface is inspired by the Request constructor defined in the [Fetch
	 * Spec](https://fetch.spec.whatwg.org/#request-class),
	 * but is considered a static value whose body can be accessed many times. There are other
	 * differences in the implementation, but this is the most significant.
	 *
	 * `Request` instances are typically created by higher-level classes, like {@link Http} and
	 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
	 * One such example is when creating services that wrap higher-level services, like {@link Http},
	 * where it may be useful to generate a `Request` with arbitrary headers and search params.
	 *
	 * ```typescript
	 * import {Injectable, Injector} from '@angular/core';
	 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
	 *
	 * @Injectable()
	 * class AutoAuthenticator {
	 *   constructor(public http:Http) {}
	 *   request(url:string) {
	 *     return this.http.request(new Request({
	 *       method: RequestMethod.Get,
	 *       url: url,
	 *       search: 'password=123'
	 *     }));
	 *   }
	 * }
	 *
	 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
	 * var authenticator = injector.get(AutoAuthenticator);
	 * authenticator.request('people.json').subscribe(res => {
	 *   //URL should have included '?password=123'
	 *   console.log('people', res.json());
	 * });
	 * ```
	 *
	 * @experimental
	 */
	var Request = (function () {
	    function Request(requestOptions) {
	        // TODO: assert that url is present
	        var url = requestOptions.url;
	        this.url = requestOptions.url;
	        if (lang_1.isPresent(requestOptions.search)) {
	            var search = requestOptions.search.toString();
	            if (search.length > 0) {
	                var prefix = '?';
	                if (lang_1.StringWrapper.contains(this.url, '?')) {
	                    prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
	                }
	                // TODO: just delete search-query-looking string in url?
	                this.url = url + prefix + search;
	            }
	        }
	        this._body = requestOptions.body;
	        this.contentType = this.detectContentType();
	        this.method = http_utils_1.normalizeMethodName(requestOptions.method);
	        // TODO(jeffbcross): implement behavior
	        // Defaults to 'omit', consistent with browser
	        // TODO(jeffbcross): implement behavior
	        this.headers = new headers_1.Headers(requestOptions.headers);
	        this.withCredentials = requestOptions.withCredentials;
	    }
	    /**
	     * Returns the request's body as string, assuming that body exists. If body is undefined, return
	     * empty
	     * string.
	     */
	    Request.prototype.text = function () { return lang_1.isPresent(this._body) ? this._body.toString() : ''; };
	    /**
	     * Returns the request's body as JSON string, assuming that body exists. If body is undefined,
	     * return
	     * empty
	     * string.
	     */
	    Request.prototype.json = function () { return lang_1.isPresent(this._body) ? JSON.stringify(this._body) : ''; };
	    /**
	     * Returns the request's body as array buffer, assuming that body exists. If body is undefined,
	     * return
	     * null.
	     */
	    Request.prototype.arrayBuffer = function () {
	        if (this._body instanceof ArrayBuffer)
	            return this._body;
	        throw 'The request body isn\'t an array buffer';
	    };
	    /**
	     * Returns the request's body as blob, assuming that body exists. If body is undefined, return
	     * null.
	     */
	    Request.prototype.blob = function () {
	        if (this._body instanceof Blob)
	            return this._body;
	        if (this._body instanceof ArrayBuffer)
	            return new Blob([this._body]);
	        throw 'The request body isn\'t either a blob or an array buffer';
	    };
	    /**
	     * Returns the content type of request's body based on its type.
	     */
	    Request.prototype.detectContentType = function () {
	        if (this._body == null) {
	            return enums_1.ContentType.NONE;
	        }
	        else if (this._body instanceof url_search_params_1.URLSearchParams) {
	            return enums_1.ContentType.FORM;
	        }
	        else if (this._body instanceof FormData) {
	            return enums_1.ContentType.FORM_DATA;
	        }
	        else if (this._body instanceof Blob) {
	            return enums_1.ContentType.BLOB;
	        }
	        else if (this._body instanceof ArrayBuffer) {
	            return enums_1.ContentType.ARRAY_BUFFER;
	        }
	        else if (this._body && typeof this._body == 'object') {
	            return enums_1.ContentType.JSON;
	        }
	        else {
	            return enums_1.ContentType.TEXT;
	        }
	    };
	    /**
	     * Returns the request's body according to its type. If body is undefined, return
	     * null.
	     */
	    Request.prototype.getBody = function () {
	        switch (this.contentType) {
	            case enums_1.ContentType.JSON:
	                return this.json();
	            case enums_1.ContentType.FORM:
	                return this.text();
	            case enums_1.ContentType.FORM_DATA:
	                return this._body;
	            case enums_1.ContentType.TEXT:
	                return this.text();
	            case enums_1.ContentType.BLOB:
	                return this.blob();
	            case enums_1.ContentType.ARRAY_BUFFER:
	                return this.arrayBuffer();
	            default:
	                return null;
	        }
	    };
	    return Request;
	}());
	exports.Request = Request;
	var noop = function () { };
	var w = typeof window == 'object' ? window : noop;
	var FormData = w['FormData'] || noop;
	var Blob = w['Blob'] || noop;
	var ArrayBuffer = w['ArrayBuffer'] || noop;
	//# sourceMappingURL=static_request.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var WindowViewLayerService = (function () {
	    function WindowViewLayerService() {
	        /**
	         * Order index is same as z-index.
	         */
	        this.windowViewContainers = [];
	        /**
	         * Z-Index of controled window view container will
	         * always start at it.
	         */
	        this.zIndexStartAt = 10;
	    }
	    WindowViewLayerService.prototype.add = function (windowViewContainer) {
	        this._add(windowViewContainer);
	        this.setAllWindowViewContainersZIndex();
	    };
	    WindowViewLayerService.prototype.remove = function (windowViewContainer) {
	        this._remove(windowViewContainer);
	        this.setAllWindowViewContainersZIndex();
	    };
	    WindowViewLayerService.prototype.bringToTop = function (windowViewContainer) {
	        this._remove(windowViewContainer);
	        this._add(windowViewContainer);
	        this.setAllWindowViewContainersZIndex();
	    };
	    WindowViewLayerService.prototype._add = function (windowViewContainer) {
	        this.windowViewContainers.push(windowViewContainer);
	    };
	    WindowViewLayerService.prototype._remove = function (windowViewContainer) {
	        var index = this.windowViewContainers.indexOf(windowViewContainer);
	        this.windowViewContainers.splice(index, 1);
	    };
	    WindowViewLayerService.prototype.setAllWindowViewContainersZIndex = function () {
	        var _this = this;
	        this.windowViewContainers.forEach(function (windowViewContainer, index) {
	            return windowViewContainer.zIndex = _this.zIndexStartAt + index;
	        });
	    };
	    WindowViewLayerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WindowViewLayerService);
	    return WindowViewLayerService;
	}());
	exports.WindowViewLayerService = WindowViewLayerService;
	

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(695));
	

/***/ },

/***/ 377:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(698));
	

/***/ },

/***/ 378:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(704));
	

/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var browser_jsonp_1 = __webpack_require__(312);
	var browser_xhr_1 = __webpack_require__(200);
	var jsonp_backend_1 = __webpack_require__(313);
	var xhr_backend_1 = __webpack_require__(314);
	var base_request_options_1 = __webpack_require__(201);
	var base_response_options_1 = __webpack_require__(135);
	var http_1 = __webpack_require__(317);
	var interfaces_1 = __webpack_require__(104);
	var browser_xhr_2 = __webpack_require__(200);
	exports.BrowserXhr = browser_xhr_2.BrowserXhr;
	var jsonp_backend_2 = __webpack_require__(313);
	exports.JSONPBackend = jsonp_backend_2.JSONPBackend;
	exports.JSONPConnection = jsonp_backend_2.JSONPConnection;
	var xhr_backend_2 = __webpack_require__(314);
	exports.CookieXSRFStrategy = xhr_backend_2.CookieXSRFStrategy;
	exports.XHRBackend = xhr_backend_2.XHRBackend;
	exports.XHRConnection = xhr_backend_2.XHRConnection;
	var base_request_options_2 = __webpack_require__(201);
	exports.BaseRequestOptions = base_request_options_2.BaseRequestOptions;
	exports.RequestOptions = base_request_options_2.RequestOptions;
	var base_response_options_2 = __webpack_require__(135);
	exports.BaseResponseOptions = base_response_options_2.BaseResponseOptions;
	exports.ResponseOptions = base_response_options_2.ResponseOptions;
	var enums_1 = __webpack_require__(58);
	exports.ReadyState = enums_1.ReadyState;
	exports.RequestMethod = enums_1.RequestMethod;
	exports.ResponseType = enums_1.ResponseType;
	var headers_1 = __webpack_require__(103);
	exports.Headers = headers_1.Headers;
	var http_2 = __webpack_require__(317);
	exports.Http = http_2.Http;
	exports.Jsonp = http_2.Jsonp;
	var interfaces_2 = __webpack_require__(104);
	exports.Connection = interfaces_2.Connection;
	exports.ConnectionBackend = interfaces_2.ConnectionBackend;
	exports.XSRFStrategy = interfaces_2.XSRFStrategy;
	var static_request_1 = __webpack_require__(318);
	exports.Request = static_request_1.Request;
	var static_response_1 = __webpack_require__(203);
	exports.Response = static_response_1.Response;
	var url_search_params_1 = __webpack_require__(204);
	exports.QueryEncoder = url_search_params_1.QueryEncoder;
	exports.URLSearchParams = url_search_params_1.URLSearchParams;
	/**
	 * Provides a basic set of injectables to use the {@link Http} service in any application.
	 *
	 * The `HTTP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/snj7Nv?p=preview))
	 *
	 * ```
	 * import {Component} from '@angular/core';
	 * import {bootstrap} from '@angular/platform-browser/browser';
	 * import {NgFor} from '@angular/common';
	 * import {HTTP_PROVIDERS, Http} from '@angular/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [HTTP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ngFor="let person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Object[];
	 *   constructor(http:Http) {
	 *     http.get('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     });
	 *   }
	 *   active:boolean = false;
	 *   toggleActiveState() {
	 *     this.active = !this.active;
	 *   }
	 * }
	 *
	 * bootstrap(App)
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * The primary public API included in `HTTP_PROVIDERS` is the {@link Http} class.
	 * However, other providers required by `Http` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `HTTP_PROVIDERS` include:
	 *  * {@link Http}
	 *  * {@link XHRBackend}
	 *  * {@link XSRFStrategy} - Bound to {@link CookieXSRFStrategy} class (see below)
	 *  * `BrowserXHR` - Private factory to create `XMLHttpRequest` instances
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `HTTP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/aCMEXi?p=preview))
	 *
	 * ```
	 * import {provide} from '@angular/core';
	 * import {bootstrap} from '@angular/platform-browser/browser';
	 * import {HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from '@angular/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link XHRBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/7LWALD?p=preview))
	 *
	 * ```
	 * import {provide} from '@angular/core';
	 * import {bootstrap} from '@angular/platform-browser/browser';
	 * import {HTTP_PROVIDERS, Http, Response, XHRBackend} from '@angular/http';
	 * import {MockBackend} from '@angular/http/testing';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 *
	 * var injector = Injector.resolveAndCreate([
	 *   HTTP_PROVIDERS,
	 *   MockBackend,
	 *   {provide: XHRBackend, useExisting: MockBackend}
	 * ]);
	 * var http = injector.get(Http);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   }
	 * });
	 *
	 * http.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 *
	 * `XSRFStrategy` allows customizing how the application protects itself against Cross Site Request
	 * Forgery (XSRF) attacks. By default, Angular will look for a cookie called `'XSRF-TOKEN'`, and set
	 * an HTTP request header called `'X-XSRF-TOKEN'` with the value of the cookie on each request,
	 * allowing the server side to validate that the request comes from its own front end.
	 *
	 * Applications can override the names used by configuring a different `XSRFStrategy` instance. Most
	 * commonly, applications will configure a `CookieXSRFStrategy` with different cookie or header
	 * names, but if needed, they can supply a completely custom implementation.
	 *
	 * See the security documentation for more information.
	 *
	 * ### Example
	 *
	 * ```
	 * import {provide} from '@angular/core';
	 * import {bootstrap} from '@angular/platform-browser/browser';
	 * import {HTTP_PROVIDERS, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';
	 *
	 * bootstrap(
	 *     App,
	 *     [HTTP_PROVIDERS, {provide: XSRFStrategy,
	 *         useValue: new CookieXSRFStrategy('MY-XSRF-COOKIE-NAME', 'X-MY-XSRF-HEADER-NAME')}])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * @experimental
	 */
	exports.HTTP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    { provide: http_1.Http, useFactory: httpFactory, deps: [xhr_backend_1.XHRBackend, base_request_options_1.RequestOptions] },
	    browser_xhr_1.BrowserXhr,
	    { provide: base_request_options_1.RequestOptions, useClass: base_request_options_1.BaseRequestOptions },
	    { provide: base_response_options_1.ResponseOptions, useClass: base_response_options_1.BaseResponseOptions },
	    xhr_backend_1.XHRBackend,
	    { provide: interfaces_1.XSRFStrategy, useValue: new xhr_backend_1.CookieXSRFStrategy() },
	];
	/**
	 * @experimental
	 */
	function httpFactory(xhrBackend, requestOptions) {
	    return new http_1.Http(xhrBackend, requestOptions);
	}
	exports.httpFactory = httpFactory;
	/**
	 * See {@link HTTP_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.HTTP_BINDINGS = exports.HTTP_PROVIDERS;
	/**
	 * Provides a basic set of providers to use the {@link Jsonp} service in any application.
	 *
	 * The `JSONP_PROVIDERS` should be included either in a component's injector,
	 * or in the root injector when bootstrapping an application.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/vmeN4F?p=preview))
	 *
	 * ```
	 * import {Component} from '@angular/core';
	 * import {NgFor} from '@angular/common';
	 * import {JSONP_PROVIDERS, Jsonp} from '@angular/http';
	 *
	 * @Component({
	 *   selector: 'app',
	 *   providers: [JSONP_PROVIDERS],
	 *   template: `
	 *     <div>
	 *       <h1>People</h1>
	 *       <ul>
	 *         <li *ngFor="let person of people">
	 *           {{person.name}}
	 *         </li>
	 *       </ul>
	 *     </div>
	 *   `,
	 *   directives: [NgFor]
	 * })
	 * export class App {
	 *   people: Array<Object>;
	 *   constructor(jsonp:Jsonp) {
	 *     jsonp.request('people.json').subscribe(res => {
	 *       this.people = res.json();
	 *     })
	 *   }
	 * }
	 * ```
	 *
	 * The primary public API included in `JSONP_PROVIDERS` is the {@link Jsonp} class.
	 * However, other providers required by `Jsonp` are included,
	 * which may be beneficial to override in certain cases.
	 *
	 * The providers included in `JSONP_PROVIDERS` include:
	 *  * {@link Jsonp}
	 *  * {@link JSONPBackend}
	 *  * `BrowserJsonp` - Private factory
	 *  * {@link RequestOptions} - Bound to {@link BaseRequestOptions} class
	 *  * {@link ResponseOptions} - Bound to {@link BaseResponseOptions} class
	 *
	 * There may be cases where it makes sense to extend the base request options,
	 * such as to add a search string to be appended to all URLs.
	 * To accomplish this, a new provider for {@link RequestOptions} should
	 * be added in the same injector as `JSONP_PROVIDERS`.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/TFug7x?p=preview))
	 *
	 * ```
	 * import {provide} from '@angular/core';
	 * import {bootstrap} from '@angular/platform-browser/browser';
	 * import {JSONP_PROVIDERS, BaseRequestOptions, RequestOptions} from '@angular/http';
	 *
	 * class MyOptions extends BaseRequestOptions {
	 *   search: string = 'coreTeam=true';
	 * }
	 *
	 * bootstrap(App, [JSONP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}])
	 *   .catch(err => console.error(err));
	 * ```
	 *
	 * Likewise, to use a mock backend for unit tests, the {@link JSONPBackend}
	 * provider should be bound to {@link MockBackend}.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/HDqZWL?p=preview))
	 *
	 * ```
	 * import {provide, Injector} from '@angular/core';
	 * import {JSONP_PROVIDERS, Jsonp, Response, JSONPBackend} from '@angular/http';
	 * import {MockBackend} from '@angular/http/testing';
	 *
	 * var people = [{name: 'Jeff'}, {name: 'Tobias'}];
	 * var injector = Injector.resolveAndCreate([
	 *   JSONP_PROVIDERS,
	 *   MockBackend,
	 *   {provide: JSONPBackend, useExisting: MockBackend}
	 * ]);
	 * var jsonp = injector.get(Jsonp);
	 * var backend = injector.get(MockBackend);
	 *
	 * // Listen for any new requests
	 * backend.connections.observer({
	 *   next: connection => {
	 *     var response = new Response({body: people});
	 *     setTimeout(() => {
	 *       // Send a response to the request
	 *       connection.mockRespond(response);
	 *     });
	 *   }
	 * });

	 * jsonp.get('people.json').observer({
	 *   next: res => {
	 *     // Response came from mock backend
	 *     console.log('first person', res.json()[0].name);
	 *   }
	 * });
	 * ```
	 *
	 * @experimental
	 */
	exports.JSONP_PROVIDERS = [
	    // TODO(pascal): use factory type annotations once supported in DI
	    // issue: https://github.com/angular/angular/issues/3183
	    { provide: http_1.Jsonp, useFactory: jsonpFactory, deps: [jsonp_backend_1.JSONPBackend, base_request_options_1.RequestOptions] },
	    browser_jsonp_1.BrowserJsonp,
	    { provide: base_request_options_1.RequestOptions, useClass: base_request_options_1.BaseRequestOptions },
	    { provide: base_response_options_1.ResponseOptions, useClass: base_response_options_1.BaseResponseOptions },
	    { provide: jsonp_backend_1.JSONPBackend, useClass: jsonp_backend_1.JSONPBackend_ },
	];
	function jsonpFactory(jsonpBackend, requestOptions) {
	    return new http_1.Jsonp(jsonpBackend, requestOptions);
	}
	/**
	 * See {@link JSONP_PROVIDERS} instead.
	 *
	 * @deprecated
	 */
	exports.JSON_BINDINGS = exports.JSONP_PROVIDERS;
	//# sourceMappingURL=http.js.map

/***/ },

/***/ 486:
/***/ function(module, exports) {

	module.exports = "#wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  background-color: #247094;\n  color: #fff;\n}\n\na {\n  color: #37AAE0;\n}\n\n#main {\n  display: flex;\n  flex-grow: 1;\n}\n\naside,\n#page {\n  overflow: auto;\n  margin: 0 12px;\n  margin-top: 12px;\n}\n\naside {\n  width: 200px;\n}\n\n#page {\n  flex-grow: 1;\n}"

/***/ },

/***/ 487:
/***/ function(module, exports) {

	module.exports = "<div id=\"wrapper\">\n\n  <header>\n    <h1>{{title}}</h1>\n    <div class=\"progress\" *ngIf=\"loadedCount < totalLoadCount\">\n      <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"loadPercent + '%'\">\n        {{ loadPercent }}%\n      </div>\n    </div>\n  </header>\n\n  <div id=\"main\">\n\n    <aside>\n      <nav>\n        <ul class=\"nav nav-pills nav-stacked\">\n          <li>Core Example</li>\n          <li role=\"presentation\"><a href=\"#simple-usage\">Simple Usage</a></li>\n          <li role=\"presentation\"><a href=\"#without-service\">Without Service</a></li>\n          <!--<li role=\"presentation\"><a href=\"#window-control\">Window Control</a></li>-->\n          <li role=\"presentation\"><a href=\"#access-flow\">Access Flow</a></li>\n          <li role=\"presentation\"><a href=\"#multi-floating-window\">Multi Floaing Window</a></li>\n          <li>Core API</li>\n          <li role=\"presentation\"><a href=\"#core-api-window-view-service\">WindowViewService</a></li>\n          <li role=\"presentation\"><a href=\"#core-api-window-view-layer-service\">WindowViewLayerService</a></li>\n          <li role=\"presentation\"><a href=\"#core-api-window-view-can-close\">WindowViewCanClose</a></li>\n          <li role=\"presentation\"><a href=\"#core-api-window-view-has-result\">WindowViewHasResult</a></li>\n          <li role=\"presentation\"><a href=\"#core-api-window-view-container\">WindowViewContainerComponent</a></li>\n\n          <hr>\n\n          <li>Components Example</li>\n          <li role=\"presentation\"><a href=\"#confirm-dialog-usage\">Confirm Dialog Usage</a></li>\n          <li>Components API</li>\n          <li role=\"presentation\"><a href=\"#components-api-confirm-dialog\">CondirmDialogComponent</a></li>\n          <li>Others</li>\n          <li role=\"presentation\"><a href=\"https://github.com/yujuiting/ng2-window-view\">Github</a></li>\n        </ul>\n      </nav>\n    </aside>\n\n    <div id=\"page\" class=\"container\">\n\n      <section id=\"simple-usage\" class=\"jumbotron\">\n        <h2>Simple Usage</h2>\n\n        <h3>Example</h3>\n        <app-simple-usage></app-simple-usage>\n\n        <h3>Code</h3>\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"\n              *ngFor=\"let filename of fileList('simple-usage')\"\n              [class.active]=\"simpleUsageFilename === filename\">\n            <a (click)=\"simpleUsageFilename = filename\">{{ filename }}</a>\n          </li>\n        </ul>\n        <pre [class]=\"'language-' + files['simple-usage'][simpleUsageFilename]?.type\"\n             [innerHTML]=\"files['simple-usage'][simpleUsageFilename]?.html\"></pre>\n      </section>\n\n      <section id=\"without-service\" class=\"jumbotron\">\n        <h2>Without Service</h2>\n\n        <h3>Example</h3>\n        <app-without-service></app-without-service>\n\n        <h3>Code</h3>\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"\n              *ngFor=\"let filename of fileList('without-service')\"\n              [class.active]=\"withoutServiceFilename === filename\">\n            <a (click)=\"withoutServiceFilename = filename\">{{ filename }}</a>\n          </li>\n        </ul>\n        <pre [class]=\"'language-' + files['without-service'][withoutServiceFilename]?.type\"\n             [innerHTML]=\"files['without-service'][withoutServiceFilename]?.html\"></pre>\n      </section>\n\n      <!--<section id=\"window-control\" class=\"jumbotron\">\n        <h2>Window Control</h2>\n\n        <h3>Example</h3>\n        <window-control></window-control>\n\n        <h3>Code</h3>\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"\n              *ngFor=\"let filename of fileList('window-control')\"\n              [class.active]=\"windowControlFilename === filename\">\n            <a (click)=\"windowControlFilename = filename\">{{ filename }}</a>\n          </li>\n        </ul>\n        <pre [class]=\"'language-' + files['window-control'][windowControlFilename]?.type\"\n             [innerHTML]=\"files['window-control'][windowControlFilename]?.html\"></pre>\n      </section>-->\n\n      <section id=\"access-flow\" class=\"jumbotron\">\n        <h2>Access Flow</h2>\n\n        <h3>Example</h3>\n        <app-access-flow></app-access-flow>\n\n        <h3>Code</h3>\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"\n              *ngFor=\"let filename of fileList('access-flow')\"\n              [class.active]=\"accessFlowFilename === filename\">\n            <a (click)=\"accessFlowFilename = filename\">{{ filename }}</a>\n          </li>\n        </ul>\n        <pre [class]=\"'language-' + files['access-flow'][accessFlowFilename]?.type\"\n             [innerHTML]=\"files['access-flow'][accessFlowFilename]?.html\"></pre>\n      </section>\n\n      <section id=\"multi-floating-window\" class=\"jumbotron\">\n        <h2>Multi FLoating Window</h2>\n\n        <h3>Example</h3>\n        <app-multi-floating-window></app-multi-floating-window>\n\n        <h3>Code</h3>\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"\n              *ngFor=\"let filename of fileList('multi-floating-window')\"\n              [class.active]=\"MultiFloatingWindowFilename === filename\">\n            <a (click)=\"MultiFloatingWindowFilename = filename\">{{ filename }}</a>\n          </li>\n        </ul>\n        <pre [class]=\"'language-' + files['multi-floating-window']?.type\"\n             [innerHTML]=\"files['multi-floating-window'][MultiFloatingWindowFilename]?.html\"></pre>\n      </section>\n\n      <section id=\"core-api\" class=\"jumbotron\">\n        <h2>Core API</h2>\n\n        <h3 id=\"core-api-window-view-service\">WindowViewService</h3>\n        <pre [class]=\"'language-' + files['core-api']['window-view.service.d.ts']?.type\"\n             [innerHTML]=\"files['core-api']['window-view.service.d.ts']?.html\"></pre>\n\n        <h3 id=\"core-api-window-view-layer-service\">WindowViewLayerService</h3>\n        <pre [class]=\"'language-' + files['core-api']['window-view-layer.service.d.ts']?.type\"\n             [innerHTML]=\"files['core-api']['window-view-layer.service.d.ts']?.html\"></pre>\n\n        <h3 id=\"core-api-window-view-can-close\">WindowViewCanClose</h3>\n        <pre [class]=\"'language-' + files['core-api']['window-view-can-close.d.ts']?.type\"\n             [innerHTML]=\"files['core-api']['window-view-can-close.d.ts']?.html\"></pre>\n        \n        <h3 id=\"core-api-window-view-has-result\">WindowViewHasResult</h3>\n        <pre [class]=\"'language-' + files['core-api']['window-view-has-result.d.ts']?.type\"\n             [innerHTML]=\"files['core-api']['window-view-has-result.d.ts']?.html\"></pre>\n\n        <h3 id=\"core-api-window-view-container\">WindowViewContainer</h3>\n        <pre [class]=\"'language-' + files['core-api']['window-view-container.component.d.ts']?.type\"\n             [innerHTML]=\"files['core-api']['window-view-container.component.d.ts']?.html\"></pre>\n\n      </section>\n\n      <hr>\n\n      <section id=\"confirm-dialog-usage\" class=\"jumbotron\">\n        <h2>Confirm Dialog</h2>\n\n        <h3>Example</h3>\n        <app-confirm-dialog-usage></app-confirm-dialog-usage>\n\n        <h3>Code</h3>\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\"\n              *ngFor=\"let filename of fileList('confirm-dialog-usage')\"\n              [class.active]=\"confirmDialogUsageFilename === filename\">\n            <a (click)=\"confirmDialogUsageFilename = filename\">{{ filename }}</a>\n          </li>\n        </ul>\n        <pre [class]=\"'language-' + files['confirm-dialog-usage']?.type\"\n             [innerHTML]=\"files['confirm-dialog-usage'][confirmDialogUsageFilename]?.html\"></pre>\n      </section>\n\n      <section id=\"components-api\" class=\"jumbotron\">\n        <h2>Components API</h2>\n\n        <h3 id=\"components-api-confirm-dialog\">ConfirmDialogComponent</h3>\n        <pre [class]=\"'language-' + files['components-api']['confirm-dialog.component.d.ts']?.type\"\n             [innerHTML]=\"files['components-api']['confirm-dialog.component.d.ts']?.html\"></pre>\n\n      </section>\n\n    </div>\n\n  </div>\n\n</div>"

/***/ },

/***/ 488:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"openWindow()\">Open Window</button>\n<div *ngIf=\"!!username\">\n  Hello, {{ username }}!\n</div>\n<window-view-outlet></window-view-outlet>"

/***/ },

/***/ 489:
/***/ function(module, exports) {

	module.exports = "<window-view-container [heading]=\"title\" size=\"s\">\n  <div class=\"form-group\">\n    <label>username?</label>\n    <input class=\"form-control\" [(ngModel)]=\"username\" type=\"string\" placeholder=\"Please enter your username\">\n    <div class=\"alert alert-danger\" *ngIf=\"!!alert\">{{ alert }}</div>\n  </div>\n\n  <div panel-footer>\n    <button class=\"btn btn-default\" (click)=\"submit()\">Submit</button>\n  </div>\n</window-view-container>"

/***/ },

/***/ 490:
/***/ function(module, exports) {

	module.exports = "<window-view-container [heading]=\"title\"\n                       size=\"s\"\n                       [floating]=\"floating\"\n                       [showBackground]=\"showBackground\"\n                       (close)=\"closeWindow()\">\n</window-view-container>"

/***/ },

/***/ 491:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"openWindow()\">Open Window</button>\n\n<window-view-outlet></window-view-outlet>"

/***/ },

/***/ 492:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"openWindow()\">Open Window</button>\n\n<div class=\"form-group\">\n  <label>Title</label>\n  <input class=\"form-control\" [(ngModel)]=\"title\" type=\"string\">\n</div>\n\n<div class=\"checkbox\">\n  <label>\n    <input type=\"checkbox\" [(ngModel)]=\"isFloatingWindow\">\n    Floating window\n  </label>\n</div>\n\n<div class=\"checkbox\">\n  <label>\n    <input type=\"checkbox\" [(ngModel)]=\"showBackground\">\n    Show background\n  </label>\n</div>\n\n<div class=\"form-group\">\n  <label>Window size</label>\n  <select class=\"form-control\" [(ngModel)]=\"windowSize\">\n    <option value=\"small\">small</option>\n    <option value=\"middle\">middle</option>\n    <option value=\"large\">large</option>\n    <option value=\"relative-small\">relative-small</option>\n    <option value=\"relative-middle\">relative-middle</option>\n    <option value=\"relative-large\">relative-large</option>\n  </select>\n</div>\n\n<div class=\"form-group\">\n  <label>Panel class</label>\n  <select class=\"form-control\" [(ngModel)]=\"panelClass\">\n    <option value=\"panel-default\">panel-default</option>\n    <option value=\"panel-primary\">panel-primary</option>\n    <option value=\"panel-success\">panel-success</option>\n    <option value=\"panel-info\">panel-info</option>\n    <option value=\"panel-warning\">panel-warning</option>\n    <option value=\"panel-danger\">panel-danger</option>\n  </select>\n</div>\n<window-view-outlet></window-view-outlet>"

/***/ },

/***/ 493:
/***/ function(module, exports) {

	module.exports = "<window-view-container [heading]=\"title\"\n                       [size]=\"windowSize\"\n                       [floating]=\"isFloatingWindow\"\n                       [showBackground]=\"showBackground\"\n                       [panelClass]=\"panelClass\">\n  It's a window!\n\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" [(ngModel)]=\"title\" type=\"string\">\n  </div>\n\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" [(ngModel)]=\"isFloatingWindow\">\n      Floating window\n    </label>\n  </div>\n\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" [(ngModel)]=\"showBackground\">\n      Show background\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Window size</label>\n    <select class=\"form-control\" [(ngModel)]=\"windowSize\">\n      <option value=\"small\">small</option>\n      <option value=\"middle\">middle</option>\n      <option value=\"large\">large</option>\n      <option value=\"relative-small\">relative-small</option>\n      <option value=\"relative-middle\">relative-middle</option>\n      <option value=\"relative-large\">relative-large</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Panel class</label>\n    <select class=\"form-control\" [(ngModel)]=\"panelClass\">\n      <option value=\"panel-default\">panel-default</option>\n      <option value=\"panel-primary\">panel-primary</option>\n      <option value=\"panel-success\">panel-success</option>\n      <option value=\"panel-info\">panel-info</option>\n      <option value=\"panel-warning\">panel-warning</option>\n      <option value=\"panel-danger\">panel-danger</option>\n    </select>\n  </div>\n\n  <button class=\"btn btn-default\" (click)=\"openWindow()\">Open anothor window</button>\n</window-view-container>"

/***/ },

/***/ 494:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"showWindow = true\">Open Window</button>\n\n<window-view-container *ngIf=\"showWindow\"\n                       (close)=\"showWindow = false\">\n  No Service!!\n\n</window-view-container>"

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(522));
	

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Subject_1 = __webpack_require__(24);
	var _1 = __webpack_require__(63);
	var ConfirmDialogComponent = (function () {
	    function ConfirmDialogComponent() {
	        this.title = 'Confirm';
	        this.confirmString = 'Ok';
	        this.denyString = 'Cancel';
	        this.size = 's';
	        this.result = new core_1.EventEmitter();
	        this.dismiss = new core_1.EventEmitter();
	        this._result$ = new Subject_1.Subject();
	    }
	    Object.defineProperty(ConfirmDialogComponent.prototype, "result$", {
	        get: function () { return this._result$.asObservable(); },
	        enumerable: true,
	        configurable: true
	    });
	    ConfirmDialogComponent.prototype.confirm = function () {
	        this._result$.next(true);
	        this._result$.complete();
	        this.result.emit({ target: this, result: true });
	    };
	    ConfirmDialogComponent.prototype.deny = function () {
	        this._result$.next(false);
	        this._result$.complete();
	        this.result.emit({ target: this, result: false });
	    };
	    ConfirmDialogComponent.prototype.onClose = function () {
	        this._result$.complete();
	        this.dismiss.emit({ target: this });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ConfirmDialogComponent.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ConfirmDialogComponent.prototype, "confirmString", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ConfirmDialogComponent.prototype, "denyString", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ConfirmDialogComponent.prototype, "content", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ConfirmDialogComponent.prototype, "size", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ConfirmDialogComponent.prototype, "result", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ConfirmDialogComponent.prototype, "dismiss", void 0);
	    __decorate([
	        core_1.ViewChild(_1.WindowViewContainerComponent), 
	        __metadata('design:type', _1.WindowViewContainerComponent)
	    ], ConfirmDialogComponent.prototype, "windowViewContainer", void 0);
	    ConfirmDialogComponent = __decorate([
	        core_1.Component({
	            selector: 'confirm-dialog',
	            template: `
	              <window-view-container [heading]="title"
	                                     [size]="size"
	                                     (close)="onClose()">

	                <div class="confirm-dialog-content">
	                  {{ content }}
	                  <ng-content></ng-content>
	                </div>

	                <div panel-footer class="confirm-dialog-button-set">
	                  <button class="btn btn-primary" (click)="confirm()">
	                    {{ confirmString }}
	                  </button>

	                  <button class="btn btn-default" (click)="deny()">
	                    {{ denyString }}
	                  </button>
	                </div>

	              </window-view-container>
	            `,
	            styles: [`
	              .confirm-dialog-content {
	                margin: 12px;
	              }
	              .confirm-dialog-button-set {
	                margin: 0 auto;
	                text-align: center;
	              }
	            `],
	            directives: [_1.WindowViewContainerComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ConfirmDialogComponent);
	    return ConfirmDialogComponent;
	}());
	exports.ConfirmDialogComponent = ConfirmDialogComponent;


/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(521));
	

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var window_view_container_component_1 = __webpack_require__(524);
	exports.WindowViewContainerComponent = window_view_container_component_1.WindowViewContainerComponent;
	

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(1);
	var window_view_service_1 = __webpack_require__(222);
	var window_view_layer_service_1 = __webpack_require__(345);
	var WindowViewContainerComponent = (function () {
	    function WindowViewContainerComponent(windowView, windowViewLayer) {
	        this.windowView = windowView;
	        this.windowViewLayer = windowViewLayer;
	        /**
	         * Window title.
	         *
	         * Default: 'Untitled Window'
	         */
	        this.heading = 'Untitled Window';
	        /**
	         * Possible option:
	         *  small, alias 's'
	         *  middle, alias 'm'
	         *  large, alias 'l'
	         *  relative-small, alias 'rs'
	         *  relative-middle, alias 'rm'
	         *  relative-large, alias 'rl'
	         *
	         * Default: 'm'
	         */
	        this.size = 'M';
	        /**
	         * Prevent display transparent background.
	         *
	         * Default: true
	         */
	        this.showBackground = true;
	        /**
	         * Floating window, can be drag.
	         *
	         * Default: false
	         */
	        this.floating = false;
	        /**
	         * Panel class.
	         *
	         * Default: 'panel-default'
	         */
	        this.panelClass = 'panel-default';
	        this.close = new core_1.EventEmitter();
	        this.zIndex = 10;
	        this.top = 0;
	        this.left = 0;
	        this.isDragging = false;
	        this.draggingRelativeLocation = { x: 0, y: 0 };
	    }
	    Object.defineProperty(WindowViewContainerComponent.prototype, "position", {
	        get: function () { return { x: this.left, y: this.top }; },
	        set: function (value) {
	            this.top = value.y;
	            this.left = value.x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WindowViewContainerComponent.prototype, "hideContainer", {
	        get: function () { return this.floating && !!this.windowViewLayer; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WindowViewContainerComponent.prototype, "sizeClass", {
	        get: function () {
	            switch (this.size.toLowerCase()) {
	                case 's':
	                case 'small': return 'size-small';
	                case 'm':
	                case 'middle': return 'size-middle';
	                case 'l':
	                case 'large': return 'size-large';
	                case 'rs':
	                case 'relative-small': return 'size-relative-small';
	                case 'rm':
	                case 'relative-middle': return 'size-relative-middle';
	                case 'rl':
	                case 'relative-large': return 'size-relative-large';
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    WindowViewContainerComponent.prototype.ngOnInit = function () {
	        if (typeof this.size !== 'string') {
	            throw new Error('[WindowViewContainerComponent] property `size` has to be string.');
	        }
	        if (this.windowViewLayer) {
	            this.windowViewLayer.add(this);
	        }
	    };
	    WindowViewContainerComponent.prototype.ngOnDestroy = function () {
	        if (this.windowViewLayer) {
	            this.windowViewLayer.remove(this);
	        }
	    };
	    WindowViewContainerComponent.prototype.closeWindow = function () {
	        this.close.emit({ target: this });
	        if (this.floating && this.windowViewLayer) {
	            return;
	        }
	        if (this.windowView) {
	            this.windowView.popWindow();
	            return;
	        }
	    };
	    WindowViewContainerComponent.prototype.onClickWindow = function () {
	        if (this.floating && this.windowViewLayer) {
	            this.windowViewLayer.bringToTop(this);
	        }
	    };
	    WindowViewContainerComponent.prototype.onClickBackground = function ($event) {
	        if ($event.currentTarget === $event.target) {
	            this.closeWindow();
	        }
	    };
	    WindowViewContainerComponent.prototype.onMouseDown = function (e) {
	        if (this.floating) {
	            this.isDragging = true;
	            this.draggingRelativeLocation.x = e.offsetX;
	            this.draggingRelativeLocation.y = e.offsetY;
	        }
	    };
	    WindowViewContainerComponent.prototype.onMouseUp = function (e) {
	        this.isDragging = false;
	    };
	    WindowViewContainerComponent.prototype.onMouseMove = function (e) {
	        if (this.isDragging) {
	            this.left = e.clientX - this.draggingRelativeLocation.x;
	            this.top = e.clientY - this.draggingRelativeLocation.y;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], WindowViewContainerComponent.prototype, "heading", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], WindowViewContainerComponent.prototype, "size", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], WindowViewContainerComponent.prototype, "showBackground", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], WindowViewContainerComponent.prototype, "floating", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], WindowViewContainerComponent.prototype, "panelClass", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], WindowViewContainerComponent.prototype, "close", void 0);
	    WindowViewContainerComponent = __decorate([
	        core_1.Component({
	            selector: 'window-view-container',
	            template: `
	              <div class="window-container"
	                   [class.floating]="floating"
	                   [class.fixed]="!floating"
	                   [class.hide-container]="hideContainer"
	                   [style.z-index]="zIndex">
	                <div class="window-background" (click)="onClickBackground($event)" *ngIf="showBackground"></div>
	                <div class="panel {{ panelClass }} {{ sizeClass }}"
	                     [style.top]="top + 'px'"
	                     [style.left]="left + 'px'"
	                     (click)="onClickWindow()">
	                  <div class="panel-heading"
	                       (mousedown)="onMouseDown($event)"
	                       (mouseup)="onMouseUp($event)"
	                       (mouseleave)="onMouseUp($event)"
	                       (mousemove)="onMouseMove($event)">
	                    {{ heading }}
	                    <ng-content select="[panel-heading]"></ng-content>
	                    <a class="btn-close" (click)="closeWindow()"><span class="glyphicon glyphicon-remove pull-right"></span></a>
	                  </div>
	                  <div class="panel-body">
	                    <ng-content></ng-content>
	                  </div>
	                  <div class="panel-footer">
	                    <ng-content select="[panel-footer]"></ng-content>
	                  </div>
	                </div>
	              </div>
	            `,
	            styles: [`
	              .window-container,
	              .window-background {
	                position: fixed;
	                overflow: auto;
	                width: 100%;
	                height: 100%;
	                top: 0;
	                left: 0;
	              }

	              .window-container.hide-container {
	                width: 0;
	                height: 0;
	              }

	              .window-background {
	                background-color: rgba(0,0,0,0.6);
	                z-index: -1;
	              }

	              .window-container.fixed .panel {
	                min-width: 20%;
	                margin: 4% auto;
	              }

	              .window-container.floating .panel {
	                min-width: 20%;
	                position: fixed;
	                box-shadow: 0px 6px 24px grey;
	              }

	              .panel.size-relative-large { width: 80%; }
	              .panel.size-relative-middle { width: 60%; }
	              .panel.size-relative-small { width: 40%; }
	              .panel.size-large { width: 1080px; }
	              .panel.size-middle { width: 720px; }
	              .panel.size-small { width: 360px; }

	              .panel-heading {
	                text-align: center;
	              }

	              .btn-close {
	                cursor: auto;
	              }

	              .window-container.floating .panel-heading {
	                cursor: move;
	              }
	            `]
	        }),
	        __param(0, core_1.Optional()),
	        __param(1, core_1.Optional()), 
	        __metadata('design:paramtypes', [window_view_service_1.WindowViewService, window_view_layer_service_1.WindowViewLayerService])
	    ], WindowViewContainerComponent);
	    return WindowViewContainerComponent;
	}());
	exports.WindowViewContainerComponent = WindowViewContainerComponent;


/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(526));
	

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var window_view_service_1 = __webpack_require__(222);
	var WindowViewOutletComponent = (function () {
	    function WindowViewOutletComponent(viewContainerRef, windowView) {
	        this.viewContainerRef = viewContainerRef;
	        this.windowView = windowView;
	    }
	    WindowViewOutletComponent.prototype.ngAfterViewInit = function () {
	        this.windowView.setOutlet(this.viewContainerRef);
	    };
	    WindowViewOutletComponent = __decorate([
	        core_1.Component({
	            selector: 'window-view-outlet',
	            template: ''
	        }), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, window_view_service_1.WindowViewService])
	    ], WindowViewOutletComponent);
	    return WindowViewOutletComponent;
	}());
	exports.WindowViewOutletComponent = WindowViewOutletComponent;
	

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(311);
	var shared_1 = __webpack_require__(699);
	var AppComponent = (function () {
	    function AppComponent(http) {
	        this.http = http;
	        this.title = 'ng2-window-view example';
	        this.files = {};
	        // ui status
	        this.totalLoadCount = 0;
	        this.loadedCount = 0;
	        this.loadAssets();
	    }
	    Object.defineProperty(AppComponent.prototype, "loadPercent", {
	        get: function () { return Math.floor(this.loadedCount / this.totalLoadCount * 100); },
	        enumerable: true,
	        configurable: true
	    });
	    AppComponent.prototype.loadAssets = function () {
	        this.loadFile('simple-usage', 'examples/simple-usage', 'simple-usage.component.ts');
	        this.loadFile('simple-usage', 'examples/simple-usage', 'simple-usage.component.html');
	        this.loadFile('simple-usage', 'examples/simple-window', 'simple-window.component.ts');
	        this.loadFile('simple-usage', 'examples/simple-window', 'simple-window.component.html');
	        this.simpleUsageFilename = 'simple-usage.component.ts';
	        this.loadFile('without-service', 'examples/without-service', 'without-service.component.ts');
	        this.loadFile('without-service', 'examples/without-service', 'without-service.component.html');
	        this.withoutServiceFilename = 'without-service.component.ts';
	        this.loadFile('access-flow', 'examples/access-flow', 'access-flow.component.ts');
	        this.loadFile('access-flow', 'examples/access-flow', 'access-flow.component.html');
	        this.loadFile('access-flow', 'examples/checked-window', 'checked-window.component.ts');
	        this.loadFile('access-flow', 'examples/checked-window', 'checked-window.component.html');
	        this.accessFlowFilename = 'access-flow.component.ts';
	        this.loadFile('multi-floating-window', 'examples/multi-floating-window', 'multi-floating-window.component.ts');
	        this.loadFile('multi-floating-window', 'examples/multi-floating-window', 'multi-floating-window.component.html');
	        this.loadFile('multi-floating-window', 'examples/simple-window', 'simple-window.component.ts');
	        this.loadFile('multi-floating-window', 'examples/simple-window', 'simple-window.component.html');
	        this.MultiFloatingWindowFilename = 'multi-floating-window.component.ts';
	        this.loadFile('confirm-dialog-usage', 'examples/confirm-dialog-usage', 'confirm-dialog-usage.component.ts');
	        this.confirmDialogUsageFilename = 'confirm-dialog-usage.component.ts';
	        this.loadFile('core-api', 'examples/api/core', 'window-view.service.d.ts');
	        this.loadFile('core-api', 'examples/api/core', 'window-view-layer.service.d.ts');
	        this.loadFile('core-api', 'examples/api/core', 'window-view-can-close.d.ts');
	        this.loadFile('core-api', 'examples/api/core', 'window-view-has-result.d.ts');
	        this.loadFile('core-api', 'examples/api/core/window-view-container', 'window-view-container.component.d.ts');
	        this.loadFile('components-api', 'examples/api/components/confirm-dialog', 'confirm-dialog.component.d.ts');
	    };
	    AppComponent.prototype.fileList = function (group) {
	        return Object.keys(this.files[group] || {});
	    };
	    AppComponent.prototype.loadFile = function (group, dir, filename) {
	        var _this = this;
	        this.totalLoadCount++;
	        this.files[group] = this.files[group] || {};
	        var language = 'typescript';
	        if (!!/html$/.test(filename)) {
	            language = 'html';
	        }
	        var loadFile = this.http.get(dir + "/" + filename)
	            .subscribe(function (response) {
	            var file = response.text().replace('../../../..', 'ng2-window-view');
	            _this.files[group][filename] = {
	                html: Prism.highlight(file, Prism.languages[language]),
	                type: language
	            };
	            _this.loadedCount++;
	        }, function (error) { return console.warn(error); }, function () { return loadFile.unsubscribe(); });
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-root',
	            template: __webpack_require__(487),
	            styles: [__webpack_require__(486)],
	            directives: [
	                shared_1.AccessFlowComponent,
	                shared_1.MultiFloatingWindowComponent,
	                shared_1.SimpleUsageComponent,
	                shared_1.WithoutServiceComponent,
	                shared_1.ConfirmDialogUsageComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 691:
/***/ function(module, exports) {

	// The file for the current environment will overwrite this one during build
	// Different environments can be found in config/environment.{dev|prod}.ts
	// The build system defaults to the dev environment
	"use strict";
	exports.environment = {
	    production: false
	};
	

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(691));
	__export(__webpack_require__(690));
	

/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var _1 = __webpack_require__(63);
	var checked_window_1 = __webpack_require__(376);
	var AccessFlowComponent = (function () {
	    function AccessFlowComponent(windowView) {
	        this.windowView = windowView;
	    }
	    AccessFlowComponent.prototype.openWindow = function () {
	        var _this = this;
	        this.windowView.pushWindow(checked_window_1.CheckedWindowComponent)
	            .then(function (componentRef) {
	            var checkedWindow = componentRef.instance;
	            var waitResult = checkedWindow.result$.subscribe(function (username) { return _this.username = username; }, function () { return delete _this.username; }, function () { return waitResult.unsubscribe(); });
	        });
	    };
	    AccessFlowComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-access-flow',
	            template: __webpack_require__(488),
	            directives: [_1.WindowViewOutletComponent],
	            providers: [_1.WindowViewService]
	        }), 
	        __metadata('design:paramtypes', [_1.WindowViewService])
	    ], AccessFlowComponent);
	    return AccessFlowComponent;
	}());
	exports.AccessFlowComponent = AccessFlowComponent;
	

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(693));
	

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var Subject_1 = __webpack_require__(24);
	var _1 = __webpack_require__(63);
	var CheckedWindowComponent = (function () {
	    function CheckedWindowComponent() {
	        this.title = 'Simple Window';
	        this.username = '';
	        this._result$ = new Subject_1.Subject();
	    }
	    Object.defineProperty(CheckedWindowComponent.prototype, "result$", {
	        get: function () { return this._result$.asObservable(); },
	        enumerable: true,
	        configurable: true
	    });
	    CheckedWindowComponent.prototype.windowViewCanClose = function () {
	        if (this.username.length === 0) {
	            this.alert = 'Username can not be blank.';
	            return false;
	        }
	        this._result$.next(this.username);
	        this._result$.complete();
	        return true;
	    };
	    CheckedWindowComponent.prototype.submit = function () {
	        delete this.alert;
	        this.windowViewContainer.closeWindow();
	    };
	    __decorate([
	        core_1.ViewChild(_1.WindowViewContainerComponent), 
	        __metadata('design:type', _1.WindowViewContainerComponent)
	    ], CheckedWindowComponent.prototype, "windowViewContainer", void 0);
	    CheckedWindowComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-checked-window',
	            template: __webpack_require__(489),
	            directives: [_1.WindowViewContainerComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CheckedWindowComponent);
	    return CheckedWindowComponent;
	}());
	exports.CheckedWindowComponent = CheckedWindowComponent;
	

/***/ },

/***/ 696:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var components_1 = __webpack_require__(520);
	var ConfirmDialogUsageComponent = (function () {
	    function ConfirmDialogUsageComponent() {
	        this.title = 'Sexy Woman';
	        this.content = 'Are you hungry?';
	        this.confirmString = 'Yyyyyyyyyy';
	        this.denyString = 'Nnnnnnnnn';
	    }
	    /**
	     * e: {
	     *  target: ConfirmDialogComponent,
	     *  result: boolean
	     * }
	     */
	    ConfirmDialogUsageComponent.prototype.result = function (e) {
	        if (e.result) {
	            this.ending = 'Buuuusy tonight.';
	        }
	        else {
	            this.ending = 'coding tonight.';
	        }
	        this.showDialog = false;
	    };
	    ConfirmDialogUsageComponent.prototype.dismiss = function () {
	        delete this.ending;
	        this.showDialog = false;
	    };
	    ConfirmDialogUsageComponent = __decorate([
	        core_1.Component({
	            selector: 'app-confirm-dialog-usage',
	            template: "\n  <confirm-dialog *ngIf=\"showDialog\"\n                  [confirmString]=\"confirmString\"\n                  [denyString]=\"denyString\"\n                  [title]=\"title\"\n                  (result)=\"result($event)\"\n                  (dismiss)=\"dismiss()\">\n    <div style=\"text-align:center\">\n      <img src=\"http://ia.media-imdb.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.._UX214_CR0,0,214,317_AL_.jpg\">\n    </div>\n  </confirm-dialog>\n  <button class=\"btn btn-default\" (click)=\"showDialog=true\">Sexy Woman</button>\n  <div *ngIf=\"ending\">\n    {{ ending }}\n  </div>\n  ",
	            directives: [components_1.ConfirmDialogComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ConfirmDialogUsageComponent);
	    return ConfirmDialogUsageComponent;
	}());
	exports.ConfirmDialogUsageComponent = ConfirmDialogUsageComponent;
	

/***/ },

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(696));
	

/***/ },

/***/ 698:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var _1 = __webpack_require__(63);
	var FloatingWindowComponent = (function () {
	    function FloatingWindowComponent(windowView) {
	        this.windowView = windowView;
	        /**
	         * Following setting are necessary.
	         *
	         * 1. If enable `floating` and provide `WindowViewLayerService`,
	         *    `WindowViewContainerComponent` will auto hide it's container.
	         *    Without container, user can touch anything under that window view.
	         *
	         * 2. Click on background of `WindowViewContainerComponent` will trigger
	         *    close event. For multi-floating-window case, we have to disable it.
	         */
	        this.floating = true;
	        this.showBackground = false;
	        this.title = "Floating Window " + windowView.length;
	    }
	    Object.defineProperty(FloatingWindowComponent.prototype, "position", {
	        /**
	         * Passby property position for setup
	         */
	        get: function () { return this.windowViewContainer.position; },
	        set: function (value) { this.windowViewContainer.position = value; },
	        enumerable: true,
	        configurable: true
	    });
	    FloatingWindowComponent.prototype.closeWindow = function () {
	        /**
	         * Because order of closing window no longer stable.
	         * We have remove window with specific target.
	         */
	        this.windowView.removeWindowByInstance(this);
	    };
	    __decorate([
	        core_1.ViewChild(_1.WindowViewContainerComponent), 
	        __metadata('design:type', _1.WindowViewContainerComponent)
	    ], FloatingWindowComponent.prototype, "windowViewContainer", void 0);
	    FloatingWindowComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-floating-window',
	            template: __webpack_require__(490),
	            directives: [_1.WindowViewContainerComponent]
	        }), 
	        __metadata('design:paramtypes', [_1.WindowViewService])
	    ], FloatingWindowComponent);
	    return FloatingWindowComponent;
	}());
	exports.FloatingWindowComponent = FloatingWindowComponent;
	

/***/ },

/***/ 699:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(694));
	__export(__webpack_require__(376));
	__export(__webpack_require__(697));
	__export(__webpack_require__(377));
	__export(__webpack_require__(700));
	__export(__webpack_require__(702));
	__export(__webpack_require__(378));
	__export(__webpack_require__(705));
	

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(701));
	

/***/ },

/***/ 701:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var _1 = __webpack_require__(63);
	var floating_window_1 = __webpack_require__(377);
	var MultiFloatingWindowComponent = (function () {
	    function MultiFloatingWindowComponent(windowView) {
	        this.windowView = windowView;
	    }
	    MultiFloatingWindowComponent.prototype.openWindow = function () {
	        var _this = this;
	        this.windowView.pushWindow(floating_window_1.FloatingWindowComponent)
	            .then(function (componentRef) {
	            var simpleWindow = componentRef.instance;
	            var lastWindow = _this.windowView.getWindowInstanceAt(_this.windowView.length - 2);
	            if (lastWindow) {
	                var position = lastWindow.position;
	                position.x += 400;
	                simpleWindow.position = position;
	            }
	        });
	    };
	    MultiFloatingWindowComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-multi-floating-window',
	            template: __webpack_require__(491),
	            directives: [_1.WindowViewOutletComponent],
	            providers: [
	                _1.WindowViewService,
	                _1.WindowViewLayerService
	            ]
	        }), 
	        __metadata('design:paramtypes', [_1.WindowViewService])
	    ], MultiFloatingWindowComponent);
	    return MultiFloatingWindowComponent;
	}());
	exports.MultiFloatingWindowComponent = MultiFloatingWindowComponent;
	

/***/ },

/***/ 702:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(703));
	

/***/ },

/***/ 703:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var _1 = __webpack_require__(63);
	var simple_window_1 = __webpack_require__(378);
	var SimpleUsageComponent = (function () {
	    function SimpleUsageComponent(windowView) {
	        this.windowView = windowView;
	        this.title = 'Simple Window';
	        this.isFloatingWindow = false;
	        this.showBackground = true;
	        this.windowSize = 'small';
	        this.panelClass = 'panel-default';
	    }
	    SimpleUsageComponent.prototype.openWindow = function () {
	        var _this = this;
	        this.windowView.pushWindow(simple_window_1.SimpleWindowComponent).then(function (componentRef) {
	            var simpleWindow = componentRef.instance;
	            simpleWindow.title = _this.title;
	            simpleWindow.isFloatingWindow = _this.isFloatingWindow;
	            simpleWindow.showBackground = _this.showBackground;
	            simpleWindow.windowSize = _this.windowSize;
	            simpleWindow.panelClass = _this.panelClass;
	        });
	    };
	    SimpleUsageComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-simple-usage',
	            template: __webpack_require__(492),
	            directives: [_1.WindowViewOutletComponent],
	            providers: [_1.WindowViewService]
	        }), 
	        __metadata('design:paramtypes', [_1.WindowViewService])
	    ], SimpleUsageComponent);
	    return SimpleUsageComponent;
	}());
	exports.SimpleUsageComponent = SimpleUsageComponent;
	

/***/ },

/***/ 704:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var _1 = __webpack_require__(63);
	var SimpleWindowComponent = (function () {
	    function SimpleWindowComponent(windowView) {
	        this.windowView = windowView;
	        this.title = 'Simple Window';
	        this.isFloatingWindow = false;
	        this.showBackground = true;
	        this.windowSize = 'small';
	        this.panelClass = 'panel-default';
	    }
	    Object.defineProperty(SimpleWindowComponent.prototype, "position", {
	        get: function () { return this.windowViewContainer.position; },
	        set: function (value) { this.windowViewContainer.position = value; },
	        enumerable: true,
	        configurable: true
	    });
	    SimpleWindowComponent.prototype.openWindow = function () {
	        this.windowView.pushWindow(SimpleWindowComponent);
	    };
	    __decorate([
	        core_1.ViewChild(_1.WindowViewContainerComponent), 
	        __metadata('design:type', _1.WindowViewContainerComponent)
	    ], SimpleWindowComponent.prototype, "windowViewContainer", void 0);
	    SimpleWindowComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-simple-window',
	            template: __webpack_require__(493),
	            directives: [_1.WindowViewContainerComponent]
	        }), 
	        __metadata('design:paramtypes', [_1.WindowViewService])
	    ], SimpleWindowComponent);
	    return SimpleWindowComponent;
	}());
	exports.SimpleWindowComponent = SimpleWindowComponent;
	

/***/ },

/***/ 705:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(706));
	

/***/ },

/***/ 706:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var _1 = __webpack_require__(63);
	var WithoutServiceComponent = (function () {
	    function WithoutServiceComponent() {
	    }
	    WithoutServiceComponent.prototype.ngOnInit = function () {
	    };
	    WithoutServiceComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'app-without-service',
	            template: __webpack_require__(494),
	            directives: [_1.WindowViewContainerComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WithoutServiceComponent);
	    return WithoutServiceComponent;
	}());
	exports.WithoutServiceComponent = WithoutServiceComponent;
	

/***/ }

});
//# sourceMappingURL=main.map