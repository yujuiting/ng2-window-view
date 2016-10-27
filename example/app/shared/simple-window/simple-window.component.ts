import { Component, ViewChild } from '@angular/core';
import { WindowViewContainerComponent,
         WindowViewService } from '../../../../src';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-window',
  template: require('./simple-window.component.html')
})
export class SimpleWindowComponent {
  title: string = 'Simple Window';
  isFloatingWindow: boolean = false;
  showBackground: boolean = true;
  windowSize: string = 'small';
  panelClass: string = 'panel-default';

  @ViewChild(WindowViewContainerComponent)
  windowViewContainer: WindowViewContainerComponent;

  get position(): { x: number, y: number } { return this.windowViewContainer.position; }
  set position(value: { x: number, y: number }) { this.windowViewContainer.position = value; }

  constructor(private windowView: WindowViewService) {}

  openWindow() {
    // this.windowView.pushWindow(SimpleWindowComponent);
    this.windowView.pushUnwrapDynamicWindow(SimpleWindowComponent, {
      imports: [FormsModule]
    }).then( simpleWindow => {
      simpleWindow.title = this.title;
      simpleWindow.isFloatingWindow = this.isFloatingWindow;
      simpleWindow.showBackground = this.showBackground;
      simpleWindow.windowSize = this.windowSize;
      simpleWindow.panelClass = this.panelClass;
    });
  }

}
