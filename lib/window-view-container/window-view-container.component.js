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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var window_view_service_1 = require('../window-view.service');
var window_view_layer_service_1 = require('../window-view-layer.service');
var WindowViewContainerComponent = (function () {
    function WindowViewContainerComponent(windowView, windowViewLayer) {
        this.windowView = windowView;
        this.windowViewLayer = windowViewLayer;
        /**
         * Window title.
         *
         * Default: 'Untitled Window'
         */
        this.heading = 'Untitled Window';
        /**
         * Possible option:
         *  small, alias 's'
         *  middle, alias 'm'
         *  large, alias 'l'
         *  relative-small, alias 'rs'
         *  relative-middle, alias 'rm'
         *  relative-large, alias 'rl'
         *
         * Default: 'm'
         */
        this.size = 'M';
        /**
         * Prevent display transparent background.
         *
         * Default: true
         */
        this.showBackground = true;
        /**
         * Floating window, can be drag.
         *
         * Default: false
         */
        this.floating = false;
        /**
         * Panel class.
         *
         * Default: 'panel-default'
         */
        this.panelClass = 'panel-default';
        this.hideContainer = false;
        this.close = new core_1.EventEmitter();
        this.zIndex = 10;
        this.top = 0;
        this.left = 0;
        this.isDragging = false;
        this.draggingRelativeLocation = { x: 0, y: 0 };
    }
    Object.defineProperty(WindowViewContainerComponent.prototype, "position", {
        get: function () { return { x: this.left, y: this.top }; },
        set: function (value) {
            this.top = value.y;
            this.left = value.x;
        },
        enumerable: true,
        configurable: true
    });
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
    WindowViewContainerComponent.prototype.ngOnInit = function () {
        if (typeof this.size !== 'string') {
            throw new Error('[WindowViewContainerComponent] property `size` has to be string.');
        }
        if (this.windowViewLayer) {
            this.windowViewLayer.add(this);
        }
        this.hideContainer = this.floating && !!this.windowViewLayer;
    };
    WindowViewContainerComponent.prototype.ngOnDestroy = function () {
        if (this.windowViewLayer) {
            this.windowViewLayer.remove(this);
        }
    };
    WindowViewContainerComponent.prototype.closeWindow = function () {
        this.close.emit({ target: this });
        if (this.floating && this.windowViewLayer) {
            return;
        }
        if (this.windowView) {
            this.windowView.popWindow();
            return;
        }
    };
    WindowViewContainerComponent.prototype.onClickWindow = function () {
        if (this.floating && this.windowViewLayer) {
            this.windowViewLayer.bringToTop(this);
        }
    };
    WindowViewContainerComponent.prototype.onClickBackground = function ($event) {
        if ($event.currentTarget == $event.target) {
            this.closeWindow();
        }
    };
    WindowViewContainerComponent.prototype.onMouseDown = function (e) {
        if (this.floating) {
            this.isDragging = true;
            this.draggingRelativeLocation.x = e.offsetX;
            this.draggingRelativeLocation.y = e.offsetY;
        }
    };
    WindowViewContainerComponent.prototype.onMouseUp = function (e) {
        this.isDragging = false;
    };
    WindowViewContainerComponent.prototype.onMouseMove = function (e) {
        if (this.isDragging) {
            this.left = e.clientX - this.draggingRelativeLocation.x;
            this.top = e.clientY - this.draggingRelativeLocation.y;
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
        __metadata('design:type', Boolean)
    ], WindowViewContainerComponent.prototype, "showBackground", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], WindowViewContainerComponent.prototype, "floating", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], WindowViewContainerComponent.prototype, "panelClass", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], WindowViewContainerComponent.prototype, "close", void 0);
    WindowViewContainerComponent = __decorate([
        core_1.Component({
            selector: 'window-view-container',
            template: `
              <div class="window-container"
                   [class.floating]="floating"
                   [class.fixed]="!floating"
                   [class.hide-container]="hideContainer"
                   [style.z-index]="zIndex">
                <div class="window-background" (click)="onClickBackground($event)" *ngIf="showBackground"></div>
                <div class="panel {{ panelClass }} {{ sizeClass }}"
                     [style.top]="top"
                     [style.left]="left"
                     (click)="onClickWindow()">
                  <div class="panel-heading"
                       (mousedown)="onMouseDown($event)"
                       (mouseup)="onMouseUp($event)"
                       (mouseleave)="onMouseUp($event)"
                       (mousemove)="onMouseMove($event)">
                    {{ heading }}
                    <ng-content select="[panel-heading]"></ng-content>
                    <a class="btn-close" (click)="closeWindow()"><span class="glyphicon glyphicon-remove pull-right"></span></a>
                  </div>
                  <div class="panel-body">
                    <ng-content></ng-content>
                  </div>
                  <div class="panel-footer">
                    <ng-content select="[panel-footer]"></ng-content>
                  </div>
                </div>
              </div>
            `,
            styles: [`
              .window-container,
              .window-background {
                position: fixed;
                overflow: auto;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
              }

              .window-container.hide-container {
                width: 0;
                height: 0;
              }

              .window-background {
                background-color: rgba(0,0,0,0.6);
                z-index: -1;
              }

              .window-container.fixed .panel {
                min-width: 20%;
                margin: 4% auto;
              }

              .window-container.floating .panel {
                min-width: 20%;
                position: fixed;
                box-shadow: 0px 6px 24px grey;
              }

              .panel.size-relative-large { width: 80%; }
              .panel.size-relative-middle { width: 60%; }
              .panel.size-relative-small { width: 40%; }
              .panel.size-large { width: 1080px; }
              .panel.size-middle { width: 720px; }
              .panel.size-small { width: 360px; }

              .panel-heading {
                text-align: center;
              }

              .btn-close {
                cursor: auto;
              }

              .window-container.floating .panel-heading {
                cursor: move;
              }
            `]
        }),
        __param(0, core_1.Optional()),
        __param(1, core_1.Optional()), 
        __metadata('design:paramtypes', [window_view_service_1.WindowViewService, window_view_layer_service_1.WindowViewLayerService])
    ], WindowViewContainerComponent);
    return WindowViewContainerComponent;
}());
exports.WindowViewContainerComponent = WindowViewContainerComponent;
//# sourceMappingURL=/lib/window-view-container/window-view-container.component.js.map