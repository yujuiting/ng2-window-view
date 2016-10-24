import { Component, ComponentRef } from '@angular/core';
import { WindowViewService } from '../../../../src';
import { SimpleWindowComponent } from '../simple-window/simple-window.component';

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
    let simpleWindow: SimpleWindowComponent = this.windowView.pushWindow(SimpleWindowComponent);
    simpleWindow.title = this.title;
    simpleWindow.isFloatingWindow = this.isFloatingWindow;
    simpleWindow.showBackground = this.showBackground;
    simpleWindow.windowSize = this.windowSize;
    simpleWindow.panelClass = this.panelClass;
  }

}
