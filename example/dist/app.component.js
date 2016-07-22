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
var simple_usage_component_1 = require('./simple-usage/simple-usage.component');
var window_control_component_1 = require('./window-control/window-control.component');
var access_flow_component_1 = require('./access-flow/access-flow.component');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.files = {};
        // ui status
        this.title = 'ng2-window-view example';
        this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-usage.component.ts');
        this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-usage.component.html');
        this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-window.component.ts');
        this.loadFile('simple-usage', 'example/src/simple-usage', 'simple-window.component.html');
        this.simpleUsageFilename = 'simple-usage.component.ts';
        this.loadFile('window-control', 'example/src/window-control', 'window-control.component.ts');
        this.loadFile('window-control', 'example/src/window-control', 'window-control.component.html');
        this.loadFile('window-control', 'example/src/window-control', 'controled-window.component.ts');
        this.loadFile('window-control', 'example/src/window-control', 'controled-window.component.html');
        this.windowControlFilename = 'window-control.component.ts';
        this.loadFile('access-flow', 'example/src/access-flow', 'access-flow.component.ts');
        this.loadFile('access-flow', 'example/src/access-flow', 'access-flow.component.html');
        this.loadFile('access-flow', 'example/src/access-flow', 'checked-window.component.ts');
        this.loadFile('access-flow', 'example/src/access-flow', 'checked-window.component.html');
        this.accessFlowFilename = 'access-flow.component.ts';
        this.loadFile('API', 'lib', 'window-view.service.d.ts');
        this.loadFile('API', 'lib', 'window-view-can-close.d.ts');
        this.loadFile('API', 'lib/window-view-container', 'window-view-container.component.d.ts');
    }
    AppComponent.prototype.fileList = function (group) {
        return Object.keys(this.files[group]);
    };
    AppComponent.prototype.loadFile = function (group, dir, filename) {
        var _this = this;
        this.files[group] = this.files[group] || {};
        var language = 'javascript';
        if (!!/html$/.test(filename)) {
            language = 'html';
        }
        var loadFile = this.http.get(dir + "/" + filename)
            .subscribe(function (response) {
            _this.files[group][filename] = Prism.highlight(response.text(), Prism.languages[language]);
        }, function (error) { return console.warn(error); }, function () { return loadFile.unsubscribe(); });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [
                simple_usage_component_1.SimpleUsageComponent,
                window_control_component_1.WindowControlComponent,
                access_flow_component_1.AccessFlowComponent
            ]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=/app.component.js.map