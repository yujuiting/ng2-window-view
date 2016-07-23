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
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var WindowViewService = (function () {
    function WindowViewService(dcl) {
        this.dcl = dcl;
        this.stack = [];
        this._length$ = new Subject_1.Subject();
        this._onOpen$ = new Subject_1.Subject();
        this._onClose$ = new Subject_1.Subject();
    }
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
    /**
     * Add window to top.
     */
    WindowViewService.prototype.pushWindow = function (Component, providers) {
        var _this = this;
        if (providers === void 0) { providers = []; }
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
        var componentRef = this.stack.pop();
        if (!this.canCloseWindowView(componentRef)) {
            this.stack.push(componentRef);
            return false;
        }
        this._onClose$.next(componentRef);
        this._length$.next(this.stack.length);
        componentRef.destroy();
        return true;
    };
    WindowViewService.prototype.canCloseWindowView = function (componentRef) {
        if (typeof componentRef.instance.windowViewCanClose != 'function') {
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
//# sourceMappingURL=/lib/window-view.service.js.map