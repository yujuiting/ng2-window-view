webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(88);
	var core_1 = __webpack_require__(5);
	var _1 = __webpack_require__(311);
	var environment_1 = __webpack_require__(320);
	if (environment_1.environment.production) {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
	

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(86));
	__export(__webpack_require__(126));
	__export(__webpack_require__(127));
	__export(__webpack_require__(125));
	__export(__webpack_require__(128));
	

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.1.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(5), __webpack_require__(142), __webpack_require__(45), __webpack_require__(44), __webpack_require__(141)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';

	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isStringMap(obj) {
	        return typeof obj === 'object' && obj !== null;
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
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
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
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
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function normalizeBool(obj) {
	        return isBlank(obj) ? false : obj;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	    function hasConstructor(value, type) {
	        return value.constructor === type;
	    }

	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return isPresent(this.control) ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return isPresent(this.control) ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return isPresent(this.control) ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return isPresent(this.control) ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () {
	                return isPresent(this.control) ? this.control.errors : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return isPresent(this.control) ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return isPresent(this.control) ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return isPresent(this.control) ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.statusChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.valueChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (isPresent(this.control))
	                this.control.reset(value);
	        };
	        return AbstractControlDirective;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));

	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map()).keys().next) {
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
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
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
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map();
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
	        MapWrapper.iterable = function (m) { return m; };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
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
	            if (isPresent(compareFn)) {
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
	                if (isBlank(candidate)) {
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
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }

	    var isPromise = _angular_core.__core_private__.isPromise;

	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var regex = new RegExp("^" + pattern + "$");
	                var value = control.value;
	                return regex.test(value) ?
	                    null :
	                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': value } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }

	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');

	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());

	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }

	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));

	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            var indexToRemove = -1;
	            for (var i = 0; i < this._accessors.length; ++i) {
	                if (this._accessors[i][1] === accessor) {
	                    indexToRemove = i;
	                }
	            }
	            ListWrapper.removeAt(this._accessors, indexToRemove);
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * @whatItDoes  Writes radio control values and listens to radio control changes.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any radio control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use radio buttons with form directives
	     *
	     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	     * in the same group have the same `name` attribute.  Radio buttons with different `name`
	     * attributes do not affect each other.
	     *
	     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	     *
	     * When using radio buttons in a reactive form, radio buttons in the same group should have the
	     * same `formControlName`. You can also add a `name` attribute, but it's optional.
	     *
	     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());

	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * @whatItDoes Writes values and listens to changes on a select element.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any select control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use select controls with form directives
	     *
	     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	     * attribute to the main `<select>` tag.
	     *
	     * If your option values are simple strings, you can bind to the normal `value` property
	     * on the option.  If your option values happen to be objects (and you'd like to save the
	     * selection in your form as an object), use `ngValue` instead:
	     *
	     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	     *
	     * In reactive forms, you'll also want to add your form directive (`formControlName` or
	     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	     * choice of binding to the  `value` or `ngValue` property on the select's options.
	     *
	     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	     *
	     * Note: We listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var value = this._optionMap.get(_extractId(valueString));
	            return isPresent(value) ? value : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * @whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * @howToUse
	     *
	     * See docs for {@link SelectControlValueAccessor} for usage examples.
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select))
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (isPresent(this._select))
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());

	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (isString(value))
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var opt = this._optionMap.get(_extractId$1(valueString));
	            return isPresent(opt) ? opt._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select)) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (isPresent(this._select)) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());

	    function controlPath(name, parent) {
	        var p = ListWrapper.clone(parent.path);
	        p.push(name);
	        return p;
	    }
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    function isBuiltInAccessor(valueAccessor) {
	        return (hasConstructor(valueAccessor, CheckboxControlValueAccessor) ||
	            hasConstructor(valueAccessor, NumberValueAccessor) ||
	            hasConstructor(valueAccessor, SelectControlValueAccessor) ||
	            hasConstructor(valueAccessor, SelectMultipleControlValueAccessor) ||
	            hasConstructor(valueAccessor, RadioControlValueAccessor));
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (hasConstructor(v, DefaultValueAccessor)) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (isPresent(builtinAccessor))
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (isPresent(customAccessor))
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (isPresent(customAccessor))
	            return customAccessor;
	        if (isPresent(builtinAccessor))
	            return builtinAccessor;
	        if (isPresent(defaultAccessor))
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.untouched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.touched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.pristine : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.dirty : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.valid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.invalid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid'
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (isBlank(path))
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && ListWrapper.isEmpty(path))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(name) || null;
	            }
	            return null;
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._touched = true;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._pristine = false;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._status = PENDING;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            onlySelf = normalizeBool(onlySelf);
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return isPresent(this.validator) ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (isPresent(this.asyncValidator)) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (isPresent(this._asyncValidationSubscription)) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.get(path) : this;
	            if (isPresent(control) && isPresent(control._errors)) {
	                return control._errors[errorCode];
	            }
	            else {
	                return null;
	            }
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return isPresent(this.getError(errorCode, path));
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (isPresent(x._parent)) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent)) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (isPresent(this._errors))
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status == status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return isStringMap(formState) && Object.keys(formState).length === 2 && 'value' in formState &&
	                'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     * You can't use the value key without the disabled key; both are required
	     * to use this way of initialization.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	            emitViewToModelChange = isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last; 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            ListWrapper.insert(this.controls, index, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            ListWrapper.removeAt(this.controls, index);
	            if (control) {
	                ListWrapper.insert(this.controls, index, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };

	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * To see `ngModel` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));

	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * To see `formControlName` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));

	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = isPresent(value) && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['minlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.minlength) ? this._validator(c) : null;
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['maxlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.maxlength) ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['pattern']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) {
	            return isPresent(this.pattern) ? this._validator(c) : null;
	        };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());

	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? extra['validator'] : null;
	            var asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());

	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator,
	        MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: SHARED_FORM_DIRECTIVES, exports: SHARED_FORM_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());

	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());

	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;

	}));


/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var Subject_1 = __webpack_require__(45);
	var WindowViewService = (function () {
	    function WindowViewService(cfr, compiler, injector) {
	        this.cfr = cfr;
	        this.compiler = compiler;
	        this.injector = injector;
	        this.cachedComponentFactory = new Map();
	        this.stack = [];
	        this._length$ = new Subject_1.Subject();
	        this._open$ = new Subject_1.Subject();
	        this._close$ = new Subject_1.Subject();
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
	    Object.defineProperty(WindowViewService.prototype, "open$", {
	        /**
	         * Emit after window open.
	         */
	        get: function () { return this._open$.asObservable(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WindowViewService.prototype, "close$", {
	        /**
	         * Emit before window close.
	         */
	        get: function () { return this._close$.asObservable(); },
	        enumerable: true,
	        configurable: true
	    });
	    WindowViewService.prototype.setOutlet = function (outlet) {
	        if (!!this.outlet) {
	            throw new Error('[WindowViewService] setOutlet error. Multiple window-view-outlet');
	        }
	        this.outlet = outlet;
	    };
	    WindowViewService.prototype.getInstanceAt = function (index) {
	        return (this.stack[index]) ? this.stack[index].instance : null;
	    };
	    WindowViewService.prototype.add = function (componentRef) {
	        this.stack.push(componentRef);
	        this._open$.next(componentRef.instance);
	        this._length$.next(this.stack.length);
	    };
	    WindowViewService.prototype.remove = function (componentRef) {
	        if (!this.canCloseWindowView(componentRef)) {
	            return false;
	        }
	        var index = this.stack.indexOf(componentRef);
	        this.stack.splice(index, 1);
	        this._close$.next(componentRef.instance);
	        this._length$.next(this.stack.length);
	        componentRef.destroy();
	        return true;
	    };
	    WindowViewService.prototype.removeByInstance = function (instance) {
	        var removedComponentRef = this.stack.find(function (componentRef) {
	            return componentRef.instance === instance;
	        });
	        return this.remove(removedComponentRef);
	    };
	    /**
	     * Add window to top.
	     *
	     * The component type have to registry on entryComponents of module.
	     * Or provide component factory directly.
	     */
	    WindowViewService.prototype.pushWindow = function (componentType) {
	        if (!this.outlet) {
	            throw new Error('[WindowViewService] pushWindow error. Not found window-view-outlet');
	        }
	        var factory;
	        if (componentType instanceof core_1.ComponentFactory) {
	            factory = componentType;
	        }
	        else {
	            factory = this.cfr.resolveComponentFactory(componentType);
	        }
	        var componentRef = this.outlet.createComponent(factory);
	        this.add(componentRef);
	        return componentRef.instance;
	    };
	    /**
	     * Compile module and get component factory from it and do push window.
	     *
	     * About third parameter `cached`.
	     * In usual case, module has been cached by angular, you don't need to concern about it.
	     * But, if module is created on the fly, angular can't not cached it and always compile everytime.
	     * In addition to this, repeatly creating module on the fly with declare same component is invalid,
	     * resolving those problem by caching component factory.
	     */
	    WindowViewService.prototype.pushDynamicWindow = function (moduleType, componentType, cached) {
	        var _this = this;
	        if (cached === void 0) { cached = false; }
	        if (cached && this.cachedComponentFactory.has(componentType)) {
	            return Promise.resolve().then(function () { return _this.pushWindow(_this.cachedComponentFactory.get(componentType)); });
	        }
	        return this.compiler.compileModuleAsync(moduleType).then(function (moduleFactory) {
	            var moduleRef = moduleFactory.create(_this.injector);
	            var componentFactory = moduleRef
	                .componentFactoryResolver
	                .resolveComponentFactory(componentType);
	            if (cached) {
	                _this.cachedComponentFactory.set(componentType, componentFactory);
	            }
	            return _this.pushWindow(componentFactory);
	        });
	    };
	    /**
	     *
	     */
	    WindowViewService.prototype.pushUnwrapDynamicWindow = function (componentType, options) {
	        if (options === void 0) { options = {}; }
	        var moduleMetadataParams = {
	            id: options.id,
	            declarations: options.declarations || [],
	            entryComponents: [componentType],
	            imports: options.imports || [],
	            providers: options.providers
	        };
	        if (moduleMetadataParams.declarations.indexOf(componentType) < 0) {
	            moduleMetadataParams.declarations.push(componentType);
	        }
	        var WindowViewModule = __webpack_require__(128).WindowViewModule;
	        if (moduleMetadataParams.imports.indexOf(WindowViewModule) < 0) {
	            moduleMetadataParams.imports.push(WindowViewModule);
	        }
	        var moduleMetadata = core_1.NgModule(moduleMetadataParams);
	        var moduleType = moduleMetadata((function () {
	            function class_1() {
	            }
	            return class_1;
	        }()));
	        return this.pushDynamicWindow(moduleType, componentType, true);
	    };
	    /**
	     * Remove latest window.
	     */
	    WindowViewService.prototype.popWindow = function () {
	        if (this.stack.length === 0) {
	            return false;
	        }
	        var componentRef = this.stack[this.stack.length - 1];
	        return this.remove(componentRef);
	    };
	    WindowViewService.prototype.clearCache = function () {
	        this.cachedComponentFactory.clear();
	    };
	    WindowViewService.prototype.canCloseWindowView = function (componentRef) {
	        if (typeof componentRef.instance.windowViewCanClose !== 'function') {
	            return true;
	        }
	        return componentRef.instance.windowViewCanClose();
	    };
	    WindowViewService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.Compiler, core_1.Injector])
	    ], WindowViewService);
	    return WindowViewService;
	}());
	exports.WindowViewService = WindowViewService;
	

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.1.0
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(5), __webpack_require__(44), __webpack_require__(53)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Observable', '@angular/platform-browser'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.http = global.ng.http || {}),global.ng.core,global.Rx,global.ng.platformBrowser));
	}(this, function (exports,_angular_core,rxjs_Observable,_angular_platformBrowser) { 'use strict';

	    /**
	     * A backend for http that uses the `XMLHttpRequest` browser API.
	     *
	     * Take care not to evaluate this in non-browser contexts.
	     *
	     * @experimental
	     */
	    var BrowserXhr = (function () {
	        function BrowserXhr() {
	        }
	        BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
	        BrowserXhr.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserXhr.ctorParameters = [];
	        return BrowserXhr;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
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
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
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
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	        };
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
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    // Can't be all uppercase as our transpiler would think it is a special directive...
	    var Json = (function () {
	        function Json() {
	        }
	        Json.parse = function (s) { return global$1.JSON.parse(s); };
	        Json.stringify = function (data) {
	            // Dart doesn't take 3 arguments
	            return global$1.JSON.stringify(data, null, 2);
	        };
	        return Json;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * Supported http methods.
	     * @experimental
	     */
	    exports.RequestMethod;
	    (function (RequestMethod) {
	        RequestMethod[RequestMethod["Get"] = 0] = "Get";
	        RequestMethod[RequestMethod["Post"] = 1] = "Post";
	        RequestMethod[RequestMethod["Put"] = 2] = "Put";
	        RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
	        RequestMethod[RequestMethod["Options"] = 4] = "Options";
	        RequestMethod[RequestMethod["Head"] = 5] = "Head";
	        RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
	    })(exports.RequestMethod || (exports.RequestMethod = {}));
	    /**
	     * All possible states in which a connection can be, based on
	     * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
	     * additional "CANCELLED" state.
	     * @experimental
	     */
	    exports.ReadyState;
	    (function (ReadyState) {
	        ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
	        ReadyState[ReadyState["Open"] = 1] = "Open";
	        ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
	        ReadyState[ReadyState["Loading"] = 3] = "Loading";
	        ReadyState[ReadyState["Done"] = 4] = "Done";
	        ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
	    })(exports.ReadyState || (exports.ReadyState = {}));
	    /**
	     * Acceptable response types to be associated with a {@link Response}, based on
	     * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
	     * @experimental
	     */
	    exports.ResponseType;
	    (function (ResponseType) {
	        ResponseType[ResponseType["Basic"] = 0] = "Basic";
	        ResponseType[ResponseType["Cors"] = 1] = "Cors";
	        ResponseType[ResponseType["Default"] = 2] = "Default";
	        ResponseType[ResponseType["Error"] = 3] = "Error";
	        ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
	    })(exports.ResponseType || (exports.ResponseType = {}));
	    /**
	     * Supported content type to be automatically associated with a {@link Request}.
	     * @experimental
	     */
	    var ContentType;
	    (function (ContentType) {
	        ContentType[ContentType["NONE"] = 0] = "NONE";
	        ContentType[ContentType["JSON"] = 1] = "JSON";
	        ContentType[ContentType["FORM"] = 2] = "FORM";
	        ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
	        ContentType[ContentType["TEXT"] = 4] = "TEXT";
	        ContentType[ContentType["BLOB"] = 5] = "BLOB";
	        ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
	    })(ContentType || (ContentType = {}));
	    /**
	     * Define which buffer to use to store the response
	     * @experimental
	     */
	    exports.ResponseContentType;
	    (function (ResponseContentType) {
	        ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
	        ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
	        ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
	        ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
	    })(exports.ResponseContentType || (exports.ResponseContentType = {}));

	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map()).keys().next) {
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
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
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
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map();
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
	        MapWrapper.iterable = function (m) { return m; };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());

	    /**
	     * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
	     * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
	     *
	     * The only known difference between this `Headers` implementation and the spec is the
	     * lack of an `entries` method.
	     *
	     * ### Example
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
	        // TODO(vicb): any -> string|string[]
	        function Headers(headers) {
	            var _this = this;
	            /** @internal header names are lower case */
	            this._headers = new Map();
	            /** @internal map lower case names to actual names */
	            this._normalizedNames = new Map();
	            if (!headers) {
	                return;
	            }
	            if (headers instanceof Headers) {
	                headers._headers.forEach(function (values, name) {
	                    values.forEach(function (value) { return _this.append(name, value); });
	                });
	                return;
	            }
	            Object.keys(headers).forEach(function (name) {
	                var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
	                _this.delete(name);
	                values.forEach(function (value) { return _this.append(name, value); });
	            });
	        }
	        /**
	         * Returns a new Headers instance from the given DOMString of Response Headers
	         */
	        Headers.fromResponseHeaderString = function (headersString) {
	            var headers = new Headers();
	            headersString.split('\n').forEach(function (line) {
	                var index = line.indexOf(':');
	                if (index > 0) {
	                    var name_1 = line.slice(0, index);
	                    var value = line.slice(index + 1).trim();
	                    headers.set(name_1, value);
	                }
	            });
	            return headers;
	        };
	        /**
	         * Appends a header to existing list of header values for a given header name.
	         */
	        Headers.prototype.append = function (name, value) {
	            var values = this.getAll(name);
	            if (values === null) {
	                this.set(name, value);
	            }
	            else {
	                values.push(value);
	            }
	        };
	        /**
	         * Deletes all header values for the given name.
	         */
	        Headers.prototype.delete = function (name) {
	            var lcName = name.toLowerCase();
	            this._normalizedNames.delete(lcName);
	            this._headers.delete(lcName);
	        };
	        Headers.prototype.forEach = function (fn) {
	            var _this = this;
	            this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
	        };
	        /**
	         * Returns first header that matches given name.
	         */
	        Headers.prototype.get = function (name) {
	            var values = this.getAll(name);
	            if (values === null) {
	                return null;
	            }
	            return values.length > 0 ? values[0] : null;
	        };
	        /**
	         * Checks for existence of header by given name.
	         */
	        Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
	        /**
	         * Returns the names of the headers
	         */
	        Headers.prototype.keys = function () { return MapWrapper.values(this._normalizedNames); };
	        /**
	         * Sets or overrides header value for given name.
	         */
	        Headers.prototype.set = function (name, value) {
	            if (Array.isArray(value)) {
	                if (value.length) {
	                    this._headers.set(name.toLowerCase(), [value.join(',')]);
	                }
	            }
	            else {
	                this._headers.set(name.toLowerCase(), [value]);
	            }
	            this.mayBeSetNormalizedName(name);
	        };
	        /**
	         * Returns values of all headers.
	         */
	        Headers.prototype.values = function () { return MapWrapper.values(this._headers); };
	        /**
	         * Returns string of all headers.
	         */
	        // TODO(vicb): returns {[name: string]: string[]}
	        Headers.prototype.toJSON = function () {
	            var _this = this;
	            var serialized = {};
	            this._headers.forEach(function (values, name) {
	                var split = [];
	                values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
	                serialized[_this._normalizedNames.get(name)] = split;
	            });
	            return serialized;
	        };
	        /**
	         * Returns list of header values for a given name.
	         */
	        Headers.prototype.getAll = function (name) {
	            return this.has(name) ? this._headers.get(name.toLowerCase()) : null;
	        };
	        /**
	         * This method is not implemented.
	         */
	        Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
	        Headers.prototype.mayBeSetNormalizedName = function (name) {
	            var lcName = name.toLowerCase();
	            if (!this._normalizedNames.has(lcName)) {
	                this._normalizedNames.set(lcName, name);
	            }
	        };
	        return Headers;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
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
	            this.body = isPresent(body) ? body : null;
	            this.status = isPresent(status) ? status : null;
	            this.headers = isPresent(headers) ? headers : null;
	            this.statusText = isPresent(statusText) ? statusText : null;
	            this.type = isPresent(type) ? type : null;
	            this.url = isPresent(url) ? url : null;
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
	                body: isPresent(options) && isPresent(options.body) ? options.body : this.body,
	                status: isPresent(options) && isPresent(options.status) ? options.status : this.status,
	                headers: isPresent(options) && isPresent(options.headers) ? options.headers : this.headers,
	                statusText: isPresent(options) && isPresent(options.statusText) ? options.statusText :
	                    this.statusText,
	                type: isPresent(options) && isPresent(options.type) ? options.type : this.type,
	                url: isPresent(options) && isPresent(options.url) ? options.url : this.url,
	            });
	        };
	        return ResponseOptions;
	    }());
	    /**
	     * Subclass of {@link ResponseOptions}, with default values.
	     *
	     * Default values:
	     *  * status: 200
	     *  * headers: empty {@link Headers} object
	     *
	     * This class could be extended and bound to the {@link ResponseOptions} class
	     * when configuring an {@link Injector}, in order to override the default options
	     * used by {@link Http} to create {@link Response Responses}.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
	     *
	     * ```typescript
	     * import {provide} from '@angular/core';
	     * import {bootstrap} from '@angular/platform-browser/browser';
	     * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
	     * '@angular/http';
	     * import {App} from './myapp';
	     *
	     * class MyOptions extends BaseResponseOptions {
	     *   headers:Headers = new Headers({network: 'github'});
	     * }
	     *
	     * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
	     * ```
	     *
	     * The options could also be extended when manually creating a {@link Response}
	     * object.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
	     *
	     * ```
	     * import {BaseResponseOptions, Response} from '@angular/http';
	     *
	     * var options = new BaseResponseOptions();
	     * var res = new Response(options.merge({
	     *   body: 'Angular',
	     *   headers: new Headers({framework: 'angular'})
	     * }));
	     * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
	     * console.log('res.text():', res.text()); // Angular;
	     * ```
	     *
	     * @experimental
	     */
	    var BaseResponseOptions = (function (_super) {
	        __extends$1(BaseResponseOptions, _super);
	        function BaseResponseOptions() {
	            _super.call(this, { status: 200, statusText: 'Ok', type: exports.ResponseType.Default, headers: new Headers() });
	        }
	        BaseResponseOptions.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BaseResponseOptions.ctorParameters = [];
	        return BaseResponseOptions;
	    }(ResponseOptions));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
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

	    function normalizeMethodName(method) {
	        if (isString(method)) {
	            var originalMethod = method;
	            method = method
	                .replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
	            method = exports.RequestMethod[method];
	            if (typeof method !== 'number')
	                throw new Error("Invalid request method. The method \"" + originalMethod + "\" is not supported.");
	        }
	        return method;
	    }
	    var isSuccess = function (status) { return (status >= 200 && status < 300); };
	    function getResponseURL(xhr) {
	        if ('responseURL' in xhr) {
	            return xhr.responseURL;
	        }
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	            return xhr.getResponseHeader('X-Request-URL');
	        }
	        return;
	    }
	    function stringToArrayBuffer(input) {
	        var view = new Uint16Array(input.length);
	        for (var i = 0, strLen = input.length; i < strLen; i++) {
	            view[i] = input.charCodeAt(i);
	        }
	        return view.buffer;
	    }

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function paramParser(rawParams) {
	        if (rawParams === void 0) { rawParams = ''; }
	        var map = new Map();
	        if (rawParams.length > 0) {
	            var params = rawParams.split('&');
	            params.forEach(function (param) {
	                var eqIdx = param.indexOf('=');
	                var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
	                var list = map.get(key) || [];
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
	    function standardEncoding(v) {
	        return encodeURIComponent(v)
	            .replace(/%40/gi, '@')
	            .replace(/%3A/gi, ':')
	            .replace(/%24/gi, '$')
	            .replace(/%2C/gi, ',')
	            .replace(/%3B/gi, ';')
	            .replace(/%2B/gi, '+')
	            .replace(/%3D/gi, '=')
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
	            var clone = new URLSearchParams('', this.queryEncoder);
	            clone.appendAll(this);
	            return clone;
	        };
	        URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
	        URLSearchParams.prototype.get = function (param) {
	            var storedParam = this.paramsMap.get(param);
	            return Array.isArray(storedParam) ? storedParam[0] : null;
	        };
	        URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
	        URLSearchParams.prototype.set = function (param, val) {
	            if (val === void 0 || val === null) {
	                this.delete(param);
	                return;
	            }
	            var list = this.paramsMap.get(param) || [];
	            list.length = 0;
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
	                var list = _this.paramsMap.get(param) || [];
	                list.length = 0;
	                list.push(value[0]);
	                _this.paramsMap.set(param, list);
	            });
	        };
	        URLSearchParams.prototype.append = function (param, val) {
	            if (val === void 0 || val === null)
	                return;
	            var list = this.paramsMap.get(param) || [];
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
	                var list = _this.paramsMap.get(param) || [];
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
	                var list = _this.paramsMap.get(param) || [];
	                list.length = 0;
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

	    /**
	     * HTTP request body used by both {@link Request} and {@link Response}
	     * https://fetch.spec.whatwg.org/#body
	     */
	    var Body = (function () {
	        function Body() {
	        }
	        /**
	         * Attempts to return body as parsed `JSON` object, or raises an exception.
	         */
	        Body.prototype.json = function () {
	            if (isString(this._body)) {
	                return Json.parse(this._body);
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return Json.parse(this.text());
	            }
	            return this._body;
	        };
	        /**
	         * Returns the body as a string, presuming `toString()` can be called on the response body.
	         */
	        Body.prototype.text = function () {
	            if (this._body instanceof URLSearchParams) {
	                return this._body.toString();
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return String.fromCharCode.apply(null, new Uint16Array(this._body));
	            }
	            if (this._body === null) {
	                return '';
	            }
	            if (isJsObject(this._body)) {
	                return Json.stringify(this._body);
	            }
	            return this._body.toString();
	        };
	        /**
	         * Return the body as an ArrayBuffer
	         */
	        Body.prototype.arrayBuffer = function () {
	            if (this._body instanceof ArrayBuffer) {
	                return this._body;
	            }
	            return stringToArrayBuffer(this.text());
	        };
	        /**
	          * Returns the request's body as a Blob, assuming that body exists.
	          */
	        Body.prototype.blob = function () {
	            if (this._body instanceof Blob) {
	                return this._body;
	            }
	            if (this._body instanceof ArrayBuffer) {
	                return new Blob([this._body]);
	            }
	            throw new Error('The request body isn\'t either a blob or an array buffer');
	        };
	        return Body;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
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
	    var Response = (function (_super) {
	        __extends$2(Response, _super);
	        function Response(responseOptions) {
	            _super.call(this);
	            this._body = responseOptions.body;
	            this.status = responseOptions.status;
	            this.ok = (this.status >= 200 && this.status <= 299);
	            this.statusText = responseOptions.statusText;
	            this.headers = responseOptions.headers;
	            this.type = responseOptions.type;
	            this.url = responseOptions.url;
	        }
	        Response.prototype.toString = function () {
	            return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
	        };
	        return Response;
	    }(Body));

	    var _nextRequestId = 0;
	    var JSONP_HOME = '__ng_jsonp__';
	    var _jsonpConnections = null;
	    function _getJsonpConnections() {
	        if (_jsonpConnections === null) {
	            _jsonpConnections = global$1[JSONP_HOME] = {};
	        }
	        return _jsonpConnections;
	    }
	    // Make sure not to evaluate this in a non-browser environment!
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
	        BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
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
	        BrowserJsonp.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BrowserJsonp.ctorParameters = [];
	        return BrowserJsonp;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
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
	    var JSONPConnection_ = (function (_super) {
	        __extends(JSONPConnection_, _super);
	        function JSONPConnection_(req, _dom, baseResponseOptions) {
	            var _this = this;
	            _super.call(this);
	            this._dom = _dom;
	            this.baseResponseOptions = baseResponseOptions;
	            this._finished = false;
	            if (req.method !== exports.RequestMethod.Get) {
	                throw new TypeError(JSONP_ERR_WRONG_METHOD);
	            }
	            this.request = req;
	            this.response = new rxjs_Observable.Observable(function (responseObserver) {
	                _this.readyState = exports.ReadyState.Loading;
	                var id = _this._id = _dom.nextRequestID();
	                _dom.exposeConnection(id, _this);
	                // Workaround Dart
	                // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
	                var callback = _dom.requestCallback(_this._id);
	                var url = req.url;
	                if (url.indexOf('=JSONP_CALLBACK&') > -1) {
	                    url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
	                }
	                else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
	                    url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
	                }
	                var script = _this._script = _dom.build(url);
	                var onLoad = function (event) {
	                    if (_this.readyState === exports.ReadyState.Cancelled)
	                        return;
	                    _this.readyState = exports.ReadyState.Done;
	                    _dom.cleanup(script);
	                    if (!_this._finished) {
	                        var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: exports.ResponseType.Error, url: url });
	                        if (isPresent(baseResponseOptions)) {
	                            responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
	                        }
	                        responseObserver.error(new Response(responseOptions_1));
	                        return;
	                    }
	                    var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
	                    if (isPresent(_this.baseResponseOptions)) {
	                        responseOptions = _this.baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.next(new Response(responseOptions));
	                    responseObserver.complete();
	                };
	                var onError = function (error) {
	                    if (_this.readyState === exports.ReadyState.Cancelled)
	                        return;
	                    _this.readyState = exports.ReadyState.Done;
	                    _dom.cleanup(script);
	                    var responseOptions = new ResponseOptions({ body: error.message, type: exports.ResponseType.Error });
	                    if (isPresent(baseResponseOptions)) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.error(new Response(responseOptions));
	                };
	                script.addEventListener('load', onLoad);
	                script.addEventListener('error', onError);
	                _dom.send(script);
	                return function () {
	                    _this.readyState = exports.ReadyState.Cancelled;
	                    script.removeEventListener('load', onLoad);
	                    script.removeEventListener('error', onError);
	                    if (isPresent(script)) {
	                        _this._dom.cleanup(script);
	                    }
	                };
	            });
	        }
	        JSONPConnection_.prototype.finished = function (data) {
	            // Don't leak connections
	            this._finished = true;
	            this._dom.removeConnection(this._id);
	            if (this.readyState === exports.ReadyState.Cancelled)
	                return;
	            this._responseData = data;
	        };
	        return JSONPConnection_;
	    }(JSONPConnection));
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
	    }(ConnectionBackend));
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
	        JSONPBackend_.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        JSONPBackend_.ctorParameters = [
	            { type: BrowserJsonp, },
	            { type: ResponseOptions, },
	        ];
	        return JSONPBackend_;
	    }(JSONPBackend));

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
	            this.response = new rxjs_Observable.Observable(function (responseObserver) {
	                var _xhr = browserXHR.build();
	                _xhr.open(exports.RequestMethod[req.method].toUpperCase(), req.url);
	                if (isPresent(req.withCredentials)) {
	                    _xhr.withCredentials = req.withCredentials;
	                }
	                // load event handler
	                var onLoad = function () {
	                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
	                    // response/responseType properties were introduced in ResourceLoader Level2 spec (supported
	                    // by IE10)
	                    var body = _xhr.response === undefined ? _xhr.responseText : _xhr.response;
	                    // Implicitly strip a potential XSSI prefix.
	                    if (isString(body))
	                        body = body.replace(XSSI_PREFIX, '');
	                    var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
	                    var url = getResponseURL(_xhr);
	                    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
	                    var status = _xhr.status === 1223 ? 204 : _xhr.status;
	                    // fix status code when it is 0 (0 status is undocumented).
	                    // Occurs when accessing file resources or on Android 4.1 stock browser
	                    // while retrieving files from application cache.
	                    if (status === 0) {
	                        status = body ? 200 : 0;
	                    }
	                    var statusText = _xhr.statusText || 'OK';
	                    var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
	                    if (isPresent(baseResponseOptions)) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    var response = new Response(responseOptions);
	                    response.ok = isSuccess(status);
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
	                    var responseOptions = new ResponseOptions({
	                        body: err,
	                        type: exports.ResponseType.Error,
	                        status: _xhr.status,
	                        statusText: _xhr.statusText,
	                    });
	                    if (isPresent(baseResponseOptions)) {
	                        responseOptions = baseResponseOptions.merge(responseOptions);
	                    }
	                    responseObserver.error(new Response(responseOptions));
	                };
	                _this.setDetectedContentType(req, _xhr);
	                if (isPresent(req.headers)) {
	                    req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
	                }
	                // Select the correct buffer type to store the response
	                if (isPresent(req.responseType) && isPresent(_xhr.responseType)) {
	                    switch (req.responseType) {
	                        case exports.ResponseContentType.ArrayBuffer:
	                            _xhr.responseType = 'arraybuffer';
	                            break;
	                        case exports.ResponseContentType.Json:
	                            _xhr.responseType = 'json';
	                            break;
	                        case exports.ResponseContentType.Text:
	                            _xhr.responseType = 'text';
	                            break;
	                        case exports.ResponseContentType.Blob:
	                            _xhr.responseType = 'blob';
	                            break;
	                        default:
	                            throw new Error('The selected responseType is not supported');
	                    }
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
	            if (isPresent(req.headers) && isPresent(req.headers.get('Content-Type'))) {
	                return;
	            }
	            // Set the detected content type
	            switch (req.contentType) {
	                case ContentType.NONE:
	                    break;
	                case ContentType.JSON:
	                    _xhr.setRequestHeader('content-type', 'application/json');
	                    break;
	                case ContentType.FORM:
	                    _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
	                    break;
	                case ContentType.TEXT:
	                    _xhr.setRequestHeader('content-type', 'text/plain');
	                    break;
	                case ContentType.BLOB:
	                    var blob = req.blob();
	                    if (blob.type) {
	                        _xhr.setRequestHeader('content-type', blob.type);
	                    }
	                    break;
	            }
	        };
	        return XHRConnection;
	    }());
	    /**
	     * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
	     * using a cookie. See {@link https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)}
	     * for more information on XSRF.
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
	            var xsrfToken = _angular_platformBrowser.__platform_browser_private__.getDOM().getCookie(this._cookieName);
	            if (xsrfToken && !req.headers.has(this._headerName)) {
	                req.headers.set(this._headerName, xsrfToken);
	            }
	        };
	        return CookieXSRFStrategy;
	    }());
	    /**
	     * Creates {@link XHRConnection} instances.
	     *
	     * This class would typically not be used by end users, but could be
	     * overridden if a different backend implementation should be used,
	     * such as in a node backend.
	     *
	     * ### Example
	     *
	     * ```
	     * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
	     * @Component({
	     *   viewProviders: [
	     *     HTTP_PROVIDERS,
	     *     {provide: Http, useFactory: (backend, options) => {
	     *       return new Http(backend, options);
	     *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
	     * })
	     * class MyComponent {
	     *   constructor(http:Http) {
	     *     http.request('people.json').subscribe(res => this.people = res.json());
	     *   }
	     * }
	     * ```
	     * @experimental
	     */
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
	        XHRBackend.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        XHRBackend.ctorParameters = [
	            { type: BrowserXhr, },
	            { type: ResponseOptions, },
	            { type: XSRFStrategy, },
	        ];
	        return XHRBackend;
	    }());

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
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
	            var _b = _a === void 0 ? {} : _a, method = _b.method, headers = _b.headers, body = _b.body, url = _b.url, search = _b.search, withCredentials = _b.withCredentials, responseType = _b.responseType;
	            this.method = isPresent(method) ? normalizeMethodName(method) : null;
	            this.headers = isPresent(headers) ? headers : null;
	            this.body = isPresent(body) ? body : null;
	            this.url = isPresent(url) ? url : null;
	            this.search = isPresent(search) ?
	                (isString(search) ? new URLSearchParams((search)) : (search)) :
	                null;
	            this.withCredentials = isPresent(withCredentials) ? withCredentials : null;
	            this.responseType = isPresent(responseType) ? responseType : null;
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
	                method: isPresent(options) && isPresent(options.method) ? options.method : this.method,
	                headers: isPresent(options) && isPresent(options.headers) ? options.headers : this.headers,
	                body: isPresent(options) && isPresent(options.body) ? options.body : this.body,
	                url: isPresent(options) && isPresent(options.url) ? options.url : this.url,
	                search: isPresent(options) && isPresent(options.search) ?
	                    (isString(options.search) ? new URLSearchParams((options.search)) :
	                        (options.search).clone()) :
	                    this.search,
	                withCredentials: isPresent(options) && isPresent(options.withCredentials) ?
	                    options.withCredentials :
	                    this.withCredentials,
	                responseType: isPresent(options) && isPresent(options.responseType) ? options.responseType :
	                    this.responseType
	            });
	        };
	        return RequestOptions;
	    }());
	    /**
	     * Subclass of {@link RequestOptions}, with default values.
	     *
	     * Default values:
	     *  * method: {@link RequestMethod RequestMethod.Get}
	     *  * headers: empty {@link Headers} object
	     *
	     * This class could be extended and bound to the {@link RequestOptions} class
	     * when configuring an {@link Injector}, in order to override the default options
	     * used by {@link Http} to create and send {@link Request Requests}.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/LEKVSx?p=preview))
	     *
	     * ```typescript
	     * import {provide} from '@angular/core';
	     * import {bootstrap} from '@angular/platform-browser/browser';
	     * import {HTTP_PROVIDERS, Http, BaseRequestOptions, RequestOptions} from '@angular/http';
	     * import {App} from './myapp';
	     *
	     * class MyOptions extends BaseRequestOptions {
	     *   search: string = 'coreTeam=true';
	     * }
	     *
	     * bootstrap(App, [HTTP_PROVIDERS, {provide: RequestOptions, useClass: MyOptions}]);
	     * ```
	     *
	     * The options could also be extended when manually creating a {@link Request}
	     * object.
	     *
	     * ### Example ([live demo](http://plnkr.co/edit/oyBoEvNtDhOSfi9YxaVb?p=preview))
	     *
	     * ```
	     * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
	     *
	     * var options = new BaseRequestOptions();
	     * var req = new Request(options.merge({
	     *   method: RequestMethod.Post,
	     *   url: 'https://google.com'
	     * }));
	     * console.log('req.method:', RequestMethod[req.method]); // Post
	     * console.log('options.url:', options.url); // null
	     * console.log('req.url:', req.url); // https://google.com
	     * ```
	     *
	     * @experimental
	     */
	    var BaseRequestOptions = (function (_super) {
	        __extends$3(BaseRequestOptions, _super);
	        function BaseRequestOptions() {
	            _super.call(this, { method: exports.RequestMethod.Get, headers: new Headers() });
	        }
	        BaseRequestOptions.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        BaseRequestOptions.ctorParameters = [];
	        return BaseRequestOptions;
	    }(RequestOptions));

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
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
	    var Request = (function (_super) {
	        __extends$5(Request, _super);
	        function Request(requestOptions) {
	            _super.call(this);
	            // TODO: assert that url is present
	            var url = requestOptions.url;
	            this.url = requestOptions.url;
	            if (isPresent(requestOptions.search)) {
	                var search = requestOptions.search.toString();
	                if (search.length > 0) {
	                    var prefix = '?';
	                    if (this.url.indexOf('?') != -1) {
	                        prefix = (this.url[this.url.length - 1] == '&') ? '' : '&';
	                    }
	                    // TODO: just delete search-query-looking string in url?
	                    this.url = url + prefix + search;
	                }
	            }
	            this._body = requestOptions.body;
	            this.method = normalizeMethodName(requestOptions.method);
	            // TODO(jeffbcross): implement behavior
	            // Defaults to 'omit', consistent with browser
	            // TODO(jeffbcross): implement behavior
	            this.headers = new Headers(requestOptions.headers);
	            this.contentType = this.detectContentType();
	            this.withCredentials = requestOptions.withCredentials;
	            this.responseType = requestOptions.responseType;
	        }
	        /**
	         * Returns the content type enum based on header options.
	         */
	        Request.prototype.detectContentType = function () {
	            switch (this.headers.get('content-type')) {
	                case 'application/json':
	                    return ContentType.JSON;
	                case 'application/x-www-form-urlencoded':
	                    return ContentType.FORM;
	                case 'multipart/form-data':
	                    return ContentType.FORM_DATA;
	                case 'text/plain':
	                case 'text/html':
	                    return ContentType.TEXT;
	                case 'application/octet-stream':
	                    return ContentType.BLOB;
	                default:
	                    return this.detectContentTypeFromBody();
	            }
	        };
	        /**
	         * Returns the content type of request's body based on its type.
	         */
	        Request.prototype.detectContentTypeFromBody = function () {
	            if (this._body == null) {
	                return ContentType.NONE;
	            }
	            else if (this._body instanceof URLSearchParams) {
	                return ContentType.FORM;
	            }
	            else if (this._body instanceof FormData) {
	                return ContentType.FORM_DATA;
	            }
	            else if (this._body instanceof Blob$1) {
	                return ContentType.BLOB;
	            }
	            else if (this._body instanceof ArrayBuffer$1) {
	                return ContentType.ARRAY_BUFFER;
	            }
	            else if (this._body && typeof this._body == 'object') {
	                return ContentType.JSON;
	            }
	            else {
	                return ContentType.TEXT;
	            }
	        };
	        /**
	         * Returns the request's body according to its type. If body is undefined, return
	         * null.
	         */
	        Request.prototype.getBody = function () {
	            switch (this.contentType) {
	                case ContentType.JSON:
	                    return this.text();
	                case ContentType.FORM:
	                    return this.text();
	                case ContentType.FORM_DATA:
	                    return this._body;
	                case ContentType.TEXT:
	                    return this.text();
	                case ContentType.BLOB:
	                    return this.blob();
	                case ContentType.ARRAY_BUFFER:
	                    return this.arrayBuffer();
	                default:
	                    return null;
	            }
	        };
	        return Request;
	    }(Body));
	    var noop$1 = function () { };
	    var w = typeof window == 'object' ? window : noop$1;
	    var FormData = w['FormData'] || noop$1;
	    var Blob$1 = w['Blob'] || noop$1;
	    var ArrayBuffer$1 = w['ArrayBuffer'] || noop$1;

	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function httpRequest(backend, request) {
	        return backend.createConnection(request).response;
	    }
	    function mergeOptions(defaultOpts, providedOpts, method, url) {
	        var newOptions = defaultOpts;
	        if (isPresent(providedOpts)) {
	            // Hack so Dart can used named parameters
	            return newOptions.merge(new RequestOptions({
	                method: providedOpts.method || method,
	                url: providedOpts.url || url,
	                search: providedOpts.search,
	                headers: providedOpts.headers,
	                body: providedOpts.body,
	                withCredentials: providedOpts.withCredentials,
	                responseType: providedOpts.responseType
	            }));
	        }
	        if (isPresent(method)) {
	            return newOptions.merge(new RequestOptions({ method: method, url: url }));
	        }
	        else {
	            return newOptions.merge(new RequestOptions({ url: url }));
	        }
	    }
	    /**
	     * Performs http requests using `XMLHttpRequest` as the default backend.
	     *
	     * `Http` is available as an injectable class, with methods to perform http requests. Calling
	     * `request` returns an `Observable` which will emit a single {@link Response} when a
	     * response is received.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {Http, HTTP_PROVIDERS} from '@angular/http';
	     * import 'rxjs/add/operator/map'
	     * @Component({
	     *   selector: 'http-app',
	     *   viewProviders: [HTTP_PROVIDERS],
	     *   templateUrl: 'people.html'
	     * })
	     * class PeopleComponent {
	     *   constructor(http: Http) {
	     *     http.get('people.json')
	     *       // Call map on the response observable to get the parsed people object
	     *       .map(res => res.json())
	     *       // Subscribe to the observable to get the parsed people object and attach it to the
	     *       // component
	     *       .subscribe(people => this.people = people);
	     *   }
	     * }
	     * ```
	     *
	     *
	     * ### Example
	     *
	     * ```
	     * http.get('people.json').subscribe((res:Response) => this.people = res.json());
	     * ```
	     *
	     * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
	     * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
	     * the {@link XHRBackend} provider, as in the following example:
	     *
	     * ### Example
	     *
	     * ```typescript
	     * import {BaseRequestOptions, Http} from '@angular/http';
	     * import {MockBackend} from '@angular/http/testing';
	     * var injector = Injector.resolveAndCreate([
	     *   BaseRequestOptions,
	     *   MockBackend,
	     *   {provide: Http, useFactory:
	     *       function(backend, defaultOptions) {
	     *         return new Http(backend, defaultOptions);
	     *       },
	     *       deps: [MockBackend, BaseRequestOptions]}
	     * ]);
	     * var http = injector.get(Http);
	     * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
	     * ```
	     *
	     * @experimental
	     */
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
	            if (isString(url)) {
	                responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url)));
	            }
	            else if (url instanceof Request) {
	                responseObservable = httpRequest(this._backend, url);
	            }
	            else {
	                throw new Error('First argument must be a url string or Request instance.');
	            }
	            return responseObservable;
	        };
	        /**
	         * Performs a request with `get` http method.
	         */
	        Http.prototype.get = function (url, options) {
	            return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url)));
	        };
	        /**
	         * Performs a request with `post` http method.
	         */
	        Http.prototype.post = function (url, body, options) {
	            return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Post, url)));
	        };
	        /**
	         * Performs a request with `put` http method.
	         */
	        Http.prototype.put = function (url, body, options) {
	            return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Put, url)));
	        };
	        /**
	         * Performs a request with `delete` http method.
	         */
	        Http.prototype.delete = function (url, options) {
	            return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Delete, url)));
	        };
	        /**
	         * Performs a request with `patch` http method.
	         */
	        Http.prototype.patch = function (url, body, options) {
	            return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, exports.RequestMethod.Patch, url)));
	        };
	        /**
	         * Performs a request with `head` http method.
	         */
	        Http.prototype.head = function (url, options) {
	            return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Head, url)));
	        };
	        /**
	         * Performs a request with `options` http method.
	         */
	        Http.prototype.options = function (url, options) {
	            return httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Options, url)));
	        };
	        Http.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        Http.ctorParameters = [
	            { type: ConnectionBackend, },
	            { type: RequestOptions, },
	        ];
	        return Http;
	    }());
	    /**
	     * @experimental
	     */
	    var Jsonp = (function (_super) {
	        __extends$4(Jsonp, _super);
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
	            if (isString(url)) {
	                url =
	                    new Request(mergeOptions(this._defaultOptions, options, exports.RequestMethod.Get, url));
	            }
	            if (url instanceof Request) {
	                if (url.method !== exports.RequestMethod.Get) {
	                    throw new Error('JSONP requests must use GET request method.');
	                }
	                responseObservable = httpRequest(this._backend, url);
	            }
	            else {
	                throw new Error('First argument must be a url string or Request instance.');
	            }
	            return responseObservable;
	        };
	        Jsonp.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        Jsonp.ctorParameters = [
	            { type: ConnectionBackend, },
	            { type: RequestOptions, },
	        ];
	        return Jsonp;
	    }(Http));

	    function _createDefaultCookieXSRFStrategy() {
	        return new CookieXSRFStrategy();
	    }
	    function httpFactory(xhrBackend, requestOptions) {
	        return new Http(xhrBackend, requestOptions);
	    }
	    function jsonpFactory(jsonpBackend, requestOptions) {
	        return new Jsonp(jsonpBackend, requestOptions);
	    }
	    /**
	     * The module that includes http's providers
	     *
	     * @experimental
	     */
	    var HttpModule = (function () {
	        function HttpModule() {
	        }
	        HttpModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        providers: [
	                            // TODO(pascal): use factory type annotations once supported in DI
	                            // issue: https://github.com/angular/angular/issues/3183
	                            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
	                            BrowserXhr,
	                            { provide: RequestOptions, useClass: BaseRequestOptions },
	                            { provide: ResponseOptions, useClass: BaseResponseOptions },
	                            XHRBackend,
	                            { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
	                        ],
	                    },] },
	        ];
	        /** @nocollapse */
	        HttpModule.ctorParameters = [];
	        return HttpModule;
	    }());
	    /**
	     * The module that includes jsonp's providers
	     *
	     * @experimental
	     */
	    var JsonpModule = (function () {
	        function JsonpModule() {
	        }
	        JsonpModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        providers: [
	                            // TODO(pascal): use factory type annotations once supported in DI
	                            // issue: https://github.com/angular/angular/issues/3183
	                            { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
	                            BrowserJsonp,
	                            { provide: RequestOptions, useClass: BaseRequestOptions },
	                            { provide: ResponseOptions, useClass: BaseResponseOptions },
	                            { provide: JSONPBackend, useClass: JSONPBackend_ },
	                        ],
	                    },] },
	        ];
	        /** @nocollapse */
	        JsonpModule.ctorParameters = [];
	        return JsonpModule;
	    }());

	    exports.BrowserXhr = BrowserXhr;
	    exports.JSONPBackend = JSONPBackend;
	    exports.JSONPConnection = JSONPConnection;
	    exports.CookieXSRFStrategy = CookieXSRFStrategy;
	    exports.XHRBackend = XHRBackend;
	    exports.XHRConnection = XHRConnection;
	    exports.BaseRequestOptions = BaseRequestOptions;
	    exports.RequestOptions = RequestOptions;
	    exports.BaseResponseOptions = BaseResponseOptions;
	    exports.ResponseOptions = ResponseOptions;
	    exports.Headers = Headers;
	    exports.Http = Http;
	    exports.Jsonp = Jsonp;
	    exports.HttpModule = HttpModule;
	    exports.JsonpModule = JsonpModule;
	    exports.Connection = Connection;
	    exports.ConnectionBackend = ConnectionBackend;
	    exports.XSRFStrategy = XSRFStrategy;
	    exports.Request = Request;
	    exports.Response = Response;
	    exports.QueryEncoder = QueryEncoder;
	    exports.URLSearchParams = URLSearchParams;

	}));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 123:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var http_1 = __webpack_require__(87);
	var AppComponent = (function () {
	    function AppComponent(http) {
	        this.http = http;
	        this.title = 'ng2-window-view example';
	        this.files = {};
	        // ui status
	        this.totalLoadCount = 0;
	        this.loadedCount = 0;
	        this.importModuleExample = Prism.highlight("\nimport { NgModule } from '@angular/core';\nimport { WindowViewModule } from 'ng2-window-view';\n\n@NgModule({\n  imports: [\n    WindowViewModule\n  ]\n})\nexport class AppModule {}\n", Prism.languages['typescript']);
	        this.loadAssets();
	    }
	    Object.defineProperty(AppComponent.prototype, "loadPercent", {
	        get: function () { return Math.floor(this.loadedCount / this.totalLoadCount * 100); },
	        enumerable: true,
	        configurable: true
	    });
	    AppComponent.prototype.loadAssets = function () {
	        this.loadFile('simple-usage', 'examples/simple-usage', 'simple-usage.component.ts');
	        this.loadFile('simple-usage', 'examples/simple-usage', 'simple-usage.component.html', 'html');
	        this.loadFile('simple-usage', 'examples/simple-window', 'simple-window.component.ts');
	        this.loadFile('simple-usage', 'examples/simple-window', 'simple-window.component.html', 'html');
	        this.simpleUsageFilename = 'simple-usage.component.ts';
	        this.loadFile('without-service', 'examples/without-service', 'without-service.component.ts');
	        this.loadFile('without-service', 'examples/without-service', 'without-service.component.html', 'html');
	        this.withoutServiceFilename = 'without-service.component.ts';
	        this.loadFile('access-flow', 'examples/access-flow', 'access-flow.component.ts');
	        this.loadFile('access-flow', 'examples/access-flow', 'access-flow.component.html', 'html');
	        this.loadFile('access-flow', 'examples/checked-window', 'checked-window.component.ts');
	        this.loadFile('access-flow', 'examples/checked-window', 'checked-window.component.html', 'html');
	        this.accessFlowFilename = 'access-flow.component.ts';
	        this.loadFile('multi-floating-window', 'examples/multi-floating-window', 'multi-floating-window.component.ts');
	        this.loadFile('multi-floating-window', 'examples/multi-floating-window', 'multi-floating-window.component.html', 'html');
	        this.loadFile('multi-floating-window', 'examples/floating-window', 'floating-window.component.ts');
	        this.loadFile('multi-floating-window', 'examples/floating-window', 'floating-window.component.html', 'html');
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
	    AppComponent.prototype.loadFile = function (group, filepath, filename, type) {
	        var _this = this;
	        if (type === void 0) { type = 'typescript'; }
	        this.totalLoadCount++;
	        this.files[group] = this.files[group] || {};
	        var loadFile = this.http.get(filepath + "/" + filename)
	            .subscribe(function (response) {
	            var file = response.text()
	                .replace('../../../../src/components', 'ng2-window-view/components')
	                .replace('../../../../src', 'ng2-window-view');
	            _this.files[group][filename] = {
	                html: Prism.highlight(file, Prism.languages[type]),
	                type: type
	            };
	            _this.loadedCount++;
	        }, function (error) { return console.warn(error); }, function () { return loadFile.unsubscribe(); });
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'app-root',
	            template: __webpack_require__(131),
	            styles: [__webpack_require__(130)]
	        }), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;
	

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var Subject_1 = __webpack_require__(45);
	var _1 = __webpack_require__(28);
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
	            template: "\n  <window-view-container [heading]=\"title\"\n                         [size]=\"size\"\n                         (close)=\"onClose()\">\n\n    <div class=\"confirm-dialog-content\">\n      {{ content }}\n      <ng-content></ng-content>\n    </div>\n\n    <div panel-footer class=\"confirm-dialog-button-set\">\n      <button class=\"btn btn-primary\" (click)=\"confirm()\">\n        {{ confirmString }}\n      </button>\n\n      <button class=\"btn btn-default\" (click)=\"deny()\">\n        {{ denyString }}\n      </button>\n    </div>\n\n  </window-view-container>\n  ",
	            styles: ["\n  .confirm-dialog-content {\n    margin: 12px;\n  }\n  .confirm-dialog-button-set {\n    margin: 0 auto;\n    text-align: center;\n  }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ConfirmDialogComponent);
	    return ConfirmDialogComponent;
	}());
	exports.ConfirmDialogComponent = ConfirmDialogComponent;
	

/***/ },

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var window_view_service_1 = __webpack_require__(86);
	var window_view_layer_service_1 = __webpack_require__(126);
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
	        this.isMouseDown = false;
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
	        this.isMouseDown = true;
	        if (this.floating) {
	            this.draggingRelativeLocation.x = e.offsetX;
	            this.draggingRelativeLocation.y = e.offsetY;
	        }
	    };
	    WindowViewContainerComponent.prototype.onMouseUp = function (e) {
	        this.isMouseDown = false;
	        this.isDragging = false;
	    };
	    WindowViewContainerComponent.prototype.onMouseMove = function (e) {
	        if (this.isDragging) {
	            this.left = e.clientX - this.draggingRelativeLocation.x;
	            this.top = e.clientY - this.draggingRelativeLocation.y;
	        }
	        else if (this.isMouseDown && this.floating) {
	            this.isDragging = true;
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
	            template: "\n  <div class=\"window-container\"\n       [class.floating]=\"floating\"\n       [class.fixed]=\"!floating\"\n       [class.hide-container]=\"hideContainer\"\n       [style.z-index]=\"zIndex\">\n    <div class=\"window-background\" (click)=\"onClickBackground($event)\" *ngIf=\"showBackground\"></div>\n    <div class=\"panel {{ panelClass }} {{ sizeClass }}\"\n        [style.top]=\"top + 'px'\"\n        [style.left]=\"left + 'px'\"\n        (click)=\"onClickWindow()\">\n      <div class=\"panel-heading\"\n          (mousedown)=\"onMouseDown($event)\"\n          (mouseup)=\"onMouseUp($event)\"\n          (mouseleave)=\"onMouseUp($event)\"\n          (mousemove)=\"onMouseMove($event)\">\n        {{ heading }}\n        <ng-content select=\"[panel-heading]\"></ng-content>\n        <a class=\"btn-close\" (click)=\"closeWindow()\"><span class=\"glyphicon glyphicon-remove pull-right\"></span></a>\n      </div>\n      <div class=\"panel-body\">\n        <ng-content></ng-content>\n      </div>\n      <div class=\"panel-footer\">\n        <ng-content select=\"[panel-footer]\"></ng-content>\n      </div>\n    </div>\n  </div>\n  ",
	            styles: ["\n  .window-container,\n  .window-background {\n    position: fixed;\n    overflow: auto;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n  }\n\n  .window-container.hide-container {\n    width: 0;\n    height: 0;\n  }\n\n  .window-background {\n    background-color: rgba(0,0,0,0.6);\n    z-index: -1;\n  }\n\n  .window-container.fixed .panel {\n    min-width: 20%;\n    margin: 4% auto;\n  }\n\n  .window-container.floating .panel {\n    min-width: 20%;\n    position: fixed;\n    box-shadow: 0px 6px 24px grey;\n  }\n\n  .panel.size-relative-large { width: 80%; }\n  .panel.size-relative-middle { width: 60%; }\n  .panel.size-relative-small { width: 40%; }\n  .panel.size-large { width: 1080px; }\n  .panel.size-middle { width: 720px; }\n  .panel.size-small { width: 360px; }\n\n  .panel-heading {\n    text-align: center;\n  }\n\n  .btn-close {\n    cursor: auto;\n  }\n\n  .window-container.floating .panel-heading {\n    cursor: move;\n  }\n  "]
	        }),
	        __param(0, core_1.Optional()),
	        __param(1, core_1.Optional()), 
	        __metadata('design:paramtypes', [window_view_service_1.WindowViewService, window_view_layer_service_1.WindowViewLayerService])
	    ], WindowViewContainerComponent);
	    return WindowViewContainerComponent;
	}());
	exports.WindowViewContainerComponent = WindowViewContainerComponent;
	

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
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

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var window_view_service_1 = __webpack_require__(86);
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

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(51);
	var window_view_container_component_1 = __webpack_require__(125);
	var window_view_outlet_component_1 = __webpack_require__(127);
	var WindowViewModule = (function () {
	    function WindowViewModule() {
	    }
	    WindowViewModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule
	            ],
	            declarations: [
	                window_view_container_component_1.WindowViewContainerComponent,
	                window_view_outlet_component_1.WindowViewOutletComponent
	            ],
	            exports: [
	                window_view_container_component_1.WindowViewContainerComponent,
	                window_view_outlet_component_1.WindowViewOutletComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WindowViewModule);
	    return WindowViewModule;
	}());
	exports.WindowViewModule = WindowViewModule;
	

/***/ },

/***/ 130:
/***/ function(module, exports) {

	module.exports = "#wrapper {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  background-color: #247094;\r\n  color: #fff;\r\n}\r\n\r\na {\r\n  color: #37AAE0;\r\n}\r\n\r\n#main {\r\n  display: flex;\r\n}\r\n\r\naside,\r\n#page {\r\n  overflow: auto;\r\n}\r\n\r\n#page {\r\n  flex-grow: 1;\r\n}"

/***/ },

/***/ 131:
/***/ function(module, exports) {

	module.exports = "<div id=\"wrapper\">\r\n\r\n  <header>\r\n    <h1>{{title}}</h1>\r\n    <div class=\"progress\" *ngIf=\"loadedCount < totalLoadCount\">\r\n      <div class=\"progress-bar\" role=\"progressbar\" [style.width]=\"loadPercent + '%'\">\r\n        {{ loadPercent }}%\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <div id=\"main\">\r\n\r\n    <aside>\r\n      <nav>\r\n        <ul class=\"nav nav-pills nav-stacked\">\r\n          <li>Core Example</li>\r\n          <li role=\"presentation\"><a href=\"#simple-usage\">Simple Usage</a></li>\r\n          <li role=\"presentation\"><a href=\"#without-service\">Without Service</a></li>\r\n          <!--<li role=\"presentation\"><a href=\"#window-control\">Window Control</a></li>-->\r\n          <li role=\"presentation\"><a href=\"#access-flow\">Access Flow</a></li>\r\n          <li role=\"presentation\"><a href=\"#multi-floating-window\">Multi Floaing Window</a></li>\r\n          <li>Core API</li>\r\n          <li role=\"presentation\"><a href=\"#core-api-window-view-service\">WindowViewService</a></li>\r\n          <li role=\"presentation\"><a href=\"#core-api-window-view-layer-service\">WindowViewLayerService</a></li>\r\n          <li role=\"presentation\"><a href=\"#core-api-window-view-can-close\">WindowViewCanClose</a></li>\r\n          <li role=\"presentation\"><a href=\"#core-api-window-view-has-result\">WindowViewHasResult</a></li>\r\n          <li role=\"presentation\"><a href=\"#core-api-window-view-container\">WindowViewContainerComponent</a></li>\r\n\r\n          <hr>\r\n\r\n          <li>Components Example</li>\r\n          <li role=\"presentation\"><a href=\"#confirm-dialog-usage\">Confirm Dialog Usage</a></li>\r\n          <li>Components API</li>\r\n          <li role=\"presentation\"><a href=\"#components-api-confirm-dialog\">CondirmDialogComponent</a></li>\r\n          <li>Others</li>\r\n          <li role=\"presentation\"><a href=\"https://github.com/yujuiting/ng2-window-view\">Github</a></li>\r\n        </ul>\r\n      </nav>\r\n    </aside>\r\n\r\n    <div id=\"page\" class=\"container\">\r\n\r\n      <section id=\"import-module\" class=\"jumbotron\">\r\n        <h2>Import Module</h2>\r\n        <pre class=\"language-typescript\"\r\n             [innerHTML]=\"importModuleExample\"></pre>\r\n      </section>\r\n\r\n      <section id=\"simple-usage\" class=\"jumbotron\">\r\n        <h2>Simple Usage</h2>\r\n\r\n        <h3>Example</h3>\r\n        <app-simple-usage></app-simple-usage>\r\n\r\n        <h3>Code</h3>\r\n        <ul class=\"nav nav-tabs\">\r\n          <li role=\"presentation\"\r\n              *ngFor=\"let filename of fileList('simple-usage')\"\r\n              [class.active]=\"simpleUsageFilename === filename\">\r\n            <a (click)=\"simpleUsageFilename = filename\">{{ filename }}</a>\r\n          </li>\r\n        </ul>\r\n        <pre [class]=\"'language-' + files['simple-usage'][simpleUsageFilename]?.type\"\r\n             [innerHTML]=\"files['simple-usage'][simpleUsageFilename]?.html\"></pre>\r\n      </section>\r\n\r\n      <section id=\"without-service\" class=\"jumbotron\">\r\n        <h2>Without Service</h2>\r\n\r\n        <h3>Example</h3>\r\n        <app-without-service></app-without-service>\r\n\r\n        <h3>Code</h3>\r\n        <ul class=\"nav nav-tabs\">\r\n          <li role=\"presentation\"\r\n              *ngFor=\"let filename of fileList('without-service')\"\r\n              [class.active]=\"withoutServiceFilename === filename\">\r\n            <a (click)=\"withoutServiceFilename = filename\">{{ filename }}</a>\r\n          </li>\r\n        </ul>\r\n        <pre [class]=\"'language-' + files['without-service'][withoutServiceFilename]?.type\"\r\n             [innerHTML]=\"files['without-service'][withoutServiceFilename]?.html\"></pre>\r\n      </section>\r\n\r\n      <!--<section id=\"window-control\" class=\"jumbotron\">\r\n        <h2>Window Control</h2>\r\n\r\n        <h3>Example</h3>\r\n        <window-control></window-control>\r\n\r\n        <h3>Code</h3>\r\n        <ul class=\"nav nav-tabs\">\r\n          <li role=\"presentation\"\r\n              *ngFor=\"let filename of fileList('window-control')\"\r\n              [class.active]=\"windowControlFilename === filename\">\r\n            <a (click)=\"windowControlFilename = filename\">{{ filename }}</a>\r\n          </li>\r\n        </ul>\r\n        <pre [class]=\"'language-' + files['window-control'][windowControlFilename]?.type\"\r\n             [innerHTML]=\"files['window-control'][windowControlFilename]?.html\"></pre>\r\n      </section>-->\r\n\r\n      <section id=\"access-flow\" class=\"jumbotron\">\r\n        <h2>Access Flow</h2>\r\n\r\n        <h3>Example</h3>\r\n        <app-access-flow></app-access-flow>\r\n\r\n        <h3>Code</h3>\r\n        <ul class=\"nav nav-tabs\">\r\n          <li role=\"presentation\"\r\n              *ngFor=\"let filename of fileList('access-flow')\"\r\n              [class.active]=\"accessFlowFilename === filename\">\r\n            <a (click)=\"accessFlowFilename = filename\">{{ filename }}</a>\r\n          </li>\r\n        </ul>\r\n        <pre [class]=\"'language-' + files['access-flow'][accessFlowFilename]?.type\"\r\n             [innerHTML]=\"files['access-flow'][accessFlowFilename]?.html\"></pre>\r\n      </section>\r\n\r\n      <section id=\"multi-floating-window\" class=\"jumbotron\">\r\n        <h2>Multi Floating Window</h2>\r\n\r\n        <h3>Example</h3>\r\n        <app-multi-floating-window></app-multi-floating-window>\r\n\r\n        <h3>Code</h3>\r\n        <ul class=\"nav nav-tabs\">\r\n          <li role=\"presentation\"\r\n              *ngFor=\"let filename of fileList('multi-floating-window')\"\r\n              [class.active]=\"MultiFloatingWindowFilename === filename\">\r\n            <a (click)=\"MultiFloatingWindowFilename = filename\">{{ filename }}</a>\r\n          </li>\r\n        </ul>\r\n        <pre [class]=\"'language-' + files['multi-floating-window']?.type\"\r\n             [innerHTML]=\"files['multi-floating-window'][MultiFloatingWindowFilename]?.html\"></pre>\r\n      </section>\r\n\r\n      <section id=\"core-api\" class=\"jumbotron\">\r\n        <h2>Core API</h2>\r\n\r\n        <h3 id=\"core-api-window-view-service\">WindowViewService</h3>\r\n        <pre [class]=\"'language-' + files['core-api']['window-view.service.d.ts']?.type\"\r\n             [innerHTML]=\"files['core-api']['window-view.service.d.ts']?.html\"></pre>\r\n\r\n        <h3 id=\"core-api-window-view-layer-service\">WindowViewLayerService</h3>\r\n        <pre [class]=\"'language-' + files['core-api']['window-view-layer.service.d.ts']?.type\"\r\n             [innerHTML]=\"files['core-api']['window-view-layer.service.d.ts']?.html\"></pre>\r\n\r\n        <h3 id=\"core-api-window-view-can-close\">WindowViewCanClose</h3>\r\n        <pre [class]=\"'language-' + files['core-api']['window-view-can-close.d.ts']?.type\"\r\n             [innerHTML]=\"files['core-api']['window-view-can-close.d.ts']?.html\"></pre>\r\n        \r\n        <h3 id=\"core-api-window-view-has-result\">WindowViewHasResult</h3>\r\n        <pre [class]=\"'language-' + files['core-api']['window-view-has-result.d.ts']?.type\"\r\n             [innerHTML]=\"files['core-api']['window-view-has-result.d.ts']?.html\"></pre>\r\n\r\n        <h3 id=\"core-api-window-view-container\">WindowViewContainer</h3>\r\n        <pre [class]=\"'language-' + files['core-api']['window-view-container.component.d.ts']?.type\"\r\n             [innerHTML]=\"files['core-api']['window-view-container.component.d.ts']?.html\"></pre>\r\n\r\n      </section>\r\n\r\n      <hr>\r\n\r\n      <section id=\"confirm-dialog-usage\" class=\"jumbotron\">\r\n        <h2>Confirm Dialog</h2>\r\n\r\n        <h3>Example</h3>\r\n        <app-confirm-dialog-usage></app-confirm-dialog-usage>\r\n\r\n        <h3>Code</h3>\r\n        <ul class=\"nav nav-tabs\">\r\n          <li role=\"presentation\"\r\n              *ngFor=\"let filename of fileList('confirm-dialog-usage')\"\r\n              [class.active]=\"confirmDialogUsageFilename === filename\">\r\n            <a (click)=\"confirmDialogUsageFilename = filename\">{{ filename }}</a>\r\n          </li>\r\n        </ul>\r\n        <pre [class]=\"'language-' + files['confirm-dialog-usage']?.type\"\r\n             [innerHTML]=\"files['confirm-dialog-usage'][confirmDialogUsageFilename]?.html\"></pre>\r\n      </section>\r\n\r\n      <section id=\"components-api\" class=\"jumbotron\">\r\n        <h2>Components API</h2>\r\n\r\n        <h3 id=\"components-api-confirm-dialog\">ConfirmDialogComponent</h3>\r\n        <pre [class]=\"'language-' + files['components-api']['confirm-dialog.component.d.ts']?.type\"\r\n             [innerHTML]=\"files['components-api']['confirm-dialog.component.d.ts']?.html\"></pre>\r\n\r\n      </section>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ },

/***/ 132:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"openWindow()\">Open Window</button>\n<div *ngIf=\"!!username\">\n  Hello, {{ username }}!\n</div>\n<window-view-outlet></window-view-outlet>"

/***/ },

/***/ 133:
/***/ function(module, exports) {

	module.exports = "<window-view-container [heading]=\"title\" size=\"s\">\n  <div class=\"form-group\">\n    <label>username?</label>\n    <input class=\"form-control\" [(ngModel)]=\"username\" type=\"string\" placeholder=\"Please enter your username\">\n    <div class=\"alert alert-danger\" *ngIf=\"!!alert\">{{ alert }}</div>\n  </div>\n\n  <div panel-footer>\n    <button class=\"btn btn-default\" (click)=\"submit()\">Submit</button>\n  </div>\n</window-view-container>"

/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports = "<window-view-container [heading]=\"title\"\n                       size=\"s\"\n                       [floating]=\"floating\"\n                       [showBackground]=\"showBackground\"\n                       (close)=\"closeWindow()\">\n</window-view-container>"

/***/ },

/***/ 135:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"openWindow()\">Open Window</button>\n\n<window-view-outlet></window-view-outlet>"

/***/ },

/***/ 136:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"openWindow()\">Open Window</button>\n\n<div class=\"form-group\">\n  <label>Title</label>\n  <input class=\"form-control\" [(ngModel)]=\"title\" type=\"string\">\n</div>\n\n<div class=\"checkbox\">\n  <label>\n    <input type=\"checkbox\" [(ngModel)]=\"isFloatingWindow\">\n    Floating window\n  </label>\n</div>\n\n<div class=\"checkbox\">\n  <label>\n    <input type=\"checkbox\" [(ngModel)]=\"showBackground\">\n    Show background\n  </label>\n</div>\n\n<div class=\"form-group\">\n  <label>Window size</label>\n  <select class=\"form-control\" [(ngModel)]=\"windowSize\">\n    <option value=\"small\">small</option>\n    <option value=\"middle\">middle</option>\n    <option value=\"large\">large</option>\n    <option value=\"relative-small\">relative-small</option>\n    <option value=\"relative-middle\">relative-middle</option>\n    <option value=\"relative-large\">relative-large</option>\n  </select>\n</div>\n\n<div class=\"form-group\">\n  <label>Panel class</label>\n  <select class=\"form-control\" [(ngModel)]=\"panelClass\">\n    <option value=\"panel-default\">panel-default</option>\n    <option value=\"panel-primary\">panel-primary</option>\n    <option value=\"panel-success\">panel-success</option>\n    <option value=\"panel-info\">panel-info</option>\n    <option value=\"panel-warning\">panel-warning</option>\n    <option value=\"panel-danger\">panel-danger</option>\n  </select>\n</div>\n<window-view-outlet></window-view-outlet>"

/***/ },

/***/ 137:
/***/ function(module, exports) {

	module.exports = "<window-view-container [heading]=\"title\"\n                       [size]=\"windowSize\"\n                       [floating]=\"isFloatingWindow\"\n                       [showBackground]=\"showBackground\"\n                       [panelClass]=\"panelClass\">\n  It's a window!\n\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input class=\"form-control\" [(ngModel)]=\"title\" type=\"string\">\n  </div>\n\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" [(ngModel)]=\"isFloatingWindow\">\n      Floating window\n    </label>\n  </div>\n\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" [(ngModel)]=\"showBackground\">\n      Show background\n    </label>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Window size</label>\n    <select class=\"form-control\" [(ngModel)]=\"windowSize\">\n      <option value=\"small\">small</option>\n      <option value=\"middle\">middle</option>\n      <option value=\"large\">large</option>\n      <option value=\"relative-small\">relative-small</option>\n      <option value=\"relative-middle\">relative-middle</option>\n      <option value=\"relative-large\">relative-large</option>\n    </select>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Panel class</label>\n    <select class=\"form-control\" [(ngModel)]=\"panelClass\">\n      <option value=\"panel-default\">panel-default</option>\n      <option value=\"panel-primary\">panel-primary</option>\n      <option value=\"panel-success\">panel-success</option>\n      <option value=\"panel-info\">panel-info</option>\n      <option value=\"panel-warning\">panel-warning</option>\n      <option value=\"panel-danger\">panel-danger</option>\n    </select>\n  </div>\n\n  <button class=\"btn btn-default\" (click)=\"openWindow()\">Open anothor window</button>\n</window-view-container>"

/***/ },

/***/ 138:
/***/ function(module, exports) {

	module.exports = "<button class=\"btn btn-default\" (click)=\"showWindow = true\">Open Window</button>\n\n<window-view-container *ngIf=\"showWindow\"\n                       (close)=\"showWindow = false\">\n  No Service!!\n\n</window-view-container>"

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(46);
	var Observable_1 = __webpack_require__(44);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Converts a Promise to an Observable.
	     *
	     * <span class="informal">Returns an Observable that just emits the Promise's
	     * resolved value, then completes.</span>
	     *
	     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
	     * Observable. If the Promise resolves with a value, the output Observable
	     * emits that resolved value as a `next`, and then completes. If the Promise
	     * is rejected, then the output Observable emits the corresponding Error.
	     *
	     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
	     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindCallback}
	     * @see {@link from}
	     *
	     * @param {Promise<T>} promise The promise to be converted.
	     * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
	     * the delivery of the resolved value (or the rejection).
	     * @return {Observable<T>} An Observable which wraps the Promise.
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */
	    PromiseObservable.create = function (promise, scheduler) {
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.closed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.closed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.closed) {
	                        subscriber.error(err);
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            if (this._isScalar) {
	                if (!subscriber.closed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.closed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.closed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable));
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(arg) {
	    var value = arg.value, subscriber = arg.subscriber;
	    if (!subscriber.closed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err, subscriber = arg.subscriber;
	    if (!subscriber.closed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PromiseObservable_1 = __webpack_require__(140);
	exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(46);
	/* tslint:disable:max-line-length */
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(53);
	var http_1 = __webpack_require__(87);
	var forms_1 = __webpack_require__(52);
	var src_1 = __webpack_require__(28);
	var components_1 = __webpack_require__(321);
	var app_component_1 = __webpack_require__(123);
	var access_flow_component_1 = __webpack_require__(312);
	// import { CheckedWindowComponent } from './shared/checked-window/checked-window.component';
	// import { FloatingWindowComponent } from './shared/floating-window/floating-window.component';
	var multi_floating_window_component_1 = __webpack_require__(316);
	var simple_usage_component_1 = __webpack_require__(317);
	// import { SimpleWindowComponent } from './shared/simple-window/simple-window.component';
	var without_service_component_1 = __webpack_require__(319);
	var confirm_dialog_usage_component_1 = __webpack_require__(314);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                app_component_1.AppComponent,
	                access_flow_component_1.AccessFlowComponent,
	                // CheckedWindowComponent,
	                // FloatingWindowComponent,
	                multi_floating_window_component_1.MultiFloatingWindowComponent,
	                simple_usage_component_1.SimpleUsageComponent,
	                // SimpleWindowComponent,
	                without_service_component_1.WithoutServiceComponent,
	                confirm_dialog_usage_component_1.ConfirmDialogUsageComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule,
	                http_1.HttpModule,
	                forms_1.FormsModule,
	                src_1.WindowViewModule,
	                components_1.WindowViewComponentModule
	            ],
	            entryComponents: [],
	            providers: [],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;
	

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(123));
	__export(__webpack_require__(310));
	

/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var common_1 = __webpack_require__(51);
	var forms_1 = __webpack_require__(52);
	var src_1 = __webpack_require__(28);
	var checked_window_component_1 = __webpack_require__(313);
	var AccessFlowComponent = (function () {
	    function AccessFlowComponent(windowView) {
	        this.windowView = windowView;
	    }
	    AccessFlowComponent.prototype.openWindow = function () {
	        var _this = this;
	        this.windowView.pushUnwrapDynamicWindow(checked_window_component_1.CheckedWindowComponent, { imports: [forms_1.FormsModule, common_1.CommonModule] }).then(function (checkedWindow) {
	            var waitResult = checkedWindow.result$.subscribe(function (username) { return _this.username = username; }, function () { return delete _this.username; }, function () { return waitResult.unsubscribe(); });
	        });
	    };
	    AccessFlowComponent = __decorate([
	        core_1.Component({
	            selector: 'app-access-flow',
	            template: __webpack_require__(132),
	            providers: [src_1.WindowViewService]
	        }), 
	        __metadata('design:paramtypes', [src_1.WindowViewService])
	    ], AccessFlowComponent);
	    return AccessFlowComponent;
	}());
	exports.AccessFlowComponent = AccessFlowComponent;
	

/***/ },

/***/ 313:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var Subject_1 = __webpack_require__(45);
	var src_1 = __webpack_require__(28);
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
	        core_1.ViewChild(src_1.WindowViewContainerComponent), 
	        __metadata('design:type', src_1.WindowViewContainerComponent)
	    ], CheckedWindowComponent.prototype, "windowViewContainer", void 0);
	    CheckedWindowComponent = __decorate([
	        core_1.Component({
	            selector: 'app-checked-window',
	            template: __webpack_require__(133)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CheckedWindowComponent);
	    return CheckedWindowComponent;
	}());
	exports.CheckedWindowComponent = CheckedWindowComponent;
	

/***/ },

/***/ 314:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
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
	            template: "\n  <confirm-dialog *ngIf=\"showDialog\"\n                  [confirmString]=\"confirmString\"\n                  [denyString]=\"denyString\"\n                  [title]=\"title\"\n                  (result)=\"result($event)\"\n                  (dismiss)=\"dismiss()\">\n    <div style=\"text-align:center\">\n      <img src=\"http://ia.media-imdb.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.._UX214_CR0,0,214,317_AL_.jpg\">\n    </div>\n  </confirm-dialog>\n  <button class=\"btn btn-default\" (click)=\"showDialog=true\">Sexy Woman</button>\n  <div *ngIf=\"ending\">\n    {{ ending }}\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ConfirmDialogUsageComponent);
	    return ConfirmDialogUsageComponent;
	}());
	exports.ConfirmDialogUsageComponent = ConfirmDialogUsageComponent;
	

/***/ },

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var src_1 = __webpack_require__(28);
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
	        this.windowView.removeByInstance(this);
	    };
	    __decorate([
	        core_1.ViewChild(src_1.WindowViewContainerComponent), 
	        __metadata('design:type', src_1.WindowViewContainerComponent)
	    ], FloatingWindowComponent.prototype, "windowViewContainer", void 0);
	    FloatingWindowComponent = __decorate([
	        core_1.Component({
	            selector: 'app-floating-window',
	            template: __webpack_require__(134)
	        }), 
	        __metadata('design:paramtypes', [src_1.WindowViewService])
	    ], FloatingWindowComponent);
	    return FloatingWindowComponent;
	}());
	exports.FloatingWindowComponent = FloatingWindowComponent;
	

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var src_1 = __webpack_require__(28);
	var floating_window_component_1 = __webpack_require__(315);
	var MultiFloatingWindowComponent = (function () {
	    function MultiFloatingWindowComponent(windowView) {
	        this.windowView = windowView;
	    }
	    MultiFloatingWindowComponent.prototype.openWindow = function () {
	        var _this = this;
	        this.windowView.pushUnwrapDynamicWindow(floating_window_component_1.FloatingWindowComponent).then(function (simpleWindow) {
	            var lastWindow = _this.windowView.getInstanceAt(_this.windowView.length - 2);
	            if (lastWindow) {
	                var position = lastWindow.position;
	                position.x += 400;
	                simpleWindow.position = position;
	            }
	        });
	    };
	    MultiFloatingWindowComponent = __decorate([
	        core_1.Component({
	            selector: 'app-multi-floating-window',
	            template: __webpack_require__(135),
	            providers: [
	                src_1.WindowViewService,
	                src_1.WindowViewLayerService
	            ]
	        }), 
	        __metadata('design:paramtypes', [src_1.WindowViewService])
	    ], MultiFloatingWindowComponent);
	    return MultiFloatingWindowComponent;
	}());
	exports.MultiFloatingWindowComponent = MultiFloatingWindowComponent;
	

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var src_1 = __webpack_require__(28);
	var simple_window_component_1 = __webpack_require__(318);
	var forms_1 = __webpack_require__(52);
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
	        this.windowView.pushUnwrapDynamicWindow(simple_window_component_1.SimpleWindowComponent, {
	            imports: [forms_1.FormsModule]
	        }).then(function (simpleWindow) {
	            simpleWindow.title = _this.title;
	            simpleWindow.isFloatingWindow = _this.isFloatingWindow;
	            simpleWindow.showBackground = _this.showBackground;
	            simpleWindow.windowSize = _this.windowSize;
	            simpleWindow.panelClass = _this.panelClass;
	        });
	    };
	    SimpleUsageComponent = __decorate([
	        core_1.Component({
	            selector: 'app-simple-usage',
	            template: __webpack_require__(136),
	            providers: [src_1.WindowViewService]
	        }), 
	        __metadata('design:paramtypes', [src_1.WindowViewService])
	    ], SimpleUsageComponent);
	    return SimpleUsageComponent;
	}());
	exports.SimpleUsageComponent = SimpleUsageComponent;
	

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var src_1 = __webpack_require__(28);
	var forms_1 = __webpack_require__(52);
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
	        var _this = this;
	        // this.windowView.pushWindow(SimpleWindowComponent);
	        this.windowView.pushUnwrapDynamicWindow(SimpleWindowComponent, {
	            imports: [forms_1.FormsModule]
	        }).then(function (simpleWindow) {
	            simpleWindow.title = _this.title;
	            simpleWindow.isFloatingWindow = _this.isFloatingWindow;
	            simpleWindow.showBackground = _this.showBackground;
	            simpleWindow.windowSize = _this.windowSize;
	            simpleWindow.panelClass = _this.panelClass;
	        });
	    };
	    __decorate([
	        core_1.ViewChild(src_1.WindowViewContainerComponent), 
	        __metadata('design:type', src_1.WindowViewContainerComponent)
	    ], SimpleWindowComponent.prototype, "windowViewContainer", void 0);
	    SimpleWindowComponent = __decorate([
	        core_1.Component({
	            selector: 'app-simple-window',
	            template: __webpack_require__(137)
	        }), 
	        __metadata('design:paramtypes', [src_1.WindowViewService])
	    ], SimpleWindowComponent);
	    return SimpleWindowComponent;
	}());
	exports.SimpleWindowComponent = SimpleWindowComponent;
	

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var WithoutServiceComponent = (function () {
	    function WithoutServiceComponent() {
	    }
	    WithoutServiceComponent.prototype.ngOnInit = function () {
	    };
	    WithoutServiceComponent = __decorate([
	        core_1.Component({
	            selector: 'app-without-service',
	            template: __webpack_require__(138)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WithoutServiceComponent);
	    return WithoutServiceComponent;
	}());
	exports.WithoutServiceComponent = WithoutServiceComponent;
	

/***/ },

/***/ 320:
/***/ function(module, exports) {

	"use strict";
	exports.environment = {
	    production: false
	};
	

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(124));
	__export(__webpack_require__(322));
	

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(5);
	var _1 = __webpack_require__(28);
	var confirm_dialog_component_1 = __webpack_require__(124);
	var WindowViewComponentModule = (function () {
	    function WindowViewComponentModule() {
	    }
	    WindowViewComponentModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                _1.WindowViewModule
	            ],
	            declarations: [
	                confirm_dialog_component_1.ConfirmDialogComponent
	            ],
	            exports: [
	                confirm_dialog_component_1.ConfirmDialogComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WindowViewComponentModule);
	    return WindowViewComponentModule;
	}());
	exports.WindowViewComponentModule = WindowViewComponentModule;
	

/***/ }

});
//# sourceMappingURL=main.map