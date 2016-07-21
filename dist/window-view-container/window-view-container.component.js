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
var window_view_service_1 = require('../window-view.service');
var WindowViewContainerComponent = (function () {
    function WindowViewContainerComponent(windowView) {
        this.windowView = windowView;
        this.heading = 'Untitled Window';
        this.size = 'M';
        this.canClose = function () { return true; };
    }
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
    WindowViewContainerComponent.prototype.clickBackground = function ($event) {
        if ($event.currentTarget == $event.target) {
            this.close();
        }
    };
    WindowViewContainerComponent.prototype.close = function () {
        if (this.canClose()) {
            this.windowView.popWindow();
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
        __metadata('design:type', Function)
    ], WindowViewContainerComponent.prototype, "canClose", void 0);
    WindowViewContainerComponent = __decorate([
        core_1.Component({
            selector: 'window-view-container',
            templateUrl: 'window-container.component.html',
            styleUrls: ['window-container.component.css']
        }), 
        __metadata('design:paramtypes', [window_view_service_1.WindowViewService])
    ], WindowViewContainerComponent);
    return WindowViewContainerComponent;
}());
exports.WindowViewContainerComponent = WindowViewContainerComponent;
//# sourceMappingURL=/window-view-container/window-view-container.component.js.map