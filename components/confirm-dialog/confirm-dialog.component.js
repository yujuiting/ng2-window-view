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
var _1 = require('../../');
var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent() {
        this.title = 'Confirm';
        this.confirmString = 'Ok';
        this.denyString = 'Cancel';
        this.size = 's';
        this.result = new core_1.EventEmitter();
        this.dismiss = new core_1.EventEmitter();
        this._result$ = new Subject_1.Subject();
    }
    Object.defineProperty(ConfirmDialogComponent.prototype, "result$", {
        get: function () { return this._result$.asObservable(); },
        enumerable: true,
        configurable: true
    });
    ConfirmDialogComponent.prototype.confirm = function () {
        this._result$.next(true);
        this._result$.complete();
        this.result.emit({ target: this, result: true });
    };
    ConfirmDialogComponent.prototype.deny = function () {
        this._result$.next(false);
        this._result$.complete();
        this.result.emit({ target: this, result: false });
    };
    ConfirmDialogComponent.prototype.onClose = function () {
        this._result$.complete();
        this.dismiss.emit({ target: this });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmDialogComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmDialogComponent.prototype, "confirmString", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmDialogComponent.prototype, "denyString", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmDialogComponent.prototype, "content", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ConfirmDialogComponent.prototype, "size", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ConfirmDialogComponent.prototype, "result", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ConfirmDialogComponent.prototype, "dismiss", void 0);
    __decorate([
        core_1.ViewChild(_1.WindowViewContainerComponent), 
        __metadata('design:type', _1.WindowViewContainerComponent)
    ], ConfirmDialogComponent.prototype, "windowViewContainer", void 0);
    ConfirmDialogComponent = __decorate([
        core_1.Component({
            selector: 'confirm-dialog',
            template: `
              <window-view-container [heading]="title"
                                     [size]="size"
                                     (close)="onClose()">
                <div class="confirm-dialog-content">
                  {{ content }}
                  <ng-content></ng-content>
                </div>

                <div class="container row confirm-dialog-button-set">
                  <button class="btn btn-primary" (click)="confirm()">
                    {{ confirmString }}
                  </button>

                  <button class="btn btn-default" (click)="deny()">
                    {{ denyString }}
                  </button>
                </div>
              </window-view-container>
            `,
            styles: [`
              .confirm-dialog-content {
                margin: 12px;
              }
              .confirm-dialog-button-set {
                margin: 0 auto;
                text-align: center;
              }
            `],
            directives: [_1.WindowViewContainerComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());
exports.ConfirmDialogComponent = ConfirmDialogComponent;
//# sourceMappingURL=/components/confirm-dialog/confirm-dialog.component.js.map