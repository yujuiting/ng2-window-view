import { Component, Input, Output, EventEmitter, Optional } from '@angular/core';
import { WindowViewService } from '../window-view.service';

@Component({
  selector: 'window-view-container',
  templateUrl: 'window-view-container/window-view-container.component.html',
  styleUrls: ['window-view-container/window-view-container.component.css']
})
export class WindowViewContainerComponent {

  constructor(@Optional() private windowView?: WindowViewService) {}
  
  @Input()
  heading: string = 'Untitled Window';

  @Input()
  size: string = 'M';

  @Input()
  showBackground: boolean = true;

  @Input()
  floating: boolean = false;

  @Input()
  panelClass: string = 'panel-default';

  @Output()
  close: EventEmitter<any> = new EventEmitter();

  protected top: number = 0;
  protected left: number = 0;
  protected isDragging: boolean = false;

  private draggingRelativeLocation: { x: number, y: number } = { x: 0, y: 0 };

  get sizeClass(): string {
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
  
  clickBackground($event: MouseEvent) {
    if ($event.currentTarget == $event.target) {
      this.closeWindow();
    }
  }

  closeWindow() {
    this.close.emit({ target: this });
    if (this.windowView) {
      this.windowView.popWindow();
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
      this.left = e.pageX - this.draggingRelativeLocation.x;
      this.top = e.pageY - this.draggingRelativeLocation.y;
    }
  }

}
