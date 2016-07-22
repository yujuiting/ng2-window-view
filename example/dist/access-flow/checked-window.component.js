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
var _1 = require('../../../');
var Subject_1 = require('rxjs/Subject');
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
            selector: 'checked-window',
            templateUrl: 'checked-window.component.html',
            directives: [_1.WindowViewContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckedWindowComponent);
    return CheckedWindowComponent;
}());
exports.CheckedWindowComponent = CheckedWindowComponent;
//# sourceMappingURL=/access-flow/checked-window.component.js.map