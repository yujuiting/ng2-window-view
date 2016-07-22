import { Component } from '@angular/core';
import { WindowViewContainerComponent } from '../../../';
import { WindowViewService } from '../../../';

@Component({
  moduleId: module.id,
  selector: 'simple-window',
  templateUrl: 'simple-window.component.html',
  directives: [WindowViewContainerComponent]
})
export class SimpleWindowComponent {
  constructor(private windowView: WindowViewService) {}
  
  title: string = 'Simple Window';
  isFloatingWindow: boolean = false;
  showBackground: boolean = true;
  windowSize: string = 's';
  panelClass: string = 'panel-default';

  openWindow() {
    this.windowView.pushWindow(SimpleWindowComponent);
  }
}