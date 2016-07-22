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
var IsolateWindowComponent = (function () {
    function IsolateWindowComponent() {
        this.title = 'Isolate Window';
        this.isFloatingWindow = false;
        this.showBackground = true;
        this.windowSize = 'small';
        this.panelClass = 'panel-default';
        this.close = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], IsolateWindowComponent.prototype, "close", void 0);
    IsolateWindowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'isolate-window',
            templateUrl: 'isolate-window.component.html',
            directives: [_1.WindowViewContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], IsolateWindowComponent);
    return IsolateWindowComponent;
}());
exports.IsolateWindowComponent = IsolateWindowComponent;
//# sourceMappingURL=/without-service/isolate-window.component.js.map