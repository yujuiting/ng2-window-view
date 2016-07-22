import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { WindowViewService } from '../window-view.service';

@Component({
  selector: 'window-view-container',
  templateUrl: 'window-view-container/window-view-container.component.html',
  styleUrls: ['window-view-container/window-view-container.component.css']
})
export class WindowViewContainerComponent {

  constructor(@Optional() private windowView?: WindowViewService) {}
  
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

  private top: number = 0;

  private left: number = 0;

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

  closeWindow() {
    this.close.emit({ target: this });
    if (this.windowView) {
      this.windowView.popWindow();
    }
  }
  
  private clickBackground($event: MouseEvent) {
    if ($event.currentTarget == $event.target) {
      this.closeWindow();
    }
  }

  private onMouseDown(e: MouseEvent) {
    if (this.floating) {
      this.isDragging = true;
      this.draggingRelativeLocation.x = e.offsetX;
      this.draggingRelativeLocation.y = e.offsetY;
    }
  }

  private onMouseUp(e: MouseEvent) {
    this.isDragging = false;
  }

  private onMouseMove(e: MouseEvent) {
    if (this.isDragging) {
      this.left = e.clientX - this.draggingRelativeLocation.x;
      this.top = e.clientY - this.draggingRelativeLocation.y;
    }
  }

}
