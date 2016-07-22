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
var http_1 = require('@angular/http');
var _1 = require('../../');
var my_window_component_1 = require('./my-window.component');
var AppComponent = (function () {
    function AppComponent(windowView, http) {
        var _this = this;
        this.windowView = windowView;
        this.title = 'ng2-window-view example';
        var loadAppComponentTS = http.get('example/app.component.ts').subscribe(function (response) { return _this.appComponentTS = Prism.highlight(response.text(), Prism.languages['javascript']); }, function (error) { return console.warn(error); }, function () { return loadAppComponentTS.unsubscribe(); });
        var loadMyWindowComponentTS = http.get('example/my-window.component.ts').subscribe(function (response) { return _this.myWindowComponentTS = Prism.highlight(response.text(), Prism.languages['javascript']); }, function (error) { return console.warn(error); }, function () { return loadMyWindowComponentTS.unsubscribe(); });
    }
    AppComponent.prototype.openWindow = function () {
        this.windowView.pushWindow(my_window_component_1.MyWindowComponent);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: `
              <div class="row">
                <header class="col-md-12">
                  <h1>{{title}}</h1>
                </header>

                <div class="col-md-12">
                  <h2>Usage</h2>
                  <section class="col-md-8">
                    <h3>app.component.ts</h3>
                    <pre [innerHTML]="appComponentTS"></pre>
      
                    <h3>my-window.component.ts</h3>
                    <pre [innerHTML]="myWindowComponentTS"></pre>
                  </section>

                  <section class="col-md-4">
                    <button (click)="openWindow()">Open Window</button>
                  </section>
                </div>
              </div>
              <window-view-outlet></window-view-outlet>
            `,
            directives: [
                _1.WindowViewOutletComponent
            ],
            providers: [
                _1.WindowViewService
            ]
        }), 
        __metadata('design:paramtypes', [_1.WindowViewService, http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/example/src/app.component.js.map