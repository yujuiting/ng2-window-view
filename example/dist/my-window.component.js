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
var _1 = require('../../');
var Subject_1 = require('rxjs/Subject');
var MyWindowComponent = (function () {
    function MyWindowComponent() {
        this.title = 'My Window';
        this.result$ = new Subject_1.Subject();
    }
    MyWindowComponent.prototype.yes = function () {
        this.result$.next(true);
        this.close();
    };
    MyWindowComponent.prototype.no = function () {
        this.result$.next(false);
        this.close();
    };
    MyWindowComponent.prototype.close = function () {
        this.windowViewContainer.close();
    };
    __decorate([
        core_1.ViewChild(_1.WindowViewContainerComponent), 
        __metadata('design:type', _1.WindowViewContainerComponent)
    ], MyWindowComponent.prototype, "windowViewContainer", void 0);
    MyWindowComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n    <window-view-container [heading]=\"title\" size=\"s\">\n      It's a window!!\n      <button (click)=\"yes()\">Yes</button>\n      <button (click)=\"no()\">No</button>\n    </window-view-container>\n  ",
            directives: [
                _1.WindowViewContainerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MyWindowComponent);
    return MyWindowComponent;
}());
exports.MyWindowComponent = MyWindowComponent;
//# sourceMappingURL=/my-window.component.js.map