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
var simple_window_component_1 = require('./simple-window.component');
var SimpleUsageComponent = (function () {
    function SimpleUsageComponent(windowView) {
        this.windowView = windowView;
    }
    SimpleUsageComponent.prototype.openWindow = function () {
        this.windowView.pushWindow(simple_window_component_1.SimpleWindowComponent);
    };
    SimpleUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'simple-usage',
            templateUrl: 'simple-usage.component.html',
            directives: [_1.WindowViewOutletComponent],
            providers: [_1.WindowViewService]
        }), 
        __metadata('design:paramtypes', [_1.WindowViewService])
    ], SimpleUsageComponent);
    return SimpleUsageComponent;
}());
exports.SimpleUsageComponent = SimpleUsageComponent;
//# sourceMappingURL=/simple-usage/simple-usage.component.js.map