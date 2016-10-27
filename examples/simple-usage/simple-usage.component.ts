import { Component, ComponentRef } from '@angular/core';
import { WindowViewService,
         WindowViewContainerComponent } from '../../../../src';
import { SimpleWindowComponent } from '../simple-window/simple-window.component';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-usage',
  template: require('./simple-usage.component.html'),
  providers: [WindowViewService]
})
export class SimpleUsageComponent {

  title: string = 'Simple Window';
  isFloatingWindow: boolean = false;
  showBackground: boolean = true;
  windowSize: string = 'small';
  panelClass: string = 'panel-default';

  constructor(private windowView: WindowViewService) {}

  openWindow() {
    this.windowView.pushBareDynamicWindow(SimpleWindowComponent, {
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
