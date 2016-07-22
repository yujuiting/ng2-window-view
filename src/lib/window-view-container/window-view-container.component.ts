import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WindowViewService } from '../window-view.service';

@Component({
  selector: 'window-view-container',
  templateUrl: 'window-view-container/window-view-container.component.html',
  styleUrls: ['window-view-container/window-view-container.component.css']
})
export class WindowViewContainerComponent {

  constructor(private windowView: WindowViewService) {}
  
  @Input()
  heading: string = 'Untitled Window';

  @Input()
  size: string = 'M';

  @Input()
  canClose: () => void = () => { return true; };

  @Input()
  showBackground: boolean = true;

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
      this.close();
    }
  }

  close() {
    if (this.canClose()) {
      this.windowView.popWindow();
    }
  }

}
