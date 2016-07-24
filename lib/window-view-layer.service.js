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
//# sourceMappingURL=/lib/window-view-layer.service.js.map