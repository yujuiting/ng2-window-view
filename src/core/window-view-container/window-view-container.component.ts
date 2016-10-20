import { Component, Input, Output, EventEmitter, Optional, OnInit, OnDestroy } from '@angular/core';
import { WindowViewService } from '../window-view.service';
import { WindowViewLayerService } from '../window-view-layer.service';

@Component({
  selector: 'window-view-container',
  template: `
  <div class="window-container"
       [class.floating]="floating"
       [class.fixed]="!floating"
       [class.hide-container]="hideContainer"
       [style.z-index]="zIndex">
    <div class="window-background" (click)="onClickBackground($event)" *ngIf="showBackground"></div>
    <div class="panel {{ panelClass }} {{ sizeClass }}"
        [style.top]="top + 'px'"
        [style.left]="left + 'px'"
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
})
export class WindowViewContainerComponent implements OnInit, OnDestroy {

  /**
   * Window title.
   * 
   * Default: 'Untitled Window'
   */
  @Input()
  heading: string = 'Untitled Window';

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
  @Input()
  size: string = 'M';

  /**
   * Prevent display transparent background.
   * 
   * Default: true
   */
  @Input()
  showBackground: boolean = true;

  /**
   * Floating window, can be drag.
   * 
   * Default: false
   */
  @Input()
  floating: boolean = false;

  /**
   * Panel class.
   * 
   * Default: 'panel-default'
   */
  @Input()
  panelClass: string = 'panel-default';

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  zIndex: number = 10;

  get position(): { x: number, y: number } { return { x: this.left, y: this.top }; }

  set position(value: { x: number, y: number }) {
    this.top = value.y;
    this.left = value.x;
  }

  get hideContainer(): boolean { return this.floating && !!this.windowViewLayer; }

  private top: number = 0;

  private left: number = 0;

  private isMouseDown: boolean = false;

  private isDragging: boolean = false;

  private draggingRelativeLocation: { x: number, y: number } = { x: 0, y: 0 };

  private get sizeClass(): string {
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
  }

  constructor(@Optional() private windowView: WindowViewService,
              @Optional() private windowViewLayer: WindowViewLayerService) {}

  ngOnInit() {
    if (typeof this.size !== 'string') {
      throw new Error('[WindowViewContainerComponent] property `size` has to be string.');
    }

    if (this.windowViewLayer) {
      this.windowViewLayer.add(this);
    }
  }

  ngOnDestroy() {
    if (this.windowViewLayer) {
      this.windowViewLayer.remove(this);
    }
  }

  closeWindow() {
    this.close.emit({ target: this });

    if (this.floating && this.windowViewLayer) {
      return;
    }

    if (this.windowView) {
      this.windowView.popWindow();
      return;
    }
  }

  private onClickWindow() {
    if (this.floating && this.windowViewLayer) {
      this.windowViewLayer.bringToTop(this);
    }
  }

  private onClickBackground($event: MouseEvent) {
    if ($event.currentTarget === $event.target) {
      this.closeWindow();
    }
  }

  private onMouseDown(e: MouseEvent) {
    this.isMouseDown = true;
    if (this.floating) {
      this.draggingRelativeLocation.x = e.offsetX;
      this.draggingRelativeLocation.y = e.offsetY;
    }
  }

  private onMouseUp(e: MouseEvent) {
    this.isMouseDown = false;
    this.isDragging = false;
  }

  private onMouseMove(e: MouseEvent) {
    if (this.isDragging) {
      this.left = e.clientX - this.draggingRelativeLocation.x;
      this.top = e.clientY - this.draggingRelativeLocation.y;
    } else if (this.isMouseDown && this.floating) {
      this.isDragging = true;
    }
  }

}
