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
var _2 = require('../../../');
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
            selector: 'simple-window',
            templateUrl: 'floating-window.component.html',
            directives: [_1.WindowViewContainerComponent]
        }), 
        __metadata('design:paramtypes', [_2.WindowViewService])
    ], FloatingWindowComponent);
    return FloatingWindowComponent;
}());
exports.FloatingWindowComponent = FloatingWindowComponent;
//# sourceMappingURL=/window-view-layer-usage/floating-window.component.js.map