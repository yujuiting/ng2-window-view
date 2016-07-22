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
var checked_window_component_1 = require('./checked-window.component');
var AccessFlowComponent = (function () {
    function AccessFlowComponent(windowView) {
        this.windowView = windowView;
    }
    AccessFlowComponent.prototype.openWindow = function () {
        var _this = this;
        this.windowView.pushWindow(checked_window_component_1.CheckedWindowComponent)
            .then(function (componentRef) {
            var checkedWindow = componentRef.instance;
            var waitResult = checkedWindow.result$.subscribe(function (username) { return _this.username = username; }, function () { return delete _this.username; }, function () { return waitResult.unsubscribe(); });
        });
    };
    AccessFlowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'access-flow',
            templateUrl: 'access-flow.component.html',
            directives: [_1.WindowViewOutletComponent],
            providers: [_1.WindowViewService]
        }), 
        __metadata('design:paramtypes', [_1.WindowViewService])
    ], AccessFlowComponent);
    return AccessFlowComponent;
}());
exports.AccessFlowComponent = AccessFlowComponent;
//# sourceMappingURL=/access-flow/access-flow.component.js.map