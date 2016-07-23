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
var components_1 = require('../../../components');
var ConfirmDialogUsageComponent = (function () {
    function ConfirmDialogUsageComponent() {
        this.title = 'Sexy Woman';
        this.content = 'Are you hungry?';
        this.confirmString = 'Yyyyyyyyyy';
        this.denyString = 'Nnnnnnnnn';
    }
    /**
     * e: {
     *  target: ConfirmDialogComponent,
     *  result: boolean
     * }
     */
    ConfirmDialogUsageComponent.prototype.result = function (e) {
        if (e.result) {
            this.ending = 'Buuuusy tonight.';
        }
        else {
            this.ending = 'coding tonight.';
        }
        this.showDialog = false;
    };
    ConfirmDialogUsageComponent.prototype.dismiss = function () {
        delete this.ending;
        this.showDialog = false;
    };
    ConfirmDialogUsageComponent = __decorate([
        core_1.Component({
            selector: 'confirm-dialog-usage',
            template: "\n  <confirm-dialog *ngIf=\"showDialog\"\n                  [confirmString]=\"confirmString\"\n                  [denyString]=\"denyString\"\n                  [title]=\"title\"\n                  (result)=\"result($event)\"\n                  (dismiss)=\"dismiss()\">\n    <div style=\"text-align:center\">\n      <img src=\"http://ia.media-imdb.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.._UX214_CR0,0,214,317_AL_.jpg\">\n    </div>\n  </confirm-dialog>\n  <button class=\"btn btn-default\" (click)=\"showDialog=true\">Sexy Woman</button>\n  <div *ngIf=\"ending\">\n    {{ ending }}\n  </div>\n  ",
            directives: [components_1.ConfirmDialogComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmDialogUsageComponent);
    return ConfirmDialogUsageComponent;
}());
exports.ConfirmDialogUsageComponent = ConfirmDialogUsageComponent;
//# sourceMappingURL=/confirm-dialog/confirm-dialog-usage.component.js.map