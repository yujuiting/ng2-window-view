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
var floating_window_component_1 = require('./floating-window.component');
var WindowViewLayerUsageComponent = (function () {
    function WindowViewLayerUsageComponent(windowView) {
        this.windowView = windowView;
    }
    WindowViewLayerUsageComponent.prototype.openWindow = function () {
        this.windowView.pushWindow(floating_window_component_1.FloatingWindowComponent);
    };
    WindowViewLayerUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'window-view-layer-usage.component.html',
            providers: [
                _1.WindowViewService,
                _1.WindowViewLayerService
            ]
        }), 
        __metadata('design:paramtypes', [_1.WindowViewService])
    ], WindowViewLayerUsageComponent);
    return WindowViewLayerUsageComponent;
}());
exports.WindowViewLayerUsageComponent = WindowViewLayerUsageComponent;
//# sourceMappingURL=/window-view-layer/window-view-layer-usage.component.js.map